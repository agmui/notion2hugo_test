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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHE55GGO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuh3D40VM5ucxmVjrgA3l%2FSfJlTlf%2BSsoa1N0iLB0urAIgf2KYbty5MPFbznfnhrrjtuqrt7u3K%2FpOSCDOq5E73J0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F5bAyXZnE7s%2FYmzSrcA8OG2NVJVWY0O%2BQ3hCn3L3lvDTuHfbwWE81%2BVNPTTCOtvGjhK8H4oc4gH1hXoXpj8alv7b4iJRG0Yab3ckI0iYDqQfTt%2BJ%2FfZV8TYDu8ONKwJceQiwYVHpKGGSkV8qH8SMFFKwN%2Blr9jxYuWC9%2BwJuQn19Nd0LewOtP80DArVnftI8JdMUSzxtP%2BJT2Dr4W8hqb8xTfdlQ6zOvNBWpvybwKgIfAudVQk0c8FKak%2ByehA8O%2FWyZ6hinw%2Bfb264MvHC14f8jDZ6MFIWDa%2BBbmQjdYf23rWoarqVdR2fVi%2BQiI95Om1E%2F79BYkMjjg7uCjAbQCfBD1%2FA9VM3TO%2FFurIS5c7R%2FpVLo9rYsfKaRDoFpY7%2BGNGgAzTyg6JN%2FIrn2jMUZpRXCE8bji3wG7Ki9uxXmc7MlT9oewaSp2YAgXgHf8BzikhG0fHgGtT5vsosxxOk7ehpGViJrYf1u8a3k0FdSrqk0z0vrrJJIS89C3ZCbX4Z6lonp1OVFZ%2BD2X%2FUMuy7NeMXZE81l0XhGktD5VKrMWiNgnTvlHPHmlP8sdWuw4JRacJ03zlUj1kXhLMWgwga6utqByBWt%2Br603IatrP4qn%2FqN7Zss829CFg80iOTp%2F01VX92sF7c21bRCadMLDtvMEGOqUB9oYXYhucOdh65rJeHjwxa4HryoXZ62zKtbM6gExaNQazv2KMjT4jVxgjz9oMf%2By12vnLrpFHynvu0iNZ4vjnwzylq89HPoq1W5Gl3%2BFegS9KUp2AWeQxHfmeXnw1gS8zfLLvjmYmg96vyfsjriEpyPWS7oqVkWJFp1miatSIKF8prUTN0PU4fw2TBKNRxLrpY2jSqxuNt20jn936dKKGFY%2BoxVkg&X-Amz-Signature=03fbd98d9b194b6feb4db48283a537d6fe490efb048f05f26ad9c5f72e87236f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N4TMK7N%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCY69sgJi0CktBEnsl%2BucQViMBapd3cpR0WwPmbEQC81gIhAOGxe0KWxq0MlVcSynJNU3YcziNO%2Bc0jSf%2FNK757brkOKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoaoEHvz0%2BWqbP4u8q3ANhBlqbAThHaWEQWZE9R%2BJV%2F%2BAMqkI0hbtKtQ79McbeiKmRKaSGwkMHpdtI8L9A3Ua88%2Bj7WuAKaI0YOYlCU83gB9vIOYvH76TmxfFjIAMJ%2BvS7r8XvaFSzeCnlSE4fdI6GJCSakyIaEE9VgfzbtHME4%2F9PBtTMmJ5vUmt236X1qALFe0iMvXaRUkqGopG1Kzje2RNHSokl0NKsNoIwPAjDB6Musb6sxpnaWL2HMEfF72tJGd%2Fg3I3rCbKADlRhAaidoED8mY1979sHd2lReC6Z%2BRv2k49m6OXCxw14ngq29bDhFi8oGWlQE4oaz1QBfG5Dk6Xxc3N7Enh9yGGSln2MaxZLmRtE9neRF6HlE8RXO1cTcWCWMIxW%2FtjJShSnmnbn9d5Od9TCjXCp3g1q1H5k4%2FO3KtCVQqCqbjXiRFMrV12IAZ22d1CQQKFwqqJVKSFb1qxVKDEnIcLwpvZ3Z%2FaM6UlFcmd5pz%2FPsp54JRNANayp4QnJCvuEXzAyofXnF2JmPiCuYsaMgme%2FUpVuPTS9JtPwFXwCUHnausyQR7urBM0KQOgBUFFJqFh5eiuP8qiOciCdO%2BWcQpTzXCxQX6LIqY1XbK9DJym5plYuzigda4W1SMPbfhKkUWmxzjC74bzBBjqkAcZQ1MN371QZvtCr8xJrDpXTkWEmWgH%2FzzNarxC1LixV7jhqrGw1KJbGgXD0jQI2h2TeGsztAc15%2BPPi9d7YpvfSWONFetpfbyJTLyhHOyr%2B9kfZO9BATjjJBGQkRfnZUvnFwZ735AtXrd6wOA%2F73SsBP%2BtHgSlHdrRHbV8Yof%2FvGv120%2FhiCiXLRCmxBknIg8XsIzr84mNLbP6hiWk0iUrEv6z7&X-Amz-Signature=9a0c6bce8615a085258b2aee7b0dbc9ec4161e8c3fcc00110ae40e3897b07a87&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
