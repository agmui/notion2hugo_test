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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTD3BVQC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzSqtiF6lsAWiy%2Fc7o9Xma2YpFBHNcheka4UwXNh4T7AiB2H3dtOOnw%2B4FTdyiIBnzAGlQsxqAY75B36rz3W42vJCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMoaqFNHj5HWNWx1zHKtwDmqTx6HbnJovZ19S%2B7tD83RWsLNT1FM6PEDTaGA4MdPTBrI4osQIN4qKRdw4e659kwUBhO5X7CXf80KIPrbVeotOoONoUQ4jP182JlfUOXtxc4PdOV0IpJXoRfsSnpMl%2B43SyUXIeG3gIgjgX1xYKWrttdHVTS%2BnMA%2BQI%2Bl0XJf4s3aRzL50jdKGE2%2Bji3CFlHuA%2BAFIQQ9B1bWpFXi53tsol0O%2BWE%2B0uPiDXvpoiNg5u%2BopdVZOFRFQKj%2FrgPJCjdR0AUDv9gLQ8K1dKvElsm43V%2BaSPvlmlIkYhIGjT6Zoi8ByQB%2FrrL74YUjLlTAHrlpNmBedmjCzru4iqgqhWCzPDzGlCq1saEVIw%2BOGIHtgTgmC4ZUythMCMZoskZpvZvhMJHA4glBStsMA%2BEl6ItICJMsVLN%2BBW%2FzE3KN0y7JfFUMGnrireX%2B5ru9VsqiQTC1vb2ku4RBSjsCSEcTJrKzDu9gjGPBQKOvWgazc4BKf7vTz2fBLimHFv9xluHlVFm8XXUyH0sj0qqfP%2FwVh3LuzazTZ6xc%2B%2B%2Bdy72dixPxmvrRmY9Igt41%2B2oIk7oPZMEBjjMUeya0czyfDy7w7NKqfM4oG8HX0kVZzZ%2B5RuFGzAS8RyRx3lph5DQRUw3KPQvwY6pgHblrugWJkg4WYJLbNhyxKiQP%2F7KNUCs2S8in6MeQFdN7IL7Swv892640Cj7kVMWVRpb6Z7uo0rwpZNM6A3oviAkhRk3p6WMyvAxuQaOcmw9YU9eEXpmH1tElClsP9f27%2BdMN29r1d2uDT%2FIGWlXESsEQAl9NJ9Q3vIcHl%2FbGp1uBnIiKUFMzfOb40dygOyhdQlUsC6L7K7JZ9Ljd6Jtk4UvpwoDFRm&X-Amz-Signature=c03aafd22e4ab227e271abf960e2f6e8bd8e072133eae5c4140bb32d7f00b35b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTD3BVQC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzSqtiF6lsAWiy%2Fc7o9Xma2YpFBHNcheka4UwXNh4T7AiB2H3dtOOnw%2B4FTdyiIBnzAGlQsxqAY75B36rz3W42vJCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMoaqFNHj5HWNWx1zHKtwDmqTx6HbnJovZ19S%2B7tD83RWsLNT1FM6PEDTaGA4MdPTBrI4osQIN4qKRdw4e659kwUBhO5X7CXf80KIPrbVeotOoONoUQ4jP182JlfUOXtxc4PdOV0IpJXoRfsSnpMl%2B43SyUXIeG3gIgjgX1xYKWrttdHVTS%2BnMA%2BQI%2Bl0XJf4s3aRzL50jdKGE2%2Bji3CFlHuA%2BAFIQQ9B1bWpFXi53tsol0O%2BWE%2B0uPiDXvpoiNg5u%2BopdVZOFRFQKj%2FrgPJCjdR0AUDv9gLQ8K1dKvElsm43V%2BaSPvlmlIkYhIGjT6Zoi8ByQB%2FrrL74YUjLlTAHrlpNmBedmjCzru4iqgqhWCzPDzGlCq1saEVIw%2BOGIHtgTgmC4ZUythMCMZoskZpvZvhMJHA4glBStsMA%2BEl6ItICJMsVLN%2BBW%2FzE3KN0y7JfFUMGnrireX%2B5ru9VsqiQTC1vb2ku4RBSjsCSEcTJrKzDu9gjGPBQKOvWgazc4BKf7vTz2fBLimHFv9xluHlVFm8XXUyH0sj0qqfP%2FwVh3LuzazTZ6xc%2B%2B%2Bdy72dixPxmvrRmY9Igt41%2B2oIk7oPZMEBjjMUeya0czyfDy7w7NKqfM4oG8HX0kVZzZ%2B5RuFGzAS8RyRx3lph5DQRUw3KPQvwY6pgHblrugWJkg4WYJLbNhyxKiQP%2F7KNUCs2S8in6MeQFdN7IL7Swv892640Cj7kVMWVRpb6Z7uo0rwpZNM6A3oviAkhRk3p6WMyvAxuQaOcmw9YU9eEXpmH1tElClsP9f27%2BdMN29r1d2uDT%2FIGWlXESsEQAl9NJ9Q3vIcHl%2FbGp1uBnIiKUFMzfOb40dygOyhdQlUsC6L7K7JZ9Ljd6Jtk4UvpwoDFRm&X-Amz-Signature=c580a0d6bdfc2967e21a42b5333014822992d489721eaac62476cf44f1eddb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
