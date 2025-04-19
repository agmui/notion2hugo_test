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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGS7FQQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCgxBv3hKQPvIej2yhMlrrdkjGVvBkJjPanb%2B5wz9F87gIgGo2RaWT%2BDCmWkbxcaC38urXiTxQUIomgGrj3zinudbAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA70iMQFNujLgjdcRCrcA8yDjBBXkkTvDXaQA60GKawcNZtpHWT7CwUbPfHnw2Ch0fDV4PHSM2p3mf2htUOO7Oz7niqSGyIMfjfXbimpDGjOu0zjS%2FXkiStfymex0jIKGWRbaM65bq9sEH%2FM2WnbWCtT%2FBFRsyNQTqF2cmRs39iH0%2BcdwW%2BeaS6UVqYlZ%2BkF73IxtU5KghuaiT0eKBHMPuNY8%2B76y%2BuxXPfU9AHyeXHWiJH1WS9a8%2BGPEcjtrL67gttRNXzt51m%2BVOZcmOOu87AJEabs8%2F%2BxMUIE%2FoVxqjUwDbk3FhozrWRPANfc%2BNjJ9KFlNNIWZeX5i8rs3lbcvyHIJEKwTAXPZRU2tj6XSR0MOeunIzwVQ5O8L8EqDa5rNa5O8rOVZkW7s5U98gocOSFZQ9iTudaP57T7etfmWpPoBgCCGiiRb0EU5tK6HDWIqrzyMSHMQ8Dl10wqBAE3%2F0URTNAUujJ8cnPtNqxp%2BmFu3Z%2BriAZrUDGMxcMMQWR655CNLeQLQ9Uur8ja9RzJfIL3DIXCsiWaUKKrjCfTa5YVQAddB4hwaUBgDc0PyTyaXxtcrGwl0tM86g2xDxiKOBWdOoF9t3SV3C547Ob9Qx9%2BnrNtYiipM0cu6gAMgB%2BdtjRq0N6LI0fQ6fpGMKnMkMAGOqUBEIWfaH2kBV2OTM5irMo9PDxaev34Oyx%2BqqaQDEG93hTBUvX4IdOOYvWpfqxXiEOVu7EzCMKaJXDe6fCQYide03PtYVyeil1RHbROHwKI2mzrwmL1%2FTcsTrmUraiciT%2BUO3rt0NdWjUIPnpg6FNnCiYz5bU1GyUFM%2BqGwY%2FAjgU2UQZlE383MoTu8YWTP3cWcnUF0GCuKTIfiF7Z7x63hHOwQLOsW&X-Amz-Signature=82b8a20418b3da8cd1af4f75a00a90c6faf001dc1c6fd17410214fb5cdf5c8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGS7FQQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCgxBv3hKQPvIej2yhMlrrdkjGVvBkJjPanb%2B5wz9F87gIgGo2RaWT%2BDCmWkbxcaC38urXiTxQUIomgGrj3zinudbAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA70iMQFNujLgjdcRCrcA8yDjBBXkkTvDXaQA60GKawcNZtpHWT7CwUbPfHnw2Ch0fDV4PHSM2p3mf2htUOO7Oz7niqSGyIMfjfXbimpDGjOu0zjS%2FXkiStfymex0jIKGWRbaM65bq9sEH%2FM2WnbWCtT%2FBFRsyNQTqF2cmRs39iH0%2BcdwW%2BeaS6UVqYlZ%2BkF73IxtU5KghuaiT0eKBHMPuNY8%2B76y%2BuxXPfU9AHyeXHWiJH1WS9a8%2BGPEcjtrL67gttRNXzt51m%2BVOZcmOOu87AJEabs8%2F%2BxMUIE%2FoVxqjUwDbk3FhozrWRPANfc%2BNjJ9KFlNNIWZeX5i8rs3lbcvyHIJEKwTAXPZRU2tj6XSR0MOeunIzwVQ5O8L8EqDa5rNa5O8rOVZkW7s5U98gocOSFZQ9iTudaP57T7etfmWpPoBgCCGiiRb0EU5tK6HDWIqrzyMSHMQ8Dl10wqBAE3%2F0URTNAUujJ8cnPtNqxp%2BmFu3Z%2BriAZrUDGMxcMMQWR655CNLeQLQ9Uur8ja9RzJfIL3DIXCsiWaUKKrjCfTa5YVQAddB4hwaUBgDc0PyTyaXxtcrGwl0tM86g2xDxiKOBWdOoF9t3SV3C547Ob9Qx9%2BnrNtYiipM0cu6gAMgB%2BdtjRq0N6LI0fQ6fpGMKnMkMAGOqUBEIWfaH2kBV2OTM5irMo9PDxaev34Oyx%2BqqaQDEG93hTBUvX4IdOOYvWpfqxXiEOVu7EzCMKaJXDe6fCQYide03PtYVyeil1RHbROHwKI2mzrwmL1%2FTcsTrmUraiciT%2BUO3rt0NdWjUIPnpg6FNnCiYz5bU1GyUFM%2BqGwY%2FAjgU2UQZlE383MoTu8YWTP3cWcnUF0GCuKTIfiF7Z7x63hHOwQLOsW&X-Amz-Signature=ee5b915cbac83f156a4e1bb2748f4dae073e5182aba4fc3992619f529cbcbe5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
