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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6AOAPC3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIENwNfCrz%2FYYFPU2PNXL0sq3Kmu66k9BYXZqBl2EY202AiEAnt4qoQdYeNAsbmcp0FEa70QmsogVgRVs1MOn3ken2Bkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDE9oqICib4D1l9O%2BxyrcA4anO%2FbJzGAVr2YFAiW250xx%2BMZc3wrFgq25pbjzu3BoMVm9qIB1M3%2FVgND4D87tZdXMnMqSwXh3Hin7iv4OE4k3bQ1szOap5OghmUNuHf%2FtvFM197WGe8OLknHi0clAL0jzhep%2B6OB4aqpqN8lbVja6xY6mfIDzFu8I9J%2FSEXam3CxbQJlJFP%2BxaerIKbUX29p%2F3eNVeufUG2vitr8OVYWb6FlmBJMP9Fjhq4bDI8RMpjF9Uhk%2F5ycwD8TAtu1b%2BiUc9F9A5hq%2BCKt6sb%2F4ZQFU4IVHaaclQ8HguzlDrWvHH9wi8EX5yhE1gIJDJN3imKOi62W9U%2FZnEQeaMV8sv%2FTfzWSU4xwSoNnckRZn%2BON1ZIyjQ1FdNKTFUE%2FRxBBfzyjfPlu5A%2FZ8sAhoO%2BQbDE6fjv1QEhSRce1zJrZlZcHdA1gZugLd2Ytz%2FOd1fhF4Wc8gWpHHf5u1A4j41NX8%2FN0TCfnv9Qpoj%2FXmq1BGUrM6OjS6xHExrpahRVyzRAJKIHJj1ZiVbKEmpgDD1yrJ0TsTKD8iZQsYUhtMEi7gMo0zSMphSPWaX%2BgQz4dKzWzTKQE0YOy0U6%2FHLVSPbbcp49N6G6Js7bY%2ByNyn%2Fg70n96POARR4zb9uJr24j9sMLXe6L4GOqUBPv94wXs0HH%2B2G79ACTwyDuaglEKPeBy8D%2BwSRE%2BEjb7oib2IbbfcPwtqhv%2BBdTHBr%2FkrBwOd2wjpt3xJA%2B4%2BN06OPwZYdG578FOHlNYyjt%2Bu8MabTpoJnd%2BDZMKNgPkXqmURxV4tuLSRSfj3rTOusVbetmNXYrDWvLyKd1hdcfIo2uabl1mQzqpTwR0HhqqSe2Cf%2FSIrA0ybuwuHfWEF8Hb%2BR9JD&X-Amz-Signature=5da8141ff0ad628731f0f095cc7569550a8cbb5bec89eed6e268f9dec6833b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6AOAPC3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIENwNfCrz%2FYYFPU2PNXL0sq3Kmu66k9BYXZqBl2EY202AiEAnt4qoQdYeNAsbmcp0FEa70QmsogVgRVs1MOn3ken2Bkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDE9oqICib4D1l9O%2BxyrcA4anO%2FbJzGAVr2YFAiW250xx%2BMZc3wrFgq25pbjzu3BoMVm9qIB1M3%2FVgND4D87tZdXMnMqSwXh3Hin7iv4OE4k3bQ1szOap5OghmUNuHf%2FtvFM197WGe8OLknHi0clAL0jzhep%2B6OB4aqpqN8lbVja6xY6mfIDzFu8I9J%2FSEXam3CxbQJlJFP%2BxaerIKbUX29p%2F3eNVeufUG2vitr8OVYWb6FlmBJMP9Fjhq4bDI8RMpjF9Uhk%2F5ycwD8TAtu1b%2BiUc9F9A5hq%2BCKt6sb%2F4ZQFU4IVHaaclQ8HguzlDrWvHH9wi8EX5yhE1gIJDJN3imKOi62W9U%2FZnEQeaMV8sv%2FTfzWSU4xwSoNnckRZn%2BON1ZIyjQ1FdNKTFUE%2FRxBBfzyjfPlu5A%2FZ8sAhoO%2BQbDE6fjv1QEhSRce1zJrZlZcHdA1gZugLd2Ytz%2FOd1fhF4Wc8gWpHHf5u1A4j41NX8%2FN0TCfnv9Qpoj%2FXmq1BGUrM6OjS6xHExrpahRVyzRAJKIHJj1ZiVbKEmpgDD1yrJ0TsTKD8iZQsYUhtMEi7gMo0zSMphSPWaX%2BgQz4dKzWzTKQE0YOy0U6%2FHLVSPbbcp49N6G6Js7bY%2ByNyn%2Fg70n96POARR4zb9uJr24j9sMLXe6L4GOqUBPv94wXs0HH%2B2G79ACTwyDuaglEKPeBy8D%2BwSRE%2BEjb7oib2IbbfcPwtqhv%2BBdTHBr%2FkrBwOd2wjpt3xJA%2B4%2BN06OPwZYdG578FOHlNYyjt%2Bu8MabTpoJnd%2BDZMKNgPkXqmURxV4tuLSRSfj3rTOusVbetmNXYrDWvLyKd1hdcfIo2uabl1mQzqpTwR0HhqqSe2Cf%2FSIrA0ybuwuHfWEF8Hb%2BR9JD&X-Amz-Signature=770fc1df781a49b93fe0472d8a4fd8a5d9c077513ec309b642dced7f9d7ef96b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
