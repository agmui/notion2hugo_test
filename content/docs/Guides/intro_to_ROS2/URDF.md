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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJL3NJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGYS0zKrPSaNor%2FhM3iYpCx4vWHj2s2V9ytHdm%2FWG8PAiAc7n0eRN5Qn16JXX85APogS%2F7mIbN%2FvwBFa5MI07ibxSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSxRTXt8W4Tt5f5GHKtwDsfhd%2FtkOsqUa8ccNnkDJ1yZeh3uXNFuFoZWsKqsZj9EJSUSiZEqqmmMzkTbH%2BK%2BaC99adXGnIwi7fXalLqRRxHGpy5o%2B8Claw79X%2BBpn7EWPpcpaC5JL21tcBLnQ3BrDec78CEYEyNktv0oBS45lF3niLGMigAqVS%2B1ipYOe8z%2Bzy%2BaY9cC%2BFOmMzmxamQbQXUU%2FrHsjLY3ARC6gS9VMeenpn0zNfVtYbmsrttfG7v2oBuT9q63HapGtPrCPXkppYJicbver%2BAnxbHflh5TTuxoXVQWBzhBnDSsegDYtbi3jCEmuZUnJJKa%2FsPF3MNCIhAKx2Ax3CRmt%2FgJMQwppAoE%2BeIWAlM5D5Ed%2FFZ8qMPbWUyKrYlcy1ky0mVjo0m%2BmujjxeoATuttx4OU27fPQiLBoLvndkdIEWsYVz40ft2NpZp35Wmgod%2B%2B72dk1yptceC1VIW8jUPi1CQhO5sGPg7%2B5uTJ11HQa5AA7uRT67AuFehP9Xa3qvFooxdrn7%2BkcyESZKpk3RW1L1IyWm%2FyrgcglhztczQj7e7WY9awIykMK%2Bo0jvRZ76shvij3NX7DAVn77qNqUVx8bQflB8mETIRhwUvfLZWYduH4A%2BTYngitsNUj09Co2QTxoeGQw7tDVvgY6pgGk%2B2s2yAyNIL4R7Q65yT01JKnTQNhtaGKCSwpRGEogIRZCHgnPnvOPFGSZb89Z6Q90iEThEudrUlalv%2BtAY0aqQGU3rz4nj9d9gBRB7AYNwhn165LW6V9W9yiYL67SnG5K8Doo9%2FETgkvlAyZhn4zaXhaBLDIYH8W%2FFM%2B29igYJuMZeSR4SAUFgerZvEhDp%2FChjobFJ9%2FT5zbCVCxhFbeUwK1FiPxH&X-Amz-Signature=05e705cdf17799f62bc8e21b9cd96fd182b1e23bca98b990ae5fb26b106ca300&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJL3NJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGYS0zKrPSaNor%2FhM3iYpCx4vWHj2s2V9ytHdm%2FWG8PAiAc7n0eRN5Qn16JXX85APogS%2F7mIbN%2FvwBFa5MI07ibxSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSxRTXt8W4Tt5f5GHKtwDsfhd%2FtkOsqUa8ccNnkDJ1yZeh3uXNFuFoZWsKqsZj9EJSUSiZEqqmmMzkTbH%2BK%2BaC99adXGnIwi7fXalLqRRxHGpy5o%2B8Claw79X%2BBpn7EWPpcpaC5JL21tcBLnQ3BrDec78CEYEyNktv0oBS45lF3niLGMigAqVS%2B1ipYOe8z%2Bzy%2BaY9cC%2BFOmMzmxamQbQXUU%2FrHsjLY3ARC6gS9VMeenpn0zNfVtYbmsrttfG7v2oBuT9q63HapGtPrCPXkppYJicbver%2BAnxbHflh5TTuxoXVQWBzhBnDSsegDYtbi3jCEmuZUnJJKa%2FsPF3MNCIhAKx2Ax3CRmt%2FgJMQwppAoE%2BeIWAlM5D5Ed%2FFZ8qMPbWUyKrYlcy1ky0mVjo0m%2BmujjxeoATuttx4OU27fPQiLBoLvndkdIEWsYVz40ft2NpZp35Wmgod%2B%2B72dk1yptceC1VIW8jUPi1CQhO5sGPg7%2B5uTJ11HQa5AA7uRT67AuFehP9Xa3qvFooxdrn7%2BkcyESZKpk3RW1L1IyWm%2FyrgcglhztczQj7e7WY9awIykMK%2Bo0jvRZ76shvij3NX7DAVn77qNqUVx8bQflB8mETIRhwUvfLZWYduH4A%2BTYngitsNUj09Co2QTxoeGQw7tDVvgY6pgGk%2B2s2yAyNIL4R7Q65yT01JKnTQNhtaGKCSwpRGEogIRZCHgnPnvOPFGSZb89Z6Q90iEThEudrUlalv%2BtAY0aqQGU3rz4nj9d9gBRB7AYNwhn165LW6V9W9yiYL67SnG5K8Doo9%2FETgkvlAyZhn4zaXhaBLDIYH8W%2FFM%2B29igYJuMZeSR4SAUFgerZvEhDp%2FChjobFJ9%2FT5zbCVCxhFbeUwK1FiPxH&X-Amz-Signature=5f42a67ab8e07e59cdfcb0bb3ce7c45f25081249b53197105c2d35fa9d1764f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
