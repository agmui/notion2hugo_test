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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RMEMCZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8VABcd0lAjHfKcbm3eu43C0k3JGm5G%2FdqRt%2BkRTB5%2BAIgOsJaGWKah9U0IgNuLO1Dke4dUSYL%2BEfncTZ%2BF1fkrh0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGq7SNJImnvGA9MHSrcA6dQVlVzprGNkLRRPmx0NIxkhM7GBN1%2BKu8TZp3eBIFeH%2Bvv2Z4rKpv7o2vMwjit3dFaAGylfR1ZqyWlW41su2Gv4GC0EPJYWobJsLM%2BTtS2Zxkrdpr%2Ff3lG85h%2B0QY%2BFO4l0YbBWP1W1EiKwjUDvT0RqY7lwXa%2BLKTTdvNa1tJaiOh7OZjpIWCzUe%2FXDcvOnoF9vORj%2BHnQoGbHt%2BH7VzX%2B9Ve0OSVv4a0QQ1z2wczY5GbgZCUQlGeyN4w3Qc04%2Fz0047QAAR5WxCiXNGb9Vffy%2FvsqqLrygpi0ysSiquFvPBguDoZEqQgbCIVAFWgpCeaOQOTsFehVm0q63jZ0ALE1muKvUBDofMhnod04drXRZM8pahxfV8aIctaag8SFURC8OSgHM4hTLMHJRXiyWlHQ0P0DgUtngYbHPt3%2F%2BGMzhOWF%2FOPIC65BBR6delnzQ8FlUhtfxm6XX%2BKGKH1ctTjdSmiC3WucafXXEeS4MGvNWm4fmxp3UC410FRwXxhv7yVklPo1J2mYxcjViO0JUz7anNNgdEEgXoKnnq767lwqlVEu9l6y7mQ7yBaSjs%2FK%2FLz9M%2BAZuXPSZDFiO8KODLzY7xRGytI4IzCQhESCHd%2BNOLQmU%2FeXr0OgyvzXML726bwGOqUBNIAG2fXZuUopw%2FW0pRrwxXB0FWr2p0JFd1RtbK9HKsH7MXzSkcicIn8xZ1oUH%2B%2FYduGZv8c3h9FDsymqAyoUleat0tStcJluFKWGvt9QsSZJCjrzGxJYP4W0sm6%2FNpz1llOPIxluZQwNKshLPGLKV%2F7B94UC%2FVeKhQvgSJ53k%2Fs120B9s2pgO9DW1E5WeexUAsVIbfQh5y4pC2TnfuCIVWn5y6RP&X-Amz-Signature=72506dab4a191f2fd80734ab9b64e1584f8ab8324be2574c2f3063f6e08561a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RMEMCZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8VABcd0lAjHfKcbm3eu43C0k3JGm5G%2FdqRt%2BkRTB5%2BAIgOsJaGWKah9U0IgNuLO1Dke4dUSYL%2BEfncTZ%2BF1fkrh0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGq7SNJImnvGA9MHSrcA6dQVlVzprGNkLRRPmx0NIxkhM7GBN1%2BKu8TZp3eBIFeH%2Bvv2Z4rKpv7o2vMwjit3dFaAGylfR1ZqyWlW41su2Gv4GC0EPJYWobJsLM%2BTtS2Zxkrdpr%2Ff3lG85h%2B0QY%2BFO4l0YbBWP1W1EiKwjUDvT0RqY7lwXa%2BLKTTdvNa1tJaiOh7OZjpIWCzUe%2FXDcvOnoF9vORj%2BHnQoGbHt%2BH7VzX%2B9Ve0OSVv4a0QQ1z2wczY5GbgZCUQlGeyN4w3Qc04%2Fz0047QAAR5WxCiXNGb9Vffy%2FvsqqLrygpi0ysSiquFvPBguDoZEqQgbCIVAFWgpCeaOQOTsFehVm0q63jZ0ALE1muKvUBDofMhnod04drXRZM8pahxfV8aIctaag8SFURC8OSgHM4hTLMHJRXiyWlHQ0P0DgUtngYbHPt3%2F%2BGMzhOWF%2FOPIC65BBR6delnzQ8FlUhtfxm6XX%2BKGKH1ctTjdSmiC3WucafXXEeS4MGvNWm4fmxp3UC410FRwXxhv7yVklPo1J2mYxcjViO0JUz7anNNgdEEgXoKnnq767lwqlVEu9l6y7mQ7yBaSjs%2FK%2FLz9M%2BAZuXPSZDFiO8KODLzY7xRGytI4IzCQhESCHd%2BNOLQmU%2FeXr0OgyvzXML726bwGOqUBNIAG2fXZuUopw%2FW0pRrwxXB0FWr2p0JFd1RtbK9HKsH7MXzSkcicIn8xZ1oUH%2B%2FYduGZv8c3h9FDsymqAyoUleat0tStcJluFKWGvt9QsSZJCjrzGxJYP4W0sm6%2FNpz1llOPIxluZQwNKshLPGLKV%2F7B94UC%2FVeKhQvgSJ53k%2Fs120B9s2pgO9DW1E5WeexUAsVIbfQh5y4pC2TnfuCIVWn5y6RP&X-Amz-Signature=b90a22b8ffc85908442100fcbb699776bdc60c1b70885bcb74c474eb3a1601d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
