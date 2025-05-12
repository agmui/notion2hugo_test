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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSR63IS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDdbMaZ4XdFflRbhT3Y2AC3eVLZqeyRmSH0YkRBY%2BZkqAIgNlzdJjwG8oMXI7kZUKkT51DdT3OfiMH6xpECBhNYcwAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKBOfbXUaidcQejwCrcA9%2F8VsNZuxaBEscKh1KuCQON6sj%2FQ5e5QdoJVM7JaDsC64VQmT%2FhkroOli6exTNbSLwljGeiIYV8pebgIn0TDk4P3pCPKsLwmUIvDP8Ms9FUb5HzJmgVRJW609gBFEjVVCabOCBrZesYwcjbvljQOc5iBJdJwWokl%2FVMZWBUN6xn8l1q9ottjugT5CRrQuX1n6niD%2F15P4hJuu2zqrwYe5%2BJOpy55XEsGa%2BKg%2FzOjswbfoHP0db3b8w%2FuTa4gJLst6yBOENPGDxcC1BqInyILcCTk1q5M5Xj2c%2Fyauxh29yO3XPAD7h%2FhvhryzpeHm1Ya9BDtBYUuNReLLGly%2B56IJLQFRVnSPppU8QXZgenjs4Z%2FWhSfYbR9sDl4V2oeW6PMal08g0UGLlssT%2B7wmsZjn8NgCjD3GR5ONqy7JosACvMgub2s7LWnZ4q7z7i0qFdOcNi9Mw10rWIDmVadBxh8OlqD8ejdFMC4H%2BsAQzQs31XQ%2FSwVVolRwsIAwyQZPl6UB%2Bg9xSm7%2BExTguqhoTeKd9%2BwL6M8PMFO2%2BEH5Wq19JpencZoCKA93K72moPnUN3pXYCrToU3nD9JDjM5KwRUBDsQs63IXGpfJdcDp90BsBTfRWV1C%2BeGKeonZPGMKr1iMEGOqUBtyz3phAMR13m8jEL6sloOnhxwJHBTTxVK4sgyF9g9ekIlupB%2FRnhAAR8j%2BmY3Gbxvy9VWbEB6dYOX%2FobSnPg4N26bnPPj5HvWrOc%2Fl1BuZtZvfPqpdkyq9AezBrBdE5bZcHyLdJh6jTgoDTAFmMGjp5CMDMs1S%2FglTqpSTq2BfkkN7gI9M%2FZyj1E7QdQY8Ux6wLuXVDUFeypbm6W3mnp4ghWE9l6&X-Amz-Signature=d72326bd8a34d6ca3510aeced49346db5b82e41cb17bb1b996951177faa11184&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSR63IS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDdbMaZ4XdFflRbhT3Y2AC3eVLZqeyRmSH0YkRBY%2BZkqAIgNlzdJjwG8oMXI7kZUKkT51DdT3OfiMH6xpECBhNYcwAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKBOfbXUaidcQejwCrcA9%2F8VsNZuxaBEscKh1KuCQON6sj%2FQ5e5QdoJVM7JaDsC64VQmT%2FhkroOli6exTNbSLwljGeiIYV8pebgIn0TDk4P3pCPKsLwmUIvDP8Ms9FUb5HzJmgVRJW609gBFEjVVCabOCBrZesYwcjbvljQOc5iBJdJwWokl%2FVMZWBUN6xn8l1q9ottjugT5CRrQuX1n6niD%2F15P4hJuu2zqrwYe5%2BJOpy55XEsGa%2BKg%2FzOjswbfoHP0db3b8w%2FuTa4gJLst6yBOENPGDxcC1BqInyILcCTk1q5M5Xj2c%2Fyauxh29yO3XPAD7h%2FhvhryzpeHm1Ya9BDtBYUuNReLLGly%2B56IJLQFRVnSPppU8QXZgenjs4Z%2FWhSfYbR9sDl4V2oeW6PMal08g0UGLlssT%2B7wmsZjn8NgCjD3GR5ONqy7JosACvMgub2s7LWnZ4q7z7i0qFdOcNi9Mw10rWIDmVadBxh8OlqD8ejdFMC4H%2BsAQzQs31XQ%2FSwVVolRwsIAwyQZPl6UB%2Bg9xSm7%2BExTguqhoTeKd9%2BwL6M8PMFO2%2BEH5Wq19JpencZoCKA93K72moPnUN3pXYCrToU3nD9JDjM5KwRUBDsQs63IXGpfJdcDp90BsBTfRWV1C%2BeGKeonZPGMKr1iMEGOqUBtyz3phAMR13m8jEL6sloOnhxwJHBTTxVK4sgyF9g9ekIlupB%2FRnhAAR8j%2BmY3Gbxvy9VWbEB6dYOX%2FobSnPg4N26bnPPj5HvWrOc%2Fl1BuZtZvfPqpdkyq9AezBrBdE5bZcHyLdJh6jTgoDTAFmMGjp5CMDMs1S%2FglTqpSTq2BfkkN7gI9M%2FZyj1E7QdQY8Ux6wLuXVDUFeypbm6W3mnp4ghWE9l6&X-Amz-Signature=7987186641e5785507eff8dc2472027189e83b67abce8f6c7a5de633c9dfe063&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
