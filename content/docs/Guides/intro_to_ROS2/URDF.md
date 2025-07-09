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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFAIG4W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFepsIqfbwePX3GGWcNWW0AZmP7A%2B7im2qvflL%2Frrd1AiAaLNXGs5rK3kEjNqcJZYYxwyecDodSqs4zbl7tKl8BoCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lCJOWRtYFLwpK%2BdKtwDv2897tPCv4g5ai4m4AB6MScoOjTcwylKxd28%2FfsohGbOdNZ2fTNijk0YoJ21Mcp7M1MCHLcokD9REzPp3EFQtRu0yr3JXxMuEGOA9VPwQz8yPWNBNo20W1yD6moizl8NyeiY1wP6vLVFP0k6b9Agg6jam0LEITm7ao99ialEE20nS%2BqckfRcRAgCS2R6P4woElGU8nhxtTYvAgyExIzO6McB0R28QK4TXWoEZNuo4odm45UOCkxgr8v8TkP5A%2FUmzggnJNvEuwGk09xH%2BoTjLk4pVPx3nfqdv%2F%2FdiT7Qk8ahm5lAP1zDXlf6Y4M6hibk%2F2OMIMBT2m0UzsiG2%2FayQUCkTsUxjYRVhcqOsixv0PhNPmnGj7BBb7h6R%2FSN%2FQ3zCyMsLH6BuPI4t3aFt9SSHWTo24h225rPxMNTwl8l6gnyxBHVBVlB2nO9yaXaJEU%2BDfZ3COdwZJIV9WGu1IYLgVpv2CNo1GXsNwb4tPg%2F00cgVe9n8r3Fy8mbs0DARSgLT9IRzB%2F4Urh2CwdwzFxA0arc%2FCEUBJVKjmBwxZBuABeJyGELE9bKK%2B4Tryij24yH%2BEDqTws%2BRbM9HwQDZtdje%2BkcIxZBcuKkTlvPDHVJ%2BOPVGN2Zjwog6Xg81rAwwsW6wwY6pgH%2F5aY5%2F1NGrLmFvYuIQS2V4X0AYqPUq02IStl6V29D5tjmyLjQK%2Bq9bSPF%2BoOvKgmaRE0y5nQGT1EsJUAYWsdSg8usdq7sZYaBCUbnkC5VGxearEHKZGNXoPh%2BzPPgodA%2Few53KOwVgTix%2FZRK33QyY8WZCfP6OLJ1Xbce%2BLMRit2Octg1qTblQmeDcXlDc29PPKLphwlbiN2rzZ2FlrVXV%2FYO9CvD&X-Amz-Signature=bbadc0a259357655764ecc880300d4b2a377796f32d517d4efa2c8ac9ba759db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFAIG4W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFepsIqfbwePX3GGWcNWW0AZmP7A%2B7im2qvflL%2Frrd1AiAaLNXGs5rK3kEjNqcJZYYxwyecDodSqs4zbl7tKl8BoCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7lCJOWRtYFLwpK%2BdKtwDv2897tPCv4g5ai4m4AB6MScoOjTcwylKxd28%2FfsohGbOdNZ2fTNijk0YoJ21Mcp7M1MCHLcokD9REzPp3EFQtRu0yr3JXxMuEGOA9VPwQz8yPWNBNo20W1yD6moizl8NyeiY1wP6vLVFP0k6b9Agg6jam0LEITm7ao99ialEE20nS%2BqckfRcRAgCS2R6P4woElGU8nhxtTYvAgyExIzO6McB0R28QK4TXWoEZNuo4odm45UOCkxgr8v8TkP5A%2FUmzggnJNvEuwGk09xH%2BoTjLk4pVPx3nfqdv%2F%2FdiT7Qk8ahm5lAP1zDXlf6Y4M6hibk%2F2OMIMBT2m0UzsiG2%2FayQUCkTsUxjYRVhcqOsixv0PhNPmnGj7BBb7h6R%2FSN%2FQ3zCyMsLH6BuPI4t3aFt9SSHWTo24h225rPxMNTwl8l6gnyxBHVBVlB2nO9yaXaJEU%2BDfZ3COdwZJIV9WGu1IYLgVpv2CNo1GXsNwb4tPg%2F00cgVe9n8r3Fy8mbs0DARSgLT9IRzB%2F4Urh2CwdwzFxA0arc%2FCEUBJVKjmBwxZBuABeJyGELE9bKK%2B4Tryij24yH%2BEDqTws%2BRbM9HwQDZtdje%2BkcIxZBcuKkTlvPDHVJ%2BOPVGN2Zjwog6Xg81rAwwsW6wwY6pgH%2F5aY5%2F1NGrLmFvYuIQS2V4X0AYqPUq02IStl6V29D5tjmyLjQK%2Bq9bSPF%2BoOvKgmaRE0y5nQGT1EsJUAYWsdSg8usdq7sZYaBCUbnkC5VGxearEHKZGNXoPh%2BzPPgodA%2Few53KOwVgTix%2FZRK33QyY8WZCfP6OLJ1Xbce%2BLMRit2Octg1qTblQmeDcXlDc29PPKLphwlbiN2rzZ2FlrVXV%2FYO9CvD&X-Amz-Signature=72dad4727eb08a3fd35dae059f74a19208fff267dd2233e4fc4c9c2a4d54d366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
