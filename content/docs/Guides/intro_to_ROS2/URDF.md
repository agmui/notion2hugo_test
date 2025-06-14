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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XVVAIR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAhJXE2TNNiAqpkqUSB3O77lvbZ4lRw96IDlYvy%2FA8ylAiB%2FW%2Bxc2yNtKN7ljnJ3tMTU%2Fz1DqkE7upVyNJPtDWj88ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMxLk23Yt9ynZ%2BG%2FaZKtwDYMao%2FZGCKQwdVOBvqEpO8W0qBaNbCsOeN60kjqY%2FT%2B8EPYF6ykdJgsnhcsHwRxtBCJwgZRdW2nAqJaJ%2F0PZ45BFopIvNAnmbt6PaYsajLlcXXXhXcV3mW796ZSUyVkfaOgIMzICuAxvFr4GFJFvs55yGEL0g%2FN8tXrTKejOBYLGMyYgN87TjgO4pr09%2Ffkme%2B%2BxBiNXAd%2BL2Kn06H3CSnlsujPP6%2FqBLuyIMWvgid5KWu32Mf%2BYUQpXIEbTI7p8hE1K83Q8fT1ZPCP9WuRkmLWiKEyG8gEufOqsy5baZB820sr8Gm0NKZ4h17wjZ4LTfOTcs85d3%2BfTdOi1oqxEHCkWwzIFYAKn85cpvva7etFBC5j33xNPzlZdk%2BYSf9n%2BHXj6gRhzRUiQOyiGCVGAsWLah2zKI0EI07vD3nNc9y%2BTgCxgx20fmdGZkAPnnLWnBVFxGFpjma31TmxKv%2FHmispBXS9p198jdm5mJaQqCkkjoOpLCMPAk2bvmcWsPOkOFByc0%2B406AaNfXNl2SS%2FmATJYz4Urzx6q%2BKkhFWMjMFhJ%2BVLLhNTwzlcsvw9%2FUv1oN02DAox2aYeGxM%2FYu4WbYBLnNVXRNYhvStUxV2SaRqbh9iG%2Fw9wb1zvZa2Yw4IK2wgY6pgHQYhA3DW1vlEllwFJ8m%2Bt6%2Bq%2Bd%2Fsg%2FfeHgDTwLLkJdPujAbB%2BvDhsCOSdTLlmLdCcWfLQsOyT%2B4qaycrSBiVlcUHmtWk6nxggJXPEgSMdfV1XGrPowWUb2hchJm2PEbvdQIOfLMszqpPExvXwM2scPkABYT5lSm1AMvVgJBMHHbm5FyPWWXVd8H1cFLgaEMIR38yCBzdR5iW6SVYBGuwl2%2FwdXS7a3&X-Amz-Signature=ea4688a46e2d592d325bc35073f0ac56393b2577a523e340658afd891efa8c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XVVAIR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAhJXE2TNNiAqpkqUSB3O77lvbZ4lRw96IDlYvy%2FA8ylAiB%2FW%2Bxc2yNtKN7ljnJ3tMTU%2Fz1DqkE7upVyNJPtDWj88ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMxLk23Yt9ynZ%2BG%2FaZKtwDYMao%2FZGCKQwdVOBvqEpO8W0qBaNbCsOeN60kjqY%2FT%2B8EPYF6ykdJgsnhcsHwRxtBCJwgZRdW2nAqJaJ%2F0PZ45BFopIvNAnmbt6PaYsajLlcXXXhXcV3mW796ZSUyVkfaOgIMzICuAxvFr4GFJFvs55yGEL0g%2FN8tXrTKejOBYLGMyYgN87TjgO4pr09%2Ffkme%2B%2BxBiNXAd%2BL2Kn06H3CSnlsujPP6%2FqBLuyIMWvgid5KWu32Mf%2BYUQpXIEbTI7p8hE1K83Q8fT1ZPCP9WuRkmLWiKEyG8gEufOqsy5baZB820sr8Gm0NKZ4h17wjZ4LTfOTcs85d3%2BfTdOi1oqxEHCkWwzIFYAKn85cpvva7etFBC5j33xNPzlZdk%2BYSf9n%2BHXj6gRhzRUiQOyiGCVGAsWLah2zKI0EI07vD3nNc9y%2BTgCxgx20fmdGZkAPnnLWnBVFxGFpjma31TmxKv%2FHmispBXS9p198jdm5mJaQqCkkjoOpLCMPAk2bvmcWsPOkOFByc0%2B406AaNfXNl2SS%2FmATJYz4Urzx6q%2BKkhFWMjMFhJ%2BVLLhNTwzlcsvw9%2FUv1oN02DAox2aYeGxM%2FYu4WbYBLnNVXRNYhvStUxV2SaRqbh9iG%2Fw9wb1zvZa2Yw4IK2wgY6pgHQYhA3DW1vlEllwFJ8m%2Bt6%2Bq%2Bd%2Fsg%2FfeHgDTwLLkJdPujAbB%2BvDhsCOSdTLlmLdCcWfLQsOyT%2B4qaycrSBiVlcUHmtWk6nxggJXPEgSMdfV1XGrPowWUb2hchJm2PEbvdQIOfLMszqpPExvXwM2scPkABYT5lSm1AMvVgJBMHHbm5FyPWWXVd8H1cFLgaEMIR38yCBzdR5iW6SVYBGuwl2%2FwdXS7a3&X-Amz-Signature=2bd29535fda77eb29bd7040cf4ac2aa1b020a58fba32b4e838660599bf25a294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
