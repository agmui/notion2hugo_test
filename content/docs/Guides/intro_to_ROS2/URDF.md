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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44WWLAU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPpowosgxBfLw%2FiewGjcDTSoXYZhuqP0vKTN4pVFgahgIhAP4i%2Fdz4dIQgxkhvIOqMS4z%2BwZrdBEE8J6lb55FD5uiyKv8DCHYQABoMNjM3NDIzMTgzODA1Igzy3iHNwATp%2FjL2kScq3AMibWYFSyl0wK6a%2FxBuaAKNKjd0ajr3CDhEOizly3GnnrpGGMMhqmcmBF3H4%2BwuU487XS0j6IiQ9OEXIU6KdR6cxsyZL3v4%2FMDzE6awdFb4Hbq6n51lUe3ALX4JzWK5Y5QAt6ebLgiXOzH9HYm69FeqDU451Zk4nspgfXcUWSCjdKWpRpRJszJULT%2BO6y5BjIsPIS64LLkSF5hNX0ZvvLRc3yOEzxpfQQ8gYLNGuYHifpllL2wSwGLvKdayhZbHBH891%2BBcUuBb6B6SMYpTS9eiUH76RBcQYaioNvr06GnmboolMXZXqDWDbQeV%2F4PxYlMoFnkSOSLJH5hgBfGd4Zn8KxKBU7fj08kNy1cciuBMcPh%2FQjEeZfeOQnFOEog%2BxSCSDSgqQSJcww1UuKrLShO%2FMKQRIR7xPRXZh0Wx5veEFI2Css2zDLFrXkjMul29nfFN7bS5btceZvNgNWZUu%2BOGbC0Xk6PyyTX6tBM2Ogqkgo7r%2B2amllFNtG%2FYlU8AiZUMrVjC8ABgAb5dJ8uO32wDPiySVGOToNRlKWqDPSgrgSCdguZL4SYYao1YFGCZYGvcpDJVFd4Mm5ORd7O2BcLCjWd9Ud0rPBkklzzZYyDZcfbG%2BIGmzeSLvI%2FHKTDI%2F%2Bq%2BBjqkAYNAKmGFT1k%2BSbEGnJKr3rueEVf9YZt31pL%2FPxDjNlZpAqlW6EZE59AfQ0tht%2BPcBh5OcTjs4GMnX2Lu04BoQoWPrSAhaAB4t3iOmiIIzUhdJ7BUphtwVSCfWylAuH39wMtjH2O360RuAmO5E7vZLXsQCF8FJbeghSFQZ3sm2PBVlUbb88yw64itorRJs32bPqtoDCMDOlQZ1OCWbN4rISE4y%2BB0&X-Amz-Signature=27bdc922a1c951a3076557d798d5c7f332929656d55a3853b2f6c1c6b0892bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44WWLAU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPpowosgxBfLw%2FiewGjcDTSoXYZhuqP0vKTN4pVFgahgIhAP4i%2Fdz4dIQgxkhvIOqMS4z%2BwZrdBEE8J6lb55FD5uiyKv8DCHYQABoMNjM3NDIzMTgzODA1Igzy3iHNwATp%2FjL2kScq3AMibWYFSyl0wK6a%2FxBuaAKNKjd0ajr3CDhEOizly3GnnrpGGMMhqmcmBF3H4%2BwuU487XS0j6IiQ9OEXIU6KdR6cxsyZL3v4%2FMDzE6awdFb4Hbq6n51lUe3ALX4JzWK5Y5QAt6ebLgiXOzH9HYm69FeqDU451Zk4nspgfXcUWSCjdKWpRpRJszJULT%2BO6y5BjIsPIS64LLkSF5hNX0ZvvLRc3yOEzxpfQQ8gYLNGuYHifpllL2wSwGLvKdayhZbHBH891%2BBcUuBb6B6SMYpTS9eiUH76RBcQYaioNvr06GnmboolMXZXqDWDbQeV%2F4PxYlMoFnkSOSLJH5hgBfGd4Zn8KxKBU7fj08kNy1cciuBMcPh%2FQjEeZfeOQnFOEog%2BxSCSDSgqQSJcww1UuKrLShO%2FMKQRIR7xPRXZh0Wx5veEFI2Css2zDLFrXkjMul29nfFN7bS5btceZvNgNWZUu%2BOGbC0Xk6PyyTX6tBM2Ogqkgo7r%2B2amllFNtG%2FYlU8AiZUMrVjC8ABgAb5dJ8uO32wDPiySVGOToNRlKWqDPSgrgSCdguZL4SYYao1YFGCZYGvcpDJVFd4Mm5ORd7O2BcLCjWd9Ud0rPBkklzzZYyDZcfbG%2BIGmzeSLvI%2FHKTDI%2F%2Bq%2BBjqkAYNAKmGFT1k%2BSbEGnJKr3rueEVf9YZt31pL%2FPxDjNlZpAqlW6EZE59AfQ0tht%2BPcBh5OcTjs4GMnX2Lu04BoQoWPrSAhaAB4t3iOmiIIzUhdJ7BUphtwVSCfWylAuH39wMtjH2O360RuAmO5E7vZLXsQCF8FJbeghSFQZ3sm2PBVlUbb88yw64itorRJs32bPqtoDCMDOlQZ1OCWbN4rISE4y%2BB0&X-Amz-Signature=1883c0dcda2b6b37c88beb6d4f40cb2369dc42d396cdcdbce72b2334879db696&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
