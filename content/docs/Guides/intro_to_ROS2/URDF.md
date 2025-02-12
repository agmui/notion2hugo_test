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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOVRWK3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxQXst9bz5Qz2c%2BEdTbTXB48ve8kTZwmiSy%2FfERpt%2BdAiEAywFdzigarRn%2FyHhIrdI%2BIfQO8g8kZQcgwl9PXxomrEsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLC9d69eeFfhWGM%2FCrcAythZBo1%2BmH69vsZ5wcYt3gwjdLAI3QqoUhIkXkEg4RDxlOmj1kXt79d1a2zA06bqLeKztkJqEdOnOLrsNsahlQ1dNWbJyrXlgIvYpyhy4HEBoBuFwXoWNIhxhLNWmrfTd4VI9SfqTFvGsINiuyKRowXIWJyUkTD7cERxsD%2F1zgbourfZqYDpA6geudzeiTGPi9hHLSPjABsd1LOtO8C3Ha9FXoB7LBlDjjuBr3YMOyGaa07%2FWXJcJH5dnmCacCEAfpEaMDfPcUT3lGocr2t419nkmhTKtTP6WanUj2rM8w3iDHd1qok9TvOWb5sA0Ry7Xulba5qAmtszUPeULau6qUPbrrD0i9mG7B4rs7mtlVB%2FcXFxQsvfHliEdaMjgb0dd16OpOwWALRad2UuGrz4p1x83e9r%2BJx0AxBHYYNLdIJ2NZUpCSJV%2F%2Fp8zlQVxQkQn0a58mUVGcj9gy74f4T68azrMaMANpujbL0lKugPvhpCeoo4%2FIq7i2kV8gP731M8iMiJpg8LKNroKbqRZJhbmuHVrkqpZh2%2FkmTy2VJSB%2F1M95LlMSNQETXB6vZMo9run61afznW5oLBBuw1zwqzA5bDkedrGCQqohm6TVBE0rK3nFaDFClOi89t0hdMKjOs70GOqUBhfD3Wn743IEYesjp%2Fnn9PtMrj8zORFo670%2BbpdKLcWugwiA6qqHYsBubAlPhxVvInmF7bCtmgV3dg7c%2B36azGEcZLgEwspgqUj2GwYV5CXEQKn%2BtYd7K82M%2F3MQSQO%2FB4U9yVhFTwwPQ%2BZdqFCsFuAWD4Qg7sUk9eRRqatzwQX1befj5NbZkwXJEK3b6Q6U%2F23LD6xQ0QUMnGCmo6kcA09FLuzHd&X-Amz-Signature=f20d5333f5e15d2401959e853a52318a315b1ae30db93ec0361693092a238c67&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOVRWK3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxQXst9bz5Qz2c%2BEdTbTXB48ve8kTZwmiSy%2FfERpt%2BdAiEAywFdzigarRn%2FyHhIrdI%2BIfQO8g8kZQcgwl9PXxomrEsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLC9d69eeFfhWGM%2FCrcAythZBo1%2BmH69vsZ5wcYt3gwjdLAI3QqoUhIkXkEg4RDxlOmj1kXt79d1a2zA06bqLeKztkJqEdOnOLrsNsahlQ1dNWbJyrXlgIvYpyhy4HEBoBuFwXoWNIhxhLNWmrfTd4VI9SfqTFvGsINiuyKRowXIWJyUkTD7cERxsD%2F1zgbourfZqYDpA6geudzeiTGPi9hHLSPjABsd1LOtO8C3Ha9FXoB7LBlDjjuBr3YMOyGaa07%2FWXJcJH5dnmCacCEAfpEaMDfPcUT3lGocr2t419nkmhTKtTP6WanUj2rM8w3iDHd1qok9TvOWb5sA0Ry7Xulba5qAmtszUPeULau6qUPbrrD0i9mG7B4rs7mtlVB%2FcXFxQsvfHliEdaMjgb0dd16OpOwWALRad2UuGrz4p1x83e9r%2BJx0AxBHYYNLdIJ2NZUpCSJV%2F%2Fp8zlQVxQkQn0a58mUVGcj9gy74f4T68azrMaMANpujbL0lKugPvhpCeoo4%2FIq7i2kV8gP731M8iMiJpg8LKNroKbqRZJhbmuHVrkqpZh2%2FkmTy2VJSB%2F1M95LlMSNQETXB6vZMo9run61afznW5oLBBuw1zwqzA5bDkedrGCQqohm6TVBE0rK3nFaDFClOi89t0hdMKjOs70GOqUBhfD3Wn743IEYesjp%2Fnn9PtMrj8zORFo670%2BbpdKLcWugwiA6qqHYsBubAlPhxVvInmF7bCtmgV3dg7c%2B36azGEcZLgEwspgqUj2GwYV5CXEQKn%2BtYd7K82M%2F3MQSQO%2FB4U9yVhFTwwPQ%2BZdqFCsFuAWD4Qg7sUk9eRRqatzwQX1befj5NbZkwXJEK3b6Q6U%2F23LD6xQ0QUMnGCmo6kcA09FLuzHd&X-Amz-Signature=bb8a14bde89bc7577b36e40d271cab9e0700f8798a135288e789a6a50f5a6b17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
