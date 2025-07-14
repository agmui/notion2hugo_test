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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4XM3VX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCpNh4SI83SYT1dvbOoEDvv8AguZF72iNObs8KaOlzHswIhAL%2FdyGwEXs8TyIhiqlTbmn%2Fl%2F6UGFsdZV4DgxXZ6RSTRKv8DCC4QABoMNjM3NDIzMTgzODA1IgwZ%2FUlSwXUaxrPuCw4q3AMDvev5oeV6kfSCulQc2uJ08bqBUh0F06IOfs8nbWVSzSaeQcVlKXeA4ZJ42WFbjWUpwgPWNksHcOoCd3tfywMr0XpgfDYBnJCfcYsVEgD2TrpAIKXxtrKkTCXePyv9ioqfnGSbtouSZzoO%2FwmfQxERh0%2BWz0vJUh5rnalEJ0mEmkTjIewsKZqaDCzATDAlUVNJvigmxlzZMPVp7rvS7ckF2M1NdkxYL5qavzDWgDesMhPvad4w9XIFaADy5vCaBn3cTuqABXFCwI7pcM8ycxa8ckdz%2BbED2cm2hjxlZ%2FGFejyLR6uxP2DL3d9KVmoHoV9Qp8QiiHUEoX6efNi4zkcmX7HiJmPCw0FFjxb7y%2FcdUvno%2BfofZ0zSCK%2FLKcjcyhoDgi2oqcwrNlYAaCXqeBJtBwluXfVL%2Bj%2B%2F5pIPT1zYMcmD%2FhaRKXcf6DzUkkq1nspb0dXmM8Pp09XbLI21Y1%2BNt%2FSPYrhCqbE%2ByHjR2NbAwGkE41uaUnlW20%2FXZC6Tj2Cs6ZuSegbhAN8DppwrF1uspziF9ZEc9Iht6XGf8fwqzeftK5ILzvSove0PUDe3ueG%2F46igQAiGNZ3FNxW1Y%2BBIdzTrQOLtL2pSf1uBvx95EuPPVo6Gs4xOwwfPHjDEhNTDBjqkAQ9S%2Forri%2Bm63VwoYCwY0kr5JqQfFCoGfxS%2FDHtXr%2FVc%2FxK5TJf8UPXdijHKq%2FYj46ZX%2BhFWm0kWdPQJFn7fVUBfZIuKatmq7vog3WMaTcujmhahviFC5TRmHi52wbK169xtBe%2BmbpAmXFUzIOLX2qjUxSAVp7gcdRqdg9hg6dBV4nBTvHu5LQDjOMy20KBU8tbYcERRIFKnhwzEdGORfzBDwe5V&X-Amz-Signature=d242a6e3a3cefec14a89fd2b793536ebfe6c0748aed048d9d8aaa4cbd8d18781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMUVWNI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC6RkJv1yDlMDRHIAIyx3PmbEnmWNGBlOdSQ9KXiI2EHgIhAOLY1UofSN4cWEUMVjQcT9e1B3HsnS1xOuj4i6PRtdsnKv8DCC4QABoMNjM3NDIzMTgzODA1IgwMNzF2uRqQcj8BEDMq3AN2e1M6NjKoLYlH5rQbps6bMFqRLA20jpjcnbVlgKfk%2BDuUR0vagbBvqhf82b2I4va5CATXf%2BEdtDlGqqrZrobVW1EK2IhAL7dU4rQL4t5GgT377K%2BpQTsVumdYCSnsZaquSsiU6DYzEn10FNLEfiaIKBqUk0sOLHaYkkOTlCy7qPfGD9mY2odOnXiiKhHqSIoR2zVZoUjwiUI11CmodnK5UAxelR16MjBOlIjAuspmzJ9PTU0Gtay%2F8uFdZZdGtkkwONmxhdXZqRleMEMzqf0FsP0iwP0kExYABGDDXZYMQyp%2FOHYDtEfOg2uh3yyOJiG853343wqzab09ZQmu7oImF0lmgp7bAgY0eCrvQS9hTuIFm6tMPDc9wl5OVjwO%2Fed6x7ENd3udswlloYFESwrRVDF0a5DI0uFXpwh3rg4CDzoYCWtwmZsuNHNZahamwMiQRazfcP5VxcL1pADIO4NRwgqEOh9lFdISCO8fKRaTTMuXldlOdXmGY6vw0R7NkV17gTOvDwiGOP462jKzYgIZ78OBIoEeJUDHvG4xEX3UgQei3r52EVHL7CPRZn1zWMhVwKZrBVf0nkMrO8QOLM35cwOINdtoesSLcs3wESrX2SRqc%2B6A%2BKJW35YMODDEhdTDBjqkAdskJGRsPzX2ZgJJhSJ3hdeUBHipbjUOT5yKoNxfnpMT40CRsU%2FB4rOXJasdvO6IYBrh%2BXBD3VqvmS8vx4UPfEKFmV8nqrWuqjAg2l79fIREqBZO0%2Bq0TMRRkyIPUuEEQkvYOUxnTnFahGENvSkargNHzSSd2fbIZggEA%2F1C9yCBx59abkuYctUwxGJAsKWm9sX7aafRMgNjaQvcV8etCYUbe%2FLD&X-Amz-Signature=bb2004a0015f462a2494b06ef0b5124676c9b0884d9ce1f25bd078feeabffabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
