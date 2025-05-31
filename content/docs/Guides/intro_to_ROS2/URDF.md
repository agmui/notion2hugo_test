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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z27WPTM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XbWXSLPJJDnsQDkz6p%2BtOTu6tu4NbKKToloe0nGOjwIhANa%2FxV5yJMYwYEQhDZsyBtTR8FaMyxNOjLyhfWKDCEmrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2n1h1H3b2Col%2By48q3AOrcO933vvfqBYl7wryokje0p92IMmS4rLQn4Mwv173Fv5F8x2DauXEXZ3VhWVuegTREH8YnlV%2Bkhzfl5bJrAJ0atVF3iO2g0L6UPp%2Br%2BgZTn8WXTdBg1EoUCK%2BErddeHA897oJd%2BJpoa9oYfOrdoce4iX1%2F%2F15tuE4xIDJgqBZ%2FqGbad5AksyUUV%2BO95J5k3S1ZoVDyWOkouA4C6FMoIA%2BeAytjO94vBqL9HwvlGq1qVbWatfQwpnDtZ10%2B26zUZuX1yA1Fckf1flTCsMyRc1f%2B1a0w%2FG5J59o5JNWHq3CBvSrsk2HTcQl%2Bp6qG8UksGK54nk5ZR%2B8KMh7rAHnGl%2FLMUVK4ZfziBwCfJ0OMuhyDwvfEWGW4ncPpZelZHV1uflUaHlh51ZRIisjcy2SYvA6t9u1j1vDWsqU0raLLxFvI6zMCDGFOWx%2FKZeMJH3evoEu8kd9FjcH8fVa9v45qd5Xo%2FJZ%2B%2FyCFWC4w2Q40dnWfdDXYmn5ik%2FffRDHOwo6K6sXyMmy9V8FKpKvCx47dE%2FliOV%2FehaPQQlLLFegcy619OMCyXNPkXMf4z%2BDpkGIxEmQ492GPZS3BANR1kgvkFDNI%2B%2BsUaxxF8eJTAHb6cb%2F8fzfmIlxqoSLhbeVNTD9surBBjqkAUOAXYzg2CFUJ%2B27FHjwhzVCM%2F2BcF7i5G31FvUEa2M3VHmQJj63HfUHg4FHS4M17DDxLgfKg3opedcF0ltiTAqFTOEAKjrIP2MZVsmY5v1zOZkBdb2YRTN2mZSlGREkGkWcZKrTDp7FU%2BHSHR8o5sE5ef64cLUsvTC%2FZBrXxAl1VUw7U8WzVLDitlJAAqYZMn%2BdGOwC7UMmTYsYXKE9qp88SAcq&X-Amz-Signature=1362445f8d5ed4d7a9244ebfe66bd7de82db962c1e58bdb624360ad24c93159a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z27WPTM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XbWXSLPJJDnsQDkz6p%2BtOTu6tu4NbKKToloe0nGOjwIhANa%2FxV5yJMYwYEQhDZsyBtTR8FaMyxNOjLyhfWKDCEmrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2n1h1H3b2Col%2By48q3AOrcO933vvfqBYl7wryokje0p92IMmS4rLQn4Mwv173Fv5F8x2DauXEXZ3VhWVuegTREH8YnlV%2Bkhzfl5bJrAJ0atVF3iO2g0L6UPp%2Br%2BgZTn8WXTdBg1EoUCK%2BErddeHA897oJd%2BJpoa9oYfOrdoce4iX1%2F%2F15tuE4xIDJgqBZ%2FqGbad5AksyUUV%2BO95J5k3S1ZoVDyWOkouA4C6FMoIA%2BeAytjO94vBqL9HwvlGq1qVbWatfQwpnDtZ10%2B26zUZuX1yA1Fckf1flTCsMyRc1f%2B1a0w%2FG5J59o5JNWHq3CBvSrsk2HTcQl%2Bp6qG8UksGK54nk5ZR%2B8KMh7rAHnGl%2FLMUVK4ZfziBwCfJ0OMuhyDwvfEWGW4ncPpZelZHV1uflUaHlh51ZRIisjcy2SYvA6t9u1j1vDWsqU0raLLxFvI6zMCDGFOWx%2FKZeMJH3evoEu8kd9FjcH8fVa9v45qd5Xo%2FJZ%2B%2FyCFWC4w2Q40dnWfdDXYmn5ik%2FffRDHOwo6K6sXyMmy9V8FKpKvCx47dE%2FliOV%2FehaPQQlLLFegcy619OMCyXNPkXMf4z%2BDpkGIxEmQ492GPZS3BANR1kgvkFDNI%2B%2BsUaxxF8eJTAHb6cb%2F8fzfmIlxqoSLhbeVNTD9surBBjqkAUOAXYzg2CFUJ%2B27FHjwhzVCM%2F2BcF7i5G31FvUEa2M3VHmQJj63HfUHg4FHS4M17DDxLgfKg3opedcF0ltiTAqFTOEAKjrIP2MZVsmY5v1zOZkBdb2YRTN2mZSlGREkGkWcZKrTDp7FU%2BHSHR8o5sE5ef64cLUsvTC%2FZBrXxAl1VUw7U8WzVLDitlJAAqYZMn%2BdGOwC7UMmTYsYXKE9qp88SAcq&X-Amz-Signature=9f4f8b27ffb3397a40e65aac344d4d5cb26e5e6fbba11e085291120f79b879b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
