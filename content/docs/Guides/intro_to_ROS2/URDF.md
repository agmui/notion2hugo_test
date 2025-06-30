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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZQ7XO7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrqNq%2F99Xs3yMi7j2yqsGVj%2Fce%2F%2F4G0MD%2BRU2umhSElQIhALbnB30jGhvpU3SS7U25phKz21EGlNdxSbhjrQEyYoCUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPGldZK60q2jZ53gEq3AOvpjOgMz6JzZGUFLydjjiMgkeEqTFXaxtXd04ZPI3mH%2F5wftaWEXVKAPm35Wz11%2B1TzBAH6VUL6%2B6faH%2BLH5ZQMoFi17FOJmnsfIQdfrCg0NCW%2B6Kmg%2BZigKK3%2BpRrG72ZDLavjaVZkrGqe6K%2FggQwhcC2X1SRFIU5acH0h7OJCji9151J%2BseeYh9t98%2FUIzP9%2FYIda2npDwdqwY53Z9o9XTFq6AXrb6RgvE22bmWYWunoCsV%2BMnANsZU5FzfHHzH7nLG6L1dpR3X1ATvwSSMOz4l5o3cLjDA%2FHGMesCFyDDvqzLrLcLevoG45uN1aTV8l99Y3m2lCWFl%2Bzv2AJ1KAs9IvLD7i%2FmWtH70TJydTuoirexZJqM6InHPgNQn44bJWYjm6e1IboiZSOUH6kiwqLeWR3rBHelowDjKPZPc1OtKp95qDmcM%2FYLYYDongIxj%2FCnVb8iYdomgUwQ7q2LSdvTSqAyZw1m%2BLrOuks0vp4AmXWsS860jCdovfq9ALKk%2BnmLtyqmEw650jKJg25Jq9kUZihpVPo2AsoDwyXxLFcilfVMYmuoJUd%2FLsjAjw6w9o5%2FIvOMyu1Z5k3fFp3OJpC76wQNyK7RT1lVaCx%2BQ4oVwNtr1350JUNprk9DDo84jDBjqkAYdCGT6zPpWgFaYCNFn55Qx97j7o4n69E3uubAGVa3irfNHE7yg4YVHJXhtjWmOWz%2FhYzMfy2qrjPlUFHhHkLdH83beCPqVpGBmLC7uOufsAODKxDhXDdwGtknbQcYIXycLiMEdEamqrf8G9%2FL6299JvNcxJuG1FFEt1SOtfeg7fC%2Foj76EXVwXCW6kF%2FL3KgAS6%2BZk%2FvPV2qSyIeHsTgSB0I6I4&X-Amz-Signature=af07152cb3a108f67584ad7cc7f054428b48d29e54b794107d93775440ca5441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZQ7XO7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrqNq%2F99Xs3yMi7j2yqsGVj%2Fce%2F%2F4G0MD%2BRU2umhSElQIhALbnB30jGhvpU3SS7U25phKz21EGlNdxSbhjrQEyYoCUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPGldZK60q2jZ53gEq3AOvpjOgMz6JzZGUFLydjjiMgkeEqTFXaxtXd04ZPI3mH%2F5wftaWEXVKAPm35Wz11%2B1TzBAH6VUL6%2B6faH%2BLH5ZQMoFi17FOJmnsfIQdfrCg0NCW%2B6Kmg%2BZigKK3%2BpRrG72ZDLavjaVZkrGqe6K%2FggQwhcC2X1SRFIU5acH0h7OJCji9151J%2BseeYh9t98%2FUIzP9%2FYIda2npDwdqwY53Z9o9XTFq6AXrb6RgvE22bmWYWunoCsV%2BMnANsZU5FzfHHzH7nLG6L1dpR3X1ATvwSSMOz4l5o3cLjDA%2FHGMesCFyDDvqzLrLcLevoG45uN1aTV8l99Y3m2lCWFl%2Bzv2AJ1KAs9IvLD7i%2FmWtH70TJydTuoirexZJqM6InHPgNQn44bJWYjm6e1IboiZSOUH6kiwqLeWR3rBHelowDjKPZPc1OtKp95qDmcM%2FYLYYDongIxj%2FCnVb8iYdomgUwQ7q2LSdvTSqAyZw1m%2BLrOuks0vp4AmXWsS860jCdovfq9ALKk%2BnmLtyqmEw650jKJg25Jq9kUZihpVPo2AsoDwyXxLFcilfVMYmuoJUd%2FLsjAjw6w9o5%2FIvOMyu1Z5k3fFp3OJpC76wQNyK7RT1lVaCx%2BQ4oVwNtr1350JUNprk9DDo84jDBjqkAYdCGT6zPpWgFaYCNFn55Qx97j7o4n69E3uubAGVa3irfNHE7yg4YVHJXhtjWmOWz%2FhYzMfy2qrjPlUFHhHkLdH83beCPqVpGBmLC7uOufsAODKxDhXDdwGtknbQcYIXycLiMEdEamqrf8G9%2FL6299JvNcxJuG1FFEt1SOtfeg7fC%2Foj76EXVwXCW6kF%2FL3KgAS6%2BZk%2FvPV2qSyIeHsTgSB0I6I4&X-Amz-Signature=4fcc1de1a4aa2444f538c0fad3d09fc622311897902424fb0d9b5f43d412986d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
