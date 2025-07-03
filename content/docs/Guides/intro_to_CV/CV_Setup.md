---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4PFC44%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCJnlZJviymlWp1vR8WhxZOvO2X7gJYs2gpm%2Fl5E9kI5AIhAONTpi2o2PdAcIU02tPJqo7QWZMrh7gb4%2BQzVlaAS%2Bo4KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlMIFFV0r9O7SGi%2FMq3APrVshjXORIOx%2FkzCPA2ESyd3OIwVfvUnPpftSsJ4iHr4ram6%2FkvQADfFNKM%2BY6gP13dJOL2A3nurk0GwOvrJVV1j86BayQgCtuupYr7hmlE%2FJVXhqniwvUKebT9bRxdsOGcI80EP8T89yE%2BZwdqaVZNcaarcz6L5o0tsvWAnoWZyMbBzehGFU6B43tWrKPQcIlrVGKK2VGg8wpTJESru754GyROlSMfHwn7bmnFQuz%2BRFtmI610DuME4YZ4HahqFYhKf1sT1onv7xUQ5ZRO0BkXJdqE6Bf297acPztUvCrOqDiHcVVM1um%2FmOHqNb%2FIVidmo4AEV0OiO3ke874AHJE%2BIh7Ak22QVyG4eyhMJY1ZLe2mATqHDezYYdXzyn8bjWhS3OYXYWKfCdRVw0hhT2f1pzcInn1sdsOaAjoujz8BCpkLSMYgOij1LlyyGmAVHzNSPW6rx9Rwejw7ZTOFxa5t22yYlCH77Mjt7DzxPYCmUlj3bcisQJ25w5rv1chQJ%2FkEml1re%2Fh0mZt%2B%2B%2Ba%2FMQSyjLc7a%2FM7rj2lt6aVVI68tO0ngRxg77AS1Lzku9X3JzANBhvtjT2MPZWqKkOJO49agm4F4Iws5bs2nWBRtGe4uz22ksSjjbNeNFFCjDRr5jDBjqkAShzbyPfkrxNJ3ei2JTf80n6yuDt%2BBRH6XeR8pDZ%2B9ZeM1i9qgBCMd9OFLzRNWHunnq395JxzlwPtUoqU3YhHIYYE8Y3x97pwFufW8C%2FEyBOaSSsSYJc9SI8w93FvanK7RRUbilSG5FV15survrlorkJwoqXOeDb%2BQZa2PL%2FEBl5n61Dympuwa9A72Ey8CAo0%2FBaOw4EFyib1X%2F9XECK1zKYQAHc&X-Amz-Signature=a6732a595f5173492f5626af23cf4c358f465de40e41d06e6f659ba9677aa792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJH4NC5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFYa2c1oFMQXLGQ5n5T9o3a5pXhKxlRSAuQJtAQ0rlpBAiEAlpizIwZ5jw29h6XnhoNYqN1WFOjmv1V1iQdLkbEmGuwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI%2F8%2BhsPnDMQWtlgCrcA5K4dtU7By9SSkMbkNl2MYsOKcxxHVtCc%2BYgqIpD3HVJuu65WTOleE%2F4h63ZWamub3%2F6%2FSPGfKuikuNcXVjPfknGZeFSZFQTcqYNGvcLm9XOArtlO9vniqKPf79Qmm7z2%2FItewYHTOMSrfId%2B99D0c4mEhDypKx%2BkuFKF1D%2BUxKIvjG97ZjbPZSwQE0OhUdqywWD7jwPv2hNO6XCyJASC4lbjqN6IE4Xbr2EkCVFtzjVRso8J1g3c1BTdiFCdvVd2Fa623orXz47oYroojHSu3ingtGZr%2FDFOfRCF85E%2Bin3p4djZRjKXx5q9Z1LqzRX2IAQkros%2F7J1H5Qim9uYJl1ccF7NrMpa1DhDbuG2%2FtEd%2F6B9YlsUTw6slXT04yDfiz5%2BdxO3AchpruyrDibQ1tALyV2QQNLCpMUOHpbPtHearhcUJne8BF2NSbWHjQ9C4V0rNjNJSG%2F1mv%2FeG75m%2BFBXBikO4jlq%2BFPerqt%2BCtC1w2aM0t3zsthpI2fLyDR75OUlFrMDCOrU21ryDkjMtJ%2FzH0OwwrY0MLj0Wps94zUlgAuwxWTjQ50lpY1CPugITSEYdsMwflOLHPZHTvIZzvAEhipORNhTA1cSVK55yA%2FB8uHR%2BqhP1HwwrEUMMP6vmMMGOqUBH27KsMXkVug95dfSoEkcS%2BX%2BPeNf3hWeGSNcxMbq0yYRL8tAuyVt%2F5I%2BLV1B3Z7V%2FSrkzNT6j0JuaciJNNjvjC7vQexmgVyAup1FWx%2BiBWCdybcjSALRmpps9VT9lNYBAVGMEf9hZ42bPFV3z6CjNrU7s%2BIcJGSqCjpgygwfmAk26JJPYe3fWmXquO6OGyRlpxKoDjnrcPn4nUMuI2oNKO%2ByL7Mz&X-Amz-Signature=00f565b2f90ad5971c05a49e812a7c12b59e197d42bdebcc51318b3dd2c548e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
