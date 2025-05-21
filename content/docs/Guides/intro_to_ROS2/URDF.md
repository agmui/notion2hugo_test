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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKB6RC3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC%2FmhBacya3E3hxCPR3TzYk9%2B3mePoqTOICTW17s2BnfgIhAMIiQTm0bXETOD3ZSPtGg8PRGns19NlSI87oqsz9HSa2KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywq3HlU6OEXQIusBYq3AP1ibZJH9Pob5MutYGVUXUajZXGN7uFiMcOiFdttSkMSypF756BP%2BNofIi0xxZ8FXc%2B5zaGTdHzVgWZXx07pDJJphL1oP3tDKiDvPPJZTzSQ%2FKSZh8ZFGyugpGpm3TK83c%2BNwT5Ky7mb4MV%2FK9yNn1775tAGfoiB3TBc196akYJHC3r3QUre%2Fiz8Z56bamkK8w3Jnl0DaU22DOgt3ZVmKw92fhZxBzFPDFHL%2F0AV3YnFIW5z6Gw0MuNq8sBRfZxc6cSgfRhDEN5sKFZ1B5CszLbcHSRfFljkhxJcT5yMHSWVaoQSr5TjnbVEa%2F9rZE68LjO0ux2ey2cf1fJQX0uQnuEw%2F41YZFtPRcvX4fZmv%2Bd8NDdOxlYGpniOepKoXsJrY5BrZhpKgEWDZEu0AwgwJTUzbknFGA7%2Bx2HaIXGozbvoJFTnpYlZUZVH1qVfjhmEHPwlsKgbXH%2Bwc56B9GpS9%2F6NPNSsY8HsuyMOE6H2xWUj%2F3sPVZzVQFigSdVgldxnjO0WhI2lMohvea8sh9vWzPmRxLaLuFs%2BDqm8ZrCVmgwl803pB1JN8BdZXoGvMmDMRCWZ%2BmXVSleSO7xjn91SHfYYpHHdRE3v2zKGzgPxlmQTnSSzwK4YD8ETfYwqjDG8rfBBjqkAVS%2BWA5nkq8%2BqShygTyt2tbFMy06vGE5aH6A7mKGsjQGlaa%2FV58IJSxXTc6e4xIXgthtrlHDjY5CorhuouZ3pFvVChpiWYjKEPLow%2BFDhlKpwIoVHw2Xyd8Fm9D4ey1nvOWodHOBLZ20QZ7ELOgww7Ga5ppOCQIlWr%2FqzRRik9aSJOn2s80kBN8no2nUGRnuGefmacuuqYznolOp%2FFu2COovz2UZ&X-Amz-Signature=a3f43e0245807fbce05b0a799cba1a92657d869c3c5d0b7a8412819fe5a3a63c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKB6RC3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC%2FmhBacya3E3hxCPR3TzYk9%2B3mePoqTOICTW17s2BnfgIhAMIiQTm0bXETOD3ZSPtGg8PRGns19NlSI87oqsz9HSa2KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywq3HlU6OEXQIusBYq3AP1ibZJH9Pob5MutYGVUXUajZXGN7uFiMcOiFdttSkMSypF756BP%2BNofIi0xxZ8FXc%2B5zaGTdHzVgWZXx07pDJJphL1oP3tDKiDvPPJZTzSQ%2FKSZh8ZFGyugpGpm3TK83c%2BNwT5Ky7mb4MV%2FK9yNn1775tAGfoiB3TBc196akYJHC3r3QUre%2Fiz8Z56bamkK8w3Jnl0DaU22DOgt3ZVmKw92fhZxBzFPDFHL%2F0AV3YnFIW5z6Gw0MuNq8sBRfZxc6cSgfRhDEN5sKFZ1B5CszLbcHSRfFljkhxJcT5yMHSWVaoQSr5TjnbVEa%2F9rZE68LjO0ux2ey2cf1fJQX0uQnuEw%2F41YZFtPRcvX4fZmv%2Bd8NDdOxlYGpniOepKoXsJrY5BrZhpKgEWDZEu0AwgwJTUzbknFGA7%2Bx2HaIXGozbvoJFTnpYlZUZVH1qVfjhmEHPwlsKgbXH%2Bwc56B9GpS9%2F6NPNSsY8HsuyMOE6H2xWUj%2F3sPVZzVQFigSdVgldxnjO0WhI2lMohvea8sh9vWzPmRxLaLuFs%2BDqm8ZrCVmgwl803pB1JN8BdZXoGvMmDMRCWZ%2BmXVSleSO7xjn91SHfYYpHHdRE3v2zKGzgPxlmQTnSSzwK4YD8ETfYwqjDG8rfBBjqkAVS%2BWA5nkq8%2BqShygTyt2tbFMy06vGE5aH6A7mKGsjQGlaa%2FV58IJSxXTc6e4xIXgthtrlHDjY5CorhuouZ3pFvVChpiWYjKEPLow%2BFDhlKpwIoVHw2Xyd8Fm9D4ey1nvOWodHOBLZ20QZ7ELOgww7Ga5ppOCQIlWr%2FqzRRik9aSJOn2s80kBN8no2nUGRnuGefmacuuqYznolOp%2FFu2COovz2UZ&X-Amz-Signature=dfcf42a66cfcce01eaff1b016fe227da62f30a68b68d5faecb97b4c1ee394cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
