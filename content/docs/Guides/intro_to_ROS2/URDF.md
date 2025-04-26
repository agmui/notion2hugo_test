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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7T7U56T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXK4rZm5OmhBIqofxf77emHH0VKYW0pvfkdbr%2B15%2FafgIgUE9SyJ7Uc7%2FV7DEVyNKajdNeYAtxnCs%2BfEcfJoqPTJwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMoP1ewZGPHqh8loDCrcA2KSgzZTmoCM8YymVyT3QB23gq9KvNw9wXWRMKLGxT41nSxTw1EMmHWXW9ECtoc%2BfWJN63xMPkIuTHaHFDzU8DIBRCehsB%2FQxjNcqxeAEJh75Jams2JDUFKHpn%2BpGqB66B9MlFkdfkQUaenJDmkiI1a%2BRXHAJZcv%2Fk0Ca0brItmTOd4PYjeWyIvKBtHSeVyYU2Djysyd2peRDFI9N7vTu2qEq8fO5ArhUzlOgUWpqiAk3Kx9D63gdearFCgO1MlRHnp2Nqsfr6qQL9jgvm0SJbQAHLsmY%2FHDNhj8helevdlp2bSGRQkZwNiwx4I5yp7ImDbAXl0tCcmNS7ejuEUBoSwDExUagjeQwl8UuTQXsDJUio%2Ffgqge%2BPX7hBW%2B7fKRXwOoDcSF0sRuJL28GCJa7gz9jcvyKVYEuyP1qiiBHx5B2nvYNHUv9KI6RaGxQ2fBFUkLpNHaLuPyO0Zyx9NQlGJk6zDCMsgLBh6X9K6pW2%2BYc9c8IBxMOKJe%2BQnDBLL1HfQKYrpkvv88TFlthonAsBWITM%2Bp5Z6542TY7toBxlPuU5W%2FmRpKLMnMX5KMwKPh0sKCCdTr58QjzIzrId%2B6Sr0oszFfy0TDddn5RWRtUSIhKUMTVmUimCOfaJc6MKaitcAGOqUBheEDLw1v2RnrrFeZEzaYQYRmKlh3zpoiuAmsr60Iy1v7uMmDRR87oSC43kMiqHon0JpIRZYyx3A64XKvTteA0s0ydycLXAM6cJbXHtSefD3PHX9ZRw4MIrDPFGPAH6ac3Hz9kcGtlZxRxi%2BbV3FSvwMGWzM7JXvdIcJaswPwPUy7QHE82UhupIJ0sl1moB5fiVasvgpeqjFBfRhFnIgYJ4sAY7wU&X-Amz-Signature=ed64998af844afcbcd6a4ee208121ba33fa5c26d14c28998b717bf86f1b4e89a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7T7U56T%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXK4rZm5OmhBIqofxf77emHH0VKYW0pvfkdbr%2B15%2FafgIgUE9SyJ7Uc7%2FV7DEVyNKajdNeYAtxnCs%2BfEcfJoqPTJwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMoP1ewZGPHqh8loDCrcA2KSgzZTmoCM8YymVyT3QB23gq9KvNw9wXWRMKLGxT41nSxTw1EMmHWXW9ECtoc%2BfWJN63xMPkIuTHaHFDzU8DIBRCehsB%2FQxjNcqxeAEJh75Jams2JDUFKHpn%2BpGqB66B9MlFkdfkQUaenJDmkiI1a%2BRXHAJZcv%2Fk0Ca0brItmTOd4PYjeWyIvKBtHSeVyYU2Djysyd2peRDFI9N7vTu2qEq8fO5ArhUzlOgUWpqiAk3Kx9D63gdearFCgO1MlRHnp2Nqsfr6qQL9jgvm0SJbQAHLsmY%2FHDNhj8helevdlp2bSGRQkZwNiwx4I5yp7ImDbAXl0tCcmNS7ejuEUBoSwDExUagjeQwl8UuTQXsDJUio%2Ffgqge%2BPX7hBW%2B7fKRXwOoDcSF0sRuJL28GCJa7gz9jcvyKVYEuyP1qiiBHx5B2nvYNHUv9KI6RaGxQ2fBFUkLpNHaLuPyO0Zyx9NQlGJk6zDCMsgLBh6X9K6pW2%2BYc9c8IBxMOKJe%2BQnDBLL1HfQKYrpkvv88TFlthonAsBWITM%2Bp5Z6542TY7toBxlPuU5W%2FmRpKLMnMX5KMwKPh0sKCCdTr58QjzIzrId%2B6Sr0oszFfy0TDddn5RWRtUSIhKUMTVmUimCOfaJc6MKaitcAGOqUBheEDLw1v2RnrrFeZEzaYQYRmKlh3zpoiuAmsr60Iy1v7uMmDRR87oSC43kMiqHon0JpIRZYyx3A64XKvTteA0s0ydycLXAM6cJbXHtSefD3PHX9ZRw4MIrDPFGPAH6ac3Hz9kcGtlZxRxi%2BbV3FSvwMGWzM7JXvdIcJaswPwPUy7QHE82UhupIJ0sl1moB5fiVasvgpeqjFBfRhFnIgYJ4sAY7wU&X-Amz-Signature=9bb62498655c524c873edb140dc0521b6c016a068eecf7c6dbffb945df36970c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
