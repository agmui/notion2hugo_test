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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7PVB56%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEv7XFDYHBL9gJyX7kxqCdqSwXLvq1B9eTpB9BT3KqQGAiEA32ZPbe%2Bd5JZRlCnMFBzDrMjj0o4sXb3ThTMKI1l%2BudkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7IQGUziKLwDQXLzSrcA%2FVRiRpwgmJJbQIiILLIVc5l2DBXoHCFL0rKoEjtfZ3e0grtwh545%2F%2FH0a7fdaHF7p28QoqCCI9HP%2FdvWLTrHJpLiKX1DdJVglKDyqGQ%2BSWhck5bzW4i55mi6uaS6kxV%2F%2BKKid%2BQ8Vq9z8zhoqZcjlrr6SzY6bcdRh5Ouf1fBoZMg9xlrx4SdY%2F9mhceOKbtcUO8wVb0DHDIUyi9Q6sas6QnB35E5PFyXkwSraK9qGRmpwtUL%2Fl9UutC2rUTZDPzXXiImviwX0ldPd3TIF1789QcaTfTiTS2az2Z5Joo8LKH5pW96xQP58lsPRiOUZsw1Dafx5oGFP%2BSGSDh2TbYqCTtr%2Frb5HYRMZAGGjJKSWguYhxrXFx26HQWS%2Fqgm0YjGSv7vWvlQ0LyjpDiU%2BxQuIxrq7Kj4Jf0t279OGpknvrxoH2%2Fb313dukuCGet3%2B1G3UIsS1v1NbDxMX4C1LF%2Brle8t2AhVETA7FH3ESMGaQhe9AWI070GWH0CNdXvYyeSZDjIpoPlC92RqqSjB6%2BXOJxuHIpj0UbzLosANMq88qKqy0opZ7axnZB2KSpdL%2BYcssDjP7xuj8Lg4AYolil%2FwJAfOfIQxhlhkRd6IGYTG36%2BHqIJqpCNlyRfUHrbMNS%2F178GOqUBTkJOUEpcGjOBTKNkl0CtqjeW2p27JhRHnhx3mRE9il%2BG%2BYobJu%2BhNn%2BlBC4z%2FCmq5hsipaDwrNgfftPxOEU4LdBf5LEQxpjads3EegEN5kxcDP0GWEcGSVvS%2BVCX%2BX8tCHjQSQTqpRA4%2FNSjW4Kt5YIehEyMgClKbLLIkEWnLXFzpl71CAHbhOUDruBhWKnW%2BtYuxI0NiZpEwSr5ohUsc9Apvi8X&X-Amz-Signature=a75ebdcc6b97d402bd7affd4b1237942a83c98e0c1bd7300e373c21ac4c5860f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7PVB56%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEv7XFDYHBL9gJyX7kxqCdqSwXLvq1B9eTpB9BT3KqQGAiEA32ZPbe%2Bd5JZRlCnMFBzDrMjj0o4sXb3ThTMKI1l%2BudkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7IQGUziKLwDQXLzSrcA%2FVRiRpwgmJJbQIiILLIVc5l2DBXoHCFL0rKoEjtfZ3e0grtwh545%2F%2FH0a7fdaHF7p28QoqCCI9HP%2FdvWLTrHJpLiKX1DdJVglKDyqGQ%2BSWhck5bzW4i55mi6uaS6kxV%2F%2BKKid%2BQ8Vq9z8zhoqZcjlrr6SzY6bcdRh5Ouf1fBoZMg9xlrx4SdY%2F9mhceOKbtcUO8wVb0DHDIUyi9Q6sas6QnB35E5PFyXkwSraK9qGRmpwtUL%2Fl9UutC2rUTZDPzXXiImviwX0ldPd3TIF1789QcaTfTiTS2az2Z5Joo8LKH5pW96xQP58lsPRiOUZsw1Dafx5oGFP%2BSGSDh2TbYqCTtr%2Frb5HYRMZAGGjJKSWguYhxrXFx26HQWS%2Fqgm0YjGSv7vWvlQ0LyjpDiU%2BxQuIxrq7Kj4Jf0t279OGpknvrxoH2%2Fb313dukuCGet3%2B1G3UIsS1v1NbDxMX4C1LF%2Brle8t2AhVETA7FH3ESMGaQhe9AWI070GWH0CNdXvYyeSZDjIpoPlC92RqqSjB6%2BXOJxuHIpj0UbzLosANMq88qKqy0opZ7axnZB2KSpdL%2BYcssDjP7xuj8Lg4AYolil%2FwJAfOfIQxhlhkRd6IGYTG36%2BHqIJqpCNlyRfUHrbMNS%2F178GOqUBTkJOUEpcGjOBTKNkl0CtqjeW2p27JhRHnhx3mRE9il%2BG%2BYobJu%2BhNn%2BlBC4z%2FCmq5hsipaDwrNgfftPxOEU4LdBf5LEQxpjads3EegEN5kxcDP0GWEcGSVvS%2BVCX%2BX8tCHjQSQTqpRA4%2FNSjW4Kt5YIehEyMgClKbLLIkEWnLXFzpl71CAHbhOUDruBhWKnW%2BtYuxI0NiZpEwSr5ohUsc9Apvi8X&X-Amz-Signature=06efec517e4ee4a9ef55733dc822418b09fd3007be1f794c345f57bdfda602f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
