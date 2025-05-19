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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYTPXOC4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEbBrFFQF5Xf22nQ%2BOPjOeuRMo9vSLIAqRdQxx1MkUtAiAniopNw%2FMDmFsSivH5OqXJsIWXcEOrlPG0%2F2PbMpO7RSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgwxOkdhOHWIKqihKtwDlRjG%2FLWXmurXaM671SqUyRViWQH%2F5LeYnmzQZt1NKPa%2BEzv6mq%2FGl2RHJkuCgX6o71%2FA9NxjKzNyJgenKuqfdzTnO6uAhkZOIdGtnfbZqZT0YIPEHLB5k9SVNeks60V4McqcKqBhnEESX4swRVt82yufsLVUlDysDEQjIR9vZJrm%2Fb7QzkJwNNe6I8NMa%2BuxYyR6jW6%2Brp3RSMQXt%2FvtuhNWtVqYfLt%2FYdGPajAtLQVKZp03j0ma8tWGAFhzCOO4KJQKnSV14zxMSKWi2J1G4UrJPrld%2F0dDZOXPuv87cX9Oy6zTKFL0Fy6HlZbnOVjC7npZvubaLDExv4E25yx%2FGwQiL0IXRf9wy4QobTEQwUeBtxeAyNG932aTS2%2F472pCypceSiRW%2BQFVZcunQ7OeVHuwwVBF%2F8aB%2BsdX3Q%2B0x0HID0OQVtwsHwcBan7mEw7A0NsnJe2QV1kJzL%2BduEc1o2nF3FNgiXwEmLCyDW3eLUt1vi%2BGpziGa6f0CmkUlOjXQmXa6nANWCCpLaqzOOUyqmdByB%2BCcJfZ1xYOrNkbKalHUlmO4dJSzpBzKLK%2FZ389LCE2i30xcfI1wpe0VGAgyVJ%2B9mqNqEcRqMgtDYLuk65hpe0XO2Wz1WxFpLIwqN2qwQY6pgFGx3U7MCE%2FPtuh8vh0zHdN4eT%2BF4lSUXums9sQ3OYG1fEqCFIK4LMxJi6%2BVoUNYGzUkD%2FuyCvCrMTiYFPqFf36aO6LwUsrP%2BHAqPf%2BlsewoGK8abbrQZbuv22UDGTeMoCyBHzKkF2xAbBWvaII0PamZHtvUFPoyn02BUSgml77x2bKjrNMnEQKQbHNfMo2A54OFjt1xXaZO%2F3rF8s6VjdbcXAHRjlr&X-Amz-Signature=61fe8b47d1578d8495a5749d16e9265c34c7c54daa8eb4b62373711e3df38525&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYTPXOC4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEbBrFFQF5Xf22nQ%2BOPjOeuRMo9vSLIAqRdQxx1MkUtAiAniopNw%2FMDmFsSivH5OqXJsIWXcEOrlPG0%2F2PbMpO7RSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgwxOkdhOHWIKqihKtwDlRjG%2FLWXmurXaM671SqUyRViWQH%2F5LeYnmzQZt1NKPa%2BEzv6mq%2FGl2RHJkuCgX6o71%2FA9NxjKzNyJgenKuqfdzTnO6uAhkZOIdGtnfbZqZT0YIPEHLB5k9SVNeks60V4McqcKqBhnEESX4swRVt82yufsLVUlDysDEQjIR9vZJrm%2Fb7QzkJwNNe6I8NMa%2BuxYyR6jW6%2Brp3RSMQXt%2FvtuhNWtVqYfLt%2FYdGPajAtLQVKZp03j0ma8tWGAFhzCOO4KJQKnSV14zxMSKWi2J1G4UrJPrld%2F0dDZOXPuv87cX9Oy6zTKFL0Fy6HlZbnOVjC7npZvubaLDExv4E25yx%2FGwQiL0IXRf9wy4QobTEQwUeBtxeAyNG932aTS2%2F472pCypceSiRW%2BQFVZcunQ7OeVHuwwVBF%2F8aB%2BsdX3Q%2B0x0HID0OQVtwsHwcBan7mEw7A0NsnJe2QV1kJzL%2BduEc1o2nF3FNgiXwEmLCyDW3eLUt1vi%2BGpziGa6f0CmkUlOjXQmXa6nANWCCpLaqzOOUyqmdByB%2BCcJfZ1xYOrNkbKalHUlmO4dJSzpBzKLK%2FZ389LCE2i30xcfI1wpe0VGAgyVJ%2B9mqNqEcRqMgtDYLuk65hpe0XO2Wz1WxFpLIwqN2qwQY6pgFGx3U7MCE%2FPtuh8vh0zHdN4eT%2BF4lSUXums9sQ3OYG1fEqCFIK4LMxJi6%2BVoUNYGzUkD%2FuyCvCrMTiYFPqFf36aO6LwUsrP%2BHAqPf%2BlsewoGK8abbrQZbuv22UDGTeMoCyBHzKkF2xAbBWvaII0PamZHtvUFPoyn02BUSgml77x2bKjrNMnEQKQbHNfMo2A54OFjt1xXaZO%2F3rF8s6VjdbcXAHRjlr&X-Amz-Signature=9b4c4ada0fe79858937a24c1cfbf903dfff2743249f23effc677c09bbd4756ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
