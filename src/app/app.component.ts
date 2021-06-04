import { Component,ViewChild,ElementRef } from '@angular/core';

import {jsPDF} from 'jspdf';  
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //contact
  name:any;
  email:any;
  address:any;
  mobile:any;
  //personal
 gender:any;
  dob:any;
  nationality:any;
  j=false;
  // skills
 
  level:any;
  i:any;
  public skillItem: string | any;
  skillList: any=[] ;


  addSkill()
  {
   if(!(this.skillItem=='') )
      {
        this.skillList.push(this.skillItem);
        this.skillList.push(this.level);
        this.level='';
        this.skillItem='';
       
        console.log(this.skillList);
        
      }
    
  }
  deleteSkill(i: any)
  {
    this.skillList.splice(i,2);
  }
  
//interest
interest:any;
interestList:any=[];


addInterest()
  {
   if(!(this.interest=='') )
      {
        this.interestList.push(this.interest);
        this.interest='';
       
        console.log(this.interest);
        
      }
    
  }
  deleteInterest(i: any)
  {
    this.interestList.splice(i,2);
  }
  
//objective
objective:any;
//education

educationList:any=[];
institution:any;
course:any;
grade:any;
year:any;


addEducation()
  {
   if(!(this.institution=='') )
      {
        this.educationList.push(this.institution);
        this.educationList.push(this.course);
        this.educationList.push(this.grade);
        this.educationList.push(this.year);
        this.institution='';
        this.course='';
        this.year='';
        this.grade='';
       
        console.log(this.educationList);
        
      }
    
  }
  deleteEducation(i: any)
  {
    this.educationList.splice(i,4);
  }
//projects
projectList:any=[];
projectTitle:any;
duration:any;
desc:any;

addProject()
  {
   if(!(this.projectTitle=='') )
      {
        this.projectList.push(this.projectTitle);
        this.projectList.push(this.duration);
        this.projectList.push(this.desc);
        this.projectTitle='';
        this.duration='';
        this.desc='';
       
        console.log(this.projectList);
        
      }
    
  }
  deleteProject(i: any)
  {
    this.projectList.splice(i,3);
  }
//certifications
certName:any;
certificationList:any=[];


addCertificate()
  {
   if(!(this.certName=='') )
      {
        this.certificationList.push(this.certName);
        this.certName='';
       
        console.log(this.certificationList);
        
      }
    
  }
  deleteCertificate(i: any)
  {
    this.certificationList.splice(i,1);
  }


  //extra
  extra:any;
extraList:any=[];


addExtra()
  {
   if(!(this.extra=='') )
      {
        this.extraList.push(this.extra);
        this.extra='';
       
        console.log(this.extraList);
        
      }
    
  }
  deleteExtra(i: any)
  {
    this.extraList.splice(i,1);
  }
  //section1

  //section2
  secName2:any;
  secDes2:any;
  secList2:any=[];
  visible2=false;
  Add2()
  {
    this.visible2=true;
  }
  addSec2()
    {
      
     if(!(this.secName2=='') )
        {
          this.secList2.push(this.secName2);
          this.secList2.push(this.secDes2);
          this.secName2='';
          this.secDes2='';
         
          console.log(this.secList2);
          
        }
      
    }
    deleteSec2(i: any)
    {
      this.secList2.splice(i,2);
    }  
//submit
isfinal:any=false;
  onsubmit()
  {
    this.j=true;
    console.log(this.j);
  }
  edit()
  {
    this.j=false;
    console.log(this.j);
  }


//////////////////////////////
@ViewChild('content',{static:false}) el!:ElementRef;
makepdf()
{
  let pdf=new jsPDF('p','pt','a4');
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>
    {
      pdf.save(this.name+"_resume"+".pdf");
    }
  })

}

color:any='darkslateblue';
     
     colorList=['green','blue','darkslateblue','slateblue','dodgerblue','darkseagreen','sienna','rebeccapurple','slategray','springgreen','steelblue','tomato','teal','forestgreen','lightseagreen','mediumaquamarine','mediumseagreen','skyblue','peru','cadetblue','chocolate','cornflowerblue','crimson','darkgoldenrod','olive'];
getcolor() {
  return this.color;
  }

url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRfNdB9dzu-RcfNl-jY-KBXoBBHYjqEWETfRh_YVZ4YLuZX_8ghDGRbybruF7nnEu8Hc&usqp=CAU';
  //image
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}
}




