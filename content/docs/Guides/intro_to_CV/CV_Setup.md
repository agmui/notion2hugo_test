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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZM6TSHP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSZ%2FmYYGzAugm3x9YQHk8Ecvuo2mFbudyRN%2FBncYMh9gIgTbddFfNJcZJFbsWu%2BVI5JHTwfz5q0biVyFd3DtbCsxgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDK4JU2Asdkq2dotezSrcA3Zfnn%2B%2Bt8OQ0y1rB5gB0PGXGkwhKkC0qRPEcJPiOFASluYrmHgBGyc4uvDpjqKQhjA%2B0slSPM82EWEDKPn4KVrNVKyprLIinj%2Fviv43wJBdxSItfIneS4TUf3O5z2DL3pHbH9rsvDy59Yy85zWEnB13QW5MoTmXfX3xHzjHb9uDFaBgV9Kr23VKj%2F%2BoVgY2pbhtXcKMph37JtHer5AkQ6I4BD8epPDRCj7nykGSRsSNTmZMOe%2By3YXnMb2U8gPkkqJuB88PzScMO2HdHJK9q9wDUZdAxUpsklG8HWIvNJoYwFo5s04oIVXBS%2FXOUqN%2BbCx8tE2%2BLhKBQSEE%2F3%2FEULe2YpNdlrJ5HtHkmK%2F1UJt6SneyhstDM3LWTFNHrFU3tYnBAFeQxLFwJjVANNzr%2BoOmsfnrYAmYZVjcTPgA0T4a0%2FitdBRA1aW13zfbzOupJDFT4Bz3t4htYiDHvAw26MLpbvznR3bdIZtVPzNWwUlWa865I%2B4lexDdlxWQi8aK10K4sokaZvaKmTKcU1VhS3PB3ONIkiJ2aVuB93tn8dFjNGTtv2KVLtVM8lrJqffCiHJ4G9Ln4WJBExOfZATV4DzUDnx7L47GA7ljI1WsyLKQAfSQcUFf7rqcPc9WMPKE%2Br8GOqUBZ0Oq6Xd1Nj5%2B%2Fkmdc8YkYiRuuGRxHc%2Fs2V7wwy8dS6vtsC46obzUA28bS9%2FKnMAxNltaOCg7xRzk9st1cw6vrX6kos1UZKbJjNVPOtf%2FX2s9gptnDK5d9m22jSxi7o8fpZKgdQc50ufzg1mejgMNL%2FFwbmFTp%2BrBjYJ6EJ2bJzWmz4MNIVigIyuUvA7EWnDU3CtIhfYRJTPkaAB8E1QdS3fYsDgy&X-Amz-Signature=a0e112d3d6744720eaab98ae90f499ae0c25d50fa66a2ab4a8071c7b6cda5621&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MXHARUY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvE%2Fshro6WAVuS9jYoOdBSVqRZfio0IlEUndzKGijDsgIhAOREq2CEUCvYPg2bTJbyRDh3kSbscYJzpKx8sjQF%2BcziKv8DCDEQABoMNjM3NDIzMTgzODA1Igy7x9ezOBUxvPITMZkq3ANi7tI%2Bi7xJH%2FTS%2Bw0rRIeFqoptSSf86PPQ3E%2BUJYG%2FfKxnR1LhN2%2FhEfU%2FgKmwE%2BKKvsBS9yrxdEFa3Hrr4%2Fah2bSHN1IQq1f9jlMR56UqvqbvYOqddCQeB8fZJ2b6Y3vY6IjyYUjIP4l2l%2FIRiL26B1VPud3r4IxbvDneFLHivj4%2FCQGXikY6Zk8rpyDkzVYb5s%2FXbuyMDwat%2B2RmiL0KO6zmyeqHQ2zT4xphOsj3U5zMH14xkGP%2Fi%2BaOiP5TRXNXzAsdO7gWnauMgp5%2FkJbDHCzOY4nHFI2Ri1Z8b8F84jwplQ5yzKOir8YCPh2pMQkTOhWZ%2BGDZfsFNnAGB9NaqrhKkb7CU6hH8Fh%2Bfo7s%2FYkB4dBGyEYRkuNE02FWrngsqniy5Zenx8aPCC%2BoHwRVCK83rrpBRG4rJJ9B%2Fbq46CwK6ieUwgHFG4OKUjax6lL4%2BATJvuEotStbmx1fsfXGNzeHWNdqFwqQCMf0w1M9nd%2BiNuE4RrcgiEad3HOWqpP%2BWKYTcD5mymW8swC81sgnZLZyeHXqMj7XH7ycPwsWCeva%2Frqv5zx8BSsxwFN92Hb190g9TY0LQ4t5%2FOJgAKaJUEfXHxUnqkMJicPo%2BxBoi7hmu302Yb87EA41AjDCyhPq%2FBjqkAd8puJ8RL03jF0KGf3kJXFq6xQV3X7Qih1yMi5lvkdUQZdB7TBB%2FdMJp9nX9Cc56I694%2BBBA1mI9tw2QzQrSQVesItblYcsqzaQ11V51BxRZWODtcmgkngn9yvq0cGfyviRl6oWyWXHI2RmShUjOsmIL%2FPgUgRENu1JbHvhtCelPpjU15dUKUNIkXR1h2IrxwIq48s5y%2B72oyi5h67dApOLJWNb1&X-Amz-Signature=edd87eceba3edb44e42a12975779f96047a81482db3d05312bca39868b721cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
