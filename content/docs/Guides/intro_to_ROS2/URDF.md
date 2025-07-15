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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYT5AUVB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBSvpPHNWiJ3pcRPaYRs8VQ70lfCK%2Fd145E60AxsY%2FPtAiATxh0M1PLcAaucLI%2FH1deQ9OnupEcB7MklT%2FP1rSCwnCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMBznUgBJNDSw8z9UDKtwD72PT9HFlUC9Ef8S17ERmlRajla7FkOLanNcxYpABujvfCgQR7lW5Umz0cfM28Ge7QxLiALOoiee6IrLul0USy2EIiqXOq91qwm%2BUfAD%2Fc9rgSb9lcb19Fao21AbAV7KWLn2goq7BuUDQ5xsW1gOHPot3Ucno8WfhD44CuSrAe6Ivus1zjs3DcqAU59YkYDs7gB2XZaqE6n7WxugPJuQKdww%2FI7jF8EFR3fxqQAzWZAWo4AKRHEw2O3uguHVPojHydl0Mk2F4LbSlilR91GeW%2BdrsXBUrdScsI0hMWWGpzWcOvmtvBqQg4WCsIV6RGAuhY%2FUVPUyTfimKBuTuT9xfboHf%2Bz7gHjnXt1W2HAmkjfJshqVKoCqo0DGTIgkd1QDif24M4I86zcwy28NJL9pzpVoCUkx00YLEYZs2G2nX8pBm63I%2FBfZdGTvFDEEdqPgYID%2BQ4Dbg1Y8TA7sHgaolcYKGPNqsw31Dg1CO91Swmo5FKrZoPIto1tlIugrPsZbBH7nUBg3l7lkURpNDUqpPmfyGizfMEZ5nUE%2BLPXxzvxdB7kgfenB6SPopwJFrmBmLRY9HdfAlLMUzyoBmYpt8A4bKOJ6yO03eomPrVAqkjpduOHTmcB8YIkb9le0w6oPZwwY6pgFRDxPlshX9hKT4vZeMH3LtfbUZBkyKsj94w%2FOE4KcjC1u51RCq%2BcB3jZeXAfTTX0lQgyg3FtXmNuEjCHyDlDVWDQ6os%2BNmRpEZImsKl4f3ZGgdcwANPj1gd7%2F%2Bxs9WZyncFdCf4vIVUh%2BJuz6m%2FOcjIemeX0QRxGbfsLl6Ocj5JzioaELjzTLcEhFlEZUU9fapN%2FFXWlpax%2F6g3hk27shY%2BBIP4NRC&X-Amz-Signature=86741b361997cd588153f102de516f108b51d4800ecca98739178161f8130fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYT5AUVB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBSvpPHNWiJ3pcRPaYRs8VQ70lfCK%2Fd145E60AxsY%2FPtAiATxh0M1PLcAaucLI%2FH1deQ9OnupEcB7MklT%2FP1rSCwnCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMBznUgBJNDSw8z9UDKtwD72PT9HFlUC9Ef8S17ERmlRajla7FkOLanNcxYpABujvfCgQR7lW5Umz0cfM28Ge7QxLiALOoiee6IrLul0USy2EIiqXOq91qwm%2BUfAD%2Fc9rgSb9lcb19Fao21AbAV7KWLn2goq7BuUDQ5xsW1gOHPot3Ucno8WfhD44CuSrAe6Ivus1zjs3DcqAU59YkYDs7gB2XZaqE6n7WxugPJuQKdww%2FI7jF8EFR3fxqQAzWZAWo4AKRHEw2O3uguHVPojHydl0Mk2F4LbSlilR91GeW%2BdrsXBUrdScsI0hMWWGpzWcOvmtvBqQg4WCsIV6RGAuhY%2FUVPUyTfimKBuTuT9xfboHf%2Bz7gHjnXt1W2HAmkjfJshqVKoCqo0DGTIgkd1QDif24M4I86zcwy28NJL9pzpVoCUkx00YLEYZs2G2nX8pBm63I%2FBfZdGTvFDEEdqPgYID%2BQ4Dbg1Y8TA7sHgaolcYKGPNqsw31Dg1CO91Swmo5FKrZoPIto1tlIugrPsZbBH7nUBg3l7lkURpNDUqpPmfyGizfMEZ5nUE%2BLPXxzvxdB7kgfenB6SPopwJFrmBmLRY9HdfAlLMUzyoBmYpt8A4bKOJ6yO03eomPrVAqkjpduOHTmcB8YIkb9le0w6oPZwwY6pgFRDxPlshX9hKT4vZeMH3LtfbUZBkyKsj94w%2FOE4KcjC1u51RCq%2BcB3jZeXAfTTX0lQgyg3FtXmNuEjCHyDlDVWDQ6os%2BNmRpEZImsKl4f3ZGgdcwANPj1gd7%2F%2Bxs9WZyncFdCf4vIVUh%2BJuz6m%2FOcjIemeX0QRxGbfsLl6Ocj5JzioaELjzTLcEhFlEZUU9fapN%2FFXWlpax%2F6g3hk27shY%2BBIP4NRC&X-Amz-Signature=07cc54949172ca93c3d51c504f54ad6d57f3cafd7f5606873453fc70c780e565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
