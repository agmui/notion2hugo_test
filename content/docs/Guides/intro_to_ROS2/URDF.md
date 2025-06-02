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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VHB63Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFKbsSKI4MCicTc0dlxNrOb1kLp8GymzQxlCPG0pdLGtAiAgkR%2BTQqmwdyvWJ8tV0fHvRQtH%2BGl6CZTMVrV749xPsCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwPMjZ4ALX2%2Bhy3DlKtwDTKeATMPGOhj2mGwZuX3S3qALgjERpSEa16LH6%2B0pYba7r83ihnA2GjfomR9dsNxFQeZ5IWWJ6CBUOj5%2FULsdzizjJ4sUYmbUX9mZT6fQAF%2F3qPWfnF%2B49HjpplwryMXbajl7QKmKLhGoOoWoV%2FaJTMaUOnp27weDEnBogdU8jALC2ivF%2FIk7bqt0cAfMC%2F6u0iqtD8h6y4e2CfTxdJRhbktH9WBFkAesHM8FY9DSdgrJ6dRAOddHtfBZa%2FPP77xQ1kiA19m%2BREefsXHmEkqi8pa20lV4Zyah9iPX8AehLGovwvelT1Gq0DwLA%2FbFYW9Ta8hyQtjXxbZu7kABHAGW6drst4oD1uIz8avQNX2cYhJM%2BZyR0jczcA%2Bqwm9QbUIODFLYdFlyQceqqNzYoYUtmPWOoDxGwmoiV9Uqc6k%2FQzVMBwHi9KlSDZBpG9sCGOjbEY7oAhmpZp0yoQsVdgOzA%2BIp1XQbkf7%2BoMIVv6y94iaH%2FADvaKQMC5Xx1rB8f%2Fngv17mDtDuaO070SWwT9RroL8GbMC%2F4bPvalKV%2Bmufpa4%2F8Yx9PcD%2F7khZxCMpsALXMCQVCfvLDd2yktCn0NhWOhbBXf82fMNY3x6eoAF99tqi7uI86IL3H4oSO9IwiJH1wQY6pgEHJf%2FESWDkTumjTZ0l5fGpbDw9UYTnJymsjGcGLmBzIEzX7BnncmJT1cFeSOCdTLFyiC8tN6pX7umeFXFERAjrb5TpzO8t4iFfwn1oKi38wR514uUxweEVhr2n5buWmVaTjfoivDDnmWnIri2Z57SBmcJxuR5eVde46SIk03pf9Pkit8wPqe2xeHqGO6379kFaiaUYYlGl%2F38eXrMsjnMAlgEycJYE&X-Amz-Signature=08ab0b5f502bceae3cbc51a62b9d1f0c816b0de49a6fe973ee8f2c15642099b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VHB63Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFKbsSKI4MCicTc0dlxNrOb1kLp8GymzQxlCPG0pdLGtAiAgkR%2BTQqmwdyvWJ8tV0fHvRQtH%2BGl6CZTMVrV749xPsCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwPMjZ4ALX2%2Bhy3DlKtwDTKeATMPGOhj2mGwZuX3S3qALgjERpSEa16LH6%2B0pYba7r83ihnA2GjfomR9dsNxFQeZ5IWWJ6CBUOj5%2FULsdzizjJ4sUYmbUX9mZT6fQAF%2F3qPWfnF%2B49HjpplwryMXbajl7QKmKLhGoOoWoV%2FaJTMaUOnp27weDEnBogdU8jALC2ivF%2FIk7bqt0cAfMC%2F6u0iqtD8h6y4e2CfTxdJRhbktH9WBFkAesHM8FY9DSdgrJ6dRAOddHtfBZa%2FPP77xQ1kiA19m%2BREefsXHmEkqi8pa20lV4Zyah9iPX8AehLGovwvelT1Gq0DwLA%2FbFYW9Ta8hyQtjXxbZu7kABHAGW6drst4oD1uIz8avQNX2cYhJM%2BZyR0jczcA%2Bqwm9QbUIODFLYdFlyQceqqNzYoYUtmPWOoDxGwmoiV9Uqc6k%2FQzVMBwHi9KlSDZBpG9sCGOjbEY7oAhmpZp0yoQsVdgOzA%2BIp1XQbkf7%2BoMIVv6y94iaH%2FADvaKQMC5Xx1rB8f%2Fngv17mDtDuaO070SWwT9RroL8GbMC%2F4bPvalKV%2Bmufpa4%2F8Yx9PcD%2F7khZxCMpsALXMCQVCfvLDd2yktCn0NhWOhbBXf82fMNY3x6eoAF99tqi7uI86IL3H4oSO9IwiJH1wQY6pgEHJf%2FESWDkTumjTZ0l5fGpbDw9UYTnJymsjGcGLmBzIEzX7BnncmJT1cFeSOCdTLFyiC8tN6pX7umeFXFERAjrb5TpzO8t4iFfwn1oKi38wR514uUxweEVhr2n5buWmVaTjfoivDDnmWnIri2Z57SBmcJxuR5eVde46SIk03pf9Pkit8wPqe2xeHqGO6379kFaiaUYYlGl%2F38eXrMsjnMAlgEycJYE&X-Amz-Signature=bd267679ebfb45d26341942ec437426cd6bac5b501d49c98c53cf333450ae94d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
