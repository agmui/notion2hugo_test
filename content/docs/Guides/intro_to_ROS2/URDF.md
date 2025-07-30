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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXAXDIS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaH09vCR%2FDIFsYrk6w2i9aTrXOyVPn6BUvWv70lqDpUAiEA45SV29dTZv6Xwsxonlxx2fMPszcYrUnrBl6ZZVfMSqEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIMayiCg6DkmqVydyrcAwzzWc2rv%2F3wuDyAkHVqldfB%2FBSYNWpCpTKlvtlU%2Frp7IeeKh%2FxyQFgTNSC5ZgPL4Kpd%2Bg3J8GDE6rDVbKSjPuNdJUT%2B2yFf9oGQNVM2ocxzAoAsYnwLzrw5Ht%2Ba6RfppzeYg34V917y%2FNVAt59XkZj%2FNIcnfjI%2BV7mQTbniVErtMQTnHxd3RQ19S0MQwAXpd2Bth9ai1XgFcgG2n4hK7%2Fkwrwt50%2BZOjRREMaMzudSLJOFUtY5Y7G3pl%2FkHKSbuhddS0ca57cuuFV3QPQos8998uoh8nNX2T0CwSrXBWRnNb%2BMlRI%2Bg3lh4tLIkPikxxa8%2FrPs2Q4SHWwZDIejAz%2BM1pc8t7kzXRUHBlbaI8cifYXgk%2FN%2Fgywx8bl4c5WjSxRZA9hPFjRbHxfB6YZs2FPUTi38t6Y3EK%2FGNxrmsdVPHKa4fa3vqSpRtHgQeC5NrQA0CSOuAMXRkICL9FIePZBWwTVrlGe9LRej4GBtnzNqSE4qm7HJN9jowg1qA%2FtR%2Bc3KHyA5nqhcI%2FYdQ87FSZZjokhCD82td5FVhF%2FkdbveKnhZf2%2FFBgOyPHACdxfh5WY99rF%2Fal7ZsQos3j62i3TTxpFDzZ3YHmZ7u4wRxmAsSOY0wSGBkENVS1E8KMPKIqcQGOqUBcg5BfyKGhMpdVWnpI2KWLd2%2F4wgleFpdq7KIk8OIc3oMZ6xMUXhr3T5%2FTl3gFJsr%2BGyYkUy0OYCcaFXkw9knjnAn87lKbAa5zqs2fd%2F7GJaySx93e1a0z2Dg91Ne4mDYTYYBrY67eLzL9qLZGQCbtnNkZtVjp0oc7gL2NhLlBIHN3DlsektLJsRMTq5qHOrSWAv9nMJhJQwUxC2yiBRgmwl5aiFt&X-Amz-Signature=cafad862a7a29270dd77655f65116c8d4d8465a1048a32bb016fcd6dc4af00ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXAXDIS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaH09vCR%2FDIFsYrk6w2i9aTrXOyVPn6BUvWv70lqDpUAiEA45SV29dTZv6Xwsxonlxx2fMPszcYrUnrBl6ZZVfMSqEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIMayiCg6DkmqVydyrcAwzzWc2rv%2F3wuDyAkHVqldfB%2FBSYNWpCpTKlvtlU%2Frp7IeeKh%2FxyQFgTNSC5ZgPL4Kpd%2Bg3J8GDE6rDVbKSjPuNdJUT%2B2yFf9oGQNVM2ocxzAoAsYnwLzrw5Ht%2Ba6RfppzeYg34V917y%2FNVAt59XkZj%2FNIcnfjI%2BV7mQTbniVErtMQTnHxd3RQ19S0MQwAXpd2Bth9ai1XgFcgG2n4hK7%2Fkwrwt50%2BZOjRREMaMzudSLJOFUtY5Y7G3pl%2FkHKSbuhddS0ca57cuuFV3QPQos8998uoh8nNX2T0CwSrXBWRnNb%2BMlRI%2Bg3lh4tLIkPikxxa8%2FrPs2Q4SHWwZDIejAz%2BM1pc8t7kzXRUHBlbaI8cifYXgk%2FN%2Fgywx8bl4c5WjSxRZA9hPFjRbHxfB6YZs2FPUTi38t6Y3EK%2FGNxrmsdVPHKa4fa3vqSpRtHgQeC5NrQA0CSOuAMXRkICL9FIePZBWwTVrlGe9LRej4GBtnzNqSE4qm7HJN9jowg1qA%2FtR%2Bc3KHyA5nqhcI%2FYdQ87FSZZjokhCD82td5FVhF%2FkdbveKnhZf2%2FFBgOyPHACdxfh5WY99rF%2Fal7ZsQos3j62i3TTxpFDzZ3YHmZ7u4wRxmAsSOY0wSGBkENVS1E8KMPKIqcQGOqUBcg5BfyKGhMpdVWnpI2KWLd2%2F4wgleFpdq7KIk8OIc3oMZ6xMUXhr3T5%2FTl3gFJsr%2BGyYkUy0OYCcaFXkw9knjnAn87lKbAa5zqs2fd%2F7GJaySx93e1a0z2Dg91Ne4mDYTYYBrY67eLzL9qLZGQCbtnNkZtVjp0oc7gL2NhLlBIHN3DlsektLJsRMTq5qHOrSWAv9nMJhJQwUxC2yiBRgmwl5aiFt&X-Amz-Signature=a2350636e2b4111862b9a483bc30b95e88db02620491cfba777be226f394f9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
