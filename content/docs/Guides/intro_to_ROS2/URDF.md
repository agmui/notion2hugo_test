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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITJBPH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDMvBULP%2BpzUM2Bb7PDfwbL8TMQ6UkF%2FdBWrIcPDvbxAwIhAIxwzgDNVWFbOS2nUPF%2B6HTDADEHfFI8FUUOe5joMPG7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxLY3R43dASMEyBsoq3AM1%2BkYL79v6O7yIzMF8k2Affwr9Kmm4fY6KfefSQS9iiKnWF300LC7LRUjagMp%2F2qY6UVMIIUWAndAIAs%2FHdQEjAR14TKTnRtUFAs8zFNYciT6xsh5%2BHwyWGXRuDmLPmu78duZ7ABFPIYSj0OoDLLz408wU5pGZxytYFGJA3fMp9TwMgkGg3MobKPLkWNS%2FqsEWvIB5I1uGwZl%2F3OPqKeoRXIrAs9HhsqTgyYfpKHlprLf4ZJeQLamuFRplkzjHSOx%2FsFyBATmHE8ifjs%2B27PmPcUz2lRSq8caxH6mgnply8jMWGkwepeBToIunFIaDl%2B8rvhAM%2FACFWYYmxnY39vxY%2FeZeaXUa%2BBvRe4233LyZu8xhtjJDbW6%2BZyODL4SwoWstRxzBdDQrqT414wUIyanz87B13nN8Syh89H3DOSSud8xKU3kvkzTlJgGgrIAX6Hl1TvPN67Qtaop7FTFGKUrXREYeHCy0yTloZEJaPwJbYPe9JEhXhEcGIWNBz5eBx0FDgVqf6fy4deMfqfxekYKMqZP1SZVMMEAtlj6uuMoChFHvqgqWQOJUE%2FCDj8gydmTSrmbVhTvGnSe3bIAFUQAVqre71uZEg14DLsv9WiTmWTZDBnPk9LOclg5zCTC%2F3Na9BjqkAVwEfRTIaB33Uta%2FL7%2FC%2BQdjAdRKvDOxfQHAwq82cBzqE5Z2RARxRYxxXQH739I7G2%2FNCoSJmD9jCoE7ogdP9qOemAE1FkC68VmKCyofq5UtIzno0V2a9raD6Aqe24S8mPnMyDP7SFc%2BazwgJQYoz95x2v7rJtbCCONIOZ5Yr0Ho77dqlBJVWa0R%2Bq7AALVWDaMwadqaEfP7cO1V%2BWRCXDgwG68G&X-Amz-Signature=0ce45687d405219b61330d18b9c7393e0f915818d18d50b8dd1ff274b8f2329e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITJBPH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDMvBULP%2BpzUM2Bb7PDfwbL8TMQ6UkF%2FdBWrIcPDvbxAwIhAIxwzgDNVWFbOS2nUPF%2B6HTDADEHfFI8FUUOe5joMPG7KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxLY3R43dASMEyBsoq3AM1%2BkYL79v6O7yIzMF8k2Affwr9Kmm4fY6KfefSQS9iiKnWF300LC7LRUjagMp%2F2qY6UVMIIUWAndAIAs%2FHdQEjAR14TKTnRtUFAs8zFNYciT6xsh5%2BHwyWGXRuDmLPmu78duZ7ABFPIYSj0OoDLLz408wU5pGZxytYFGJA3fMp9TwMgkGg3MobKPLkWNS%2FqsEWvIB5I1uGwZl%2F3OPqKeoRXIrAs9HhsqTgyYfpKHlprLf4ZJeQLamuFRplkzjHSOx%2FsFyBATmHE8ifjs%2B27PmPcUz2lRSq8caxH6mgnply8jMWGkwepeBToIunFIaDl%2B8rvhAM%2FACFWYYmxnY39vxY%2FeZeaXUa%2BBvRe4233LyZu8xhtjJDbW6%2BZyODL4SwoWstRxzBdDQrqT414wUIyanz87B13nN8Syh89H3DOSSud8xKU3kvkzTlJgGgrIAX6Hl1TvPN67Qtaop7FTFGKUrXREYeHCy0yTloZEJaPwJbYPe9JEhXhEcGIWNBz5eBx0FDgVqf6fy4deMfqfxekYKMqZP1SZVMMEAtlj6uuMoChFHvqgqWQOJUE%2FCDj8gydmTSrmbVhTvGnSe3bIAFUQAVqre71uZEg14DLsv9WiTmWTZDBnPk9LOclg5zCTC%2F3Na9BjqkAVwEfRTIaB33Uta%2FL7%2FC%2BQdjAdRKvDOxfQHAwq82cBzqE5Z2RARxRYxxXQH739I7G2%2FNCoSJmD9jCoE7ogdP9qOemAE1FkC68VmKCyofq5UtIzno0V2a9raD6Aqe24S8mPnMyDP7SFc%2BazwgJQYoz95x2v7rJtbCCONIOZ5Yr0Ho77dqlBJVWa0R%2Bq7AALVWDaMwadqaEfP7cO1V%2BWRCXDgwG68G&X-Amz-Signature=376cd24c0969e73f2944c7f7cb66c2e16f3abb1d7dbf6e2a1c22b904c02a3b03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
