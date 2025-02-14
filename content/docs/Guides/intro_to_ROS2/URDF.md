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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CFKHWQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcefYT82nQqE8ttKY7KovGIyCSJRGvFyIQ8atpEj%2BVuAiEAiZjQykGZwPSlSi87JAMpZHmMVEocH26DAxl4u0uQYWsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGQmoOi3OkK1Zja4vircA10%2BXf1SxDH0hS%2BCiwjVjg7MK6Kn0mKwMSHATEm7RGPVOOewXJJDr652UEm1sI5X52%2BIf3uHczqk5ZTj0Fvt1TJ2MHF3nlWlPxvLxwVYsU75LfO70UMJKLCTpc8kxWiemB%2FvMxO1sK1Y0X6mspNxMmV95QlDxC0FlBP%2BoPdpiwPJaHf9V6TlJ7J%2FJ8U8C81Y54hHt%2Bh29E0x%2Bou%2BHBHp8Qy%2FPlJ7YsMDBQNvSMGjY9TYd9BcYpkWF%2FlwL03p4QUCQFv82vkJcaUB81CGs2nIHzDRB%2Bdy88DzxIE9FqQ4mwDyPYB1wkvZqEnwNuYQfERJd1CXGQpudmAew9qwAYtlWX1HHAKVfLsAHdsflBfLRC3CoSEioiLM6FDYZrjHoCZswagoPEfxfOl%2FZdsdkmaJKjf6vPw2vsUb9N917JRrWrGyfzLRqmVzgYHEkmGc3jyG0SR0Vi%2BJL5bhmb1Ys2HHxntFHztzOKESgJ%2B9N2zjpfnV2%2FSeN2mIiblJh9pwUNHt0SQsWk%2BVCAtX9l7m1tJl1of20Jez16A0uz7zzZpfiohfRjt0dGEoJwjfSn4D3hTtck2bwEMHJ88lvqlozEfbAJDavFb2yD4jeWLknjGayxNCkwLN2BmEbt%2FDO%2BsqMLGpur0GOqUB%2F95KpsvOfTFJ%2FFHDv4%2FOAGf5SFEY9RhobbXO5PNLexiElYQ9NPCTxZuB7qGmkOGa8AxBjfGUabNElRWcHsjSBdpxFugNejRXFRH86V0ex06SmPxPzjWAYdzBvVE7wB2WrkNpJL%2FvluvEee%2BqklxF10tLuLGt9Hewlm1hHHdoJ9tt0wG0kJ%2FDqpe%2ByjgRLxJ%2FC0yhqK8zDReZ8rf6tQB1Mq8KdZZA&X-Amz-Signature=68f1bd74236af97903db39f11ec88b0759c85a29bef9a83e074d32714a0ea365&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CFKHWQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcefYT82nQqE8ttKY7KovGIyCSJRGvFyIQ8atpEj%2BVuAiEAiZjQykGZwPSlSi87JAMpZHmMVEocH26DAxl4u0uQYWsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGQmoOi3OkK1Zja4vircA10%2BXf1SxDH0hS%2BCiwjVjg7MK6Kn0mKwMSHATEm7RGPVOOewXJJDr652UEm1sI5X52%2BIf3uHczqk5ZTj0Fvt1TJ2MHF3nlWlPxvLxwVYsU75LfO70UMJKLCTpc8kxWiemB%2FvMxO1sK1Y0X6mspNxMmV95QlDxC0FlBP%2BoPdpiwPJaHf9V6TlJ7J%2FJ8U8C81Y54hHt%2Bh29E0x%2Bou%2BHBHp8Qy%2FPlJ7YsMDBQNvSMGjY9TYd9BcYpkWF%2FlwL03p4QUCQFv82vkJcaUB81CGs2nIHzDRB%2Bdy88DzxIE9FqQ4mwDyPYB1wkvZqEnwNuYQfERJd1CXGQpudmAew9qwAYtlWX1HHAKVfLsAHdsflBfLRC3CoSEioiLM6FDYZrjHoCZswagoPEfxfOl%2FZdsdkmaJKjf6vPw2vsUb9N917JRrWrGyfzLRqmVzgYHEkmGc3jyG0SR0Vi%2BJL5bhmb1Ys2HHxntFHztzOKESgJ%2B9N2zjpfnV2%2FSeN2mIiblJh9pwUNHt0SQsWk%2BVCAtX9l7m1tJl1of20Jez16A0uz7zzZpfiohfRjt0dGEoJwjfSn4D3hTtck2bwEMHJ88lvqlozEfbAJDavFb2yD4jeWLknjGayxNCkwLN2BmEbt%2FDO%2BsqMLGpur0GOqUB%2F95KpsvOfTFJ%2FFHDv4%2FOAGf5SFEY9RhobbXO5PNLexiElYQ9NPCTxZuB7qGmkOGa8AxBjfGUabNElRWcHsjSBdpxFugNejRXFRH86V0ex06SmPxPzjWAYdzBvVE7wB2WrkNpJL%2FvluvEee%2BqklxF10tLuLGt9Hewlm1hHHdoJ9tt0wG0kJ%2FDqpe%2ByjgRLxJ%2FC0yhqK8zDReZ8rf6tQB1Mq8KdZZA&X-Amz-Signature=024fb79adaf00daa752426583c78137f2b3e3c6d3bb79f0de30c4001da8bbf14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
