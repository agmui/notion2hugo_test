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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MAAHRB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayL21s7GPRl2WEsUffZ%2FOgthIdX6%2F8xENqVFEin90ogIhAI%2ByjF0ddT3w1dfmJKpYwulwefC3kVv5tS%2BBQPE6R0jXKv8DCDcQABoMNjM3NDIzMTgzODA1IgzTz%2BlnE1gBguQlPZAq3AO1GBC%2FgxVrcJqA%2BDHVFozom3DNTF%2FIdQsBxfkbjdU4OKWeKMjKHqkagHAgvOspeTuuDpqUYSjp0asYpZEiIcDctVeA0qKKhmJJKL84%2Fu%2B5Q1%2BAL2kiEDAAcsgEskFrjgPDjx7ZCk72Bclzl4dIeiFR%2FnkgTY7akv0txI3d%2F8dp9i9BzzUWb%2BCixvWLVP%2F%2F0lRBeElitjoqQdp%2FmgMOLC92%2BF%2F49cI9KsrVznGZRoU6CjrjlO279wW0u4sUDGpyCzx3Yt3ScPB1CnV%2BhAHaVWGbqVU0RqNCaAZZvq%2BA791gw3cvGTGwpntounM6TmMNcuKocv07plerjwjPP1dBx7%2BxJ0RbGk4qWOg00Kqv%2FehshoRyq%2Fv4qOBeq81th%2BW9%2BDS4HNSdZW8vCsXZW6weEJNWPldiDPhzaKu9BKeG5Tr4HWNcDjebeA%2Fx7qK992SgX1zt1RxQWVBBCf0jL%2BOhn46GH7dcgbMbuJFr2nMNy6mtp2x9Vzf%2Bm6TRSumlb4F%2FaNqZ34rar6QHp74fsMK7ZNYxnh0Nyi4DcbFEhB6o9T1%2Bh%2Fqivh95RSAlhDevkcRnRcQ738xCZNiaoZbUdlLdi2KZn85rtl%2BefVpKx%2BLiiuHB2jf85m7%2Fdp%2FG2DPMUjC55eTABjqkAYT0cQmz9wEhtgw%2BhTJqhOcQQjLlah5id%2BFN3TAakZb9RLANnpbxWs4dgE4KGRzqCfhQDuBZCXl%2Bgn5TLaYrsWdCy%2FdG9X%2B2xBwL0ZarGbrX7gTV6MO8aOut5bNqry4SADIR34bwQgL%2Bp3nRXm7rvgSfAGnaf1E8vkgu8Qp7xrbEIIh7w5wd26AblIEXWCG09PkZ1BepMIe9jPxnmsA5BzZlqQZE&X-Amz-Signature=d9c6d8173c97e8190ba062bc9f916f202b80212b825726bc5966e697322fe10f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MAAHRB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayL21s7GPRl2WEsUffZ%2FOgthIdX6%2F8xENqVFEin90ogIhAI%2ByjF0ddT3w1dfmJKpYwulwefC3kVv5tS%2BBQPE6R0jXKv8DCDcQABoMNjM3NDIzMTgzODA1IgzTz%2BlnE1gBguQlPZAq3AO1GBC%2FgxVrcJqA%2BDHVFozom3DNTF%2FIdQsBxfkbjdU4OKWeKMjKHqkagHAgvOspeTuuDpqUYSjp0asYpZEiIcDctVeA0qKKhmJJKL84%2Fu%2B5Q1%2BAL2kiEDAAcsgEskFrjgPDjx7ZCk72Bclzl4dIeiFR%2FnkgTY7akv0txI3d%2F8dp9i9BzzUWb%2BCixvWLVP%2F%2F0lRBeElitjoqQdp%2FmgMOLC92%2BF%2F49cI9KsrVznGZRoU6CjrjlO279wW0u4sUDGpyCzx3Yt3ScPB1CnV%2BhAHaVWGbqVU0RqNCaAZZvq%2BA791gw3cvGTGwpntounM6TmMNcuKocv07plerjwjPP1dBx7%2BxJ0RbGk4qWOg00Kqv%2FehshoRyq%2Fv4qOBeq81th%2BW9%2BDS4HNSdZW8vCsXZW6weEJNWPldiDPhzaKu9BKeG5Tr4HWNcDjebeA%2Fx7qK992SgX1zt1RxQWVBBCf0jL%2BOhn46GH7dcgbMbuJFr2nMNy6mtp2x9Vzf%2Bm6TRSumlb4F%2FaNqZ34rar6QHp74fsMK7ZNYxnh0Nyi4DcbFEhB6o9T1%2Bh%2Fqivh95RSAlhDevkcRnRcQ738xCZNiaoZbUdlLdi2KZn85rtl%2BefVpKx%2BLiiuHB2jf85m7%2Fdp%2FG2DPMUjC55eTABjqkAYT0cQmz9wEhtgw%2BhTJqhOcQQjLlah5id%2BFN3TAakZb9RLANnpbxWs4dgE4KGRzqCfhQDuBZCXl%2Bgn5TLaYrsWdCy%2FdG9X%2B2xBwL0ZarGbrX7gTV6MO8aOut5bNqry4SADIR34bwQgL%2Bp3nRXm7rvgSfAGnaf1E8vkgu8Qp7xrbEIIh7w5wd26AblIEXWCG09PkZ1BepMIe9jPxnmsA5BzZlqQZE&X-Amz-Signature=b6321089d228b72ccdd7942d5e1123c3f616245196a374eb16d0d15479a48a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
