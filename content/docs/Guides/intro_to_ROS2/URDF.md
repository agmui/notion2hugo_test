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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRYXNCD%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmWtiTu5neKfh3I7G7gtodR2NwT45t1Sh%2FPy%2FNeUGogAIhAP2FBs4JX6g%2BW2E0rQxESzbFHXavV55NYxehOUvAY6G1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN9aKyOj9X0ArRyE0q3AOCUpOVcPyGH1hz1%2F3DP2hqum%2BHgr7piByfj63whIqCXW9IUJYfh9OUK0U7B5ky6CB4TzgLUrBkBws%2FkcBLz%2FpurZojch2YPEDYYpoTBgvZK%2FDE1%2Ffarkvk4uYAe4sc0fPSEqmWak9jijBsRHEJ%2FJYF%2FZySE0WyPnLw6E30jZSi3h0Xx9wfm%2FVeolp%2BA3PaXXlmwEhkcAPF4Bs0mrEbFC8H4xZ5iREo9QY7EvZ7QMSNTRx%2B2Raj%2F%2BUi%2FsTQx4lBUX4sJay%2BL87f0j%2Bk%2BAfhVhzgWmjW9zOgJjwwtqvK%2BLjaRUAd4sKgRLebSVW08%2F%2B82vUlO8xoEzi2BGIW8laF1OuaL8fIiYR5G3YzuxHBGDfbdL4sPo0QgPocCFdRsUJk1vP11e6tIzqJ0TlG2jWM5gOvMg%2BUZFPQYy5J1KjDHhINGlFiQ7pVn8lmOvLxKi0zG9Ho7dd6adzSAXxgOsORGP0Or5VeFxlMhpw%2Brr1xOFD2QVtnrQZNYqsMn0Jz%2Fbuigj7%2BgSdj0LOCP%2FZt4gVzFURzPQsCi%2F9LIN%2F%2F7m8qPFCuH7DbF0lpY4HzcDDCA2DikNhXqJN27CsavVYzZNhx73NW6UdXXsVlOzkH0njiu3aYOIODBYF85v4HN51ZmjChrtm9BjqkAXYJSTgPEtVkMXZCbuqVPdQG9GQnf96bEgl7HmDpRvGsxfGDbKrdtvzCjID%2FMgF59757vifoxTNktiOd9OUQXNzL0rCKXwhpTVG%2BQhHAnvPC5ZP1n5Rt39cpBrdYLa3SLSvgNldKzRgNeDnGmBXeQPdmB25vyBwwew%2FpiynBRCJ2qSPC2UEx%2FXOFnqKSLzCD%2BSVIe%2BWxB5c2kx1uc64tn4cYVWJp&X-Amz-Signature=a25ca96aaf81ffe7bf2c04db8010ffd9702e56c8699f0210e2bdbdc219fbdf8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRYXNCD%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmWtiTu5neKfh3I7G7gtodR2NwT45t1Sh%2FPy%2FNeUGogAIhAP2FBs4JX6g%2BW2E0rQxESzbFHXavV55NYxehOUvAY6G1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN9aKyOj9X0ArRyE0q3AOCUpOVcPyGH1hz1%2F3DP2hqum%2BHgr7piByfj63whIqCXW9IUJYfh9OUK0U7B5ky6CB4TzgLUrBkBws%2FkcBLz%2FpurZojch2YPEDYYpoTBgvZK%2FDE1%2Ffarkvk4uYAe4sc0fPSEqmWak9jijBsRHEJ%2FJYF%2FZySE0WyPnLw6E30jZSi3h0Xx9wfm%2FVeolp%2BA3PaXXlmwEhkcAPF4Bs0mrEbFC8H4xZ5iREo9QY7EvZ7QMSNTRx%2B2Raj%2F%2BUi%2FsTQx4lBUX4sJay%2BL87f0j%2Bk%2BAfhVhzgWmjW9zOgJjwwtqvK%2BLjaRUAd4sKgRLebSVW08%2F%2B82vUlO8xoEzi2BGIW8laF1OuaL8fIiYR5G3YzuxHBGDfbdL4sPo0QgPocCFdRsUJk1vP11e6tIzqJ0TlG2jWM5gOvMg%2BUZFPQYy5J1KjDHhINGlFiQ7pVn8lmOvLxKi0zG9Ho7dd6adzSAXxgOsORGP0Or5VeFxlMhpw%2Brr1xOFD2QVtnrQZNYqsMn0Jz%2Fbuigj7%2BgSdj0LOCP%2FZt4gVzFURzPQsCi%2F9LIN%2F%2F7m8qPFCuH7DbF0lpY4HzcDDCA2DikNhXqJN27CsavVYzZNhx73NW6UdXXsVlOzkH0njiu3aYOIODBYF85v4HN51ZmjChrtm9BjqkAXYJSTgPEtVkMXZCbuqVPdQG9GQnf96bEgl7HmDpRvGsxfGDbKrdtvzCjID%2FMgF59757vifoxTNktiOd9OUQXNzL0rCKXwhpTVG%2BQhHAnvPC5ZP1n5Rt39cpBrdYLa3SLSvgNldKzRgNeDnGmBXeQPdmB25vyBwwew%2FpiynBRCJ2qSPC2UEx%2FXOFnqKSLzCD%2BSVIe%2BWxB5c2kx1uc64tn4cYVWJp&X-Amz-Signature=87430a323e9e4e55b0817d80050436c23fbff708b789c0bbed9d36c3a6fbec32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
