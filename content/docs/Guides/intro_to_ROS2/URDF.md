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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5VXLAM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZborjqMLJH18h8HNifm5juuuvkAxZR%2FNkJpHITDKUtAiEAzDKcPf7FDU543hiFETEIz4img2fQphb3n%2F5TN4AUg8cq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNS7Qfz69426RNKTXyrcA71to4yJY%2BqqWMmk%2FviGh1jnHxFjmjzwynunSnF%2FTtvqOisc4t3PIFPGLQecDoGOT7xoXwxCUs3Sg0NwidSWxRIyquQRrdgzkFpMUoI4QpHDTkf9V6kaaPZOf%2BUKbSle56sbRTK4sGt17ww9%2Fa%2Bil60k65hYaE4VgLo7X423tiTEJT5z00D4u26FVOsvv9CRPXSYpDOJbdbEEdp1QxP8SbwnfKRh3ZiDg4mvQEBZKpsFhrPiSIdAH349f1XfwFBcuWyp12djoUsRpH63JxVwVaidLk59vZqezLWJ5U6KGc01DkzlyfZcVKxFJR3mEx%2FjmKkd8pycCojir4e3LP2QYNGodp9M3t3xPF9VPhw%2F2NSJLs3R6AdwwNvM%2BkxJdfBvU%2F5fbOsdanBMCOhsuSNMWM8lEAgDmG9aw4cDa1TChMl0SKD7qhxZ9OOD1DxXIQzdDFM%2FUSmdajxDArBQD1OuGS5y3oujtEAy61ZHSUdE6ub0YlZn%2FBi%2B63tD2hKB1HpQ%2BLVgUk%2Fi02tVXyGYfU%2FNwYn9GxB3FeeEnpCDztJZMXfV0kYUFfGVplj3BJUbR%2BMxCU%2BnRt4RLRFZI0m31R3OI7mAe%2BLG3FOS4HkNYM1izkvwsNIbUwKtY250hkW2MI%2Fkir8GOqUB4FIZmOApaBfLrdKoViz7EdDXjUWgJ%2BhAaxMOi0PP9pStDA17zoawI6ChK%2FlBGmAaED48oeAYYt%2B3w5HHlMcnnfzVzA%2BNYhEqyaeqkxw3z8bksdnimBhfAgykpV2R%2BDULEVy1CDdPiGXpKpOO%2FHslGU0uoDJt7GW5BQfQXAlbAWnMCBVdC%2Fby8856R72CbIJ4i%2FpUHM%2FsTERdDVVaIRe7L5LvDJZE&X-Amz-Signature=7db938cadf63b94c25c31904c9ac8ab593adf6a27871919a2b30892cf5406b95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5VXLAM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZborjqMLJH18h8HNifm5juuuvkAxZR%2FNkJpHITDKUtAiEAzDKcPf7FDU543hiFETEIz4img2fQphb3n%2F5TN4AUg8cq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNS7Qfz69426RNKTXyrcA71to4yJY%2BqqWMmk%2FviGh1jnHxFjmjzwynunSnF%2FTtvqOisc4t3PIFPGLQecDoGOT7xoXwxCUs3Sg0NwidSWxRIyquQRrdgzkFpMUoI4QpHDTkf9V6kaaPZOf%2BUKbSle56sbRTK4sGt17ww9%2Fa%2Bil60k65hYaE4VgLo7X423tiTEJT5z00D4u26FVOsvv9CRPXSYpDOJbdbEEdp1QxP8SbwnfKRh3ZiDg4mvQEBZKpsFhrPiSIdAH349f1XfwFBcuWyp12djoUsRpH63JxVwVaidLk59vZqezLWJ5U6KGc01DkzlyfZcVKxFJR3mEx%2FjmKkd8pycCojir4e3LP2QYNGodp9M3t3xPF9VPhw%2F2NSJLs3R6AdwwNvM%2BkxJdfBvU%2F5fbOsdanBMCOhsuSNMWM8lEAgDmG9aw4cDa1TChMl0SKD7qhxZ9OOD1DxXIQzdDFM%2FUSmdajxDArBQD1OuGS5y3oujtEAy61ZHSUdE6ub0YlZn%2FBi%2B63tD2hKB1HpQ%2BLVgUk%2Fi02tVXyGYfU%2FNwYn9GxB3FeeEnpCDztJZMXfV0kYUFfGVplj3BJUbR%2BMxCU%2BnRt4RLRFZI0m31R3OI7mAe%2BLG3FOS4HkNYM1izkvwsNIbUwKtY250hkW2MI%2Fkir8GOqUB4FIZmOApaBfLrdKoViz7EdDXjUWgJ%2BhAaxMOi0PP9pStDA17zoawI6ChK%2FlBGmAaED48oeAYYt%2B3w5HHlMcnnfzVzA%2BNYhEqyaeqkxw3z8bksdnimBhfAgykpV2R%2BDULEVy1CDdPiGXpKpOO%2FHslGU0uoDJt7GW5BQfQXAlbAWnMCBVdC%2Fby8856R72CbIJ4i%2FpUHM%2FsTERdDVVaIRe7L5LvDJZE&X-Amz-Signature=ecb82b711630425e5a1e81e4125089a3fa82fbc1cb97e9ca7c5bdf0864f0106b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
