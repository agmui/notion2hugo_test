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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXLVNOY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBUY5PcktiBFAUyc71DRdnUhPQEKXZSvXBFeYx2k40AAIhAN4EReZ92y4OXXH8QnGFhN9XGjs8waJgQrZJBzSNJrteKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHcEqa%2FhZsFzTdAVIq3APi6wRnSBLRznenwYgZVZbFNks1ngq90OVPVOmIZTdJnl1DvGvYRAhcwcvyvp2SY2IVkTK5CvDC%2Fzu8JyWVkUOLTgGLKSVyjEMLkv1NPWgpgolo4X4xFNXLREPXHS4eL%2BzMovgY8dCC6x%2FcPQS3ohgh8m7KB7Ly2MzwgqEWE1zFIWWT3gdcpPRkfURE0ZFbox4Rk3kKmotLA2Hb8o8IR9xugrH%2FjXGTEQ3Y87Lh6qFZdm58z7OZ0FLBDxIF4JnU4vVelzMXp5Y0JBIwVUEhofDrYWNjmEqKgnjcZoVpvpGsu0Y8jN0qa%2FMO3wJeXW6XXEUIXrwb38OazPqJqJojXJZnaXhQZiSKnPlDaJrvUiNMlxurJNpre4q6ufrR0dvw4p6Fl6JdbHt4JaH9ve%2FZ9mVHlgb%2BG%2FXuIQuzXVnzGLTbQC0GQutj2ZNSniC1AXJPIFAid9LqQZ1eFdpDjWzgQFnEDBedEXeLcimCjNj3iPHQ2paaJ9sVjY8TSf%2FRq%2BzNaPq23uMcqz1LIa8Lwru7QJO86zUjvZG1Sc%2BK0eAfDeW1rnLelJXqabS7PzhVYtN39qLtq8Komf7d%2F3d%2B7drNoPOoEAAUis%2FQIdoZrh5mHYZvAvvSTDvneqjV733PEjDfkIe%2BBjqkAdlt59mfcnH7E01SrYOkvCozbwJbvC4xXb3%2B621yfF6LYekA8gkfgDwOkHHwDseERCIUNvCQt2VpO0ro2qaiV8CIXwvYkvefi7ItxUJ9aStl8VLwAYF%2BAUzsrLAd7Uf1QlfjKxPm64eFX4nJlgN70gp4gCFerj2imCmP4jplP7JV5brpDGAHNxEvCk7lF8tHzz%2FUU9qy%2BoYB0FagkoSuFftBRAxF&X-Amz-Signature=d9d75b87064a5368a5e0aef9c4421b608295973bc0275a30f1f9fcf37eb3a089&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXFTBRQQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDpUXovrVG31J%2FiqqgQanA%2FqQvVGCu2HuTh9nP0SKiwzQIhAIhwAP4CNtosawSVS6zIiZwJeRsS3F8c6X2eMpnFnM4nKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt%2FLPcRuqBAC%2BPRq0q3AOv9LCUFA1bUqkYA0WW1SR5nRn5zDSUJNjCXRr3SEmydrBDKbSkFe%2B0uJcfgL6Gv3sx298l%2BeCBGInSyTWrjrFQI0LDb%2BjfvDlHTU2TY5Lbw%2FgJVeOfCewkJX59nlQmY%2BDoaK8rZoXq%2BQB8Wva6Fljt6ohIvbOD%2FBhHGmuv6dQN9zneL6rm8TJDdGZqau0ExvCiQ8XTaxWiFIGfTDfLw%2Fi8ysxy610e9bQmlW1PzPNB%2Bj2r2kyJPXTgF1ChUvJqQRWl3W1ArLWOPjiFFLrjYMO9PIQL%2Bl98dWpZA6bSUPBNpg2Mmq4QMM0yzuCIDZnL79UgVTxmtnHJFFkxrk1v87Y0BHsbHnrqL5kZH84CtnPPQ%2BB0W16LngQwwm8d7dNYMJeg4Oyg2oQqjrRhec6EosGr2zQWUTi96LHrSdVcihPDy9mg5XSvCppdM1cC4%2FXyNKhlhw%2BEiI%2FEI3dgZzLVcct31DLSCHTiehlGqHJtIOQECMYvP82W62gXUJ4EyYIgVtnqF9XWtBpKqael14WhV8T%2BTt5a4Of4%2FmgqU8QG0Fc5zFrbp9uKA7E1rSwLCC3MtlSsfAIrYjMspq9flL%2BjvIFK8D5yG73lfjB1tTtYt02Eo3yc9u48EvvQDL2kHDDfkIe%2BBjqkAcHIJI37phzO3iSwOFYnUrNDxGuOYJ9W%2BG6Ujy9dxectdRC7pgS0qGTtFybYEdWGoX9m48OuRLt3SGtLAzsB8Hc6fZ2IolGqIWDEMCeg01ltbQtlcturTECRDC3xMLnODzoiYa2Q558S3FbGiDtmeDxXYRXomDaqj16E8b%2FSTGcsxMDXAX2HrcZ2il%2Fg6bnL6ADWGElpKVCZFJiHckSA6DBOIIbi&X-Amz-Signature=282d74e318b4ce707dc9a5df68fcbf70e9698e0033cff2a68d96d1f43b7b44ea&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
