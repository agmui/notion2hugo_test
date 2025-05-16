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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXRKBEY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxH9mJoa%2BVFqFPM1wyAZU92JwrXZtFhLsJKW9EefEqgIgX0bwG6Pil1dpuy9Z8VWipa%2FMxoZdiTXNj4xwjRI5ROQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKlRLBDsGOkNOZUpwircA6naeGGDDHV0r0hY4Eo16M61T6UiylKvuawecxE1Wy%2BuRhAjM2VIaGr6jCXbGx756SbmIrNgRkoOU1cVU7uyg7s0LWC%2BZ%2F1Cu%2FAH3fr9n0NBadmFGqN0z%2BWyB%2FnWjlLKsIap9w0DuEhda3FD85H8a5nH0kHEYEZ4iByGmzL0qeqQpa6QehWrpZBOCUh7sDdwxDpyw%2FKOjW2j%2BzWDbul%2BBE941Y68wfm9RTUc3hECmHB9xIip1FsoYarKUbqNxX60ckIJMWDHL1HXZ26ny7PGDX96DNL0hdmNBwUKPU%2BwXV%2BlmYqHxTH%2BpBgjWrUgqhGnnhIXLRVjR3Xi7GB97Z%2BNsEbDXlRB8NVNj228lojtKim9HG4mlUAzD20nM2TCPq%2BB3OYnWKaT5wxqZ3kDFqjANYt07X74rcSDeYPfF3FiZZIUIdM2PUX0TzMCYcITkyetoIV0Yn38tbLcJhtMwO0HLiSjy0wHifmoNVB0MVk09jdNZX%2BsNu15qaW9tCxYY7LAWVvNHgtjGhZ54stiBjqMnHZXyyB1rV1jT3u8i2PEbhczpbEonvmYi5khTfMYjuw%2Bqh2X5EOPuiOKLkqkFfyH6ozLkJA0ZBj6PvG1uXtT90%2Fra49zYPDTr%2F5i0LyUMNWnnMEGOqUBbB1uXVMfGdHPFDaN5Lcfd%2BuQQIHbI64eGDLq2mGkxcg5kvXTv0Xkdy67FBZwF8ql%2BI0iy1dxVWIPCWh1JgvGavPlnqeY0LF0Vdaa0EFWDicgHRjIvsoo7eiNusxJ7bVlnC5ompbXytlCCSzL1Kb3%2FGSM0j5rHNhh9tn%2F6XG90mZ%2Fgxthegjeq2xUE5bIVtqCzAa0GiIjnz9d9XzApbVs7dJwC35q&X-Amz-Signature=2321ea7c18df8512f3fa2d166b98f6bd95701f34316ed578833687b41cb72bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXRKBEY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPxH9mJoa%2BVFqFPM1wyAZU92JwrXZtFhLsJKW9EefEqgIgX0bwG6Pil1dpuy9Z8VWipa%2FMxoZdiTXNj4xwjRI5ROQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKlRLBDsGOkNOZUpwircA6naeGGDDHV0r0hY4Eo16M61T6UiylKvuawecxE1Wy%2BuRhAjM2VIaGr6jCXbGx756SbmIrNgRkoOU1cVU7uyg7s0LWC%2BZ%2F1Cu%2FAH3fr9n0NBadmFGqN0z%2BWyB%2FnWjlLKsIap9w0DuEhda3FD85H8a5nH0kHEYEZ4iByGmzL0qeqQpa6QehWrpZBOCUh7sDdwxDpyw%2FKOjW2j%2BzWDbul%2BBE941Y68wfm9RTUc3hECmHB9xIip1FsoYarKUbqNxX60ckIJMWDHL1HXZ26ny7PGDX96DNL0hdmNBwUKPU%2BwXV%2BlmYqHxTH%2BpBgjWrUgqhGnnhIXLRVjR3Xi7GB97Z%2BNsEbDXlRB8NVNj228lojtKim9HG4mlUAzD20nM2TCPq%2BB3OYnWKaT5wxqZ3kDFqjANYt07X74rcSDeYPfF3FiZZIUIdM2PUX0TzMCYcITkyetoIV0Yn38tbLcJhtMwO0HLiSjy0wHifmoNVB0MVk09jdNZX%2BsNu15qaW9tCxYY7LAWVvNHgtjGhZ54stiBjqMnHZXyyB1rV1jT3u8i2PEbhczpbEonvmYi5khTfMYjuw%2Bqh2X5EOPuiOKLkqkFfyH6ozLkJA0ZBj6PvG1uXtT90%2Fra49zYPDTr%2F5i0LyUMNWnnMEGOqUBbB1uXVMfGdHPFDaN5Lcfd%2BuQQIHbI64eGDLq2mGkxcg5kvXTv0Xkdy67FBZwF8ql%2BI0iy1dxVWIPCWh1JgvGavPlnqeY0LF0Vdaa0EFWDicgHRjIvsoo7eiNusxJ7bVlnC5ompbXytlCCSzL1Kb3%2FGSM0j5rHNhh9tn%2F6XG90mZ%2Fgxthegjeq2xUE5bIVtqCzAa0GiIjnz9d9XzApbVs7dJwC35q&X-Amz-Signature=a3aa1708a0ad8c72435995876081581fcee6a1c5492d371f46f3589691757991&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
