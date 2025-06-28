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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFOAHXN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbAleqQZ15wTCl3nBPzjtPVkdvBAY8g3I9fc58RaEGUAiEAzOa9sgyFSrVBngThCrLxtRnHO9yQnFdk88h%2Fb3v10u4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkILEhYrF29hHkhISrcA2iMQxQ02ZjJGN00KxY6ftYn524wjAI%2FgWlZR%2B%2FXzSs7kKz%2B0Dmtt%2Bm60vXw62sUxIjng8eGvWfHyDmo7mLQSxu%2B7poGrWm3gjJiJs1ssJ%2FcCxJgidAFuG%2FPbTR3zfYwLRLvt5OYqB9dWfyCfeZ6WV6CCZlxz4hpsoPUIgMAaQxy%2BB0Cx%2BZhtQyPMq%2FMZW3kd3DMJvYqTmq8lSsBusHDTQH2H2YFrdm1hbKi%2BovCKyx3bPWTiFQAL7Pp%2Fup3N3Mae4qm9YIx%2FVpPN95kwEm3SuL%2FvWyOirSIj0j1bX%2BaBPvf9l2lonMxgJuQvqe9rHpXoAq3V0NWJBgV%2FWCWiYf6VwuyxJ1g%2BNXMutHI2rIa%2BOeb1O%2FRNQNEcmOnoX%2FK1NdQyIogKvjpiXjrlH%2BSzqGVbqBqjcPj4TNH4lJ9jjwIUWoT8i03DmYvUGb3InyIyaxOlLF%2BQsnQcdK8PF9QsUcREZ0vdh3ix3duw5Pzp3sT0Ml1EhKf4eEwuVD3Sr42F9cEvhCE0MpR3aLoMOBvAl4nL0aco8Os%2BkI55rgKD%2Fsn67bxaY1RH7dnhAhLRg%2FuqGV7JwrXpYK2vMWUtTyDKPA0EUbVBnUZeKXdhM2pOgi30p88iSVASlQiJMORMkuzMO%2F0gMMGOqUB4d4%2Fs5xM%2BrJ0k3KK6ljVG6fVkW5%2FfnBofhU6qv4kKi9rycHGDSb35LVa21TJxOmNDPvVVM4uC4iQXX6U6s5MLv%2FNetkgp9f%2FqsPFXgRy1K47YI28CsCPyy2ZfKA%2B7rCB8eQ0Sykd57Vd%2BG3aY03eTl93olaTAqrNrBqy%2BV3y%2B8rd0BO8A9UIyg83%2Bd0vF3WX2KenSMLoHNtabD1Lp1Jv935KcY4o&X-Amz-Signature=ec5f19337dfb9e04ede245f5e86a22ea9235237a58088637cf639f116a91b450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFOAHXN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbAleqQZ15wTCl3nBPzjtPVkdvBAY8g3I9fc58RaEGUAiEAzOa9sgyFSrVBngThCrLxtRnHO9yQnFdk88h%2Fb3v10u4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkILEhYrF29hHkhISrcA2iMQxQ02ZjJGN00KxY6ftYn524wjAI%2FgWlZR%2B%2FXzSs7kKz%2B0Dmtt%2Bm60vXw62sUxIjng8eGvWfHyDmo7mLQSxu%2B7poGrWm3gjJiJs1ssJ%2FcCxJgidAFuG%2FPbTR3zfYwLRLvt5OYqB9dWfyCfeZ6WV6CCZlxz4hpsoPUIgMAaQxy%2BB0Cx%2BZhtQyPMq%2FMZW3kd3DMJvYqTmq8lSsBusHDTQH2H2YFrdm1hbKi%2BovCKyx3bPWTiFQAL7Pp%2Fup3N3Mae4qm9YIx%2FVpPN95kwEm3SuL%2FvWyOirSIj0j1bX%2BaBPvf9l2lonMxgJuQvqe9rHpXoAq3V0NWJBgV%2FWCWiYf6VwuyxJ1g%2BNXMutHI2rIa%2BOeb1O%2FRNQNEcmOnoX%2FK1NdQyIogKvjpiXjrlH%2BSzqGVbqBqjcPj4TNH4lJ9jjwIUWoT8i03DmYvUGb3InyIyaxOlLF%2BQsnQcdK8PF9QsUcREZ0vdh3ix3duw5Pzp3sT0Ml1EhKf4eEwuVD3Sr42F9cEvhCE0MpR3aLoMOBvAl4nL0aco8Os%2BkI55rgKD%2Fsn67bxaY1RH7dnhAhLRg%2FuqGV7JwrXpYK2vMWUtTyDKPA0EUbVBnUZeKXdhM2pOgi30p88iSVASlQiJMORMkuzMO%2F0gMMGOqUB4d4%2Fs5xM%2BrJ0k3KK6ljVG6fVkW5%2FfnBofhU6qv4kKi9rycHGDSb35LVa21TJxOmNDPvVVM4uC4iQXX6U6s5MLv%2FNetkgp9f%2FqsPFXgRy1K47YI28CsCPyy2ZfKA%2B7rCB8eQ0Sykd57Vd%2BG3aY03eTl93olaTAqrNrBqy%2BV3y%2B8rd0BO8A9UIyg83%2Bd0vF3WX2KenSMLoHNtabD1Lp1Jv935KcY4o&X-Amz-Signature=dfcf3f1bd21883d4acaa5dd3db6468faeee18f85bcc363f9e9219ec78936ba3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
