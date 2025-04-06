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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2URAQX3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaXyMA9ba4panrWroQaLJWli3dsxlM%2BHcy7qb%2BZByQ0AIhAPoqqlfY%2FrWNXD03PJPe9gaVVIx6fRIISchXvAw6Uc%2FJKv8DCDwQABoMNjM3NDIzMTgzODA1IgxR661l74ZXPeWCW4oq3ANbLIWwl%2FnhDP5FRLRHUJ8Qwd6Ms9yHlABR3tKMk%2Fd8d9Oa4Qi8CiUv%2FY5OPA99SrOAPMXTUDcOgJAD4qz5UZ0n5QVBDbL%2FJWcObUYRfEQGwbfu20TOYy%2BsxC545UJshhwNtxoMDcavhZkihqr%2FmeTPOypsukM5fzzXeWyG1aHsYg9XTnx0YXjTtK1%2Ft4l3xg8Ao2MT47R%2FBaYtq%2BtKZfNudeLbh%2FR9MNnBUPxStdm0hesqdtUPuTw4gzZaoCg4ZjuX7Il1Cw9ulDXjrxbIB9NBENK%2BfmxPXEa45hQ4aOW9HkFO5moqDIG3%2Bj8V%2FF5NJi5xVbyR2d3UDZA808geOEHlIU6KVlfEuGkNLISL1Rw0fIZPAnACUsH4vyK05cdKLWhTeL3ITccxIxWFvPmgjxndkIKLwWRclQhZVacF5q0W9%2BsNOir6zUuQmZypm1gIQnfBd5AWVkwKGHVg2HvqvV7kKQLlfYr99l43FC9BGf3GcY3cCO7axN91dhSw2ZvYun8to7vdkfTCe3oXb80m4D92xTeW4UWtQFAKVMplIenP%2Fyb5jVROPmE4ktuvTCf9IkpxDY3%2FGBNH00M5EcNJY3icnJ2SDVb%2Fio8Oe1dSNftfDKKP0hIWHNbSy0X3ljCk3se%2FBjqkASnh9us8RmDcDa8uWNDqufI81SowxH%2FlybIi3geJVo22fNd6WijBFyUyIoYJqaZWUtqlnIBJdVDp%2FDK45KojwrxdbeWljexGVP%2FJQw2MaR6%2F7GJa4GnudEyYcC1f%2F0PZ32DChhAJeetzGqOIQEJiCzdBHU%2BK14iYC1Z6qvFc9pDekhG7SQqLMUVaxAWmm4XJGKW1ZBB7Ik1q0NsT4ENVNVIHikyR&X-Amz-Signature=ef3ad66a714515f0ff271b0fadc160c1a0c5ca255d904c979079543e79555b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2URAQX3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaXyMA9ba4panrWroQaLJWli3dsxlM%2BHcy7qb%2BZByQ0AIhAPoqqlfY%2FrWNXD03PJPe9gaVVIx6fRIISchXvAw6Uc%2FJKv8DCDwQABoMNjM3NDIzMTgzODA1IgxR661l74ZXPeWCW4oq3ANbLIWwl%2FnhDP5FRLRHUJ8Qwd6Ms9yHlABR3tKMk%2Fd8d9Oa4Qi8CiUv%2FY5OPA99SrOAPMXTUDcOgJAD4qz5UZ0n5QVBDbL%2FJWcObUYRfEQGwbfu20TOYy%2BsxC545UJshhwNtxoMDcavhZkihqr%2FmeTPOypsukM5fzzXeWyG1aHsYg9XTnx0YXjTtK1%2Ft4l3xg8Ao2MT47R%2FBaYtq%2BtKZfNudeLbh%2FR9MNnBUPxStdm0hesqdtUPuTw4gzZaoCg4ZjuX7Il1Cw9ulDXjrxbIB9NBENK%2BfmxPXEa45hQ4aOW9HkFO5moqDIG3%2Bj8V%2FF5NJi5xVbyR2d3UDZA808geOEHlIU6KVlfEuGkNLISL1Rw0fIZPAnACUsH4vyK05cdKLWhTeL3ITccxIxWFvPmgjxndkIKLwWRclQhZVacF5q0W9%2BsNOir6zUuQmZypm1gIQnfBd5AWVkwKGHVg2HvqvV7kKQLlfYr99l43FC9BGf3GcY3cCO7axN91dhSw2ZvYun8to7vdkfTCe3oXb80m4D92xTeW4UWtQFAKVMplIenP%2Fyb5jVROPmE4ktuvTCf9IkpxDY3%2FGBNH00M5EcNJY3icnJ2SDVb%2Fio8Oe1dSNftfDKKP0hIWHNbSy0X3ljCk3se%2FBjqkASnh9us8RmDcDa8uWNDqufI81SowxH%2FlybIi3geJVo22fNd6WijBFyUyIoYJqaZWUtqlnIBJdVDp%2FDK45KojwrxdbeWljexGVP%2FJQw2MaR6%2F7GJa4GnudEyYcC1f%2F0PZ32DChhAJeetzGqOIQEJiCzdBHU%2BK14iYC1Z6qvFc9pDekhG7SQqLMUVaxAWmm4XJGKW1ZBB7Ik1q0NsT4ENVNVIHikyR&X-Amz-Signature=8ac8e394955f7aa825456d773bc6b6a48deb9edb8af54ed0cf20626cd0f5e793&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
