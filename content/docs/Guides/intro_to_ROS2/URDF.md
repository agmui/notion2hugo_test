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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAR7OHD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQClUyA%2FWqiiph%2BynxorCA54gzlQf0fU2aOvYCeDj5UzywIgFUjs%2FNxSr%2Bn9TYVnBMyQxjRweyiscwPyXRAtaOv%2FT3IqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmKl2pdJeLk3fAIBCrcA%2BuIB5C9fs1iFNRWRVWzKFNBTSOAh8KUVTxtpL1inFZEfuBIY0br42IAXgfl1pBV7lEwfmU3uFM9tL8sp6CIcgsP1czYjSO8lmdN898rx1BHY0tawGdpmDymTejp1gOLh5Zs%2FzfaEJcwbp6vXsfJFM0BrmbMpgZGiLEg0opa69HUf3TzKpon5Fm6TWUXVpqPW6ZbDEHkMvoACiHispS6q0j3asSgyN8%2BAywUHNZSIfW%2BOLMIiKV8r3Q6kqyEL4CfHcsZOhtcXaR5u5FLmf8eMCwWQR4rHZelsGdpHXb%2F3U1g2vYlFhp1n9ab5wqpNITYJQNp2WKc%2FKYEH2s5eRRxpbgetrykkbwiucHhDkadZWeOfErHuJUx%2FMB9sWvEztmzOBSGSFnJ1%2FtjWhHWiZV8FWRfMCSx%2BYehJt4C5A9CeItI87SOmdAsk64mWXN6PeGXEpsj3gLzInlsyuF11%2FFi8munnzXWR7HYlPpOlmDcoUlTFe%2FWQZrFWRiWWVfkFtY8LHOfC4o99KqDDrQz5N%2FVfATtZTJxMWt3wDZgix7u4qPs006Vt7lWBeSx%2FqAoLBiBO3RQe5AgxWi4zCiO4N7oVHQDPhGTduRH4sFDq%2FO0RyzFWq83NvQ4c3t7vRtIMLvx2sAGOqUB08SwpeHxViaTNyCtmcHmIN7PMEUZAq5uTRGm7hC9ek%2B19LcnCnCjlUOXbeHnZU2dCq5%2Bm0SSt42yUFbmSUhcZ1mXLthplb%2B8AivjEHqgHRSBsiMQwEaPlujNEUPcs2qVettQ8g%2F7ZCzPy2w2rO76sq59AwfW4mFELeC10p0jBOIucKwJ%2BCJPSGQGuGQ1%2FbXWzBqzoaLc%2BO33YCD0Y2T%2Bmpz3ptIX&X-Amz-Signature=82489d7df313d2f97477d9a39845e7112f307d6aaeaf982c55c537d7eb67cfcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAR7OHD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQClUyA%2FWqiiph%2BynxorCA54gzlQf0fU2aOvYCeDj5UzywIgFUjs%2FNxSr%2Bn9TYVnBMyQxjRweyiscwPyXRAtaOv%2FT3IqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmKl2pdJeLk3fAIBCrcA%2BuIB5C9fs1iFNRWRVWzKFNBTSOAh8KUVTxtpL1inFZEfuBIY0br42IAXgfl1pBV7lEwfmU3uFM9tL8sp6CIcgsP1czYjSO8lmdN898rx1BHY0tawGdpmDymTejp1gOLh5Zs%2FzfaEJcwbp6vXsfJFM0BrmbMpgZGiLEg0opa69HUf3TzKpon5Fm6TWUXVpqPW6ZbDEHkMvoACiHispS6q0j3asSgyN8%2BAywUHNZSIfW%2BOLMIiKV8r3Q6kqyEL4CfHcsZOhtcXaR5u5FLmf8eMCwWQR4rHZelsGdpHXb%2F3U1g2vYlFhp1n9ab5wqpNITYJQNp2WKc%2FKYEH2s5eRRxpbgetrykkbwiucHhDkadZWeOfErHuJUx%2FMB9sWvEztmzOBSGSFnJ1%2FtjWhHWiZV8FWRfMCSx%2BYehJt4C5A9CeItI87SOmdAsk64mWXN6PeGXEpsj3gLzInlsyuF11%2FFi8munnzXWR7HYlPpOlmDcoUlTFe%2FWQZrFWRiWWVfkFtY8LHOfC4o99KqDDrQz5N%2FVfATtZTJxMWt3wDZgix7u4qPs006Vt7lWBeSx%2FqAoLBiBO3RQe5AgxWi4zCiO4N7oVHQDPhGTduRH4sFDq%2FO0RyzFWq83NvQ4c3t7vRtIMLvx2sAGOqUB08SwpeHxViaTNyCtmcHmIN7PMEUZAq5uTRGm7hC9ek%2B19LcnCnCjlUOXbeHnZU2dCq5%2Bm0SSt42yUFbmSUhcZ1mXLthplb%2B8AivjEHqgHRSBsiMQwEaPlujNEUPcs2qVettQ8g%2F7ZCzPy2w2rO76sq59AwfW4mFELeC10p0jBOIucKwJ%2BCJPSGQGuGQ1%2FbXWzBqzoaLc%2BO33YCD0Y2T%2Bmpz3ptIX&X-Amz-Signature=d310b46cfd0b4d8184c594fcbaf096aa7cf71a09f6f1f152f5a950fcc5d06cac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
