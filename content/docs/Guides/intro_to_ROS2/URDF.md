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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLBI3P5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FPikzZlJrNEColpLO2xq4o2IblQ6oGCIYQbO940sB5AiEA0m%2B1zqwSqQMiqh8gTOAkxI2RpnOlXMVPltGk%2BfrkyDwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAUT%2BnlEmpIZtY7NPircA%2FcuQOHA6mRM03r7mWk8S0%2BDcz8a8ez7Ut9d2G3fVFjmzQtVkCrv%2BKBphNNFk8rP1r7sqYFHyOQ3vPShqphwFXDlJ%2BZxxjvb89RJVI5XOZsjpz48yZ%2FwR6nrqUyiprlXeXA%2FR8I72txAqarxFKXP6ivNYUXMekNp9Cin4X5ggpIjYxX9lSbRstyCYefUfUzhLECGdExLbf8qKf%2FNFeF91cjLTJZ0wRVEjmSSKdM%2FgYVem%2FBbPXfeOYlqfM7meCbc63ZWz2c6NP9onyca2wzWcxyspJ5HAk3Hi1z36W9Smb2NXliFusJUg%2FHij1WIk34QpQF98%2FIi0kLzT8KRoKCZ4RiRP%2Bvu42ykjclsNNyuncH90UNOkaw4LWEo3zwUQVMHC3ePfNWH6nKTQSUCGISuA9UZCPUyGk2fjgwStUV1O4tlUPiorz9rFU95izhRLE7GMho5BRiJ3WKU%2Bz3eiRX3sjG5XJCFEOkgduEyihCv%2Bh6AbnxQ5YZmQSG2bB%2BHp8SE6Sp09sg5UHRBdz%2FS9Rh%2F4MU2bCiwPl12K00fJ0djhYGbnRjEMhpdB2z5mxL202ZKSntFXVhWY%2BaTd9JmPhwGvFe2BM8w5%2FTjJovnTAFLO9fDtVYnjfXm6kqdBgQ0MIeil78GOqUB3jr1auVcAUDFKmJmZJOQfdTExj0oAZR2UKx0ETDjtYeEA0%2F3tXLd3IP3YXrYlTGTs%2FmrQaX8rW3mZUB41SLNY2OSit50WfCgNlSiuQonnzUWhaiqpmUHvLlpoxJ9x%2FiTdnnsi8SS1itc%2FllTPdGF5PW7K%2Bm6DlFDk9w7PWVpcBC3o0YTLGklLzkaR41ZGlKDBEgCEfBqd8uKwU0L9rpst6yd9U19&X-Amz-Signature=271fea95254f524d966643e27e68e84b20810c5460b069a8f79eb31ca84aec61&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLBI3P5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FPikzZlJrNEColpLO2xq4o2IblQ6oGCIYQbO940sB5AiEA0m%2B1zqwSqQMiqh8gTOAkxI2RpnOlXMVPltGk%2BfrkyDwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAUT%2BnlEmpIZtY7NPircA%2FcuQOHA6mRM03r7mWk8S0%2BDcz8a8ez7Ut9d2G3fVFjmzQtVkCrv%2BKBphNNFk8rP1r7sqYFHyOQ3vPShqphwFXDlJ%2BZxxjvb89RJVI5XOZsjpz48yZ%2FwR6nrqUyiprlXeXA%2FR8I72txAqarxFKXP6ivNYUXMekNp9Cin4X5ggpIjYxX9lSbRstyCYefUfUzhLECGdExLbf8qKf%2FNFeF91cjLTJZ0wRVEjmSSKdM%2FgYVem%2FBbPXfeOYlqfM7meCbc63ZWz2c6NP9onyca2wzWcxyspJ5HAk3Hi1z36W9Smb2NXliFusJUg%2FHij1WIk34QpQF98%2FIi0kLzT8KRoKCZ4RiRP%2Bvu42ykjclsNNyuncH90UNOkaw4LWEo3zwUQVMHC3ePfNWH6nKTQSUCGISuA9UZCPUyGk2fjgwStUV1O4tlUPiorz9rFU95izhRLE7GMho5BRiJ3WKU%2Bz3eiRX3sjG5XJCFEOkgduEyihCv%2Bh6AbnxQ5YZmQSG2bB%2BHp8SE6Sp09sg5UHRBdz%2FS9Rh%2F4MU2bCiwPl12K00fJ0djhYGbnRjEMhpdB2z5mxL202ZKSntFXVhWY%2BaTd9JmPhwGvFe2BM8w5%2FTjJovnTAFLO9fDtVYnjfXm6kqdBgQ0MIeil78GOqUB3jr1auVcAUDFKmJmZJOQfdTExj0oAZR2UKx0ETDjtYeEA0%2F3tXLd3IP3YXrYlTGTs%2FmrQaX8rW3mZUB41SLNY2OSit50WfCgNlSiuQonnzUWhaiqpmUHvLlpoxJ9x%2FiTdnnsi8SS1itc%2FllTPdGF5PW7K%2Bm6DlFDk9w7PWVpcBC3o0YTLGklLzkaR41ZGlKDBEgCEfBqd8uKwU0L9rpst6yd9U19&X-Amz-Signature=48915d184c95ce0834becf090b8a08771fdb8b3a752fee925196a471a4c88a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
