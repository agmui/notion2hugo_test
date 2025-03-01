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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMD76EH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICciYyvOfPD%2Fiun1XsyWx%2BZB88J%2BI%2FdvKecZKhs5CPyDAiEAhdpaeT7Ef6HZt39OiUnNnnEhQOOxlRD%2F4d8eOIbPRdkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuyYgNGoHzxLoj%2BICrcA2lGPqMH24fYgfXrCIGqIRkr8piFfCyFR%2FE7sqYekZioHxQSatQgdwhYHuKoJS9xTEZUG4OBrl20Y4hfDMtRt5lh9yYJl%2FpnAmVKATozLD9p1UdMrumB1Ae%2Bc43Ow%2BS9nW2hCTdScC9%2FoO6hwQu%2Fp%2BPoE6LeDlt9jlt61duOLrGfdYICsuu6RzG3n3VxNWtFOlrAyNjbbgP1OG9g6%2Buzn9ly65GZilO0%2BNmtPXkAcuof7HOa43v0ZcaoLu5HAzRSGhV41QmGYTt3VRF2IGdp355Q1ljZIMdyVM1hnRaH9Q%2B3dhEUGyiTsWR0Kbr3tqNiKGN62ryvvtU9c7NLY%2FNSvL1X7BLvphoJXWl8prv5V%2Bx5m1taAnRIVxTQErcnYKQClRRIRVjLgk2bgaE7Ij%2BJvYBn75GB4tq8Gg%2FYzlL8sOHF%2F%2FSjVStnCU%2FNR8n416EAtrV3AAqky1ScmwczjvR7v%2BLYT%2Blb5RPgsNCBd08CaHw1yDO%2FiWDaTlH9vA0B8WnhuLWU5XJVh%2B0E01oSOIk%2BBEduTGVKd3dBKxccXzJVV913rlOCANOaORiiFPV8X8%2FxjSeLrqUbE%2BmVd3GnzCT7ZxwDOk8eHJAfjWw9yFiAKWScWPqJuyDCPlRYvmj4MOuQir4GOqUBK8eaDaknzlRsSNNeYswNlYmeUPq4inaJ3%2BSdbuc85YO9dk6PtUOarhJhDtg4P2cuYmgnZyuKbb%2BECjzlPSCZh7q98Kf3CrQZewN8OLerbYqbyAZMOzaHf5rXQXkAKn5WtxrUFsnPF%2BM6vhte0GQdUoMH97h6ghhNQrexqLjt%2Bbwekj%2FSD84W91V0d5qqgftrtIWnQt8dWjb7dUvoK4Bexxdx1UxS&X-Amz-Signature=9ba7d3270544dc3db63494e88b7222e67e5aa9729730e31831552db20c36ffe3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMD76EH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICciYyvOfPD%2Fiun1XsyWx%2BZB88J%2BI%2FdvKecZKhs5CPyDAiEAhdpaeT7Ef6HZt39OiUnNnnEhQOOxlRD%2F4d8eOIbPRdkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuyYgNGoHzxLoj%2BICrcA2lGPqMH24fYgfXrCIGqIRkr8piFfCyFR%2FE7sqYekZioHxQSatQgdwhYHuKoJS9xTEZUG4OBrl20Y4hfDMtRt5lh9yYJl%2FpnAmVKATozLD9p1UdMrumB1Ae%2Bc43Ow%2BS9nW2hCTdScC9%2FoO6hwQu%2Fp%2BPoE6LeDlt9jlt61duOLrGfdYICsuu6RzG3n3VxNWtFOlrAyNjbbgP1OG9g6%2Buzn9ly65GZilO0%2BNmtPXkAcuof7HOa43v0ZcaoLu5HAzRSGhV41QmGYTt3VRF2IGdp355Q1ljZIMdyVM1hnRaH9Q%2B3dhEUGyiTsWR0Kbr3tqNiKGN62ryvvtU9c7NLY%2FNSvL1X7BLvphoJXWl8prv5V%2Bx5m1taAnRIVxTQErcnYKQClRRIRVjLgk2bgaE7Ij%2BJvYBn75GB4tq8Gg%2FYzlL8sOHF%2F%2FSjVStnCU%2FNR8n416EAtrV3AAqky1ScmwczjvR7v%2BLYT%2Blb5RPgsNCBd08CaHw1yDO%2FiWDaTlH9vA0B8WnhuLWU5XJVh%2B0E01oSOIk%2BBEduTGVKd3dBKxccXzJVV913rlOCANOaORiiFPV8X8%2FxjSeLrqUbE%2BmVd3GnzCT7ZxwDOk8eHJAfjWw9yFiAKWScWPqJuyDCPlRYvmj4MOuQir4GOqUBK8eaDaknzlRsSNNeYswNlYmeUPq4inaJ3%2BSdbuc85YO9dk6PtUOarhJhDtg4P2cuYmgnZyuKbb%2BECjzlPSCZh7q98Kf3CrQZewN8OLerbYqbyAZMOzaHf5rXQXkAKn5WtxrUFsnPF%2BM6vhte0GQdUoMH97h6ghhNQrexqLjt%2Bbwekj%2FSD84W91V0d5qqgftrtIWnQt8dWjb7dUvoK4Bexxdx1UxS&X-Amz-Signature=f521047ae5630c82e05ef84a3a7faa329a795f610e160606e87075d0108b1eab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
