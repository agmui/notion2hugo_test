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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DSU7AXB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI1PJUmOPXN0a2aRSIDMe6vcdyPoqErRUVlMrPgiiDNAiBnYMYNfM%2FWlwnUklHIsEzoNAMPYtSZNa012u3xT18vEyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMh4zjAotjGVW%2FfHefKtwDCmeH13ntynDLdVzzkculfBxPpA0ttZ4ICa%2F9LZdxeu6C%2BdXH7BEsrQ%2BgUzIBMClT4OpKctL0NGhMREGJWU6Ssb0mGkEXKPZFSu1VeJFu0dBo%2FC2vzJTwJSwhwQGCxSP%2BzhB9rU1fQe4y1S%2FevaSgLF87loILJW9ptefh1AhxWHnACLAiaGA1oA5pu%2BvPb54JiICNhVTyGFobkeqG1qYL%2FV26lTqr5Ek4YaIg%2FDvgnZvTzlakQDloexxhN3%2BCC1v6hZY%2BonVW8p9UGfpOGMFwtWs2%2ByajgzWgp6FiL9u6rfOIn5CKl5scbmBQZSjt0iQ6ANnMgopVxVfosDDnEN0S%2FTexCFol1XTtMqd273qmjR1KaFMRPsmKKd7mHgbbkIPq7G95UBwOZdgts4kdTe5FxPjHkRkf3cabaDRDxPBdEaE5CROFmWra8qua9ZiJstAInWUDYM24rT4sMxJ4iHWXoWZVGVplJzUXIMc88%2F52i%2FZl77pb2itU2eHIWmaNWLHvDx3ofsCjwmdN%2B5tQ6hq%2Fsyjkm0evbJFtfjCnacez6xmgLs%2BfRuYBLKIMnpHrCJD9QnVjC6U26Pw4TFaBSFlyam3CcqQLOdNYR2AHtUY5G1d%2B8P8%2Bjpb3uQFxKQUw5oKjvgY6pgFbbBjbkIBJiMRQdV39OGxf2odvurv22aKgbn3al7%2FlNkGjEOfosVjmtLVuV95kXeb1f6XoQ2adUwzoDuIO3FlIMVWeyoTwWaNTt5GLJbO3GnID9cAyfgNuUEjoCN9oj8b8IEbLUVsW4oZUfq07ACIoBDLM4LlC%2FyevPWFSYjvcxD6M47PNG9OZhM7%2FYTdHZ8s1j7g8%2BTGNiDCziP5RN1oCpN47Uhtg&X-Amz-Signature=6b9e874f726cbb6c4f8a0efaf21d2bd9146d3a5433e6a6468bc5d27678603d08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DSU7AXB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI1PJUmOPXN0a2aRSIDMe6vcdyPoqErRUVlMrPgiiDNAiBnYMYNfM%2FWlwnUklHIsEzoNAMPYtSZNa012u3xT18vEyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMh4zjAotjGVW%2FfHefKtwDCmeH13ntynDLdVzzkculfBxPpA0ttZ4ICa%2F9LZdxeu6C%2BdXH7BEsrQ%2BgUzIBMClT4OpKctL0NGhMREGJWU6Ssb0mGkEXKPZFSu1VeJFu0dBo%2FC2vzJTwJSwhwQGCxSP%2BzhB9rU1fQe4y1S%2FevaSgLF87loILJW9ptefh1AhxWHnACLAiaGA1oA5pu%2BvPb54JiICNhVTyGFobkeqG1qYL%2FV26lTqr5Ek4YaIg%2FDvgnZvTzlakQDloexxhN3%2BCC1v6hZY%2BonVW8p9UGfpOGMFwtWs2%2ByajgzWgp6FiL9u6rfOIn5CKl5scbmBQZSjt0iQ6ANnMgopVxVfosDDnEN0S%2FTexCFol1XTtMqd273qmjR1KaFMRPsmKKd7mHgbbkIPq7G95UBwOZdgts4kdTe5FxPjHkRkf3cabaDRDxPBdEaE5CROFmWra8qua9ZiJstAInWUDYM24rT4sMxJ4iHWXoWZVGVplJzUXIMc88%2F52i%2FZl77pb2itU2eHIWmaNWLHvDx3ofsCjwmdN%2B5tQ6hq%2Fsyjkm0evbJFtfjCnacez6xmgLs%2BfRuYBLKIMnpHrCJD9QnVjC6U26Pw4TFaBSFlyam3CcqQLOdNYR2AHtUY5G1d%2B8P8%2Bjpb3uQFxKQUw5oKjvgY6pgFbbBjbkIBJiMRQdV39OGxf2odvurv22aKgbn3al7%2FlNkGjEOfosVjmtLVuV95kXeb1f6XoQ2adUwzoDuIO3FlIMVWeyoTwWaNTt5GLJbO3GnID9cAyfgNuUEjoCN9oj8b8IEbLUVsW4oZUfq07ACIoBDLM4LlC%2FyevPWFSYjvcxD6M47PNG9OZhM7%2FYTdHZ8s1j7g8%2BTGNiDCziP5RN1oCpN47Uhtg&X-Amz-Signature=92abc1090ae2bd243adec7f280bd4a71bfff558df8102981ee57aac3b486a299&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
