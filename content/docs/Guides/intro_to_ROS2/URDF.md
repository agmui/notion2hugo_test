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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFK7JTW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQChg1onOXJr30u0rc67TsPufAv55TJFrwb5%2FpdgKoV4pAIgHCsOcbLZ5J9GGwtp2JHbsR0ytAKDgZUdNf5ZSf4ukLcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM0AdzjCkaID1x9OSyrcAxq0A%2BH3fUyR4CwDzjCAQbGv%2FTbexfrhfxpz1DGkclJgcJfiFX3OTVGRw2UurShYSLw4iu7LTPE2%2FpPALOadhNpL5rMEKrOreL9eXvv%2FY6NuKQ9bTH4uuog%2FVnZ%2FXRIx1sXizHOyYlVJVZRIO7OGvNH7hPh7OCkN3i5JIoXn1PbVQyC5%2BLHLLKfp75%2Fo8NtEraXV05w0r3o6HmDj%2F4qtnh6W%2FKcOJgjadoy4j%2BjtccGIjS9PjorBWIlP9VrIe6OVCSrIfxsdsOYreFjGLU8%2F329sPs76N0fyDBUEo6uwR%2BbFz0HY91YMlx8ZdxuVwx9Dwq4kPixiM3XTfSAspAiwyOuGZ%2BJGSAbN2S4nYFzmV62KyAKR8Y5OmGOjOC85T7B1TIOi%2F2dmzMnzMj4FQhwfVa3Jezo113MP68Vl4RLGl%2FkhyrJzEoj7O5aGj339Kay3YEmo1gxQVJMuzdrSRAKRQ4mjeULEwvUd%2FEtVBSRK%2BR4Jl2lqPJT54xjD4fAgKMgq8GiLZ31R4bLRmyXGAth%2FjemVNsK7LSHK8sRicgN0TRdGz4jr9ZDPddCowAskCpumDycBXWypM4R%2Fnc0gU370wDnbDgMigJC5o2lG%2B4PsQb7KgeNVHCkXw%2Bi9h6AbMKb5mMQGOqUBlYL09t2GXwf7pOaiuNWUhhtQ%2By6gXU%2BnhS%2B%2FW6sGXiu88YyEG33Y7RyN2JqGIPl8X8nbpwkq0IgPU6sDmT3fFqtWYHpwZ%2F3Eif4M4rt60O3doa0x5e2TW3y4ypWXkBsvjs5CBvkkSr4S%2FJJ6WihDie%2BOGwVTYiK5D95Y47xzvJ%2Fkt1CbH78gRZH5PF0ZAJw0QKnxxn%2BkNcgDM2%2BSEUTHRSPwMF%2Fd&X-Amz-Signature=8bbd48d2d06e5e8f8426e77e2d0ba699fd9fd36e748564c661efad52c3304bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFK7JTW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQChg1onOXJr30u0rc67TsPufAv55TJFrwb5%2FpdgKoV4pAIgHCsOcbLZ5J9GGwtp2JHbsR0ytAKDgZUdNf5ZSf4ukLcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM0AdzjCkaID1x9OSyrcAxq0A%2BH3fUyR4CwDzjCAQbGv%2FTbexfrhfxpz1DGkclJgcJfiFX3OTVGRw2UurShYSLw4iu7LTPE2%2FpPALOadhNpL5rMEKrOreL9eXvv%2FY6NuKQ9bTH4uuog%2FVnZ%2FXRIx1sXizHOyYlVJVZRIO7OGvNH7hPh7OCkN3i5JIoXn1PbVQyC5%2BLHLLKfp75%2Fo8NtEraXV05w0r3o6HmDj%2F4qtnh6W%2FKcOJgjadoy4j%2BjtccGIjS9PjorBWIlP9VrIe6OVCSrIfxsdsOYreFjGLU8%2F329sPs76N0fyDBUEo6uwR%2BbFz0HY91YMlx8ZdxuVwx9Dwq4kPixiM3XTfSAspAiwyOuGZ%2BJGSAbN2S4nYFzmV62KyAKR8Y5OmGOjOC85T7B1TIOi%2F2dmzMnzMj4FQhwfVa3Jezo113MP68Vl4RLGl%2FkhyrJzEoj7O5aGj339Kay3YEmo1gxQVJMuzdrSRAKRQ4mjeULEwvUd%2FEtVBSRK%2BR4Jl2lqPJT54xjD4fAgKMgq8GiLZ31R4bLRmyXGAth%2FjemVNsK7LSHK8sRicgN0TRdGz4jr9ZDPddCowAskCpumDycBXWypM4R%2Fnc0gU370wDnbDgMigJC5o2lG%2B4PsQb7KgeNVHCkXw%2Bi9h6AbMKb5mMQGOqUBlYL09t2GXwf7pOaiuNWUhhtQ%2By6gXU%2BnhS%2B%2FW6sGXiu88YyEG33Y7RyN2JqGIPl8X8nbpwkq0IgPU6sDmT3fFqtWYHpwZ%2F3Eif4M4rt60O3doa0x5e2TW3y4ypWXkBsvjs5CBvkkSr4S%2FJJ6WihDie%2BOGwVTYiK5D95Y47xzvJ%2Fkt1CbH78gRZH5PF0ZAJw0QKnxxn%2BkNcgDM2%2BSEUTHRSPwMF%2Fd&X-Amz-Signature=3f2b7a8f4358fb8e5a9fc07e28e66f210dd4cd7190603c425851ed60bdffa1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
