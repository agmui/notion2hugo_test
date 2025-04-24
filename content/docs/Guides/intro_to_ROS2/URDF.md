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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PNKONT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgsUs9%2FqNL1p3u4eCp2KHb6CNJ5x7dEr3mz0RxPSTQmAiEAkD0%2BTaFtRfkTXqCQjt%2FtHvGsSXny%2BbXZzaKNwswBGRQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKdaJ%2F7j3tH7HMqI2CrcA2xehOhosRtKYYFIOSQaKgPkS8%2BSRCH4hrJ8R91Z%2BajeFod6OXiLm20GpXpmi%2B4gQaAcwhNqtbV5nLYL%2BJ%2BJhCi5moYhrQiNcElSUJLLIeRk2zcJiYwwyBOT%2BdkOFEPtuzCLgYNEUfKl2RTPkgQrSuwTXWsjSMoUlNKtWIxPTB6vYKUtZgof399cIRm08xllS17bDi8UBd0NrRZQWc2Cr8iIaYKDs6vIy5%2FAoZkPutOiyC3rxou0rrFUaaYMVt8%2BXUBRl7rMa%2BZHlrm1LbEHkE%2FWhMlgtpX7GSMEGxOFJuw25CGNhSrGnPy9bNvfir9jpgvKOKggYcAhqKOc5ERoEY4u9FykFMmTTCKcRuSSGeZhqN4SSFs7%2Bg2ugDuwLnGdKD434GekjjyiMoR9GwjxOHNUnYWvLlPWq9LZbTTQENce53nHAb8%2BCY%2FnD%2BE4TtundyUG1IwfnQDidJGRQKGTSLFRb1VcsbXGsumYI7Nq2kV29CWaoUWf7ATL38Yny60x0VhULcAEiE6TJgeFm6AR5YrKNUyf04A8nQEkfm%2B7uP6ri9LyVip19DcDqhgD%2BABTLYXDun4LFNxAUx%2Bz41CUQrnKOPAgdlMdtg82N2ovRCTf0%2F4BuIOGsPwED9kLMPaJqsAGOqUB7NjR5G2WB3CC87w8G8i2jGBva7dVgFz%2BPNXFuJQKaooYsxZFeS3wEz52FbYde7rQNBV%2FOSOVQil0Nvp4ByoXBZ1RUNUVrPxHCFSg7E%2FGDj%2BCLc0oXm1VEFGWuIT4XcCefBweyC2rMD7YzgJj%2Bq6NSNtsLSrdA2p0j4hQdsptIRq8hW%2FKEmeJwgJxghqUm5Wh1w52NLLm5JPW5ZQctHNlZ7L9Aaj0&X-Amz-Signature=986cbeaf0b54e750781c4298ffbe1ddb532fd48bb75428b551f2a7f16b5f812e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PNKONT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgsUs9%2FqNL1p3u4eCp2KHb6CNJ5x7dEr3mz0RxPSTQmAiEAkD0%2BTaFtRfkTXqCQjt%2FtHvGsSXny%2BbXZzaKNwswBGRQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKdaJ%2F7j3tH7HMqI2CrcA2xehOhosRtKYYFIOSQaKgPkS8%2BSRCH4hrJ8R91Z%2BajeFod6OXiLm20GpXpmi%2B4gQaAcwhNqtbV5nLYL%2BJ%2BJhCi5moYhrQiNcElSUJLLIeRk2zcJiYwwyBOT%2BdkOFEPtuzCLgYNEUfKl2RTPkgQrSuwTXWsjSMoUlNKtWIxPTB6vYKUtZgof399cIRm08xllS17bDi8UBd0NrRZQWc2Cr8iIaYKDs6vIy5%2FAoZkPutOiyC3rxou0rrFUaaYMVt8%2BXUBRl7rMa%2BZHlrm1LbEHkE%2FWhMlgtpX7GSMEGxOFJuw25CGNhSrGnPy9bNvfir9jpgvKOKggYcAhqKOc5ERoEY4u9FykFMmTTCKcRuSSGeZhqN4SSFs7%2Bg2ugDuwLnGdKD434GekjjyiMoR9GwjxOHNUnYWvLlPWq9LZbTTQENce53nHAb8%2BCY%2FnD%2BE4TtundyUG1IwfnQDidJGRQKGTSLFRb1VcsbXGsumYI7Nq2kV29CWaoUWf7ATL38Yny60x0VhULcAEiE6TJgeFm6AR5YrKNUyf04A8nQEkfm%2B7uP6ri9LyVip19DcDqhgD%2BABTLYXDun4LFNxAUx%2Bz41CUQrnKOPAgdlMdtg82N2ovRCTf0%2F4BuIOGsPwED9kLMPaJqsAGOqUB7NjR5G2WB3CC87w8G8i2jGBva7dVgFz%2BPNXFuJQKaooYsxZFeS3wEz52FbYde7rQNBV%2FOSOVQil0Nvp4ByoXBZ1RUNUVrPxHCFSg7E%2FGDj%2BCLc0oXm1VEFGWuIT4XcCefBweyC2rMD7YzgJj%2Bq6NSNtsLSrdA2p0j4hQdsptIRq8hW%2FKEmeJwgJxghqUm5Wh1w52NLLm5JPW5ZQctHNlZ7L9Aaj0&X-Amz-Signature=5efaff8522a6967abd377c6d0a4b7bed88a86c61bf0fcd4e4ad30277f66babdb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
