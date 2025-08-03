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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKKNJO3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5u76LRkJJcferbCa0zLlinAttufo2sM3I5WhqFTjxAIhAJ7IS910zAKcOZOeoiYen4TzVycXDilMiQiAviExqNN5Kv8DCCQQABoMNjM3NDIzMTgzODA1IgwQC5VUgfeW99AJHoIq3AMpIA0EqExIAn4%2FCxVeCcVBpSsSlXhfWLG3%2FH4S5zZk2VgQt3RppaFkZivyBCmAN980cDv2OGNjJWlCuJUZ5O5gZAeMrBXfeFbfj37ownut9g9f6vZlMMdoDgOMDkT2U4rIyLCXdS%2BCbILLsS%2F%2F80oZ7or%2FUhXoJpthYlOnDFjIMEYGEPqBFFTthBZY9D%2BJKRY8PcGOKPD0cb6m6tfRu3LxGixiylonhaCpE8MS8NZkoiscUES8GHAnkYI2bJIqlfwqeCo4bfUG0%2BwqMzIjlGaVwG1Hr9NuvJsIMo%2Ft7SGwBeaGFhBJHzLyYiz41VZgYeK8BgplJno6i6L6yEq6t%2BCD6%2F204ZFIvaJEUwkeRe6tGppfYCf%2F5eCwVSF%2BcWlE6N%2B7QEn47KEiKY%2F5HYJL8MC7%2FogYROnXcSnL3Y6I%2BhZmzPBt5hvgO1Y4eFVRCnnmAhzjBKQvyUmvHW2S8nvE%2FI6BFcmiYn%2BOZ%2BKUKh6Cpfo9mgsAEBWa%2FVPQf76o3nDTlUkVpMNANaspC6jo590k5s%2FV%2BxnhPVBKD13bf6azFa%2FRJ%2F3THW811mM%2B7CJWUpJaISZU9qr%2BNaAKV7bCMG8xPFDUhrj9%2BBgW%2BJlAphXEDRYUfqBJ1AK7gMby%2F5usqTCfm7vEBjqkAbEn1L29MLN9t%2B2orzpai1Ot52kL7a2zDX4kPOKwTwrFOownaj1xXtYvJ7UJvXigQ6B8ortlVPiasH9rK5O1Ej8q9RzP187VSdG%2BekyoqPRqbUwv73U8FFVW80rP2rP332e8wZgWEm%2FU4JSp097CjvEFOGbrah%2BBOOr3xUd4BFQUBu8OD32i2dzhjsIwiFj8%2FI9695pnThzuEAPVECZWCH1RGfwU&X-Amz-Signature=0b1d1c4d686c1fe4727e11832ff20ea10cbe6b12515c62c14e617faa94b72442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKKNJO3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5u76LRkJJcferbCa0zLlinAttufo2sM3I5WhqFTjxAIhAJ7IS910zAKcOZOeoiYen4TzVycXDilMiQiAviExqNN5Kv8DCCQQABoMNjM3NDIzMTgzODA1IgwQC5VUgfeW99AJHoIq3AMpIA0EqExIAn4%2FCxVeCcVBpSsSlXhfWLG3%2FH4S5zZk2VgQt3RppaFkZivyBCmAN980cDv2OGNjJWlCuJUZ5O5gZAeMrBXfeFbfj37ownut9g9f6vZlMMdoDgOMDkT2U4rIyLCXdS%2BCbILLsS%2F%2F80oZ7or%2FUhXoJpthYlOnDFjIMEYGEPqBFFTthBZY9D%2BJKRY8PcGOKPD0cb6m6tfRu3LxGixiylonhaCpE8MS8NZkoiscUES8GHAnkYI2bJIqlfwqeCo4bfUG0%2BwqMzIjlGaVwG1Hr9NuvJsIMo%2Ft7SGwBeaGFhBJHzLyYiz41VZgYeK8BgplJno6i6L6yEq6t%2BCD6%2F204ZFIvaJEUwkeRe6tGppfYCf%2F5eCwVSF%2BcWlE6N%2B7QEn47KEiKY%2F5HYJL8MC7%2FogYROnXcSnL3Y6I%2BhZmzPBt5hvgO1Y4eFVRCnnmAhzjBKQvyUmvHW2S8nvE%2FI6BFcmiYn%2BOZ%2BKUKh6Cpfo9mgsAEBWa%2FVPQf76o3nDTlUkVpMNANaspC6jo590k5s%2FV%2BxnhPVBKD13bf6azFa%2FRJ%2F3THW811mM%2B7CJWUpJaISZU9qr%2BNaAKV7bCMG8xPFDUhrj9%2BBgW%2BJlAphXEDRYUfqBJ1AK7gMby%2F5usqTCfm7vEBjqkAbEn1L29MLN9t%2B2orzpai1Ot52kL7a2zDX4kPOKwTwrFOownaj1xXtYvJ7UJvXigQ6B8ortlVPiasH9rK5O1Ej8q9RzP187VSdG%2BekyoqPRqbUwv73U8FFVW80rP2rP332e8wZgWEm%2FU4JSp097CjvEFOGbrah%2BBOOr3xUd4BFQUBu8OD32i2dzhjsIwiFj8%2FI9695pnThzuEAPVECZWCH1RGfwU&X-Amz-Signature=45749b9104b087d151ec1767fd2a3825dab831168c8cbfbfc5ae64aceb476bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
