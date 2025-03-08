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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZK3S2U6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3fdHcIYr84hKLjJ8Gcee0Rmsj5vuvaR05NjtzMSiQ%2BwIhAL8vtQfKXjYMOrD9TjGGS9Xf3fpAPRjSXzIxnr6YbMBWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyq2hywXcEXSdff%2BQgq3ANO%2FspVxvVmZY8yEtxdhMtSXjINQfy%2FKFgtR6d059J%2BKzoBJ6h3m%2FSJziYfY%2FFBTuguj59mScSnWo3DbwQKKfQArqpubUjjTd9NllmxsY5oe0RU6RpQPDFsslaUS4SILuaqzk%2B5JHrMI3Sl3dXb%2B5rRvsPwm%2FkdU9BUzUzk%2FxT4yaInhFEpgiWEM6BMiv0vElQsn6zaPrHV0gVLrcotYxqPHv17bGH05AugT3o8BK43SQAMUMjEIJXXfmJ2pcwPveqzJrOmX1I6HBe8qMODAferrvmRpBwVFcZsf2QzPxR7cu%2BLRRHteJUfmIcE5HvkzS7bFrCuauVzuRA07qz6NyqV3GCxRhG7XkJesXTwcf%2FzsuApifZI34qLmCTU0YPAp5OR17u1egpgt%2FG0%2FXecHgs75X4gqdpCowsTXpThp64xp7mveGkmuAdxgRZxr3eIq8nTkDRJab0qzcNW6w6q7y0SshebeTmFrb5dlG8qs8zaoVkJ%2Bm6Ydw1uHWJ43UD%2FWGkMOwBpvYQYUZ1xTk8gU1nk6i9YF0k3XTiIABoaXLX0p5kHS4lAsXLDU0pekZDx0DCp10yIczGBEoS9JFuLMRou6831O8GFJfp%2FGexNBCa%2FdPsZ6i5BaVdPi%2BRYmDCsibC%2BBjqkAZ0gF2Tsgebhn4UFI2zzHIZJrzdHtc6cXXtD2oaWNXytXns4Ac0xYQe5EgZD0ykiAjf1kkFp7qKJ%2FTusc%2BVXDk22V93Z4tTTGPDIZWn0zVNgB4haX%2BodyW6k9maoYgYau8fSLRUmskue2n9Dck48B3or305ZYc21SVa7mPU5O6zDo%2Bta6TsFT4FCMtq0UcwdMlihM9FH9ckiyx%2BZBZllexDCoRbb&X-Amz-Signature=56ec0fa1a2067ee9fa680fc6b2a627e703df4853ff095b99dd4347068ba711d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZK3S2U6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3fdHcIYr84hKLjJ8Gcee0Rmsj5vuvaR05NjtzMSiQ%2BwIhAL8vtQfKXjYMOrD9TjGGS9Xf3fpAPRjSXzIxnr6YbMBWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyq2hywXcEXSdff%2BQgq3ANO%2FspVxvVmZY8yEtxdhMtSXjINQfy%2FKFgtR6d059J%2BKzoBJ6h3m%2FSJziYfY%2FFBTuguj59mScSnWo3DbwQKKfQArqpubUjjTd9NllmxsY5oe0RU6RpQPDFsslaUS4SILuaqzk%2B5JHrMI3Sl3dXb%2B5rRvsPwm%2FkdU9BUzUzk%2FxT4yaInhFEpgiWEM6BMiv0vElQsn6zaPrHV0gVLrcotYxqPHv17bGH05AugT3o8BK43SQAMUMjEIJXXfmJ2pcwPveqzJrOmX1I6HBe8qMODAferrvmRpBwVFcZsf2QzPxR7cu%2BLRRHteJUfmIcE5HvkzS7bFrCuauVzuRA07qz6NyqV3GCxRhG7XkJesXTwcf%2FzsuApifZI34qLmCTU0YPAp5OR17u1egpgt%2FG0%2FXecHgs75X4gqdpCowsTXpThp64xp7mveGkmuAdxgRZxr3eIq8nTkDRJab0qzcNW6w6q7y0SshebeTmFrb5dlG8qs8zaoVkJ%2Bm6Ydw1uHWJ43UD%2FWGkMOwBpvYQYUZ1xTk8gU1nk6i9YF0k3XTiIABoaXLX0p5kHS4lAsXLDU0pekZDx0DCp10yIczGBEoS9JFuLMRou6831O8GFJfp%2FGexNBCa%2FdPsZ6i5BaVdPi%2BRYmDCsibC%2BBjqkAZ0gF2Tsgebhn4UFI2zzHIZJrzdHtc6cXXtD2oaWNXytXns4Ac0xYQe5EgZD0ykiAjf1kkFp7qKJ%2FTusc%2BVXDk22V93Z4tTTGPDIZWn0zVNgB4haX%2BodyW6k9maoYgYau8fSLRUmskue2n9Dck48B3or305ZYc21SVa7mPU5O6zDo%2Bta6TsFT4FCMtq0UcwdMlihM9FH9ckiyx%2BZBZllexDCoRbb&X-Amz-Signature=cbd1181bac0690bf4335f2a481b4999e1088c4de6d3b08dfe70d3086d196b1da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
