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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73LIF5P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIB20evo8vmKXV9WM%2B4R%2FvtWEUmsQjpfbBLPon7PGrwl3AiAAjbYQZWksgKL6WJImwyKe%2BrL3VFR8UBki%2BgX%2FnO7dgSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMyVF8jcBMvs6cxpayKtwD16vzAxtMEH9VA%2FY%2FXSBFgdau1o1oBlQaBTLlshA90c8o2E%2BlAu9U9YmpkhXsvxmmCk3a1ujeOHQ5fCVsb8m6wUpV6wtH5qv2A6OZj2BaHgprKhMbG8GoEyWBTyd2i%2FVXUjyEqpy7m%2FLrjMD4G6wI5jyFBBFiuiGd2lMSl%2B7NOyK03zCvA1Q39qUombb%2FuIr3ysCBzOaPfz5uhA87S60OXJXrvgp%2BrgcxIsuYneBduIlRpZ3zgKjFF%2B6kY9fDfFMNtqux7cq0Em%2F7ZNZ34Fla0oiymWgwcupoPpoXGMJvSf0h9ogg6IVNMfa1xF3G3GCwm51XQeXG2UDaLQlMoSL3BZXki5n%2BMAgmHQM1Je7AmoL%2FyL6dQTC0TVxjNhV4gq3uAqubj2atKnbGhOoIevTniKpB2QrtFMiL2vXyh4dvFz55Xllpnw0iu0MTt2PiFAvP825qXZ9WNK%2B878aZhU6zJOcliAM9jRMD2SNpe%2FgMa2sEHyA1chL7PCsuXX7pImdnrjOPBF35Hc%2FP%2BlcTsXej2qE1WAS%2F6aZ1slJzXsLvGmybrKqGPJGRgIDM4cOu%2F5DXeAfgksGPFViZF9xw2r6WZqgYx9V2rFQ3umIQ5gGAsHo8vKeeQNItoue5uAow75aswwY6pgHW9SNXI83yw2mUChQT75cAYUPtuk7j7vY%2F7DWy%2Be%2F%2BueG0UhpXmi6Qft2hanP2Rp6jZz7EjJKtT6zf2J7ZF%2FChrsDItG3I3ippENid6mSJlnPJzMjFCjsbG8ljtloLwrGYNlOXvB1%2F2ZDrbVv2t%2BFxIrk1j9%2BNbc0TaCTN88HDLezrrR%2FmPebKkjjx0Q5vaN47p7vNjpZp27XTc3PhjQrr0Wz7mGqH&X-Amz-Signature=fbe6d88838d51600a5b6c6353fdfc65d832054d8aff2ee848fb7efe9b8079dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S73LIF5P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIB20evo8vmKXV9WM%2B4R%2FvtWEUmsQjpfbBLPon7PGrwl3AiAAjbYQZWksgKL6WJImwyKe%2BrL3VFR8UBki%2BgX%2FnO7dgSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMyVF8jcBMvs6cxpayKtwD16vzAxtMEH9VA%2FY%2FXSBFgdau1o1oBlQaBTLlshA90c8o2E%2BlAu9U9YmpkhXsvxmmCk3a1ujeOHQ5fCVsb8m6wUpV6wtH5qv2A6OZj2BaHgprKhMbG8GoEyWBTyd2i%2FVXUjyEqpy7m%2FLrjMD4G6wI5jyFBBFiuiGd2lMSl%2B7NOyK03zCvA1Q39qUombb%2FuIr3ysCBzOaPfz5uhA87S60OXJXrvgp%2BrgcxIsuYneBduIlRpZ3zgKjFF%2B6kY9fDfFMNtqux7cq0Em%2F7ZNZ34Fla0oiymWgwcupoPpoXGMJvSf0h9ogg6IVNMfa1xF3G3GCwm51XQeXG2UDaLQlMoSL3BZXki5n%2BMAgmHQM1Je7AmoL%2FyL6dQTC0TVxjNhV4gq3uAqubj2atKnbGhOoIevTniKpB2QrtFMiL2vXyh4dvFz55Xllpnw0iu0MTt2PiFAvP825qXZ9WNK%2B878aZhU6zJOcliAM9jRMD2SNpe%2FgMa2sEHyA1chL7PCsuXX7pImdnrjOPBF35Hc%2FP%2BlcTsXej2qE1WAS%2F6aZ1slJzXsLvGmybrKqGPJGRgIDM4cOu%2F5DXeAfgksGPFViZF9xw2r6WZqgYx9V2rFQ3umIQ5gGAsHo8vKeeQNItoue5uAow75aswwY6pgHW9SNXI83yw2mUChQT75cAYUPtuk7j7vY%2F7DWy%2Be%2F%2BueG0UhpXmi6Qft2hanP2Rp6jZz7EjJKtT6zf2J7ZF%2FChrsDItG3I3ippENid6mSJlnPJzMjFCjsbG8ljtloLwrGYNlOXvB1%2F2ZDrbVv2t%2BFxIrk1j9%2BNbc0TaCTN88HDLezrrR%2FmPebKkjjx0Q5vaN47p7vNjpZp27XTc3PhjQrr0Wz7mGqH&X-Amz-Signature=f9d8bf881436888e4f94a12cb8746e2636b303e965e55c20f1b95314e6c896d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
