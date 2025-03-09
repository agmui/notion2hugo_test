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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJM4MJTC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDoo9PfqlCdWb6%2B6qq%2Ftfee9uzKcjQleqY5SWQeapXiFgIhALPBOaMB7Y5CGkVGuPBagk7s3ApDbnqCN1sIysI87s8SKv8DCG4QABoMNjM3NDIzMTgzODA1IgwBBE7tXFs6pg7RJW4q3AM7jQAvwXZqEaAPlBZP3yntBfgD1HcCZeN9Bo0I2C9%2B8bYvesqL126q8ZrQ701gkCYeKskniWPq5mw1JJuBRMT9w9a2LjuGdBQcSMEgpR25oBMJX7Lx%2BgkUs6Y%2BcjDcQaEVAxOJMfuRv2GjTOLO0Ak1kQUcZZMTbDlVxeBzg6rXmyBxR0ZjO3VD%2FAo6aqYlHMx2tuNNT9d4HoLfXYvGutsW6vXrThWqcQOPyKsOkGGtxOd1akYYIxkuk27cqP30trynBsKsg3RrawiNYx38Mlgz8Met8P%2Fkk%2BLYkkCn9Hitcs3DcQiSqXODgFEHT%2BBq%2BaAlNhmsoz8BaFpgVA0A%2Fqm9gM6ZUsRu0qwPwacVW95ODtcCL7e9KeAd1c6vkAWmmlKUK%2F8b42geTY5SX9XpphKxf%2BMlkQM1XlUHP0UIrzDhoJEl5WGagf%2FEoaWRQf2OIokEYRn%2BzVE5uRK9cXyW%2FswiJSsa7Ond5ROBweAIrx%2B5tWzxCtJoEvsa4fziHazVU8Ksm4mYXzsPAEDuoEnRX3PRDdBF9ZljvapuJgWHfUZDTCOGQdMAIndXiKGYdXdaV9SYy5IctfYj4k562FhETlO1iuIj6J2jo2zekfSinMeJfLbk%2BvOIlUtaTXy1jzDvx7S%2BBjqkAYlmxd5LSu5JkOCQl%2BhFVnz0SEPj%2BlpBRtUOtbEFq%2BJ2iAOmyKd1WCkVRKr%2FcHLto3kqlfZpzZp8RZRjEib1%2F1dLqYHG9PC7YkLwxYmrN81esQPLUIHkxfj8U4fSMmZEpTgPy3jJBNGYL%2Bx%2FEWrTHVRuTQMsTjpns4qD7Z3JnYMXlkbiTSM8IYRofMNPkXE4jfnYwwOE989JXE1A4OkYKxr2VQy5&X-Amz-Signature=ce380f67856f08f3949f1381f5636b3f72cdf762c821ef72d193154ec50c0c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJM4MJTC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDoo9PfqlCdWb6%2B6qq%2Ftfee9uzKcjQleqY5SWQeapXiFgIhALPBOaMB7Y5CGkVGuPBagk7s3ApDbnqCN1sIysI87s8SKv8DCG4QABoMNjM3NDIzMTgzODA1IgwBBE7tXFs6pg7RJW4q3AM7jQAvwXZqEaAPlBZP3yntBfgD1HcCZeN9Bo0I2C9%2B8bYvesqL126q8ZrQ701gkCYeKskniWPq5mw1JJuBRMT9w9a2LjuGdBQcSMEgpR25oBMJX7Lx%2BgkUs6Y%2BcjDcQaEVAxOJMfuRv2GjTOLO0Ak1kQUcZZMTbDlVxeBzg6rXmyBxR0ZjO3VD%2FAo6aqYlHMx2tuNNT9d4HoLfXYvGutsW6vXrThWqcQOPyKsOkGGtxOd1akYYIxkuk27cqP30trynBsKsg3RrawiNYx38Mlgz8Met8P%2Fkk%2BLYkkCn9Hitcs3DcQiSqXODgFEHT%2BBq%2BaAlNhmsoz8BaFpgVA0A%2Fqm9gM6ZUsRu0qwPwacVW95ODtcCL7e9KeAd1c6vkAWmmlKUK%2F8b42geTY5SX9XpphKxf%2BMlkQM1XlUHP0UIrzDhoJEl5WGagf%2FEoaWRQf2OIokEYRn%2BzVE5uRK9cXyW%2FswiJSsa7Ond5ROBweAIrx%2B5tWzxCtJoEvsa4fziHazVU8Ksm4mYXzsPAEDuoEnRX3PRDdBF9ZljvapuJgWHfUZDTCOGQdMAIndXiKGYdXdaV9SYy5IctfYj4k562FhETlO1iuIj6J2jo2zekfSinMeJfLbk%2BvOIlUtaTXy1jzDvx7S%2BBjqkAYlmxd5LSu5JkOCQl%2BhFVnz0SEPj%2BlpBRtUOtbEFq%2BJ2iAOmyKd1WCkVRKr%2FcHLto3kqlfZpzZp8RZRjEib1%2F1dLqYHG9PC7YkLwxYmrN81esQPLUIHkxfj8U4fSMmZEpTgPy3jJBNGYL%2Bx%2FEWrTHVRuTQMsTjpns4qD7Z3JnYMXlkbiTSM8IYRofMNPkXE4jfnYwwOE989JXE1A4OkYKxr2VQy5&X-Amz-Signature=8382f2ba312968ea3286f46ddb2c9e07a059de2a1d24a4468f44ab077959f94b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
