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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT3TOUDG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC5jqojDcCyWiRrwBS9s31xlDfTrnb9AdaZQ89J7meJ%2BQIhAID%2Fa9RRqpdw4WQDc5%2Bp29jnukan4MndtQVaR3w07B%2BkKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPvI7KWADBdT2fAGoq3ANTtwvAlccj4dk%2FLyfNQZ0PyK1CDylLFTUsUGOIJcFYlU86HDJdfaMxCq%2Bk4bSnbQW3AD%2B%2BRMTxlB6sGnPlyPqZWQJ0oOMkpOMR13t%2BPMqJQPW4SDuXujQbOPMaYGJqD3wyCbNcFzOe4wPyoRbDLwhxcdySYNSrQZBkueKocWqZVWY%2BIJEwyUKMj%2BHiSAbgCKdY6KAeVNRQQ5BqAFl7kAOsew8Ik28MIEVow3WP%2BnO90USs5TGaP%2B9Enzr01I12hVY2mIBYyYQyWfKNhV3Z%2BuG9VY4FvYofq320YOVMuhZWBF04pQsO5orjq1KzTXbH%2BVMa%2BYbR8KOsEOOTc7sq2D3HRVbv6WzsGyLNnR6zcFjrqZtM1gUkqkq0DiJESrNu9GZ3iqn08GWcwlD%2BMYwhUokQp5V%2BJ3DGso7jZqLeBMEEkpWhGmmbaJhGlVDlmX94xmFyoyPJ3Xqt0rOp4b%2FHTI2mWofkPaKoSXERIzQYY7u%2Fi%2BZmaF6AfbWl2oC0yj5dvqHr2kyAQj4zvt%2Bj2KzyYCYdya0tDPHmopPIPV6l0j5HUu84mGuSm5FScCQe0fhLRbtov%2BQgEetpot5RraTnjatlT4x5UXIisJP5bKYpCvWm3m8vNlonjCATTWFLGzC606nDBjqkAeFPSr1QUCdU2XynI10HAgAvJbsp08f9AzX66rKeWkVs4YncTy77pxtGQzxMJXMms9%2BAIYdI2nQ0fb0ZhVuIzvy8kwwuTS%2FaI3xRMloOLWhUMl6DqquZwKy6eyALabWvuoB9lTf2n7tdx%2BIYCqsixpUCE4Ho3fnsmTBrpJqLw6t8CRTF8ELENJmPcty2ZWYdnODsfvGaQOLqG%2FCwHi6LysZhP3P2&X-Amz-Signature=7040d5b53803a21fa55d2b28793e02f9c3df142f78133f306ca411b9510f37af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LBSZ4VH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFyZ7I9QDachYrkX41EwmTdD3%2BXyyTN07H09%2BAFwMaAwAiBpuGUEysVEWSaw89KY97v%2F8CE4%2FTI7Y9AD3odhTf0ZOSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM%2Bo7ELinZ6BXd%2BVM%2FKtwD%2FGrDA5h3C%2FuqzHsd8d9x6fU1xK81h7aiAslg%2FZhzJExqxwV1CTx7lXPKfB9x9OzDaymuKh%2FELKzHC%2B%2FwjkoijAWqh04wDdoBvZ3AAhxLTo7zBkNiQOsKSn4S%2FCzTZKgEoE0e8NF0A8JH79Jr3kk5aXRJuSagVIeMH7sYfurb7RXhZovRabiB23e57nhcTrfva2LiNeqaq9xgnnSnv14k3bueYUtYWXESPFstcU4NB787Pd8Gi9q3SYpjpcnXhC%2Fmt1OMXSwfMRD85kZQazTftxUAszzIt2tZfF8PfrOzD7yTbiqEEp9e38n2vdQgtU64d9uWCu3iKhtt4vT2U2QsLn1Z8ektKWw7dUsy9U8Foy3FufQ6zad5TUGKnyGzOxv2EvL5p%2FEeDmKNfkzjzzdoL75IKK9WmbuDPw7E8eDKzU2Fw7mJnJVWg2rO4xTIRfj%2FhY4KyeFAnwSUqFfCalgWGYa8ePkab0RJVybrNmXQvbU8xXWW%2FB8x1lcW%2FrxMcuk8HyjD0skPpcdSwSiqaWRHx9MQxl8d%2BEQyNgnZbFIIlliAny1DDyuSPGJw%2FsEycLoBPzLSuGfbiyqVfbvHB64%2FzmTX1SgB4EkeowKVngTqT85uIz0obEh5sdgZa4Uw1%2BupwwY6pgFuRuAeZ1f0e4x4DnRf2DeT1Mzt8fetLN2xsfpUkHgihHLrFX3g6BIkKQHddPWBujYCkODJDD79dT59e5L38qfT%2BOPlcW6mpd22Nk1EJn5ygNCfvWkiPRMgdsfyWLXHQ0L33nXfI2b0UoL2eaaP3AVO5VwcyWsjm5RNZHQISECGEna%2FDw4W9gCI%2Fzz%2FAH6Ogha5HBuJ3hu5eIenos9rYOFKzIevE5KR&X-Amz-Signature=62b53c62964f0511a02a106d63cc536b915af5208df58cd1d932ceced3b715f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
