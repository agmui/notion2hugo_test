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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJLD4RW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmLrYsRQIWR%2F03shP3IMrt4%2B0mDzkNpzv82Ko%2FgRsKQIhAPOlVPQQNf1lqjaCwefY%2Fv96A%2BF41GdL7QFuU7PUUDH8Kv8DCHMQABoMNjM3NDIzMTgzODA1IgzuEFxCsY71KFpmbWQq3APEfdjmcmr%2FfCblWsqkZtWlbUTJgYr0vEzf4hM2ObGHWVOkBWJQhKdokokf%2B7spSqqvWrRUzcD3OM1Fum%2Bzh%2BwQjAUKC%2FljANRgnskTR4IFpljeJKEeyKLM%2FUrnhlO6yz2precoDag3hHzCpp7OhAaFG3gBWyisSdnDtdaJkVh5c%2B2liYQSsCoJykQQw%2BmPNiAfxRPenSGFxKcKeZNImZ48g1PB7HpspyGtCbyYukR8gRxfuG4PK5cAk1KlTwsUK344Bh3N4AwMdmI9T2KdpQdZcA1pQKsgulx1J1cbDyCayLeqxFk0nk%2FRIx5ynU9w4jA4P25oDYj9XXvMHJnvPVVnLHplEiIqbsY2QPjzwCioX1Ga9z%2F7WHYFfB0dK2m9%2BODX0uMvyR50uRU1VAgr6amyenNZwF0NvZabrcaYYtYFBD06CRQ8J66QdbDQ2NmEVKu2aQmL4LbzzgzCYj%2B9q3IZI8NbGEbMgHSK87m%2Bk%2Bs0wJTwzvRwpGYLeaK78LoGzahq5rITyIbQBQlCte%2F1bRDOi%2B%2F6Xggadgbb5Out9UcBrzLxmht2izh83i4v5yoptZBNf3x0hfJhp%2F2mHWx9d9IEwehNDph7Yu060A8ZJvPOzDcYFrcUQevSJgOH0jDb8NO%2FBjqkAUuKwPcYLy9cHVGWwY68gGJClGWVSbg1EueMRmER5VmSMV6XEbO8ugVCVXO3fWN1O3jJWlXrCgLl1N%2Bo54QulVZRSc9mAK26DoMJfn6FdFyr6LSNsBkwM8CVN1TLncS0qp%2Bguu%2BrsdDeabretDv37cmthuCVCif3uYx9H2TdKxULAh8pEWZI%2F7jeZwEog0tVbi6PX%2BGn36o4AkkE4XLbxcBQQ5PY&X-Amz-Signature=6298ffd6c0c0288834de6d97151e06b05e51afe62cafe4fc99231b30165742e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJLD4RW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmLrYsRQIWR%2F03shP3IMrt4%2B0mDzkNpzv82Ko%2FgRsKQIhAPOlVPQQNf1lqjaCwefY%2Fv96A%2BF41GdL7QFuU7PUUDH8Kv8DCHMQABoMNjM3NDIzMTgzODA1IgzuEFxCsY71KFpmbWQq3APEfdjmcmr%2FfCblWsqkZtWlbUTJgYr0vEzf4hM2ObGHWVOkBWJQhKdokokf%2B7spSqqvWrRUzcD3OM1Fum%2Bzh%2BwQjAUKC%2FljANRgnskTR4IFpljeJKEeyKLM%2FUrnhlO6yz2precoDag3hHzCpp7OhAaFG3gBWyisSdnDtdaJkVh5c%2B2liYQSsCoJykQQw%2BmPNiAfxRPenSGFxKcKeZNImZ48g1PB7HpspyGtCbyYukR8gRxfuG4PK5cAk1KlTwsUK344Bh3N4AwMdmI9T2KdpQdZcA1pQKsgulx1J1cbDyCayLeqxFk0nk%2FRIx5ynU9w4jA4P25oDYj9XXvMHJnvPVVnLHplEiIqbsY2QPjzwCioX1Ga9z%2F7WHYFfB0dK2m9%2BODX0uMvyR50uRU1VAgr6amyenNZwF0NvZabrcaYYtYFBD06CRQ8J66QdbDQ2NmEVKu2aQmL4LbzzgzCYj%2B9q3IZI8NbGEbMgHSK87m%2Bk%2Bs0wJTwzvRwpGYLeaK78LoGzahq5rITyIbQBQlCte%2F1bRDOi%2B%2F6Xggadgbb5Out9UcBrzLxmht2izh83i4v5yoptZBNf3x0hfJhp%2F2mHWx9d9IEwehNDph7Yu060A8ZJvPOzDcYFrcUQevSJgOH0jDb8NO%2FBjqkAUuKwPcYLy9cHVGWwY68gGJClGWVSbg1EueMRmER5VmSMV6XEbO8ugVCVXO3fWN1O3jJWlXrCgLl1N%2Bo54QulVZRSc9mAK26DoMJfn6FdFyr6LSNsBkwM8CVN1TLncS0qp%2Bguu%2BrsdDeabretDv37cmthuCVCif3uYx9H2TdKxULAh8pEWZI%2F7jeZwEog0tVbi6PX%2BGn36o4AkkE4XLbxcBQQ5PY&X-Amz-Signature=410a999b99b8d5532e6c730dfe08e0ba68b8c97af2108d5e95b9de3e738c2f53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
