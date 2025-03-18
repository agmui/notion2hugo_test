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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOST6GVN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEC7rI7HG9HFDo9271BW4sDLm%2B4GJDTDcpa4laD6%2B%2F7UAiBSYH6quT7fuxHrRdgsesYRikL6fpMUX15BeC2cysARoyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMHjVG8yrOz4bJtNeNKtwDwCGB0beYZhv00agLGOKM2z0W0l%2Bn%2FjD2GtsJjeRdOlej50gJffxWOKuOw0NAcGzFgBQ53N1uDEJYK73Au%2Fyq4FUHPbIvcfALtFQ0QKJg2rxel0twBjjJyoZSR33fsofUYFlBewI3AmNWz1Zz8F2JcjG2lBLZz1xKNG0VAYfvfFlVaVSCm9SkREOZfj%2BUj3Ql6ZE2t1KP5pfPNZ9U2dbEa467wpy9B16ZY1%2Fevl4joqghjyuU44x7nkE0hK%2ByU%2BmDH6GFOqfiqAamgysumBjFWB5KCXqM1F7PB8nvaYrRzbPUOLrqAJlxH1TYDzAlzPL6Aar6Apw2tdBK0NU4Q8J5Nvgb84I3Plnz47nLcc9xhR3idmPi3rWcXrMKhMcGbP1yY57ilgmB2GfRKDyBRaTjnH0fJ8SFBiFaxBtMLWD5NXGQ7jdd6osDGGoKtfpx4pid2xfyRbwb8gsl%2FeKkIcV180RzPXyAu2DVtzVO1IXpDNbnaCjgltyRwAGXIcT%2FCuwjZub8KAhRaGwcV3iRuO4BTpM63q6NccfliZ%2Fy%2Fwg5qkkTS%2FsjXCODs%2BY5QceJIyfdU57p9OYGUfM2sfGlteGq7sS5TUmxSNajcWrJEH1iVgEMB%2F0S5U8ZK6OnmgEwy7HnvgY6pgG0JXXCK4lX1BmkZ7oxiWZy9R6anhKnGZ0vTz5UV1GkhiyQEp%2FMLfuQzAPUlL6e21dHSLuJatShzH8ZzR7uEEUMsR6KmyGrtGXHKDTLD9VhPnVdKJO1WAYAJ%2FccuWu4AKnVxcgGzfV7Nq%2FCJVPDF4Ym2n99MpCE35B20FaL7jxzK5WpfDRvC9DXYGoiWuCd%2FMFWfJuuB6fPiBqurQK0tuhPker69mn%2B&X-Amz-Signature=755bd95be86ca279886809cf527dcafbf6dd1080952129326547e4e7120a7fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOST6GVN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEC7rI7HG9HFDo9271BW4sDLm%2B4GJDTDcpa4laD6%2B%2F7UAiBSYH6quT7fuxHrRdgsesYRikL6fpMUX15BeC2cysARoyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMHjVG8yrOz4bJtNeNKtwDwCGB0beYZhv00agLGOKM2z0W0l%2Bn%2FjD2GtsJjeRdOlej50gJffxWOKuOw0NAcGzFgBQ53N1uDEJYK73Au%2Fyq4FUHPbIvcfALtFQ0QKJg2rxel0twBjjJyoZSR33fsofUYFlBewI3AmNWz1Zz8F2JcjG2lBLZz1xKNG0VAYfvfFlVaVSCm9SkREOZfj%2BUj3Ql6ZE2t1KP5pfPNZ9U2dbEa467wpy9B16ZY1%2Fevl4joqghjyuU44x7nkE0hK%2ByU%2BmDH6GFOqfiqAamgysumBjFWB5KCXqM1F7PB8nvaYrRzbPUOLrqAJlxH1TYDzAlzPL6Aar6Apw2tdBK0NU4Q8J5Nvgb84I3Plnz47nLcc9xhR3idmPi3rWcXrMKhMcGbP1yY57ilgmB2GfRKDyBRaTjnH0fJ8SFBiFaxBtMLWD5NXGQ7jdd6osDGGoKtfpx4pid2xfyRbwb8gsl%2FeKkIcV180RzPXyAu2DVtzVO1IXpDNbnaCjgltyRwAGXIcT%2FCuwjZub8KAhRaGwcV3iRuO4BTpM63q6NccfliZ%2Fy%2Fwg5qkkTS%2FsjXCODs%2BY5QceJIyfdU57p9OYGUfM2sfGlteGq7sS5TUmxSNajcWrJEH1iVgEMB%2F0S5U8ZK6OnmgEwy7HnvgY6pgG0JXXCK4lX1BmkZ7oxiWZy9R6anhKnGZ0vTz5UV1GkhiyQEp%2FMLfuQzAPUlL6e21dHSLuJatShzH8ZzR7uEEUMsR6KmyGrtGXHKDTLD9VhPnVdKJO1WAYAJ%2FccuWu4AKnVxcgGzfV7Nq%2FCJVPDF4Ym2n99MpCE35B20FaL7jxzK5WpfDRvC9DXYGoiWuCd%2FMFWfJuuB6fPiBqurQK0tuhPker69mn%2B&X-Amz-Signature=05e060c66a8d20860b97cdc5cfcd1b0c998484573589d7e995805dd81fdb4d33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
