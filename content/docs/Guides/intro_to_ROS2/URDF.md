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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUPXSIF%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHwbwrqczUgd%2B9fJIc51el90UR1YJ2yAOu7c1GdTd8wIhAP93eR%2FOxt0XGXD%2Bi01ljqhrpvRtcQfIxmGTphra0zT%2BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt4pU%2FSxbrLiVZnCcq3ANAQPV8xFYurj8aiQNt%2BhJgv4AV2www04US8xIRwf48k9AXLTp40%2Fw7McpZKJWB64b5HNQP0KSaqzX2EtdDjtWopr%2FkP37Btq7QqH9a5Tm7hSGyBcgayAcCKWHdILuBzvWBA6v2mcImK7IvTb%2BrgdrdGGHZsBmG0a6sAOEYnulpUO8rq%2F9%2FwiizZ0HYGHgJDj2a%2BNwBallTjeE%2FCHVd8sMmlVVom83CCqVIq1CNG0nHGrBCV0b49sBZsPom8rdDNKnClONnv2aQSNxcv8flw%2BA1bpwledi6RtNMVW%2BT%2BAVHVYfBi1D0MaYOh3zyR0tCFY5Q8Hi3%2BrwbV2%2FL9fpSIcSqrFHgzVzqKDjoUqeb6R6b38p9vxVqVuFjsi%2FDbdG8U5FDizGHqzDNyzM6QTG%2FZgLVu8DBkVvNUSYBZnfYTGepLaCKsTwWVbv%2FZgmDc8zP9UZtlvMth%2BwEBQ64vGdiNjhLy3JbIu6KmkJEZ3q5%2BMlh95uPGZAhqyFb2HCVJh6ftvG79Og0WmEmwoS9yVQ%2Bla%2B%2FjKcwqPBfZS%2B8OZrxaByaD%2F%2B4oQpSNm4OAqLiTRM2oABCRYYNIElWdlqBWNFxmCrKe73HvAU4Jopt%2BHkMunQTYfIsxuNlI%2FyG%2BdJBbjCnorK9BjqkAWlxNnOzeFBbSYFKBmqsgdFUso3zmSnW%2B%2F%2B006Y6p%2BWNzEwfaRDOUUyeN%2BbFNr%2FI1gJlzDu53Slc0eYfYppE%2BKw0tj4aRVwHCFAE0%2BzmZ%2FiaLwNTZwADmYUAMfSDoTummfdxXahYNdVq7aVz%2BpgfRgj91UNgdw11NaVQHqijmk3JeA8cbQBEQ8gnLTcYOoHC9711%2FEHXc%2F2H0OBbhdc5JtaAY%2F4F&X-Amz-Signature=3af212ee8e58f0772d0c18c3d455039d2f069e882720cd268b84ccb4254768eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUPXSIF%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHwbwrqczUgd%2B9fJIc51el90UR1YJ2yAOu7c1GdTd8wIhAP93eR%2FOxt0XGXD%2Bi01ljqhrpvRtcQfIxmGTphra0zT%2BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt4pU%2FSxbrLiVZnCcq3ANAQPV8xFYurj8aiQNt%2BhJgv4AV2www04US8xIRwf48k9AXLTp40%2Fw7McpZKJWB64b5HNQP0KSaqzX2EtdDjtWopr%2FkP37Btq7QqH9a5Tm7hSGyBcgayAcCKWHdILuBzvWBA6v2mcImK7IvTb%2BrgdrdGGHZsBmG0a6sAOEYnulpUO8rq%2F9%2FwiizZ0HYGHgJDj2a%2BNwBallTjeE%2FCHVd8sMmlVVom83CCqVIq1CNG0nHGrBCV0b49sBZsPom8rdDNKnClONnv2aQSNxcv8flw%2BA1bpwledi6RtNMVW%2BT%2BAVHVYfBi1D0MaYOh3zyR0tCFY5Q8Hi3%2BrwbV2%2FL9fpSIcSqrFHgzVzqKDjoUqeb6R6b38p9vxVqVuFjsi%2FDbdG8U5FDizGHqzDNyzM6QTG%2FZgLVu8DBkVvNUSYBZnfYTGepLaCKsTwWVbv%2FZgmDc8zP9UZtlvMth%2BwEBQ64vGdiNjhLy3JbIu6KmkJEZ3q5%2BMlh95uPGZAhqyFb2HCVJh6ftvG79Og0WmEmwoS9yVQ%2Bla%2B%2FjKcwqPBfZS%2B8OZrxaByaD%2F%2B4oQpSNm4OAqLiTRM2oABCRYYNIElWdlqBWNFxmCrKe73HvAU4Jopt%2BHkMunQTYfIsxuNlI%2FyG%2BdJBbjCnorK9BjqkAWlxNnOzeFBbSYFKBmqsgdFUso3zmSnW%2B%2F%2B006Y6p%2BWNzEwfaRDOUUyeN%2BbFNr%2FI1gJlzDu53Slc0eYfYppE%2BKw0tj4aRVwHCFAE0%2BzmZ%2FiaLwNTZwADmYUAMfSDoTummfdxXahYNdVq7aVz%2BpgfRgj91UNgdw11NaVQHqijmk3JeA8cbQBEQ8gnLTcYOoHC9711%2FEHXc%2F2H0OBbhdc5JtaAY%2F4F&X-Amz-Signature=ccfc2b078028a78126f08d9188fed545a3750359ec4c5a3d3a76a9de909c0c86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
