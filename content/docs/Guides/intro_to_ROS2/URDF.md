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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU2CGODN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHiS8llj3D0SS%2BIACDCW9qrSBESzM8uvUO%2Bzzgq3XfiHAiEAsxph9xCi1vXYTshtCOrORkicWqkfMYdsJnqhUeweWigq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFEBeO5ejG8mp9PBeyrcA1EGXsQBrO2q7gBwB6Vg%2BJvaMlGrGBP34gfWHek0mWbytB2JxrN8uReDRfrliuBTQvNCWRmUcUYIyxHU6o4%2FYU7pCTdeW8T65pyVX2DN7t3RbHqtEXg2KuwVVKG9FwJEt3Gs01QpOkX6zQn0LR5C0dA9PF8ZR%2Fc5dveOg%2Bp0M7glGX%2BM9VqeH14vLSACNIQNVt8kccWlmfH3xmylR0n7JM%2FiOvkOKL8JMPk9MptQQ5W%2FA%2BRfESdwd6Ny%2BTr2VD3InZ26kOHLjn5TuMWRXnF6V7aq42jwbVtIUtBb513sz%2BQhR8cfTU1Yrn9zHdHFG7tML%2F955HmqbPid8UAf1a9TyF1ALrach51hKRGveuXIzJys93Br5ES%2BxoNMx72SUvakVgBktXzOOFDsgD0j1ihbIyFLof56FyiaDjd4rofIRrt%2BpIFoE5owJnCDMUj%2FihMslp5t0iGFhVU6%2BCbnbpHXToCXjlS7uJpqXmRIHTHeFlBuNuXtxltoHBgovFsZk1GNq7xQqCH4tsTbOr8KO91iAQoDetBYgTLvvEQBkDORAph6qYCVMpxjzTdDAnwj7TxRGQBF9UOsn%2B0r8W6xzZCpMx2AikUTQMzPenDA7aFJ%2BAt5pv8QqZSY%2F8wfxQGNMIakmsQGOqUBKXzUol78pM7375IE5UnlkPOLyg0zDsU1dDxDNTlWoGJLJ6fyntCiahYdYN0sApm%2F%2F4Fzr6qcqaPKRNFvx8DHDEOGucjfqUkZJ7iPXcP87wx45yFvCpCP9uDEE8F6LBWr8S2y175OXMY%2BEoVXbyw16FB8YOd8RrUaGYDLzGCud6tdwYSFjzbOIGvSWxToK5ZT%2FYCYAIugXdXrkW0DaTF%2B4fMYS1hv&X-Amz-Signature=69078edee3504ca158d7ef345eba7d06f99191f5dc8cc56870c778fe35e438d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU2CGODN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHiS8llj3D0SS%2BIACDCW9qrSBESzM8uvUO%2Bzzgq3XfiHAiEAsxph9xCi1vXYTshtCOrORkicWqkfMYdsJnqhUeweWigq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFEBeO5ejG8mp9PBeyrcA1EGXsQBrO2q7gBwB6Vg%2BJvaMlGrGBP34gfWHek0mWbytB2JxrN8uReDRfrliuBTQvNCWRmUcUYIyxHU6o4%2FYU7pCTdeW8T65pyVX2DN7t3RbHqtEXg2KuwVVKG9FwJEt3Gs01QpOkX6zQn0LR5C0dA9PF8ZR%2Fc5dveOg%2Bp0M7glGX%2BM9VqeH14vLSACNIQNVt8kccWlmfH3xmylR0n7JM%2FiOvkOKL8JMPk9MptQQ5W%2FA%2BRfESdwd6Ny%2BTr2VD3InZ26kOHLjn5TuMWRXnF6V7aq42jwbVtIUtBb513sz%2BQhR8cfTU1Yrn9zHdHFG7tML%2F955HmqbPid8UAf1a9TyF1ALrach51hKRGveuXIzJys93Br5ES%2BxoNMx72SUvakVgBktXzOOFDsgD0j1ihbIyFLof56FyiaDjd4rofIRrt%2BpIFoE5owJnCDMUj%2FihMslp5t0iGFhVU6%2BCbnbpHXToCXjlS7uJpqXmRIHTHeFlBuNuXtxltoHBgovFsZk1GNq7xQqCH4tsTbOr8KO91iAQoDetBYgTLvvEQBkDORAph6qYCVMpxjzTdDAnwj7TxRGQBF9UOsn%2B0r8W6xzZCpMx2AikUTQMzPenDA7aFJ%2BAt5pv8QqZSY%2F8wfxQGNMIakmsQGOqUBKXzUol78pM7375IE5UnlkPOLyg0zDsU1dDxDNTlWoGJLJ6fyntCiahYdYN0sApm%2F%2F4Fzr6qcqaPKRNFvx8DHDEOGucjfqUkZJ7iPXcP87wx45yFvCpCP9uDEE8F6LBWr8S2y175OXMY%2BEoVXbyw16FB8YOd8RrUaGYDLzGCud6tdwYSFjzbOIGvSWxToK5ZT%2FYCYAIugXdXrkW0DaTF%2B4fMYS1hv&X-Amz-Signature=09448df22173e83175782960366f176e39ab5c7f54098db307f7bf1fd9095137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
