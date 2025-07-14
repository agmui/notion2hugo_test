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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZDN4BV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDw0ITdvQ5zl5JDFR%2BJ1zIgVDwnXr2Rp3W%2Fl%2ByERLjkMwIgKUlXJHX00ToD0oDvNwtONeSbuOKRMdJ0k2k5kBvzdMIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKWbSAxqKNvCVVzWFircA92ZMWeeq59Gxx46UCauGt7q7%2FXcqh4RS9LmOAbEv4m57xf9fcIxmXwR6cfLVaEXzm5o0Ixc8AOO1TxKFTkl9QraQbGCw4EXjvZ4PXHc2sulbKjG7Avm3W2z0bd5cuWTouTVhEd0h%2BY78k14wRMHeKWhP%2F2MK%2Fx4PSdUTjnfKTngUp78Mt6GTsM7BMAsV93DlzTI%2By1O22bpYUmbtDK1dOEoR3cW0dH03lxnd1StyWPrSYM57SUbCnPOxoQ9DiY78Hq5F%2BGUYtJDpL9Tm%2FBpkUi4PLyAxfVPn6A6E1bRrheoYa%2BzNV7vq7oVf9B0p3GuG2UnDwAh3WiHXYHGDtIi%2F7BmwvSZLwect3853gqFxTYE5Qjd%2BzzoMGcRjzpMC4qNHlrpoXdJbY0DElvwMgSqfaqO1PKUfqO8e09PsgxG2iCLvCbfIPfApVVwGEMycDkh%2BWb0RD0VuvlXjam73FvDLtS7nLupiqrF7eueXlpCep6AnhUEqB9kFp1H3bfqtZmI9NJpxYXlBsfWibiXeUHQUn5UuXb4AUdewdSyVL8Uxmv34H1kBVjmgDvhXEdlIuEKO6HL2gsvGGqOoD1PtkaN%2B8f0sixHwrANvLsd9LRwwF9ok5W7Rbn75PfzGHp8MO2E1MMGOqUBc40X9NOU2LhbnvZe7W%2FUVaj8tDz8hXl6oUL83%2Bgo5J4OPWl%2FwErTLMMpPUeui8UyVOJxGAZdFvNs3zd7YCyd9WEMzEYfIqxjumc25sS8aqxvNFOcd17nFzl%2BkwvypX6j7LsbvPEgq7N3jM30Y%2F2ViNiPtnvkHoPotQfsJVM1tNeQxMYWPhEAxiyaMqTczldG1bJfjBAOc9jCuqBjR577pGspihD%2B&X-Amz-Signature=3ab634667cf5c3b4aa953914e8f16d6735757d978ea84bc7321fccc121c0afec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZDN4BV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDw0ITdvQ5zl5JDFR%2BJ1zIgVDwnXr2Rp3W%2Fl%2ByERLjkMwIgKUlXJHX00ToD0oDvNwtONeSbuOKRMdJ0k2k5kBvzdMIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKWbSAxqKNvCVVzWFircA92ZMWeeq59Gxx46UCauGt7q7%2FXcqh4RS9LmOAbEv4m57xf9fcIxmXwR6cfLVaEXzm5o0Ixc8AOO1TxKFTkl9QraQbGCw4EXjvZ4PXHc2sulbKjG7Avm3W2z0bd5cuWTouTVhEd0h%2BY78k14wRMHeKWhP%2F2MK%2Fx4PSdUTjnfKTngUp78Mt6GTsM7BMAsV93DlzTI%2By1O22bpYUmbtDK1dOEoR3cW0dH03lxnd1StyWPrSYM57SUbCnPOxoQ9DiY78Hq5F%2BGUYtJDpL9Tm%2FBpkUi4PLyAxfVPn6A6E1bRrheoYa%2BzNV7vq7oVf9B0p3GuG2UnDwAh3WiHXYHGDtIi%2F7BmwvSZLwect3853gqFxTYE5Qjd%2BzzoMGcRjzpMC4qNHlrpoXdJbY0DElvwMgSqfaqO1PKUfqO8e09PsgxG2iCLvCbfIPfApVVwGEMycDkh%2BWb0RD0VuvlXjam73FvDLtS7nLupiqrF7eueXlpCep6AnhUEqB9kFp1H3bfqtZmI9NJpxYXlBsfWibiXeUHQUn5UuXb4AUdewdSyVL8Uxmv34H1kBVjmgDvhXEdlIuEKO6HL2gsvGGqOoD1PtkaN%2B8f0sixHwrANvLsd9LRwwF9ok5W7Rbn75PfzGHp8MO2E1MMGOqUBc40X9NOU2LhbnvZe7W%2FUVaj8tDz8hXl6oUL83%2Bgo5J4OPWl%2FwErTLMMpPUeui8UyVOJxGAZdFvNs3zd7YCyd9WEMzEYfIqxjumc25sS8aqxvNFOcd17nFzl%2BkwvypX6j7LsbvPEgq7N3jM30Y%2F2ViNiPtnvkHoPotQfsJVM1tNeQxMYWPhEAxiyaMqTczldG1bJfjBAOc9jCuqBjR577pGspihD%2B&X-Amz-Signature=af2ccf3785eabcd398a6ba1910289c172d442356697bad243f7ea3cff680d33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
