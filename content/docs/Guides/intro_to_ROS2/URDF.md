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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLMBLOL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHo%2BphpC8rh6l%2FhbzqacIX47WtGyK4o%2B11RQszrU5kiVAiAFYqQQD6n6Uz9fBQvt9Df92lGdMvW3%2Fq3D4v4xa9YsAiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0uQ%2B%2FFoOJvoGGybhKtwDwYXzzkr90kXxFT0veuuh3HK67CtmZL8pIXNjeJ5NDUdL5%2Bw4X6WRg%2FksURWvGEHhsGpNFQa6xh1IN0Ns6ODHl4qsu20Yyf5zTdk37TP4UAXIxkj%2BUtoGPs2KcAhGtBZ3P5MxxI0yYiHt%2B2ccr1T7ZZjHwVaO5Pz2xbyLny1%2F%2F76pnJyA0Afk%2F8w7qI1leOJUulYsIBv6%2Fc27DDoaCmXU5bpiHO5fm5iN2RyjVnG2r3m48bZ048ptf5XCtDdCvwVqdT0lx3TxI50qhDoDCBz%2FaMHfDP8oa%2BNm0nF7c95YjjrKzkCWYv6SlZ1Himg%2FxjTGne439pHNlUN8HanXyiTB83k1W4WYjEQuxvhlREb5JNBT7WQLRvgR5Y8XyiucwWQ4%2B7exLn9DF9%2F%2B9U34SNrNxiTIZRTV8mhv31khcKtA2%2FZWqF0wCvVLoV3Dn2VSSam9kuPG56gi%2FUitAh7f1ic9%2FalYQLKcMJgJyhNs%2Bp%2B%2BBQbBzf7EpuaPq8JQHC%2F1g8cr5Tj2JuMUDlXJI6JTYtd9lzpNewOctZ%2FJsca82bKKxo%2FPGpQZmASAHMzgYVzjeU0CjNZ60Uct%2BbuWBAJzBN1QV2S3FLu%2Be9ieulA%2Fc6XBiLKkHSFu1CIMVSqM7OkwksjQxAY6pgHMuJuHlXp3CVaV6tV9kU7vkwP3SoTa%2FFF2HQg8a9PDfXEg8Fmhtk1%2BP1Ve87%2Fq6paJ7AKTcNEA%2BfXl0G2TbqV94bSuN3CmTCf%2B6130fWWrxTwCJFhMTSZCChcTeaTsg%2FpnH9kLuaLR2%2FMF%2BTOcr5CANY4IYmPQsHveNJpgBcfaAvGH0ZBsRZfKFIelVZPoIr0xQf%2BDgo0SAbi07BTf7dwIVmmcLGSz&X-Amz-Signature=b61ba7cc8d1cf3b6d93117f9051ecd2da274a9be33d0229a65e136104a20e1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLMBLOL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHo%2BphpC8rh6l%2FhbzqacIX47WtGyK4o%2B11RQszrU5kiVAiAFYqQQD6n6Uz9fBQvt9Df92lGdMvW3%2Fq3D4v4xa9YsAiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0uQ%2B%2FFoOJvoGGybhKtwDwYXzzkr90kXxFT0veuuh3HK67CtmZL8pIXNjeJ5NDUdL5%2Bw4X6WRg%2FksURWvGEHhsGpNFQa6xh1IN0Ns6ODHl4qsu20Yyf5zTdk37TP4UAXIxkj%2BUtoGPs2KcAhGtBZ3P5MxxI0yYiHt%2B2ccr1T7ZZjHwVaO5Pz2xbyLny1%2F%2F76pnJyA0Afk%2F8w7qI1leOJUulYsIBv6%2Fc27DDoaCmXU5bpiHO5fm5iN2RyjVnG2r3m48bZ048ptf5XCtDdCvwVqdT0lx3TxI50qhDoDCBz%2FaMHfDP8oa%2BNm0nF7c95YjjrKzkCWYv6SlZ1Himg%2FxjTGne439pHNlUN8HanXyiTB83k1W4WYjEQuxvhlREb5JNBT7WQLRvgR5Y8XyiucwWQ4%2B7exLn9DF9%2F%2B9U34SNrNxiTIZRTV8mhv31khcKtA2%2FZWqF0wCvVLoV3Dn2VSSam9kuPG56gi%2FUitAh7f1ic9%2FalYQLKcMJgJyhNs%2Bp%2B%2BBQbBzf7EpuaPq8JQHC%2F1g8cr5Tj2JuMUDlXJI6JTYtd9lzpNewOctZ%2FJsca82bKKxo%2FPGpQZmASAHMzgYVzjeU0CjNZ60Uct%2BbuWBAJzBN1QV2S3FLu%2Be9ieulA%2Fc6XBiLKkHSFu1CIMVSqM7OkwksjQxAY6pgHMuJuHlXp3CVaV6tV9kU7vkwP3SoTa%2FFF2HQg8a9PDfXEg8Fmhtk1%2BP1Ve87%2Fq6paJ7AKTcNEA%2BfXl0G2TbqV94bSuN3CmTCf%2B6130fWWrxTwCJFhMTSZCChcTeaTsg%2FpnH9kLuaLR2%2FMF%2BTOcr5CANY4IYmPQsHveNJpgBcfaAvGH0ZBsRZfKFIelVZPoIr0xQf%2BDgo0SAbi07BTf7dwIVmmcLGSz&X-Amz-Signature=a5277d6151a43a49cf43400c77b6d2b7c3f07972fd1f0c82ce6c4e60d6c97966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
