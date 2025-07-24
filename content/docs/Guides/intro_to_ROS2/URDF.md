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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUTDQLP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHD0crJRbxLb0Ti2fRhWbsPo15b3qo8E8d7g%2BABfGvp9AiEA58%2FD4Nooy4xn2rAAKykwpC1q4T26HqfYiWz0H3iCUSQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDH%2FFdbEqCQSf8bXqtSrcA3HMxh8rWLHbZnMSuFoTSe53e9sCF8eWov%2BEHlIb5rCgV6uzHPz6g31qv3yaibJHlh765qzRkLEZUwCOEBLGraTdInUKUuCPBwFYuem5ygb4oqS0euVuG4DSPHFyFRofub2R9FoZiQkr%2FZaHJm8vDmHuAyTiIRQbF3kPO6rSIsPqI6I4pAVEYNwL8Ixlbzdc3ssRgbetdNzMtm8dsMLkbcmCrlJP0WUPCV8gxv3nuOWqyUwnO5X7IzRq%2FkCTl9j5MdZV3tJzHeyJujXu%2FCskL7ys%2BcbIy1SsXYFy5YP9XMNY%2FJZNgr77vTDjzgOB6I6LLeg%2Bss%2BgPPs%2FH5DZ1pC8YOk5r6ozDunQKPBYxKyiN1s81kj09%2BWz3Jec%2BBHOGYOAhkHCJVBxYJPLnx8PtUztiEuGHjZlsktTLx1LDxaMXHso9%2FGmjYTVGOIDp6SUm6uVDQzXKssDP5IpRSYeQ8ska6RDmWNB2Qnz70uKYWj7RCnwb29nyi1NRe62ZEueKntdANmXGqgN6tZyxETu2ZxWtevRoII3ZKgvvCrIz2ZyYWXko78MMqBOl7J%2BYAIHaPYappe8p5PMuD4TLu%2B1M%2FfhBDHwfcYBke9kdvYzN%2FhTZVRPl%2BC%2F3GLWQ27skWqvMOu0isQGOqUBpTkAYZufCvvYD3nL7BeYtG5DbQmGgHc8K6itW21hhRHzJNz7PpKynWt6znLipDB9jL9nqyc84aJ5BSYcywMVcTKVo7ZI3rdVgbamlZkQyG1NOfxYszVCAnvSK9QD7BHbKRW1%2B4HTam0T8JOacDAOVnY0TEch0txrRSqYq4TB3tm%2FOFkQWtcNQCKBEUArbxbDHGtb9vNAXlyeYPuqcWoPzQQsxtMm&X-Amz-Signature=ddb63c00d78a6b917c8198135b210b17d16fade19999e157a71b51ab6ffc9bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUTDQLP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHD0crJRbxLb0Ti2fRhWbsPo15b3qo8E8d7g%2BABfGvp9AiEA58%2FD4Nooy4xn2rAAKykwpC1q4T26HqfYiWz0H3iCUSQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDH%2FFdbEqCQSf8bXqtSrcA3HMxh8rWLHbZnMSuFoTSe53e9sCF8eWov%2BEHlIb5rCgV6uzHPz6g31qv3yaibJHlh765qzRkLEZUwCOEBLGraTdInUKUuCPBwFYuem5ygb4oqS0euVuG4DSPHFyFRofub2R9FoZiQkr%2FZaHJm8vDmHuAyTiIRQbF3kPO6rSIsPqI6I4pAVEYNwL8Ixlbzdc3ssRgbetdNzMtm8dsMLkbcmCrlJP0WUPCV8gxv3nuOWqyUwnO5X7IzRq%2FkCTl9j5MdZV3tJzHeyJujXu%2FCskL7ys%2BcbIy1SsXYFy5YP9XMNY%2FJZNgr77vTDjzgOB6I6LLeg%2Bss%2BgPPs%2FH5DZ1pC8YOk5r6ozDunQKPBYxKyiN1s81kj09%2BWz3Jec%2BBHOGYOAhkHCJVBxYJPLnx8PtUztiEuGHjZlsktTLx1LDxaMXHso9%2FGmjYTVGOIDp6SUm6uVDQzXKssDP5IpRSYeQ8ska6RDmWNB2Qnz70uKYWj7RCnwb29nyi1NRe62ZEueKntdANmXGqgN6tZyxETu2ZxWtevRoII3ZKgvvCrIz2ZyYWXko78MMqBOl7J%2BYAIHaPYappe8p5PMuD4TLu%2B1M%2FfhBDHwfcYBke9kdvYzN%2FhTZVRPl%2BC%2F3GLWQ27skWqvMOu0isQGOqUBpTkAYZufCvvYD3nL7BeYtG5DbQmGgHc8K6itW21hhRHzJNz7PpKynWt6znLipDB9jL9nqyc84aJ5BSYcywMVcTKVo7ZI3rdVgbamlZkQyG1NOfxYszVCAnvSK9QD7BHbKRW1%2B4HTam0T8JOacDAOVnY0TEch0txrRSqYq4TB3tm%2FOFkQWtcNQCKBEUArbxbDHGtb9vNAXlyeYPuqcWoPzQQsxtMm&X-Amz-Signature=f3232b3d92fa42c061dd00380e510b8124118c11bf4976d1eb7cc28c4e670649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
