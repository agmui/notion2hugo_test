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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKJ4ZVA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdGjPhrbrgPM5hcxMOMFYbJZHDOI2BEz1WMXyd2BX7dQIgCmKTkCf%2FXVcnT1OXFIhLjH1bdkmb%2BTshjDBgQzvx2WUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDI8zXHQL%2FNV38zlh4ircA7qdHXCrap%2B5AhxtskuyN4KvznhfChQxmAuePKqNavXKD2KSPcKnO2MiK3jnQoLvyCbMgNSKirQ4s%2BvDXVIC6CvLpQp4gt3wm28W5r%2FcIrvbY3qI3mG5w9oknCOGv5LfB2bbKLhse6fZ9HNFG4AqB3Yu4t9srSWS4FrO98yBryZpF079jfaGmyNvsLvd9DTc1GT3ULbyVBzkuTeGWhUvy9YXa3bB7yGthCwaiMn49oDPeST1No%2FRNIjbQ8bsmX9ddu185AmdKgzlZC7OqIz%2BFjvm007gfpfyRoC8xj26dJYzpqiWsFsBtTZJBWJfW9WF8Jz43dG7CYhCipR6cd6Dw4eLI%2Fse7Nf03hTLI2jwX%2FelPV4EBEjfdj5ByjwTqcUJV2c0o3slYt0zm6wESFxBbAlUVcUgAH2RQxrk8TZMYV%2B05ddbEn8GJ%2FehR6elUAfUkZvBchxo35fAd6Yzdm5HJIYtbmzCO1KITe6HnDO7%2FlafXxNcq2nwHWeHN2zCN5GkNyueC1IDZehRtaooWXDCiLdJ0EIhxLwe1MU3CQvFHpscRZRzv7E1WOkbq0EokVMK5r%2BF0CN7i5jacgSL7oVuZ4VNZJPxoGGA2dnqkvEhggGwrrTQ9LEJmpzXydVQMJTlrMAGOqUBeIN4YN2PsMBZyh6UXVE%2FEK%2BSgk2OYCsdxhhQ%2FlTcornfQ%2B0J3YxwNmHVQNkoINEjHlxa0hl8LC19b1UhvK3w9R2lKz0X9LeFv2gq2YdGylWzLsnO3BUwOIeooLi63oYm888HYQmnoFpoIu54XUWEWClHbET9pMCzl9N%2FUffP90vGom5B7C6d8%2Bm35Qm7TSwLbobm7BWkxwugAMHYWwiTQILXbLPg&X-Amz-Signature=bbd4d105c9cdbaa8d41c5d29745550e0b002fcd81e9b1a385601e488e6c26248&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKJ4ZVA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdGjPhrbrgPM5hcxMOMFYbJZHDOI2BEz1WMXyd2BX7dQIgCmKTkCf%2FXVcnT1OXFIhLjH1bdkmb%2BTshjDBgQzvx2WUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDI8zXHQL%2FNV38zlh4ircA7qdHXCrap%2B5AhxtskuyN4KvznhfChQxmAuePKqNavXKD2KSPcKnO2MiK3jnQoLvyCbMgNSKirQ4s%2BvDXVIC6CvLpQp4gt3wm28W5r%2FcIrvbY3qI3mG5w9oknCOGv5LfB2bbKLhse6fZ9HNFG4AqB3Yu4t9srSWS4FrO98yBryZpF079jfaGmyNvsLvd9DTc1GT3ULbyVBzkuTeGWhUvy9YXa3bB7yGthCwaiMn49oDPeST1No%2FRNIjbQ8bsmX9ddu185AmdKgzlZC7OqIz%2BFjvm007gfpfyRoC8xj26dJYzpqiWsFsBtTZJBWJfW9WF8Jz43dG7CYhCipR6cd6Dw4eLI%2Fse7Nf03hTLI2jwX%2FelPV4EBEjfdj5ByjwTqcUJV2c0o3slYt0zm6wESFxBbAlUVcUgAH2RQxrk8TZMYV%2B05ddbEn8GJ%2FehR6elUAfUkZvBchxo35fAd6Yzdm5HJIYtbmzCO1KITe6HnDO7%2FlafXxNcq2nwHWeHN2zCN5GkNyueC1IDZehRtaooWXDCiLdJ0EIhxLwe1MU3CQvFHpscRZRzv7E1WOkbq0EokVMK5r%2BF0CN7i5jacgSL7oVuZ4VNZJPxoGGA2dnqkvEhggGwrrTQ9LEJmpzXydVQMJTlrMAGOqUBeIN4YN2PsMBZyh6UXVE%2FEK%2BSgk2OYCsdxhhQ%2FlTcornfQ%2B0J3YxwNmHVQNkoINEjHlxa0hl8LC19b1UhvK3w9R2lKz0X9LeFv2gq2YdGylWzLsnO3BUwOIeooLi63oYm888HYQmnoFpoIu54XUWEWClHbET9pMCzl9N%2FUffP90vGom5B7C6d8%2Bm35Qm7TSwLbobm7BWkxwugAMHYWwiTQILXbLPg&X-Amz-Signature=2707591a4c059c1d69a36c071e5b33764b1a4d8daa8170d5ee34a60669f336a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
