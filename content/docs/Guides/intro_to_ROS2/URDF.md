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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS4UDIR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD7TGoOd50wljqHyiBYFEFwhrHMaq3uNWNp%2BRlHMezcSgIgMeCsOF7AiZ9r0ShxkM4IesReCg%2Be47zD4cPhuBahLkAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEknQzHbQw3N2WNRhCrcA6okCnol05fCbVKsIh5FP%2Ff8eqpoEdGByZIAiLVCwXyOjvycMHqTflczI1LsS%2B8vr0XHFvmkLa55ExnYrMdYbg50SFGeZ5Vlz6vw4CmSTt79kN7GoPnW5vfoDUx2LRQzrYCQd%2BqfUv%2F4AAW5AjjOTpc%2Fck04lxs1e4oiWAN26cnnmdFK8qZ3sRZ9t8g9%2BhhiJOw9DzyMui01zG86SaGK%2Fy3aPC2ymQs2TPCC5jhJwc%2BFUbdf%2FOb6T1Luf6owUCOX9yx7%2FSi0TR0MsD9neGOb8Cor%2BXZJuafxBF7DYtP4GTTU0TEp4SB917O3qGqlAEiffJz%2FECs0fxlKykYq%2B3hhg9LqJCDFbEnSrrCnTNjTpjPC98TgGuqHVC1exV14uIUPi0LFXNP3vN8n4iBQgav8%2FdqMJusfXG8S40iP41dLXzCLz9xdCIXDnEQmuGKMR3K19yJP6uQfjsxhxJE2Z%2BEDWg147S1U2d6hUIG6wQgpkDG%2Fu72RFUahIKjOjWGIxh6lov7SLCWFMc1RjPVrzWRhgcvsQV70x4bAv2cAlUpSlOxd3c%2BBvZrjnEoTec2mNFl1czZf2W1J6HBJdj1AXUJGwloUIB4Ie1MGur7rx%2F3dLG1dhGTXBQAdPaAUygOhMJqdiMEGOqUBYLQICtnbFxpib2C3UrJHBDJnpR5s4YoMpYWQ9zHJW43Guwx1XzHAyEmilF29Og9k948J2Mh%2B0jZx9Hhr09g9P68qrBdivhBmgKvuFlhQh4r0DQn1H8NDea0l1V7CghzOvXG9Dq6qFMgsLdVeKVSrPgXtMtxGOWpz42k8rLr7OV2n0DGm7cJkUJfdeBI4KsZP6ZyzwZwIeGEjCC%2FfBVEhQLJVCBH6&X-Amz-Signature=d00690cb7e18325ca6093d8e7705e728dc1d0029187194b398aac93d74bb9455&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS4UDIR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD7TGoOd50wljqHyiBYFEFwhrHMaq3uNWNp%2BRlHMezcSgIgMeCsOF7AiZ9r0ShxkM4IesReCg%2Be47zD4cPhuBahLkAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEknQzHbQw3N2WNRhCrcA6okCnol05fCbVKsIh5FP%2Ff8eqpoEdGByZIAiLVCwXyOjvycMHqTflczI1LsS%2B8vr0XHFvmkLa55ExnYrMdYbg50SFGeZ5Vlz6vw4CmSTt79kN7GoPnW5vfoDUx2LRQzrYCQd%2BqfUv%2F4AAW5AjjOTpc%2Fck04lxs1e4oiWAN26cnnmdFK8qZ3sRZ9t8g9%2BhhiJOw9DzyMui01zG86SaGK%2Fy3aPC2ymQs2TPCC5jhJwc%2BFUbdf%2FOb6T1Luf6owUCOX9yx7%2FSi0TR0MsD9neGOb8Cor%2BXZJuafxBF7DYtP4GTTU0TEp4SB917O3qGqlAEiffJz%2FECs0fxlKykYq%2B3hhg9LqJCDFbEnSrrCnTNjTpjPC98TgGuqHVC1exV14uIUPi0LFXNP3vN8n4iBQgav8%2FdqMJusfXG8S40iP41dLXzCLz9xdCIXDnEQmuGKMR3K19yJP6uQfjsxhxJE2Z%2BEDWg147S1U2d6hUIG6wQgpkDG%2Fu72RFUahIKjOjWGIxh6lov7SLCWFMc1RjPVrzWRhgcvsQV70x4bAv2cAlUpSlOxd3c%2BBvZrjnEoTec2mNFl1czZf2W1J6HBJdj1AXUJGwloUIB4Ie1MGur7rx%2F3dLG1dhGTXBQAdPaAUygOhMJqdiMEGOqUBYLQICtnbFxpib2C3UrJHBDJnpR5s4YoMpYWQ9zHJW43Guwx1XzHAyEmilF29Og9k948J2Mh%2B0jZx9Hhr09g9P68qrBdivhBmgKvuFlhQh4r0DQn1H8NDea0l1V7CghzOvXG9Dq6qFMgsLdVeKVSrPgXtMtxGOWpz42k8rLr7OV2n0DGm7cJkUJfdeBI4KsZP6ZyzwZwIeGEjCC%2FfBVEhQLJVCBH6&X-Amz-Signature=f4ef170c0e50aa1b028c46b9e31d358a5812e6eb8eab09fee1cd4ed93fad7481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
