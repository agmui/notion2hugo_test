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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E7A5PF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYemBoZrsp2YEfpqocJHkJNpEJbDjKHOZl6DKhOy%2F0jAIhAOm0Or5K69JoHGa77pm6gSuEijx4ZoP1QtNhMCJ3zs5WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnAtysY5%2BmylmiRtoq3AO3Zp5NOYQ28cCxNLjm7GOPza6hKTQ2khLW2DkVh8jAhzzXCFezCvjOM2rEEIv956RAihL6j6H8MfS%2BWZj8CGtmPSJ5CoCoqoNMYAMjeqQiiHos8TdZToWaY8oF2V968PB%2FR1xwrMwb%2BLtQ7tO5pf5TYoq8SeU0MhyrHEPUSw%2FbQLoGJpm3WmJvK0wcZ%2FggvawcX1xdxitN1xMbsZGT1%2BrMXLUx%2BLNJlhxvdif2wCDnlNfge8nkj93u%2BNO%2FjYcnhQJ9b1mHqJds2tK6WugWTR746mjKG%2BQkmm60MdxZ%2BhiFmy6vekVvwZs0BwkG7jU%2FwaQPTwLVRItpnTC%2BlJzqcVVmJJ%2BamZZATE8ORZ%2FSm6uHnnrdIjh7q4MYa0TgRo5H08J1QD%2FNRnRou9GZrBJPycERffw133oHPEf88Z17drhUkUdECXzbiB%2FpH9MOzhIMBCBS9qayuQRx7iT7cN8lPH%2BTfPnSI5wLDoZqB7ESJ9DvLxvL%2FYKLwbOm0P5m%2FpcPQbsvIeiKmYiPMsGB6WtMjr3Gy%2FI4dGfjowdwKIcnjs50tz5A9TOELcIoM6UY17rbfH8VII54sFXxl9GYkhiiMWinZ12b5dvb2dGbOgsyWPSnyfhAvPrdmR5tpKHwaTDupZO%2BBjqkAdr0k3HTgofSMC27DynyGtP4MmdGLTK%2BDS%2BdzYstnJ7TrWinqvp3Z4T3imuN5IEyuCK%2FoA7lEwPr%2FqUEVCRE2aOv%2FOfwF%2Fq43oh4jSvFz%2B4Z5ky2A5d48kr0CpX6fxseLzgWZjLzx6IDSZqxlHPbIQPOE9kAD7ZJ37DU0Prq5KNGlycooZaXYImNhherld22ZxEdrf5fzPhsB%2BHCeB72VIlcxIGQ&X-Amz-Signature=999379dfcd383e82d24a79199252844a7e19f8ca79d62d886b17e10c0767aaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7E7A5PF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYemBoZrsp2YEfpqocJHkJNpEJbDjKHOZl6DKhOy%2F0jAIhAOm0Or5K69JoHGa77pm6gSuEijx4ZoP1QtNhMCJ3zs5WKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnAtysY5%2BmylmiRtoq3AO3Zp5NOYQ28cCxNLjm7GOPza6hKTQ2khLW2DkVh8jAhzzXCFezCvjOM2rEEIv956RAihL6j6H8MfS%2BWZj8CGtmPSJ5CoCoqoNMYAMjeqQiiHos8TdZToWaY8oF2V968PB%2FR1xwrMwb%2BLtQ7tO5pf5TYoq8SeU0MhyrHEPUSw%2FbQLoGJpm3WmJvK0wcZ%2FggvawcX1xdxitN1xMbsZGT1%2BrMXLUx%2BLNJlhxvdif2wCDnlNfge8nkj93u%2BNO%2FjYcnhQJ9b1mHqJds2tK6WugWTR746mjKG%2BQkmm60MdxZ%2BhiFmy6vekVvwZs0BwkG7jU%2FwaQPTwLVRItpnTC%2BlJzqcVVmJJ%2BamZZATE8ORZ%2FSm6uHnnrdIjh7q4MYa0TgRo5H08J1QD%2FNRnRou9GZrBJPycERffw133oHPEf88Z17drhUkUdECXzbiB%2FpH9MOzhIMBCBS9qayuQRx7iT7cN8lPH%2BTfPnSI5wLDoZqB7ESJ9DvLxvL%2FYKLwbOm0P5m%2FpcPQbsvIeiKmYiPMsGB6WtMjr3Gy%2FI4dGfjowdwKIcnjs50tz5A9TOELcIoM6UY17rbfH8VII54sFXxl9GYkhiiMWinZ12b5dvb2dGbOgsyWPSnyfhAvPrdmR5tpKHwaTDupZO%2BBjqkAdr0k3HTgofSMC27DynyGtP4MmdGLTK%2BDS%2BdzYstnJ7TrWinqvp3Z4T3imuN5IEyuCK%2FoA7lEwPr%2FqUEVCRE2aOv%2FOfwF%2Fq43oh4jSvFz%2B4Z5ky2A5d48kr0CpX6fxseLzgWZjLzx6IDSZqxlHPbIQPOE9kAD7ZJ37DU0Prq5KNGlycooZaXYImNhherld22ZxEdrf5fzPhsB%2BHCeB72VIlcxIGQ&X-Amz-Signature=1d7d5a80462c74d4630241b930fe2f0599b7f6440c629dbe2467ca0cd8388403&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
