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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHM7TSE6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPIplb0vuR7oO6gOiFr6%2BZsJkBOsLWoX4402gq2vphOwIhAMH%2FeGCmTxkBroWAfHz98VmLqvhQd1XQWr4ev1%2Bs3TGeKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7pGK29LVN6roQHoq3ANLFzx2S4RDlxLgLjgF%2FKffUX5CX3x%2BMmHbml3CUUDMdDlAstM6yl15wXVAZfcTmkwCZPULXL2PwmTSHFgLyBx59CIOFQWmXeRpkDcGj2OG3FwmgcmDiUG3Jd2%2F8n2FhlfvLtY2yDEDcFItCBCAfwxr2Y30ltROvijOrpgpCLjk15qFyaEVc6BkEsj%2FAE8GxMoemV5HbaxzCvGU7jk%2Bq2H0MB%2FasCtpEM8UMyfq10qbAhZizlfQylVB%2Be0whc9I1rgcnkFytRXggHiDwMmRhVmiRlwkp4ilu6FsP%2BoWIF92mUkzdsLLjKCm%2BTxv2k21JqzocA2N98bjjN9ipaI69ULgef81fpedalWpkHmXRmTrpUk3HATd1Rdqo4oMc8B%2BvuMbzAC7I4sPcgVFgU%2FBxUdctwpSmlxyhVeE98kO8WyHFyIb2dsoi77af4ZXl4zd2qfNWfMjjJ3dXj7RavEY40Hv%2Bb4CWVOv6TgeMp%2Fvmg6xk6gCxg6vCD%2BH9SRh6S4UPNSM3xc0KN6LGRO1GCbeLer0Jif4gV%2BQ%2BUjA6c%2BBYEEdWG4iM6fevOTCu5%2BNm0uYmeIPcquvzGWWrOEdJfCjbvyweFQ%2Bs%2BUyGyFoiSr5m0EE3E%2Br%2B1a5Q8nU5%2BmLwTCxy7PBBjqkAeOARhd%2FCuRGxa%2Fs3qu6mvsefqjYW1a4QZHChcxnDHNv9%2BlOpT7rdGKwpTersinQFYDg6pQkMSbQlPZzd%2F6JKIGerKfQbhuMTyDinpJoB4d%2F%2BkE7O3AiXRvhkeoutdySh275KDS%2FLRhon%2FrCIlis5%2BNaGd%2B92kskpupLhBOS%2BKcuKx7%2BKamOuFB4P7Bh7BJxpn5TRQjdGzTp0jM4x597UAra0rEt&X-Amz-Signature=a945f5e24a881c719dc6f36da6a80960a1c0df747b33e2d64f6267e7688bdfb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHM7TSE6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPIplb0vuR7oO6gOiFr6%2BZsJkBOsLWoX4402gq2vphOwIhAMH%2FeGCmTxkBroWAfHz98VmLqvhQd1XQWr4ev1%2Bs3TGeKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7pGK29LVN6roQHoq3ANLFzx2S4RDlxLgLjgF%2FKffUX5CX3x%2BMmHbml3CUUDMdDlAstM6yl15wXVAZfcTmkwCZPULXL2PwmTSHFgLyBx59CIOFQWmXeRpkDcGj2OG3FwmgcmDiUG3Jd2%2F8n2FhlfvLtY2yDEDcFItCBCAfwxr2Y30ltROvijOrpgpCLjk15qFyaEVc6BkEsj%2FAE8GxMoemV5HbaxzCvGU7jk%2Bq2H0MB%2FasCtpEM8UMyfq10qbAhZizlfQylVB%2Be0whc9I1rgcnkFytRXggHiDwMmRhVmiRlwkp4ilu6FsP%2BoWIF92mUkzdsLLjKCm%2BTxv2k21JqzocA2N98bjjN9ipaI69ULgef81fpedalWpkHmXRmTrpUk3HATd1Rdqo4oMc8B%2BvuMbzAC7I4sPcgVFgU%2FBxUdctwpSmlxyhVeE98kO8WyHFyIb2dsoi77af4ZXl4zd2qfNWfMjjJ3dXj7RavEY40Hv%2Bb4CWVOv6TgeMp%2Fvmg6xk6gCxg6vCD%2BH9SRh6S4UPNSM3xc0KN6LGRO1GCbeLer0Jif4gV%2BQ%2BUjA6c%2BBYEEdWG4iM6fevOTCu5%2BNm0uYmeIPcquvzGWWrOEdJfCjbvyweFQ%2Bs%2BUyGyFoiSr5m0EE3E%2Br%2B1a5Q8nU5%2BmLwTCxy7PBBjqkAeOARhd%2FCuRGxa%2Fs3qu6mvsefqjYW1a4QZHChcxnDHNv9%2BlOpT7rdGKwpTersinQFYDg6pQkMSbQlPZzd%2F6JKIGerKfQbhuMTyDinpJoB4d%2F%2BkE7O3AiXRvhkeoutdySh275KDS%2FLRhon%2FrCIlis5%2BNaGd%2B92kskpupLhBOS%2BKcuKx7%2BKamOuFB4P7Bh7BJxpn5TRQjdGzTp0jM4x597UAra0rEt&X-Amz-Signature=72252293da729b06cc54adb5da077e0aabcd921efdca30c0f8b5aa40ee568b70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
