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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNDN5ZT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaRl2g2kL7M8qAgvf%2FgMhH7VxesXaFx%2BTv2ZdIbISM7gIhAN2v9l1Qpv3j7xlmfl3un2abkS1tU8w3B28ublfaDStJKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYtihS51BmIM2XnhYq3AOZiKcMVc66TY3lHiIrhHAJP9MSFAdP2dz8HbOhWBiR8ebREQPkYSpZGiNPaHPTTHqJDmJbV6BkVSQWZbeB%2B8Vjx%2FJORNdZV3ObShpG16Zbg7Rp%2FY65FgFQU%2FLcMqzn1dE6cTOhdtPwui0LzvPhsGyqhaeybgbXNcYpuD4S20juMWNPNmzR5kxg99Qod2KAxckrU941FgMxrZv0Z0n5E1UmxEEiKhOIySC%2BPdQAKLajMfrlAMSM8%2FsTCfE579dX1Cd5upTv2ghfyS3s0%2Br3a9y2C8ood%2F%2FTluq6sTvKMg9ofvYs4choRyT3WznGKhnwCLxEWywIEK81R94EnGJBL1ctinr9%2BpLx9dfeSrVEMB2RxvniCWRrNPMpLpkXEE2RcgZtSfvEQodKgujEpRK8%2Fh8cNyD4kJ7f7HwZ3ICra8qFgsG3MsIRY%2BXtMUTy2h6ikyxD5%2Ft%2BD4kSjuwqfkqp6x656f7aGS5BF%2BxRj4jG7lg2XFatJcK34jgxH%2Fd31SFKqYKEGE4eF545g3fQDCqXSnPCl3BNjIOIJV37nfAZTJPfDTwtSFVT7OjjaNx%2FvnK5zjAs1O1TdeXSg57kfYMp7Ou%2Fr9pr3uoqRBpr7JJrlfB5KDv9sU0aE52DnZ%2FLXzCXu4TDBjqkAe%2Bjrf5PDtfXfm3ggInRtuld7KcEsxxV4dZm0TR%2BZ1cH5%2Bjwya8FVZKWJQObYb53FbWn01QYaQpNpefVCDceNbs0c6ZaBkudpSY3k2CY%2F29ZB9e8s8wNDq6iwZ0JoNky3TecgDipwyRO%2FPzolXkAbpZlu7NpYkAa3h8cklnYRIjj4Oi76ovyDrybiVIJecYeJRReVnZ3dQDUTZTlz%2F3fxr%2FOXp89&X-Amz-Signature=5d1d2e5c40ac8fc4059a7f7daf3352d584005fe69665de91227d078b17eb6f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNDN5ZT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaRl2g2kL7M8qAgvf%2FgMhH7VxesXaFx%2BTv2ZdIbISM7gIhAN2v9l1Qpv3j7xlmfl3un2abkS1tU8w3B28ublfaDStJKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYtihS51BmIM2XnhYq3AOZiKcMVc66TY3lHiIrhHAJP9MSFAdP2dz8HbOhWBiR8ebREQPkYSpZGiNPaHPTTHqJDmJbV6BkVSQWZbeB%2B8Vjx%2FJORNdZV3ObShpG16Zbg7Rp%2FY65FgFQU%2FLcMqzn1dE6cTOhdtPwui0LzvPhsGyqhaeybgbXNcYpuD4S20juMWNPNmzR5kxg99Qod2KAxckrU941FgMxrZv0Z0n5E1UmxEEiKhOIySC%2BPdQAKLajMfrlAMSM8%2FsTCfE579dX1Cd5upTv2ghfyS3s0%2Br3a9y2C8ood%2F%2FTluq6sTvKMg9ofvYs4choRyT3WznGKhnwCLxEWywIEK81R94EnGJBL1ctinr9%2BpLx9dfeSrVEMB2RxvniCWRrNPMpLpkXEE2RcgZtSfvEQodKgujEpRK8%2Fh8cNyD4kJ7f7HwZ3ICra8qFgsG3MsIRY%2BXtMUTy2h6ikyxD5%2Ft%2BD4kSjuwqfkqp6x656f7aGS5BF%2BxRj4jG7lg2XFatJcK34jgxH%2Fd31SFKqYKEGE4eF545g3fQDCqXSnPCl3BNjIOIJV37nfAZTJPfDTwtSFVT7OjjaNx%2FvnK5zjAs1O1TdeXSg57kfYMp7Ou%2Fr9pr3uoqRBpr7JJrlfB5KDv9sU0aE52DnZ%2FLXzCXu4TDBjqkAe%2Bjrf5PDtfXfm3ggInRtuld7KcEsxxV4dZm0TR%2BZ1cH5%2Bjwya8FVZKWJQObYb53FbWn01QYaQpNpefVCDceNbs0c6ZaBkudpSY3k2CY%2F29ZB9e8s8wNDq6iwZ0JoNky3TecgDipwyRO%2FPzolXkAbpZlu7NpYkAa3h8cklnYRIjj4Oi76ovyDrybiVIJecYeJRReVnZ3dQDUTZTlz%2F3fxr%2FOXp89&X-Amz-Signature=056c00c2c8a9b35882f7b89e484220040a7bcc2845b77feeff78bd289e7241d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
