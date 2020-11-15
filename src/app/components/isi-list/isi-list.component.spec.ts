import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IsiListComponent } from './isi-list.component'

describe('IsiListComponent', () => {
  let component: IsiListComponent
  let fixture: ComponentFixture<IsiListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
