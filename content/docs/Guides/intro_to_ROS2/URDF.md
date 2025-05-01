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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7PNDMU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICHrCx2%2F6ANz5GzL900o%2BIKs2f82xys7DnaYok2gKs1hAiAskXiUuXcE9yo9%2FXY8n8ryT6qdF8Jhz8oj%2FfllOmBmICqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBJIGdk6jTy4rRIhKtwDkDjkdcViZmquwh9wpwM%2FCV1NgSZfsNKgATkTmovg7KXLi%2BVegFZimQ0THcIcUQi3ITME%2BEL1Q7GQnszROn%2B%2Bv9GM78Ed%2Fqsa0vg3Spot4IY9XeggRLEYM3575wovIt89wPEVewXcX1tX0zFGWrYnKlcGLcAYrwh3QwR%2FVkE9aliPtFJp%2BhuRHpAaiwpDZc%2BtLR9H%2Fn5%2FU%2FlrxfQcA9NfngRpHmXkcvwpBitxZs2eejH5aUqLl5xEAniszcqWaTPnt6psF06dAwRiAv3usozZDeGM3Q9pqn49lN9wzbZayLlMW3vemHdiO%2BG9kZlz9NakvOVidE50PBhokHuNg%2FZQJfiCBXLGoQGxyPmKN9iLEdHqbYfNRc9k27tqfjDdCBLbLB%2BDs5nP1eZtY%2Fram%2B0DaOCAFLZlnzsv93cf7N9%2Fio3R6XKxT34KJMg4LCWsKQDXcqN2p%2Bb8s6GafwIdjmf8YoVJURfsD1ca92hTnfR7tmrSTxVKqTcDpOflIJpnQElR2obxtSlv0Q7V3zYhiEjBlIz3jOMi6138YSOD0si3OQxEESyS86goF3pM%2BNduGJjn8O6MXLmYuyWHtVZcsdw2P5oiC1u4W7t67xVDX0L0BRPc4iiKo14H%2BiW7CgkwlaHOwAY6pgEtmNCk9siLasiukoK5HK2ptiQuip9Xa%2FOnZhVD%2B46fXV6gy0P458TBdbNMYEIlqfyPBlhsN90o0eY7o2nmnW8%2FskjWuZpzSJ6dnwwo0kjrI4afxXrOsYXfDbcN7KzDY1DfKdSCg29R%2FYlmh8YP%2FeTYhmpEJiIpFI2U9W5kYqNNyZOs6ofSXQBNlb1BNTaE5zdNNeg%2F1Re8LdmJp17QTe%2B%2Bs%2FECnJx1&X-Amz-Signature=9acff7fa7c14099b092fa471a58ae84a491dd79433f0b7890e33453539fee55a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7PNDMU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICHrCx2%2F6ANz5GzL900o%2BIKs2f82xys7DnaYok2gKs1hAiAskXiUuXcE9yo9%2FXY8n8ryT6qdF8Jhz8oj%2FfllOmBmICqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBJIGdk6jTy4rRIhKtwDkDjkdcViZmquwh9wpwM%2FCV1NgSZfsNKgATkTmovg7KXLi%2BVegFZimQ0THcIcUQi3ITME%2BEL1Q7GQnszROn%2B%2Bv9GM78Ed%2Fqsa0vg3Spot4IY9XeggRLEYM3575wovIt89wPEVewXcX1tX0zFGWrYnKlcGLcAYrwh3QwR%2FVkE9aliPtFJp%2BhuRHpAaiwpDZc%2BtLR9H%2Fn5%2FU%2FlrxfQcA9NfngRpHmXkcvwpBitxZs2eejH5aUqLl5xEAniszcqWaTPnt6psF06dAwRiAv3usozZDeGM3Q9pqn49lN9wzbZayLlMW3vemHdiO%2BG9kZlz9NakvOVidE50PBhokHuNg%2FZQJfiCBXLGoQGxyPmKN9iLEdHqbYfNRc9k27tqfjDdCBLbLB%2BDs5nP1eZtY%2Fram%2B0DaOCAFLZlnzsv93cf7N9%2Fio3R6XKxT34KJMg4LCWsKQDXcqN2p%2Bb8s6GafwIdjmf8YoVJURfsD1ca92hTnfR7tmrSTxVKqTcDpOflIJpnQElR2obxtSlv0Q7V3zYhiEjBlIz3jOMi6138YSOD0si3OQxEESyS86goF3pM%2BNduGJjn8O6MXLmYuyWHtVZcsdw2P5oiC1u4W7t67xVDX0L0BRPc4iiKo14H%2BiW7CgkwlaHOwAY6pgEtmNCk9siLasiukoK5HK2ptiQuip9Xa%2FOnZhVD%2B46fXV6gy0P458TBdbNMYEIlqfyPBlhsN90o0eY7o2nmnW8%2FskjWuZpzSJ6dnwwo0kjrI4afxXrOsYXfDbcN7KzDY1DfKdSCg29R%2FYlmh8YP%2FeTYhmpEJiIpFI2U9W5kYqNNyZOs6ofSXQBNlb1BNTaE5zdNNeg%2F1Re8LdmJp17QTe%2B%2Bs%2FECnJx1&X-Amz-Signature=57ea8138a01925e73143a6778dcbb173eeb6c0d13c3ad8d6e9e0cb825a0e686f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
