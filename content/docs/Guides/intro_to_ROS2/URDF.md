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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XO76QN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG88MIZv%2Ftfkx2mB%2BMlRic6S5MJrcmW1o8Ti%2FL4r2xbYAiB50Ir%2Bojp%2F5YGYmzal9QW99BKtRKEcWRR%2BjzGTek0xEiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC3otnaaFDbkaPHWxKtwDIVaFmGLyi2QwtZfwkHNDMtfA%2BpOLvac%2FzsIamOOg9b9igMlZbHN7nXNWGlMNUfk%2FbbanjlUktWG4y0xPS8db8%2FkXEgqBspoHKuQDXtSqqmfQrUpbcWFyO0rtDQfONWM1GWWsQwZapPFcVlbHUSMRBY9z9nD7XDZloo5wA5k%2Bk9s5pBvd7sTWTKIDmkk%2FRi6X2tyu%2BqG7bNTLHV%2BGt%2F%2Bt%2BWaV6T%2F8ZhTUts%2BkhPwF6aM6%2BncQKf4p4X6y%2BVeZJ5dkjgVPFAGA85DfApVqnJ0VRqRNXrNBTmt55DsBpYDJjnGZUiI767JATXAF4tslSlCDtofIcSDTu6Q%2FEXqNG3l%2BjPf1rX000TY18%2F5Gr9tmk6nipsjasU0qUFqSO%2FPaWZl0vVZg1UL%2F9X27X%2FyHZAxZ7y8J4JmsOyRFiLf4TIXxo%2B%2BhHaC34GVX0cxVxrCt2BTXP5YaFeP7m8ud1P2TbwASn1h6VeUqdC8BQ%2BvF6tmNsf7X2ntJQHmDf3xfMhNH4d51xWYGNX2riD1ENkeHHnJIOvPJ9coEIBA1jTAqGr%2BjHgOiCJw0Zam8eTjWMFJ29XVPKhtRJnD7S01ZoQ8Ewkla6QDXhTf3lqVFKTc%2B9azaaIj0Kf2vuLylCbusWX8ws9zlwQY6pgEX7ji%2B2LRvwQClcI1sFw07ln3FIpiQ3zPpzee%2F3a3NaXLe1xKB2rbPnIrzKP3LT3S1iHPQPlwv3cMpgZsDVeFig06o1zWkoM%2FrElQJLr7%2BmRdKehS8CxxYuS5M5oWZLDzHdCHSJ%2B5P1EjDNfTw9Am1J6NhnsEA8OT7E5a%2FioImp7j5lg8FazFYSa0oTOHoBdTPevzLbXNVVYbqguQvxd0kJ86ng0D2&X-Amz-Signature=fb7b3f4872652a46a2ca3dd8b9bee43798d543412c98e78bf9491e0ee9559034&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XO76QN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG88MIZv%2Ftfkx2mB%2BMlRic6S5MJrcmW1o8Ti%2FL4r2xbYAiB50Ir%2Bojp%2F5YGYmzal9QW99BKtRKEcWRR%2BjzGTek0xEiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC3otnaaFDbkaPHWxKtwDIVaFmGLyi2QwtZfwkHNDMtfA%2BpOLvac%2FzsIamOOg9b9igMlZbHN7nXNWGlMNUfk%2FbbanjlUktWG4y0xPS8db8%2FkXEgqBspoHKuQDXtSqqmfQrUpbcWFyO0rtDQfONWM1GWWsQwZapPFcVlbHUSMRBY9z9nD7XDZloo5wA5k%2Bk9s5pBvd7sTWTKIDmkk%2FRi6X2tyu%2BqG7bNTLHV%2BGt%2F%2Bt%2BWaV6T%2F8ZhTUts%2BkhPwF6aM6%2BncQKf4p4X6y%2BVeZJ5dkjgVPFAGA85DfApVqnJ0VRqRNXrNBTmt55DsBpYDJjnGZUiI767JATXAF4tslSlCDtofIcSDTu6Q%2FEXqNG3l%2BjPf1rX000TY18%2F5Gr9tmk6nipsjasU0qUFqSO%2FPaWZl0vVZg1UL%2F9X27X%2FyHZAxZ7y8J4JmsOyRFiLf4TIXxo%2B%2BhHaC34GVX0cxVxrCt2BTXP5YaFeP7m8ud1P2TbwASn1h6VeUqdC8BQ%2BvF6tmNsf7X2ntJQHmDf3xfMhNH4d51xWYGNX2riD1ENkeHHnJIOvPJ9coEIBA1jTAqGr%2BjHgOiCJw0Zam8eTjWMFJ29XVPKhtRJnD7S01ZoQ8Ewkla6QDXhTf3lqVFKTc%2B9azaaIj0Kf2vuLylCbusWX8ws9zlwQY6pgEX7ji%2B2LRvwQClcI1sFw07ln3FIpiQ3zPpzee%2F3a3NaXLe1xKB2rbPnIrzKP3LT3S1iHPQPlwv3cMpgZsDVeFig06o1zWkoM%2FrElQJLr7%2BmRdKehS8CxxYuS5M5oWZLDzHdCHSJ%2B5P1EjDNfTw9Am1J6NhnsEA8OT7E5a%2FioImp7j5lg8FazFYSa0oTOHoBdTPevzLbXNVVYbqguQvxd0kJ86ng0D2&X-Amz-Signature=f655f3df215a1edab8348e0a19d9b4d269484334c1f13bf869a04c4eedb371d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
