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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNLHNSP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDCiq%2BHoKIWMKvc17diZJxJwcvvoAl2GjgsSgrOLjVQQgIhAIJSk%2Fz2CsmYBPRACjfywk45NhyPCgkEjP6aDZP23ywPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEwFYB8CMLFVqfSQAq3AMiFwTBAhtyezchrI50b9tF627TnMelar6vaAZ0BGpwdLK%2Bse1WD9ZjDamh39nVb6A6bunOv2%2Ftyxl%2BvglOCCsVeMYv32FNeFUtp6UeUAmunancAr%2FTQXcqFa6H%2Bv%2BOBiMD79N5Ae926vd32NViOPZBZUTlQh5UQGWVSIeyhoFzG%2F3ujq%2FKq41wVojRiTF4BzvG7GxEVRRAzIGgnisMprYNRUrwDRsCdVMkiAkA1jbgZbJA%2BT9LTVx1MeGrSIpwctY%2FUb4p6RqoJMQ17PgBDapdSfIf9hTBjkDrX5r57GLTYxBDFjkytHZbYR4qoe8O9Fu2HHd%2FwY0txKBuGI%2BeMYxKio%2F4mtN6SFtzcg2u%2Ft%2BkJwGBsBlteCmkYsL24v6pmwd%2Blb7YiV6a4G01o0Sd5uVE%2BdSkvySdQXE3eGYP2qIsFTFKxHZbupsNrq5z2X%2FTzJ2iI4uFxDhTZ2OrF8FI4O7SisHPEf03lFQAzBu%2FUQMYFa3p9MCrAqgP5Rag9VrKoNM02IAUnvs9R2N44PN3vEeWtdY6hwHYfHF%2FBSA225Y9j1lgfq%2Bp%2BJZ4Cp6%2BNd90DNqZxwfKkrhIf4aVnIUvku1sugk7KbvDYQsvnJnTmVSLZq9omueifWsvXI6AJTDgna%2B%2FBjqkAZp6CEkvIpVQYFxa%2BPadymq09uZTeMsjvMaXYHBxq8mJf5k3O%2BhA%2Fgv6dRMlEgzmdBwSzQC%2FGpEzisy8D%2FJBmJR5R6iV0%2Fd2zR8vqBi7Boa7NwyfymOXZmsz0K0TupQXKOlHpvFK5XEKmex28cWxJvFa45PfeTAvpspwEZysUgHhaUhDzVF0GS2SOp3jIoqfEtrGAevpgfLDQy2CvQc%2FnM%2B4HHSV&X-Amz-Signature=05b38f6f03a69a61a7c37c36034b3697882fb9b492bb8113e43bd729ba36d533&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTYK2DT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDK4YcFcg%2BTn%2FbG%2FaO%2FZ6cUemZNa9f8aTkCHCx97KUxPwIgTcwnE2z7uyT1u8D%2B9YUi0mEKzKPlua%2BNPVgf%2FAG1dU0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOy3%2F7f9YXCfUciPryrcAzuepGMIu%2FtnfMP916zDUm%2Bsp5W5gCuM8HspgD2wAleTf906yl4ii1hNCIlXni%2FH%2FKKS6wJ5feL4Nrtlc4R0pWWooqfpPs%2Bq6Dyx6NKYD5kHbtTUG1VKNf%2B3YOpUjXTwBrzb1%2BaASqG%2BvEtKfCFTOA1yWshXtGxwJ5JVH1%2Fmd4Uyz3BDHkQtqrQZfiQ0jtiYKbAi225PFmiZAPrqzZuw3qp18YK06fJe7Nq%2BQ5fSvCC6v1Al%2Bcg1BNQP%2FSXhs3N8Ruyp%2FL0eYdYF%2FQyQrJNatbLLaFBOijfPSwI811NbnCqsyXk5D7rfEY8OAJ8iM33iSxvYSVIk0VWWV0I6tBRhbHtixyJHxaWIoFX1q5KV1rigoN4xOKdTRJjibqlFnNPsy%2BZ4Fkv1rOXfW5%2FtBv3C8nuTQiudbYfizSRoybaRbj1EKCT1EdQb9VKJ7GX3MuYOeZZyQA1Qiqno2jRXMfTETPcVRQgDQwX5mUOyTwHs6Wdmz0WYew4BqeqmQtl4q6yLbuNxonngByCSzKiN4bdLl%2BUPx8IoslY%2BryO%2BUSNpyMmjMHXRCKbdgakUDWNSw7gorGoquWP3oXCyw7%2BpVqqVpyadwJDp0EMghMvaLJkpWq%2Bf8zFa9KtsB%2FMzPgazMLadr78GOqUB%2BSHVSRa2yYWeheUInNUCQa4TF6DcUJnhW9LJ0HNRGFR52ioHteAhQ4tmf%2Fs%2Bp6fJW7btegh50%2BUldOsYwxxrI%2BVtWTurDQRA0BNGIUGVcPR4DVgVO4TiBT2cNSwzJKZbwa%2Bbx4fdY73huCZ8DMNiGLPEFR%2Bnms8ip3N9ByvsxYZ9bKx9q7gHlAPa6AfrEzh99kizG%2BORNJITzoTWl5MX1HOpQb75&X-Amz-Signature=5de4c56a37b9218402c06ec61b53acab97cc9743815a85f2f698e77bd7d1ed08&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
