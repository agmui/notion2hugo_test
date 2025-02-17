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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSWXZ3O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEooYRqvE4BMo3MryNvZCeTQ0FqX37q1T7IrkbSTkurFAiAD5YQGqwir2mj8aI5AMeSZShMU03JXiersrvGeAs4aASr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMvHUaYYlXI9Z2y6OSKtwD9y6Ig5hU4tELZAXM7CHsA7jkZZvRs3lC0Fhp948AtvC%2BwqGm%2FNrsrJ5%2FBAxN6H5SpvLiZfj8awNvf4j0duLD0v55klvURXkcHeEs22coJINUi3oUcB2m1o7btNCKPGbKAqhP0kPtV3YM5uK6w8wtkZQOpWN2S3erYqT%2BWE0jGgb1H3Wsr8AIYFcAbc5h4voDvP64G3FvHX0n4AKDwUuGcoNI0h7%2FLUxrn5tZ7G5wXai4pHdVw6Y7cr6BikUSrQ6j8nod85Jx0dZ5SuLh2dirpfzDbp8uV29dLElfQxbObjEyvobRdbRUic3%2FQj4yVZHYieQfWSfxAz8uOMYa6uO6jI8vU%2FqDzDadAlM1XZB8AG7mirlFt4fy5pV51WBx7vrgrZSqckYRcbzi3N4cCHF%2BcQvUhVP9z0JriEjw3%2FgWc4oyZpJJRIjdbQ%2FPkLUW33u4q0dQh527hfmWWckrK%2F1u1gS0pSxjhcGfpOHlx%2BiUk%2BOXHHi%2B7jsAV9OzjXUQb%2BUJlhHCgO5ujlhk5C3xBF%2B%2By8sCzuDw069rPHxueWbTRgejUrGeKo%2Fozih%2BvKUeEkA4feNr89wAiAbIoQ5sNfK9foVwLG%2BUOdCCmfit5A1wbLw7ocTx0p%2FdZNwYkQEw78vOvQY6pgERXC0tXrcATlA84pijHYVKmEwjJF0xazjnLIiCUdBxw8taFE42wofYVwKklWlrMe9LOqcrFkbjLnbyxn5N0ZzBGYo3uGOX%2Fqcx678gLbnR61T4OyoozXaYQKqi%2FZJwba%2FB6Hr7nz4MUDk9KizX%2FgpUTyiN4bUi8XuZqYtB3nE5MRpiQtSiPdF5tB5iaC%2Bnx38E9DWDR2BgFNtNzV2ZRz59G4vXKVC8&X-Amz-Signature=727766b3653c6a42e5836830bf793c89cd689e01a21c8ec18762f098a7a958e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSWXZ3O%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEooYRqvE4BMo3MryNvZCeTQ0FqX37q1T7IrkbSTkurFAiAD5YQGqwir2mj8aI5AMeSZShMU03JXiersrvGeAs4aASr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMvHUaYYlXI9Z2y6OSKtwD9y6Ig5hU4tELZAXM7CHsA7jkZZvRs3lC0Fhp948AtvC%2BwqGm%2FNrsrJ5%2FBAxN6H5SpvLiZfj8awNvf4j0duLD0v55klvURXkcHeEs22coJINUi3oUcB2m1o7btNCKPGbKAqhP0kPtV3YM5uK6w8wtkZQOpWN2S3erYqT%2BWE0jGgb1H3Wsr8AIYFcAbc5h4voDvP64G3FvHX0n4AKDwUuGcoNI0h7%2FLUxrn5tZ7G5wXai4pHdVw6Y7cr6BikUSrQ6j8nod85Jx0dZ5SuLh2dirpfzDbp8uV29dLElfQxbObjEyvobRdbRUic3%2FQj4yVZHYieQfWSfxAz8uOMYa6uO6jI8vU%2FqDzDadAlM1XZB8AG7mirlFt4fy5pV51WBx7vrgrZSqckYRcbzi3N4cCHF%2BcQvUhVP9z0JriEjw3%2FgWc4oyZpJJRIjdbQ%2FPkLUW33u4q0dQh527hfmWWckrK%2F1u1gS0pSxjhcGfpOHlx%2BiUk%2BOXHHi%2B7jsAV9OzjXUQb%2BUJlhHCgO5ujlhk5C3xBF%2B%2By8sCzuDw069rPHxueWbTRgejUrGeKo%2Fozih%2BvKUeEkA4feNr89wAiAbIoQ5sNfK9foVwLG%2BUOdCCmfit5A1wbLw7ocTx0p%2FdZNwYkQEw78vOvQY6pgERXC0tXrcATlA84pijHYVKmEwjJF0xazjnLIiCUdBxw8taFE42wofYVwKklWlrMe9LOqcrFkbjLnbyxn5N0ZzBGYo3uGOX%2Fqcx678gLbnR61T4OyoozXaYQKqi%2FZJwba%2FB6Hr7nz4MUDk9KizX%2FgpUTyiN4bUi8XuZqYtB3nE5MRpiQtSiPdF5tB5iaC%2Bnx38E9DWDR2BgFNtNzV2ZRz59G4vXKVC8&X-Amz-Signature=4ebc5c1b152c1bdb9ec9a407dd1c4d679756369486541dc4631eb64e9859519f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
