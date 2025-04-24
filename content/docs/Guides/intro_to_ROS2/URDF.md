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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7R5623W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfFZcaUcThUQUCDsPD%2Bj1YKLybs5dvdlSbetAXbtC6ogIhAJzusiF5NrOJD5kTZ9LWHWqT9uOv2HGVA1S2CiJFN%2BtTKv8DCB0QABoMNjM3NDIzMTgzODA1IgzMDXMJKwcc%2FB1USUIq3AMX7DaQae91t%2Betr%2BEDdKLhFt7zOqSg5xlNP2GcHPPQa5bY2AmNPI8nLzV7SL2sguOy6NOihTr8nCtnQq5oR0myyzwxiscuYFF98K3WVywisYWpC%2BE%2Fdy%2F0v166Li0MVjH%2FptDTYKhgdYx71lNyxpbTHEL%2FsUY6oh4684BJnOQOD4CUoRQLjbK9TFGF62AobK2kuql0NpMI3SBIJLtQdWwgCvAkA52bbRl7phzYXniTt8zfpKn83Xe59r%2B%2B8rW7%2BYBAm38X6UiJOkMHaod6lZIyh3NW8Qt7WuHPA%2B3tYDvGzmFZmXHCSz0%2B0FC%2F%2Br1FacEnj70ylacLq%2BBGzlwz3UgymmRDcEFOG28DTNc5z6po6v8AEvSFieQUYtuXd7dSr4%2Fr3UqqiZ7akNBqQBNzkCC9XmajnO8xP7rcupWgwrt4VArvkIxrdMhEKlTd3w8OCAyx6QlbgrNo8L589jJAhMtQQqIH6e9ggr0XMlyMYciQvPfOKJSvIbMY5AyJWmycV6y65oqT1PVJpQLW%2Ft4Pd%2FTgmuZ5SCPp1bGHWQbl4bBMLHpca4ph2Ct4G4tp2rIXyjLUmrHcc7zanMz2rwXgEXEP7r%2BKN4HdUgb76aqYA9ENtt75%2F3XS7P%2FkwixIxDC9pKrABjqkAWSCYSwj9N4A0pLMPU82vnvjjLPpo2iGkKFlzuYeXvEtm%2FYw%2Fmpx4upF3woV0Zjv39vEFEjqTp45jtpG7is7Qn2BRBHHwV4yxHO2lA9HR0TBm78%2Bfdcrps%2B%2FW2PPCy1T2zzWnkYqgK9e5aiQCsdbDGbxAcjd1zQbBIe14qKDMuzKNNhouy5ebDckjUYOHzn9mRezxhZTaCqzkYXvx2Tbi3hy%2BrDr&X-Amz-Signature=5036c1e87c2ff8854fceb90776a682bde652edad154bf984171bbfaeff05e720&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7R5623W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfFZcaUcThUQUCDsPD%2Bj1YKLybs5dvdlSbetAXbtC6ogIhAJzusiF5NrOJD5kTZ9LWHWqT9uOv2HGVA1S2CiJFN%2BtTKv8DCB0QABoMNjM3NDIzMTgzODA1IgzMDXMJKwcc%2FB1USUIq3AMX7DaQae91t%2Betr%2BEDdKLhFt7zOqSg5xlNP2GcHPPQa5bY2AmNPI8nLzV7SL2sguOy6NOihTr8nCtnQq5oR0myyzwxiscuYFF98K3WVywisYWpC%2BE%2Fdy%2F0v166Li0MVjH%2FptDTYKhgdYx71lNyxpbTHEL%2FsUY6oh4684BJnOQOD4CUoRQLjbK9TFGF62AobK2kuql0NpMI3SBIJLtQdWwgCvAkA52bbRl7phzYXniTt8zfpKn83Xe59r%2B%2B8rW7%2BYBAm38X6UiJOkMHaod6lZIyh3NW8Qt7WuHPA%2B3tYDvGzmFZmXHCSz0%2B0FC%2F%2Br1FacEnj70ylacLq%2BBGzlwz3UgymmRDcEFOG28DTNc5z6po6v8AEvSFieQUYtuXd7dSr4%2Fr3UqqiZ7akNBqQBNzkCC9XmajnO8xP7rcupWgwrt4VArvkIxrdMhEKlTd3w8OCAyx6QlbgrNo8L589jJAhMtQQqIH6e9ggr0XMlyMYciQvPfOKJSvIbMY5AyJWmycV6y65oqT1PVJpQLW%2Ft4Pd%2FTgmuZ5SCPp1bGHWQbl4bBMLHpca4ph2Ct4G4tp2rIXyjLUmrHcc7zanMz2rwXgEXEP7r%2BKN4HdUgb76aqYA9ENtt75%2F3XS7P%2FkwixIxDC9pKrABjqkAWSCYSwj9N4A0pLMPU82vnvjjLPpo2iGkKFlzuYeXvEtm%2FYw%2Fmpx4upF3woV0Zjv39vEFEjqTp45jtpG7is7Qn2BRBHHwV4yxHO2lA9HR0TBm78%2Bfdcrps%2B%2FW2PPCy1T2zzWnkYqgK9e5aiQCsdbDGbxAcjd1zQbBIe14qKDMuzKNNhouy5ebDckjUYOHzn9mRezxhZTaCqzkYXvx2Tbi3hy%2BrDr&X-Amz-Signature=c374d3020da3bbef5fdafb660efaf04c85989b93c5b55e020ee628925c556923&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
