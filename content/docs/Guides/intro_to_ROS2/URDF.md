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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3LE6BW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaKE2CNbFnYUMg0JzCrlTt19lHJZcWaw84AUkYw7mYqAiACQtl11xpdkGVZVVqtVux27nQ5ar%2Boo1EGwVmziRXuYSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMGpsrtCYS8dL6tJ7EKtwDYU4HXxu7yX1UR1SkQS1CU59Yi5VEkDUigeHUfrChHXLmPhmaPPDSokF0vLtInyPFQefRTQromSgL7ZldbfAz3yXcfvBRqgX%2FwmO6pOCkWbX5mGJ3gWgM5dByLGKJ12X2u%2FdZkgLyLHp%2BynhMPA2zMC7Du5cDWgo5Ik4D0qDZc%2FLdP%2B3hGfvqvrfwF0cmBATZ0iZ%2BljrmFQNsoK2dJlnBw3rLBaPeli3IWy0f4n3iUZh4%2FoTj0rOV5pMGwHZQBDdT%2FN5fKPLhBH7DDahB978y7%2FcL%2Fdam7Gt3u%2BOeYl1JbqDjq2piADJZL5K1ib3M7%2BaYsOPpyoswjMtxs8eASjnN2c6m1%2BnKtwe6RH6nxPY45saB%2B49ixGFz4Vgxwjf4qUEL0UdofBoIudImkro1Vid4UAijV232550uuOymWkPRATGyt4F%2BIY4g4DSAc2AeOZQ7GgUJRIk%2BfadIeB5P1ssxv6O%2BC0%2B4RI3XlS%2B%2FaJ%2BgFaK9Vj9puEqA0J2m9Q3%2FXaJ2rMJH7wM7%2BnA6Yj36DEe2iO23zptSS8Fb3SU7f%2FFebceoIbh52ext1Y%2F68gfIfLJgIAWONCiUBA1O6neqI0LBBSy%2Fd3LGmc1SNzCDE3WUxhyS57uSalThZQqqkosw5tekwQY6pgHFTmKwTympT2y%2B%2BQN7EbmmZRcIyuG%2FV7PwYVesLyXjphu%2BoGFnCshoQCuwGQY0BLbP%2BIFPKEWx3p0loeQQ9KUQ414uok70czR8nNRnFnCFIWQSCyr%2FMLAlNS9ywiroVkeQpgjsU%2FqdnukAXF%2BLhwk883nc%2BP%2BgzBTP8K9n%2F0nGQWDQZMRVHODUqVW3cf3C7R2UBuzY5MZYUgpI7%2Fb3AyH%2FX2hMCSml&X-Amz-Signature=2e06ffdb693c33d51abb5e5f3b12a3d1f673d9cc51ee6bcaede0990c2b8da9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3LE6BW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaKE2CNbFnYUMg0JzCrlTt19lHJZcWaw84AUkYw7mYqAiACQtl11xpdkGVZVVqtVux27nQ5ar%2Boo1EGwVmziRXuYSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMGpsrtCYS8dL6tJ7EKtwDYU4HXxu7yX1UR1SkQS1CU59Yi5VEkDUigeHUfrChHXLmPhmaPPDSokF0vLtInyPFQefRTQromSgL7ZldbfAz3yXcfvBRqgX%2FwmO6pOCkWbX5mGJ3gWgM5dByLGKJ12X2u%2FdZkgLyLHp%2BynhMPA2zMC7Du5cDWgo5Ik4D0qDZc%2FLdP%2B3hGfvqvrfwF0cmBATZ0iZ%2BljrmFQNsoK2dJlnBw3rLBaPeli3IWy0f4n3iUZh4%2FoTj0rOV5pMGwHZQBDdT%2FN5fKPLhBH7DDahB978y7%2FcL%2Fdam7Gt3u%2BOeYl1JbqDjq2piADJZL5K1ib3M7%2BaYsOPpyoswjMtxs8eASjnN2c6m1%2BnKtwe6RH6nxPY45saB%2B49ixGFz4Vgxwjf4qUEL0UdofBoIudImkro1Vid4UAijV232550uuOymWkPRATGyt4F%2BIY4g4DSAc2AeOZQ7GgUJRIk%2BfadIeB5P1ssxv6O%2BC0%2B4RI3XlS%2B%2FaJ%2BgFaK9Vj9puEqA0J2m9Q3%2FXaJ2rMJH7wM7%2BnA6Yj36DEe2iO23zptSS8Fb3SU7f%2FFebceoIbh52ext1Y%2F68gfIfLJgIAWONCiUBA1O6neqI0LBBSy%2Fd3LGmc1SNzCDE3WUxhyS57uSalThZQqqkosw5tekwQY6pgHFTmKwTympT2y%2B%2BQN7EbmmZRcIyuG%2FV7PwYVesLyXjphu%2BoGFnCshoQCuwGQY0BLbP%2BIFPKEWx3p0loeQQ9KUQ414uok70czR8nNRnFnCFIWQSCyr%2FMLAlNS9ywiroVkeQpgjsU%2FqdnukAXF%2BLhwk883nc%2BP%2BgzBTP8K9n%2F0nGQWDQZMRVHODUqVW3cf3C7R2UBuzY5MZYUgpI7%2Fb3AyH%2FX2hMCSml&X-Amz-Signature=466279513c55921869cfc50aa9455be1ee8c241aeb715175734a768d4a675dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
