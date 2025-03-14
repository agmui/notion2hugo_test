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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWIDULR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHu8feDNBeo2PJOQl0m%2B79N%2FQ6ODAn6EoHyiwuYsDzQIhAIzeysc4Ef4Gz9kNbws1psYxZs%2BNY4YdA6fXLCV95d0hKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiNGGK31A0MFgVBU8q3AOfc%2FzieE3WKh%2FqqOSQzQagescKhBn5RdA6S0fv%2FS07puAQ2CjS0FFtdv1XzOkwlOpTk8enhbvKJAh9ZjAf8cnGohs4QVFA5UgWJIupyVxXKfhnhC5vOJ32aVzJwqwMF1WkKTAlpJM0ZtivL7spwr3MS3Zg8MLW69Ib6dS3Eb3gbzzaPGGqgCEJBQrKjGRZy1NJJADkF%2FM3mYsjwuRv%2F5dgBa4B0JjMI056hZw9G7xU6HmsG3hGDFXza11%2BEHuXSRVuxfzPPoklSjxB6QLCB1a5zeMt8X8FjGHhc6%2FxCu7E%2BactwOJiZu4Lyde%2F7awyh16Yr9u2c%2FU2B3Wc1b7X6ME3lQWzbuHTxU9ouCVTUcrzL2LNghaKYGcqnpKR1LjwG%2FYhkJxumDguTc4Pelo9G6Cr3p3OYmmpl%2FQ7bC%2BtlQvnl%2FGbu8N5EAmbqUmJg%2Ba4LImGQagtv6aKqacZAo9orZaOFkniLtErNMDFegi097nUe3W7Ap0m1ukcZ9OCPLTRGOS2uxKLCO5Q45ny%2F2bNqKgRHx5Luch0S0d%2FrtscOc%2BCfYO%2FIapDl9ThnQr2vFbPZcT8zj%2BHSK0w1KzpuyOgm5UDzRKcjCUxJZZYsyDfEtFo93QWa1aMPFOUJwVg7DClxs%2B%2BBjqkAVW2xT5WiVK7t30kxmw%2BcJE2ozvT7TF%2BX0QKdomzPqptXJ6l65LFDJ3yoQoF2ItvwLPfjeffySNpFXLT3gV06zwTM70cv89Mv%2BfCmlwbWD%2BmqNse3xhnPxPzyxzcfJpy7W1%2FqLQiSnWf7KhJyqDSVvd4ywhSCwIhY%2FHS3J9RES865Uea9LpPPh2WezpADFQgubp%2Bd53Fb05TperB90kDgfvTsUW%2F&X-Amz-Signature=f7c8fce6a5ca6c581f04affa3bf1fffdc990ed0b27356a4060b9f365d8dea241&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWIDULR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHu8feDNBeo2PJOQl0m%2B79N%2FQ6ODAn6EoHyiwuYsDzQIhAIzeysc4Ef4Gz9kNbws1psYxZs%2BNY4YdA6fXLCV95d0hKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiNGGK31A0MFgVBU8q3AOfc%2FzieE3WKh%2FqqOSQzQagescKhBn5RdA6S0fv%2FS07puAQ2CjS0FFtdv1XzOkwlOpTk8enhbvKJAh9ZjAf8cnGohs4QVFA5UgWJIupyVxXKfhnhC5vOJ32aVzJwqwMF1WkKTAlpJM0ZtivL7spwr3MS3Zg8MLW69Ib6dS3Eb3gbzzaPGGqgCEJBQrKjGRZy1NJJADkF%2FM3mYsjwuRv%2F5dgBa4B0JjMI056hZw9G7xU6HmsG3hGDFXza11%2BEHuXSRVuxfzPPoklSjxB6QLCB1a5zeMt8X8FjGHhc6%2FxCu7E%2BactwOJiZu4Lyde%2F7awyh16Yr9u2c%2FU2B3Wc1b7X6ME3lQWzbuHTxU9ouCVTUcrzL2LNghaKYGcqnpKR1LjwG%2FYhkJxumDguTc4Pelo9G6Cr3p3OYmmpl%2FQ7bC%2BtlQvnl%2FGbu8N5EAmbqUmJg%2Ba4LImGQagtv6aKqacZAo9orZaOFkniLtErNMDFegi097nUe3W7Ap0m1ukcZ9OCPLTRGOS2uxKLCO5Q45ny%2F2bNqKgRHx5Luch0S0d%2FrtscOc%2BCfYO%2FIapDl9ThnQr2vFbPZcT8zj%2BHSK0w1KzpuyOgm5UDzRKcjCUxJZZYsyDfEtFo93QWa1aMPFOUJwVg7DClxs%2B%2BBjqkAVW2xT5WiVK7t30kxmw%2BcJE2ozvT7TF%2BX0QKdomzPqptXJ6l65LFDJ3yoQoF2ItvwLPfjeffySNpFXLT3gV06zwTM70cv89Mv%2BfCmlwbWD%2BmqNse3xhnPxPzyxzcfJpy7W1%2FqLQiSnWf7KhJyqDSVvd4ywhSCwIhY%2FHS3J9RES865Uea9LpPPh2WezpADFQgubp%2Bd53Fb05TperB90kDgfvTsUW%2F&X-Amz-Signature=e1c78f3dc3447ecd8044996cfcab374e4b6da4d852beceeb8396f3cdce903973&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
