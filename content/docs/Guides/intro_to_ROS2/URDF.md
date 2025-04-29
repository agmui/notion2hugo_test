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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AJYYI67%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2FriaoCMYqccZWM1AnFNb8sF56wHrN3un05uVL2VqtAiBKWra%2BSrk58%2FCI5RuNocPIjmBY5fFZga64MoMlZwrb2iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME64ynvPfSd2%2FSPKQKtwDLdWd7kU1eEO4b26vYZJ2e1QgpSo6scNbIbWR4kuXThilKjGoJW50CNFil72R6qOy5Vv8WD7cigyC08OFe8undOkMNqXqfiojESDRU%2Bj7kpzcW38LlXsNGIoZjYIaeNrmdieysWI0ITGMso94jaLfeousAI6dU8YROdqfI3HGy%2BCt9uNzlReoauNFE1Zpt%2B9hHTu51ieBHkRqs1c9REP4W4oHZiOF2L0e5rGiBpEyLBPH7L5YAVDcSUQJYLAoXOsfD%2F8p%2BJWJ3UJL4sCY9k9DE3ImuPLVIfzQKpaUWaLU6xXkgm6HVQ81FMb2%2FN66Sn617UA57SU0uVukaX6up9kFt%2BSAskXQ4qSMcpQvEACd%2BFn%2FsCaZiikUJGDQjL9aMde1%2Fx7pAKLlQ4ADkFEBD%2F%2BPjpZWRGeftAppFUoxtjRqqgkfQ%2Bi8WLpDVwVZip39OjXNmIyiRx1tvf9uoOpeJ6WsdGr2UDIlC5qAVH9IvP%2Fal9PWlpvsu50H0Qr0ytK%2BpnYC8E8K%2BZ%2FcFizxhq7rbfIPs9%2B%2BnqT0JYSN7YMP3gsQN2f%2FKg3ruxSMkdfZfhs0LX8XUKtbJK0cDdQzo9mnpi1ty8ej6IL%2BzQi2v7M1RXh72nu4vTZ5AfFNuc1ShyIw9t%2FCwAY6pgHZHJhh6db17%2BllhD%2BNPn%2B4NZAGYcPJkUCwRDEHdMhikNtIcRs2W2ZXZm4E2FJmHyLzGkfZT%2BltNPU1aYvT%2Fxe1DV8lJJxwcFIavC5PaZAbcjJm5%2BZM7vX3D4q%2BIQGUedajjJAO6CanRyo%2F4%2BnEbtsaOhN7cIAB%2Bjd2WVG2qmcEwPV8ZYh%2BU3oZAAPfNa%2BM%2Fg0XmfFwee9azazpfDK0tfekH5zTSuAC&X-Amz-Signature=f87f868972561dd84e740e907924d21ba7961cf766c3715adc61b2420d68d3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AJYYI67%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM%2FriaoCMYqccZWM1AnFNb8sF56wHrN3un05uVL2VqtAiBKWra%2BSrk58%2FCI5RuNocPIjmBY5fFZga64MoMlZwrb2iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME64ynvPfSd2%2FSPKQKtwDLdWd7kU1eEO4b26vYZJ2e1QgpSo6scNbIbWR4kuXThilKjGoJW50CNFil72R6qOy5Vv8WD7cigyC08OFe8undOkMNqXqfiojESDRU%2Bj7kpzcW38LlXsNGIoZjYIaeNrmdieysWI0ITGMso94jaLfeousAI6dU8YROdqfI3HGy%2BCt9uNzlReoauNFE1Zpt%2B9hHTu51ieBHkRqs1c9REP4W4oHZiOF2L0e5rGiBpEyLBPH7L5YAVDcSUQJYLAoXOsfD%2F8p%2BJWJ3UJL4sCY9k9DE3ImuPLVIfzQKpaUWaLU6xXkgm6HVQ81FMb2%2FN66Sn617UA57SU0uVukaX6up9kFt%2BSAskXQ4qSMcpQvEACd%2BFn%2FsCaZiikUJGDQjL9aMde1%2Fx7pAKLlQ4ADkFEBD%2F%2BPjpZWRGeftAppFUoxtjRqqgkfQ%2Bi8WLpDVwVZip39OjXNmIyiRx1tvf9uoOpeJ6WsdGr2UDIlC5qAVH9IvP%2Fal9PWlpvsu50H0Qr0ytK%2BpnYC8E8K%2BZ%2FcFizxhq7rbfIPs9%2B%2BnqT0JYSN7YMP3gsQN2f%2FKg3ruxSMkdfZfhs0LX8XUKtbJK0cDdQzo9mnpi1ty8ej6IL%2BzQi2v7M1RXh72nu4vTZ5AfFNuc1ShyIw9t%2FCwAY6pgHZHJhh6db17%2BllhD%2BNPn%2B4NZAGYcPJkUCwRDEHdMhikNtIcRs2W2ZXZm4E2FJmHyLzGkfZT%2BltNPU1aYvT%2Fxe1DV8lJJxwcFIavC5PaZAbcjJm5%2BZM7vX3D4q%2BIQGUedajjJAO6CanRyo%2F4%2BnEbtsaOhN7cIAB%2Bjd2WVG2qmcEwPV8ZYh%2BU3oZAAPfNa%2BM%2Fg0XmfFwee9azazpfDK0tfekH5zTSuAC&X-Amz-Signature=d9181de92e1e47f4fd0e6ae4ad4f43a00a53017ae2a0a332a5ed451d60f8c801&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
