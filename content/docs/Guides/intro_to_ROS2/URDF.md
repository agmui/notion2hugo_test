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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOA7EJGW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBhNb5rQ74GIrv8I1moDsYFuXpfp14LriYjy%2F4%2BX%2BvnQIgL53aMgXBi%2B3y59sYacXtDH5NPXqacT2grTQH1f2e9QEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBVaqO%2BHPSYfccuYhircA65cvD9pJBLKAhg8fYF0VC6gYpiZqJctUrCnAvqW4kbVE6pMKCVbwo37hBEjqdbcU1sPAgLwNwPkfI8IskVwgOsME2EhJh%2BltAN9mDaA1IerRvFOZ4ifc6ITXKxt72UcgpgmYu11eAEQPu7NNCROCBbY5WTWhLlxSyCx%2FbT5T6IEQ0kpvVaDsTYH6gooyNsdcLy4VgssnAZ%2BghFWpHAsv0Q0x95J2Gf9CI6Ukn%2Bfpq2vv41tkuaAnSZgLZUm4QQECByjJ2gUoVNCoNk%2FepJgDMX7BF4rajn0y52rbl%2BcPhXEjAqVm7S1EbGKSQtfwcV7Ef%2Fv8U%2BcFhSmMOUvz9H95wBiL3hkiC72iqntLDd5%2FBXztUZ%2F%2Fyz8ZomNKSNWNdbb1rVFuQNtw3KVMK1OdWRvVjk6i%2FhLsVv0o7TzwidPozyFZzsLWMcFYkB9OZ77yG9gEa7y6Vvikl1b%2BEXFzlf%2FETN%2Bkt8XWnuI99JGhgJRxxeyPE%2FckOvBatpk7XZQeC81fdiGBm6XaqNTQHeGlVWy5n2jk6vzNi1Ya7clkgtTvDwCptDLvmB9NsIz%2Fd29gOFuQMCYZyKRhfG5YSumCLTqpS2gIQMriclI5xBtoPDd0jBvNYHBb%2BH65GyW%2BgD%2FMIf6icAGOqUBfwHk1F24IgjbvVDy%2F%2FahhBideXecd5n8G7%2FiswNhROZ%2B6p4mc2d6VrXTKzw9pS7wUgij7fJaWqJIZXc2sbov0FMbbZjY7%2F6t6rdIiJECfo6PcbiVFrS1ijI3i7l%2B0grFnJCMvZ2lhMLvilOdlWjZ0m7bKEpgCN1dPxjliok6VxP2uxW8IeVl853PexTZ%2Bsg5ahBQ8oLiKQEbxJYZubbNo13uRZmL&X-Amz-Signature=175a54ca5c487365fc244a0d1a330d49e8753a1d0d037188261fa0d0567f639a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOA7EJGW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBhNb5rQ74GIrv8I1moDsYFuXpfp14LriYjy%2F4%2BX%2BvnQIgL53aMgXBi%2B3y59sYacXtDH5NPXqacT2grTQH1f2e9QEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBVaqO%2BHPSYfccuYhircA65cvD9pJBLKAhg8fYF0VC6gYpiZqJctUrCnAvqW4kbVE6pMKCVbwo37hBEjqdbcU1sPAgLwNwPkfI8IskVwgOsME2EhJh%2BltAN9mDaA1IerRvFOZ4ifc6ITXKxt72UcgpgmYu11eAEQPu7NNCROCBbY5WTWhLlxSyCx%2FbT5T6IEQ0kpvVaDsTYH6gooyNsdcLy4VgssnAZ%2BghFWpHAsv0Q0x95J2Gf9CI6Ukn%2Bfpq2vv41tkuaAnSZgLZUm4QQECByjJ2gUoVNCoNk%2FepJgDMX7BF4rajn0y52rbl%2BcPhXEjAqVm7S1EbGKSQtfwcV7Ef%2Fv8U%2BcFhSmMOUvz9H95wBiL3hkiC72iqntLDd5%2FBXztUZ%2F%2Fyz8ZomNKSNWNdbb1rVFuQNtw3KVMK1OdWRvVjk6i%2FhLsVv0o7TzwidPozyFZzsLWMcFYkB9OZ77yG9gEa7y6Vvikl1b%2BEXFzlf%2FETN%2Bkt8XWnuI99JGhgJRxxeyPE%2FckOvBatpk7XZQeC81fdiGBm6XaqNTQHeGlVWy5n2jk6vzNi1Ya7clkgtTvDwCptDLvmB9NsIz%2Fd29gOFuQMCYZyKRhfG5YSumCLTqpS2gIQMriclI5xBtoPDd0jBvNYHBb%2BH65GyW%2BgD%2FMIf6icAGOqUBfwHk1F24IgjbvVDy%2F%2FahhBideXecd5n8G7%2FiswNhROZ%2B6p4mc2d6VrXTKzw9pS7wUgij7fJaWqJIZXc2sbov0FMbbZjY7%2F6t6rdIiJECfo6PcbiVFrS1ijI3i7l%2B0grFnJCMvZ2lhMLvilOdlWjZ0m7bKEpgCN1dPxjliok6VxP2uxW8IeVl853PexTZ%2Bsg5ahBQ8oLiKQEbxJYZubbNo13uRZmL&X-Amz-Signature=48987a60306e1db452f35adf68d9e8cc13664fcf3b74392ddb70442ae2d41d64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
