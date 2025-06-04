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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6TEFJU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDNZNRcUDkc2%2BaSVeRNW4v0wPwqfUZ2qpFsj6of7sfkpgIhAIwUdWL5fNiWu6jAOGHFl0ogDG7%2F5U3rtQ71jiiRkvswKv8DCDUQABoMNjM3NDIzMTgzODA1Igx5%2Bslh42CIeWB1tOQq3ANs3yxFUYAINuP0MKZ79w2Z2QTvXywzKQfxk7B3SNELiTi0hsrnZebH48DxhYgCLKcHNWPVLWxrutsii%2FFGZliaBYL4rPSV3WXyCuqmWva0KPCGhLiATrBIkW0Ex4EeGt0bA9Dy1iT8F34HGu7LuEip1r0L88DT1mkkevnY9m2UolT128WYqZhGNOYgeDPc6H6bYRmniKg%2FZOilioXUwEqi2pIIiKZuheuR8q8aMY6t92qQMqMmmHaST4Q4m66pbjzeuSYoGP4GU%2FFmu0VV%2B7wYW2SiGcybUcevORWx3jB4wa90gXonFjmuPd2bmR4MUekSuubX8S3tceWRlAGR8uL%2FAb75mMtOat4%2F%2BsXo8hR%2B35OrnVoWQLQPiwg6JWtcdh3lLmj8gz1w4WJqCepK7uU5yFrEJXTOJk6IWcNSmik3VfFPDF8yUw8XRrjWNt2aD5gjl3%2F3olqg1M8byRBT6%2BMarxkBtkLUodY9KB%2FkP4Vi%2BeqDju0WDuQnvPINNRHdzcI5YerjF2w1B0tIPVtlCwWnBcw9wU9tSfKJKRsGkfCeFx4ZCUhyMa3jVbfKp9UBQVU9tQI1vvYbMbkPsaHajhV1FUWAYXP1wPGblZaNLb67EK4IdCdQvdNF7WLnDjDb1ILCBjqkAd0uf8POKmiEYzc2GtHLAN%2BfHcbAzFn%2FNT9qPH95zHIcXWP%2F0zPlls%2B79rufrKN5Aj7kCzckpxSfJjueSTbGS1GwCOvS1HTChxh2cGp9fVZLnbUljFXhuCoBEcP7x4myobawqmIuOMW%2FSsbR3srP3V2THxbk6%2BZTAlDvyt34YY8pjwvolivH0qt4aLACe9tMh4t7MXj9l3V0whdIRpZDjSChqO%2FB&X-Amz-Signature=c3591e23fca987440a02a378c436cf7d4d16f2f85ff95e7455250c82a5ab28e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6TEFJU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDNZNRcUDkc2%2BaSVeRNW4v0wPwqfUZ2qpFsj6of7sfkpgIhAIwUdWL5fNiWu6jAOGHFl0ogDG7%2F5U3rtQ71jiiRkvswKv8DCDUQABoMNjM3NDIzMTgzODA1Igx5%2Bslh42CIeWB1tOQq3ANs3yxFUYAINuP0MKZ79w2Z2QTvXywzKQfxk7B3SNELiTi0hsrnZebH48DxhYgCLKcHNWPVLWxrutsii%2FFGZliaBYL4rPSV3WXyCuqmWva0KPCGhLiATrBIkW0Ex4EeGt0bA9Dy1iT8F34HGu7LuEip1r0L88DT1mkkevnY9m2UolT128WYqZhGNOYgeDPc6H6bYRmniKg%2FZOilioXUwEqi2pIIiKZuheuR8q8aMY6t92qQMqMmmHaST4Q4m66pbjzeuSYoGP4GU%2FFmu0VV%2B7wYW2SiGcybUcevORWx3jB4wa90gXonFjmuPd2bmR4MUekSuubX8S3tceWRlAGR8uL%2FAb75mMtOat4%2F%2BsXo8hR%2B35OrnVoWQLQPiwg6JWtcdh3lLmj8gz1w4WJqCepK7uU5yFrEJXTOJk6IWcNSmik3VfFPDF8yUw8XRrjWNt2aD5gjl3%2F3olqg1M8byRBT6%2BMarxkBtkLUodY9KB%2FkP4Vi%2BeqDju0WDuQnvPINNRHdzcI5YerjF2w1B0tIPVtlCwWnBcw9wU9tSfKJKRsGkfCeFx4ZCUhyMa3jVbfKp9UBQVU9tQI1vvYbMbkPsaHajhV1FUWAYXP1wPGblZaNLb67EK4IdCdQvdNF7WLnDjDb1ILCBjqkAd0uf8POKmiEYzc2GtHLAN%2BfHcbAzFn%2FNT9qPH95zHIcXWP%2F0zPlls%2B79rufrKN5Aj7kCzckpxSfJjueSTbGS1GwCOvS1HTChxh2cGp9fVZLnbUljFXhuCoBEcP7x4myobawqmIuOMW%2FSsbR3srP3V2THxbk6%2BZTAlDvyt34YY8pjwvolivH0qt4aLACe9tMh4t7MXj9l3V0whdIRpZDjSChqO%2FB&X-Amz-Signature=9acd89b6dd3c007cf7968586ef2a12687e58a0c09eb421f401eb6c03fc7727a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
