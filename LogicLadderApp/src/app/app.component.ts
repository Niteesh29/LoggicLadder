import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultilevelDropdownComponent } from '../components/multi-level-dropdown/multilevel-dropdown';
import { OtpVerificationComponent } from '../../projects/otp-verification/src/public-api';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MultilevelDropdownComponent,OtpVerificationComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LogicLadderApp';

  data = [
    {
      "id": 1,
      "name": "Org name 1"
    },
    {
      "id": 2,
      "name": "Org name 2",
      "child": [
        {
          "id": 3,
          "name": "Facility name 1"
        },
        {
          "id": 4,
          "name": "Facility name 2",
          "child": [
            {
              "id": 5,
              "name": "Room name 1"
            },
            {
              "id": 6,
              "name": "Room name 2",
              "child": [
                {
                  "id": 7,
                  "name": "Room name 3"
                },
                {
                  "id": 8,
                  "name": "Room name 4",
                  "child": [
                    {
                      "id": 9,
                      "name": "Room name 5"
                    },
                    {
                      "id": 10,
                      "name": "Room name 6"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "Org name 11"
    },
    {
      "id": 12,
      "name": "Org name 12"
    },
    {
      "id": 13,
      "name": "Org name 13",
      "child": [
        {
          "id": 7,
          "name": "Room name 3"
        },
        {
          "id": 8,
          "name": "Room name 4",
          "child": [
            {
              "id": 9,
              "name": "Room name 5"
            },
            {
              "id": 10,
              "name": "Room name 6",
              "child": [
                {
                  "id": 5,
                  "name": "Room name 1"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}

