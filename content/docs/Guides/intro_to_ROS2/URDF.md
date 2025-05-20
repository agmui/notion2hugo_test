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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIRJDSZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYtU82Upt47KOP4aTKjEKWcKL%2BiFOoFrLzkmp1JFxkIgIgdjrruh3ON2LUV8WdcFBreUh1RjweQKwB2%2F5%2BOjDBhUQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI8dt0%2FhnQ2%2BTx2uSrcA%2BVZ1RiL5BA2w8gQ2a81um5E48DSlfBG4Ws3euNEU0UVFMW2ux%2BOnvY650tMUxc7oSA0xYgAJ5XvvGBcXYb300P3dkzpi2cVSzAqzq1HqAg2S41m21KzJ8%2BM648VA33RUx74n1bsfkDWzSW%2BJa02azIlQBtQc5BOVHjiv6ZXnk0K%2F%2FkwGfBumzwReK1lWj8ghfu0UcJuM3EfxM44gIFlbzoJ25D3xFMKneYQsdP60l6KqX1wai4EHM1p42aBrLX68wmhYcGN%2Bf%2FtPwEPl0aTmvA1vWE6%2BwPRyaoDnPZ1C6R7PgG2D9wuBELo3SwkMZ6ep6%2F3x6FN6xvKbxIG4TOUUN%2F62IH0XOPa547ZQAe2ZU8Ya2aaokKyznu9nWcWQcqiHfgUVUmzyaCEq9z5Ai3BFhtM0WHMXxmPtUI6wJXRpz4n6lD3vwQ7ayN94KLRTOsCaSNtyGLkDtcIs8Jzcz7GXnodhRtEm893BuKGSOHQpUKmmhAuzhCM95q5GTRYc43D3EzLgMGvmHRbcGQCXxIdwUPQBlLt6CgZV5eCp8mGK5kdyySP03tUkJLjY7tbNXENPz%2BIqMJj8HxIULyCkJZHUd34dxqnvkTdGiBB%2FD40UOc4sv83ljo0po3JwqpFMPn9ssEGOqUBZetBg81vuIodoBlhRPlQIzzrNjPWmS4zTBkXmViaCSGKKemdKo5wlgxI2pMN%2FnJbUVir%2FQfiMv8fbRVxdC03HXkKByjuwHpgpzb5LBJ%2BND03PZLP5tXrybWJFewdv9jD%2BZDzj5SLRnfNT6waol0vcRqr1D5js5oFnvDwQPi2DLa9k2GZHdmu%2BchyMJY0ZOVDtVwy0lOnf9D3Cp8qWhDRS0Ad0Jdc&X-Amz-Signature=19fdb23aeee4e7e8b9a4df717ef3bd8205c4c8de3ddcef2ed3495abd582a6220&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIRJDSZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYtU82Upt47KOP4aTKjEKWcKL%2BiFOoFrLzkmp1JFxkIgIgdjrruh3ON2LUV8WdcFBreUh1RjweQKwB2%2F5%2BOjDBhUQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI8dt0%2FhnQ2%2BTx2uSrcA%2BVZ1RiL5BA2w8gQ2a81um5E48DSlfBG4Ws3euNEU0UVFMW2ux%2BOnvY650tMUxc7oSA0xYgAJ5XvvGBcXYb300P3dkzpi2cVSzAqzq1HqAg2S41m21KzJ8%2BM648VA33RUx74n1bsfkDWzSW%2BJa02azIlQBtQc5BOVHjiv6ZXnk0K%2F%2FkwGfBumzwReK1lWj8ghfu0UcJuM3EfxM44gIFlbzoJ25D3xFMKneYQsdP60l6KqX1wai4EHM1p42aBrLX68wmhYcGN%2Bf%2FtPwEPl0aTmvA1vWE6%2BwPRyaoDnPZ1C6R7PgG2D9wuBELo3SwkMZ6ep6%2F3x6FN6xvKbxIG4TOUUN%2F62IH0XOPa547ZQAe2ZU8Ya2aaokKyznu9nWcWQcqiHfgUVUmzyaCEq9z5Ai3BFhtM0WHMXxmPtUI6wJXRpz4n6lD3vwQ7ayN94KLRTOsCaSNtyGLkDtcIs8Jzcz7GXnodhRtEm893BuKGSOHQpUKmmhAuzhCM95q5GTRYc43D3EzLgMGvmHRbcGQCXxIdwUPQBlLt6CgZV5eCp8mGK5kdyySP03tUkJLjY7tbNXENPz%2BIqMJj8HxIULyCkJZHUd34dxqnvkTdGiBB%2FD40UOc4sv83ljo0po3JwqpFMPn9ssEGOqUBZetBg81vuIodoBlhRPlQIzzrNjPWmS4zTBkXmViaCSGKKemdKo5wlgxI2pMN%2FnJbUVir%2FQfiMv8fbRVxdC03HXkKByjuwHpgpzb5LBJ%2BND03PZLP5tXrybWJFewdv9jD%2BZDzj5SLRnfNT6waol0vcRqr1D5js5oFnvDwQPi2DLa9k2GZHdmu%2BchyMJY0ZOVDtVwy0lOnf9D3Cp8qWhDRS0Ad0Jdc&X-Amz-Signature=bff831e7b40d0785188e5e8d9690d1bc56b901053c7e0469d5b61a6f4bd88818&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
