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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNQA7TV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDJgYE62VST%2B959pAs%2BCiX9P2abgoIPVzd0AiooXlzwNwIgY3qykrVck40aopoEHNtWSYr7mGhftkoCeS7qmQsqk2Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMZA1DGabVrdqwlwmyrcA7tzNFSISNmZ5vaGt6n5G7Ln%2BhqmR2WbcRm%2B8IL8BD3ANwBMzV%2BhEg8jv4KZiBx%2FK5HutQ2pKCYpYk10mfg1B6KF2IrgZyGCTyBTWMxqvo3I2Y5PbTspnKHT0WMB%2Bb1UqB9VBbKzHMoK7CU7wIvxBkEythwYgf3d%2FIHkZU6htJ%2FO36TacU5ijZXupE94sd0KHgEqCg4KL%2Fw2T3XhE6jJZcjRjyIYELdw%2F7fyeTNL1xt46axuZGWh%2BawVUGjxB%2FjfwardgZ%2F6%2BQogYpLBXRJOnmaqaFziQoDf2Wnfh8aSqABM9OQgRuE6BRhlGOSF%2FufVh20iXZExIW1zvk5liYq8rmaPp%2BnvGdnQwJbJ77ipVbF%2F9d0%2FcZpaKqQR0U%2FfTe7aIE1WhgsTJ33V6fFUu6ijs8SlSQpjxVO%2F2wKx5jtIsvX3k3ifVf1fM75FaP%2FAVkp1HI97HX2AXwaJqISAyjP5rIhrf9mZpyoP%2BpS1jYHnCIGvjsc9ER64ruPERPzmIanX3GUpevnTlWb4812psDn406mBZVrWgsdefRsnj1CsW%2FPtndcJvxPnIPvL2v3YhG6SwLpu8KhGaWAwQwYILA2Gs750HxKLQ0YsQb98x3rD8NLwKXK48GvHffPaEE%2FnMJ68nsMGOqUB%2BqTHk%2BW7uGdh1UrGZ8fwf0cs1b1ulbGRAKJRmQoJH69%2Fmj49kVJhEhsGKQV%2Be%2Fu6OYV7SuRutV1ts0IfgXTuMwxOHOB7Xs4TU8Mbo3APnMjnC8a%2BASbRHEuHXOTSVzupMDdnX7UYgEBfLiFuv1aXvHSzemGaWfq04nOAD4CydxvYnpUqPkt7MKZvAy1nZypP%2BhlBez9JiafAQUrPn574jOdhMmMU&X-Amz-Signature=869e80cf79e22009e7817c2b8455224dec6a0aa50910917ee8346285fdeb1bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNQA7TV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDJgYE62VST%2B959pAs%2BCiX9P2abgoIPVzd0AiooXlzwNwIgY3qykrVck40aopoEHNtWSYr7mGhftkoCeS7qmQsqk2Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMZA1DGabVrdqwlwmyrcA7tzNFSISNmZ5vaGt6n5G7Ln%2BhqmR2WbcRm%2B8IL8BD3ANwBMzV%2BhEg8jv4KZiBx%2FK5HutQ2pKCYpYk10mfg1B6KF2IrgZyGCTyBTWMxqvo3I2Y5PbTspnKHT0WMB%2Bb1UqB9VBbKzHMoK7CU7wIvxBkEythwYgf3d%2FIHkZU6htJ%2FO36TacU5ijZXupE94sd0KHgEqCg4KL%2Fw2T3XhE6jJZcjRjyIYELdw%2F7fyeTNL1xt46axuZGWh%2BawVUGjxB%2FjfwardgZ%2F6%2BQogYpLBXRJOnmaqaFziQoDf2Wnfh8aSqABM9OQgRuE6BRhlGOSF%2FufVh20iXZExIW1zvk5liYq8rmaPp%2BnvGdnQwJbJ77ipVbF%2F9d0%2FcZpaKqQR0U%2FfTe7aIE1WhgsTJ33V6fFUu6ijs8SlSQpjxVO%2F2wKx5jtIsvX3k3ifVf1fM75FaP%2FAVkp1HI97HX2AXwaJqISAyjP5rIhrf9mZpyoP%2BpS1jYHnCIGvjsc9ER64ruPERPzmIanX3GUpevnTlWb4812psDn406mBZVrWgsdefRsnj1CsW%2FPtndcJvxPnIPvL2v3YhG6SwLpu8KhGaWAwQwYILA2Gs750HxKLQ0YsQb98x3rD8NLwKXK48GvHffPaEE%2FnMJ68nsMGOqUB%2BqTHk%2BW7uGdh1UrGZ8fwf0cs1b1ulbGRAKJRmQoJH69%2Fmj49kVJhEhsGKQV%2Be%2Fu6OYV7SuRutV1ts0IfgXTuMwxOHOB7Xs4TU8Mbo3APnMjnC8a%2BASbRHEuHXOTSVzupMDdnX7UYgEBfLiFuv1aXvHSzemGaWfq04nOAD4CydxvYnpUqPkt7MKZvAy1nZypP%2BhlBez9JiafAQUrPn574jOdhMmMU&X-Amz-Signature=23472574468c7b6e026aba4d2a574bfc99c83872f8d0ad647f23575fafd85d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
