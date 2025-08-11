---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574CHMWR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwDe2pZAoCUQaZYJWlwYTA5AKT0nVyVhcqZhibHImsAiBTyNarzJc5xG%2FrujJM9WE4nCqr%2FiCDLziDzw3JVTwpsSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLR1MYa6obSt%2FK38XKtwDOqO6vYvhv8BKkkIFR3C3lJ7A3ZLiYuttk8uZtQOqufYqrl0cjdGuoIKPN8g%2FiNxswk5xIcjA6aram%2B19Hg%2B0lhUCwiK5jSUIhupgvW5i0OA9%2B%2F6hHPR3WHv5wmfEosKK5m14GJriyP552qlOGHjYelf%2FeO1ifopIr3rTwNUz0x0EHKpM1hdmpTxeb4ebby6QT6mry7zjVXJA%2Fk%2Fg%2Fd3npAJhvDRNCNaHf1%2Ble3pgpET9FoP5i6kDuiDYvy1rx9Lo1G%2FpnvAwa2LynAOs62q7b7LDVmWgLYeFKJLANTs0RcVytSRd9r9YnySIP%2BAD1ZQs5Nt714y%2FWlnv5DtA7foEApek6HXrYxNr8hXs4yFdQBc%2BQNVh5uc7mjecj0HdMobuoBl7K0S9z7hVEMoEr6LozDvnU4THnlP0qFwjQXXDsYk2S6lOkmVrdV6pqu3vlSfN7YmPfGPVtd6TslXNSZX1bSczrPQDpbr0ueOPtECMJlcS9MBG2r3%2Flqama0ztcJBvYc1h2NA0t68u6spdiJKsrHnpNwQsqoAwpmTqhT3E19elH%2BvfIMF07wAbxOYHaWbjmn9gqNkaUsMzxe5FemoY4n6U71fbmYK%2FacQpe8wMrLDaUPlztGcNq5s99eIw79LmxAY6pgH7Bi6WHUqSRhXQHYiDxfLd21vjpuhKg0kddWdhU2RGkXIqJQyfyXvIQBRcXox4zUgrvDAnmTulFNTkFpYE5gwgbpCLrkL51uC73RCsqlBvN5xeRCCL%2Fcmfl6UsPiVqnDGVg%2FVWb9zQbSjj7kjRSbpZ2hJJX%2BBdRT2HoSJIpxEkMnZRaZYY74uIDpsvt%2F0eK4ulZiISor%2Fm0WgqRoA3bVQYSqq8R0nN&X-Amz-Signature=f0f6ad2091e34e77ced54e8dcc4ed3b3d8acb46ce3109d7ba0fa9100ebf7a4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574CHMWR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwDe2pZAoCUQaZYJWlwYTA5AKT0nVyVhcqZhibHImsAiBTyNarzJc5xG%2FrujJM9WE4nCqr%2FiCDLziDzw3JVTwpsSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLR1MYa6obSt%2FK38XKtwDOqO6vYvhv8BKkkIFR3C3lJ7A3ZLiYuttk8uZtQOqufYqrl0cjdGuoIKPN8g%2FiNxswk5xIcjA6aram%2B19Hg%2B0lhUCwiK5jSUIhupgvW5i0OA9%2B%2F6hHPR3WHv5wmfEosKK5m14GJriyP552qlOGHjYelf%2FeO1ifopIr3rTwNUz0x0EHKpM1hdmpTxeb4ebby6QT6mry7zjVXJA%2Fk%2Fg%2Fd3npAJhvDRNCNaHf1%2Ble3pgpET9FoP5i6kDuiDYvy1rx9Lo1G%2FpnvAwa2LynAOs62q7b7LDVmWgLYeFKJLANTs0RcVytSRd9r9YnySIP%2BAD1ZQs5Nt714y%2FWlnv5DtA7foEApek6HXrYxNr8hXs4yFdQBc%2BQNVh5uc7mjecj0HdMobuoBl7K0S9z7hVEMoEr6LozDvnU4THnlP0qFwjQXXDsYk2S6lOkmVrdV6pqu3vlSfN7YmPfGPVtd6TslXNSZX1bSczrPQDpbr0ueOPtECMJlcS9MBG2r3%2Flqama0ztcJBvYc1h2NA0t68u6spdiJKsrHnpNwQsqoAwpmTqhT3E19elH%2BvfIMF07wAbxOYHaWbjmn9gqNkaUsMzxe5FemoY4n6U71fbmYK%2FacQpe8wMrLDaUPlztGcNq5s99eIw79LmxAY6pgH7Bi6WHUqSRhXQHYiDxfLd21vjpuhKg0kddWdhU2RGkXIqJQyfyXvIQBRcXox4zUgrvDAnmTulFNTkFpYE5gwgbpCLrkL51uC73RCsqlBvN5xeRCCL%2Fcmfl6UsPiVqnDGVg%2FVWb9zQbSjj7kjRSbpZ2hJJX%2BBdRT2HoSJIpxEkMnZRaZYY74uIDpsvt%2F0eK4ulZiISor%2Fm0WgqRoA3bVQYSqq8R0nN&X-Amz-Signature=4cd0b5671315fd7cbfcce0cc017300baffbba9de0604ba459ad3657293287f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
