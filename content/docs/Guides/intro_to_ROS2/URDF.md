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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTE7WNPT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r7evZp%2FgjcnSsTTxdNh7dKU1FJHk4gFqYxiuLikyHwIge2jSVDpilRjhT44Ue%2F0nk4x9DdOn6nLdz8%2ByJxp2xTEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAg97j4A0xuOMnV8yrcAwoR1GqTvUC5IjKq6M9a9o7OZ53ZqQtapfSr8fv93HKpdDSf7Wa%2BFFZhYQiwTGAXA6SHv1bE%2Fp79dmvVtVflSdRI2UPLRI8q%2FoDcRYD5PmCyMTyxn7yPeIVfNyCWdc6rvpItwjBHu5erBSJELrrg4cj6QPU7TUbbAq9EDCFoxoDFg68ChlAqBGRf6zTf3A1i7MU37buJA4aWAJ0SV66NHaMNgeuzYDtrPpwV15kXtzeJAk3zUR6ORCdfFnpeclL4bS3LQcoOq42ePxC8uHA%2B5X78lKA9kpw6a9kbXVUJGN%2BEQ1OlmVNGdaK8puSpEfBcGrUpMdWAJXJOOZZ4uOgNItZZlkVthveU0E5ZIqYi5WgF8Snc9reRhQamsHmX5eyMEx00TCAyPpencfOZmP4fSaNPjuvcvoYS1ByaojDO3X1ls9oZYmbN1mInOXEN%2Fm9T0Jb1J5pN%2BtMtf65hQBoLdYtrxWCJj2mROpTSYlXGTylEXMO4TkolFg0XHr5M11sxdCgbduBqXotPO83XuHKTmDOTFzbJdUFMs6XdoYvHvIhzhb0VQVfyJFVXrhAQFG4Sw%2FcDaisl3VrC739i9%2FgtETvIkQ9J6mjWDIp4lVnIdxAPwdDKcZ53bgkYZIMzMMqh7MMGOqUBNA8c9g%2Fub6NOu0rsHHXL%2FD3oBwM8Xwkpti68AdtDWQk7SwUNOBSwgKrQHCjyzN264DMxnSm6a2lrM9G5om%2B6RtSVu%2F7JSrTo0EaohhyFExaMRRNweZwgD%2FRTf6jt9%2F6zzl3vMDnivPGOsZ%2FPWz9XWdqYh7Dtc2AfaTBl1rI2kdKdeE8XWvkMwzOYBbIwD7kemORUxL34nSkWqYVpfM9PAAa0Qeri&X-Amz-Signature=b41727734b5694a2d0fd0ef53aa683122c7bbef7f345e932e3544699431bd765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTE7WNPT%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5r7evZp%2FgjcnSsTTxdNh7dKU1FJHk4gFqYxiuLikyHwIge2jSVDpilRjhT44Ue%2F0nk4x9DdOn6nLdz8%2ByJxp2xTEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAg97j4A0xuOMnV8yrcAwoR1GqTvUC5IjKq6M9a9o7OZ53ZqQtapfSr8fv93HKpdDSf7Wa%2BFFZhYQiwTGAXA6SHv1bE%2Fp79dmvVtVflSdRI2UPLRI8q%2FoDcRYD5PmCyMTyxn7yPeIVfNyCWdc6rvpItwjBHu5erBSJELrrg4cj6QPU7TUbbAq9EDCFoxoDFg68ChlAqBGRf6zTf3A1i7MU37buJA4aWAJ0SV66NHaMNgeuzYDtrPpwV15kXtzeJAk3zUR6ORCdfFnpeclL4bS3LQcoOq42ePxC8uHA%2B5X78lKA9kpw6a9kbXVUJGN%2BEQ1OlmVNGdaK8puSpEfBcGrUpMdWAJXJOOZZ4uOgNItZZlkVthveU0E5ZIqYi5WgF8Snc9reRhQamsHmX5eyMEx00TCAyPpencfOZmP4fSaNPjuvcvoYS1ByaojDO3X1ls9oZYmbN1mInOXEN%2Fm9T0Jb1J5pN%2BtMtf65hQBoLdYtrxWCJj2mROpTSYlXGTylEXMO4TkolFg0XHr5M11sxdCgbduBqXotPO83XuHKTmDOTFzbJdUFMs6XdoYvHvIhzhb0VQVfyJFVXrhAQFG4Sw%2FcDaisl3VrC739i9%2FgtETvIkQ9J6mjWDIp4lVnIdxAPwdDKcZ53bgkYZIMzMMqh7MMGOqUBNA8c9g%2Fub6NOu0rsHHXL%2FD3oBwM8Xwkpti68AdtDWQk7SwUNOBSwgKrQHCjyzN264DMxnSm6a2lrM9G5om%2B6RtSVu%2F7JSrTo0EaohhyFExaMRRNweZwgD%2FRTf6jt9%2F6zzl3vMDnivPGOsZ%2FPWz9XWdqYh7Dtc2AfaTBl1rI2kdKdeE8XWvkMwzOYBbIwD7kemORUxL34nSkWqYVpfM9PAAa0Qeri&X-Amz-Signature=726a4082b11850f7f629e62ae828b271d246795c8b7bdacc7b78b52501f1e17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
