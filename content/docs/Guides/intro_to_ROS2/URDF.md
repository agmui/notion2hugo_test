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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSE2Y2F%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4jM1xssPHEWVauJWhipfo0jm2vHgeHYtd0KGy9cVJ5AiBwDTXXRWiaYBSRdhS0LDfpa8mP42STXi8sxOgjIALKBir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM0i5BlsLkyfiNvQyOKtwDXrWygmsur%2F%2B0wteTUrjJkriu%2BguZDC3O%2FXjD0DzS3ygq40KsR6DKT%2BQsz29RH63PBfczAmwRgfo1VLjUe4fkSQYe2KblfYch6MX3gvz8wxt6Ib%2F0Lcnya%2BlFhxfpLWe8N%2BKSQ%2BV17nreB04J1ObwLKpiNynDoM%2FXwMlECj0iVLpm4s0%2ByCU8axneiBHgEvYw%2B3PbF%2FTFrSzbkw4EpkS3Lohj%2B9mThUmtxdWfPtAcYan%2BX6WhBs6l%2FeAzOXaOsm8rv%2BdzPtaCc0CazLmTa4dJzB1sFMfxw9OY2FtWvcqIT%2Bj%2B3i5L%2BRhVSGw8jHOCoT4YxGU9UfISlIYTHpoX5xjIMf0RiPO5pQ%2F01JcmuXouEKV7yviRIT59NW%2BUSojUykNjJ1tNZXqKZEVSuQTuBuCfpxSBOwGq5Qxmk2P8Hs1j05FGVn82lAcdXCckYrYERoXLzOXmeSbsRM4Scl8uFAJTDRkzL3mimjTEnIDjlHlHhRLGsFSa6SQo7C4VfXgl1szp2h%2BXYqIZk5ndJdaZBhRpXPVEArkTPME%2F4kwjlx3CWoTVb9KZpk4HqDc3q1YHWbBBz4Pohb2o8zfvAa%2FjkmByOxno0XjTWnJ0ugupauS0ZLvcoCcnOPddn8H4DgwwiL%2FEwgY6pgHmD2mNVGQSMaaH3VErU94lANvgNdif640XcsIud2o2ma%2BlV9I3mmej1BplC%2Bqsj8%2F5%2Bozxpr50vI99%2F7w5rxx7ZxjeiKuxLaEu8HeS1Oc35IPt2HVhj54fbhXmaTCM5yzUKZDgGh8U59rqtGVcA8wduOUDaGOg0iGueC6aMogvjTdXE%2FLobGCwoIzTEqieuV4%2BbiN9rnKB4haIbhDhIOsPNNHD3JKL&X-Amz-Signature=50b2f6f34521c0c29c4bfa49c625b346d840b43d2ad7e12cbd672727d6d34e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSE2Y2F%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4jM1xssPHEWVauJWhipfo0jm2vHgeHYtd0KGy9cVJ5AiBwDTXXRWiaYBSRdhS0LDfpa8mP42STXi8sxOgjIALKBir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM0i5BlsLkyfiNvQyOKtwDXrWygmsur%2F%2B0wteTUrjJkriu%2BguZDC3O%2FXjD0DzS3ygq40KsR6DKT%2BQsz29RH63PBfczAmwRgfo1VLjUe4fkSQYe2KblfYch6MX3gvz8wxt6Ib%2F0Lcnya%2BlFhxfpLWe8N%2BKSQ%2BV17nreB04J1ObwLKpiNynDoM%2FXwMlECj0iVLpm4s0%2ByCU8axneiBHgEvYw%2B3PbF%2FTFrSzbkw4EpkS3Lohj%2B9mThUmtxdWfPtAcYan%2BX6WhBs6l%2FeAzOXaOsm8rv%2BdzPtaCc0CazLmTa4dJzB1sFMfxw9OY2FtWvcqIT%2Bj%2B3i5L%2BRhVSGw8jHOCoT4YxGU9UfISlIYTHpoX5xjIMf0RiPO5pQ%2F01JcmuXouEKV7yviRIT59NW%2BUSojUykNjJ1tNZXqKZEVSuQTuBuCfpxSBOwGq5Qxmk2P8Hs1j05FGVn82lAcdXCckYrYERoXLzOXmeSbsRM4Scl8uFAJTDRkzL3mimjTEnIDjlHlHhRLGsFSa6SQo7C4VfXgl1szp2h%2BXYqIZk5ndJdaZBhRpXPVEArkTPME%2F4kwjlx3CWoTVb9KZpk4HqDc3q1YHWbBBz4Pohb2o8zfvAa%2FjkmByOxno0XjTWnJ0ugupauS0ZLvcoCcnOPddn8H4DgwwiL%2FEwgY6pgHmD2mNVGQSMaaH3VErU94lANvgNdif640XcsIud2o2ma%2BlV9I3mmej1BplC%2Bqsj8%2F5%2Bozxpr50vI99%2F7w5rxx7ZxjeiKuxLaEu8HeS1Oc35IPt2HVhj54fbhXmaTCM5yzUKZDgGh8U59rqtGVcA8wduOUDaGOg0iGueC6aMogvjTdXE%2FLobGCwoIzTEqieuV4%2BbiN9rnKB4haIbhDhIOsPNNHD3JKL&X-Amz-Signature=8ae17c5cb02414fce7e1cc3002b2329ab6ac986600eb3573852efb8b4b84cbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
