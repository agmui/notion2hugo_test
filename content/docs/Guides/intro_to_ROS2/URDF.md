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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZRQO3V%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrjrTCVItB6KWtBmno5wRi%2B3yH9%2FdrU25luHHwMD8%2F2AiBmENejDpd5UbFfgdpDkguIt26aXj4LABYqOBeLzjKM9yqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYp%2B8fxOeFGtDq2TKtwDShYqnPg3rx1Ja8WavXpel%2BpB9eJpnFJM97CJ3R%2BPgayWK2y97z6zNpw4JhwnLytlcYtv4hvqjcyG%2FnD8yYVHPBF1hsiYho4W0ieVi7KGoQ%2BcEsBJxh7Fnqz6%2B7TkDivkTIOU1z8G1S2ZazT%2FihT%2BX6tFzuhIZOiUgHLpFgeADLH2AXSs8o3bEV1t%2B2cQgRtXGHT7F2rK3D0T1utyfCuzTdX4ikIusOJ6qPKmku0e7cHQXXpc1QeRF2STAuSu2oeUQqN8XrFL79oHMh%2F5HPsioB%2BAerK2XPtf2%2FZHxAKQcjXbqO7UuxKxS9ZGQqAdT48IWMR1kZBoPupTrOMkh8kpNHzqcjkljItTkq8EAIqXV4hm8qGnBYoaWgP1vNrJNA5R%2FMvwCC%2BoxZLIUQzzDOK8krq7m2mcv%2FcNM3%2BldcRjoI2QffIO%2FqVgRctgdzmKqQdBPR%2F9gWWmqvIn9D%2BEdFEM2B28N8JK3RSfnSzr6Ia4uAFx%2BNf9Bw1Tc9ORwhBoH9kNYgSwPJvfeJTLAc6LWfbK1l%2BGbE8mY%2BLlDprv1Alh%2FboqTp8ieklgtlPcnAWkz3Bw5rBnCy%2FIeaM4xF%2FAaVC7IqhEoXOxieXO4gCD6uB6dLKQGw7ATVkm2yYdtccw4LWyvQY6pgHwUwzBEtH0ddoPc08QHhAotM5wUFwwrnYWCOS7ZL7cm7DJPfo4xPckrFKTjH4G6IV2WEChFHxje2X1q33s8M8Y1QZ5HZTCsZ8GgKd81eRKI%2FiWI0wIMBIksEB2Rr%2FkBgiflHzT5zboO0k3tpbEDPk5IuFkYu7w02v4sl08DA%2BBsyZ4ueH5rL%2FEM%2FnsflNXvzbkETFqdPdyFXmeQEtKrq9lYiv2nSTB&X-Amz-Signature=88cd1e25044dec5fabdc9a1ca4a70625ac9a9283aacd7a549d20e8a811965d51&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZRQO3V%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrjrTCVItB6KWtBmno5wRi%2B3yH9%2FdrU25luHHwMD8%2F2AiBmENejDpd5UbFfgdpDkguIt26aXj4LABYqOBeLzjKM9yqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYp%2B8fxOeFGtDq2TKtwDShYqnPg3rx1Ja8WavXpel%2BpB9eJpnFJM97CJ3R%2BPgayWK2y97z6zNpw4JhwnLytlcYtv4hvqjcyG%2FnD8yYVHPBF1hsiYho4W0ieVi7KGoQ%2BcEsBJxh7Fnqz6%2B7TkDivkTIOU1z8G1S2ZazT%2FihT%2BX6tFzuhIZOiUgHLpFgeADLH2AXSs8o3bEV1t%2B2cQgRtXGHT7F2rK3D0T1utyfCuzTdX4ikIusOJ6qPKmku0e7cHQXXpc1QeRF2STAuSu2oeUQqN8XrFL79oHMh%2F5HPsioB%2BAerK2XPtf2%2FZHxAKQcjXbqO7UuxKxS9ZGQqAdT48IWMR1kZBoPupTrOMkh8kpNHzqcjkljItTkq8EAIqXV4hm8qGnBYoaWgP1vNrJNA5R%2FMvwCC%2BoxZLIUQzzDOK8krq7m2mcv%2FcNM3%2BldcRjoI2QffIO%2FqVgRctgdzmKqQdBPR%2F9gWWmqvIn9D%2BEdFEM2B28N8JK3RSfnSzr6Ia4uAFx%2BNf9Bw1Tc9ORwhBoH9kNYgSwPJvfeJTLAc6LWfbK1l%2BGbE8mY%2BLlDprv1Alh%2FboqTp8ieklgtlPcnAWkz3Bw5rBnCy%2FIeaM4xF%2FAaVC7IqhEoXOxieXO4gCD6uB6dLKQGw7ATVkm2yYdtccw4LWyvQY6pgHwUwzBEtH0ddoPc08QHhAotM5wUFwwrnYWCOS7ZL7cm7DJPfo4xPckrFKTjH4G6IV2WEChFHxje2X1q33s8M8Y1QZ5HZTCsZ8GgKd81eRKI%2FiWI0wIMBIksEB2Rr%2FkBgiflHzT5zboO0k3tpbEDPk5IuFkYu7w02v4sl08DA%2BBsyZ4ueH5rL%2FEM%2FnsflNXvzbkETFqdPdyFXmeQEtKrq9lYiv2nSTB&X-Amz-Signature=a7c41b7747a48f33b0c697620417dffe4ab94803b7643e45e49f8b6e0b63a659&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
