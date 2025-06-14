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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DE6JC6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDehCcPQ14ruSaXmwQTaENBoj4%2FQ3V8wKBzpmV%2FKWxOaQIhALT%2B0vjF9WBxCknH5EN6LY1iQJ2q71j%2Fn%2Fm0hJwKbcXbKv8DCCgQABoMNjM3NDIzMTgzODA1IgxWQ5G6XZATbT2xoMgq3AMiLxvOHSgPultu%2FPJAopH%2FnbfB5bFhznAHtzbcsyvF4woUDy6eLJh%2ByUPdCpKC2ZIe%2F4hbeJxAX5Q8IxThGzJn8ybvGm0c52e2l3zyyGCE4Cd6YodtJgcTj9P%2F8ck0ve1BGFSvIl1MFFTPiUUur6IYmPnXyU2hXqEzDO0ZliJ1J354fW5aaLREnyWwfgdDZ13SvZrktQvApyq4VBt4guNsPmQeOuv4NDbwZlOWLsJeenHiFuXht%2FIAIng%2Fdzkpjdr4Jm0E1BKWUh22leReEq8Y2TuQjdrwzIvW%2BWE2p%2BXHWtDl8zOKeQEGQ42al4yO2M8op3ytAYxoAyA6uSRUOIUeoCN5dDzesZ7ZsVKk5T9kbeQv0lN%2F1ETVCQqq26IrPcbHcwXkqvXLOS6WbcjAQmdJnpU3eX%2Bc8RxQcym6EqxPfSxMxRbNS5Y3WT047Kg8Mial8%2FcIKE4pO2dVYzR9E%2Fpy3F49hfMpcdiWgCPdxD9D4GdrS5aF7Gf0zVOibEOx4wWdnxs0VB0yv5iFwOj4iUDMEKicpKasdZM8bCFgGDeq2HeXQUifao%2FyAPf0eBNesc42ZeRsw4R512t70K3jlMIIGnfLxmU5GwP639xwT6zCOsdoMUTAWccRAZPN9jCnvLTCBjqkAUHLrj%2FfkDo4vthpCmmYrRld1v0PamP6O3apCKWMA0to6LX5aGrn2QizgCi9F5V8E3PqOUjJ7J%2BC%2FxrMtcwQbYH1htWgVG9hnGdVqAVGjh2J3J8a%2F0myihrmneQO0TMivGoOg0f889Ai6p1o%2BPOzhlxtT7VSkHWxr%2BZBG6Y3hV3PSskTGz3SQb0ZSqvStC16eTkv0tuaqg8xaHAhRBbogOWXkkva&X-Amz-Signature=d2d127af4a5baaf56e7a52ff2b3785b1d9e2a54c468a95dd17d62fe358e2cb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DE6JC6K%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDehCcPQ14ruSaXmwQTaENBoj4%2FQ3V8wKBzpmV%2FKWxOaQIhALT%2B0vjF9WBxCknH5EN6LY1iQJ2q71j%2Fn%2Fm0hJwKbcXbKv8DCCgQABoMNjM3NDIzMTgzODA1IgxWQ5G6XZATbT2xoMgq3AMiLxvOHSgPultu%2FPJAopH%2FnbfB5bFhznAHtzbcsyvF4woUDy6eLJh%2ByUPdCpKC2ZIe%2F4hbeJxAX5Q8IxThGzJn8ybvGm0c52e2l3zyyGCE4Cd6YodtJgcTj9P%2F8ck0ve1BGFSvIl1MFFTPiUUur6IYmPnXyU2hXqEzDO0ZliJ1J354fW5aaLREnyWwfgdDZ13SvZrktQvApyq4VBt4guNsPmQeOuv4NDbwZlOWLsJeenHiFuXht%2FIAIng%2Fdzkpjdr4Jm0E1BKWUh22leReEq8Y2TuQjdrwzIvW%2BWE2p%2BXHWtDl8zOKeQEGQ42al4yO2M8op3ytAYxoAyA6uSRUOIUeoCN5dDzesZ7ZsVKk5T9kbeQv0lN%2F1ETVCQqq26IrPcbHcwXkqvXLOS6WbcjAQmdJnpU3eX%2Bc8RxQcym6EqxPfSxMxRbNS5Y3WT047Kg8Mial8%2FcIKE4pO2dVYzR9E%2Fpy3F49hfMpcdiWgCPdxD9D4GdrS5aF7Gf0zVOibEOx4wWdnxs0VB0yv5iFwOj4iUDMEKicpKasdZM8bCFgGDeq2HeXQUifao%2FyAPf0eBNesc42ZeRsw4R512t70K3jlMIIGnfLxmU5GwP639xwT6zCOsdoMUTAWccRAZPN9jCnvLTCBjqkAUHLrj%2FfkDo4vthpCmmYrRld1v0PamP6O3apCKWMA0to6LX5aGrn2QizgCi9F5V8E3PqOUjJ7J%2BC%2FxrMtcwQbYH1htWgVG9hnGdVqAVGjh2J3J8a%2F0myihrmneQO0TMivGoOg0f889Ai6p1o%2BPOzhlxtT7VSkHWxr%2BZBG6Y3hV3PSskTGz3SQb0ZSqvStC16eTkv0tuaqg8xaHAhRBbogOWXkkva&X-Amz-Signature=957989ae5c70b6f5c68301b77f7f4efc8f441b2f3f55b4acbefa5006b1188804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
