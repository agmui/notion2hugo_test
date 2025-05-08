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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOUSCQF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcaPL19ke4N1b2GJEM200qdkv9gAcDFhQSgFWB7BLJ6AIgX4ljDcVe3n3u%2By6R8vc0HZq1WmpwJ7bSw5JU1vgaragq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKNn0xHlL%2B9F1dExFCrcA7s%2FYPzvChtzUHsWhlYipMHIt4PQfrb4JNvmjzIXfk9HoC%2FL4M3HR%2FwGSs9wQZ5jim4GB8pVnRszBoqvvz1sJWGoAD%2FEfgU6voBV6NC5%2BZEosdlHxx7QKsr%2FQXtEcULsccFQlh1Nm%2FVKEfGtzGc2AeaKRF%2FACqHWL2fz%2FsR1Q4Hm3FKvr5fn88FOZqvioWU4KzgWDGya%2BGAYd6iGRfPSFlG4cstQCn0grxK7f0C5MCl0TOKo6sb8%2FSzbChaDAYG6EsD8nY%2B42B4sXTfWfbYueQGYD08jYK%2BNTY329VhcHCC9y31JiqAJ5TRLW%2F9VPBCY9lGrPequ8WPwc1ARy9FBW2KJicLop0pLmFmfNSEiVXeGK4TVstfR0kgR3A%2BUtXB3eFdPa%2BLnPtBJxu1VVc8jkhYjCuPvIjFr2VJeN5%2FWnHZpOry%2FPTV4d7cW70iBfsLkrQt5OaA1F4qnDSbhKjZIfc1BjkWBHN8tg3pIfOiKX1oOfIxhEziRgiJhg3v2YVIooNdOlXtja0vHEdxWPDcBi6ym%2FigRlwI1mao8up4rO%2BkJ2h3lM3c82fBeVdWJyd0ikZTk3ifeNlfdjzNPaZhnnF7Qu32RCBB%2BAwwmRrnoSMro04dI%2FU04Q%2FUmTgMWMLrJ9MAGOqUBJvJS392xO6u%2BSF%2Fm5cCLt%2FhUwubqb9UtU8M75E3jdqHwS4jRovFV8T5p5FC7gD714smqOhvUg%2FuIuE7pUleS%2F1X5q4u7Z16NDjZsNf8SibiBrEjAMcpzunFBPxl3RAK7xrj34IUf0I5wwwGtkBJyhS4XoRXa3wz%2Bu4yGh%2FHZJ2C%2FS%2BR6i%2FwoNGFStDfuiZS0q6S4nOV30gP959XIfrcE5pakTTLG&X-Amz-Signature=823581df32984a68a833a043a1b7be0bf08efcef04cc8a17617046682341c34c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HOUSCQF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcaPL19ke4N1b2GJEM200qdkv9gAcDFhQSgFWB7BLJ6AIgX4ljDcVe3n3u%2By6R8vc0HZq1WmpwJ7bSw5JU1vgaragq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKNn0xHlL%2B9F1dExFCrcA7s%2FYPzvChtzUHsWhlYipMHIt4PQfrb4JNvmjzIXfk9HoC%2FL4M3HR%2FwGSs9wQZ5jim4GB8pVnRszBoqvvz1sJWGoAD%2FEfgU6voBV6NC5%2BZEosdlHxx7QKsr%2FQXtEcULsccFQlh1Nm%2FVKEfGtzGc2AeaKRF%2FACqHWL2fz%2FsR1Q4Hm3FKvr5fn88FOZqvioWU4KzgWDGya%2BGAYd6iGRfPSFlG4cstQCn0grxK7f0C5MCl0TOKo6sb8%2FSzbChaDAYG6EsD8nY%2B42B4sXTfWfbYueQGYD08jYK%2BNTY329VhcHCC9y31JiqAJ5TRLW%2F9VPBCY9lGrPequ8WPwc1ARy9FBW2KJicLop0pLmFmfNSEiVXeGK4TVstfR0kgR3A%2BUtXB3eFdPa%2BLnPtBJxu1VVc8jkhYjCuPvIjFr2VJeN5%2FWnHZpOry%2FPTV4d7cW70iBfsLkrQt5OaA1F4qnDSbhKjZIfc1BjkWBHN8tg3pIfOiKX1oOfIxhEziRgiJhg3v2YVIooNdOlXtja0vHEdxWPDcBi6ym%2FigRlwI1mao8up4rO%2BkJ2h3lM3c82fBeVdWJyd0ikZTk3ifeNlfdjzNPaZhnnF7Qu32RCBB%2BAwwmRrnoSMro04dI%2FU04Q%2FUmTgMWMLrJ9MAGOqUBJvJS392xO6u%2BSF%2Fm5cCLt%2FhUwubqb9UtU8M75E3jdqHwS4jRovFV8T5p5FC7gD714smqOhvUg%2FuIuE7pUleS%2F1X5q4u7Z16NDjZsNf8SibiBrEjAMcpzunFBPxl3RAK7xrj34IUf0I5wwwGtkBJyhS4XoRXa3wz%2Bu4yGh%2FHZJ2C%2FS%2BR6i%2FwoNGFStDfuiZS0q6S4nOV30gP959XIfrcE5pakTTLG&X-Amz-Signature=6460634b5e775415a5d996d147421a6e008780afaa726cf0b616b363108c06db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
