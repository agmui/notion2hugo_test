---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UFKIANR%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn5cb1Vi5HGoRyvE8v1eKfZrWNsmTFF6Toj553D7O1fAiEApi1OmoBhPRbmDtEGJ6hg79%2B%2BnJ%2BtJ%2FXd3d8YGvbQadQq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOJJtvizPzoiegyF2yrcA6ELb%2F75yhXUz3DfbfMm3qgg9rKQfIgZ5Wk1Lxj4pfqOLAiaansfLtq6HBCvg3AZhz8F5ri79zMXiOwM1P3%2BDL10D38E02TJ3469yz2yu13NSbCoibCpRFhCZqB5is7GU0CQTtx0rGByUrle9xbd4Z3sJ2lUJbLCJyrejTgmyonrlYcnt9WkqrcJ23GsvQHEKLxSjyT4dujgbXo1NMc8TIa85tuvT5RTSy%2FnV02Qp7Qb9%2Bi2UwF6gWUUW%2FQIqzb%2FPMry9fHUe93a2mQ9z4Fx9ZuQksDDlqxnp49fOMrKPrNSqsePoBdxDXtan2ixGz9DjlvvnYTPb6GTBT06Nx3YCTZ2rI1fk5NRTrIk6v4TJ4iOLQaL1b4J3JDXN92zkJ8vWn0QX1q4WRQgEGqpGOzAO0X94rMaVaj%2BjmHZXElIouuPhlLsxvZMb6x7IYU1LXFaqrT48Gnq0od7Uz3HmKnMOjqKsJs1L1Ek0OX1hOtWyrFGvQbIsvZKm2H8TU%2BZk4tgA3FvUQDG530Ku%2BX2vmBzGomQ%2F%2FhmTAvgez25hFmdoT02qc8Ad8EDiQ0Hy7ANlmOoESIVjjPTIWJJfPpOBnI8xH2SZUKBfOHyUVkcYwRzO%2Fs67y%2Fn%2BJ2ivXjmBHTbMIids80GOqUBua0rHZaDVU1Vv3EgWJ2JOGOFtOL48DGJrL8%2BNeehj%2FDDNe4YmAPj9tTPyo8D4oJybNdXGOsyA4zfjewsB7Nq4SenF0JboLdw%2FdBGYdy82mD8Xsg5IpWOEGxiKh3JY94ZSluiuv6kMH1i142wU2XiIAvzRxGyeTAKrcW8SCBbk8drTY66NSm31pWuq14aoiBrlaLXCVNE9iBLwVy0HLwBgxG695st&X-Amz-Signature=258183c2b5b7d74e1d03930eb30ede7c2c1c172489394a6d43d497f74e763267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UFKIANR%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn5cb1Vi5HGoRyvE8v1eKfZrWNsmTFF6Toj553D7O1fAiEApi1OmoBhPRbmDtEGJ6hg79%2B%2BnJ%2BtJ%2FXd3d8YGvbQadQq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOJJtvizPzoiegyF2yrcA6ELb%2F75yhXUz3DfbfMm3qgg9rKQfIgZ5Wk1Lxj4pfqOLAiaansfLtq6HBCvg3AZhz8F5ri79zMXiOwM1P3%2BDL10D38E02TJ3469yz2yu13NSbCoibCpRFhCZqB5is7GU0CQTtx0rGByUrle9xbd4Z3sJ2lUJbLCJyrejTgmyonrlYcnt9WkqrcJ23GsvQHEKLxSjyT4dujgbXo1NMc8TIa85tuvT5RTSy%2FnV02Qp7Qb9%2Bi2UwF6gWUUW%2FQIqzb%2FPMry9fHUe93a2mQ9z4Fx9ZuQksDDlqxnp49fOMrKPrNSqsePoBdxDXtan2ixGz9DjlvvnYTPb6GTBT06Nx3YCTZ2rI1fk5NRTrIk6v4TJ4iOLQaL1b4J3JDXN92zkJ8vWn0QX1q4WRQgEGqpGOzAO0X94rMaVaj%2BjmHZXElIouuPhlLsxvZMb6x7IYU1LXFaqrT48Gnq0od7Uz3HmKnMOjqKsJs1L1Ek0OX1hOtWyrFGvQbIsvZKm2H8TU%2BZk4tgA3FvUQDG530Ku%2BX2vmBzGomQ%2F%2FhmTAvgez25hFmdoT02qc8Ad8EDiQ0Hy7ANlmOoESIVjjPTIWJJfPpOBnI8xH2SZUKBfOHyUVkcYwRzO%2Fs67y%2Fn%2BJ2ivXjmBHTbMIids80GOqUBua0rHZaDVU1Vv3EgWJ2JOGOFtOL48DGJrL8%2BNeehj%2FDDNe4YmAPj9tTPyo8D4oJybNdXGOsyA4zfjewsB7Nq4SenF0JboLdw%2FdBGYdy82mD8Xsg5IpWOEGxiKh3JY94ZSluiuv6kMH1i142wU2XiIAvzRxGyeTAKrcW8SCBbk8drTY66NSm31pWuq14aoiBrlaLXCVNE9iBLwVy0HLwBgxG695st&X-Amz-Signature=567a53864e00f44118aa1f4dcec69d23a362370916bb999921b9aa854db0658c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
