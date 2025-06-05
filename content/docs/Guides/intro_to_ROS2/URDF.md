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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6QJ3R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE78YJ1H40OOwOKjH8bmyoPhASFRhw8e4MrsMMbgjL4%2BAiBTTccUi4ssu7MYKusK9cdIHNDq3tGm8eRpcooTOTxjNSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMta8h2lbDxWAosXs5KtwDKoR0LlXQeY43Df5tabVmJ81OVVNTJusLTFoXCPeRihoFsX0llEzPAbScxY%2BgNofaxBxKk8C%2F0m79nl7Ueb1tjG2jG21Fu7mS%2BrQDnVK4qhEfxxPmwUugoJpCfZOTCYhpvlHcCn%2F%2B2bebiMoB1gfKQZvrWExbbnTbYc97MwldWEJcnII6C2RSnLN3tZ2bmCcx4JNzrPP0e5uFN78hU%2BfmZNE00l7jn7jYhOQrITR0JN0ZJCpcFI6%2BNi%2B6TDmWoca1L6LJQQNwAQPEh%2BOhcYHenipIEhy2nLKWTEV1M%2BxaENJ%2BJwjUvCbP4ZT1H8a58BpGGXS6cDrcmQUZVOyOlcbPx6MjDMPBzaMk2wwdolBEmaMPtUiSeYi47Ko%2FWZksIQB4Q9M9%2B7HR3ewf7I4RcVg%2FKIEXfL0aG4pnrj2OMNZgPkkP3ggVOi6wk5JcZE1fFMxW0IYhjuigejw1a9KLqgrTakGCkgiPBxQV8lWHCeGyw85dZifcgwUs6RXZnoO9JcarxzAwCnZc8x8e7Tv03Icyx8uqQkUMq7G0INT1vKQ0HjexC4CNn5NLoJ3Fqj5IS%2FsrE%2F1x%2FLqkk4qs%2FF%2BavbzsthxlEoU6%2FBQPSq%2BRwTktv76RyafnF1FssH2pm6cw7MmDwgY6pgHQWOSaOgWKsdJOaeaTa7a4bEokEwL0PY77g7cL%2BNA098dQBetsiBs6ZF947gQO9I0K1xJXwLKghEobrfKd1g%2B59TO%2Fvebl1Wb0ApJ6MnUJSCjMHlpbIHYuk1Yz7NgHgqEdeBHVHd8fZFxawfcHcBD1lJS7UYQPmoCAorCCIIMIZ3DVgYaONzQtodiIlbWx0Zk%2FWMi0gkQonzaw%2FI4u%2Bt%2FbxjkJo01m&X-Amz-Signature=11686082162853ad768917c6114f6f048580d1506328991b385b9a7779810c60&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6QJ3R%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE78YJ1H40OOwOKjH8bmyoPhASFRhw8e4MrsMMbgjL4%2BAiBTTccUi4ssu7MYKusK9cdIHNDq3tGm8eRpcooTOTxjNSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMta8h2lbDxWAosXs5KtwDKoR0LlXQeY43Df5tabVmJ81OVVNTJusLTFoXCPeRihoFsX0llEzPAbScxY%2BgNofaxBxKk8C%2F0m79nl7Ueb1tjG2jG21Fu7mS%2BrQDnVK4qhEfxxPmwUugoJpCfZOTCYhpvlHcCn%2F%2B2bebiMoB1gfKQZvrWExbbnTbYc97MwldWEJcnII6C2RSnLN3tZ2bmCcx4JNzrPP0e5uFN78hU%2BfmZNE00l7jn7jYhOQrITR0JN0ZJCpcFI6%2BNi%2B6TDmWoca1L6LJQQNwAQPEh%2BOhcYHenipIEhy2nLKWTEV1M%2BxaENJ%2BJwjUvCbP4ZT1H8a58BpGGXS6cDrcmQUZVOyOlcbPx6MjDMPBzaMk2wwdolBEmaMPtUiSeYi47Ko%2FWZksIQB4Q9M9%2B7HR3ewf7I4RcVg%2FKIEXfL0aG4pnrj2OMNZgPkkP3ggVOi6wk5JcZE1fFMxW0IYhjuigejw1a9KLqgrTakGCkgiPBxQV8lWHCeGyw85dZifcgwUs6RXZnoO9JcarxzAwCnZc8x8e7Tv03Icyx8uqQkUMq7G0INT1vKQ0HjexC4CNn5NLoJ3Fqj5IS%2FsrE%2F1x%2FLqkk4qs%2FF%2BavbzsthxlEoU6%2FBQPSq%2BRwTktv76RyafnF1FssH2pm6cw7MmDwgY6pgHQWOSaOgWKsdJOaeaTa7a4bEokEwL0PY77g7cL%2BNA098dQBetsiBs6ZF947gQO9I0K1xJXwLKghEobrfKd1g%2B59TO%2Fvebl1Wb0ApJ6MnUJSCjMHlpbIHYuk1Yz7NgHgqEdeBHVHd8fZFxawfcHcBD1lJS7UYQPmoCAorCCIIMIZ3DVgYaONzQtodiIlbWx0Zk%2FWMi0gkQonzaw%2FI4u%2Bt%2FbxjkJo01m&X-Amz-Signature=6a67bd37173832f267f814256674ab1fc7a57c3b6b6368dada4ce53a2b9463c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
