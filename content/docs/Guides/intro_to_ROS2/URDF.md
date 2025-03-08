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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6TXCJE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDgZ4uezc86%2FTBGTKtm43tiATwM02zR9Vx9VltS65yq%2FwIhALBK3jzfnrw7g1ieqTbX%2BmnzRxgUJY4L1imx8LOhP3IvKv8DCGEQABoMNjM3NDIzMTgzODA1IgzTjAu%2FTrd2YR1YjMkq3APVxcFJNGeBGwmE6TpWKgrCJPGfSxqixLF6ypnTJiqOv7s5gX2qFtiKEqepjelvPwnmAqjRDcR83DCIkrrbUIzAs6lK7IqjRCG5%2FUDODNYtLccPsT%2F2WepNsUPi7gwo3qXbaHRTYvBglKh8orESz2E8l%2FL9nAxSKPieTi94PH21lPdXipupVgHpgSv%2FTuapgiParCNwz3X2y%2BKKc3I4vRyZxJm6LEeoliGLFf8tZ1%2Ffjp1Mc9mJA54ryXrb5XeJ7XBltLNhokL7tym1jIRjmCACaSynLkCYEY35hfW%2FjLAK4qYoh6BjfT6LROIdEUasyM5pKsNxhWuMH7covV4CairM%2FPQ3xTNE13wDEDRBCMEZDcdCdKiyhbkynXRtlvrgkn%2Fxgn5wyUyFns4%2BDIF3GnT%2BTSOH3vN1IZ5vpo94hitjbH3RvWS0W6Cmbyq%2BKJlP3sTUDFIeLlmjbhKW2kkOHAOoxMurwLXtXtVLMq11z0ByRcLJ7vhtyXlIXC%2B17gAfBbu8q%2Bi%2FVdU4%2BvKvVW6T51TDDxWpyO%2B5HXABm2z85nSw13o%2F4Pumm4e%2FzVJCiMFtg0CF28DlHEG76EXbFkBBes3tnSuSkG5%2F1%2BhhuzLeKUSwfRfh9zXY5%2FrLkWwDwzDD1LG%2BBjqkAZSMlnUj14NznY%2FbkEKtt0NM6WPTe7pc3HGu2JKD19QcB4TBuJKFlTRF3N03wrduTCrXjrys2kASCX10q%2BFklfIV%2Fj1kJoG4bdJS8w%2FW1AhdhzbzgoLRrN5iPgvnOUjuYC1FcQSxMCxqM9tVOiLqBJWMOUXo5PaqNl9yKpBpksbiCJNd3di%2FvrqwIReHAHeu6RPqCOkeHrBSWSm6FeFzyBOU%2FScj&X-Amz-Signature=38855abd5b4b20ba229aa3bc233fbdb0801e521f6e4301ac8cfb300b2744738e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6TXCJE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDgZ4uezc86%2FTBGTKtm43tiATwM02zR9Vx9VltS65yq%2FwIhALBK3jzfnrw7g1ieqTbX%2BmnzRxgUJY4L1imx8LOhP3IvKv8DCGEQABoMNjM3NDIzMTgzODA1IgzTjAu%2FTrd2YR1YjMkq3APVxcFJNGeBGwmE6TpWKgrCJPGfSxqixLF6ypnTJiqOv7s5gX2qFtiKEqepjelvPwnmAqjRDcR83DCIkrrbUIzAs6lK7IqjRCG5%2FUDODNYtLccPsT%2F2WepNsUPi7gwo3qXbaHRTYvBglKh8orESz2E8l%2FL9nAxSKPieTi94PH21lPdXipupVgHpgSv%2FTuapgiParCNwz3X2y%2BKKc3I4vRyZxJm6LEeoliGLFf8tZ1%2Ffjp1Mc9mJA54ryXrb5XeJ7XBltLNhokL7tym1jIRjmCACaSynLkCYEY35hfW%2FjLAK4qYoh6BjfT6LROIdEUasyM5pKsNxhWuMH7covV4CairM%2FPQ3xTNE13wDEDRBCMEZDcdCdKiyhbkynXRtlvrgkn%2Fxgn5wyUyFns4%2BDIF3GnT%2BTSOH3vN1IZ5vpo94hitjbH3RvWS0W6Cmbyq%2BKJlP3sTUDFIeLlmjbhKW2kkOHAOoxMurwLXtXtVLMq11z0ByRcLJ7vhtyXlIXC%2B17gAfBbu8q%2Bi%2FVdU4%2BvKvVW6T51TDDxWpyO%2B5HXABm2z85nSw13o%2F4Pumm4e%2FzVJCiMFtg0CF28DlHEG76EXbFkBBes3tnSuSkG5%2F1%2BhhuzLeKUSwfRfh9zXY5%2FrLkWwDwzDD1LG%2BBjqkAZSMlnUj14NznY%2FbkEKtt0NM6WPTe7pc3HGu2JKD19QcB4TBuJKFlTRF3N03wrduTCrXjrys2kASCX10q%2BFklfIV%2Fj1kJoG4bdJS8w%2FW1AhdhzbzgoLRrN5iPgvnOUjuYC1FcQSxMCxqM9tVOiLqBJWMOUXo5PaqNl9yKpBpksbiCJNd3di%2FvrqwIReHAHeu6RPqCOkeHrBSWSm6FeFzyBOU%2FScj&X-Amz-Signature=d5d26c83716c9acd8d9bc853d78147dfee244e05de2ee08ea9d1ae2c2ccf60e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
