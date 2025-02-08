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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLVVBX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEPI8RyGRb4VZ3GgyBcWn4DiZhJxm0bZt9Gxz9vJIdHLAiAiRartOgmMEvar3mtRgOmpSGW622MeouD5o64tTyuQYiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0zm4MSP9OajRs4%2FKtwDRDCei7vSGseAw1r%2B65mB2x81hMkDz21HEyG5Wy7S4FLI9FQepAHw02Iq8bkaz0iZ9dssu3TJFdWduGA8rn54xIgTOy%2FccBqeJG157pwASMceP2zfxJi0MaX%2BKD87AYT7r05JOSx7JMMnvUtDjSbdrUiniWq1TnPbMsm0RUEalDaDC4DU2rxtiiWbVBB1cR0eoIwTregKg4YfRtmf2KdV4zPug6ZA9t78HOiucc%2FcAYi2TcyUOfBrRIEKUBBXszcs6AuOAuOLOc4G6U9TZvt17EMCnD8%2F%2FkCcnbsgl3ZnUYu899lt7xO%2FEIQq6IkUuNgF8800nIGYRDtcmD86Hj0FPBTGNBSPSR4sj73yiRSg%2BtqVlkMe9ARAK90BSd4AcFqGDndaIfTKy9WG%2BOfD9XThSk1Xqt91yZ0QpTWl%2B9mMIG%2F1uv6f3lPzhKZW62r1MwSWmzurlzAW1O26hkZwMyXVY%2BIrodFQoCIwigIq217W%2FULFP08ZuhcH50zP0QdmcH10M0L9CLRYMtRFuux%2FcyTLBu4TZ3HV8lr8%2BkD%2BYyLMmSBxmK8Sl1Vz89tJwuMRZpjipsICdh8j2g0IYDkDPL%2FlUWf%2BxaWogHU9hkAcM2TQLQULuOHxSnJqrzZ9CfowhbSbvQY6pgHfBnB5GjVl%2BARHHUt5%2FgD38pIdnVhnb2C2b%2BkAqSaVq6WWk8Qtc3rvJwPY2gqwNlOgO5UQeCXxpA0CI84rAZkolQP8rc2KxHODYoKrBTh41NuAN%2FCJDb4i1Kh%2Fbf7YLc41fy6Uk%2B%2FEyS81ycPLeTnhk%2BoIZ1nQ%2FNcowZ7BECGUJ0M27j5PkJfoPLlBomNVMjPX%2BZxb6crNRLTV5cvRg6cl4z53EFp5&X-Amz-Signature=82a742829edba241a294d84e3212995a7801a43273f3f86197b2d0efdd239ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLVVBX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEPI8RyGRb4VZ3GgyBcWn4DiZhJxm0bZt9Gxz9vJIdHLAiAiRartOgmMEvar3mtRgOmpSGW622MeouD5o64tTyuQYiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0zm4MSP9OajRs4%2FKtwDRDCei7vSGseAw1r%2B65mB2x81hMkDz21HEyG5Wy7S4FLI9FQepAHw02Iq8bkaz0iZ9dssu3TJFdWduGA8rn54xIgTOy%2FccBqeJG157pwASMceP2zfxJi0MaX%2BKD87AYT7r05JOSx7JMMnvUtDjSbdrUiniWq1TnPbMsm0RUEalDaDC4DU2rxtiiWbVBB1cR0eoIwTregKg4YfRtmf2KdV4zPug6ZA9t78HOiucc%2FcAYi2TcyUOfBrRIEKUBBXszcs6AuOAuOLOc4G6U9TZvt17EMCnD8%2F%2FkCcnbsgl3ZnUYu899lt7xO%2FEIQq6IkUuNgF8800nIGYRDtcmD86Hj0FPBTGNBSPSR4sj73yiRSg%2BtqVlkMe9ARAK90BSd4AcFqGDndaIfTKy9WG%2BOfD9XThSk1Xqt91yZ0QpTWl%2B9mMIG%2F1uv6f3lPzhKZW62r1MwSWmzurlzAW1O26hkZwMyXVY%2BIrodFQoCIwigIq217W%2FULFP08ZuhcH50zP0QdmcH10M0L9CLRYMtRFuux%2FcyTLBu4TZ3HV8lr8%2BkD%2BYyLMmSBxmK8Sl1Vz89tJwuMRZpjipsICdh8j2g0IYDkDPL%2FlUWf%2BxaWogHU9hkAcM2TQLQULuOHxSnJqrzZ9CfowhbSbvQY6pgHfBnB5GjVl%2BARHHUt5%2FgD38pIdnVhnb2C2b%2BkAqSaVq6WWk8Qtc3rvJwPY2gqwNlOgO5UQeCXxpA0CI84rAZkolQP8rc2KxHODYoKrBTh41NuAN%2FCJDb4i1Kh%2Fbf7YLc41fy6Uk%2B%2FEyS81ycPLeTnhk%2BoIZ1nQ%2FNcowZ7BECGUJ0M27j5PkJfoPLlBomNVMjPX%2BZxb6crNRLTV5cvRg6cl4z53EFp5&X-Amz-Signature=0015c44f16c5d242497e8adfd6134b5bc4180999846d486f126ddd8b8cc93e73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
