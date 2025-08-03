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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65HUWUF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwyXuQ1pe7A403ql40n5HB5%2FuRQsxDI8tvH8ulq25RogIhAJ1LRo%2BWS%2BPLdCedgWzw4ZtGnFOJdDTUBcAhIZ5esR7XKv8DCDIQABoMNjM3NDIzMTgzODA1IgzNvu3Hi8EAREv5YCYq3AOwitT929BXos9pgJdFE%2FCT%2BXJTZMLGtxCJt%2FcAXQRFnjDSNhiJE8VRSV6J8c67LkU93MJKeVssBu%2FmpH4fczSAJzPJp3Vb0uqRunUa1L6HeX%2BJw9v%2BKKFS0Ytm4sYLJjGUMnvhVw2kElQLZ%2B1EAVPb4M5q6FbjmraX9I%2FOzCB%2B8wDKxW08NbRv4cgqkmcIV84sjA9sB40fwW8kRyn3Dte9Xt3ubn7p22cQiAJ2jcvWod5Sg1XwIklqIT%2FnyISVSjrkap277e8L1sfHHi90aoUZquIU7UCGTgYCjj1qqUtH4RTQ8qewAUTd17CpvQK5FvnU8QK0yMT4DOzeQJSr9F73v9qPLIvoHcAnxBqZuOmEq96pZ1l610TUA5WlKPsJOB%2FlzavmvDyyEiG6NSoNyyoOTeupZeY9My48b7fBSA44xyD%2BVoYxEAv9ZmOrzi1RiUdt2aHJZ2iQB%2F2Tmpy5pUgo2QgCgdGGl%2BWezGIETt4Nph%2ByI0BoxsPDK0wXP0L2Jqp0yPiedt773prS0HkAzsHNSsRqTUNE6uefv4oTRFzomPjIh5in5DP6auy6CbVfitz4PIp%2BWg%2B8h39GCimBenqslUkqMQ5rw1XEj8pCZtqhHY9vdAkWygnjets5wzCAq77EBjqkARCXAo2TUpcPwZTvTgB%2Fa%2BM9uwjsmt5Z%2BiCE%2BuWj1yyR%2BLlX7Ck2pudik7dJmv3px9yQleuIQPv3o2r%2FbI9X2pOSicnvubfoIu4OagaM7zZHfjxevj37D5YQXmzosLxcDkve%2BE5lEdpteIGSJyQgSrcx3kNX3MAbGFOp8xNCYODGuDb0pkCeBAOgP4hJ3pgFFQ6uNQ7BW8Kutkrut2OTmrqr2EXe&X-Amz-Signature=b8d6f64736f3efd1ee84ddb9043db8576cc0c3f81546d0c12b547c4490c38287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65HUWUF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwyXuQ1pe7A403ql40n5HB5%2FuRQsxDI8tvH8ulq25RogIhAJ1LRo%2BWS%2BPLdCedgWzw4ZtGnFOJdDTUBcAhIZ5esR7XKv8DCDIQABoMNjM3NDIzMTgzODA1IgzNvu3Hi8EAREv5YCYq3AOwitT929BXos9pgJdFE%2FCT%2BXJTZMLGtxCJt%2FcAXQRFnjDSNhiJE8VRSV6J8c67LkU93MJKeVssBu%2FmpH4fczSAJzPJp3Vb0uqRunUa1L6HeX%2BJw9v%2BKKFS0Ytm4sYLJjGUMnvhVw2kElQLZ%2B1EAVPb4M5q6FbjmraX9I%2FOzCB%2B8wDKxW08NbRv4cgqkmcIV84sjA9sB40fwW8kRyn3Dte9Xt3ubn7p22cQiAJ2jcvWod5Sg1XwIklqIT%2FnyISVSjrkap277e8L1sfHHi90aoUZquIU7UCGTgYCjj1qqUtH4RTQ8qewAUTd17CpvQK5FvnU8QK0yMT4DOzeQJSr9F73v9qPLIvoHcAnxBqZuOmEq96pZ1l610TUA5WlKPsJOB%2FlzavmvDyyEiG6NSoNyyoOTeupZeY9My48b7fBSA44xyD%2BVoYxEAv9ZmOrzi1RiUdt2aHJZ2iQB%2F2Tmpy5pUgo2QgCgdGGl%2BWezGIETt4Nph%2ByI0BoxsPDK0wXP0L2Jqp0yPiedt773prS0HkAzsHNSsRqTUNE6uefv4oTRFzomPjIh5in5DP6auy6CbVfitz4PIp%2BWg%2B8h39GCimBenqslUkqMQ5rw1XEj8pCZtqhHY9vdAkWygnjets5wzCAq77EBjqkARCXAo2TUpcPwZTvTgB%2Fa%2BM9uwjsmt5Z%2BiCE%2BuWj1yyR%2BLlX7Ck2pudik7dJmv3px9yQleuIQPv3o2r%2FbI9X2pOSicnvubfoIu4OagaM7zZHfjxevj37D5YQXmzosLxcDkve%2BE5lEdpteIGSJyQgSrcx3kNX3MAbGFOp8xNCYODGuDb0pkCeBAOgP4hJ3pgFFQ6uNQ7BW8Kutkrut2OTmrqr2EXe&X-Amz-Signature=f5b7c2f1d917f9fc30a1de15b030631150d4b27279ce97eea54c1f8966e27d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
