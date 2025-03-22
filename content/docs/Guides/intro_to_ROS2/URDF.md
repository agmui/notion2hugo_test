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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROBYPVH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH8qVoqYlN4hHPn97mk2xLC6nNDi83T4lc97xEmi71%2BjAiBYf1yY%2BK%2FKvivHggZARmVLloClqP6Moty99X6bxJaPsyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1umxCBZOEsv05%2F2IKtwDXXB0zpdfI8U4aJQXpGv%2FsLfDIAnX%2FLjJD%2FZ4zzokQdbrGZbXRR%2BBnAthayjhEOHm3s47PsFwzjBnxzU9o1kKcgewsI65sdUSZKm0heATQvq4QsTo4Y62x5%2BcSgY3lDy2XrEf%2Bfoe5i9RweqnduC49gAb8BXg%2FrC%2BInl7NrnBIJRPEsNXkhV%2FEe2XX2oilayjzx2vAQaoqPosHyQ5494%2FIjpdDWHkuJwfKB3zbRnb%2BjIT8KvnEC9H9uCe54DwpAMtfwRoSbl2EGBmR83hTx2x9nPnz3CdWdi%2FE5AJ4SrJNuqxuFwG6MHqdHvO1Y2FI3DUjjFIH70jDFphKqQwselYPfXqB%2BobkxlENu7WBw6GJJ6G%2B3X73XsBQLO1pVhaiJQzRBS2xEtJvkJPMl6ED87tNu0m8dPzCl8oZIPbOY8nE0D13shFZnXvkiMz9iGCyLvNeXjMyYPgA5eLiv%2FUX%2Bno36uBhTmGwLID69wgIy207tgN4VZC4%2BGOBwNfRa3fAsKQEtZZGHKrtjc72ddaSvIPk6tigrGVMeTb2IxhhU33Z1LQqeruEogE6SMEsP5Wk9%2BzislDD7zDOlEXs2d%2BuRGgGhFtUllYBK1dq1MlWC4Tpr%2FKOB8NWboWqqN56OgwuPb6vgY6pgGz%2FCKbVFlRJywYqwm7H%2B%2FgKfPBXiRj5pCfucXZm641deWlgz6t8DkWJxSyG0DpfkrxQ81CZqT2o4XVW5SCVd8em6bluGB7cVOMj%2Brose05qKAtbGDxz048G0nFD%2FyeybOjndko09UqVuMgAx8Kzpbvx2RACV3RgZyWm89b8fpT2uaQxTG%2BiDyXJQkqS9g5gaqxIfc2e%2Biq%2BrZnMKHRroXHKgZfmN5m&X-Amz-Signature=7ee05c034396bd3c95db61cb112b1abeb6e91dd844ca791e15e50f1376392ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROBYPVH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIH8qVoqYlN4hHPn97mk2xLC6nNDi83T4lc97xEmi71%2BjAiBYf1yY%2BK%2FKvivHggZARmVLloClqP6Moty99X6bxJaPsyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1umxCBZOEsv05%2F2IKtwDXXB0zpdfI8U4aJQXpGv%2FsLfDIAnX%2FLjJD%2FZ4zzokQdbrGZbXRR%2BBnAthayjhEOHm3s47PsFwzjBnxzU9o1kKcgewsI65sdUSZKm0heATQvq4QsTo4Y62x5%2BcSgY3lDy2XrEf%2Bfoe5i9RweqnduC49gAb8BXg%2FrC%2BInl7NrnBIJRPEsNXkhV%2FEe2XX2oilayjzx2vAQaoqPosHyQ5494%2FIjpdDWHkuJwfKB3zbRnb%2BjIT8KvnEC9H9uCe54DwpAMtfwRoSbl2EGBmR83hTx2x9nPnz3CdWdi%2FE5AJ4SrJNuqxuFwG6MHqdHvO1Y2FI3DUjjFIH70jDFphKqQwselYPfXqB%2BobkxlENu7WBw6GJJ6G%2B3X73XsBQLO1pVhaiJQzRBS2xEtJvkJPMl6ED87tNu0m8dPzCl8oZIPbOY8nE0D13shFZnXvkiMz9iGCyLvNeXjMyYPgA5eLiv%2FUX%2Bno36uBhTmGwLID69wgIy207tgN4VZC4%2BGOBwNfRa3fAsKQEtZZGHKrtjc72ddaSvIPk6tigrGVMeTb2IxhhU33Z1LQqeruEogE6SMEsP5Wk9%2BzislDD7zDOlEXs2d%2BuRGgGhFtUllYBK1dq1MlWC4Tpr%2FKOB8NWboWqqN56OgwuPb6vgY6pgGz%2FCKbVFlRJywYqwm7H%2B%2FgKfPBXiRj5pCfucXZm641deWlgz6t8DkWJxSyG0DpfkrxQ81CZqT2o4XVW5SCVd8em6bluGB7cVOMj%2Brose05qKAtbGDxz048G0nFD%2FyeybOjndko09UqVuMgAx8Kzpbvx2RACV3RgZyWm89b8fpT2uaQxTG%2BiDyXJQkqS9g5gaqxIfc2e%2Biq%2BrZnMKHRroXHKgZfmN5m&X-Amz-Signature=7d66cc7676311333f37a68fc0b01c9271a4d9057a594e0c9ee0d0d58d89bfe2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
