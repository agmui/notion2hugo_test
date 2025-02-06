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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6MZXGTK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIFqeu5M600tUZz%2FpVtT3J9MR7OMByeYi0iLuFArNByn%2BAiBZ08Uv4IiH3Gl0nD02eQ1gbJPvyzuOz0loTqTHlX61oCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq913aJIUlZnkijYiKtwD7VwAw%2FE2biZImhr521aV09SHhYtMuzz6QOfaMgJmTedjf94Rb5jCX2PbOzn1pkGnWgcyt9il46O7YOzJozie9nVOj1kqzpQlkj8e6JHiNsgxhaRMM%2B8uq0gB17B6yHlo1DUnr67Df0G9g7inkRuf7w%2B2PLD7gHeOoUcSqgJCQqpvZKh%2FGFXaTh3%2FwYF6gg1xxTqktJYpb1gXMqu4Ri8Vn5n1WrOaReJJGeSQ4TZaeNL7sAE0L%2F2huCJhR4%2BKIMZYwkIRUaNt83cvwnmXcj8txcg%2BCOt5T9LhueyZDTMeZmJoAwaTSYkIsKGJVVLo%2Fy9gOYVL%2BVzBVb5AG4tGf2EOnriwUUjuH3fU3jE3qUVAeVsJ1Tws016VsE3yx3PxapuL65EcxKFh%2FSdeFXRNKbW0PSy1vzv3jeK18r3ZO379o6AP4E6H8IK2%2B28a%2BpXna%2BYqQhMUkUJ1aAvac5BMUVm5qo3dNw2BO7eN5An74y7h%2F2NsUAQuIh0csFPkyJDxkiOA5C6BI0XyZ3go0aEnBGLUhA1pkwPxHCeOu5iUEvY8SJkO%2BUyQcoVwLrjJQjT2G3BxdnO%2BJsMUWrpXs47UTUyNiKpdkOvOhZrA4BAIF%2FoB5SrDLA%2BScM1nBf3QBfIwrvqSvQY6pgGhmoHDmpFIbuDmuQj0qw1dit3gjA0egOsKbjFUKsKsLElrqbvMNM1IjmnmXcBoOxZQGCnXfM9F6ULbCx6pdp7iyZMAWsgl9ocysTVWR%2BHZQPP6MS%2Fr%2BJSt9giReuhA%2FISwXmKGgNm%2F20M4lpHoo5pu4fDHZrblM1Qq3KVZqu6s5c%2F067yXvdHJJnmmt%2BBdzrUV0IgZ5AOX9fCxIT%2BO8EhrovPtxC%2FK&X-Amz-Signature=9faac4f5c90e7f10638b94235becebf976eaac82b51624e18e3cd0204fa62b30&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6MZXGTK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIFqeu5M600tUZz%2FpVtT3J9MR7OMByeYi0iLuFArNByn%2BAiBZ08Uv4IiH3Gl0nD02eQ1gbJPvyzuOz0loTqTHlX61oCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMq913aJIUlZnkijYiKtwD7VwAw%2FE2biZImhr521aV09SHhYtMuzz6QOfaMgJmTedjf94Rb5jCX2PbOzn1pkGnWgcyt9il46O7YOzJozie9nVOj1kqzpQlkj8e6JHiNsgxhaRMM%2B8uq0gB17B6yHlo1DUnr67Df0G9g7inkRuf7w%2B2PLD7gHeOoUcSqgJCQqpvZKh%2FGFXaTh3%2FwYF6gg1xxTqktJYpb1gXMqu4Ri8Vn5n1WrOaReJJGeSQ4TZaeNL7sAE0L%2F2huCJhR4%2BKIMZYwkIRUaNt83cvwnmXcj8txcg%2BCOt5T9LhueyZDTMeZmJoAwaTSYkIsKGJVVLo%2Fy9gOYVL%2BVzBVb5AG4tGf2EOnriwUUjuH3fU3jE3qUVAeVsJ1Tws016VsE3yx3PxapuL65EcxKFh%2FSdeFXRNKbW0PSy1vzv3jeK18r3ZO379o6AP4E6H8IK2%2B28a%2BpXna%2BYqQhMUkUJ1aAvac5BMUVm5qo3dNw2BO7eN5An74y7h%2F2NsUAQuIh0csFPkyJDxkiOA5C6BI0XyZ3go0aEnBGLUhA1pkwPxHCeOu5iUEvY8SJkO%2BUyQcoVwLrjJQjT2G3BxdnO%2BJsMUWrpXs47UTUyNiKpdkOvOhZrA4BAIF%2FoB5SrDLA%2BScM1nBf3QBfIwrvqSvQY6pgGhmoHDmpFIbuDmuQj0qw1dit3gjA0egOsKbjFUKsKsLElrqbvMNM1IjmnmXcBoOxZQGCnXfM9F6ULbCx6pdp7iyZMAWsgl9ocysTVWR%2BHZQPP6MS%2Fr%2BJSt9giReuhA%2FISwXmKGgNm%2F20M4lpHoo5pu4fDHZrblM1Qq3KVZqu6s5c%2F067yXvdHJJnmmt%2BBdzrUV0IgZ5AOX9fCxIT%2BO8EhrovPtxC%2FK&X-Amz-Signature=2bb3b09f3364574b76015a42acb90540cbd0c51a35d15526b84c1ed29c71c773&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
