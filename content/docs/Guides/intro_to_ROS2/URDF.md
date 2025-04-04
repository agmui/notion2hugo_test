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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCYXKTP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmILNp19kJfuMia11kodz6ULFZzqpxF2XOl3jQy%2FqHWQIgZm%2FLm0Mjve5nzQom4oMsTYlVbeLNvBD1OLpT0ExFWgUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDD6MryeVSyJD%2BmKkzircA52GFsWsG%2FHLU3ebRxbCiWqVqbk2qe6LXPKLt3mRenAL%2B7UGnx0wLywV8HbXR2y6n5Q2o3Ug8rTemD1px7j9oR%2FXIUhYqSe5OwnusRt5bDyYqd5r9l1pZOkMAwaReUsnft%2BM6gyHrhLGctnBYoY7LjRRhu%2FQNuyB%2BnDknLjWGyfLNZ2LYiwlr64BZ%2FzswqX4f951P6mHqJQ4%2ByuoTEtm46%2BkTz056RY25nQQLMBdALCiYlPkOEG2ZBbjvX0He5iKZ886h02G1Yqdb%2FYZso%2B29doW3d8t38W48m85x%2FAcOueYY1hYw0AwYImK8I3oK28KsJGrLdsPdcIEMXwC%2F93ebbQo2LbXn2bkY0H7MHHfQR2I25%2BqPsnrmWQjmK6t%2FnytFMgxbiy9%2FXxZBiB%2BpW%2BtVgkuKaRJjq%2FPC5ldJipMshbRgGmNiaRH%2FAYfbxi500DL1%2BW2%2F8ue1qS6qXaudSf%2F%2BKJPHFmoj3zH6lliZcer3qmyA8TFoEHV7RxJQIYv3fO7ihsVqGr%2Fm2Y2KqCb%2Bau7dwM23mvQdjXt6hmP8kFnjbi5mM1P3QfJVDme%2FUmicbT%2BLZFdL3n8xyM%2FqzhISBORO4Sb7aUP9SzYvS1EhWZ2H5Oi6lILT3VZAJxqejCrMLeYv78GOqUBLUs%2B6je%2BpAFD0LUU5YaIcgt0f32sIymlreZSuAjIJHGOLapif%2Bg%2Bkv2uMrokcjo37DtJV1O47PxqiqcmRfAHP0aM1I6jdFsn14GBWiLFNQwoZZq8C0WS8w4PKRTr7FRDW90N5PMna%2FagEMy17y74XVSDSv4xOcfXWGcy4Z55D5XJDvNevM%2Bjcdf8ZFfyIFZAHxzIfKhoaICegFuC%2FAmBWS2O0NmZ&X-Amz-Signature=1653878a91664ec6dd712bf0d5a55368b9f86ae757b866a876129085c4ec30ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCYXKTP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmILNp19kJfuMia11kodz6ULFZzqpxF2XOl3jQy%2FqHWQIgZm%2FLm0Mjve5nzQom4oMsTYlVbeLNvBD1OLpT0ExFWgUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDD6MryeVSyJD%2BmKkzircA52GFsWsG%2FHLU3ebRxbCiWqVqbk2qe6LXPKLt3mRenAL%2B7UGnx0wLywV8HbXR2y6n5Q2o3Ug8rTemD1px7j9oR%2FXIUhYqSe5OwnusRt5bDyYqd5r9l1pZOkMAwaReUsnft%2BM6gyHrhLGctnBYoY7LjRRhu%2FQNuyB%2BnDknLjWGyfLNZ2LYiwlr64BZ%2FzswqX4f951P6mHqJQ4%2ByuoTEtm46%2BkTz056RY25nQQLMBdALCiYlPkOEG2ZBbjvX0He5iKZ886h02G1Yqdb%2FYZso%2B29doW3d8t38W48m85x%2FAcOueYY1hYw0AwYImK8I3oK28KsJGrLdsPdcIEMXwC%2F93ebbQo2LbXn2bkY0H7MHHfQR2I25%2BqPsnrmWQjmK6t%2FnytFMgxbiy9%2FXxZBiB%2BpW%2BtVgkuKaRJjq%2FPC5ldJipMshbRgGmNiaRH%2FAYfbxi500DL1%2BW2%2F8ue1qS6qXaudSf%2F%2BKJPHFmoj3zH6lliZcer3qmyA8TFoEHV7RxJQIYv3fO7ihsVqGr%2Fm2Y2KqCb%2Bau7dwM23mvQdjXt6hmP8kFnjbi5mM1P3QfJVDme%2FUmicbT%2BLZFdL3n8xyM%2FqzhISBORO4Sb7aUP9SzYvS1EhWZ2H5Oi6lILT3VZAJxqejCrMLeYv78GOqUBLUs%2B6je%2BpAFD0LUU5YaIcgt0f32sIymlreZSuAjIJHGOLapif%2Bg%2Bkv2uMrokcjo37DtJV1O47PxqiqcmRfAHP0aM1I6jdFsn14GBWiLFNQwoZZq8C0WS8w4PKRTr7FRDW90N5PMna%2FagEMy17y74XVSDSv4xOcfXWGcy4Z55D5XJDvNevM%2Bjcdf8ZFfyIFZAHxzIfKhoaICegFuC%2FAmBWS2O0NmZ&X-Amz-Signature=7777324523eabc631c4642a43ba1effeded5ec4ec80eef6f82286b4fa1030a41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
