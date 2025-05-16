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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEZ7535%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1c%2BagLZX8H0Bc%2BbvKbuMXLfaafuStyv7kS2nkMHibAIhANOUhQZSG98srnygNWdH%2BPmMEdZDjCG%2BF7Nv6K1zrEkGKv8DCD0QABoMNjM3NDIzMTgzODA1IgzoASr3gKnH7vo9EHMq3AMW0bJZiQqD5bT%2B0XT68v2zXb%2FH5jYK7vKCiRDizUa0fYqNJ01GYwVP76vYzNwkORmPPovoTEJYqcAWls4nlHePOneum3yMHAjf4f%2BtGTsgw0lAXJvxaskt%2BDhEyjq3dgcJ%2FDdD58GLMinPWrQzWwI34NbyTuKjW2ht31FnLo4RuJm5Mggge5Dmm4%2FVtLnD0rHBL6Gxp1Lm2%2FAC%2BSDo779eBORis0RZpTmcONazSMWX21AUPFmWL5H0ZU3rs7SYaPRiOqTNo3FpZbb8X38N46CO%2BgzK94jz%2F0Z54liOFL0Gq8y0g92Z86TIJq%2FjadsAKq3rruRqCVZAq64SqPFbrrGFxOYgdMt8MlmQMIslsW1xUQvNvk7DJPfx23KCgXi%2BMslAtZHHT0nMQlStZqErzIFW1vVEAhVQtk2mC%2B3mSwG5r9%2FdeiODoPUIeX%2F78QO53OViqXVi5bYHBxPVak5W%2Fetu4UfQ1%2BorjRSSZ60Q1P1Yrp2ZDK0Pufcv1fOFt2%2BJ2XUjYq5ylG6pRQ%2FA13sAFhHVko521BHuQWoevlicyv6JEFwIBH3l9l%2BqCtzPDyXG11wHmRpQjOtB5hRHHAILBQGeabIwA9fNZwdUoWPS%2BWIBRUsOIgQYu9CIXP091zD875rBBjqkAUMnJfJUFKPSJJ3YtdZKjyNHmO2f2E8FQCFKZCDDkqz2zj5uMPSp%2Fvd7LfrTCKunVDEvEJNMkS2OL4VtVRFUsFulZ8zetlCTZU5F8Kr9hKueoyy58wqySv1ym2TLx1dBjWWSW6UJlRl2HI6OSqNWedwBNib%2Bsu1cA1bSJlsoz3%2FCAh%2BH5%2FFEIWeRpNpg1qybL6TsVRyM06GQjRhK3KSeRsZTD9fY&X-Amz-Signature=4cd321c4c168f170cc26bf8342e8a0b9bccd3d79bf026f4e826bb998be68cc0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEZ7535%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1c%2BagLZX8H0Bc%2BbvKbuMXLfaafuStyv7kS2nkMHibAIhANOUhQZSG98srnygNWdH%2BPmMEdZDjCG%2BF7Nv6K1zrEkGKv8DCD0QABoMNjM3NDIzMTgzODA1IgzoASr3gKnH7vo9EHMq3AMW0bJZiQqD5bT%2B0XT68v2zXb%2FH5jYK7vKCiRDizUa0fYqNJ01GYwVP76vYzNwkORmPPovoTEJYqcAWls4nlHePOneum3yMHAjf4f%2BtGTsgw0lAXJvxaskt%2BDhEyjq3dgcJ%2FDdD58GLMinPWrQzWwI34NbyTuKjW2ht31FnLo4RuJm5Mggge5Dmm4%2FVtLnD0rHBL6Gxp1Lm2%2FAC%2BSDo779eBORis0RZpTmcONazSMWX21AUPFmWL5H0ZU3rs7SYaPRiOqTNo3FpZbb8X38N46CO%2BgzK94jz%2F0Z54liOFL0Gq8y0g92Z86TIJq%2FjadsAKq3rruRqCVZAq64SqPFbrrGFxOYgdMt8MlmQMIslsW1xUQvNvk7DJPfx23KCgXi%2BMslAtZHHT0nMQlStZqErzIFW1vVEAhVQtk2mC%2B3mSwG5r9%2FdeiODoPUIeX%2F78QO53OViqXVi5bYHBxPVak5W%2Fetu4UfQ1%2BorjRSSZ60Q1P1Yrp2ZDK0Pufcv1fOFt2%2BJ2XUjYq5ylG6pRQ%2FA13sAFhHVko521BHuQWoevlicyv6JEFwIBH3l9l%2BqCtzPDyXG11wHmRpQjOtB5hRHHAILBQGeabIwA9fNZwdUoWPS%2BWIBRUsOIgQYu9CIXP091zD875rBBjqkAUMnJfJUFKPSJJ3YtdZKjyNHmO2f2E8FQCFKZCDDkqz2zj5uMPSp%2Fvd7LfrTCKunVDEvEJNMkS2OL4VtVRFUsFulZ8zetlCTZU5F8Kr9hKueoyy58wqySv1ym2TLx1dBjWWSW6UJlRl2HI6OSqNWedwBNib%2Bsu1cA1bSJlsoz3%2FCAh%2BH5%2FFEIWeRpNpg1qybL6TsVRyM06GQjRhK3KSeRsZTD9fY&X-Amz-Signature=a179f261b03b0ec7f9d40bd482061c2d6927d030b41b740db1f56925627a33d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
