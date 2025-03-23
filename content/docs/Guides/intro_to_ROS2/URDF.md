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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=c4e72e0a0454f4ec9e355efa733454e0bfb3d27e8c692a3e4b294454bb56c756&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNT2XPL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBEhQrv0OmR2j6N838PZu4H1lHo%2Fct5LYl9cO5ASKWIVAiAoYWV9EvwdR4THFZUOvBE2t8C9VqEowZ%2Bi%2FQX1Oki3JiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9kfl96pjdVCmEZobKtwDUMvZ26dK6%2BrZ0p5NMLB%2FSNBdjWR%2BC%2FizykQy3K3cl%2Fz0a8z4ePFuAu%2BJ%2FEWBYUc9C%2Bo2dR3syA4tNHnC148VnK0YX8GlIGJzROdWA0xoN6dVhj2lHJpRUsnxghntZhGq2fU%2B5TzrBS53p5nYW10PQji9Lj7gGGKsD1U7Qa6I1VIN%2Bz%2FxF0niyMJc%2FOC1yxAz6wnj%2Brrap6Xaj%2BFN57pisC37BL8lDMnTlCKPtfTh55zYySXq0zIJQnLblZNRWFLeSXN6m8JM%2Frtx%2FHBg%2BExm687IngrJmUHncyRSuugxGZxO8uC2HVkXi6SR3NGQr%2B9%2BSpJLe8AskhojHh8zBfdbKCJZG9igTL%2Bi%2BHO4gk4VBc3%2FBNqOA81DdOJ1%2BywUN7XWOMN9hto%2BPO2gSPTwiJYCz8BSUbhyCXBu%2BuDO1BHTusKPIcfhDh%2BACBqtevd0sw77qLM5j%2Bt5o4TtL4VN8cIUepfdPbDzMR1Ka%2B%2Bs0jY0jdSDotH%2FLskB2ns2EazqXbApsFUy69oAdxMaAgU7gN%2FPMG1mmfyvfAC%2FQeT77xbF2gU0hJDss0YHYzvAe7APtRGev7TGSHOIRx02jW%2BOLy0wt01SnqDpoP7TySJRUcS0DWtauBcB4QQ3qY%2FDYCswruP9vgY6pgGK1tz28N7aG8aumrnvhC1saigN2cWd68P92EkKlKbarMFXEl3HpI%2By4L0nEyY%2FWm96FANGITEAwzghWGBT%2BUA37Jx5GSTo8IZ4nYIqLRTDBKJK%2BkrHN9lFvhTPG1H3uJULjJBewklnAr0EapbEV43B6fjLu2mPyPMpd%2FXeHpnaLUVjRGxnz90apWqJHbf7s4NYWzjFyW4XWa1z4v6DBmv5Ylth0%2F87&X-Amz-Signature=28a82d401ebd00548a55413e161b37dc20df5a3d85e3f19b37ce92c75f2ca2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
