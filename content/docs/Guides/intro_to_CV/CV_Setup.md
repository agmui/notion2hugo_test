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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQNIJRY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFqwNEAX1eqtBuKQQQrlDyuh7HAXgkA9BMxEFbFvjwT2AiEA5nB%2FomBT56god6LQXGvOy15pI3IwBfAZW4tsUtMbfQQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNamxujM1s41cgNCmSrcA5zo96ctWOnG09s3fJefqoarP5eONCUMofjZl2pA73tmAglovZ6x7SOvcyR6dwnIE62A8VWSP8YCYa46ahLGpqLlRSE%2BYlmJc1Jc8p1dvjI4cIwS9i6T4maCgTn9wfsx5EOCodwbrMLFEys0wYVMoHZP%2BXojV6rlJ1XjKmBNQuOWXo7y9A2EOmBEHvoVy2zajudDxJftSL7HwQ%2BmLlCZLeT6jzfHjUxitwC3N1oOd5x8p2avkn9%2FtyRVy3w35EEOHswtdGe6A2V1uVqSiDZQOA3fEgZLM6%2BTPvBIZSsJMN%2F50%2BhIV%2FJFlvkNaHl4EMFORBDox4252iN3ktORkPDgMmKhUIABgEcsX3n9lvwoJiwwVBorUdPb1%2FWBKiQ7MZ2B4p4NTkEZIFNmM9OguOTH%2BRGE31ARSptZ2aLZYS8duBxzTHkadi433ipa3uxGfGHP0gEGm%2FvLay5tAQWJZGYD4bTyqhx3CnWcR8VzzAnZmrJmQ%2FCDa%2BUyqrI%2FjN6XCc5T3xYGCFS28O%2BpO0AG2HtRKpQZuEKcmteTW8kD50duJzfXl9QDeNjGOVwPsJ49ijj1ExHZI97bqsHxknkom4%2F3Nuw8sfd5gIol%2BJMP84bo4S%2F2n8xqCLlcbSdIHyYfMMGNsb8GOqUBHaawD4JXdbHWF6qQmv9OMtkuk7FpOuNY2%2BLpfQKaaIJY%2Bd6h9FdRMLOKYKEICCNcdvqEp%2BFzo%2Byn%2Fd8a6ewgU7MyaRwYq1eTkfBmRMMz4CsDcTrK2jPuU11VkGTPd6mA7GOEaMILrXbA%2FgN%2FqCZt0pulwNJprwtczZJjoHKQ6GSEYASWNwWSc%2Fr7z2GZ6KIsUzbenndvh78bJQ8Ql4tmXT0L3fWu&X-Amz-Signature=63b3bd167f8d83a2150d4f77a132875d0469246b63618cc6232173228f3cf8e0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXMGCUE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDVhreiUQgyB%2BUP%2FZTxQVxMK7ul5autV9Vut8NcBBtRLAiEAqv4k19h1OWRt%2FER%2BtnvAvq2dAOi4PjcJ9UqeDSHAYkIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgTEL6aPbW6zoyNZCrcA0s33HsSAlLmLNtAiyR1cFaE9IGYsGDjHucTTb%2Be1y06xJEroGbxxhmWduQaxVi1Y1JyYLF8LsB5bK8CZAKCm2%2F%2F3SaXPiMHY%2BJ4z3GQYz3kJb6EmFDe2gklm0s96IKHVEsKMCkk4REJXLAOQ2XSzI8M7YoUDIgXZ6KGKfgaWSvaTT3tw3FkwrRr92iMo%2Fw8RVFxu51TMTXGXyu1fDERTx1mFj8FjqVYt3Jky3PRRtyPL1cXuJeeInELLlmGnbcC8qWQI9sd66YJmQdC%2B%2FT%2FhhRer2Z6hEGz2g%2B6102STWOyWVvb%2F2V%2FAPsHb2UoxLO%2Fg34VKgFZRE43lpgIvpg3sMOyVXNCUpD4MyY1T0IiCKLaTytwf1ktgwI%2FPJ69BFm9h38e7TvNOO42k6Q2imF1l%2FszxRLTT3kgc%2Bf%2F%2BAltL7RnilNE0q88FQxwzqsQ9t0F59saQwa3C7SmxQqknU9mnu7IHANSu6oAf8UVAS4ZiyJ5p7w2JCLn0NRkajmdEWGGJZEixpDmxcGtYuAlU1BC24kjnTK%2Bp%2BZtVznkpoy5fSTILJyPUoPD91YqvQTITvpwTvHFCVNuqBvWyB6CYIsp1QaA16LggUThL%2BewEL3Ak9z%2FuGRW3pkUZ1XfWUVfMOCNsb8GOqUBnmt5aaIRv2EcFNKJeqkhK1sGBptcO6tFR2KSRYCWz1E3HsqnwkeJ%2B1qot6VSFmXcOnuj4YZdauv2psDpXZJmFDneFMTNADLbwlyATXzDeB2fnUsSOiolCyoOHP3GGmuOQd50ue0hvazElALo9Ks59ZfvGd5Apcgtu9kikOK8NANIm1rndyCvvycBf19cQeHVIAu5DKrRg%2BdyRlfM3BCfXnwtnIFH&X-Amz-Signature=2860c5552c58ea038df3de2e3434f15563c785a8aa21e7e02281cb4737b1c7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
