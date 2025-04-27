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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LFNCQQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzQMWH7YPuBS9bWBAHvGGMifgrkW0mBweXxECuig2r1AiEAkw1bM8GMGZRuYQAsVLd3ThV79YTsa8DkEwQKgpHt6Woq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJ1jy1eJRk2sXqVJ2SrcAwoyeFmYTtMWmCExcn9cSrxhx9J5vHB1cJ5j%2FGtG3LJ1KUC0dqlxR9XtdSqMYVre%2BbDRWIT06AUyFl%2FL51r2oV3rO1v%2B5TPcr70YicKpoVbxf88rZAdllHuR0pwSKx43XHQIDzVZY784qJBT7PW8O2bwcmwrOgCp%2B0PhRqTZmYNZYfS7hUj46Ro65R2XRm%2BuJXWZEehIL90U7c7Syv0LGYIe%2FYgp1UW5dG%2FCIVCIHEA%2FPguJFkCh3Pqp%2Fz1AAUIFO6R7M41ao8w2qmj9hycTv%2F1N8Qu4gsZnd4ZyCrGiJW%2BMpFCboQt9PTzoxdfma0pFu1BaLKJfLxtskTcTuwLS%2FMsO9EpbqkY9wUH1UPqUhxQgNOvWn5VwoC6SLu4NWX%2BR9qoN%2FagAF1lJytG56X9kDtiJDFaTtdbA0%2BPxymE6NgAm6K5mXp15YV1WuM0tbH3LnFyIwV0594v8LMfxGPMPC7ANqKWxClBroJKuZEbAjY0umLPyu0AVQIbMgwXN0ZAq5XUDswgETKZxWBiw%2BtZj7t2gT5mqLIa52lpzKPwgwklheHZg9J3urwfOo03bHZc0XVpwjaKj5hjGm6FT0oYYVeHC8sF5gNc9muw2ZwTv40rVdPKCFWSKGxNceOhmMNCnucAGOqUBL85LxAfjq%2BoDiJWGkLBUQdnnrSlZeujIR6IMeDFj4bHM8QandjpZTQ2hF8FaCUgy%2B9NoNaYO8K3YSQBSkckvgwdcdO5mmL1nvAhmuM5sKHyYdUZv38%2BDV84%2BnpdyTSka3fPJ4ooqGgMCd%2FGT7lyw7vM%2FyOllDE2MOA5heQ9vl5PiL2xQHcMsOPcvNfBjC%2B3vJw20%2FFcuMLFkj8nkn%2FeXun9cGoV0&X-Amz-Signature=96986855d49142478d6c984b0c5cd3e2a71a69b4e84b27d6c1f9448adc7d1763&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LFNCQQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzQMWH7YPuBS9bWBAHvGGMifgrkW0mBweXxECuig2r1AiEAkw1bM8GMGZRuYQAsVLd3ThV79YTsa8DkEwQKgpHt6Woq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJ1jy1eJRk2sXqVJ2SrcAwoyeFmYTtMWmCExcn9cSrxhx9J5vHB1cJ5j%2FGtG3LJ1KUC0dqlxR9XtdSqMYVre%2BbDRWIT06AUyFl%2FL51r2oV3rO1v%2B5TPcr70YicKpoVbxf88rZAdllHuR0pwSKx43XHQIDzVZY784qJBT7PW8O2bwcmwrOgCp%2B0PhRqTZmYNZYfS7hUj46Ro65R2XRm%2BuJXWZEehIL90U7c7Syv0LGYIe%2FYgp1UW5dG%2FCIVCIHEA%2FPguJFkCh3Pqp%2Fz1AAUIFO6R7M41ao8w2qmj9hycTv%2F1N8Qu4gsZnd4ZyCrGiJW%2BMpFCboQt9PTzoxdfma0pFu1BaLKJfLxtskTcTuwLS%2FMsO9EpbqkY9wUH1UPqUhxQgNOvWn5VwoC6SLu4NWX%2BR9qoN%2FagAF1lJytG56X9kDtiJDFaTtdbA0%2BPxymE6NgAm6K5mXp15YV1WuM0tbH3LnFyIwV0594v8LMfxGPMPC7ANqKWxClBroJKuZEbAjY0umLPyu0AVQIbMgwXN0ZAq5XUDswgETKZxWBiw%2BtZj7t2gT5mqLIa52lpzKPwgwklheHZg9J3urwfOo03bHZc0XVpwjaKj5hjGm6FT0oYYVeHC8sF5gNc9muw2ZwTv40rVdPKCFWSKGxNceOhmMNCnucAGOqUBL85LxAfjq%2BoDiJWGkLBUQdnnrSlZeujIR6IMeDFj4bHM8QandjpZTQ2hF8FaCUgy%2B9NoNaYO8K3YSQBSkckvgwdcdO5mmL1nvAhmuM5sKHyYdUZv38%2BDV84%2BnpdyTSka3fPJ4ooqGgMCd%2FGT7lyw7vM%2FyOllDE2MOA5heQ9vl5PiL2xQHcMsOPcvNfBjC%2B3vJw20%2FFcuMLFkj8nkn%2FeXun9cGoV0&X-Amz-Signature=775c98fa2b243d2c2a881dc0f687106594e807c50577c679b11c1a5c1d5d411e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
