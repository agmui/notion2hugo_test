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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52IXX7L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCGYSSG8jYZWx9IUE258Yo1Y8nTh3qdA5W0DiyFR8S1kwIhANWJcQgEHqSlbGWczVKG5t1%2FTabKoBhyWORRmhKLHP1bKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCj6gkIwk3tBzPsFwq3APt%2BjtsjqS54L8QITKzpreORPCh%2F3kfv7aNf25jbZ%2BmWxAyb%2FrZ6VlRl%2BS9oNSJgtqJcJoDqt58R2j4%2Fkism9Udu5ZZFSSCR6e41aKEhV1%2Bjg8E1JbxNfMhcmyGCncBQ5vUvCZS%2BXYjKBIeOwqbBbnDv%2BVKgKzWun8P1pMvMsE2u2PTv6zvAnxEqApsHayLJzQoC3kk0%2FfUTV9qeYKjkSCiFScwsVQnzr1x1hyyvw8XDQajft1zSrlDxN6qq%2BpH0XGdmi9OSf5dQb9xIrS2L0eLhsDrIabXQfqDDrZF%2FAK5VmJOlRQikBrYN7O2LKOE6CF02P0DYI%2BrRB4KJumkPmPH3p8kHtgTVbP2O%2FjUROGHnEopKaJI97nF363Vb2%2B7Q%2Btiap9HZq9HMaWwfFyyWl6%2B%2FC%2BdnAOnN2FA9SLDF15Q%2FdpXsKFbXG8XqDe89BhPVmTFcn6XRJuIFmF6nEMhk3BurPNPLHIcDuGY1qDmXkhA%2FMddiSIwwnQiqYBD8odte7TRbRa6Z5aBNsp2sJ3LZbvfgAXTgQySuwTLwLuAmPMsYO45q7Zj1zsF6ivMZU0yE8DUrhvEdir2otsQK7pYPxtVGgUXXqUQELiyy1%2B31eGRIK7rh3X9BpOeMqk34DDG4rzBBjqkAWSFXUY%2B35sYxa5J6vV3%2BqSn67%2BgC7JqsJkKtGF7W9urFhjpSOCHM6PrjbwIfJvFuqCZG8%2FfpV9lh01dRYjdZQeydMRFB06nHHxxz8fue1ZXgGzv3gv%2Bwi3kjqkkNYdUi9KO9w3Y3ACk%2B9MMGkhTFnWefGenWvlyCVcrTU8YRUanoIaQtgOoscNTPsJyWySA6Q5Dx0Zj67AKRa43N1gyDpWK7MHf&X-Amz-Signature=37f967ff2f4fd1edec2805cb07dc275b3b407aeea6f937c865805abab6b95260&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52IXX7L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCGYSSG8jYZWx9IUE258Yo1Y8nTh3qdA5W0DiyFR8S1kwIhANWJcQgEHqSlbGWczVKG5t1%2FTabKoBhyWORRmhKLHP1bKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCj6gkIwk3tBzPsFwq3APt%2BjtsjqS54L8QITKzpreORPCh%2F3kfv7aNf25jbZ%2BmWxAyb%2FrZ6VlRl%2BS9oNSJgtqJcJoDqt58R2j4%2Fkism9Udu5ZZFSSCR6e41aKEhV1%2Bjg8E1JbxNfMhcmyGCncBQ5vUvCZS%2BXYjKBIeOwqbBbnDv%2BVKgKzWun8P1pMvMsE2u2PTv6zvAnxEqApsHayLJzQoC3kk0%2FfUTV9qeYKjkSCiFScwsVQnzr1x1hyyvw8XDQajft1zSrlDxN6qq%2BpH0XGdmi9OSf5dQb9xIrS2L0eLhsDrIabXQfqDDrZF%2FAK5VmJOlRQikBrYN7O2LKOE6CF02P0DYI%2BrRB4KJumkPmPH3p8kHtgTVbP2O%2FjUROGHnEopKaJI97nF363Vb2%2B7Q%2Btiap9HZq9HMaWwfFyyWl6%2B%2FC%2BdnAOnN2FA9SLDF15Q%2FdpXsKFbXG8XqDe89BhPVmTFcn6XRJuIFmF6nEMhk3BurPNPLHIcDuGY1qDmXkhA%2FMddiSIwwnQiqYBD8odte7TRbRa6Z5aBNsp2sJ3LZbvfgAXTgQySuwTLwLuAmPMsYO45q7Zj1zsF6ivMZU0yE8DUrhvEdir2otsQK7pYPxtVGgUXXqUQELiyy1%2B31eGRIK7rh3X9BpOeMqk34DDG4rzBBjqkAWSFXUY%2B35sYxa5J6vV3%2BqSn67%2BgC7JqsJkKtGF7W9urFhjpSOCHM6PrjbwIfJvFuqCZG8%2FfpV9lh01dRYjdZQeydMRFB06nHHxxz8fue1ZXgGzv3gv%2Bwi3kjqkkNYdUi9KO9w3Y3ACk%2B9MMGkhTFnWefGenWvlyCVcrTU8YRUanoIaQtgOoscNTPsJyWySA6Q5Dx0Zj67AKRa43N1gyDpWK7MHf&X-Amz-Signature=cc59426933f99bf5c9d303609a98aa4a5bfd9d7247995e5d5d26bb3e02cc3807&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
