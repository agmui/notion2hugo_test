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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX62IEQR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBt%2Fde4ghT1%2BUOS%2Fw%2FLgrKKguuuba6up1jnMnt0BuyzyAiBPcYraYhVFpuTX428qPaXBS3t8c0%2Bf%2Bp2jYpilZlzujSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM43oO2p%2FS3IQbTNcSKtwD8OPSzd1%2FI3Fax962rKv1TvfI19TJP2MF56raRky%2FoO067CJKF23p57z%2Brg6oYHkz5Tlt2jiv8rsrfnJc9Fs%2BtcpH4DYVCiiKk5c%2BBC0KqOHJFRtk5tnAS2AD4gqglYi%2B%2BptyRBhaNJEaLXlPKfUCDwfg58s3OEmPk24FEuVa6NkfnUx6Ldh%2BzVPRrA5aJrrJjo7x8sIfNihj7H5fQm1ruL2BDbGN1s1alB8k96nNf%2FWqWtTqmnrFZCVxZniqKh9wz8aIHam8qptcX5ZjvbI0u%2FI8Fe0MnTds8fTOimUHMzcR2BlL4gxGG%2B9iauXkzrvakZnGt9CWQKgweP8a0pDJu907n9sw114iNQV8N%2FtnMtWHFDm%2BHV6JcwFt%2Ft2OOuxussyCXv3gK7%2BUXEuZsf6pko0VG7nBGBiN68T2JKGpbHPWTqRaXzo%2BOL7eSAnv0D2paLHolTjbynNgQqPVGr8OiUZ9zcxjkYdIW2DEHDJXgWQDmxcaQmsW0OJd58rL0MB9tMh7Xz4XCmHtayeVB2Wp%2Faa8UiHVT78sGrNBJPUxPkhlPicVVwOmMM3avzxGxfERYjQdqDdUNvwWzeHqgHCTtdZnDR0f2qxgDDzuGXns4ieUlwHWq361abKvzesw4sv2wgY6pgHv2tLardCXhPmuH6S7OeutfcbIdFq6AynXWY1koAq4aPr20f%2BzJ5xVVZkF3OIcM0iAhRkyLzuC4Y%2FPokol2y%2FfR8AFasrlz%2BeiXPD5d3LV2219ckC0bNEjyl8MHejgYRWB%2FYxS8taJjt1QJf915gftiV8HsLYKAjYPsSieaa8HaqsP0vD7P7xzHT90YOon54agke8onqcIzTsOSKuehhIG7TGjnpcC&X-Amz-Signature=06ed12c5dfb4acc855426ce53c8ab0bb1c1557a4afd7a177350537591dc9295e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX62IEQR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBt%2Fde4ghT1%2BUOS%2Fw%2FLgrKKguuuba6up1jnMnt0BuyzyAiBPcYraYhVFpuTX428qPaXBS3t8c0%2Bf%2Bp2jYpilZlzujSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM43oO2p%2FS3IQbTNcSKtwD8OPSzd1%2FI3Fax962rKv1TvfI19TJP2MF56raRky%2FoO067CJKF23p57z%2Brg6oYHkz5Tlt2jiv8rsrfnJc9Fs%2BtcpH4DYVCiiKk5c%2BBC0KqOHJFRtk5tnAS2AD4gqglYi%2B%2BptyRBhaNJEaLXlPKfUCDwfg58s3OEmPk24FEuVa6NkfnUx6Ldh%2BzVPRrA5aJrrJjo7x8sIfNihj7H5fQm1ruL2BDbGN1s1alB8k96nNf%2FWqWtTqmnrFZCVxZniqKh9wz8aIHam8qptcX5ZjvbI0u%2FI8Fe0MnTds8fTOimUHMzcR2BlL4gxGG%2B9iauXkzrvakZnGt9CWQKgweP8a0pDJu907n9sw114iNQV8N%2FtnMtWHFDm%2BHV6JcwFt%2Ft2OOuxussyCXv3gK7%2BUXEuZsf6pko0VG7nBGBiN68T2JKGpbHPWTqRaXzo%2BOL7eSAnv0D2paLHolTjbynNgQqPVGr8OiUZ9zcxjkYdIW2DEHDJXgWQDmxcaQmsW0OJd58rL0MB9tMh7Xz4XCmHtayeVB2Wp%2Faa8UiHVT78sGrNBJPUxPkhlPicVVwOmMM3avzxGxfERYjQdqDdUNvwWzeHqgHCTtdZnDR0f2qxgDDzuGXns4ieUlwHWq361abKvzesw4sv2wgY6pgHv2tLardCXhPmuH6S7OeutfcbIdFq6AynXWY1koAq4aPr20f%2BzJ5xVVZkF3OIcM0iAhRkyLzuC4Y%2FPokol2y%2FfR8AFasrlz%2BeiXPD5d3LV2219ckC0bNEjyl8MHejgYRWB%2FYxS8taJjt1QJf915gftiV8HsLYKAjYPsSieaa8HaqsP0vD7P7xzHT90YOon54agke8onqcIzTsOSKuehhIG7TGjnpcC&X-Amz-Signature=053f36506278f0e05895976ad3004e22551d5c6d4677473a6ca4f8326cb49670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
