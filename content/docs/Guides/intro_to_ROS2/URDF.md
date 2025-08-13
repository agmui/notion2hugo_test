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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNH7YDUA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8LbfqX7MymxIKQN9VgMqpF5X8Zj%2BEmNT9KG7b94vYDAiB1LsFl1AlkvECZuMnkdUk1XvjDArzCiCFU6z8RIhLDaSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCsXV%2FwUYOqoDfCKNKtwDt4Nyp6kpQ3fQnDjtmUZO8YbehnwF6Yeok9KQJPcT7JAgwpfEYhVrT7znGYT5qmDEKE5lOj%2Bith0dik03xB7bCugL6t8mIbrHc4msXELGHNYvbTvLp8QkkkVdXZ%2FQR6dKlImCvSbLh7kgTuf6U5rYVx6xbw%2FMvH6ghMgjvemONEgiFdZ7z1N4zm5LUDre2k6xPDpLY88yw%2F9sq0%2Bzh5gPlJvUYly98XWCQisyOkDqdyT3Juz%2BytCpzH2bB2wigVHVxyX9Z4duFfdAc2nqHyEqkh0fH2SPPd50s94cPOXeEYNnlxbLlXmC%2FasIZS6zhcpTgm9JUiP3C%2BPwaXD6%2FHsYQ29go6scNbR2IT1lHI8B7SP3coICdom0yvDxnEhOWwn6C2JeGzuN9QbTSnlUbdepM0%2BPy6XV0fA2H2HXIznlysIs%2F2ZAYcHEwrMUcyHiLg46%2Fq5whhp1JIsXjjsLZxxvJcx1%2FsX4WnjZxuFHYKaC3bUUroUDY1L3Rhf%2FErZ1nfHsA82PfYQm6%2FE5dzoa5e2cFrVxXv9TR3m%2B63oyvXr58KDl7ruGCTHwC17YMh7cGXzn89H7XrGpTlnw%2B%2FukvQyOl1xvd7oLnPMIc%2F0NBtABTh3rwQpB%2BnQfgzhss1Yw99DwxAY6pgH9EMYTfkp9fUaQxEgunDGwhGNf%2FR2GQKQX2nQtVsmwdpwgK4Wr%2FUCvAW52B9vpXcRq0kRu8H9FXEcQ2BATwaiIi%2FfCH4PHf5W20hsObveQmVF2UdSyzX5Wq6cXNq1KF0B7pyjgpKNkxiQqT%2BqjaxakpE0EiyrCfasy5FalXnAdzvTa3XLccl30E%2BFfBD6kAqZAL0l3MwkMEgBtku%2FVsbX5%2F8svTZLc&X-Amz-Signature=ef8c30406b8bf97ac4002a709eb6c56b63238628e61a9ea7ee735361b9e173c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNH7YDUA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8LbfqX7MymxIKQN9VgMqpF5X8Zj%2BEmNT9KG7b94vYDAiB1LsFl1AlkvECZuMnkdUk1XvjDArzCiCFU6z8RIhLDaSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMCsXV%2FwUYOqoDfCKNKtwDt4Nyp6kpQ3fQnDjtmUZO8YbehnwF6Yeok9KQJPcT7JAgwpfEYhVrT7znGYT5qmDEKE5lOj%2Bith0dik03xB7bCugL6t8mIbrHc4msXELGHNYvbTvLp8QkkkVdXZ%2FQR6dKlImCvSbLh7kgTuf6U5rYVx6xbw%2FMvH6ghMgjvemONEgiFdZ7z1N4zm5LUDre2k6xPDpLY88yw%2F9sq0%2Bzh5gPlJvUYly98XWCQisyOkDqdyT3Juz%2BytCpzH2bB2wigVHVxyX9Z4duFfdAc2nqHyEqkh0fH2SPPd50s94cPOXeEYNnlxbLlXmC%2FasIZS6zhcpTgm9JUiP3C%2BPwaXD6%2FHsYQ29go6scNbR2IT1lHI8B7SP3coICdom0yvDxnEhOWwn6C2JeGzuN9QbTSnlUbdepM0%2BPy6XV0fA2H2HXIznlysIs%2F2ZAYcHEwrMUcyHiLg46%2Fq5whhp1JIsXjjsLZxxvJcx1%2FsX4WnjZxuFHYKaC3bUUroUDY1L3Rhf%2FErZ1nfHsA82PfYQm6%2FE5dzoa5e2cFrVxXv9TR3m%2B63oyvXr58KDl7ruGCTHwC17YMh7cGXzn89H7XrGpTlnw%2B%2FukvQyOl1xvd7oLnPMIc%2F0NBtABTh3rwQpB%2BnQfgzhss1Yw99DwxAY6pgH9EMYTfkp9fUaQxEgunDGwhGNf%2FR2GQKQX2nQtVsmwdpwgK4Wr%2FUCvAW52B9vpXcRq0kRu8H9FXEcQ2BATwaiIi%2FfCH4PHf5W20hsObveQmVF2UdSyzX5Wq6cXNq1KF0B7pyjgpKNkxiQqT%2BqjaxakpE0EiyrCfasy5FalXnAdzvTa3XLccl30E%2BFfBD6kAqZAL0l3MwkMEgBtku%2FVsbX5%2F8svTZLc&X-Amz-Signature=f3dfbb8738a966c905af309d6ddafb4f421cef9e0892c8e253cdf6c6b48c16fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
