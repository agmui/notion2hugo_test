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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM45HCAT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFN8j0HVjJEMGPWdXHaBt4IwzLLMDiAJuClDhZu%2FD0hAiEAsVZlf6GPALLCklOfaGly1EnSdcp6a9FDcmRz%2FwgEoRQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDZIXIDWh5U7CrjztyrcA1jVsnIZlWqnR080GsIuoQDcyq%2BishCLaPMCqcUCdeWQuSEWsdZGqfKKJNTaPSScLJEBWX3ilB3Fqk0xjflOS%2BdoS8dRNEnVRjt8Az3bTw2u5%2FV0zURNjp1RH4HvnU7PbUetcSrk0wsKXpv7iytaLJMa0vtlK5suA6%2BcILbyLCNSo%2FpDOT1ITewrNxpnGSjLQlHKCaNxsqjeupPR%2FtFV9%2BowYST2cooo9Bud%2BfUBJwpvmkvaFhKbNUzV%2FL0gNDcZPlEfbdLb2d%2FcEsJ2FpydkCCgPABB9HxHc4iBVMcX%2BVaOva36VGAqFDiv%2Bq00obhhcqU0Zx2G5ExGYRqRobBHalm9HAG72jrstGJQ401waTAIFjLt7TKOY6jifH7m4mrcY6HIMOuTrVR%2B2GKuFMS2BZ%2B3Up2%2BSNEuSpNYp12d7yCbxmotmGDbRR9fDDH3KHHaYgm8XKqtFRYOSz0QIygfIMV%2FvuxpehUPP5PyGM2wF2S8%2F5SHH303xCOa4jalMPBJ2xQguJCjICFua4sJ85iPM5kd9Uo2%2F%2Ft9smdUwS5Yiq9IV2ZMUNFV411blOGmWsjpiOEHRwflh6GdCyniAFktgO5JXTXQEZ5li2BtdcFOadtJkru5fD0N1y4zF3RCMN%2FIvcAGOqUBj6HSeH2U%2BVw5RzJhVvXm7pbeIEcfwwNbgkotvXf%2BohfBQWo%2Boh2k3vG8opyXLTwSXOrl89AGx20mUCAyLr2FmRrGLwxhchxktyTZMRfX7OfdPHpxI3%2BWXpEsmWBACF3NkDQczF1g0MPVAqzHDKBc%2ByW92VPLKN%2BnkhJuc3PW5YAm2ScJNxsg0kr0GiWTxCf1wyIQ4IqGXI%2BmzX5AHnrtlSDIKZmr&X-Amz-Signature=199a1fe62d75c2327066bdfa5c2a13099b763c72f900a29d77d8c6f30a7f73fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM45HCAT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFN8j0HVjJEMGPWdXHaBt4IwzLLMDiAJuClDhZu%2FD0hAiEAsVZlf6GPALLCklOfaGly1EnSdcp6a9FDcmRz%2FwgEoRQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDZIXIDWh5U7CrjztyrcA1jVsnIZlWqnR080GsIuoQDcyq%2BishCLaPMCqcUCdeWQuSEWsdZGqfKKJNTaPSScLJEBWX3ilB3Fqk0xjflOS%2BdoS8dRNEnVRjt8Az3bTw2u5%2FV0zURNjp1RH4HvnU7PbUetcSrk0wsKXpv7iytaLJMa0vtlK5suA6%2BcILbyLCNSo%2FpDOT1ITewrNxpnGSjLQlHKCaNxsqjeupPR%2FtFV9%2BowYST2cooo9Bud%2BfUBJwpvmkvaFhKbNUzV%2FL0gNDcZPlEfbdLb2d%2FcEsJ2FpydkCCgPABB9HxHc4iBVMcX%2BVaOva36VGAqFDiv%2Bq00obhhcqU0Zx2G5ExGYRqRobBHalm9HAG72jrstGJQ401waTAIFjLt7TKOY6jifH7m4mrcY6HIMOuTrVR%2B2GKuFMS2BZ%2B3Up2%2BSNEuSpNYp12d7yCbxmotmGDbRR9fDDH3KHHaYgm8XKqtFRYOSz0QIygfIMV%2FvuxpehUPP5PyGM2wF2S8%2F5SHH303xCOa4jalMPBJ2xQguJCjICFua4sJ85iPM5kd9Uo2%2F%2Ft9smdUwS5Yiq9IV2ZMUNFV411blOGmWsjpiOEHRwflh6GdCyniAFktgO5JXTXQEZ5li2BtdcFOadtJkru5fD0N1y4zF3RCMN%2FIvcAGOqUBj6HSeH2U%2BVw5RzJhVvXm7pbeIEcfwwNbgkotvXf%2BohfBQWo%2Boh2k3vG8opyXLTwSXOrl89AGx20mUCAyLr2FmRrGLwxhchxktyTZMRfX7OfdPHpxI3%2BWXpEsmWBACF3NkDQczF1g0MPVAqzHDKBc%2ByW92VPLKN%2BnkhJuc3PW5YAm2ScJNxsg0kr0GiWTxCf1wyIQ4IqGXI%2BmzX5AHnrtlSDIKZmr&X-Amz-Signature=6696bbc9dbf170651c91de347fd4586c698fc5b776c5b35d558978b4f82da721&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
