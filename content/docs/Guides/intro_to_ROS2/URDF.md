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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7ZCFM3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP45yv%2Bf00tbI9V%2BbZOH1%2BI1xxAsgd3VbSveJ25spjXgIhAK9FihR8hzGgqAw6UuaOxOSMkUbvSiiTvIvgMWhL6tYOKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF44zyI6HD7bxD%2FhQq3APG%2Fy2SweWu6ukbnO5IPxtppDle1usizpm1fAjvr%2BMxWpF%2BNoXw8MKRAMPRq%2B0YNCIwoMdXGKQYf43kpK5rsQGt2QJV80ahTqGt48GzFSNxf%2FzzjKeEMYEmOofHtiicaCibohi73NXi1Jc%2BPGbY9BCUbPfPcQyxtcuc8Y5q0SQ8l%2B%2FUEvY4%2B9W0xH7gV8upkZUvneOtzzSG2FjpCLcgQr4A5NRfgnftUSofykovb0EHQcmbbcrLNB6ZT5e0TKg%2B9128JTcR31kS2v7sF98bAP07DjF6R6Cr2ma5XAfr9sGhUvwnRG5MDl4DmitcFU%2BCeCYYJsVHiDiuhXzRLrWc3kV8apjiAZxLBZK7zH0BoIl457Nr6mCQ99YncHE1Cw3LdQTAUah5qW4XSbcNmHzmLTD6tHDRGoqPjHGtrV5ozlrVGPLUtsU7GRKCrray0b1T9dIq9etLWuhdiHGavhNaaOKVUeMFiPL1YEzjHO%2Bcq2cGgZLFgm6z1j5xowqJKmV2OToRDTWvWdUJyKjM%2FlSSWO%2FZCOCGodhHJsAgLvKvTI4baOu%2BAvl1FYbo4vg5A0T3hU31068is5hSTx%2FOz5be2dfJb7n68mIbqY5AsW6Rd7kaXzHcgNi9lsQsV25cSjDZrY6%2FBjqkAfeurFNnXrieiU%2BHcjg0Jom%2FtVngYkIsXXxNVGBiHms2vxI1oIJosharonbRmm9MOPy61XQe9aBvtAOkfOcVuT1A2AkNTGCBXPTJBE4oPKdCcdJ9d5EQZg%2FEGJyZopBQa2jYdwj1TtEHfnixJ1SDBEpBT8DnS7%2B8ljRlfIP6SBopIdk3dxgfmfEDaaDLWVhg6BXt%2BZp9B8LCDs22rPOt%2Bq4Hm%2F3s&X-Amz-Signature=a4fcaaeef3a45e936df804a59316b6e1b020841a2556dc1620db120fd1cddaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7ZCFM3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP45yv%2Bf00tbI9V%2BbZOH1%2BI1xxAsgd3VbSveJ25spjXgIhAK9FihR8hzGgqAw6UuaOxOSMkUbvSiiTvIvgMWhL6tYOKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF44zyI6HD7bxD%2FhQq3APG%2Fy2SweWu6ukbnO5IPxtppDle1usizpm1fAjvr%2BMxWpF%2BNoXw8MKRAMPRq%2B0YNCIwoMdXGKQYf43kpK5rsQGt2QJV80ahTqGt48GzFSNxf%2FzzjKeEMYEmOofHtiicaCibohi73NXi1Jc%2BPGbY9BCUbPfPcQyxtcuc8Y5q0SQ8l%2B%2FUEvY4%2B9W0xH7gV8upkZUvneOtzzSG2FjpCLcgQr4A5NRfgnftUSofykovb0EHQcmbbcrLNB6ZT5e0TKg%2B9128JTcR31kS2v7sF98bAP07DjF6R6Cr2ma5XAfr9sGhUvwnRG5MDl4DmitcFU%2BCeCYYJsVHiDiuhXzRLrWc3kV8apjiAZxLBZK7zH0BoIl457Nr6mCQ99YncHE1Cw3LdQTAUah5qW4XSbcNmHzmLTD6tHDRGoqPjHGtrV5ozlrVGPLUtsU7GRKCrray0b1T9dIq9etLWuhdiHGavhNaaOKVUeMFiPL1YEzjHO%2Bcq2cGgZLFgm6z1j5xowqJKmV2OToRDTWvWdUJyKjM%2FlSSWO%2FZCOCGodhHJsAgLvKvTI4baOu%2BAvl1FYbo4vg5A0T3hU31068is5hSTx%2FOz5be2dfJb7n68mIbqY5AsW6Rd7kaXzHcgNi9lsQsV25cSjDZrY6%2FBjqkAfeurFNnXrieiU%2BHcjg0Jom%2FtVngYkIsXXxNVGBiHms2vxI1oIJosharonbRmm9MOPy61XQe9aBvtAOkfOcVuT1A2AkNTGCBXPTJBE4oPKdCcdJ9d5EQZg%2FEGJyZopBQa2jYdwj1TtEHfnixJ1SDBEpBT8DnS7%2B8ljRlfIP6SBopIdk3dxgfmfEDaaDLWVhg6BXt%2BZp9B8LCDs22rPOt%2Bq4Hm%2F3s&X-Amz-Signature=224edd00be6f93545ae3b5ee24e4239d37894dc86b239b30547b2afd437a989a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
