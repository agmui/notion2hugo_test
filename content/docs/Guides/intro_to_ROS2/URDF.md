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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTESOFW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICj2WZ8KzNbkHCpWbhjGx5I9ufWXWOuvmy7RHsDg4wIUAiEAwnvssd3RkBbacfR6Tr%2FSxzM9uDihnhXHB5abK1qzaFcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFAPnX0azANQHPtmNyrcA%2FyKagWP%2Faz4XgKnGBL%2FCEJjElRRi68qYFQJaryHSKrfEWgJznm8lRXUMmX9eBWHkN6S8951C9Z4HoZiSisv%2BtzCpXzZ7Ku6Gm8hnApHa4EWZ0yXuJGQznLLKvzhxbL58YyluO0DpJAmN60s%2Br3%2BbH10vMaBNmX%2FDz0grOTHnqdDFvWYMb4V%2BhI%2BEJypwstmfIhYyw3qnMfaci4m5ShNi4HhuyQzuqK2AU6x0xT1qeUAD4TnI57bVR2QGVZWhnkMAVKRJIGxvTtbrp9Y16JUEFUkInc7Kjrz9ftQGNJ3l6TeAp5bpQ8lGlYe26YgPzBhB%2F%2BrFYr%2BVw2MDqE715oJ%2FOsD38kffM1Fy6WyZKi62pIlkSdi1f2Rg2TIc48D8bzZf1%2FnVwEVqsMpmr0ZyLnrhVIWQ9Sv7MvMHoV6D%2FH6sAaesxqYl9sKL6YyqqEKDkERru73WLwbXnBVjWfVHje7QLf7Pz%2BVlDN42ujAp9GwS2ZoRh7C5VrbtxGInKjtjAExwNDY%2F9u%2By5%2BrJc2NoKjeLzUB2UEORUMie9NGfEwR8kFuiAEjkXJS6xKiuc2RBQCdPjp7%2FqNLbx3rmS0Rxhxx7WYaydnku10Mn%2FMTj0a3ToXhfRVoU5ZHRMvWbuPHMPa7m8MGOqUBH%2BykMFhvrjYAlax0bVh5f7dqUUGOtM%2Fd%2BzsVeKPkzXS2v%2BVutN6kEeSsg6VHTsqbqKsrr%2BBFzcR7q%2BlBSFQdJC8ZIhAhWzXSZPXolGezeb7U3%2FLz6A2TyEnjb%2BSmQfZl%2FpAitG1NFCv743oA919Ktx3Ay0ulz2Mg9s6LhRqIZ9MRpU%2FR%2BkqAWgK8fIHzfgE1kmyOhOnfhydEAWrcQ1BPmki2I8Y%2F&X-Amz-Signature=f26418ae171fe0b5a340f5db670c250d452bf8605ddc41a849627ecaf5cb6090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTESOFW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICj2WZ8KzNbkHCpWbhjGx5I9ufWXWOuvmy7RHsDg4wIUAiEAwnvssd3RkBbacfR6Tr%2FSxzM9uDihnhXHB5abK1qzaFcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFAPnX0azANQHPtmNyrcA%2FyKagWP%2Faz4XgKnGBL%2FCEJjElRRi68qYFQJaryHSKrfEWgJznm8lRXUMmX9eBWHkN6S8951C9Z4HoZiSisv%2BtzCpXzZ7Ku6Gm8hnApHa4EWZ0yXuJGQznLLKvzhxbL58YyluO0DpJAmN60s%2Br3%2BbH10vMaBNmX%2FDz0grOTHnqdDFvWYMb4V%2BhI%2BEJypwstmfIhYyw3qnMfaci4m5ShNi4HhuyQzuqK2AU6x0xT1qeUAD4TnI57bVR2QGVZWhnkMAVKRJIGxvTtbrp9Y16JUEFUkInc7Kjrz9ftQGNJ3l6TeAp5bpQ8lGlYe26YgPzBhB%2F%2BrFYr%2BVw2MDqE715oJ%2FOsD38kffM1Fy6WyZKi62pIlkSdi1f2Rg2TIc48D8bzZf1%2FnVwEVqsMpmr0ZyLnrhVIWQ9Sv7MvMHoV6D%2FH6sAaesxqYl9sKL6YyqqEKDkERru73WLwbXnBVjWfVHje7QLf7Pz%2BVlDN42ujAp9GwS2ZoRh7C5VrbtxGInKjtjAExwNDY%2F9u%2By5%2BrJc2NoKjeLzUB2UEORUMie9NGfEwR8kFuiAEjkXJS6xKiuc2RBQCdPjp7%2FqNLbx3rmS0Rxhxx7WYaydnku10Mn%2FMTj0a3ToXhfRVoU5ZHRMvWbuPHMPa7m8MGOqUBH%2BykMFhvrjYAlax0bVh5f7dqUUGOtM%2Fd%2BzsVeKPkzXS2v%2BVutN6kEeSsg6VHTsqbqKsrr%2BBFzcR7q%2BlBSFQdJC8ZIhAhWzXSZPXolGezeb7U3%2FLz6A2TyEnjb%2BSmQfZl%2FpAitG1NFCv743oA919Ktx3Ay0ulz2Mg9s6LhRqIZ9MRpU%2FR%2BkqAWgK8fIHzfgE1kmyOhOnfhydEAWrcQ1BPmki2I8Y%2F&X-Amz-Signature=52ee07e90228f4fbdb064bd5e9c294ff18450fdcb706a6d247817f2a74431d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
