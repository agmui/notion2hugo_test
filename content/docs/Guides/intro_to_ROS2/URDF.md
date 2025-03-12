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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCJN7EQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDhZXsEuSKGKEo4IvmlLoZGlydBvzClBw66bKaTqoQLCgIgCs6Hu2qQTuXzVzu8YAjtA71kNnkatJWjgHmiEbLpcsMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMrpSAmC6msLnKz%2FircA2ErpO5LJ2oWsJmikNxGddEP8574%2B%2Fz3OaW3EpdrwUtufrN2S8ym01wSYSaUxH60vFTgwpNAbOSRUTMBPwYN4CZ0q3qyCPLscvoek7FwPhPijsBmXeWH8VSY254qC0GuWT%2FfjAPgTax9cZ2K2wfoP2Hd5QGnR1hyhCBw2pLYKzzXUvYOjMtnvmDfkugDeNSec9OV4GrcddKsWVM%2FSMpRe%2F8ze%2F5TDtW6oeb4uKTYgPEm5kZn7l89oD0PxJub47SPu4CfAtff8v4mjwD73UXG12XOP9mRaYWLJVZHSiCsj9NsSjDdrpXi%2BZnKSNiesmSBFBvyKSEvAs0t4whLuyLi%2BN%2FdJ2VxDME8B%2BObSu5JFxyoRpAccJ1sN%2FJpoWyHtDt6qrn%2BDmDhB4M%2Bf5guGjvwifpjzk8e1ow6Ut1laPTnt0Wvs4WB5vqfSyt%2FYdH%2B6eebRrLwqXkSGYaupR4STsB5snm9uSxCbzLxHKi4scM7LbOgKNuAen4Q7IbK5801SBReih1MgPiKW195rrxPM69jp6gvkHlGAqequWMztnoYt%2BMHSV7uqzZRSGKpmt86sjahI1o%2F%2BDOLuiEZvKWnb2mGeNHzXUtL1Qsrl19HcpRpGjwRxKrHKKBHla74umKHMIiiyL4GOqUB%2F%2BEqTsYdN1zX8%2FPLrwYVNogzAofQrIs5FdX76JHHwx%2B1K8YNmVn0e4VeRKd1F0tcB07alV2A8uGTlu8GMUQAMdQkDx2itRQc8BivpM6xnYR8GJQYGUVUJZBc7nS7aC9GzCRCXsXJKU%2FnGzM8lfAfF4HoP7JRJKEiS1G7UMlZlxwy71zfW%2FsjI7WMlAmXpsbuxNxV6cGd6udVnTKT1qfAPH6DuvyW&X-Amz-Signature=6010b2982f727909571d1ace4627f250b8b09b8dd3e81c024fac9a30f9625155&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCJN7EQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDhZXsEuSKGKEo4IvmlLoZGlydBvzClBw66bKaTqoQLCgIgCs6Hu2qQTuXzVzu8YAjtA71kNnkatJWjgHmiEbLpcsMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMrpSAmC6msLnKz%2FircA2ErpO5LJ2oWsJmikNxGddEP8574%2B%2Fz3OaW3EpdrwUtufrN2S8ym01wSYSaUxH60vFTgwpNAbOSRUTMBPwYN4CZ0q3qyCPLscvoek7FwPhPijsBmXeWH8VSY254qC0GuWT%2FfjAPgTax9cZ2K2wfoP2Hd5QGnR1hyhCBw2pLYKzzXUvYOjMtnvmDfkugDeNSec9OV4GrcddKsWVM%2FSMpRe%2F8ze%2F5TDtW6oeb4uKTYgPEm5kZn7l89oD0PxJub47SPu4CfAtff8v4mjwD73UXG12XOP9mRaYWLJVZHSiCsj9NsSjDdrpXi%2BZnKSNiesmSBFBvyKSEvAs0t4whLuyLi%2BN%2FdJ2VxDME8B%2BObSu5JFxyoRpAccJ1sN%2FJpoWyHtDt6qrn%2BDmDhB4M%2Bf5guGjvwifpjzk8e1ow6Ut1laPTnt0Wvs4WB5vqfSyt%2FYdH%2B6eebRrLwqXkSGYaupR4STsB5snm9uSxCbzLxHKi4scM7LbOgKNuAen4Q7IbK5801SBReih1MgPiKW195rrxPM69jp6gvkHlGAqequWMztnoYt%2BMHSV7uqzZRSGKpmt86sjahI1o%2F%2BDOLuiEZvKWnb2mGeNHzXUtL1Qsrl19HcpRpGjwRxKrHKKBHla74umKHMIiiyL4GOqUB%2F%2BEqTsYdN1zX8%2FPLrwYVNogzAofQrIs5FdX76JHHwx%2B1K8YNmVn0e4VeRKd1F0tcB07alV2A8uGTlu8GMUQAMdQkDx2itRQc8BivpM6xnYR8GJQYGUVUJZBc7nS7aC9GzCRCXsXJKU%2FnGzM8lfAfF4HoP7JRJKEiS1G7UMlZlxwy71zfW%2FsjI7WMlAmXpsbuxNxV6cGd6udVnTKT1qfAPH6DuvyW&X-Amz-Signature=869f1f40fc3cf7ab3afa7adf76145fd5426d301b362db43788cb6236d5c575f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
