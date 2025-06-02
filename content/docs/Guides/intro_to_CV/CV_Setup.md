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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7YVK4A%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC7HMRZfc9iHfj8o3RkhmH8TfJk292cnX6j8HP7W5XL7gIhAI%2FXPYr%2Fh16cKOE4bCD8oGxprzeuYKEKZhTh1eCkN1KuKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5mk4YCNctqjlHxo8q3AO6T7GeTpMKnkXjCv5TKMoRK6TgaLgG0h0jY1PuxhOf4zIT18xHjznSoMPNvbUlaM1%2Fc9oVa5mgBUIA%2FlTnwOkxlkqio2dMD7%2F5N1uXQbRIMTVdS51K4EaWtMBOZUPps44pdEOibdBr0OD%2FKa4NXd4G8qLb4Gsubyyx%2BcS%2BwqFAfjDT7iAxGYUHi1xdaLP0AYR2u19Mzih5PSWJw0hKdsgtt5onz5yk2%2Fnx5kjwNFfN230Y6iHxalXw1ej7lVhjgEPgNguF6Iqf91yv%2B2qv4MkIeEufDLFG%2BJ6bg2jBiNmAjQM%2F6ydaQuCH6vTMcwoNH3d45kC9Y%2BpSExkQYAoZJJvJk4QIcvzk3pyPHy77OtCLQmOqA5npxFnWUfQbzMCTGo6gTWD9OJdxUcquTC0GZCTywzJx0mzNBmGmo0us9cxaBFRjQmnTsY%2FJdfarCDFmY6Job5jSortqZGqU8KzZBlf5uBodE1YvikPaR3EAismLih8lGu4Sc8YP0SqkQgVaK%2FoBxOvCSUCzSDgjD7mqM3zZ1tR6YmIXkDmbKFjDVYi4Z%2Fv1GJXAxdRJ7o3NDjc2g2NtCzQTS766ThbOyqOZWh5C79NWY8lFVNjdzgL1hlCMeRSdJhKHj%2FlJk9PhODC7tPbBBjqkARINmM2gZx8dQg2sV9TWtBN6zQcpIqB3M9j45AzXTtxIE3HW0JQl57PijYanbl%2B4bCAXpMqUrCFQDiyTtJG9NNqBqGKxIvt46oFVG7jaYd7A3wByK391VmQ9yULpAEanRGDrLQiAqOdfn1RxnZVpqTDwrePESAkcZqMt6kRlSGJoBIHuEriCBIECs9pEFwhwsbCG3z06BgrkAAtK2i44zwx6Rb2k&X-Amz-Signature=c42cdbe15ce050dbaedef46a25c9e0e8788f63f4a7771fe78e468f848503a513&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T363RNO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGWO%2BuJStOJ5tjMVUsZjMqX5CH%2Baj9Cu%2FXcIt47Vz7fxAiBALS9dmQ%2BvyNezotDtnBJmUS0RGZXma5MHzZ%2FPTFrVUCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q2Z8JEL0sPL5YzUKtwDRFWDv7FqE3bVEgaO9XzuK9ItZSNF9QofCPaDLdLz19XIsnODDaf49DVJrLoN2BkdvOBLVd0DwHyp%2BLIEQbpZhXhtqTPyQLblp9lnDLAnhmoftGm8sn9rq8KcNV7mj31ASW37jU13SKYxx21HEA0dE4s7JoV7ACSJhy%2BSMJUp0bmkt2VNt7A5mARjr%2BXIL3bQ2zIMfLz3kw1%2F4ZpNH7HM3KgqaD%2FcULHh7RgRiozhzcYXdl6vayLtpswgyXjy40i23cHFcsd5A%2Bc4OY8nwcW8RNsXuQqnT8ikTjymLofyfNJHAcGWQsEPJKYtBtlbcPpJDPDjmz5Dz%2FvJ9Hnmpt89CLo4onrPieYfhza3NuGdGXgCr5y4djJwxTBxVdovl89%2B6QF2rEcaZ%2FKai72zKFdXsrlzY05WUxKFHoxEiFfmyMAEnOUzbHT2jxe152hF5ukHibZzpNllrNJb0KAg3FNfIbXE3BhUR9N5sNt4wmx5shi%2FdwBBAHj0zW2pedwZ2%2FRhDmuqT67ZIJvG0%2BLXrMcxmJpJHZ%2F99evw78synyAYh9IXLxOkjeuSzPaDYELGI82r6E8eOrdSgDz2XDfNA1v2GrzBUI9ZA9NzAyteOlO0KFdyVb7rhFYI3L%2BLiq0wkLT2wQY6pgHoa%2BKNDg7MqSNwP9I%2BE2FQKQZ7b0F6bQ2coX39JiyjFDO8tIRQotlQmA%2BzllsZTlBFTO7Auubt3xP3XqO0eQxMP1gUu8CnPIakBSbgQMjw4LltknE7nPa9Funx8vUr9x3FxlF2aPJjQRqyrG%2BOcFHCXoT2%2BOYToJYszMRYHIWfLZ7cZS2bLeW4g6L7ZuljmyQwAc6n5H0K0v0vLqnBRle7R7g2GOOC&X-Amz-Signature=8e542a2e7c583f31112e28c9edbd6400566b3f2f0f7af7d462ee16f39675002e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
