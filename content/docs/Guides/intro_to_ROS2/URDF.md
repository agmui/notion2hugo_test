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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WNIR6B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBLJy1mQ7vlvReAHFag8zDUAE5UJj9VGfWRRFTM8wrQAIgOfLN44iNmCQM9ItHVwLpLWK342wx%2FrukD6SUh05zq6gqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkxI5S8UcWanHnv7SrcA6rmAl1UDhEdLjh1Sd6K8FxmLrVt72cyw1lJD%2F1q%2FnCkWAsGzXkXxukfPNnBdnC1%2FLX0vtwypLjl9kEmeo6cacY6DE1h0rbiQrNm9aLY8xS%2B6BXRVQ0Y9A5Jz6Mru62gDYwl7eI5XpssZDaoGAqiQXAcJbddb3LkBGw4LtwDod%2Bu1vQXtYtx7rT3StPGTTLY8uDVVwWCjoXXEsLtlLySuXbIYk8uCIQWAzRL9kcsxb6H1x1IxUT1a3Ljo7cClFrSL38dYna2OMoo6kkZK%2Flmv5FtGxmvE9htUDMQdOZBRlJFEgC6SFn9zFlMKz9%2F0TX2qyNUujHgcY9PZKaF7rCi4Qy3yli0y3WXsj9V%2BX7zUkh0r2%2B0CUYdVYyZCCfxncsnJKUj5%2B6YpNHA2QvlPJv2S%2FNHQ69jq5a65X16TVv9ZQNLypsKMXyoQRoQvyxT%2B5hs7Wa%2Fr2moGoOyV9%2BL1IZeluFQdIKi0D86vGBLiSTWc1PHcXPFx2A6XM1aOgLARdUhPo0hyy%2Bds%2Fpr9TPHiyekWYw50FORnQe5acW9dzqegPXOxLNJNImo3H%2B3QgJpwnrK%2BD1WgRzT1kGxiMcZWos%2B5Yk8RzXDo48R5VVec0tm%2BWI6HhOey%2B%2FHc6VX9w8kMLLByr4GOqUBW9oIX2wFdZJj4nMyHEhCXAWVSBUIEsXt6jril%2FoU8ozzkJCOQrNX%2F6zt5YJfkAS3YigltTQHvZ3KHW3Wb6aVu8HW4eX5DBgO4Zx48PniZu6D0Vq4mmrtNnvzDzA5%2BI3Y9LiIB8QJpozUp%2FtNc54C5rlbPJZFVr2lKdLrDLMTyyQbcjc%2Bqkq%2BnMlc9x%2BaKZubhNSmPKHGtSwvTVG34Vi5Ly6R%2FrKg&X-Amz-Signature=3b59e33d6642057e928acd1ea9ffdc6024b7633e1a103684fbb4d35f03c87589&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WNIR6B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBLJy1mQ7vlvReAHFag8zDUAE5UJj9VGfWRRFTM8wrQAIgOfLN44iNmCQM9ItHVwLpLWK342wx%2FrukD6SUh05zq6gqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkxI5S8UcWanHnv7SrcA6rmAl1UDhEdLjh1Sd6K8FxmLrVt72cyw1lJD%2F1q%2FnCkWAsGzXkXxukfPNnBdnC1%2FLX0vtwypLjl9kEmeo6cacY6DE1h0rbiQrNm9aLY8xS%2B6BXRVQ0Y9A5Jz6Mru62gDYwl7eI5XpssZDaoGAqiQXAcJbddb3LkBGw4LtwDod%2Bu1vQXtYtx7rT3StPGTTLY8uDVVwWCjoXXEsLtlLySuXbIYk8uCIQWAzRL9kcsxb6H1x1IxUT1a3Ljo7cClFrSL38dYna2OMoo6kkZK%2Flmv5FtGxmvE9htUDMQdOZBRlJFEgC6SFn9zFlMKz9%2F0TX2qyNUujHgcY9PZKaF7rCi4Qy3yli0y3WXsj9V%2BX7zUkh0r2%2B0CUYdVYyZCCfxncsnJKUj5%2B6YpNHA2QvlPJv2S%2FNHQ69jq5a65X16TVv9ZQNLypsKMXyoQRoQvyxT%2B5hs7Wa%2Fr2moGoOyV9%2BL1IZeluFQdIKi0D86vGBLiSTWc1PHcXPFx2A6XM1aOgLARdUhPo0hyy%2Bds%2Fpr9TPHiyekWYw50FORnQe5acW9dzqegPXOxLNJNImo3H%2B3QgJpwnrK%2BD1WgRzT1kGxiMcZWos%2B5Yk8RzXDo48R5VVec0tm%2BWI6HhOey%2B%2FHc6VX9w8kMLLByr4GOqUBW9oIX2wFdZJj4nMyHEhCXAWVSBUIEsXt6jril%2FoU8ozzkJCOQrNX%2F6zt5YJfkAS3YigltTQHvZ3KHW3Wb6aVu8HW4eX5DBgO4Zx48PniZu6D0Vq4mmrtNnvzDzA5%2BI3Y9LiIB8QJpozUp%2FtNc54C5rlbPJZFVr2lKdLrDLMTyyQbcjc%2Bqkq%2BnMlc9x%2BaKZubhNSmPKHGtSwvTVG34Vi5Ly6R%2FrKg&X-Amz-Signature=29e0b49a986f5312bad831d90184cf3421c9a136bdb5e34ed6e5d503174b0042&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
