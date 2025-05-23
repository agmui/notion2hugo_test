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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LTFDFQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDP9gwedD8%2BxQ%2FJ3IOOfUC9tQq00Q2ay2uzO%2FKxbwpvCgIhAIu8LPDS31KYe9svv6ax0yVlSuqy7iWAR7voeUJYhFvmKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6%2Fb3Uu1bBT%2F7JLqsq3AMFpwHLIRL1mwdSKbcir%2FXTlK%2BhWL%2B2UdA%2BuXVeQfhJn5iHQX8gYJwenjCkYxYSpOumO%2FA1M%2FkoL8PRcoKFpyJRq7jhsTVeMowVng%2BLniEthtnBOjs22aN83O7wbSMgvu3m9lnaFmWHda4Apof%2FfRCls8A7VY1M%2BLhswv25qHz%2BAdKyTl7Ol0NHmZkUdMmfFa4Ym12d%2FnTkPzesj6vDQIILwT7%2Be2EBmA2ZUJJyr2k2nVPCiGXqeqA867B0LDkWAzlL1yMspwNwktIhhHLote59EIcyxYjI4hQgvJ6TyhejrCB3H5ACh4VtsRkTwzkumaskiI%2BynYaS1kDakzTRoMw0YruGa%2FT5YWZjZTflg66sx2uykjY4CxZKweCWBW%2B623MaNlR5suqrksx54U9QRtFCjrsfWbMBlkw91O%2B9KpsoxB6OtTnSsrLqHvM1l%2BPeuog9VkXkTFJKY%2FMvUde%2Fcj0MG94ZQQP698uadudkAn2F0q3Vgci0R7B8eU5QdS7XSYqe4UGSzmRN%2BSTZB6ze%2Fn9hROjAxQm16WQUcmDtYBqPUXxP6816TPtt8KM2YQNHhQy1z1c%2FWeu3JT%2F4tayDdwsi8UMuEkw15K%2F1wqe6G9KLM02FzAR1sEK%2B4ylV0DCV18LBBjqkAS5tv5plEs%2Fv6MJaH27zdammEt5fVnANDSBgSH8UF0XXT3z90nWQumFlrdZtgzCHcTo%2Fyt52CbfGQt875A0G5X5g%2FwxdtHu2diZNEhh3pMkbG%2BnclMzA02MafNHhukBercFrLpF1pW0YsuW65wwsQyJWzK%2Bl3bKZzM5IYljD0qiGGgt1Rbv9LbKh4LB8Gaun3lFax5dagDeYKm6LKraghgNhOS4H&X-Amz-Signature=9525cea25d8632e266d59d3196600fdb1ac35f8955fc050fdc7d4bc12d4101f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LTFDFQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDP9gwedD8%2BxQ%2FJ3IOOfUC9tQq00Q2ay2uzO%2FKxbwpvCgIhAIu8LPDS31KYe9svv6ax0yVlSuqy7iWAR7voeUJYhFvmKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6%2Fb3Uu1bBT%2F7JLqsq3AMFpwHLIRL1mwdSKbcir%2FXTlK%2BhWL%2B2UdA%2BuXVeQfhJn5iHQX8gYJwenjCkYxYSpOumO%2FA1M%2FkoL8PRcoKFpyJRq7jhsTVeMowVng%2BLniEthtnBOjs22aN83O7wbSMgvu3m9lnaFmWHda4Apof%2FfRCls8A7VY1M%2BLhswv25qHz%2BAdKyTl7Ol0NHmZkUdMmfFa4Ym12d%2FnTkPzesj6vDQIILwT7%2Be2EBmA2ZUJJyr2k2nVPCiGXqeqA867B0LDkWAzlL1yMspwNwktIhhHLote59EIcyxYjI4hQgvJ6TyhejrCB3H5ACh4VtsRkTwzkumaskiI%2BynYaS1kDakzTRoMw0YruGa%2FT5YWZjZTflg66sx2uykjY4CxZKweCWBW%2B623MaNlR5suqrksx54U9QRtFCjrsfWbMBlkw91O%2B9KpsoxB6OtTnSsrLqHvM1l%2BPeuog9VkXkTFJKY%2FMvUde%2Fcj0MG94ZQQP698uadudkAn2F0q3Vgci0R7B8eU5QdS7XSYqe4UGSzmRN%2BSTZB6ze%2Fn9hROjAxQm16WQUcmDtYBqPUXxP6816TPtt8KM2YQNHhQy1z1c%2FWeu3JT%2F4tayDdwsi8UMuEkw15K%2F1wqe6G9KLM02FzAR1sEK%2B4ylV0DCV18LBBjqkAS5tv5plEs%2Fv6MJaH27zdammEt5fVnANDSBgSH8UF0XXT3z90nWQumFlrdZtgzCHcTo%2Fyt52CbfGQt875A0G5X5g%2FwxdtHu2diZNEhh3pMkbG%2BnclMzA02MafNHhukBercFrLpF1pW0YsuW65wwsQyJWzK%2Bl3bKZzM5IYljD0qiGGgt1Rbv9LbKh4LB8Gaun3lFax5dagDeYKm6LKraghgNhOS4H&X-Amz-Signature=4cb72b73b5a910afedf3e9d2829351a597169d280c0b5ee22f91d8ff821e036b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
