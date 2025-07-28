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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGBV2U2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDxip33nULK9E8K65p06VBZWeupnbrNN%2BOKP4S4hwnBGAIhAJrK1bre0ay68TAhD3jr%2BKYG8suUz0D0xwBJIzyk%2BZQKKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSVaorCd4ubVdY8Ioq3APiMcsyjr0kvnWTIB9U69FrL6dFhJpLgNVpy98KcqJ2WU6Z1dp1d42TIA%2Fk5H2Qc3J8lpPFLoI0iVYikyDTiKyLF8GBfjHTQsuvYHydFTFRfnKBhN8REKRKRrTEN%2FmKW38wiXnClqQjdWUqAxEUnxHF%2Fk%2FcxQFZirGNTp%2BzZL5RWzQYYa%2BfUva2Cp19EtSSnlkLHGI9vBCIqmbjktHwWiNRa97alT21F9bieZrgHh1gj0heboOllU93btQDJa%2FppJghZWP5jdNeTMMINzT3zu0FerA0YB1kL0gzp5wgNS4aLIDS8JNNWqTkXKr3U%2F4l%2BB97Z7zRIyIS4dASrYQN9oHGOTIW1KPYbUitraR8puryPgtKqiIbbZiXa%2FjbBqt7374g%2FUEmAGTzhO%2Fzc2D872MRH1%2BOHnoYcv22h1f9VLhDrFRVG%2FshAww8wnQdJ5Fq0zbDTfHcSKBtfXIpooiZ%2B8JSENu0vCRTvRkL6C3J1%2Bz7ou4C2Kyt9Yf%2BpmZirxZm5NRK2YDmSBe5tyGC1MQ0oK95vdCNogtIRqPmt%2Bf%2BU5P5nd8DAngsEaXN%2BnxgM4zd7W3jLNfcJ2d6ESeij8HE%2BAEJsb2ButT2FryYqbOKuKA%2Bw3nmZ5JnYNF%2FYzpYTjCuuZ%2FEBjqkAbCcSBn7X6eDVY3hzFPmCY3%2BF3IgZ3b9gDKBISX%2BkFLg3kocq7LDqgEtuFQrvCDXxuCloc72QnEZ4LgWwaDQhTd%2Fq9V7EzPf3KzmtFGKyHTr7PsjRc0k2x50yA2hBl2xiP%2B56nvq85cun6hrQrEhkYzke7wpaUggQwM9GzHKPnRvYzrZ5Wog0nc8mQUPRHusVx8wsjJDre%2Fb2IWceTLfJVSAtXjF&X-Amz-Signature=00669d1c4bdd02b30818488c5e076dc5a65b59d9abb6a37e54780cdf48dccd97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEG2EY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCUozaqABBOGGZb8tWDxXKbZNZ0FAIIVqfTJ09%2B7VHHjQIhAPRt4oQnG2T6%2Fl%2Bf8Upb%2ByhNvKpFE%2FWRewMGf7mJ%2FeTVKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAthJPgcjp0BUlRDAq3APH1aPeslhw5BSB3ur7DKtQnUFPTcjbpBcUt5Y5JLCueHGc5sxWEGXPwTUMXdgz5MzdHTKOHGfJITNJohHZmMtgd7337QsqSR2C%2Fms5F91HICopXpn7Cw8sdoJeQN3bzG59WwgbfI%2BK2RvySkpAMNqvCSSIRbh%2BiH8cLfU0y28nF4tCTYTjTrLIIi9zPmRKCubrvYhDEWUc6ccZEM286PZ%2FRifQGBbbhjEWlGJQZquVYuSWRRUFa7%2FJ8A2oww4FjfFJ80uQ0u9BmVHXmjHOeMHAvmA9wgvfwtHEyz%2BhZDK%2FjYpo3LUVlPGijKxGBNbd7bpvLJYBRtY5btj%2FjPd%2BQSSvNDUvwzoImYMENI4vlzqbUx5MIwmGS2yYWOgfkqVO%2BbCnQTa8ec%2FAjaNlRjgi0h4lXDev8uMudsnb654w8RMf%2B7kT%2F75a8U8rTRNkfDMnmpCZsFZzjE%2Br3vM94xRpMwi2vF6%2FWhpXjnbv1ZCiKkz9ubu1SCKT18gfSZAuWL4niht251oQI3VMXYcvDt%2F%2Fi3RI6Sj17aCSlsQs6W4BINMqsR6WBRYxysmkCR5XPYebdTB59AcqttXzZPVml0ku0dzQBI8VGHLWRPy3EdzmKTq77lk%2FVQJwDNdFHRfaPzCPup%2FEBjqkAWvHamzC%2F4TMaHvphiJ%2Fee%2FOghF30Vo77OlBUk3ZcaKfX5VYc529G4FYNbacflfQTitPYZxy5BJayQ1BQtAdW2FXVrLZVYzpFNfIiwm8BZkjCStqfvkt64vhxiCfEtBQF5DgHBztlxIphyWA%2BVWjwnjwcnpqueX%2BXAAM68AX%2B56hoTvU7uqjUpkEhrXd4C%2FieNT70wbXicrZiL7YsfkuApapZB30&X-Amz-Signature=a9c7a3d09e623c885df49588d9e584af9420af0863c71c616d406a09866f7f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
