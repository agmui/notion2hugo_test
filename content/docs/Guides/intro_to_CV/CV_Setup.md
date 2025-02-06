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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWKOIX6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDZEl2G0Uh%2FyEGopEb9QcFFlz4XPHJUfqCnPonYUOGdYwIhAPB7YBuiC2PW%2F5H08p15SrTwaXX4MrAhzQdLDTbXJE4kKv8DCGAQABoMNjM3NDIzMTgzODA1IgwfxUp41ffyOfVrtNcq3AP1nxt%2FJoMlZCTb3i6JCcOrI%2FO1J9D62IYFoZO6n0f7TrnS8Aq1TcwcaD5Uk2RXhxNylX8yjAzbVzYIIvfDz9Dr9Mf1m%2FgltqeMw0XxVyzGrOoTN58xYd%2FRSa1LREqorHqEmO0Fj%2Bxg4oUN3qafYF66R2TAh1WbuR8oOhtIaV9w0JNeMD6XF0Vb31GJE4TRJh%2BvgffVkyTEd3VCQU7RnYxa97adtTvB%2FrtFakokh53MI2bFp8eZgsagGrpJb%2B2cjECk%2FoayXbkuFvr6yS5mDSLUp2sb1B%2FEhHdNjlGx1i%2FSOjCinE%2Fc63cNAlVfsNoWsCDs2nZZYnPflUbhZy%2BA%2FxIfhLSxsSOJR8o7orLT3EmgIdubf3I%2FelS8nJkjyPbYrrAJNXzFrDU4GKriuHBd%2FNhJh8nWLIegev8SObV0HtHNQEQvhJwnZng2pM9HXXv4T%2BcN9rZ0NUqZykQInhqNvokTjKnep7ug9SC6TBnjOzw8JlQ6iliOBpDtlXQuQxv7VjOrSrQq6fy9WJ5zBjMZxvNlXmy9W5r6LFZzWSvu5jLEEMvpjdclqzykEYM0IgDIOmAlgYHC0ASlFGytlJBsZV8Cjzt8IR1oED88rNXcxKixdHO14Wb%2B6PJWIJFLUTDXnpO9BjqkAaemGqUyH8mpR95%2BVSG7w9LgPIYaA%2FzP5TySUGFXWGaS%2B9ccZ5GIQnwn7OzLvWv55bHNICecETqO%2FZ628WVuH62AFvzwmHoJS9PTJMDpTR6lJHt3ZJJbuq%2Fdqq7P5cER9kQuU2gy2nfLx81lbMLFmKKEfcRyj8ZOnrMYj5R36GpXN61QgWuSDB16Z%2Fc1BztAHFWUSbVQmRVc2sj%2Fm8akChe%2FcYZW&X-Amz-Signature=87347b622578f53e6d76d353d633f49137cd33776879e18e13e3abb45f9dc60d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRET64NK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHkI4m297PNmkDCB2SO9UU9m8MOLy%2FRYLq8FbrmpmhYvAiBZlljNmGcsZa%2FSRCQnx8LkRzMu9Fb75T%2FoFr1TSDzLMir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMt66D2lbeqHRto0JjKtwDJWTXQRQago%2BwdG1g3jBjKshu2UwGmTGAirx18Xm0a%2Bx9skRyQT5TPPnuL0lCfg2wLqA880De7WxGgFgLiql9lPlyAkqBzSVBz5yOZ1eRu8rpHga3Uat75rVj8Pls%2FozSZeIF9lmAH5wo%2Bn2aUPjFnWjJXY54H%2BBqBeaorSadxL3rvE2aV93MsCCVlEa4VoV88Fvbe9pCanlslg5QbRRZHLTFu%2F%2B7ZcefRdAGZTT54x3HoNgtwoSY2vZoXGPxy490rd1nYf4ZJGS7v3wk0Hp3Q9okxg%2BFOIoxr77S86sygmKbZsi6%2BUmQCmVXJL%2FXixRTnv9e8gl8lOWty%2FL4Pzj2sInn5IU3vw3F9oRF1Yk%2FOgBz6qbD76KbAV58Vs7UyNIo8dRuJxSnk9SRdegXHKNCu2tNvADjCv6zXQsTWLCYPRu9FSAveYG2Z362Ee%2FdSG1njfq3IkFDlsIldJOG7y2CckxzSMVnJiYHEg3neGuMaAREbBOuJx3gzr4ymz7FAy897uWG5WON27VMNvfwCPoZupv01tgBScMSt%2FYpu8B1t0u2%2FRe1xSu1rtJNVP2iuLH9LLFj3cew6KanSjD%2BnedaDuQAyB%2Brmw2tLuM9T1hw0nyEKjbyVZvkqs0Ag08wh56TvQY6pgGpy%2Bx4dHyX6aBYhb2TOKv1BMYnJg%2BAzHPcJF%2FtdyBwv9pJvAK%2FGlX9xr34Ms3z9vqERNkqySiBPcCeEPMyQ0QBaDahe4xdH8b%2BpoNskabSh3iBA0MzCiuetqr3O0ED2mgxoUYh5wK70sXi7g2gIZ53EIZDTUMlC7bpOsYhxryl4iEtCu8ACtm%2BMuKAfSeYKA%2F6csuK3%2FqqJQPQGWh8JzbWRs7CVak0&X-Amz-Signature=6129d3683532236ead8ee6657321e914f51b63554ca481d5c82a73cc416d2989&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
