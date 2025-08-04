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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKTJROX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCTNHibZly56Dzb4QD19wDeyqxrx5riDbLSYGfkGjTvbAIgceqp0LVu5HemmYULllhUQuGvGDUX0Gw4MJU%2F9%2BemiFEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ74ynN28yCP4%2FHhwCrcAy2ivWi08wRQHzIczu75giCs8KvXMKKYEsedrwuk9MTSr80JFJWWaY%2FL9R%2BqmH7L7WWC1EHyjHyr%2Fk7H1toKXmImZcsv%2BY0PWj22wMdWJWwCrHkoLRk%2BV46YLV8%2F1vGV4S23kJ96K12DC16nSsD6gknLQyzzzeJSYn%2B6%2B8d%2FdpCCUomgv4JH9mLZMPeSsSdunwZi8kJ0xFXR5P2CAQRHYe6wMxdSdBv1mNA2d7D7%2F6y09fzZRzlpNMbZKEzrI%2FitzQbhBFEBL5boZ7zosefz3A2ozkwwUUtFghCPpIXE8V02z8qmGBA532P7Z34xbM2O4%2BfQK1IsJI6uNtozBU81e8vlCulRp3uqUOaXwSa7DPGOkndPydHRXlM0l0hlJXY%2FlfClAe88nMsbcOxNImlwmbP0EHn%2Bgp%2FevwxiuncyOXPKCVs0RZx12g75REZj0A9zJqt5TNxWIqOjQOQPsXPDm9oPutdva%2FEQVsXR9VpqC2W%2FH7u86ZShO53BoZTF5kzrPBwazPKzXGp7FFTMm1dnkTNeKlZIhxbmmfaTwY8g4Eo4upoBb6%2BAQyj5sff8WnpiHnuS5sDMl0LKdPljzZXIgjN6hU1hatpaZ16ZNmBJRZnM3tNyPLZhFLCI657XMKSNwcQGOqUB8KNN9kp%2BueBMh8m42MB1B502Z8UoHl%2Fd6oxWMlQlGWj%2B4Ub1AOAMX1OmakluF3YH2gtCC1hODtluyYIWRhYgEMVfdS%2F1LpOic%2FktQMV4Yph%2FAx%2FXnHz2rwC3f8QoMq5Tgx%2FkLHSVg3FmxgWcIPIxtI6mM892pOai41n114K1SiTMvsXhl4kHzCoX3Zfrp1juY5Y0%2F9qDzRSn%2FVeSPLegu%2BRxV4cz&X-Amz-Signature=1e7c9b14e77f596d8e898558ba70cc580faa9a0bf27dd29aa0fc71030a08f2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKTJROX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCTNHibZly56Dzb4QD19wDeyqxrx5riDbLSYGfkGjTvbAIgceqp0LVu5HemmYULllhUQuGvGDUX0Gw4MJU%2F9%2BemiFEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ74ynN28yCP4%2FHhwCrcAy2ivWi08wRQHzIczu75giCs8KvXMKKYEsedrwuk9MTSr80JFJWWaY%2FL9R%2BqmH7L7WWC1EHyjHyr%2Fk7H1toKXmImZcsv%2BY0PWj22wMdWJWwCrHkoLRk%2BV46YLV8%2F1vGV4S23kJ96K12DC16nSsD6gknLQyzzzeJSYn%2B6%2B8d%2FdpCCUomgv4JH9mLZMPeSsSdunwZi8kJ0xFXR5P2CAQRHYe6wMxdSdBv1mNA2d7D7%2F6y09fzZRzlpNMbZKEzrI%2FitzQbhBFEBL5boZ7zosefz3A2ozkwwUUtFghCPpIXE8V02z8qmGBA532P7Z34xbM2O4%2BfQK1IsJI6uNtozBU81e8vlCulRp3uqUOaXwSa7DPGOkndPydHRXlM0l0hlJXY%2FlfClAe88nMsbcOxNImlwmbP0EHn%2Bgp%2FevwxiuncyOXPKCVs0RZx12g75REZj0A9zJqt5TNxWIqOjQOQPsXPDm9oPutdva%2FEQVsXR9VpqC2W%2FH7u86ZShO53BoZTF5kzrPBwazPKzXGp7FFTMm1dnkTNeKlZIhxbmmfaTwY8g4Eo4upoBb6%2BAQyj5sff8WnpiHnuS5sDMl0LKdPljzZXIgjN6hU1hatpaZ16ZNmBJRZnM3tNyPLZhFLCI657XMKSNwcQGOqUB8KNN9kp%2BueBMh8m42MB1B502Z8UoHl%2Fd6oxWMlQlGWj%2B4Ub1AOAMX1OmakluF3YH2gtCC1hODtluyYIWRhYgEMVfdS%2F1LpOic%2FktQMV4Yph%2FAx%2FXnHz2rwC3f8QoMq5Tgx%2FkLHSVg3FmxgWcIPIxtI6mM892pOai41n114K1SiTMvsXhl4kHzCoX3Zfrp1juY5Y0%2F9qDzRSn%2FVeSPLegu%2BRxV4cz&X-Amz-Signature=15641871cce1a11785c1f04556ba7a26f1db745c03c0ecaf5b28e82966871214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
