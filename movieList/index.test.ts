import { Builder, Capabilities, By} from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Adding movie to page', async () => {
    let searchBar = await driver.findElement(By.xpath('//input'))

    await searchBar.sendKeys('Avengers')
    
    await driver.sleep(1500)

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1500)
})

test('Crossing off movie', async () => {
   driver.findElement(By.xpath('//span')).click()

   await driver.sleep(1500)
})

test('Remove movie', async () => {
    driver.findElement(By.xpath(`//button[text()='x']`)).click()

    await driver.sleep(1500)
})