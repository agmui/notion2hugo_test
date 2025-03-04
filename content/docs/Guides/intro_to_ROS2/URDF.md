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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPT2K6C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4g47DrhCT8O6haRHc91phhilGELZp5EyUXL6UBCuBYwIhAMaxLtHFxrFdrFyrC1v3c6uPhMdONLU%2BxW76Ei4gErX7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0d9mzx6sgeYoeRvoq3AN7%2FjCAqyNHdctGNlctRlaHJEP3gPnkzJOTClvHXj3sqmURxLk4WrAUPbIgWk%2Bar5JjXDZ%2FMc2q51bOrvuCmS6QD069bDVptUc8M%2FHlTUpCrke7YTjWuPtur99%2FfX9YqcRA%2BFV3D5JXkHkC45H5mX0kgLvGNngaV58oG%2BTA0eHmI5ziAV8X37klEisBIq3HsA%2Fu5wSoq2c%2F%2FqU1wD7RnM7TLYL%2BniWdyiJQrJtW5zhFXf4PWMOLOCBTLnLKeFEtKgnbb4XfxSeMmeAI3a8jQ82hmnnYbetw1w4y6ivlwTMaPKYzHHXhPZE6%2BAh8RTHYcv%2Fb1%2Br11eKjyCBNdk1tkezWas1fArEz2QHHQqxpHNOpD7kJjnikZjjjijwc6ym5sploy5veISAn6VYVzv%2FEhwnyp6jazv7t6246EBBX7NZDGimWE4g3epHFCUkpMlvnnCS0S0Zh%2Bs3KiRUTO%2FXjwJEwBgnXNsAUvEiM7pWME5QPm8BrieFg%2BX2wfRcITPHCsvRLEYWVmKDTDjOyqdww0gYpICRk2uUZM%2F8FmaFDEiYos08dn%2FQisPsF208tSz65qZhf9q0%2Fs4BaUBNF1FCDgs2hJk6BvAgt4rQMgv2Xa%2BZCL7c%2BI%2Foz2ZdFh4qHYDC1xZu%2BBjqkAU9lHlHCTTsHQFiREml6Y7bQxFEvzWxa3kpXaCgbKQA%2FawO1sjsSvl%2FodgL5rpqNSB%2B5rjR0OTxbM0WMZb91FAkCNLtMQiWumCWrJDSfL5SDN3MuFydb9Sr751t6%2BB89WEVRE4eglRHMkV05xXAP5BWiDNBS84B%2Fl4wXgKaFc9vEXCKtcBkPTTiM4SH%2B9tmrX18lW6%2FLuzgyVUInVSKb5%2F0Upk2F&X-Amz-Signature=3dc812c54c871bc53d0230bbdfb0b0abc3e280109974bdc6502ebd979c02af61&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPT2K6C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4g47DrhCT8O6haRHc91phhilGELZp5EyUXL6UBCuBYwIhAMaxLtHFxrFdrFyrC1v3c6uPhMdONLU%2BxW76Ei4gErX7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0d9mzx6sgeYoeRvoq3AN7%2FjCAqyNHdctGNlctRlaHJEP3gPnkzJOTClvHXj3sqmURxLk4WrAUPbIgWk%2Bar5JjXDZ%2FMc2q51bOrvuCmS6QD069bDVptUc8M%2FHlTUpCrke7YTjWuPtur99%2FfX9YqcRA%2BFV3D5JXkHkC45H5mX0kgLvGNngaV58oG%2BTA0eHmI5ziAV8X37klEisBIq3HsA%2Fu5wSoq2c%2F%2FqU1wD7RnM7TLYL%2BniWdyiJQrJtW5zhFXf4PWMOLOCBTLnLKeFEtKgnbb4XfxSeMmeAI3a8jQ82hmnnYbetw1w4y6ivlwTMaPKYzHHXhPZE6%2BAh8RTHYcv%2Fb1%2Br11eKjyCBNdk1tkezWas1fArEz2QHHQqxpHNOpD7kJjnikZjjjijwc6ym5sploy5veISAn6VYVzv%2FEhwnyp6jazv7t6246EBBX7NZDGimWE4g3epHFCUkpMlvnnCS0S0Zh%2Bs3KiRUTO%2FXjwJEwBgnXNsAUvEiM7pWME5QPm8BrieFg%2BX2wfRcITPHCsvRLEYWVmKDTDjOyqdww0gYpICRk2uUZM%2F8FmaFDEiYos08dn%2FQisPsF208tSz65qZhf9q0%2Fs4BaUBNF1FCDgs2hJk6BvAgt4rQMgv2Xa%2BZCL7c%2BI%2Foz2ZdFh4qHYDC1xZu%2BBjqkAU9lHlHCTTsHQFiREml6Y7bQxFEvzWxa3kpXaCgbKQA%2FawO1sjsSvl%2FodgL5rpqNSB%2B5rjR0OTxbM0WMZb91FAkCNLtMQiWumCWrJDSfL5SDN3MuFydb9Sr751t6%2BB89WEVRE4eglRHMkV05xXAP5BWiDNBS84B%2Fl4wXgKaFc9vEXCKtcBkPTTiM4SH%2B9tmrX18lW6%2FLuzgyVUInVSKb5%2F0Upk2F&X-Amz-Signature=2d80d17a6b2cfa327837279d0392bafe3744e702dc46edf85a21210b7f939374&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
