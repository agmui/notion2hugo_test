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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMIRDD6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV0TDQbMmwHbDG5PqHulcWQTMIvufcyAjCXiZ3jHlU5QIgCjz%2FB%2BTMbCwh6lBpI%2B0tGWmw9Z2YwX1l2T8sbc4M6f8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMfJaSAAmq%2B1B5plSCrcA6aWWlCAQSXmGmlFhKpFrQ7wwntSBjfISJIT%2Fmo3xxVA%2Fi9DtxLAEhfBbEr0Mf8V9gW5Dvqj%2FvJDlfBfvo7kF%2FEVHRS1oY8AMIwn64n3BxqvnDzi5FPZh13Dyi0b3HsMZfJnFlDOwSJP9KfVfmN1YXmbP4ZcSpWyDc0AsVNqHswDzo2l%2BZe9j9oU4Q7tHRzpDHh0yHFvJXfz%2FWDjSOn%2FBYsNzM%2Fl2njV3fL%2Fa1W%2BpMUqcaFLYgSaJel%2FgZbgbPJfprWbSwV3jkOxUmhTs8YmWSNoQ5cqx6Vzd53yvySJm%2FxQ%2FaY1E9QfpdTi3EthdscyKELREnpGa5yHN6s1joWxa%2BIaBXuFzssc9TR5bPE4GvN1nVrt8mbP8jnmTC8S86fPe0G7KdzzHCgsvPB8%2FrNFcli3iYWQSG2MXu50C%2BPCBk4xFj%2FaqTOsNAOe7iKZFO4P9fSCSYSOr9SFrXTL7Do1tL1PD0v5zt6iuLmhpRxv3KPpUkXU9sji8%2Bl07qeXMWjE3f0mg4bwWgwH7ZNTAZBipmumX158hzadPbAYhyD2z80W7gWcg20IqbKKGNNsuE4KutltBdKdN3cDG8gtGEdqGnjBT69NulUTeNLOWwL16sPhGXBFhwKMUFVywGYBMLT91sEGOqUBShKimCeYSAEXm%2BtiT8MuLZ10VvQQillxEV44nHnLCok6t1gKTKNsmT%2BcCZ4nkrkuF6LaSGDDEzvZB8VK%2F%2FUT7xYNgpsSXK%2B6vIJYnvbiiXnHAemOdtenNWj0TBllyPuTqBI7efV%2FQTwZ9hblHKKmSHWX%2ByeoL1Jjsn2eAlKrNdfGfsuh4eSNtn%2Fp3R7naU9S9JUQ2I3zvSItUaSiCupexEoO9yeA&X-Amz-Signature=52a9921941ee50849d69a84417e9609309f1567c886d84e8b5bb337c757439f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMIRDD6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV0TDQbMmwHbDG5PqHulcWQTMIvufcyAjCXiZ3jHlU5QIgCjz%2FB%2BTMbCwh6lBpI%2B0tGWmw9Z2YwX1l2T8sbc4M6f8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMfJaSAAmq%2B1B5plSCrcA6aWWlCAQSXmGmlFhKpFrQ7wwntSBjfISJIT%2Fmo3xxVA%2Fi9DtxLAEhfBbEr0Mf8V9gW5Dvqj%2FvJDlfBfvo7kF%2FEVHRS1oY8AMIwn64n3BxqvnDzi5FPZh13Dyi0b3HsMZfJnFlDOwSJP9KfVfmN1YXmbP4ZcSpWyDc0AsVNqHswDzo2l%2BZe9j9oU4Q7tHRzpDHh0yHFvJXfz%2FWDjSOn%2FBYsNzM%2Fl2njV3fL%2Fa1W%2BpMUqcaFLYgSaJel%2FgZbgbPJfprWbSwV3jkOxUmhTs8YmWSNoQ5cqx6Vzd53yvySJm%2FxQ%2FaY1E9QfpdTi3EthdscyKELREnpGa5yHN6s1joWxa%2BIaBXuFzssc9TR5bPE4GvN1nVrt8mbP8jnmTC8S86fPe0G7KdzzHCgsvPB8%2FrNFcli3iYWQSG2MXu50C%2BPCBk4xFj%2FaqTOsNAOe7iKZFO4P9fSCSYSOr9SFrXTL7Do1tL1PD0v5zt6iuLmhpRxv3KPpUkXU9sji8%2Bl07qeXMWjE3f0mg4bwWgwH7ZNTAZBipmumX158hzadPbAYhyD2z80W7gWcg20IqbKKGNNsuE4KutltBdKdN3cDG8gtGEdqGnjBT69NulUTeNLOWwL16sPhGXBFhwKMUFVywGYBMLT91sEGOqUBShKimCeYSAEXm%2BtiT8MuLZ10VvQQillxEV44nHnLCok6t1gKTKNsmT%2BcCZ4nkrkuF6LaSGDDEzvZB8VK%2F%2FUT7xYNgpsSXK%2B6vIJYnvbiiXnHAemOdtenNWj0TBllyPuTqBI7efV%2FQTwZ9hblHKKmSHWX%2ByeoL1Jjsn2eAlKrNdfGfsuh4eSNtn%2Fp3R7naU9S9JUQ2I3zvSItUaSiCupexEoO9yeA&X-Amz-Signature=e380728942df749d942e471074618a71d8864896bfaf1df813c67355d54f4821&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
