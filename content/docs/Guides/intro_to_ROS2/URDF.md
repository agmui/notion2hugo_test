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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKNECEF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSDVQ%2FXSUAzjXLKIMH0seVk7vMOAwHZVhk3osUNwKOmAiAbNaVWx6bysf%2BAZs4hVq5EF5pbStzR4MSJemD78Ft0TSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQmXWfp0dXMnQLMCKtwD2oIP8rG2PHU8dE65Lj98W7yWG1NVfjau%2F4AMT6RI44EJsPGGectwkR4KlvLmMyms%2FKwxe96S2Nf45UYU4t1VphH9R7p74AJOsPJd2HGK06ReBxSgFALcUyEYBVukqyEVi%2BWLhQXawdSSGHorFccrxoBjF46caR2dVYyiNMQpeMz6g2OKlBhMczo%2FRaUsmL8Q05TEJf%2FM38LLer0lv4AUVia7gHLkEQ7iF8HIbJO1elR%2Bwy42sTYO6qGcmYlwFjUBXgjt0EszhK5jUc%2BtND4qaxl0o7gBsEpw6lAALZQtnpEKgHzX85YVVOOH%2FLG1wOnW6cgnwxvnG6sdJksLReHHlyVJPDn8%2BM8PjRbWxU8TD9oCfukjlnr2kVY7A0C68z1r30e8Da6RiI8GNnvTWQXnF93IQoZn3S%2BeQju51gO7Sn4N7O%2BZnoR%2FmkMkqravmo%2B6CK0Dg8nc1W4VCrGIThDI0Q4HTc1d9YhzP7gSYtL6kbIxdQp0wJWVw%2FTOkl2wc3LaSb3rofTh0OefLk6A7EsluBgLkNnd%2BPutHSvaBe3C2iTs%2BPqlBmvHXurOSJPtGKzKuGiofRiGN%2FVHNo89vzMX0o2Rhjwih6rVkZ2Omb02D4TaMzPXxGmErXdyVX0wtMXqvAY6pgGTr6hxQ2Kshp%2B12iLWYt%2F9ljiaxWVBsBxY2sgRq1orF6gkaFFe7cHuHKLmSIADoF6olsuBmVXo65hzq0grOHKqvre4o23Mj6BhF1h39rTQCmhNmtiHMkg1zpWXuBrYAcIe9fw5JZN3bn51flSNV%2FVjoaUvfOo6%2B%2BogQ7h9R%2BdRmgkMnQl1bH0cdVDSjS1EM%2B6Xj8PJNckY%2FLMoUR1winBkJipFiG2n&X-Amz-Signature=91b36289701bdc43910f9f9221eb92418779d0bf38c70578c3b800a3b499f660&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKNECEF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSDVQ%2FXSUAzjXLKIMH0seVk7vMOAwHZVhk3osUNwKOmAiAbNaVWx6bysf%2BAZs4hVq5EF5pbStzR4MSJemD78Ft0TSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQmXWfp0dXMnQLMCKtwD2oIP8rG2PHU8dE65Lj98W7yWG1NVfjau%2F4AMT6RI44EJsPGGectwkR4KlvLmMyms%2FKwxe96S2Nf45UYU4t1VphH9R7p74AJOsPJd2HGK06ReBxSgFALcUyEYBVukqyEVi%2BWLhQXawdSSGHorFccrxoBjF46caR2dVYyiNMQpeMz6g2OKlBhMczo%2FRaUsmL8Q05TEJf%2FM38LLer0lv4AUVia7gHLkEQ7iF8HIbJO1elR%2Bwy42sTYO6qGcmYlwFjUBXgjt0EszhK5jUc%2BtND4qaxl0o7gBsEpw6lAALZQtnpEKgHzX85YVVOOH%2FLG1wOnW6cgnwxvnG6sdJksLReHHlyVJPDn8%2BM8PjRbWxU8TD9oCfukjlnr2kVY7A0C68z1r30e8Da6RiI8GNnvTWQXnF93IQoZn3S%2BeQju51gO7Sn4N7O%2BZnoR%2FmkMkqravmo%2B6CK0Dg8nc1W4VCrGIThDI0Q4HTc1d9YhzP7gSYtL6kbIxdQp0wJWVw%2FTOkl2wc3LaSb3rofTh0OefLk6A7EsluBgLkNnd%2BPutHSvaBe3C2iTs%2BPqlBmvHXurOSJPtGKzKuGiofRiGN%2FVHNo89vzMX0o2Rhjwih6rVkZ2Omb02D4TaMzPXxGmErXdyVX0wtMXqvAY6pgGTr6hxQ2Kshp%2B12iLWYt%2F9ljiaxWVBsBxY2sgRq1orF6gkaFFe7cHuHKLmSIADoF6olsuBmVXo65hzq0grOHKqvre4o23Mj6BhF1h39rTQCmhNmtiHMkg1zpWXuBrYAcIe9fw5JZN3bn51flSNV%2FVjoaUvfOo6%2B%2BogQ7h9R%2BdRmgkMnQl1bH0cdVDSjS1EM%2B6Xj8PJNckY%2FLMoUR1winBkJipFiG2n&X-Amz-Signature=497c2832fc58e0b15e1d70f6ecac825b4502fa5c8f144be3fb4e674bf3e438f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
