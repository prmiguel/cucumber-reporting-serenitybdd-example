package net.serenitybdd.demos.todos.cucumber;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        plugin = {
                "pretty",
                "json:reports/cucumber/cucumber-test-suite.json"
        },
        features = "src/test/resources/features"
)
public class CucumberTestSuite {}
