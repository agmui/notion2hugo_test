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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKBEV5B%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBjURm7g20tJSzBlsTznITwV%2BPcgXH82BbssIaSTigQXAiBpxuisaMRV3STvrw95IeHzuyQn%2FAZh5i7ZBKsHiMKrvCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BGkMPyqRGhD36RhgKtwD5zF7QHtTyS3ItzTAoSdqxuEwQoUeX0BaOY9zx8u775MtGwnKS3pXvz1aKfsnHaqlPXlkfR6LzkLEQ3tzlKA6ljkmxoOiuhQbuvrAK1CaCsH0mX1nLAoGz%2FD3k%2F8J%2BDcg2l0QAgbmLnhfiIHJBOLh8e8Ho%2BUOnWcfdbu46SiuOdBtWHlxFyerhfrmF00BPdKlb1xHaljU8PjwxHuQeMUdAyFrGi6LOHLG7EOEC4c25rApaV8VI9fiVO4kIV0Dvw%2FsepFL6i9lU%2F%2B91eemDdnGkC6vCaHdfXWrA4U5yTXR3%2Bffzgb8thnmD6yQilF3Iqs2xlpQ%2FJh4U5bRtM3sQeV54Xlh2np7%2F2CDxy%2FspBFwq9zyn6PNtK3MiH3JtEE8%2FW5LOG1YJspUcM4bIaNtpTF1OB0Otk0vO5Pat4f3f%2F4zY3ACYLz9Nlwr3m3x24LC5uHf3Z0LMw4qrr3Un9WxV%2Fvaci6RkAyMj58iYMB41FMkmtNeThv3WhOU9XMX3p%2FSHh7Txv6QC9xv8mFmZ3x62Ctp32HYKzvaKEkfBUr6S5y78IV03KgaP1qD31RZ4zuZm%2BevdVqT%2F4I8vJPGsrctu60aGholgDMzgjSFlDiHJFWamfiKvwkNUBMveZmDaZcwhuyvvwY6pgGz07GAzCqP4ZOQQfcNUzxB9yIUZ34WZdWYQi0vHr3aziSr7rz7fHUS2F7NsDGwqHvuSHObbvUULwUtXBTRJVu92KxCQoblg988ixRup8etjQEQIUfURz5lGsL%2BS3bis6b8LoyUiJAzxtYrBnNCS87gj6qXi8R49mpR%2FR2WEmzYddVFkNBBgKRtfJhyzNaW%2FVDh8Em%2Bxe5MxBAAvEmRfO6S7pknA1U7&X-Amz-Signature=6e2b1eda3a5eda544ff03a101f72cf6c075cbbe3b8b98d8383a822c5b5a5ed8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKBEV5B%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBjURm7g20tJSzBlsTznITwV%2BPcgXH82BbssIaSTigQXAiBpxuisaMRV3STvrw95IeHzuyQn%2FAZh5i7ZBKsHiMKrvCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BGkMPyqRGhD36RhgKtwD5zF7QHtTyS3ItzTAoSdqxuEwQoUeX0BaOY9zx8u775MtGwnKS3pXvz1aKfsnHaqlPXlkfR6LzkLEQ3tzlKA6ljkmxoOiuhQbuvrAK1CaCsH0mX1nLAoGz%2FD3k%2F8J%2BDcg2l0QAgbmLnhfiIHJBOLh8e8Ho%2BUOnWcfdbu46SiuOdBtWHlxFyerhfrmF00BPdKlb1xHaljU8PjwxHuQeMUdAyFrGi6LOHLG7EOEC4c25rApaV8VI9fiVO4kIV0Dvw%2FsepFL6i9lU%2F%2B91eemDdnGkC6vCaHdfXWrA4U5yTXR3%2Bffzgb8thnmD6yQilF3Iqs2xlpQ%2FJh4U5bRtM3sQeV54Xlh2np7%2F2CDxy%2FspBFwq9zyn6PNtK3MiH3JtEE8%2FW5LOG1YJspUcM4bIaNtpTF1OB0Otk0vO5Pat4f3f%2F4zY3ACYLz9Nlwr3m3x24LC5uHf3Z0LMw4qrr3Un9WxV%2Fvaci6RkAyMj58iYMB41FMkmtNeThv3WhOU9XMX3p%2FSHh7Txv6QC9xv8mFmZ3x62Ctp32HYKzvaKEkfBUr6S5y78IV03KgaP1qD31RZ4zuZm%2BevdVqT%2F4I8vJPGsrctu60aGholgDMzgjSFlDiHJFWamfiKvwkNUBMveZmDaZcwhuyvvwY6pgGz07GAzCqP4ZOQQfcNUzxB9yIUZ34WZdWYQi0vHr3aziSr7rz7fHUS2F7NsDGwqHvuSHObbvUULwUtXBTRJVu92KxCQoblg988ixRup8etjQEQIUfURz5lGsL%2BS3bis6b8LoyUiJAzxtYrBnNCS87gj6qXi8R49mpR%2FR2WEmzYddVFkNBBgKRtfJhyzNaW%2FVDh8Em%2Bxe5MxBAAvEmRfO6S7pknA1U7&X-Amz-Signature=330704dab8e040934c072b3630e7fb014aa3ee117713ecbb9b714932a31bc0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
