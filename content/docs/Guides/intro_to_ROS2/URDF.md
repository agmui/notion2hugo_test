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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRTQWRE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICkz414B9VmKs72In8ISpWVj3m1HCzEJ3MRQoJLRU1m2AiAdiJUItVQsgr%2FA8cZrgH%2Bd6XzrU%2FlfHFqf3nbT4gb9NCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMe3Okj2POEjYBniuKtwDB%2FwOl2Tu0b16yEr3JY%2Fv6ixOO9xbkfXPtCkdTUHGBEb2AxtDWuJRH3%2Fq8mKtEaJJ6aw%2B9rUulkntriiKB8GYhJgiwI2d8tbiOCw8gohn6TjVefWClT27aup7WdNW4PFWuzltaTjQ6vKcRW64yVKj0w2dzHczKjvkUF2EgBn4z0HxVQ8dUCsCqqA%2F3NkhcgV88L4CHLQpVAS%2BOZNLbPLedNmkFFqlZ8iiQYnQ2u1JhF4cthr2VSeGjG7E9lMScxPu2Jf3vbb9vU6xbNTcq3TA811KgVa2Vopu2WEuEF7fe%2Ftw%2FU%2Fsm%2F6Ivv9J72gFZD6vcqkWuN7fdEfkcUJv0OALynzV3Q1N0DdreLMK5zii8fkfqO23qVNY9kFpnM6J5o%2BmDBzFnNCWr1ciw4H9iK75qb7CChsnMujUgMORi2IEDLYqHtOyaVPaqdl2qly9Y%2BIkb00JzQgCPT%2FmHEraU4CbHtdqdpqiJj4Lph5JuOueZj%2FqsdGY%2FKbRhY%2F1kyWQl17X24jRtCFljIaefcw8494qBwF1r7xfFXZAuiEideRB4xuh9HOgeWxcb43nedpch4eTUBaR5ptDTSVpRqWBNcFa9JcEnd6p%2FLJqr6Qz9KWMe8nm78XajEETEAI%2BO9EwvYDzwQY6pgFUXviRJwKXJxZVtjDUTAV5HrkgiZdLjNKgil4mCPdW%2FXe41BI%2F6UZw%2FXxhIB0rbKpvD2zL%2Fzy97gPQt3tOTcEOYVJBs6Sx8Db%2F%2BG8air8Ml19fKytIw9GZbrdcVoVSFrOZWxqWX9fobU9Sn%2BvP0UmxpnbSNwgeiUnEmqjs5h%2B29xbcKEwR%2BKfR3rrSXU%2FDbp1wgyQCk7x791S17SovnRyMQmYvDkkC&X-Amz-Signature=30dd6768bfcdf2a7f7504672666758585dc36f5019e53c1ffec9724bd39a23dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRTQWRE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICkz414B9VmKs72In8ISpWVj3m1HCzEJ3MRQoJLRU1m2AiAdiJUItVQsgr%2FA8cZrgH%2Bd6XzrU%2FlfHFqf3nbT4gb9NCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMe3Okj2POEjYBniuKtwDB%2FwOl2Tu0b16yEr3JY%2Fv6ixOO9xbkfXPtCkdTUHGBEb2AxtDWuJRH3%2Fq8mKtEaJJ6aw%2B9rUulkntriiKB8GYhJgiwI2d8tbiOCw8gohn6TjVefWClT27aup7WdNW4PFWuzltaTjQ6vKcRW64yVKj0w2dzHczKjvkUF2EgBn4z0HxVQ8dUCsCqqA%2F3NkhcgV88L4CHLQpVAS%2BOZNLbPLedNmkFFqlZ8iiQYnQ2u1JhF4cthr2VSeGjG7E9lMScxPu2Jf3vbb9vU6xbNTcq3TA811KgVa2Vopu2WEuEF7fe%2Ftw%2FU%2Fsm%2F6Ivv9J72gFZD6vcqkWuN7fdEfkcUJv0OALynzV3Q1N0DdreLMK5zii8fkfqO23qVNY9kFpnM6J5o%2BmDBzFnNCWr1ciw4H9iK75qb7CChsnMujUgMORi2IEDLYqHtOyaVPaqdl2qly9Y%2BIkb00JzQgCPT%2FmHEraU4CbHtdqdpqiJj4Lph5JuOueZj%2FqsdGY%2FKbRhY%2F1kyWQl17X24jRtCFljIaefcw8494qBwF1r7xfFXZAuiEideRB4xuh9HOgeWxcb43nedpch4eTUBaR5ptDTSVpRqWBNcFa9JcEnd6p%2FLJqr6Qz9KWMe8nm78XajEETEAI%2BO9EwvYDzwQY6pgFUXviRJwKXJxZVtjDUTAV5HrkgiZdLjNKgil4mCPdW%2FXe41BI%2F6UZw%2FXxhIB0rbKpvD2zL%2Fzy97gPQt3tOTcEOYVJBs6Sx8Db%2F%2BG8air8Ml19fKytIw9GZbrdcVoVSFrOZWxqWX9fobU9Sn%2BvP0UmxpnbSNwgeiUnEmqjs5h%2B29xbcKEwR%2BKfR3rrSXU%2FDbp1wgyQCk7x791S17SovnRyMQmYvDkkC&X-Amz-Signature=3d9a085a2d5861ab8a5e3355e870de4da3fae9f33d276206c86e8f943e9d73a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
