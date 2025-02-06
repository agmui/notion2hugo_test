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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZDWXYU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCZj51aDSaT%2FREf2u%2Bx9Oe8Y9jVAJUa9PwJu1BamQWawQIhAMLiHeADii9CVyHKVqd%2BiblW9hlFysCKWOwKT8j5Te4%2FKv8DCFoQABoMNjM3NDIzMTgzODA1IgxBjU1z8k5wnzlN3tUq3AOOpu2vdUrtKuiE8bpb1Hme%2FkE3DlVyv%2FoKpII8IkmNBeldZLdZhfDqlFcfsKN9OEu81jLz0tlIKGhYBaNhAbIWCF9eDJCuP7SYweeiMQM15ietW%2B6DAECeMFOuvxEri%2BhQPq%2BCZOui6d6xc7xaHsmrma0ERq1A2%2Bzwn%2FkDZL5ytPotbQuRFHywR46IXpoOdc%2FGSfly0DFwR%2FpbX13eGDgE8jSryxTWqWXfG4uEplLlICQZErW4t9CetfYW2OHKKRPw%2FWZJWX8vM1BxF3VeJa0ygk2nKgOGBBhy8MTAmNsPxTprL1Vf9uUvENCxWi76yZtgPVAfHkS%2Fe50xAgne924GHulJtxqObGqt34F%2Fvv8MqG82O4KFMCvSC3%2FyjbYIglovTlJSpD3rxHMLSg0hbXUUqI691SUfeevjC0EpQxIvjlzjU3Go19WrrbU46DLR98vBqT%2FK6Dr16i8eMbNEwxny070C1Px5LPbxJIDWDW9FxEBDcd8NZWKhfMVpRGrSMejFYxraFmdzWX%2B%2FiryQkFTTVFsf%2F4e6UxfgGP5YuvTA5XWoTCW87dLBkmtd8jL6DsnwwuaPwNaqqYPun9sqps%2BDzTNU7gNazPP1S4UjkwXQbzJRovN7kNmMetTsPzDE7pG9BjqkAYLcs3vQLeGP%2FQZrTg5YpUwx8NrG0iKcxOM5o0nLCrhxch0Q%2BbIRYWCR1aTx2S2yDLw7C%2Fy2Uac1GrmR7sjOsT01zn%2BuTG8jc4kTWxlyQrzZxbDonXePfcR6jcY2Qf%2FOmiGZs%2BB75KATIQzBuzn489bfss2H%2Fd3cDXt6R14CgFTDbnTm2QpsLd2sRMEAzq0VbkY42zVrKIauLeo%2FV2my3c5tjMgg&X-Amz-Signature=5e584b210b301e00634d3b294b53aade6abde075d21dca372836d409a0e5821f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZDWXYU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCZj51aDSaT%2FREf2u%2Bx9Oe8Y9jVAJUa9PwJu1BamQWawQIhAMLiHeADii9CVyHKVqd%2BiblW9hlFysCKWOwKT8j5Te4%2FKv8DCFoQABoMNjM3NDIzMTgzODA1IgxBjU1z8k5wnzlN3tUq3AOOpu2vdUrtKuiE8bpb1Hme%2FkE3DlVyv%2FoKpII8IkmNBeldZLdZhfDqlFcfsKN9OEu81jLz0tlIKGhYBaNhAbIWCF9eDJCuP7SYweeiMQM15ietW%2B6DAECeMFOuvxEri%2BhQPq%2BCZOui6d6xc7xaHsmrma0ERq1A2%2Bzwn%2FkDZL5ytPotbQuRFHywR46IXpoOdc%2FGSfly0DFwR%2FpbX13eGDgE8jSryxTWqWXfG4uEplLlICQZErW4t9CetfYW2OHKKRPw%2FWZJWX8vM1BxF3VeJa0ygk2nKgOGBBhy8MTAmNsPxTprL1Vf9uUvENCxWi76yZtgPVAfHkS%2Fe50xAgne924GHulJtxqObGqt34F%2Fvv8MqG82O4KFMCvSC3%2FyjbYIglovTlJSpD3rxHMLSg0hbXUUqI691SUfeevjC0EpQxIvjlzjU3Go19WrrbU46DLR98vBqT%2FK6Dr16i8eMbNEwxny070C1Px5LPbxJIDWDW9FxEBDcd8NZWKhfMVpRGrSMejFYxraFmdzWX%2B%2FiryQkFTTVFsf%2F4e6UxfgGP5YuvTA5XWoTCW87dLBkmtd8jL6DsnwwuaPwNaqqYPun9sqps%2BDzTNU7gNazPP1S4UjkwXQbzJRovN7kNmMetTsPzDE7pG9BjqkAYLcs3vQLeGP%2FQZrTg5YpUwx8NrG0iKcxOM5o0nLCrhxch0Q%2BbIRYWCR1aTx2S2yDLw7C%2Fy2Uac1GrmR7sjOsT01zn%2BuTG8jc4kTWxlyQrzZxbDonXePfcR6jcY2Qf%2FOmiGZs%2BB75KATIQzBuzn489bfss2H%2Fd3cDXt6R14CgFTDbnTm2QpsLd2sRMEAzq0VbkY42zVrKIauLeo%2FV2my3c5tjMgg&X-Amz-Signature=df8a3a621428338fee59f73195a4b8accfa1fb496cdd4fde8e9f2ebd6cf49eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
