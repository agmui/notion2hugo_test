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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJD5DT7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZLIMoPPEtHU38UxoS2n3rUhgM%2FtzDu%2B8j1yYcxRRP3AiEAstMKmSLc%2Bv8xfR59LLyqZfl5mwqCWu%2BmLcPnv1ZU4Ioq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEtdiLFpnLrbYi4wzyrcA4KE0Renc5bhrSx0e97VAbvZf2SXuEltFFfp9xjXsbm%2Fo9yTtUxM3gUWwm1NIqwp9wT%2BdUoxu1%2B%2FHe3vbyu%2B46z3Y9NstVUbrs0ED6KyBwpsB%2BQ606q93oYcY%2FlJ25UUUN2luL46iGDce94QJQzh6jlvYJnXC4Q%2F%2B67Y3ppg6VN9JiHH5Ov4CXTBV2zfoATt3FZg3oxie6jek869oiHWbjq5AO8%2FQtoAkiiQljrV8BU7RANFpkHG1RMPshZ9ANKjNI7FwnKLXsxodmImtweH%2BdWfIebskeiy%2FP72hFNJ2IbfmGO%2FEXV0uslBuZhsiBfuWGEF62FC6CrOi7InHDcOUbICN3ALDuDiABFEaJtvYWxvVhEaHqoAVkL9ntOfehsfeSzR73dBZOrWFpWKvhT4XtL0Z%2BRqY9R8ImTdoz3U6gY3RAQR3yUQFfmDPXw4GjSlXUpGcCkqT3hH6Vx%2BUaWdzwVz34tbvvAJE9nSeorBpIGyxxZBXeRe%2BUnkPGPJkxi%2BQ5%2BcZtyRPgwUx4SZ2X9QiAzp0pv2829U%2Bug1qG%2BLLFWzjL1WrfCuZFn7tnph1XfwdgU4Ykcw896GhG34twMdz%2FiVpJS2DxPZ4yPfJaiw0RE11JaCAiROi441cUXhMNbn7cAGOqUB6JaZukAa4lXYG5GtQTIARrncnRXH8FkO9eFivnb%2FAHc9lPQpZPbIZkcy%2BaBjxKPRjV4zxfeJIqEw42PPe8FyTTsf5cINapaDHuOTyM%2FZNFH6k9kHfTBfjWqhXnpaD3zRZECapRzFsMKTbSLWELt864CBWld%2F5N1Pd%2FGLxGVH%2FOZ%2FFSZIitNbx8rMb4Bj2IXqEUeKzM9GpWdpm0K1rMGppEfAddMc&X-Amz-Signature=d0d1191622cc04a0f894211e924e2e7b3a165e1cd8bb3b31edc1848331f91aae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJD5DT7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZLIMoPPEtHU38UxoS2n3rUhgM%2FtzDu%2B8j1yYcxRRP3AiEAstMKmSLc%2Bv8xfR59LLyqZfl5mwqCWu%2BmLcPnv1ZU4Ioq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEtdiLFpnLrbYi4wzyrcA4KE0Renc5bhrSx0e97VAbvZf2SXuEltFFfp9xjXsbm%2Fo9yTtUxM3gUWwm1NIqwp9wT%2BdUoxu1%2B%2FHe3vbyu%2B46z3Y9NstVUbrs0ED6KyBwpsB%2BQ606q93oYcY%2FlJ25UUUN2luL46iGDce94QJQzh6jlvYJnXC4Q%2F%2B67Y3ppg6VN9JiHH5Ov4CXTBV2zfoATt3FZg3oxie6jek869oiHWbjq5AO8%2FQtoAkiiQljrV8BU7RANFpkHG1RMPshZ9ANKjNI7FwnKLXsxodmImtweH%2BdWfIebskeiy%2FP72hFNJ2IbfmGO%2FEXV0uslBuZhsiBfuWGEF62FC6CrOi7InHDcOUbICN3ALDuDiABFEaJtvYWxvVhEaHqoAVkL9ntOfehsfeSzR73dBZOrWFpWKvhT4XtL0Z%2BRqY9R8ImTdoz3U6gY3RAQR3yUQFfmDPXw4GjSlXUpGcCkqT3hH6Vx%2BUaWdzwVz34tbvvAJE9nSeorBpIGyxxZBXeRe%2BUnkPGPJkxi%2BQ5%2BcZtyRPgwUx4SZ2X9QiAzp0pv2829U%2Bug1qG%2BLLFWzjL1WrfCuZFn7tnph1XfwdgU4Ykcw896GhG34twMdz%2FiVpJS2DxPZ4yPfJaiw0RE11JaCAiROi441cUXhMNbn7cAGOqUB6JaZukAa4lXYG5GtQTIARrncnRXH8FkO9eFivnb%2FAHc9lPQpZPbIZkcy%2BaBjxKPRjV4zxfeJIqEw42PPe8FyTTsf5cINapaDHuOTyM%2FZNFH6k9kHfTBfjWqhXnpaD3zRZECapRzFsMKTbSLWELt864CBWld%2F5N1Pd%2FGLxGVH%2FOZ%2FFSZIitNbx8rMb4Bj2IXqEUeKzM9GpWdpm0K1rMGppEfAddMc&X-Amz-Signature=dd35d55574b7256f0d0722b8642c309419ba5690da94a7b3b23fd9b7c41bd7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
