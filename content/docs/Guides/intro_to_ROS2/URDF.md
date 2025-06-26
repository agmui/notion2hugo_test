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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKVKDSY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDTCSXU%2FtuxWJCcnej2GMGGbeW4kQAv3ZTfMSIyyEWdsAiEAlbcKq0k0zAdA8zTkfE5A%2B1VvPVqm3jVG1AHBajoOb8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOARYpjffYg0GbRwtCrcA4Ar%2FqChJ8PB7fkedW1YBjCSw1Mnfkrt2D9B5YpAXjD7OyZHDhrtyJU%2F%2BHFH4uTTf5AuBeNEXXEgIFdGtRKlhYt8zElCAnJ5SsWGmYNrDDLJTpGBvF%2B4Hmj%2FPja9CwdeiMJHmQHavATqBCR2sp0n%2BNwFJgiQxjbWB%2BFRwB0%2BciRD5u9sg6vqCOacsr7Fxe0KMZ3xM3jlfWyUOSC7gJ9e%2BJ96TKRsBIgjt5UOiElGuqhY7bi9l%2FCrpzi%2B6hJOowbQDXTB%2FGCDcA%2FoLd0Gn001WPBGDRDVRddtjjDkHo8rURcg5hWuoVh6fK53QfkGWbXVApHn7kVqJv01ruLCvtJhW%2BifiCKZJGQxyg0sk%2FrCBIqxZ12Fj7U%2F4qiMr5TeQtfmChWdbmLmo5qZ%2BJ04PsVmhGCugxmCYEwiIVrTtooGtmBzJrPiZm7mUKB%2FnUA0bFd3enyC4h8GemGjI1J%2FwH2ChWPpgXCtLUonEu%2Bbt5zKqDQIRw%2FZFPlMtxgF2RlKgc3wuB85Uh1spMlwaoC%2FOKhGNS8NfMGd2DPYLonQLQ%2Fncmkt4bZaRrrz6n9axvIBnbF5meVQBhzT0I6xUP5Go%2FEnYb3JlrcIKgwKircK1b863H1iURh3dEHR7zrf7KpvMLby9MIGOqUBMMrWyGXsHoUBnA2axsQpDCwG2ly0OhzFwEgN%2BnYOIzZ4wGXEj6l9zAqw52hCu9RJPkuAsv6wek3Oe4c%2BrcMrd9IXE%2FJ%2FiQXjM3vwWGS5%2BoXHMBZf3jdlgqLr3jWvonldjyF%2FMeVPVGOr6ZOPsWW193al6xqDEPDAu5f77F069l78vUPCxf5ChtJUCTGeCKAt29TMcraoCdkf7cWpKjKJ7L7ShYkz&X-Amz-Signature=92709cb730cfd568e30ded5fcbf13bf235fb47873dec4610b4033df48b0ca69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKVKDSY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDTCSXU%2FtuxWJCcnej2GMGGbeW4kQAv3ZTfMSIyyEWdsAiEAlbcKq0k0zAdA8zTkfE5A%2B1VvPVqm3jVG1AHBajoOb8cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOARYpjffYg0GbRwtCrcA4Ar%2FqChJ8PB7fkedW1YBjCSw1Mnfkrt2D9B5YpAXjD7OyZHDhrtyJU%2F%2BHFH4uTTf5AuBeNEXXEgIFdGtRKlhYt8zElCAnJ5SsWGmYNrDDLJTpGBvF%2B4Hmj%2FPja9CwdeiMJHmQHavATqBCR2sp0n%2BNwFJgiQxjbWB%2BFRwB0%2BciRD5u9sg6vqCOacsr7Fxe0KMZ3xM3jlfWyUOSC7gJ9e%2BJ96TKRsBIgjt5UOiElGuqhY7bi9l%2FCrpzi%2B6hJOowbQDXTB%2FGCDcA%2FoLd0Gn001WPBGDRDVRddtjjDkHo8rURcg5hWuoVh6fK53QfkGWbXVApHn7kVqJv01ruLCvtJhW%2BifiCKZJGQxyg0sk%2FrCBIqxZ12Fj7U%2F4qiMr5TeQtfmChWdbmLmo5qZ%2BJ04PsVmhGCugxmCYEwiIVrTtooGtmBzJrPiZm7mUKB%2FnUA0bFd3enyC4h8GemGjI1J%2FwH2ChWPpgXCtLUonEu%2Bbt5zKqDQIRw%2FZFPlMtxgF2RlKgc3wuB85Uh1spMlwaoC%2FOKhGNS8NfMGd2DPYLonQLQ%2Fncmkt4bZaRrrz6n9axvIBnbF5meVQBhzT0I6xUP5Go%2FEnYb3JlrcIKgwKircK1b863H1iURh3dEHR7zrf7KpvMLby9MIGOqUBMMrWyGXsHoUBnA2axsQpDCwG2ly0OhzFwEgN%2BnYOIzZ4wGXEj6l9zAqw52hCu9RJPkuAsv6wek3Oe4c%2BrcMrd9IXE%2FJ%2FiQXjM3vwWGS5%2BoXHMBZf3jdlgqLr3jWvonldjyF%2FMeVPVGOr6ZOPsWW193al6xqDEPDAu5f77F069l78vUPCxf5ChtJUCTGeCKAt29TMcraoCdkf7cWpKjKJ7L7ShYkz&X-Amz-Signature=6b4241b8624816b77db5fcd84b68a9d47782ce7129eae232110b1ee7c4dbcdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
