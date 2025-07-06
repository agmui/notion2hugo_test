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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLHZJNX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC61jrS39scmkurWa55EEwUNIL%2BGXpeBgM3AUK3ui9adAIgYUCzJO5nZH9lHfDWzy7icMF6lgFuE%2FUJnXeRyNbzlL8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDA5xXTnpbs1RswK6%2FircAwoW8iFtcKNnhw%2BR9WfS7PbST5Q9heLu0T9j16auUmxsofr5JWN9ksZXF6WSUcegTUvSu29wU9nKskwg7dSDGYnajU6y8NFNNG3wq84yPVUiLoTRkkdYzN5guap9HKgd7qDuVUupTDzWYSmU%2FNb14HzkKxleaUP%2BXwB6NkaMJIIYmNUoHOLFmhssi8IxxKKsFv6hvE8%2FvG51N%2BjNy5h4jGeCo6pLDy%2FjWNJQePt%2BsbQENm%2BrLhDSlzMZrL9HPVRXzVN8QrZfDAN59I28CSOJm1in3C1g6MwIpts5OpOM9YlG4YA29er4BbOpYz0U%2BsKx4NWnm8OQlUE4Usb8fj6G%2B3WCUOL5BvnL0xW3keCQ6u3atZf2ySq4sgYgETM92fZutTh8lZD5SkQnJTeAGM0tLPiT80F%2Fvgm6efA8k60RuAkEVV%2B0DYCwcUlNv8WFJaONK2zBcdWiixSGicXfRuPW6JbYcM9zAywa4eeaQAxwZonpalPoa2tEBbObBmOpwmo9zwxV4Pps2pS4qqn9r3YatA87IZ4xfWPc%2BR6P3ypGmeGnA4Kt%2Bl5RglL%2F7fXhWxmQPP6HX6AWj2q%2Be2ohF1gb8lxNMiwZ48sqXRPigkAU%2Fsfl6jE3GawRFNPmi4TpMPrmqsMGOqUB%2FIRrShoCkT4bzhpGTaa6JsClFtSchA5XnHSdDhQOREzrSFrMcg%2F7L9LhFcNdECRHA2FWgxLiKx1uCintQ%2BpRA86m8MvQQyhHxuPDcirRJ1aDyIXH%2Fn6%2BMwzB4AciDMqsjdoemQEL3UpY0RuNOpoZ0Fz0LJSzIeXgjuC%2Fq58c5LrQH%2BW83Y9fazfTkMDdxGpnitiwvV%2FkeD6IJGnqqrP1qlSetT6U&X-Amz-Signature=996e0945c439699e208dc71abbd6798e3722617d8292f66d5d253f32b17c1bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLHZJNX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC61jrS39scmkurWa55EEwUNIL%2BGXpeBgM3AUK3ui9adAIgYUCzJO5nZH9lHfDWzy7icMF6lgFuE%2FUJnXeRyNbzlL8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDA5xXTnpbs1RswK6%2FircAwoW8iFtcKNnhw%2BR9WfS7PbST5Q9heLu0T9j16auUmxsofr5JWN9ksZXF6WSUcegTUvSu29wU9nKskwg7dSDGYnajU6y8NFNNG3wq84yPVUiLoTRkkdYzN5guap9HKgd7qDuVUupTDzWYSmU%2FNb14HzkKxleaUP%2BXwB6NkaMJIIYmNUoHOLFmhssi8IxxKKsFv6hvE8%2FvG51N%2BjNy5h4jGeCo6pLDy%2FjWNJQePt%2BsbQENm%2BrLhDSlzMZrL9HPVRXzVN8QrZfDAN59I28CSOJm1in3C1g6MwIpts5OpOM9YlG4YA29er4BbOpYz0U%2BsKx4NWnm8OQlUE4Usb8fj6G%2B3WCUOL5BvnL0xW3keCQ6u3atZf2ySq4sgYgETM92fZutTh8lZD5SkQnJTeAGM0tLPiT80F%2Fvgm6efA8k60RuAkEVV%2B0DYCwcUlNv8WFJaONK2zBcdWiixSGicXfRuPW6JbYcM9zAywa4eeaQAxwZonpalPoa2tEBbObBmOpwmo9zwxV4Pps2pS4qqn9r3YatA87IZ4xfWPc%2BR6P3ypGmeGnA4Kt%2Bl5RglL%2F7fXhWxmQPP6HX6AWj2q%2Be2ohF1gb8lxNMiwZ48sqXRPigkAU%2Fsfl6jE3GawRFNPmi4TpMPrmqsMGOqUB%2FIRrShoCkT4bzhpGTaa6JsClFtSchA5XnHSdDhQOREzrSFrMcg%2F7L9LhFcNdECRHA2FWgxLiKx1uCintQ%2BpRA86m8MvQQyhHxuPDcirRJ1aDyIXH%2Fn6%2BMwzB4AciDMqsjdoemQEL3UpY0RuNOpoZ0Fz0LJSzIeXgjuC%2Fq58c5LrQH%2BW83Y9fazfTkMDdxGpnitiwvV%2FkeD6IJGnqqrP1qlSetT6U&X-Amz-Signature=677587e4d24a5345d6b821a7d0f4e621dc958c69dfd61ae4b201f13791a0fae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
