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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMIRRTL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCkRNFRpE8kCiTacofsUplkPNzYufCeI2BNTeMd8mfsTQIhANQ%2Bkj6fTO0311O28EP18pJfRt6mv5mh7hHEBxA1KPl8KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzLtueNpNhrD2aGDkq3AMDBYC3R7GSRT2iXhgG3dWvRIVbcF0KBHT5BQBkjVINpp6QZ2IV9y55W6QwBGuauOHuG0C%2B4lN2GtISWdsJ2uGOf%2BSGDQ%2FUoHQMVTRUEQf3XPEyvnvpIWcphvEgD2%2FySQALbcGayepjsjAjhk2zRal%2F%2FmIQLPFdKb6vch767ZV2Nc3rKLHf78O3avtFL5AWYBT%2BS3gLeOr%2FK1igxOLWcOcDA4CI9hzCVF45JUuvgZNe72e%2FwgeBwnBecURJnQGGxgVfY8wbBNBVcG52fRbEXysSqD3h%2BURel3D%2F0688TW6aZnBhf8zmcQrQkanCf5eFgisdoT4M4KQZ5XU6rV2JRrwXp1nbUt4PHURMGRG2ZXZuwkGW7IaZPuFLMR7G%2B28yMFFRdSc%2Fxj3x3Woj9F6jjiKjW%2Bs0I7BGVg9zoJkdOrOkdIFteNf5VTNp7j7glNA8hvv0QTl8Ydzq5gBJbQAN%2BvI55HsDuC1FeOx%2FtjetkqQBioHsNNY4CLuD8TykwZoekAXnUn5%2BK4Dco7yPSMsyw60ozcDAM%2FqfExicaJ4bPp20HaS03saQEdVQfZvT0n%2Bb%2FlPGEwwxOXzDzAHfdXBcy75ynXjWoFuiUIMU9Tzg1%2F54q0kXQvfaYrYmbMUrKzDoyM3ABjqkAbsraBd%2Ftvqz%2BvkAqqSIJM4%2BDSl6GflDNvlrkSgSvzn2QqtXliTN4AO5iriETpFc%2FSX%2B2q8gkqg6%2F%2Fkqv%2FPtZ%2B4clL5q5TQVNY3e8pD38k%2BQZ9cXzUYK2HJe%2BveZBpy84uoPPAMwiaNhB3ajJQg5PIha%2B2SXPTEY8EWT1nPJiAWZGZFAJWZQ753unHn6krdE877P6oMK9nwZKs%2FiNRYiFRZZSh15&X-Amz-Signature=b540d68540e2d9ade77d85bdb2de3920e6245587e517b71c191d5621fd36af24&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMIRRTL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCkRNFRpE8kCiTacofsUplkPNzYufCeI2BNTeMd8mfsTQIhANQ%2Bkj6fTO0311O28EP18pJfRt6mv5mh7hHEBxA1KPl8KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzLtueNpNhrD2aGDkq3AMDBYC3R7GSRT2iXhgG3dWvRIVbcF0KBHT5BQBkjVINpp6QZ2IV9y55W6QwBGuauOHuG0C%2B4lN2GtISWdsJ2uGOf%2BSGDQ%2FUoHQMVTRUEQf3XPEyvnvpIWcphvEgD2%2FySQALbcGayepjsjAjhk2zRal%2F%2FmIQLPFdKb6vch767ZV2Nc3rKLHf78O3avtFL5AWYBT%2BS3gLeOr%2FK1igxOLWcOcDA4CI9hzCVF45JUuvgZNe72e%2FwgeBwnBecURJnQGGxgVfY8wbBNBVcG52fRbEXysSqD3h%2BURel3D%2F0688TW6aZnBhf8zmcQrQkanCf5eFgisdoT4M4KQZ5XU6rV2JRrwXp1nbUt4PHURMGRG2ZXZuwkGW7IaZPuFLMR7G%2B28yMFFRdSc%2Fxj3x3Woj9F6jjiKjW%2Bs0I7BGVg9zoJkdOrOkdIFteNf5VTNp7j7glNA8hvv0QTl8Ydzq5gBJbQAN%2BvI55HsDuC1FeOx%2FtjetkqQBioHsNNY4CLuD8TykwZoekAXnUn5%2BK4Dco7yPSMsyw60ozcDAM%2FqfExicaJ4bPp20HaS03saQEdVQfZvT0n%2Bb%2FlPGEwwxOXzDzAHfdXBcy75ynXjWoFuiUIMU9Tzg1%2F54q0kXQvfaYrYmbMUrKzDoyM3ABjqkAbsraBd%2Ftvqz%2BvkAqqSIJM4%2BDSl6GflDNvlrkSgSvzn2QqtXliTN4AO5iriETpFc%2FSX%2B2q8gkqg6%2F%2Fkqv%2FPtZ%2B4clL5q5TQVNY3e8pD38k%2BQZ9cXzUYK2HJe%2BveZBpy84uoPPAMwiaNhB3ajJQg5PIha%2B2SXPTEY8EWT1nPJiAWZGZFAJWZQ753unHn6krdE877P6oMK9nwZKs%2FiNRYiFRZZSh15&X-Amz-Signature=3ca05fd2827635d48793c2bbe84c303b0488cc8bb4bca615db33774d5a1c5737&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
