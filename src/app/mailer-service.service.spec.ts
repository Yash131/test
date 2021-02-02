import { TestBed } from '@angular/core/testing';

import { MailerServiceService } from './mailer-service.service';

describe('MailerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailerServiceService = TestBed.get(MailerServiceService);
    expect(service).toBeTruthy();
  });
});
