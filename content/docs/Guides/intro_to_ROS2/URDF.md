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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQJWFIJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHwMc0ftloyNbFmdVEaDfAFwolseeOMA2wsrce9esnEUAiADAVGF8Aio6nOBmhELrWQOx2SJLcbLfgOAL9%2FpRbFhniqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ISBRsd%2FRxpTdtQvKtwDmc%2BThkSYn2lJlI9IYBV1tyYroNOuASKhp1VspKi8WpBrjtgUxg2%2FNwS79qk4uRUdnzGc%2BjumqS5KfYAW7FPainVI0GRWaaICi%2B76AIsp4NV4m%2FtkR8V3opxD%2FwDEXpJUkkA0yz6tS9QaOilur9bSm68l8zKEzB3WfQryTwRs52t3P%2Fqy%2BywXwY1M9r3DToIaw4GKj6X7BcgJXd%2BvYGlZwBYLQ0ppk8hoa8YhTCAlvk7zZ3djLgcyCnhV5eWltXdggd64Ohc1rpoPBoyoRIaz8kDkxiIMBYj6Abj6Ggpqx2lJbL7o%2FcxyVT6lTfHEd4FKUg6YtsMV1G78seN4TulqhYPXpjrp1Qe%2BiV9Uygev8Y4%2FC%2BA8ERt4fAeL0Y9oCmGiPXMDPvr1MTszhYuI2HhspdxE%2FHoGWWB72gkbjHTfQz2x2DGkdP2474e6WchGM8nTXbKc%2B9jU27Lb5fAWzmf20LGxf9t6S4K93C8%2BWDWcoHv40Dhrke%2BX5AYLo8PGr8H7msW1V3rTTpvBUX9ApWWFeN9ETGR3QwPAusCdF8QLI%2FB2W6P8J9N1U0SSzsOiLiQ4QpxV7pXCMuWP94Vbt4bnFRDUgCKEvU42Kt0boiFgSDMgKS18DiR80RMQi2Uww4z5wQY6pgE77%2F03iEVD2PMiNDZQpjq1d9V4NUFCA5OuXArusbmVTEAINvGEf0hImr%2F9%2BY1v%2BClXCG8GAkOXoPpxKlVhz3sW4edzwH5tmA9VcBz2JxkuvvVM%2BKqDbbriA1wnqIgvfpbwS%2FdIn053rmjQlX4g%2BywCdNFye6z8HM5XTrMUw7eCDdwCRsx9kqi%2Fra9Du4mAI5W0SpJBAZOLPSs9VqQ0j7tOkK9LBs79&X-Amz-Signature=be3373702aeeb3e8d691ea8b91ddad488475eff37dd2225a865976f402de65a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQJWFIJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHwMc0ftloyNbFmdVEaDfAFwolseeOMA2wsrce9esnEUAiADAVGF8Aio6nOBmhELrWQOx2SJLcbLfgOAL9%2FpRbFhniqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ISBRsd%2FRxpTdtQvKtwDmc%2BThkSYn2lJlI9IYBV1tyYroNOuASKhp1VspKi8WpBrjtgUxg2%2FNwS79qk4uRUdnzGc%2BjumqS5KfYAW7FPainVI0GRWaaICi%2B76AIsp4NV4m%2FtkR8V3opxD%2FwDEXpJUkkA0yz6tS9QaOilur9bSm68l8zKEzB3WfQryTwRs52t3P%2Fqy%2BywXwY1M9r3DToIaw4GKj6X7BcgJXd%2BvYGlZwBYLQ0ppk8hoa8YhTCAlvk7zZ3djLgcyCnhV5eWltXdggd64Ohc1rpoPBoyoRIaz8kDkxiIMBYj6Abj6Ggpqx2lJbL7o%2FcxyVT6lTfHEd4FKUg6YtsMV1G78seN4TulqhYPXpjrp1Qe%2BiV9Uygev8Y4%2FC%2BA8ERt4fAeL0Y9oCmGiPXMDPvr1MTszhYuI2HhspdxE%2FHoGWWB72gkbjHTfQz2x2DGkdP2474e6WchGM8nTXbKc%2B9jU27Lb5fAWzmf20LGxf9t6S4K93C8%2BWDWcoHv40Dhrke%2BX5AYLo8PGr8H7msW1V3rTTpvBUX9ApWWFeN9ETGR3QwPAusCdF8QLI%2FB2W6P8J9N1U0SSzsOiLiQ4QpxV7pXCMuWP94Vbt4bnFRDUgCKEvU42Kt0boiFgSDMgKS18DiR80RMQi2Uww4z5wQY6pgE77%2F03iEVD2PMiNDZQpjq1d9V4NUFCA5OuXArusbmVTEAINvGEf0hImr%2F9%2BY1v%2BClXCG8GAkOXoPpxKlVhz3sW4edzwH5tmA9VcBz2JxkuvvVM%2BKqDbbriA1wnqIgvfpbwS%2FdIn053rmjQlX4g%2BywCdNFye6z8HM5XTrMUw7eCDdwCRsx9kqi%2Fra9Du4mAI5W0SpJBAZOLPSs9VqQ0j7tOkK9LBs79&X-Amz-Signature=202b24dbd2b4ffe063c4e473fcb31e306fb39f1a7aa61c8458cfaf664ec881c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
