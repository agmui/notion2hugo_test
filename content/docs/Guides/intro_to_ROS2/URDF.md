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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3QOCQN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO5mLAQ7vpslhRj5Pab8VkL2a2Siugt4M7meW%2BMpOGcAiEA1%2FGRwscpaGCBYR1888ryKNQDUKzHY%2F44cmkZbfGHm6cqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaM7WailS7viDyquCrcA1WO2RDUk6fR1%2BLmVo53VOSWsUnJmeP2dkTONJOsmJ5NGs%2FU2Hcl2mzfLonlbvRX13r8iaOtfXT8Xs%2BLJayYcsOpVf6SuR%2BSxyO2fJ9k3dbnpL0l0bI8l50fRYRiymN7o5R%2Fwaoapd4VanT5jOoO8EilHu5XIyFth%2By7r42Tvqx5%2BSELLl2xVxC56D1Nha%2B2NIne9VGLaFfJ9JuLggx0vniih3odQTE77J9BX%2FCUFECKiBv6HOaXIjAjwD1W3va91NnG5z1Aayj%2BRMOfTuyfVM7hsEBOWMor1pORqbH9Er0pyRZ%2B6Pv2jiRrKqlU1gHbk9um7ekQ8VMMdXN4nNN6Ckyws4IL2pr5bX28KEPF6WN5qssQM%2BhTXfs8ZN0rNzc2cW0fzAR3Wcmuy4T6fjy6Vy1coaNPNBNP07lKBZd%2FRdPASsj6bOL5gQkDCPKuvcTlycRSDIur4BCCYLVFq%2FwyGDCU70Fl0gykskM14gTW%2BWRBGEcDx4zBDiCugDQslDK3M6uchlCMUAfw617uxP18chVcDLu5V9H9LuAYAR05KqWIPErVP%2BrZh7k%2B2EgdKEQ6gno%2FAXjdUOg%2BB1KfJCnjjke8ExHfHIOCNIPu54cCJQSlIk4WURXmNgA32pcmMNOyiL8GOqUBReFQhyRU%2FCjjC8S4YPNhFYnxYnICPjZgf00dfT9WF5T0EkmrFz1tsiiGAcfF%2F1GHSuM6CkkBoO0oVI4276%2FwpMMoQ%2FIigSgdmRr99o0cWgHBo%2B9S3h02o9K72Q%2Bg%2BL801Cf6iuZ6ebgV2bAqw66sA%2FrJzJqsgpSWsaDOwQOZ%2FMPnglt4mOgVLUIfBmRGUZU73CHpITSZamoVGvcH0Q7Jydy0uNzr&X-Amz-Signature=96d2f7df3f39163df19c7c39923ae18a2eb4d67ea5942ce84a78f34404ad5a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3QOCQN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO5mLAQ7vpslhRj5Pab8VkL2a2Siugt4M7meW%2BMpOGcAiEA1%2FGRwscpaGCBYR1888ryKNQDUKzHY%2F44cmkZbfGHm6cqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaM7WailS7viDyquCrcA1WO2RDUk6fR1%2BLmVo53VOSWsUnJmeP2dkTONJOsmJ5NGs%2FU2Hcl2mzfLonlbvRX13r8iaOtfXT8Xs%2BLJayYcsOpVf6SuR%2BSxyO2fJ9k3dbnpL0l0bI8l50fRYRiymN7o5R%2Fwaoapd4VanT5jOoO8EilHu5XIyFth%2By7r42Tvqx5%2BSELLl2xVxC56D1Nha%2B2NIne9VGLaFfJ9JuLggx0vniih3odQTE77J9BX%2FCUFECKiBv6HOaXIjAjwD1W3va91NnG5z1Aayj%2BRMOfTuyfVM7hsEBOWMor1pORqbH9Er0pyRZ%2B6Pv2jiRrKqlU1gHbk9um7ekQ8VMMdXN4nNN6Ckyws4IL2pr5bX28KEPF6WN5qssQM%2BhTXfs8ZN0rNzc2cW0fzAR3Wcmuy4T6fjy6Vy1coaNPNBNP07lKBZd%2FRdPASsj6bOL5gQkDCPKuvcTlycRSDIur4BCCYLVFq%2FwyGDCU70Fl0gykskM14gTW%2BWRBGEcDx4zBDiCugDQslDK3M6uchlCMUAfw617uxP18chVcDLu5V9H9LuAYAR05KqWIPErVP%2BrZh7k%2B2EgdKEQ6gno%2FAXjdUOg%2BB1KfJCnjjke8ExHfHIOCNIPu54cCJQSlIk4WURXmNgA32pcmMNOyiL8GOqUBReFQhyRU%2FCjjC8S4YPNhFYnxYnICPjZgf00dfT9WF5T0EkmrFz1tsiiGAcfF%2F1GHSuM6CkkBoO0oVI4276%2FwpMMoQ%2FIigSgdmRr99o0cWgHBo%2B9S3h02o9K72Q%2Bg%2BL801Cf6iuZ6ebgV2bAqw66sA%2FrJzJqsgpSWsaDOwQOZ%2FMPnglt4mOgVLUIfBmRGUZU73CHpITSZamoVGvcH0Q7Jydy0uNzr&X-Amz-Signature=91a3db54bac92cb6652fe7fab64019a715c4c54ce61551693cf9f767f379a5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
