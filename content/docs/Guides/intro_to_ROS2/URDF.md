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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PWL6XQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClOoh8awgc1QjlzvkI5DmBDqhl2InnaAMBLs4chTjvWgIgIDpMbQ%2Bv%2Bk33hpsobLJTTgh9dtVYVBHa2U8YxklKoh0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0qM5SrEwG8bTBESrcA9ajXc1Al8z%2Fe1J2ecysESWG1PePQsCE6GlG8CEXYBVdkvBOMux1DzOEAVSgdAwFR6wfDUW%2FVNGVzaQtLrghfX1Lp84QUCwxzfBsN%2FM0eIgEsvo3XGV5P5V9LFHVMFvY8ZENDPrLX0Bn8oxtd5h2x50O8gV5A3tpuUbWXsnJvCJJTQBMkzyYV6%2Fg2LjX%2Bcd9bwkNSo8KlThgn7LME9bwVQ4RAoD%2F7ujI4T%2BRaU%2FU5%2BRDUzDvjWZWjni4fYQxFU9JnnjxuefA%2Fug5L2yAa6vVOuz6PtbzOYcA%2B6iAQnep5ZR7oBxITueUqBWMdh%2FLFAgfbMGolCEkLpl973FzYZtIBY7VIa5nPTBTSfc1gkLEP9UNSLLPGuomdMSyX8Vwlw6A0mTC5XrSv6EbZkTYdBmVwCGq9jE6%2FgrBhAF2Cgku%2BlvhaldVyELCVIzqXzpq3axrQulNgD8O9A6URDa90vEVlhICaynFWNeUPeYUQcL8%2F%2BO1q0C0hG6LL6%2BeX1jTxEow3imAENfK5V2%2B4MTUZztDRbo861z8gbvort4%2FIDfGiEHDf0WFtEn0OvW%2FtAJGczn3yyY3hfkJ%2FUDYMYvV9qW5bW5o%2BaxbFGJ3L6ELbMjSZpiatedDKvUwz0TxaJ0BMPyY4b0GOqUBxlb2s5CCyHhNmq6BHOPrY%2FA5oA7yYU8UNXuB39HZveij%2F6j75KYmUiEeOxuQE3Kd5opfKBZJeVvFv9jzObLA8Y3eJgkGPS7LhDDB0XYw98iQa6CHKOc3gENUvjuiDJObschq%2BbjtgPYY3v00KyOZNH76BARdlP1HolLseox6qFMpOurzpdbr%2FOy7KIawBOX%2Fk0dUAEdGKZDQMz%2FxzgzUOwnwbk7z&X-Amz-Signature=f65ccacb339e01932f24ac4813ccfc11f0bc86407184c026a2d5de40b45f4828&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PWL6XQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClOoh8awgc1QjlzvkI5DmBDqhl2InnaAMBLs4chTjvWgIgIDpMbQ%2Bv%2Bk33hpsobLJTTgh9dtVYVBHa2U8YxklKoh0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ0qM5SrEwG8bTBESrcA9ajXc1Al8z%2Fe1J2ecysESWG1PePQsCE6GlG8CEXYBVdkvBOMux1DzOEAVSgdAwFR6wfDUW%2FVNGVzaQtLrghfX1Lp84QUCwxzfBsN%2FM0eIgEsvo3XGV5P5V9LFHVMFvY8ZENDPrLX0Bn8oxtd5h2x50O8gV5A3tpuUbWXsnJvCJJTQBMkzyYV6%2Fg2LjX%2Bcd9bwkNSo8KlThgn7LME9bwVQ4RAoD%2F7ujI4T%2BRaU%2FU5%2BRDUzDvjWZWjni4fYQxFU9JnnjxuefA%2Fug5L2yAa6vVOuz6PtbzOYcA%2B6iAQnep5ZR7oBxITueUqBWMdh%2FLFAgfbMGolCEkLpl973FzYZtIBY7VIa5nPTBTSfc1gkLEP9UNSLLPGuomdMSyX8Vwlw6A0mTC5XrSv6EbZkTYdBmVwCGq9jE6%2FgrBhAF2Cgku%2BlvhaldVyELCVIzqXzpq3axrQulNgD8O9A6URDa90vEVlhICaynFWNeUPeYUQcL8%2F%2BO1q0C0hG6LL6%2BeX1jTxEow3imAENfK5V2%2B4MTUZztDRbo861z8gbvort4%2FIDfGiEHDf0WFtEn0OvW%2FtAJGczn3yyY3hfkJ%2FUDYMYvV9qW5bW5o%2BaxbFGJ3L6ELbMjSZpiatedDKvUwz0TxaJ0BMPyY4b0GOqUBxlb2s5CCyHhNmq6BHOPrY%2FA5oA7yYU8UNXuB39HZveij%2F6j75KYmUiEeOxuQE3Kd5opfKBZJeVvFv9jzObLA8Y3eJgkGPS7LhDDB0XYw98iQa6CHKOc3gENUvjuiDJObschq%2BbjtgPYY3v00KyOZNH76BARdlP1HolLseox6qFMpOurzpdbr%2FOy7KIawBOX%2Fk0dUAEdGKZDQMz%2FxzgzUOwnwbk7z&X-Amz-Signature=6bc98cfdb824b0873796d17d85eb08f11db4e3b7e14bea197014b6fef8281757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
