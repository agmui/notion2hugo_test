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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJG4OJH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIscsPmSJFOzsX9bvBE%2FeiL4b6ePykH5MccHKniApH7wIhAJk41vWgmrvp%2FYhNPzyMSALQX5wrMaZgyU2lSYb8Vm2iKv8DCDcQABoMNjM3NDIzMTgzODA1IgwWvxmQqwVUqERvGDQq3AP4iTdlRkgbOq00n1gUpbQdmYv%2B9UTjJ2n17qK9tT2USZBtfrk%2F%2BXx623NuveIHKFJQjb3SjapqEhl0AgY59UyRArR0dQpGd4N4TFcBkrwLLfH3ambcC1pWbjNBs9V7OpM9vaObEl4zHe2GBroWXO%2BAlspLDHgMbllCIwhZhoyr%2Fl%2FaZ0vRcolL36nGGfAxLv%2FcGu8%2BoXOBpqntoO%2FnNYzCz6mWMHxrDNz1vqmTbDjdnI9ME1vMA49pTfSsWwnXq06xXL6%2FTtsfkBl%2Bo5xZGM47HBViK7kj41hcx2Tcm%2FMxxMYGGAZTthYoMmsq1IIEfw5i1TRmp4RYPVDHTE07sZ%2FpeUweTPd%2BlEBTbcVm%2BUpKaZuH9vYA3S7Jq4Srn7P4wm%2B6bzVjhg%2Buvnto5FP24hM6QUy2p8N6pAmGbcEiNeN2xC3%2Bc9%2FgGBPxJAw8fgLfwM%2F7SAntAQmR%2BtgBayFd7VCzFfD79DV19VNaAFG1B1ZnTJK5kyTJkSyeFzIZVBpqAHifGJRuwQKApHkU73v1JNlnqyiKH5yE8oZoVug%2F1Ll5jV2Otp27SnPZ6VV3IuZ0R74oIO0iypP2aQ%2F8Iw6KN1A2Gdj5NpJGcSwzn60mQ7vU4Tro5jdNql0WKByaIDC4wsa%2FBjqkAdOvZcgGpc0Fex5eYwIzQdsyNscrubq%2F%2Bfuu6tdNDhkFlGkgfii4jqGH1iSFkxvdKHvR84L1zx4dGeQL3XbPZm459RaMEUkwunekZzFBxYh0oNiXUA3%2BtVLUqfpISnWC8kMTe69aBqRRumAcWVqUC2QB9mRQMNVL2x5oNeHZM8GjrpGk69EdWthTXuvUNqA4jc%2BPIEa70LhkKmxSKY2F9%2BMKTpeu&X-Amz-Signature=04d0c9c24f31a3779b165fbc9c70f3ffc73f78e51e497128e9b355dc11937075&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJG4OJH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIscsPmSJFOzsX9bvBE%2FeiL4b6ePykH5MccHKniApH7wIhAJk41vWgmrvp%2FYhNPzyMSALQX5wrMaZgyU2lSYb8Vm2iKv8DCDcQABoMNjM3NDIzMTgzODA1IgwWvxmQqwVUqERvGDQq3AP4iTdlRkgbOq00n1gUpbQdmYv%2B9UTjJ2n17qK9tT2USZBtfrk%2F%2BXx623NuveIHKFJQjb3SjapqEhl0AgY59UyRArR0dQpGd4N4TFcBkrwLLfH3ambcC1pWbjNBs9V7OpM9vaObEl4zHe2GBroWXO%2BAlspLDHgMbllCIwhZhoyr%2Fl%2FaZ0vRcolL36nGGfAxLv%2FcGu8%2BoXOBpqntoO%2FnNYzCz6mWMHxrDNz1vqmTbDjdnI9ME1vMA49pTfSsWwnXq06xXL6%2FTtsfkBl%2Bo5xZGM47HBViK7kj41hcx2Tcm%2FMxxMYGGAZTthYoMmsq1IIEfw5i1TRmp4RYPVDHTE07sZ%2FpeUweTPd%2BlEBTbcVm%2BUpKaZuH9vYA3S7Jq4Srn7P4wm%2B6bzVjhg%2Buvnto5FP24hM6QUy2p8N6pAmGbcEiNeN2xC3%2Bc9%2FgGBPxJAw8fgLfwM%2F7SAntAQmR%2BtgBayFd7VCzFfD79DV19VNaAFG1B1ZnTJK5kyTJkSyeFzIZVBpqAHifGJRuwQKApHkU73v1JNlnqyiKH5yE8oZoVug%2F1Ll5jV2Otp27SnPZ6VV3IuZ0R74oIO0iypP2aQ%2F8Iw6KN1A2Gdj5NpJGcSwzn60mQ7vU4Tro5jdNql0WKByaIDC4wsa%2FBjqkAdOvZcgGpc0Fex5eYwIzQdsyNscrubq%2F%2Bfuu6tdNDhkFlGkgfii4jqGH1iSFkxvdKHvR84L1zx4dGeQL3XbPZm459RaMEUkwunekZzFBxYh0oNiXUA3%2BtVLUqfpISnWC8kMTe69aBqRRumAcWVqUC2QB9mRQMNVL2x5oNeHZM8GjrpGk69EdWthTXuvUNqA4jc%2BPIEa70LhkKmxSKY2F9%2BMKTpeu&X-Amz-Signature=a797adc7d45c2fe86f40483ec6896f1170e390a9f9d339f24c21becbe36709df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
