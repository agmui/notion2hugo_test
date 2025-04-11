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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AXL3NS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHGMak6GMKG2f6EjA%2FqXl9XAB9WNZTXkViY7FCJUW9fpAiEA7wuyW7DGXhw3Z7n%2B3eb6aKMyQ0l%2BNR8HBkTUxZriLAcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR1Msd5NzWW39L01ircA3JNrn6Bk0BeT%2FLusUYNl9bDWreHPrEQRUqhNkQ1q99nTkMo%2BpmV%2BiLrE8yhldFW6ye7YGvQTSlZpu4IAVW5z8rUFGrUZpTr%2BGW%2F1oCyMv0vN%2BQb6H8tnrSdVY185A5hPf1zWfQbX7mPaU5njD7WU%2FcjBHwO8TqnOooKd0FKkfuspudn8yvlmSJmlwX4NjyCIBEXycJAAKroNoUd0bdbU%2FmPyU%2B8P%2BhbbGdDNs%2BqPjO99AYs5ns%2F4YDF4OrtvecnfzJFqZYO06I66CcV%2Fu3dHw7DD%2FwMmrjrfbJ4ZJFu2hPngnSsyC8E%2FINY4Doz6CeMQVPcnoUPaFmsawbIICP3dqVMEestOjmmacMxuE%2BErkNIipcOJL1WF3myR%2FE5HFKsSmvjxsFl396O4Jj5MaYZ8x%2FRQJc4gszojx5%2BWvzCmv8JU2ZykZ8IdTtUYHHTC8pNb0kfn9ZB4hGJotCv83Xs7D2RF2Ek0CzAXjgQ0797rSxOw1T2wNuXMO044jJIVXSBb4gOYgrYAbbMEOynsdUCWnT%2FlWO0jvh4RQPITRscM7eb4%2FB7AbJU4JUQgSjAcNU4szuH2zX1Nw8yGljfgxdCd%2FJvtF5FXy1JARDYJHE%2BiMDECist7Ksc4WMigU7wMLzD4r8GOqUBBzPgCZ6zAg8VUYL3muiW4nDgmJJTCMXjUaHe3Cq9TM77FTMohiRvJBLwvOuNvfrVJmIkuD3rGcL2G%2F%2Bq8TxiADJ63wjleOMiAaFOjnHrbj2FnDtNfU8gnl7fPvNx4DDQF3bu27iX%2FSS626yD2QvC%2FjzNBmBor64pnSmlQhnaVdo450pmTkz0kQ3OQwA9w%2BxExzrvDWSD3yWMle675WecqDbSsWp0&X-Amz-Signature=df7c44ae3524bab14328ba2fc8cd82e15e1f8ef26770f0f469a98646bef4c70e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AXL3NS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHGMak6GMKG2f6EjA%2FqXl9XAB9WNZTXkViY7FCJUW9fpAiEA7wuyW7DGXhw3Z7n%2B3eb6aKMyQ0l%2BNR8HBkTUxZriLAcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR1Msd5NzWW39L01ircA3JNrn6Bk0BeT%2FLusUYNl9bDWreHPrEQRUqhNkQ1q99nTkMo%2BpmV%2BiLrE8yhldFW6ye7YGvQTSlZpu4IAVW5z8rUFGrUZpTr%2BGW%2F1oCyMv0vN%2BQb6H8tnrSdVY185A5hPf1zWfQbX7mPaU5njD7WU%2FcjBHwO8TqnOooKd0FKkfuspudn8yvlmSJmlwX4NjyCIBEXycJAAKroNoUd0bdbU%2FmPyU%2B8P%2BhbbGdDNs%2BqPjO99AYs5ns%2F4YDF4OrtvecnfzJFqZYO06I66CcV%2Fu3dHw7DD%2FwMmrjrfbJ4ZJFu2hPngnSsyC8E%2FINY4Doz6CeMQVPcnoUPaFmsawbIICP3dqVMEestOjmmacMxuE%2BErkNIipcOJL1WF3myR%2FE5HFKsSmvjxsFl396O4Jj5MaYZ8x%2FRQJc4gszojx5%2BWvzCmv8JU2ZykZ8IdTtUYHHTC8pNb0kfn9ZB4hGJotCv83Xs7D2RF2Ek0CzAXjgQ0797rSxOw1T2wNuXMO044jJIVXSBb4gOYgrYAbbMEOynsdUCWnT%2FlWO0jvh4RQPITRscM7eb4%2FB7AbJU4JUQgSjAcNU4szuH2zX1Nw8yGljfgxdCd%2FJvtF5FXy1JARDYJHE%2BiMDECist7Ksc4WMigU7wMLzD4r8GOqUBBzPgCZ6zAg8VUYL3muiW4nDgmJJTCMXjUaHe3Cq9TM77FTMohiRvJBLwvOuNvfrVJmIkuD3rGcL2G%2F%2Bq8TxiADJ63wjleOMiAaFOjnHrbj2FnDtNfU8gnl7fPvNx4DDQF3bu27iX%2FSS626yD2QvC%2FjzNBmBor64pnSmlQhnaVdo450pmTkz0kQ3OQwA9w%2BxExzrvDWSD3yWMle675WecqDbSsWp0&X-Amz-Signature=a9c5fba8e8f464cb995dc4fbe2c792146c0bb14dfb38b365f9c56eb2a2179827&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
