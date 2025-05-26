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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5L2HRN5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCm967ZDVHWW%2BJB%2BZprkslR3uTn6RbNBkSVSl%2FjSwyklQIhAKMc%2B8TLH4iXa1fIMB1ezoRHaTAnlVbXtDAEJlEWgFoyKv8DCDsQABoMNjM3NDIzMTgzODA1IgwkMIo9kSn11VrIYaIq3AOx%2BIMpoit6GyP7Mx%2B%2FcfvS8rfS%2FGhf6frqBZW93UfrscSwu%2BI%2FscUJFRs7sygFHOKaFjZkqBKleDLkrAIWy%2FZ41L64MWlT0R%2BL9RHITTaw2%2BIdieOhOh8C4ib6kKVrJbgouQTnZJVGRbbaFVEACmYdrPbj8YTbhmovZnIx3jIByzbZHmFLOXGWYGUU2xSQh0ODoR4EmFSKO6zDFG4agCoftzYbiPfH%2B0ZLOeJeh8DAGLlbAurUY0Ej%2Bzs7WhUK1aJEhriLJsM5veGUdaINxmh74Gz56zlvG2Ij2FDGW5Ga9%2FrpZOaUqx6TuBadQd%2BDO%2BD%2Bzvc52bM4wbXEHik95OYA%2B0rF37I7aHMvDHqH4f2Hrgz3%2Fyy0tt1lWQh9H8lpI9u8DyxdACwBIph2q%2Byp8Hhj8cQsCAoRs%2BU0WMtf0WWWAK8a9%2FW75EAzisW%2F3J%2FJC6DU%2B0yUp8x7WFuWVUZsAGev9R3mPK47qPQ5mUb1gvK2dzrqfTV%2B0k%2BjF00DBwHjtWmUEJDR2mM92qxuPdiBqhc%2BeKgQomcTv1oBTm8eOjLQ0hYYLXHjIwWLOfRnaA8IKrlZfeQXMjgRIlNr6t9jAdLHrEa4i8sRx0YerWs2XQg9SDEJ16LWeMSZw9abHTDins%2FBBjqkAc08nlUn%2Bd7BJ%2FVYT3Cq1mjTJFyjDyMhSXmDMjJDf1NgrNgj3WcKldUe1XbYkACk0%2Fvigbh06La6P0ZhBUeMfZgmBKwjKuY09G9Df1MdmH624BYu4TjFJdUAgJkmZoG4itADM6yIpsRkFE3gkXn6hr%2FyxCxRtM3230TBsMJwiOMFE2ACKRNf7pSBBXy3D4YA16qPjtTLLxsodrVRjhTJx52kdyHN&X-Amz-Signature=c96ab90a4f4793e3a69a22933b8a1dba8c2cb15d5287cd151cfa76d9b1a7fc4c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMDYDRO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCbkbtRtsN1%2BtgW2GFmnRYMyy6E2GqU75ktUESLbddNjAIhAPgQN0%2FuD1mWkZSisLgC3GFlcBesicWCHokH%2F4Fx32ECKv8DCDsQABoMNjM3NDIzMTgzODA1Igy99hE%2Fkv9e1ysPwM4q3AO5DpkI5m4WMlprE5B8CZpc5llft8HCljHFJzwg7FvnGULDITotTslNM3aYe1B0BbM6L%2BaLr3RQUmVFP2vTYfOFo1CLiKqbs5mN1E%2B%2FcrqdqgysHW7AjGrGGM1aUuE1PuB0WSLL2JVUfBCl9WbPOBxEE12p%2BhAaYJIew3b6dMWsU%2Fgrdmy3ngjPlDqRBxf26cxnpy%2BSwpQhjc%2BN03cf3ofK4%2F%2BovQS1WY0DRsDw86PdEM8vuRa2YU1BbBoktAnqQtTG99KD6wmdqiGWW0MEiJEelPT5BbQz%2BVI6dIM5rNMlNEmIqmEnE1oIXv4Bz0B9iyTipnO7quJvE1%2F6pnEJ5rRVeg7VQvglDm3AqIXmjZ2CqhpCpyGMxvL%2Fn%2BE9eY9xsYy43l2cCper2Z%2Ba7gRtsyMufogkxKv%2FYZkBmJ5C7N57mEcdV4rmkOnD2HLt%2Btxy%2BmMQEcTMqJ7gLVfSKgJ4%2FF9rcsh5g4NG8NFoXarrM%2BF4BDmQ7jaBB2imhVBxRQEp4m86rJEoYZEyJxWzVB7V5ZDOPsj7Kk82UXqsL67mbsf70hcn7%2BZHRhxS%2F57yNCm2V%2BZeaLm9hVnAIwcG8K8qY6BI8SkHnURV3uOa8H0iGZ0Fcop5kCInMWWP1NISpDDlnc%2FBBjqkAX4XaTggnDxz7nI0OzexuKhzeTrf4R8tiBbyQ%2BtSuHeHA%2F%2FPhAh36W%2BGem5aQmu2XBIOxuCSMmW63McsVsZ5kB5AqNivoCOOklzOloVziQQbPyTrAywbKy5r0ozsizD%2Bx9nbEbrqX16lE0mc3VHt94FAO%2FXyez5H71QLSiCyABd9uO9phjgSV1g7NtnHBj7e9vXP4ySxLIPxOdua4s6DWWwUe7xp&X-Amz-Signature=f9e0b04875c2396698cfbdc2c5a35e21bbbc7ae4a4affcbc4c0487b2ab3e0896&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
