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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIE42IG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQC4QYFQCc6TvoQu%2F6N0DWOSUBh%2BCEEpNyylOpNu%2FYQeXQIhAIicYzbdIXDn456IeN5znSrBQvDhkMtsr6vkfwd1azNJKv8DCBEQABoMNjM3NDIzMTgzODA1IgxdM%2F%2BiWoEEH2jjlh0q3AONJdQnWw%2BcX77z3kwSRV3hv6NKdP8GNETVNXgtKIz5f2p0alqmAGpq6sJbQxSKBQ%2BWn5dSKmoRcaP0rVDIdAEO4xleqQke%2FrGsjg6YSpw7rkZ84lpsM8FHEjP8kqFe2GwLzZN7%2FyFaBv2Ryuu8HGb5%2FmpOaET7toJAzuRhZmR%2FDGT2vw2JxpUbr7QSJocTuEuvHCdYrHXA1VuyT1IwFhzjOXy0P1yqorHxxiZ73jf%2F1s0DFF9hpZiudkioUY1OmBUFx544DA0KpcdBphapdyhs7cWsIXLnsAQ%2Bwt6kTeONVUwLdrHIh9IGZtscJVs67zMhsFgCvRhVX6KJiQfiPMcgtqr88aKI%2BDguTPRNIgGMFKIFcb4KrQm6%2BLaSxlq48rftA5KKV1LJR8Vmrl%2FvVjLeFrIjNrxCB3WszoOYrama%2BC3HVUklRoeDnbHw9IAMq%2F8%2FPVIrP0xu%2BNQ6E0VlnJgaMFz9ASTFibHIKaORl2YQ5AthLCFx50Bn8xKC6XepsyT%2B%2F9TrCp4wkSUIKBPAYQPG9uY%2BablO656kQ7krS6bii8tMOZu5bbgjK1zin6um6%2Feue2KJx%2BAQ7f4W2eQNKM2KVYtidNvTQ6XDjYbv5FkgClsh4C%2Fs3XNFydbfwjDvj%2BTCBjqkAcc3mD6btWBxSkLfWB1i2V7esyUIvzlDGZwHLFR6rUWELYb9J92HuGRK7ykfbkWHRY1SzIBeudmVS0XfZ53%2Foq%2BKcQSgFzftp2CMRJREn%2F4SKXB5Zs9d6rl2y6QQiJn5c2BmiQmAEY3eINrEEKpMAbhqVHRPQXSuLmqRqApQ7z1kmwnCyNb3aBYtk%2Bcgx%2BGAoC1rInJOZpTkif6afaWYEW8of4Qi&X-Amz-Signature=33fb8f7e4ff78d2da4b4b54804a21aa16ebdc1a8a6e54ec704ffd93732d57aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIE42IG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQC4QYFQCc6TvoQu%2F6N0DWOSUBh%2BCEEpNyylOpNu%2FYQeXQIhAIicYzbdIXDn456IeN5znSrBQvDhkMtsr6vkfwd1azNJKv8DCBEQABoMNjM3NDIzMTgzODA1IgxdM%2F%2BiWoEEH2jjlh0q3AONJdQnWw%2BcX77z3kwSRV3hv6NKdP8GNETVNXgtKIz5f2p0alqmAGpq6sJbQxSKBQ%2BWn5dSKmoRcaP0rVDIdAEO4xleqQke%2FrGsjg6YSpw7rkZ84lpsM8FHEjP8kqFe2GwLzZN7%2FyFaBv2Ryuu8HGb5%2FmpOaET7toJAzuRhZmR%2FDGT2vw2JxpUbr7QSJocTuEuvHCdYrHXA1VuyT1IwFhzjOXy0P1yqorHxxiZ73jf%2F1s0DFF9hpZiudkioUY1OmBUFx544DA0KpcdBphapdyhs7cWsIXLnsAQ%2Bwt6kTeONVUwLdrHIh9IGZtscJVs67zMhsFgCvRhVX6KJiQfiPMcgtqr88aKI%2BDguTPRNIgGMFKIFcb4KrQm6%2BLaSxlq48rftA5KKV1LJR8Vmrl%2FvVjLeFrIjNrxCB3WszoOYrama%2BC3HVUklRoeDnbHw9IAMq%2F8%2FPVIrP0xu%2BNQ6E0VlnJgaMFz9ASTFibHIKaORl2YQ5AthLCFx50Bn8xKC6XepsyT%2B%2F9TrCp4wkSUIKBPAYQPG9uY%2BablO656kQ7krS6bii8tMOZu5bbgjK1zin6um6%2Feue2KJx%2BAQ7f4W2eQNKM2KVYtidNvTQ6XDjYbv5FkgClsh4C%2Fs3XNFydbfwjDvj%2BTCBjqkAcc3mD6btWBxSkLfWB1i2V7esyUIvzlDGZwHLFR6rUWELYb9J92HuGRK7ykfbkWHRY1SzIBeudmVS0XfZ53%2Foq%2BKcQSgFzftp2CMRJREn%2F4SKXB5Zs9d6rl2y6QQiJn5c2BmiQmAEY3eINrEEKpMAbhqVHRPQXSuLmqRqApQ7z1kmwnCyNb3aBYtk%2Bcgx%2BGAoC1rInJOZpTkif6afaWYEW8of4Qi&X-Amz-Signature=529c301d65180b1e0179c0b2aa31612e467eef134d6209ce4b2e0892265663de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
