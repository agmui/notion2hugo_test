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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQ6LKQB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7BasPmzpguMI4rwaibc7znRcY5%2FRMtUJzx2t%2Fx%2BVMkAiEAsDkZjpiH7Dad2xXdRKQ41H%2B%2B%2FsrJhYkQQ8x2I4OkXTcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHnfqM0WKDEm%2FYQNBSrcA5mifMCLIbTg8dg6CgSCPPnayURRjJIKM22gGF8mTRhRxliWZX8%2BI8%2BSgA1VYiLoWZGm%2FTyjXNePpkpvb8LjeKSCXZXkuMMMytSYIPbMNbmyBlZruPr8SKlt%2FO9UGQ398f2DDWLG56P6qh8owVd8nuraPUkRFOZy4ktzwPmn04EvCRbNcSwMUI5CKVrdPHCIRf2bhjxOQLsAfmQ0HlicgHYHK3qyEE0AmXsOIMoF2YaTTpFW8r6i5vd4RXgd9c7kpSdlxd40umbeq0HfX6tvRfzbiMxBCFUPb3Y%2B4JwkOC5SbBQ9EFjxaQRRKb2elsYnDU5vU8UqSL3LE8G6GGf6mw2AHqwERc61dQ1ebfy%2Br1gIvBtb8B9zp0G9RrroYb5kpz2VH2dRVZ11aoysvA8A7jM9tRtywxJ%2FjsrjS%2FX6k7mIsP4uw%2BlAxAwNqIxE5CIe8Bcq46U0JRFRN6WTpySWSgPqr3otual9qE7nQ%2B8JTjzAeX8kFUUrqEqjaD2Lz%2FYHiHDv2XKBa8fYp1YLEl9hKHFSkH%2FTl%2FkS%2FfLU1jUqMaO4US9G17eBS1tauUWkhQx5OW%2F4wJue%2BzKswAlX2g0WgaZRXlYEsUvXhbggH00zWnsRlPr%2Fq0ZP7haZUkfTMLn5pcEGOqUBD1%2Bp74MyAdZ2gTdaC%2FR7PTUuVlTVkhSxuMLeRuMxn1i4LiO5YnB9%2B%2BaQVvZFTUZJjI9XwHoPx%2Fge%2FkGoKoG7JMVzv1s%2BL6ebCyyBz7Yo7t1f3%2FaFy%2BIXEOzM8pdHypulVHxAK%2BTJY7CIS19hm3BgbQg0UdhX6BAfvVWQDBh058xB7nPHV%2FtJpn1JVc%2B9wqpQzjg1BeB9oyzXODJq0RGoo2%2Bw5owy&X-Amz-Signature=c667d716320acbd919f805b9dc8648d6fea4cc2bfa740fd290b3b2f6067d7a41&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQ6LKQB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7BasPmzpguMI4rwaibc7znRcY5%2FRMtUJzx2t%2Fx%2BVMkAiEAsDkZjpiH7Dad2xXdRKQ41H%2B%2B%2FsrJhYkQQ8x2I4OkXTcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHnfqM0WKDEm%2FYQNBSrcA5mifMCLIbTg8dg6CgSCPPnayURRjJIKM22gGF8mTRhRxliWZX8%2BI8%2BSgA1VYiLoWZGm%2FTyjXNePpkpvb8LjeKSCXZXkuMMMytSYIPbMNbmyBlZruPr8SKlt%2FO9UGQ398f2DDWLG56P6qh8owVd8nuraPUkRFOZy4ktzwPmn04EvCRbNcSwMUI5CKVrdPHCIRf2bhjxOQLsAfmQ0HlicgHYHK3qyEE0AmXsOIMoF2YaTTpFW8r6i5vd4RXgd9c7kpSdlxd40umbeq0HfX6tvRfzbiMxBCFUPb3Y%2B4JwkOC5SbBQ9EFjxaQRRKb2elsYnDU5vU8UqSL3LE8G6GGf6mw2AHqwERc61dQ1ebfy%2Br1gIvBtb8B9zp0G9RrroYb5kpz2VH2dRVZ11aoysvA8A7jM9tRtywxJ%2FjsrjS%2FX6k7mIsP4uw%2BlAxAwNqIxE5CIe8Bcq46U0JRFRN6WTpySWSgPqr3otual9qE7nQ%2B8JTjzAeX8kFUUrqEqjaD2Lz%2FYHiHDv2XKBa8fYp1YLEl9hKHFSkH%2FTl%2FkS%2FfLU1jUqMaO4US9G17eBS1tauUWkhQx5OW%2F4wJue%2BzKswAlX2g0WgaZRXlYEsUvXhbggH00zWnsRlPr%2Fq0ZP7haZUkfTMLn5pcEGOqUBD1%2Bp74MyAdZ2gTdaC%2FR7PTUuVlTVkhSxuMLeRuMxn1i4LiO5YnB9%2B%2BaQVvZFTUZJjI9XwHoPx%2Fge%2FkGoKoG7JMVzv1s%2BL6ebCyyBz7Yo7t1f3%2FaFy%2BIXEOzM8pdHypulVHxAK%2BTJY7CIS19hm3BgbQg0UdhX6BAfvVWQDBh058xB7nPHV%2FtJpn1JVc%2B9wqpQzjg1BeB9oyzXODJq0RGoo2%2Bw5owy&X-Amz-Signature=2f48dac3ab3f59259c4d6b89be2dcdf3834ec3f437c8b9067720dac39fb916d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
