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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZM6274%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAQroQNQVT6OlcoqPTwpYdkIXeanAUfxg7Pdq4xF7JgIhAPwUV%2Fx%2FoB%2FfP9rujF%2FMK2gC8nTlgjiobNTU43r821kaKv8DCG0QABoMNjM3NDIzMTgzODA1Igx2V6gcCVYUHmI1cMgq3AN%2F3rLXjmZ9kdo8pLOHCM7vxDqwrRnlW8V5shFqfobkBbrWArjSoiLaeYHxSjoxaJBUoY0za4oHMuIcfQFovi3vc2ohix%2BvLmwg0VOHCJ2BQceriOE1WczIG5WA1glecNbIWaeqxfq5SKMznx79vJqnmxOXOYWgtDR%2B%2Fff8HLCKUNW0bkP6lTYTIBl1O3LpR72Si4KZTyWedAjchi5IGDRvuDcbXG166SeFMLwv3bivL%2Fl%2BuqRiVIjkCx5xAFcbI7gZ%2BW3JzTCw9Lj5pLbx%2FK9pExWGVxtaXKou%2BY7EuLGeDqUAuKIZiWWjfRak4617S50TuM7BnDPFnTupyq3MLU89tPXFim1tMyDvLtgC1JJ8t1Em6%2BFHpmd36u2wSx%2BcKuwSedYevNxduncnpWGxcoGNW%2Fy%2FbdjHmzN8Q%2B0nXvE7nI3Hr2819MX0NjbcKW36oTYSQaEabYPhRPdiQX303z3vA5nDaGDIIubOdzA2Obd6oXHlpEcdJgh1KbGcW%2BWaUK01onZsD4TaSxcDKhR%2Fcfedn6sg5Y3TTnP%2FLHjhsoYUeEpPwjHk3aklF%2FCDPabaU0gL1yvRTRRh5dABbwhJpEhmcVm%2F0mjZ9R0gPkN7950Ew9Z92Ml6Gfk6jXY2xDCK%2Bo7CBjqkAaAqmc0UCUaP8lz6%2FQXxbf716Wxm%2FZaUFFWEoqgpMEui8lBOMgXaCZm9fw424EVdzPf9ZuDpAxKkZyty2RuIyzZyLWq31ZXx8D0IoX30%2BM2CNAwlWQwRxReJsZn4bL7XzmtzhOnJqfC6hwg5gF%2F0qR2eNO44WvQs2oYyPVlldUc0xRLLzf%2FoRRO0P6W3XzXwyZAiQGIlD%2FMfmhudmNXdIe5BiYK7&X-Amz-Signature=0ae4a4c45ccb2c55ae4e7e370b767974fe483ad70e1ad96f3cbd290c471eaaf8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZM6274%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWAQroQNQVT6OlcoqPTwpYdkIXeanAUfxg7Pdq4xF7JgIhAPwUV%2Fx%2FoB%2FfP9rujF%2FMK2gC8nTlgjiobNTU43r821kaKv8DCG0QABoMNjM3NDIzMTgzODA1Igx2V6gcCVYUHmI1cMgq3AN%2F3rLXjmZ9kdo8pLOHCM7vxDqwrRnlW8V5shFqfobkBbrWArjSoiLaeYHxSjoxaJBUoY0za4oHMuIcfQFovi3vc2ohix%2BvLmwg0VOHCJ2BQceriOE1WczIG5WA1glecNbIWaeqxfq5SKMznx79vJqnmxOXOYWgtDR%2B%2Fff8HLCKUNW0bkP6lTYTIBl1O3LpR72Si4KZTyWedAjchi5IGDRvuDcbXG166SeFMLwv3bivL%2Fl%2BuqRiVIjkCx5xAFcbI7gZ%2BW3JzTCw9Lj5pLbx%2FK9pExWGVxtaXKou%2BY7EuLGeDqUAuKIZiWWjfRak4617S50TuM7BnDPFnTupyq3MLU89tPXFim1tMyDvLtgC1JJ8t1Em6%2BFHpmd36u2wSx%2BcKuwSedYevNxduncnpWGxcoGNW%2Fy%2FbdjHmzN8Q%2B0nXvE7nI3Hr2819MX0NjbcKW36oTYSQaEabYPhRPdiQX303z3vA5nDaGDIIubOdzA2Obd6oXHlpEcdJgh1KbGcW%2BWaUK01onZsD4TaSxcDKhR%2Fcfedn6sg5Y3TTnP%2FLHjhsoYUeEpPwjHk3aklF%2FCDPabaU0gL1yvRTRRh5dABbwhJpEhmcVm%2F0mjZ9R0gPkN7950Ew9Z92Ml6Gfk6jXY2xDCK%2Bo7CBjqkAaAqmc0UCUaP8lz6%2FQXxbf716Wxm%2FZaUFFWEoqgpMEui8lBOMgXaCZm9fw424EVdzPf9ZuDpAxKkZyty2RuIyzZyLWq31ZXx8D0IoX30%2BM2CNAwlWQwRxReJsZn4bL7XzmtzhOnJqfC6hwg5gF%2F0qR2eNO44WvQs2oYyPVlldUc0xRLLzf%2FoRRO0P6W3XzXwyZAiQGIlD%2FMfmhudmNXdIe5BiYK7&X-Amz-Signature=8d20e9513d37934b6d257abb12cccd58c691b0455ba784c448abc66f389f0199&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
