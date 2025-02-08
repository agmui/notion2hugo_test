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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR27S3Z5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB3rRPLj%2BL7SopojM7GEfx%2BDUJiPqu1jP9gaxx1BL%2BNMAiEAuFkNrdkYQMQmSvD41BEqm2EoX2B2X%2FHl9hrOum7i4uQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfe0uMn7ej91jg8DCrcA%2FFQLgInxfTzqMQqmwDnJX%2FvIRW%2FOHNyznv2TN2vgNXTLL4hKe4OcWUbmDiQUVmg5NRiyIeAHB6DPVXRaDgFr0n3mMcQJBVRWk3U9616BVh3QRy84axDCuThbOMxfs%2BlxxO8OS%2B2ZIkffHM8a5QTRTNIQ%2BvCaKv62RZt03UA%2BW8IDJKwUTHlKSblAVBqxQNnuxl0TbNAwCObRvNbwNvXCmRaMPxPBYk1sKfhHMXcOXQTHywXlIGfbqapeVyRtZtcqZB0QMpHir6K%2FHkqLgPKCxbiULVt5tm%2FRsQuwJn4GblRnZE7wIm%2FA%2FHIOLp4B5h5I8zNyzURodm5WU8Kk7M4Yk1F1Uk9eZvP3JYu%2BpnoteSLT%2FSdBaR%2FFWbDKBHqGrk1wLCxT0zrkRlkXT75Ja8%2FW7ZqWY7Qayms9ramCGgRyzOkfqDeGV1ve52FGW5LtyaYon6SlKsB1%2FMS8%2BXjmzNr6M7ZaFN4Q9jJ7JAjvDsHRogOcHa6dKcWCA8lneL9XF4EZ8siDHNfv8jsz9kJQBctfd%2BvrPtFbUsz%2BSSLqVR1g1uRZW1ZLa1FmuY6dgu4I8hwf4tsWRWH8USDO4d%2BOSuhc9Jq4%2BdAjuOTSYDTgiPrGdHLCV0%2B3wOElsXnBTcMML6QnL0GOqUBdj%2FNVP82dt5mUcXveuMvW5Si9pv3oDMhDeCRuuee1HsTGTROFoosI3dxeQC0HrsUkKdyTkfUIZNa1lfI%2FEc1TcRxdFDmdBP%2FuppWE%2Fw9T3VRiUA%2BnLwAyEqYYBuiH1VBdCdrgetD0OgSTjiAqGOh3LbDYOdJio1n6qVttF4cQkiG%2Bmtqtb6XndSKV%2B0YMEe58S7wKz4VwSlK81MMK1%2BH0MmhFJt%2F&X-Amz-Signature=5623838f4092878260d7089e4236f663ea383eb64de77e5ee517736401b5da95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR27S3Z5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB3rRPLj%2BL7SopojM7GEfx%2BDUJiPqu1jP9gaxx1BL%2BNMAiEAuFkNrdkYQMQmSvD41BEqm2EoX2B2X%2FHl9hrOum7i4uQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfe0uMn7ej91jg8DCrcA%2FFQLgInxfTzqMQqmwDnJX%2FvIRW%2FOHNyznv2TN2vgNXTLL4hKe4OcWUbmDiQUVmg5NRiyIeAHB6DPVXRaDgFr0n3mMcQJBVRWk3U9616BVh3QRy84axDCuThbOMxfs%2BlxxO8OS%2B2ZIkffHM8a5QTRTNIQ%2BvCaKv62RZt03UA%2BW8IDJKwUTHlKSblAVBqxQNnuxl0TbNAwCObRvNbwNvXCmRaMPxPBYk1sKfhHMXcOXQTHywXlIGfbqapeVyRtZtcqZB0QMpHir6K%2FHkqLgPKCxbiULVt5tm%2FRsQuwJn4GblRnZE7wIm%2FA%2FHIOLp4B5h5I8zNyzURodm5WU8Kk7M4Yk1F1Uk9eZvP3JYu%2BpnoteSLT%2FSdBaR%2FFWbDKBHqGrk1wLCxT0zrkRlkXT75Ja8%2FW7ZqWY7Qayms9ramCGgRyzOkfqDeGV1ve52FGW5LtyaYon6SlKsB1%2FMS8%2BXjmzNr6M7ZaFN4Q9jJ7JAjvDsHRogOcHa6dKcWCA8lneL9XF4EZ8siDHNfv8jsz9kJQBctfd%2BvrPtFbUsz%2BSSLqVR1g1uRZW1ZLa1FmuY6dgu4I8hwf4tsWRWH8USDO4d%2BOSuhc9Jq4%2BdAjuOTSYDTgiPrGdHLCV0%2B3wOElsXnBTcMML6QnL0GOqUBdj%2FNVP82dt5mUcXveuMvW5Si9pv3oDMhDeCRuuee1HsTGTROFoosI3dxeQC0HrsUkKdyTkfUIZNa1lfI%2FEc1TcRxdFDmdBP%2FuppWE%2Fw9T3VRiUA%2BnLwAyEqYYBuiH1VBdCdrgetD0OgSTjiAqGOh3LbDYOdJio1n6qVttF4cQkiG%2Bmtqtb6XndSKV%2B0YMEe58S7wKz4VwSlK81MMK1%2BH0MmhFJt%2F&X-Amz-Signature=7c595e6644f0ac4915d1ed08ea6de7c2c2dca386243f4b10e5b3fec50468060f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
