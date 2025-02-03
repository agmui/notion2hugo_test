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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JQEHWJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU4rqtgbK43cZHak2DBCA%2FhW7tzRDtcpYHxsTwY%2F1T8gIgDbeReB7MMN5FBCiSa4Q7XTH%2FByDtpiGneDNdn5mMxgQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnaUgnQLayFfITHPircA2MSipryO7lzKybskUBcQSHkQ9mH5JuD8abdjF15G%2FSCGW6RjARHwE9zDb302dlfgNupZHfn5l3FrP%2B348FLDGnQI%2B2vrf0f7eaLz7bwWqB0mxGkAjSLT17cDoMXpaq02LAeJF4aBy0VW2sgtn8cKfLAyQ6%2B66N1N%2FdHhOKOdp9PLfH%2FewDK7Vm08yFppnpKlqkKPNqACoKgx%2BmuE4xcJlU4w2svz8DZmxoXL0AxtS54eBZjwc7wYIvUwDlTsVSZ3JT2WDIUJ8oUQddvZF25sX56vsCXRSytyHtwsQ61xYx8bWOpgZ%2F7eY0vHjcJpQevmu1g%2BlYVpxN0aS2lFMo6mzE5cj3sOz3Fxyh%2FNMnfyl6XnnoXbRcpE0gSR9%2Fv%2F4DNxh6Cc9a4x5f005loV89PT0s3f%2BUPWaLMWv%2FZ8Dy%2BwRs1YKE6yaQyjMUUxhAQCimnnCsoKD%2B44wzrxxCjkwep1gWnBtp0E7t6uw%2FWLfYVXwjjUzTrLzMB6AbxxrnFJRu%2BDORrtyUfxAEVinB%2B3sBDvXXx8O8ulUhF10VB3yEJwYCrdVX65u9slT0R9iHjbrI%2BTjqMVlrrioX3wRlM8h5AfJMZic89POz8l8kmTLgLyiE4lnJQ6aVHhvVTbUVYMKHBgL0GOqUB1%2FLCBID1t64YGfzcwf2aAt2AJp4vQBRyucrDZl4ZtPDAaQXnP1ft9Vc9Gb1ooqCdCrb%2BQeitJxIZ947OCbnEJp5WtDUDY%2Fq2ZGbmLRIIjR1RxxODdwWLROKHSmchKMKkhOwJD%2FY59RZqeFIPGAvgVUH9Iyo72gyT8dttgbIXomEd%2FoBDu%2FiiU%2F5UF2C9GPlWuGKoumkP6cmhx7%2Ftyd65PqErPPcd&X-Amz-Signature=93df6d15c06968c9bacdebe0e26d6e67345cc1e5823b2d42b6602be2f3c77ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JQEHWJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU4rqtgbK43cZHak2DBCA%2FhW7tzRDtcpYHxsTwY%2F1T8gIgDbeReB7MMN5FBCiSa4Q7XTH%2FByDtpiGneDNdn5mMxgQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnaUgnQLayFfITHPircA2MSipryO7lzKybskUBcQSHkQ9mH5JuD8abdjF15G%2FSCGW6RjARHwE9zDb302dlfgNupZHfn5l3FrP%2B348FLDGnQI%2B2vrf0f7eaLz7bwWqB0mxGkAjSLT17cDoMXpaq02LAeJF4aBy0VW2sgtn8cKfLAyQ6%2B66N1N%2FdHhOKOdp9PLfH%2FewDK7Vm08yFppnpKlqkKPNqACoKgx%2BmuE4xcJlU4w2svz8DZmxoXL0AxtS54eBZjwc7wYIvUwDlTsVSZ3JT2WDIUJ8oUQddvZF25sX56vsCXRSytyHtwsQ61xYx8bWOpgZ%2F7eY0vHjcJpQevmu1g%2BlYVpxN0aS2lFMo6mzE5cj3sOz3Fxyh%2FNMnfyl6XnnoXbRcpE0gSR9%2Fv%2F4DNxh6Cc9a4x5f005loV89PT0s3f%2BUPWaLMWv%2FZ8Dy%2BwRs1YKE6yaQyjMUUxhAQCimnnCsoKD%2B44wzrxxCjkwep1gWnBtp0E7t6uw%2FWLfYVXwjjUzTrLzMB6AbxxrnFJRu%2BDORrtyUfxAEVinB%2B3sBDvXXx8O8ulUhF10VB3yEJwYCrdVX65u9slT0R9iHjbrI%2BTjqMVlrrioX3wRlM8h5AfJMZic89POz8l8kmTLgLyiE4lnJQ6aVHhvVTbUVYMKHBgL0GOqUB1%2FLCBID1t64YGfzcwf2aAt2AJp4vQBRyucrDZl4ZtPDAaQXnP1ft9Vc9Gb1ooqCdCrb%2BQeitJxIZ947OCbnEJp5WtDUDY%2Fq2ZGbmLRIIjR1RxxODdwWLROKHSmchKMKkhOwJD%2FY59RZqeFIPGAvgVUH9Iyo72gyT8dttgbIXomEd%2FoBDu%2FiiU%2F5UF2C9GPlWuGKoumkP6cmhx7%2Ftyd65PqErPPcd&X-Amz-Signature=4b1d65e1d3986e453ca7a91aedc399b1c0c05a9bc5867e2c522a20923750ee73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
