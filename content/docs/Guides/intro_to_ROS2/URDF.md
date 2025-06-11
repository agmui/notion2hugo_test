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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDKSBAA4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXpUImzTKmSmYP4k1hb3qJxNwUBHZgbdqWEfsV5vWdwIgCl9Kdl4Pnl6QuQVR1CJMQC9JKUxEyocmRPox1PWulPMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuP9ruuv6QWQD5Z%2FyrcA4PKDW9PkI9e3mncFgDtNEKy5XbTUOQ55kU7eVGSlNjMtYBSwjPzrD%2BiJZWX45t1VPDfEv3oMpNHiYKP4OTMZHvp0PdRT9VD%2B9R1BmE9kb7JaeBSIH2CCLh7d7TuJuhGSoFILFk6mgZvoyBAEHQj76LUXPYBQZXp96kPx5I0lAxBaCQUgqDiVIcOZRHg6Adyt7CEzRpbQvxqEUvu1M6deuPcxcjtZyPBYcnmRFe1JGQS7dIlMp02m5A7xPZv0lm%2BQAAVcrejvNNBst8Pi%2FrwhjX5BCQR6x5wLeDuhZAfvBRyr1pBLyRDieTOUntcnnYk90hLKaSIcl9IdEN%2Fpj7Of3rqODGW8OdDxqsRrpYQYP2GULcrrlzOxrLUfvXB3KSEwihQ7VpRR%2BEKcqT9j6w1FInnyfMt4PcGxFYn4FBpQafemlLsC52QU6iXrzckWEQ972besZwQSgjF1OQC%2FqPnz6mDAhnBV7XgkIKDNHKqrDeTqp24MAVdmkRA%2B%2FWQo18YuCuXLPq5bz4jVP89nc3E%2BlHd7jr2BwlA0XehYYcBOO4KCbCFDS1mKwE6lmShOxNphAISuiz%2BxHHw66dlAIeti1lTniqacvj3gelxvu3kuTu%2ByYesWHi8ZgQwSR0tMNjlpcIGOqUBx8chTXfnP%2Bxja9GFj0saOnWN%2Fv1jzpiE2B4PE2xyMg0%2FLSDzH6yIm0jcSp7EAEdYgdwx8%2F%2FlPPgr2fVkI1eVEunMxrAeiZnmECBtOD6auO4%2B2TPX3%2BCcmoyvV2z%2Fk7ohEiEILu9V8rayihjvrTPEvqKOPVL1h52mYke0E8z8bHegd%2FUTws7kefbg0tpyN4QkVqjU4LuY%2FMOKoLax3YLOjOf4XOP6&X-Amz-Signature=ac9327ba70b54281417e5bd0800cd74bd7e8752389e5f9150e001f01812b8373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDKSBAA4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXpUImzTKmSmYP4k1hb3qJxNwUBHZgbdqWEfsV5vWdwIgCl9Kdl4Pnl6QuQVR1CJMQC9JKUxEyocmRPox1PWulPMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuP9ruuv6QWQD5Z%2FyrcA4PKDW9PkI9e3mncFgDtNEKy5XbTUOQ55kU7eVGSlNjMtYBSwjPzrD%2BiJZWX45t1VPDfEv3oMpNHiYKP4OTMZHvp0PdRT9VD%2B9R1BmE9kb7JaeBSIH2CCLh7d7TuJuhGSoFILFk6mgZvoyBAEHQj76LUXPYBQZXp96kPx5I0lAxBaCQUgqDiVIcOZRHg6Adyt7CEzRpbQvxqEUvu1M6deuPcxcjtZyPBYcnmRFe1JGQS7dIlMp02m5A7xPZv0lm%2BQAAVcrejvNNBst8Pi%2FrwhjX5BCQR6x5wLeDuhZAfvBRyr1pBLyRDieTOUntcnnYk90hLKaSIcl9IdEN%2Fpj7Of3rqODGW8OdDxqsRrpYQYP2GULcrrlzOxrLUfvXB3KSEwihQ7VpRR%2BEKcqT9j6w1FInnyfMt4PcGxFYn4FBpQafemlLsC52QU6iXrzckWEQ972besZwQSgjF1OQC%2FqPnz6mDAhnBV7XgkIKDNHKqrDeTqp24MAVdmkRA%2B%2FWQo18YuCuXLPq5bz4jVP89nc3E%2BlHd7jr2BwlA0XehYYcBOO4KCbCFDS1mKwE6lmShOxNphAISuiz%2BxHHw66dlAIeti1lTniqacvj3gelxvu3kuTu%2ByYesWHi8ZgQwSR0tMNjlpcIGOqUBx8chTXfnP%2Bxja9GFj0saOnWN%2Fv1jzpiE2B4PE2xyMg0%2FLSDzH6yIm0jcSp7EAEdYgdwx8%2F%2FlPPgr2fVkI1eVEunMxrAeiZnmECBtOD6auO4%2B2TPX3%2BCcmoyvV2z%2Fk7ohEiEILu9V8rayihjvrTPEvqKOPVL1h52mYke0E8z8bHegd%2FUTws7kefbg0tpyN4QkVqjU4LuY%2FMOKoLax3YLOjOf4XOP6&X-Amz-Signature=ddea0462e5f1c750568c6e4fb63ec86febd9b54e0eb8ade7abdbecfb72f0a42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
