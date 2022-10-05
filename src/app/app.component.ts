import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "./apixu.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public temp:any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
  
      this.weatherData = data;
      this.temp=(this.weatherData.current.temperature)+"°C";
      console.log(this.weatherData);
      console.log(this.temp);
    
    
    });
  }
  }
  