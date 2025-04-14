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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEELGCH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP4%2Fx9e8Z3ifsVQfWtt137QR3KRSRGXnLgN%2Fgrz8uQLAiEAx67YXYf1rxTcgzkTJjH5SDwNnts0AiLUwLF1be2%2BeQ0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDLygSd3G%2FYLeYr8ISrcA3q7bhkoWvECwCGqmjEhJ1O3iRnW5jC%2BH7ojAUi%2BXGS35NmjffQeI2xuH0%2Fu8XXuDB4RX%2BfV%2F9bd9hA0kjLDCNEYMQjML9SzVfetJJpJ006OSoZdL1%2B7iU2pbpE%2BaTIv9kJaLRLd0xTUhTKJ7m3Vk0PT%2BRX5MJ%2BYnzno9YGHZeTKndlhSVWCCmJPQRkXysO4wxgzXcNt17ad1Cxkd6FA9Ri3Lc3nfQ97g1WmOGyphvXFZNcASAlnPt%2BxB9wY7wUj5ZBr7cVqu0yKd82Q7VzKsEoYVeeC%2FRuGRIba3Za9l0oyMqSkHMgk9N3A2Vvc4ecc7w3t2nhwCZLBlSLWgiNwNbuRNels8stGDyi9H%2B3H4CAhGv90oX6YbcYjMAvlUKfQ4ID%2BFtJojvLthkDEeW%2FspZ7C%2FU4K8ojnwW5E4J1nZjBU8QRAlmsZHnC9zrNAp04Pg%2FC0ygGPxN%2BsF170naHi9MkxthEo5AApOVANxvGmNE5NGOpRsqThGB%2BLqVltpR5NXOjTCIw3cagqGN6f1CyKSM1xI6186pyOk11JB1IWbGKY2KcBhTmJ1%2BoM5GonvxGmYIkHwlMsOm12tkBTBARTmuxFb1tqNyI7A5h%2FgTh5ml7JHMqDtcswOSzAfg2tMPX59L8GOqUBToFe3boqZPysIU0Jwrt5HGSCZ3n3Rm9D%2Bry5MmJOkHlI5a%2Fm75mDdNyhcU%2B8ebKboHchYG%2F8C29Sg0c3srlJTOyGY0OAC89lVO8p38x4LUwB%2BdIKPEjXgkwTF0RGz96MvECy%2FQfDBC%2BHvzbw5OCqN0NJMHAFnOz%2B9za2CFmH3G8r%2BRmBbr%2BSNOnuqparUGx1bNVYaZE%2F8YoLdsTuFyH%2B4BIdrqbw&X-Amz-Signature=038719c11fd0de3859ceb98fc9af46088fa40dce488bb43d5fe2ba78dfcc7539&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEELGCH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP4%2Fx9e8Z3ifsVQfWtt137QR3KRSRGXnLgN%2Fgrz8uQLAiEAx67YXYf1rxTcgzkTJjH5SDwNnts0AiLUwLF1be2%2BeQ0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDLygSd3G%2FYLeYr8ISrcA3q7bhkoWvECwCGqmjEhJ1O3iRnW5jC%2BH7ojAUi%2BXGS35NmjffQeI2xuH0%2Fu8XXuDB4RX%2BfV%2F9bd9hA0kjLDCNEYMQjML9SzVfetJJpJ006OSoZdL1%2B7iU2pbpE%2BaTIv9kJaLRLd0xTUhTKJ7m3Vk0PT%2BRX5MJ%2BYnzno9YGHZeTKndlhSVWCCmJPQRkXysO4wxgzXcNt17ad1Cxkd6FA9Ri3Lc3nfQ97g1WmOGyphvXFZNcASAlnPt%2BxB9wY7wUj5ZBr7cVqu0yKd82Q7VzKsEoYVeeC%2FRuGRIba3Za9l0oyMqSkHMgk9N3A2Vvc4ecc7w3t2nhwCZLBlSLWgiNwNbuRNels8stGDyi9H%2B3H4CAhGv90oX6YbcYjMAvlUKfQ4ID%2BFtJojvLthkDEeW%2FspZ7C%2FU4K8ojnwW5E4J1nZjBU8QRAlmsZHnC9zrNAp04Pg%2FC0ygGPxN%2BsF170naHi9MkxthEo5AApOVANxvGmNE5NGOpRsqThGB%2BLqVltpR5NXOjTCIw3cagqGN6f1CyKSM1xI6186pyOk11JB1IWbGKY2KcBhTmJ1%2BoM5GonvxGmYIkHwlMsOm12tkBTBARTmuxFb1tqNyI7A5h%2FgTh5ml7JHMqDtcswOSzAfg2tMPX59L8GOqUBToFe3boqZPysIU0Jwrt5HGSCZ3n3Rm9D%2Bry5MmJOkHlI5a%2Fm75mDdNyhcU%2B8ebKboHchYG%2F8C29Sg0c3srlJTOyGY0OAC89lVO8p38x4LUwB%2BdIKPEjXgkwTF0RGz96MvECy%2FQfDBC%2BHvzbw5OCqN0NJMHAFnOz%2B9za2CFmH3G8r%2BRmBbr%2BSNOnuqparUGx1bNVYaZE%2F8YoLdsTuFyH%2B4BIdrqbw&X-Amz-Signature=0cccf5a0fd10d61a1b6a4d1c45a04fa1e03cf8fedd54418e2871127be16ca4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
