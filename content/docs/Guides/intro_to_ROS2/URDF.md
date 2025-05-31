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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526T5DEK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPKMrqU9447DpDSq0PVgc3MOJwygfy65oDh19QiQfbWAiEAve2MM8Zhrd1dGfjlb8EWVG%2FiMUUgc6z3JVTtbj9B0kIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyfpdI%2F14ndP%2FbbaircAzmYav8m0QbjqcHUUKdWL4VNLIcwZdN1D5g4jSqd8uT4Ai5GsEOIRkuGQSG4bTbAo0nr%2F6jTOQ7DahnxFxoEVxGCo4xEyPxiP%2BAWhb%2B4GqD0IZcNJMPSchuxc2wmRn1TUUtUwp46cFwv9HJZLYXlYgKsEC85lyNZZrJJC2VI42yForVPKYX4NSlRSQYkV6dd%2BjZVGb58cXTTzryyHF12BtPC4OpnFyykVuBh5tBmdx7cvF9fUHLUQI4qWCbFuXJmkjSQZr58qDnrqgriIAZiTGIHhjgtXTmePBVs7GR9tB276nThs76ap1tJUpl9huIwpBD56qjAr%2FurA5%2FtAeRtH2Nh0gQJQHugpzMWSWlO9u8bhgvUmUitPVcojUjeC0WwR7WnGCfAPstcUcDeg%2FRvaO6ccw6a2CZmhClNp3fa8mjTcrQWi8NOoCywSd3gsvYAgVII1ukmpHuV4vESd33ZOpMGNZ%2BuVhyxfdzKORYQuNuy5nWi3aqnGcXUr5Nr4Y%2FTLlxTIbSKevY68wMrKdP8BuQ6fsjqZ7%2FpxW0cOWcJIcUfv5Xg2qQ%2FifHqf%2FnDNdFNXcdj3lyZgggq%2F1vxY1AXudmznA5Y5IsMDG%2F5OJTS7zgp6BPX0%2Bx3hWUJ5W%2B1MICE68EGOqUBG5hD37P2RSOxK1QinyCf9MHQRwzba2PVvGi3xxl5AlqfLCpaNM%2FyI05AxtLKl9mFV284UGZuuCyEoWRBBLLJqfzfTR294Oo0mX91kuKs%2BJAw6qN%2BsJuBaQHZsMGfQ2UFQ%2BRzru4JF6cVoQtJnlxNwMn2TxwwB6B0Y%2FUeEQUxnl9lIYEoJAd%2BomSg60UN6wT4zaWf3KFAe20DC%2B%2BPXVE273gW87Ii&X-Amz-Signature=127cd28bffacae0be47b97952cb6b45466e507e1e2ea9276f2fc96f99fb678d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526T5DEK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPKMrqU9447DpDSq0PVgc3MOJwygfy65oDh19QiQfbWAiEAve2MM8Zhrd1dGfjlb8EWVG%2FiMUUgc6z3JVTtbj9B0kIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyfpdI%2F14ndP%2FbbaircAzmYav8m0QbjqcHUUKdWL4VNLIcwZdN1D5g4jSqd8uT4Ai5GsEOIRkuGQSG4bTbAo0nr%2F6jTOQ7DahnxFxoEVxGCo4xEyPxiP%2BAWhb%2B4GqD0IZcNJMPSchuxc2wmRn1TUUtUwp46cFwv9HJZLYXlYgKsEC85lyNZZrJJC2VI42yForVPKYX4NSlRSQYkV6dd%2BjZVGb58cXTTzryyHF12BtPC4OpnFyykVuBh5tBmdx7cvF9fUHLUQI4qWCbFuXJmkjSQZr58qDnrqgriIAZiTGIHhjgtXTmePBVs7GR9tB276nThs76ap1tJUpl9huIwpBD56qjAr%2FurA5%2FtAeRtH2Nh0gQJQHugpzMWSWlO9u8bhgvUmUitPVcojUjeC0WwR7WnGCfAPstcUcDeg%2FRvaO6ccw6a2CZmhClNp3fa8mjTcrQWi8NOoCywSd3gsvYAgVII1ukmpHuV4vESd33ZOpMGNZ%2BuVhyxfdzKORYQuNuy5nWi3aqnGcXUr5Nr4Y%2FTLlxTIbSKevY68wMrKdP8BuQ6fsjqZ7%2FpxW0cOWcJIcUfv5Xg2qQ%2FifHqf%2FnDNdFNXcdj3lyZgggq%2F1vxY1AXudmznA5Y5IsMDG%2F5OJTS7zgp6BPX0%2Bx3hWUJ5W%2B1MICE68EGOqUBG5hD37P2RSOxK1QinyCf9MHQRwzba2PVvGi3xxl5AlqfLCpaNM%2FyI05AxtLKl9mFV284UGZuuCyEoWRBBLLJqfzfTR294Oo0mX91kuKs%2BJAw6qN%2BsJuBaQHZsMGfQ2UFQ%2BRzru4JF6cVoQtJnlxNwMn2TxwwB6B0Y%2FUeEQUxnl9lIYEoJAd%2BomSg60UN6wT4zaWf3KFAe20DC%2B%2BPXVE273gW87Ii&X-Amz-Signature=2784b82ecdbf8ca487416e0aa2089c8aebc1942a939462a7545a8c125142afe1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
