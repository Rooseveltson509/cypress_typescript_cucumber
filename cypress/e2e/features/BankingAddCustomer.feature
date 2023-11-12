@w2a
Feature: xyz banking application on w2a site

    #  runs for every scenario
        Background: invoke application
            Given Invoke application Home page

        @add
        Scenario Outline: Add customer Bank manager
            Given Add new userLoginTests
              And firstName "<fname>"  and lastName "<lname>" and ZipCode "<pcode>"
        Examples:
                  | fname | lname | pcode |
                  | Roose | test  | 93200 |