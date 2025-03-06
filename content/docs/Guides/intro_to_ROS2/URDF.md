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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANUYYZ4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmxSMvLU5Fis2UYJmqxDiFpM1G8q5MFZel%2FUFcsBLlPAiALmRwZ91OPVG0pOU4dA5y434SX0BhorQ12JiaiXo0w4ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXjBDcWtuIMY3piygKtwDE63%2Fiqpg8qpL8cmppZ7MWRADTOB1whdSxpQ3l0%2BP%2BHrgkFeZIo82nUB47YkhTPT5fAshfGk5p2BgBKNznKfWJPhB0B2ccjk1i%2Bet4%2FwntSHrbacmLSnggjotK0PLpM1N6ziQYcOjD4AQOGGLEYp9gn1uWJDtBtdunEyH7zNtD0lnuja9Ad6%2FZSrX9e%2B7i8FKJfxV3UANuQcNm34E8KCufFD1pkq6NAkFi6ufKVqoPpTRzjQjIXitH1QRVYgW0ihEVdOlsUOfCOZHBSbCVrgLItqeOfMtmr4njyomyf9m38ecXa9YCIXveKaxp7Mj0yFYPHjmDxftHZjbtzRTgxg1zan76boe0neC6ksQ4xw73skrKi45%2BKKZbvxsl5%2BXOH0zXG3jjIilIcv7oLDmYXR9sdHyiE7jZZiSlPAuYoOR%2Fg9sXeyy8%2BBwNV3gKee3MSxcDnTUfcDl4gluE%2B%2FlCzEv9e4o4DxpnmJqge7kmfSWQHa57mwIxmtuGlbtFjr6cFvP1ejh8SVdDApqSvKP5%2F87SAFmrNjM22bGG4pTQcc0hqznz0vVVmlgMWx%2BXbln6kSdoFRlRL08I7X2GIRaTP5Qj2xL0HGXEj7hfzOglTJPI4OF5OcMK53xejBL2Psw1%2BejvgY6pgGowcDiS%2FAPSJnN4gb7uT6RDtACu880H7o8Q6BmkZ2taqh94%2FSBSGU%2BI7ZCd1IeClsR5HT3xMyU1ZuaVObGDhTudTKv%2BYYCV2FU3C2bUjSDPrhHmGgMPSuY94tE0v81TDgnlcRRZvnS3%2BqFSByIAOQIQ4VdG3%2B%2BE7Hur6%2FZwtVElR5HLW0xd401DAfTIQsaSNyWePI7zJf949q15OM3m%2BsLipGwbxqj&X-Amz-Signature=c88eed7cbb88e9ec0ef4c5a3a006540485e23d83ece2cadde93368456ee91a73&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANUYYZ4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmxSMvLU5Fis2UYJmqxDiFpM1G8q5MFZel%2FUFcsBLlPAiALmRwZ91OPVG0pOU4dA5y434SX0BhorQ12JiaiXo0w4ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXjBDcWtuIMY3piygKtwDE63%2Fiqpg8qpL8cmppZ7MWRADTOB1whdSxpQ3l0%2BP%2BHrgkFeZIo82nUB47YkhTPT5fAshfGk5p2BgBKNznKfWJPhB0B2ccjk1i%2Bet4%2FwntSHrbacmLSnggjotK0PLpM1N6ziQYcOjD4AQOGGLEYp9gn1uWJDtBtdunEyH7zNtD0lnuja9Ad6%2FZSrX9e%2B7i8FKJfxV3UANuQcNm34E8KCufFD1pkq6NAkFi6ufKVqoPpTRzjQjIXitH1QRVYgW0ihEVdOlsUOfCOZHBSbCVrgLItqeOfMtmr4njyomyf9m38ecXa9YCIXveKaxp7Mj0yFYPHjmDxftHZjbtzRTgxg1zan76boe0neC6ksQ4xw73skrKi45%2BKKZbvxsl5%2BXOH0zXG3jjIilIcv7oLDmYXR9sdHyiE7jZZiSlPAuYoOR%2Fg9sXeyy8%2BBwNV3gKee3MSxcDnTUfcDl4gluE%2B%2FlCzEv9e4o4DxpnmJqge7kmfSWQHa57mwIxmtuGlbtFjr6cFvP1ejh8SVdDApqSvKP5%2F87SAFmrNjM22bGG4pTQcc0hqznz0vVVmlgMWx%2BXbln6kSdoFRlRL08I7X2GIRaTP5Qj2xL0HGXEj7hfzOglTJPI4OF5OcMK53xejBL2Psw1%2BejvgY6pgGowcDiS%2FAPSJnN4gb7uT6RDtACu880H7o8Q6BmkZ2taqh94%2FSBSGU%2BI7ZCd1IeClsR5HT3xMyU1ZuaVObGDhTudTKv%2BYYCV2FU3C2bUjSDPrhHmGgMPSuY94tE0v81TDgnlcRRZvnS3%2BqFSByIAOQIQ4VdG3%2B%2BE7Hur6%2FZwtVElR5HLW0xd401DAfTIQsaSNyWePI7zJf949q15OM3m%2BsLipGwbxqj&X-Amz-Signature=f8c726978184e03edd69fae443778b608c6077a14f08741df417bde4d1a75669&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
