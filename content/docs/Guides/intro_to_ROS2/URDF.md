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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466577DQM7Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCf838zMVdALtDZ0UnUSpOtPD8%2F525CHNjlBhNmJQErgIgX9UbvWgHLEByGae9aR1MjEFkdTRzpV6IcMh%2B66eifvsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDESoQPCaiHrqoXurTCrcA6Qeyp9Jl7DAvdIgtJuv%2FgdIt3NU1JaTQu4LNS203%2BxAtOwvbpJjS24aQUlW1kJcixlJ2qfnx2WmyhvLBIdbGGjZ4yjp5xWg78m16Y081Hixuwt5%2FTEoDnJscrHxi97M6NtjBCcKU02JCpN7%2B1FGVjZQ%2Ftaibd2gPg1vOpKsaONrojwDLOspJt%2Ff3sNKwoDtxICrUvOGFb7wU022DxU57vtb%2FvA2qzlaWJhE4s1W6y14YdJbVLE2hWOr5Ht%2FLdWdIlNZ3XfC0n1ZNlMN6seCJUicBkB3hm0E9%2F6sWtKaVkiEznqw6G8f0rHQB%2FKYGhRxx2BuCJgMo0DFvVK77d2J84iPOiNIU6bCpfIgSV7QbgjCMTPUy5DdMj7QGByijWQZ2%2FraOvaXHIKP7p9BWv3UkSQPse8VWBKNu7zw%2B08RfEOsP50Ln4QusDgxKtDopwcUNf7XfVz7%2FvtjJq1TYygh0N2UcQTObSHNd%2BgcRqOTTLGbnzpgLC4fyTvAF6YGQml7UTZvTvAWlBtdkyFDEogMchwX53WjbJE1nFtB3Qv4gGQ%2BL9tgug6zOKxHScNrwFIqoUAiTeX7KsAo7gfbJtZtUjijucyI4yTMqT4TRHpNMregubBE%2Fdhv%2Fay%2FEUewMIDG5MIGOqUB%2FixW5zrVNbHpL2nLdBig16xou2CXbb9P18kcfMCtlwH%2FlLRWDRc%2FKBcQFEEvbpBeSDjcsx0yDmOrX5pHD1e0ooulInzQoVoVeobVVsxAAnwZSulVAxtDsdQ4WY2SVdRr126N9ZgGd9N2tyXd0g1%2F%2BzH9AD05YPTEfMwWREqQMafSi2xmGC8gDLtJNfTQDtUatdIn2VaAtTHVtuksJfC0SA72EodV&X-Amz-Signature=1bf2738606f442bd96f6f4b371b46b987db8ac4e1e037dce195e416e636a1069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466577DQM7Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCf838zMVdALtDZ0UnUSpOtPD8%2F525CHNjlBhNmJQErgIgX9UbvWgHLEByGae9aR1MjEFkdTRzpV6IcMh%2B66eifvsq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDESoQPCaiHrqoXurTCrcA6Qeyp9Jl7DAvdIgtJuv%2FgdIt3NU1JaTQu4LNS203%2BxAtOwvbpJjS24aQUlW1kJcixlJ2qfnx2WmyhvLBIdbGGjZ4yjp5xWg78m16Y081Hixuwt5%2FTEoDnJscrHxi97M6NtjBCcKU02JCpN7%2B1FGVjZQ%2Ftaibd2gPg1vOpKsaONrojwDLOspJt%2Ff3sNKwoDtxICrUvOGFb7wU022DxU57vtb%2FvA2qzlaWJhE4s1W6y14YdJbVLE2hWOr5Ht%2FLdWdIlNZ3XfC0n1ZNlMN6seCJUicBkB3hm0E9%2F6sWtKaVkiEznqw6G8f0rHQB%2FKYGhRxx2BuCJgMo0DFvVK77d2J84iPOiNIU6bCpfIgSV7QbgjCMTPUy5DdMj7QGByijWQZ2%2FraOvaXHIKP7p9BWv3UkSQPse8VWBKNu7zw%2B08RfEOsP50Ln4QusDgxKtDopwcUNf7XfVz7%2FvtjJq1TYygh0N2UcQTObSHNd%2BgcRqOTTLGbnzpgLC4fyTvAF6YGQml7UTZvTvAWlBtdkyFDEogMchwX53WjbJE1nFtB3Qv4gGQ%2BL9tgug6zOKxHScNrwFIqoUAiTeX7KsAo7gfbJtZtUjijucyI4yTMqT4TRHpNMregubBE%2Fdhv%2Fay%2FEUewMIDG5MIGOqUB%2FixW5zrVNbHpL2nLdBig16xou2CXbb9P18kcfMCtlwH%2FlLRWDRc%2FKBcQFEEvbpBeSDjcsx0yDmOrX5pHD1e0ooulInzQoVoVeobVVsxAAnwZSulVAxtDsdQ4WY2SVdRr126N9ZgGd9N2tyXd0g1%2F%2BzH9AD05YPTEfMwWREqQMafSi2xmGC8gDLtJNfTQDtUatdIn2VaAtTHVtuksJfC0SA72EodV&X-Amz-Signature=135742205d411895c42546ce55466b7d8b1838ba3af403b70353ade36627fecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
