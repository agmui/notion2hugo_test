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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ICO2ZB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN7TO7SmX3EiP7G4juBsI2Zw1OfLnNkLtpVHVXlvN81wIgTqC8rE0PWqEKMq4IcT%2BfYTjSQqr7DIWnAzd881zxH%2Fkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDN8%2F82GmxGhgB2uOsyrcA3Xt0gJi4t7AwZYa%2BBy8Ge7roGH25Zkwf7RvAmpizoXVGSXst85597GCvkhiqpYQGwavdQsV2blBV0PZZ0nN%2BrEeoD%2BUs9%2FqM77Kw67JrpOOZdS0Nw6TXVfSm8sf03l53uTJmLgy2C1%2Bwu59AnHhYPT%2BbPTW02LqiN5SPNt9D9KTQpzUqg%2BMje9HZ6OFOIXNKnQtHp5Ebk85InXyDXsRnp6%2FzQ2cZL07ayQqF%2FC2CyhPsRFdFe42jyeK5BHTWw5uWGgwYzBveYmTKyubC%2BKP0cb9qY503Ap6qSGuASyvJ%2BhjNbNpuSOI5HaWQLxGctbDVGNCBksk2UHxFvnVvJYU5bldLYzownUnOXG%2BfHHM2r5V781q%2FEyY5f%2F5LFgsTN6v%2BkpUoMK%2BEi4wBVMxuDaWjldbdjmXt8o2KNAf9wRderxh9VeWIRXfoX7r14s1Bb7RVC7SvujFKvolpx7htRLkInMYOml9tFD1tntTbPc8wgvSUdwyJMCzGFm6moKgbcnU7KR95oIEbeL3HRVyXez%2FUMqIcF6WDOSxRmHRWTyJzfu6soJfOrXjxZSYe9KChUVHF8Q5wxCdpyIkuT4YUy7cuhy23ayM0c1%2Bq%2FuWQJJzM1zhjtz616m5dT6%2Fs86YMNn4pcEGOqUBQoASe9vC7zprBRh%2B%2FHNk2g6%2FJmqRq6u1VLN7aeUhLN6gOJaa46KIMPVcT8VsBiy0K9y18uzeB%2BKLuQFIuD4flHDz29xg6l4oJD5J5l9vyIgISNLadgqZDHLfD8fTI2z0kI0dtOGLESyFKD%2FncPGrwMqxUI6PyM7SmN3QfAc3pIiNDU6dDTHahqdvN1On1GrVRYgOg3KgUX4usjPOKAc2HlKtSwha&X-Amz-Signature=82e7bb33b22cd8301d5ce189adbec648e4276fb0646667603b31e72db4a833e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ICO2ZB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN7TO7SmX3EiP7G4juBsI2Zw1OfLnNkLtpVHVXlvN81wIgTqC8rE0PWqEKMq4IcT%2BfYTjSQqr7DIWnAzd881zxH%2Fkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDN8%2F82GmxGhgB2uOsyrcA3Xt0gJi4t7AwZYa%2BBy8Ge7roGH25Zkwf7RvAmpizoXVGSXst85597GCvkhiqpYQGwavdQsV2blBV0PZZ0nN%2BrEeoD%2BUs9%2FqM77Kw67JrpOOZdS0Nw6TXVfSm8sf03l53uTJmLgy2C1%2Bwu59AnHhYPT%2BbPTW02LqiN5SPNt9D9KTQpzUqg%2BMje9HZ6OFOIXNKnQtHp5Ebk85InXyDXsRnp6%2FzQ2cZL07ayQqF%2FC2CyhPsRFdFe42jyeK5BHTWw5uWGgwYzBveYmTKyubC%2BKP0cb9qY503Ap6qSGuASyvJ%2BhjNbNpuSOI5HaWQLxGctbDVGNCBksk2UHxFvnVvJYU5bldLYzownUnOXG%2BfHHM2r5V781q%2FEyY5f%2F5LFgsTN6v%2BkpUoMK%2BEi4wBVMxuDaWjldbdjmXt8o2KNAf9wRderxh9VeWIRXfoX7r14s1Bb7RVC7SvujFKvolpx7htRLkInMYOml9tFD1tntTbPc8wgvSUdwyJMCzGFm6moKgbcnU7KR95oIEbeL3HRVyXez%2FUMqIcF6WDOSxRmHRWTyJzfu6soJfOrXjxZSYe9KChUVHF8Q5wxCdpyIkuT4YUy7cuhy23ayM0c1%2Bq%2FuWQJJzM1zhjtz616m5dT6%2Fs86YMNn4pcEGOqUBQoASe9vC7zprBRh%2B%2FHNk2g6%2FJmqRq6u1VLN7aeUhLN6gOJaa46KIMPVcT8VsBiy0K9y18uzeB%2BKLuQFIuD4flHDz29xg6l4oJD5J5l9vyIgISNLadgqZDHLfD8fTI2z0kI0dtOGLESyFKD%2FncPGrwMqxUI6PyM7SmN3QfAc3pIiNDU6dDTHahqdvN1On1GrVRYgOg3KgUX4usjPOKAc2HlKtSwha&X-Amz-Signature=a54093628234d0bba59533c72e16d1158d5c36de46a8dc9c2b010170225fc49e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
