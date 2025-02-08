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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XZL3E7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFxnIdgWLB9NJUEUyULeRDtWRi8bXAfIUcb4jlUy0hJJAiEAvsgO8TTS9514whGQdq1JugxptDb%2Blt8Qj2%2B3Ekvxa%2FAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKMUb0ZE%2FQRr7Z2SyrcA3%2B176tNnMf5szJ0zwOfV2Yuotzyx7S%2B0WprH1hrhepue9%2FnzhXmQiy3oyjjQHnvEwnXGwHObMK69nPPL%2Fq3mdAqlEfV3AADdyUelO9tNBaS0Jn9AkxeAI9O19TLUz3S42AaXMykKa7fpM3ZpQaJAaFbzGEgrunGXzyER4vihPFyL5oKGeJN3kMhppW1B7ILPbsbe41NDHKwk2dGG9M8pi%2B%2F9UV0k8qGADAb08Cci9vwr7bYsRZHIIbEL8rw%2BBJl4ZnMaGHBXP0nWAKEcvtk2ANu3eyigk8oaADhMm3jonw9R1J1pJpz0mR5IHEJ6EGvP%2FUrgO0QL1bEtXvn468CoGZe97KbpI31gn6eAiO5c7YzWcnUejvz3xkSVUuRiQL8ic%2FC4l5eoWn4pZPsdqhLA60J%2BdmTAbXB8kRA76Rr3d6UrqPO3LpX0vu7itdzXG2eNrNa02O%2FN6nNnXz51U9dtJjgQxNT0RgRxgR7ru91FkCWGPTceqpmG3pnQq43eKT3FPqwHOKrZQ7opypIc7dl69FZpxFJYBlHXPuxR23MSaedwJrUeXpnCbUcNgEWM%2F%2B9g8jU8llmbMc5GAjTjDkisZ65uJNcgnQ210jB15R7bnvp%2BgsbJyvt4BgYF6ZkMIiHnb0GOqUB0NtfoeBQF%2BKPsSatRVnUn2A1RMASTqki1kcylcoieNJCDy%2FefrDUhH%2B1zgQl6Jk%2F82GUt9YrGxXRozCypV1a5LMMY8ktQsc8hgE64ALl5dID%2BarN3c0sVvJSLm3mk%2F7BhJxTIom5PitaCNJrpzXyl4e9M1mrAYvw4YegBlOkZQV6kgpdYmLZ9SgCaQctMloaD%2Bm07e%2Fc6qisubr4UBfxSXBFqDw%2B&X-Amz-Signature=e433f1b4d9e6996c7ac10a95adc88f90d15efefe1c54b35431a71c44781fb395&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XZL3E7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFxnIdgWLB9NJUEUyULeRDtWRi8bXAfIUcb4jlUy0hJJAiEAvsgO8TTS9514whGQdq1JugxptDb%2Blt8Qj2%2B3Ekvxa%2FAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKMUb0ZE%2FQRr7Z2SyrcA3%2B176tNnMf5szJ0zwOfV2Yuotzyx7S%2B0WprH1hrhepue9%2FnzhXmQiy3oyjjQHnvEwnXGwHObMK69nPPL%2Fq3mdAqlEfV3AADdyUelO9tNBaS0Jn9AkxeAI9O19TLUz3S42AaXMykKa7fpM3ZpQaJAaFbzGEgrunGXzyER4vihPFyL5oKGeJN3kMhppW1B7ILPbsbe41NDHKwk2dGG9M8pi%2B%2F9UV0k8qGADAb08Cci9vwr7bYsRZHIIbEL8rw%2BBJl4ZnMaGHBXP0nWAKEcvtk2ANu3eyigk8oaADhMm3jonw9R1J1pJpz0mR5IHEJ6EGvP%2FUrgO0QL1bEtXvn468CoGZe97KbpI31gn6eAiO5c7YzWcnUejvz3xkSVUuRiQL8ic%2FC4l5eoWn4pZPsdqhLA60J%2BdmTAbXB8kRA76Rr3d6UrqPO3LpX0vu7itdzXG2eNrNa02O%2FN6nNnXz51U9dtJjgQxNT0RgRxgR7ru91FkCWGPTceqpmG3pnQq43eKT3FPqwHOKrZQ7opypIc7dl69FZpxFJYBlHXPuxR23MSaedwJrUeXpnCbUcNgEWM%2F%2B9g8jU8llmbMc5GAjTjDkisZ65uJNcgnQ210jB15R7bnvp%2BgsbJyvt4BgYF6ZkMIiHnb0GOqUB0NtfoeBQF%2BKPsSatRVnUn2A1RMASTqki1kcylcoieNJCDy%2FefrDUhH%2B1zgQl6Jk%2F82GUt9YrGxXRozCypV1a5LMMY8ktQsc8hgE64ALl5dID%2BarN3c0sVvJSLm3mk%2F7BhJxTIom5PitaCNJrpzXyl4e9M1mrAYvw4YegBlOkZQV6kgpdYmLZ9SgCaQctMloaD%2Bm07e%2Fc6qisubr4UBfxSXBFqDw%2B&X-Amz-Signature=c3e6f8e410a4e854361f68b28d8cc218242dcfd9ee181e98f28b443da3eadc97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
