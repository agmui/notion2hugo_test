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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENX3MYX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDscUs%2BEyhjDmemyZ7YCR697%2BIWUJtcrcWXo4BSX0W%2BvAiEAsa7aTFKygJ8oagxztbRX6nFBza0qESKWLQy7z5WOaIYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAzdM6FS5NCC57MdfSrcA5w1ErPWF61udPkVJdiso22txVrr0d%2B7DstQvRyGnUjjAEvMvkeMr1%2BkDferzKc0Geqnhxua3Ftu4C3zlaIYnVWpmNttf6vIBrvRy5Dx4DjMGZntkdVTKfA7EuWqCcy7ZPouY21bI%2By1fWfsseiEFQ64fpUyRSjmi%2FwHEwPrayCWKwkvY7bMECmcRf93Mbq0bkdHZh5kx0lGUrUxm4r%2BI9ThZQ%2BB3oYtrndrDNdLHSij5lNfAWzpHsRhqk0VpIHjYfPHxqQtKjrx3FtScNLtfE1AddoRPN22NMO7u%2FE2BgBtF713I0%2BYlSxsXYKBBsZOFqALNPmYWezDpt%2BL4Yh%2BIzHMPdKya1PtxqhLNN%2Fjg0DcOoxWSU1%2B7wZf%2FgXE8VVymIApY%2BxqlRBYdV2zhQpomJqW%2FFE2shqWF%2BfNsnekulQsVHujClnRTnHD3P10cYAtp7XidMvcJHUb6uDJZxlsUcXZOTgxoMvaX%2FdrhW6P45AaTAWIrkBprpogrE0Bl40X2qTQgnet7%2B170a%2FNRnwvpoac5V7eyVToeKN7xdV2PG8w4pz31%2B5HRzj5sPhRAuy8o4HvbFYzR492G5Oq0PcZs6ScOweAQxfSbgM4hsmyM5ZGgv5u6D2lFE0L1Q3XMKuEssAGOqUBhlQmpP7EByiUcvp2e9TRpTITjrVva9Kh8UroxYeDso5rC0CgRPF11VZBbI%2BIzi%2Bhdm1XFAYkOrWhFE6B%2B1LqNWO%2FrMUA0cKWqcogrpNqYe9qGqZBgrqmDFCOE2D9Gs7Kcib%2B5C%2FbPMNkclofMY7BYROOqVrA2yvAEvQ1I5Be%2FtzGxAqVBgIu0G%2Bnxk5PAKn1WAzsuv0R5ByJSk2jEj2vsl8X%2B1S6&X-Amz-Signature=162987f546e01dbea190bd9cbb426130aa83a29cadac0b321e64c2591da4a9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENX3MYX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDscUs%2BEyhjDmemyZ7YCR697%2BIWUJtcrcWXo4BSX0W%2BvAiEAsa7aTFKygJ8oagxztbRX6nFBza0qESKWLQy7z5WOaIYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAzdM6FS5NCC57MdfSrcA5w1ErPWF61udPkVJdiso22txVrr0d%2B7DstQvRyGnUjjAEvMvkeMr1%2BkDferzKc0Geqnhxua3Ftu4C3zlaIYnVWpmNttf6vIBrvRy5Dx4DjMGZntkdVTKfA7EuWqCcy7ZPouY21bI%2By1fWfsseiEFQ64fpUyRSjmi%2FwHEwPrayCWKwkvY7bMECmcRf93Mbq0bkdHZh5kx0lGUrUxm4r%2BI9ThZQ%2BB3oYtrndrDNdLHSij5lNfAWzpHsRhqk0VpIHjYfPHxqQtKjrx3FtScNLtfE1AddoRPN22NMO7u%2FE2BgBtF713I0%2BYlSxsXYKBBsZOFqALNPmYWezDpt%2BL4Yh%2BIzHMPdKya1PtxqhLNN%2Fjg0DcOoxWSU1%2B7wZf%2FgXE8VVymIApY%2BxqlRBYdV2zhQpomJqW%2FFE2shqWF%2BfNsnekulQsVHujClnRTnHD3P10cYAtp7XidMvcJHUb6uDJZxlsUcXZOTgxoMvaX%2FdrhW6P45AaTAWIrkBprpogrE0Bl40X2qTQgnet7%2B170a%2FNRnwvpoac5V7eyVToeKN7xdV2PG8w4pz31%2B5HRzj5sPhRAuy8o4HvbFYzR492G5Oq0PcZs6ScOweAQxfSbgM4hsmyM5ZGgv5u6D2lFE0L1Q3XMKuEssAGOqUBhlQmpP7EByiUcvp2e9TRpTITjrVva9Kh8UroxYeDso5rC0CgRPF11VZBbI%2BIzi%2Bhdm1XFAYkOrWhFE6B%2B1LqNWO%2FrMUA0cKWqcogrpNqYe9qGqZBgrqmDFCOE2D9Gs7Kcib%2B5C%2FbPMNkclofMY7BYROOqVrA2yvAEvQ1I5Be%2FtzGxAqVBgIu0G%2Bnxk5PAKn1WAzsuv0R5ByJSk2jEj2vsl8X%2B1S6&X-Amz-Signature=a24118edf7f3474360a31612cf7e99ded671c53f38154513887411c8e598446b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
