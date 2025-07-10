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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LLYHCOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW31De9LVrqsMDnkyfBKpaVKQWSX4Wt9jkrjbIn0wNGAiEAi1uiDN3lJt9gb1DXmsbYKaP5zAODc6RPuq80%2BPeS0ycqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAoRpedSrEDeQOsxyrcAzPwa%2BMzyg0zqDl%2F%2FzGxRQQDTdVaqnKPukiRGPmhf%2FlnIbbkZ3Jx0owO6UhNp7D%2BXak238KW3lJqe2OgYWHvk3sdcIpQm9ltOQHkdFsQZH2IxHmsfv6z6TzjsZRhfuLx0Fbu5FFhC%2FCXOGpdpYlf7j15IHIttbbgOnw8Za%2B%2F0JD4XX6aLNc4CH58S7%2F5cbDBcury9lj%2B6YcfY5VyymX8XWAK94F2cEA0QAL%2BSynP6r00kLYuEykjyrcZcg3BCxIv5nVkntgE0cszX5sQMEhPiS%2B0IzH%2BQ2s56l%2FVeMqXSEvZYYW%2FqF7qnmk4tplZI57k5qUcAuxhriraHptFmLQrYi8vFGNfkUUwFtN7HyCA473Eh6iji8VbcMF7MkouF0chBmNZuYS4aCkTR%2FQKfKXv9RYm5UH4313YKhhj%2FNg9M8QRjxBpXLn%2B1Du%2FCTpObYXUlGGCAuyatAKTegcEfn86BLmbdq80H%2B1bloDQqHMGHnDadnNzqW8NaPUiZJvyE6AweRMgGiaAvPj59gXauGvTSTJSl%2Fo7bTrbAshLfhSiaM%2F7oox18lIWSm8Nwi7BJQ7bGrf91OYu%2Fqy1ncZ7Om8sPR9mt1iRPOFdnW54NMOFg25AMH8%2FAGGUF2DtDjJmMJTNwMMGOqUBoDB%2F1HEcCCDXh4eVtqzamaZoMSP%2BLMW3UuASD0tW8ex8PNLPuvmlZzc7lApMDfXcjlfrXw6xE5WmSfeBJT8eLGOrXYXmkUvrrm4FxjS3L6FcyK3UWAFrPpUsNG%2BbtD%2BXv7ZC3xPjCGPBcRrCQ5Cj26GXvKfxLoeuUqdXHT99s7c%2B25wcTGQErssmzYmll%2BdzqF5gmYKgACypGW7w6r%2BX4CsDS1QT&X-Amz-Signature=5f3765025716593c84e420d6a710ff702600354654c550480864a1dd7393cdd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LLYHCOM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW31De9LVrqsMDnkyfBKpaVKQWSX4Wt9jkrjbIn0wNGAiEAi1uiDN3lJt9gb1DXmsbYKaP5zAODc6RPuq80%2BPeS0ycqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAoRpedSrEDeQOsxyrcAzPwa%2BMzyg0zqDl%2F%2FzGxRQQDTdVaqnKPukiRGPmhf%2FlnIbbkZ3Jx0owO6UhNp7D%2BXak238KW3lJqe2OgYWHvk3sdcIpQm9ltOQHkdFsQZH2IxHmsfv6z6TzjsZRhfuLx0Fbu5FFhC%2FCXOGpdpYlf7j15IHIttbbgOnw8Za%2B%2F0JD4XX6aLNc4CH58S7%2F5cbDBcury9lj%2B6YcfY5VyymX8XWAK94F2cEA0QAL%2BSynP6r00kLYuEykjyrcZcg3BCxIv5nVkntgE0cszX5sQMEhPiS%2B0IzH%2BQ2s56l%2FVeMqXSEvZYYW%2FqF7qnmk4tplZI57k5qUcAuxhriraHptFmLQrYi8vFGNfkUUwFtN7HyCA473Eh6iji8VbcMF7MkouF0chBmNZuYS4aCkTR%2FQKfKXv9RYm5UH4313YKhhj%2FNg9M8QRjxBpXLn%2B1Du%2FCTpObYXUlGGCAuyatAKTegcEfn86BLmbdq80H%2B1bloDQqHMGHnDadnNzqW8NaPUiZJvyE6AweRMgGiaAvPj59gXauGvTSTJSl%2Fo7bTrbAshLfhSiaM%2F7oox18lIWSm8Nwi7BJQ7bGrf91OYu%2Fqy1ncZ7Om8sPR9mt1iRPOFdnW54NMOFg25AMH8%2FAGGUF2DtDjJmMJTNwMMGOqUBoDB%2F1HEcCCDXh4eVtqzamaZoMSP%2BLMW3UuASD0tW8ex8PNLPuvmlZzc7lApMDfXcjlfrXw6xE5WmSfeBJT8eLGOrXYXmkUvrrm4FxjS3L6FcyK3UWAFrPpUsNG%2BbtD%2BXv7ZC3xPjCGPBcRrCQ5Cj26GXvKfxLoeuUqdXHT99s7c%2B25wcTGQErssmzYmll%2BdzqF5gmYKgACypGW7w6r%2BX4CsDS1QT&X-Amz-Signature=7bdf4f6ed83d8a62ed6786496969224a9d4f06bacafa954dc39f17af661a40ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
