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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252YT3DO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaVfbtXhw8AlnlVTqTD198QkPxXTIHdoY13hy8J7E1BAiEAq25JiPAH8bLzXphe9HUS%2BHT0QenwpW8UPC%2B7TtNPgVgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVpEvHcJYZrv6%2FJnircA3FHV8Iy7WdALFhF3vi5RNNdLIAQAttsZPtzUFmwPl%2Fp69q2xWrpR8VXx2Kq23CXCdFE5LHcJsNqGvSb%2FRZHITfWCLrZf%2FDKNFEGEhwfLN1%2Bwa6N9MTLB6aEDPcbfZZxABZOjOcn%2B2CnFCYVbK%2FgHbQKBG3tvD%2BYNcB3N1ByzgQpLMLIpVWbN2xsjIi9V35YEtEuPAL4I0%2BAIsK4UxYJt9f5i5r%2BwjO03USnjgAUYdDtnkBkuH0WjfDA1DeL0Auqob1dC2CpOYkVDydOs3yYk%2B0E2TCZXvvgwy6hE0X4QE84IJluThr3JHXJ4Aa3TWSZWtY7q8zD8ou08BtCVU2pKps0TXfNX8hpWrtE38Mgg20bJteY904be4%2FlX%2B1B1rMJP0xZVvUNPMToRV2H22%2BC0LP%2BFl%2FNKFOAWtggM2kioQJxbJlu7Rk7mK%2FN8w%2FFNFO5M0V8PsimA7bZd2KHI3VTFk32Blu9xPBUe8Ckr56a4pDKMfM%2ByMWmXspU%2Fqi9Iy0%2FRfSWsZp2uio81xUBKYcIacimz7kxY1eJ9IkZulEKjb8N2sU7Rx5s9EeocBcA7eoI%2BTE60tD7jkfYuexPDe75OKjy8WbIB9lWPctmr9Nx6SBzZcaeceKFNfsDE%2BKWMPSBvb8GOqUBW1MJmllo9uiE%2BtQ4AKyfwbl7gnIUKy4Lk%2ByVehk7Ma1Non98sNGu7j3Gw19H5tmHMpFToT8CMSt5ixTY0cjN2pVAObPGHd6TFUdZCotu5OGChEOdWFYlfXvPO9BUiftz7cD2Nc5Bn8x1ScGobpN%2BjN9P7oh3iAJ3o5tnigKP04hRfnwLoFAe5rlr4t9rDkQjoAcOU9yQs0WxqbgJ%2FOHEaSskgJZ0&X-Amz-Signature=cd4693f684c31dd7162b302c5bc227a4d003d5a18c082bbd164265253c1311ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252YT3DO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaVfbtXhw8AlnlVTqTD198QkPxXTIHdoY13hy8J7E1BAiEAq25JiPAH8bLzXphe9HUS%2BHT0QenwpW8UPC%2B7TtNPgVgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVpEvHcJYZrv6%2FJnircA3FHV8Iy7WdALFhF3vi5RNNdLIAQAttsZPtzUFmwPl%2Fp69q2xWrpR8VXx2Kq23CXCdFE5LHcJsNqGvSb%2FRZHITfWCLrZf%2FDKNFEGEhwfLN1%2Bwa6N9MTLB6aEDPcbfZZxABZOjOcn%2B2CnFCYVbK%2FgHbQKBG3tvD%2BYNcB3N1ByzgQpLMLIpVWbN2xsjIi9V35YEtEuPAL4I0%2BAIsK4UxYJt9f5i5r%2BwjO03USnjgAUYdDtnkBkuH0WjfDA1DeL0Auqob1dC2CpOYkVDydOs3yYk%2B0E2TCZXvvgwy6hE0X4QE84IJluThr3JHXJ4Aa3TWSZWtY7q8zD8ou08BtCVU2pKps0TXfNX8hpWrtE38Mgg20bJteY904be4%2FlX%2B1B1rMJP0xZVvUNPMToRV2H22%2BC0LP%2BFl%2FNKFOAWtggM2kioQJxbJlu7Rk7mK%2FN8w%2FFNFO5M0V8PsimA7bZd2KHI3VTFk32Blu9xPBUe8Ckr56a4pDKMfM%2ByMWmXspU%2Fqi9Iy0%2FRfSWsZp2uio81xUBKYcIacimz7kxY1eJ9IkZulEKjb8N2sU7Rx5s9EeocBcA7eoI%2BTE60tD7jkfYuexPDe75OKjy8WbIB9lWPctmr9Nx6SBzZcaeceKFNfsDE%2BKWMPSBvb8GOqUBW1MJmllo9uiE%2BtQ4AKyfwbl7gnIUKy4Lk%2ByVehk7Ma1Non98sNGu7j3Gw19H5tmHMpFToT8CMSt5ixTY0cjN2pVAObPGHd6TFUdZCotu5OGChEOdWFYlfXvPO9BUiftz7cD2Nc5Bn8x1ScGobpN%2BjN9P7oh3iAJ3o5tnigKP04hRfnwLoFAe5rlr4t9rDkQjoAcOU9yQs0WxqbgJ%2FOHEaSskgJZ0&X-Amz-Signature=de9549eb0365ceee11559b2aab0383ff036345300eb4649ee32205fb82835b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
