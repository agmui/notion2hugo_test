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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEGUBYS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDZo8w94LDD%2Frryf%2FFgUzbGMDroTZ9vlEL48v7x%2BgW7%2BAiEAgA8UR4LU1ZgIfjb3kSgHA2u8SoMDsZ8oMzCb1%2F131Gcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLmOaovT42XCUF31mircA6cAvbn3DzuSqdPBOW4OqdB0WO%2BjPxJkUkgVbuPpIDkFVdJwZQXFNtyIkRe3mD81IFB2Im46VTd8KFrPIFC3CDKIqj%2Fg6LW5SzzKtsluUexSnemp9Xe1bLPy1JEKeM000Wxal2L3U5mwgBpFxjRvanj6mTq5Rjw5s7QCNTwkvcrA4C2mPBzi%2BAtyUKFm7yoV2yGlA39AP0p6Hufpe7DrqT86%2FDRcnPl8Vxl7okRA2ZAkYKlCHeG5lwl5X%2FJ5XL4Lj%2Fb%2FbsVM%2BvWljQb9RpM%2Fs3tp7UJji5tV5787hOMvaLfL5jHUN8lmT0xxDtldgwp9kQrKf6CtWTbegQ3vG4pdVYPoVoW5Ggem13YNSRR%2F82I1%2Be4ChGTXZtS8uw8MFtO7GqwFKwhE4yWOOjSJ4Kz7aN7IPuJjvVhb5ic4bSkmb%2BT%2BMKUq8g3B08Ti2%2BiC%2B5%2BvtIzlOBhYQSQuo9SQzKlHtxfw2AFmvCyfBs9YBRp3jLBZpoetBeh6WfiHHz5oRSIPXITguAhi22HAkJiaAo9586662KtHfsDgA8kEafOvVwptvEQVMgfMeTis5JSLuFpRGqy6aZsz8MIXeWHD%2F%2BOr3ZbinJ92es09eRSTT8ZrgGxlHMF3b09WQs0yUUp4MLS9jsQGOqUB6r3%2FB7AXG1pYJ1tVLag1NOl4tejBwJkbMs0SwsI303%2FT2v7Tvy5Uk%2FOEUIdam5lf3QawIapYor%2F4LnxDme67sHAI2L9ySpNeP2LczC5GqxZpYC905AhGRVqXZEOKx4MYBDQJ8WICcFGIZbosGzXXqGLWwitclnvNS0LDnof29yD4JQbXkSAZ3dytUcyDPFo5I8AqwGlpVTzXmNb%2FVAbYvZWSHU5S&X-Amz-Signature=513710d413a3195d1653ed3fe9b32472931e3d519f2151483c236f811732647a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEGUBYS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDZo8w94LDD%2Frryf%2FFgUzbGMDroTZ9vlEL48v7x%2BgW7%2BAiEAgA8UR4LU1ZgIfjb3kSgHA2u8SoMDsZ8oMzCb1%2F131Gcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLmOaovT42XCUF31mircA6cAvbn3DzuSqdPBOW4OqdB0WO%2BjPxJkUkgVbuPpIDkFVdJwZQXFNtyIkRe3mD81IFB2Im46VTd8KFrPIFC3CDKIqj%2Fg6LW5SzzKtsluUexSnemp9Xe1bLPy1JEKeM000Wxal2L3U5mwgBpFxjRvanj6mTq5Rjw5s7QCNTwkvcrA4C2mPBzi%2BAtyUKFm7yoV2yGlA39AP0p6Hufpe7DrqT86%2FDRcnPl8Vxl7okRA2ZAkYKlCHeG5lwl5X%2FJ5XL4Lj%2Fb%2FbsVM%2BvWljQb9RpM%2Fs3tp7UJji5tV5787hOMvaLfL5jHUN8lmT0xxDtldgwp9kQrKf6CtWTbegQ3vG4pdVYPoVoW5Ggem13YNSRR%2F82I1%2Be4ChGTXZtS8uw8MFtO7GqwFKwhE4yWOOjSJ4Kz7aN7IPuJjvVhb5ic4bSkmb%2BT%2BMKUq8g3B08Ti2%2BiC%2B5%2BvtIzlOBhYQSQuo9SQzKlHtxfw2AFmvCyfBs9YBRp3jLBZpoetBeh6WfiHHz5oRSIPXITguAhi22HAkJiaAo9586662KtHfsDgA8kEafOvVwptvEQVMgfMeTis5JSLuFpRGqy6aZsz8MIXeWHD%2F%2BOr3ZbinJ92es09eRSTT8ZrgGxlHMF3b09WQs0yUUp4MLS9jsQGOqUB6r3%2FB7AXG1pYJ1tVLag1NOl4tejBwJkbMs0SwsI303%2FT2v7Tvy5Uk%2FOEUIdam5lf3QawIapYor%2F4LnxDme67sHAI2L9ySpNeP2LczC5GqxZpYC905AhGRVqXZEOKx4MYBDQJ8WICcFGIZbosGzXXqGLWwitclnvNS0LDnof29yD4JQbXkSAZ3dytUcyDPFo5I8AqwGlpVTzXmNb%2FVAbYvZWSHU5S&X-Amz-Signature=f66f5d0c3b80375beb2e856b1406762e2b96929d356dd323861a1fa2f9f629eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
