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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQBG3V3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCJ%2BqaMIUWipF0bbhRiSIfHQFg%2F2gyyn2amV5ImjGeL6QIgUj93Wry0CpjVji4iBxQsMyF4WO1N4AZBemTJQU7FuJIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkSxqS09lM58EiWircA4YdTZ3rch3ytleJi5qRno%2FLeLKDxJHjlnk6LBAJYhokFb%2BDDGF5fw2eIhnHMDDRNsa8Gf8laZw%2BaCoSFncho2KC1C4rIJhD8YfVZxfq9PGXOMV6WFgc1Q5vXySeQz%2BMboom2qIrjSIg4WpXttp%2FgQ9Tgr4e9cCdtdZyUnBidpMDsqVCjbkugPhQz7UTi78hcOijtXjHg3EDPnfw53MhgS3Nwwbl8AqqKl5FdW%2BXN2xklGv7hvNTcpXnJukfLAuF9Q1y1SIX8nnadgFW2%2FUfek1Rt4sTLSbxTQC43LZf7WUrmGwtYPaA3uYdrFVebiiKBdb4Q8Wdk2atgkYOE%2BxI8KSHM865rnWRVE75MXMxjbeZdon7qgats2Ymme8LW0QRgwIwAeup4fSx4L5GuKV2x%2FUQPkyzNb4WwyCyDpAxfuaqxIpcGnPrUSUGRe5wTRyf2BskVjm5dGCVP3jbvG78hChmhAW5RIh%2BagJ0j84hUwEYFiOV4drtEMZ8HhyPlivs5po3gXUcROGpfOqX2p4s0l8UfogyftDWGwdKIC%2BhesHb7QsdPawzyRZ%2FzHvmxyvv4YDWvLxLzjS2NL8V9aSPJ%2FzJCNetkqOg4c%2FA1BeAECqMNKK6qRLTjB4SrLpPMLat%2Br4GOqUBUkQZ4oJzyaMG9IwzPVsWSxQPqrEwfXkAk9q4wsZ6ouOY5cYs%2FIk6khZH3falVpr8xVDQYblVPhcnpo0rBnh3VFFjRc4DH2E8g%2BHBeqtEyDV1xddnAXMY2Pb%2BimzkCk2%2B6PWBi3pBhNOPLMzLvD7hCh%2BaEGHYeByUPGLruUuzvqqwhFT1WfUwoE4e%2FFqkVU8hh%2BC0FLU6G94iyxti1aB7WU%2BHo0LY&X-Amz-Signature=f871d6038cbec1ba031f69db97b6e21b47764b513d55a3d33154eb81fe262e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQBG3V3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCJ%2BqaMIUWipF0bbhRiSIfHQFg%2F2gyyn2amV5ImjGeL6QIgUj93Wry0CpjVji4iBxQsMyF4WO1N4AZBemTJQU7FuJIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkSxqS09lM58EiWircA4YdTZ3rch3ytleJi5qRno%2FLeLKDxJHjlnk6LBAJYhokFb%2BDDGF5fw2eIhnHMDDRNsa8Gf8laZw%2BaCoSFncho2KC1C4rIJhD8YfVZxfq9PGXOMV6WFgc1Q5vXySeQz%2BMboom2qIrjSIg4WpXttp%2FgQ9Tgr4e9cCdtdZyUnBidpMDsqVCjbkugPhQz7UTi78hcOijtXjHg3EDPnfw53MhgS3Nwwbl8AqqKl5FdW%2BXN2xklGv7hvNTcpXnJukfLAuF9Q1y1SIX8nnadgFW2%2FUfek1Rt4sTLSbxTQC43LZf7WUrmGwtYPaA3uYdrFVebiiKBdb4Q8Wdk2atgkYOE%2BxI8KSHM865rnWRVE75MXMxjbeZdon7qgats2Ymme8LW0QRgwIwAeup4fSx4L5GuKV2x%2FUQPkyzNb4WwyCyDpAxfuaqxIpcGnPrUSUGRe5wTRyf2BskVjm5dGCVP3jbvG78hChmhAW5RIh%2BagJ0j84hUwEYFiOV4drtEMZ8HhyPlivs5po3gXUcROGpfOqX2p4s0l8UfogyftDWGwdKIC%2BhesHb7QsdPawzyRZ%2FzHvmxyvv4YDWvLxLzjS2NL8V9aSPJ%2FzJCNetkqOg4c%2FA1BeAECqMNKK6qRLTjB4SrLpPMLat%2Br4GOqUBUkQZ4oJzyaMG9IwzPVsWSxQPqrEwfXkAk9q4wsZ6ouOY5cYs%2FIk6khZH3falVpr8xVDQYblVPhcnpo0rBnh3VFFjRc4DH2E8g%2BHBeqtEyDV1xddnAXMY2Pb%2BimzkCk2%2B6PWBi3pBhNOPLMzLvD7hCh%2BaEGHYeByUPGLruUuzvqqwhFT1WfUwoE4e%2FFqkVU8hh%2BC0FLU6G94iyxti1aB7WU%2BHo0LY&X-Amz-Signature=fbb32368038410b4340934e4da8a0f304c3d6303f4167145bc1531b84b6f81f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
