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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY233I7W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICbZtMpM9LXENuyCGUAsxalzMFcE9gRogJrj3BzwOXxrAiEA6O7njMbHEXjfLoUhb%2FEqR2vXWAqURCTBGHy5TthZSrMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy1dnR41TQ9p5Rl5yrcA3rrFRbNs875Eg3JJ9nf0nNJR6wKkZIoQI9oE9FxiwaPIAabSitdFBt1B9OwJW1suPs6F709r2Sik0Rfvlbz9KWc%2FQ6%2BePXaAjIDG58WH8RqAvJR3cTUcy1YX1Co0GG1cjpJwYPiy7vz%2FWiqCbl7aL4N%2BaSrEN22Yq5ysM%2FKbouFBS3C9AHmG2rVAvYcZTyZbIh%2F%2F5RR8pnqMydQtfbif%2Fs1zXEySHd3Ywqe%2Fh5VE38xrMFRb1s665g8G6heYliad%2FvDbfpGuRzJWBALJ5GtZvGNIy0Fn9v%2Bsd5kBfwDlWzn4VkGZT%2B3HZBz8pIWZRLyN%2Bkf%2FbLJxBB%2BWXwBwfVZZOGT%2BVDNT8XBi7uc8R4yMT9O8i2LTnLNGyxMT4HKmgVphY10KQurK0Zmvr0g2NAHbLxJaeCi8Bex%2F9br%2BPuRKeRPLzChyZzP6H%2B3vkCy0d5xT5hUVH8kCydcD05vnbQCjCCLOqzia55FWwICp2%2BlQE%2FXuUIRpUlEjBHa1rtWH233PIddVbm1UHDYhz2aNeHDujnxatK3GeONJFJkEwb0jzUtcFNrAhvfDuSblvCkYXcKyDYhucvdjTNe0QdbTul4lTyiyATonkEd65E9eaIi%2FJXEElapSaY66dtEyuU1MIjxvMEGOqUBOFqNxRO2apUb67CpeJUIYzGr6ZpVagp%2FvURi725H8ULP9fd%2FhQFNz4CAsFQS7m1F%2FtImZV%2F7ug9sWccuKa55nx5Q8qWhTFPZNAweggrw5OycTDMxEolmhZ2xH3dtRuUJmMFpUmXLoxSRvv2CpS2HCZGbfIy%2FvUij0BcVzUlE7IWrwZC5XFMHAA0gmRWYFIv6I9lZaV1tphUkC%2FNeAswRysGOwefO&X-Amz-Signature=497e8a25c8cf141f1fd7b558a189bec690026f993dbab6974206a2a768a1f3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY233I7W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICbZtMpM9LXENuyCGUAsxalzMFcE9gRogJrj3BzwOXxrAiEA6O7njMbHEXjfLoUhb%2FEqR2vXWAqURCTBGHy5TthZSrMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy1dnR41TQ9p5Rl5yrcA3rrFRbNs875Eg3JJ9nf0nNJR6wKkZIoQI9oE9FxiwaPIAabSitdFBt1B9OwJW1suPs6F709r2Sik0Rfvlbz9KWc%2FQ6%2BePXaAjIDG58WH8RqAvJR3cTUcy1YX1Co0GG1cjpJwYPiy7vz%2FWiqCbl7aL4N%2BaSrEN22Yq5ysM%2FKbouFBS3C9AHmG2rVAvYcZTyZbIh%2F%2F5RR8pnqMydQtfbif%2Fs1zXEySHd3Ywqe%2Fh5VE38xrMFRb1s665g8G6heYliad%2FvDbfpGuRzJWBALJ5GtZvGNIy0Fn9v%2Bsd5kBfwDlWzn4VkGZT%2B3HZBz8pIWZRLyN%2Bkf%2FbLJxBB%2BWXwBwfVZZOGT%2BVDNT8XBi7uc8R4yMT9O8i2LTnLNGyxMT4HKmgVphY10KQurK0Zmvr0g2NAHbLxJaeCi8Bex%2F9br%2BPuRKeRPLzChyZzP6H%2B3vkCy0d5xT5hUVH8kCydcD05vnbQCjCCLOqzia55FWwICp2%2BlQE%2FXuUIRpUlEjBHa1rtWH233PIddVbm1UHDYhz2aNeHDujnxatK3GeONJFJkEwb0jzUtcFNrAhvfDuSblvCkYXcKyDYhucvdjTNe0QdbTul4lTyiyATonkEd65E9eaIi%2FJXEElapSaY66dtEyuU1MIjxvMEGOqUBOFqNxRO2apUb67CpeJUIYzGr6ZpVagp%2FvURi725H8ULP9fd%2FhQFNz4CAsFQS7m1F%2FtImZV%2F7ug9sWccuKa55nx5Q8qWhTFPZNAweggrw5OycTDMxEolmhZ2xH3dtRuUJmMFpUmXLoxSRvv2CpS2HCZGbfIy%2FvUij0BcVzUlE7IWrwZC5XFMHAA0gmRWYFIv6I9lZaV1tphUkC%2FNeAswRysGOwefO&X-Amz-Signature=98c3bd3b9f4ec1fe590707a37215c60206aa6782eda78d2fa9714e8718bfc172&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
