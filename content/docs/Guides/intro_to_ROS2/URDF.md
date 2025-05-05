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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIXTKO5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMadFx3%2FNLvdgC6kSgIENahvdCHPAwdzVFTqYP7pkHyAiBa5R9DGo2lMCpJ1FxSYsqFpNVANbDtKlfmnarTPoe%2B4yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM9uERqXntzQoesFl3KtwD3lpSL1cPxD3BAvhmjV3K7SUMji3v3%2FliDiGgCq4ruK%2BOr9HLMSeKu6WCbMdEOUzamWM3lTshE%2BDA1tu05fUds9OcNGEBmEVYr7kRlGsKHfOzdFTUZJlq80zdM900odDKjvtxf0egO0HCCXi2JunFLg7Sr8lZ%2Fha3oj9He7%2BY7eFiZI%2BkrwQNnLxuVSe4bOZ2Zy0aCD6zdks1sOluOuznXZDXRbpPx9JnJq%2Bk3wSQldkp9OA3RWFZqSPcXlHG48nWd8UnPFfqreKc1n8p3YY1PevvXVXlhqqFqH4z8tZJh3B9Dx0lF44meb41Jmp5XGoPasrk5m1Tha6r6TgqVnSaxm7irJCGE9FVo%2Bj7duwgu%2FgMX4YmPSPGBeE74vuo2XYgXyGZVt5VnO%2BsJBS6EzsD17ZtrwnDSeFbOBotpp9XnPpnZCIdFATmXxjUTLli9aszDRWgw51jUVz5W6kyPLFQnqImqTXt%2FUwhpxxEPSPSjJoX36JwHEUe8Hwz58OOygZY%2FreLvQ5An64lso3S6hDjM%2Bm7o6VnCyXw8%2BGx30loNM8M%2BTDTEwmVN%2F3qqdKiwWgFdKCMmrsz4sPGujejwltl5VtaU0TUMebqFNgLHCpKu%2FbLnQd%2F6i1CPKB%2F5zUwzczkwAY6pgG5z5eY%2BQJC6wM5EC3xl1ot%2BBT%2Fq%2B460Ng9dKuJootInzam9jea6eyncuEySOpN8Z7L60UfTNEM0q0gABlu%2FSV5FZNyv%2FZ0%2FFOSkDJjkvQyoN9ID0OpHak%2FnwuTGofS77hubFWKQWkwA9tnPPH313C4xokedlBr9%2BVH73RQQbOvFcWJBMwPhh9IrsTQvj3c15BpHlOg2arr%2F%2BYsX9xEChUGfg4kd6ST&X-Amz-Signature=40d720a7ad6717e4256f53df76727a6079e9bad3fece151b1ef3c207c9b0ce74&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIXTKO5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMadFx3%2FNLvdgC6kSgIENahvdCHPAwdzVFTqYP7pkHyAiBa5R9DGo2lMCpJ1FxSYsqFpNVANbDtKlfmnarTPoe%2B4yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM9uERqXntzQoesFl3KtwD3lpSL1cPxD3BAvhmjV3K7SUMji3v3%2FliDiGgCq4ruK%2BOr9HLMSeKu6WCbMdEOUzamWM3lTshE%2BDA1tu05fUds9OcNGEBmEVYr7kRlGsKHfOzdFTUZJlq80zdM900odDKjvtxf0egO0HCCXi2JunFLg7Sr8lZ%2Fha3oj9He7%2BY7eFiZI%2BkrwQNnLxuVSe4bOZ2Zy0aCD6zdks1sOluOuznXZDXRbpPx9JnJq%2Bk3wSQldkp9OA3RWFZqSPcXlHG48nWd8UnPFfqreKc1n8p3YY1PevvXVXlhqqFqH4z8tZJh3B9Dx0lF44meb41Jmp5XGoPasrk5m1Tha6r6TgqVnSaxm7irJCGE9FVo%2Bj7duwgu%2FgMX4YmPSPGBeE74vuo2XYgXyGZVt5VnO%2BsJBS6EzsD17ZtrwnDSeFbOBotpp9XnPpnZCIdFATmXxjUTLli9aszDRWgw51jUVz5W6kyPLFQnqImqTXt%2FUwhpxxEPSPSjJoX36JwHEUe8Hwz58OOygZY%2FreLvQ5An64lso3S6hDjM%2Bm7o6VnCyXw8%2BGx30loNM8M%2BTDTEwmVN%2F3qqdKiwWgFdKCMmrsz4sPGujejwltl5VtaU0TUMebqFNgLHCpKu%2FbLnQd%2F6i1CPKB%2F5zUwzczkwAY6pgG5z5eY%2BQJC6wM5EC3xl1ot%2BBT%2Fq%2B460Ng9dKuJootInzam9jea6eyncuEySOpN8Z7L60UfTNEM0q0gABlu%2FSV5FZNyv%2FZ0%2FFOSkDJjkvQyoN9ID0OpHak%2FnwuTGofS77hubFWKQWkwA9tnPPH313C4xokedlBr9%2BVH73RQQbOvFcWJBMwPhh9IrsTQvj3c15BpHlOg2arr%2F%2BYsX9xEChUGfg4kd6ST&X-Amz-Signature=7b440557a2f68ff492592b515ba097ee65404f83eb2d377394680d884aea571e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
