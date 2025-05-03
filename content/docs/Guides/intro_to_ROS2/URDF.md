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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYBCAW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD6F3r%2BESwkwvwE4Sg0IodrvKRZMw%2BVHwK8d9XQOsanBAIhAMPcrSWnm%2Fmg1Jq4BchsRxr5QWRn9AbcXdGHxjAFmKBRKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDFnMsy2FGYKx340q3AOFtc6HFcAUVrEPVfbSMto0IbFsBjMHhx6AkghLAy3stbdJ3RX9vbyNHvCKzI4MHrkxVkiAdyS9sdf4hAFkxSOMSLjd97jCKJEsQByzE71Z1LMngpmLjBltHvnZb%2B%2FCIom879AppbapJs42to4oY9M1gFDZZ6CBaZq5JXMb6We5AlOK7tWwprgLzHp%2BD7us9k3uKItC09U%2FXB45RrvJB%2BIl28Ks97rCeyzlgwx898cHfz3148uxPwYZ2wGbnLuzUGa6kjgwPGUgAE0kSD%2BgLeCJsUDu9xNk2zWtKC26j1Ew8KYglMuqpKVQUWMShwALqLo%2FKGxRgzA2XTnc1UZDkYp%2BQF6yFj%2FuApBjT491MM%2Fcz4oHd97m5O5%2B7iCU5Hyg%2Bz%2FPow70NdZwvsQfBa%2Fb9iCZmzqSW0BAnkG%2BsrO1Da1AnfjiMeIlz36G6lfA2BA9P1zj4KzmpYgn9h%2BDP1VFYlUUVvmcHpJ0h9VUaHqmXGFdNKTHR6ZtSsBo%2FJ0aRxbLB7bbauyNDhtjE4gIOjxzX%2BjTvef7sdbDyYk6SAAhW0GW1qG4KiAl7gqb3AF7dMyKinZ0InkqzfinUZ8HbgBEgHiDflsUliy66IHVlyR4NTAnI4JqVsQKHStEc7UugTDuwdnABjqkAT0D29kO490rjT2e26MrshfHcPtk0DZn25jQ0go4CxCej2I9oIrL7RpjHGuo6C1mFYOKq8EIo0QGOqi8Fg1dbbyKhVBM3b5tNuF4cmMNvFPhmM9wTkNfgIzVI2d%2ByQ6rXsSKuRbQUZ2ia%2FqDyRr6lwfUBFCH2WRcMDyU%2F9nm6VgempZVUV%2B8ZWtgZmB70a%2FcaSckRyO%2Bba5swKDuU2jCHOzPtSN4&X-Amz-Signature=2df3af28963238a007b9137c723dd5091091563a09ac0e2e0d564cd38943190c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYBCAW4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD6F3r%2BESwkwvwE4Sg0IodrvKRZMw%2BVHwK8d9XQOsanBAIhAMPcrSWnm%2Fmg1Jq4BchsRxr5QWRn9AbcXdGHxjAFmKBRKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDFnMsy2FGYKx340q3AOFtc6HFcAUVrEPVfbSMto0IbFsBjMHhx6AkghLAy3stbdJ3RX9vbyNHvCKzI4MHrkxVkiAdyS9sdf4hAFkxSOMSLjd97jCKJEsQByzE71Z1LMngpmLjBltHvnZb%2B%2FCIom879AppbapJs42to4oY9M1gFDZZ6CBaZq5JXMb6We5AlOK7tWwprgLzHp%2BD7us9k3uKItC09U%2FXB45RrvJB%2BIl28Ks97rCeyzlgwx898cHfz3148uxPwYZ2wGbnLuzUGa6kjgwPGUgAE0kSD%2BgLeCJsUDu9xNk2zWtKC26j1Ew8KYglMuqpKVQUWMShwALqLo%2FKGxRgzA2XTnc1UZDkYp%2BQF6yFj%2FuApBjT491MM%2Fcz4oHd97m5O5%2B7iCU5Hyg%2Bz%2FPow70NdZwvsQfBa%2Fb9iCZmzqSW0BAnkG%2BsrO1Da1AnfjiMeIlz36G6lfA2BA9P1zj4KzmpYgn9h%2BDP1VFYlUUVvmcHpJ0h9VUaHqmXGFdNKTHR6ZtSsBo%2FJ0aRxbLB7bbauyNDhtjE4gIOjxzX%2BjTvef7sdbDyYk6SAAhW0GW1qG4KiAl7gqb3AF7dMyKinZ0InkqzfinUZ8HbgBEgHiDflsUliy66IHVlyR4NTAnI4JqVsQKHStEc7UugTDuwdnABjqkAT0D29kO490rjT2e26MrshfHcPtk0DZn25jQ0go4CxCej2I9oIrL7RpjHGuo6C1mFYOKq8EIo0QGOqi8Fg1dbbyKhVBM3b5tNuF4cmMNvFPhmM9wTkNfgIzVI2d%2ByQ6rXsSKuRbQUZ2ia%2FqDyRr6lwfUBFCH2WRcMDyU%2F9nm6VgempZVUV%2B8ZWtgZmB70a%2FcaSckRyO%2Bba5swKDuU2jCHOzPtSN4&X-Amz-Signature=4fc78a73c8736f1f4306651f1d993390780cb997c0ebaa7c02c907f7b7bf7c97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
