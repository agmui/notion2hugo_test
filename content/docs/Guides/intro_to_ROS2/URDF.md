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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRFS4HZM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDVNdlU6%2BXme5zQkzSjThw9o05sSgAoKEOFD219FYyc6QIgMqB2y5eUM%2BHPBiy4qrzVzJtmCi6cSlbHUaNu3t9AoVAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIgl0NiaNH4htw8NuircAwmdEMW1%2BmiFJhzy7os%2BQtdcGINTMW4BIMnncfb8wbWvVYd9ZcCzRcYXuz5nwlKtQW0fksCwuI%2FRKw3M9Et7QJdAl%2BxjUCWP5ddK71QAqcmf2aCWEoDG0l0dOttqkcc14R9cKc97GZd2UYoI9JajGyJtZD8Y1C3AoBh5lNIVNQYd5QMKP4YnasFhFETfhajvHZLWcRJoGG9S2TsPNa1D1PuAMFBXvwsMQyZGcj2MpWuXEil7qQ3M6lgtnPCsSAobjEaByOaUdSlUlyUTKWvsSv3zsRjZbCQuHomNNyvcB%2FGFuHJMu7RWe7G2dA%2FVM1o4RVljNhJ8iVEW1FuHWfc%2F2xC7T%2BQzpBOXj0YwWyQE%2FRAfiNhVamNEyafMFlDwopmvYrQtrQG0x%2Br%2B%2BeHSztlSmjUKJOaCgDbMQSvXZAbO4sgL%2B2dDgD7FYWUenxkeA10m7p5hXZcrRGBMmEpB4xdnCEJG3zuhP%2FVN4kNVtgaSSnf5mPe7LP1l4ANK94sx8ERHqC0x9GTBNvggxjE%2BX6ziP7pyLCph1Eb0nY5z8%2FxwgB254A0d%2FsGWYTMYm7FoWskBpJHFM2wDEwGbWJoJ78r5OHNCjxZsWTOIFy%2BbIqqgvbWYYw99tG%2Fml%2Fc1WpiBMJux0sMGOqUBigpX1X%2FTBWuCuiD6hARhybxYFqZuRtxkOyPr8gykbX7ZZZuC3H8N1w5cxz8DODoEj5cdFlEYymlS%2BT7Szl9KJoIVdbw7BOsnHni8P4V4e76EqLRgt%2F%2B1Qe13TjsYI4v58rZglAcvEGj8vKVd8drsGCEo8IoswGSlZv%2FGU6%2FVBcM6Add849R2EjoA8AXo3oWAxqTFQI0juorXBdHD7UdRn3aEDjWL&X-Amz-Signature=044cfbe97201bfe8075f3ea2a655fb62466c0b0b690d21f0fd5dea10b04b75ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRFS4HZM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDVNdlU6%2BXme5zQkzSjThw9o05sSgAoKEOFD219FYyc6QIgMqB2y5eUM%2BHPBiy4qrzVzJtmCi6cSlbHUaNu3t9AoVAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIgl0NiaNH4htw8NuircAwmdEMW1%2BmiFJhzy7os%2BQtdcGINTMW4BIMnncfb8wbWvVYd9ZcCzRcYXuz5nwlKtQW0fksCwuI%2FRKw3M9Et7QJdAl%2BxjUCWP5ddK71QAqcmf2aCWEoDG0l0dOttqkcc14R9cKc97GZd2UYoI9JajGyJtZD8Y1C3AoBh5lNIVNQYd5QMKP4YnasFhFETfhajvHZLWcRJoGG9S2TsPNa1D1PuAMFBXvwsMQyZGcj2MpWuXEil7qQ3M6lgtnPCsSAobjEaByOaUdSlUlyUTKWvsSv3zsRjZbCQuHomNNyvcB%2FGFuHJMu7RWe7G2dA%2FVM1o4RVljNhJ8iVEW1FuHWfc%2F2xC7T%2BQzpBOXj0YwWyQE%2FRAfiNhVamNEyafMFlDwopmvYrQtrQG0x%2Br%2B%2BeHSztlSmjUKJOaCgDbMQSvXZAbO4sgL%2B2dDgD7FYWUenxkeA10m7p5hXZcrRGBMmEpB4xdnCEJG3zuhP%2FVN4kNVtgaSSnf5mPe7LP1l4ANK94sx8ERHqC0x9GTBNvggxjE%2BX6ziP7pyLCph1Eb0nY5z8%2FxwgB254A0d%2FsGWYTMYm7FoWskBpJHFM2wDEwGbWJoJ78r5OHNCjxZsWTOIFy%2BbIqqgvbWYYw99tG%2Fml%2Fc1WpiBMJux0sMGOqUBigpX1X%2FTBWuCuiD6hARhybxYFqZuRtxkOyPr8gykbX7ZZZuC3H8N1w5cxz8DODoEj5cdFlEYymlS%2BT7Szl9KJoIVdbw7BOsnHni8P4V4e76EqLRgt%2F%2B1Qe13TjsYI4v58rZglAcvEGj8vKVd8drsGCEo8IoswGSlZv%2FGU6%2FVBcM6Add849R2EjoA8AXo3oWAxqTFQI0juorXBdHD7UdRn3aEDjWL&X-Amz-Signature=197d5f7a8443b611e45651d89c1a8020cabc8ad65ae84fb25bd2d03ebab9526e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
