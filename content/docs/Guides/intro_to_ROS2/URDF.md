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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WXCX2Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIF1blrkeADO1TZ38ITkjXHwz9Sgt3i%2F7Avp3VA2P8skPAiAs9K7qsH4nbpF75coVRpvC2WT500fWdkDA4nTvH0jRdir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMldqsrmwobtbnO3TjKtwDFQwVq9OTzZfIaA9dV65Siu5Y7g0YSeDyAbexGHm%2B6JbBaj1c0VW98RAr%2Ftfs5aPny%2BH9wWiuRUFHXW%2Bj2kW6nh5E0TaGoMalkSnXd1k%2Bj53MOWTsTpj6UMspoaNw%2BHurNmn7QdbeQA32adP3VsyczVKTBSS531J4lWGVqpD%2B1yJ32LVoSSh%2FHsYTLABkuEY5Q%2BU2lQ0ztxvSABrB8%2FMMKvAklqtbUW3qhAJW6Rjai2Ke85Xu%2F%2BlrN56TTzLHzJRKMSc8Ug1IiSRKF%2FT9V%2FMoPqu%2F9a25fJG4u00YlLqXqRGFNzYbkthgrV8aXfiI6c3ToZ%2BgqqTKrGxXk8e1lgcEolxWUtREYn3mWstxM%2FiwQhJl9ZaKmDKR%2BD6aif8x5I8gyaUX0o97rrRd82Q6VYO37ocqZRxNw5rkrhj258E34vrvE75VQYnqXUyFSvIHbZi4pt%2FxBV%2B4imw1vhoMJeACTje%2FU46rVk2o516qSgpJ9g0SFVQVDpG2M57FmCQLawDlaQ34qgZ1Z8zj7XWnzzmtLB2AAulgJVcqN6tRx8P4Xar3zyYGhk%2BxCllqurI6DX1ALjeTyp2p%2F9M8bP32eRhK7atNLazxFGIF6IYi77%2B4DLN%2FRe%2Fn49Hi%2FT7Mzjsw49CPxAY6pgH4fVM5uRw%2BqYO0lC3N30Rnqy%2FdWWCsUuoC4bDPrN1gGIPyeBkQw5WB2WsHC0TionPO%2BmkT6Boby0mpBIvBsuzqA0V26oenIcGqohX17nvUa9knzumhrArix0dRm04DYdeT2Qnt89hL6QWPpntgo0e6CBozaRJMrLQEphFtz5veamG%2BP9T3UQSqddnIDIcYn8m5GsEeTkcdLDwxQidiudAb1S%2F%2BOJJG&X-Amz-Signature=167215ba762595a94bb5b779635f2f78f597cafdd7cdacd38857b2eac42d61f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WXCX2Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIF1blrkeADO1TZ38ITkjXHwz9Sgt3i%2F7Avp3VA2P8skPAiAs9K7qsH4nbpF75coVRpvC2WT500fWdkDA4nTvH0jRdir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMldqsrmwobtbnO3TjKtwDFQwVq9OTzZfIaA9dV65Siu5Y7g0YSeDyAbexGHm%2B6JbBaj1c0VW98RAr%2Ftfs5aPny%2BH9wWiuRUFHXW%2Bj2kW6nh5E0TaGoMalkSnXd1k%2Bj53MOWTsTpj6UMspoaNw%2BHurNmn7QdbeQA32adP3VsyczVKTBSS531J4lWGVqpD%2B1yJ32LVoSSh%2FHsYTLABkuEY5Q%2BU2lQ0ztxvSABrB8%2FMMKvAklqtbUW3qhAJW6Rjai2Ke85Xu%2F%2BlrN56TTzLHzJRKMSc8Ug1IiSRKF%2FT9V%2FMoPqu%2F9a25fJG4u00YlLqXqRGFNzYbkthgrV8aXfiI6c3ToZ%2BgqqTKrGxXk8e1lgcEolxWUtREYn3mWstxM%2FiwQhJl9ZaKmDKR%2BD6aif8x5I8gyaUX0o97rrRd82Q6VYO37ocqZRxNw5rkrhj258E34vrvE75VQYnqXUyFSvIHbZi4pt%2FxBV%2B4imw1vhoMJeACTje%2FU46rVk2o516qSgpJ9g0SFVQVDpG2M57FmCQLawDlaQ34qgZ1Z8zj7XWnzzmtLB2AAulgJVcqN6tRx8P4Xar3zyYGhk%2BxCllqurI6DX1ALjeTyp2p%2F9M8bP32eRhK7atNLazxFGIF6IYi77%2B4DLN%2FRe%2Fn49Hi%2FT7Mzjsw49CPxAY6pgH4fVM5uRw%2BqYO0lC3N30Rnqy%2FdWWCsUuoC4bDPrN1gGIPyeBkQw5WB2WsHC0TionPO%2BmkT6Boby0mpBIvBsuzqA0V26oenIcGqohX17nvUa9knzumhrArix0dRm04DYdeT2Qnt89hL6QWPpntgo0e6CBozaRJMrLQEphFtz5veamG%2BP9T3UQSqddnIDIcYn8m5GsEeTkcdLDwxQidiudAb1S%2F%2BOJJG&X-Amz-Signature=70f3076954ec96dbdf6ea6f63c2d50ccca6cc9fa36164a67a67750be1a2a8e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
