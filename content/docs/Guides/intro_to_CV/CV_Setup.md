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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE4VZUS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCIZYbNYNogkM3oWw%2B3qBXknXNIEvJjs26WiyH7Gyj8bAIhAPE5rv6U3pDrrh1vcgjgkpAuFXMmvjcpiH6IXoFrIaV6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHdEYxn3KB8caqIAgq3AMuyU9j6EWdTUBS5YKBjVciPuaPh5A%2Bjs4VrLVrAmOp3BT3a4eLrwOTPwNaTkWGaU8DzUK%2B6yh5cT6aX0ENtFwMUFCx6C2bARvDLxU%2FwtAaqNWZkvQctgvwZSehG2kiyPU7axVyXqlsOBsvZ5rEafLM8NhznqqG9U8LVtBbxV7HXZ0WeAyaSpQ69HQpAzPkyp2wBhWZVMVNXgpigMTPcDQVuOdYSC1JMTGHjxdtVuIyAJHgQkuuCNuQQfADVzhgqFNd4WBhYu049Scsq%2FrCxBoqe63Ixai4PgynQPAfLtBaEPcdIQjUMwl4nr0%2BIO8vk0rc%2Bnxn7qCGkueEk44qctKpdr3jDP2Oiz4RemSB8ch94hJ6YDoNyrEmYCWZrxtofss4FxhwpNbe6V%2FkrmSZrnnFH32dvKB67SMQtsyanlS9W9zGpEfS13NAjHrRGYfRKr9%2FWRoPI8Wkp11oOMhPr9ENdOVEgdbmldxOlh%2FiZJ%2BvFXw6KiVOKtOgkA7Gvzeao7gvAzP8H3aBH3z2zceNYeSwz91%2FmoPr9jo%2BoDU3GdrORzr%2BahZrS94KMQ%2BoTmxuyXdklbVAzAJYJm6IjG%2FMsemBdrkRSd6LpyLjDUb2fdVchxAa6xw7wyiQA%2FdgPjCYj4vBBjqkAVZ5UkgQSD2qslBcPgxq%2BpWgXNG5fIAmCbhLHBeMKnXiLlpngZADbS8HBEG1p20az9egQtLtzzqMHhlifzf5a2s6VA6NlFEdJaDbJ3VxAoaKKhKutv6NojrI58q6G2d1E0%2FQSv9e54c8Sl%2FK7PZBnr4VeZ8A6P9e%2BzwJ1EAl1yKS%2B%2ByapAkjz8KCNvBdXaZgdvOjLUFq8mR8Whawh7ZyFPEormr9&X-Amz-Signature=6b98836c6110d9bb059e49c29462e9d700c90022f1e7bd198bd348b37500969d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAIT5M5V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFVFxwAeijkXoKobBvY%2FGkZ%2FTXQmAFfMxSxr34TaIIYQIhALX16C86zA%2FCczc8MxCBtxGMIe6qFBrkRBbCI3Dg6PayKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FQsn3VwHOP1Cxp2cq3AOy29%2BpiRZT3q97lbeHL4ZJ5uKAeYeWQVMSFZCQU6G7Uivs5tQ9jg2R%2BPYS4wZGT%2B6sqWB78J4EZmCSAYbREvHixOVWJHynORk2T1gYVg69cL9qAjiihPtqo4lUq%2Fd8HEKGfp4tpRZiFwPQyEoo%2Fj5R7UP%2Fqjxi5T4ha0AU2c13K3NBOT3sfPgiA4oca00lZT74az0VBGDrvAJ%2FGr%2FId3PiCJLcqOMq%2BwWkUI41lvQeg7NxiKd%2BiZIl4sGEabF%2FjJ%2BnE1wUHKzfPzvw3MxuMHFHMf9hO0AmNAb3EDLpARBOpcXJ4aNkuLW41YdK7gXDjJXS9U0leu%2F8hJNBvzAjD5SfbeZueq2rFZS4W%2FPAVUmhZ4HcewGlYiagzscD9lcUVyq9ZlG9tFjuNpCh7Rjp3ZFUT9dilBRO5FT3w0H%2BwqgRZ42eRHDDf8IDsHJN3%2F6AMzM%2FGXMOHlphyyNKhp5MOuCQUK2%2B7WLu2ktg11F0B14HXPpLulRwmSspHcNLtYwwwd8A1Mkp5coHHt5EJjynnF8K6k7AdU0kceo0sMxhaEiQOFuVWigBYDFajDepyl7Hpuj6oc%2BE9MLG%2FtBA%2BRxQkzSJ1Zt2Nqn6tI%2Bt9XRZJDbWT%2Fl7L6IcGqq5qZSA5TCdpovBBjqkAUwYDRke0hvQC817W6alto6qLEvjoq5gqZr%2BU9sKHp5s0gkryUBsqziuvbqKLXo2IfEJaMnlg9kK6lWJwBKmNAgEKoyfCB%2BZ9iMe4mJ3Vq7zG2x%2BnVbAYJOf3hvCQg%2B7WWZ97QX7cxlF9V1JD1zEVbuVWhC4qc45ltwsXQ92GOigN6K8jMz43KMI41azhY22OmDRSE4EA9713XlQ7UpIMoYrg%2Bey&X-Amz-Signature=4a5a790f040bb9cd84dbc285ec3c4724592d8c6455efe9705c163e6255c25975&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
