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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZTDCWP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCalgRetqFLRTUGr4pV4DAyBAKntmX%2B7dYh9w5%2Fs1WJWQIhAIHU1mBMXLUxe%2F%2BfQ0fOZjSiQlLpBBRRvHjJ8AHd7LGVKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqSeGG%2F3FcEfOax5Iq3APyB4o6F%2BO9tE2pSJvU52ptLpUX9KsI7tqGk4VZ%2BcIsoOh4hJ4qrEd4eNFvfZsn3EjqkVfYqLwI2Jsbh0jLovwKGX10WIZRCgKoNzEHOiEScpb2hXkjQb1mJmBE25xhzXBEc2%2BoNe3Gtn5nl2QigpFkG3H7MXzcfFRkJQQiFwG%2BdIjlUmvUChNJiObyb4P3YDTSwDZFfXTkAN49JVHSg06txpb3UCHqGFpXg%2BZmFbYw%2BMiTYySl%2Fn9%2BXlzeLE2nBg%2B%2BCOQeR0hdDFWTfGCUL8t8KMWWdyikkXo1VTXkjBAAV8SG7oHCQyfSlADrbCWe5lw9a%2B%2Fkiu2RSUhJ00JvBhzYxktxKVmrSm2wL68WBDYRftSB1Sjna4eM3jiG02EzrAt1w67u9Q9MPGKRSQskbu8GUbwd0tNQTu9NKh4OQctbJ7i1NYtn%2Bkd7HcSkjWGOeD6zjdgPwe3DRPP61ClNlbrghjBfy%2F4j6dMUT62FwSBZJQWPOOmSZu61zW3362Fmwj22r73nuKztybBnPAsbVncMJL1rIpY1G0XWmIyWrJ3F4oo43e47yCrlZgeAHREmD6SRyKGbvNEGf27ShSUGWnFIo4dBLgoHXb2cxx1sVas8oxBPwduJ1pQZI%2F2VdjC6svq8BjqkAXEFM3%2Bh9ndBNkOIGSQZMIN%2FrJ2Lz%2FpLp810ToVVSpZqcUn8%2BzXWvIsswf9paVm8cPBXyfq7kFTy118QVQ0KcE3rIIgN%2Fj1lvgerqqF626Lsm3%2B12fNnQMyPEa6OxTVh8SUarROFyENaQrlk7BVxRdV0E50CmZyWZFO41oRoL%2BYv1pU7pnhmRzjEIpbflmhdwychoXEpE0ixe%2F0SAJrZELhQvgFl&X-Amz-Signature=78e7113a3986c61a90fc3fac48e1810aa60bcc135885970c4202fcf3fdeaaaca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZTDCWP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCalgRetqFLRTUGr4pV4DAyBAKntmX%2B7dYh9w5%2Fs1WJWQIhAIHU1mBMXLUxe%2F%2BfQ0fOZjSiQlLpBBRRvHjJ8AHd7LGVKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqSeGG%2F3FcEfOax5Iq3APyB4o6F%2BO9tE2pSJvU52ptLpUX9KsI7tqGk4VZ%2BcIsoOh4hJ4qrEd4eNFvfZsn3EjqkVfYqLwI2Jsbh0jLovwKGX10WIZRCgKoNzEHOiEScpb2hXkjQb1mJmBE25xhzXBEc2%2BoNe3Gtn5nl2QigpFkG3H7MXzcfFRkJQQiFwG%2BdIjlUmvUChNJiObyb4P3YDTSwDZFfXTkAN49JVHSg06txpb3UCHqGFpXg%2BZmFbYw%2BMiTYySl%2Fn9%2BXlzeLE2nBg%2B%2BCOQeR0hdDFWTfGCUL8t8KMWWdyikkXo1VTXkjBAAV8SG7oHCQyfSlADrbCWe5lw9a%2B%2Fkiu2RSUhJ00JvBhzYxktxKVmrSm2wL68WBDYRftSB1Sjna4eM3jiG02EzrAt1w67u9Q9MPGKRSQskbu8GUbwd0tNQTu9NKh4OQctbJ7i1NYtn%2Bkd7HcSkjWGOeD6zjdgPwe3DRPP61ClNlbrghjBfy%2F4j6dMUT62FwSBZJQWPOOmSZu61zW3362Fmwj22r73nuKztybBnPAsbVncMJL1rIpY1G0XWmIyWrJ3F4oo43e47yCrlZgeAHREmD6SRyKGbvNEGf27ShSUGWnFIo4dBLgoHXb2cxx1sVas8oxBPwduJ1pQZI%2F2VdjC6svq8BjqkAXEFM3%2Bh9ndBNkOIGSQZMIN%2FrJ2Lz%2FpLp810ToVVSpZqcUn8%2BzXWvIsswf9paVm8cPBXyfq7kFTy118QVQ0KcE3rIIgN%2Fj1lvgerqqF626Lsm3%2B12fNnQMyPEa6OxTVh8SUarROFyENaQrlk7BVxRdV0E50CmZyWZFO41oRoL%2BYv1pU7pnhmRzjEIpbflmhdwychoXEpE0ixe%2F0SAJrZELhQvgFl&X-Amz-Signature=cfb0156f3ca3fb9bc167f10f376bdfef82f95a6966142bea570eb211fc390920&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
