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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQKKH4F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIH%2FvfDTGsYkR4DhU4YtRLQNNF945Wc5G6K7fDqVF0HAwAiEAgJabg49C8ShKeCh5jf%2FX6qaEcKqFsfMEw9lbvJMbYP0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIM3RCnj8DMweLW2CrcAxS7oa81JOBHmwNhZm1vj7Qci3an9q%2Bf0mJvTENAEubdHB%2FmAylq7P4QH%2B28SRqchgX9l%2BL8zsn%2FPajMMd6WYdmdDYPLVaRRnsOuGuKiv10hi602okZbb5cwPixdT6a5dwOwrVfGn1UYPUbC9FQ8c7m1hFXCLfnR%2BSA5d%2BHxPb3INTti9shEHvUZ%2FqsFgPtfWfm%2F1%2FPHVs3cQvReqqRuJxDCyYR2YcAGYdYTHpPzGJ6QyXpo6gN6vyl5Vnx%2FL4mPneJGhf6tnwUdRupXFo%2B7hNTlPpCYqa0r%2FQPNoyRaEBDUbO5CXGo6ZD4YCwiZufLekxnyY%2Fl1WNwG0Jj2yOpz99YJ42OlY7CrDeOMVZvNZHqmOAyS9hI%2FEP9GEIvoPmjTu7ByZgJhzAp8oXHP9yD4CDwJspKpnn7BV%2BgiELV4NMPshjXhrAsbrRp%2Ft9MjOr6zVNzUzIBeDqJ0Zxz891sMbjFOub6Z1OONQmnJqfzxPBgt7vo1irxvMUoXnHqCScmrssCqlAFSkfdyLhEKG6wAAGC8vvzzoDQxqmEZmvUearwb7Lv6mdLlRkuYHMIMA6Sobhzg501AXs7zmiQ5rnwFZh1EzlC9ec3VTZnzjIHxlEbGJdOoXAkb%2FjRkrouZMKepsb8GOqUBVx%2BGnk6ELlm%2F9nY6QrdAX45p3viV2LIyOiIaYkLPw%2BT529NiKVYnuP7ybRTCgs7Y6XJVCuF%2F02JrEvpsWwpotGx9FVSq679tnMMPT%2FNrusRKeD19W%2FBvmxbOUjh9XOJWET1vuIyRkhJxVaRdEPk%2BD4wh1OLDO47agBNUJgls9q%2F338hpLUruXcy6m%2FvIkNHRnZqyYCVdwYdcMb7XiarfQYUFZcne&X-Amz-Signature=b9f40d9a790b67ad6e942c88b4b1c1fdd9181503630bec112c4861f1d1e58b83&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQKKH4F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIH%2FvfDTGsYkR4DhU4YtRLQNNF945Wc5G6K7fDqVF0HAwAiEAgJabg49C8ShKeCh5jf%2FX6qaEcKqFsfMEw9lbvJMbYP0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIM3RCnj8DMweLW2CrcAxS7oa81JOBHmwNhZm1vj7Qci3an9q%2Bf0mJvTENAEubdHB%2FmAylq7P4QH%2B28SRqchgX9l%2BL8zsn%2FPajMMd6WYdmdDYPLVaRRnsOuGuKiv10hi602okZbb5cwPixdT6a5dwOwrVfGn1UYPUbC9FQ8c7m1hFXCLfnR%2BSA5d%2BHxPb3INTti9shEHvUZ%2FqsFgPtfWfm%2F1%2FPHVs3cQvReqqRuJxDCyYR2YcAGYdYTHpPzGJ6QyXpo6gN6vyl5Vnx%2FL4mPneJGhf6tnwUdRupXFo%2B7hNTlPpCYqa0r%2FQPNoyRaEBDUbO5CXGo6ZD4YCwiZufLekxnyY%2Fl1WNwG0Jj2yOpz99YJ42OlY7CrDeOMVZvNZHqmOAyS9hI%2FEP9GEIvoPmjTu7ByZgJhzAp8oXHP9yD4CDwJspKpnn7BV%2BgiELV4NMPshjXhrAsbrRp%2Ft9MjOr6zVNzUzIBeDqJ0Zxz891sMbjFOub6Z1OONQmnJqfzxPBgt7vo1irxvMUoXnHqCScmrssCqlAFSkfdyLhEKG6wAAGC8vvzzoDQxqmEZmvUearwb7Lv6mdLlRkuYHMIMA6Sobhzg501AXs7zmiQ5rnwFZh1EzlC9ec3VTZnzjIHxlEbGJdOoXAkb%2FjRkrouZMKepsb8GOqUBVx%2BGnk6ELlm%2F9nY6QrdAX45p3viV2LIyOiIaYkLPw%2BT529NiKVYnuP7ybRTCgs7Y6XJVCuF%2F02JrEvpsWwpotGx9FVSq679tnMMPT%2FNrusRKeD19W%2FBvmxbOUjh9XOJWET1vuIyRkhJxVaRdEPk%2BD4wh1OLDO47agBNUJgls9q%2F338hpLUruXcy6m%2FvIkNHRnZqyYCVdwYdcMb7XiarfQYUFZcne&X-Amz-Signature=f11f340e61cc61796dd3ed8b20a458388d7d895842e2b07cb0856bcece290465&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
