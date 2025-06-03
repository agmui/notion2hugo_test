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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG6SBCB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvE9UWZdMw8uFuDr3XTyw0CWtuUSkz9x1I0bWqLlJgDAiBgGKlz3uYznrpZgCislLZ8g0bv8LiSF60ba0QnzYBU9yr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMhDI8mfLfkxFtmDvvKtwDq25tW0LcHcvSqcSRidqu9aZYLYzDY2no0rKx5NDtBXpDBO%2BmKTnt%2FEkMp9E6vfJeqxUOzTvQBYXH09TMCgubzGp3FA6RD1jXGz5VJ150vb5ZpzcSzQQSMLxss%2FxuC4d5bzKWZnhu3XdzM5Lz5HGmbUvUXqHWbZ%2FHdDIpuhDi%2Fe2WFKIUTaJ6S6J%2BgzuSjrq5IEi6Afzk86RBLWJR%2FHwWL2nURoMlZz%2BCjcLa%2BLCYx4F34mdrYgFQEfXCmRWXQbeeNS5s51FPF6fv8P6did0OqGc%2Fzh%2BYgylPNucRI7R7KkAEBaDmG8sJX0IziDq2ZIU1tueBlpr4gCZV5xzzgTNY9syGaHeMaHfk1o9DM%2B%2FDK7bG6rQqjzHA24v9Epr56gmx%2Bc2R8MB8LECxssbPvwfPEScMUd1mmG5ct4Q7riZ4HCwJrXAIn1m00CZWnyfD4lD3pWnXML%2BLQ9AseCpykgNfb2%2BqVBWzO5JTqK6jxcrBxI09Gfn7ZvnAWpnUIaZ%2F%2FOEJfh0U2DhLupmndTaeLBFmaKOa1MrHXnMkS%2BTzeF0cAH7aDqjXh0hQEpY9JzEtV8aU7AE%2BLp68q%2FClUknlmw1jA5sSw2YpKa6pdEbU0F%2BtrS42aUushOcxpA1AXP8wrff9wQY6pgES6ewoQb3ETJHDz17icWEFKilIKrTnQaS%2BQUZ0Xx2GC%2F0qKASbPkYJodOpVoASJWXQ5gmZr9uclPCqbOYlDt%2FiE62vULrtFEcOQ7aLXgwSdZ3WjaEZajLJJbbxyLiiLHsbSu%2F0MFRk%2BwCj98IyEYJTYtlbek17%2FfxkESWxXZI%2B8KwJu9XAcIUwwpxJUsKrG8SocMGwX2VCMj0MiJI1AG5uKXiYefbd&X-Amz-Signature=b38d187cac87c9920923173aeb1cf0d642b01fcaf2a5a0ba6c76819dea0dc1c9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTQ7DNH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDG1HZGttlC%2BEQF4FVd8wR1KUWU8brrDOlDnxIKvCuOSgIgWafw494i%2FKwRCPLmCcEinQeT9TsDuj5OgFqFPPE1PoIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAscNxuojl0qvgJzACrcA%2BYN13rRCqE7iqJ4q%2By%2FTw1mS5NbSwpvQMe1zKIvAoJqWb3FeL7VsnEs16HDrB6yDYnvUqD1Yf1lUuACoD5NW5%2FyuYaRYGYQcUJe4J%2BYhSkT%2Ft88dDsPHLZxrxTFjM4KycSAJhK%2FiuI6pt0derHcHKqpnRxWP8ZKSX%2FLP50EUyDDjFJ71Fqutkqm%2BYcE11vSj%2FqbOgXjl%2Fpvu6tgl%2FnmYRN1YkZ0Sl1yCGLHkIXhItmS49nkGYGg64a1yyIunFPtlmSwnEK2ALEOtwAS%2Ftu5GjK8ZyUk6gRC5xXHVnh0OH%2F%2BwXBniQwTXIjbTwiwfQwWom6Pc3qiMM9o0kg%2FRbMt7ivNJg1zQCp4K5%2BKkkeLDgSV3BJwUp8R43ZdGZ0fYLxXF4%2F6f3JlDmD2YnjTyCpg35ZONDwnqWVZkqDwiPuF4AbFFi1747tUk%2Bpq4bJUAvIO1hL7LyBKxSqk%2BM2S6QDOqW%2B0s7aTL0VXTh2Ow1kAWanRMHmELhhEQ91DxbmKq2AF5kXIA9ZRx%2BIwOImzPaSlQISOi7T0noUluEIOaFxWkkvzbHkXJj02w%2Bkqp%2BoHd0%2BTcFiW3UogVO7hfrD%2B%2FldVdervTL3EMj%2BSby7qT%2BM3wBZ%2F9PHCrg2S4dxTgGmEMLH3%2FcEGOqUB56%2Bty7LDyscVhzd%2FUp04rluN8wOuF99Oew5IXMBP%2BQ38xqUgxcihbJkLL6%2FV58OHtfbm6aZ8bkXxYdyzgmOP15Ko2b%2Fhkc6CPTTa3%2FC1wruup7K1gFWdl%2F44H9Kyj3%2BMLAM4Gz%2B8rC00Orv6XodBCMOdJ1kOBbZbeoEoiJWHgfLgUCvxKFYSNDfR1Mkywu3mmGnkX%2B7j7ytaaVq3dUQ1g5E9V%2FNc&X-Amz-Signature=56ba0cc0c3418604713b7abadf8c03d31bce286e556f684a49c31a63a352ffd2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
