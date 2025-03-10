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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIJQ3BM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDm1mjpU6oZhYPSNEUz7e4oJm4AnbXtRVBS488bWzkCPAiEAxA%2FMHZ7990GAwAOJ8135XhmChpg65qTQZhHaL2xKxnEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8kK2z0SukaVLuCayrcAz1gvTfTpic5sKOt8ovjxj0C9EE9Rnv84Kiia6DmijFHufsLcgukuAoz0sskf%2BQUfBOnmPSjakrrlbSfVW3ix%2FzBUWU%2F%2BJ62ijR1VHlxJj7Sq%2FWOl%2B45nSwQUbseW8YWdGjsdmfrVpei9nbpwqeQw6F2OrKeM5thAX%2FXpTrajLVQAl3bUA%2B6FCmHfilwlSyAWK42%2FaKTWzWM3KkYAy8CP%2BoGkDwQuNnp2UNaHqQjaAYZCSc3kFKliAq0wVfxazxRcONJaiFQLM%2BwwxP3XvfMBvyM2c2vvuGKABlJh4ISSrmj4H0pZvZtRdv2YVyAqO01sQ%2FYeCgb97b9pxf%2BUPHnrxribAiGTzGznVTcgDW8A5XTu1vo1Cxid%2FkzpSCTBi%2BFhXgFeYOedAocVNKSdaaOQqEj6%2Ft7sSoPubKkwX%2BuGfNA05lRRK7KbfdAiu%2B8A%2FQuiq8s%2FjDMjZZ2lKzenYKUF6l3TA8rp8cfR%2BgHKyVsDzJ0fbAY7jm2RGrPG4YxMyNTon7JmP6GPumvtwaagPjuiRqxiwjw%2BrKzMQZDe9k5Fr0TNYVjUauVqv3i7WElSiJNNlOuw9nkP5D3g6n9iH2fEthIDj1HRHFxh5JSSu0N%2FvM79H77kQZoIsAVS4LPMM%2FLvL4GOqUB7C4yb7jcsQ8eq33RpIkgRYOfzFaGCsyM%2BmeyHc3EdpByPQ716tfrUZW10%2FnsQqXpM5JAsBisVitpqPi1D%2FjBPltk7Md1eiwXtMH7uU%2BZZ0mpy4LdltjMVNilcqlWew4BO%2BNdIskr5YsuDrSIAWHe5tUBqRlqcx7Kg8hBKDcadmk9ULiy03UIWhaHXDqIQDrULoF8aVOrWOAa5i3oAhwUTz%2F6GWIT&X-Amz-Signature=04f172cf155d9c5d7b5a1537d889c3bfe728b0e923e2563b43b243e1b2a06bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIJQ3BM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDm1mjpU6oZhYPSNEUz7e4oJm4AnbXtRVBS488bWzkCPAiEAxA%2FMHZ7990GAwAOJ8135XhmChpg65qTQZhHaL2xKxnEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8kK2z0SukaVLuCayrcAz1gvTfTpic5sKOt8ovjxj0C9EE9Rnv84Kiia6DmijFHufsLcgukuAoz0sskf%2BQUfBOnmPSjakrrlbSfVW3ix%2FzBUWU%2F%2BJ62ijR1VHlxJj7Sq%2FWOl%2B45nSwQUbseW8YWdGjsdmfrVpei9nbpwqeQw6F2OrKeM5thAX%2FXpTrajLVQAl3bUA%2B6FCmHfilwlSyAWK42%2FaKTWzWM3KkYAy8CP%2BoGkDwQuNnp2UNaHqQjaAYZCSc3kFKliAq0wVfxazxRcONJaiFQLM%2BwwxP3XvfMBvyM2c2vvuGKABlJh4ISSrmj4H0pZvZtRdv2YVyAqO01sQ%2FYeCgb97b9pxf%2BUPHnrxribAiGTzGznVTcgDW8A5XTu1vo1Cxid%2FkzpSCTBi%2BFhXgFeYOedAocVNKSdaaOQqEj6%2Ft7sSoPubKkwX%2BuGfNA05lRRK7KbfdAiu%2B8A%2FQuiq8s%2FjDMjZZ2lKzenYKUF6l3TA8rp8cfR%2BgHKyVsDzJ0fbAY7jm2RGrPG4YxMyNTon7JmP6GPumvtwaagPjuiRqxiwjw%2BrKzMQZDe9k5Fr0TNYVjUauVqv3i7WElSiJNNlOuw9nkP5D3g6n9iH2fEthIDj1HRHFxh5JSSu0N%2FvM79H77kQZoIsAVS4LPMM%2FLvL4GOqUB7C4yb7jcsQ8eq33RpIkgRYOfzFaGCsyM%2BmeyHc3EdpByPQ716tfrUZW10%2FnsQqXpM5JAsBisVitpqPi1D%2FjBPltk7Md1eiwXtMH7uU%2BZZ0mpy4LdltjMVNilcqlWew4BO%2BNdIskr5YsuDrSIAWHe5tUBqRlqcx7Kg8hBKDcadmk9ULiy03UIWhaHXDqIQDrULoF8aVOrWOAa5i3oAhwUTz%2F6GWIT&X-Amz-Signature=0ab1e4efc4dad721ca14a4814eb523ba91185e76e3450deaf5b37c80ebbdf64c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
