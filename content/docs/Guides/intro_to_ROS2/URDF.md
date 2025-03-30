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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OBN2NA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHrq6l%2FVwqLTqFuNwYVfpPOd48SQII5V5djOdNRxEyKPAiEAuxGRf6kEcy%2Bk%2Fz6im3R95ET%2B8EQZ9o%2FYV4jEICwxfk8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnWyZ97AsQ66qcPOCrcAwWNnOrWhNeVeMhAJyy4sX3gqZ2T7uTeLoFmhVKuu8HfPq9tyHVeCIFpkjiAi38gV5O8hQFEc2iQAodlxP7bMRs053RlrKYy%2BGxTXTzt84hiYP3OTbR9DDuaFp3ZUbIMNoKIUXqOz300JLERjQN1kM%2FuzRAlW2rHQ5u8Pot2SjcrxygJXzJKzGqYBKPx9JP40dLyDL3JABj%2BNQbeRIenO1CUQt27i6s1Ygk%2FteTVzA7tvm3K9m%2BDah0ZKNXtFf%2Bk9%2F7%2BJHGLpSuSPzOVn5WEcmFRlhOljs%2F042zTs9%2FIFyttQ02GJVd%2FTbtcHHLXVUpPqqdkwo1M%2FffDx025fzw7gi5wBv7%2FHXNyF4WxqRVUZt6wG1xzzz0aJozDO6RadYr8sqWHeRqRKOavTj0NAQT9hef%2FtrAPzSwouI1SlzOaeDDgyt8KmiAXlm8UPBN1UpamyIc%2F9Bdr3UBnl59G4x%2BuGw98AytbviV7G1BXuRhtDUWhAHJLdWHV%2FKonIvur%2BjuuXJt7lF7yYwqt8XTuV8gmmsrX5O9W74IjnbXhmG5aA7DwQOrvt9UJ3IPKnTyhFUwTJm6T43UyK%2FzqTIaj7BIEGeqcL%2BQvuUDV9Z102SWKEqNj6MgGjIMZVpQ4wBJFMP%2Bnpb8GOqUBt6i4SQGdMhc8DlMH9PBwSKJX4Y97wpMr%2FBXV0yOhRuiAkeaJAlQU8qwL4i%2FQpfUqRajRdTKTsEYKkW3Y447RnT7PSMktIVGgxiAlQcT1V0CsAL2j%2FHSYR3xNDr%2Bec5n96LPq41Tx9pMKz2hLCoI5%2FekWKAKRtLPyHUW5HOuNX4mCMF95LVrmBmlOm5CR%2BGo%2B9GP6lrtFHvfUgML2%2F0ufNA4D5CSd&X-Amz-Signature=6fead37ffb2a92b6bbdd0123cbcdc7639fb263e01743999a00b4a692662d10e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OBN2NA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHrq6l%2FVwqLTqFuNwYVfpPOd48SQII5V5djOdNRxEyKPAiEAuxGRf6kEcy%2Bk%2Fz6im3R95ET%2B8EQZ9o%2FYV4jEICwxfk8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnWyZ97AsQ66qcPOCrcAwWNnOrWhNeVeMhAJyy4sX3gqZ2T7uTeLoFmhVKuu8HfPq9tyHVeCIFpkjiAi38gV5O8hQFEc2iQAodlxP7bMRs053RlrKYy%2BGxTXTzt84hiYP3OTbR9DDuaFp3ZUbIMNoKIUXqOz300JLERjQN1kM%2FuzRAlW2rHQ5u8Pot2SjcrxygJXzJKzGqYBKPx9JP40dLyDL3JABj%2BNQbeRIenO1CUQt27i6s1Ygk%2FteTVzA7tvm3K9m%2BDah0ZKNXtFf%2Bk9%2F7%2BJHGLpSuSPzOVn5WEcmFRlhOljs%2F042zTs9%2FIFyttQ02GJVd%2FTbtcHHLXVUpPqqdkwo1M%2FffDx025fzw7gi5wBv7%2FHXNyF4WxqRVUZt6wG1xzzz0aJozDO6RadYr8sqWHeRqRKOavTj0NAQT9hef%2FtrAPzSwouI1SlzOaeDDgyt8KmiAXlm8UPBN1UpamyIc%2F9Bdr3UBnl59G4x%2BuGw98AytbviV7G1BXuRhtDUWhAHJLdWHV%2FKonIvur%2BjuuXJt7lF7yYwqt8XTuV8gmmsrX5O9W74IjnbXhmG5aA7DwQOrvt9UJ3IPKnTyhFUwTJm6T43UyK%2FzqTIaj7BIEGeqcL%2BQvuUDV9Z102SWKEqNj6MgGjIMZVpQ4wBJFMP%2Bnpb8GOqUBt6i4SQGdMhc8DlMH9PBwSKJX4Y97wpMr%2FBXV0yOhRuiAkeaJAlQU8qwL4i%2FQpfUqRajRdTKTsEYKkW3Y447RnT7PSMktIVGgxiAlQcT1V0CsAL2j%2FHSYR3xNDr%2Bec5n96LPq41Tx9pMKz2hLCoI5%2FekWKAKRtLPyHUW5HOuNX4mCMF95LVrmBmlOm5CR%2BGo%2B9GP6lrtFHvfUgML2%2F0ufNA4D5CSd&X-Amz-Signature=9ed4d67ea315b286f20c35ce5e983a60fd1948350edecc31eccf0445df902492&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
