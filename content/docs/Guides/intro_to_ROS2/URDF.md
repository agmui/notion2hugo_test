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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJN4TR3K%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDbzfHNklu6zOV2WXDykiO8yyE3IUVpWT6eI2iqHPcbiAIgAKXsHe8JvB80cjZ8gZxkx0Mz7Qi%2FBbwzc5TSJM%2B033Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHZL0lZ5ZH5%2BMIavFSrcA9iwwxU%2BJd%2Bdk86BqNotDQk7%2BEiD9Oe5FXuiV19RLVBW3Y2ACEd77uvUW8WozHQXD1F2dHBXye5Ktta7PLLfXouj8u%2F%2F7%2BQfVVrSMuoVxwN1Yjz9BEfgaHDcspgjQneuE5B755PiHDs51JtzPzjdLLhc7fz7rX8O5O%2F%2B0oFoGFCt3e79GpVTWCjNg4ng1P9jZ1SQsjbRWcIHNzhxDDYiXoKwGmvovOXdx%2FO6AmrlxBPg1AaO1H9dpBz%2BCFdC5pVLydjCODe0gKAS5ciDXUBO21wCr7zltlNadhb6wu9pVZP%2BtaNAvff%2BHFq6FJUSTYJnUY7%2FBe2Jb7nQQ6wIqC5%2F4iinhM1IxBmxDZpsFCC9S0552vO%2B3Ws2qwQv3Z%2BCvy63vjjxBP6x4vIwRNeyW%2F5FO9ThjPp1wWkcJfMCO%2FR9SISK8Dw%2FnPmUw4plmgWJThSEnuFapDwyGHwE7DdCxv%2BK36h192OwuP1%2Fkg9420oHJFR0ZChmsvff4MBS6F7TTiOfb1FKXWEuwUcQTJmOIx1ZoFstd7U9xHsC89bxItVv8VKBf5WClyULvrtXYjppWzxYHksqGk5JojnkVa96y4yvol10M47eSuFaV11Prub8%2FuOwPo4iEYHXCTkfnX2dMJDbhL0GOqUBSENWUboyhe3d7Ybs7liqOlISQkJXljhe0kh20fM0vIxhKP0Hr6qbCnVEUyFv2pMPTmYAkQkuXR8k1jy5fIK3kLDuYTrJIToXvRnnedVuj2w9LRIZann%2FwWltiotfgTUghqt89z2zXPjNFvXGlIwzcdCmpepW3owIGxJ8gq%2F3hOdUNIXIp7z1XmZr2y%2Fix3l%2FoqBqdMB0zy4hI%2FTzB%2BSdL%2FBzvEo1&X-Amz-Signature=ff1db048570d68ca95804324e81e2ad0b94973d893ccd242df114f51362c8b00&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJN4TR3K%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDbzfHNklu6zOV2WXDykiO8yyE3IUVpWT6eI2iqHPcbiAIgAKXsHe8JvB80cjZ8gZxkx0Mz7Qi%2FBbwzc5TSJM%2B033Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHZL0lZ5ZH5%2BMIavFSrcA9iwwxU%2BJd%2Bdk86BqNotDQk7%2BEiD9Oe5FXuiV19RLVBW3Y2ACEd77uvUW8WozHQXD1F2dHBXye5Ktta7PLLfXouj8u%2F%2F7%2BQfVVrSMuoVxwN1Yjz9BEfgaHDcspgjQneuE5B755PiHDs51JtzPzjdLLhc7fz7rX8O5O%2F%2B0oFoGFCt3e79GpVTWCjNg4ng1P9jZ1SQsjbRWcIHNzhxDDYiXoKwGmvovOXdx%2FO6AmrlxBPg1AaO1H9dpBz%2BCFdC5pVLydjCODe0gKAS5ciDXUBO21wCr7zltlNadhb6wu9pVZP%2BtaNAvff%2BHFq6FJUSTYJnUY7%2FBe2Jb7nQQ6wIqC5%2F4iinhM1IxBmxDZpsFCC9S0552vO%2B3Ws2qwQv3Z%2BCvy63vjjxBP6x4vIwRNeyW%2F5FO9ThjPp1wWkcJfMCO%2FR9SISK8Dw%2FnPmUw4plmgWJThSEnuFapDwyGHwE7DdCxv%2BK36h192OwuP1%2Fkg9420oHJFR0ZChmsvff4MBS6F7TTiOfb1FKXWEuwUcQTJmOIx1ZoFstd7U9xHsC89bxItVv8VKBf5WClyULvrtXYjppWzxYHksqGk5JojnkVa96y4yvol10M47eSuFaV11Prub8%2FuOwPo4iEYHXCTkfnX2dMJDbhL0GOqUBSENWUboyhe3d7Ybs7liqOlISQkJXljhe0kh20fM0vIxhKP0Hr6qbCnVEUyFv2pMPTmYAkQkuXR8k1jy5fIK3kLDuYTrJIToXvRnnedVuj2w9LRIZann%2FwWltiotfgTUghqt89z2zXPjNFvXGlIwzcdCmpepW3owIGxJ8gq%2F3hOdUNIXIp7z1XmZr2y%2Fix3l%2FoqBqdMB0zy4hI%2FTzB%2BSdL%2FBzvEo1&X-Amz-Signature=06f3bf395c7fab93a44f89e9e106644e02405eb3029d60b9aad81e5c57fd03f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
