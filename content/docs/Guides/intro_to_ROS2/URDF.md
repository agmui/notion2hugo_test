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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2GZINP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGZ39qcD1gp60MpYfBdWC31687iPjMwFi3AICXZgs9jwIgMknRhny5vZnfZjlTiaGJIZj%2Bs6%2F0Nf4ptNJFNiZtybUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiEwpp4TGojd1cS0ircA4yhwIf%2F8KZ%2BT3xL1Fv5Na3WO6nRC2Yy2yjNH8cbLnKJOcvErTXw28ES%2BrJzSlpuSDQOqybWwKD82OReE%2B1gVW%2BIkrb10nLGQBTci4atle0CSLGohAry4fNEKdwtoOeKquZYmNs9Kcg%2Fx%2B8HhHgo4%2Bz3rGMV6KzWU7xAjwW60spgBK4qc8YmgmRMzRF047V8QVGyWs4NlgxauPmfWUXvbsIkNjzKSIJoijZV80qbDtnG7w7o%2FnqtkzQUXOOe357LOBWF963%2B9dgN2FVE7%2FOD88ucWDsmTevMNomG3hJFE9SQzdWcMeV6t1BdnMb8stkAY75clrvbN430uwVAHUb0UVMZ5sUDkpUndkjh1l0DhPJ0qnYy3XxhHdNDGFLN3V%2BkCk5pM%2FijrmlyGdub%2BOfRIm%2Fhgz3CuUgJlX9nUFx6vucbh2%2BMw5TJ7mo3ruJpyCkvxu2s3LFCswBFSnwhTkK9pkOxPUwEoSUGqBI%2B48XZVTzSbLmH2xYkdEtHFNR1LFY2n489ypHVoLXpZwxb0p82sZFa0dC3Gxr0EWF22nZwQZl%2FATYE0iPwEGRaOVirI0yJKvKe4DRbzpbrNTO8mtPsOWGDjq9z7B%2FiQRlYK7xuOh5QvYcdVUDHCdjaM4fcMKmdtsQGOqUBJQr4s3R2SsNUQoee9b1lL85jFGHr992t8a4SkRfaPHXjCN2lJGjTDiyHDgJvlY3YnFHPkmulYh%2BHZlAIrWRKRQ90gI6MlgvnF6ViASwp1rgKS2XimffjX5eq5QKOOnVMC%2BedXjDc9HRNib5VfHhJR2%2B53cL5giqK%2BMKdXuMxQrnZi8ZUKfWPkEwVcXMVbOeWL6Z6SfcE2t5EEaNoQVNpr5%2FFQdvJ&X-Amz-Signature=26378a8ec68a8d74291e8ab85da6a39e9302af7a177812f38bd9d34d31775a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2GZINP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGZ39qcD1gp60MpYfBdWC31687iPjMwFi3AICXZgs9jwIgMknRhny5vZnfZjlTiaGJIZj%2Bs6%2F0Nf4ptNJFNiZtybUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiEwpp4TGojd1cS0ircA4yhwIf%2F8KZ%2BT3xL1Fv5Na3WO6nRC2Yy2yjNH8cbLnKJOcvErTXw28ES%2BrJzSlpuSDQOqybWwKD82OReE%2B1gVW%2BIkrb10nLGQBTci4atle0CSLGohAry4fNEKdwtoOeKquZYmNs9Kcg%2Fx%2B8HhHgo4%2Bz3rGMV6KzWU7xAjwW60spgBK4qc8YmgmRMzRF047V8QVGyWs4NlgxauPmfWUXvbsIkNjzKSIJoijZV80qbDtnG7w7o%2FnqtkzQUXOOe357LOBWF963%2B9dgN2FVE7%2FOD88ucWDsmTevMNomG3hJFE9SQzdWcMeV6t1BdnMb8stkAY75clrvbN430uwVAHUb0UVMZ5sUDkpUndkjh1l0DhPJ0qnYy3XxhHdNDGFLN3V%2BkCk5pM%2FijrmlyGdub%2BOfRIm%2Fhgz3CuUgJlX9nUFx6vucbh2%2BMw5TJ7mo3ruJpyCkvxu2s3LFCswBFSnwhTkK9pkOxPUwEoSUGqBI%2B48XZVTzSbLmH2xYkdEtHFNR1LFY2n489ypHVoLXpZwxb0p82sZFa0dC3Gxr0EWF22nZwQZl%2FATYE0iPwEGRaOVirI0yJKvKe4DRbzpbrNTO8mtPsOWGDjq9z7B%2FiQRlYK7xuOh5QvYcdVUDHCdjaM4fcMKmdtsQGOqUBJQr4s3R2SsNUQoee9b1lL85jFGHr992t8a4SkRfaPHXjCN2lJGjTDiyHDgJvlY3YnFHPkmulYh%2BHZlAIrWRKRQ90gI6MlgvnF6ViASwp1rgKS2XimffjX5eq5QKOOnVMC%2BedXjDc9HRNib5VfHhJR2%2B53cL5giqK%2BMKdXuMxQrnZi8ZUKfWPkEwVcXMVbOeWL6Z6SfcE2t5EEaNoQVNpr5%2FFQdvJ&X-Amz-Signature=d0b16631ffde52ec0fdbbea8655e3a618cffa2da9e38d610bb0dd71acff38d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
