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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKN4TDD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDbtIC7vdlXGGi7QpHh4HirA4Pf%2FmAsWgOrFcsUybu7xQIgY2MfJxVxMvYrnSLAN%2BHhmEEzJWFPtypof55YpQoLjlwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGecNo2rIPg3Y72qcyrcA114fjY0NacjJ1LxnQarYmm0bLqMQZRF4tJOz5aGtCV4vS%2FfzsbDiLJwAkIGq5CW%2FsNw1l6ryuLi6X13P%2FMMRQM7l97gSThaRahrG9Yh6sgKsU5gc%2BwjXIJn2NO6LdBg1hSbhvmxguTciV2HM8%2BFbmR8DL0rA2Vt7sQ3MKcRH67N1cCJ%2Fa1xaWbDkm%2BFs6I5FoY4fv66LVnBaLaxVYpYNEZTiRafesLXkfjym5LntDkkIr1ylK06SoBiUbCfZVVkaDdX5bHBsR36mpM5r2a9mUp3MEauW82o50wapCAeDYnGWV4w8brWjWm8EMFNhWKE9%2B2Qs88j89fveYqwopMaZKAEvwNe2zfGLZxgg7ONFy2bpH3jOSnigH81Mpa3QOF%2F5kmqA5ZbRbaCcy9IqMIkyTfjBjWWr0Bx2JOoKsnuYTkgYz1joNr8oyfx3ZFidy9G5LXA%2FVbSQVmVq%2B5fuCiZmHsfw7b6evPz%2FNTmZYcXbBIRCDwACQPi%2FwG3s8DNFTESTDa%2BPGIKzaOsiU05VaQII8uDUy9MkQXlXcma47C7BFS6QXF2%2F5peje8wa4AgjvIJjo2Sr3jRxL%2BO3Dm6%2BeFkJgpM%2FXVTbWwZVnCSyCSofPTlMbTOtCHq4XasCaksMJLukb0GOqUB7jfRqcRpB%2FE%2Flo5JgAVGadi1tL0lFm82vvyxmb0D9SNCKtDunPG5wXG3cKTgsCwNNBMK%2BeF8%2BZDM6M09F799DfFJPOzYeJHya6LMTQKl9ll911FpK%2F%2BNnArd49VW5Xe1XDNzUPKTSA%2BY%2BOjuho0%2BeHHq8zk%2FF7yPN8NOZINEoBSh2HwBdQJLaRHwe%2F8ZO7obmSrSynWgkqH%2FAJGjTfCJyKqJGDtD&X-Amz-Signature=d85a259950ff2e7d33eeb570ea637b05d6c524fdb2531d3b72d9b53d12f91075&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKN4TDD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDbtIC7vdlXGGi7QpHh4HirA4Pf%2FmAsWgOrFcsUybu7xQIgY2MfJxVxMvYrnSLAN%2BHhmEEzJWFPtypof55YpQoLjlwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGecNo2rIPg3Y72qcyrcA114fjY0NacjJ1LxnQarYmm0bLqMQZRF4tJOz5aGtCV4vS%2FfzsbDiLJwAkIGq5CW%2FsNw1l6ryuLi6X13P%2FMMRQM7l97gSThaRahrG9Yh6sgKsU5gc%2BwjXIJn2NO6LdBg1hSbhvmxguTciV2HM8%2BFbmR8DL0rA2Vt7sQ3MKcRH67N1cCJ%2Fa1xaWbDkm%2BFs6I5FoY4fv66LVnBaLaxVYpYNEZTiRafesLXkfjym5LntDkkIr1ylK06SoBiUbCfZVVkaDdX5bHBsR36mpM5r2a9mUp3MEauW82o50wapCAeDYnGWV4w8brWjWm8EMFNhWKE9%2B2Qs88j89fveYqwopMaZKAEvwNe2zfGLZxgg7ONFy2bpH3jOSnigH81Mpa3QOF%2F5kmqA5ZbRbaCcy9IqMIkyTfjBjWWr0Bx2JOoKsnuYTkgYz1joNr8oyfx3ZFidy9G5LXA%2FVbSQVmVq%2B5fuCiZmHsfw7b6evPz%2FNTmZYcXbBIRCDwACQPi%2FwG3s8DNFTESTDa%2BPGIKzaOsiU05VaQII8uDUy9MkQXlXcma47C7BFS6QXF2%2F5peje8wa4AgjvIJjo2Sr3jRxL%2BO3Dm6%2BeFkJgpM%2FXVTbWwZVnCSyCSofPTlMbTOtCHq4XasCaksMJLukb0GOqUB7jfRqcRpB%2FE%2Flo5JgAVGadi1tL0lFm82vvyxmb0D9SNCKtDunPG5wXG3cKTgsCwNNBMK%2BeF8%2BZDM6M09F799DfFJPOzYeJHya6LMTQKl9ll911FpK%2F%2BNnArd49VW5Xe1XDNzUPKTSA%2BY%2BOjuho0%2BeHHq8zk%2FF7yPN8NOZINEoBSh2HwBdQJLaRHwe%2F8ZO7obmSrSynWgkqH%2FAJGjTfCJyKqJGDtD&X-Amz-Signature=538b7011fed818cc4446e619b469b88d3b8928914b3dd354a1697992fc676626&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
