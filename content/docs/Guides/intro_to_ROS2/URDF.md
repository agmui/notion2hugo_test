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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PV43UD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDGYHOTd26k9EBv4T9ssLr2ZiRBd0Xr0Blj7FucDzZsagIgCsIXlCOUzwd9CvJdOyRKG2HWBlbgJpaUYrFOaWir3FMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB51LEw7u8UZKIZAKyrcAyqrwDC8l%2Bqdk0jflWwPkS5QNxempqGnumn%2BSFMj06V5AgBk4OWHtMzKwNxzI9M1SxqCRR8AMUTP0%2BgGmLgSbECaGoRYAWwq3CGE2G5PO35SdOFX%2F15Hdkya35I4fMVPjjnSRd7lr18ii1oJiNg62wwbFIRE8%2BK915%2BuwMKrBVaU1YdI2T3tZ8KqQl%2BBU8ALbT3jiYI2IhHgAAkzIpENcCuYxRsJrv6XiqLi8tTHmyMEtjinVBEbLqHsvwmK62nd1MhaGoWIpi1aQddz69758X%2FFOZmNDQfWL7t2GNY4YY43bBvAVwR9kApptHckIqQmU8hgVvi2e17wuybPojLVdQek5I2%2FXwjkxXsTrj3TpJDTVvw4oSbjbqJsr77qkZ7MXzCDB4ztX48KIBLhGniznTOj5GEcD8jPSDAOYCx8YStRuIFt1Agpng5PmxYVLHOIOQJdbJ%2FEvpiYzzwXtVrTXAJOetYYTO2l1TYquanIWMUBqcMVfF2FV%2BRgZoN7ltLKxPpxHHxftak5%2F9Zbihs%2Fls7cgCbUXwtEoCusIUVNNE5sQ%2BGKreMJEt99qIpwASaQAtj6s6HtsDn3CoDTJftRHcIgSwlol8%2BGwINvbguEUrX%2F3yln%2B02CoXxdw1OHMKepsb8GOqUBAZ3oLgfcucu856QdYJI3dZZkzBYiPj6esQpLjW36ytqLbLQYHx0GND8jDrNWfjtsT0L6eFTS5zdVYuyogZL%2BT8cCCoavCUNiKep5hNDAW%2BD%2BcElQ3d0CVJwmWh%2BjgVEE4hdczaUTtsZgHd%2FXyVPhs57m%2B4GXMBFkVk645dxdN1ZYMw9s1qXhWSnTmXOiELa4VqO3O9eW5ChCxCe2g4kd%2FAWq6Ivj&X-Amz-Signature=6c29048507f84dc250e14a3d8c39154dcbf40380debd638b06cfca59bd60004e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PV43UD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDGYHOTd26k9EBv4T9ssLr2ZiRBd0Xr0Blj7FucDzZsagIgCsIXlCOUzwd9CvJdOyRKG2HWBlbgJpaUYrFOaWir3FMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB51LEw7u8UZKIZAKyrcAyqrwDC8l%2Bqdk0jflWwPkS5QNxempqGnumn%2BSFMj06V5AgBk4OWHtMzKwNxzI9M1SxqCRR8AMUTP0%2BgGmLgSbECaGoRYAWwq3CGE2G5PO35SdOFX%2F15Hdkya35I4fMVPjjnSRd7lr18ii1oJiNg62wwbFIRE8%2BK915%2BuwMKrBVaU1YdI2T3tZ8KqQl%2BBU8ALbT3jiYI2IhHgAAkzIpENcCuYxRsJrv6XiqLi8tTHmyMEtjinVBEbLqHsvwmK62nd1MhaGoWIpi1aQddz69758X%2FFOZmNDQfWL7t2GNY4YY43bBvAVwR9kApptHckIqQmU8hgVvi2e17wuybPojLVdQek5I2%2FXwjkxXsTrj3TpJDTVvw4oSbjbqJsr77qkZ7MXzCDB4ztX48KIBLhGniznTOj5GEcD8jPSDAOYCx8YStRuIFt1Agpng5PmxYVLHOIOQJdbJ%2FEvpiYzzwXtVrTXAJOetYYTO2l1TYquanIWMUBqcMVfF2FV%2BRgZoN7ltLKxPpxHHxftak5%2F9Zbihs%2Fls7cgCbUXwtEoCusIUVNNE5sQ%2BGKreMJEt99qIpwASaQAtj6s6HtsDn3CoDTJftRHcIgSwlol8%2BGwINvbguEUrX%2F3yln%2B02CoXxdw1OHMKepsb8GOqUBAZ3oLgfcucu856QdYJI3dZZkzBYiPj6esQpLjW36ytqLbLQYHx0GND8jDrNWfjtsT0L6eFTS5zdVYuyogZL%2BT8cCCoavCUNiKep5hNDAW%2BD%2BcElQ3d0CVJwmWh%2BjgVEE4hdczaUTtsZgHd%2FXyVPhs57m%2B4GXMBFkVk645dxdN1ZYMw9s1qXhWSnTmXOiELa4VqO3O9eW5ChCxCe2g4kd%2FAWq6Ivj&X-Amz-Signature=5259e862880e1970bed23923f496ca9e44b6bfb404368ef3d2ad14b69e8f2876&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
