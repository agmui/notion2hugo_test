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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXNXMN7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDqjVEJSLVhfib7QGnVneELLrD7dlfE1NBTMOQ2cpoDrgIgczGEprROx3yiMZ3p%2BGAbP3Wc6ul0is6b24WchQPxlqMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNaXuB3i95Gcof%2FfTircAzf2R%2Fgzz2A0sIqSsEVpgopcIHGTCfhITLGqFZDCP%2BIeUDLaE1FuyBTviZ8GSDMWoCyPknn7v72mYH03kTpJlxAzYOJ%2FD%2F7AXc%2B5I85zR8K8cryUUc5xhDWZDV9K6uwsv0e6PtAnQSAf%2BMY7shu3eaBwBv8WqugYz0Xuc32YPTR2sVmaB6tXkuVYyiiy%2Bgq4%2F3SdZjpqih%2F5wxfV3urHe%2FhYRq9esNp7cXxGbxs%2FU%2FfhmhXHQQZmIIZ0FdcwKECsPJMKAaTH%2FubuAG4svH9b%2F4xcSQsqKMVrJXR962VOjfxJ8yV%2FXbapm7zLw4Spv8NEXQ9UtRgqTe1TU6CieOl3cJyxqS4k%2BWDE2h%2BXS3IiAN73HL3pE40pVaVpp%2B0A04uG8OXGVzrHJMdZHVSuTWoFbcL5sUIgtU4lMAYM5YfHVcyEogNNKoBtVitb3pR5B5bCxoB%2B6sdYoYGVD4QgO3RuPI2o1c09UOUIBICvdzY0d98s3oiKdSC8%2Fj49Cg9OrZOgGEm2OgTr7rwKX91upLMcK4uJFz1x1%2B03gwxZ7Tuc%2Fp6EZixbn8ALIuCDzqbW242BLhsxxaHjL8VY87OvgO%2FY%2Ff5jmJtJ1VOk1D6OnJU7qycMZDLpvj07JEsA0HCNMP6Ms8IGOqUB14lZGjM%2Fv%2Bp3WyG2L%2BG9hGQfv%2Fg8IJsO0bK4u48V9xGFsr%2BD%2BL4RuAJ00FLT4fpT4LYbgB%2B%2Bqld7dHRccOIHvnWHvusyLz5Tb8%2FdtOLnUatTefI%2BHKMKdDqAz3uYOi110s8l2Q4Vy2PqHa7FHUGTDFRrxwu4kddAe80%2BLI%2B3h6ZHO%2BXTC3fKGaDIqgRXfNhrvOWkt9%2BHQvzcJeyH9JbZOqzoaoLw&X-Amz-Signature=7fc0750b752b8e8b0d007d1962434844dd643d63a684f6719a7a64cd66b0f15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXNXMN7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDqjVEJSLVhfib7QGnVneELLrD7dlfE1NBTMOQ2cpoDrgIgczGEprROx3yiMZ3p%2BGAbP3Wc6ul0is6b24WchQPxlqMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNaXuB3i95Gcof%2FfTircAzf2R%2Fgzz2A0sIqSsEVpgopcIHGTCfhITLGqFZDCP%2BIeUDLaE1FuyBTviZ8GSDMWoCyPknn7v72mYH03kTpJlxAzYOJ%2FD%2F7AXc%2B5I85zR8K8cryUUc5xhDWZDV9K6uwsv0e6PtAnQSAf%2BMY7shu3eaBwBv8WqugYz0Xuc32YPTR2sVmaB6tXkuVYyiiy%2Bgq4%2F3SdZjpqih%2F5wxfV3urHe%2FhYRq9esNp7cXxGbxs%2FU%2FfhmhXHQQZmIIZ0FdcwKECsPJMKAaTH%2FubuAG4svH9b%2F4xcSQsqKMVrJXR962VOjfxJ8yV%2FXbapm7zLw4Spv8NEXQ9UtRgqTe1TU6CieOl3cJyxqS4k%2BWDE2h%2BXS3IiAN73HL3pE40pVaVpp%2B0A04uG8OXGVzrHJMdZHVSuTWoFbcL5sUIgtU4lMAYM5YfHVcyEogNNKoBtVitb3pR5B5bCxoB%2B6sdYoYGVD4QgO3RuPI2o1c09UOUIBICvdzY0d98s3oiKdSC8%2Fj49Cg9OrZOgGEm2OgTr7rwKX91upLMcK4uJFz1x1%2B03gwxZ7Tuc%2Fp6EZixbn8ALIuCDzqbW242BLhsxxaHjL8VY87OvgO%2FY%2Ff5jmJtJ1VOk1D6OnJU7qycMZDLpvj07JEsA0HCNMP6Ms8IGOqUB14lZGjM%2Fv%2Bp3WyG2L%2BG9hGQfv%2Fg8IJsO0bK4u48V9xGFsr%2BD%2BL4RuAJ00FLT4fpT4LYbgB%2B%2Bqld7dHRccOIHvnWHvusyLz5Tb8%2FdtOLnUatTefI%2BHKMKdDqAz3uYOi110s8l2Q4Vy2PqHa7FHUGTDFRrxwu4kddAe80%2BLI%2B3h6ZHO%2BXTC3fKGaDIqgRXfNhrvOWkt9%2BHQvzcJeyH9JbZOqzoaoLw&X-Amz-Signature=5c639fc875de45b6b6f3a66bfbfc997aa64cd49e96cc6faa544610b2b26ae12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
