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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHNHMMJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHX61AFg1PUSRDGOPPi5MqRaA6Ai5D%2BqeZhrf3xPIlNTAiEAx%2Bgnb8%2FbPr5iftuPIeDZv1y4NgcI88dZoho5A3VwZtgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6%2FKFTpf2WEYeiENircA9Zs8bWi5ypdjwuQERyQZkixJ0Y2jh6xFXxkbWa9PSOeaGltXZvTgFNu9184ZyznLUBJNN%2BhzKRvZSTScCxJUn7BZed4WJjw9B5RHPfXU8HPwg2kLeKPN7tcI5ITIjxj3ydrmvQgS6JHofP5eZBDt5DODRK59m%2BE0gPwNjPvd6RF%2FhzSvAv8tBkF52P18OksMqRza%2F7usyaRCGXYFaGXqWNnJdC%2FcE43wSL%2FUAY0C8xvhmnwOmM8G5RLEaG0pufRGgJtYG4LyLX7A3jslEgBEHsK%2B%2B036j6UPWBjyDUwmfUOWffPWSy6s0WK0ob7QOA%2FW%2FLF%2BrntlKKcslk225cmaeBjiEYPahQ5auvkpnCDHZvmOpvtU0x7EVrz%2FqSSj7ImN1oMq4nu9jgwtNeyqcFC%2FWlp9RH2QiZj%2BdUM5Tp85DDtwRJnAfxoBJYHxDPuD3xyQ4HXN4AQLBgAk3Mx7VI%2F%2Fz224%2BSLPWMr3%2Fbko37YOgaz%2B4AslZAg%2F99XGZopiQhrJTdrh%2B5MrWvOt3V0oALPYgXu%2BPiX0cpY0NqIUov6kFbc%2FB374AOjxpUvS5UDhvWRA0%2BexyRyBRlac%2FUs7Ic5%2BA4bWpAmL8nNT70pJyujT%2Bo2ua9hyQHmGKi3EWw4MKK5lL0GOqUB%2FVFAkTIFSdhUAJMfcjhk%2BGXysD659RTHtu2fyJY0jL2StVu7RwJ7Oh9NU%2BQXV%2BjaI0X4t%2BlufB5g5AbzQ3s1cxvSufoxVkwLDtQ%2FNLyTzcBv81p%2B1r9hIQPlpnOLLnnl5Wewk%2FThS6Tc7wM9bi5InR0Dx%2FbPSTyrVXgy9fVQK5o1ZpvDBiAcQVdw07GvZm4lWEsWQEBLbXqS2yOHr%2FjkQlI%2BNPyE&X-Amz-Signature=2804d4c95d8cf391fa614d6a087cb0c4574bc21b47c3e1aadf571ff708bdd8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHNHMMJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHX61AFg1PUSRDGOPPi5MqRaA6Ai5D%2BqeZhrf3xPIlNTAiEAx%2Bgnb8%2FbPr5iftuPIeDZv1y4NgcI88dZoho5A3VwZtgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6%2FKFTpf2WEYeiENircA9Zs8bWi5ypdjwuQERyQZkixJ0Y2jh6xFXxkbWa9PSOeaGltXZvTgFNu9184ZyznLUBJNN%2BhzKRvZSTScCxJUn7BZed4WJjw9B5RHPfXU8HPwg2kLeKPN7tcI5ITIjxj3ydrmvQgS6JHofP5eZBDt5DODRK59m%2BE0gPwNjPvd6RF%2FhzSvAv8tBkF52P18OksMqRza%2F7usyaRCGXYFaGXqWNnJdC%2FcE43wSL%2FUAY0C8xvhmnwOmM8G5RLEaG0pufRGgJtYG4LyLX7A3jslEgBEHsK%2B%2B036j6UPWBjyDUwmfUOWffPWSy6s0WK0ob7QOA%2FW%2FLF%2BrntlKKcslk225cmaeBjiEYPahQ5auvkpnCDHZvmOpvtU0x7EVrz%2FqSSj7ImN1oMq4nu9jgwtNeyqcFC%2FWlp9RH2QiZj%2BdUM5Tp85DDtwRJnAfxoBJYHxDPuD3xyQ4HXN4AQLBgAk3Mx7VI%2F%2Fz224%2BSLPWMr3%2Fbko37YOgaz%2B4AslZAg%2F99XGZopiQhrJTdrh%2B5MrWvOt3V0oALPYgXu%2BPiX0cpY0NqIUov6kFbc%2FB374AOjxpUvS5UDhvWRA0%2BexyRyBRlac%2FUs7Ic5%2BA4bWpAmL8nNT70pJyujT%2Bo2ua9hyQHmGKi3EWw4MKK5lL0GOqUB%2FVFAkTIFSdhUAJMfcjhk%2BGXysD659RTHtu2fyJY0jL2StVu7RwJ7Oh9NU%2BQXV%2BjaI0X4t%2BlufB5g5AbzQ3s1cxvSufoxVkwLDtQ%2FNLyTzcBv81p%2B1r9hIQPlpnOLLnnl5Wewk%2FThS6Tc7wM9bi5InR0Dx%2FbPSTyrVXgy9fVQK5o1ZpvDBiAcQVdw07GvZm4lWEsWQEBLbXqS2yOHr%2FjkQlI%2BNPyE&X-Amz-Signature=7ed4b620dfc9a47267b23bfd960da0ca557fbddba12c00200b9caa7a2f47df6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
