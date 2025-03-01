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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGVUP77%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCtTMo13G7rC%2BYyfJWldd8Rt%2B0Dg0N0C1zQidVl6VQiXAIhALOpJwyZ4pWsxPM5YjfOCxLfey1TqJITWyWtPmQ7auhNKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkFpOKZNDe8lP5tYMq3APWL5TsbnRrJPj%2BSXBmLZ86AU3K%2B1G%2FO0DLaDOyt4kCEnZCzkh1FQFNT95ROq6urj4nH%2BPfmRwFLvKe7nhabMmlZM2mxh%2FjNu%2FTGmI9qWTzagbxWTXq8hiRWwJ6U8qSTyw4S5uD2H5abCZsN5H7S%2FvvLHEqNNxxfT6uAPo0K4zGNbC7amkAENyDitU6h57kzOcbXAHIPi%2FXQsWnETlvNmLZXBXygRQOpnWb92GxnuHysA%2FQ1YH9dgeDm%2FipzgX1%2BRF3WyeDpcddEggP3eao9udlqdxVf%2B91gey7t6G3K3zI%2FT3dgeQOA8ZK8pCqczJK1hXpK3lEYwyPtyhdJaET89VqXF4OnGPOd8V%2Bwi%2BiePv4SbB4aIwr8GZo7Mjq%2BE7Pvh2p5jS4TyRi3CsS0NWto9m7K2LI754cq0sh1V6nBvGwgkaaUZ7CcR%2B%2FT12FlfOSH0gqwHI3jfByAbSRe%2BOeDjv9Qc3nyy1hyhhEYmpdkZ%2F%2BxuUpFagPWevZz2ixLPFhMukMF8E8n45gH%2BR5t6vTWDKNqfzUxf6zI5O%2BqlQ29%2FfzghRLTBlBZKOpxXYLFlr%2F%2FdKYC1i4LZtOFHePzHwbDy2GGUkIddhi6l8CO3o6VQUhSjPkXfSUBv0zxd4FCTD2uYu%2BBjqkAfnsBjuMi%2BOU8VOAszMfHK5vO0ehCICNqx%2Bg%2BJjELKzSyrBstY09j50u8%2BDJjZgyS5VIxF8FlCRK9Kj6gdJ5%2FWRno9tyUSnhZ4L%2B7%2FtltvpVxvTub14jxpbnOWngcncRYtj27t9DHVwSKrNSc2m%2F%2Fk0f%2FTuloFmM4UtBcQvQJiBpfcIL0P7NQNUU%2BseBP5gn43%2BtBoYQf6ndENnXMo%2Bv7YehJDzX&X-Amz-Signature=88da0a7b001cb8f90c711d8d3d7a17e123af0b25c0a15d716e72c471fe434f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGVUP77%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCtTMo13G7rC%2BYyfJWldd8Rt%2B0Dg0N0C1zQidVl6VQiXAIhALOpJwyZ4pWsxPM5YjfOCxLfey1TqJITWyWtPmQ7auhNKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkFpOKZNDe8lP5tYMq3APWL5TsbnRrJPj%2BSXBmLZ86AU3K%2B1G%2FO0DLaDOyt4kCEnZCzkh1FQFNT95ROq6urj4nH%2BPfmRwFLvKe7nhabMmlZM2mxh%2FjNu%2FTGmI9qWTzagbxWTXq8hiRWwJ6U8qSTyw4S5uD2H5abCZsN5H7S%2FvvLHEqNNxxfT6uAPo0K4zGNbC7amkAENyDitU6h57kzOcbXAHIPi%2FXQsWnETlvNmLZXBXygRQOpnWb92GxnuHysA%2FQ1YH9dgeDm%2FipzgX1%2BRF3WyeDpcddEggP3eao9udlqdxVf%2B91gey7t6G3K3zI%2FT3dgeQOA8ZK8pCqczJK1hXpK3lEYwyPtyhdJaET89VqXF4OnGPOd8V%2Bwi%2BiePv4SbB4aIwr8GZo7Mjq%2BE7Pvh2p5jS4TyRi3CsS0NWto9m7K2LI754cq0sh1V6nBvGwgkaaUZ7CcR%2B%2FT12FlfOSH0gqwHI3jfByAbSRe%2BOeDjv9Qc3nyy1hyhhEYmpdkZ%2F%2BxuUpFagPWevZz2ixLPFhMukMF8E8n45gH%2BR5t6vTWDKNqfzUxf6zI5O%2BqlQ29%2FfzghRLTBlBZKOpxXYLFlr%2F%2FdKYC1i4LZtOFHePzHwbDy2GGUkIddhi6l8CO3o6VQUhSjPkXfSUBv0zxd4FCTD2uYu%2BBjqkAfnsBjuMi%2BOU8VOAszMfHK5vO0ehCICNqx%2Bg%2BJjELKzSyrBstY09j50u8%2BDJjZgyS5VIxF8FlCRK9Kj6gdJ5%2FWRno9tyUSnhZ4L%2B7%2FtltvpVxvTub14jxpbnOWngcncRYtj27t9DHVwSKrNSc2m%2F%2Fk0f%2FTuloFmM4UtBcQvQJiBpfcIL0P7NQNUU%2BseBP5gn43%2BtBoYQf6ndENnXMo%2Bv7YehJDzX&X-Amz-Signature=b70ccc5394d4041b42de23449ce883c7e91efecd3d9172c94612e2e39ec01d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
