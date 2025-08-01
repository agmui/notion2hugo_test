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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEP72T4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2zB9PI7GotSPhsVxmOCKsFV%2Byne1uDFk8PBjd50EZ5gIgO%2FvvATFCaFLOxXV6Y4EtM95uleSNJeAySzdLPC1k%2FKQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhWFa%2FVJSbQe5SQFSrcA1bMGozxd%2BNgRKgbGLxaCAC8ggNUdpfQihc65qLtI%2BQSnWV07HBWyF64SlHrKcfK%2F5nyzKPsoLq0%2Bvi%2BQIXNS5EfinqC87YxiSU7kZCielYoCB6tK60OT29sJ%2F%2BVO5K0NwOyvzGpT5ZuR3kIp5H5Z%2BbduRBIs4PgG0ihwOGC%2Fa8VWz69r9ry2m1tsO59YNmdMbStMxM7yonddMoNMbONNGtVBUeacaGf9XPUBiSAKgA7tsR7DcRMMTOHxHaoDkyR74PlJvxPJOnumHZ2jMWcbv4TnsvkCmqCcfDbpla9O7kiLOmV57qK8HUrN36vyglJHsx9k4BbpwTr8ukurFwaRus%2BNcb8qhE05y9FgpHaAq9oYKhc7QA9Cj%2BGgMbW8MoZikuuR1H7VtRoupw6JtCNSZxy4elENlsWl71JY45PW5ob%2FofCf%2B146tCVeQWa0YANIwpqQboZN8C%2F8SUNReIPWf9gCx1c2PXdSX6dn8QYaimn5UXKTyc1X250ORclh8lkG8UnqFOiml%2F9UaxumY79VqDtWCXeEjJGupQ00hQCOCiP5f1vLO204aij5jmxLBX4QpyqVvD1UudjOU62rO2mof9%2FLGrvW%2BkcjuqzvA9pXJEfc1y7Glbiw95kcKAIMPORssQGOqUBkNvg2sD0TAfuA6cgzPS7NBQOvFR0JIGfkqh7j5Lcz%2BmOBJnXpSzR9eocGkVeJvs73RHvikfZ%2BY1X%2BuCjYgdyfLMZmwspYiMmNUwRcnIjp3w%2Bvu8XEr%2BJKJTDosNyCd0JPgqfs7wkrUKdqXe8THRHdupAVtDqe%2FqXGkkCKya%2B84MR3uXqAZ%2Bqr3qk1e44gv9eqwCs8pElqi%2FKERMUT5yA%2BG%2B5wu52&X-Amz-Signature=7de38d04f4964dafdf6ddb10f9bbca6b5051fd5fd0b21538a7b2ffd5b8dd96cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEP72T4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2zB9PI7GotSPhsVxmOCKsFV%2Byne1uDFk8PBjd50EZ5gIgO%2FvvATFCaFLOxXV6Y4EtM95uleSNJeAySzdLPC1k%2FKQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhWFa%2FVJSbQe5SQFSrcA1bMGozxd%2BNgRKgbGLxaCAC8ggNUdpfQihc65qLtI%2BQSnWV07HBWyF64SlHrKcfK%2F5nyzKPsoLq0%2Bvi%2BQIXNS5EfinqC87YxiSU7kZCielYoCB6tK60OT29sJ%2F%2BVO5K0NwOyvzGpT5ZuR3kIp5H5Z%2BbduRBIs4PgG0ihwOGC%2Fa8VWz69r9ry2m1tsO59YNmdMbStMxM7yonddMoNMbONNGtVBUeacaGf9XPUBiSAKgA7tsR7DcRMMTOHxHaoDkyR74PlJvxPJOnumHZ2jMWcbv4TnsvkCmqCcfDbpla9O7kiLOmV57qK8HUrN36vyglJHsx9k4BbpwTr8ukurFwaRus%2BNcb8qhE05y9FgpHaAq9oYKhc7QA9Cj%2BGgMbW8MoZikuuR1H7VtRoupw6JtCNSZxy4elENlsWl71JY45PW5ob%2FofCf%2B146tCVeQWa0YANIwpqQboZN8C%2F8SUNReIPWf9gCx1c2PXdSX6dn8QYaimn5UXKTyc1X250ORclh8lkG8UnqFOiml%2F9UaxumY79VqDtWCXeEjJGupQ00hQCOCiP5f1vLO204aij5jmxLBX4QpyqVvD1UudjOU62rO2mof9%2FLGrvW%2BkcjuqzvA9pXJEfc1y7Glbiw95kcKAIMPORssQGOqUBkNvg2sD0TAfuA6cgzPS7NBQOvFR0JIGfkqh7j5Lcz%2BmOBJnXpSzR9eocGkVeJvs73RHvikfZ%2BY1X%2BuCjYgdyfLMZmwspYiMmNUwRcnIjp3w%2Bvu8XEr%2BJKJTDosNyCd0JPgqfs7wkrUKdqXe8THRHdupAVtDqe%2FqXGkkCKya%2B84MR3uXqAZ%2Bqr3qk1e44gv9eqwCs8pElqi%2FKERMUT5yA%2BG%2B5wu52&X-Amz-Signature=f1d742c28353ee4186fb349d6b6e92509ae0471969889832dc795bc69eb5e7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
