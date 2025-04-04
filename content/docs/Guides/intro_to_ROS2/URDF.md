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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q2MPVA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxcBTQQv5Y3%2FwHZmmsac4jPhiohz6IfE7SbUIxu1E93AiEAgJjaqRae06VNH%2FpyYxRk2W9uLzedfuoEehi62ucEp6Mq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKGooIeyIRw92ICMqircA%2FSD7Ydgcdg2Z%2BbaaJEnKdtuEAJJ1WZo4TTOSd6zjF2KXOaaiTZBi8Ux5PzkDJqVhV%2FGKf%2By%2Buvq5NEt6CsmfV57%2BtzerJkJiJdausv3M5HMSLaxMNqEarLb%2F7xtLSNWfZrnVZsjAKS0AQMKVHoQ79%2Buk0deCmEWiu02IRzqFAwJS8lxtT3ULvU%2FwXgFTvhWmcb6xXM0LTgBG%2BdzhjwArdlIX9mjZ5QKTmYkRbCm3kNnp3KUrGcou5y3W0yVHKsomxBkooqrOGueA4zEcdAU62R53IeFAkH%2FaFZD%2Bh0ptcpqaUW2shOAdb46sQgHzp82yW%2B4c1o9LThVV0Jp2jUm1SLqEa8MRTrcoRaqlB4F2HCJ0tkP2k7YkrIWP4%2BUrKtkaU1zCUdebbVrCrtjksDIThx0KbnJdoEQ7MoNLsBVmApUjqmpsHjGbnpuXjI96l0T31DMAc9ak4V836RTqiVuGdLqI6nu0eFiSHxojGZ9J7ydF5ZwSKrmQSoR2WdeyYi0y%2BnX9SknFtS4CSkhT31wQZbeW9o9F3stuWOdBh0sSHeisG0weKP5UCnR7TuM8dkzMSowUvhJxUlqt8OUcck56jtguy71yLkn9jAhXsgQzkz56n%2FFGg05vahLojKTMPrSwL8GOqUB%2F%2FeIBVb9eW2JyLsuwUI6HTIq47Nes%2BcxmJbvpNhMZo3SZgreh9mqlPb6A039jO0fEKbwnJCR7SurmPvpgJ44Ey2cN3wqxnrPS%2BqMiWSbcnwe8n%2BaVHstIZ1U4bxlzFwb%2BA6OvjLFmiaXJyDEb47oB2V26FupOx02ItdPDQMhx8dRA5lYYQhVqbyDTTRPcZwUJ4YtEKIwlz1lbqKa%2FEnF7jrU0gLs&X-Amz-Signature=ba805773c255bed6b454a477e92dc9b9747d4c9272ea72e7b96e6e0e8b8dda9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Q2MPVA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxcBTQQv5Y3%2FwHZmmsac4jPhiohz6IfE7SbUIxu1E93AiEAgJjaqRae06VNH%2FpyYxRk2W9uLzedfuoEehi62ucEp6Mq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKGooIeyIRw92ICMqircA%2FSD7Ydgcdg2Z%2BbaaJEnKdtuEAJJ1WZo4TTOSd6zjF2KXOaaiTZBi8Ux5PzkDJqVhV%2FGKf%2By%2Buvq5NEt6CsmfV57%2BtzerJkJiJdausv3M5HMSLaxMNqEarLb%2F7xtLSNWfZrnVZsjAKS0AQMKVHoQ79%2Buk0deCmEWiu02IRzqFAwJS8lxtT3ULvU%2FwXgFTvhWmcb6xXM0LTgBG%2BdzhjwArdlIX9mjZ5QKTmYkRbCm3kNnp3KUrGcou5y3W0yVHKsomxBkooqrOGueA4zEcdAU62R53IeFAkH%2FaFZD%2Bh0ptcpqaUW2shOAdb46sQgHzp82yW%2B4c1o9LThVV0Jp2jUm1SLqEa8MRTrcoRaqlB4F2HCJ0tkP2k7YkrIWP4%2BUrKtkaU1zCUdebbVrCrtjksDIThx0KbnJdoEQ7MoNLsBVmApUjqmpsHjGbnpuXjI96l0T31DMAc9ak4V836RTqiVuGdLqI6nu0eFiSHxojGZ9J7ydF5ZwSKrmQSoR2WdeyYi0y%2BnX9SknFtS4CSkhT31wQZbeW9o9F3stuWOdBh0sSHeisG0weKP5UCnR7TuM8dkzMSowUvhJxUlqt8OUcck56jtguy71yLkn9jAhXsgQzkz56n%2FFGg05vahLojKTMPrSwL8GOqUB%2F%2FeIBVb9eW2JyLsuwUI6HTIq47Nes%2BcxmJbvpNhMZo3SZgreh9mqlPb6A039jO0fEKbwnJCR7SurmPvpgJ44Ey2cN3wqxnrPS%2BqMiWSbcnwe8n%2BaVHstIZ1U4bxlzFwb%2BA6OvjLFmiaXJyDEb47oB2V26FupOx02ItdPDQMhx8dRA5lYYQhVqbyDTTRPcZwUJ4YtEKIwlz1lbqKa%2FEnF7jrU0gLs&X-Amz-Signature=8c3348b6a78b1e6dcbb8d4da4117ab66fe43222c70a4ab741849e12213cfe7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
