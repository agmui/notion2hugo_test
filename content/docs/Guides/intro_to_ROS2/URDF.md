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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5P6523S%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4a6BUHJTyUkZ1P7p9EX18Z634YvNI8ac6SqUM9TF4jAIhAIEJGcY2Mngzka5J%2F5UQFyqmb%2BnRtaJkHapdCeFd4DWhKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyClMdUxl6kde%2FVuhEq3ANa%2ByANpbYEMsGs7FwntMOoM7Wg9962jCkkr3IEwd0opwcB%2FtblsapzsviHFxYCKbGdDrIZapDVf6zTKRpzgSi2Zf%2Fea3HWD37HqoAopqP%2FZxkYRMqfOOaVkusRu1G2eNs3xWqcsVYYUDyVEB4M2hgHDukrUrwOnoyIkHfv179E7z94X5Pa7tFxsz23270FayHFV1QHZxrIPO1IeIYF8xFGVphFR2yeu5LhHF2tUNifWcsnv69pzosJPagyCKe2ANkDmevpdmEtJkzShCcu0wyk%2B9Aq7nKiVWau7EWMZYrow7f%2FNsG4ljlVTWIh%2BL%2Fa5saMFVwJ9PR7o2%2BolARbNd3mNah6jfpAzNKc4YpN5EiRTb0NNL%2F7Rfe5TiFLX78PDjjSmYkedQDveVC4Fca%2FYEjpiLBQpu%2FhyqCAHXEFGlbsFKPIjDiUVHLEUZcK2Ooi75sxvY7EucufovlPOu3yX8sV4ZO8gEHlpXxwz16Ifqf%2BfvjT4FXp78KDmn8%2Fqf4%2BvsOVS%2FLMovEeWrxWlJ2W5w2n8UA8AnnybFy4UE4lPm%2FmJG518Pp3c5ZoSCvGvi9PXswPXT0qCQvv2wYGfe9unCZT9urSsTVgu5pdoePx1tXU1%2BEPQRUZrkY59v0xYzDT09i9BjqkAcu0Q0xAP1GM46ID0V7PAbiC9khbR%2B4paaReCEhTs%2ByoqpMMn7ZXmCfVCeikoP32kCI5sAXeeHAr%2FcOL6XJOHO6bKiAu8lVCHHZr20AvljeLyT0Kl58oBvhXaQ9tSbn1aWBYodjPt7m7tej%2B6Kq04hQe9X05rneJZxwOyGl%2FInVY5%2BpbZyNHbtXCXJwuimbzTxPSdfLbUfJLx2SAPlBfIL5H7P%2FX&X-Amz-Signature=8e02171aed04cc81674712a400749bd23fb379c3e5844d13c3e0b9528eadefff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5P6523S%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4a6BUHJTyUkZ1P7p9EX18Z634YvNI8ac6SqUM9TF4jAIhAIEJGcY2Mngzka5J%2F5UQFyqmb%2BnRtaJkHapdCeFd4DWhKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyClMdUxl6kde%2FVuhEq3ANa%2ByANpbYEMsGs7FwntMOoM7Wg9962jCkkr3IEwd0opwcB%2FtblsapzsviHFxYCKbGdDrIZapDVf6zTKRpzgSi2Zf%2Fea3HWD37HqoAopqP%2FZxkYRMqfOOaVkusRu1G2eNs3xWqcsVYYUDyVEB4M2hgHDukrUrwOnoyIkHfv179E7z94X5Pa7tFxsz23270FayHFV1QHZxrIPO1IeIYF8xFGVphFR2yeu5LhHF2tUNifWcsnv69pzosJPagyCKe2ANkDmevpdmEtJkzShCcu0wyk%2B9Aq7nKiVWau7EWMZYrow7f%2FNsG4ljlVTWIh%2BL%2Fa5saMFVwJ9PR7o2%2BolARbNd3mNah6jfpAzNKc4YpN5EiRTb0NNL%2F7Rfe5TiFLX78PDjjSmYkedQDveVC4Fca%2FYEjpiLBQpu%2FhyqCAHXEFGlbsFKPIjDiUVHLEUZcK2Ooi75sxvY7EucufovlPOu3yX8sV4ZO8gEHlpXxwz16Ifqf%2BfvjT4FXp78KDmn8%2Fqf4%2BvsOVS%2FLMovEeWrxWlJ2W5w2n8UA8AnnybFy4UE4lPm%2FmJG518Pp3c5ZoSCvGvi9PXswPXT0qCQvv2wYGfe9unCZT9urSsTVgu5pdoePx1tXU1%2BEPQRUZrkY59v0xYzDT09i9BjqkAcu0Q0xAP1GM46ID0V7PAbiC9khbR%2B4paaReCEhTs%2ByoqpMMn7ZXmCfVCeikoP32kCI5sAXeeHAr%2FcOL6XJOHO6bKiAu8lVCHHZr20AvljeLyT0Kl58oBvhXaQ9tSbn1aWBYodjPt7m7tej%2B6Kq04hQe9X05rneJZxwOyGl%2FInVY5%2BpbZyNHbtXCXJwuimbzTxPSdfLbUfJLx2SAPlBfIL5H7P%2FX&X-Amz-Signature=7506976efc05a06655edbdfa4254d3420513f939ba15c33da516d7b22d8dbeba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
