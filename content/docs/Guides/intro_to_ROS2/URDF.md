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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TIEGIP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDk%2Fx5w%2B1HmVV1QtTl2VK1W0AAHJgd7JlgWY5%2FMVPFLGgIhAOSO0tvN%2FCf0ieRIIaAltFFGD5Rg%2BFEoi4xKocH5RhPaKv8DCEwQABoMNjM3NDIzMTgzODA1Igzks0yk%2BA7BV0CksiIq3AM5BOu5LwvyMii0j51gQqp8uWoZ5aqnU6gsjZ1e%2BZzICDmZygkvsMG%2Bf7qAbdDwkbZWtdpVWX%2BNW%2FVXAtk6w8aeZNL3O3h6MsmbF7XHHhw93FWS%2BjwSshmEV6Q%2Fm3ISW%2Fwlus1vMkokjmPLgGaVvxKq82KAqVlL7LY51gK9CeaZmq7PsoTOFsc1zhhcvU140MTnjpAUD5BK%2BPKEqT6ngnp22AJbxwHv584gC370eMnVzqfwNmrZx8WOpaEtsEcz1S2NeMzeMr%2BD%2FJrJGmK7q4pIlqpH3Vz5yIpsYZDdyKqem95JdxzwZyiBBOU43RaxTFy18ksAEn5tb2p4YwtUAgVESa1nwlgRMJcQ8VOmS9bzt7NyxBczcJXSD6ytq%2B57o28ae%2F8SsjvTGARuaDMeWaGgbjeTu3%2BWsKsudwaVnu%2BeLnNKiAGH70BItsn6nYKUG3U%2BotX0SxPQdbIlMJFKkU3nXJ%2FNZG9GuGYvUVGjrrI%2BkLLrhip7LRxaBzNLaayou4cjjaVYEiDYaZC6hF9DiLD7LnIKgrPImJMkQU3nvj70BOGUkXCdN5hYKHO7%2B2tXv4%2B2jWvM%2BdSlPyjag8OYY%2BxSsoAg9DppOWJFhvFnkQJXFo2qpAfo5SQ8AS3YFDDM2IfCBjqkARuS71a%2Bzg%2FNhEMftHGC8vxR77YjQQ7yNSsjWr33RY6LQwe1v%2BIHjcAffBccmh44oyIETc3kitwiLvrfuF0nl8JqDRjf2xXGjns86zJbzd8S9JXuz7%2FyOQoHlzM9S5I5y%2BbFdqPWRpamAc4%2FAPjoaOgz9JUeXrjks75ccpws5XAdZtn6A0NgMuWpFdrPmmg89ErXj5FvTAl%2FMG7DndBdpIPV5ohQ&X-Amz-Signature=da7f82dad19f55ec936200b6f7d56c7ad78f331b736c7cd4e0a778eb8275af7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TIEGIP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDk%2Fx5w%2B1HmVV1QtTl2VK1W0AAHJgd7JlgWY5%2FMVPFLGgIhAOSO0tvN%2FCf0ieRIIaAltFFGD5Rg%2BFEoi4xKocH5RhPaKv8DCEwQABoMNjM3NDIzMTgzODA1Igzks0yk%2BA7BV0CksiIq3AM5BOu5LwvyMii0j51gQqp8uWoZ5aqnU6gsjZ1e%2BZzICDmZygkvsMG%2Bf7qAbdDwkbZWtdpVWX%2BNW%2FVXAtk6w8aeZNL3O3h6MsmbF7XHHhw93FWS%2BjwSshmEV6Q%2Fm3ISW%2Fwlus1vMkokjmPLgGaVvxKq82KAqVlL7LY51gK9CeaZmq7PsoTOFsc1zhhcvU140MTnjpAUD5BK%2BPKEqT6ngnp22AJbxwHv584gC370eMnVzqfwNmrZx8WOpaEtsEcz1S2NeMzeMr%2BD%2FJrJGmK7q4pIlqpH3Vz5yIpsYZDdyKqem95JdxzwZyiBBOU43RaxTFy18ksAEn5tb2p4YwtUAgVESa1nwlgRMJcQ8VOmS9bzt7NyxBczcJXSD6ytq%2B57o28ae%2F8SsjvTGARuaDMeWaGgbjeTu3%2BWsKsudwaVnu%2BeLnNKiAGH70BItsn6nYKUG3U%2BotX0SxPQdbIlMJFKkU3nXJ%2FNZG9GuGYvUVGjrrI%2BkLLrhip7LRxaBzNLaayou4cjjaVYEiDYaZC6hF9DiLD7LnIKgrPImJMkQU3nvj70BOGUkXCdN5hYKHO7%2B2tXv4%2B2jWvM%2BdSlPyjag8OYY%2BxSsoAg9DppOWJFhvFnkQJXFo2qpAfo5SQ8AS3YFDDM2IfCBjqkARuS71a%2Bzg%2FNhEMftHGC8vxR77YjQQ7yNSsjWr33RY6LQwe1v%2BIHjcAffBccmh44oyIETc3kitwiLvrfuF0nl8JqDRjf2xXGjns86zJbzd8S9JXuz7%2FyOQoHlzM9S5I5y%2BbFdqPWRpamAc4%2FAPjoaOgz9JUeXrjks75ccpws5XAdZtn6A0NgMuWpFdrPmmg89ErXj5FvTAl%2FMG7DndBdpIPV5ohQ&X-Amz-Signature=a9f3faa18494fbbae2f86608612825c4e7fe244e1ce0c4111e072ecd3ad7e281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
