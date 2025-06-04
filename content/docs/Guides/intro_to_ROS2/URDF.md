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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3BVDFF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCdkgC44zpkkmFIDLDvfV1yottuSzDWxVdLhOUKcG1icAIgPzElu%2F0KcOQZ8i0zkl%2Fw%2Fuuiq57ohk3UD5safNLNMekq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFtTcmN4zEKDfOQbpSrcA0rGOwusy784dg67CtLNneGbcI%2FCWIb5c6jHBy4TG1jZdBlzFS0wtZPbtEibaifOnr3bADxV7qYZlu1hYTPjMx2mYAiBTwB9XzYywWUnUeVbz3828scdnwYsdT8GMFJJo7Ur5oiaS9vijNUyhnM%2BfFKpMDwzaRm2tstV2efPG98ogaiSK3mZLyQfJdb4fwu4uKY1ytUDxFuvg43NXdlgbMxaJI7U7J%2FiZHFnIghSo71Apks6WxULDChTDbfy9CNkzUjToeK2DAzrXZdFAbZ27oAE4Ci0rl0NYJgXFBZe82u67msQX2SXH70K3Duns5fxXxcHZdwJmCC4xnws%2F4D3ELhJizyvLYkyqTbNpA2nSNAnDIFgvuqWksfs9VU%2B7IrL8qIzV7dnUnvZK3cYZ6RlW%2BhH6vAOjrozvT%2BTc8oLnE2Ikvru6GhTrCrTnV3qhgoxWnsXfKDXkEczjDLVUTlBG7X2N%2BGFPTfIBrXJxaM%2BTQVqBjmmHqgaXFCnGtsTQkOIrldxKUl5ytZdLAmEmi66YRVp3JkR5eoyc0NPIf%2F9Y7UJ6vnyUTP8EyKkkxPpDDFco62O3npHkqMcXGfPvXSe6BHQZsYFfuzb8ZrgKIagvJ7x042VMOvhatCMfU9EMLHVgsIGOqUBKBU%2Bxo2iAIV7Bj78m5r36okJcUZz5hOomDiyo2FLysqiU7NmWKw4etcfENBxTzeKdLHfA8MAFmdfugHiHoFUKeF8kfOpaig4C2ORK%2Bh2Z%2FHLRXFn%2F5udVN%2B9eqzMotAhxG0nI1dmBEHY1H1jj0%2FBwKX5zAnyr3CbBpss5Wb5KzbZoVE8quAVTUqDu%2BvwQDpy2fRslAHR8myDvwiepXjOXtOj%2Fph9&X-Amz-Signature=34ad83ccd3527c076e8f57af9cb2cfbdf9c386e631e628b1ce219e06d07f7ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3BVDFF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCdkgC44zpkkmFIDLDvfV1yottuSzDWxVdLhOUKcG1icAIgPzElu%2F0KcOQZ8i0zkl%2Fw%2Fuuiq57ohk3UD5safNLNMekq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFtTcmN4zEKDfOQbpSrcA0rGOwusy784dg67CtLNneGbcI%2FCWIb5c6jHBy4TG1jZdBlzFS0wtZPbtEibaifOnr3bADxV7qYZlu1hYTPjMx2mYAiBTwB9XzYywWUnUeVbz3828scdnwYsdT8GMFJJo7Ur5oiaS9vijNUyhnM%2BfFKpMDwzaRm2tstV2efPG98ogaiSK3mZLyQfJdb4fwu4uKY1ytUDxFuvg43NXdlgbMxaJI7U7J%2FiZHFnIghSo71Apks6WxULDChTDbfy9CNkzUjToeK2DAzrXZdFAbZ27oAE4Ci0rl0NYJgXFBZe82u67msQX2SXH70K3Duns5fxXxcHZdwJmCC4xnws%2F4D3ELhJizyvLYkyqTbNpA2nSNAnDIFgvuqWksfs9VU%2B7IrL8qIzV7dnUnvZK3cYZ6RlW%2BhH6vAOjrozvT%2BTc8oLnE2Ikvru6GhTrCrTnV3qhgoxWnsXfKDXkEczjDLVUTlBG7X2N%2BGFPTfIBrXJxaM%2BTQVqBjmmHqgaXFCnGtsTQkOIrldxKUl5ytZdLAmEmi66YRVp3JkR5eoyc0NPIf%2F9Y7UJ6vnyUTP8EyKkkxPpDDFco62O3npHkqMcXGfPvXSe6BHQZsYFfuzb8ZrgKIagvJ7x042VMOvhatCMfU9EMLHVgsIGOqUBKBU%2Bxo2iAIV7Bj78m5r36okJcUZz5hOomDiyo2FLysqiU7NmWKw4etcfENBxTzeKdLHfA8MAFmdfugHiHoFUKeF8kfOpaig4C2ORK%2Bh2Z%2FHLRXFn%2F5udVN%2B9eqzMotAhxG0nI1dmBEHY1H1jj0%2FBwKX5zAnyr3CbBpss5Wb5KzbZoVE8quAVTUqDu%2BvwQDpy2fRslAHR8myDvwiepXjOXtOj%2Fph9&X-Amz-Signature=a5192330d4bd00721ea6df1561f4ce13836ad37ed04559dc44eab8c8c766e7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
