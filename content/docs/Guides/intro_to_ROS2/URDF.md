---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWJQEAZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbGUYgwq49My%2BLbLEjGZHzJ6BwH1qhG5jlP2SDJqLK%2BwIgOU8%2BxLwAiv35rxfU0GBt2bn693x79sNrXs448PxHSqYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPTy4XkLg7aminUbCrcAzlxzMBXgs5T5sgYDoyH3sfor8zT7C8N5Ahh9J283A64ZeqfKaAMDjuZ4s5wmwXwFrFSxR%2Blus1hA4SqEYhXBDjBD9ZUC0z7WwvXF0suJ2NCLsYH0L7eQ8nCgbSyW6IMxIdRqSfQG4OeB%2FzzBrcA4S23TyT8na93TxBr8i%2BG7kokzAsDwqRcpyT%2BZ6kWf%2BiDTelbWRxt%2FSQpmUU3fqLZRz4uadxX3wpbaW8sNe76XTYP%2BX6ltCeA%2Bff7oe9EmVY3f%2Bioc9OdybGGTqvlVXb9v%2B2ReCo5zJyyyac2VIb%2BEeerjEvzK23MnJajYS%2FcFVYVW%2Bm5Bqcsug711l86JWAXav6dOX39hutnUPz6nxdd6a%2Bnu%2BOfzrDpjPTPLPcHw%2Bt94XXQOG3hqMnuzXDYLg6kx5eXwSOdQ%2Br5a1MzpOHlqkmt0OvCEFLqu9RV%2F%2BveHIgNjftc2TXOgAg3x1yKO216qPG9jhZiQGD2IVdwsJyvHpLliqU5drS8q4R8zf3X%2BywslGLDTjMxCHj%2FH4HexYbrQMe99NNqRrkGw5caoHR9AaV6juxWxUIR%2B%2FwT%2BJ91OUcB%2FnVYwv8bET1YniKKnfJbDq02Oh5qhOOAzrFPlUGatU4a68nGXxQm3lRfn3YDMNiB3sQGOqUBNcw9DJRkmtHFpuyqz9VDglN3onxxpQ7ojUY8dMq1c9NAww0vjrlnUAfH6UhUcTaS39R0%2B%2BRUsgnbeE701GDc6O0R0lzPqN02%2BAQb9b%2BhHGm5W4mcOXGNKVTVYGSR7UCTOPOaO4Zhk8fqPDVWH%2FDO%2BdgzZI4zj%2BXiXlJpVnsicqbZKyD7HZLyEYHuLBlYm7TpO70C3onKfKW3m%2FwJb6QA1C132Rqf&X-Amz-Signature=987d1190a36fc0d027e618a8da4285d04a658d7a8a9aee3849b908ad8eb4cd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWJQEAZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbGUYgwq49My%2BLbLEjGZHzJ6BwH1qhG5jlP2SDJqLK%2BwIgOU8%2BxLwAiv35rxfU0GBt2bn693x79sNrXs448PxHSqYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPTy4XkLg7aminUbCrcAzlxzMBXgs5T5sgYDoyH3sfor8zT7C8N5Ahh9J283A64ZeqfKaAMDjuZ4s5wmwXwFrFSxR%2Blus1hA4SqEYhXBDjBD9ZUC0z7WwvXF0suJ2NCLsYH0L7eQ8nCgbSyW6IMxIdRqSfQG4OeB%2FzzBrcA4S23TyT8na93TxBr8i%2BG7kokzAsDwqRcpyT%2BZ6kWf%2BiDTelbWRxt%2FSQpmUU3fqLZRz4uadxX3wpbaW8sNe76XTYP%2BX6ltCeA%2Bff7oe9EmVY3f%2Bioc9OdybGGTqvlVXb9v%2B2ReCo5zJyyyac2VIb%2BEeerjEvzK23MnJajYS%2FcFVYVW%2Bm5Bqcsug711l86JWAXav6dOX39hutnUPz6nxdd6a%2Bnu%2BOfzrDpjPTPLPcHw%2Bt94XXQOG3hqMnuzXDYLg6kx5eXwSOdQ%2Br5a1MzpOHlqkmt0OvCEFLqu9RV%2F%2BveHIgNjftc2TXOgAg3x1yKO216qPG9jhZiQGD2IVdwsJyvHpLliqU5drS8q4R8zf3X%2BywslGLDTjMxCHj%2FH4HexYbrQMe99NNqRrkGw5caoHR9AaV6juxWxUIR%2B%2FwT%2BJ91OUcB%2FnVYwv8bET1YniKKnfJbDq02Oh5qhOOAzrFPlUGatU4a68nGXxQm3lRfn3YDMNiB3sQGOqUBNcw9DJRkmtHFpuyqz9VDglN3onxxpQ7ojUY8dMq1c9NAww0vjrlnUAfH6UhUcTaS39R0%2B%2BRUsgnbeE701GDc6O0R0lzPqN02%2BAQb9b%2BhHGm5W4mcOXGNKVTVYGSR7UCTOPOaO4Zhk8fqPDVWH%2FDO%2BdgzZI4zj%2BXiXlJpVnsicqbZKyD7HZLyEYHuLBlYm7TpO70C3onKfKW3m%2FwJb6QA1C132Rqf&X-Amz-Signature=ebf5c0d6757cf7910ccaaf617139ee6824d9c561734f88064b595b872b9db5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
