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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBJX6TT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHzoTjkzuXOQBk%2F%2FhQUHndbPwcy%2FalXfGXx6VUkQuVNgAiEAj6TYEaUqMiwF8ewein6XBPa6EIHbD%2FlS4jCI6sxShToqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeOX56A2d5iPEnJ%2FCrcA56TziLrnYN1iSKJmfBrrXRYpHSMQY3bQ3Nq0BuIC9jDDZWSUybflmUgV0zcLgAbWY20WTXWuHJ6WRQyhgyD1OFCxtEkeyY1thokU5jiSskopScDqz9C4WeXFPEHOJmbbp6steT16nkb7aQCXw73wVKYVCfxVBgj15Va4u8R%2FoOPz01IclGkQ3q19T9HW5bF1ytjSMi2oSPIoG1EwE4k6VQQgPhta5UWJuCSHmIBAHm6AhQuxY2F4FARl5BcAWsWizIbNOIrovh80QWPD8HN2PdWLz2rymhM9XwYJY%2B00J0%2BnVgcV%2FjNxXvQiBfEZvIb92owgdYkJ%2B6auhXZ50driGDur0QLd5K%2FHj1ezmlvfNarpKW%2FYbl5QAjfCcr5t1JnLFfZcItrjn0qOXMfUELHKHTTORQtQ6mXSJz5ji0rNkN9VuhkvgEGmxLvjO2IsLO3ks%2FHWerz1LOK%2FjbNNrnHF%2BJhQAtmmcWLwFasZk5blDnNvBN0X8qrFoMWWWTWQNgFCyxQGHKDsDOxT%2FF1awggYlWRSufM7X7qdQfor0QqYusYpQjoh%2FTUw%2F7UB15O%2BXcjDymLJoVpaJaFqXqVa19jhBzv8Jhtlt1h1ApJdWO58enEfwDcjcSu2D3nD3bFML7Ps78GOqUB49OU4kFamHvG2iq5TKWsT2GUR9Yk7ZrLDo2JGaEVOSuzHukwthT0%2Bo9%2FPgGi3yld0DS%2FPau1WWSlEGTDgXxEXaz7Bxxu8aRO2s9deJzCKSQywd0W0OBuUh8DF6Cc3TPsxWpFwGja8c00bLD2R2TItsSACDdwJO6OVWjHo896noBuhgiICuXY5nIqLXoumCoaFmlMmbasg139%2B6M4jQ%2F%2Bfdc5VPwJ&X-Amz-Signature=7c457192e921844d66d97e925397328884c3fa70b31d5bc83e6c7177b7ca9e22&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBJX6TT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHzoTjkzuXOQBk%2F%2FhQUHndbPwcy%2FalXfGXx6VUkQuVNgAiEAj6TYEaUqMiwF8ewein6XBPa6EIHbD%2FlS4jCI6sxShToqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeOX56A2d5iPEnJ%2FCrcA56TziLrnYN1iSKJmfBrrXRYpHSMQY3bQ3Nq0BuIC9jDDZWSUybflmUgV0zcLgAbWY20WTXWuHJ6WRQyhgyD1OFCxtEkeyY1thokU5jiSskopScDqz9C4WeXFPEHOJmbbp6steT16nkb7aQCXw73wVKYVCfxVBgj15Va4u8R%2FoOPz01IclGkQ3q19T9HW5bF1ytjSMi2oSPIoG1EwE4k6VQQgPhta5UWJuCSHmIBAHm6AhQuxY2F4FARl5BcAWsWizIbNOIrovh80QWPD8HN2PdWLz2rymhM9XwYJY%2B00J0%2BnVgcV%2FjNxXvQiBfEZvIb92owgdYkJ%2B6auhXZ50driGDur0QLd5K%2FHj1ezmlvfNarpKW%2FYbl5QAjfCcr5t1JnLFfZcItrjn0qOXMfUELHKHTTORQtQ6mXSJz5ji0rNkN9VuhkvgEGmxLvjO2IsLO3ks%2FHWerz1LOK%2FjbNNrnHF%2BJhQAtmmcWLwFasZk5blDnNvBN0X8qrFoMWWWTWQNgFCyxQGHKDsDOxT%2FF1awggYlWRSufM7X7qdQfor0QqYusYpQjoh%2FTUw%2F7UB15O%2BXcjDymLJoVpaJaFqXqVa19jhBzv8Jhtlt1h1ApJdWO58enEfwDcjcSu2D3nD3bFML7Ps78GOqUB49OU4kFamHvG2iq5TKWsT2GUR9Yk7ZrLDo2JGaEVOSuzHukwthT0%2Bo9%2FPgGi3yld0DS%2FPau1WWSlEGTDgXxEXaz7Bxxu8aRO2s9deJzCKSQywd0W0OBuUh8DF6Cc3TPsxWpFwGja8c00bLD2R2TItsSACDdwJO6OVWjHo896noBuhgiICuXY5nIqLXoumCoaFmlMmbasg139%2B6M4jQ%2F%2Bfdc5VPwJ&X-Amz-Signature=9303d2e8e081544feb5308cab950ccb57994be5a419a2083b5a5dd964a1c44b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
