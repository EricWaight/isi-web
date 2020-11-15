import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IsiCreateComponent } from './isi-create.component'

describe('IsiCreateComponent', () => {
  let component: IsiCreateComponent
  let fixture: ComponentFixture<IsiCreateComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiCreateComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiCreateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
