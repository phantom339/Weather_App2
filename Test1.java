
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.safari.SafariDriver;
import org.testng.annotations.Test;
import org.testng.Assert;

public class Test1 {

    @Test
    public void testDehradunTemperature() {
        WebDriver driver = new SafariDriver();
        driver.get("https://phantom339.github.io/Weather_App2/");
        driver.manage().window().maximize();

        WebElement locationInput = driver.findElement(By.id("locationInput"));
        locationInput.sendKeys("dehradun");

        WebElement searchButton = driver.findElement(By.id("searchButton"));
        searchButton.click();

        // ... (Wait for temperature element to appear)

        WebElement temperatureElement = driver.findElement(By.className("temperature"));
        String actualTemperature = temperatureElement.getText();

        // Replace with the expected temperature based on your source
        String expectedTemperature = "29°C";

        Assert.assertEquals(actualTemperature, expectedTemperature, "Temperature mismatch for Dehradun");

    }
}
