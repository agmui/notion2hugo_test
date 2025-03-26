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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SVNVOV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9DVxgsfBmzL23hXYRKW4lHCvDt%2BTxAlfovTebFfSGuAiEArL%2Ff0oQ%2FQq1K1xgF%2F8EuXVrQfTf1w7PNjurCg8SDjLcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHOiP3KiTCoaFUkmyyrcAwrG%2Ftw1%2Fh1DAQXKA49SL8riCH2xjD2sYvcKJ07udng8fMBauQkLd%2FNves1T6JbMdKpPdjlDu7i5kVj8cFOXWelAeIO7NHHe53Sq3xBILe5uxwg7cZuofUSQxtrk0DtKgPUrfeDmfNyOHlIeyLHehp7Ob5Xw3gYbUXTs5yf4I0zlX%2FFjGUifTluN0CqvUm9Y2xsAfmoObyiKqKQy%2FK66oDTHz4E7%2B4QmoWU3sMLk25QjIQw5Xyt2lv0hyfBP%2FCov5DXqxA2phqNArBxjpr55yuwYIFRzGKJUEF0Wl0%2F30PQq7%2B8jXdQUWq2DlVOLTFhUQE5mOermR%2F1xB0GxCoEshmc42J0WZJdKH6x14Ee8w4C7fkrZb2j%2FWzkFxyTyuNEJtf0mOFoG8PUjo%2BXeis7QC3popboN47WqiUVuBn55AuudiSERH%2FnU91kmMTo6zrxQjQy5300F2FcRwJfhtjlGPp9VOpqdYA2Rd5zo%2FxruhHZYQWrPSAhbE%2BRu1mlRWHw84m35oUtDCdilUeAnfGBUTI31DcXNapuIRomnR5o6237X9THivLPM8RkYuLiL41DC2FEhxlTEu8CxHaQ%2FkldEL%2FSEutliVx5Bfy9yBz8Jxyj%2BJ7%2B3cqOkcgWr3b2IMJGVkb8GOqUBWDZy6B9ZtPj5MGhrVM2hjKDcdC%2BkEV3wIga02DHlIKQM448BfUu0FIOUuaDo5N9uUiTtzkMUCb9jzMfg6OWD1aOTfJRnzf6kjye9b6xZ2Q9p5Ewk2tatyyylf2viBFXO9r2OzTdbIuRIqHPfeqn3nB3pUKal5Hzn2AamQZ2SJO2u%2BYXUVrPDiIGWgiQrecXKYZ35EBnYbUxIgJWh8l1X5Q%2BpV6u2&X-Amz-Signature=c950bbd0bf169b0c89cabc0091a9328b2abbf35b273aa00fc32b84db0021cad7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SVNVOV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9DVxgsfBmzL23hXYRKW4lHCvDt%2BTxAlfovTebFfSGuAiEArL%2Ff0oQ%2FQq1K1xgF%2F8EuXVrQfTf1w7PNjurCg8SDjLcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHOiP3KiTCoaFUkmyyrcAwrG%2Ftw1%2Fh1DAQXKA49SL8riCH2xjD2sYvcKJ07udng8fMBauQkLd%2FNves1T6JbMdKpPdjlDu7i5kVj8cFOXWelAeIO7NHHe53Sq3xBILe5uxwg7cZuofUSQxtrk0DtKgPUrfeDmfNyOHlIeyLHehp7Ob5Xw3gYbUXTs5yf4I0zlX%2FFjGUifTluN0CqvUm9Y2xsAfmoObyiKqKQy%2FK66oDTHz4E7%2B4QmoWU3sMLk25QjIQw5Xyt2lv0hyfBP%2FCov5DXqxA2phqNArBxjpr55yuwYIFRzGKJUEF0Wl0%2F30PQq7%2B8jXdQUWq2DlVOLTFhUQE5mOermR%2F1xB0GxCoEshmc42J0WZJdKH6x14Ee8w4C7fkrZb2j%2FWzkFxyTyuNEJtf0mOFoG8PUjo%2BXeis7QC3popboN47WqiUVuBn55AuudiSERH%2FnU91kmMTo6zrxQjQy5300F2FcRwJfhtjlGPp9VOpqdYA2Rd5zo%2FxruhHZYQWrPSAhbE%2BRu1mlRWHw84m35oUtDCdilUeAnfGBUTI31DcXNapuIRomnR5o6237X9THivLPM8RkYuLiL41DC2FEhxlTEu8CxHaQ%2FkldEL%2FSEutliVx5Bfy9yBz8Jxyj%2BJ7%2B3cqOkcgWr3b2IMJGVkb8GOqUBWDZy6B9ZtPj5MGhrVM2hjKDcdC%2BkEV3wIga02DHlIKQM448BfUu0FIOUuaDo5N9uUiTtzkMUCb9jzMfg6OWD1aOTfJRnzf6kjye9b6xZ2Q9p5Ewk2tatyyylf2viBFXO9r2OzTdbIuRIqHPfeqn3nB3pUKal5Hzn2AamQZ2SJO2u%2BYXUVrPDiIGWgiQrecXKYZ35EBnYbUxIgJWh8l1X5Q%2BpV6u2&X-Amz-Signature=8b8200ce4a647b45d28a52db2d3e2497e001acd94912aebb649cb4259fc4ed2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
