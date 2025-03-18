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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QR7VNAH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHTnlsthqiaZ6cLGf%2BG8yPUJx%2FNW64OrZdphHgmO%2BCqFAiBW%2FmT2iMG3bYOeKNcnD80L1beGHSg%2F9d3doXaQT5aISyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy61eY2GrcnUBWD6wKtwDPJHQTxBq%2FLa3KyzNoz5d3CxrKYoxpNJYbds1VNdQ2KC6GoQ5IiqVYoZVXiGXBjrY76YPeNkVY3021NIINWPjUZHTXJJ9m1MW%2BchNmlim0ZHoCgZ2tcgbslowZhQ6VYvJoXLOAiP%2FY1NZ0ihm57pA2pb5FnfMdd5kcQvrrWWznXUP%2BakKCSKRVGRRNFUp2SaONY8O0zxLPUzDkY2kR37rfiulgcin6xslo3Ep%2BpCij%2FW8FWSVWlXVg9nDuvVAX4A1Jj0Syj4Y%2BMLof5A9%2BBhDxPqLabUZeYUr%2BCeBQzbvNmGhO9lO7ehpDCtdIO40zK5i7Xb%2BGWtVWtlVqzac55wZsj%2FAzUzfsZwAaYWDAcyrcHdpUtLa0A0%2FiIsr042PURKgKIKrNZDyoZOulPObTiAmqfR7tSK0AyAxukMaHLli6fBZSvkR5stl4E5G9ARblaz20OtOVh3WEYWgXRW%2BvcvtLx8SH2NRdIPnFzH5GCz9oESSuJ0D6qpqDIoFlOK77TAig6KRez6cwYMZnfwWKeaJAiCnAuwSuckpo7Tqrt7c4n%2FONZVlzk2Iq0jxd3ewUJRvq76Iv4EuqPl1m3Zbg7Cp0tsDyL2Qf2ulCwZt20Dksol9%2FnfsoicLvWSHP%2BgwkbXlvgY6pgH%2F1DUx6TRzhNSTvVc97w04rs8gEdWP1WvsDK0KDKHe3rQu%2Fmw8bstOKs36ByAkGisq7NC1tBaYfXJRTdfJMGcy5tS7UiPIA%2Fa60zIc%2FVi%2B3ojfUr4Q5iRNM50pHatpmayuB%2FaW0tetrMq7k9DqNL77Sg0n8pRccdXQwk%2FcgtTHsGwPhZNE13SpzfBUS431hSQtk81ummlGoDqf5e8nZU10i%2BWxbjfR&X-Amz-Signature=8306e5048d55ff6ecc44f56e3262b3ca895dde1f8614f46dfd1d91e15e15e513&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3FCARO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDwMrgZul5w%2FwLEFRDZ1m1Qpw6dosnZQFpUE3iYiey6ggIgfsVp8lUY146vU9vTsnSnI%2B%2BnrK4eRj5BXAVByF1oXg8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMyTgtvCKbvKxgSr2CrcA5wJpuX9wokN9iXq0nXffvqfdplmJWDFLSPhid3ol62qu89DgN3wGI%2F%2FSPh8YVzZX06tDq2JNTm9UT0fYubMtN8Htyv4SYEwEnML6lrEpZ9ZjRxIqF33C8yOQc0cAaEX6YKytwsP3ME8Ohc01DVla0oE4BW2zK9Wfrk7cC1Z014rf5T%2FVgOWj5BbFPsTnUS1VZ78spV17Opl0kmTtKsqmllzEpshxlISqwLs5ScGaiY%2BIhdXkNRcbPYtQgddgU8VS4pNFcLRR7bPDGLYEaH%2F%2BfsrrkGMu91i9Yvu0tZG2tWD%2FOrOqsKNJ4gS5j4lDtKcKnoZboD1lijNcbTicRQq3UjTXJkgYQO0%2BvBsTYdY49M1k%2FAYV%2BRs9S7OW5Aq3ForpfTGh9m%2B0kcm6lFQRFmirWhzhxH0I46ylPE5zTvyGfmPkbWbr0H79If4Q1FP%2FuSgJKvU%2Bbav6pZ6yw70v%2BZ%2BKzXZ461ckRSk16ZBC29zQGhoUBNMDtJkGkHhQYAUhHehH5ED9ksH8lsccgiiGJCsmyZiGD1GRuzD95oooH7eXFmGh1tbxVYNSIb%2B%2BvYvY30xawMsQE6RYGBW1FMd7npNJAJsLZiijsA3gvKQsTDv%2B3Z4wUa3mh6xbI02lMdcMOO05b4GOqUBIeIsCWFBlDp1ke3fYz5%2F8BYAiBpmAcxftZ1QyUVs9Ty56xPK%2BtKUBYETeFFYeO9d%2BJzLxPvD2ADYro0DJILzg08fFk75Zq2BuAVtR1pmr%2Fr6gF73Dt9MSCRuswDe0ZIDiASY5GLosIwDLVoE8wn%2BbPSXCF2yBvRVkd00HzyLE8alHfADm7s797cbNPqu%2B2qjg3PkSu9BlTM8fHYsZu3XMlrEWhwU&X-Amz-Signature=68a4313f3c97215ba3c61886f6b86ad5917b4d5e14c0c045c8e0fc50f95f7980&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
