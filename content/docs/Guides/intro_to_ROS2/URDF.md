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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6OZVQH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2AC%2FJ04kmoN%2FocorJsMzuyT4fGZdaTquLA1RFMDg%2BXwIhAKVpPr0MxgsxT%2FLvnKBBdkSjMcK3IP0ScJeFBH6LBoJhKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0U4Lfuv9pDDUb4gcq3ANVYt9%2FmKnMHx4OXgd4mBqmAlhtn05aplEmJXTgXuxu08DnLMifsuAS3fPiMeg8TCU2vQJ1RyzFE0FhDdKd6WSlRgoxC07vIXrUM3826EQ9OuxM3Ksllgx3IhSloc6FrA8UVzhnaYba1dAd7ELodOc7X0fkcPECPUoyIP6tTSqKTvmSRlaDWUG4nsW7LHiqMrLxaZz3pIAJys6P8Wy%2FOY7YQwpu3PXRYdfzUtu6JlFMGt%2FYL3mYPFfo%2FUGID88mBg8sLo7D6mGnFH4pNLQcy2DayChnEr2AjPqXHdaRIl%2BU%2FkELhl4XgH8UwcxoNqBVGuUztCS3kNsqeS1UsHonqXb0aMYch8zSe2jpLK2xLIR8EIpl3K9Q1QT3XWid%2FsSNBjLYGwv8NURsMc9r0yAgMMIiA2QtO4JNQc2phS%2Fv4YxydcAT%2FhKzQlx%2FTRrwPK4wBl5Zn%2B%2FA%2FjMYd6XUUAMjVcaSai95NMloIM7wo8XAgFI10ozWAxhLpF%2BwEd69VQReFS460no68ITXapeazcQAmmtqBABE6pVkeIccStqldHgDD%2BfqRhmMLCX1VZgZBQeDndLLHQs%2Fm%2FH7FmYj2nG%2FLgM9CXe4Qn2u%2BlDgL9CJerlEE1bH416fTlMo9SrxaDDenoS%2FBjqkAaXQfR3EDAPcNg3%2F%2FS5spSASCV4bqH0NDenroL%2FN4fkIcG%2BJFMGN349787IgrX8sJw%2FNtnYukRDFSsKRHKKm9OpMmr5tO1EzeiTN67sbeCHydK9zRSRINaV1oDAjeOgYUAY3FqA77ldIpPHd9B%2Bc%2BcDHsbZKBb2KXdVhVr%2F8Sddz3UZGVZTudleg8ScDgxS5OL23jxY5NVOabvF6uOsuoIW%2BR%2Ft2&X-Amz-Signature=493d2f15278b267ddbec55e424fc75bc6ea00d87174fa5d248a8aba0507337c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6OZVQH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2AC%2FJ04kmoN%2FocorJsMzuyT4fGZdaTquLA1RFMDg%2BXwIhAKVpPr0MxgsxT%2FLvnKBBdkSjMcK3IP0ScJeFBH6LBoJhKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0U4Lfuv9pDDUb4gcq3ANVYt9%2FmKnMHx4OXgd4mBqmAlhtn05aplEmJXTgXuxu08DnLMifsuAS3fPiMeg8TCU2vQJ1RyzFE0FhDdKd6WSlRgoxC07vIXrUM3826EQ9OuxM3Ksllgx3IhSloc6FrA8UVzhnaYba1dAd7ELodOc7X0fkcPECPUoyIP6tTSqKTvmSRlaDWUG4nsW7LHiqMrLxaZz3pIAJys6P8Wy%2FOY7YQwpu3PXRYdfzUtu6JlFMGt%2FYL3mYPFfo%2FUGID88mBg8sLo7D6mGnFH4pNLQcy2DayChnEr2AjPqXHdaRIl%2BU%2FkELhl4XgH8UwcxoNqBVGuUztCS3kNsqeS1UsHonqXb0aMYch8zSe2jpLK2xLIR8EIpl3K9Q1QT3XWid%2FsSNBjLYGwv8NURsMc9r0yAgMMIiA2QtO4JNQc2phS%2Fv4YxydcAT%2FhKzQlx%2FTRrwPK4wBl5Zn%2B%2FA%2FjMYd6XUUAMjVcaSai95NMloIM7wo8XAgFI10ozWAxhLpF%2BwEd69VQReFS460no68ITXapeazcQAmmtqBABE6pVkeIccStqldHgDD%2BfqRhmMLCX1VZgZBQeDndLLHQs%2Fm%2FH7FmYj2nG%2FLgM9CXe4Qn2u%2BlDgL9CJerlEE1bH416fTlMo9SrxaDDenoS%2FBjqkAaXQfR3EDAPcNg3%2F%2FS5spSASCV4bqH0NDenroL%2FN4fkIcG%2BJFMGN349787IgrX8sJw%2FNtnYukRDFSsKRHKKm9OpMmr5tO1EzeiTN67sbeCHydK9zRSRINaV1oDAjeOgYUAY3FqA77ldIpPHd9B%2Bc%2BcDHsbZKBb2KXdVhVr%2F8Sddz3UZGVZTudleg8ScDgxS5OL23jxY5NVOabvF6uOsuoIW%2BR%2Ft2&X-Amz-Signature=bf88e1aa614550ea54b2838df7c76f28cbaea571f7bc3e32cdd7a01c2eca1f82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
