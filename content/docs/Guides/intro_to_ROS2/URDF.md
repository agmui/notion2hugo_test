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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4ZU3E%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCyPYDrOSZEkvXKyc7SPQBctconoF%2BGB3AjQ47ibmbMIwIgbSX3ja9oAxzSThObwwVJNKQg2IKTS4fo1NtDOKhwlZgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMdNRCKQJUhOJA2EtCrcA86iGXuiUk7%2BuSWaEQ9HWhxmwAlSD6P1qftt%2FLY1O7MJ1PZzda0M55O9xU04GiSFp50z8ZRsfIspbfpXkpcgZbl8INNvv93IghVgIhlVjg9g4dH5AaUbnSv%2BGYz3axYFbEcHZiNjzy8S1dP5cR1vKkI9nwwu%2Fxw3UnmgMgza3RAH36sp6jTvmgVd0fB0MVjwNiDZGKfRcekRJOzQCBKoXahZn60eueSHQHtcgAgfuZmcxGxsDem9poGSkLupBo3sWY%2Bl18my%2FRCrNXdAHdgfrRpilkkRh3ODAz0YHChAFMM2n93TP%2F4AAjDG7kpBpv7ycwv8MgEpuTK9TY0y9Y50oBmz96z2Hrusqj%2BNK9HnRbglMFcd10C3WmwX2KbSFyfze2ItOdcUjFPwh9%2BpKNuLFbGvzUwv%2BWZyQcZ3nJVnf0k6kEhwpsqcxy8QFi6pNj6m32hsIkJAGATLdom%2BmK2g9QCGcektdYFWawN581okzZdIUS7MHlO1%2Bh9c%2FI%2FXtYL5CLZ5jt7nbQw%2B2Vwf3kswavfdpfosH9IsycNwBIXxi1VV42Mbn4ASv8aGE3HGpMk5RySw1MZB26c4PyVasuOmepL5ZMIULwiKErxFCYIHvmDW2GPvM9tna8CrFYxRMOrv1b8GOqUB5KE61jTL%2BbtPhHrHv0Dpq2bXhZx0qUZiB6iUqorn6QfKzgtj9N0QHTFMApOFWlMiU%2FrGTTswjtAHgvVV4Ot5EsI2oPs8vkUNADgHJUCrrHxd9adUBgRVxS2n7oYX8qAs2yAXg5MXAeSUr%2Fzfto7AijF9c3oJTF4MUZK%2FY%2B8%2Bt94zUMm0WyrfeLWh31Ot8xntWV%2FpfCskSz4mR%2F%2F9gPTLMCaTIfGl&X-Amz-Signature=5a16f8c3581de3ac489f7528a76e9617a30380b54d7abf0ef51b02b13c8613ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4ZU3E%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCyPYDrOSZEkvXKyc7SPQBctconoF%2BGB3AjQ47ibmbMIwIgbSX3ja9oAxzSThObwwVJNKQg2IKTS4fo1NtDOKhwlZgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMdNRCKQJUhOJA2EtCrcA86iGXuiUk7%2BuSWaEQ9HWhxmwAlSD6P1qftt%2FLY1O7MJ1PZzda0M55O9xU04GiSFp50z8ZRsfIspbfpXkpcgZbl8INNvv93IghVgIhlVjg9g4dH5AaUbnSv%2BGYz3axYFbEcHZiNjzy8S1dP5cR1vKkI9nwwu%2Fxw3UnmgMgza3RAH36sp6jTvmgVd0fB0MVjwNiDZGKfRcekRJOzQCBKoXahZn60eueSHQHtcgAgfuZmcxGxsDem9poGSkLupBo3sWY%2Bl18my%2FRCrNXdAHdgfrRpilkkRh3ODAz0YHChAFMM2n93TP%2F4AAjDG7kpBpv7ycwv8MgEpuTK9TY0y9Y50oBmz96z2Hrusqj%2BNK9HnRbglMFcd10C3WmwX2KbSFyfze2ItOdcUjFPwh9%2BpKNuLFbGvzUwv%2BWZyQcZ3nJVnf0k6kEhwpsqcxy8QFi6pNj6m32hsIkJAGATLdom%2BmK2g9QCGcektdYFWawN581okzZdIUS7MHlO1%2Bh9c%2FI%2FXtYL5CLZ5jt7nbQw%2B2Vwf3kswavfdpfosH9IsycNwBIXxi1VV42Mbn4ASv8aGE3HGpMk5RySw1MZB26c4PyVasuOmepL5ZMIULwiKErxFCYIHvmDW2GPvM9tna8CrFYxRMOrv1b8GOqUB5KE61jTL%2BbtPhHrHv0Dpq2bXhZx0qUZiB6iUqorn6QfKzgtj9N0QHTFMApOFWlMiU%2FrGTTswjtAHgvVV4Ot5EsI2oPs8vkUNADgHJUCrrHxd9adUBgRVxS2n7oYX8qAs2yAXg5MXAeSUr%2Fzfto7AijF9c3oJTF4MUZK%2FY%2B8%2Bt94zUMm0WyrfeLWh31Ot8xntWV%2FpfCskSz4mR%2F%2F9gPTLMCaTIfGl&X-Amz-Signature=1e1573427a08467522b915077392ab38bfaf72c856ae939730e14f2fa9a8b69d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
