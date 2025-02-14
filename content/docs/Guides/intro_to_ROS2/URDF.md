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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCKAECE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4T9%2FMb6v%2F3E%2BFmVu%2Fcawyy%2Bf1Pol%2B1d6xTIjGlDgwnQIhAJojaySEeVwjVsW1Si4mnQ6niw5%2FL2%2FTazMNMBsUaJMcKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7Ii3uWEaUEa8h0oq3AO8vZn8%2FrCsuBLZTEmlajH%2BTIdBl%2Fj2sqL86SlpfTBiprGRpLva1J4ChhDLtHLXROh8K3KLBaRYZKdQu4A2tMEgKqzUVxuxpEXp0F9%2FLkyH1tSAdJpgvNhoa9b5XIzRhBuMhH0Jnn5alXMUy9WTCWn6vyEuwQboFH1wwOfssxNRyLXtz%2Bcc%2BoK7ybCKBbu8EgU3ferppbqc2ZP4Y4HWrdICGggdIVgfT1%2BuiWE9MNcE0osdAJSmK6oqVasLCTPHGLZTORIXbo5Y2mnhjgZ8mLzxVNvDtd4z2s17xp222o38FPYNjj4XO0so%2FrDLVBHbS5XEh6CqaNmcmVW49SgaWen2A1Vc2GTTnZVco9D%2F%2BWFN%2BI7NjM1qOd%2Fb6crnPMG9s%2BokKGj5jfh8I%2FNvWJFz3PjBR3zF0A7ldeYEpG%2BlctJnfLFwyMWpnoRjRqm64liBzvMePXmrqe2YQm%2FV2QMq7fA8FLGAbX3H09wOIpCet7SAO6qVAj7jy5DfqSMAlqdBrdtx%2B6PGAyRfj1%2BYvc2EBBRMa3STDNnZYpUl4XjudAdWTpz%2BTpEci3sV3oRxh8Ln2GANzsoQl4JVUiLXM0RacoeXc5CTMpinnyUhA7DV58ipNvhRHD%2BPIuMjZ7SSfzDA67q9BjqkAUyN16Vhj2jgN3xsQ4d91OCNUrWFUk0%2Blj9GKsAEg7%2FlnIS0tj5QMJL%2FsRXMmPjakUWtWxhXInYN5UcuDS4DXDXKG7vy1oT8cmL2RLRAFhrjgntDx1%2Fuhw%2FWkFoHq8O0DahU3AGCVGrlFNOdgxNQ5MLfEKTmb%2BUydEpazmouMWhBH3DcxpvnoTSSJwjEtNK%2BlTLVpATTjCKUSBx94Ggju2fK%2FFBn&X-Amz-Signature=82422a71a1b26d5c971f96c19f1a326e85c128d81e9ff6ae6d25d2ec43089473&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCKAECE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4T9%2FMb6v%2F3E%2BFmVu%2Fcawyy%2Bf1Pol%2B1d6xTIjGlDgwnQIhAJojaySEeVwjVsW1Si4mnQ6niw5%2FL2%2FTazMNMBsUaJMcKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7Ii3uWEaUEa8h0oq3AO8vZn8%2FrCsuBLZTEmlajH%2BTIdBl%2Fj2sqL86SlpfTBiprGRpLva1J4ChhDLtHLXROh8K3KLBaRYZKdQu4A2tMEgKqzUVxuxpEXp0F9%2FLkyH1tSAdJpgvNhoa9b5XIzRhBuMhH0Jnn5alXMUy9WTCWn6vyEuwQboFH1wwOfssxNRyLXtz%2Bcc%2BoK7ybCKBbu8EgU3ferppbqc2ZP4Y4HWrdICGggdIVgfT1%2BuiWE9MNcE0osdAJSmK6oqVasLCTPHGLZTORIXbo5Y2mnhjgZ8mLzxVNvDtd4z2s17xp222o38FPYNjj4XO0so%2FrDLVBHbS5XEh6CqaNmcmVW49SgaWen2A1Vc2GTTnZVco9D%2F%2BWFN%2BI7NjM1qOd%2Fb6crnPMG9s%2BokKGj5jfh8I%2FNvWJFz3PjBR3zF0A7ldeYEpG%2BlctJnfLFwyMWpnoRjRqm64liBzvMePXmrqe2YQm%2FV2QMq7fA8FLGAbX3H09wOIpCet7SAO6qVAj7jy5DfqSMAlqdBrdtx%2B6PGAyRfj1%2BYvc2EBBRMa3STDNnZYpUl4XjudAdWTpz%2BTpEci3sV3oRxh8Ln2GANzsoQl4JVUiLXM0RacoeXc5CTMpinnyUhA7DV58ipNvhRHD%2BPIuMjZ7SSfzDA67q9BjqkAUyN16Vhj2jgN3xsQ4d91OCNUrWFUk0%2Blj9GKsAEg7%2FlnIS0tj5QMJL%2FsRXMmPjakUWtWxhXInYN5UcuDS4DXDXKG7vy1oT8cmL2RLRAFhrjgntDx1%2Fuhw%2FWkFoHq8O0DahU3AGCVGrlFNOdgxNQ5MLfEKTmb%2BUydEpazmouMWhBH3DcxpvnoTSSJwjEtNK%2BlTLVpATTjCKUSBx94Ggju2fK%2FFBn&X-Amz-Signature=c2d4ad310de49337800bc6fa3382d26591904b9d51e513998979465acccd9988&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
