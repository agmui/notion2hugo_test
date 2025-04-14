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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFH7JPSB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FAoH8owOAsfzBdPs4AKcmsaKbThnPkvIWI1afAorxNQIhAO1eMvOQb%2BsZLY38q4vFYiHEBPp223fqtBQIkmD1dD8uKv8DCBcQABoMNjM3NDIzMTgzODA1IgyEi%2Bd6g78%2FAffjHoUq3AOWnEW2JEIYQCCkkNmZo5%2F962ls6Ji8OJ4nRRB2wRMIg1EIGAdo3OoN7Hzc96PtcCIcxM8AfKd5y2vk7qrtUe28CxAUm6QQcegI5ry%2BiRw24xwBFNoSZNZE%2Fb9VljomSHAFeiPfcplqhwbItoMQTnlGEH0UfrpmM%2Fl0vb65SSarvVNrJ1BuXRBPDdNIeHM7NV%2B9hveRbucTGsQJZbS%2FtAYnbQ0vBALKzpWWkm5wZyjqiZpayQSS4vTr7eQj5sbJzku%2FlPXU9ReIyVAPgzQQs9kN8Z8ZKfih4JLZQq90es3KOrAFdVOynU2lpSEAmyXS4nu8HX7mwXIeDMX9ttw3uXwTvP6xefkMhA5FoyOjqCT9wOki7HYrmuEB92SvJgaTuhePJ1ZSrS%2BC2FYsgrpDN2EBOHeXj9BG6kO8QSGJ4xDQ7jsmu50pFMVixTxIXyRUDA9EXakc9x8D51F6XRLY7MKq0%2B7SsOQv8Pob85lEmIKVLKoTW%2Frj%2FIgn3vvjM6o5yWkbPp%2BatJRkaX7%2BKz0LApbxkiYtWnbeJ58FbYMogfcET3X9U3uVJA%2FrQc31AELKUI%2FIzqs2ig%2FtPuy38oL%2FuFPeVsqaozempPK5aFGc2kVgCAsINXhLHDRUf2x4IjDIqPS%2FBjqkAbh2BZTRbjZUhI8iddmEP0gLQY1xrlGTIBVqqNLkdWhHxdh5K7x9mF%2FC48rte3J827jZK1Bwin2MNc%2F2Gn8R81jC8MJHttX%2Fy0mrvdCZhqPcflmGGucMLs1RqGz%2BD1G5%2FvTExy1wIb7D1SKhn8yU0nKnxlE8MCZ0tHC%2BpyxhjPexN%2BRQLFdW9eul6%2B62VZFV5jdnUfbVAPzDFt16qifphMztJDz9&X-Amz-Signature=f2088cf4a4067ca85451c9f50adc1a430aa2f09960011ebf70d11048d8f6ade3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFH7JPSB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FAoH8owOAsfzBdPs4AKcmsaKbThnPkvIWI1afAorxNQIhAO1eMvOQb%2BsZLY38q4vFYiHEBPp223fqtBQIkmD1dD8uKv8DCBcQABoMNjM3NDIzMTgzODA1IgyEi%2Bd6g78%2FAffjHoUq3AOWnEW2JEIYQCCkkNmZo5%2F962ls6Ji8OJ4nRRB2wRMIg1EIGAdo3OoN7Hzc96PtcCIcxM8AfKd5y2vk7qrtUe28CxAUm6QQcegI5ry%2BiRw24xwBFNoSZNZE%2Fb9VljomSHAFeiPfcplqhwbItoMQTnlGEH0UfrpmM%2Fl0vb65SSarvVNrJ1BuXRBPDdNIeHM7NV%2B9hveRbucTGsQJZbS%2FtAYnbQ0vBALKzpWWkm5wZyjqiZpayQSS4vTr7eQj5sbJzku%2FlPXU9ReIyVAPgzQQs9kN8Z8ZKfih4JLZQq90es3KOrAFdVOynU2lpSEAmyXS4nu8HX7mwXIeDMX9ttw3uXwTvP6xefkMhA5FoyOjqCT9wOki7HYrmuEB92SvJgaTuhePJ1ZSrS%2BC2FYsgrpDN2EBOHeXj9BG6kO8QSGJ4xDQ7jsmu50pFMVixTxIXyRUDA9EXakc9x8D51F6XRLY7MKq0%2B7SsOQv8Pob85lEmIKVLKoTW%2Frj%2FIgn3vvjM6o5yWkbPp%2BatJRkaX7%2BKz0LApbxkiYtWnbeJ58FbYMogfcET3X9U3uVJA%2FrQc31AELKUI%2FIzqs2ig%2FtPuy38oL%2FuFPeVsqaozempPK5aFGc2kVgCAsINXhLHDRUf2x4IjDIqPS%2FBjqkAbh2BZTRbjZUhI8iddmEP0gLQY1xrlGTIBVqqNLkdWhHxdh5K7x9mF%2FC48rte3J827jZK1Bwin2MNc%2F2Gn8R81jC8MJHttX%2Fy0mrvdCZhqPcflmGGucMLs1RqGz%2BD1G5%2FvTExy1wIb7D1SKhn8yU0nKnxlE8MCZ0tHC%2BpyxhjPexN%2BRQLFdW9eul6%2B62VZFV5jdnUfbVAPzDFt16qifphMztJDz9&X-Amz-Signature=62a70de6a7387905a8fbcfbcb1b62ca5952ba83d4a2c071768db9b13689870f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
