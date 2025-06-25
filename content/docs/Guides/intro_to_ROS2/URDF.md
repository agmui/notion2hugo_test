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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUECKGZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDZBCuegddjL1KOPGYXEcAU%2FT28ImiYb0BH9MA6DHL05AIhANaR5hOCLNC7COU%2Bjn0nGXaEbYXvsysKykZXzI4eL5gbKv8DCD8QABoMNjM3NDIzMTgzODA1Igyp8N2LzuPA2oO7f%2Boq3APc5ExuTX07ooUhoIKG7GT5xKpP0Mj0KtHmYfyjMnKbzxFrl8uPyn0%2BwjdmYBMUlm%2FmoDU3xtrO0Bhhyv3jWoPJoXr%2Bwo4uEYebr0WxtAOsfh7HmFpz0t9ij3BNw5BZ9Rvqid009Hmnx7i0y%2FSdAcpfXRTcu9AQjjiv4K2%2BzrmJxT%2BXkLNtoTS3ImRwjh0E5LNRkQlkV0ADKUuG65oBD3qcI1iy4LSFJiSlAXtwp2Pg6QzH1IS%2BWnHgEnflBBlZJOoR8MwUMe57FmtvdzDuOyY3ZSJEsA8VMKmyGovn3UBi%2BiqcxM1Q9R2zqjR1GcKgsK8k7qQIoSjPtjZvIC4KTTJRuKqO41YU4POhdoYM99KtcmL1ss1qOr4DN38ps4ESEJthVE3G25du%2F5imP3Pqtea9hUYBCsvZXSbBhCAJ4FGH4AK6dFHq%2BMXt1ezsVGxE9e0orYzUvTZuDItzRIBDGYzVfjmK55L48wy%2FBcZMKaZ27%2FkbpLo%2F4LCGzI%2BZch11%2F2Y8zguFvGokpdaaTZH81uiAKMCuX9AxPiAzAjd%2B%2FjvMNcQVeolVnnSekCp1D3RTeY1Ty%2FUxa3rKnflgNVFE5HWTBVJK6dO1x7nDJ8xToWBjR4KZFR%2BvF0pDTwfmvjD1pe7CBjqkAUDdWSuzHXdgtadmLuM3Ss8nAF2PenNwQbC7mJBVX9dmNRO7a3Ri1gndx98qDqvRxMjXD7k1dH8MD%2By3Ma9dSqvGaDPsddO23IFW9sLG1F5f6CIi%2FnqG8Z1T5KNLEg7Eb%2FdVUj4hPUJQSP2mfH9vitxN9vMUod1IOSYOMMcOp4Rl71WGBkVugoWcJjLW1nD5VSJ9fyc87hbQJDAVxwIv0YA4kvMz&X-Amz-Signature=e35a4e7e6d235622e37f1badf37c67e8ad6559d7a371bd7e7675750e51ba5f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUECKGZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDZBCuegddjL1KOPGYXEcAU%2FT28ImiYb0BH9MA6DHL05AIhANaR5hOCLNC7COU%2Bjn0nGXaEbYXvsysKykZXzI4eL5gbKv8DCD8QABoMNjM3NDIzMTgzODA1Igyp8N2LzuPA2oO7f%2Boq3APc5ExuTX07ooUhoIKG7GT5xKpP0Mj0KtHmYfyjMnKbzxFrl8uPyn0%2BwjdmYBMUlm%2FmoDU3xtrO0Bhhyv3jWoPJoXr%2Bwo4uEYebr0WxtAOsfh7HmFpz0t9ij3BNw5BZ9Rvqid009Hmnx7i0y%2FSdAcpfXRTcu9AQjjiv4K2%2BzrmJxT%2BXkLNtoTS3ImRwjh0E5LNRkQlkV0ADKUuG65oBD3qcI1iy4LSFJiSlAXtwp2Pg6QzH1IS%2BWnHgEnflBBlZJOoR8MwUMe57FmtvdzDuOyY3ZSJEsA8VMKmyGovn3UBi%2BiqcxM1Q9R2zqjR1GcKgsK8k7qQIoSjPtjZvIC4KTTJRuKqO41YU4POhdoYM99KtcmL1ss1qOr4DN38ps4ESEJthVE3G25du%2F5imP3Pqtea9hUYBCsvZXSbBhCAJ4FGH4AK6dFHq%2BMXt1ezsVGxE9e0orYzUvTZuDItzRIBDGYzVfjmK55L48wy%2FBcZMKaZ27%2FkbpLo%2F4LCGzI%2BZch11%2F2Y8zguFvGokpdaaTZH81uiAKMCuX9AxPiAzAjd%2B%2FjvMNcQVeolVnnSekCp1D3RTeY1Ty%2FUxa3rKnflgNVFE5HWTBVJK6dO1x7nDJ8xToWBjR4KZFR%2BvF0pDTwfmvjD1pe7CBjqkAUDdWSuzHXdgtadmLuM3Ss8nAF2PenNwQbC7mJBVX9dmNRO7a3Ri1gndx98qDqvRxMjXD7k1dH8MD%2By3Ma9dSqvGaDPsddO23IFW9sLG1F5f6CIi%2FnqG8Z1T5KNLEg7Eb%2FdVUj4hPUJQSP2mfH9vitxN9vMUod1IOSYOMMcOp4Rl71WGBkVugoWcJjLW1nD5VSJ9fyc87hbQJDAVxwIv0YA4kvMz&X-Amz-Signature=519898af614b5767a83f3b3ebb94fe2621fdda7e72cf3b1db7e9b1d81ad0fd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
