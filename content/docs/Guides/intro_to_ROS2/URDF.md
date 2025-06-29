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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFY7KI2C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjmXtNZyeG90GMHkfzgGGpoTn3Kq6Hd7L0qCu9Okj62gIhAPaRwFfwEmAqEXpT0B8cmUQpjtMn6QetTo1gvSAp1ekbKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznzvUtEbMphA%2Bp%2BPYq3AP%2BXHv9vHVJJWHEisljWM4YL7xJmYnFdv1esfLNiRd0HPJ6iNUpfyXQ%2FDzxOqBpL6E17PHo%2FBiD1jreYM4S7G2qZi7qh%2FKjF%2FvgKHo0Mt8vHwyL0nRvihKrMyja7GxPj45N78k4OgWzf1hXhqQll44vaEZ8NKt%2Bd8HDnQKF9NeKlVhxIkz4xX6GX70%2B7pGWZT%2FncyKX3sxLbKMyBA2fIUnb35c5MQulF%2F8%2BVrrk0yGvG8SSxPkuffKjmg3BB5ha%2FvTEG%2Fm6dC8hrcI5bFfgecksEkjPSzcV38%2FXGnseGfzZksea34uALHNwotIbE%2Bgtgzt%2FKEEJpeBx6%2BzfuVBILSiU%2BTJsuebkHvqyheHRSsa8ihCPBSbUvgP1IhquKbRr28%2FAu5yOLrLePY2JWfdG0LqI5poS1dVL9z2aBM3sDLnYOoymgWCoqL24cQTXSTnx8jXzIIFuN%2FHaDekvDn%2FzIVNm8x4GaupEY2cyCjNAbaYp5hBspNBZsAFu6cLfjao5E6KUA4SlpTBbTZGk%2FX0qdzAnlzzHLphJmAyCbIYGzsg99JhFsJXNL1fB%2BD0qu6y7W64kyudtHMYhHCo0gk9fzi6Z127UiAMNuZHULTg5Oqi5wVMWlCiWR3eBiMByBjCJ%2B4XDBjqkASFyIcRl9ERDWsmOY4vhBBwQ8c1r%2FvqoM35u%2FgjA7iVcWc8%2BV7nB68nMJjNhJSEgyJW2Y%2Bfpj9bIE%2Fb5iC83Gjh2Uy4oDwz%2BGo5fqH2K%2BtutbaIZDo1fI3RPZYaaOFSPdV7zKf1jqLgalTpH%2FpsuoHj7fSRYPxWdKdNS6vtBdYgaSgd2JSB2uSQyAQbx70jGqG3NGkYKeIbQLZXBvtjKnR9qX3F1&X-Amz-Signature=0bd24880a31852e91be5bac1d5273f59821c061f6845759c979e561965a55dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFY7KI2C%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjmXtNZyeG90GMHkfzgGGpoTn3Kq6Hd7L0qCu9Okj62gIhAPaRwFfwEmAqEXpT0B8cmUQpjtMn6QetTo1gvSAp1ekbKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznzvUtEbMphA%2Bp%2BPYq3AP%2BXHv9vHVJJWHEisljWM4YL7xJmYnFdv1esfLNiRd0HPJ6iNUpfyXQ%2FDzxOqBpL6E17PHo%2FBiD1jreYM4S7G2qZi7qh%2FKjF%2FvgKHo0Mt8vHwyL0nRvihKrMyja7GxPj45N78k4OgWzf1hXhqQll44vaEZ8NKt%2Bd8HDnQKF9NeKlVhxIkz4xX6GX70%2B7pGWZT%2FncyKX3sxLbKMyBA2fIUnb35c5MQulF%2F8%2BVrrk0yGvG8SSxPkuffKjmg3BB5ha%2FvTEG%2Fm6dC8hrcI5bFfgecksEkjPSzcV38%2FXGnseGfzZksea34uALHNwotIbE%2Bgtgzt%2FKEEJpeBx6%2BzfuVBILSiU%2BTJsuebkHvqyheHRSsa8ihCPBSbUvgP1IhquKbRr28%2FAu5yOLrLePY2JWfdG0LqI5poS1dVL9z2aBM3sDLnYOoymgWCoqL24cQTXSTnx8jXzIIFuN%2FHaDekvDn%2FzIVNm8x4GaupEY2cyCjNAbaYp5hBspNBZsAFu6cLfjao5E6KUA4SlpTBbTZGk%2FX0qdzAnlzzHLphJmAyCbIYGzsg99JhFsJXNL1fB%2BD0qu6y7W64kyudtHMYhHCo0gk9fzi6Z127UiAMNuZHULTg5Oqi5wVMWlCiWR3eBiMByBjCJ%2B4XDBjqkASFyIcRl9ERDWsmOY4vhBBwQ8c1r%2FvqoM35u%2FgjA7iVcWc8%2BV7nB68nMJjNhJSEgyJW2Y%2Bfpj9bIE%2Fb5iC83Gjh2Uy4oDwz%2BGo5fqH2K%2BtutbaIZDo1fI3RPZYaaOFSPdV7zKf1jqLgalTpH%2FpsuoHj7fSRYPxWdKdNS6vtBdYgaSgd2JSB2uSQyAQbx70jGqG3NGkYKeIbQLZXBvtjKnR9qX3F1&X-Amz-Signature=56baa110bf241cd7d46946dbf1fbf58c21af6638909217a769a906c56085cf6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
