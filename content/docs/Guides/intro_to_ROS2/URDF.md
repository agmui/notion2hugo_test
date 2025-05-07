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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJMHVJTW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1P5PMNjJ3EeiR%2FxA4a6NtWS%2BxUhiCFOEPbbrpL1MzcgIhANW5TKma8rW5qAjiDEtfLXDPW6vv6Xhnii5vni2s9fCQKv8DCGMQABoMNjM3NDIzMTgzODA1IgzXJJ81sIlzKlavA00q3ANokyzKn83YGT%2Fvfu36%2Bw%2FW9HLYmlGOmxvlLXONr4SCbZs3EPVhPX0h%2BcoyoNSUqUGA%2BTXBu1yWr9ClxzBT9wUAaQvvFAB7G3fMEFpXu4H2YNWAhHHCgwAfd2tSzzHLHABEeJSsdLuduSvYVeM4HMOTch6EXNMly4ba9biNLEIqiX%2Bu63ZWq9bj9a1Y56qaI9GhJSoHasr63NZeyMrJttiPafIbCpxTKsJx%2FbItK6wkvspTPGl%2Falv%2B%2BfSB%2B1LV8LxNmlzQTrrid4LL%2BlQgHGK6INr4MgSm1AxLrUjTL4fZ7sL4t7PQoglzA9rODlQgsjNI7mr2ZaVnzvPld6cTxpKyPykgohkEoAYzlXVElknzNItoAg5aO8uucckVro%2BdMWyyrsf5mrTbRV0CyuOnuwEeoFOJ5H31M%2F0e6UplpbdgOH8lFPszKzotM1isqbDFn5JXEgr7oi8cXVpEnH%2F4kIU2Ik9X8npDC7d0P%2FbjgSHc3HxLoSkGrTpgmSupxN%2BSkzKIiOJ1DGK4tHtAtt%2FkDROiQ%2FRwgI7C54qQH8puG0832pccxdfX27DK3uPFrqMNFOSPhWTeCRmRGMZ1BG%2B2LsynRiaNrqY8UEy05t36dsGhIfpLHT6ai7sGfpspizD%2FuO7ABjqkAcBu3pleOWFTt1wlvZLqjUQsmroIRHzOF24s4q40Ktap8PDVF%2Fmwu7ZQA%2BsvGlCPNsQpvPf3WzXZQW6eQ8sfyJpxVcI%2BZDl3E9xdeucY1Mx13hI1JIX1v9lQveTp2fnezBqpYw%2BMWL%2BNAAZYYUd3r%2FReqzKpNMDNmncNI6kTReOxzmnolu4Sw4ZCoGGPzk4kwdNhrdtLVOEy021xMrthJyTs4caU&X-Amz-Signature=04b39f7639607a08ee968be2f4218662d002731f4162335675e0b2e5814bb90d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJMHVJTW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1P5PMNjJ3EeiR%2FxA4a6NtWS%2BxUhiCFOEPbbrpL1MzcgIhANW5TKma8rW5qAjiDEtfLXDPW6vv6Xhnii5vni2s9fCQKv8DCGMQABoMNjM3NDIzMTgzODA1IgzXJJ81sIlzKlavA00q3ANokyzKn83YGT%2Fvfu36%2Bw%2FW9HLYmlGOmxvlLXONr4SCbZs3EPVhPX0h%2BcoyoNSUqUGA%2BTXBu1yWr9ClxzBT9wUAaQvvFAB7G3fMEFpXu4H2YNWAhHHCgwAfd2tSzzHLHABEeJSsdLuduSvYVeM4HMOTch6EXNMly4ba9biNLEIqiX%2Bu63ZWq9bj9a1Y56qaI9GhJSoHasr63NZeyMrJttiPafIbCpxTKsJx%2FbItK6wkvspTPGl%2Falv%2B%2BfSB%2B1LV8LxNmlzQTrrid4LL%2BlQgHGK6INr4MgSm1AxLrUjTL4fZ7sL4t7PQoglzA9rODlQgsjNI7mr2ZaVnzvPld6cTxpKyPykgohkEoAYzlXVElknzNItoAg5aO8uucckVro%2BdMWyyrsf5mrTbRV0CyuOnuwEeoFOJ5H31M%2F0e6UplpbdgOH8lFPszKzotM1isqbDFn5JXEgr7oi8cXVpEnH%2F4kIU2Ik9X8npDC7d0P%2FbjgSHc3HxLoSkGrTpgmSupxN%2BSkzKIiOJ1DGK4tHtAtt%2FkDROiQ%2FRwgI7C54qQH8puG0832pccxdfX27DK3uPFrqMNFOSPhWTeCRmRGMZ1BG%2B2LsynRiaNrqY8UEy05t36dsGhIfpLHT6ai7sGfpspizD%2FuO7ABjqkAcBu3pleOWFTt1wlvZLqjUQsmroIRHzOF24s4q40Ktap8PDVF%2Fmwu7ZQA%2BsvGlCPNsQpvPf3WzXZQW6eQ8sfyJpxVcI%2BZDl3E9xdeucY1Mx13hI1JIX1v9lQveTp2fnezBqpYw%2BMWL%2BNAAZYYUd3r%2FReqzKpNMDNmncNI6kTReOxzmnolu4Sw4ZCoGGPzk4kwdNhrdtLVOEy021xMrthJyTs4caU&X-Amz-Signature=653ba828d54131ae961ff733f4639392b6b2f192c6a319ac5307119fb755bf70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
