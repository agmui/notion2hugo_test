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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GKZKOO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFCnvvIyR%2Fq1yEjTwT9cWQmT2nYWUn7BXhIz6Fv1KRUiAiBjP4Imm3JPArdtjVnlOf1eK%2FeJ4J%2Fx9p3LkyLBmf8rNSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOwn1XA%2B7BfsdtgxqKtwDtLrb9%2BTvA4zlFvXJXoQT4xR3EVnKNWaJBp7szkdMpNT24mePSHuU78UHZF%2BVPFIn1ForuGWADj4Ld%2FP5XVlkEd3igYAbcUXevV5v3HmjrDDkb6jDboPVhHGIqaRE7EGjQxJpqRgzI4nWXuBh10ZwmOrfIyi7nfRNGNOOO3mRDrpg6lblWypb%2BwPxcaZWxUDGMws2oDxBe3PGj0x8g%2Fd7mop%2F9ldcDxo3AF90FwAMB83ficvdIhAzirtg7PWaU%2FKizOKQsiEpRLAGItdQEdbYlx86VstzzUcw0E1P38%2BwEIWEXeb%2FqB7y2%2BTPr%2BUN%2Fyw0YgYw090vZZCdMF9gUE3%2FSpWyNmQSOljddqGwFuTnNVTaAH9bYLQhqOS%2FSbOBG9fCBovhNEl7mAzeYfKmxLbPTOtAAs3n8wxfaYfoyII1ZFNLFNngbRMx%2BvHlqepiJwBTUqGNGhLA0COGsLlkrtAjvmxyCjMHTZ0MBj7BEsxl91C8WOwFnif7DrYozJmEI6BeGnnU1pXNTK7VSPCipA9BVaDNk9YDuhpkD7ON2cYxhvdUJo8O1fKVNGjdXLvpdDrsrQwY7SpB4hV0WUYnLqgQ18XyGzFDbEqVlzTDi17GVaDF4w3NdPbgsZ8QDSYw7o%2BIxAY6pgEI4ZnzeWEVXdVqKwT1B%2BJcHbUPVbdQNAg%2B7U2Uy7zGXzw6oHqSFSIj8ikgtdSNJGksrdp1eujGE3hOXRPd8OgLb4jMZFXxhowYAWFCiebDD895cazmzY2I5diTFIvzJimn%2FIvR8Jn8r9Wk95MziRLvxTSyV42Hrj8JFwCBDpj92XJN%2FOnKSNs5etGBXKOHvT5m7qq0Tj7CBYaOqEssRYTcHMmDCz8k&X-Amz-Signature=5a63a5c57fcb7193ffa91277456d0df3f319d5e9181e10e2ee70a6248979cfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GKZKOO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFCnvvIyR%2Fq1yEjTwT9cWQmT2nYWUn7BXhIz6Fv1KRUiAiBjP4Imm3JPArdtjVnlOf1eK%2FeJ4J%2Fx9p3LkyLBmf8rNSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOwn1XA%2B7BfsdtgxqKtwDtLrb9%2BTvA4zlFvXJXoQT4xR3EVnKNWaJBp7szkdMpNT24mePSHuU78UHZF%2BVPFIn1ForuGWADj4Ld%2FP5XVlkEd3igYAbcUXevV5v3HmjrDDkb6jDboPVhHGIqaRE7EGjQxJpqRgzI4nWXuBh10ZwmOrfIyi7nfRNGNOOO3mRDrpg6lblWypb%2BwPxcaZWxUDGMws2oDxBe3PGj0x8g%2Fd7mop%2F9ldcDxo3AF90FwAMB83ficvdIhAzirtg7PWaU%2FKizOKQsiEpRLAGItdQEdbYlx86VstzzUcw0E1P38%2BwEIWEXeb%2FqB7y2%2BTPr%2BUN%2Fyw0YgYw090vZZCdMF9gUE3%2FSpWyNmQSOljddqGwFuTnNVTaAH9bYLQhqOS%2FSbOBG9fCBovhNEl7mAzeYfKmxLbPTOtAAs3n8wxfaYfoyII1ZFNLFNngbRMx%2BvHlqepiJwBTUqGNGhLA0COGsLlkrtAjvmxyCjMHTZ0MBj7BEsxl91C8WOwFnif7DrYozJmEI6BeGnnU1pXNTK7VSPCipA9BVaDNk9YDuhpkD7ON2cYxhvdUJo8O1fKVNGjdXLvpdDrsrQwY7SpB4hV0WUYnLqgQ18XyGzFDbEqVlzTDi17GVaDF4w3NdPbgsZ8QDSYw7o%2BIxAY6pgEI4ZnzeWEVXdVqKwT1B%2BJcHbUPVbdQNAg%2B7U2Uy7zGXzw6oHqSFSIj8ikgtdSNJGksrdp1eujGE3hOXRPd8OgLb4jMZFXxhowYAWFCiebDD895cazmzY2I5diTFIvzJimn%2FIvR8Jn8r9Wk95MziRLvxTSyV42Hrj8JFwCBDpj92XJN%2FOnKSNs5etGBXKOHvT5m7qq0Tj7CBYaOqEssRYTcHMmDCz8k&X-Amz-Signature=9cc0bbe530ca44f2d6dc13a4ad643006cdefe2cee588b2964c641c6755541f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
