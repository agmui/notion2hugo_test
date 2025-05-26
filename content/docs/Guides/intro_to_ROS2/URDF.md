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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYLBTKQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5STQ9%2Btot0nckLZnOzvH%2BRBtuKmtBoETzAgRJEgkBnAiBCjcfim8jLE%2BJD7lfs%2BH69mh5kMqX96H0SzABIdzl77Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMJkMBKbx8fUZ5k2gJKtwDR4FDjqUIfO4weJH%2Fr%2B6kgrcv%2F4BIRiA8%2BlCQPtSqB83lShHddQ3xQa0xiXLB%2Bppb2Jx926P3wg9SfogyovlX%2FJbdwIls%2FP4%2BxviR%2B1a%2Bl7Fd9bT4EQzvQggQ3NJn5Oz7YXxkuhvHbqMCj0O5ieIIbGtyxX0UiiAjKp1NoOE54OKKtvkXLEN2EZeP%2F9SXfFfQSROAWbLLNeidM1YnaS2P1vjcKfGp0xkOD41Edx9HP%2FxRleblV%2Fxh7epvO4eqLRpz3VF2SH7XVqvJnDFzJH8DvO7jiqOIaEUkWToJHkTkQK2z6H83yExw9uSF4rhckC8zi1myyaTxTU6LPtGVkV54ukx45kdXndymGSZIjOweBh5j%2FPnwP1iZ8mj8pbaCnIknl%2B99G%2BclXpEidsyvY%2FmXC1hz8CBPal1JpZRcNIoT%2B4MjEU%2BNbLPkm%2Bbefqz84DyJkaCKlKMLjS%2FYI8Q7yk9GGgAtSKNp2x768k6kM5ftZaDkrCayHxU8B1BzpRe%2Bo6u9vT%2Fjp7qrjS9I2MMCKi3XtKTB0KVczmdzIyD1E8RQtgdddz0LrrD0g9SoA5C1FE27qSd1nPLvDoefcpdvx%2BLCkk9ZB1cuAN%2FAlrRlfoABqLlWffAwRgqOtsyw4i8w3s%2FSwQY6pgF5nt1otrIx7KYcNYzDa6iKnh%2FsMbuC3kSkT7HENY5K9Auezg6ABe3zsQ%2B88EIDtHKX1dKyxxLH9%2BvKJ30V9xJ5AgSNAWaUxn8%2BMgbRwmXBrsM%2BGp%2BOrxrgO4J10rYxiLPE79ZDQ7EGT75aHJ1hbUMI%2BiC6RjDMm59D58JVEqH1rIA7dTVSP1BdfSlUawlLrhJ%2B59b04dGilQtMkiVQ%2BX7wkitH%2FlJV&X-Amz-Signature=cfd5128ccbe5cc78916a97747ce835e934897b2c0ed629e90418fa1d0106fb88&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYLBTKQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5STQ9%2Btot0nckLZnOzvH%2BRBtuKmtBoETzAgRJEgkBnAiBCjcfim8jLE%2BJD7lfs%2BH69mh5kMqX96H0SzABIdzl77Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMJkMBKbx8fUZ5k2gJKtwDR4FDjqUIfO4weJH%2Fr%2B6kgrcv%2F4BIRiA8%2BlCQPtSqB83lShHddQ3xQa0xiXLB%2Bppb2Jx926P3wg9SfogyovlX%2FJbdwIls%2FP4%2BxviR%2B1a%2Bl7Fd9bT4EQzvQggQ3NJn5Oz7YXxkuhvHbqMCj0O5ieIIbGtyxX0UiiAjKp1NoOE54OKKtvkXLEN2EZeP%2F9SXfFfQSROAWbLLNeidM1YnaS2P1vjcKfGp0xkOD41Edx9HP%2FxRleblV%2Fxh7epvO4eqLRpz3VF2SH7XVqvJnDFzJH8DvO7jiqOIaEUkWToJHkTkQK2z6H83yExw9uSF4rhckC8zi1myyaTxTU6LPtGVkV54ukx45kdXndymGSZIjOweBh5j%2FPnwP1iZ8mj8pbaCnIknl%2B99G%2BclXpEidsyvY%2FmXC1hz8CBPal1JpZRcNIoT%2B4MjEU%2BNbLPkm%2Bbefqz84DyJkaCKlKMLjS%2FYI8Q7yk9GGgAtSKNp2x768k6kM5ftZaDkrCayHxU8B1BzpRe%2Bo6u9vT%2Fjp7qrjS9I2MMCKi3XtKTB0KVczmdzIyD1E8RQtgdddz0LrrD0g9SoA5C1FE27qSd1nPLvDoefcpdvx%2BLCkk9ZB1cuAN%2FAlrRlfoABqLlWffAwRgqOtsyw4i8w3s%2FSwQY6pgF5nt1otrIx7KYcNYzDa6iKnh%2FsMbuC3kSkT7HENY5K9Auezg6ABe3zsQ%2B88EIDtHKX1dKyxxLH9%2BvKJ30V9xJ5AgSNAWaUxn8%2BMgbRwmXBrsM%2BGp%2BOrxrgO4J10rYxiLPE79ZDQ7EGT75aHJ1hbUMI%2BiC6RjDMm59D58JVEqH1rIA7dTVSP1BdfSlUawlLrhJ%2B59b04dGilQtMkiVQ%2BX7wkitH%2FlJV&X-Amz-Signature=731cf4ab51e7392b3e7d750b5c290438d1968811ff74e95e080c4cb63f576e51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
