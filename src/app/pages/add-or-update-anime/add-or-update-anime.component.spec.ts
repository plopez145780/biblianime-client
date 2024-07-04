import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateAnimeComponent } from './add-or-update-anime.component';

describe('AddOrUpdateAnimeComponent', () => {
  let component: AddOrUpdateAnimeComponent;
  let fixture: ComponentFixture<AddOrUpdateAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrUpdateAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrUpdateAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
