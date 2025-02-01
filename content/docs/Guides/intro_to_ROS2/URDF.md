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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJBICLH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHwX58ClOnDtFVydjr%2FkT4HpmEIwD66Dy6SLhM0dAN0AiAlrotw5ij9qIPVpmtfv7L3GUngoJZ%2FupmX58epJK7CVyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBhCSW61T4jMDDhHgKtwDgCE%2F5KkKvs%2FI%2B71d%2BOQ84OINta26p6CdZTWKTTv6IldrpeI3QZALT6Y%2FXmxwjuV8X%2F%2BXMxYXN%2Fv7C1hn58SLcNaykOQYOMQ%2BUJjFC7phO5Ukl4wASJmJWbF6u%2Bq5nVIFTT6cMeuppYd4KEqMYECy86iMZn8ZvPllV5bVmCOjEQr8JZiB8y9nzUb3WLkJD8Goh7WK0bT94LQzg4IS7EJXgFLDBGuoMD3nGbVz2ezBx8EJMa%2FYFaIxJczaD0oxIid9FNkt1sxOuyq%2Ft2SylS3KlpWe4wfLuKvsirZ9bFaslSmHCpEmUBGHPFEZ1laqFFPoDD3TmDMwgqfstfnVMfL8xY2rx%2BooMxUNPFqpODJ0Va9td7m5G56WM%2FW8R0HXePkBqn%2FOq4bY3hCcvV4BLHm8PvZliXrwvXeOi5mDo5tS%2BIM9qGFzp6IpX435JEblo0Z0x4tWYO%2FfNKtB%2BbzYARwmfzI%2BiP9XlNZsfZ0AVG3ufytzrsDbs5Y9kJI3PQZXD%2Bncn%2FSGC3Zx9c2Iv7uEx4tbEmTPzzD8CWyok6dmtRHIYdCzjSXaxSRX6GDHO5pVQpnM9l1NyPDgVT4mKnmJWIiAdjlrwqC%2FeO6vcIZ7449dyYoEb7KKnK3VMh69bK8wnqb3vAY6pgETMxYGua04t%2F%2BMGfWmZzraRJzvAaskltWC1RA95vc7qoTw9F7pyApcroToc1ieSzr8x%2FHfftvuCu7nttELkbO54zNyYUyFyU6f6IuXcrJWqKwv5yGQsfNGsTyjT9XKti7QwL%2B5OcVD9vb8exxM1kwJi1HvSx6UUaNsKwx57m1%2F8%2BvY%2FTCGinUwHrAT%2BFRnpZQ8i5nQSEumE9hD3H%2BgFzWt29%2B3IM2q&X-Amz-Signature=50d18ab67377a0e011ab8ebd2b16dea175ed076760d53e7abf8097104f093d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJBICLH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHwX58ClOnDtFVydjr%2FkT4HpmEIwD66Dy6SLhM0dAN0AiAlrotw5ij9qIPVpmtfv7L3GUngoJZ%2FupmX58epJK7CVyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBhCSW61T4jMDDhHgKtwDgCE%2F5KkKvs%2FI%2B71d%2BOQ84OINta26p6CdZTWKTTv6IldrpeI3QZALT6Y%2FXmxwjuV8X%2F%2BXMxYXN%2Fv7C1hn58SLcNaykOQYOMQ%2BUJjFC7phO5Ukl4wASJmJWbF6u%2Bq5nVIFTT6cMeuppYd4KEqMYECy86iMZn8ZvPllV5bVmCOjEQr8JZiB8y9nzUb3WLkJD8Goh7WK0bT94LQzg4IS7EJXgFLDBGuoMD3nGbVz2ezBx8EJMa%2FYFaIxJczaD0oxIid9FNkt1sxOuyq%2Ft2SylS3KlpWe4wfLuKvsirZ9bFaslSmHCpEmUBGHPFEZ1laqFFPoDD3TmDMwgqfstfnVMfL8xY2rx%2BooMxUNPFqpODJ0Va9td7m5G56WM%2FW8R0HXePkBqn%2FOq4bY3hCcvV4BLHm8PvZliXrwvXeOi5mDo5tS%2BIM9qGFzp6IpX435JEblo0Z0x4tWYO%2FfNKtB%2BbzYARwmfzI%2BiP9XlNZsfZ0AVG3ufytzrsDbs5Y9kJI3PQZXD%2Bncn%2FSGC3Zx9c2Iv7uEx4tbEmTPzzD8CWyok6dmtRHIYdCzjSXaxSRX6GDHO5pVQpnM9l1NyPDgVT4mKnmJWIiAdjlrwqC%2FeO6vcIZ7449dyYoEb7KKnK3VMh69bK8wnqb3vAY6pgETMxYGua04t%2F%2BMGfWmZzraRJzvAaskltWC1RA95vc7qoTw9F7pyApcroToc1ieSzr8x%2FHfftvuCu7nttELkbO54zNyYUyFyU6f6IuXcrJWqKwv5yGQsfNGsTyjT9XKti7QwL%2B5OcVD9vb8exxM1kwJi1HvSx6UUaNsKwx57m1%2F8%2BvY%2FTCGinUwHrAT%2BFRnpZQ8i5nQSEumE9hD3H%2BgFzWt29%2B3IM2q&X-Amz-Signature=559082d1de6f7e15d2924d6b3b3b8ae6a10bfb12f2a8dedf4815b11020f475e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
