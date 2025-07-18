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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGHF2EC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDQ%2FGpnCO9nnqU18ONVTd2n9ISgBUXyfO8ZHHdljLqAvwIgXee40Ew97uL2JVuO9V0r9pYjoDykAW07LSfGs%2FfxxBMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAm7RsBYryMIx%2BdMXSrcA6PVioSRW4eNxrjpmqnkO6SQKY10nKhQkNYCYKnPPBhAkSG3Oqdq8rIT1KuIuOLywQlz%2Fr8aobME2DHfULWJ1xadLZVoHKHhoCz0ALR4yXqWaFsBSf1TgddKo8xDsAgnyod%2FMBFweagJYvIuClb4KX8J%2FGpJRPtZXWO%2FcSMF4UrzCeVmrJR%2BDUR%2F5YG8nilxht%2Bq%2FR%2BFmtyv4lh7Re2UBvk4lBVfO5Wh%2F3ulcp9jyA%2B%2BD3bkJD5LhW3OCcouQKwg390bLc4d2VdYoPy0Fad6jLgOKnBZL2lmn%2FBEsLrR27jVhK5yO7lkaQnrd3zIkV5tC5wNheR097WT1LJ1qfyn%2FstUwvfbbwQ7FQjYgBXMbkp7YmLcth6mr5YXk691uI46D%2BGrRVqQvB%2BxPNsCQafYbtLawwLl6nhg387%2FZpmXKDlzfENaSBRjcYwxRUxDfGI70OMQApEz%2F79x2OEEqyLfSp8U2mRPxk5nzzfsBYvvx5MpZSD00lMy3hQxFZjtK1%2FPNGMA9E2cmOrm3EFwLzk2GNRktp1%2By4odc31WJuHPVqvsg0n0G0GyO4JWxcIDw6pmhAdPX6t9r9llDNofz8OKS1LON31zrg%2F9lPdxRbqsJU4JzCMpUw9aiTg5yHLMMJCK68MGOqUB18kN3qphVCEbRpkXb2IrycIYLihatsjkouNrndULN2QGzt9pqngAnQ0RFPvXjVPSyoPTU896qmStlYl%2B9YiPB6ekWjkGdceSjSSPVatjaCC%2F0po8x6qUrB6wieC0GtdI%2B1at5ie2OM4YvmBGuYST4DxWTNKN7vCs4InJ84CiKrtk89vbmA38BNw3MR5bkQ4bN34C%2Fd5d9fYy2M1CqqFM0pAnyVPX&X-Amz-Signature=8b3e4fccf87f9ceecfd35fdad4513715695c54b5ce735a88a3ada8e874b92807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGHF2EC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDQ%2FGpnCO9nnqU18ONVTd2n9ISgBUXyfO8ZHHdljLqAvwIgXee40Ew97uL2JVuO9V0r9pYjoDykAW07LSfGs%2FfxxBMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAm7RsBYryMIx%2BdMXSrcA6PVioSRW4eNxrjpmqnkO6SQKY10nKhQkNYCYKnPPBhAkSG3Oqdq8rIT1KuIuOLywQlz%2Fr8aobME2DHfULWJ1xadLZVoHKHhoCz0ALR4yXqWaFsBSf1TgddKo8xDsAgnyod%2FMBFweagJYvIuClb4KX8J%2FGpJRPtZXWO%2FcSMF4UrzCeVmrJR%2BDUR%2F5YG8nilxht%2Bq%2FR%2BFmtyv4lh7Re2UBvk4lBVfO5Wh%2F3ulcp9jyA%2B%2BD3bkJD5LhW3OCcouQKwg390bLc4d2VdYoPy0Fad6jLgOKnBZL2lmn%2FBEsLrR27jVhK5yO7lkaQnrd3zIkV5tC5wNheR097WT1LJ1qfyn%2FstUwvfbbwQ7FQjYgBXMbkp7YmLcth6mr5YXk691uI46D%2BGrRVqQvB%2BxPNsCQafYbtLawwLl6nhg387%2FZpmXKDlzfENaSBRjcYwxRUxDfGI70OMQApEz%2F79x2OEEqyLfSp8U2mRPxk5nzzfsBYvvx5MpZSD00lMy3hQxFZjtK1%2FPNGMA9E2cmOrm3EFwLzk2GNRktp1%2By4odc31WJuHPVqvsg0n0G0GyO4JWxcIDw6pmhAdPX6t9r9llDNofz8OKS1LON31zrg%2F9lPdxRbqsJU4JzCMpUw9aiTg5yHLMMJCK68MGOqUB18kN3qphVCEbRpkXb2IrycIYLihatsjkouNrndULN2QGzt9pqngAnQ0RFPvXjVPSyoPTU896qmStlYl%2B9YiPB6ekWjkGdceSjSSPVatjaCC%2F0po8x6qUrB6wieC0GtdI%2B1at5ie2OM4YvmBGuYST4DxWTNKN7vCs4InJ84CiKrtk89vbmA38BNw3MR5bkQ4bN34C%2Fd5d9fYy2M1CqqFM0pAnyVPX&X-Amz-Signature=80196fe87c58f5076faadbcc4477a51bc8fda6d00f77c19695456839d9761f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
