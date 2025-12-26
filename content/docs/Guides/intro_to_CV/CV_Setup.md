---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPXEUIWP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCc6Wx7SoKYrit8eJbcqetfJeoQUsFc8so2moOZ2kI4fgIhAO9Ch%2Bd%2FcHpWqPgRLlUXm8poSH9i8FI4WDzSgf9dFqQlKv8DCEUQABoMNjM3NDIzMTgzODA1IgwcCgHTZ%2BbCh2HnchIq3AMmN8%2FI1W2xlX2Vx6522Qnhz4uClaxfoEBzppEEKj0mhR6sIC%2F9wfzQLlp7Htgu0q2xQfnF3uWEdQFmO9bbh2nuC1otNahQsSl9P1VNA1CsoCx8pOeTqHR%2FroS2y07izxF4l4fSwdSx%2BVCQoNSNssOQiTBZZCL%2FRH2gciKIYLXKjXNK1Mm4Pm5sSbxo2O8igi5CwKr1ISa%2FMbY1D74I9kK2PG9AMVjt8WXxeaz6xhSZYkvyi9tXRTa8SNkkASC5uSPSSRRAQG0xftv2ThW38b9JPKiSjt6qreJoZC7maeAicNHBtLdofL5DLLaGcZqU%2BQgmXWvONAAhj1dNBpeTa8L6qrUTSeavuBK1RcTnSPsAxgEI7A1z2KEipSRxOsrMK9yGCAhdzC8TQ7efa9DCXoh6yL%2BUHt6WOWfEBKEHVJNUz3YEMw3Ikrn6e08ySg3pDMlcnK%2FjsHl%2FaX%2BE3EyisWT6FrI9Wf5lsbiLKeQpiRhCk2QQsBCvyF80gVFbZe4oyNxEkdDGNUSKV76Hb6RZl5sEV5y4SZVyXQJ0FPyMTwiL7C7EDaOANJkeQ3A1pVB%2FOGsBVXVE5H53ukip%2BoFoUBmw2ndbTerRCRCp9y2VLnWAB3Bc2YNZjh7N8HuG9zCusLbKBjqkAeB8ieMJn%2FnUpo1klhpvRS53OyCHepUkSUbBnHYO9L2Q08lQT05fpEDJTmYvElx0W41dHid0WmuFqNfP5MNMTkUzGk4gHG%2BjHZC1K9hM2mnFl%2BtdXXR4Air%2BC67tMrf80%2FXbzLBuhrLOl%2Baf4w4rVxdGB7Sq7ixqxS9xdTRsBpwwnSnGq1GuTSiStBCSvjrkvE%2Fi%2FRcPy35Y0sREvKUIRC8nQslK&X-Amz-Signature=f637e91b87411182bf794bd37b331e6ae9448b6322e80165db43dd5661adca4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS75OPO5%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBUbTIO4D0mBNpEXC5xiaI12RBByUsNiohUGrDqwt5UiAiEA89%2BdYvHa4fjBpGDGb%2FLY8XmZPiYCRAKsCMNiyJQNGO4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCLntT%2BOHOEzvy40JyrcA1yG6sV6ELoz%2F9ofjudgN3CDo%2BAmbCklIh3kcfobFQbVPd8Aofv5E24%2B%2BgVlNQUOlBwOF2spPdwyCLHtC9Hb%2BcYvECW6iQypXOsNa3mxWXZPNaf%2Fbrlm0K3NYTILEngybkOSHVwzo8kMzhvHd6MtJmdxPTSYtzKZf1RJdorchbgsl%2BmoqYNyFsrAYulSv81hzWI5cSQ5A7Eukf1hyWD0rFHs4adntNVsPd7XkewXxv5TIvnmYRiJJ9Ltsngl0Iwm%2FQDBsrzTaqNNcu9chPwshAJOeqWeVckfjNCcWSstG1BBs9FeDlMPuxoYLDGV%2B8SQw6zTQtudcEXdcUFtAX24Ddxezwwg%2B1aKBWITCCtrHHSpk%2FIIAv0STLP13yKPpHHOMnUGXgVdgV%2FcnyNM5Wdu9fWQpW1wjXa3KzFVVQ7vMTDHpdj6MEyLquuiLhmHHF2OAeD9Wis%2Bu2nucKvVpy7izCUbVJ%2BMZ7p1TOCyH2r4g8BfvvaTm4Dw%2FRrfl8ZN3TrQYqGq2U%2Fc2BdSZRQIfoTQ5DOhL%2Fht64fxA6lC9clc4ANGpWtbuQCRfaXp0OFE384SA3laMfNoT7CxTnuEek%2FvoLnws98XkxF6MKy5O4BW63tTa1Wy8cQ8%2FPrBw%2BmKMJKutsoGOqUBW3MofU%2FlXbxkPWrUbAVKFAzPAe4%2BMlTK3sBYLV9GDOGzhhoqYvy%2FxDMTB%2By1FMy09LziXbUYdA15B0k8gGswGy0rsBH73DQUUj5PMHBrF5%2Bc%2FwJ2nM1p9bi%2FThjbRx4gz0RuYtlrKQpE%2BsKWCs%2Bw91NU4o6mNj6Ht1xIRNThtylbzI1u7D6TQeuaqLjRBYpq6J%2FM2m2dSRPcA0UJK7vNWw3bFDnw&X-Amz-Signature=7c272defd5f065351d6fe4aebae9c5718b566849636174720259d9cfcbc1bda7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
