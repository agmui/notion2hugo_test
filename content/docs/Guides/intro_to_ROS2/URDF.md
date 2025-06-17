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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YFXK6NE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV9R1HT9i82fUHi2Mdy3T1pxvPGL3lByF1GPQHCQS%2BPAiAHX9xdZ0mnmP5kjiWc1aDHZ6KELSAZHFrxXWdgMyZFbir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWFK8%2BtT%2FmcQqYqRTKtwDsk9D73iLhTx14yyl1hcTONxToubAUFQK7NmKT%2Bk%2Bk%2FoV5IsDgNjbjcB4aXAW4TbZ6bwwSroO%2Ff3Z5fGe5DZTzBknRrE83rq5ATmshJHphdpXsSolfgIvhJ%2B%2BJVhX64rPIr4K51iYbha5uNGohgCmpFBi9Lrm3fUkSLxbu7gj%2FwYXUtsODpVa%2BLXi%2F1KMK67yxz3BH8m%2FG8dESldob6sRlVWeF7QHTisKPkjiJLaJUxE2EqAocMUYk6mzJzwoq36DU1HRuBZbBPFyj5cu8tG3FdJL0L4IxWvIRClF0O2Izv8nF8aYyOJRAPSSpAxMKP4ZBHWOVwjjUjy0M6n4llKpQvmJ9GHumiJT8kSpPdB48QdNwkZmmJaTPPrsiq4UJKBzJpypbaKMXO2Hay%2F%2B7n%2F4xO5wqOvBh68eig4DlLqtt5uwQZApwDoTKsgk4WK8h%2Fr4oLR5e70LLtdycFAylpNJgewLkTE5oQ124qMUsXn%2ByjmQ8bXtkWnwxVtKhJ%2BeJNE5djeVPAbPc%2FckisPjTadR%2BbIq4q85nx4v4iSeGC35Xx7EI1ishC6xl%2Bv%2BSOEPdROdBdY5%2FkPdkWQjbCPh9INhnO%2Bk5mhCF9aaN0LbUP8zRe9h%2FBm8Ud8PXUl1pZowoKfFwgY6pgFNlDgoE%2FU%2BPtrzLQ69tgIUBiwoGRiuDQvceYlitYPvXyoD%2FX4z5DiIS%2FmvmSkjW5FVlwTmO3DKVhNJiyTYg95XFHOj5ZpqKud28Sfxd%2FK32t8h2Fj6wEJAt58qLLdhk0pdkTt2RTeGzTlGGoMPg%2BkpcWsy501xEk9YtFYntguZtwrAz1Ry8BCNyU1GpjTWktrTCeLsIhEe0QxpevBJjIxZAme%2F94kn&X-Amz-Signature=c6266ae41b8ca291c80a603e7ae3ceaf4245b4077d401120beb5ea4afcff7ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YFXK6NE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV9R1HT9i82fUHi2Mdy3T1pxvPGL3lByF1GPQHCQS%2BPAiAHX9xdZ0mnmP5kjiWc1aDHZ6KELSAZHFrxXWdgMyZFbir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWFK8%2BtT%2FmcQqYqRTKtwDsk9D73iLhTx14yyl1hcTONxToubAUFQK7NmKT%2Bk%2Bk%2FoV5IsDgNjbjcB4aXAW4TbZ6bwwSroO%2Ff3Z5fGe5DZTzBknRrE83rq5ATmshJHphdpXsSolfgIvhJ%2B%2BJVhX64rPIr4K51iYbha5uNGohgCmpFBi9Lrm3fUkSLxbu7gj%2FwYXUtsODpVa%2BLXi%2F1KMK67yxz3BH8m%2FG8dESldob6sRlVWeF7QHTisKPkjiJLaJUxE2EqAocMUYk6mzJzwoq36DU1HRuBZbBPFyj5cu8tG3FdJL0L4IxWvIRClF0O2Izv8nF8aYyOJRAPSSpAxMKP4ZBHWOVwjjUjy0M6n4llKpQvmJ9GHumiJT8kSpPdB48QdNwkZmmJaTPPrsiq4UJKBzJpypbaKMXO2Hay%2F%2B7n%2F4xO5wqOvBh68eig4DlLqtt5uwQZApwDoTKsgk4WK8h%2Fr4oLR5e70LLtdycFAylpNJgewLkTE5oQ124qMUsXn%2ByjmQ8bXtkWnwxVtKhJ%2BeJNE5djeVPAbPc%2FckisPjTadR%2BbIq4q85nx4v4iSeGC35Xx7EI1ishC6xl%2Bv%2BSOEPdROdBdY5%2FkPdkWQjbCPh9INhnO%2Bk5mhCF9aaN0LbUP8zRe9h%2FBm8Ud8PXUl1pZowoKfFwgY6pgFNlDgoE%2FU%2BPtrzLQ69tgIUBiwoGRiuDQvceYlitYPvXyoD%2FX4z5DiIS%2FmvmSkjW5FVlwTmO3DKVhNJiyTYg95XFHOj5ZpqKud28Sfxd%2FK32t8h2Fj6wEJAt58qLLdhk0pdkTt2RTeGzTlGGoMPg%2BkpcWsy501xEk9YtFYntguZtwrAz1Ry8BCNyU1GpjTWktrTCeLsIhEe0QxpevBJjIxZAme%2F94kn&X-Amz-Signature=6baaafbbe581d501d86ee909db25ff5c430d60dd00ad09f5908526b4285482cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
