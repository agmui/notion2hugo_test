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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NUYQCOP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCokQiU%2BEzng3FqVermNy35Zp2TpSfzKeOwceFDZssysQIhAISIIpejy3l2%2Bpl4cqhS3gBu4Qcejwgrz61yegSsxVFyKv8DCF8QABoMNjM3NDIzMTgzODA1IgyVvMyuUhiTUeqox84q3APzdal5f8loBmzA63TFyX1n5h6EuQKt2pYn2FyO8WAaUYH7xhynplkKY8mPEYxmfObTFhS5xTzs4L0XxL%2BSuZsXKKWZZJ2WFIODqJpVohxByC6h%2Fity77XC97oHuiI7XGuDzQ4eG40npXTv4SchvJS76JdesDYQt2w5DZKcpctjvDWaj57g9kHNRSKPNOrfU%2FHqmPWztF7sq7vm3W1JVfNT89CgIhRQuuedjAX9ur5n5VtSvmgy%2FXvlEBuSBtqTwbu6efGQGha6hdRvmFRH1UzclSI058naIMc9VCuu%2FnhbRcTyACcrwqos7NmCpC4lM6aM1BLQxIUEip%2Bn4YXDyDOhlBYmAgylQ6talt1FUTRQCjkHQB883LL7cKmw4S3aaKKdseH1T0DousBxmkijUgGsRsvw7woagE1D2fBv3zk7ul6BisImx6QX8t%2B5p2F8wIHdcVnIBRyqhdqDGVztxF06gpOoLcBwDY1Z4QVUDRzP0KaaAbTbezJLnFN5iHHLEMstAiL%2FYI4W9BGCuNjxlk9FcKiPEw1p5RbDxR6gSQNXGMLh2ovMPCLBV9vd1NUsEj2f0N43mYIRuYo7q8sgLpYwL62khQHxm%2FzGMDCq0xfrrBaLuCB%2BQS%2Fnaa88hzCc0O3ABjqkAfE6R%2BpTZQ%2FgS%2FHrUEjpIoeg72hLwA2RnTdwmFIUWS%2B%2FWAgQP2o%2BlzNnM55ESUybRj%2BXRQVc%2B2QMeTSV25zM4DZkAZATujOo11vQnkZnb2PV8LB9QQw9nfStQGBZazaTGzO5w6ZUz%2BYlaHcmLf91X48p%2F4QuM1LXu6OoGqh5NLIB8NcfDEHtWNJP%2BC%2BELYwjCIG0POgyCmj2P%2F%2FH1c%2F2wJ3wmD7p&X-Amz-Signature=be5e216787d43e203d02858fb5edf42b2a8e51138b412724f4e53b12c01470bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NUYQCOP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCokQiU%2BEzng3FqVermNy35Zp2TpSfzKeOwceFDZssysQIhAISIIpejy3l2%2Bpl4cqhS3gBu4Qcejwgrz61yegSsxVFyKv8DCF8QABoMNjM3NDIzMTgzODA1IgyVvMyuUhiTUeqox84q3APzdal5f8loBmzA63TFyX1n5h6EuQKt2pYn2FyO8WAaUYH7xhynplkKY8mPEYxmfObTFhS5xTzs4L0XxL%2BSuZsXKKWZZJ2WFIODqJpVohxByC6h%2Fity77XC97oHuiI7XGuDzQ4eG40npXTv4SchvJS76JdesDYQt2w5DZKcpctjvDWaj57g9kHNRSKPNOrfU%2FHqmPWztF7sq7vm3W1JVfNT89CgIhRQuuedjAX9ur5n5VtSvmgy%2FXvlEBuSBtqTwbu6efGQGha6hdRvmFRH1UzclSI058naIMc9VCuu%2FnhbRcTyACcrwqos7NmCpC4lM6aM1BLQxIUEip%2Bn4YXDyDOhlBYmAgylQ6talt1FUTRQCjkHQB883LL7cKmw4S3aaKKdseH1T0DousBxmkijUgGsRsvw7woagE1D2fBv3zk7ul6BisImx6QX8t%2B5p2F8wIHdcVnIBRyqhdqDGVztxF06gpOoLcBwDY1Z4QVUDRzP0KaaAbTbezJLnFN5iHHLEMstAiL%2FYI4W9BGCuNjxlk9FcKiPEw1p5RbDxR6gSQNXGMLh2ovMPCLBV9vd1NUsEj2f0N43mYIRuYo7q8sgLpYwL62khQHxm%2FzGMDCq0xfrrBaLuCB%2BQS%2Fnaa88hzCc0O3ABjqkAfE6R%2BpTZQ%2FgS%2FHrUEjpIoeg72hLwA2RnTdwmFIUWS%2B%2FWAgQP2o%2BlzNnM55ESUybRj%2BXRQVc%2B2QMeTSV25zM4DZkAZATujOo11vQnkZnb2PV8LB9QQw9nfStQGBZazaTGzO5w6ZUz%2BYlaHcmLf91X48p%2F4QuM1LXu6OoGqh5NLIB8NcfDEHtWNJP%2BC%2BELYwjCIG0POgyCmj2P%2F%2FH1c%2F2wJ3wmD7p&X-Amz-Signature=51e12146f88106360c26a29270284c07453970a0b5894c7dafa346952997c3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
