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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FISVJO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGHzQH67S%2FlUInu5W0jNIS2b%2FdxJ1jQd%2BkoTpzwBqeU%2FAiARsWSmK6UZoFSdSwpHnYqDdEZ2ycqSd0LqNT9%2FBHz9pSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMok5Ye7y506hcAsdqKtwDOG%2FLgVzsyGKtrg8uE2nCkND1N35s1gnn8W0LqO5rI1Il9NMjtgQ2TD2nUr6WUWKqRaFKJpgUL6eDBskb7nTGnUEkLHfd5Tfnsu6sPKgiGcq3ZkmV23MVO2du9qUKvBko4YhtgOVdZzja%2FD4Gq3ePCck64e%2BI1616lnKhzgM022r1cc29lpoKJ8EKNfV2eT8oQ1JFbuUPO8tOHXElVutnCbveIC1LIgyfkfG7klfpb0as4y5dmgeoxN7zOAimmCT1soyh0wW00DVTPhXlRf3vfcBhem4fnWjHm2q9bPgNVUBoKZ%2F8vhqMVwpbAASP%2F49OnsffQSg1B0SgCa0LR7dSzNKX3PYbb6hvQTb5p7jnlNxk%2BssSWJzsqVPWMIW707k6qmWb8Vjs0dW0HWb%2F0Uxou%2FpluEqwOfewwdxp3mhZ%2B%2BMZnSoBgjjPRxQbCnziEy5veWjDu0JzT3x3ADJpTdQSbD5BR4Cud16CmRQ6Dbkdir7pSQ%2FBpv8WMCPa949rw5cE7BphBi%2BHyI2cIjxxQHZBCU77M1BwvewNV31ng8vDmPKVy1B%2BdXCZktHlF2mjIzSMumU2%2B8kbuqE%2BWB7bwmG3rUDphhr1krwkjypAh%2FOiw251lfNZ07SZuTwWSXQwxsjQwwY6pgHjHI%2BFxfx6beHyLBbOKU7lBBV%2FaCqwAeG1g%2FiMUthi08DrI2YqGcZDP5YOkbXDCe5g8vBU5LgtAwyuz0ng0S4m7FFT8rplperSDup9OwS6u2VvyNP2FgbU6YxhG2tfLaQs%2BvhWoKbAVVgXc%2BxuIgJVRLNhLLmj2qjp0qcLc5Eh2z%2BweYVWAsWCg%2BaVRp35xpsJhrLdZVUCmdBj4UFpt0UC0zKCxqvL&X-Amz-Signature=bddb0bfbf964d18256e6a9a5f2fdbd8b5fbf4fb6ce99c616d45318403567e054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FISVJO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGHzQH67S%2FlUInu5W0jNIS2b%2FdxJ1jQd%2BkoTpzwBqeU%2FAiARsWSmK6UZoFSdSwpHnYqDdEZ2ycqSd0LqNT9%2FBHz9pSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMok5Ye7y506hcAsdqKtwDOG%2FLgVzsyGKtrg8uE2nCkND1N35s1gnn8W0LqO5rI1Il9NMjtgQ2TD2nUr6WUWKqRaFKJpgUL6eDBskb7nTGnUEkLHfd5Tfnsu6sPKgiGcq3ZkmV23MVO2du9qUKvBko4YhtgOVdZzja%2FD4Gq3ePCck64e%2BI1616lnKhzgM022r1cc29lpoKJ8EKNfV2eT8oQ1JFbuUPO8tOHXElVutnCbveIC1LIgyfkfG7klfpb0as4y5dmgeoxN7zOAimmCT1soyh0wW00DVTPhXlRf3vfcBhem4fnWjHm2q9bPgNVUBoKZ%2F8vhqMVwpbAASP%2F49OnsffQSg1B0SgCa0LR7dSzNKX3PYbb6hvQTb5p7jnlNxk%2BssSWJzsqVPWMIW707k6qmWb8Vjs0dW0HWb%2F0Uxou%2FpluEqwOfewwdxp3mhZ%2B%2BMZnSoBgjjPRxQbCnziEy5veWjDu0JzT3x3ADJpTdQSbD5BR4Cud16CmRQ6Dbkdir7pSQ%2FBpv8WMCPa949rw5cE7BphBi%2BHyI2cIjxxQHZBCU77M1BwvewNV31ng8vDmPKVy1B%2BdXCZktHlF2mjIzSMumU2%2B8kbuqE%2BWB7bwmG3rUDphhr1krwkjypAh%2FOiw251lfNZ07SZuTwWSXQwxsjQwwY6pgHjHI%2BFxfx6beHyLBbOKU7lBBV%2FaCqwAeG1g%2FiMUthi08DrI2YqGcZDP5YOkbXDCe5g8vBU5LgtAwyuz0ng0S4m7FFT8rplperSDup9OwS6u2VvyNP2FgbU6YxhG2tfLaQs%2BvhWoKbAVVgXc%2BxuIgJVRLNhLLmj2qjp0qcLc5Eh2z%2BweYVWAsWCg%2BaVRp35xpsJhrLdZVUCmdBj4UFpt0UC0zKCxqvL&X-Amz-Signature=84002c6e69445f9eaa0295c7aa7d0db1c31508ed169f05d3fc8e4d8f1fae1154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
