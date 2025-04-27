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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKNOI6X%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQk33s0Y1yLEaBN8qMdwfUKBpYQ3ApGPF04hwViNLAKAiBkKvctvguMP8IasbYry8ZuY7ZZeBQndpf%2F5g7Kkd2dmyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYnxJ1gSqeY7SWc%2FlKtwDYJ5TpPtvqM3%2BQ3RIUzBUdF9717ALlkM2G0WYI%2FX4H0OJuFOi3FKlBErdFdomzwffDhgW%2Brw8n63rJTgTaTg2Mtorm%2FMUbhs7INfeTk9JWfuPBh2F%2FFv1dPRZ61KoZb%2F7YpBcPxT0LA%2BsXXAc7LEKvKttkY46eOEyJh%2Fv%2Bf5AsKAglSXEw7tqeAIy2j7Dm56WWjcFoOEpZkBP0t%2FUQd8CTFPn9JATKR1p4XLBbYXSwI26GjPkJiW5pUQy20%2BKOll9jpQA8ftmzwvTODXLBlcu50wuJAcUZlwFa%2BqhrCo%2BraEu9netANWzPjhMezfKoW5x45e2G5y%2F1%2Bv%2F2yecpV0Z%2BdRQ72hWAe5WdgN4b1iKN2NBJRH37GJqE19Hn3N2ygqGBBJ3snVofcvFnygk%2BoKy2NXvkYNNFW%2FEFp%2BScudONnQWo1ItAKlX1ashIKvk9vHUcdQFDh4mjwnOXaPzynwiqdmvfB4FwESD3jg%2BaVJAbFEJTe%2BpjF%2FBHLxIjBrD6R9BsltDIpz8IuS6Onojyr2L46JaRtA0SYlYrg8ZHVUoXq4LpmlTQTLkyJ2AZ%2FkBzhVjIL%2F8P31%2FKrzbR15t5Sdh%2BXoYEO9JmgtLXfvD%2BKK8sv3Mrf35fInumV5wMfgw2Yq6wAY6pgE24u%2BHQD63CBPf7EuaWszO8JGUHkE%2FXpWAvjXMScwpSZVgYB7TewwK3AaCbp3BdF8JfiCrOgrbbtcIb2DSqzKBYustHkgL9GjcMjQYln7nZKsgb%2F9bzX84iEjSVEE7Lxb4t5k%2BBCq7kF%2BWj660nNFW3o%2BAelW0nCI6RRCnLqWVNbLgcB4moaSOKUqWu623aY%2F6GGRP2OmhqMPnjYoGhgNld90XlgvX&X-Amz-Signature=2cf40cd2a1fe00d5fd70e87a3c767ccb915e43dd76e08d5c57e1699bf5ac509a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKNOI6X%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQk33s0Y1yLEaBN8qMdwfUKBpYQ3ApGPF04hwViNLAKAiBkKvctvguMP8IasbYry8ZuY7ZZeBQndpf%2F5g7Kkd2dmyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMYnxJ1gSqeY7SWc%2FlKtwDYJ5TpPtvqM3%2BQ3RIUzBUdF9717ALlkM2G0WYI%2FX4H0OJuFOi3FKlBErdFdomzwffDhgW%2Brw8n63rJTgTaTg2Mtorm%2FMUbhs7INfeTk9JWfuPBh2F%2FFv1dPRZ61KoZb%2F7YpBcPxT0LA%2BsXXAc7LEKvKttkY46eOEyJh%2Fv%2Bf5AsKAglSXEw7tqeAIy2j7Dm56WWjcFoOEpZkBP0t%2FUQd8CTFPn9JATKR1p4XLBbYXSwI26GjPkJiW5pUQy20%2BKOll9jpQA8ftmzwvTODXLBlcu50wuJAcUZlwFa%2BqhrCo%2BraEu9netANWzPjhMezfKoW5x45e2G5y%2F1%2Bv%2F2yecpV0Z%2BdRQ72hWAe5WdgN4b1iKN2NBJRH37GJqE19Hn3N2ygqGBBJ3snVofcvFnygk%2BoKy2NXvkYNNFW%2FEFp%2BScudONnQWo1ItAKlX1ashIKvk9vHUcdQFDh4mjwnOXaPzynwiqdmvfB4FwESD3jg%2BaVJAbFEJTe%2BpjF%2FBHLxIjBrD6R9BsltDIpz8IuS6Onojyr2L46JaRtA0SYlYrg8ZHVUoXq4LpmlTQTLkyJ2AZ%2FkBzhVjIL%2F8P31%2FKrzbR15t5Sdh%2BXoYEO9JmgtLXfvD%2BKK8sv3Mrf35fInumV5wMfgw2Yq6wAY6pgE24u%2BHQD63CBPf7EuaWszO8JGUHkE%2FXpWAvjXMScwpSZVgYB7TewwK3AaCbp3BdF8JfiCrOgrbbtcIb2DSqzKBYustHkgL9GjcMjQYln7nZKsgb%2F9bzX84iEjSVEE7Lxb4t5k%2BBCq7kF%2BWj660nNFW3o%2BAelW0nCI6RRCnLqWVNbLgcB4moaSOKUqWu623aY%2F6GGRP2OmhqMPnjYoGhgNld90XlgvX&X-Amz-Signature=9b7b6178b50bfd620f0ba30823b9bb2a05cbe6488cd290d5fd027a019efc5c83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
