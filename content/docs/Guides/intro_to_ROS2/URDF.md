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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVZFIFJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWhnZhX4866HDeEnfchQoXqDEopSsm3Vyr9jRp0xIeeAiEAinG9ZExuFwC44wukRvKQB6KaNbxeSKBLkDM4pHmlWh8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMLUOyU%2FCjtqdP00RyrcA077QkjfJ2NV9qc3ZfrvSkPcgKoVdNLCaiJskzLgcM9Z0Sr2hiHsnWCPMMdvfL3JmM%2FJ0uIUDrD0Z3fyTexKxfweMJr7M8ddjMPbqQMkIXQEuct9rU6OTzUadRPo2YL3X81bbTCUcbkRHnLVj4zNYpCcvcDD2aShNvWi8zhyrfra%2BRnwHOeeCAA%2FtIwWf1ImJ5x9B1SpMYglpR7PvNPYDZMVBf1rB2al66Crx69TqXsKu71GEqarHirdwJhujBC0fSQDe7BO16vaWEOtTbINj8XkkW7GljPwP1Pi5TO9NH0dq7rbTzNt1nIpLpWR14NgGDixKBKTSdv0q86OW1p8opL2lEFKwFAcRLZ%2FihYLepfMfI3fbEt93H3b5tR3dpSMEAeUpTmCLxxURcHIWSOXnMeUdK2L1OphuK%2FKZWtRqPLgwemdYm%2BPbelwVlBZT97jcMfCHVs2noDMZQzZHeTA03CisofPCivQqzXPQmvYlC0eoLH278nvbNfu2kvLaRRrSCSGs4KG9xZJAFzaG8JQAwJOrX73wImuzbnIfO1V0k%2FAxGHU6P24YsKYl1YqLsS5vZSdoomm3KjWd4%2Fp95e1r4ejk77WvpzPhNvKnnfHD1KOqAHBxBK1Z%2B8U4XNrMKzqjb8GOqUBVeczn%2F3h8FK%2B5Pb53O1EGJwUwkpNObXsi0XFiQyIrh%2BwalaSmHRMv0MHlJE8FM2wMpBHSxerIey0SbSkQJ%2Fl24pkdQlZW9OoWh%2B02Xw0ILhuat2y8gIylPn0IoEEYkmrRGIGjOZUKCPPv0vdXTg0cxWBNsycvqMUtyFb%2F9RUn4b%2FkIftDkR0AQ7LMbt%2B%2FzGxMcSoTBPXm6FTy%2Bi0x1HO9AjqE2fq&X-Amz-Signature=455e6f7b313f231d31d3ed89e15a4d581d0d7c38ee859360110122950ced6f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVZFIFJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWhnZhX4866HDeEnfchQoXqDEopSsm3Vyr9jRp0xIeeAiEAinG9ZExuFwC44wukRvKQB6KaNbxeSKBLkDM4pHmlWh8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMLUOyU%2FCjtqdP00RyrcA077QkjfJ2NV9qc3ZfrvSkPcgKoVdNLCaiJskzLgcM9Z0Sr2hiHsnWCPMMdvfL3JmM%2FJ0uIUDrD0Z3fyTexKxfweMJr7M8ddjMPbqQMkIXQEuct9rU6OTzUadRPo2YL3X81bbTCUcbkRHnLVj4zNYpCcvcDD2aShNvWi8zhyrfra%2BRnwHOeeCAA%2FtIwWf1ImJ5x9B1SpMYglpR7PvNPYDZMVBf1rB2al66Crx69TqXsKu71GEqarHirdwJhujBC0fSQDe7BO16vaWEOtTbINj8XkkW7GljPwP1Pi5TO9NH0dq7rbTzNt1nIpLpWR14NgGDixKBKTSdv0q86OW1p8opL2lEFKwFAcRLZ%2FihYLepfMfI3fbEt93H3b5tR3dpSMEAeUpTmCLxxURcHIWSOXnMeUdK2L1OphuK%2FKZWtRqPLgwemdYm%2BPbelwVlBZT97jcMfCHVs2noDMZQzZHeTA03CisofPCivQqzXPQmvYlC0eoLH278nvbNfu2kvLaRRrSCSGs4KG9xZJAFzaG8JQAwJOrX73wImuzbnIfO1V0k%2FAxGHU6P24YsKYl1YqLsS5vZSdoomm3KjWd4%2Fp95e1r4ejk77WvpzPhNvKnnfHD1KOqAHBxBK1Z%2B8U4XNrMKzqjb8GOqUBVeczn%2F3h8FK%2B5Pb53O1EGJwUwkpNObXsi0XFiQyIrh%2BwalaSmHRMv0MHlJE8FM2wMpBHSxerIey0SbSkQJ%2Fl24pkdQlZW9OoWh%2B02Xw0ILhuat2y8gIylPn0IoEEYkmrRGIGjOZUKCPPv0vdXTg0cxWBNsycvqMUtyFb%2F9RUn4b%2FkIftDkR0AQ7LMbt%2B%2FzGxMcSoTBPXm6FTy%2Bi0x1HO9AjqE2fq&X-Amz-Signature=11771a5470e4551cb436cdb9713c024912321b4942cde947d171bce35d6caa8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
