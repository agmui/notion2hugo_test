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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNYOLIM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC0ZMWi7CJcmGAzTd6lYBOx9GUELRFNp0dFxOUDA%2FaeOQIhAKsflbEmLVFVVdqE9WzfjmaKJj%2Fe0ttASj%2FvB0dDm4S%2BKv8DCGMQABoMNjM3NDIzMTgzODA1Igwtl1%2BKQMb0gFW63u0q3AMYaLQqOS0inkdmr7c9ID7Yg5OqEgl3ypBSSfdAjZt%2BxVx7joJ2t0i9FG3uyQCEL5xnsR32EEtzcXIOtOaPT3R%2BsKn9bWHKzfwyD6J9CzRiS%2FSkbu8JiiUZuqHjhoSlY9rBnEBNffRES3taB3WSyGFcqCLPSssYt4PU12BJ4cWg0jEKDdMNqtedKdGM9p6n7iUba0ndJn56zosOO%2BCJFrREzms1Z5lqnUhVeikZN6wTwzEhjwkNJSakQOSdzv%2B7lH6ECP9UndhqLEq1Fo4C%2BeAUlkuaam6KYn6P7jO8sluDr9TW6jRJbSij3impzKh2BHltTyGWdaDh7ee9ZNWAfZ%2BvJOnbu5m7V6tHn1%2F8YZGGc%2FvAbABqEm9NfiVXG8YJ57Zv4keoPEHcpv3EQ3qZrouD3ki9EEcIegmGRDKmi%2FWDhF4DmmCPM%2BaKsnHCQB67ZqzGhSPffpMHfe7ea6bMAUCx0srpVTEh9dY6kBEY02IP9rCGFQl9Wd%2FcuXHJRDlcB%2FgzEwU9IZc3lV97%2FLQBJvJ%2B4wzc3CsJVt%2F9QPS%2FzhIC9AEOYZcGIxdJdJsU5Nun%2FINrtpStLmh7qXBiGudoqP72FwNoSJkQfRwNCH%2FoPWtADhBE9JA%2FB2evA4PDOTDxr8HCBjqkAUsChjqZNZrooA5kz5EjVfLuCd%2BKjMWl4HKMNRLMGmWon7bq7lhKzYL10qUF8125m1jA2Rnu98sojLYt8k4Fqo4Nq4xL74KXwmHR2Rg4VII9RbhO0AqlvPFXSR2krOxbEjXSN6QfIy6rHyl2cOfGt1GZtIWB39UAeC%2F%2Ft5D13PVLiE6gXT%2FKUZDFg1iziswT8XLAtFQeZI6H%2BC%2FzyjCBsVtyNCu7&X-Amz-Signature=ad0979984e2213a816b8b1ab9f1ad4c50a7f08b044060530be2df5bfc488c129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636NDUMQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDts93Iwc0RUwe%2BJ0Yez%2FvIk013CEJioQYhW4Klwex2JwIhAOLexkL8sn76E%2FUsIYeROi8gwGthBAZnbHZ9xCZLb7b0Kv8DCGMQABoMNjM3NDIzMTgzODA1IgyynnWagmKKN2fV2Z8q3AObqZXT7JOhLFJlF7jpzvSEg7NCB1j9GRyVSTWWouDwb1tDWY%2BzmQGp5eVLMx7JTir8jif9VfrlGC%2FmQ%2BzXfbNscg8I6HyeomEOefTEra8nCgRDtyZBqU47V9m2KumnS3rgyG3GqGpezqOCM8Ew7Wrs0xheJhLvqQgbMWkEgNCHfVWluBX9XaCw0DuZwcXlZ9zLy2ZFuVmDAC1u7HD7iqygvZlTICS%2FKROS9u3qltZIe8HrXkHyMqJEwOXEoMAmVhGDcQ%2B6rbNogsfNNtymJDrQFrsZMEk4ovQpA8ccjedgFE9bjPxeY06NAsu4inzB1amsG%2Fyl1lruooekvNct9ZRAcXTUrk3ruAK9ZA8VQPYLi6OyuP%2BEBE2zomDaitIT96c%2FU2cmf66Rau%2BXiKdl7L%2FOfKniMQqDKBLu8UaujJZAw%2FcVgdEGP9K%2F%2FOI2Vzh8PC8RHgqR1KIR%2Fw7yw5sScqm5AkzBzYdBYjInMyrE588QUMtzfuIrNCQ2yvLV7Tdd9K1PBgu4eoA%2BCcreL3TYtenw5XOOd4q68faooQcL2A6q%2BqqrntvR%2BpYEqqVr5cC%2FqUDTbiCD0pDRodGhEQImtwxbw9m0myJmAMKw9%2FpGTddPbui5z6zFzJ94TVnA6zDir8HCBjqkAbmHU8H%2Bk%2FV%2BM7zdMlL1vv%2FReOSsLfkOJU1%2FTFWqGcfHeH85clRgHuWrIMYfLiKb12BFa95Y1B%2BOsSgXTXqQxFT14VtQCEvyCm%2BnZ0k5EqhsyAJWq8PXh56Ql7Lu%2BXVQA%2Fz%2FhVvzlF4lMAx%2FQ3pTPdhIAbz3MwkvEbssAm6BJWgJ1LQWGmRFljB2iNvLpX8fCiUAvmDjJTms%2BXwQ6mF5zjERf1RU&X-Amz-Signature=202d61c6ef4dbe4309d8c10e54c3c433894eb118fc6d3e4833fe3b9c97fb8297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
