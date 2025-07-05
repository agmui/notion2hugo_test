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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDDXC5I%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE1efMo8aC8IcFBYHNbw8Nxe%2FmSlJA%2BM3L0NLdtdfrGuAiAt18dIGoAyhP%2F9cdov2GVco%2BJJ70X3bDj7Kk8F3buwfCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMO1gM%2BZqy9iikhQTAKtwDyFIj20XREd%2BCS7wQFAY2EoxHlLb3yYbBT448JuYQpGipMpw8n5aA8AE0bWhnSpemxhciYG8wkWQB%2BRsPuvzC4qwsyLxeMeRb%2BssDYo0KJj22galVwDsgu9TY6yxU99c5MpIRPw3aFQL8OMIuZs6p7gKBFCBn%2FMLVwUqECG%2FrYKihw6PsFz3yf%2F3IT9VUL7IYaH8XMQU3GqGwZ00PRII4vngQPze3aTDwEmLDGEsLVAshP9Xncjb%2Fi%2BDHT0I6hHZy1Tw98VYHjZH16nsTKLa2pOwPBInCV6q4xI5GjElkauBIj3gao8%2BHg8qunqDJTLEtauVxCqGQz5SLFN6CD5NZJkzioxXqRRLsgk%2FWm7BwV9yKW5Wd865gQd3jExhCrV5FYgMLHQlt3JGFfXG2GAyUGYZ73%2FUx5ZMcIWk8muR7Ws50MS2Uaa6KneUhRCPVtgknKmGOZu%2Fr9gLAGeHhunRRtnYT8oCBvnnHcqFjVNQO9qDuOY7uVoBJAuSArQBRlCXfdwnCqo05Y51Z8to%2BLs9MS4j4ET40nDwThosxBPoHuchqrTUY6dIGf%2FKJ8yn3zP8HOX8jUcefU69uk7%2Bu8pNVcnPXvllwIM83PT4PrLj41JWB5%2BQe38rcRG4OkCQwrZyjwwY6pgHbvF5kGRoastov8d7k6wEXJ717QJd6Mrnwwt7p1dbafpRt3G1Or64mu6evNohwmnWwPrdY29Sccy7%2FiPqAALmBNXSaermgJTxuefamZ%2BLVMXPET%2F78NpjqoMpbFxa2mVT5mguPsxPCOf4RIBou3CJ%2Fg2Gw6xQjst%2FD7RyATKH6BFMJiSRFX8LCFKYiQBoI%2FM639WZDcQyooNdhhoRkqT4ZfEOWHill&X-Amz-Signature=d7117c33bc42fafa671ba02093711ab5dceeed9578f3e0e577c91b31402607b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DDDXC5I%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE1efMo8aC8IcFBYHNbw8Nxe%2FmSlJA%2BM3L0NLdtdfrGuAiAt18dIGoAyhP%2F9cdov2GVco%2BJJ70X3bDj7Kk8F3buwfCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMO1gM%2BZqy9iikhQTAKtwDyFIj20XREd%2BCS7wQFAY2EoxHlLb3yYbBT448JuYQpGipMpw8n5aA8AE0bWhnSpemxhciYG8wkWQB%2BRsPuvzC4qwsyLxeMeRb%2BssDYo0KJj22galVwDsgu9TY6yxU99c5MpIRPw3aFQL8OMIuZs6p7gKBFCBn%2FMLVwUqECG%2FrYKihw6PsFz3yf%2F3IT9VUL7IYaH8XMQU3GqGwZ00PRII4vngQPze3aTDwEmLDGEsLVAshP9Xncjb%2Fi%2BDHT0I6hHZy1Tw98VYHjZH16nsTKLa2pOwPBInCV6q4xI5GjElkauBIj3gao8%2BHg8qunqDJTLEtauVxCqGQz5SLFN6CD5NZJkzioxXqRRLsgk%2FWm7BwV9yKW5Wd865gQd3jExhCrV5FYgMLHQlt3JGFfXG2GAyUGYZ73%2FUx5ZMcIWk8muR7Ws50MS2Uaa6KneUhRCPVtgknKmGOZu%2Fr9gLAGeHhunRRtnYT8oCBvnnHcqFjVNQO9qDuOY7uVoBJAuSArQBRlCXfdwnCqo05Y51Z8to%2BLs9MS4j4ET40nDwThosxBPoHuchqrTUY6dIGf%2FKJ8yn3zP8HOX8jUcefU69uk7%2Bu8pNVcnPXvllwIM83PT4PrLj41JWB5%2BQe38rcRG4OkCQwrZyjwwY6pgHbvF5kGRoastov8d7k6wEXJ717QJd6Mrnwwt7p1dbafpRt3G1Or64mu6evNohwmnWwPrdY29Sccy7%2FiPqAALmBNXSaermgJTxuefamZ%2BLVMXPET%2F78NpjqoMpbFxa2mVT5mguPsxPCOf4RIBou3CJ%2Fg2Gw6xQjst%2FD7RyATKH6BFMJiSRFX8LCFKYiQBoI%2FM639WZDcQyooNdhhoRkqT4ZfEOWHill&X-Amz-Signature=a178a2367988a4014355734fd55fd1c6649c4deea7937135a09cea0b1385baa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
