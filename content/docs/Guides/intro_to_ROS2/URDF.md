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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUZGJE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV%2BvyU6czMhXdGsuffb72YeOlHHOPyp%2BdC4%2FJjH1WCVAiBhIMUunyGPaiqAOODPHyG8YTqLqL%2BnK2%2F6INqBAkhKWSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2Fa5JNK8pxBsuOTMKtwDBRCR%2BykfmTDeTlUUQcb4%2FE8ELWs6HC5wTvUJGbDornwugU4djv6czzcT0eqbVQzOT7IhxxFHk5fmAWp6iaOW%2FvZdUH%2BJBcRORt4TZEjHaT0QmlY32q4REQxWNBCwhtrhHI25GDLkW3lS37goukOOLatAhCCMX3eHbZZPjepPVV6mmW9kJrDGZ1%2FocDkCvFYNVhAoAtZ3YTbuB1%2FlJ72TUsC%2BGmpYs5%2BwJjdNMP50d7xDkJ8pnF8maG%2B5w2lxuT6iKqa5RY%2B%2BuBudu%2FxKykU1xVaecmulUJQdXFmMdWWH5cgX7Nt9NiXhgr0oZ82YUpQgXADZYnM9s0U7MHbpTHsegekgcu5DUNxY0HQ1QuIxYHpo8Og8bMuIv0weIn0yUHqdULsUKGd0gppF5LPqPhLg9viUvv9YtciMmSCKhp6alptugGx0yWXhltNhmK0NKssedjH6mrMEnCHS5NWxTFUcG91yXd8sxGZxdH0QREqzNDRV53NqAoCu789JsPZZ54AY74MVuQszAhVS3q2nHbC4lq0dBZ12j5gn7g6kPgxX3vCV%2BZt%2FZ4PR6CA06cTQvwg3m1j1wbmx3RNwS%2BNwZHKeUyaG9Z%2FWVW77ztrd7Y7y9BpgjpiwibfWFznV218w94jQwgY6pgEtSTKlLM3t7e9U78juOlfdrQqQHyt6DlZbjYQrygAuZC%2F%2F%2BQaPqagpzGOejDgFJOlbgRr3Vpa%2BlZHI5qpr3Db%2Fb3otrVzRdN22%2FjSXumv338aZM9mb%2FCusEs1ouKeqgkwbCLN6lOkVklx%2FBSrXg9T2nggyR95%2FzOtRsJPv1vUlGyfsXQc8CbLoJQfq4w2288VTKLSvWlWirCh7ax6LzWOfw5daYK0t&X-Amz-Signature=d8f645b4e0e819aef152462e839ceab07df74f1094929c749434ffba7046e257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUZGJE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV%2BvyU6czMhXdGsuffb72YeOlHHOPyp%2BdC4%2FJjH1WCVAiBhIMUunyGPaiqAOODPHyG8YTqLqL%2BnK2%2F6INqBAkhKWSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2Fa5JNK8pxBsuOTMKtwDBRCR%2BykfmTDeTlUUQcb4%2FE8ELWs6HC5wTvUJGbDornwugU4djv6czzcT0eqbVQzOT7IhxxFHk5fmAWp6iaOW%2FvZdUH%2BJBcRORt4TZEjHaT0QmlY32q4REQxWNBCwhtrhHI25GDLkW3lS37goukOOLatAhCCMX3eHbZZPjepPVV6mmW9kJrDGZ1%2FocDkCvFYNVhAoAtZ3YTbuB1%2FlJ72TUsC%2BGmpYs5%2BwJjdNMP50d7xDkJ8pnF8maG%2B5w2lxuT6iKqa5RY%2B%2BuBudu%2FxKykU1xVaecmulUJQdXFmMdWWH5cgX7Nt9NiXhgr0oZ82YUpQgXADZYnM9s0U7MHbpTHsegekgcu5DUNxY0HQ1QuIxYHpo8Og8bMuIv0weIn0yUHqdULsUKGd0gppF5LPqPhLg9viUvv9YtciMmSCKhp6alptugGx0yWXhltNhmK0NKssedjH6mrMEnCHS5NWxTFUcG91yXd8sxGZxdH0QREqzNDRV53NqAoCu789JsPZZ54AY74MVuQszAhVS3q2nHbC4lq0dBZ12j5gn7g6kPgxX3vCV%2BZt%2FZ4PR6CA06cTQvwg3m1j1wbmx3RNwS%2BNwZHKeUyaG9Z%2FWVW77ztrd7Y7y9BpgjpiwibfWFznV218w94jQwgY6pgEtSTKlLM3t7e9U78juOlfdrQqQHyt6DlZbjYQrygAuZC%2F%2F%2BQaPqagpzGOejDgFJOlbgRr3Vpa%2BlZHI5qpr3Db%2Fb3otrVzRdN22%2FjSXumv338aZM9mb%2FCusEs1ouKeqgkwbCLN6lOkVklx%2FBSrXg9T2nggyR95%2FzOtRsJPv1vUlGyfsXQc8CbLoJQfq4w2288VTKLSvWlWirCh7ax6LzWOfw5daYK0t&X-Amz-Signature=10e066bd778198d6f2102622a64f272b755992c5848b42e7504ce03defa52a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
