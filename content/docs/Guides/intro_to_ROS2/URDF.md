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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S23HXLV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsgevfR%2F4HthBpNqPvYoTcuEILrapZJltgcbDMaVsSqAiEA0HwZK5UtPQfHuuo%2FIHuvc4WJ4rOPvPyoMqA9ACDQWlYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqwsZNk%2BTN02i8yuircA8iba3Ll7HkK8FfFUv%2FsfANi3JwrReZHVrm2MAmXF9qKrM4SHdXcIXC%2F9NCxeFeXtxhMmUzCmNiEzpegb4T0TVe4UZwJBCKSKifIkaseEbBEeM%2BpFQamacRmVJ0e6rFlleUlcfA%2BDwh6IgIvoranXJ3tWcXRLZY4JDhqHrIhdj%2F4LbbeK8DurGj9J9ktw0iMqy%2BfKwnuZpqqa11g2MrK0lpAULjR%2B1K74GdVjvjkOvIEE0nFalYf1I2yuKmxX3hxzWM%2BLpxT4u6gHCBrYrUbq8i6n0nxnb%2F8VUgr0cZ%2F9q7TOBRALJ4WiQ4BGpteEF3vfSvJnMrFFYrBjn4OYYfEa%2Fq0x%2F58rD3HLlCLLX0AiGG2nn%2F8hZI8f9PLWqWtbFuYV%2Fd3CtJD3m%2FRzaPo%2FTvH8qLobe7fK0vEcE0wr48sYh%2F53x7FtsGCoQbkGFMG0xbU1cQKVyObKzsCKFk3wlM9cZfaW1oHzupe1C4kDW3Cu86%2Bj6eq%2F3QINrGXLX9gIhVxCmgykZq9qCViPn3inWmtil5evYJmZCtJnwmtrjCd%2Fz%2FakiYwjdX0hpXumFJe%2F05nkRz18Opj8mGHJ09oNipB5xdKAx1vLPaMcnYEG%2F7F1Fhf0UT23X1DTfY2620iMO67yb4GOqUBs5oVAZ9Q0s2wDYzDPOWeGseK2BatbzH2PhB8mgp3s693DbukAFl57uFXABtoAy0U0%2FhHTKaYqhuC6mFBuO%2BiUCoT2AohXTIboV7v9XyWdz1xAR3vXt1loMVaSlOKj86iROvQrLxeBzmgGkrEyTEw3G3Owx%2BFa4yVrrpJJ%2FB%2F0QjPzO6Dbh5XEpNR9E6wn7SBmDvl04g1V4tRIqS9ym7pE%2BQSbR8Z&X-Amz-Signature=2194579cb7862cb53edf4acc6a6a307f1f94c2001c1f39cca5eb05d8128da367&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S23HXLV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsgevfR%2F4HthBpNqPvYoTcuEILrapZJltgcbDMaVsSqAiEA0HwZK5UtPQfHuuo%2FIHuvc4WJ4rOPvPyoMqA9ACDQWlYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqwsZNk%2BTN02i8yuircA8iba3Ll7HkK8FfFUv%2FsfANi3JwrReZHVrm2MAmXF9qKrM4SHdXcIXC%2F9NCxeFeXtxhMmUzCmNiEzpegb4T0TVe4UZwJBCKSKifIkaseEbBEeM%2BpFQamacRmVJ0e6rFlleUlcfA%2BDwh6IgIvoranXJ3tWcXRLZY4JDhqHrIhdj%2F4LbbeK8DurGj9J9ktw0iMqy%2BfKwnuZpqqa11g2MrK0lpAULjR%2B1K74GdVjvjkOvIEE0nFalYf1I2yuKmxX3hxzWM%2BLpxT4u6gHCBrYrUbq8i6n0nxnb%2F8VUgr0cZ%2F9q7TOBRALJ4WiQ4BGpteEF3vfSvJnMrFFYrBjn4OYYfEa%2Fq0x%2F58rD3HLlCLLX0AiGG2nn%2F8hZI8f9PLWqWtbFuYV%2Fd3CtJD3m%2FRzaPo%2FTvH8qLobe7fK0vEcE0wr48sYh%2F53x7FtsGCoQbkGFMG0xbU1cQKVyObKzsCKFk3wlM9cZfaW1oHzupe1C4kDW3Cu86%2Bj6eq%2F3QINrGXLX9gIhVxCmgykZq9qCViPn3inWmtil5evYJmZCtJnwmtrjCd%2Fz%2FakiYwjdX0hpXumFJe%2F05nkRz18Opj8mGHJ09oNipB5xdKAx1vLPaMcnYEG%2F7F1Fhf0UT23X1DTfY2620iMO67yb4GOqUBs5oVAZ9Q0s2wDYzDPOWeGseK2BatbzH2PhB8mgp3s693DbukAFl57uFXABtoAy0U0%2FhHTKaYqhuC6mFBuO%2BiUCoT2AohXTIboV7v9XyWdz1xAR3vXt1loMVaSlOKj86iROvQrLxeBzmgGkrEyTEw3G3Owx%2BFa4yVrrpJJ%2FB%2F0QjPzO6Dbh5XEpNR9E6wn7SBmDvl04g1V4tRIqS9ym7pE%2BQSbR8Z&X-Amz-Signature=d5f7d88a4355e95ed74e1a0ef5d68dfe3eb30b7efa18a9dd2f5d15082213b94b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
