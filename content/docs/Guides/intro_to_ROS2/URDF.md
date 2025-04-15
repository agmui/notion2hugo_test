---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXSJEDJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCajmDfHtm1E9NLjp1z60aaEn139EQFJIlena7Bcg%2BumwIhAJDf0kthGxD%2FcSSjmhMYz6bDvNxLqRd1%2FPOTQ75vb5gXKv8DCDQQABoMNjM3NDIzMTgzODA1IgyDQ4Z%2BloJb578MbWQq3AN9HvrAoVM%2BGBwqAC0ErqeTn2CkW0Ti%2BkPUwjmSbHh8Er56x2KqMTmD1y0c5SYQo7moiF3KuMBjXdo7ky0SLDPdage0GDkGNRaJAfOlITA2ALCBa6KkmdGHZv0jkS%2BgJfCkmqnmTBfj34KMaEylzlMIg9y2bHNHQdxWH1S3nk6E9ot%2Bs%2FvvR9Vp5fkl4CKejwdX5M%2BjvqL6wly%2FM3H0RdEE5he8H%2FCV%2F5n1cldbKqGEwYnWyeqvR5fL5bYsbPiWZ0Ygt8ExYyDqUIBJoIppp%2B2Xp4ddXw9XfZvpG6E%2FhqvZ3WNorO1DJ0tsz0FonPPoC2uVdtVUj1GpSdqV1%2BhdfovmPC5EMN4Q2bdPMAf0kOaoePuOCqTDz8oRM%2FdF1j%2FcwbU%2F40Y94fkW2FN9%2FoJf1PxW9G2YBYU7tgypjhQHqtdIoyTOyw0vJ8G0lTryQfHde3We3uAYmM6Z9RuS2NujecutDvP2MR5KXK5iuirCFPIGNqaiBihL%2BN%2FYXoePkA%2BUPAq1B3RBu81wBVyA19Nrh01Q552ORtq4jrmGEwpqSHr8PDfpJk3d8ugZvjOTB79JFfWRhWAy7%2Fyrh2Ne50tPHRTPfDhmMGccuUVMlRfUh6WAbmy%2F79AbZzJRm%2ByYxjDi1vq%2FBjqkAdAgA%2FYwiXS%2BueOThCh25hbDmANXKDouZKyRXMX0Vbngyf0V6KsACF8Zwh%2F2S5ZcZrelSUfJezgyawuIPrMwWjEwfPHBi2b5bEmTW1Sd9K%2BN%2Bb6NjHR7gnlnU1gyt%2Bf3afllFeMYnykMfl2dvRwSrX%2F1aHrMcPHPEUqg5Uww47VZ7iOmQhmS17ugOyP1N0%2FCFkakLZccRH51R13WVlF1lVwR%2BsW4&X-Amz-Signature=3aaaec25c5bbac772f4e9e15d08305151be5e204d50c37d38cc3821ab6542028&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXSJEDJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCajmDfHtm1E9NLjp1z60aaEn139EQFJIlena7Bcg%2BumwIhAJDf0kthGxD%2FcSSjmhMYz6bDvNxLqRd1%2FPOTQ75vb5gXKv8DCDQQABoMNjM3NDIzMTgzODA1IgyDQ4Z%2BloJb578MbWQq3AN9HvrAoVM%2BGBwqAC0ErqeTn2CkW0Ti%2BkPUwjmSbHh8Er56x2KqMTmD1y0c5SYQo7moiF3KuMBjXdo7ky0SLDPdage0GDkGNRaJAfOlITA2ALCBa6KkmdGHZv0jkS%2BgJfCkmqnmTBfj34KMaEylzlMIg9y2bHNHQdxWH1S3nk6E9ot%2Bs%2FvvR9Vp5fkl4CKejwdX5M%2BjvqL6wly%2FM3H0RdEE5he8H%2FCV%2F5n1cldbKqGEwYnWyeqvR5fL5bYsbPiWZ0Ygt8ExYyDqUIBJoIppp%2B2Xp4ddXw9XfZvpG6E%2FhqvZ3WNorO1DJ0tsz0FonPPoC2uVdtVUj1GpSdqV1%2BhdfovmPC5EMN4Q2bdPMAf0kOaoePuOCqTDz8oRM%2FdF1j%2FcwbU%2F40Y94fkW2FN9%2FoJf1PxW9G2YBYU7tgypjhQHqtdIoyTOyw0vJ8G0lTryQfHde3We3uAYmM6Z9RuS2NujecutDvP2MR5KXK5iuirCFPIGNqaiBihL%2BN%2FYXoePkA%2BUPAq1B3RBu81wBVyA19Nrh01Q552ORtq4jrmGEwpqSHr8PDfpJk3d8ugZvjOTB79JFfWRhWAy7%2Fyrh2Ne50tPHRTPfDhmMGccuUVMlRfUh6WAbmy%2F79AbZzJRm%2ByYxjDi1vq%2FBjqkAdAgA%2FYwiXS%2BueOThCh25hbDmANXKDouZKyRXMX0Vbngyf0V6KsACF8Zwh%2F2S5ZcZrelSUfJezgyawuIPrMwWjEwfPHBi2b5bEmTW1Sd9K%2BN%2Bb6NjHR7gnlnU1gyt%2Bf3afllFeMYnykMfl2dvRwSrX%2F1aHrMcPHPEUqg5Uww47VZ7iOmQhmS17ugOyP1N0%2FCFkakLZccRH51R13WVlF1lVwR%2BsW4&X-Amz-Signature=62d5a9780bcfd182000252fe85a3b363187c59cd975cfac7c6c612eba207862a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
