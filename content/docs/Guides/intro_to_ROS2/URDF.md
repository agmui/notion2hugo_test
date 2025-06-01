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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIZVSAC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDwssu6HMQAXmXzRZZCe6b6XNHrtaJFxURnwI2hSbDCaAiA%2FEsDdPoVh24RYJjOAdC%2BLNYn0ZyOOaXcfUm%2FyVM7k9CqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSzHK3%2B9eRqnmqD1KtwD13ERNHHLgEp%2BFSqKVt9n%2BjZJ7SRG%2FABoZS6PbgK5XcsR49PVh%2BtgVbsZM39cST5NcT1Ie2pQMcjVIIx%2FptTpvqoMYZ6RzH7DWQcg%2BdcOrHTbe6c9KtvOjwXk18Yr9VFwUBRMzxrzqcE%2Bp2t6%2F4QMbLlJZiqeyKhrMg4yzzWxBQUTIjVk6v3Y17qSQfLVX3i0oKrhx2ESOQwaJziuQSknb8t74j%2BKvdDl2OBLzzhvTYa0ZMaYMHWRkpVavTpPwLLA9JJrr%2FdSFJ20er1g%2F99vTvtv0RNPa6FzCbMERWTqNRIaDMRoj7r66zL1xq%2FcrMc7NXg1le%2FzRCOtINgMSLCFuwzaZXIS%2BPLZ25RXMShiVlVyvdRAlI%2BGY7mBq8k6gQYrfoZtKn8YXYhDXL0SGUCX95GNNJ1WPS6kRkShb9%2F6VdRJAvgzoxncTaQjrtYc2jnozuhnxdKK4QFpv0a8T3kYjGpk8QjCk1ulIsNy00W10c1iZHcBG9gYNiG32hwrgp%2BzqKnfdgfHn39oCn2jbtWzWufOe%2FBCuouWAw9jzL8kphdbl58kzOXUcpPb9CgFvwwTdJAppyc9FPIw8l%2F9Cc3RMqiEwycVJxdMqWO4NB8%2FxztlmdqZoweQ6ejKGQIwpYDywQY6pgE11AJTSAeFR9POFylGhSQggEUzhVd0QWja8XKxyYtKa%2BOgRFM3cC%2BFxueAsNxH9JXLpW4lCrKgl1rEXmLOvQBlnJ77eF0Dz8PLE4DX%2FT4b%2F2YqstKOI9Y%2F7oB3Yr8%2BAsqxCa5y11SjnMLkAYmJdpdW7hiNOu7JkiEpsAr43xyy0FNp3biL0kaW6DRET9SP5gn%2Bquriv55pXMuepb2tmk22wCDl6ReH&X-Amz-Signature=ba288a254a841bd7a9ebd78863478abcd2a69c4b4c251cac208908574a38eab7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXIZVSAC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDwssu6HMQAXmXzRZZCe6b6XNHrtaJFxURnwI2hSbDCaAiA%2FEsDdPoVh24RYJjOAdC%2BLNYn0ZyOOaXcfUm%2FyVM7k9CqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSzHK3%2B9eRqnmqD1KtwD13ERNHHLgEp%2BFSqKVt9n%2BjZJ7SRG%2FABoZS6PbgK5XcsR49PVh%2BtgVbsZM39cST5NcT1Ie2pQMcjVIIx%2FptTpvqoMYZ6RzH7DWQcg%2BdcOrHTbe6c9KtvOjwXk18Yr9VFwUBRMzxrzqcE%2Bp2t6%2F4QMbLlJZiqeyKhrMg4yzzWxBQUTIjVk6v3Y17qSQfLVX3i0oKrhx2ESOQwaJziuQSknb8t74j%2BKvdDl2OBLzzhvTYa0ZMaYMHWRkpVavTpPwLLA9JJrr%2FdSFJ20er1g%2F99vTvtv0RNPa6FzCbMERWTqNRIaDMRoj7r66zL1xq%2FcrMc7NXg1le%2FzRCOtINgMSLCFuwzaZXIS%2BPLZ25RXMShiVlVyvdRAlI%2BGY7mBq8k6gQYrfoZtKn8YXYhDXL0SGUCX95GNNJ1WPS6kRkShb9%2F6VdRJAvgzoxncTaQjrtYc2jnozuhnxdKK4QFpv0a8T3kYjGpk8QjCk1ulIsNy00W10c1iZHcBG9gYNiG32hwrgp%2BzqKnfdgfHn39oCn2jbtWzWufOe%2FBCuouWAw9jzL8kphdbl58kzOXUcpPb9CgFvwwTdJAppyc9FPIw8l%2F9Cc3RMqiEwycVJxdMqWO4NB8%2FxztlmdqZoweQ6ejKGQIwpYDywQY6pgE11AJTSAeFR9POFylGhSQggEUzhVd0QWja8XKxyYtKa%2BOgRFM3cC%2BFxueAsNxH9JXLpW4lCrKgl1rEXmLOvQBlnJ77eF0Dz8PLE4DX%2FT4b%2F2YqstKOI9Y%2F7oB3Yr8%2BAsqxCa5y11SjnMLkAYmJdpdW7hiNOu7JkiEpsAr43xyy0FNp3biL0kaW6DRET9SP5gn%2Bquriv55pXMuepb2tmk22wCDl6ReH&X-Amz-Signature=3298ff28d305edcaeff6ee9f632dcdb9cab6e07d98c625e84280ce2623301afd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
