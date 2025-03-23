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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3GY4OL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG8Uzr%2FrU3HCVZ9lUDw8LemqNQuknMo4VK0FSkzHjJoZAiEA4qbpD1as76XTKZk96dVban3VJg1VyyioWK9%2BZoJLzkkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzilA%2F8793hK3WVfCrcAz5d2IuYo2AYhwHSQfuvx0J%2BiHmf9Xb29lbCVYVVCeOUqy%2FK71vqQspNuAKR6F8S3ZS6vkkWRBfu6h9b2pCKgyrnaEq2%2FtLE6ocJmME55JglVIWbvccGpADdUuq6q%2BAo2X0bKXzUWqHM9%2B0dYQtJmw%2FTe%2FoyCeIfmG6nqVFr6%2BAO38EyYwEBzk7PfyH9ZT%2B6VsijhbyW6EfOAov9uuvigRUNxsTckByADG8TpfXb7%2BCWISCKQ24Fj5toDyCLbFJce2vBsGPG4yD8OybuMLuxxK30FbYiQG89N%2B8XFkhjLw9O07cU2d3GjLkeeRXgZB7DaxoGl%2F0axwlJiw2%2FSVkV4IS%2F8ANT3TtJKzUf1irGM7cqkCLqprOE%2Fr7%2Bo9WLW1u0itaUZgNETDVzjZybluMj%2BG0%2F1b9Ase%2FhClie%2FVBJOKJAAFU3N4%2FE8J69PMxWSnLZootAWAkEgYwIEkEvw%2BB1kHgEgOn7izTo91ybWhr25VtBhhrK1nFcveXpHVe7UOBow%2FYyYAvVDoMAuv%2Bq8d3VeVgTVcAR%2BTqT6xqckW90aFpu8em8QAkCOzX6GXgeqDDCmvX%2FWmeYygGA160ubY5IWZZ6%2Fb0KZLlr1PeaNXT2%2BgM%2FpEi8D5uGlS7xaLR2MKby%2Fr4GOqUBAeEO8z9n%2FNndTcoTkrJi47L96gNZPz9AcrAAEN%2Ffn%2Br4h2aVaZr8FfYMI%2BBnSLF8FimMvyVBK8b%2B2b7PyO1D2iI9U1Rwlf5Py31%2F77wVoYR7C0t8hOsPZfeDtMqKN46x%2F5xuCXItNilDf3EMxdVkATJd6jHiIsb4MxzZIySRpBZrWT9NoIN5aN43jnMqj6kPhnibUWPFr5O6ciSjdIY%2BfVG92tDW&X-Amz-Signature=4c8c8bddc5dd90be7d78ffbfe7e730f28e267ea1d6a7f3f9a7ccbfc0ec7cac54&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQFER35%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCyX%2BwI3y3kDMhknjZ4owD5K9ziXHb5pq4s1J6U53xgTwIhAIr3VT%2FBAav2kDZzQi93wzBYg7Q7cKPdi%2BI6gjZFz13uKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaccYljavQxfTwDzMq3ANp4NsQfewg9RQD86e8P66MvqBqeRtvKFg%2BRwmzQk1C12PtyVzGquEDTxcT0qWkgPeyn1aDM3kSbKfre3EeLJ03WqOLyYxoQZGC2DIJ%2BC9VQ5DXW7Hp2t8M97QIHPhEnIUQw407dunBDM4788HNCgh5n9%2FdR5xFqEa%2FS25LnSv9JNE0b%2FLRkY4Wkk%2FiZJEUjwxJM8jqzVoKznI%2F3CuU0rHNE9Xts7j9UAXU34B5AJ5JruA5PRo6PaiyLnfr3Z56ZGWSSEN7sk5p1BwWIVgaCkj5RT3DmdLxDb0B8PU710VnuuOZnyVTPV%2FwIypoY4m%2FcyRUnRJyTCfYQKh72dDx%2B3oZeFna0O6%2F4ImshFJOB5LG0EKEkuXagrD9DMECKIOiOboFCJsx4uRvRQDP0vn0AmrM3owvygGaAeNSKoc33gbw9J9zMjBWKvJqfOL2MgH5vzPM3q2dCNYtjkg0l1J1VpiQ3P2UG9stEcJdDaFYO5ZFuftxCXAZRm0GLUOEJNPI8KMO8ue%2Fo9sDlPwEMcX6MTCbXJtvZtY%2Bs7Lsw42o2uhRlEg3bmLQwgyCAij6WmMoHW8JIrPoYAXedvq8wVXrRuAMkrE6J2x%2FdRG4p9ObRxcynyiVQ8YMDVg6hRkD%2FDCR%2F%2F6%2BBjqkAbDf2nLU9qeI3xsF4NKJFVKwlsTm%2BnhbWhOYV3gyNqEy%2FtaZTBY89JV6A1o7fpiRKVxn8BuyTTvKqMG2HRWhkAzaHyc0GPfNBl8iibhozp1ZbJ7BlZteiLrGrDewNMbrQCMdZQg%2Ff0QyyTytAJ4sik%2BCEwlEWvRo%2FVIjCcfMX3Lzp4QyFXH%2FUJqfIT6IKp6Gt9J9%2B%2FbEko8CXSMG9QvShgHtUcGI&X-Amz-Signature=870aa2fdc36e2a07b61c1b597d431b57d223ae0605478b8e65be114a9ccc2208&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
