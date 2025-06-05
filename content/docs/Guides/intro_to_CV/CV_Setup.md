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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BYCGVIG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIA%2BQLAA9IN2LacMgZ0S%2FI8qBzP6QNRk8nhiZeorgpHYLAiEAteE1FwCx1moEk%2BYhPPtVc8krRh1TogvIlZeD0oNeZwwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHjHrSboN34Z540%2ByircA2VLs6gw8SkzrZc0%2ByADhqweSxxow0crp9%2FwBdfo6HSJUVLPB6%2FgXBixRGtolPXx4RnLg2HcwSqlXNLE%2Bo0XnSTvXkOd74odQCxkK%2BRwC4J1q%2F%2BzlyYOT41NO49eTQ4qzSad1RD0nXSwOLRtIFSH2JZNQLTbzoJOd6AfarkHlj%2FtoGjuAY0YMfQC3TVQOM0RYC228cHUv78T0CA6%2BHrqM%2FgoLDQTux0v%2BZ3IHKrS7QGdoGhKcDIXfIYa2oR0rtqXzYmzTaejbdocJ%2BiXO94ucuT%2B9kmRml2hV0D%2BvA9jcRzC0YOfJ7dQb2HxyMGkPmlo2SvlvFPS0E%2FzYdPuR2hKb%2BKTLgcldnx2a4U%2BlxjLkDcbtY%2BNGY6t36qUU0jBhgLIVguzJh48CEGFZnB%2B1A3sDOBJDTTlAaADKk8XLgsWPJqUrm6JygivdyZK6ZOLpA1w9Bg5C8%2B2yGQfDKEffp74rOavMskX0r3fDOIfBJSRCFvQXAhxDZ8QNF5laXmi3j6lPOJP5m2d6uGzr%2F4Mo1INIOw7tmzUOEYc1hXKDfKEU%2FWtt%2BVJ0n2VmjDU1AB8V0WQbjWWrXktwdOuaysw%2Ft5YyVlQ5Vl6pJBKEq1YrSE%2BoXtlnS7WF1s85Nm99LNAMM2MhsIGOqUBhraR30DjaCneBpkmoZ6H%2B0HWDjt6GsLIABe7pED%2FKUAlxegS2rdHJetG2h95uXDc1QpHmZLvbCHo%2BmQLhWVILEpLHi072wLRVrjgWKGFUr5TmrbizcfpWwickNHYhzGbr6uT%2BAGfZIcBYYsnP3v1nMa87EWaYycGP%2BSwsTMZK%2FUBaQ6oMiU5pqa4aMiPNwntgMBA140bg5Xnut8yOhntghfmtE20&X-Amz-Signature=7f55df32b0b520bb27f7cfdc40b8b79176118e7e59dba641fa67eb40ae7a5b74&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYKG5UL4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEUuSHifH%2BQy7Jzsa0G8iu1QPIfv7WaClcem30Ukuk5vAiAydrHRHpQ%2FRrgnXdnY9bp8rRMmfCaUDoum4ZjH547Exir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM91SEDDxy4I%2FhBL6ZKtwDkjeaqIeWmBCENyKWhQrPY%2BTRr5TOQJKF3Uik3Sru4vBcUa254Rot%2Fq2ktVds%2Fe4%2FfrF6y0Ou9cmf9Gos9y3tmiQPp9q7SB5S8N%2FsZF5yh1x5OO4cW%2Bv2Ayuv1OHNA5F2zBqqbD6aQr0ovicKpuiOqUGtegOKmyFBMguB3cl68ctru0HdUgW9iQnKzSiqHy1Hds8v80CL%2FpEJqBwEl7xwRcxwYRH%2B%2B%2FDGVfYyiA3hzxjDnK3PixAUKy2LOaocPdkAKU9aq6fM1FOWmnVvGMeIkO7iTtdIGRHIYQql5U74FalyYEfUQNS5DoQc%2Bh0KnEmfDTwSIM77BWnY%2Bq%2BQwMeb%2FYuw1Whe06f1jjd71napBB0Cg3tjTFC2YR1rAivyYVvtvYxnJ%2BLEM%2F6EBYXfHBvoh4%2FU8t5V0OIE8JPRE3QI67VVYAKQWWRaZg1wEI4%2BwSx62yD12jE2jUXqbwXvZoQ3tqinF0%2BFpkOgMaXfcW3UpgiYzyBcgEHc3VrkqnQr8HZxd1OV3bhwSrJtwKfDKQP0P6cDvsMNmowULjELruFxSI1hnN9kgd1envQAPCvIezs02P3BFsqD%2F9nGukloJsyn9m9oTN5V2j60xKbF%2F8h2yDpwvjVa7ArVzHPq9EAwkY2GwgY6pgHhZ76yHUp0AcTL%2BNT%2Fj77HjzrjBop50VelIINc%2FI8u63m%2B10w%2FVr8vCNF9y5wPXCyKPSewcLUcNrj1ZgCQ6UxXiqcBz3Qlo74EP0FcBggdkSqL%2B1m%2Fl67eRs6fturazJ%2FgQeq8UIW9WTK5gnRcZjT3x%2B9kWRmGi0ioWCY4Ymemwy46LEK8puayppbihWreHHS9HspJIWxw4eFZba9MAd8uvoav1zuv&X-Amz-Signature=75aed18c27e7e1dc6832f2ea13151f8a37572451455fdd1d5fa8bd3772bc5f84&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
