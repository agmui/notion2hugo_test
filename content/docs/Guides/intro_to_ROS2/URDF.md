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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHE3COHT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF21r%2FzJrWhYnxENNCgtIJ3Ws2ahO%2F6SZj2irmt4Zx8XAiAyYQLbyr2YNA175w5gg3YCts%2B%2BUV3QisNlnRqUZVviCyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9antaiW4tG74p%2FvPKtwDUTnCGbgIlfa7LlEbM9kKqqYs4wVIit8m5mCRpE38Gwa5IiEE5160ZhwkMEJvfelTNkGrwGbJvJw8blnbte5Ar583dF32tLu3%2Bs9BoYOi8MtSxKz8wo2Zn46YuVVRcYsq6P9r3XMTaZPHjtFr%2FTNiAX8iRKRHxVLarYdC9Tzq%2BfptMuRkNiwBXLMN28aqkZAYC5DhVPPdbbzsZBRKT2sa7ISg7h7mb3Q7AwrkebqYDSaLnfL30LjLQ2jbdmYVcMkuij3Mgo%2BbUYs02%2BjXHPWbUkXvL7ifeTK0oWQ6QWSZF2yB%2BURNUIaUENqiIkxtIR4se8QUHSHlj2zrklJKHwjozfIdZn1tSVBUqlKo%2F2xnGG0o4FR9GOjV3LMKOO9rZvY1V7RmmL2UllRQ3y7SliG3fAIDSItg5nUf%2F4HuTEgNHsxz6UQRUYErArljf3LQxSCAixJw7RMgjD1dkM6aBWF%2BdN%2BqTyMMV3gP%2BLPiGCDYfqAvkkn5%2F6cz%2FHZ%2FCuVoJtqgXC6U7ZFB6FCcy3LwMqe%2FAlHMRfj3I5%2Bu0gaCb5MoWUqgUtaX9PQGWxBs%2Fz3lqwG3ow7pa4p1i%2FR7p7EO6eLkHAgBSHbQDLLkgC2eTDj8bNhGrxzcSdCV%2BWhG8zEwxNHBwAY6pgG%2Bj5LvQ4zmbWXUVMwg1fbBP0yXOpCsTgTNyqiJXXNDSd6Sec46L%2Bt23dJYM45m4HCF0yC8menKdBieFnvSsurFJHQRmnN%2FJ0YE4AZqJfGSRFvdOvMgV89czaQZlQ7e6Bx7YNp0hQWD6LKRdEvNjBEwmUCP0%2B%2BvkV2zr5qaOi12MF4O82rddOAJE7nltcb%2Fao4i5AisvtRjigSOX2ivtYV1EFx6%2BFzw&X-Amz-Signature=7320d97cfc18c7cf9d8758c0eebc7cdb2a17747561228f8433c570275e900d61&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHE3COHT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF21r%2FzJrWhYnxENNCgtIJ3Ws2ahO%2F6SZj2irmt4Zx8XAiAyYQLbyr2YNA175w5gg3YCts%2B%2BUV3QisNlnRqUZVviCyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9antaiW4tG74p%2FvPKtwDUTnCGbgIlfa7LlEbM9kKqqYs4wVIit8m5mCRpE38Gwa5IiEE5160ZhwkMEJvfelTNkGrwGbJvJw8blnbte5Ar583dF32tLu3%2Bs9BoYOi8MtSxKz8wo2Zn46YuVVRcYsq6P9r3XMTaZPHjtFr%2FTNiAX8iRKRHxVLarYdC9Tzq%2BfptMuRkNiwBXLMN28aqkZAYC5DhVPPdbbzsZBRKT2sa7ISg7h7mb3Q7AwrkebqYDSaLnfL30LjLQ2jbdmYVcMkuij3Mgo%2BbUYs02%2BjXHPWbUkXvL7ifeTK0oWQ6QWSZF2yB%2BURNUIaUENqiIkxtIR4se8QUHSHlj2zrklJKHwjozfIdZn1tSVBUqlKo%2F2xnGG0o4FR9GOjV3LMKOO9rZvY1V7RmmL2UllRQ3y7SliG3fAIDSItg5nUf%2F4HuTEgNHsxz6UQRUYErArljf3LQxSCAixJw7RMgjD1dkM6aBWF%2BdN%2BqTyMMV3gP%2BLPiGCDYfqAvkkn5%2F6cz%2FHZ%2FCuVoJtqgXC6U7ZFB6FCcy3LwMqe%2FAlHMRfj3I5%2Bu0gaCb5MoWUqgUtaX9PQGWxBs%2Fz3lqwG3ow7pa4p1i%2FR7p7EO6eLkHAgBSHbQDLLkgC2eTDj8bNhGrxzcSdCV%2BWhG8zEwxNHBwAY6pgG%2Bj5LvQ4zmbWXUVMwg1fbBP0yXOpCsTgTNyqiJXXNDSd6Sec46L%2Bt23dJYM45m4HCF0yC8menKdBieFnvSsurFJHQRmnN%2FJ0YE4AZqJfGSRFvdOvMgV89czaQZlQ7e6Bx7YNp0hQWD6LKRdEvNjBEwmUCP0%2B%2BvkV2zr5qaOi12MF4O82rddOAJE7nltcb%2Fao4i5AisvtRjigSOX2ivtYV1EFx6%2BFzw&X-Amz-Signature=9eca64b35d52861b7fe4a52e158d94aac5de72396d6dcd21448ca1574c71d6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
