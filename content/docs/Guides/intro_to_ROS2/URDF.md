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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5DWVFU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwyYBTdj%2FXsWDDBFSqkozxINbWPD%2BzdQMDgvc5obYdyQIgZzZ97iv2ClYx2YW20ljrA3b%2BOuPokrlTaqoULwU6XEQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNUCfSHAxn59JSwFircAwpRQ86Vzttc2YIl8HBLaemJ9ewJ5q9Ec9CPvV5eq%2BsdFh1I7GMC7YoW4%2BYjVClHjsAR93OzMk1UrcI0wOEZnzVaThm7RYIHUClh%2BXYD%2F4XRXwei9AqoGfia01mxZ9%2BN2WuwpZdtHFfEC4Cyb1HNUlUQ9VmAtHdbcuTPA1BktP4cvGlWZ2T9lyOruIJaogx%2BtEZDUo%2FCILOh1FLMdAXz3tY9phXxSNAlUeTLQ7WbbB%2B1SokCx%2FVyT9V7BxLyTF3z6uOfLlZAa9rtMK%2Bq%2BcmsckaGf7gu2H1lb6pusHOmDmFuqeb%2Bp22hCKkB0XgJiIqdCeyt6%2Bo4HNDreNRQS6Oa3Qe%2BiKC5%2FnmIlIt3gWFh5Y1dTrVMqKMLZyT7YzHuKY66Xtssm170Alf2Mtmfv6gvW7fpNr1SQTu3c%2Bx3jaM%2Fr1K7Be3krEddPCXGgzaJxlnbup372hO56Pm5xEwVmc6SdAKkFDs4GWHcRRf8j4DJfPO%2BxTkm%2BCFJYxJNPlTlwdradM66I3m9lDIo4j2naCXjxuKWwl%2FmmPcvdmCwrqHeM0D3hQWOITE7cY%2FT53ZY5T%2FbbEn1l6WZ4v2ZYs%2FWvdSddC7umKEBIennVXtEW3MpyTmKFUEhLhjg9g2SYqNdMMfS28IGOqUB7E3kpUD2%2F13iy8HYlblwEu5AbsyXUL2l3wauXhjcKH%2BJMXEV92578TyuYmNCXs7KSrEbLjyOi8KYPKylT8kiWLKUNDQyspvy56iUC5pBvUN8RnozE1bFaL9L9s%2FNA9dI79cuMRWIP%2BDK7%2BtQp3BZTCtrmtsZlHNYGW7THhxZnR3pYBGimWoTL0ZJQ405vww26lFZenKw26eIQlHrMjKTaNz6ubHW&X-Amz-Signature=e3fd5f359b5be5c2892abd338737967e2488ff11b64ecfef3e974a6303f5f4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5DWVFU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwyYBTdj%2FXsWDDBFSqkozxINbWPD%2BzdQMDgvc5obYdyQIgZzZ97iv2ClYx2YW20ljrA3b%2BOuPokrlTaqoULwU6XEQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNUCfSHAxn59JSwFircAwpRQ86Vzttc2YIl8HBLaemJ9ewJ5q9Ec9CPvV5eq%2BsdFh1I7GMC7YoW4%2BYjVClHjsAR93OzMk1UrcI0wOEZnzVaThm7RYIHUClh%2BXYD%2F4XRXwei9AqoGfia01mxZ9%2BN2WuwpZdtHFfEC4Cyb1HNUlUQ9VmAtHdbcuTPA1BktP4cvGlWZ2T9lyOruIJaogx%2BtEZDUo%2FCILOh1FLMdAXz3tY9phXxSNAlUeTLQ7WbbB%2B1SokCx%2FVyT9V7BxLyTF3z6uOfLlZAa9rtMK%2Bq%2BcmsckaGf7gu2H1lb6pusHOmDmFuqeb%2Bp22hCKkB0XgJiIqdCeyt6%2Bo4HNDreNRQS6Oa3Qe%2BiKC5%2FnmIlIt3gWFh5Y1dTrVMqKMLZyT7YzHuKY66Xtssm170Alf2Mtmfv6gvW7fpNr1SQTu3c%2Bx3jaM%2Fr1K7Be3krEddPCXGgzaJxlnbup372hO56Pm5xEwVmc6SdAKkFDs4GWHcRRf8j4DJfPO%2BxTkm%2BCFJYxJNPlTlwdradM66I3m9lDIo4j2naCXjxuKWwl%2FmmPcvdmCwrqHeM0D3hQWOITE7cY%2FT53ZY5T%2FbbEn1l6WZ4v2ZYs%2FWvdSddC7umKEBIennVXtEW3MpyTmKFUEhLhjg9g2SYqNdMMfS28IGOqUB7E3kpUD2%2F13iy8HYlblwEu5AbsyXUL2l3wauXhjcKH%2BJMXEV92578TyuYmNCXs7KSrEbLjyOi8KYPKylT8kiWLKUNDQyspvy56iUC5pBvUN8RnozE1bFaL9L9s%2FNA9dI79cuMRWIP%2BDK7%2BtQp3BZTCtrmtsZlHNYGW7THhxZnR3pYBGimWoTL0ZJQ405vww26lFZenKw26eIQlHrMjKTaNz6ubHW&X-Amz-Signature=647c49de8d79ea3f9772df10f785bd6b37adcb7428e5642070403446248c064e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
