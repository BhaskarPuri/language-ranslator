from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Set up the Chrome driver (replace with appropriate driver for your browser)
driver = webdriver.Chrome()

# Open the website
driver.get("D:/web/public/index.html")
time.sleep(2)
# Find the source text area and enter the source text
source_text_area = driver.find_element(By.ID, "sourceText")
source_text_area.send_keys("where are you")
time.sleep(2)
# Select the source language
source_language_select = Select(driver.find_element(By.ID, "sourceLanguage"))
source_language_select.select_by_value("en")  # Select English as the source language
time.sleep(2)
# Select the target language
target_language_select = Select(driver.find_element(By.ID, "targetLanguage"))
target_language_select.select_by_value("te")  # Select French as the target language
time.sleep(2)
# Click on the Translate button
translate_button = driver.find_element(By.ID, "button")
translate_button.click()
time.sleep(2)
# Wait for the translation to be completed and retrieve the translated text
translated_text_area = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, "translatedText")))
translated_text = translated_text_area.get_attribute("value")
time.sleep(2)
speech_icon1 = driver.find_element(By.ID, "icon-1")
speech_icon1.click()
time.sleep(3)
# Click on the speech icon for the translated text to trigger text-to-speech
speech_icon2 = driver.find_element(By.ID, "icon-2")
speech_icon2.click()
time.sleep(3)
# Close the browser
driver.quit()
