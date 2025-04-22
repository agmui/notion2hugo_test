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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UG3ATKW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgejbzc2IqZ5QhaKcnkEbSjmRkMH5OnHrr85lEsq45fAIhAIDBA%2FuUbqu8slQnCgClzpMu32cXSgeTrEMN3FB4%2Bfx%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5paMpF%2Fqkwr7160Yq3AObiR1P%2BtLADsqwpnRF3jicQiEKnptPcsJnNE%2BvO4GOuRNkfA56s7T2aY34OjZkyeo3jvzHMT%2FjjiKkoEMudzm2yu5sCfyqnYxckvCzt1KhO5yVjn25EgNpwnf37bk%2FJqdygPKzS6VMmmM9tKF4NIIb79JcFTkKhaWizwIQDdOg%2B9z6NLQFhA6WJS4JPHT7Sx5HzLDTX5Bo2gAFctPjmlLl4XvB4JS06O9WYHgY0lak0j2%2FU3VMN8cABJEUtvaoVFelUL20FKvimMxEVUmqiPdooSkttJ3xLWhVA3RxpqpI6ordCJpyldqaCKsO7tAS9aCx7hk7o9DBhWuq%2FKC1Isahi8D7ZB3JAFOOYvifvwcPt7uQ%2F9U%2BmlF9ai2vwRObVuE1zb%2BopgtEPDeMKgIIjGCXUxRiHf9VW9Dr%2B0yWB%2FQbFqA0z6NbNkUFSgOk06xGVEdIwgU49UQo6eINCXSjC5HGmtr8KC6jzPYxID2HtvU5bdUcMJFRV1WXby4yRoj8Kw%2FC63c3pCw6kF4I08%2BCOJuTgkYoYNnmFQzrJ7UeL6T5JmmBHKQ6%2FUyZSUW2QNr65JYobdMijSyX5CGM3JBo51nGeszB7JpSkKffBZJc8OakZ96fuiPOBhNsLgCWjDDzvaDABjqkAYGvaXyFjhqef0hPNZqvc5aC%2FdP1t7%2Bdw%2Ftx6zZIZVrPRel0KBzBhM09ZDrncgqcRzw%2FjIiy3LoZltXlZNkvZTGDuYVKfsUoLAqZUg%2FJ6T5L%2BuvGLprjKHmOwGymfEFBP89GSM8gJF0LEzV%2B72U5gEY1pyDTdsiYjpjInFZGQeqRaq%2FTLvPfI3iXhoIVzdMg0sqm19ewmI3GW1Y08fnMEyuS410J&X-Amz-Signature=8865c9b069f14a16ab18a23cb428298dfa0910ccc667ba957c7fa1cf263c9b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UG3ATKW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgejbzc2IqZ5QhaKcnkEbSjmRkMH5OnHrr85lEsq45fAIhAIDBA%2FuUbqu8slQnCgClzpMu32cXSgeTrEMN3FB4%2Bfx%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5paMpF%2Fqkwr7160Yq3AObiR1P%2BtLADsqwpnRF3jicQiEKnptPcsJnNE%2BvO4GOuRNkfA56s7T2aY34OjZkyeo3jvzHMT%2FjjiKkoEMudzm2yu5sCfyqnYxckvCzt1KhO5yVjn25EgNpwnf37bk%2FJqdygPKzS6VMmmM9tKF4NIIb79JcFTkKhaWizwIQDdOg%2B9z6NLQFhA6WJS4JPHT7Sx5HzLDTX5Bo2gAFctPjmlLl4XvB4JS06O9WYHgY0lak0j2%2FU3VMN8cABJEUtvaoVFelUL20FKvimMxEVUmqiPdooSkttJ3xLWhVA3RxpqpI6ordCJpyldqaCKsO7tAS9aCx7hk7o9DBhWuq%2FKC1Isahi8D7ZB3JAFOOYvifvwcPt7uQ%2F9U%2BmlF9ai2vwRObVuE1zb%2BopgtEPDeMKgIIjGCXUxRiHf9VW9Dr%2B0yWB%2FQbFqA0z6NbNkUFSgOk06xGVEdIwgU49UQo6eINCXSjC5HGmtr8KC6jzPYxID2HtvU5bdUcMJFRV1WXby4yRoj8Kw%2FC63c3pCw6kF4I08%2BCOJuTgkYoYNnmFQzrJ7UeL6T5JmmBHKQ6%2FUyZSUW2QNr65JYobdMijSyX5CGM3JBo51nGeszB7JpSkKffBZJc8OakZ96fuiPOBhNsLgCWjDDzvaDABjqkAYGvaXyFjhqef0hPNZqvc5aC%2FdP1t7%2Bdw%2Ftx6zZIZVrPRel0KBzBhM09ZDrncgqcRzw%2FjIiy3LoZltXlZNkvZTGDuYVKfsUoLAqZUg%2FJ6T5L%2BuvGLprjKHmOwGymfEFBP89GSM8gJF0LEzV%2B72U5gEY1pyDTdsiYjpjInFZGQeqRaq%2FTLvPfI3iXhoIVzdMg0sqm19ewmI3GW1Y08fnMEyuS410J&X-Amz-Signature=ed5f664bf40f1a36d567db29f211ebf66e224914e7f070788d2a6ddf1c175eef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
