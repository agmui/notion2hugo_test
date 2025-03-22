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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBIE5Y3S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAhGiiyeYqcbKskXajkfdwZPKA%2FRUXgR86xONmBfR1f7AiEAi7ZlYxRMYFI%2FoZT66kc3BjgN36WZSIHRi7pL6CX8K30qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlKmYAuEaW0UoLwVyrcA58hox8tNrXlbXjWA6SFy7lI5hzzolaArNVy%2Bk7YqphXzLiWoe4YrdXq26izmLNaT1PfAljHoA7MnCoLu9nEQ4ENAvYOzOP92Zbnc%2BYvLA3JzWHvPS0KtU8go%2FORT5yqgM5%2BTIdYw6N0yuohlOYwsCGCO3ft00C%2Fx2Sr4Wp%2B4jVaFagvhlQviBIwUprdtZ3lhREzRLVbfZy9oHdxNsrCPVGWMVdxOk9v9UCLfwiUTJsRvxSnrqUmKjaL97uxNGOg2r6N0NUnbxhR4U%2B51nXpu%2Bs6q4N%2FTqDAMPcsc%2FQLPK1lbs9cyF7V1cFBZAtOaA848rJYFbNi3xVA79k8Ur81jAMkxedLVq5QX8MSS2JRZFnhOaSAyAvCp0KMw5%2BsEzHB0n%2B3T92OLdiEUWExbrjvtoIY7TsxrzixfGifd7HJFuiTMFueOcJL5%2BIyz4hvyk%2FhBzHkX1E7R2XmVY65kF0uXJ2qTEooyfSsUfxiQQNPjj8YAhjVtgOWpYXnAzNui3z51XeCbdcdOxvKggbtbf25r3VKLvacKznbGBT%2Fu9IYfJ524lr5Ag37H%2FrIzXKX0FbR5mYw8uOuln0%2FTF8AODU8%2Fiokemm3GU8DLFpdVUpMfio45yqdZjKAAUBUDfnJMOXs%2Bb4GOqUBSrJ4UlgMRgbJMnbaLrRNfn75XmVShEQ4NM76StEadURRKWgY1R3z%2F9vYtxcHDxKkQ9OmTwgvX1i8ijwC2EU8tvh22ezikPy9RnSrH52x1CPSSucygPnbtJ7WUD4Qsk7dEmRUwFyvhHRFh5Jf87F0y6MaXx%2FOVtHXnHfPbDa7HancfEuFdnkDsUjCXxBTr3rKDFFo38BPoCg4aBcL2saozsRmbz8K&X-Amz-Signature=4b91e2c7e8b063375ec55e9690376d34daed6259f8259cb3c59f4790469c2f41&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBIE5Y3S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAhGiiyeYqcbKskXajkfdwZPKA%2FRUXgR86xONmBfR1f7AiEAi7ZlYxRMYFI%2FoZT66kc3BjgN36WZSIHRi7pL6CX8K30qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlKmYAuEaW0UoLwVyrcA58hox8tNrXlbXjWA6SFy7lI5hzzolaArNVy%2Bk7YqphXzLiWoe4YrdXq26izmLNaT1PfAljHoA7MnCoLu9nEQ4ENAvYOzOP92Zbnc%2BYvLA3JzWHvPS0KtU8go%2FORT5yqgM5%2BTIdYw6N0yuohlOYwsCGCO3ft00C%2Fx2Sr4Wp%2B4jVaFagvhlQviBIwUprdtZ3lhREzRLVbfZy9oHdxNsrCPVGWMVdxOk9v9UCLfwiUTJsRvxSnrqUmKjaL97uxNGOg2r6N0NUnbxhR4U%2B51nXpu%2Bs6q4N%2FTqDAMPcsc%2FQLPK1lbs9cyF7V1cFBZAtOaA848rJYFbNi3xVA79k8Ur81jAMkxedLVq5QX8MSS2JRZFnhOaSAyAvCp0KMw5%2BsEzHB0n%2B3T92OLdiEUWExbrjvtoIY7TsxrzixfGifd7HJFuiTMFueOcJL5%2BIyz4hvyk%2FhBzHkX1E7R2XmVY65kF0uXJ2qTEooyfSsUfxiQQNPjj8YAhjVtgOWpYXnAzNui3z51XeCbdcdOxvKggbtbf25r3VKLvacKznbGBT%2Fu9IYfJ524lr5Ag37H%2FrIzXKX0FbR5mYw8uOuln0%2FTF8AODU8%2Fiokemm3GU8DLFpdVUpMfio45yqdZjKAAUBUDfnJMOXs%2Bb4GOqUBSrJ4UlgMRgbJMnbaLrRNfn75XmVShEQ4NM76StEadURRKWgY1R3z%2F9vYtxcHDxKkQ9OmTwgvX1i8ijwC2EU8tvh22ezikPy9RnSrH52x1CPSSucygPnbtJ7WUD4Qsk7dEmRUwFyvhHRFh5Jf87F0y6MaXx%2FOVtHXnHfPbDa7HancfEuFdnkDsUjCXxBTr3rKDFFo38BPoCg4aBcL2saozsRmbz8K&X-Amz-Signature=e0fa823a254396672a3eba50b82856d3c6559a2777d6a7ea2a1cced2af0677b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
