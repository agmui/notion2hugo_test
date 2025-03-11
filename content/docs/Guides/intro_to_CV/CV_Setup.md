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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOMWNL2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDV1Whk5OpWcclRWtztf84lpVr42VG2wrkf2Y40qZPJjgIgITkdglb8XpHDrfhnlwBAjcrmahaLNQzZHdYSIs%2BIkJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDt59%2FDOr%2FjUCyzqircA%2FtcKa68PKiVyUBD0ORzLyzM%2FLqmNVKJoF0Mg1MIgSCCQ90awgeOC6tkrEQTPAj%2BYYkYV2k4G3XAChnzNlxj8VYKTgynbd1SmEHfyhdMh9jPMOJhJC2YRErlLqS39yEHrKatvXkbfaRzpMaZll%2B8USZCL5X7vR5wU99zPs1cYGkiQNB7Wi8m7ImXts3Np6y53sjfys0dOvDRgsAkU%2Bon60TsAB1Lu1Uj423HM%2Fe4gVccXq9LJgfDPNWRXEeMNERqFroepffBuYYqstLsi%2FNtWGyELUCmT4p%2FQLiC8XJzg6SNRJqkCIYwheEU4UWl0B43WVqXPsvwLKFJSjPvO2nwVIOGRKcV4HgsfkUxp1Zfy%2FtdHR%2FtOryzHImByeCUhjkklcX3LztCxvw5L3WEK9W6mt08vmdzAmqC7KFr2byQbAVvyovA8JBvI%2FhqdmIr32q9EiD%2FffdLWN9Yp5YmemmZDhsH89cMVUwOhqo40ua5u380fQacX%2BItAfVPCDHvJPYwzIiQg8sdTwNYohJZkWmhM136HBsQJfkcvFOectAf0NNMTAhgN8zoRXswp74JzpzjwVelhKN3MB2R4pqFjWYShyt15BUdc%2BAFyOeSyjrNzOcscLTOlL1%2FQv41xApYMOyxwr4GOqUBtLy%2Fw%2F3IhhBd1ie8h5TOTyP4dG%2F4bZ51MfBmghnHh6RHVEUII%2BxQx4%2FB4DhL7ak9l0rv0k0Czb25ykd3IBG9OF0Lls%2BGTbFiIkp%2Fy1mYEdY4HC6YQdJLPeYfXOHZSMUph0mtwyjCj2lRfHCi3pY48oagviJWkLpAO8zfQOBW7%2FLDescHpX5vUIegvyAhO%2FFa0ZD7zW0epuSA6iYjiqc%2BjyH0CdCZ&X-Amz-Signature=d0fcd79b05cc037063ec7f4c14f1877fde8bf6e4c9b9ae01c0f6cc6384f4d544&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIYO2MNA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHmMegv0wNbUnN3LdOKkjAAy6W4dyT1G%2Fi42UkhxCzcEAiEA9dxzGn8UPrSIZbD8LC7HRrr79adTegIOGgUsCezVyl4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKapMb70JeUsmuE8QSrcA7BFVyP8buJ1NAmp5nRMI2g852MbSvNXJ3qYJNfCGb4ApttK8j09EMaIdusb1tPiciJAmU9X%2FY83QhhixV382BhV3UGk2ZbgLmUyGKyA%2FZ1zrsdeSXr07tOdyJmw43DbPbwUKZftYS7h7XrdROAav466HrzaODTM8gEYYFB7Wl%2BU525Jwh0U7oJObikx3w5qtIOQ2KvMr%2F7rMxsshzdj0LAnUcwm%2BQWSxa3hMs4b6BqrizErKaM%2Fb3Ecz4ePQ4gdBX9CdBOflOSbEsN1qSwm9tYarcreDjXGZyCYb6qdEx4%2FtMu%2F0XdUxfVnpSCZzWVKMrPFPfsXkMk9GQzjeb66v%2Ber63uhQYK4Rmxfl14TNx3Vsmg0F3BfwE4iJRCTOzh1aN0lGneVxmucbIhOBENaSAnxJxJte2rizdYhU2bcRGlqd9U53unVWmwPsPMFuwtNoJYmG876HJt4pybzXygWUrdgYKm4mKpvsRd%2FUWbJiYFyFfrgRL1tgcGF6yk2oLqSlmVYqtJopvm4mL9nyOrBUUxwVHHOjxtn3%2BAdjNwzcW719RL8FKpUBT1mM93ZwsQe9lCsWP3NW90AIJLP%2B0Z1Sh5y0NIbKz6HpWBEHnk8Vf%2BqvPEFx0wwnMac5FItMN2xwr4GOqUBZMpy5BE9TsZreyTHEwupvss%2Fy%2FkIxzb3zKrceKRruyhrRa234QKBevRSvmT7xzhpzmTdkA8iehw%2BYM5A2jnGhjZRez8iIf0XbKdxKKvidYaBft2Y23VHYyQC5mpiJ6MtMekBLN0OUeLnotu9ed6x7BDBP%2BXBRLa6g3W35AR2g2XDvNNvn6GIJ8Pb2%2BR2g9AxyZgviylItk4TqD0wilighoaMIhQj&X-Amz-Signature=46258c2b398ffb15d5fa786c484279236d02cd30fb6a357af8fffa4301d659dc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
