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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDERCSCS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE5MFEvz3rkNty7nq7uc3fJ4S7mmHl647hqIXtTzGjOrAiB80QXHHjKxE0PqCyJcyWH3ovELuDb5cSylk9chWAHHtyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC0JUlgWAQhz3rcPDKtwDscvl4jI%2Bv6o6StVSvvWbueCY0zFnUGtxzV%2FjAvxUBh4dRaISSso0Pn%2B4DOTAfv%2BaLzFBoFa8sDSCR6qLzDUzGi4jUokXBwpixqFLzhLeyqPqv1x9gjkxKltehk5OEUj0MoJu1dKL6ZxWyejQsKNjkO2Ck4NdPdqCRNC7jY5DLKJ%2BpvHhq1Rm3z4jpkOXyJPQwz2AIw4GRi13TbrGElkS3WUSfu0KNU3Tq6a%2BXfON1OIqrEdTWlXYlvuYBwTzDnwHeJqoXmv3r68B3LCYrkz2iXPnQgJQKvlvsKr0MD%2BgdVsvQrJHFBgIWwrq53Fk2hSdyF%2FKyBNHjczC%2F233fxObE6k6fjxWlANJkAtErD6RWwDVa2Q66Fvt0zeXIbAej%2BK3z%2Byr7YqAHaXzRRqVVjCe%2FUEhBS2iuKUEAIcHI3c7s4kSApVjiGlgq%2FaXSUYxXWc%2Fe8GNwcHUvZnI6qx3U3ldCATTDGoS6PXmV%2B%2BKlW2dTebWk8e2t8ASeE2IlB5%2FunggsxfMryuikAPfvugS0sbSBecSQg1ZIDwnCrIR6VrZXqhGW49zJUa1MZoL0g5J0cd34WpMslYIrF6heuEYoorND4vt0bOGdPhTjKGPingyId1yjeQj9OUnnndhx3kwh52HwQY6pgHF3YM23I%2BEMDb3NQtvSR%2FM8jvSF0y43%2Fd6TCohz6K0q1u3pQ3cqov1UgnRUplRAx1iuvBXlApGzYBlJaUl5Zs21vVgYix4gEp8Xpz8eQfX00AEwjaUhjw5KKWwWfpqoc79BT8EGhJ55LGbEwg%2BJALLxLGob%2FdmCe2GUDCWxsJRqPNTV%2FN6FPu%2BsAqbjprZTcYmVHzAFIzHH8baqs%2Fu2cGXD9wKYu4K&X-Amz-Signature=b1b0a6aa73f47e4fb98ab1ba2b20e0dc5cf05122432298fd76980e2d2cd28496&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDERCSCS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE5MFEvz3rkNty7nq7uc3fJ4S7mmHl647hqIXtTzGjOrAiB80QXHHjKxE0PqCyJcyWH3ovELuDb5cSylk9chWAHHtyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC0JUlgWAQhz3rcPDKtwDscvl4jI%2Bv6o6StVSvvWbueCY0zFnUGtxzV%2FjAvxUBh4dRaISSso0Pn%2B4DOTAfv%2BaLzFBoFa8sDSCR6qLzDUzGi4jUokXBwpixqFLzhLeyqPqv1x9gjkxKltehk5OEUj0MoJu1dKL6ZxWyejQsKNjkO2Ck4NdPdqCRNC7jY5DLKJ%2BpvHhq1Rm3z4jpkOXyJPQwz2AIw4GRi13TbrGElkS3WUSfu0KNU3Tq6a%2BXfON1OIqrEdTWlXYlvuYBwTzDnwHeJqoXmv3r68B3LCYrkz2iXPnQgJQKvlvsKr0MD%2BgdVsvQrJHFBgIWwrq53Fk2hSdyF%2FKyBNHjczC%2F233fxObE6k6fjxWlANJkAtErD6RWwDVa2Q66Fvt0zeXIbAej%2BK3z%2Byr7YqAHaXzRRqVVjCe%2FUEhBS2iuKUEAIcHI3c7s4kSApVjiGlgq%2FaXSUYxXWc%2Fe8GNwcHUvZnI6qx3U3ldCATTDGoS6PXmV%2B%2BKlW2dTebWk8e2t8ASeE2IlB5%2FunggsxfMryuikAPfvugS0sbSBecSQg1ZIDwnCrIR6VrZXqhGW49zJUa1MZoL0g5J0cd34WpMslYIrF6heuEYoorND4vt0bOGdPhTjKGPingyId1yjeQj9OUnnndhx3kwh52HwQY6pgHF3YM23I%2BEMDb3NQtvSR%2FM8jvSF0y43%2Fd6TCohz6K0q1u3pQ3cqov1UgnRUplRAx1iuvBXlApGzYBlJaUl5Zs21vVgYix4gEp8Xpz8eQfX00AEwjaUhjw5KKWwWfpqoc79BT8EGhJ55LGbEwg%2BJALLxLGob%2FdmCe2GUDCWxsJRqPNTV%2FN6FPu%2BsAqbjprZTcYmVHzAFIzHH8baqs%2Fu2cGXD9wKYu4K&X-Amz-Signature=63b46416094416e8cad2fa5694b5638bdecb885c74f7d6fac661bd3714839c61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
