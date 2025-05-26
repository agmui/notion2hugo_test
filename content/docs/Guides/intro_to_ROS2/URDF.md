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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWI2X2R5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2FU4vWwUkHWXX2pjHI4CbwTztte1JdREACgiWH%2F1L4gAIhAKRv%2BSHihugfaabCtIPcWLNP%2BM8dDb%2BEaE1t42AtOIIwKv8DCD8QABoMNjM3NDIzMTgzODA1IgwEZD1x6Ek3EG1kiMAq3APtTAhkbO%2BVwYlywNGHM3DvSeJIMIB%2FCda%2BWULdHBArZjVlG673nu7lS0f49m%2BEAkU%2BFLBYlzIRB%2B3aoNuDjkmUNtg4XlHRTc4NrjvaevLF8njpMr2VxpTs2TUhttbWLZfUTT39ku1ByXIOBuEhK3nfGf%2BkrTQUD1Do4yiKOe7L4virSlWOdJ16QL10XbSitqP2AHuhE1Jw3GUpOzqZ3n5TPkLLyVj19ySTS8y%2BtRy8CO5f9idD%2FNw%2FD7muIcO5i5mMyo1AINl4i6fKJJJf7%2BX3C7WMeDB1UbD%2FcRy5JkqG2ZImK%2F0l%2BTQ%2BoW3TyHjkRpebZZg1cZAs9XteHP5x0F4qeMCt98mTJYOimyHWAaW6b4gBeev0AbOp8x3QwXubOXkCLzbFQ89%2FeQcUwiil%2FKDDBgUdlA0l0ZxQmMkHiAXYp%2FZWWkhj0M9BUr7neZ397Oh%2FdJEDM2JqAOwWlu3i149j1lH6FNRALa6E%2BSEIIsGSBHQzGchzuFCEPWq99fvA0VzZEpdl2vZj81EHX0SX1Lqg2N%2B3gGDeREEkG1dMdE4yEAuIp9aPZA3DOFgvkiECen6CLyyxAuZphopYk3Gzb34zndQLDTqJsAe469SxWdm8iTTng43S5GneR4hdTDD6jtDBBjqkATciUpN9Rro7MqgEzKgdgEzcYi6g7b%2Bf2fAHm9At4SoYk381ITojFVzVoSla6IbQEne%2Bq%2FPhfpBXgYaxjRmNbgHEO2y%2FNPJCCsO2PyQc46FG2AbDKRX2mq1Q5agDQPi6jBXqDa%2FMmy3JQ8GyVYzbFxylZI4nwup8jwgEokBNRfiOncs2PsBNxZxsBJILpgBz2nrvxFJOo%2FlAAvIXV8HV3UW%2Ff9B%2B&X-Amz-Signature=c0b09d3d14f8204b481c5fe05c08efd0aa30a6d869cc76410a9d723972f25d46&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWI2X2R5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2FU4vWwUkHWXX2pjHI4CbwTztte1JdREACgiWH%2F1L4gAIhAKRv%2BSHihugfaabCtIPcWLNP%2BM8dDb%2BEaE1t42AtOIIwKv8DCD8QABoMNjM3NDIzMTgzODA1IgwEZD1x6Ek3EG1kiMAq3APtTAhkbO%2BVwYlywNGHM3DvSeJIMIB%2FCda%2BWULdHBArZjVlG673nu7lS0f49m%2BEAkU%2BFLBYlzIRB%2B3aoNuDjkmUNtg4XlHRTc4NrjvaevLF8njpMr2VxpTs2TUhttbWLZfUTT39ku1ByXIOBuEhK3nfGf%2BkrTQUD1Do4yiKOe7L4virSlWOdJ16QL10XbSitqP2AHuhE1Jw3GUpOzqZ3n5TPkLLyVj19ySTS8y%2BtRy8CO5f9idD%2FNw%2FD7muIcO5i5mMyo1AINl4i6fKJJJf7%2BX3C7WMeDB1UbD%2FcRy5JkqG2ZImK%2F0l%2BTQ%2BoW3TyHjkRpebZZg1cZAs9XteHP5x0F4qeMCt98mTJYOimyHWAaW6b4gBeev0AbOp8x3QwXubOXkCLzbFQ89%2FeQcUwiil%2FKDDBgUdlA0l0ZxQmMkHiAXYp%2FZWWkhj0M9BUr7neZ397Oh%2FdJEDM2JqAOwWlu3i149j1lH6FNRALa6E%2BSEIIsGSBHQzGchzuFCEPWq99fvA0VzZEpdl2vZj81EHX0SX1Lqg2N%2B3gGDeREEkG1dMdE4yEAuIp9aPZA3DOFgvkiECen6CLyyxAuZphopYk3Gzb34zndQLDTqJsAe469SxWdm8iTTng43S5GneR4hdTDD6jtDBBjqkATciUpN9Rro7MqgEzKgdgEzcYi6g7b%2Bf2fAHm9At4SoYk381ITojFVzVoSla6IbQEne%2Bq%2FPhfpBXgYaxjRmNbgHEO2y%2FNPJCCsO2PyQc46FG2AbDKRX2mq1Q5agDQPi6jBXqDa%2FMmy3JQ8GyVYzbFxylZI4nwup8jwgEokBNRfiOncs2PsBNxZxsBJILpgBz2nrvxFJOo%2FlAAvIXV8HV3UW%2Ff9B%2B&X-Amz-Signature=38fbda5ef8b4906a24b4f14e3de036d8e4baada941081684f9c412a51a4aafee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
