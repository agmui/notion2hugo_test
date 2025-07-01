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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYWVWLK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOsG7dA8ZMwqy4ZFh4xbcnkyic26Y7Ke9MK7LOyNn%2F0AIhAPmfc309lUQ458WyEWvm1PLfmoRDHy86PMgaS6lOCKnIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5BphTvSiY2r3YK1Eq3AOr4Hf8dg8T6nzIvrODks5ahFEliNx4%2FdFtHvsidHoBFZ%2Fz88M1LyqWH6ypcXLuv8ZB47B4PSs9FaP091DoSENgiAV9TsgA3pQzjNuWQi98E7ry8h4MT33AWSuQ7r68CNiDemMHQwmAz0NfsR%2FSHU05SazX%2BxJGItzfsD%2B16cb5%2BopnC86%2F6JevM31%2BDIZwWmXDJOj2xnlSaqGaj4qLZg7FT%2BEW%2FvvSQIx3DEcfbCakAtmkBZv5vs6KNc5QhKsDcJ%2FA2oGha0LOjwEG7XeSsbcDG6qlWJoaQnmAwWB80q7igQGsCHZ6gs2cdkl0zwYbnSwQDoWWzt%2FVq0i8P0dQrp4oNpyYy26DLwW9tK6%2BgfWiBA3BaYhbsbp7Bn6PJh06zgIs5Ti3SPZYChP4bXcgMnrxWEDU393oCptWRyfhMGL%2FMmBmyow03P2Q6oqz0nZMAGLE8CXOdrrlbj39yAyNjC7LrAOAINdkf6rm0f3MNsf7NHs5ZSprbVIeAHuFE7gInw%2BsIX3cJHKy1%2FNrHIytMI4hOgq4Oe75J5%2BJeGwwxTz1%2BYvSbiyCaPIi7pdgOt4iqMjz4c9nV2F2Y8GIobwXDb0gBQOrqxuTSv4Nck4xqq3zNEfboFsPzChyUH4WwDD7w5DDBjqkAdjfvnLWPCoN3YG3eqR77DaX1dBpnjCt9IUVfc7edswG1J5ZMFL21K5x1ewAR5zezNnXkIZC3yRpLixSqSkB1U7rzb8WML7C0itQHPMbDt0SmwKB1ZEfo7ksPhUOg3T1jCTesigClRqd4gVVtXfYL%2Fsn%2Bzy1tiVnsQvVU0SZfreV24QqWXyWGPbA5UsXuEJ5KrOuj714UZ8vz%2BPfFaBwyz8WJJ93&X-Amz-Signature=4a751e4129f7a1b3704d800ecdb9ec8d6982c2802fc91d162e6657e972cc5eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYWVWLK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOsG7dA8ZMwqy4ZFh4xbcnkyic26Y7Ke9MK7LOyNn%2F0AIhAPmfc309lUQ458WyEWvm1PLfmoRDHy86PMgaS6lOCKnIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5BphTvSiY2r3YK1Eq3AOr4Hf8dg8T6nzIvrODks5ahFEliNx4%2FdFtHvsidHoBFZ%2Fz88M1LyqWH6ypcXLuv8ZB47B4PSs9FaP091DoSENgiAV9TsgA3pQzjNuWQi98E7ry8h4MT33AWSuQ7r68CNiDemMHQwmAz0NfsR%2FSHU05SazX%2BxJGItzfsD%2B16cb5%2BopnC86%2F6JevM31%2BDIZwWmXDJOj2xnlSaqGaj4qLZg7FT%2BEW%2FvvSQIx3DEcfbCakAtmkBZv5vs6KNc5QhKsDcJ%2FA2oGha0LOjwEG7XeSsbcDG6qlWJoaQnmAwWB80q7igQGsCHZ6gs2cdkl0zwYbnSwQDoWWzt%2FVq0i8P0dQrp4oNpyYy26DLwW9tK6%2BgfWiBA3BaYhbsbp7Bn6PJh06zgIs5Ti3SPZYChP4bXcgMnrxWEDU393oCptWRyfhMGL%2FMmBmyow03P2Q6oqz0nZMAGLE8CXOdrrlbj39yAyNjC7LrAOAINdkf6rm0f3MNsf7NHs5ZSprbVIeAHuFE7gInw%2BsIX3cJHKy1%2FNrHIytMI4hOgq4Oe75J5%2BJeGwwxTz1%2BYvSbiyCaPIi7pdgOt4iqMjz4c9nV2F2Y8GIobwXDb0gBQOrqxuTSv4Nck4xqq3zNEfboFsPzChyUH4WwDD7w5DDBjqkAdjfvnLWPCoN3YG3eqR77DaX1dBpnjCt9IUVfc7edswG1J5ZMFL21K5x1ewAR5zezNnXkIZC3yRpLixSqSkB1U7rzb8WML7C0itQHPMbDt0SmwKB1ZEfo7ksPhUOg3T1jCTesigClRqd4gVVtXfYL%2Fsn%2Bzy1tiVnsQvVU0SZfreV24QqWXyWGPbA5UsXuEJ5KrOuj714UZ8vz%2BPfFaBwyz8WJJ93&X-Amz-Signature=17c88490326cffab867cea34dc22d8aa9d2389810100e16ecc81293df05ead84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
