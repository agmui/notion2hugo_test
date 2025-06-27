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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647K56T%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCLoOQX%2BSwa%2BQ%2BOVblo%2Bmps7XwRUnf9PBblPHxHpKejAwIhAKPSu7c2uRD7wSHlEH9670qskEb4e9R6SKGWiyt%2Fp68GKv8DCHAQABoMNjM3NDIzMTgzODA1Igz2AAi8VPihpKJONn0q3AOuGldKJT62ZjYMGOBVA2KgqHJ0pRtXi%2FGZ384L5HQK2%2BqguhAdKS6TwDQQ7zkQ1PqdbiY94PiHLz3IeOGq7nvw%2FMaxWIi42phT8cNWc%2F3QmN%2Ba5qNJLQeczXbETziraI3Xe9Npm6YfS2wBk62uRfP6e%2BMZHVGjE588MZydXEJJZXOmgW2EffgT1xgeIQrJ2vSWrBfpDgCvjXwo6klX%2Fvf5hP67PlPWyzE1OCCYdTQ3U7%2BXvy4%2Bh56logGI1DIAnj78MSlIDrg1mNHQ9gugQKhue1ehWVWQdxGK9adCDoM3kT8RPLlnjgVzVaLVD6ycKrdoo5N%2FUjNd9S6IX3zQO%2BT%2B1n9UqUULx0zKKMMQFxzH3BKB6ZmoGRuywf9dZb50xuAGwpnCjyqR5HQnP2LWJB7PBZHbdt9rCcUEB1WkRMNrOR1p%2Ffk1JAMJ1I4UDd5dxVH8kYBn5Rtq2YRrX3BYxj4u9oNEmwOb4JvJ94DmJrOeH5OYHtxkY1i86P8cr1eePhgXHEXaqY73QQx%2FwgCAykgrhgmy9HgdT4x2ap1bF4I3Lm9YtCOZjxjLO%2BDYm4HIq%2FduYVKFdMHsGSyGvoIewmTXf3x%2BfP81FfkDVAvwGG%2F35gxAmwhlcaqPIksKmjCA%2BPjCBjqkARHBawBTdgsGYVply7fJfMvC6RQFfjSsdnml5YWaPrqb5jzzAVxPGXcGpAytGqejkAKEoZiTXI%2B53maTA78OM4au8K3bJB3Tp%2Fp0P6qvDMV%2BBLvF9RN7VM7O1ArEbq3PF1vYsta4gPxdEDnE9UqJeciYntFmb4FmnSk80gdUy4dQXEkvgXMLxo%2FNhzxDqRt9U%2Feh0e229lmP7k5d4lap%2BLQmNREL&X-Amz-Signature=5e9bb3e5e086642eabdf89a88658f0a5be9e18f2eaf2095314f6aeeab099de68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y647K56T%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCLoOQX%2BSwa%2BQ%2BOVblo%2Bmps7XwRUnf9PBblPHxHpKejAwIhAKPSu7c2uRD7wSHlEH9670qskEb4e9R6SKGWiyt%2Fp68GKv8DCHAQABoMNjM3NDIzMTgzODA1Igz2AAi8VPihpKJONn0q3AOuGldKJT62ZjYMGOBVA2KgqHJ0pRtXi%2FGZ384L5HQK2%2BqguhAdKS6TwDQQ7zkQ1PqdbiY94PiHLz3IeOGq7nvw%2FMaxWIi42phT8cNWc%2F3QmN%2Ba5qNJLQeczXbETziraI3Xe9Npm6YfS2wBk62uRfP6e%2BMZHVGjE588MZydXEJJZXOmgW2EffgT1xgeIQrJ2vSWrBfpDgCvjXwo6klX%2Fvf5hP67PlPWyzE1OCCYdTQ3U7%2BXvy4%2Bh56logGI1DIAnj78MSlIDrg1mNHQ9gugQKhue1ehWVWQdxGK9adCDoM3kT8RPLlnjgVzVaLVD6ycKrdoo5N%2FUjNd9S6IX3zQO%2BT%2B1n9UqUULx0zKKMMQFxzH3BKB6ZmoGRuywf9dZb50xuAGwpnCjyqR5HQnP2LWJB7PBZHbdt9rCcUEB1WkRMNrOR1p%2Ffk1JAMJ1I4UDd5dxVH8kYBn5Rtq2YRrX3BYxj4u9oNEmwOb4JvJ94DmJrOeH5OYHtxkY1i86P8cr1eePhgXHEXaqY73QQx%2FwgCAykgrhgmy9HgdT4x2ap1bF4I3Lm9YtCOZjxjLO%2BDYm4HIq%2FduYVKFdMHsGSyGvoIewmTXf3x%2BfP81FfkDVAvwGG%2F35gxAmwhlcaqPIksKmjCA%2BPjCBjqkARHBawBTdgsGYVply7fJfMvC6RQFfjSsdnml5YWaPrqb5jzzAVxPGXcGpAytGqejkAKEoZiTXI%2B53maTA78OM4au8K3bJB3Tp%2Fp0P6qvDMV%2BBLvF9RN7VM7O1ArEbq3PF1vYsta4gPxdEDnE9UqJeciYntFmb4FmnSk80gdUy4dQXEkvgXMLxo%2FNhzxDqRt9U%2Feh0e229lmP7k5d4lap%2BLQmNREL&X-Amz-Signature=e7ec15464e2d858942b22f869a8c44d66d42a9e5cb40e834b805166ad65d292e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
