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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEZLCNA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0LskV%2FiI2ywHNhBTdDjFGQ%2FJulHRqf%2Bs6L3LdclK1eQIhAIjr1tBcMdzHfFIgGQ8WAtpcEmzAiTY1B1Etlva0PHPcKv8DCCQQABoMNjM3NDIzMTgzODA1Igw1siD6OU4DD6GcukUq3AOz%2FkfA5%2BXhehaJrlq6Y3QIUjEmdYz1yLs77VxHqGQuI%2BFz8Et%2F7S91zKafeTIM9nrg75yHeWHGgxwYGdXp1qZ7Sr0KuWKGRZNFABLULCp7bSPj6o18NFvE4GYTVM14G6fD4%2FQepmPVBj6vH%2Bl0KjwYUsxPB6KJyMO4IHtnVqPlcNhvsmx3d4aGH4t2GagJTNHM8OLlYE5fXbXNamPVbp8zqTyUusc3YWPFFpSAAtN7TzTtsL6J0zuEGz9iHHo3b7ib%2Fj2nLZSNLnKHLeT1zuCAkHfzHolpJ42TG9KjfYNE3vpYvKzs8IR%2BPGk%2B1UUH%2FyzApG6rcxPPaGGAE5ieHdUmbqHSofuwaayjbTAEX1%2FX3ByBfwNcZT8cIIWcGsXqc5zE1VZ%2F712ZVQmzTCm5WqvZSas6DlHKeja%2FBt3KZBv8jBROUIorDVhWfhP5EZcfbCXAw%2Bmwq6BPWe5FcTF2zZ1amLMN7qcXFywthXAcpzy7XBPiZJAQmsJM5Yeq8LthtG7o0ekaivLak9ldH65aHF4Q6JGYbw1q3VsVPmI6lpunngyEMfNvCjV9pdNS59vwkVBhTe5yhCAf2iX%2FY5wjKtjBackAE%2Fo7wrD5y6vGIv13R8ptMlkvEqO3k7OYbTCWnve%2FBjqkAWStdtEX9TnXwE33oh9yxiH0tknW1WVTOoh8UeaTLdpNcN2KIh51FEPeERWVniGnLVPVApSydjp5RmuffoG6dVVI49lTUvZLeUOu5pszGByeJ189O18VHDwFA5OUIL4nS1ejoXAfHqW6L3HIqK5eeABEdz46P5WN7mz14ED402RoMvA33OPDTM4wXHopTg5FaUjQPKaelDfzBNDC4uBN%2BGYhBkXX&X-Amz-Signature=669df693b4ecb26f8b5dd71dba73b990f180169d9d1e2116c9d69a3a208e2ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEZLCNA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0LskV%2FiI2ywHNhBTdDjFGQ%2FJulHRqf%2Bs6L3LdclK1eQIhAIjr1tBcMdzHfFIgGQ8WAtpcEmzAiTY1B1Etlva0PHPcKv8DCCQQABoMNjM3NDIzMTgzODA1Igw1siD6OU4DD6GcukUq3AOz%2FkfA5%2BXhehaJrlq6Y3QIUjEmdYz1yLs77VxHqGQuI%2BFz8Et%2F7S91zKafeTIM9nrg75yHeWHGgxwYGdXp1qZ7Sr0KuWKGRZNFABLULCp7bSPj6o18NFvE4GYTVM14G6fD4%2FQepmPVBj6vH%2Bl0KjwYUsxPB6KJyMO4IHtnVqPlcNhvsmx3d4aGH4t2GagJTNHM8OLlYE5fXbXNamPVbp8zqTyUusc3YWPFFpSAAtN7TzTtsL6J0zuEGz9iHHo3b7ib%2Fj2nLZSNLnKHLeT1zuCAkHfzHolpJ42TG9KjfYNE3vpYvKzs8IR%2BPGk%2B1UUH%2FyzApG6rcxPPaGGAE5ieHdUmbqHSofuwaayjbTAEX1%2FX3ByBfwNcZT8cIIWcGsXqc5zE1VZ%2F712ZVQmzTCm5WqvZSas6DlHKeja%2FBt3KZBv8jBROUIorDVhWfhP5EZcfbCXAw%2Bmwq6BPWe5FcTF2zZ1amLMN7qcXFywthXAcpzy7XBPiZJAQmsJM5Yeq8LthtG7o0ekaivLak9ldH65aHF4Q6JGYbw1q3VsVPmI6lpunngyEMfNvCjV9pdNS59vwkVBhTe5yhCAf2iX%2FY5wjKtjBackAE%2Fo7wrD5y6vGIv13R8ptMlkvEqO3k7OYbTCWnve%2FBjqkAWStdtEX9TnXwE33oh9yxiH0tknW1WVTOoh8UeaTLdpNcN2KIh51FEPeERWVniGnLVPVApSydjp5RmuffoG6dVVI49lTUvZLeUOu5pszGByeJ189O18VHDwFA5OUIL4nS1ejoXAfHqW6L3HIqK5eeABEdz46P5WN7mz14ED402RoMvA33OPDTM4wXHopTg5FaUjQPKaelDfzBNDC4uBN%2BGYhBkXX&X-Amz-Signature=d12fc7f23504faee2a1383a45e5f6051f2427cc6147016d7a9034eb8cb80e284&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
