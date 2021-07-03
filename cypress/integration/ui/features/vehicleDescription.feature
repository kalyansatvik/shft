Feature: Shift - Vehicle Description Page

        Vehicle Description Page Automation
        Scenario: Validate Vehicle Description Page
                Given I navigate to shift home page with required login
                And I click on Shop Cars link
                And I select any random car
                Then I validate 'Free 7-day returns' text
                And I validate 'Overview' section
                And I click on 'See all specs' link
                And I validate Modal 'Vehicle Specs'
                And I close Modal
                And I validate 'Features' section
                And I click on 'See all features' link
                And I validate Modal 'Safety'
                And I close Modal
                And I validate 'History' section
                And I validate 'Other cars you might like' section
                And I validate 'Frequently Asked Questions' section
                And I validate 'Ask us a question about this car' section
                And I validate 'See full FAQ' link