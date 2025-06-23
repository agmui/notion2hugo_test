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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CBAAXZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJEMEICIFWCfE7QGoJzEyoHl18HmIIZoICaOgFy4V3YZEgvD0ycAh5k1j0duEiBqLyQenL7gpok3rZEdUuhhXIQCEYZhkwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNV3U19mX2YQWF8hZyrcA82O%2B01YxuxzEBNQHSQfTtjMe2lZ1dMNiTCcPx2rgKVNs%2FSkUJeHhwx9PrSu1%2BWeqs3cgpp3MrCWIZw7FGmK6n2VBP3b2h4WcY7U4ifGMiO9q00sgbQ5p5mct7xjYDGr04dUF4fsTX9ezR%2Fd%2F7r9bKn0l8UetT%2BA5CgE%2B4bGQ%2BE%2BrcovYsbdLzHg0dAPkFcLYNVZJAZMbGrHZadYvl0e3gSuaHLG8wwa%2BriLMJ%2Fvc4oan180uOocAER8zF50CL3IMGRl076saSryDP5Fl5pcjBMIcx%2FpYzgYpB%2F%2FDJzKEu8A6FJ1RJzAdWCQZMPy21aE0N%2Bq2OnCU8%2FUX7aVIaXItfkoqpOnO9%2BxFpKZxvWutpd1ajYtFUdCe8WiPt3KwPFDJdhSdCu93XaW4%2FcNZl6lB19LMblkK5qDDbIa9E3sZMwSE1T%2BcPCVm80FeYW3Ltt6mVrWOqhgJ0TjOyswpkl%2FJt4WO4QPq7l29%2BZbdNrkMnMUB%2F%2BEu8R6slmi8xNa%2Fq5%2FRxtz7bWN%2Br0o2%2FsPV30MCsRISpxcqysxjaKQgqg5gmK4yR%2BzgU3SOe0gHlnycj%2B95RIJ9u8GXV0Ai2srglyF4vZa0eWNtvnI8cEkI4Fql4kwp1z%2BKV15VL25cujqMNyq5sIGOqgB3b1GiGtVW%2FVecJrTwgpqkvAMyQIrow7rU11aspitKn0WrFcZoipn5SJnIfKTycqpIrJlvSGIzoeMEjJKKzbV2AskoJCJUMT47Ve4KthRVBRWT%2BdnALxUR0u2%2Fqy82zkUvq8S18lveZmrBEnLoKDQO%2BwihMxwQvugetvUv0y%2BD1XsHc7j500RZBADfpGHrweDc4PMI3NL%2BhN1kJ95FEyOhKxVoSqo1bew&X-Amz-Signature=01fc2d9571b3da7ca1fca39abd13ed7d2830508ea15b80af6e43059a6e273d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CBAAXZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJEMEICIFWCfE7QGoJzEyoHl18HmIIZoICaOgFy4V3YZEgvD0ycAh5k1j0duEiBqLyQenL7gpok3rZEdUuhhXIQCEYZhkwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNV3U19mX2YQWF8hZyrcA82O%2B01YxuxzEBNQHSQfTtjMe2lZ1dMNiTCcPx2rgKVNs%2FSkUJeHhwx9PrSu1%2BWeqs3cgpp3MrCWIZw7FGmK6n2VBP3b2h4WcY7U4ifGMiO9q00sgbQ5p5mct7xjYDGr04dUF4fsTX9ezR%2Fd%2F7r9bKn0l8UetT%2BA5CgE%2B4bGQ%2BE%2BrcovYsbdLzHg0dAPkFcLYNVZJAZMbGrHZadYvl0e3gSuaHLG8wwa%2BriLMJ%2Fvc4oan180uOocAER8zF50CL3IMGRl076saSryDP5Fl5pcjBMIcx%2FpYzgYpB%2F%2FDJzKEu8A6FJ1RJzAdWCQZMPy21aE0N%2Bq2OnCU8%2FUX7aVIaXItfkoqpOnO9%2BxFpKZxvWutpd1ajYtFUdCe8WiPt3KwPFDJdhSdCu93XaW4%2FcNZl6lB19LMblkK5qDDbIa9E3sZMwSE1T%2BcPCVm80FeYW3Ltt6mVrWOqhgJ0TjOyswpkl%2FJt4WO4QPq7l29%2BZbdNrkMnMUB%2F%2BEu8R6slmi8xNa%2Fq5%2FRxtz7bWN%2Br0o2%2FsPV30MCsRISpxcqysxjaKQgqg5gmK4yR%2BzgU3SOe0gHlnycj%2B95RIJ9u8GXV0Ai2srglyF4vZa0eWNtvnI8cEkI4Fql4kwp1z%2BKV15VL25cujqMNyq5sIGOqgB3b1GiGtVW%2FVecJrTwgpqkvAMyQIrow7rU11aspitKn0WrFcZoipn5SJnIfKTycqpIrJlvSGIzoeMEjJKKzbV2AskoJCJUMT47Ve4KthRVBRWT%2BdnALxUR0u2%2Fqy82zkUvq8S18lveZmrBEnLoKDQO%2BwihMxwQvugetvUv0y%2BD1XsHc7j500RZBADfpGHrweDc4PMI3NL%2BhN1kJ95FEyOhKxVoSqo1bew&X-Amz-Signature=db90f763aa91c2a156d38d0b824d09da84d7445df3d632ddb9ff56f0915b212c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
