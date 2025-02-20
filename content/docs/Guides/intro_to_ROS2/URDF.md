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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUCSK5Z%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgVohxN7mjUUi72vYcpa5WRQYWlgyuvwHE4E4fXThMgAiA%2FTp%2FYdidZ7RIV4sGX7hWNy%2FaQ1SNcNPUlLVUbo%2Bqk%2BiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDTLonHP%2BUy1LQB7KtwDG1V%2FYLy2TKmMLIRyEwtiDCHNxzUEgevfaQ9YDTXT0Q3S3K9PX3Mu1VWXQjBgxXI8qlAZAsQnoy4nG7qyrWQ4SDpmIn%2Fsm2E7Sxl29anV4mYefkHLEa4ZN1QyS3cXmYojKglp3M1HhFUZqMrNPH2pGunlV1BPRJ3TfMkgb3eIjUXne6sxNuzLHxLSpdL31PtcGtPtjFZkOZ2MgKgjO5d8BISSKeM3w2nspOwqMakquKjnhMgXPSFiL3C9j98EELK2mknPJSl%2Fs1vetGT7J%2FOFjM9bZQpmSwhr8rDpostoPUq1VameicAK4IJ9mexepOIJpYQkbhUVU0PMW4SyVNaXzUm9T1LGrroXW5ueqVLOuSRYwOgM4%2BwST3mgJFJ9hv59P5D4oMSaxq%2BRzROSvlmXDX6XXeDrofk%2BnrmjglpLITicO0CGzYKZskzhQvpN7%2Fz5%2B%2FsiAFidmOFT2aGup5UhO9KQpQhqx79LPF8lGfiCzvS%2FI%2Bs4g3%2F%2Bg8jeAMDNY%2BM1Y83FkBoNBFdLH7wgxhv3DBIXMfVNDTm8GGBlktf%2F8CyQIui6uFqPhsCZzWA8amh0belu0TCkUR%2FTNcwEmkALEz86teHUI4US2X3rE%2FhOYgsi72Zs5oZ4UOTfON8wrsPavQY6pgFBQJU4n7PGXnGDPuuLiGrSyBkUuvWmVLYj0KRfKK9efmHm1%2Fw%2BvnuyI1j1Bc8JjNvr3G%2F1QJO4aSvigodiOBUpp9XB%2FNJ1XveWcCjA8QtXSXtBDFeF8O%2FZM8MghSmn1wpZmZC5m%2Bov9UKC%2BMWDIuqPeOu%2BjnnIEsWsopMWDhtw4PmKu%2BSPoIQW3pXBlXluRi23q0qejUpTxTJMC6USXOHU%2FgxzaXuA&X-Amz-Signature=1a9950236e59136ca4487feef88f4af6601c64e78edaf505ec150d7112304a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PUCSK5Z%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgVohxN7mjUUi72vYcpa5WRQYWlgyuvwHE4E4fXThMgAiA%2FTp%2FYdidZ7RIV4sGX7hWNy%2FaQ1SNcNPUlLVUbo%2Bqk%2BiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbDTLonHP%2BUy1LQB7KtwDG1V%2FYLy2TKmMLIRyEwtiDCHNxzUEgevfaQ9YDTXT0Q3S3K9PX3Mu1VWXQjBgxXI8qlAZAsQnoy4nG7qyrWQ4SDpmIn%2Fsm2E7Sxl29anV4mYefkHLEa4ZN1QyS3cXmYojKglp3M1HhFUZqMrNPH2pGunlV1BPRJ3TfMkgb3eIjUXne6sxNuzLHxLSpdL31PtcGtPtjFZkOZ2MgKgjO5d8BISSKeM3w2nspOwqMakquKjnhMgXPSFiL3C9j98EELK2mknPJSl%2Fs1vetGT7J%2FOFjM9bZQpmSwhr8rDpostoPUq1VameicAK4IJ9mexepOIJpYQkbhUVU0PMW4SyVNaXzUm9T1LGrroXW5ueqVLOuSRYwOgM4%2BwST3mgJFJ9hv59P5D4oMSaxq%2BRzROSvlmXDX6XXeDrofk%2BnrmjglpLITicO0CGzYKZskzhQvpN7%2Fz5%2B%2FsiAFidmOFT2aGup5UhO9KQpQhqx79LPF8lGfiCzvS%2FI%2Bs4g3%2F%2Bg8jeAMDNY%2BM1Y83FkBoNBFdLH7wgxhv3DBIXMfVNDTm8GGBlktf%2F8CyQIui6uFqPhsCZzWA8amh0belu0TCkUR%2FTNcwEmkALEz86teHUI4US2X3rE%2FhOYgsi72Zs5oZ4UOTfON8wrsPavQY6pgFBQJU4n7PGXnGDPuuLiGrSyBkUuvWmVLYj0KRfKK9efmHm1%2Fw%2BvnuyI1j1Bc8JjNvr3G%2F1QJO4aSvigodiOBUpp9XB%2FNJ1XveWcCjA8QtXSXtBDFeF8O%2FZM8MghSmn1wpZmZC5m%2Bov9UKC%2BMWDIuqPeOu%2BjnnIEsWsopMWDhtw4PmKu%2BSPoIQW3pXBlXluRi23q0qejUpTxTJMC6USXOHU%2FgxzaXuA&X-Amz-Signature=20a925db2e21004360cccfc480ebeaad74373d9d1c67a79265a13986cf7dfe83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
