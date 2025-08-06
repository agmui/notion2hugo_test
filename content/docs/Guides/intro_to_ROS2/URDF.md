---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54OAGRI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD2HgpCHVAV3204zCOH1p6hffiEyFTexOurSHGm01wYrgIgHbcfcIyMpmqSoLlXZLT4MbNLZFQ9GSu3uloHdKLJL%2B8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJgotazkhy%2BX7ppaJSrcA4An79%2B47vZ5757aLN%2BwUtIp08fBIsuW%2F46xaho9D7sYl62EldEcvxmAmFtufdKFtdoxKIgxyeTr%2FNobLYdWsqNCdNOf3FbPFNYX81%2F6LrKRPIGzocgVa7pk65OHCVB14aKGi0bymd1fmvlQY93vvaFAMppRwqvOi46nWIJV%2BwhJGmuenPpRQhdaIqACB0jyWLLOCYYAp9%2BNoZjiXM93toGqif7qhw5CanYdSR1Tff7N%2BHYChBDiN1Fof4fRgI%2BGFqGKr9d0YJ8HwD4m20o1L4g2%2BgcrWUCNhUycZhjoEKU1NqljD94ugLCO%2FOg0UCdBFnLO2KPfr6JyMlP89T%2BWCEfpjqbMJ7gZwxu6at8TEsG%2FqrHd9wXRsnkFLFyZMk05YGxyyRVur%2Fuyi2wAkB7jfHgJ1VJB7v80EjLKzfzEtF%2FUIu1jRPQwzto43wyiCtew1Lw9fZzlF%2BCcxD%2F9CuI9xLUJqr75vPORxrTEEm4mXg263zUTokvYkA84oR09bc0lvChQPftAhEs1DxocdfQLzWhzzK21WD2q6xvfZfdIgCpJ7NWaHP9%2F6seG8nwq0ksHVVxdrt2igN9iNR384ya8nKvCsJ%2F%2F5wXGeb7pDRAxW5LGliqQFyoD3wsc4q8rMPfOzMQGOqUBVFL9Ovmc21L9yEJJwH61cyHV2gsA%2BjzZ2KI3%2BL4DKutfxnYzKPOsh3nDVK6ks6KnVs08xahZ1ZXNzNWJsMOWKxwZoj4eUOEqupAWEKA7oSRGo%2FcOW5fXDa11USwbg2iJSQZs9puE6Tym0mYJak2X%2FWgspqz9Uu2FGMYVFWAfxnDXaNAihD%2BeUg7mzpP9cer21F5jCAVlLwUXCq3H7L7lC8G0iLs7&X-Amz-Signature=1dfa20d2615fbd20e96a60ded7b2bad033122c2147528279ec4bc17deddf88e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54OAGRI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD2HgpCHVAV3204zCOH1p6hffiEyFTexOurSHGm01wYrgIgHbcfcIyMpmqSoLlXZLT4MbNLZFQ9GSu3uloHdKLJL%2B8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJgotazkhy%2BX7ppaJSrcA4An79%2B47vZ5757aLN%2BwUtIp08fBIsuW%2F46xaho9D7sYl62EldEcvxmAmFtufdKFtdoxKIgxyeTr%2FNobLYdWsqNCdNOf3FbPFNYX81%2F6LrKRPIGzocgVa7pk65OHCVB14aKGi0bymd1fmvlQY93vvaFAMppRwqvOi46nWIJV%2BwhJGmuenPpRQhdaIqACB0jyWLLOCYYAp9%2BNoZjiXM93toGqif7qhw5CanYdSR1Tff7N%2BHYChBDiN1Fof4fRgI%2BGFqGKr9d0YJ8HwD4m20o1L4g2%2BgcrWUCNhUycZhjoEKU1NqljD94ugLCO%2FOg0UCdBFnLO2KPfr6JyMlP89T%2BWCEfpjqbMJ7gZwxu6at8TEsG%2FqrHd9wXRsnkFLFyZMk05YGxyyRVur%2Fuyi2wAkB7jfHgJ1VJB7v80EjLKzfzEtF%2FUIu1jRPQwzto43wyiCtew1Lw9fZzlF%2BCcxD%2F9CuI9xLUJqr75vPORxrTEEm4mXg263zUTokvYkA84oR09bc0lvChQPftAhEs1DxocdfQLzWhzzK21WD2q6xvfZfdIgCpJ7NWaHP9%2F6seG8nwq0ksHVVxdrt2igN9iNR384ya8nKvCsJ%2F%2F5wXGeb7pDRAxW5LGliqQFyoD3wsc4q8rMPfOzMQGOqUBVFL9Ovmc21L9yEJJwH61cyHV2gsA%2BjzZ2KI3%2BL4DKutfxnYzKPOsh3nDVK6ks6KnVs08xahZ1ZXNzNWJsMOWKxwZoj4eUOEqupAWEKA7oSRGo%2FcOW5fXDa11USwbg2iJSQZs9puE6Tym0mYJak2X%2FWgspqz9Uu2FGMYVFWAfxnDXaNAihD%2BeUg7mzpP9cer21F5jCAVlLwUXCq3H7L7lC8G0iLs7&X-Amz-Signature=718793dbfbba47055b272d163dd6df7753f2317eea6d4b76c400f1829ddcd466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
