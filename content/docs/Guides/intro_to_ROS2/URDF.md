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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZQRJCZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5IR2VqbO4v0LPhfisYicT6kJdDNSBA7CcHdCQgGzFhgIgIVqURjEhz6St95Bb%2FjuVoalHkSO%2Bh6q83jL%2BBi0%2FlqAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlPmyXY1AGOFPss4CrcA6UjpSu74VfFLdOnVjPoQWcgBhhTrX0mCURq93Esw5CfI%2FxCBitRw5aFyxHCmFHWfjLdu3Q2W8uGafaTkNJpascgn6lLDjdMeTJFRe%2Fkm5qQB0jm6Wki3hzYuaYFKsE8hwr%2F7QPcQv2eAbMCgVxNMrXYfcKfr41PekvGbAr2bghSyp5OfWW9RVOsuQk41dgz5lwLvZUH847yQY4AdwIxs%2BW1ELK2%2BrTzEbTWzMbKphtZsfx6o2%2B0ybECsGHpQDdZdY7FwI7SExGcUGr6jK%2BanM%2BHoQzPc9NomcEjg56BMh9Xy96OzMnh46sTSxacpX5X2VbolamALD2woaAAsZOFx4ivSWiMUUhpNDldKJu1Arh%2FEBA9KC378triwvRQeQZyUcwh2ZEU0gCVclYiYvgreqRs%2BJD3kRBpBmLyrudjEy5YT1j7pyJco6H76taOACuNguxpWGvWRskjnU8X36UPNE1y7C9rRSNviudLMj8FLXWBNEUjFqgH%2BuNOjPBZV%2F3kL9KbGZoNLH4WV1E9ltPmpkIVLxihTNT%2FJ09EDCtjlgJHWPqM2k7O99gOXNyWx0vaz0hN7nNvZ09NT6kI6cUYhje%2B%2BXO1%2FVVhjcfrVdGCAGcgDzUkz51fJH0IIX9GMKjswcMGOqUBHeYWhUk2YtWV3mndyHwYyH3pnSblkA8Yk1l9IQo6OOvBGNGyqUeYtVNJjshv1YWt4EUyeD7jkVWXlb6AzHZFi85vA%2FPNnBzNEjtOGSkSG9UXbo96ALHTPm%2F64TAgf8uu%2FWg3wpioQQ2L%2FzyXK65ZA3LM1hAuIomZQV1OyoJyjka%2BqfgLtY%2B%2Fgy%2BAcPqnzrvXUT8zlMQHeP9AUULR1wCWCO%2BjsWsM&X-Amz-Signature=bfe956e6ba0b40b13485fb0b21bb241b6039a7286809e6ee005c4de064c0a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZQRJCZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5IR2VqbO4v0LPhfisYicT6kJdDNSBA7CcHdCQgGzFhgIgIVqURjEhz6St95Bb%2FjuVoalHkSO%2Bh6q83jL%2BBi0%2FlqAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlPmyXY1AGOFPss4CrcA6UjpSu74VfFLdOnVjPoQWcgBhhTrX0mCURq93Esw5CfI%2FxCBitRw5aFyxHCmFHWfjLdu3Q2W8uGafaTkNJpascgn6lLDjdMeTJFRe%2Fkm5qQB0jm6Wki3hzYuaYFKsE8hwr%2F7QPcQv2eAbMCgVxNMrXYfcKfr41PekvGbAr2bghSyp5OfWW9RVOsuQk41dgz5lwLvZUH847yQY4AdwIxs%2BW1ELK2%2BrTzEbTWzMbKphtZsfx6o2%2B0ybECsGHpQDdZdY7FwI7SExGcUGr6jK%2BanM%2BHoQzPc9NomcEjg56BMh9Xy96OzMnh46sTSxacpX5X2VbolamALD2woaAAsZOFx4ivSWiMUUhpNDldKJu1Arh%2FEBA9KC378triwvRQeQZyUcwh2ZEU0gCVclYiYvgreqRs%2BJD3kRBpBmLyrudjEy5YT1j7pyJco6H76taOACuNguxpWGvWRskjnU8X36UPNE1y7C9rRSNviudLMj8FLXWBNEUjFqgH%2BuNOjPBZV%2F3kL9KbGZoNLH4WV1E9ltPmpkIVLxihTNT%2FJ09EDCtjlgJHWPqM2k7O99gOXNyWx0vaz0hN7nNvZ09NT6kI6cUYhje%2B%2BXO1%2FVVhjcfrVdGCAGcgDzUkz51fJH0IIX9GMKjswcMGOqUBHeYWhUk2YtWV3mndyHwYyH3pnSblkA8Yk1l9IQo6OOvBGNGyqUeYtVNJjshv1YWt4EUyeD7jkVWXlb6AzHZFi85vA%2FPNnBzNEjtOGSkSG9UXbo96ALHTPm%2F64TAgf8uu%2FWg3wpioQQ2L%2FzyXK65ZA3LM1hAuIomZQV1OyoJyjka%2BqfgLtY%2B%2Fgy%2BAcPqnzrvXUT8zlMQHeP9AUULR1wCWCO%2BjsWsM&X-Amz-Signature=6df0b1a2207890ee99f10eb2052bcdc35a6e174c624e2e6dd68aa6a7c8aa422b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
