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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SES4QPZY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcFCsGMunifmF%2BiJ5N1dJvwSYiXNBo%2BeIKF7JswjCgbAiBPs%2FLW%2BNG08NL7bqbMB0l6Js%2F7rfMsZrw2GT3K%2FfijQir%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMhf5bSO0FgffkEwq7KtwDi4mYcHR6T%2FaI3N7HlhIjjgtnbQitb72qG1crS97Y%2F7UDJjdXiBxSJ0fiAjnlpIlrZla5zmxYp%2FRwMBYCwKyQYvFGmKtQgT2slDDsria07sr%2Fykpkrf2JyxylHTPvUw5juWnfU8J9viqMlGaBUGnSuXQ%2FQuJd4iOeN3umv7WVHvKc%2B%2B3XwXoSsa%2FvQoZInW1vGyLSm46yveAxKjwn5lTwu2vb0YBDnuak7OI9sYiS%2FIH8PvLO7B0Wpji1ztTftmehMtQU1HdkQge2xMMWw6sXmA7oO96pjHPVqgcPCZSbQ49XR5rE3rXfENP3U3%2BAw2naZZlyrq1YVLcdRVtgbb9BZpaLg%2FGz6ODCEZftuslxnZOiJILW5REUxEWgVU%2FJWKIf5h6g%2BqhDYa6JGCJRAYqEe%2F1T7oRaEwKb0FqdF6rml%2Bc%2FT0eKlQtoUMpcxTeDwu9vC2s%2Fsc%2F%2Bvvei5JVRcMJc25yt4SsJhI1q1IGPAciczyZv6gGBFj3v8GmLsRUfAaifP3qQCYxlm9WHOcE9h4BKpK3E8ABjXC5LFxtEGUumuin1BHJnoc9gqggfaktRFB5Uwu18NVg%2FTO47aBev3oWh5e1tkCANZe4yQKk4oSgdSyK6Woyuv8Ot33TcdWMw4ZuFwAY6pgE1dofpSa5Hw9orLbFZ08jMLT8jz%2Bi%2BGFcQm8tElKNs2s9U1GgZbg0oQx%2FFnOBvsszj3NZK1zQLhWZgpj7Jxn5TkDmpBLJqE%2BSjP5JJBdYcgrLEqUQGkoSd%2BWLNBkZ24MxPyS6N97B3wNCNRrDZ%2FdOc7BDZF%2BQaJXXQFxRIXMKvqkJCtWGh2Wd9AkG%2BbZ6k94i526OxgyUaV14xZVNvH%2FsjIwcRlEuv&X-Amz-Signature=8cfa8bf55052fc83be15ce01a2328639e310215e1b130191f34dd8f99e55ba2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SES4QPZY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcFCsGMunifmF%2BiJ5N1dJvwSYiXNBo%2BeIKF7JswjCgbAiBPs%2FLW%2BNG08NL7bqbMB0l6Js%2F7rfMsZrw2GT3K%2FfijQir%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMhf5bSO0FgffkEwq7KtwDi4mYcHR6T%2FaI3N7HlhIjjgtnbQitb72qG1crS97Y%2F7UDJjdXiBxSJ0fiAjnlpIlrZla5zmxYp%2FRwMBYCwKyQYvFGmKtQgT2slDDsria07sr%2Fykpkrf2JyxylHTPvUw5juWnfU8J9viqMlGaBUGnSuXQ%2FQuJd4iOeN3umv7WVHvKc%2B%2B3XwXoSsa%2FvQoZInW1vGyLSm46yveAxKjwn5lTwu2vb0YBDnuak7OI9sYiS%2FIH8PvLO7B0Wpji1ztTftmehMtQU1HdkQge2xMMWw6sXmA7oO96pjHPVqgcPCZSbQ49XR5rE3rXfENP3U3%2BAw2naZZlyrq1YVLcdRVtgbb9BZpaLg%2FGz6ODCEZftuslxnZOiJILW5REUxEWgVU%2FJWKIf5h6g%2BqhDYa6JGCJRAYqEe%2F1T7oRaEwKb0FqdF6rml%2Bc%2FT0eKlQtoUMpcxTeDwu9vC2s%2Fsc%2F%2Bvvei5JVRcMJc25yt4SsJhI1q1IGPAciczyZv6gGBFj3v8GmLsRUfAaifP3qQCYxlm9WHOcE9h4BKpK3E8ABjXC5LFxtEGUumuin1BHJnoc9gqggfaktRFB5Uwu18NVg%2FTO47aBev3oWh5e1tkCANZe4yQKk4oSgdSyK6Woyuv8Ot33TcdWMw4ZuFwAY6pgE1dofpSa5Hw9orLbFZ08jMLT8jz%2Bi%2BGFcQm8tElKNs2s9U1GgZbg0oQx%2FFnOBvsszj3NZK1zQLhWZgpj7Jxn5TkDmpBLJqE%2BSjP5JJBdYcgrLEqUQGkoSd%2BWLNBkZ24MxPyS6N97B3wNCNRrDZ%2FdOc7BDZF%2BQaJXXQFxRIXMKvqkJCtWGh2Wd9AkG%2BbZ6k94i526OxgyUaV14xZVNvH%2FsjIwcRlEuv&X-Amz-Signature=939a56f6c0e8b2a97f9017bf8d7ee98b6c26ff6944285591f136b9151376bc0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
