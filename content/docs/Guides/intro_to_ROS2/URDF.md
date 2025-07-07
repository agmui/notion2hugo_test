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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBHVY7W%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCT0vPGg89zAokg4IwByuUkWwBTs81AsGWjgRFg1cPRXgIhANJBjHoUU9ohqmc%2FjKYC%2BmvdBWHvmUA6y4o%2F5gDbWZ4rKv8DCG4QABoMNjM3NDIzMTgzODA1IgxrE49XNd7B9sJofUsq3AOl%2FIgHS24kW9J0r4d4C5rZcvMOMMR7VjfUL1ZAbhsSpQDde7Bm0Ngk98UGzju9u%2F93Mop%2FPNet7KeaSPs0Tha5wtNu%2BY%2B2h7cWrrkVtQ7pjk00midf701AmNREtVvI9DSRSOB%2F1yEIY8VOubO8k7J8LSY%2FzH1JIkVIPgs2rdddKfnEN%2BzhuJb8Bap%2F18PYgFQ02M9WMagxXAov1oHhOpW0rZSWdCJ6MOsdIdmAENBM1pYPYyEHe%2F6or9jjWV3BaYYcxuWRkBV2HLleejIgLJQVOYNbvjZWGRNfA1KFmXaawEu2Gj6n%2BKjzxFkFSKTMm7VMJ66DzG7a5ByncTp6iW1mNinQVBBH%2Be45gkH8yS6Ov7V%2FkdaLIUaWbMZKpR9bsd0yO58zvT6WcDgmHQLAoMJFrfw7%2FjTXlJQCLmYm3Q%2BKXEJ8wjqDppdELwF2ZyPsfbTfSzhYc2qoik%2F8Clco7Tdboz6Rr2McCjKqfGtjX5xtZkUmAchRgd1k1Yy0%2Bz1UD6EPLeUUAE9SwboTHSZ6rQwrvISQ0ykVqs1kxfkVwXM1N526bbAyRQnuvSWGJDZBzbxV1h6%2FTNdaS8xvLoiUldHALzbnv7HQJKpZ224fONKuWtgnxtg9IndAej4HdjCRsq3DBjqkAdoMM9Vm2sTSLqxA12KDvkfUK2OvfVZkwCRA578mkokKAVStgazlakfC9mTcHkuTcxZEXmhW8MKrlVGnQZnn8cYMdJ2qpRRYzpIyrfuy%2Bcs1Js0pscpcL1KkY%2B4FLPqkEcQ6nYkq%2F3Qc7FOWlCoBRVn2iDY0HF%2FpHmDLLkicU3COluVv9ZcmpgVX8unX%2BItVzSlufeAetxRVYcBpQfdUdLskXRoz&X-Amz-Signature=14152fdc691c15d4f29dc6990cca4d6b0efa0c472ba5c90ebaccd87a0e503ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBHVY7W%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCT0vPGg89zAokg4IwByuUkWwBTs81AsGWjgRFg1cPRXgIhANJBjHoUU9ohqmc%2FjKYC%2BmvdBWHvmUA6y4o%2F5gDbWZ4rKv8DCG4QABoMNjM3NDIzMTgzODA1IgxrE49XNd7B9sJofUsq3AOl%2FIgHS24kW9J0r4d4C5rZcvMOMMR7VjfUL1ZAbhsSpQDde7Bm0Ngk98UGzju9u%2F93Mop%2FPNet7KeaSPs0Tha5wtNu%2BY%2B2h7cWrrkVtQ7pjk00midf701AmNREtVvI9DSRSOB%2F1yEIY8VOubO8k7J8LSY%2FzH1JIkVIPgs2rdddKfnEN%2BzhuJb8Bap%2F18PYgFQ02M9WMagxXAov1oHhOpW0rZSWdCJ6MOsdIdmAENBM1pYPYyEHe%2F6or9jjWV3BaYYcxuWRkBV2HLleejIgLJQVOYNbvjZWGRNfA1KFmXaawEu2Gj6n%2BKjzxFkFSKTMm7VMJ66DzG7a5ByncTp6iW1mNinQVBBH%2Be45gkH8yS6Ov7V%2FkdaLIUaWbMZKpR9bsd0yO58zvT6WcDgmHQLAoMJFrfw7%2FjTXlJQCLmYm3Q%2BKXEJ8wjqDppdELwF2ZyPsfbTfSzhYc2qoik%2F8Clco7Tdboz6Rr2McCjKqfGtjX5xtZkUmAchRgd1k1Yy0%2Bz1UD6EPLeUUAE9SwboTHSZ6rQwrvISQ0ykVqs1kxfkVwXM1N526bbAyRQnuvSWGJDZBzbxV1h6%2FTNdaS8xvLoiUldHALzbnv7HQJKpZ224fONKuWtgnxtg9IndAej4HdjCRsq3DBjqkAdoMM9Vm2sTSLqxA12KDvkfUK2OvfVZkwCRA578mkokKAVStgazlakfC9mTcHkuTcxZEXmhW8MKrlVGnQZnn8cYMdJ2qpRRYzpIyrfuy%2Bcs1Js0pscpcL1KkY%2B4FLPqkEcQ6nYkq%2F3Qc7FOWlCoBRVn2iDY0HF%2FpHmDLLkicU3COluVv9ZcmpgVX8unX%2BItVzSlufeAetxRVYcBpQfdUdLskXRoz&X-Amz-Signature=25973cfd8fe37a82b05d4a02fd139d0644288974d137ec2aa77bb0adfaec6a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
