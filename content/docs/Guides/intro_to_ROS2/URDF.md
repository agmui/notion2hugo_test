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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNI7RUS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEG2C9HPDvUpdPCuNU21XK5HP4Ugq35MFaCiO5DHK%2FB8AiEA8APWQmNfyLO38JaffLS63kquU3N713yXTgdS7MlM%2FGQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJfN07yaSh7UHXyn8SrcA1wiSUY6FakhI3Cf6B6QY8Zm4Ue7W1HKYC1zlgk8hRht3QXem5GYiWYGcpUjJklMo5YyyqCv9jNiwOgHFVHOXmZeDkkH8hflB86zGfw9d0SKLoMy4%2FyhWKB1bKaj0FvZUS5MA1%2FAFDvEiQtbEl0u59jWEqR3p91QIv27piXdMLOjukt%2FconHHqjyAKfdxUcB4DKBOWGy1HrohbN4FHI%2B2LrFIi7yCVTLzbo4FMxL7CMzbbru%2BForXTx0Sde3xfuIXCB38RmI2BFs6MaszUID%2Fp8pu2VJaYTSxezSZpvp61YocDigyNQiiYaQUpY5iYPPsUvPdlpTDVR3ucpBZjjRbYWkFk4yqoxDaReXr3RVgTMWu6v5Y%2FBUPdTG9750Tu8OfEqXStFj9XC7RFXsJDQwzFkAWSBNlwF%2B0y3ovMHhVJXa%2FThz3cO2XpUlFMsa%2F2bN0ZVLSC9RHwpT4amjCckIKPSHFoeaAMuGkg4DrY0ifhvKPbI94%2FL1SVkrFUsrRvu1nq2VwEfweKs8SfBBzUEREsQrQGuuRWBZlS2h%2FJAfPXVF%2BVh%2FJQfRptqIe00OTfTgkdpdyXm21yzfL0ZBORXfaMOAXbNBIUUOynLZg3g%2FTJMGsD6cjdffNZkeYUtvMNL26MIGOqUBttym%2FcVYrQ3vUi7OumTzdKDCKssWO6xjmtOwdTv%2Bo6Fc3gSuvzCvi92mM3AylBOpTXPHmpG2Zn1EX13IwAI0oHgt1OF3S0uWpPAcOj%2F7kCtLFcyYca3vfZ0JRoqWQVk4h0TJEQfGcsAdgOJlM3vsTO%2Bgp8TLTPpQov43%2BM5JrLQgepEUrdR53BhxG5AEzLAvE2xDki4DBtIjtL5wJoPxYeyXrUYb&X-Amz-Signature=524bf6a47d7cff418323d715682a12d64829e8564f4c262f72f6486decf6508f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNI7RUS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEG2C9HPDvUpdPCuNU21XK5HP4Ugq35MFaCiO5DHK%2FB8AiEA8APWQmNfyLO38JaffLS63kquU3N713yXTgdS7MlM%2FGQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJfN07yaSh7UHXyn8SrcA1wiSUY6FakhI3Cf6B6QY8Zm4Ue7W1HKYC1zlgk8hRht3QXem5GYiWYGcpUjJklMo5YyyqCv9jNiwOgHFVHOXmZeDkkH8hflB86zGfw9d0SKLoMy4%2FyhWKB1bKaj0FvZUS5MA1%2FAFDvEiQtbEl0u59jWEqR3p91QIv27piXdMLOjukt%2FconHHqjyAKfdxUcB4DKBOWGy1HrohbN4FHI%2B2LrFIi7yCVTLzbo4FMxL7CMzbbru%2BForXTx0Sde3xfuIXCB38RmI2BFs6MaszUID%2Fp8pu2VJaYTSxezSZpvp61YocDigyNQiiYaQUpY5iYPPsUvPdlpTDVR3ucpBZjjRbYWkFk4yqoxDaReXr3RVgTMWu6v5Y%2FBUPdTG9750Tu8OfEqXStFj9XC7RFXsJDQwzFkAWSBNlwF%2B0y3ovMHhVJXa%2FThz3cO2XpUlFMsa%2F2bN0ZVLSC9RHwpT4amjCckIKPSHFoeaAMuGkg4DrY0ifhvKPbI94%2FL1SVkrFUsrRvu1nq2VwEfweKs8SfBBzUEREsQrQGuuRWBZlS2h%2FJAfPXVF%2BVh%2FJQfRptqIe00OTfTgkdpdyXm21yzfL0ZBORXfaMOAXbNBIUUOynLZg3g%2FTJMGsD6cjdffNZkeYUtvMNL26MIGOqUBttym%2FcVYrQ3vUi7OumTzdKDCKssWO6xjmtOwdTv%2Bo6Fc3gSuvzCvi92mM3AylBOpTXPHmpG2Zn1EX13IwAI0oHgt1OF3S0uWpPAcOj%2F7kCtLFcyYca3vfZ0JRoqWQVk4h0TJEQfGcsAdgOJlM3vsTO%2Bgp8TLTPpQov43%2BM5JrLQgepEUrdR53BhxG5AEzLAvE2xDki4DBtIjtL5wJoPxYeyXrUYb&X-Amz-Signature=c3254b73a13ddbd6a23e6399dcb7db9edc38a853f9228081271f9502e36a4aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
