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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NRK64S%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE%2F4y0oPgZP%2BOFgAoHM26WpChxku%2Fe9%2FjyOYOGyG3jPgAiAq%2Bi5%2BMP5%2FrgWglWy7I%2FXtEDKO0SHCtmxw3KC7XLFwRiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejrGi0ZrbG9n%2FDuRKtwDs5%2FkJ%2BAUdEfii13cjExhwluvGf6QD3y28GvQchKM%2FkY4zYLpWHX5ukBB9DFToe569Qe1VAqiwgdGKb4wNouIIxrWUDoInIUwG%2F05jYX1vi1Sjw6tkpTx5kH6lvGKP%2BQVNJNtp2y0pwjPDi6qX0Ooxmr1FCotON1WeCfHhdLxOC%2FbrSWKTcLNcvRatSYfglKZSGmDocz30QeChcEg1ERs%2BeP2TFqC%2B0CgaxTxKHErRM6Rkl%2FPt0OW10pB7ETqGISsOWbI6MyV1NfMgazdyy2vHQ1xKlQxCsXHxayo7ycENmEIXem4iAGZEy5ISA5l5XrjEEVPJ1I44j8OHK63qrS8a%2BHSeo6dtp6f1YHgm1Skbo9SEirPuslyiFvQiPdlcfzgXCON9ohKY8z%2FRPF7w%2FeWGeHUQkNOs1FBPsV5F%2FG3AmlPvZFiph59j%2FON%2BOAWMotbCL7owoVl%2BLtgXH95D1Br4NizqqrTlPA2hVu3hzsf1WEOG8ynYQx3IfeEIhIX5t45iSEnGILSaivjAdm5hN30OiDIBnk62zol37rfXOVbcbYo3%2F8rYBdoi81yYkumjUE8ywdgJaddYtaa5gWuhT9eInZD6sOl3uDteJ1Eh7LsBO63o6fpqPSIASEJ8%2Bww6N7XwAY6pgFBSBGkdCZ7j8b0kKpm2KADvC5pk8f4RXF3Jl8dV73fTqj4%2BbJRR5WaYs3wFIyb17gn%2FEmsCWnM19QGyZ63DLhRW1qeQkieOUGJrWmzACKKHySCQajy3P91HYCI6sSSZHTxRS6%2BlmJZk%2FvV6pV4Saw1ydQuMifnP9uw69HsRwPZuBfs4HpvfcIU5VCXXW3pMpWb43qGs7j1C9a1MsY7K9Ki10oBULzB&X-Amz-Signature=e05bc511e3fc2f4be60b7cee28fd62711be588aba7079f5b3d2c3b00b15538e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NRK64S%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIE%2F4y0oPgZP%2BOFgAoHM26WpChxku%2Fe9%2FjyOYOGyG3jPgAiAq%2Bi5%2BMP5%2FrgWglWy7I%2FXtEDKO0SHCtmxw3KC7XLFwRiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejrGi0ZrbG9n%2FDuRKtwDs5%2FkJ%2BAUdEfii13cjExhwluvGf6QD3y28GvQchKM%2FkY4zYLpWHX5ukBB9DFToe569Qe1VAqiwgdGKb4wNouIIxrWUDoInIUwG%2F05jYX1vi1Sjw6tkpTx5kH6lvGKP%2BQVNJNtp2y0pwjPDi6qX0Ooxmr1FCotON1WeCfHhdLxOC%2FbrSWKTcLNcvRatSYfglKZSGmDocz30QeChcEg1ERs%2BeP2TFqC%2B0CgaxTxKHErRM6Rkl%2FPt0OW10pB7ETqGISsOWbI6MyV1NfMgazdyy2vHQ1xKlQxCsXHxayo7ycENmEIXem4iAGZEy5ISA5l5XrjEEVPJ1I44j8OHK63qrS8a%2BHSeo6dtp6f1YHgm1Skbo9SEirPuslyiFvQiPdlcfzgXCON9ohKY8z%2FRPF7w%2FeWGeHUQkNOs1FBPsV5F%2FG3AmlPvZFiph59j%2FON%2BOAWMotbCL7owoVl%2BLtgXH95D1Br4NizqqrTlPA2hVu3hzsf1WEOG8ynYQx3IfeEIhIX5t45iSEnGILSaivjAdm5hN30OiDIBnk62zol37rfXOVbcbYo3%2F8rYBdoi81yYkumjUE8ywdgJaddYtaa5gWuhT9eInZD6sOl3uDteJ1Eh7LsBO63o6fpqPSIASEJ8%2Bww6N7XwAY6pgFBSBGkdCZ7j8b0kKpm2KADvC5pk8f4RXF3Jl8dV73fTqj4%2BbJRR5WaYs3wFIyb17gn%2FEmsCWnM19QGyZ63DLhRW1qeQkieOUGJrWmzACKKHySCQajy3P91HYCI6sSSZHTxRS6%2BlmJZk%2FvV6pV4Saw1ydQuMifnP9uw69HsRwPZuBfs4HpvfcIU5VCXXW3pMpWb43qGs7j1C9a1MsY7K9Ki10oBULzB&X-Amz-Signature=ca7779a8e56795941c614caa554e3ffbf163ff9e79718bb5d745a7a776f15b38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
