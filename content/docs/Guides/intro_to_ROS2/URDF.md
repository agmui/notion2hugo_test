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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2BM2UC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBOuFZhyATE7YCfZnN1U5wsNFIAOd9YhahywWciUvsp9AiBsYQzvLD4EY0PgmVRsUcKi2xeNRp7ruCl0m8aaoEOKASr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMknk4j%2BRjrDiHF7GDKtwDGyK0EAdBEP9Owgxg1DQZ4tLStpVbplBRwRVMzuUwq%2B92kwxtvPLG3AcISlg574oYKv5LSOh9WxvMVUkiSPsuSN%2BZcvemuQi2lWeTp4QV6rlmFkT6800LcC90%2F1ypwPxxqE3EruCCME7M9MgNij%2BdK%2B32Tl5vGcd1pqPxqYabQrQOoJNWIdpcJYfG5hy9btje086GtBlCntC%2FckixY%2FgYWBzWTSjX0JwbMgWbg9Uv3DHlI16KgbSVs79ERs65SD2LSUmLKd%2B8WiTYxC20ONmDUiM3GCmQXqFpeNOtqc7ezK%2BjLtBGzCWbRhAhHro1b9c%2BbOmm76wzXCWkV4nIkhMAkuuWKPMxVIXpVrjHFQgF7BvsdedbbVs6FkcV%2BbCJntb9E%2BaE7xVmj7jKtlbXF7S2p%2F3z4BwM5p%2BzGWsSESI2S4C0bhXnN4Grh4h73wYVyeKpHRAJu%2FbIM2Sif8df1KunahMPsb5WYHb%2BCcV3izZ%2B9MFz%2By3iaTMsLRJHlYVz06xH9gcDuNjTA4YEDxvf9%2By9YhUJggSvXT0PZQWUK7FxYOZW5ZEXRzr9KmTFp4ws2%2B1plmgXSLExPVOBW5UX6lC2jw0Q%2FNBY1s%2FnGRnp%2F2d0hUsejUK8ptgQe%2FvMV8YwsMGTxAY6pgFU2YI6muuuSp0piUlLh7RrUn9dHhokJaP17YHqr6XzybacFEjEwLwV0vXfdFyziG6QmOMNgk2n1vFs%2FiOnzsaY5POTPuIK2BW%2BiJGq8tKAy9Cco6VzYPa4r%2BNAWMq8c2RvoNFBMqAZDv7CB0PJiXZ%2FZ5OEjs8ffKChZbyjAVr%2BhXvIjdiv3eVqKtRvRN1aDnYv%2BGQfVf9nISwF3I%2FbLAi%2B%2BLLwQL8a&X-Amz-Signature=f41f3bc035c5b339817ab6c76e14713169608b55d8afd30c57a7f9d9a6a622f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2BM2UC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBOuFZhyATE7YCfZnN1U5wsNFIAOd9YhahywWciUvsp9AiBsYQzvLD4EY0PgmVRsUcKi2xeNRp7ruCl0m8aaoEOKASr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMknk4j%2BRjrDiHF7GDKtwDGyK0EAdBEP9Owgxg1DQZ4tLStpVbplBRwRVMzuUwq%2B92kwxtvPLG3AcISlg574oYKv5LSOh9WxvMVUkiSPsuSN%2BZcvemuQi2lWeTp4QV6rlmFkT6800LcC90%2F1ypwPxxqE3EruCCME7M9MgNij%2BdK%2B32Tl5vGcd1pqPxqYabQrQOoJNWIdpcJYfG5hy9btje086GtBlCntC%2FckixY%2FgYWBzWTSjX0JwbMgWbg9Uv3DHlI16KgbSVs79ERs65SD2LSUmLKd%2B8WiTYxC20ONmDUiM3GCmQXqFpeNOtqc7ezK%2BjLtBGzCWbRhAhHro1b9c%2BbOmm76wzXCWkV4nIkhMAkuuWKPMxVIXpVrjHFQgF7BvsdedbbVs6FkcV%2BbCJntb9E%2BaE7xVmj7jKtlbXF7S2p%2F3z4BwM5p%2BzGWsSESI2S4C0bhXnN4Grh4h73wYVyeKpHRAJu%2FbIM2Sif8df1KunahMPsb5WYHb%2BCcV3izZ%2B9MFz%2By3iaTMsLRJHlYVz06xH9gcDuNjTA4YEDxvf9%2By9YhUJggSvXT0PZQWUK7FxYOZW5ZEXRzr9KmTFp4ws2%2B1plmgXSLExPVOBW5UX6lC2jw0Q%2FNBY1s%2FnGRnp%2F2d0hUsejUK8ptgQe%2FvMV8YwsMGTxAY6pgFU2YI6muuuSp0piUlLh7RrUn9dHhokJaP17YHqr6XzybacFEjEwLwV0vXfdFyziG6QmOMNgk2n1vFs%2FiOnzsaY5POTPuIK2BW%2BiJGq8tKAy9Cco6VzYPa4r%2BNAWMq8c2RvoNFBMqAZDv7CB0PJiXZ%2FZ5OEjs8ffKChZbyjAVr%2BhXvIjdiv3eVqKtRvRN1aDnYv%2BGQfVf9nISwF3I%2FbLAi%2B%2BLLwQL8a&X-Amz-Signature=f27853864085c2d27d13b58c3fd0a4934cc1b9f8b28cd4615cd301fc0b1d6d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
