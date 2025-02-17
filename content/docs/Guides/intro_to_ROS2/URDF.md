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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMM3RW3B%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCXAhRgQvJE1UMEbmf9SFjQsuf5p%2BtgZXAKZ40I31X5PgIhAN4YyrZNsagLtZWp1FxxTLo3Y1kpAQkMn9qfCXcyZMeMKv8DCHEQABoMNjM3NDIzMTgzODA1IgyjEvrdFHvaZbVpYnMq3APEb5eU8nyvOJ4EesufyGSAUSJoaWpMGB5I2nDbktk2w3zVR2pxcWLNDiobBlcU2oyGb9sPbP8UhUY1XT1kkFag8k3UaPiXlL9RHJe0HOp9vdSnf3u6NUTmurRQI20hRH5ctP8BTl8NxUjhdx6Dro%2Ftkke9LBiMRJiz4yeXE3FH0yMwkbrVBkRFpK8WBuZ7BVJUoEQPRn4wK9IEVjziNn3KXsO7JhuCm8ZkOvEGimvhLHfTNE2KuGGO5feNoEL2KfTVl4VQzhx1LH%2B5wcCtb9px%2FH5WIq0V%2FcLz0Tcbltgtbzsb1llT3KcKbLof1Yssim4dvVTAuVUehLjuZeBdigCRZBn3W6JMg81EDB9yDGD0LoIr5w1mWZSgepfV8P06T5jr99vHPyhJRlYp1dtsSopRAU1z0HVKCDvoOQ%2BBASBZIgGtmM5MAeUiJ4xbDs3UVQz7Ed8fY9lvXPPuwkEdgOiKdEJbIQUXL1B%2FY1rjRPnEjhs83wDvlInwtOi40mVMvcwgm%2BmJ5f1DxH%2Fg3FG0FEoM2ntr%2Ffyj%2FTywXQlvEAjq%2FLERKutG8vFWCsLR88yHj3e5XYfG2Y14te2uwgNWFSPRDAyZ6YZwlY73XrNjbd3u5zaLFVpO0Z4%2FTidnODCW6cu9BjqkAebg3FNrY8tLSumPbsMkuJTc0fzggw2JI%2FxydGfHamEgrHBJs8%2B8SrBOWbN7eAPFW2tBXkqA0xTnKnvvqA1TBIcOSRLZiIF7FaptfhFawApoYzLT8nxqIx%2Fa75AWRv2NWQRx1KlUUyYQQjMi8B31a9GwiMqrHO3TAj6VvXY%2FtaGf9L%2F80whVkuc8eZHTnacA%2BhUDylv3gxiGa%2BdPt63rvLtMz3rH&X-Amz-Signature=352db85295deca8498cbf1ee371b5312372d4c39783710f42c1a0f3f1393132d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMM3RW3B%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCXAhRgQvJE1UMEbmf9SFjQsuf5p%2BtgZXAKZ40I31X5PgIhAN4YyrZNsagLtZWp1FxxTLo3Y1kpAQkMn9qfCXcyZMeMKv8DCHEQABoMNjM3NDIzMTgzODA1IgyjEvrdFHvaZbVpYnMq3APEb5eU8nyvOJ4EesufyGSAUSJoaWpMGB5I2nDbktk2w3zVR2pxcWLNDiobBlcU2oyGb9sPbP8UhUY1XT1kkFag8k3UaPiXlL9RHJe0HOp9vdSnf3u6NUTmurRQI20hRH5ctP8BTl8NxUjhdx6Dro%2Ftkke9LBiMRJiz4yeXE3FH0yMwkbrVBkRFpK8WBuZ7BVJUoEQPRn4wK9IEVjziNn3KXsO7JhuCm8ZkOvEGimvhLHfTNE2KuGGO5feNoEL2KfTVl4VQzhx1LH%2B5wcCtb9px%2FH5WIq0V%2FcLz0Tcbltgtbzsb1llT3KcKbLof1Yssim4dvVTAuVUehLjuZeBdigCRZBn3W6JMg81EDB9yDGD0LoIr5w1mWZSgepfV8P06T5jr99vHPyhJRlYp1dtsSopRAU1z0HVKCDvoOQ%2BBASBZIgGtmM5MAeUiJ4xbDs3UVQz7Ed8fY9lvXPPuwkEdgOiKdEJbIQUXL1B%2FY1rjRPnEjhs83wDvlInwtOi40mVMvcwgm%2BmJ5f1DxH%2Fg3FG0FEoM2ntr%2Ffyj%2FTywXQlvEAjq%2FLERKutG8vFWCsLR88yHj3e5XYfG2Y14te2uwgNWFSPRDAyZ6YZwlY73XrNjbd3u5zaLFVpO0Z4%2FTidnODCW6cu9BjqkAebg3FNrY8tLSumPbsMkuJTc0fzggw2JI%2FxydGfHamEgrHBJs8%2B8SrBOWbN7eAPFW2tBXkqA0xTnKnvvqA1TBIcOSRLZiIF7FaptfhFawApoYzLT8nxqIx%2Fa75AWRv2NWQRx1KlUUyYQQjMi8B31a9GwiMqrHO3TAj6VvXY%2FtaGf9L%2F80whVkuc8eZHTnacA%2BhUDylv3gxiGa%2BdPt63rvLtMz3rH&X-Amz-Signature=eaef29e3fae6a5b6801d21d5217eb077ce033fab7bcf3e8fdbed6c2b10628388&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
