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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJHVMXOC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB74Rcwl98xWnNROreUkOcRkNPD5JYmoSCEBEAHJRtd0AiBIyMWSRsdQzh63CRalIhkIoZcPvD6sQ7Qe7yb7S5EMnSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMdNgTQ6UhSj02TNz7KtwDZrTdRyzMXwHo%2FoxXS4VfNL7zvGh0AwB6Vu1mQqS8FbY8mDWlKrKepUfsqzjHrezGK4YK5A%2Fi42jMxW8KWeB9b1KH59nsf5TvlG0io79nxaTwF7HHprkODyD%2BiGiN6ds3dfieTvQsukTb8vMXHfKRMdkaej%2BNFMTl1sovqJ%2B%2BOWMafChS32jq%2FX3HfdWywu8gldoSc8WnbNauWR5hV6S8%2BY16idwyN9afceXW8fsnH09%2F0eN3N%2FQpee26Wtvh3avF6RekQn5MH2pV8i6TPqt9YkP5wrMHyEzktyaumrgl4VWMNzOi8XtWZVQFkDIDUPOEvB91DfBtcPyEvMMP2ti4%2FHnebrX%2FHNPmbbLrNFlbPJB9h%2FdEvwZqbmvxsxDXwK4RvoOYiBaXOvRxe0vM%2BZ3fJroa9AjEMtD%2FcBAOjQJK9i49YUyvVJHH4GaubIaLZ7dIlecDQslnlp28XuI%2BhA7LG27vEgnwfXntIovFfU7Vwo4Yj0ZjIOvycYQMtOgp584YEf3q%2FMr1%2Fmu2%2B%2F%2F0Sna1O25rl%2FWZuzydFGGC40F0AI%2FbEEhuu0%2BP3tcKiI8tzzp20W%2FH5B5iXaDb%2BPqZ5lzBIX%2FmxAo%2FtqiAPgdk4G9QUFAxuY3oJEohsn89nlcw%2FuLKwQY6pgGUSZeZofUc%2F9X057oAVf7NzVR8h6TrnGs3tTczMO2cYNTTCpiNmEiA%2BbQVN8hmV%2BslqUBt6cmR9zabi6831uaaWGVj3L0eFKFC2%2BryjohoBbT5YEMPfJrQM%2F8PNRBhCDLRXN6hhxz4mQrY4LjmTDsvuJANitNIlLCH0cm%2FPhGTEX8Mz5LX4POZt46PxPttJ9fd3MKb8auqXhjQw6uQUu39JbJjdH1C&X-Amz-Signature=bf30c474af6f658180b82807a77f7f386774a473d49697e2dbda2331cfe6a728&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJHVMXOC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB74Rcwl98xWnNROreUkOcRkNPD5JYmoSCEBEAHJRtd0AiBIyMWSRsdQzh63CRalIhkIoZcPvD6sQ7Qe7yb7S5EMnSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMdNgTQ6UhSj02TNz7KtwDZrTdRyzMXwHo%2FoxXS4VfNL7zvGh0AwB6Vu1mQqS8FbY8mDWlKrKepUfsqzjHrezGK4YK5A%2Fi42jMxW8KWeB9b1KH59nsf5TvlG0io79nxaTwF7HHprkODyD%2BiGiN6ds3dfieTvQsukTb8vMXHfKRMdkaej%2BNFMTl1sovqJ%2B%2BOWMafChS32jq%2FX3HfdWywu8gldoSc8WnbNauWR5hV6S8%2BY16idwyN9afceXW8fsnH09%2F0eN3N%2FQpee26Wtvh3avF6RekQn5MH2pV8i6TPqt9YkP5wrMHyEzktyaumrgl4VWMNzOi8XtWZVQFkDIDUPOEvB91DfBtcPyEvMMP2ti4%2FHnebrX%2FHNPmbbLrNFlbPJB9h%2FdEvwZqbmvxsxDXwK4RvoOYiBaXOvRxe0vM%2BZ3fJroa9AjEMtD%2FcBAOjQJK9i49YUyvVJHH4GaubIaLZ7dIlecDQslnlp28XuI%2BhA7LG27vEgnwfXntIovFfU7Vwo4Yj0ZjIOvycYQMtOgp584YEf3q%2FMr1%2Fmu2%2B%2F%2F0Sna1O25rl%2FWZuzydFGGC40F0AI%2FbEEhuu0%2BP3tcKiI8tzzp20W%2FH5B5iXaDb%2BPqZ5lzBIX%2FmxAo%2FtqiAPgdk4G9QUFAxuY3oJEohsn89nlcw%2FuLKwQY6pgGUSZeZofUc%2F9X057oAVf7NzVR8h6TrnGs3tTczMO2cYNTTCpiNmEiA%2BbQVN8hmV%2BslqUBt6cmR9zabi6831uaaWGVj3L0eFKFC2%2BryjohoBbT5YEMPfJrQM%2F8PNRBhCDLRXN6hhxz4mQrY4LjmTDsvuJANitNIlLCH0cm%2FPhGTEX8Mz5LX4POZt46PxPttJ9fd3MKb8auqXhjQw6uQUu39JbJjdH1C&X-Amz-Signature=5e208d5dc83c725d079b453fbe806a9a8518e5e89fd984f9d4a7dc207471c5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
