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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XSYYP5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7bG1S3W70Bq3Kta6A5DjQC2RZSkjkllfhu0X3vXz0pAiBmAzSxLcMFiBeGMYErqHaIcTgpmO18qdxHsYg5naV%2BJCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMga03%2F3sW896P7LkeKtwDwaygXVDjFWMrnKzsIpnzL0%2B3aA1yVlLxEX7rmcItXdKfAbxPc5r7U9goM65UD8qsp5cIQzQfyGmKv5UlkdfGKwBVxI7g5cZ%2F4JivbjAPAM4TeLge9cIBL45oWjSei%2B9V8zkUDeEAIuRUgQDhxu85olscIUF%2BQPML1LykdnzwxNLHvD%2B2iTvMwMn1v%2FKf%2Fws1qDP1t9HeCkRLYLlGgpk87cYJ%2FeDDWdZ4nyvhDM16XgpB9jGcQ3PYe03czMU%2F1VChdpbOU9%2BH7HB%2FYo5UROktJ7vnAeu1GMjiH6bycWBFHKVZuwTzFR9sskGMulIq2pMAovvceOrO319sB8%2FYGJDvSIC2L6SN6jeWdxMy0epsQ9M2NFLN%2FWB%2FM2o2t0xZ%2Fv52BBc8pXcNQME5uVHVVfxnBezZmceuDxS37rjUw%2F1rcwJB1MSFU%2Fet90E19%2BUZFgkj0AIZwEqgZnDw02tcpAFREfHzDfmGgTZOz0XvCMy5SrtnmJBNhPPBXT26CYfyUuu6ouT7FIFZ13b8Xaty2eq%2Bp9pZVJe57tMOu5VzbxPTUhyYldKHg5wAxk0W%2FoF4s9aRyksK0El3Y%2FcWB7LjT1GnpsJKQrSklFQz0H2X1v%2Btpqpsvw%2BJqwJMie3%2FKZQws8rNwgY6pgERPZK%2BsGZ6zPD4huaomMIZEz%2B5qy1AwvFWzDzuIUOjoH6a%2Fhqb9kiltVavhsIvBu7qawgmEw1%2FmBcYYMopTazrbZw7GGYGs67KZ2efNYiSARm%2BBPMz9aCz%2BSjXDssCV69SBCvvWk1fsw%2F0Y0PwV4vmar%2BtLysnn3H2US70AoO1M5uA5TFiQ022aC5tuiTpTqk6WrpPHVYmVFHFDz96DdVemgVjWFaI&X-Amz-Signature=e4dc5aa11021785358a39d8e74658f887da5b0396182acbaa86c4601e6a205c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XSYYP5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7bG1S3W70Bq3Kta6A5DjQC2RZSkjkllfhu0X3vXz0pAiBmAzSxLcMFiBeGMYErqHaIcTgpmO18qdxHsYg5naV%2BJCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMga03%2F3sW896P7LkeKtwDwaygXVDjFWMrnKzsIpnzL0%2B3aA1yVlLxEX7rmcItXdKfAbxPc5r7U9goM65UD8qsp5cIQzQfyGmKv5UlkdfGKwBVxI7g5cZ%2F4JivbjAPAM4TeLge9cIBL45oWjSei%2B9V8zkUDeEAIuRUgQDhxu85olscIUF%2BQPML1LykdnzwxNLHvD%2B2iTvMwMn1v%2FKf%2Fws1qDP1t9HeCkRLYLlGgpk87cYJ%2FeDDWdZ4nyvhDM16XgpB9jGcQ3PYe03czMU%2F1VChdpbOU9%2BH7HB%2FYo5UROktJ7vnAeu1GMjiH6bycWBFHKVZuwTzFR9sskGMulIq2pMAovvceOrO319sB8%2FYGJDvSIC2L6SN6jeWdxMy0epsQ9M2NFLN%2FWB%2FM2o2t0xZ%2Fv52BBc8pXcNQME5uVHVVfxnBezZmceuDxS37rjUw%2F1rcwJB1MSFU%2Fet90E19%2BUZFgkj0AIZwEqgZnDw02tcpAFREfHzDfmGgTZOz0XvCMy5SrtnmJBNhPPBXT26CYfyUuu6ouT7FIFZ13b8Xaty2eq%2Bp9pZVJe57tMOu5VzbxPTUhyYldKHg5wAxk0W%2FoF4s9aRyksK0El3Y%2FcWB7LjT1GnpsJKQrSklFQz0H2X1v%2Btpqpsvw%2BJqwJMie3%2FKZQws8rNwgY6pgERPZK%2BsGZ6zPD4huaomMIZEz%2B5qy1AwvFWzDzuIUOjoH6a%2Fhqb9kiltVavhsIvBu7qawgmEw1%2FmBcYYMopTazrbZw7GGYGs67KZ2efNYiSARm%2BBPMz9aCz%2BSjXDssCV69SBCvvWk1fsw%2F0Y0PwV4vmar%2BtLysnn3H2US70AoO1M5uA5TFiQ022aC5tuiTpTqk6WrpPHVYmVFHFDz96DdVemgVjWFaI&X-Amz-Signature=82929f74098036e9883aa75fcf364d55dbe44c5a002ff1edac2bd2549af64ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
