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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXH3HQP4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFYlN2P%2FTYftnT%2Fb%2BWUL%2Fb6SzJJFL5VQAraMiIFXirVAiEAoRPBhH9tNgJYVoi7t4Zmazb4nz0iEUS1co2JS4k%2FBLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmPZJ%2FsrXSSCsNJCrcAzTcdy4NRkrIrfYAU1J4AsDVW5m9a6Epa%2FIjrm4dsPn9%2FkFTDhMNDLGAbwJ5o6BZaw97OTFfYWfMUwbOV3ELPpwQHfVaktWY3E6L6hjPLujAL6BAaneeZ%2FE49lSz1i2OowRBcQG64PYSIFEpAKi9iOD%2ForZe8%2BerW08BH4XClVXEY33vRzHv3iQv5mtUhBOlgFJh6A9nbRNfulfqn4BOpdz%2B2iozejWvu%2Bw1pZ9T7sMwr%2FcefY9Yt1g94RMBEVCG5ln65o9OtLm7XpoJoe%2BOJtdWmKy%2FhnuMNzkIlQKa12dzL5h0TFHb8NF%2FYhdJW4QRoLDKd%2Fl0SLypJv15JgsxmrToXR5pGc5cerhXlHxLxth3qTGNY%2FYsUV5GfPaJYCVGv%2BM8fSmu%2BWKZIANX%2BmkSZh3m8ocu2y%2FJrUI5JqDLsBNflnJiSIcb%2FOX9gvTEnnYXaW3rx%2FkEFZQBpuoaBd3E3M71AFAJdA%2F2ncjG5rDNxwPT6otdnOH%2Fn28qrwWs77PtwqhEm%2By0w4UBOQyZ4GmhmRU0ghanOVviwIfdN7IQyE9g5PoDxNW9%2B3OJLRq4T%2By1jcZ%2FxZD37yIIrPPkJxmFEPhkNYlvoJxcNTxqgBf%2B4DWXJ7uKcOiWM5ofq6C5MNCP28IGOqUBrpLCCxJpdpxsfF03Mc7N9IG8ifInFf%2FRatdyxAflC2e0AjvKrbaDI0FeDcZbZA6dB8okJ0u1EqYjrINy2bQ2clwat6e3Y9U7Y%2B6JUAaYNqk9vmyf%2FUnJEcnGY%2FMwbiJNiURLqKFB9PD9yaGborCCGY%2FvhmQal6yyLLczhpiolAClNVk9BBv%2FxUFqPybcNlPYleO9lw85CtcZqm%2FJld2zpTE%2F6kcP&X-Amz-Signature=f48116aed9089e88a3b49198bdc4cdef4b95f57a4fde5deb459310a027a51e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXH3HQP4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFYlN2P%2FTYftnT%2Fb%2BWUL%2Fb6SzJJFL5VQAraMiIFXirVAiEAoRPBhH9tNgJYVoi7t4Zmazb4nz0iEUS1co2JS4k%2FBLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmPZJ%2FsrXSSCsNJCrcAzTcdy4NRkrIrfYAU1J4AsDVW5m9a6Epa%2FIjrm4dsPn9%2FkFTDhMNDLGAbwJ5o6BZaw97OTFfYWfMUwbOV3ELPpwQHfVaktWY3E6L6hjPLujAL6BAaneeZ%2FE49lSz1i2OowRBcQG64PYSIFEpAKi9iOD%2ForZe8%2BerW08BH4XClVXEY33vRzHv3iQv5mtUhBOlgFJh6A9nbRNfulfqn4BOpdz%2B2iozejWvu%2Bw1pZ9T7sMwr%2FcefY9Yt1g94RMBEVCG5ln65o9OtLm7XpoJoe%2BOJtdWmKy%2FhnuMNzkIlQKa12dzL5h0TFHb8NF%2FYhdJW4QRoLDKd%2Fl0SLypJv15JgsxmrToXR5pGc5cerhXlHxLxth3qTGNY%2FYsUV5GfPaJYCVGv%2BM8fSmu%2BWKZIANX%2BmkSZh3m8ocu2y%2FJrUI5JqDLsBNflnJiSIcb%2FOX9gvTEnnYXaW3rx%2FkEFZQBpuoaBd3E3M71AFAJdA%2F2ncjG5rDNxwPT6otdnOH%2Fn28qrwWs77PtwqhEm%2By0w4UBOQyZ4GmhmRU0ghanOVviwIfdN7IQyE9g5PoDxNW9%2B3OJLRq4T%2By1jcZ%2FxZD37yIIrPPkJxmFEPhkNYlvoJxcNTxqgBf%2B4DWXJ7uKcOiWM5ofq6C5MNCP28IGOqUBrpLCCxJpdpxsfF03Mc7N9IG8ifInFf%2FRatdyxAflC2e0AjvKrbaDI0FeDcZbZA6dB8okJ0u1EqYjrINy2bQ2clwat6e3Y9U7Y%2B6JUAaYNqk9vmyf%2FUnJEcnGY%2FMwbiJNiURLqKFB9PD9yaGborCCGY%2FvhmQal6yyLLczhpiolAClNVk9BBv%2FxUFqPybcNlPYleO9lw85CtcZqm%2FJld2zpTE%2F6kcP&X-Amz-Signature=0ac8882e510918414ec86f80ce45eb211ec96f91e3aa2653d8a4e3802ac950f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
