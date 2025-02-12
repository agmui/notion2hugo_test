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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR3JP7O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeXtDve1AivQmjt%2FFCx5axSRSASn1LFGJyI4fjROhgxwIhAJkHWN3qj1ESLo4l4T%2Bm6GQmTIyTQOQlNv6gXEm%2BeOgKKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1Qa4FpZiJfO6FBYq3AMHHi%2Bop0nmeQsr4gZ6Z0vKbIqobMWINwqM4yOe59%2FSS4eESIIOOucLKYf%2BI1%2Boar2bZXXK0rcCqdVcfmojBkrdz2KZyDzPpXKvXm%2Bz6O4moa%2FMNv8N%2BYrAzqQs1llwzh5aDdTx%2BvNtYeLnwMmXp7SM4%2Bfm0EtbCcQx99joDIwwTpqa%2FcYL2hutgOSV%2Fsn%2BQmtfBkggw14BILuudDMBeVLYDdOhu6JuIUN8oOkp29qcNNfZYAQ88AjwyzKeexKeGe8Zjeao7VdFOs1b%2FConJY3YISC%2FdOyfBYcCfiDQdnYA7CDpxKfk8pNrk%2BGSyVKda4ia7t%2FBzfp4AWZtGM9hZVN8ZNkp5dXDGWKSDoNlNQIvJhGaChiTVVQWgecbIkS%2Fjd2hGyN4kiefHJhLBvlr3R5RkwhtuQbBAQN%2B6YWke2klDCklxTnV8ccrpDILKW73XykUR5eKbNqzmU8csZ1nkG3FIE5gsOrqdvgAXHEWOKhBSLSV%2BFUb6d9oU%2B1fhXiKEkmcaK6UNyD%2FDybdPlEtZadfnmVAKub5GUs79ofx7%2Fp3mDsQ6SsYQzHPcZsWJVUAYUhaEoMPHMQy4LwHyBjcI97%2FypGJPNxTg9iwGINZgSElBTAI5oCehHj0hRdFpjDu66%2B9BjqkAd%2BVdoArR4i%2BFzqATcJvMGXUtM6%2FmpF3SmbX%2B4eqASfZaknfUT%2BePecaAdk4M5S1%2BzCxfI5fQVowKcjxwwe360fnsM3%2Fu%2BIo6lY825DzON1QzcQ4J8Vg28ZehQNbrtCIZf4VErhJm6cY1rFkriq10LIK5p6LIEdQ71%2F3W0%2BvYP3Uvv1GpM%2B5yvil4%2Fvx%2B06IF2uQKY8t4ldg9Ty7%2FUcw5NqjbY2%2F&X-Amz-Signature=d9f4aa37dfa96d39e5ba71b6e423cdf460826a89d1e742be63d9bc39a3d5f878&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR3JP7O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeXtDve1AivQmjt%2FFCx5axSRSASn1LFGJyI4fjROhgxwIhAJkHWN3qj1ESLo4l4T%2Bm6GQmTIyTQOQlNv6gXEm%2BeOgKKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1Qa4FpZiJfO6FBYq3AMHHi%2Bop0nmeQsr4gZ6Z0vKbIqobMWINwqM4yOe59%2FSS4eESIIOOucLKYf%2BI1%2Boar2bZXXK0rcCqdVcfmojBkrdz2KZyDzPpXKvXm%2Bz6O4moa%2FMNv8N%2BYrAzqQs1llwzh5aDdTx%2BvNtYeLnwMmXp7SM4%2Bfm0EtbCcQx99joDIwwTpqa%2FcYL2hutgOSV%2Fsn%2BQmtfBkggw14BILuudDMBeVLYDdOhu6JuIUN8oOkp29qcNNfZYAQ88AjwyzKeexKeGe8Zjeao7VdFOs1b%2FConJY3YISC%2FdOyfBYcCfiDQdnYA7CDpxKfk8pNrk%2BGSyVKda4ia7t%2FBzfp4AWZtGM9hZVN8ZNkp5dXDGWKSDoNlNQIvJhGaChiTVVQWgecbIkS%2Fjd2hGyN4kiefHJhLBvlr3R5RkwhtuQbBAQN%2B6YWke2klDCklxTnV8ccrpDILKW73XykUR5eKbNqzmU8csZ1nkG3FIE5gsOrqdvgAXHEWOKhBSLSV%2BFUb6d9oU%2B1fhXiKEkmcaK6UNyD%2FDybdPlEtZadfnmVAKub5GUs79ofx7%2Fp3mDsQ6SsYQzHPcZsWJVUAYUhaEoMPHMQy4LwHyBjcI97%2FypGJPNxTg9iwGINZgSElBTAI5oCehHj0hRdFpjDu66%2B9BjqkAd%2BVdoArR4i%2BFzqATcJvMGXUtM6%2FmpF3SmbX%2B4eqASfZaknfUT%2BePecaAdk4M5S1%2BzCxfI5fQVowKcjxwwe360fnsM3%2Fu%2BIo6lY825DzON1QzcQ4J8Vg28ZehQNbrtCIZf4VErhJm6cY1rFkriq10LIK5p6LIEdQ71%2F3W0%2BvYP3Uvv1GpM%2B5yvil4%2Fvx%2B06IF2uQKY8t4ldg9Ty7%2FUcw5NqjbY2%2F&X-Amz-Signature=d6fb85fbef895b1e79f1ceef6d9888113c8cda8f47010e69e82c70964f517f55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
