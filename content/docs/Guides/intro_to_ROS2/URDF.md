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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3TDNDC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDhOtYJTNaGJXeDinmjna4xrGYv%2B9IN4EkuAonqdyZ2BQIhAM6KMySDVC6rM9ucFOnbyeMwZZFXfgwh2F962sNobhWSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2N9xbmOPSInIkPrIq3APhxPMSu4TRntYrw07TaTaSLpkpYbMFawhl1rywN%2Bu%2FP28TBct2XGbvBAhgXjPItYbsEdYgCiGOCoQD1h2%2BJEK%2BTOSznDSG%2BPBbjxoDllwGe%2FoVCwYtfPaHZ%2FHgBd32wk%2FvcWYPIqzXLzjs5mv%2F%2BuAefnhzPjjj4feBdtHsyXo%2FHyjOf5tTDsr0dhojOeroa6nzfd2MD4tRnU8K68L05rmDJBgNw%2BFlgitvR1qsjg8N6fuLutMKgoUzh5F7DP7I4jcM5iqUAVzbJf5mbfbjg0dVvlZS0lfdcr9RqEQfQuKg%2BRLWketOMq04RsURgc4ALQts8CqopZ4CGxy6aFidnLPv17LPdcBH3rloWOyxLR79dx1HOMhYJdhdtU10Y7ru0m6DuGn0MLV1%2FRm7tEFD2Wp9JfUcDVGk2WaSLeeZU%2FOiP%2BUjbuAlh7kM6qRkA%2Fz9NmBtBpL7DG3FZ9VO02Qglu1cDZA9cLvW2ACyUMcS3SDlLEKsDwXUyUz0yzZlg2UxaePuoqKWLMZJ2WRZy9QcO0GG7jw4bJHvlYDkZhaEZTKKnXJCbC1haqvGTbXrVreQPCnxmY51C3IQjqu9CnNL%2BQXND13q43q53NT5Mfpq3d4nOnIN7MGEsgWLd%2FXRWjD2vYjBBjqkAaxWUsK0BPZkemZvMM3ysWx%2BcG1dxek60jb4rEOYNbdqGiWRarTzg%2BTgXxorCAl9xM5higEuDQg077X54C7JnpUA%2FMnFKf%2F6lNp0g90OE7aQSr5lUBr7ozYpQzT7QFfYxfjonLKXwS9NTV1CjKtkGkSlsd7cspTuPtjX7k7gDk3Wmyodcq6SLuXSMGy0zo74Mw8aLvAhmeuoj2CLosIwvLuuJmbG&X-Amz-Signature=d8206d744a6a6e410194244abdfbfe3eddcdda5bf37f0a9c745dc3d9a14a30d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3TDNDC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDhOtYJTNaGJXeDinmjna4xrGYv%2B9IN4EkuAonqdyZ2BQIhAM6KMySDVC6rM9ucFOnbyeMwZZFXfgwh2F962sNobhWSKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2N9xbmOPSInIkPrIq3APhxPMSu4TRntYrw07TaTaSLpkpYbMFawhl1rywN%2Bu%2FP28TBct2XGbvBAhgXjPItYbsEdYgCiGOCoQD1h2%2BJEK%2BTOSznDSG%2BPBbjxoDllwGe%2FoVCwYtfPaHZ%2FHgBd32wk%2FvcWYPIqzXLzjs5mv%2F%2BuAefnhzPjjj4feBdtHsyXo%2FHyjOf5tTDsr0dhojOeroa6nzfd2MD4tRnU8K68L05rmDJBgNw%2BFlgitvR1qsjg8N6fuLutMKgoUzh5F7DP7I4jcM5iqUAVzbJf5mbfbjg0dVvlZS0lfdcr9RqEQfQuKg%2BRLWketOMq04RsURgc4ALQts8CqopZ4CGxy6aFidnLPv17LPdcBH3rloWOyxLR79dx1HOMhYJdhdtU10Y7ru0m6DuGn0MLV1%2FRm7tEFD2Wp9JfUcDVGk2WaSLeeZU%2FOiP%2BUjbuAlh7kM6qRkA%2Fz9NmBtBpL7DG3FZ9VO02Qglu1cDZA9cLvW2ACyUMcS3SDlLEKsDwXUyUz0yzZlg2UxaePuoqKWLMZJ2WRZy9QcO0GG7jw4bJHvlYDkZhaEZTKKnXJCbC1haqvGTbXrVreQPCnxmY51C3IQjqu9CnNL%2BQXND13q43q53NT5Mfpq3d4nOnIN7MGEsgWLd%2FXRWjD2vYjBBjqkAaxWUsK0BPZkemZvMM3ysWx%2BcG1dxek60jb4rEOYNbdqGiWRarTzg%2BTgXxorCAl9xM5higEuDQg077X54C7JnpUA%2FMnFKf%2F6lNp0g90OE7aQSr5lUBr7ozYpQzT7QFfYxfjonLKXwS9NTV1CjKtkGkSlsd7cspTuPtjX7k7gDk3Wmyodcq6SLuXSMGy0zo74Mw8aLvAhmeuoj2CLosIwvLuuJmbG&X-Amz-Signature=14aa823d37db8eb2d50289dd4394c99c81d3711d1890c485343d28592e8018fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
