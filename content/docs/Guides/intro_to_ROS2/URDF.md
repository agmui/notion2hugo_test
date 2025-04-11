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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GQO27R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA0NzAVTvt%2BJ4VWdFkHrQfdHFcSTbWCC50a5HCRozc32AiBO6aCay2aA9La8JqGvNpn4mKYII60w%2B9RZBPjKOpM9%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFAyTltkHUb3WuirkKtwDlT%2BadpMhbqtMV0RrDty1ymNSIXmQSapUaxN7KNjlKeSKsw1K3ZxfXEd2txPpEQO1T7qq6BWfKR1A5PckJ7sliQ%2Fo6CNlgwZw2zQaoYgZWZ0x3yheW7I%2BJnLzeTzIOc0tRLNsTtlvUuSAbMTulUVF6HYdtLEW0FcmSEQ1c%2F6%2BB3scQCd5b9QGazOEYgLPrc%2BvMzhjQyNubLctppsJFta9GI3k0MUFqufbBeXUQepjvmi4LLD0R%2BvMWTHt8S4AbAoSkk%2BJSlFAvT1bZWRf3lMKJ91i%2FVxWhOmiBqjnzWn%2BptxSIZiV1eMaOi8RMR4JltSqZyS8jseZtmTLWM8UmK62tqCkKPf9AVtCYxPPDIJgPpO5bbfOxI9UJ2tZUV1HUm3PHPQUSoOWNhH00D1KUGx%2B%2BiKWucdHu9U2FG9vTehunUoau2vAhFeC7Q8TguYdP6Whx5Y%2B5TN%2FRQlGKjL1DNyONmRD31BSzyvhxaoIJkVv3lrKmlx7vTZsMKMf9hrySmNQiylXQk3My9dxbdQJie3KL0xc5xOc2bsr0CkLJpwklNBLILShr004Ktc9vjoQtpYpTCytp%2BG1UNLh2OfwrDP%2Fd%2Fd2PUvgXxtHQQeF7hp3IS57Y6N4EYj%2F%2FYNX3Now%2Fd3hvwY6pgGbo2faYTZpOgGbUUYw%2BJkQT1QY4aYvMAwv2JRQtQHzqK0Lf7V6l8jy40EDY2n%2BD%2BuuNmY%2FBNuoWhziWRBAhSn1nv7eT7X0u%2FoAhIDbhftp1VhO1cp5Ckc9RJELVaTQaB7oznZb84btJugyjGCoqoveGllspH1c7OiEKDn0VzXPI2q20Q%2FNUZt84k3Rz5mqfmx1dCOoqKHAFd9gWtkZNgbpC10KhjwJ&X-Amz-Signature=9e4d374b5120c50575057fc9d51ebe51f7b34a20b85e381b52e0fca657a7ab28&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GQO27R%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA0NzAVTvt%2BJ4VWdFkHrQfdHFcSTbWCC50a5HCRozc32AiBO6aCay2aA9La8JqGvNpn4mKYII60w%2B9RZBPjKOpM9%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFAyTltkHUb3WuirkKtwDlT%2BadpMhbqtMV0RrDty1ymNSIXmQSapUaxN7KNjlKeSKsw1K3ZxfXEd2txPpEQO1T7qq6BWfKR1A5PckJ7sliQ%2Fo6CNlgwZw2zQaoYgZWZ0x3yheW7I%2BJnLzeTzIOc0tRLNsTtlvUuSAbMTulUVF6HYdtLEW0FcmSEQ1c%2F6%2BB3scQCd5b9QGazOEYgLPrc%2BvMzhjQyNubLctppsJFta9GI3k0MUFqufbBeXUQepjvmi4LLD0R%2BvMWTHt8S4AbAoSkk%2BJSlFAvT1bZWRf3lMKJ91i%2FVxWhOmiBqjnzWn%2BptxSIZiV1eMaOi8RMR4JltSqZyS8jseZtmTLWM8UmK62tqCkKPf9AVtCYxPPDIJgPpO5bbfOxI9UJ2tZUV1HUm3PHPQUSoOWNhH00D1KUGx%2B%2BiKWucdHu9U2FG9vTehunUoau2vAhFeC7Q8TguYdP6Whx5Y%2B5TN%2FRQlGKjL1DNyONmRD31BSzyvhxaoIJkVv3lrKmlx7vTZsMKMf9hrySmNQiylXQk3My9dxbdQJie3KL0xc5xOc2bsr0CkLJpwklNBLILShr004Ktc9vjoQtpYpTCytp%2BG1UNLh2OfwrDP%2Fd%2Fd2PUvgXxtHQQeF7hp3IS57Y6N4EYj%2F%2FYNX3Now%2Fd3hvwY6pgGbo2faYTZpOgGbUUYw%2BJkQT1QY4aYvMAwv2JRQtQHzqK0Lf7V6l8jy40EDY2n%2BD%2BuuNmY%2FBNuoWhziWRBAhSn1nv7eT7X0u%2FoAhIDbhftp1VhO1cp5Ckc9RJELVaTQaB7oznZb84btJugyjGCoqoveGllspH1c7OiEKDn0VzXPI2q20Q%2FNUZt84k3Rz5mqfmx1dCOoqKHAFd9gWtkZNgbpC10KhjwJ&X-Amz-Signature=b2a056ace020027e23368c2e53dd1fa857670762a322c4315f1583cc524be354&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
