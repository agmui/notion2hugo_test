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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYJPXMX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZVskLF77cNUVn9vW87i63hn7%2Fy9yoCLpAjyixvBb8uAiBt59rLDVmdCUMQAzON%2BkP3e%2BYMIu85jVcJqV4Xu5DijSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM42eoBKTHLAObzxchKtwDHIMD%2Fsh7dsRUyDtkIWnaQV0Oqo7MCG%2FLHPnBOPD1HRFBQaX0tkWDLWkoEDDhWjCthkw1AlSfFAJ7Mxtt6xuznW10lW3xsmFr4ZsLfUBX5CdF%2BFo7ple91x7TyQDLJ6Mf1P%2F9U2Nh0xK%2FcGiNrreZbgL%2B14O6xqOBM5DE%2FCNyN08FLpim1PPnOGMLYZ144u8g5DTVejfBZ4HaRT9U40wkoi34eNihZM11puKxUPUEGjOFznyS3Jcow3avzAg3buepVJJEIxCbC3mXy3fHFnLSbV99FKs3LHx%2BQbXiJG%2FdSwoZAZhGeLO7%2FpQ%2BCId8bQJj3C97GFHf7x9ATFOm3AK3QUh9dNr1JBddRBRUL3vqmcQJKn4lbYwBotqfJH3EeCQa3ppETTKKzBSHaa8WB7Ve1IvwPK0pNt26PIHSmwuEh9u5DmN4gAROrhmbMExeKmtjwiL2FJwF233AlSUSCialq4lX8rpLBc8PlqV4dbAa2yUGz%2BeLN2DYvGBDaddFAExR3xBU6YhgG2T6oFWTi2i6rx9PtdmKoE%2F8VnhvMyiDbp2pdEDFAebJBZytE6i%2FCc5GLwCKMwZM6sGmuL7jSQpbVmyBzB0xXJEbVdLZCEdEjwJvbOQWzyK%2FLtIoiK0w7MOJwAY6pgEhiRBSV3BMKEG2pUyao7gvyp6jctIO9MM%2ByE5WslWLGXuw%2FKDaKG4UKEPyPTXM5ZBoQBLd7DvoErddEQmIOSn8UVnLptzk7CJQTi0Em6Ev1D4%2FzAAbUZVv2GThHIUn04xnipugYlIviU%2FT3FsD2YH2ALifEKyJ2a2DTLLTH5D3XmMao2kfGDLzz466RjOKvq8UpNzjK9vpjUSqKBqSMCcyUFOBGQZR&X-Amz-Signature=d510307d432dbfcbe2f72ad0dc106624bb73d8de7342d09fe0ac3f0611deab10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYJPXMX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZVskLF77cNUVn9vW87i63hn7%2Fy9yoCLpAjyixvBb8uAiBt59rLDVmdCUMQAzON%2BkP3e%2BYMIu85jVcJqV4Xu5DijSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM42eoBKTHLAObzxchKtwDHIMD%2Fsh7dsRUyDtkIWnaQV0Oqo7MCG%2FLHPnBOPD1HRFBQaX0tkWDLWkoEDDhWjCthkw1AlSfFAJ7Mxtt6xuznW10lW3xsmFr4ZsLfUBX5CdF%2BFo7ple91x7TyQDLJ6Mf1P%2F9U2Nh0xK%2FcGiNrreZbgL%2B14O6xqOBM5DE%2FCNyN08FLpim1PPnOGMLYZ144u8g5DTVejfBZ4HaRT9U40wkoi34eNihZM11puKxUPUEGjOFznyS3Jcow3avzAg3buepVJJEIxCbC3mXy3fHFnLSbV99FKs3LHx%2BQbXiJG%2FdSwoZAZhGeLO7%2FpQ%2BCId8bQJj3C97GFHf7x9ATFOm3AK3QUh9dNr1JBddRBRUL3vqmcQJKn4lbYwBotqfJH3EeCQa3ppETTKKzBSHaa8WB7Ve1IvwPK0pNt26PIHSmwuEh9u5DmN4gAROrhmbMExeKmtjwiL2FJwF233AlSUSCialq4lX8rpLBc8PlqV4dbAa2yUGz%2BeLN2DYvGBDaddFAExR3xBU6YhgG2T6oFWTi2i6rx9PtdmKoE%2F8VnhvMyiDbp2pdEDFAebJBZytE6i%2FCc5GLwCKMwZM6sGmuL7jSQpbVmyBzB0xXJEbVdLZCEdEjwJvbOQWzyK%2FLtIoiK0w7MOJwAY6pgEhiRBSV3BMKEG2pUyao7gvyp6jctIO9MM%2ByE5WslWLGXuw%2FKDaKG4UKEPyPTXM5ZBoQBLd7DvoErddEQmIOSn8UVnLptzk7CJQTi0Em6Ev1D4%2FzAAbUZVv2GThHIUn04xnipugYlIviU%2FT3FsD2YH2ALifEKyJ2a2DTLLTH5D3XmMao2kfGDLzz466RjOKvq8UpNzjK9vpjUSqKBqSMCcyUFOBGQZR&X-Amz-Signature=746b6d5e4b36f2cacbc567befb75a7803db912a2869bcce794caaa4ee14a7688&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
