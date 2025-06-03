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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGHTS4Q%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDyn54Xg4DJRjCgnrsNUfnpeabOceOyP8%2FzzQ8uBiQCVwIgbXIw8BnHrjl2L8gEEj%2BmCpissLv%2Fg5brOv5gh2gxELwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLNkPH9fOd5uFNGG9yrcAwt4HOCG9HSMkvd6WYJEUi8dpULx%2BNbyLFaFNOLUX0VT7VYoQCeGNgdT5KjhV5FswjUZyZxGLMlkgcLeq0fXiCR%2Fr2VqrQDlwusp8gylI%2FUp3WDYSet89atf%2FN7dkaYlruCo7VQianfEVeYzXBH1EAIhnhPsZhat9u3uZaLcWPq%2FPicYYfzcUZIKXfTJiMjqNkszELVB4GRufXz7Gn8hJMEhs3sVXVw1D81HKibHqXC%2FZUcLiErgFXeLx2umwEhwTFjNqoXLRkqfrYdDMPrmN8Q%2Fd71A4W3E%2FA9Hls7NgAWn7q9Kal0FuS1ltxV4xcBamWto9bT4T8VW5vzJZ1sJBnUcwkUwLGwXYDtKcucb%2FtHzAEg%2FYqhMvKCqVF7d9ifFr5q3UhhhcxAfCNFpmiA88ScKcILzfzTTePg4MlPNP7PjHvzzFBLiGVNPJJVd6DXqQV5WKyFHRkuYLEdWhV1O%2FdAbCBAFRM%2B%2BmzuMpiiQf4b2XBJa%2FYvjk7DqFDVcZYOtft62GWmZjmWdLvY%2B3Re%2F1Jfj7CKqVbrLC7EvDTIF6WEvVlVMgYeBSRL5umAUC7kuNsCqbKFkRtVmr3jCHSpQrSfKRCHo8sBsu7N8YeKItt7%2BJvR8o9h56VyWYn8pMO6F%2FcEGOqUB7zgU%2Fu7065CzslByml3CjckuxGrhN3j4cixf9rnaY9ELJ047Mwfi6JPOIMW7izN61Lk2QY5JNuInwWGuyn%2BM5R6JkYsG6nF1QgKSl33qcVF5qbz%2FFszaUSO%2Fo%2BJCn1Yhiezyl34lvpkzuA3vXj0e2C5FiKPZowr1ZAIu6i5LEXObTf87xH%2FJG3BYiNbuFJi8dq%2FQISFPXQr8ayxyvpbLnB%2Bwsj3g&X-Amz-Signature=5f8890bfdd67e4f877e595382fce43b697f987619efe21c4d14800f7a71c81f9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7IUYMX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDV61XIalRcW5a8OXCwKDA9EE1PYK6q%2BT6DJv3gl7bSXwIhAPZc9r27Qfx4YMItd%2FCnu7QtidbDxHy9dNBAbzY0LmcFKv8DCBwQABoMNjM3NDIzMTgzODA1Igw8gWi5GOGo7z89IVUq3AONhAmVNJUPb3nvU5kxzPM71zV6EVB0uwXLjv73I%2BNkVGeHq6EXXBEHzkstbqXuR%2FdJ59%2Fe67yHEFnOICrglHxD%2Fd5V%2F%2BjAmSMSKpGvAqivUeJyTu9y1Q4iO8FOU%2BSgI13nUEr20SvMU7Wh9s9zXaeEl82nOgAOtwoOeFdKhtvXom4Zg3EqY7AFs6a3QhAecCCbFQ4W7A%2BmAJ7m00h%2FRU7epSP5hWSB6zRd1eDrygIHFkiS%2Ftot4QFCOfZKz0HTu0CVHcA3H3s2b5OMb6cxrPLDzcvnJP%2FfESh36erHcEZmugv4FJUXAdvT0N7tQiNThAq0vOSE741sBfvVauzIK8t3Ko14UhylYW41KaJZNCO%2Br1HovfNARr6y%2BRpPyc1lLY2afb4QpOrQ%2FFAR%2FXcHi8hglo7%2Fw%2FDkb6MLSlth6uV7aH75EoDoWJMpZUyLrz5BWcrWyrYTeWqbVnTYIX0oq1YpYCeAYsnx%2Bwnn2QRuDggM0s%2FeY4A1GX%2FvE9neJHYRFxUleQUzWoMqW85PkWinH22yuESvzAZ6Q52V0ndvuzdH0vLrWavqOfLAUaCuVrZlr3o%2BTqobjIMxcGqfarjnxR2C7l3wNq4g10fhY6htAId6dyXHvFLW689kpb13QDCChv3BBjqkAcpBVRUNtexkRFsPgkk0qfgIv3%2Bj3%2FHTtZsAIgi%2BSWBpzituTfkdrQbz3v5v%2FiSKmvgk%2BzAkQxlXtNtvJeHSsnVsV2%2Bis%2FWbtWEFbHCPH%2FnQSXlFwaa%2BnA5ZnBRJ7UgzoWG7c0gOAzcs5GPXbBxYGcOReF0Wo7Llut7wsyFmuFpzsg4WwT%2FgIoQHh6%2Btj0Xeg2%2FRKLH0F61dcVbs%2Fhy%2BJVad1nKn&X-Amz-Signature=8282770a7bfb3d1866ca91ead9d86ede8707a936a84f5988056c470442bf65bc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
