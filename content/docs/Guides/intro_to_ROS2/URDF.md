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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SH7R6UI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCAg9UAZXtB4bzH1yNauznXmrYYwDl5NqyhikZk7WjYfQIgSE4IJ6h6N5qnHsw03mezfUqaivPtDIy40clKlp3VKQ4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfGEl%2B76%2FQCdBIRKSrcA0VFT1EMuUKCOIPU5I5rR1JJ32JSV%2Bat1%2B1gmIXqw7leL1LjAohLim1pucK%2BKXV96KfEhA3rIz1TwBvukWZeKK9YfOW1NRzN%2FTBdqsz6L1O%2BhSaHIiudJNs6qphQz%2ByNlXBDuLJC3OBtD2eeVrYffDpFjM2rVAPZhyujHOaLEU9z9ci80FiSe3b1RBKpsGH5yqYt4NXIgHrNX1iG%2BpQEflC38CnoXmH%2B5RrdN%2F7jdLnAehOrTHplynvrF4V45QCTMEZj0WTNL1mnU9sXCPcXlhpD%2BnC4NTaIHt99O43VgI%2Bms55GxTsiyQLMCw51z7SDL1eDzifA5AF7G1%2B7K6BR6m%2BQUGqk5nPPlkyFgGaRKY8FfB3grm%2B02C9ePeS7xgVhJkzBySJCYNEfaBlLMtHuEJBWEPMgMcr%2B8tu%2BFSDq1Ncs2zH4iKBjFvbEtVKDU3ueWisdyvUDDIxF9ASNoYiLO0fERo1NJaCrvgAZJwH5DwzG1ZhoM8kfouthZMu2Hb%2FaJ95lEgpGopIgCxIw1eec9ZcdPOZAMYBRmn%2BAUjb59lZMfyfqjpVyIQJe6O1GZFzA%2F5FPwb0txzrnakwY8qVXzLrZtTMmwQunBMdoriMCS7nXhJjwjlQ6P6GicBbgMJzEmMEGOqUBE7bn9LLlcNUrOXKtczvTK4LZpAP1HkJFmfJtOu%2Fv%2FrqQaQypfIHDmAIkyNfo85lXLf8Wyv4Y%2BFlT1gY%2BiQWemPcEqY8avluPCZbSn8%2BJPN2EE900tGzjCHomK%2BAKZ0olzx9p8yJZNqvInE4rXeKZeQtdLguvMxWRdNqkAEKguViUFvyMPulkdRuqeuyBbknHG8Xs8PMO%2FMnzegIxSB8tEJT5MF2z&X-Amz-Signature=280b8b1728a7ab6837c7edb0b0706238386dd0d53e4f2d22b274e13a23ea32e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SH7R6UI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCAg9UAZXtB4bzH1yNauznXmrYYwDl5NqyhikZk7WjYfQIgSE4IJ6h6N5qnHsw03mezfUqaivPtDIy40clKlp3VKQ4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFfGEl%2B76%2FQCdBIRKSrcA0VFT1EMuUKCOIPU5I5rR1JJ32JSV%2Bat1%2B1gmIXqw7leL1LjAohLim1pucK%2BKXV96KfEhA3rIz1TwBvukWZeKK9YfOW1NRzN%2FTBdqsz6L1O%2BhSaHIiudJNs6qphQz%2ByNlXBDuLJC3OBtD2eeVrYffDpFjM2rVAPZhyujHOaLEU9z9ci80FiSe3b1RBKpsGH5yqYt4NXIgHrNX1iG%2BpQEflC38CnoXmH%2B5RrdN%2F7jdLnAehOrTHplynvrF4V45QCTMEZj0WTNL1mnU9sXCPcXlhpD%2BnC4NTaIHt99O43VgI%2Bms55GxTsiyQLMCw51z7SDL1eDzifA5AF7G1%2B7K6BR6m%2BQUGqk5nPPlkyFgGaRKY8FfB3grm%2B02C9ePeS7xgVhJkzBySJCYNEfaBlLMtHuEJBWEPMgMcr%2B8tu%2BFSDq1Ncs2zH4iKBjFvbEtVKDU3ueWisdyvUDDIxF9ASNoYiLO0fERo1NJaCrvgAZJwH5DwzG1ZhoM8kfouthZMu2Hb%2FaJ95lEgpGopIgCxIw1eec9ZcdPOZAMYBRmn%2BAUjb59lZMfyfqjpVyIQJe6O1GZFzA%2F5FPwb0txzrnakwY8qVXzLrZtTMmwQunBMdoriMCS7nXhJjwjlQ6P6GicBbgMJzEmMEGOqUBE7bn9LLlcNUrOXKtczvTK4LZpAP1HkJFmfJtOu%2Fv%2FrqQaQypfIHDmAIkyNfo85lXLf8Wyv4Y%2BFlT1gY%2BiQWemPcEqY8avluPCZbSn8%2BJPN2EE900tGzjCHomK%2BAKZ0olzx9p8yJZNqvInE4rXeKZeQtdLguvMxWRdNqkAEKguViUFvyMPulkdRuqeuyBbknHG8Xs8PMO%2FMnzegIxSB8tEJT5MF2z&X-Amz-Signature=e5e55617f8ddb6265c672a12719b6d31ba22c60bd72cc161783d30069c9ee80a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
