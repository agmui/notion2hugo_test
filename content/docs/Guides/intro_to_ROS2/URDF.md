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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYL4IP4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIA8PkPvT0D4dDRVXe8Pj2L%2FkQRLgc6pfQlGLQrFMIELpAiEAj8kJmaLxS%2BTUvb5nycDqSEPatsbYLyMdhIGCCGhXv7Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLFULdB0tGzDH6YCMCrcA27VDxmnYAJXKFzIQk4qnTYicfVXc7Jq6aU6g4UJ7Y7NXLjlSha%2F%2F52hnrHHB2xVtfSwOijTPCGCX%2FsuXP4UoIbjQXmm%2B6iAlof%2BAuMD42ntAs8x%2FDwfXHmtMG4j%2FeZAtlWMWxXQqY%2BcyV5uEvi6Av3pegjqUPFbBh6L5qxR8grqb0qP4OdXA1EM7zCgWRD6G0VWdCPom7vvsDlPUtdQdeGGRiWilDRDyN6bfAyFD167vJthxkDo5hlWKUJz8JVVdVgSrueAozowB2sfBldb9aDc5I92dm41rndLDYqazXUIPFSX9APR%2Bqpv1QyEoRKTXnAsWTwhG7PVmVaK4b0BKfzN0WArrHMnlGQd0EqFJFQUp36ViYXFCelG8HgdrmgFKiv76oFl4KnxOzY3eG%2FILeTg6Nflc77MUiPg52iYMtx9KYNdH6gLRygbAZQDyMcgnR6rFIMFLkU%2F7Xni0w3guyShnZehEQB60%2F8f9Z14qhL8E3x0DC1tg5ZzXh5DHqDlDHZ9LEPXvr3gbXELdcluwNZllD76YNDDbsGiRIwHVMZ2CaAB%2BW4mKAX%2F%2Bt8n9Fz1FJ30SCWpyhg0D27igXxsVuNhIlExnlpRbLUzMi%2B7VRf4Y%2BEgbyG1xrB7e4ClMOr%2BzMEGOqUBCXtQiajUX1HnuQP7BlRri2Vyq7%2BKcL0LtjvVyr5g4OT2%2B9KbOVMww3PsaVX%2BGu55VpZ7tFA2kx19RyeczaAxWWqODsbtafiX7NyZP0%2FKiauD%2BrT2B32FRb3Xqo7odhbe8mT11eLDKr3uWTR%2BIkdKk4OKuNekoonOMlVUMQqaAqmUVuVvyCcHoituxT3kltWHc%2B298BWbpYj%2BhK7ciK78mzFQ4F4r&X-Amz-Signature=dd494ce0fabc0f372240b0310b1c0c6e40466700196b681e220af22211c9e963&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYL4IP4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIA8PkPvT0D4dDRVXe8Pj2L%2FkQRLgc6pfQlGLQrFMIELpAiEAj8kJmaLxS%2BTUvb5nycDqSEPatsbYLyMdhIGCCGhXv7Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLFULdB0tGzDH6YCMCrcA27VDxmnYAJXKFzIQk4qnTYicfVXc7Jq6aU6g4UJ7Y7NXLjlSha%2F%2F52hnrHHB2xVtfSwOijTPCGCX%2FsuXP4UoIbjQXmm%2B6iAlof%2BAuMD42ntAs8x%2FDwfXHmtMG4j%2FeZAtlWMWxXQqY%2BcyV5uEvi6Av3pegjqUPFbBh6L5qxR8grqb0qP4OdXA1EM7zCgWRD6G0VWdCPom7vvsDlPUtdQdeGGRiWilDRDyN6bfAyFD167vJthxkDo5hlWKUJz8JVVdVgSrueAozowB2sfBldb9aDc5I92dm41rndLDYqazXUIPFSX9APR%2Bqpv1QyEoRKTXnAsWTwhG7PVmVaK4b0BKfzN0WArrHMnlGQd0EqFJFQUp36ViYXFCelG8HgdrmgFKiv76oFl4KnxOzY3eG%2FILeTg6Nflc77MUiPg52iYMtx9KYNdH6gLRygbAZQDyMcgnR6rFIMFLkU%2F7Xni0w3guyShnZehEQB60%2F8f9Z14qhL8E3x0DC1tg5ZzXh5DHqDlDHZ9LEPXvr3gbXELdcluwNZllD76YNDDbsGiRIwHVMZ2CaAB%2BW4mKAX%2F%2Bt8n9Fz1FJ30SCWpyhg0D27igXxsVuNhIlExnlpRbLUzMi%2B7VRf4Y%2BEgbyG1xrB7e4ClMOr%2BzMEGOqUBCXtQiajUX1HnuQP7BlRri2Vyq7%2BKcL0LtjvVyr5g4OT2%2B9KbOVMww3PsaVX%2BGu55VpZ7tFA2kx19RyeczaAxWWqODsbtafiX7NyZP0%2FKiauD%2BrT2B32FRb3Xqo7odhbe8mT11eLDKr3uWTR%2BIkdKk4OKuNekoonOMlVUMQqaAqmUVuVvyCcHoituxT3kltWHc%2B298BWbpYj%2BhK7ciK78mzFQ4F4r&X-Amz-Signature=223ffbbf62e3525f69179c2d4a6f44eeca66e53cf1cfde9681d720aad15e3665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
