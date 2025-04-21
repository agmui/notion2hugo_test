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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643E6HOAY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQF8k%2FP9VKTcW5cLfD4EiDIKLuEQnVErPpM8GoKZ9z2gIhAPT1qjgSpwEaNdTnMp1It8WD8%2BmEdT1aupqB9q3LdzgMKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAPfYVYmFc7EpcZIAq3AOh%2FPhWlO6c0ljf49pIoc5hBnsxLe6uhREWW9%2FZdW6RCAK8Fh9%2FrmITSRxR5sQetNdk6AP4WDTlbFc%2BIdVByF4c6SCwzTOrSglKMQbyvcpr62AnHHMLCbuBt7MBXajlAki8etyIHdhLJ4xRzZBdIDa0rwrTJ6gE65eEnne74lWgv5iamRPlnzGalJ330VXquaZ9FuiSKLAL%2FJfV7934jj6LSU1kA8keAEohghTU70%2Fp2bBQK%2FGuz9R8ehv9apxkkIRPnQDX7wyRUXhUzhAIC3p5ZxLU4rVZRjCIje0Gu1mXm8t%2BbXXUaYojmwfA%2BcFLg%2FP%2B0ufBBoS13naxj%2FeDjP3%2B1Xy11I9hFVdJ0u89vHoQvdTJY3ImRTPWCLqRU4TE4qc2zQLe9byvErHTnneNjpFJ19mUbXkEmjRXjuq340V4%2B%2FxNDQAcVuL5vvz%2BxQK8VV6TO%2BwS7sq2sljq1%2BwSbRPgoy7Z7S%2Bwt4MfTNgbg9vEFA4ZTNUDqPjNAwXRgFDbBbrOZZhov4PGrjdSV1o0vJjfGrGmPbhuwCOYxah2AnQ%2FvgrwTXd2VDX7Qbmav%2FpeIRgksifNg%2FoR5%2FTNflpKF5L2Vg1FaiuomARDCH3QvX3tYsFpcwk069fY0iLP%2FDCt8ZfABjqkAe0TZd0Bjwav%2F8xB2q9LlTp%2FD4i%2BGYaQ6dlwiIdICWooBInRWqzbEBNWFcyH4z%2F0JmXkllS5W7m8EXo1zGMB6PJvEEnd7it%2BPS%2BXoX3SRHi1LpH8z%2Ba1xJhH1rmJ%2BQaWfHBEqacb0njLpOfRXWzfDO7WWQi2eYZkExkDWXBt2Pvj2jvIg7MJtQa46psX%2BofTRI3cF91CYwCuOKVIeXyQPxD%2B5zij&X-Amz-Signature=df82adf819e70737f33b12bffff92e56580d9548557809a8b34d9ee1a6fc6647&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643E6HOAY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDQF8k%2FP9VKTcW5cLfD4EiDIKLuEQnVErPpM8GoKZ9z2gIhAPT1qjgSpwEaNdTnMp1It8WD8%2BmEdT1aupqB9q3LdzgMKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAPfYVYmFc7EpcZIAq3AOh%2FPhWlO6c0ljf49pIoc5hBnsxLe6uhREWW9%2FZdW6RCAK8Fh9%2FrmITSRxR5sQetNdk6AP4WDTlbFc%2BIdVByF4c6SCwzTOrSglKMQbyvcpr62AnHHMLCbuBt7MBXajlAki8etyIHdhLJ4xRzZBdIDa0rwrTJ6gE65eEnne74lWgv5iamRPlnzGalJ330VXquaZ9FuiSKLAL%2FJfV7934jj6LSU1kA8keAEohghTU70%2Fp2bBQK%2FGuz9R8ehv9apxkkIRPnQDX7wyRUXhUzhAIC3p5ZxLU4rVZRjCIje0Gu1mXm8t%2BbXXUaYojmwfA%2BcFLg%2FP%2B0ufBBoS13naxj%2FeDjP3%2B1Xy11I9hFVdJ0u89vHoQvdTJY3ImRTPWCLqRU4TE4qc2zQLe9byvErHTnneNjpFJ19mUbXkEmjRXjuq340V4%2B%2FxNDQAcVuL5vvz%2BxQK8VV6TO%2BwS7sq2sljq1%2BwSbRPgoy7Z7S%2Bwt4MfTNgbg9vEFA4ZTNUDqPjNAwXRgFDbBbrOZZhov4PGrjdSV1o0vJjfGrGmPbhuwCOYxah2AnQ%2FvgrwTXd2VDX7Qbmav%2FpeIRgksifNg%2FoR5%2FTNflpKF5L2Vg1FaiuomARDCH3QvX3tYsFpcwk069fY0iLP%2FDCt8ZfABjqkAe0TZd0Bjwav%2F8xB2q9LlTp%2FD4i%2BGYaQ6dlwiIdICWooBInRWqzbEBNWFcyH4z%2F0JmXkllS5W7m8EXo1zGMB6PJvEEnd7it%2BPS%2BXoX3SRHi1LpH8z%2Ba1xJhH1rmJ%2BQaWfHBEqacb0njLpOfRXWzfDO7WWQi2eYZkExkDWXBt2Pvj2jvIg7MJtQa46psX%2BofTRI3cF91CYwCuOKVIeXyQPxD%2B5zij&X-Amz-Signature=eb3bc521f8743946a5dc8f1fe1c036b93d08cb936c5fd6cb9681cc87d45a4e11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
