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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XICHCL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDA0DbA8i1G%2BErcDNGnE13IYzymO5JVhyW81jTpcBhSIAIhAOJl1u7UtqEAk5DbGut3IxkCRgChEnyzBtcxuVcPxr5hKv8DCFcQABoMNjM3NDIzMTgzODA1IgygXNa67oaV9N7AqgYq3AMdjZot%2BXF9%2FllbKqMUB37onklwHyl1mTa5q0yhbTJBeBslnjp2aARYruDbeA3K2niZEZB1xXnl7fVztY9KzCmo1SMffxlHa9FCyS3AXLeayudaCLUsyDkz5hQdPVDEHli4XRMKTfRgZFHk3FWy%2B1SuklCpPj%2BjJ52hB1VahjwlggvXQRyuNM7ci%2FV550f0hIfTXw7U9hdTV5mYoTqMicLUTxx4DoOPeqqM1ORQGtMvPVY9BDvjqDBOjGYa27Y3VoXp364uNC%2BWVqYo14bVcus5E11W%2B4a6B6Vy5pTCsGA4cKdrTJXpmOoM2PpiHRjJmrTKvqKneffLIHjau3hW7Tu%2FG%2Bw%2FCpnEnWTlxBC0v%2By7%2BhnxVVMUgXmhqPeRgSjjXBXr7%2FlV2rqQ3sLafh%2Bl60rQgN8cOI17Zrxc5EzpwPwM1dpFe6IhN48cVRvwuKpI8kmmwVth39cfUDUMUaDcIkdUqg3NrHqLR4D1%2FPitR6eYbjJORmwWRxCrZVcZiuaUw5EGurkY%2B6MiajbqyutUFiILLLUYEeL3sUE42YTC4IeHeJq5AqVDDjtgePBS6G8R9HcZcyN85yPDQS3BUVF46D1HQeRhllwEfSk1%2FlKsCkppeu1a7%2FVp9Lt%2FTQxDrzCO4pHEBjqkAfDwS1Ajv2S9cBH4mAd%2B8Rvk8jPKhAPna78R4eW5yuIVnFx2enIUmQhqltgw%2FI8olkPzY4Oht5e80AtW8EvtI1G680uJtEub35VYfGCXMJgpJxrow5oN0jmw7uGj7GAF2OJwn2%2BQ%2BxXJq%2FbO7DRPK%2BZuO28DHEq8PNZCI6HdTZJ0Nep31u4xSKyHzgKzmhPz9oJ1Tk1UgcC25fp3BBOgDNchAp5K&X-Amz-Signature=4892363151b7f42a800a4ed60690359d833def073e9798b78b11a939fe30e819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPDV3RY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCwGCYQARoqXESjO7quFxGR0yAQ8cJqXF2DKhs8Au%2F41AIgPeROeZ8c6Ox5dTHD53TdAxJ%2B2o8eBlyyOsNlUBHnVm0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLlph1ubBBF5KakdOircAxRYl8bNH62uV%2B48bXQh9YVaMq5VMKs9W9Cbg2b30QsaxgPD8AlU0i1G63kYUcSo4NzKCqZG3fTb%2Bs%2Fc%2B7EqBbzdHCNvu%2FpFveMt8jJsa3HhbeIun3Hd2aG1TfkzU2pWUtazuHxQc%2FDHGvE4ZqRju1HMOrhJisjAAG1opD7cdzt6cWCBK2ln0nzJxY62aUcejwYvY5osx9TsQhlVpFbHBI2D5alSWpT7kwU4gQoSqOr8IdBxz%2Fa%2B%2F8fGro9F0PeMEP8gmS5sdmkbm583i7x7n44PQr%2FfgobS8HLd95HyXbIoLF3PoMFeXnRTbGIGsN3pcGTqRTx6buzUhsPwca5XfhdGEHHDrLbtqqf9uKkPgTObjJiWICbuN9Q4FYatZd7B1d1RieQbdK3rXN%2Bbkas1INsXXVPiILzdw1LTeBFkZDARbuoAiaoljUdA5PmhfXhIvQaNCGEPu0%2F%2BfGJ%2BEp0ucBtlAbcUqIOUt%2FVq1jGStFSSKXXuUp0rNmmb9n%2BSgfWjsUc5UhWmVt5A6JZiAPA2zMJZwqxLybzXSOemXlKeR8LpExJYuVmyuU4J14TvfTDw3IPfMJCgOWRV8YsZsWSw32ZAtMuqkvRs7ra8Lr%2BCqbyJg2ifRUiR1B%2B5%2FJDAMKfjkcQGOqUBpTsi%2FLtynkWwX5%2BCH9nCKTRu5dEa%2B66YW6ekuQtRPI%2BHhyMTfX9PxGoX5vHZwWWOQAav8kRW78M0SjTsdv%2FY8PtdYSsoXZDUGEwoIQvca%2FnVk7ip4kcYEU5ugkhSXFkvbx%2BuFb7k7LzVBvVocSiykXrHQGfrW5ctdSY8O6Iu8P2qwVnB9Z6PWcX6ZNmDd7tyooutDj8aOoBTYYHDAOjg%2Bl5LKgWE&X-Amz-Signature=46cab8dd48cfbf87da162e23961c5ca7ce1a6628bdc0a9b6ff9feb7c8dfb67b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
