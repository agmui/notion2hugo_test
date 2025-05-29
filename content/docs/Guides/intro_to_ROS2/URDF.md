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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJLP5T5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDtbv%2Fw%2Bm83KryUfHzWwB%2BKeCT4dXL%2FtcRcdqj4oHz8QIgCjAEbxpnp%2F4ySSRHKdLaazUofDZUAKqDdSN5nnySFwwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLWkGWaEvPdAW3hCyrcA7IYRSfjztNTTLCOQ78CzJ7ShEjDEtM11SsSIjLqozQM7ajfMzjvdTlNZfhRP9BZ9r%2BPahE0jAPYwC%2BoxP0DwN3dxQPvrfE6ZtgGuHJOHbsmcuFOm3Ql8M5l%2FBUSSS0rVo3Q77Z8QFqERFfsJQEOmJmZOE95gOIAy7IyQ1TzUe0Me6eRC9My9qrihnu%2BXczhX43HZWjZfmG57c68hKKPVcVCr3cwmsL%2FAaX2nLVyKfDfvlw7g99EXXMUakob8u627VCjBFd4lRvN%2B%2BABcR1t9hES6XzEEch1tqiVxAkhYWEvpNXVBN6EB2tAW5%2B8MI2uo7c3WTwvPjdA53TueCvH27y6wITIw6j5uYl0jCF9lg%2Bpn1Algykz2Gfw7i1DWARrtG6iT2QnkwGYWEEFuU79gYQy%2BWpXFZqyRzlLVoEWBvlVBhcAlZcszJqSip6RIw0Pdp8YoDnc7thiXoihzmqbl5U8oiedUQ5UDU1tftZxsTSwI9ETw8RQH0Yhd2rCADIww%2BH%2Bcu4syIGEX9bwTPQpVAviF1BY87%2FejWm40acj3poiJ9N2hQpBY61exJJgTPNXT%2B8CdKcUymHgMfzl9fEww3ir%2ByVTPD%2FDb%2BxmIgLe16Tmr1YRDXVmUszetU9kMLSI38EGOqUBAlMTqYLrmjAOJHmIo2Tz4wOW%2B0if1dm2Caui9g2Bk2SzS4vmXe0s70nSxHYSWB522%2BS%2B4BbZhfpTGQqBb9u4rJ9Maz9N37JZfkf3WF2kGD2loUoJCAqfgkCGDnVMNcjB0UrSOf0mthtuK3dwWEBohvudam6KsWOm7wO%2Fb7RGztaE2ryCy4CjwzW0SJV%2FBaVyXmHovDoVr45iXuSf8B%2FWBVoJ0isM&X-Amz-Signature=84bacd2f449b568ec52f41f2e890a7b16501990287cd170a8583d9c6d089f4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJLP5T5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDtbv%2Fw%2Bm83KryUfHzWwB%2BKeCT4dXL%2FtcRcdqj4oHz8QIgCjAEbxpnp%2F4ySSRHKdLaazUofDZUAKqDdSN5nnySFwwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLWkGWaEvPdAW3hCyrcA7IYRSfjztNTTLCOQ78CzJ7ShEjDEtM11SsSIjLqozQM7ajfMzjvdTlNZfhRP9BZ9r%2BPahE0jAPYwC%2BoxP0DwN3dxQPvrfE6ZtgGuHJOHbsmcuFOm3Ql8M5l%2FBUSSS0rVo3Q77Z8QFqERFfsJQEOmJmZOE95gOIAy7IyQ1TzUe0Me6eRC9My9qrihnu%2BXczhX43HZWjZfmG57c68hKKPVcVCr3cwmsL%2FAaX2nLVyKfDfvlw7g99EXXMUakob8u627VCjBFd4lRvN%2B%2BABcR1t9hES6XzEEch1tqiVxAkhYWEvpNXVBN6EB2tAW5%2B8MI2uo7c3WTwvPjdA53TueCvH27y6wITIw6j5uYl0jCF9lg%2Bpn1Algykz2Gfw7i1DWARrtG6iT2QnkwGYWEEFuU79gYQy%2BWpXFZqyRzlLVoEWBvlVBhcAlZcszJqSip6RIw0Pdp8YoDnc7thiXoihzmqbl5U8oiedUQ5UDU1tftZxsTSwI9ETw8RQH0Yhd2rCADIww%2BH%2Bcu4syIGEX9bwTPQpVAviF1BY87%2FejWm40acj3poiJ9N2hQpBY61exJJgTPNXT%2B8CdKcUymHgMfzl9fEww3ir%2ByVTPD%2FDb%2BxmIgLe16Tmr1YRDXVmUszetU9kMLSI38EGOqUBAlMTqYLrmjAOJHmIo2Tz4wOW%2B0if1dm2Caui9g2Bk2SzS4vmXe0s70nSxHYSWB522%2BS%2B4BbZhfpTGQqBb9u4rJ9Maz9N37JZfkf3WF2kGD2loUoJCAqfgkCGDnVMNcjB0UrSOf0mthtuK3dwWEBohvudam6KsWOm7wO%2Fb7RGztaE2ryCy4CjwzW0SJV%2FBaVyXmHovDoVr45iXuSf8B%2FWBVoJ0isM&X-Amz-Signature=b5da1874d48f15a8c6578ab78e0bd0b167902617b23aa63b440a0e0ac8c690a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
