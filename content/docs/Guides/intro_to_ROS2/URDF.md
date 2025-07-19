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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4U3WUFK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPBINoMssnj%2Ft8k%2FpHpoem4Yd0VRDnHax7qs8SLWTdPAiEAhEjgEYrT0cRG2nBChs7VoENCrOd%2F5sY56jfDv2FmqnQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdn2fhJwQJPQsCpPircA0tvmi60BBr5DtljDWdtNxT0pT19kUvgqZEtNnzd4qF11NnZVh5lApaGDX8cl9%2BM%2F%2BBSyfCbTi2U09%2F%2FxqGE9cdEIMQQH4msKaYT6V7xWkb31K6RGswQyP%2FJjHrg%2Fo6xjtrnDtXB%2Bssq1Y0fGEZ6XCu5YuyR6jsfo%2BF%2B15W8EQ1AUkQ93sF%2F4sny2TmQQOGUXmFIa%2FIOtUJnTgXsJ6q%2Fy2pdxTDRGuPwO7ee33ik7yUJRHE1%2B7taqw%2BBzFLRm89uR92n0qGFZN72%2FpXBjdfLcT1HCnnGcHBVXE6XBseKlANUPUFwy4nUftT9vzbXKEUk3hZ2xk7SsamqHkLVV267SaV4FIii3h9cv7ArbDSICqIIdRsoLrMj71cTZok6ushSiST2YQi5b3XxA%2FVYpT08vPjA9IAJl7PCVKLc8r0pz7EYK9FMpJbdmdHDjWxSiHbj8cCY7k%2B6dcg9nH4TVZpyegwE7d5pDW%2B2FMuhd7PK%2BtlRd%2Byg61plt8FoEH1oVTTkCWIBOnKzf7RmVozbGgfrTrO5rEUB86%2FfNkwEVVZQBXW9oXHH5UtJE0bwCuDMYbsCeY%2F4JoPN7fOOv%2BWJTnhI9z07vlUM9RLN8gNWMO6poGMB06w5rZ6AEFf5iNL7MJa47sMGOqUBDTL1Dq0YjI0MDDD7TeSV%2BhHJx9m7vdaPiPwLSTllvSmRt%2FLFFZuk0hED5szkMz6nsmJpFQisF%2BGuiWJARbNqbTs9qxldtkh%2BR39T0fwxwRRNJxUkdb3znYQlpvRERdBr1G341QJ8Luqqu2O0hgDfoTrfyjfXhtIO9r8fGFEcaxU%2FDb4INnWj2XaeyyuC8mtEACvzqy46ZI%2FAcWBVhO2RMqXcv%2BLU&X-Amz-Signature=a4a17f32512325961c750ed63f3b41ce84774e8e47842db6211a0d56198f9fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4U3WUFK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPBINoMssnj%2Ft8k%2FpHpoem4Yd0VRDnHax7qs8SLWTdPAiEAhEjgEYrT0cRG2nBChs7VoENCrOd%2F5sY56jfDv2FmqnQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdn2fhJwQJPQsCpPircA0tvmi60BBr5DtljDWdtNxT0pT19kUvgqZEtNnzd4qF11NnZVh5lApaGDX8cl9%2BM%2F%2BBSyfCbTi2U09%2F%2FxqGE9cdEIMQQH4msKaYT6V7xWkb31K6RGswQyP%2FJjHrg%2Fo6xjtrnDtXB%2Bssq1Y0fGEZ6XCu5YuyR6jsfo%2BF%2B15W8EQ1AUkQ93sF%2F4sny2TmQQOGUXmFIa%2FIOtUJnTgXsJ6q%2Fy2pdxTDRGuPwO7ee33ik7yUJRHE1%2B7taqw%2BBzFLRm89uR92n0qGFZN72%2FpXBjdfLcT1HCnnGcHBVXE6XBseKlANUPUFwy4nUftT9vzbXKEUk3hZ2xk7SsamqHkLVV267SaV4FIii3h9cv7ArbDSICqIIdRsoLrMj71cTZok6ushSiST2YQi5b3XxA%2FVYpT08vPjA9IAJl7PCVKLc8r0pz7EYK9FMpJbdmdHDjWxSiHbj8cCY7k%2B6dcg9nH4TVZpyegwE7d5pDW%2B2FMuhd7PK%2BtlRd%2Byg61plt8FoEH1oVTTkCWIBOnKzf7RmVozbGgfrTrO5rEUB86%2FfNkwEVVZQBXW9oXHH5UtJE0bwCuDMYbsCeY%2F4JoPN7fOOv%2BWJTnhI9z07vlUM9RLN8gNWMO6poGMB06w5rZ6AEFf5iNL7MJa47sMGOqUBDTL1Dq0YjI0MDDD7TeSV%2BhHJx9m7vdaPiPwLSTllvSmRt%2FLFFZuk0hED5szkMz6nsmJpFQisF%2BGuiWJARbNqbTs9qxldtkh%2BR39T0fwxwRRNJxUkdb3znYQlpvRERdBr1G341QJ8Luqqu2O0hgDfoTrfyjfXhtIO9r8fGFEcaxU%2FDb4INnWj2XaeyyuC8mtEACvzqy46ZI%2FAcWBVhO2RMqXcv%2BLU&X-Amz-Signature=1081f7ac2575f010cb45a499cd7b3f8361c274f51fe4b96217216347885ec9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
