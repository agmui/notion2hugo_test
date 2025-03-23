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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSE76VS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2F41sIvXzeR%2F0hZIMusk3iCld3kjn1%2FTQtdW73OK3WgIgQeQpMLfH2Rjrj4TJE4Xr5KwSr9ynLds24EMRF%2Fn7%2FRsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUYgTe1j74KzVBBTircA505yjaFQNSUy%2F1ii1SBtF8OnPjK8yZnNS7QgKl0pLSqk%2FZzV8Bur7oSoSyZKfcMUH90C4EhY0NwvgBmcN7NiHeOqgJDoqH%2BmcJfjwrIJvAblT8i5%2BYDQUhi4gngoCPgMmYVTkNl2AkypnFyxtZFqiJRcaSeFuvLn2%2FPqHWpHNu8nfnKOEpIirEbtJdu7hANxmuqXTs3KWzc5PbrPGtNyNnDDoMsjRMVRgN022ehbLcCK3tXFYcloCXRLV9rNzMU9ZAEf%2BuiEEhGJKywwkNgGW6FVpudZSClh96o9%2FQLX8GfP2IsaWQgSTxQrP6zejosfz1Kk6rQYiWRKx3WmPKOI55lFu8Ges9dvpVLyYQCOOUNJWw2Z3rJP8vWi9aoZNQYhM5Ofg859xanglx32E2mCinm%2FgiLRVRWCBapO%2FfEPeXrN%2FdaMBUbS6DWmGTRNve9KWyZUKoqykCjdfnW3Se2RpMs0%2BdeYSuwdEeG52p5Hdssw0Va29UPcu6nKBKu0QgZFeFIc4%2BH7C5vPxqpbqP9VaeGyx0FMXuWY3FDJ1kNeSMP5Sg3hn8t3%2F3YVXSozEp7gIlseLRWaUp5%2BfKBjcEEmaP7morc3qMkX%2BGgtc2bhStL8ifnLZpKaRS86dJYMNzLgb8GOqUBZPyAgNKiL6byIkZBoU0HAUabaLCUfz1NepgzlwnLi8e6yN639rIRW0AJA8MWKJ%2F2kEDOndHtQu3NCd9NK79AIfc7bdlqWvxUSPcZeUaSyJw0zkotKkOB8a27IE9ixRMSIHe4bJ8kEDQX7sf1L1MEux%2FWgBY%2BUj2A%2FgZc2z%2FCr3fq4GY2ZMQoegm9lkhismlcerIQz6XhJeoTUWCmkgrlofmO3yuz&X-Amz-Signature=485a5ec7dba69c1525856e77b924f1a25d1dbaa69e90353560e22343ee9bc9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSE76VS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2F41sIvXzeR%2F0hZIMusk3iCld3kjn1%2FTQtdW73OK3WgIgQeQpMLfH2Rjrj4TJE4Xr5KwSr9ynLds24EMRF%2Fn7%2FRsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUYgTe1j74KzVBBTircA505yjaFQNSUy%2F1ii1SBtF8OnPjK8yZnNS7QgKl0pLSqk%2FZzV8Bur7oSoSyZKfcMUH90C4EhY0NwvgBmcN7NiHeOqgJDoqH%2BmcJfjwrIJvAblT8i5%2BYDQUhi4gngoCPgMmYVTkNl2AkypnFyxtZFqiJRcaSeFuvLn2%2FPqHWpHNu8nfnKOEpIirEbtJdu7hANxmuqXTs3KWzc5PbrPGtNyNnDDoMsjRMVRgN022ehbLcCK3tXFYcloCXRLV9rNzMU9ZAEf%2BuiEEhGJKywwkNgGW6FVpudZSClh96o9%2FQLX8GfP2IsaWQgSTxQrP6zejosfz1Kk6rQYiWRKx3WmPKOI55lFu8Ges9dvpVLyYQCOOUNJWw2Z3rJP8vWi9aoZNQYhM5Ofg859xanglx32E2mCinm%2FgiLRVRWCBapO%2FfEPeXrN%2FdaMBUbS6DWmGTRNve9KWyZUKoqykCjdfnW3Se2RpMs0%2BdeYSuwdEeG52p5Hdssw0Va29UPcu6nKBKu0QgZFeFIc4%2BH7C5vPxqpbqP9VaeGyx0FMXuWY3FDJ1kNeSMP5Sg3hn8t3%2F3YVXSozEp7gIlseLRWaUp5%2BfKBjcEEmaP7morc3qMkX%2BGgtc2bhStL8ifnLZpKaRS86dJYMNzLgb8GOqUBZPyAgNKiL6byIkZBoU0HAUabaLCUfz1NepgzlwnLi8e6yN639rIRW0AJA8MWKJ%2F2kEDOndHtQu3NCd9NK79AIfc7bdlqWvxUSPcZeUaSyJw0zkotKkOB8a27IE9ixRMSIHe4bJ8kEDQX7sf1L1MEux%2FWgBY%2BUj2A%2FgZc2z%2FCr3fq4GY2ZMQoegm9lkhismlcerIQz6XhJeoTUWCmkgrlofmO3yuz&X-Amz-Signature=2a98ee7918187e60bdc4108a04143798ff8d1d1b5aed5866514ec3adabc4048f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
