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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5SXRW2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFK6WaSND5SjN53vOy6AFCVhEyOnttiqpxqkp5BrxhlgIhAMuoHRNgoNR7FBnrOZiX%2B8UxZBYdun8EhaOtCpUMJHeqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4BOdl5Li4v0i9ohcq3ANiRb70RYqPz9ELlYi1CqX%2B7RSascZPY8VTiq%2FFdmQIOgUZfaiOP2G7fwG5jiWjuq0njTMqzwGgD%2FQHH2Hu9U9lp7iMd3sEgWwE5dOmKet3GOlNI6pBI9VCwucuIDO%2FY8gCOmUnLQNPe9vNDEKaOwng%2By8C4j3oQdoAswbh4ml9s9nKI9sHObIXGZVwVDIuUslLayS%2FbuUFryy0rLcxAjAOaBD817D1viJI6MnXk0x65kn5hyuYMm9wcH8GhZjhcqQe5BSoQujWyLcxmR0TaCM0CyjjXkw2yyWbQkA77HXeylqqupoUUs3%2BxN5qoC0wGBLrpLBF2%2BN9wT%2FE5shsH5q4BPDEUHPY0Ulx4oZ%2FIPqTZ%2BLR16qIp8XMBmidp5rU8cBnIiUAxvV3mlrXBmHSP7Xt1VBkIMyyAbP1S7BQpQe%2BCze83Eyh13Gr%2Fn305hsxj0foIxpe6zo9qgFXr5xRYeNlKvGvYaY5wFnAg25TN6pUe6IdIHv4i2Q8DNrB3fJc%2BBb9zcZ0fse6BbdpqOPph1A191zEDQiU0CyAD4dlxpxby3LbJK0s1y4A9nmIemMFSR%2Foy2pPQWUAmKUckvz%2FWZnSJmdaKG5f0Xc5hLtmuVXMm7dCaAAFtQjOoO1YPjDwl8C%2BBjqkAXAnOeE%2BQpOwix3Zs62U0fpTtUccZLhK8biMl2PNS4C0Gq2gTibUf0kDmIzgI6C%2F6BAFeH%2F1xlYo9s59soBRyxGW1bYFujSJPx%2F32h7O24A5Twr9%2FxqqxiA81jIpLlleymDe8XlZ7qKo28VDK4aenp5dlVrC8FT9X4xbnALVyaRtpcW4p%2FHcRZv6UAFXjPs1ZaKw4gatm9mjp7DZedaQ5oPwa3xr&X-Amz-Signature=38f482782febc4a7a6d8ca46cfb17ee1b94d84dd6da9cf378f6233474502ed41&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5SXRW2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFK6WaSND5SjN53vOy6AFCVhEyOnttiqpxqkp5BrxhlgIhAMuoHRNgoNR7FBnrOZiX%2B8UxZBYdun8EhaOtCpUMJHeqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4BOdl5Li4v0i9ohcq3ANiRb70RYqPz9ELlYi1CqX%2B7RSascZPY8VTiq%2FFdmQIOgUZfaiOP2G7fwG5jiWjuq0njTMqzwGgD%2FQHH2Hu9U9lp7iMd3sEgWwE5dOmKet3GOlNI6pBI9VCwucuIDO%2FY8gCOmUnLQNPe9vNDEKaOwng%2By8C4j3oQdoAswbh4ml9s9nKI9sHObIXGZVwVDIuUslLayS%2FbuUFryy0rLcxAjAOaBD817D1viJI6MnXk0x65kn5hyuYMm9wcH8GhZjhcqQe5BSoQujWyLcxmR0TaCM0CyjjXkw2yyWbQkA77HXeylqqupoUUs3%2BxN5qoC0wGBLrpLBF2%2BN9wT%2FE5shsH5q4BPDEUHPY0Ulx4oZ%2FIPqTZ%2BLR16qIp8XMBmidp5rU8cBnIiUAxvV3mlrXBmHSP7Xt1VBkIMyyAbP1S7BQpQe%2BCze83Eyh13Gr%2Fn305hsxj0foIxpe6zo9qgFXr5xRYeNlKvGvYaY5wFnAg25TN6pUe6IdIHv4i2Q8DNrB3fJc%2BBb9zcZ0fse6BbdpqOPph1A191zEDQiU0CyAD4dlxpxby3LbJK0s1y4A9nmIemMFSR%2Foy2pPQWUAmKUckvz%2FWZnSJmdaKG5f0Xc5hLtmuVXMm7dCaAAFtQjOoO1YPjDwl8C%2BBjqkAXAnOeE%2BQpOwix3Zs62U0fpTtUccZLhK8biMl2PNS4C0Gq2gTibUf0kDmIzgI6C%2F6BAFeH%2F1xlYo9s59soBRyxGW1bYFujSJPx%2F32h7O24A5Twr9%2FxqqxiA81jIpLlleymDe8XlZ7qKo28VDK4aenp5dlVrC8FT9X4xbnALVyaRtpcW4p%2FHcRZv6UAFXjPs1ZaKw4gatm9mjp7DZedaQ5oPwa3xr&X-Amz-Signature=04d245ce69bdbd2a5d0b3b49336b4cd2753181dd09056e6f960e00f8fd06be5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
