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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM75D5DP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICSGdiN46rrh2ga%2B3Ahzu2IpzBoU0yrDsuolHNtHIkzqAiEA7dB1fow05xAW3wkw0hMj1IIvo7zHIIbzMdguCHK5BxoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHiQMaq6o8zQzL%2BFSrcAzeEHYD7IrhwvVyzg2PmR9jZuk9Pei02RbW2WFttmhxRcqsnJl1dQ9E9UAg8J4ueG3vwiuozhX5iA3IvdklNcG37zRHp3RMCUJ%2FXwmj4JXQCgCDzVYg%2BhudCKcZw6CK2tNQYDWWjLhvN5E0WxRRv%2BVVVTmHATlkBdTj60HkjkHUTYEtf8O%2FBO1KfMyq6NGCKoIo6RCAzyX475qY6VGvXEZiphuPjjI5x8%2F8B9mutNHcl7aYgqyvHdh2IJT8w9xTuAYC%2Bv%2FohGcvceE5TnWDcUO3zymb%2FQRB82mxSoBtDP9u%2B4iuEPoSwm7bS58A0nxNBTZfnxSfoOtxYUr2n%2BI5EHYbWHv9fHlDieq4HAXAf8067RtwUIIntpIvj7DRznABy42Uo0A%2Bkie8zkndxw1JhxU0fP%2BPRqTrf%2FWt6vef0bZqyPe7Sve2aUAe42Uf7pPB70LoHyU0jZ3FeORKKpoNLGZ18OtaYYEz5FIApekB%2B5UCLgneWaUIlxr8VpVr4fFPqiNoHccaA%2Bh7DPtGucjj9BmcbzuDA7LO6hVCyTploJZ4KIgjcAh9xbTm1PFF2XbYI231xYWJ936FP2xclK1MeEde8eBRk2fac7y8UqT1dRjvI02LxazYI1dofxMdQMIfhrsIGOqUBSSztWB8ieJ14VBeJ1%2F%2Bug%2BqqvwfRCpz0SgBEURYPUizV%2BumyWGP5wa%2FVEQm%2FoCVdTkoS%2FOqCw8VphFAfRbBXqzJTnDK%2BUa86Z07y06QzZ2s47IAAAUaYQ1YniAyRi8NczsKgQJxbRAplCmwv78uqYH5gvz9Fv8suxvxNF6%2FL1HSJb%2B1poGcjJeHRgp%2BddaRuzv6z%2F5XNcTKtIBikLDpw22nLy6m0&X-Amz-Signature=0e0380f65cb66c0488156950f4e59202e463850e338275155838408e1a4fa287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM75D5DP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICSGdiN46rrh2ga%2B3Ahzu2IpzBoU0yrDsuolHNtHIkzqAiEA7dB1fow05xAW3wkw0hMj1IIvo7zHIIbzMdguCHK5BxoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHiQMaq6o8zQzL%2BFSrcAzeEHYD7IrhwvVyzg2PmR9jZuk9Pei02RbW2WFttmhxRcqsnJl1dQ9E9UAg8J4ueG3vwiuozhX5iA3IvdklNcG37zRHp3RMCUJ%2FXwmj4JXQCgCDzVYg%2BhudCKcZw6CK2tNQYDWWjLhvN5E0WxRRv%2BVVVTmHATlkBdTj60HkjkHUTYEtf8O%2FBO1KfMyq6NGCKoIo6RCAzyX475qY6VGvXEZiphuPjjI5x8%2F8B9mutNHcl7aYgqyvHdh2IJT8w9xTuAYC%2Bv%2FohGcvceE5TnWDcUO3zymb%2FQRB82mxSoBtDP9u%2B4iuEPoSwm7bS58A0nxNBTZfnxSfoOtxYUr2n%2BI5EHYbWHv9fHlDieq4HAXAf8067RtwUIIntpIvj7DRznABy42Uo0A%2Bkie8zkndxw1JhxU0fP%2BPRqTrf%2FWt6vef0bZqyPe7Sve2aUAe42Uf7pPB70LoHyU0jZ3FeORKKpoNLGZ18OtaYYEz5FIApekB%2B5UCLgneWaUIlxr8VpVr4fFPqiNoHccaA%2Bh7DPtGucjj9BmcbzuDA7LO6hVCyTploJZ4KIgjcAh9xbTm1PFF2XbYI231xYWJ936FP2xclK1MeEde8eBRk2fac7y8UqT1dRjvI02LxazYI1dofxMdQMIfhrsIGOqUBSSztWB8ieJ14VBeJ1%2F%2Bug%2BqqvwfRCpz0SgBEURYPUizV%2BumyWGP5wa%2FVEQm%2FoCVdTkoS%2FOqCw8VphFAfRbBXqzJTnDK%2BUa86Z07y06QzZ2s47IAAAUaYQ1YniAyRi8NczsKgQJxbRAplCmwv78uqYH5gvz9Fv8suxvxNF6%2FL1HSJb%2B1poGcjJeHRgp%2BddaRuzv6z%2F5XNcTKtIBikLDpw22nLy6m0&X-Amz-Signature=e95e96ffdc1c387ce5e34e5f11b564e084d1b33730e02fcb00e7fbbf2dcfd37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
