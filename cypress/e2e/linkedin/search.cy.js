/// <reference types="cypress" />

require('cypress-xpath');

describe('Login Linkedin', () => {
    const url = 'https://www.linkedin.com/search/results/people/?geoUrn=%5B%22105015875%22%5D&keywords=manager%20mobile&origin=FACETED_SEARCH&page=19&sid=X3t';
    const xpathFirstButton = "(//main//button[contains(@aria-label,'à rejoindre votre réseau')])";
    const xpathPreConfirmButton = "//button[@aria-label='Other']";
    const xpathPreConfirmValidButton = "//button[@aria-label='Se connecter']";
    const xpathConfirmButton = "//div[@id='artdeco-modal-outlet']//button[@aria-label='Envoyer maintenant']";

    let indexSelectButton = 1;

    it('search button add', () => {
        cy.setCookies().then(() => {
            cy.visit(url).then(async () => {
                await scrollToBottom();
            });
        })
    })

    async function scrollToBottom() {
        console.log("wait start");
        cy.wait(3000).scrollTo("bottom").then(async _ => {
            console.log("wait is done");
            cy.wait(5000);
            await scrap();
        });
    }

    async function scrap() {
        cy.xpath("boolean(" + xpathFirstButton + "[" + indexSelectButton + "])", {
            timeout: 5000
        }).then(async (isPresent) => {
            console.log("scrap result: " + isPresent);
            if (!isPresent) {
                console.log("button (add user) not found !");
                await nextPage();
                return;
            }
            cy.xpath(xpathFirstButton + "[" + indexSelectButton + "]").click();
            cy.wait(1500);

            await tryConfirmBox();

            const checkEmailXpath = "//input[@name='email']"
            const closeXpath = "//div[@role='dialog']//button[@aria-label='Ignorer']"

            await cy.xpath("boolean(" + checkEmailXpath + ")", {
                timeout: 5000
            }).then(async (isPresent) => {
                console.log("checkEmailBox result: " + isPresent);
                if (!isPresent) {
                    console.log("email checker not found !");
                    // email checker not found
                    // add user
                    cy.xpath("boolean(" + xpathConfirmButton + ")", {
                        timeout: 5000
                    }).then(async (isPresent) => {
                        console.log("result: " + isPresent);
                        if (!isPresent) {
                            console.log("button confirmation (add user) not found !");
                            await scrap();
                            return;
                        }
                        await cy.xpath(xpathConfirmButton).click()
                        cy.wait(2000);
                        await scrap();
                    });
                    return;
                }
                console.log("email checker found !");

                cy.xpath(closeXpath).click();
                indexSelectButton += 1;
                cy.wait(2000);
                // do some async task
                await scrap();
            });
        });
    }

    async function tryConfirmBox() {
        cy.xpath("boolean(" + xpathPreConfirmButton + ")", {
            timeout: 5000
        }).then((isPresent) => {
            console.log("tryConfirmBox result: " + isPresent);
            if (!isPresent) {
                console.log("button pre-confirmation (add user) not found !");
                return;
            }
            console.log("button pre-confirmation (add user) click !");
            cy.xpath(xpathPreConfirmButton).click();
            cy.wait(2000);
            cy.xpath(xpathPreConfirmValidButton).click();
            cy.wait(2300);
        });
    }

    async function nextPage() {
        indexSelectButton = 1;
        const xpathNextPage = '//button[@aria-label="Suivant"]';
        cy.xpath("boolean(" + xpathNextPage + ")", {
            timeout: 5000
        }).then((nextPageExist) => {
            console.log("result: " + nextPageExist);
            if (!nextPageExist) {
                console.log("button next page is not present !");
                return;
            }
            cy.xpath(xpathNextPage).click();
            cy.wait(10000);
            scrollToBottom();
        });
    }
})
