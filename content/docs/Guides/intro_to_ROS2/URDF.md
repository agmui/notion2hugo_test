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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNL37CRZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClh9eYqYwTOc0NOWFA8KjtB7JCOqE%2FmhcGbFZl3gZg%2BAIhAJRUfnMj1qU9hJrqlIZRxhVXiWoDrRTU148YymoAUKftKv8DCGwQABoMNjM3NDIzMTgzODA1IgxYtOG0AiT3OJX5H4cq3AOTHZOK%2FaV44D89x7950siKqKzcHLsHN3b5vLosbIU0mb2%2Fa%2FIuS7UjilHhVi6sutCgq5ueeB%2F1lihy%2FVA6bf%2FTxxQPLcdxvlZ5ZueLiJoAhjYOHyX39A5znpRu7s1P7KKmVnr9YFAxn1kmTFapB0jss0RUoDTjJzG%2B%2F6w1Cl%2F%2FM09cinFiTZOqWt1aMoo7d4jPw082sVz1Myj8GoXApvsY0pxV5o8mg13a4K1Eg1tyGEtI3A%2B%2BPFUI5EarSqWnL88S3GavfeNSOG4%2B8uPauyTzQGXhGivWKpnCWwa2g4ErSMwjytw9x8lQR1yOPeVEas%2FEG44VMPQby22pIax4LcDcIv0Zn8SxeKOSMTXSKxK8tQ6aehJdpU33TqsDvYZgZsoRf%2BGLuWdE9A0afZjNm3KgiewgEkqvk6i6I6eeofTxO%2F6BflUayr0FuyF604K9Px5pQYer4lnbtNa%2F5AnckiPzGthP3ETSet3qTIGiY1LERZj1Rgma%2Bn9x0I8nJo8IYLOsGh1SBMBqhBbi8PE%2FjgcNZmhhRj0uEcmDHWThDlapYzl4elq8pqXeK3kI5oqnR0ACpISsCJBOSguDr0me2EABjJerFQBv3DdChkHMdN6KJx2O%2BZaTuUpIzVhaPTCOwvDABjqkAXPRxvUGWtj%2FEILjVZYmKyY9Z6GCBJQ%2FsSYCFyVINhiMCC%2B%2F9tJJsrKcWu5PR38p4ktGaNkJdgv2lFUHZP7KEhlBR47T3fPEOv%2FM8utrBsDrCe69sWtfcK9LuAAplJO%2BQCg9Ak2EMLuMIYeXlk0z%2FQ3KtmlD6FS1vByFlH%2BFJWvTYm1poWHNVELodxIL0rNc%2BcNrF0xKPynR2skQlQzU6zbJ%2BUkQ&X-Amz-Signature=dd0b21034df45cc117f8250ac4e68c8b584c7b407ad3d75cdf25382cb2d11c62&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNL37CRZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClh9eYqYwTOc0NOWFA8KjtB7JCOqE%2FmhcGbFZl3gZg%2BAIhAJRUfnMj1qU9hJrqlIZRxhVXiWoDrRTU148YymoAUKftKv8DCGwQABoMNjM3NDIzMTgzODA1IgxYtOG0AiT3OJX5H4cq3AOTHZOK%2FaV44D89x7950siKqKzcHLsHN3b5vLosbIU0mb2%2Fa%2FIuS7UjilHhVi6sutCgq5ueeB%2F1lihy%2FVA6bf%2FTxxQPLcdxvlZ5ZueLiJoAhjYOHyX39A5znpRu7s1P7KKmVnr9YFAxn1kmTFapB0jss0RUoDTjJzG%2B%2F6w1Cl%2F%2FM09cinFiTZOqWt1aMoo7d4jPw082sVz1Myj8GoXApvsY0pxV5o8mg13a4K1Eg1tyGEtI3A%2B%2BPFUI5EarSqWnL88S3GavfeNSOG4%2B8uPauyTzQGXhGivWKpnCWwa2g4ErSMwjytw9x8lQR1yOPeVEas%2FEG44VMPQby22pIax4LcDcIv0Zn8SxeKOSMTXSKxK8tQ6aehJdpU33TqsDvYZgZsoRf%2BGLuWdE9A0afZjNm3KgiewgEkqvk6i6I6eeofTxO%2F6BflUayr0FuyF604K9Px5pQYer4lnbtNa%2F5AnckiPzGthP3ETSet3qTIGiY1LERZj1Rgma%2Bn9x0I8nJo8IYLOsGh1SBMBqhBbi8PE%2FjgcNZmhhRj0uEcmDHWThDlapYzl4elq8pqXeK3kI5oqnR0ACpISsCJBOSguDr0me2EABjJerFQBv3DdChkHMdN6KJx2O%2BZaTuUpIzVhaPTCOwvDABjqkAXPRxvUGWtj%2FEILjVZYmKyY9Z6GCBJQ%2FsSYCFyVINhiMCC%2B%2F9tJJsrKcWu5PR38p4ktGaNkJdgv2lFUHZP7KEhlBR47T3fPEOv%2FM8utrBsDrCe69sWtfcK9LuAAplJO%2BQCg9Ak2EMLuMIYeXlk0z%2FQ3KtmlD6FS1vByFlH%2BFJWvTYm1poWHNVELodxIL0rNc%2BcNrF0xKPynR2skQlQzU6zbJ%2BUkQ&X-Amz-Signature=d5821228dc3eecd5121113bb3946824414beecd928aa39967e9f2c0dfae8e1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
