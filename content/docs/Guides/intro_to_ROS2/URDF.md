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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PTD5JV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCe6HDw%2FrIja3WSm1%2B3SsXt2fXEt4E62xaRN1mz%2FKIehgIhAI66Tr%2BljIXBtOCR4rVEsP90SeiR%2Fhjq%2FsWeuEOreGZTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Iel3iNg1GUhob8wq3AMtD0X4WhTy9YVsBtA0TPSGKlG%2FHTemirI48S8IkDRdyOGuHcem4fCZ7fxe43GDjhHVZ0kNJwbBBooNINgfySTb00dXdAwdnAjcowXGeQEuRPyvqv4cnQ%2FB5eBNWa2ui%2FCDOuN7rf9iycTsw4evDm2D0xBHb5vSwNZ9a59fSToW3UAJQk72vXheBwuVdJgm18oTcb7WwIgq6NHs5eQLCTE0XZPHOq%2BqhI9MT2kAcrZLTfPpCxspYBUQ6EmCrSsKO%2BIbiZWmg2hL9%2Bcz%2FvBH10NbVHCyH2YAB1BbJDu60vu0AsliI0F2PspgIzTNvYNB0jtTKw5YVi7zrzkYY26OyotxUs34dow1Jfp2NW3FaJbtW8DQISf%2Fhy5SVE6NJY2HnlXF7WFkKkeU2aPQOYSGbDCuZPLXSHAgQ90523EScJmjgTlex9EKdP75zV0C%2BYRR8fnCOsNeSZKAEhdCLIJHtkRXyegKaMtgY5SUqoKYo300B%2Fq8IIxwRlWS5vu49TCD5WAy5z7RdMRYafHQNdC9xdSOk3El5u2ewCuhYmheVIdKsfL5QyecHHRVfe1WjQQi%2BiMSMfsyj8k6l7LHXgha6FABAAC5N54tJTv6rKpPB87C%2BspIg8Agt6xjU9ko%2BzCEiZjABjqkARLkVm%2FY3YoleoJQYlIYBSxJT8P1jVjKSrs6WQTR%2Bm%2Fa5IjejYuelxvJmDe4aWQpWilGA%2BX2kfJzmwkXqjaZS5pWvpAWGKW%2Bw4shXukv2kRvUSLhDE0k%2FNKbv3l7P5lFgvZJtJCvomAXTHCy01sEZZbQ9dDj8cR%2FmgVTSC6rTYtR%2FBgz3mFpnhF%2BkKDqyOsD3RRhN%2BwAnr0jADT5nZ15OmCuCwgy&X-Amz-Signature=e82a21607f7f0c771230d75a6cd32b6750184d112cf5e94189b9d2a407e6bf50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PTD5JV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCe6HDw%2FrIja3WSm1%2B3SsXt2fXEt4E62xaRN1mz%2FKIehgIhAI66Tr%2BljIXBtOCR4rVEsP90SeiR%2Fhjq%2FsWeuEOreGZTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Iel3iNg1GUhob8wq3AMtD0X4WhTy9YVsBtA0TPSGKlG%2FHTemirI48S8IkDRdyOGuHcem4fCZ7fxe43GDjhHVZ0kNJwbBBooNINgfySTb00dXdAwdnAjcowXGeQEuRPyvqv4cnQ%2FB5eBNWa2ui%2FCDOuN7rf9iycTsw4evDm2D0xBHb5vSwNZ9a59fSToW3UAJQk72vXheBwuVdJgm18oTcb7WwIgq6NHs5eQLCTE0XZPHOq%2BqhI9MT2kAcrZLTfPpCxspYBUQ6EmCrSsKO%2BIbiZWmg2hL9%2Bcz%2FvBH10NbVHCyH2YAB1BbJDu60vu0AsliI0F2PspgIzTNvYNB0jtTKw5YVi7zrzkYY26OyotxUs34dow1Jfp2NW3FaJbtW8DQISf%2Fhy5SVE6NJY2HnlXF7WFkKkeU2aPQOYSGbDCuZPLXSHAgQ90523EScJmjgTlex9EKdP75zV0C%2BYRR8fnCOsNeSZKAEhdCLIJHtkRXyegKaMtgY5SUqoKYo300B%2Fq8IIxwRlWS5vu49TCD5WAy5z7RdMRYafHQNdC9xdSOk3El5u2ewCuhYmheVIdKsfL5QyecHHRVfe1WjQQi%2BiMSMfsyj8k6l7LHXgha6FABAAC5N54tJTv6rKpPB87C%2BspIg8Agt6xjU9ko%2BzCEiZjABjqkARLkVm%2FY3YoleoJQYlIYBSxJT8P1jVjKSrs6WQTR%2Bm%2Fa5IjejYuelxvJmDe4aWQpWilGA%2BX2kfJzmwkXqjaZS5pWvpAWGKW%2Bw4shXukv2kRvUSLhDE0k%2FNKbv3l7P5lFgvZJtJCvomAXTHCy01sEZZbQ9dDj8cR%2FmgVTSC6rTYtR%2FBgz3mFpnhF%2BkKDqyOsD3RRhN%2BwAnr0jADT5nZ15OmCuCwgy&X-Amz-Signature=d481d752f5b54c5dfcf6386d0fa8d8a59166583e848b7562bc3daa2dea1fbbad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
