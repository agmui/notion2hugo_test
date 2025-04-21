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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIS6ICI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD0bpg0DfljHAGXTm8ka6q7%2F1r4iXeI5wMaaKTXtCTSNwIgRx%2FPVfJ98K4nSUh5SDtakuj45VWmy2bw5TFvRb9Qw58qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSh7A6rUht7r%2FMTCrcA6esAoyQmQS54aBu0fgiQfL2gvxUacWxdJKTKeX16t6WpHx8IUF6PCCCFO%2B8nTqfWMhuUd%2FZPcm0eRGb3FfEyTDDrOyKy6%2FovM4x7ZBHf0Le0nHJWCe3HvhLjZf3hbDwiZUec1Vcbe1BiNayfKhXCj5XfCbxRLOLQZrrYNFsCWAA56aSeXuqTAUsKJtQIYTKabXU05QBXPPrPTzoKJ1YHvoVldSIz1eTWoQyQzYEWdBYFVhxh4buL4kuqIDxHNpArnoaTCuB9FVaS62SGdxBs216Ve%2FvzPU1hgvgl3%2BnttBH07K%2FmfqcasHCKGyx%2B0fDOBCUGbdzo%2B%2FwwJrWSFuHSxWCZOFSLscZSfqtim84rJEvNzgGwD4sQm1%2ByfLwkr9RZy03KfVn9HPvLxVVRns1OcCYoiYl%2BKZHI6x%2BvMKl4fRBDJrRiJb9mn%2BoTAX2fKXE1tS4jEMHONYuo7YYoADlXXhpK%2BDkxawEYZTHRVKbVVLpJZ4qtafDFB%2Fw3WA9XfP7HHdRwzOrrbiQFESMj1mezQjg3zSwbk4HzZHhtnjtqjxoH5FH%2F7r5yK826zRWSXVKeJBe%2BxtwqozySDoNwDOsQu0T95dZl9onLm4iQNg3WaqHAzh%2FTF%2BPZXtNMVeFMOjalcAGOqUBvXTXvSdaRQ9BM5YSoGztyDTGsgSAMYzCYDcKGE6b534l43TNhrK4uJztIYTdZPPhgWYv8vY1TbpCPuYpz%2Br220lPTVURoEzV7O1R%2BXuMzoXPekypmj1s3hljRjg8Gw6tCvrFp5yo4oW%2Fus8F%2BHmSOuuEnfYAXwEIok7hz%2BEXZBHLG1tZgN4zyE%2FEs4ReArwMyPF8e7%2BP%2BYcJ%2BKXg6oiA9JHzWi7Q&X-Amz-Signature=c01c845bccf9e3cdbbc8fa6f4131caa5e49510ebec01bac9f3445f2bbe6d2ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIS6ICI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD0bpg0DfljHAGXTm8ka6q7%2F1r4iXeI5wMaaKTXtCTSNwIgRx%2FPVfJ98K4nSUh5SDtakuj45VWmy2bw5TFvRb9Qw58qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSh7A6rUht7r%2FMTCrcA6esAoyQmQS54aBu0fgiQfL2gvxUacWxdJKTKeX16t6WpHx8IUF6PCCCFO%2B8nTqfWMhuUd%2FZPcm0eRGb3FfEyTDDrOyKy6%2FovM4x7ZBHf0Le0nHJWCe3HvhLjZf3hbDwiZUec1Vcbe1BiNayfKhXCj5XfCbxRLOLQZrrYNFsCWAA56aSeXuqTAUsKJtQIYTKabXU05QBXPPrPTzoKJ1YHvoVldSIz1eTWoQyQzYEWdBYFVhxh4buL4kuqIDxHNpArnoaTCuB9FVaS62SGdxBs216Ve%2FvzPU1hgvgl3%2BnttBH07K%2FmfqcasHCKGyx%2B0fDOBCUGbdzo%2B%2FwwJrWSFuHSxWCZOFSLscZSfqtim84rJEvNzgGwD4sQm1%2ByfLwkr9RZy03KfVn9HPvLxVVRns1OcCYoiYl%2BKZHI6x%2BvMKl4fRBDJrRiJb9mn%2BoTAX2fKXE1tS4jEMHONYuo7YYoADlXXhpK%2BDkxawEYZTHRVKbVVLpJZ4qtafDFB%2Fw3WA9XfP7HHdRwzOrrbiQFESMj1mezQjg3zSwbk4HzZHhtnjtqjxoH5FH%2F7r5yK826zRWSXVKeJBe%2BxtwqozySDoNwDOsQu0T95dZl9onLm4iQNg3WaqHAzh%2FTF%2BPZXtNMVeFMOjalcAGOqUBvXTXvSdaRQ9BM5YSoGztyDTGsgSAMYzCYDcKGE6b534l43TNhrK4uJztIYTdZPPhgWYv8vY1TbpCPuYpz%2Br220lPTVURoEzV7O1R%2BXuMzoXPekypmj1s3hljRjg8Gw6tCvrFp5yo4oW%2Fus8F%2BHmSOuuEnfYAXwEIok7hz%2BEXZBHLG1tZgN4zyE%2FEs4ReArwMyPF8e7%2BP%2BYcJ%2BKXg6oiA9JHzWi7Q&X-Amz-Signature=9de67fbc2f8073439486670afe07cff8a7edc838b90a3913ebfa304dee229839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
