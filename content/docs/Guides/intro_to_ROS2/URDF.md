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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUQOBRS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9Ni%2BcZUVuiDf4UlL2SnhMpllh80TlZvWLhdQX8MBm2AiARwUZa76bkfpDuBuCTLmioEaWK3napDzJeUY02FwB8hyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMIwnR09yfb%2B4kkU8jKtwDp4TUiaOqI%2Foh0o9TWfzTpWOwMbjkkRIH%2BxcquaE10e348Vnrw%2FlYfilRfEj25tLduYC40gAR6D67Hw0i8IwCbHR4ZUdo5voi%2BW4u2NVzCnLyBsPeqIO6LpkhNNZderZZ2QzMtSvwVHbs2vEXx5d4I2bsC%2FxGuL0rLeATTCaZeOycbwhx97jcFxLzYhd7SY9dZaX3Gr1m6taBN24jXoe4jCzpdV4N339lEZWc9mOHDOBM3sZ6Huz5Syg0QYgn8YsjL4muXWXItqSfySWLKU1sYVOeb1lC9caGgBACkM2EvYMuUyIkBf4TXQVhNw90v2ZdL%2BLFIeJKtThZChevxCwXWYL7xdKLM4druq9g9cnJuedBZ8NtH%2B1C2hwfxOBo9On0lhhOnPJepMdsFkVUHTQu388d0tfkw6iiCL3UtasdQONxrDqhvDLduhryBtXJvJ9wUNnB3NSkYr31v0BWh20lGHmpbiek4UloqiMpqbeuOR0vkgTkOd07j1ZztMnEPxV9LgU6DM2uWd5EcGz1J7BjEceBV8xdq4MuSZeqtc1dFWbkdf3WqtUz86KnoOGbJA9mScXhDoV11f%2B6kI%2FKMndXtYcoZMyeJisOiMwQXogb8byzLjSxy1FAsmxzJQ0wt42xwAY6pgGcWwJ%2BAojWi2iAZrZzsRVfYE4q6Z4k%2B%2FvFDAKy7F8Lxifv4hBiY69K5b7SVNt98%2Fti6dKwAurQg6h0kanD%2B9PZ66keQXoqc%2F8x93iiPCUwjdn4b64rX4kUtSAPJGfng%2FmF%2BdvFtrO3cpT84nqBibn65aAYcCoUVwHsVUOUgRyIQsE4SaAvj8fJ%2FqObu0Et%2FK34Ql5Q7UuIRcQf6BkWxx%2By%2FFyG7sjZ&X-Amz-Signature=0a11e245a591bcecb243bdb4b533965ac234b1475a255617b2a23d0cc2e008fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUQOBRS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9Ni%2BcZUVuiDf4UlL2SnhMpllh80TlZvWLhdQX8MBm2AiARwUZa76bkfpDuBuCTLmioEaWK3napDzJeUY02FwB8hyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMIwnR09yfb%2B4kkU8jKtwDp4TUiaOqI%2Foh0o9TWfzTpWOwMbjkkRIH%2BxcquaE10e348Vnrw%2FlYfilRfEj25tLduYC40gAR6D67Hw0i8IwCbHR4ZUdo5voi%2BW4u2NVzCnLyBsPeqIO6LpkhNNZderZZ2QzMtSvwVHbs2vEXx5d4I2bsC%2FxGuL0rLeATTCaZeOycbwhx97jcFxLzYhd7SY9dZaX3Gr1m6taBN24jXoe4jCzpdV4N339lEZWc9mOHDOBM3sZ6Huz5Syg0QYgn8YsjL4muXWXItqSfySWLKU1sYVOeb1lC9caGgBACkM2EvYMuUyIkBf4TXQVhNw90v2ZdL%2BLFIeJKtThZChevxCwXWYL7xdKLM4druq9g9cnJuedBZ8NtH%2B1C2hwfxOBo9On0lhhOnPJepMdsFkVUHTQu388d0tfkw6iiCL3UtasdQONxrDqhvDLduhryBtXJvJ9wUNnB3NSkYr31v0BWh20lGHmpbiek4UloqiMpqbeuOR0vkgTkOd07j1ZztMnEPxV9LgU6DM2uWd5EcGz1J7BjEceBV8xdq4MuSZeqtc1dFWbkdf3WqtUz86KnoOGbJA9mScXhDoV11f%2B6kI%2FKMndXtYcoZMyeJisOiMwQXogb8byzLjSxy1FAsmxzJQ0wt42xwAY6pgGcWwJ%2BAojWi2iAZrZzsRVfYE4q6Z4k%2B%2FvFDAKy7F8Lxifv4hBiY69K5b7SVNt98%2Fti6dKwAurQg6h0kanD%2B9PZ66keQXoqc%2F8x93iiPCUwjdn4b64rX4kUtSAPJGfng%2FmF%2BdvFtrO3cpT84nqBibn65aAYcCoUVwHsVUOUgRyIQsE4SaAvj8fJ%2FqObu0Et%2FK34Ql5Q7UuIRcQf6BkWxx%2By%2FFyG7sjZ&X-Amz-Signature=aaa7f3b8ec430531a59cfe64d14d54c7ecd67cb66a7347ff0b0ba7cfe896caab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
