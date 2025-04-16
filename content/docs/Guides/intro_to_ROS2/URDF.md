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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466327BGMGO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2xgx8%2BWkCcCjx8bi%2Fh%2Ft4qkZDFSwUNn%2F5sp8NDRdwcgIhALRQhs0bTGrP1er3hr5GNFcgpkjNtSXV6wZD91Tj5xX%2BKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMqZs9j%2BhoW0%2FmpK4q3AMlrZ7T828tGcRQW6lbyN3k9tsH6j1Z80j2sLto0BvDZM6rXpfnU4vsi%2F6kMz9reoO0ejODYZHudVs3cgXD0%2BnUAcnun5KB4DzpC0K61qH5jE3Ra1QEc%2B8FdhQSYuvOciLln%2BG9QCwaA9vSJsJj47DAas%2FhWYCgpyHg%2BiBrBCdgBXZYpplifae6fylgxlYU%2FNJOPr2PobqanKbnBOz2sT3qnImUXv66R2xEm%2BqOF3L3eRztVw2lnS9rYAaQdxn316bWaQOAeKPbBaCSBxq4TJPlp%2BYOtIA9w7QOo7RW7%2FiGWfvjg4%2FR3yKPst8%2BLTkeh0WS%2FjugfCc2VuzVazrJWEn%2FcRmt27HsTJFtx%2BYfmR%2FYrw%2B%2Bs98BqNLshh4Kb50OU2%2FWrVav957IMC2AsvJhn8oQxHjWazL0%2BxR91wgXOKOeU2d%2B353r65FoX3lQd71T9ptgdi9EpDjoqpripE%2FmPU8BrPW5XbM53VcLWwoL%2BFM1SZR3jtJWE45ar%2FFhAC92mm4qYQ6OBi826bZgY1rPSdFfKZVr3bzTkdvX8LS4rCABj9hqRVPIaUfkOAy0t6n0sI3Htrvcb%2FcGoa5aMLBO2YqVS%2FKaaoY7qW6ZEm4A94Wqa5zTUUM%2B174XG%2FmxzjDIxv%2B%2FBjqkAUFQyPIcJcuSEt2IB%2BHvQ7%2F8a992LNRYjnXB8I%2FpO5ubxxdwXX5g1luBUl%2BkExkgJ6uql9jK04M54HRHvZHde8QHruMFW8Vn1Mgrmx9TAKOzsWm3bfzCMOQ41Vesx1Z1UANxvNsMeKfaptW6F%2BOJmlDDTU6yw%2B7CEU0w6m7hTsKTPzlHgFk2xar0%2Fx9nFsrXGoVmeph5jLpoNnHK4LxgQnvuSslO&X-Amz-Signature=9d5a9a0236e156af5d07d552069f4227819e4c8aea44f752b259113e25da07e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466327BGMGO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2xgx8%2BWkCcCjx8bi%2Fh%2Ft4qkZDFSwUNn%2F5sp8NDRdwcgIhALRQhs0bTGrP1er3hr5GNFcgpkjNtSXV6wZD91Tj5xX%2BKv8DCEoQABoMNjM3NDIzMTgzODA1IgzMqZs9j%2BhoW0%2FmpK4q3AMlrZ7T828tGcRQW6lbyN3k9tsH6j1Z80j2sLto0BvDZM6rXpfnU4vsi%2F6kMz9reoO0ejODYZHudVs3cgXD0%2BnUAcnun5KB4DzpC0K61qH5jE3Ra1QEc%2B8FdhQSYuvOciLln%2BG9QCwaA9vSJsJj47DAas%2FhWYCgpyHg%2BiBrBCdgBXZYpplifae6fylgxlYU%2FNJOPr2PobqanKbnBOz2sT3qnImUXv66R2xEm%2BqOF3L3eRztVw2lnS9rYAaQdxn316bWaQOAeKPbBaCSBxq4TJPlp%2BYOtIA9w7QOo7RW7%2FiGWfvjg4%2FR3yKPst8%2BLTkeh0WS%2FjugfCc2VuzVazrJWEn%2FcRmt27HsTJFtx%2BYfmR%2FYrw%2B%2Bs98BqNLshh4Kb50OU2%2FWrVav957IMC2AsvJhn8oQxHjWazL0%2BxR91wgXOKOeU2d%2B353r65FoX3lQd71T9ptgdi9EpDjoqpripE%2FmPU8BrPW5XbM53VcLWwoL%2BFM1SZR3jtJWE45ar%2FFhAC92mm4qYQ6OBi826bZgY1rPSdFfKZVr3bzTkdvX8LS4rCABj9hqRVPIaUfkOAy0t6n0sI3Htrvcb%2FcGoa5aMLBO2YqVS%2FKaaoY7qW6ZEm4A94Wqa5zTUUM%2B174XG%2FmxzjDIxv%2B%2FBjqkAUFQyPIcJcuSEt2IB%2BHvQ7%2F8a992LNRYjnXB8I%2FpO5ubxxdwXX5g1luBUl%2BkExkgJ6uql9jK04M54HRHvZHde8QHruMFW8Vn1Mgrmx9TAKOzsWm3bfzCMOQ41Vesx1Z1UANxvNsMeKfaptW6F%2BOJmlDDTU6yw%2B7CEU0w6m7hTsKTPzlHgFk2xar0%2Fx9nFsrXGoVmeph5jLpoNnHK4LxgQnvuSslO&X-Amz-Signature=6cc028290c99d438226be5b50943c03bdb8fecfffeffa932da5b0f055f339383&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
