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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZ3CNVP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD1giWr1zVJ6sd%2Bb5Vzgbn69Lgv603BwpslrOPTUBTUgAIhANBOH3tZwGRe5Eu%2F1D5S6otCmML%2FuQ99FglJyNwcUYqDKv8DCFIQABoMNjM3NDIzMTgzODA1IgyNvBHlvPFCAmmjDUIq3AP73P8%2BAQyJvx4b%2Ba5i5gZ8gn5z1ZpBJq7AZNAYl8r0hMJHF%2Bbgz%2BASE1rIdGwSQ3gXX1rcQKb8gQ2jMhCeC10n6vKDQY603EafBWVwVxxDw0qgx5FSW3G9zILa2%2Bk0Ctlygxj0hQFUb%2F2qxHdSExuhySsfezf38efv9suN9BwpJx2tLJCVj0crw8MZ0X5LZ70jAS%2B0X%2F99rI16gSYVThXii6f7zOFXoXXMSBo5bieN29AMHiXxTAi3xBlvo5A6C8Su431NBuB4JbN38%2B57%2BR1uPYnIkq8a8sgC1CcGJsjhLDc9c7MVFM955OtiKj80hlLBOxJ%2B9zT%2BD4plrwPahLGBPgF9hYfbF83TBE7I%2BS3HR0Liy6B2tDsZySBcFypA0kP8eTVQmarCAaqGXXX%2FLfxkHc1igHBkoauAP0Usrj09PWjHLTu0M4y9FWlKUlco9T4Wb7fbzfJ%2FaF3j36lao6YKeysJV98pO8um1cHjLSWnG8NTLcLp3l11hzoMU%2BOKOQdDJzRJUH9DtHtTW5ep24y0RTqfoHE1Fk8yyApxaZOile%2BgK4akjwxGXwWyXkf0lNGDepRqw08D20XUluMV2tBPRr0Y1Za5py9LImwcK5ovE8XArc0BJrQB4etwQjDljKfDBjqkAWzpc4VMahtqicKmgCBp7V6TjbooZRXs8xDLK3bPdYkj4KhU88eAmojKi%2F%2FAK2b3UEocxjlXK3OQKJX8QK8r6AoVxPZTQ4VQgkbNUM6j0nhQf2L9iytCvvIIdxeXHleEGvrHKqgENG2t4MzH%2Fc7neuFLLSKpPsvtQb0X%2Fv60adDb4Zf392Uh%2F6O7jXahkIpBiaiRwS4vRJHGON%2FuayRSuYp4vULQ&X-Amz-Signature=c3c810734454cc5e8864b04eaf64b3c68974505fd2d50f94014a39f512113405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZ3CNVP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD1giWr1zVJ6sd%2Bb5Vzgbn69Lgv603BwpslrOPTUBTUgAIhANBOH3tZwGRe5Eu%2F1D5S6otCmML%2FuQ99FglJyNwcUYqDKv8DCFIQABoMNjM3NDIzMTgzODA1IgyNvBHlvPFCAmmjDUIq3AP73P8%2BAQyJvx4b%2Ba5i5gZ8gn5z1ZpBJq7AZNAYl8r0hMJHF%2Bbgz%2BASE1rIdGwSQ3gXX1rcQKb8gQ2jMhCeC10n6vKDQY603EafBWVwVxxDw0qgx5FSW3G9zILa2%2Bk0Ctlygxj0hQFUb%2F2qxHdSExuhySsfezf38efv9suN9BwpJx2tLJCVj0crw8MZ0X5LZ70jAS%2B0X%2F99rI16gSYVThXii6f7zOFXoXXMSBo5bieN29AMHiXxTAi3xBlvo5A6C8Su431NBuB4JbN38%2B57%2BR1uPYnIkq8a8sgC1CcGJsjhLDc9c7MVFM955OtiKj80hlLBOxJ%2B9zT%2BD4plrwPahLGBPgF9hYfbF83TBE7I%2BS3HR0Liy6B2tDsZySBcFypA0kP8eTVQmarCAaqGXXX%2FLfxkHc1igHBkoauAP0Usrj09PWjHLTu0M4y9FWlKUlco9T4Wb7fbzfJ%2FaF3j36lao6YKeysJV98pO8um1cHjLSWnG8NTLcLp3l11hzoMU%2BOKOQdDJzRJUH9DtHtTW5ep24y0RTqfoHE1Fk8yyApxaZOile%2BgK4akjwxGXwWyXkf0lNGDepRqw08D20XUluMV2tBPRr0Y1Za5py9LImwcK5ovE8XArc0BJrQB4etwQjDljKfDBjqkAWzpc4VMahtqicKmgCBp7V6TjbooZRXs8xDLK3bPdYkj4KhU88eAmojKi%2F%2FAK2b3UEocxjlXK3OQKJX8QK8r6AoVxPZTQ4VQgkbNUM6j0nhQf2L9iytCvvIIdxeXHleEGvrHKqgENG2t4MzH%2Fc7neuFLLSKpPsvtQb0X%2Fv60adDb4Zf392Uh%2F6O7jXahkIpBiaiRwS4vRJHGON%2FuayRSuYp4vULQ&X-Amz-Signature=9bf3ac21a16da05ec3a901df937dbfc450c7c34950dd5bd2b410aa05ded8b116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
