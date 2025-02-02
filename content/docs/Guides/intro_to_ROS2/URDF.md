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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3R5OGVG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsBCuiI5ERT%2BrG0Ds2%2BpQPQQZaf3I%2BYK%2B5LxO7Wq1DNAiEAmYelVwJLyzKUYKVpmqZ79xV3A9dj%2FEN0LDR03OjyyGgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhOtDIQA3DgwKaOVSrcAxkJBvB89J4WdJzuaEC4ruhVXvacb%2FfVyrkdf8zIpAuSVjFi%2Fj%2BRRmgiOvI3jCCNs7%2Fat1shqPVw3K%2BFWqLo3U8%2FTckkpCil543snEuUy9P92e%2FYTV2ZsgjklHUScK7aQoDnL9U4MRtazBysxDiNfFAn9g9SmjLqvl3mGI1RBUeZoAALW1BVVcwCf3IjXxWvM7vD183agnv3ZQkgDZpnYNyf3H%2FSDsu2hGHe9KYr8Gr%2F%2FzBy26%2FBKUgl4PxHmgBMmNknewxoqRCMrS2PCJuEcaDF9d9aeauBvfWpikPrDnq%2FB9qh35z4cCTNsX6YLk5HZyPcX8i4O%2BdMBFBeCCSq5EnWLQ%2FlwqazrW4n9gPp878lAAV%2FjRZVs9jdOoraB2R3WoJ4YeTOX3wQFglJHm%2BhFrLPkdFOCjvkTwu%2FULJOKFExz5b9ZZ0kw%2BKB%2BQOi4djMMxELdIH1KIDk93t0QF2dcxtp9DkJ5%2B4xkfEV3ml2uSKQTgXpPpeR6H6bTysDYU5mtdNLjxEjc%2BBlJIYmDxiq%2BaI2cOCoDKDkixxphjPNU9LK018qe7lEJ7ULXwhYRn%2F889VnNZAo9YOnuZo7xNf346ARmvwiTf84uGryyBRA8rjVr2MFfO%2FlluPQNvn1MPy6%2FbwGOqUB1LK0z6nS9yNwPj%2BdU%2BZlkoVh0PTGMYdKHDOpm5cxAzVA2D18EuICp%2BAX2VPIPZTKV1U2LaU6lnd4X8yhvShLK%2Fxl6WHFyNNCCoMcwA%2FxQ5aKmUkgqO69h9jKS6roAvCijUmyq7Hh6t7s%2BLgeiipvvqIQDNRM5sIC2oj8iTnawoGWb%2FomvLgJNZplx%2BGg%2BqLsnJ2cRCVqoBE3aOQPR45ou1PeZKEg&X-Amz-Signature=a4ea83f651bea0df6d7a9c3a8e6adeb065cea73501946cddc22ab5b0efd081bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3R5OGVG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsBCuiI5ERT%2BrG0Ds2%2BpQPQQZaf3I%2BYK%2B5LxO7Wq1DNAiEAmYelVwJLyzKUYKVpmqZ79xV3A9dj%2FEN0LDR03OjyyGgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhOtDIQA3DgwKaOVSrcAxkJBvB89J4WdJzuaEC4ruhVXvacb%2FfVyrkdf8zIpAuSVjFi%2Fj%2BRRmgiOvI3jCCNs7%2Fat1shqPVw3K%2BFWqLo3U8%2FTckkpCil543snEuUy9P92e%2FYTV2ZsgjklHUScK7aQoDnL9U4MRtazBysxDiNfFAn9g9SmjLqvl3mGI1RBUeZoAALW1BVVcwCf3IjXxWvM7vD183agnv3ZQkgDZpnYNyf3H%2FSDsu2hGHe9KYr8Gr%2F%2FzBy26%2FBKUgl4PxHmgBMmNknewxoqRCMrS2PCJuEcaDF9d9aeauBvfWpikPrDnq%2FB9qh35z4cCTNsX6YLk5HZyPcX8i4O%2BdMBFBeCCSq5EnWLQ%2FlwqazrW4n9gPp878lAAV%2FjRZVs9jdOoraB2R3WoJ4YeTOX3wQFglJHm%2BhFrLPkdFOCjvkTwu%2FULJOKFExz5b9ZZ0kw%2BKB%2BQOi4djMMxELdIH1KIDk93t0QF2dcxtp9DkJ5%2B4xkfEV3ml2uSKQTgXpPpeR6H6bTysDYU5mtdNLjxEjc%2BBlJIYmDxiq%2BaI2cOCoDKDkixxphjPNU9LK018qe7lEJ7ULXwhYRn%2F889VnNZAo9YOnuZo7xNf346ARmvwiTf84uGryyBRA8rjVr2MFfO%2FlluPQNvn1MPy6%2FbwGOqUB1LK0z6nS9yNwPj%2BdU%2BZlkoVh0PTGMYdKHDOpm5cxAzVA2D18EuICp%2BAX2VPIPZTKV1U2LaU6lnd4X8yhvShLK%2Fxl6WHFyNNCCoMcwA%2FxQ5aKmUkgqO69h9jKS6roAvCijUmyq7Hh6t7s%2BLgeiipvvqIQDNRM5sIC2oj8iTnawoGWb%2FomvLgJNZplx%2BGg%2BqLsnJ2cRCVqoBE3aOQPR45ou1PeZKEg&X-Amz-Signature=0fa321d741c4d7aca4d15686c2fa14391b0adf96071d973faf6818b7312ec28d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
