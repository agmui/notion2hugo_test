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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2ZLV42%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDE5Y6L%2BWi140aQcAmZ2BBNxRGqzx0BVgpGV2rG9Qn61AiBGCNegVInLBFKsuEydCB8KHs%2BvnKNaB1feqaWRSMF5Hyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMeWOzb5hhGEzIpcBYKtwDYhI6djfW0RLrb1TwG2I11nlko6LJOpI1sMPl1scbXpmGj1YpCd%2FhjT8%2BTgqf45HMw0UTjIoDrW8MoQqi2Uwr6Nhv8S69BaruqyLUa30hnLSkdHbJXNykxKGOmrRoYWgDbBozG1NYr5rscTPH9vVayLA1k4b1BpZ2fvbxn%2B2awOY4OZlfCHhOOncTxUql9o%2B35y08BPQ%2FjuESDOFvtOpbU81ot2yHAEHYAAPSyWbrc7hRDIAKtK%2FrIP4BeL%2FSiWLAMUHtqI9wYll5RUFj%2FXB9fR98xb9NFHnP50lQQm5jCAGrFp%2FHVsDfLWEKLMKv%2Fz3rLwtyQPaQdMNSyvGfToxAuoXDG3gaQeYRXCYWZy9YTME2E3LqdB5HjI9iQFaDS3r9IDT0Av8EZWfGgpbeLiBTrEQZMeWtX4lqQhXfpOiAH1yTADQ6EADvXvsmj%2FzC744a6ssaOykesh8XefBlLr7KDygCdUNv1R4C%2B8RL4c2sgNLgMSLeQsjjX5pE50PnX%2FJByzgsD1rxkQmp3FL8sW%2FzIzTOL81DkOWm6vPzzIJRo3o2JXbcPSGz36xx2teWtDKHOGVclbzy7%2BKeIT9MTPgmUsS0ebefrvZpo5RL05JGeVxWN0Ln8jNWHUOIz0kwj83JwQY6pgHgl8P4RmTU0K3lQtiVsHdfH0wUCxwLaJXiQYZJv0mrl0bfFt4oeXOoLXeTuZlKU9OkcQ0jkoNv31C9sGAsx7L8S2nS30v%2Bs47VdrnDV7m%2F3J%2FuAUBcwmLASAHo1brujPM7K8Mq3eid8JxbC4u%2FGeio5BAsoxqqfKBCTTaT0zEgjDQGiA1LZgD4EsSXjR7Tt9VugRhrf%2BHcBLbhOPm3j2xmGxWxtq4M&X-Amz-Signature=5f6385b6ccb78c5a9e8fc7b216035ce3a0587737427ea6d6c99773c96e8bbc27&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2ZLV42%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDE5Y6L%2BWi140aQcAmZ2BBNxRGqzx0BVgpGV2rG9Qn61AiBGCNegVInLBFKsuEydCB8KHs%2BvnKNaB1feqaWRSMF5Hyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMeWOzb5hhGEzIpcBYKtwDYhI6djfW0RLrb1TwG2I11nlko6LJOpI1sMPl1scbXpmGj1YpCd%2FhjT8%2BTgqf45HMw0UTjIoDrW8MoQqi2Uwr6Nhv8S69BaruqyLUa30hnLSkdHbJXNykxKGOmrRoYWgDbBozG1NYr5rscTPH9vVayLA1k4b1BpZ2fvbxn%2B2awOY4OZlfCHhOOncTxUql9o%2B35y08BPQ%2FjuESDOFvtOpbU81ot2yHAEHYAAPSyWbrc7hRDIAKtK%2FrIP4BeL%2FSiWLAMUHtqI9wYll5RUFj%2FXB9fR98xb9NFHnP50lQQm5jCAGrFp%2FHVsDfLWEKLMKv%2Fz3rLwtyQPaQdMNSyvGfToxAuoXDG3gaQeYRXCYWZy9YTME2E3LqdB5HjI9iQFaDS3r9IDT0Av8EZWfGgpbeLiBTrEQZMeWtX4lqQhXfpOiAH1yTADQ6EADvXvsmj%2FzC744a6ssaOykesh8XefBlLr7KDygCdUNv1R4C%2B8RL4c2sgNLgMSLeQsjjX5pE50PnX%2FJByzgsD1rxkQmp3FL8sW%2FzIzTOL81DkOWm6vPzzIJRo3o2JXbcPSGz36xx2teWtDKHOGVclbzy7%2BKeIT9MTPgmUsS0ebefrvZpo5RL05JGeVxWN0Ln8jNWHUOIz0kwj83JwQY6pgHgl8P4RmTU0K3lQtiVsHdfH0wUCxwLaJXiQYZJv0mrl0bfFt4oeXOoLXeTuZlKU9OkcQ0jkoNv31C9sGAsx7L8S2nS30v%2Bs47VdrnDV7m%2F3J%2FuAUBcwmLASAHo1brujPM7K8Mq3eid8JxbC4u%2FGeio5BAsoxqqfKBCTTaT0zEgjDQGiA1LZgD4EsSXjR7Tt9VugRhrf%2BHcBLbhOPm3j2xmGxWxtq4M&X-Amz-Signature=dd4cc661be5e99591451302076195f2b076fd28987a3ac99c325e5446e65544c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
