from sqlite3 import IntegrityError
from flask import Blueprint, render_template, request, url_for, redirect, flash
from flask_login import login_required, current_user
from io import TextIOWrapper
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import null
from .models import Student, ImportData
import csv



views = Blueprint('views', __name__)

db = SQLAlchemy()

callCounter = 0

@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method =='POST':
            if request.form['submit_file'] == "Upload":
                csv_file = request.files['file']
                csv_file = TextIOWrapper(csv_file, encoding='utf-8')
                csv_reader = csv.reader(csv_file, delimiter=',')
                next(csv_reader, None)
                for row in csv_reader:
                    if(row[0] != ""):
    

                        student = Student(tnumber=row[0], firstname=row[1], middlename=row[2], lastname=row[3], 
                        term=row[4], level=row[5], pprogram=row[6], 
                        ppname=row[7], pcollege=row[8], 
                        pdept=row[9], pdeptdesc=row[10], sprogram=row[11], spname=row[12], scollege=row[13], sdept=row[14], 
                        sdeptdesc=row[15], decision=row[16], admit=row[17], saddress1=row[18], saddress2=row[19], city=row[20], state=row[21], 
                        zip=row[22], phonearea=row[23], phonenum=row[24], phonenumex=row[25], email=row[26], ualremail=row[27], ethnicity=row[28], sex=row[29], admission=row[30], 
                        studenttype=row[31])
                        db.session.add(student)
                        db.session.commit()
               

                        importData = ImportData(tnumber=row[0], firstname=row[1], middlename=row[2], lastname=row[3], 
                        term=row[4], level=row[5], pprogram=row[6], 
                        ppname=row[7], pcollege=row[8], 
                        pdept=row[9], 
                        admit=row[17], saddress1=row[18], saddress2=row[19], city=row[20], state=row[21], 
                        zip=row[22], phonearea=row[23], phonenum=row[24], phonenumex=row[25], email=row[26], ualremail=row[27], 
                        studenttype=row[31])
              
                    db.session.add(importData)
                    db.session.commit()
       
            return redirect(url_for('views.home')) 
    return render_template("home.html", user=current_user)


@views.route('/caller', methods=['POST'])
@login_required


def caller():
   

    if request.method =='POST':
        global callCounter 
        nextStudent()
        length = db.session.query(ImportData.tnumber).count()
        firstName = db.session.query(ImportData.firstname).limit(length)[callCounter]
        lastName = db.session.query(ImportData.lastname).limit(length)[callCounter]
        phoneArea = db.session.query(ImportData.phonearea).limit(length)[callCounter]
        phoneNum = db.session.query(ImportData.phonenum).limit(length)[callCounter]
        phoneNumEx = db.session.query(ImportData.phonenumex).limit(length)[callCounter]
        

            
    
    return render_template("caller.html", user=current_user, studentFName = firstName, studentLName = lastName, studentPhoneArea = phoneArea, studentPhoneNum = phoneNum, studentPhoneEx = phoneNumEx)
    
def nextStudent():
    global callCounter
    callCounter = callCounter+1


@views.context_processor
def context_processor():
    return dict(key='value', nextStudent = nextStudent)

@views.route('/sra_admin', methods=['GET', 'POST'])
@login_required
def sra_admin():
 
    return render_template("sra_admin.html", user=current_user)

