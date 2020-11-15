import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IsiEditComponent } from './isi-edit.component'

describe('IsiEditComponent', () => {
  let component: IsiEditComponent
  let fixture: ComponentFixture<IsiEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiEditComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
