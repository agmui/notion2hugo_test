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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSN4GP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2LD3AR11AoQY6midSJvmzLG09XjTzKgUsimFD6VE1bAiEA1xSYMvUAa1ZpNKQ41KMYs3LGvfes2Urhf6r%2FdSj0PW0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoOqsodpXUjy8778SrcA6nJc24twQl2dmH6SSh0JNwsxHdDCtBxkhMkBFyxyl4N2TyUcjvnE0flIFXhKJysTrZtvg8ScJBenNfxGwrdQSncGoi7wQYzqAbkozJss0zXlx1Td5r68fd7OBoZcZkJqnjFc7ILmlbrgiItASPRVUBADJYFJttenV5ptu4AlaMTxFTbyRlHhx7h%2BIfEj4LM%2BS7PO51FKs%2FIT27KvOjm7LegC8%2Fi%2Bd5P9nz2UonQCey0n9AkAxj2wcz4rC50VVoGkopnoSXbmoXWh65j2LoRazlcyiryZCsDg1BkzB%2FPo68KQZnXmMj82AoVuBAjJ2BdFf19X5RalnYcV2wVvTzW4yti05v1vmiVx%2Fzr6pnkIQKPujVdV9Wqkcu38P%2BtS3RknzwacYX%2Fn5FPHAvnprbMMuKrdNeElJiJSZpQNSiuDxHKqiJbRBVtrMAXWjLmCC9AIhAIobqAgkC8sJtB0cq1OSCkO%2BeZkJcd2Fgss4BVWxgjkLZJi1KjatOSXVZ1Us6pB1XQ65mR8wdkJbphxkPbUKeXZiRRw%2FZ6lk2COhxdF1odLWehq%2FnCZ6vj9QQMBmHfg7EIHPRLp0%2FU8d7d7biq6GMDE3XVWZjx8583QQ0uxP1b4QXyP%2FOBWSDTN%2FapMPv4lL4GOqUBfkHfHUzsecgNmjXDCI24Xuse40KQSTJoAT%2BLc0NmHDQlNneQwJ2ESod5MJqGCtejCjIa7GJsVM%2FQakIwuRo9c4RGnjdf1m%2B3249EFv9prqVdSKfLjNRaLnDLOXfdsddoaDSJB63q15dTP562d7BQuu7amrllPujG7wfxPCtB8gt9z%2FjR%2BT%2BSCVu2NKJyaXEX%2B%2FI7RkfBRb%2BtsvV5%2Fm3SBIMWSdzn&X-Amz-Signature=5d7713c09724400730850696cb3f5946ae7e543eb0e17c2fc3b9e97405b338df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSN4GP2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2LD3AR11AoQY6midSJvmzLG09XjTzKgUsimFD6VE1bAiEA1xSYMvUAa1ZpNKQ41KMYs3LGvfes2Urhf6r%2FdSj0PW0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoOqsodpXUjy8778SrcA6nJc24twQl2dmH6SSh0JNwsxHdDCtBxkhMkBFyxyl4N2TyUcjvnE0flIFXhKJysTrZtvg8ScJBenNfxGwrdQSncGoi7wQYzqAbkozJss0zXlx1Td5r68fd7OBoZcZkJqnjFc7ILmlbrgiItASPRVUBADJYFJttenV5ptu4AlaMTxFTbyRlHhx7h%2BIfEj4LM%2BS7PO51FKs%2FIT27KvOjm7LegC8%2Fi%2Bd5P9nz2UonQCey0n9AkAxj2wcz4rC50VVoGkopnoSXbmoXWh65j2LoRazlcyiryZCsDg1BkzB%2FPo68KQZnXmMj82AoVuBAjJ2BdFf19X5RalnYcV2wVvTzW4yti05v1vmiVx%2Fzr6pnkIQKPujVdV9Wqkcu38P%2BtS3RknzwacYX%2Fn5FPHAvnprbMMuKrdNeElJiJSZpQNSiuDxHKqiJbRBVtrMAXWjLmCC9AIhAIobqAgkC8sJtB0cq1OSCkO%2BeZkJcd2Fgss4BVWxgjkLZJi1KjatOSXVZ1Us6pB1XQ65mR8wdkJbphxkPbUKeXZiRRw%2FZ6lk2COhxdF1odLWehq%2FnCZ6vj9QQMBmHfg7EIHPRLp0%2FU8d7d7biq6GMDE3XVWZjx8583QQ0uxP1b4QXyP%2FOBWSDTN%2FapMPv4lL4GOqUBfkHfHUzsecgNmjXDCI24Xuse40KQSTJoAT%2BLc0NmHDQlNneQwJ2ESod5MJqGCtejCjIa7GJsVM%2FQakIwuRo9c4RGnjdf1m%2B3249EFv9prqVdSKfLjNRaLnDLOXfdsddoaDSJB63q15dTP562d7BQuu7amrllPujG7wfxPCtB8gt9z%2FjR%2BT%2BSCVu2NKJyaXEX%2B%2FI7RkfBRb%2BtsvV5%2Fm3SBIMWSdzn&X-Amz-Signature=a78ddf9bce2fa853c0693420fd61c3f3e2540a6012f574ba26bce8146c6918e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
