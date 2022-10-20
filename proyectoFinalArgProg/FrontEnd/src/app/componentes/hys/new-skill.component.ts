import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje:number;

  constructor(private skillS: SkillService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Skill(this.nombre,this.porcentaje);
    this.skillS.save(expe).subscribe(
      data=>{alert("Skill añadido");
      this.router.navigate(['']);
    },err =>{alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
