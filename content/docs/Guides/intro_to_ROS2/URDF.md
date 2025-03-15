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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDGWKMQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL83iseDd9nFT22Q7L0AmN1We6fAR6LxDjqKzrcSTyLAiB%2BGKSNcQXbx0pthB90%2FKHl%2BeKDH9XDaMp3L2ys5DiIvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2Bq0g6c7fKBKCSBgKtwD8WQJxAnS%2Bo7lA0XKBhDhbc8Zp9ESnDDrFE%2BFNl1HTwvb0XZcSVT6l6yU8UUZIX24d0jB4X6K6BrvSQY8ymwjzwQS50l0XGJpZy1hoj2cIdT%2FPTXHbrXZJdzgFZgnRXCj7kBXwi33szPLZE9q3UsgA9f4GTohogCjl0OMU%2B9zYn5r46jZnRxQyOJvxcCpEagv5BjEdw3UH03sXYOWebP41Ngn2cg498mk%2F4LLrQzSKRAek2Dilm%2FAockFqJImjC2SblvLuAfgIupfdC70Lnq5SHYXWMyUPMCY64qtnhjzbsg5z%2BvVaLAFdmGMk0pStl8HwV9yX7U5j8yXY7rpIcglgN69MgGo0iMi7diSbjlN%2BI3ko5tktF9yfc33cDFjoN8%2FkbsFzUMVCeeuTi9WmA%2FLvva8YiJMoZvNOU820z0DkuCheBwnUgS5OYF0mlncfM3HLc69GvohS2hr1Ogz7Nu2YNGI2NqyCN68CVdSbVzInirEKRrPQp50lQ36a8K8XbGCs4D4zNMGqUh7x8utIfPakZrN3EDDE67OsIzuW6FBTkEyqWX5FoqKfPmbiMhSWLi%2FeEfv%2F0LjwcNee1yOIAa1yxSL1qk5EIMpBmR7oaPYeg7wZssvU7%2BjMeIUyLEwpIfUvgY6pgG18TEQl%2BsREvx30Nvu5oBfZdiiNnKf5Qeie%2FV%2BvUHZUc0ARxTKYzLch3PIk1sdBepnRTX6hc7t8709QVFtXf7Tt2Tyiuop%2BS6JewqmaJaMotEirTfOmTRnc4BwIxx%2BU%2BiGa0KjQLYNWeRvGcLwwIfjFQ6088Itw5G3BGzqQXvvL2ls0DJCIgbtKDmRR3a6Y5KfwgxOnUqPpBC2ttshdGV0QTKDx%2FJP&X-Amz-Signature=29dced085029e0fb92429eea959d04bf8d099d44d888fc97a49e2a851ca6dd89&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDGWKMQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL83iseDd9nFT22Q7L0AmN1We6fAR6LxDjqKzrcSTyLAiB%2BGKSNcQXbx0pthB90%2FKHl%2BeKDH9XDaMp3L2ys5DiIvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2Bq0g6c7fKBKCSBgKtwD8WQJxAnS%2Bo7lA0XKBhDhbc8Zp9ESnDDrFE%2BFNl1HTwvb0XZcSVT6l6yU8UUZIX24d0jB4X6K6BrvSQY8ymwjzwQS50l0XGJpZy1hoj2cIdT%2FPTXHbrXZJdzgFZgnRXCj7kBXwi33szPLZE9q3UsgA9f4GTohogCjl0OMU%2B9zYn5r46jZnRxQyOJvxcCpEagv5BjEdw3UH03sXYOWebP41Ngn2cg498mk%2F4LLrQzSKRAek2Dilm%2FAockFqJImjC2SblvLuAfgIupfdC70Lnq5SHYXWMyUPMCY64qtnhjzbsg5z%2BvVaLAFdmGMk0pStl8HwV9yX7U5j8yXY7rpIcglgN69MgGo0iMi7diSbjlN%2BI3ko5tktF9yfc33cDFjoN8%2FkbsFzUMVCeeuTi9WmA%2FLvva8YiJMoZvNOU820z0DkuCheBwnUgS5OYF0mlncfM3HLc69GvohS2hr1Ogz7Nu2YNGI2NqyCN68CVdSbVzInirEKRrPQp50lQ36a8K8XbGCs4D4zNMGqUh7x8utIfPakZrN3EDDE67OsIzuW6FBTkEyqWX5FoqKfPmbiMhSWLi%2FeEfv%2F0LjwcNee1yOIAa1yxSL1qk5EIMpBmR7oaPYeg7wZssvU7%2BjMeIUyLEwpIfUvgY6pgG18TEQl%2BsREvx30Nvu5oBfZdiiNnKf5Qeie%2FV%2BvUHZUc0ARxTKYzLch3PIk1sdBepnRTX6hc7t8709QVFtXf7Tt2Tyiuop%2BS6JewqmaJaMotEirTfOmTRnc4BwIxx%2BU%2BiGa0KjQLYNWeRvGcLwwIfjFQ6088Itw5G3BGzqQXvvL2ls0DJCIgbtKDmRR3a6Y5KfwgxOnUqPpBC2ttshdGV0QTKDx%2FJP&X-Amz-Signature=1dd5e6570d6b25730bbd7b1a1416ea7ae6b5f6865e7cb35276f6732ff58bb77b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
