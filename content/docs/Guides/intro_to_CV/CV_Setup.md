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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2WT72J%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAfW6bboUXVLkxFrpxDq8dgcifI3YKn66tTaD7QPrxxzAiEAih7yd%2FwOtXOgI5UOpWhhxCvG6UynQys3sQD6frtVY%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzLN3NhTulpFJFYfircA7MrfstPy6lgRs8wq7jVYVWUiisfiZXcs0m4LBfEFxoaCOCinyrjEe2Q2rNlw2qPk741EsTRr2W%2BHoNQpjMYZ9SoPC6D65Xd1Yax382Ej3UgHdCl2rxB1JuWftW6hfNLQsGwlkW9NnnrfCY1rXUY5YeRrPlV8wjk%2BKJMaTi0azP8hkESoeqi9DMeBQgN8EJo2kLST7DJhZSetIWRqvgSn1g1fqsM2iSETUwhzDxSA4Edlm%2BcZU%2BlLKU6qDTqV9Zz4VJv292TdRy5bgVHjPbZnBsy%2B6xMWI5Cl6SusPflIE6gsRCVuazCLiv7JV8gcn1S9yy3CdFzd%2FcXa91AIL6LnC%2BWYoFAUVc5HXWzHCLKvRcPSbzbj7NjPpMnih7YWxtlMKNfJ2v2TjruUcCREGXwDpxB8QWBTtPwFb%2FV8O1U9bom5C6o%2BLvjvPn8N6WSSi9Hn%2FuTF9yvlYV%2Fbv5x%2BVhoHYB9GNHyO8nU5WF9YyoHH%2Bp25OBlTQYd5o3fXiV5Xl%2FdFGZ0DuIGejKXZlIJHFAQPfbhSWLgoBLcK8Y%2BJIhEtTKp%2FzjQs3S4ai736AOzZUVtJDy%2BtdWwLuq1lRGd0QBhJg6jKM1mJnksxznHKSi8XKYGo17wFPGFio7yEm4SMJLJlMAGOqUB6czfmfuA7daGtAzymvm5Zb3PosYwIkr0HtGQRapbk5eFEX4Ai0UVWV1NE%2BoRfLwtL2u38idgXKP83rs0j7%2F2UPXnsD7gQ2iESiHKD8GhWqaEyAbLflBDz%2FqXlroZhn0Gi0stb%2BAVtDZlvVVYwf19qb26hL%2B271BOnghrQGdF3P%2FP1a37x8abElF6qhMxZL803VEqdXW6hQhab5Hx%2BFWE0JJWVS8Y&X-Amz-Signature=42a775f704452e78897e874267bdb4ebaeec9cd06a5a6a55e16046545b34f6be&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JKHUI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD2dbmdUwVqM%2FPVxxyq3NlYys41afBs5S35GPpVuld%2BogIhAP%2FjQmdBSsyFf6nctG4OXPW2ctOjzVbSjBDJdajwi1jyKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM0x77JIIW7U6zXQcq3ANduKLIejOUrVoVEGsg5OWRSRIXt9IVpoSZCDJr6OQhgWF9YOlsjk46Uj616K7OcG%2BGlzdWTbQCQ2uaj5f64p%2F8pPSgMUJ5rUWPLm8UZTO80gmjLLn4%2F%2FD157zRpzcGezXHlALxkLZxo5bsN%2B3Y02ocACktllZvTHtYjFVvZe2JBYo%2FdU9o98zei2lbb0vU%2FNKwR6mkQKyaW3gikqL4gp71vw5KE09a%2BRmOmwm8UHsnSUjM9kzQYTmXb%2Bb30fSrtD4ZVQVYIA2J%2FbgJVi%2BarFaC9SaRPIap02iqh%2BE4IRNWd69Hx9NxNMPCfRxcQNnM9ajZuKFCB3OSK5r4%2FIhvlCcWGl5QlewBVK%2BrBw%2BkR9hBzKW2p020LIh3lvw3ACztDcxcvE7bUlWfOWrb3AFXOdjniUq6EdCHITm8YrMc%2BZ2PUXnNBp2dE45PZH6C3IlKinrMyiigI3IEuzAFiRhwu%2FPNhRXpZd9XR%2FmJUHP%2FLOEv7HzEzfQS3HoyX1T4tr%2FfXDef%2FxWa5qHxFVDshclxVxWTXSdWHC3OoXviVIWNem9EXzdwvLMDNDQjmusxaEm2bPyz4ktBb4o2qEUHc8qo2AeNMXzfOvapHTSPOZaLELeIDXYApGZ1xJPdk7II6jCxpZTABjqkAbkMWVJ5%2B9iaciwHtPPEs3ftMlP6TgenRdchZbx5eCvbDe3xsQjMcEZUK3RoG9ebRY9UjzlZ7IwQ%2F1A2puMYb4%2Bt0L4Ga2iUAzeuNzFP9LZog4qUZNoxHvzH7K6zHixMlOytAYS9wL%2FNUQRm%2Fc4yHdXeqpbBsoxrQh1TnIOgiw9hL9ZtI70pH%2BwAf6GXF3oMvlptkLml%2BtmVh4t5MClUlWvBfBH3&X-Amz-Signature=cdbac2e80455665f260d26159b90007ab01b9a5bd6fa446364175edbc1dccc70&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
