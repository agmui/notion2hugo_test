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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHGWJ3Q%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDNpKjQAQmOYsqtmFkADrfPnAwbRJcXsx4CsJTGeWZ2gwIhAJ9SAjROU62rMnUDlmZNziox1SBLf%2FpsHGaMq9YCwR0KKv8DCDEQABoMNjM3NDIzMTgzODA1IgywNOEEQ3avz8druYsq3APJNgCCPNNRtIPOsc0vmlVd98egzlsZ6noGSVw5bDF5g8Zx8%2B8IwQSffaRvB4Cn77%2FS5f8%2FAp0tXVLohLsK6pq3%2B0mVVrvoifDANQjf%2BY7ZUZA4J%2FirjtK4zw1gXbPRUxiDQw7LH%2B74Axp8VjplieK2UK05bIGc6Ju1AS%2FDZBjaNF59zaHgYsXjWdiBzgrwDSYPbq%2BIiREDtaqqRk8WMJthi%2BhyDKbWKId0KETz%2Bh09KbPiSOqtHsvWXgGWB6ZU%2BDqNCVwuOF89pYuUTuzesg0JeAYMcCIXkmT7gjj18DtVb9jXGo7dvkfumgrQY9SoYN3cq6Wj%2FGATOa80%2B5FKHvDaLn0ldyWgOHItat4Kp1XQvxJMKczWkiG83rUq4HxLpcgRjOp2CgOzHOJJHSE9IhZiKCj8iM3Vq%2BxIM5KkY4zNylnWLWAK5t0t4O%2B8FEiQNK3GfSPJ2XsXF0H2GQiUG9XYt83SQ4QInQ8B1RdgUnpmCg8ZOdmMxrz9UhzoECSuCsHd%2BKgjU%2BMEl3T7YzPLpCM%2FkIrao5H3flZfqEIhjBPC%2BOPJZXrHR4qLXTxHPqDBGgEJQvzvYrZMWSj%2FkTNojnmaPfFD4iS%2B2IpQ%2FW0A1zmyxI6GFzpl4HCvJFceTTDzj%2BvCBjqkAf5MDW1goa0obRdFGQJPCQrdc7bLgeyCJWtCPagxlienEkfFEnxcT9ceDOaqHb%2FwyDCMB%2FbobsgAjtJ33mupxrkrPfywRN51SyRVwZSaf8VgVxjTb6rd3%2BYjcfLToJuqStHLKjKAeognWanwqsZ2vAzhI2VNwz9y1nDEHg6RgZ%2F%2FPmxSSDtjhNPCHct4EtDqnXZ5Lbja8ZKS1OhbA%2F8Lk8maa9S9&X-Amz-Signature=20505b1978e195972e1be1c2bd64518b3b897a54190e612cbae7a2fe44ccfbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633JWCUAI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCAt083aITIT1C5vZc9co5EeARry0M%2FwI%2B%2BZ1UYC%2BdxiwIhAI0KwVuSsTsypr5p2C47yrTg2qqGwXz59WPARqy2qND%2FKv8DCDEQABoMNjM3NDIzMTgzODA1IgxrkOCDs67tzmF86agq3AN0%2B7CF7t6IMOCX8CyoeATe5eS%2FdeZ6FiTEFkkhy6FfBnn1VqEVTzQ711Ldf0ELiX1CXbhbNZhBwPoZo6fz4hFM3hT%2BnHCrbfOLF2xqOkNXqkdM%2FtJA8ZGjc1a7%2BffRjvemt%2FCRxOTg9aOSIO46XxDPASsYeKEeMhq1OPeat%2BUgBOeJhPmY5DrQ%2FUNbQ2B1KDu6KPPExMzzpuPAfV8FlVSPmiAuhXUFkPFHKJ40NZ81uOLNkjN87JgrW8FPV2tagx4tG82FCmkZMNt34p6agGD9UygmcShxQGjj%2Bg4VFNtKdFhJu9vKSuOc%2FlmcMmgH0ytlN5zV7fTNlwZcZQPhu3HHwI2imNLF%2F5QuTVWGX7q7%2BtjVHKsxkSTYiFIdIitHb%2BwY4YmSpCXTOvqqYsPRVB0QMJNB5nodJr%2FGDqRCvPYqizoz3lEENeXWoCh8GUpqs7ew7Cd2tcEKjcfswPnjcyeXYfXEacSHmCIEm6MD7Tmknhw0kvrH9%2FkM8B1xyeVh7r82VRMAgJ69Y8yUXGIfZhh8GDGexYRelr7JLhfHWOEJLIQm2X2efe6qRQ9wkSQlcVXvFmBx16HnykBHmZrQkdbVwrANMKtjpoXQH4LbUthwRBWzTrmy%2BwYfm3y6YTDakOvCBjqkAUxOS7fGL2JB6j0ttdAbFB7tQlWRVCODDZTGJEzLzVvXB3SUcWs3l0APzDecjh567ArGpN3ZdHS04JWQtfOAiux849EIn0lUMApSToGPtNK0h8%2BK2SUchVDQ7GqRAyt0AGQOIjC9zu9rp%2FHx7A8X49bNy7vFRJR62NJUDwolWBmAQCfY7tIWHs90lZ3CjZ4bGCvAY89%2FhLom8GbHUf4ItaJIL1JV&X-Amz-Signature=52a5aeab269ae5cc398384e280d3f89c5a6345adc5983a24182fae334f11de0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
