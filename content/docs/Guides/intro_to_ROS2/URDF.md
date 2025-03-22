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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCDO73E%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEI%2BK16VfTU4aE6Kzp6MIX%2F7Jx19jO%2BsiwbXrrj5N8sWAiEA4rKum2iuBqcKkdKiOOXJWRkRYSTkxWsQftTFB5Y0IG0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9rvkqmMUCDBfdwPircA3GhNpj8wViNuk48dDXmTQpdbuLVjjlli70%2FfKFm5JE7au3lzh5OFibnPoE64mEIj6S%2FxyzFQ3c6th1rJevu7bvb4k2W1Wn%2BK8TMUx55NUCgpveRtZkD3zSdW9FqjBFjjr0LMD4wyE4n1UkCg4nbhvqS8j21DpHnjUJTMrOHFefhMGpmWhRHq4SCvL7kts%2BGAp3JcwdAW%2Fgt84u5JWpmdaUkswcZj5Lri2f3jqT6zELu2oF5yNmXo7jz%2FTLff1k%2B2dt9NipLFcb62H2FS57D2GBZiyj%2F2Lz6gOgzys2Ka7qDriJh79UAfdd%2FxHip8QJ3kMdtQAp8I5GbkAAAOnFh2TYHMXBLJyKeE22YS%2BbJjKpcW2hCeKPfNiBdGo8m4x%2FvgnIFp00%2B1SJurCx1JlhAbt2oCTCG0J2FQ9rzQH3lRDF%2F4%2B8oNvFIJqx%2Bafdt0UXKuKeTHf8tW3KORQH6%2BOkH4Mt6bB3IO9MlQuqr%2FEV1sbLEs4mk2D%2BJvqOh3K9ZzXyO7SpM4y3EQSX31yHI3gmWM27%2BGrOEcFy%2F9x0HlI%2Bp0%2BlbDkcXu0R49OKtRHRz6cuw4VTIbz4fvbSrTx6sHkK%2FDdBHefRdrhUf2Yt9r4RIaSCuysGLU97PjNj7oRq%2FMIf2%2Br4GOqUBWVxcphA1Ue%2FMY8pnRjTYWyZbb1d%2BuaTpK2y2R7EUKRuOaJNZyfm0ibS3%2Bugq2i%2FyN6Q8W1RwxadBsb7%2FjH92uG%2B9gyAz%2BGk6TLhDC1cF1kRMgbqDhbAEi3LFCDFXzcqe%2Ff96CZM0b5aTfqGcuFkCsqjK2z9QKdX8jjqoma9uwVm7h7FY5YbERJsPKPSYtLN9QQNOSwfcjntYWpAx%2BbVKMXdKMw7D&X-Amz-Signature=5443ccc4f95014c9b6d367288b70334c84558627cdad4ff609116ffb181a7219&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCDO73E%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEI%2BK16VfTU4aE6Kzp6MIX%2F7Jx19jO%2BsiwbXrrj5N8sWAiEA4rKum2iuBqcKkdKiOOXJWRkRYSTkxWsQftTFB5Y0IG0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9rvkqmMUCDBfdwPircA3GhNpj8wViNuk48dDXmTQpdbuLVjjlli70%2FfKFm5JE7au3lzh5OFibnPoE64mEIj6S%2FxyzFQ3c6th1rJevu7bvb4k2W1Wn%2BK8TMUx55NUCgpveRtZkD3zSdW9FqjBFjjr0LMD4wyE4n1UkCg4nbhvqS8j21DpHnjUJTMrOHFefhMGpmWhRHq4SCvL7kts%2BGAp3JcwdAW%2Fgt84u5JWpmdaUkswcZj5Lri2f3jqT6zELu2oF5yNmXo7jz%2FTLff1k%2B2dt9NipLFcb62H2FS57D2GBZiyj%2F2Lz6gOgzys2Ka7qDriJh79UAfdd%2FxHip8QJ3kMdtQAp8I5GbkAAAOnFh2TYHMXBLJyKeE22YS%2BbJjKpcW2hCeKPfNiBdGo8m4x%2FvgnIFp00%2B1SJurCx1JlhAbt2oCTCG0J2FQ9rzQH3lRDF%2F4%2B8oNvFIJqx%2Bafdt0UXKuKeTHf8tW3KORQH6%2BOkH4Mt6bB3IO9MlQuqr%2FEV1sbLEs4mk2D%2BJvqOh3K9ZzXyO7SpM4y3EQSX31yHI3gmWM27%2BGrOEcFy%2F9x0HlI%2Bp0%2BlbDkcXu0R49OKtRHRz6cuw4VTIbz4fvbSrTx6sHkK%2FDdBHefRdrhUf2Yt9r4RIaSCuysGLU97PjNj7oRq%2FMIf2%2Br4GOqUBWVxcphA1Ue%2FMY8pnRjTYWyZbb1d%2BuaTpK2y2R7EUKRuOaJNZyfm0ibS3%2Bugq2i%2FyN6Q8W1RwxadBsb7%2FjH92uG%2B9gyAz%2BGk6TLhDC1cF1kRMgbqDhbAEi3LFCDFXzcqe%2Ff96CZM0b5aTfqGcuFkCsqjK2z9QKdX8jjqoma9uwVm7h7FY5YbERJsPKPSYtLN9QQNOSwfcjntYWpAx%2BbVKMXdKMw7D&X-Amz-Signature=a2d8e85bf5bcdaec40e4797bc9d70b6ecca302e2f206d994583b199d5f5567d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
