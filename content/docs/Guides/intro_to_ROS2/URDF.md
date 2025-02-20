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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFZEIGQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCTgf4ILRy5SfDChN6CVVMgOr6VuXs86jkwgx8JiWt9AiAHkN6Rn6QdQ4hm9Zvgf4VB9FTN2arAHEo1ZXVN3OukHCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLVl9%2FVuSw54O1jzKtwD1oUTu7rr3CDkozFaFXjVemBziDJ6vV27sS3G0LXdgDoy8b4v8jLozvv4pwqWJdVpT7m5IKrbZYIECw41%2BWX5GlgKPMuseO%2Fg95Tme3HgB4Lu%2F30f%2FvZBz6UCl2wFPwIK%2BXHTLmLUSv8zn9FmthJeRmercO4TH2pC4Tm4HEePY4MMXNxzMT%2BL0f3LTdiYMyuJIjgjj2N64Mq3NcpLzxVhrD%2FDxMNntlhlEbl6zhRojN0Xv%2BM6m0GHZ1aa3sS9f7yXYAgFzIAmYhCSOTd0yVkA%2FuktWcFgSmw6iEtZFMGGkEo74KkuOOmb6DegYCHaJSmA2KycQJnwj1ucdw5uFzSDlp%2FrjXOs%2BBkkdmlmAnHH7SdLaDPrWY%2BbvTwWseGLhTau7G80XHBb8y8XN8t6sC%2FTpr2jN87RuOebETZC39PPhrnJefPMyiQgr65SAJoprZ697JmCJVL2gVe8V0WCd%2FJyTDLTfZL9tp5KRJdK1EDb6mCl4%2FA33GhJ3enyQ1SLSxWVBwt3XtTblrtpz5zlYzqQeoiKwEBCzFQyK9CMGgbIovslAcupvD4hduzpkBd4ZUEhqmSipIahnC7tiSW%2BtvR4qSIAyWCxKtv2mpy68aeew%2F7spJfkdjVQE%2BTAAW8w2dHdvQY6pgHusjSKXL0NJHIydSjVHzLgVAwZNhdebZbCs%2BdASeCHM92AKG4goJ4UWbmuy1XZ2lk3Wxh1c1JcqCTTVLXTTYHNA2hVFmApqmytKgzJkNnrif3TDBVBnzuaNtfk8XXOyh8WAiTsfbn7YyeGNHn0AvPr0GtYKRPVsPz8%2BlDjLx21xqbZddeSHHQxfbiFnKHqCPfDgpsGkbbAzeGGvtpgG3%2FA8i4SvYRw&X-Amz-Signature=6390e485706a47c665f234ad16fae890cea3baf4c9bd7e5070cd0f6a0a074af4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFZEIGQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCTgf4ILRy5SfDChN6CVVMgOr6VuXs86jkwgx8JiWt9AiAHkN6Rn6QdQ4hm9Zvgf4VB9FTN2arAHEo1ZXVN3OukHCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLVl9%2FVuSw54O1jzKtwD1oUTu7rr3CDkozFaFXjVemBziDJ6vV27sS3G0LXdgDoy8b4v8jLozvv4pwqWJdVpT7m5IKrbZYIECw41%2BWX5GlgKPMuseO%2Fg95Tme3HgB4Lu%2F30f%2FvZBz6UCl2wFPwIK%2BXHTLmLUSv8zn9FmthJeRmercO4TH2pC4Tm4HEePY4MMXNxzMT%2BL0f3LTdiYMyuJIjgjj2N64Mq3NcpLzxVhrD%2FDxMNntlhlEbl6zhRojN0Xv%2BM6m0GHZ1aa3sS9f7yXYAgFzIAmYhCSOTd0yVkA%2FuktWcFgSmw6iEtZFMGGkEo74KkuOOmb6DegYCHaJSmA2KycQJnwj1ucdw5uFzSDlp%2FrjXOs%2BBkkdmlmAnHH7SdLaDPrWY%2BbvTwWseGLhTau7G80XHBb8y8XN8t6sC%2FTpr2jN87RuOebETZC39PPhrnJefPMyiQgr65SAJoprZ697JmCJVL2gVe8V0WCd%2FJyTDLTfZL9tp5KRJdK1EDb6mCl4%2FA33GhJ3enyQ1SLSxWVBwt3XtTblrtpz5zlYzqQeoiKwEBCzFQyK9CMGgbIovslAcupvD4hduzpkBd4ZUEhqmSipIahnC7tiSW%2BtvR4qSIAyWCxKtv2mpy68aeew%2F7spJfkdjVQE%2BTAAW8w2dHdvQY6pgHusjSKXL0NJHIydSjVHzLgVAwZNhdebZbCs%2BdASeCHM92AKG4goJ4UWbmuy1XZ2lk3Wxh1c1JcqCTTVLXTTYHNA2hVFmApqmytKgzJkNnrif3TDBVBnzuaNtfk8XXOyh8WAiTsfbn7YyeGNHn0AvPr0GtYKRPVsPz8%2BlDjLx21xqbZddeSHHQxfbiFnKHqCPfDgpsGkbbAzeGGvtpgG3%2FA8i4SvYRw&X-Amz-Signature=941013d1bb57ab41415659bad0136b749a198b047ab51e3f911b5cb921b8689b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
