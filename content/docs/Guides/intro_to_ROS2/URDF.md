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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667URVEBR6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDikS%2FwdV985QZ3N1BNyhvp3tqj8xKNz4Wh8ylPrdm%2BqgIgCwvBG6dKjCkqzDgPnG1%2FM74rDF2B7Q4bpZubntuA6Kgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGOHnLftukwr2Q%2FnaCrcA%2BQOydOFzKDjx%2FwsxqYwJs5GbhHoWS9FbPa2TZSlenC%2BmovwRHfe1xLFsl8rOSJMG0X4YI5sIJ2UjizGkYUZPKlD%2B%2B1JTkVxJH%2BB9EPM3SwAeJ6UmnpvR05d3PI%2B%2By6js5FUBWRiG7p2JuVvfSBY88LAgzARLTLdM0wY8nDp1XoJgcrD1uc8PyhYUzoHHF%2FzAXZ2hOb8DBCSn4pgjbj0WWJFjjvRpExffRfG9gNNnGzG7lUR2%2BSow3zajfaChUyNJx1BYStqP3nyUyddcjLFsFbhfg%2BtUg0cXRpCU8kJKqwNKQlcPZxVtmUCGbYHlAD7Tc4jypQ0pMmQqzHYHZgYM8pMQ2qL613ApAnirTXHjBb83HcNQYGrAv3qROmvK9TPWiJitW9c3uy42dFxSOL6CgONttYPt4ypP1hsmkhApy89yVDjw8LYjink7ZSB4gVstPnVHMUn1M7DMBv2ySf%2FDZ7bry7nYHyjGSZkM%2BlC00s%2FE764V6I6SbpPCWCOWbb8lzZtF%2BZoCe3MOYxCX6fKXwwrgKlHly68uod0m2p%2Bdo5QogIPcd9oZOWZIzqrV6sTEeM%2F0QTACJ1xkYZ937UuAmZzj2Ne7ejsTvOHd8NYCk%2FuOEvG%2BOx1e0zwn26oMMWhlL8GOqUBLRSggd0lVH0GSeg%2BW8B2%2F4NCTCBd5PWNbkqCqDH%2BDlOspwYKFHGBbx8eu%2BmFYpv2d2xOEVSh3EvT904B8ITCsvI9CCXWXlKDiZmBbpPDGHwGDtdW7AMDywIUv30kEFJmkRXRc6wldia1SsN3JcFlaxH6z4hKgTYyhZnhJqVoN2yqV9nzYuY4S7fzrkiuN3xhh9cs4Zze2rr83x3TVUyw1W3MxTCg&X-Amz-Signature=6679e9406604e9fb3f1fde17bfcb10a2918346171d52d737b1a11ef83591215c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667URVEBR6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDikS%2FwdV985QZ3N1BNyhvp3tqj8xKNz4Wh8ylPrdm%2BqgIgCwvBG6dKjCkqzDgPnG1%2FM74rDF2B7Q4bpZubntuA6Kgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGOHnLftukwr2Q%2FnaCrcA%2BQOydOFzKDjx%2FwsxqYwJs5GbhHoWS9FbPa2TZSlenC%2BmovwRHfe1xLFsl8rOSJMG0X4YI5sIJ2UjizGkYUZPKlD%2B%2B1JTkVxJH%2BB9EPM3SwAeJ6UmnpvR05d3PI%2B%2By6js5FUBWRiG7p2JuVvfSBY88LAgzARLTLdM0wY8nDp1XoJgcrD1uc8PyhYUzoHHF%2FzAXZ2hOb8DBCSn4pgjbj0WWJFjjvRpExffRfG9gNNnGzG7lUR2%2BSow3zajfaChUyNJx1BYStqP3nyUyddcjLFsFbhfg%2BtUg0cXRpCU8kJKqwNKQlcPZxVtmUCGbYHlAD7Tc4jypQ0pMmQqzHYHZgYM8pMQ2qL613ApAnirTXHjBb83HcNQYGrAv3qROmvK9TPWiJitW9c3uy42dFxSOL6CgONttYPt4ypP1hsmkhApy89yVDjw8LYjink7ZSB4gVstPnVHMUn1M7DMBv2ySf%2FDZ7bry7nYHyjGSZkM%2BlC00s%2FE764V6I6SbpPCWCOWbb8lzZtF%2BZoCe3MOYxCX6fKXwwrgKlHly68uod0m2p%2Bdo5QogIPcd9oZOWZIzqrV6sTEeM%2F0QTACJ1xkYZ937UuAmZzj2Ne7ejsTvOHd8NYCk%2FuOEvG%2BOx1e0zwn26oMMWhlL8GOqUBLRSggd0lVH0GSeg%2BW8B2%2F4NCTCBd5PWNbkqCqDH%2BDlOspwYKFHGBbx8eu%2BmFYpv2d2xOEVSh3EvT904B8ITCsvI9CCXWXlKDiZmBbpPDGHwGDtdW7AMDywIUv30kEFJmkRXRc6wldia1SsN3JcFlaxH6z4hKgTYyhZnhJqVoN2yqV9nzYuY4S7fzrkiuN3xhh9cs4Zze2rr83x3TVUyw1W3MxTCg&X-Amz-Signature=be955a3f0d6474232b790db3f189d17e65e08c2590023a53170d45189a170048&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
