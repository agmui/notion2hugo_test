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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FT5GTOO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrgoeH8vv%2B4qinedrZAmyqCo%2FgKzQyeCAEDHQiWy%2FD3AiEAsifZHwJyyNvnUlEnAi%2BQ5CgGtkpdts52OrARTNbJg5gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLXwMuIwM9M1mJtkAircAx2lceqXnXP6D%2FOYhzM3u22Xq2cQcruIaEmAQy%2Bo09kkbR9Z0s7YumbVxm3t70vlvqRQIwHtyJavIM5ojVHYAM%2BCwYKuPBk2WjWGHvHK4mSLfUb3f3MQdLX6ugI2iTELO2WEZK%2BwDXuz8IsWlq4zzQbLbZAoeJik0BlslIQubk07gJPKNeCvMV1V1fIDeBOfBKGeRAdsHML2FomEqDkzRBEXg8v38WbS9tzDihR%2BbP3eE3kLdG%2FAK0EjeGA6Dn8Eb4Mn%2BWbGjaAo6xe70gd0nBLfVtDTFV7sVjCL5kRdSBSohj9%2BDJLT5V0uvhVAAhNElknbv6OtVBX%2FVxuBihwnJlrtQhAddyZ2chgiwRWw%2B1ZjMVYRKCvR%2F7TyCufGH7VfKojSBzw5E1WomOUTTZ68%2FmIUAaic%2BcLs%2Bst6gByMMtmrSUzlWyeL818x8j2yZqf3vvYIf5r5CSEX%2BTl32fDgddy0CWBI%2BT5ATzNzsIYGZHrNvO1dpF0zwyUAIOnM0KnbxopUprJs3bUDcIbhYezN%2BXfBhyElbyATRi2uaNfKA59dAX2r5khrC6r4axr8ubh9LXjr2olXaN5ADZa65cuxpsxUW5idXBCoQuwSnSlosOuSoNG0p4Jc9ebph4QGMLr6q8AGOqUBSa9wBBbsGRyMRiaLdqvPBAfN%2FPywP6qervVTjImezMmK8onC1Qjt9xPi7%2BkKnQI%2F7I%2F6rZjpnAYqSIiHlRoC7EmpfSdrsSdUYRyPhZdPWJRz%2Faxh83LP5RRmisDHe%2Fvv46%2Bd45upHs14VHB%2F%2BTZno8HLoV86KnKy%2FbxnBDCAkhhYs8Mec2vjvh4P0Ng1z1DAQ8SSl6uHcqdCw7URHVqGONjlM%2FX4&X-Amz-Signature=4f439a07aba25f1a94c5ce67a20aa1cf6a9e287ba98a61c0047d4e556b28b977&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FT5GTOO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrgoeH8vv%2B4qinedrZAmyqCo%2FgKzQyeCAEDHQiWy%2FD3AiEAsifZHwJyyNvnUlEnAi%2BQ5CgGtkpdts52OrARTNbJg5gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLXwMuIwM9M1mJtkAircAx2lceqXnXP6D%2FOYhzM3u22Xq2cQcruIaEmAQy%2Bo09kkbR9Z0s7YumbVxm3t70vlvqRQIwHtyJavIM5ojVHYAM%2BCwYKuPBk2WjWGHvHK4mSLfUb3f3MQdLX6ugI2iTELO2WEZK%2BwDXuz8IsWlq4zzQbLbZAoeJik0BlslIQubk07gJPKNeCvMV1V1fIDeBOfBKGeRAdsHML2FomEqDkzRBEXg8v38WbS9tzDihR%2BbP3eE3kLdG%2FAK0EjeGA6Dn8Eb4Mn%2BWbGjaAo6xe70gd0nBLfVtDTFV7sVjCL5kRdSBSohj9%2BDJLT5V0uvhVAAhNElknbv6OtVBX%2FVxuBihwnJlrtQhAddyZ2chgiwRWw%2B1ZjMVYRKCvR%2F7TyCufGH7VfKojSBzw5E1WomOUTTZ68%2FmIUAaic%2BcLs%2Bst6gByMMtmrSUzlWyeL818x8j2yZqf3vvYIf5r5CSEX%2BTl32fDgddy0CWBI%2BT5ATzNzsIYGZHrNvO1dpF0zwyUAIOnM0KnbxopUprJs3bUDcIbhYezN%2BXfBhyElbyATRi2uaNfKA59dAX2r5khrC6r4axr8ubh9LXjr2olXaN5ADZa65cuxpsxUW5idXBCoQuwSnSlosOuSoNG0p4Jc9ebph4QGMLr6q8AGOqUBSa9wBBbsGRyMRiaLdqvPBAfN%2FPywP6qervVTjImezMmK8onC1Qjt9xPi7%2BkKnQI%2F7I%2F6rZjpnAYqSIiHlRoC7EmpfSdrsSdUYRyPhZdPWJRz%2Faxh83LP5RRmisDHe%2Fvv46%2Bd45upHs14VHB%2F%2BTZno8HLoV86KnKy%2FbxnBDCAkhhYs8Mec2vjvh4P0Ng1z1DAQ8SSl6uHcqdCw7URHVqGONjlM%2FX4&X-Amz-Signature=a9da41b7fb648ece220838257000fd82703cb8183818a8a7348805c0ed602bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
