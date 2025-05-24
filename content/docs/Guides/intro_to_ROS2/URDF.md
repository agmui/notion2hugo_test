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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJBURXY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDYelMSrq7C9Zuosp3ZUF5ojQ82fLIcyeyg%2F7FVgHNpgAiEA%2F4DdL%2F0TyxrEPvYEXq41pxBcJRBYz0ZxJUH%2BCC8G1H0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBJkKGAtdivUgfT91ircAx3eVHfu86%2Fw0zgo0BkzH%2BPvpJA6XaO1qvKdy%2F2cSYiqq5Dz%2F3wCdP%2FBVAv4GRTcMWislmsl8%2FLSojcPaMjNwEl6jk5Cxwtl26wISEtLTAMYaL85KRr8n0vEjt%2F7PlKz7NNB0%2FhKD%2Bizu51PLSLucLMDdvj0EuweIAeQu5xXRblfmgiAzIt2fj6cPiTalvTz65MFVCPUSpY8jDF1zx6BrM0EN0%2BQ2GyxMWE%2BB9tk91mmYosSThJJdQ5%2Fmm15f76JY6lrC2aRuZ0TTGWMxW9tljA4hAC8ryb%2B6KZY4cIM%2BuEtAVAzvEF2KMAlkdgKc7KMITgKy86IRADpue7Z41jPfH6f7tq6Spp%2BwiQm67G0E1ycbUxeRJ%2BldCpWwkIkd1w39yxWJwYCUc%2ByvtOMWSVTh%2BKNdpsclghyleuKq643kI7df4ceZMt9ddEfdKo1UoJ1gHeobnQcJ9aPEhKI3dPiXLMHvkwJdNQu9Db7A803cQaInANPFc4YYVvogYL4xIUnAfNXmB7AafXbUQaGQxnp%2Fj9tYtMGSaZfb0aP0p7shRhwuNcCz8QkTLH%2FqjDjtpG9l08GxkeTRmtiPAkQOiNdsQ13EMSx3TQnPp%2F%2BxSi4GC2NO4niBlB5u9fZkiy9MPrMx8EGOqUB%2Foe2nLyNtp32zyJfQbtVgpcOO6Pe5fig43UwUXY16q%2FdehPlltAxpojJpZEsMdrCHQKPJsih8MUzyIbkOEpO6cl8EaHODEHQtJBqb9x4iink98qdh9%2B%2F3ucYcf%2FDAgY8tR0LDn8s6RH%2BYluCH3vZ5fT9bOEp%2F5bKfgyPiXvftW0KatR7YZk9tEe3n2nKkhlqVwB4h5CYQruxFUatZj1c%2F5rmV1ot&X-Amz-Signature=b535c4fa2dc571aeb01c5d2e607f88f06aca416535d2bdd7eb318bae9887bd05&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJBURXY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDYelMSrq7C9Zuosp3ZUF5ojQ82fLIcyeyg%2F7FVgHNpgAiEA%2F4DdL%2F0TyxrEPvYEXq41pxBcJRBYz0ZxJUH%2BCC8G1H0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBJkKGAtdivUgfT91ircAx3eVHfu86%2Fw0zgo0BkzH%2BPvpJA6XaO1qvKdy%2F2cSYiqq5Dz%2F3wCdP%2FBVAv4GRTcMWislmsl8%2FLSojcPaMjNwEl6jk5Cxwtl26wISEtLTAMYaL85KRr8n0vEjt%2F7PlKz7NNB0%2FhKD%2Bizu51PLSLucLMDdvj0EuweIAeQu5xXRblfmgiAzIt2fj6cPiTalvTz65MFVCPUSpY8jDF1zx6BrM0EN0%2BQ2GyxMWE%2BB9tk91mmYosSThJJdQ5%2Fmm15f76JY6lrC2aRuZ0TTGWMxW9tljA4hAC8ryb%2B6KZY4cIM%2BuEtAVAzvEF2KMAlkdgKc7KMITgKy86IRADpue7Z41jPfH6f7tq6Spp%2BwiQm67G0E1ycbUxeRJ%2BldCpWwkIkd1w39yxWJwYCUc%2ByvtOMWSVTh%2BKNdpsclghyleuKq643kI7df4ceZMt9ddEfdKo1UoJ1gHeobnQcJ9aPEhKI3dPiXLMHvkwJdNQu9Db7A803cQaInANPFc4YYVvogYL4xIUnAfNXmB7AafXbUQaGQxnp%2Fj9tYtMGSaZfb0aP0p7shRhwuNcCz8QkTLH%2FqjDjtpG9l08GxkeTRmtiPAkQOiNdsQ13EMSx3TQnPp%2F%2BxSi4GC2NO4niBlB5u9fZkiy9MPrMx8EGOqUB%2Foe2nLyNtp32zyJfQbtVgpcOO6Pe5fig43UwUXY16q%2FdehPlltAxpojJpZEsMdrCHQKPJsih8MUzyIbkOEpO6cl8EaHODEHQtJBqb9x4iink98qdh9%2B%2F3ucYcf%2FDAgY8tR0LDn8s6RH%2BYluCH3vZ5fT9bOEp%2F5bKfgyPiXvftW0KatR7YZk9tEe3n2nKkhlqVwB4h5CYQruxFUatZj1c%2F5rmV1ot&X-Amz-Signature=9f847d5bb8f350cd0a5a8b6214f6a61b73f12153d6ff4482bec5195a8fb50230&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
