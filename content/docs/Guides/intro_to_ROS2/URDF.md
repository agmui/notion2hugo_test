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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3HJ42CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2BKjLDyeQe8uoezvZl6QJNrKuHREnAl8U9QZHllc3ieQIhAJLscq%2FxiC%2FG%2BQMo%2F0aB0jh%2BhOP7hzV7CIv08UuM%2BbZBKv8DCBQQABoMNjM3NDIzMTgzODA1Igzwkanywh6wCgvD3PEq3AMj18YucFdFQAH3lECFxYowKv6IIIkHZw3uhBja9Vu3ea%2BSY%2BZo03HImZGPkUbEv9rcZRgIvZZi2IqMDNTUGxbIw7xh22MzOZDR8zkgkP5QHh8ZmoxqshnUy8Z1hJgRWlqaMgyH3MKeA3uxoGOqCwmWIumM%2FunuESFbS4XN4IAwXWpsmQ93611mVD4OGWy3oCZf%2BybMGbx%2Fy1uWjD%2FY1GhVwmYGQ%2FOp26Hc%2FswxavXM7eZOWwKnVoVx3uJWuelVi6GsJIjyRRjfmPXoIj5U%2F3bx2yE4V0n%2BhCjEB2g5OW1sOcxVev8bop1KvxYOIjyG7CTieg1aQqAPHmiYc6O1e3q8wXgy0ZCtNKh%2F6pyW3VsEOZdyqLF74MaZpKfWgrNW8Zj1xMUhrgMXiFXWnuJka1EbFMQ6YEf%2BXDlbiIhA3Wuc0Vps9TepNO0sry1he%2Bryo7bWeXMzaD9e%2BUXiccpX4xjxtR6ndqlRnIfh089XLviO%2FruNNWqmOtyZS3hIWP0T73%2F3LAUMnDUIKKDGS5S2KqE0I2n9D3DEy4zSLWkWZyX%2B2l5sSaopicgDahIQNv5ESvyEnm0BNSoZO4OBJKNtXbcAAroReqParoULxoFA%2FM818kS5EmojzWXpNyUJFDCrhd3ABjqkAUreoeKo2gsK6%2FehuaA5H8mOk6XA4MybeD9SGJCkobZ0DP6WuzWYvu0lQ3TPrTQQhk6XO0z%2BHDuXereaHBcEIZEQ0l7itVIU3g4vlbcAvNsqERpTrrc3MmzQdDHaOR08fcPPhfVPlYBfjwNauMZyWG%2FX18d1VqujCpBCJUrnkGExU3jrahIcf%2FKrx%2BkYVSGNLw4jZNd5yBcvc5gNjD5drMYBT1cB&X-Amz-Signature=a7ee0f8740f7e190066455880e0dbadf67ad5603da7d9105907e409bee0bc466&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3HJ42CQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2BKjLDyeQe8uoezvZl6QJNrKuHREnAl8U9QZHllc3ieQIhAJLscq%2FxiC%2FG%2BQMo%2F0aB0jh%2BhOP7hzV7CIv08UuM%2BbZBKv8DCBQQABoMNjM3NDIzMTgzODA1Igzwkanywh6wCgvD3PEq3AMj18YucFdFQAH3lECFxYowKv6IIIkHZw3uhBja9Vu3ea%2BSY%2BZo03HImZGPkUbEv9rcZRgIvZZi2IqMDNTUGxbIw7xh22MzOZDR8zkgkP5QHh8ZmoxqshnUy8Z1hJgRWlqaMgyH3MKeA3uxoGOqCwmWIumM%2FunuESFbS4XN4IAwXWpsmQ93611mVD4OGWy3oCZf%2BybMGbx%2Fy1uWjD%2FY1GhVwmYGQ%2FOp26Hc%2FswxavXM7eZOWwKnVoVx3uJWuelVi6GsJIjyRRjfmPXoIj5U%2F3bx2yE4V0n%2BhCjEB2g5OW1sOcxVev8bop1KvxYOIjyG7CTieg1aQqAPHmiYc6O1e3q8wXgy0ZCtNKh%2F6pyW3VsEOZdyqLF74MaZpKfWgrNW8Zj1xMUhrgMXiFXWnuJka1EbFMQ6YEf%2BXDlbiIhA3Wuc0Vps9TepNO0sry1he%2Bryo7bWeXMzaD9e%2BUXiccpX4xjxtR6ndqlRnIfh089XLviO%2FruNNWqmOtyZS3hIWP0T73%2F3LAUMnDUIKKDGS5S2KqE0I2n9D3DEy4zSLWkWZyX%2B2l5sSaopicgDahIQNv5ESvyEnm0BNSoZO4OBJKNtXbcAAroReqParoULxoFA%2FM818kS5EmojzWXpNyUJFDCrhd3ABjqkAUreoeKo2gsK6%2FehuaA5H8mOk6XA4MybeD9SGJCkobZ0DP6WuzWYvu0lQ3TPrTQQhk6XO0z%2BHDuXereaHBcEIZEQ0l7itVIU3g4vlbcAvNsqERpTrrc3MmzQdDHaOR08fcPPhfVPlYBfjwNauMZyWG%2FX18d1VqujCpBCJUrnkGExU3jrahIcf%2FKrx%2BkYVSGNLw4jZNd5yBcvc5gNjD5drMYBT1cB&X-Amz-Signature=fb5811c1c4fd1927cc44143b87c35e77f0941f923cd945bb48becf7eb7e99c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
