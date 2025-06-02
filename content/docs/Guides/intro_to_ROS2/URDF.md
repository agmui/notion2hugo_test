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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXD52GT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICqCkMOho6NaO2dWewH7R%2FAsFuGdgmqPGY4LdfNqWLXsAiEAiNhqbgrtr22hflLOVPYaN5c4by3qn00u5CEHJELZ6yEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoE1r5uYB2rp97EFCrcA2QWmXJrDIvgeY4mCNOrv3bpkHklb3RMZWCQOH%2BlPsGgRWdLKDGH3mH19eWU%2B0sPY2K%2Fv0fz8aKEiNTMEugu9EsVVUptaoWziUlLAQvi4ksAng0uf97GdU%2FacLZZ6o298i5zfKbGiSeqp%2Fmtl6PWKe19x7P4Au1Q%2Be8ocP1tQNUxxgEGg2ZS8nVY3Jkit%2B4nk5DhEKYQuKYx6CDpXakMhacxwNVvG8ZsZWL9Sc98ep7IOL9oWY2OVn8mhg50SI3y46go%2F2IsbyaQwh9%2Fyt6O%2Bz1hKDpmvKW6fef7tjbFJvIukhZ79NNGOrViGi%2B8KPqubC1bOaWLO7lv3orXUniBdsH1tCPHd5SKbNBaqwViIh%2Bo8yftQAaEAxTifU0TVHUe%2BaTg1Q6uR2d4vA59Li2mGU%2FaRT8SvWkgYuLIepN7kGNWGB0Y%2FUGOTTaY7MOMWw1C7BA6t5W8BvFVfsKbaP5bd9OQwC0BMKFWcEZaX7GCYhUh9x7VyTGYb1Px3pfR7XRbMvrJ4miSVoCVgfl20k4S5EEVWR9iutYFB13yOFAUP6yZvRy%2F6syEcZH4audymjkxFSXFZa%2ByKXsJL3xrRVbd3QEyAPtGNHbmU%2Bfje1Z56dGus1EGQlWhdRWz8EPRMPuv9MEGOqUBg5i2O4rfeK42Uc0DbcXwJMDQEJ4BtrHurEoahc23D%2B%2BzBbPuZ0SueYz2HkiHDVDtsileSkfGMsoXlWr7XxeQKZIqetd8f4rgiYC6KH63nCqEAGukkAIHIhZ6RCa4EiiPnvXf03jWZaYunhUMhNNCd76OvIW0SkNW5DjMGquvnw0MxtNrPEkCM3bBLx5uN03KGF0xQUZu%2Bdhab%2BXFk9jrETASYShc&X-Amz-Signature=a6da193202ed86b78d071e83781a5a44932390e09aea254ba6f0a18ac8d89e65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXD52GT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICqCkMOho6NaO2dWewH7R%2FAsFuGdgmqPGY4LdfNqWLXsAiEAiNhqbgrtr22hflLOVPYaN5c4by3qn00u5CEHJELZ6yEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoE1r5uYB2rp97EFCrcA2QWmXJrDIvgeY4mCNOrv3bpkHklb3RMZWCQOH%2BlPsGgRWdLKDGH3mH19eWU%2B0sPY2K%2Fv0fz8aKEiNTMEugu9EsVVUptaoWziUlLAQvi4ksAng0uf97GdU%2FacLZZ6o298i5zfKbGiSeqp%2Fmtl6PWKe19x7P4Au1Q%2Be8ocP1tQNUxxgEGg2ZS8nVY3Jkit%2B4nk5DhEKYQuKYx6CDpXakMhacxwNVvG8ZsZWL9Sc98ep7IOL9oWY2OVn8mhg50SI3y46go%2F2IsbyaQwh9%2Fyt6O%2Bz1hKDpmvKW6fef7tjbFJvIukhZ79NNGOrViGi%2B8KPqubC1bOaWLO7lv3orXUniBdsH1tCPHd5SKbNBaqwViIh%2Bo8yftQAaEAxTifU0TVHUe%2BaTg1Q6uR2d4vA59Li2mGU%2FaRT8SvWkgYuLIepN7kGNWGB0Y%2FUGOTTaY7MOMWw1C7BA6t5W8BvFVfsKbaP5bd9OQwC0BMKFWcEZaX7GCYhUh9x7VyTGYb1Px3pfR7XRbMvrJ4miSVoCVgfl20k4S5EEVWR9iutYFB13yOFAUP6yZvRy%2F6syEcZH4audymjkxFSXFZa%2ByKXsJL3xrRVbd3QEyAPtGNHbmU%2Bfje1Z56dGus1EGQlWhdRWz8EPRMPuv9MEGOqUBg5i2O4rfeK42Uc0DbcXwJMDQEJ4BtrHurEoahc23D%2B%2BzBbPuZ0SueYz2HkiHDVDtsileSkfGMsoXlWr7XxeQKZIqetd8f4rgiYC6KH63nCqEAGukkAIHIhZ6RCa4EiiPnvXf03jWZaYunhUMhNNCd76OvIW0SkNW5DjMGquvnw0MxtNrPEkCM3bBLx5uN03KGF0xQUZu%2Bdhab%2BXFk9jrETASYShc&X-Amz-Signature=677d8bfcb7a0d7cda6bee3659f3af54046703e6832b2479ec230b47015afd722&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
