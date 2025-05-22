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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOOOOVXX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDT3dkiVOWcqtBEKI48SxjKvRrnF2ifDF%2FQjrCqxRBi2QIgXn9kqtJtityNQema7%2Fg%2FvmeBsIZg1zCi%2B80xzX2k%2B%2FgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIMIZJIA4a5rUS%2BeSrcA1UUpFGxA70sZjELwWauSJvrMEE2uqUTbSPpKrgYRgWj6znQv5wTLFpegKzrW1haSl6WI4upg%2FZKN9R%2BrI7ho2tZ2vNfxW6aNTc1DZGbL7hqQHlfAGCvmsz3jhLUL15LDoeZHV5dofQVkPAzo%2FQrTfuV%2BZgYDuAIMFzgTDOI9hB%2BQysHBAHpY5UAsPWchgeo3kn1iyQ8YTeSqyJE1%2Ftqbqv41riPv375CypnXsKHDturg6xZgeZWSnrV4LAWdDyr3Ci6t3ZtBUoSGki9V7BzxmwqVd2qUCs2XQ7UjnJDqW180DEOGJD%2F8UDRrS1rmqiAHkpyF23gPAPQ7Z8ubTN35E3hJwF4rK%2Biqm5d2njp2V6IGLdjN0w%2F0P%2BKNSCVLDANF%2BOmgJGCbP7FNYudby%2BBus66OeS9IZiKZ7rDGSwg3N7cduoIl90zDR%2BIjO8Cn%2BV7676PeKdXMWBk7QXV%2Bx6ZnIHtC4st4Iep%2Fy8tp7DhB3lyHXbQ5nK016mr7WTkjDyKzi9S%2B0zIuEQc5%2Bxgf4tiCwCnEct5J0pmuAxSU7G0RyAJwUBCVAOzMqONMksHJegP2qIUoboX2olg7NzCLis7XfHYzwKgKGI1bkTlH7nu%2FjTFZI7qhDK0WxWNX7WKMMSwu8EGOqUBKmsTE5k3l3RgFfSrH%2Bhathgrq1euSrFJTVf1T6PXxvopl595kDQtG1bs6AODv13uJ6g%2FlYptw%2FupeykvR9M1xZWW38dna6dgfumZ5RKxnqn9LpcoptqWIr4t%2FwYu8m2sNIf6uJD1BOfhXDAIN0t4tuSSVF6PXoFDucgRUj9yqvZoFy1g60DPRoP2AgLK9PiT7io99ubq63D%2FYzWKLXErMELN48SU&X-Amz-Signature=475114d96698e707f4de9575dc99dc3b01d3ea43fd816ace7df449c1c13e0937&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOOOOVXX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDT3dkiVOWcqtBEKI48SxjKvRrnF2ifDF%2FQjrCqxRBi2QIgXn9kqtJtityNQema7%2Fg%2FvmeBsIZg1zCi%2B80xzX2k%2B%2FgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIMIZJIA4a5rUS%2BeSrcA1UUpFGxA70sZjELwWauSJvrMEE2uqUTbSPpKrgYRgWj6znQv5wTLFpegKzrW1haSl6WI4upg%2FZKN9R%2BrI7ho2tZ2vNfxW6aNTc1DZGbL7hqQHlfAGCvmsz3jhLUL15LDoeZHV5dofQVkPAzo%2FQrTfuV%2BZgYDuAIMFzgTDOI9hB%2BQysHBAHpY5UAsPWchgeo3kn1iyQ8YTeSqyJE1%2Ftqbqv41riPv375CypnXsKHDturg6xZgeZWSnrV4LAWdDyr3Ci6t3ZtBUoSGki9V7BzxmwqVd2qUCs2XQ7UjnJDqW180DEOGJD%2F8UDRrS1rmqiAHkpyF23gPAPQ7Z8ubTN35E3hJwF4rK%2Biqm5d2njp2V6IGLdjN0w%2F0P%2BKNSCVLDANF%2BOmgJGCbP7FNYudby%2BBus66OeS9IZiKZ7rDGSwg3N7cduoIl90zDR%2BIjO8Cn%2BV7676PeKdXMWBk7QXV%2Bx6ZnIHtC4st4Iep%2Fy8tp7DhB3lyHXbQ5nK016mr7WTkjDyKzi9S%2B0zIuEQc5%2Bxgf4tiCwCnEct5J0pmuAxSU7G0RyAJwUBCVAOzMqONMksHJegP2qIUoboX2olg7NzCLis7XfHYzwKgKGI1bkTlH7nu%2FjTFZI7qhDK0WxWNX7WKMMSwu8EGOqUBKmsTE5k3l3RgFfSrH%2Bhathgrq1euSrFJTVf1T6PXxvopl595kDQtG1bs6AODv13uJ6g%2FlYptw%2FupeykvR9M1xZWW38dna6dgfumZ5RKxnqn9LpcoptqWIr4t%2FwYu8m2sNIf6uJD1BOfhXDAIN0t4tuSSVF6PXoFDucgRUj9yqvZoFy1g60DPRoP2AgLK9PiT7io99ubq63D%2FYzWKLXErMELN48SU&X-Amz-Signature=d67dc0b5c41f95d53d55fae4cc50d7193241deabe3ed59345fabb35e6fb2abcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
