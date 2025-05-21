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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIZ4AWQP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIC5rjCx2SDgKmWU0Wjk13PRS%2BwMGdHPGgVoXMGVLrWHlAiEAtZUfaDvjW4WvgXfeEaS2leaH7%2FxDG1mB5Jk0VIwIkswqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLctksLF6IB%2BuV9ZircAyO4nMSjgbZVTZysJk9ytuWRN96dszN6xkVhi2TnnoHdNZbsiD76c7U6ObBoo4eqEOdTyX5Z2JqdMOCYExjfT3Xsocy6JuTV%2FohED4IEZ2MDNs3j3K7fQpWM93LOfAXcPUiSeQ3aGHoiH18iyXb1%2BnFcE1YiM7JV6IiCjg52FuaPW%2FT0rLFac3xtPDDt6Jwoh8fKqN9plvG2kKjDHp8D25uDN4rli9Yw3GSHxO7ItqCIO4BrvUHHm4QwhxyMd3n%2BXTIMMDJiscoUMNcIWtp1WlAQ7mrb%2FNA%2FBYLUE8ZDmIV9edK6PKi1XMDQFWwFq3QpjxJt6gwngL%2FEFypVgyUiS9HKuAg7GpRiqR8TcH%2Ft98ko9fDLpFxQrSgQoH0XXr%2BdkuhRKAY%2BpVtjxr%2FX8iDTASvdJjF0zPAr6y4Lp%2Bj2WbOpg9ktQbiQGUU9IEVOe59DgYFHLkgfWSyrFAr3j7%2F0%2BIlu49ppPZweMkmOyJ39Bo8b6DVOH1xzWbWopOgaF9VDE9fbhbsYuv3HQoEaaMx63ddW4Ks6oWQ8WTrdEza9jT%2FoanN%2BxqQTi%2FZGydLrc9VkA7zJgFES8hYCxisJGLlYdTV8Z6QPWZdN%2BP9fwXUb6ZaS2QIyJocJ6Y59o9ZcMKChucEGOqUBGYUjdRbxjDXPXc9hRG4lHzTH788C0Zr883C0p2XDJ%2B7g0r8I65xi4JKw2SLBc36C7AWWTA1Tv1TU%2BPSe7RtfK68Nycbr9ZezT7gr%2F5iSYjbiPx6TqVNa8aHJ12I3rI6i0tJDpVRoFY3Nd38Ya2dIheu9s0ez2InRYFNfn08nfa5Aa0G8LURAQAzVmO7pUIj0iaKWvS5JXdNchSk518%2FWFqa3am58&X-Amz-Signature=762dae4f03d6c9020c3fe8023f50556290dcf0f83850fd96fc6fde03df8d2c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIZ4AWQP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIC5rjCx2SDgKmWU0Wjk13PRS%2BwMGdHPGgVoXMGVLrWHlAiEAtZUfaDvjW4WvgXfeEaS2leaH7%2FxDG1mB5Jk0VIwIkswqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLctksLF6IB%2BuV9ZircAyO4nMSjgbZVTZysJk9ytuWRN96dszN6xkVhi2TnnoHdNZbsiD76c7U6ObBoo4eqEOdTyX5Z2JqdMOCYExjfT3Xsocy6JuTV%2FohED4IEZ2MDNs3j3K7fQpWM93LOfAXcPUiSeQ3aGHoiH18iyXb1%2BnFcE1YiM7JV6IiCjg52FuaPW%2FT0rLFac3xtPDDt6Jwoh8fKqN9plvG2kKjDHp8D25uDN4rli9Yw3GSHxO7ItqCIO4BrvUHHm4QwhxyMd3n%2BXTIMMDJiscoUMNcIWtp1WlAQ7mrb%2FNA%2FBYLUE8ZDmIV9edK6PKi1XMDQFWwFq3QpjxJt6gwngL%2FEFypVgyUiS9HKuAg7GpRiqR8TcH%2Ft98ko9fDLpFxQrSgQoH0XXr%2BdkuhRKAY%2BpVtjxr%2FX8iDTASvdJjF0zPAr6y4Lp%2Bj2WbOpg9ktQbiQGUU9IEVOe59DgYFHLkgfWSyrFAr3j7%2F0%2BIlu49ppPZweMkmOyJ39Bo8b6DVOH1xzWbWopOgaF9VDE9fbhbsYuv3HQoEaaMx63ddW4Ks6oWQ8WTrdEza9jT%2FoanN%2BxqQTi%2FZGydLrc9VkA7zJgFES8hYCxisJGLlYdTV8Z6QPWZdN%2BP9fwXUb6ZaS2QIyJocJ6Y59o9ZcMKChucEGOqUBGYUjdRbxjDXPXc9hRG4lHzTH788C0Zr883C0p2XDJ%2B7g0r8I65xi4JKw2SLBc36C7AWWTA1Tv1TU%2BPSe7RtfK68Nycbr9ZezT7gr%2F5iSYjbiPx6TqVNa8aHJ12I3rI6i0tJDpVRoFY3Nd38Ya2dIheu9s0ez2InRYFNfn08nfa5Aa0G8LURAQAzVmO7pUIj0iaKWvS5JXdNchSk518%2FWFqa3am58&X-Amz-Signature=ffeba159f23da62c63f5464393f81a64f8e251452fcd8b02775a0619a9ef12b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
