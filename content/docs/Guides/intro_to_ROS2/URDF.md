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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCT433F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJFMEMCHxTJggdVlzWj3grS5M0gLfiUwwc2uDJkyEGMJ2jjCd4CIFAl2a8zH5ty04LCdbIdf2TZG71BMCd1%2FJo4oBl%2BkjFDKv8DCGgQABoMNjM3NDIzMTgzODA1IgyUeWoSPMpbZUq0HWUq3ANgWbXuNOUXC%2FwcwyRlRVc1z8HUrHqCGyLw8M467GupdAujRKIjfTTh4qbHplXaemxGsOGm8%2FV%2FO2RK5pk7rYAMKO6r%2BIkUzxvc40ViM1Zpclcv0og1VBJn4M2omI9%2FWIUdLkrw3E90giykDCnLVmXTtyXR1s%2FxMgRl%2BS%2Fw2JFywrfvhDa8LkdcnSGDztSQckhl7wBYWwz0mDI37xQHGMd6FysxZhDZVoYre%2ByS3chHOoauqdOWVL8MoEJTkbM8crZXgC58HOCA%2Fr%2BjUt%2FmD7FTQXN0rquuk1vMZO5uZSqFXzUXaSg8FwTfv36CFapyfMMHDGzcIsMqg2aPAGgG8Px7dF57BJX6j8nLMC9gBBHk%2BEnNwNea9FodRMocYHLxUuIzOQUjjo1zVyvkuEA8hkzvmkuDL3YwXjqKfSVLvOqEypc3fksg4oYtjCTfR8Q0mCACMN%2B02UaitrZY6cQCk5%2FA6CaZHm5azTzt9BUOZJF6khkM%2BXdIFjoNK4Lkd%2BvV2d9HO56l%2BCpp4W3G2%2B9s0jHN9tB2fqCXwLwzTczSzE8FrsHLVPOpY2EbJK3W9W9aCKSvEC7uPRE6jr3VPbqIcKLlzGiRoKRajYrr1k4KggDavpbUELXxA7nyHeVEQTCR35y%2FBjqnAVRYwSQFqu1%2FGEnnPQv7YLQ7GwF6nPtraGMrOywewwnOzr74MHbdKzWXr2yTvEkAQ8AhzjK%2FGBD2QASNQkqheT%2Fak7WQNekfdoxVF%2B%2FbQs7kVjttcIwB5fZRPZslHoBIS2XhnrS0QWPmwAiDaxHERwmby3jEFSwtQRSYhatxhI0Hs4%2BW5UE3qv3jUxTdsPnXsIVtrt29Es6oet31rxWI2K%2FwhywOjMIc&X-Amz-Signature=76fb8a48bee0bd8e81b370eb49611e60a7032c323d34906d458e5a75fb74d7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCT433F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJFMEMCHxTJggdVlzWj3grS5M0gLfiUwwc2uDJkyEGMJ2jjCd4CIFAl2a8zH5ty04LCdbIdf2TZG71BMCd1%2FJo4oBl%2BkjFDKv8DCGgQABoMNjM3NDIzMTgzODA1IgyUeWoSPMpbZUq0HWUq3ANgWbXuNOUXC%2FwcwyRlRVc1z8HUrHqCGyLw8M467GupdAujRKIjfTTh4qbHplXaemxGsOGm8%2FV%2FO2RK5pk7rYAMKO6r%2BIkUzxvc40ViM1Zpclcv0og1VBJn4M2omI9%2FWIUdLkrw3E90giykDCnLVmXTtyXR1s%2FxMgRl%2BS%2Fw2JFywrfvhDa8LkdcnSGDztSQckhl7wBYWwz0mDI37xQHGMd6FysxZhDZVoYre%2ByS3chHOoauqdOWVL8MoEJTkbM8crZXgC58HOCA%2Fr%2BjUt%2FmD7FTQXN0rquuk1vMZO5uZSqFXzUXaSg8FwTfv36CFapyfMMHDGzcIsMqg2aPAGgG8Px7dF57BJX6j8nLMC9gBBHk%2BEnNwNea9FodRMocYHLxUuIzOQUjjo1zVyvkuEA8hkzvmkuDL3YwXjqKfSVLvOqEypc3fksg4oYtjCTfR8Q0mCACMN%2B02UaitrZY6cQCk5%2FA6CaZHm5azTzt9BUOZJF6khkM%2BXdIFjoNK4Lkd%2BvV2d9HO56l%2BCpp4W3G2%2B9s0jHN9tB2fqCXwLwzTczSzE8FrsHLVPOpY2EbJK3W9W9aCKSvEC7uPRE6jr3VPbqIcKLlzGiRoKRajYrr1k4KggDavpbUELXxA7nyHeVEQTCR35y%2FBjqnAVRYwSQFqu1%2FGEnnPQv7YLQ7GwF6nPtraGMrOywewwnOzr74MHbdKzWXr2yTvEkAQ8AhzjK%2FGBD2QASNQkqheT%2Fak7WQNekfdoxVF%2B%2FbQs7kVjttcIwB5fZRPZslHoBIS2XhnrS0QWPmwAiDaxHERwmby3jEFSwtQRSYhatxhI0Hs4%2BW5UE3qv3jUxTdsPnXsIVtrt29Es6oet31rxWI2K%2FwhywOjMIc&X-Amz-Signature=402b96a2f4aa9975bba5935723ad3ee0f1c743d3c779fe069d1b8b5e7aa53fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
