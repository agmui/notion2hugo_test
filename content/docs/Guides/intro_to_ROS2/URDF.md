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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q67FUC34%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCBcXVb4iqJWo1JhRZTM9fBzo%2Bq5haTpdgwfjF6Z7XY5wIgdRVCbo84UuHtYodga4sEC2kcIdBvr26OpJlYriYWBqgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg3yK%2FmLYk1ZV4r%2FircA77YtwFi7qhYF%2FYfYjIP3sk0LYd7GH6Dv4REjXkL6lJaIYJLN6iFhW0l0dIgiPakk3d7UJsqpRedFv3LtYBSrdIAj9JjDaCwV88iAzeEBW58hByrk8gHoykxEtCzHwkYG1yf4L%2B%2FuHTdmhKIFHtidvs%2BJ4xXnFM5YdyrM2H%2FYE5Dbsa4W31adVMKwIZI5YFa4smAnPs7lgLUfn%2BU6WIsoLIDXLjrn6rg5RYSdRCIyvo%2FkVHU%2BC4p8ViW2JVNMeYP7SKbHa3VdKiopth9xmFhZbGxzLDVhNwagjbSU2z1epPHpdXIXw8Pdd1%2BvSY1w5EOEccrxxg50MjKLRLMcPBzM7Za6kZfKkM3erDTfP%2BhX%2FEH1ChBLMU3kiXsTx%2BeFnFkUJkTqoqzNH%2FX7C05SNqelQ28kkq2fMNuPRt47eArgosU9qaLXuLraIj2BJsHRnq9iQDYk00UQpLxc3BzS1tGYM7tpkpHVyDXxIl%2BVxhy4nokATaRInNwa9sXp616r5k7YPrIXa8z3h9Mwqm9wM%2FSA0eIlLycfDwc7xQ7lZjgIfPP05Q6YLR7SO8hhMddVAMN1qG%2FSbm5xnhyKOIGuAFmITvN3wqBBEWyye28pGnwxjQsTeepSdkKfH6npyZRMJm7o8AGOqUBldV3bLLHDaFW3izB8mJMpvzs%2FI5QS8Ss5J5zNaJQAaL0y9TTyyBF7hUhxOoP9STUayCEM%2Bz1q%2FRVXDhnQHVR1qeeiyzPn9BGiddXkP1KQcFRNOCCIHl%2BFrn3lThOHSLBcNpCW04szZtKaNf%2FBGxkKcno09h5BjQUJ23MSiYBHMMZRvQJzKaeCIu2g87rP0l%2FoVVboBoePdZTZl%2FYa4zY61Oz%2BWsJ&X-Amz-Signature=025d77a32377feadc1bfa499ab4c8f729cf294424eef4c806d735a4ae2bffab4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q67FUC34%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCBcXVb4iqJWo1JhRZTM9fBzo%2Bq5haTpdgwfjF6Z7XY5wIgdRVCbo84UuHtYodga4sEC2kcIdBvr26OpJlYriYWBqgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg3yK%2FmLYk1ZV4r%2FircA77YtwFi7qhYF%2FYfYjIP3sk0LYd7GH6Dv4REjXkL6lJaIYJLN6iFhW0l0dIgiPakk3d7UJsqpRedFv3LtYBSrdIAj9JjDaCwV88iAzeEBW58hByrk8gHoykxEtCzHwkYG1yf4L%2B%2FuHTdmhKIFHtidvs%2BJ4xXnFM5YdyrM2H%2FYE5Dbsa4W31adVMKwIZI5YFa4smAnPs7lgLUfn%2BU6WIsoLIDXLjrn6rg5RYSdRCIyvo%2FkVHU%2BC4p8ViW2JVNMeYP7SKbHa3VdKiopth9xmFhZbGxzLDVhNwagjbSU2z1epPHpdXIXw8Pdd1%2BvSY1w5EOEccrxxg50MjKLRLMcPBzM7Za6kZfKkM3erDTfP%2BhX%2FEH1ChBLMU3kiXsTx%2BeFnFkUJkTqoqzNH%2FX7C05SNqelQ28kkq2fMNuPRt47eArgosU9qaLXuLraIj2BJsHRnq9iQDYk00UQpLxc3BzS1tGYM7tpkpHVyDXxIl%2BVxhy4nokATaRInNwa9sXp616r5k7YPrIXa8z3h9Mwqm9wM%2FSA0eIlLycfDwc7xQ7lZjgIfPP05Q6YLR7SO8hhMddVAMN1qG%2FSbm5xnhyKOIGuAFmITvN3wqBBEWyye28pGnwxjQsTeepSdkKfH6npyZRMJm7o8AGOqUBldV3bLLHDaFW3izB8mJMpvzs%2FI5QS8Ss5J5zNaJQAaL0y9TTyyBF7hUhxOoP9STUayCEM%2Bz1q%2FRVXDhnQHVR1qeeiyzPn9BGiddXkP1KQcFRNOCCIHl%2BFrn3lThOHSLBcNpCW04szZtKaNf%2FBGxkKcno09h5BjQUJ23MSiYBHMMZRvQJzKaeCIu2g87rP0l%2FoVVboBoePdZTZl%2FYa4zY61Oz%2BWsJ&X-Amz-Signature=3242a79b140d792fdffcc4435662ce7ddfe78a3272b491610b01c1b5e1336110&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
