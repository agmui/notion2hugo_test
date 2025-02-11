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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCIAQXH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWSOzD4GPz2%2BQc2fkK11kiR%2Bq12PT0V65iprmNvJwVqAiEAh7uS2N%2FtvUIPEY%2F4545nqZ%2BGhLaS%2FX1wqhARU6OnRcQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDzbZqUf5M33EfT%2FircA0ffYiD%2BJ11KgM4cNb%2BWlJBl%2FrOU1nB7wP1KS2aK3m02m7g8xcH1UkOFN5d6497yLez5sk41kyyltWsxFqESthfsaUISB5Oagxr9mHDPCa1p5OyXTgl%2BxoE8LZ2uTwG1vNJEwOsMpJi4tc0H%2B16ezn3xHH3eErzxXxHUHuOToTlJxivdp%2BM%2BE1jmM2MvkgUUxeX1TsAzmrIAuB9UneXWZdOqv%2B2wexnKSzPaVzbTmu19N%2BtJcUtURz8Tj%2FrFbxtnvKb%2FzvNkjst6kfChdDqZu47fBpZuik40zmvQiqPJIAfh8oSYnB44v9hEARsbqa8o4FfBzdEwU%2F4tHNEnVNG0iTd9UgCqb1IxGzNUO2C8sG%2FACwj%2BtGeyGnh1sx23xx2rH%2B4x7YmJysQw2neeiNRp2XEJYiFqekN6Qa9mWuD7zAUQRPpyHrKxxBc2b5sxDjgDh2%2FXZpheaSZsumQVocl4DibgQG3TjXBWNvDD4tdcKrlW3UZxi3lh8xdf9Ug%2Bn7h%2BZeh%2F9J%2FeodXrZ1%2FcOyPC%2Fqjjzl0jGYYOVofyKhiVlyIHJCToGmQ%2B3yHQxHRrJbyx0LMnv%2FGwtAowlm%2BGiNvnIRDuqbHi5FK39WbJhH1vomv1x8NUFULIVzFUZuL2MImcrL0GOqUB%2Fn5O%2BBU76NL6%2FYGeG6nZ7KAzyzu0RXf0HbPx7caBJWeQMEMT7tO1TlBYo%2BLvYkcjFjnps8QWXSHEiPJXptYFrGMiBAWj3HxoxkAf5lB%2FkCVDvUK0xDNetzb%2B32hSeTrqQLTg%2BA2W7dYsdehcVR%2BFQKlNSIkVUZA32tCmvIGgMdrYRkgizWqqZatfs2JV2kNUmg2n8ydj3Rr11NilWBzcvuwfMfwY&X-Amz-Signature=df42e583b9969dd55cef3be4747eab7a09b02a8d3795c2e28090255cce1ccae4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCIAQXH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWSOzD4GPz2%2BQc2fkK11kiR%2Bq12PT0V65iprmNvJwVqAiEAh7uS2N%2FtvUIPEY%2F4545nqZ%2BGhLaS%2FX1wqhARU6OnRcQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDzbZqUf5M33EfT%2FircA0ffYiD%2BJ11KgM4cNb%2BWlJBl%2FrOU1nB7wP1KS2aK3m02m7g8xcH1UkOFN5d6497yLez5sk41kyyltWsxFqESthfsaUISB5Oagxr9mHDPCa1p5OyXTgl%2BxoE8LZ2uTwG1vNJEwOsMpJi4tc0H%2B16ezn3xHH3eErzxXxHUHuOToTlJxivdp%2BM%2BE1jmM2MvkgUUxeX1TsAzmrIAuB9UneXWZdOqv%2B2wexnKSzPaVzbTmu19N%2BtJcUtURz8Tj%2FrFbxtnvKb%2FzvNkjst6kfChdDqZu47fBpZuik40zmvQiqPJIAfh8oSYnB44v9hEARsbqa8o4FfBzdEwU%2F4tHNEnVNG0iTd9UgCqb1IxGzNUO2C8sG%2FACwj%2BtGeyGnh1sx23xx2rH%2B4x7YmJysQw2neeiNRp2XEJYiFqekN6Qa9mWuD7zAUQRPpyHrKxxBc2b5sxDjgDh2%2FXZpheaSZsumQVocl4DibgQG3TjXBWNvDD4tdcKrlW3UZxi3lh8xdf9Ug%2Bn7h%2BZeh%2F9J%2FeodXrZ1%2FcOyPC%2Fqjjzl0jGYYOVofyKhiVlyIHJCToGmQ%2B3yHQxHRrJbyx0LMnv%2FGwtAowlm%2BGiNvnIRDuqbHi5FK39WbJhH1vomv1x8NUFULIVzFUZuL2MImcrL0GOqUB%2Fn5O%2BBU76NL6%2FYGeG6nZ7KAzyzu0RXf0HbPx7caBJWeQMEMT7tO1TlBYo%2BLvYkcjFjnps8QWXSHEiPJXptYFrGMiBAWj3HxoxkAf5lB%2FkCVDvUK0xDNetzb%2B32hSeTrqQLTg%2BA2W7dYsdehcVR%2BFQKlNSIkVUZA32tCmvIGgMdrYRkgizWqqZatfs2JV2kNUmg2n8ydj3Rr11NilWBzcvuwfMfwY&X-Amz-Signature=648e43dfcfaf8afa1b99bd179a7d90f79d3c19d5e56b368df839d2b2d7fd2475&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
