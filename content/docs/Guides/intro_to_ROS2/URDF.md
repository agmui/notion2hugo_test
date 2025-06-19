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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5R2T6K%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjCZP2Yx3ObzV4L%2F8lGZ4LVSG%2B2WiMUZ8kaGjuHhaPWAIhAIdApvdiJ6CFKIeu2u65LPpEE5%2B%2BVqpmjPCC1mN0VoGAKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyensXbKEA%2FBM9jqMQq3AMAvZeouMStfcSyqD%2FbPjkh6jq3LHd8KiA6Zwepv93b%2FEIXLe%2BXhkNr2ugAmHpdlyR0jkcNBIr7OJ%2F3ViRz%2BbupGFCYeHnhflwuZTE%2BRzjGMLYm9FQfblFzC%2FjPo1IuXwf7vTMvEg78J8cuvmHDLYFSASdDmws2B4rwC92UP4%2FRL6MErLAk%2FGZF56Vqw6sJ6K%2Fn8P775tHD6PQQLsDVLRmmT6dHC9gsvLdwfYmeGwTECHdgrVWgBh9p8baMgaJTNT9LYHAN4Xc0O5Tp3geueUSa%2BX7ikuqEil2tfpYQThrd0pGjVX%2BFmFDCb2ThPdP%2FW%2B9OjVBow%2BbbcOG2rbkajn62rigiOVZlnFNBquLN1xF5W37TUIgKPTKMfONM6227q%2FWVUi3siPW%2FbWFAOLCVrW9EHV4neDhL6UYmhW3ZJ%2BlD6blLX%2F9bcv5g0Y4xqD2LdCHRu2FxeUjrevIxTSLr%2FxikSewXeWlCy4IsBAOFfaon65fKIwSkDFiTiYbFnAfr3ZrhDBC%2FkjDiXZhVOf3erpTiFXeDV1gWJI%2Fjo3DIGNAHppxcODszDhoJB03nBO9P3e0Wsq6OmZqeFMk4hZnwLUJ5w%2FK9ntZUsgeeKdcmj%2FiZLCuVoKcSI129EXjGNTDxs9DCBjqkAYOT2yXI05zM40dvJzOJ%2BmfXpo3m7KD%2BchK03mn9m2gNmc6ilYYTVkDdMeemO2SKH6iF1p6rC68gI%2BImiHQcOrC%2BrL2vJWuTWigYbrxrCvVmYdCO0qhq7ReLaaHADaVrUgQu8EREb4GXrC%2FbSyNZ5Dw42wCK8IMIVdftTBOaeuqQ6SEjJCMTKv8XoctSPlnoEspyEmOa%2FVib0RIwOxv8lGt3PWhi&X-Amz-Signature=7e1c9a44c6d2320c41230107cff0b0766674aac1ab5f5147128101041d894b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5R2T6K%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjCZP2Yx3ObzV4L%2F8lGZ4LVSG%2B2WiMUZ8kaGjuHhaPWAIhAIdApvdiJ6CFKIeu2u65LPpEE5%2B%2BVqpmjPCC1mN0VoGAKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyensXbKEA%2FBM9jqMQq3AMAvZeouMStfcSyqD%2FbPjkh6jq3LHd8KiA6Zwepv93b%2FEIXLe%2BXhkNr2ugAmHpdlyR0jkcNBIr7OJ%2F3ViRz%2BbupGFCYeHnhflwuZTE%2BRzjGMLYm9FQfblFzC%2FjPo1IuXwf7vTMvEg78J8cuvmHDLYFSASdDmws2B4rwC92UP4%2FRL6MErLAk%2FGZF56Vqw6sJ6K%2Fn8P775tHD6PQQLsDVLRmmT6dHC9gsvLdwfYmeGwTECHdgrVWgBh9p8baMgaJTNT9LYHAN4Xc0O5Tp3geueUSa%2BX7ikuqEil2tfpYQThrd0pGjVX%2BFmFDCb2ThPdP%2FW%2B9OjVBow%2BbbcOG2rbkajn62rigiOVZlnFNBquLN1xF5W37TUIgKPTKMfONM6227q%2FWVUi3siPW%2FbWFAOLCVrW9EHV4neDhL6UYmhW3ZJ%2BlD6blLX%2F9bcv5g0Y4xqD2LdCHRu2FxeUjrevIxTSLr%2FxikSewXeWlCy4IsBAOFfaon65fKIwSkDFiTiYbFnAfr3ZrhDBC%2FkjDiXZhVOf3erpTiFXeDV1gWJI%2Fjo3DIGNAHppxcODszDhoJB03nBO9P3e0Wsq6OmZqeFMk4hZnwLUJ5w%2FK9ntZUsgeeKdcmj%2FiZLCuVoKcSI129EXjGNTDxs9DCBjqkAYOT2yXI05zM40dvJzOJ%2BmfXpo3m7KD%2BchK03mn9m2gNmc6ilYYTVkDdMeemO2SKH6iF1p6rC68gI%2BImiHQcOrC%2BrL2vJWuTWigYbrxrCvVmYdCO0qhq7ReLaaHADaVrUgQu8EREb4GXrC%2FbSyNZ5Dw42wCK8IMIVdftTBOaeuqQ6SEjJCMTKv8XoctSPlnoEspyEmOa%2FVib0RIwOxv8lGt3PWhi&X-Amz-Signature=5bbf3666e7ba5df1f224bd2207e735ae2cef2955b878a7eb7f879a893b7ec6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
