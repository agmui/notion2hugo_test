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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTOMVID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFFKByo598Qe%2Fg2maudGj08as6pIVEkBKpU%2F9Gnrc4a9AiEAp2uRt5E1DExhgaec7Au9vNeiTn2RIJpVc2du5e%2BfmW8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBZ3hX8r3mn110OfhSrcA6jKW2FhE%2FOXLs2A8VXoBwKsyOuRHydusnO5rB3pgp084eSJXXY33jha1Y1opaalRTaaAFq%2F0%2FJApmMFVFXSQbzntlC9OuBGReJOz0CRVNGWIfJ3Lj1gVB62jRy3tSfaFMRQKoPGUNJk8PFV9YMN9srs1E%2B9iQnRv%2FRhsBSndHRNzWNz3Z%2FewNDRK6UB9UCmE2TLbgNwt2aTn4Gh6ZbwYBJ%2B5xXh1xt08vhAhuIHxmWkoGEvQohrxachl%2BqCY4NIU16EXq%2B%2FqIxMTwRYixP%2F5bt4YXZQ5DvhoCDYIdbuqTPoZOEFjDA4jaGfYmtNchVArXEQjTPBF98dj9cTRXuWS27%2FvLqS5qXVBd4bX%2FiRNO5QSWakOMQ3C%2Fk%2Fdy43hnceU9DXSJwKJ3KPsFSXNttLyfkJis90fdX5cKERUktNCCtNC%2BI1C8xWFOx4tiJ7KsvzYxm3Aq6T5ZDpVtWiMnO9jbi6llEQqoDGCjZWA%2FZU7kl72eJXG0RJLa7jXt%2FHFrTIJvN4q1TcYTGQkcH7LzAwdG3q4zlLcqdR9j00y9d8lV8T8gfofXSIHS%2FIyoZmeoHgyCTnEQ11vl3h2xhyYDlXFNgITEFiBiPepFUTdLGW0UiVkuCDvMFHtS1%2FkDfdMIb9iMIGOqUBZmzOgI33WO07igqnZi2bqxx%2BRT%2F11UUn8BLF7AKm6WM%2F4BQUgngIY2nKwIhVH6Q2xBFJLofFADlKhZ4y1TrvQD6N2h4fnZFYRWfi65M6dtXdRFNZnvvGqBqCBGG7H4%2FwpCQn6xqiwVn7JPCKwW3%2BALMBddHPXFOLBYQxlyIsolJxFuOhLNIHYx3O%2FHdKaD49j2p26YijVq8yPKEawjYnnCyK94tD&X-Amz-Signature=c90ee3eda9d5679dd3feac61116344e5adaa92c7f05b078a12e4661a5baac0b3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISVXHBI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBO%2Bx9m2xji1%2F9zQQyxOCwh%2Bo7ErkmacoV734CLywmVzAiEA7q8XVmBT4Y%2FijsRQ0a7Grrc2IBTrIYzUDgtzPiSYTFAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1wM0wBS9hLzrocxyrcA6%2FeSzIhKSVnC6bBTk7ccMoWi1uzcwqo7%2F8OxNGin%2BUyxBHGF2qFpt9%2Bl%2BwDrGHrpnF7nGg0ZZIm%2FScHeQeITWBrHysoj5HK%2Fmv1KQ9Ff1tzqxy%2BUDFq3YZSFzErLLQxHmcLyWQIKNzQSdOPW5o00XPp%2FBvkWH8fnRvdaZQjrwRNCS8rd9C%2B%2BNgYl5WEo9jebsOfM%2BN2iPB8eN%2BSSC7pWj%2Bz6s0P7HeyOmQHvRS7FBTwi%2FhThtkKsxMbqn%2BGQNrO4N1p9jsZ36zq0PWwKWkTpeElzJyJhUNIjB%2FfOwLqn0q9acT9azG3gQ5Y3oaxBvmXSvcSNEpu8VEJbjFXXVa0F6j3%2BBUe7zBjs6msu1fLbwlHEqHbpn2p%2FzHHR9e7YFLir89efJxA3FCE%2FFgFupuv0kD7NHAS4PapW9vZ3cGgutOMoXAwtcY82evEv2sfZnCdFNIAhbuY9cuJS5vPvMjPdIvUh%2FAa8xdSYq2QTDe5vD7W0YsfKviSbtaIue3rnSOkVU5Y0L7rZpo3uYBRxf22PgILNPmiEXTjdUqypc4VKtaSIVROpfh62xQ9LxyRHXR5V5xIaKCfdQV6bFKVrMUmQMmQG%2FbHWIaUPQCr29Hzf0IdQ1y%2FM%2BarFnud%2B6pEMOz4iMIGOqUBkWx3zuC65ZQHSz4zJsKLmg2n4tgVVIy%2F8212zmb4tqO%2BwBZCaOwW4GeyAP6p6br6mr%2B5T%2FSIn82nKNL%2F26vW%2Bl00XgF5iOEo%2FVkcooORNh9UtUJQjzSEHIK3FLVHf45m5H8mu4POn2IPPiS1F6FvBmY8MXJDodCtl1mWvC2VfDFdoAdFqjiav%2Fs%2BVJYkAUStoYyP%2FeHqS9LghMye9iDHzACtzBTZ&X-Amz-Signature=4d6cd7a04c43bd2c9456d5d677b63eeddfb0a9f52babe99b1f1b568b71632075&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
