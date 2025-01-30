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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GREQUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2NuKoPOGQYlpXe4lpL07AuzHDCg0com7RHHZ35UyY3QIhAPAIjYY%2FA91T3Yr2Sz5tahGeVHPKrYhydQ7k0rkFpj8ZKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySbFmS2kh5xL9N6%2FEq3AOUsV1zmuxwmg%2FmZF56jhpGYQMqywthr6J6GR2pd0G%2FB6Y7lekfWCUU5IAKjq5YzaxZgZqinY%2BmoPRhWlIibV4qYwJ3mqjd7F6hgy2zKQjf2IN3gFqmimlVf6IKayQXJ%2FofsMaw%2FdqSQa3FQCsdkLAkSGLDDZmUtCKIJZgdGEJ76kSVjvUx3ROSf%2FEnZsf162J99S%2FQF43M2%2BJAMJq1KvA1WUzXeX4EY2KOtlqaIoeZOf7nwY%2Ff4HtLRhwqXjNQyjd2fH7p5idw0NOuqE2mvjWOFVoZoOdlgMWpmAIvuov%2BgiX0eyLhsfxBMZcnmLf9iBck7rpG5L6S48Kqx7MhEOz%2F0KujuHJE7h7vPSNOTwPnikFn%2FPm0jraLNFdEvdnBGl1Q21YpFXMAteDEJhp2U8U1ZY2%2Fbay8gffAD%2FtwmZ6Km2zLms9pkLe5r%2BM2El47CQnnXETriNBc26Uk7u0hqlb59n%2BSMXCJeVBKbEkPjuCVTn%2FwekScZNZPzCc6tWoxMBbiswYzoOsD1Qd1qP%2BlMW2kG03pnmg%2BXh%2FtsWgCsl%2FnUjo0tGV4XtSOU6%2F6mTnOv4xZq3ls1sCyhms54bGxE0lY4QAc0lnAaEKUZyvNMMgXWNr6k7k5OUmVErXcKTDm3%2B28BjqkAVNr1H6sHXlpwiYZV6IYjZk3mIh%2FuJmsL3o8TiFNbuSFo8AkNf4E5nm1l%2B1pe2tOELwwel7BYAZhLhlm2AdkQrO7kSKGpFVhst48jWjRJTF9%2BXbNk7OgU2EutsCDOJMpVcpnX1K9FcNjVrQN0lXzmtPOXlvF4oCdSfRNB%2FrO%2B5vDIHysmwEvTVzd4US3592rtD1S2V8wPNPrwzQopdDdoXJh2GHo&X-Amz-Signature=87da285627075887399ece56960ef7d70cf68b1a241c113135d4ee8536b2704d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GREQUN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2NuKoPOGQYlpXe4lpL07AuzHDCg0com7RHHZ35UyY3QIhAPAIjYY%2FA91T3Yr2Sz5tahGeVHPKrYhydQ7k0rkFpj8ZKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySbFmS2kh5xL9N6%2FEq3AOUsV1zmuxwmg%2FmZF56jhpGYQMqywthr6J6GR2pd0G%2FB6Y7lekfWCUU5IAKjq5YzaxZgZqinY%2BmoPRhWlIibV4qYwJ3mqjd7F6hgy2zKQjf2IN3gFqmimlVf6IKayQXJ%2FofsMaw%2FdqSQa3FQCsdkLAkSGLDDZmUtCKIJZgdGEJ76kSVjvUx3ROSf%2FEnZsf162J99S%2FQF43M2%2BJAMJq1KvA1WUzXeX4EY2KOtlqaIoeZOf7nwY%2Ff4HtLRhwqXjNQyjd2fH7p5idw0NOuqE2mvjWOFVoZoOdlgMWpmAIvuov%2BgiX0eyLhsfxBMZcnmLf9iBck7rpG5L6S48Kqx7MhEOz%2F0KujuHJE7h7vPSNOTwPnikFn%2FPm0jraLNFdEvdnBGl1Q21YpFXMAteDEJhp2U8U1ZY2%2Fbay8gffAD%2FtwmZ6Km2zLms9pkLe5r%2BM2El47CQnnXETriNBc26Uk7u0hqlb59n%2BSMXCJeVBKbEkPjuCVTn%2FwekScZNZPzCc6tWoxMBbiswYzoOsD1Qd1qP%2BlMW2kG03pnmg%2BXh%2FtsWgCsl%2FnUjo0tGV4XtSOU6%2F6mTnOv4xZq3ls1sCyhms54bGxE0lY4QAc0lnAaEKUZyvNMMgXWNr6k7k5OUmVErXcKTDm3%2B28BjqkAVNr1H6sHXlpwiYZV6IYjZk3mIh%2FuJmsL3o8TiFNbuSFo8AkNf4E5nm1l%2B1pe2tOELwwel7BYAZhLhlm2AdkQrO7kSKGpFVhst48jWjRJTF9%2BXbNk7OgU2EutsCDOJMpVcpnX1K9FcNjVrQN0lXzmtPOXlvF4oCdSfRNB%2FrO%2B5vDIHysmwEvTVzd4US3592rtD1S2V8wPNPrwzQopdDdoXJh2GHo&X-Amz-Signature=d5fe5be540d4899445a32861a0a51dc55d52986785b2a006f032067eaf7677c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
