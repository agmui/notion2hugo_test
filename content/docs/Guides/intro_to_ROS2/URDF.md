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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Z6EDZU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICEn29XwY9ttTL61Q0M5ItJZEKj4SO3AXMep3U%2FmbQFvAiEArK1QJodzDD3BvDamYF8R52sr5n7XlM4vjkujwHeqSKMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGun7zNV%2BRdKL8UnsSrcA1GD5llcFl%2FRtspg00CTSpk2b4ydHus0U5LDEvS0SpjoOPVgmGLXu52aM9Au5QL%2FvcoIs%2F9gBep2dnakC0Mhv7vmRUdyqYJtyHDgZHCoKA9BPO6BFpru%2B3HfvI4r6%2B4Cx8Bc52uXCkMiqZAFXqXa6BGg5mJqpkOuCv%2BJGswHayhkaPBw%2BcJiKBIPdL0SwV7vgFv9pEWWzxVF9g5z4u4y8wQAVtLHKMG1fn1sWhZVUiyRoxofdsIbh%2BdVMdzwzqoWYNGMi7tUMsroWCWhpPZmflwmDK2lDoz18FXiW2v32cDvowFgOdLtJ3wCOUbKED67dyQjI9bzqQL1RPyGkRZWjWW2QDDeQk3enSBg74W0UNjUOLJ36p594o52rZFs0GdI9XPVCzUpKHgg4zVgpqudp%2FlDakT5RglXxgR1M%2BLF5zLZdMOqpcXjBN%2FQnojjxpEmMRyFGUxpGd9IQFnTcK4uOudquL939E%2B%2FjnmJWtvkyy6CikEPiQdIrNQWRta3uMsMBxhGK3iPePb1t2KwCUlXAoVH1WLtrOLWkPEiKQAaMqsTgj4NRx9i8%2B6vVmXT14cfhkc3Qv42RX11WEwN1asdAqEk%2F34YaraWz%2Fab1cbbRmhSjpqWKK%2BQ2zDxkXNUMMu1n78GOqUBMKyvK4StTE0%2BPONhjliMdq57aE5d8%2F2sv0aTz5z4DCZpqyZIj6ZOU%2Ft9qdgiATZ1hmr2Qwww2bGBcaYGZHkTPAjI1mZg6PolrQo%2ByNM0Drw%2FD6UeJ0zuFKu6uEeZ1jZPnHbOyDzzMmHaxl8Ew5lCH%2BjfH1uyTLvQl2ohUhYzwry6wr%2Bt8%2FdVS0LBaNKADlJwpTxm9dDz6utJSd9du%2Fgq9ClG85Hy&X-Amz-Signature=78422c4259e0eb9118ad0a28873cc2010a508ec07220080969fa6664e3c9ec62&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Z6EDZU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICEn29XwY9ttTL61Q0M5ItJZEKj4SO3AXMep3U%2FmbQFvAiEArK1QJodzDD3BvDamYF8R52sr5n7XlM4vjkujwHeqSKMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGun7zNV%2BRdKL8UnsSrcA1GD5llcFl%2FRtspg00CTSpk2b4ydHus0U5LDEvS0SpjoOPVgmGLXu52aM9Au5QL%2FvcoIs%2F9gBep2dnakC0Mhv7vmRUdyqYJtyHDgZHCoKA9BPO6BFpru%2B3HfvI4r6%2B4Cx8Bc52uXCkMiqZAFXqXa6BGg5mJqpkOuCv%2BJGswHayhkaPBw%2BcJiKBIPdL0SwV7vgFv9pEWWzxVF9g5z4u4y8wQAVtLHKMG1fn1sWhZVUiyRoxofdsIbh%2BdVMdzwzqoWYNGMi7tUMsroWCWhpPZmflwmDK2lDoz18FXiW2v32cDvowFgOdLtJ3wCOUbKED67dyQjI9bzqQL1RPyGkRZWjWW2QDDeQk3enSBg74W0UNjUOLJ36p594o52rZFs0GdI9XPVCzUpKHgg4zVgpqudp%2FlDakT5RglXxgR1M%2BLF5zLZdMOqpcXjBN%2FQnojjxpEmMRyFGUxpGd9IQFnTcK4uOudquL939E%2B%2FjnmJWtvkyy6CikEPiQdIrNQWRta3uMsMBxhGK3iPePb1t2KwCUlXAoVH1WLtrOLWkPEiKQAaMqsTgj4NRx9i8%2B6vVmXT14cfhkc3Qv42RX11WEwN1asdAqEk%2F34YaraWz%2Fab1cbbRmhSjpqWKK%2BQ2zDxkXNUMMu1n78GOqUBMKyvK4StTE0%2BPONhjliMdq57aE5d8%2F2sv0aTz5z4DCZpqyZIj6ZOU%2Ft9qdgiATZ1hmr2Qwww2bGBcaYGZHkTPAjI1mZg6PolrQo%2ByNM0Drw%2FD6UeJ0zuFKu6uEeZ1jZPnHbOyDzzMmHaxl8Ew5lCH%2BjfH1uyTLvQl2ohUhYzwry6wr%2Bt8%2FdVS0LBaNKADlJwpTxm9dDz6utJSd9du%2Fgq9ClG85Hy&X-Amz-Signature=1a5ebc4018332072d91ad89c9ffa770dbb415cb3db01717bb97e9a99140a7fad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
