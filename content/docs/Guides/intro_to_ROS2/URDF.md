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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63NPWFA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDmQRlagU3G1tsleQpnf4zLVb5BqiiUP3QNykzfd8O%2BUgIhAIGBbGueGagNmb2y6%2F3b9KQK7RqG%2FO8gQ5yp1B0LFEjJKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTwpSOn6EsG3StgP8q3AM4mTmSMcyElAnO9gRNTnhZ%2F95w%2BJZADRDr6rbf8qS9%2FQSm%2FYSS%2B5iMIdBHSgOFyKlUto3UTadegimjdBEL7BdBhcx%2FOGtNqkCPb%2BYL%2FVSiYvP%2F16VNYRUggo%2Bo5iTvaj76pCH947GeVOgBLMuVmSWnrmfKGRDSb3hjtAkxbTkUq1U5LX%2FbPh80d8QbOAsE6TuZelhbRpvGDo0kICtPF7lmMbzsrYQ9v%2FyuCyXOyhSpiasoGJHVy1R03H0sECHQ0KnL32p5ad43Z2vKtrjRAUA0sMxpz6scY9OIJXAkGNJPEzRCBVjlS%2ByPSF6DANJ0hqHbB%2BlualxEAD8%2B82ZXMc12A9zSreM9gY%2FzVcaurFp81Oi2jTLB3244nNMO8R83yBeVGUu%2FA3PHDplATUX4EDoBYqQbNWCyQJU32LMl7ofQnzXp2HFwx2naEHPvGZO7UW5o8yJQWnzi%2Bo6P6bskxDEBzNXXUZ7p6MaHaG1DmrV0uD%2Fep3l%2FVKFCR2zyvP%2FEi8cvkbytzdRv5io2o7QbzpOUmVjXOEOe6YNye092ZVZsppHnSJiShT2s9mdyPouE%2FKKApmNFGFPiwC34F4cgehnCRnWGoIbOwIpB3dt06bx%2FSCQvO9BMj168tefzJjDH5u%2B%2BBjqkAcWnl68AGsDKAYhgmpB6oEVmmJFWVwn7qEkRSYFJN6J1pfZ0%2BNr0HvVsZVV1AaOpUiGAXUMGB73OpsVrE5cskDTM%2FLz29Y0w2HR64mufUCEfBU09%2BBVPtjnztGxK1SIOCpC2qz%2Bq6JEjg8ptL8O8nNr768wdMLEUbDEe7n%2FO44JmKXlGOlkoujpb46wZz%2BBnMRs%2Bvktf%2FhoDtkQvBC0%2BpEM7Cxgh&X-Amz-Signature=24d628a8cf6e0a04bcbdcd52a98d2363c61e3174331a4bf6bee066d59929185c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63NPWFA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDmQRlagU3G1tsleQpnf4zLVb5BqiiUP3QNykzfd8O%2BUgIhAIGBbGueGagNmb2y6%2F3b9KQK7RqG%2FO8gQ5yp1B0LFEjJKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTwpSOn6EsG3StgP8q3AM4mTmSMcyElAnO9gRNTnhZ%2F95w%2BJZADRDr6rbf8qS9%2FQSm%2FYSS%2B5iMIdBHSgOFyKlUto3UTadegimjdBEL7BdBhcx%2FOGtNqkCPb%2BYL%2FVSiYvP%2F16VNYRUggo%2Bo5iTvaj76pCH947GeVOgBLMuVmSWnrmfKGRDSb3hjtAkxbTkUq1U5LX%2FbPh80d8QbOAsE6TuZelhbRpvGDo0kICtPF7lmMbzsrYQ9v%2FyuCyXOyhSpiasoGJHVy1R03H0sECHQ0KnL32p5ad43Z2vKtrjRAUA0sMxpz6scY9OIJXAkGNJPEzRCBVjlS%2ByPSF6DANJ0hqHbB%2BlualxEAD8%2B82ZXMc12A9zSreM9gY%2FzVcaurFp81Oi2jTLB3244nNMO8R83yBeVGUu%2FA3PHDplATUX4EDoBYqQbNWCyQJU32LMl7ofQnzXp2HFwx2naEHPvGZO7UW5o8yJQWnzi%2Bo6P6bskxDEBzNXXUZ7p6MaHaG1DmrV0uD%2Fep3l%2FVKFCR2zyvP%2FEi8cvkbytzdRv5io2o7QbzpOUmVjXOEOe6YNye092ZVZsppHnSJiShT2s9mdyPouE%2FKKApmNFGFPiwC34F4cgehnCRnWGoIbOwIpB3dt06bx%2FSCQvO9BMj168tefzJjDH5u%2B%2BBjqkAcWnl68AGsDKAYhgmpB6oEVmmJFWVwn7qEkRSYFJN6J1pfZ0%2BNr0HvVsZVV1AaOpUiGAXUMGB73OpsVrE5cskDTM%2FLz29Y0w2HR64mufUCEfBU09%2BBVPtjnztGxK1SIOCpC2qz%2Bq6JEjg8ptL8O8nNr768wdMLEUbDEe7n%2FO44JmKXlGOlkoujpb46wZz%2BBnMRs%2Bvktf%2FhoDtkQvBC0%2BpEM7Cxgh&X-Amz-Signature=09d22e87499e3986b28d92666c8e782874aa532a796d7318353e9f17dd039350&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
