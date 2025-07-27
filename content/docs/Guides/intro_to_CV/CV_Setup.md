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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LEJBEQN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB01lWCtaWCl9790FPWLnnBWlEGB9hfRyPAsip3a353yAiEAkXjpWbKWHd3t6H9BafHMRiGmTgO94PZSb8E5%2BvxySNQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEASuAeaF5TlqgLYIircAys%2FCPX3%2Ftg8rUXzkxztbhK2uulpepA3ZRJiHuOnVRisQAMFPx06WkCcRmCSiX8hIDGKPduZ2noBJGAucD2lwvoxaoniG5iGPz7sUkes02WHysKOko6vUKGFEtQo1t6HEeZ5mc2EPzIIdnENLO6P9d5sGoAV9vY%2FQZDqsM%2FyOq3rUnnAm2uSWm2QN5mF90zLoLMOd5%2FQzuUaiDloqLganlHImV1DJI4C%2FMWJiX9Bp%2BO3wB%2BeAH%2Fh1Ow1BmsNimxPOH7yYCQf14aM5tu0v3qFj6aKE9z1wnSBRnP21fFEe9%2FVSO9zTnWgUHUBGhJLpSCb3234d8cFjFudoWBt6YFPh4hDdIVtpm%2BOvp3cjYLnp6lrk7pYVcmSiBE3lcNnMjOFN0WpSddHq9BIuVvBBOlXSJWYisvIEGeykZnFgGibzBWeeIQU%2B2Zpmkqvhsn4ozS8abcGsIaijST2U4G7fAwn2EAETRXayvMjWMI42iRnBSSJipjk0ecnA%2BGvsQ%2Blfey7UPZ8lvOL7nkbyxlkETsdRBUdZrsLGSvUg4k%2Bl%2B9V9mxElUf51cIvZxiP8hAW8rBBHbwpR3kgQEo7NhM1UcC7vzgQmeXDTPOpjOreUuDrgkiNRAqhqnzD69kE6cY9MNTbl8QGOqUBhCSz3Jv6ugeFrZG9F5q2QN89P%2BeGZnvSpZwMe5EGkw%2BvN7%2BNMzVTLZUQ5p7yOsJdsO77FWcw%2FVod17MJ573sdr%2Bhk%2FCwUm6j5B88rcIXhz1Qw12QUTqnEgH6aw3dm4CeC7nDlYdqDCHDu%2B8K456gNcfTjmEPwJik5fWbS%2FF%2FoP5lzhJ%2FF1ITrN6PEvbRGKqXONGwmkolJxsXxdxPNHqJuStpvtWG&X-Amz-Signature=0de6dbbaf4fdad36d299c908c39451dcd885343d357eb46c42a252c087433530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSPCMK6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGcy1hj2xwdvm0F1QE42UNdCRR0MYyi8vGJsKZ%2FldmRVAiEAvja0eONzKvtfS65Ttf9h08dpx%2FvH6snCmnrZxMSbbykq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGfUuw4vdyl3V79zxircAzE9HaGqaU6X42IDryL%2BzA5kDzHvEG%2FirdIeo7yb4OV%2FPNvvDDeNI%2B4CM7LI%2BN54ost6s%2BbZBO8VQbg34J4e4tlIkb7vYWupMpoL68pWBwBJWB3kyuLSM%2BLBqL1%2Bs23CnY2QdpN3qNZOvgONYo21zEIp4drRYc1ML59ZttL4FL8KydJHQxpIHUK75zicaXLcB4zI12W%2Bt0nNh0TYQs9b4CfNem%2B%2Fz%2BZu%2FQismPCKRnBtBI1McultSH6YbJ4KoB8eONEYdaTQ31OwW9KKFkgYTsR18LVyPp6iKP8FZsZkzVku7qYAVzYrnciyH7Ry0q3ZPFatNj46eYDPYPrQBsEqVWjyd3GAsUR84DJ8RKPBC2iv%2Ft0TM72pbVvZE8V8FCf51hn53oho5kW%2FCAjM5wF0d0OHLq4bCPzK%2BYMbQDeRZEpHdHQrW3COAYa3ZMPIxbRR%2FlYr8Iug7pghN8iDC6tzaagOaggbTcNEX3b5kDTkCR8Yye1Dwx0VjEq1pRFwvnwwSwweI6i0KVhd5pLGmdAmmybczyynFm6I1dIu1XJhX38yOep4Hz6t0HDGt3TEixudx9R8J%2BujkWI%2BXGoKT7%2FiYZk1rsIucAGfzTnqBLeLFz3o4dPDn1APKudzphcaMNTXl8QGOqUB2LYTkkE1lXHktgV%2FIJOEddhf6B00bqffmTDZsKJdj%2BuJytnlWZ5W%2Ft%2F%2B2CJ0o8rh2HfosfPh8CvDMoc6txNUVHi7MLY%2B%2BJeaTNOITAiKOU%2BLzup1L%2FM%2Bp52r45u0lkRsl7JOi1ia8VywQe6gDyDwJ6MNbxcLa6pfly1BUdSBYYOa8cwzWX2O9eZZK7TSe9Mv1q4AQDY%2BpPEacmwMrzMwV6UlICkP&X-Amz-Signature=8fed258996f0cbc90c3f7245f7bf26dc34fa5a8d9af7afbabb3b7c78705d0ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
