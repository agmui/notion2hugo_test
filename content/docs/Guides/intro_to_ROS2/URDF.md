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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663COPLRAB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAUQqFifV7jocDi7%2Bz2hwT30AdrKTF1mwhcRPt3elZCCAiEA%2FBaQxxPbJOyL3WxmQAwSAltpp7EHPRuM2ravkpbhcbEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmK0ZdL%2BCXVFVdCLCrcA8N1yQmmKjPO06UnP%2FcSKR8z6Y7i3mBFJwqeRBsm%2BED67Z7oq7cLU36S70NRLIw9B1%2Fy29ePu6VCMMC4JXlIqH%2FFwC0OU6vYRDWT6zjzzWTdYRpQH1DwGzQ8EdBCg%2Bg4FPZ07aOqWnekEHEwvdWCmp%2BLa4UPrckOk1zB6CDPz%2FHWKiDV1RtMZFZyb6VtDJPyWs%2BgkG3nrdmxEx6EYdGaBlffMxo%2B9g%2BgpFMN%2BP22ZPuN9s6WE5rprlWAGsYbZGbWv0DerWCHkheMY81lIlO5hv45L3BE1K7RkcXg7qL9%2B29pUnhSx%2FHf7hit7XhEfeOBNGJqi5JhAsGkfWbODlkl%2FOX5oVAZgdSeefVMGMVADT0%2FX%2B5Ds0DgiLi1GuE0bA59UuRd4OfKfkgJAjZuicDzBqV7CDKtSn%2F9E5lDez1wtmyqs1l%2BRRBXIZfU%2FJ%2B971GUthLivSqZ0nkiofjzO8o6WntvIsjZx7qwRZSJv5RJrZhMrOTahdMhzHAstzJT35ibJEDLSZnoY2Z%2BKrbHTdbUN1qithls2jAC98VaNWF2kjT1%2BmrvSECKqwD0RhAlIlwyfzYr4ECyGm6BIrtnDYgLcw6zp%2F7O9vR77O6u7xnYGg3di8OjMfaPoxDdcJEZMKru1cAGOqUB7hB7raAC5Q2%2BejBfTukVROuTE6tOhTE2Wp0j38oaxACMr0ceeL49qZ9Y1Ec19WGR%2B6afV7HGeFGCOPOs%2BkN6IRn7aIvk%2BdVV9bqQCoENwGnYPyIa4PY8y6i%2B%2BvCfH2YngeQrNM2F9oWSjHYw7gjERUHteAL0%2BzV00CAXOl3nbVkZHWkmmXzPeLKW3GTOKkO9gUJWhkpgx1wPnp97s%2BUeRqK9PUKl&X-Amz-Signature=97bf2c595de74e52deda47f66d1fedbced7ec56572f0886876546c6580df287e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663COPLRAB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAUQqFifV7jocDi7%2Bz2hwT30AdrKTF1mwhcRPt3elZCCAiEA%2FBaQxxPbJOyL3WxmQAwSAltpp7EHPRuM2ravkpbhcbEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmK0ZdL%2BCXVFVdCLCrcA8N1yQmmKjPO06UnP%2FcSKR8z6Y7i3mBFJwqeRBsm%2BED67Z7oq7cLU36S70NRLIw9B1%2Fy29ePu6VCMMC4JXlIqH%2FFwC0OU6vYRDWT6zjzzWTdYRpQH1DwGzQ8EdBCg%2Bg4FPZ07aOqWnekEHEwvdWCmp%2BLa4UPrckOk1zB6CDPz%2FHWKiDV1RtMZFZyb6VtDJPyWs%2BgkG3nrdmxEx6EYdGaBlffMxo%2B9g%2BgpFMN%2BP22ZPuN9s6WE5rprlWAGsYbZGbWv0DerWCHkheMY81lIlO5hv45L3BE1K7RkcXg7qL9%2B29pUnhSx%2FHf7hit7XhEfeOBNGJqi5JhAsGkfWbODlkl%2FOX5oVAZgdSeefVMGMVADT0%2FX%2B5Ds0DgiLi1GuE0bA59UuRd4OfKfkgJAjZuicDzBqV7CDKtSn%2F9E5lDez1wtmyqs1l%2BRRBXIZfU%2FJ%2B971GUthLivSqZ0nkiofjzO8o6WntvIsjZx7qwRZSJv5RJrZhMrOTahdMhzHAstzJT35ibJEDLSZnoY2Z%2BKrbHTdbUN1qithls2jAC98VaNWF2kjT1%2BmrvSECKqwD0RhAlIlwyfzYr4ECyGm6BIrtnDYgLcw6zp%2F7O9vR77O6u7xnYGg3di8OjMfaPoxDdcJEZMKru1cAGOqUB7hB7raAC5Q2%2BejBfTukVROuTE6tOhTE2Wp0j38oaxACMr0ceeL49qZ9Y1Ec19WGR%2B6afV7HGeFGCOPOs%2BkN6IRn7aIvk%2BdVV9bqQCoENwGnYPyIa4PY8y6i%2B%2BvCfH2YngeQrNM2F9oWSjHYw7gjERUHteAL0%2BzV00CAXOl3nbVkZHWkmmXzPeLKW3GTOKkO9gUJWhkpgx1wPnp97s%2BUeRqK9PUKl&X-Amz-Signature=6356b11d367a05f1e8dc10ae10954a1f28370d254d725e1cf55c3effe4bfa2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
