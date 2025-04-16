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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEHGWA7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BhyCIZWDL9%2BpIO1wN%2F8P1v2BzTFpQ3eIS1kXxNNgVxAiAdPuf%2FhweRnhVLAuNnDg2%2Bu9OuRP0F04F%2BfBk9qDzQkCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM7cVdDTW1GNMp80u2KtwDsnPPVgE27SjJnLp5krhYzdl%2BR56jzS%2FwXoc4w1EkvT%2Fe8zDZbctGcN22XgeHQJxkv3OFqfE2YjyyrsyfhOylmf%2BX4KpfdtfnKdoEaeDmUVXJPbPXZ2MqDTa4%2FKeNZ1j%2BS%2Bh%2ByUCNn4%2Fx4XduEz4znJ%2BPPlIrY30ufHSRnNFKYbkVYn%2FKF7ckxPq60Ia1udSTyCuS6KLGaihdncG9ADz5qhldvM8UPwkLcMzmfCn3VhKijluDi%2BXwfcznhVku0ZkkajrUqMn1b5PzehXzjfzdQp6KlJhz5xgVjbwwyxIRNR4%2Bupj9aii6Q1l4n8C8s1%2B5nyVDbs7iCnh4peNycBfjxNePXdfDLJgVkaSpi7ZemH7tWvwfiVJhH6XjyFBTlrmzpyV400mkgG9wI1qRM5qsHc%2BRqGhZsBiHZqVY2C07ti4lM7oz1Bm7GjGAkVcSWT6Q96djKL86ex%2B6huPqP0FsvS%2BEj7yPSKeYoWi4lEJpez3NCt62%2B5pOW0I2HectpLzC9wYKEUgxu3lZrgAxCnkETMOLuR4u0LkgGcGn4Zt%2BRxWKRA1YaO0aVbwFXKpPsORYfqUv%2B7hbOlGysgYKukfDZZ7O8jvaCAgfe2Q8U04kgSp56LyfSo%2F%2BhdTd3TgwkaP9vwY6pgHabAqkRqmK8nGXFXyGpILefM46GVTXDh9HoiZN18sg2BqHf910E0Ao7XUCYIa9hlTz6VFj6qtOnjt8KA55sY5Ib8aboaaPffZUpwykWrT9OQp5mY0n9hALp0IZ2I3EkzWaTOpy9f2WqYIE7kcnzcc4h0IhCEMji%2Bd68TcnAB33%2F0m%2FkyBxedBRjs0rH4dptxr%2F4o1ZL%2Bt%2FUdXB2eIlXRgBFLKlcy%2B8&X-Amz-Signature=2a0120b1b4ca8eea4f92d14eb284421d44e97a6be649c4295aa9c80a4561f794&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEHGWA7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BhyCIZWDL9%2BpIO1wN%2F8P1v2BzTFpQ3eIS1kXxNNgVxAiAdPuf%2FhweRnhVLAuNnDg2%2Bu9OuRP0F04F%2BfBk9qDzQkCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM7cVdDTW1GNMp80u2KtwDsnPPVgE27SjJnLp5krhYzdl%2BR56jzS%2FwXoc4w1EkvT%2Fe8zDZbctGcN22XgeHQJxkv3OFqfE2YjyyrsyfhOylmf%2BX4KpfdtfnKdoEaeDmUVXJPbPXZ2MqDTa4%2FKeNZ1j%2BS%2Bh%2ByUCNn4%2Fx4XduEz4znJ%2BPPlIrY30ufHSRnNFKYbkVYn%2FKF7ckxPq60Ia1udSTyCuS6KLGaihdncG9ADz5qhldvM8UPwkLcMzmfCn3VhKijluDi%2BXwfcznhVku0ZkkajrUqMn1b5PzehXzjfzdQp6KlJhz5xgVjbwwyxIRNR4%2Bupj9aii6Q1l4n8C8s1%2B5nyVDbs7iCnh4peNycBfjxNePXdfDLJgVkaSpi7ZemH7tWvwfiVJhH6XjyFBTlrmzpyV400mkgG9wI1qRM5qsHc%2BRqGhZsBiHZqVY2C07ti4lM7oz1Bm7GjGAkVcSWT6Q96djKL86ex%2B6huPqP0FsvS%2BEj7yPSKeYoWi4lEJpez3NCt62%2B5pOW0I2HectpLzC9wYKEUgxu3lZrgAxCnkETMOLuR4u0LkgGcGn4Zt%2BRxWKRA1YaO0aVbwFXKpPsORYfqUv%2B7hbOlGysgYKukfDZZ7O8jvaCAgfe2Q8U04kgSp56LyfSo%2F%2BhdTd3TgwkaP9vwY6pgHabAqkRqmK8nGXFXyGpILefM46GVTXDh9HoiZN18sg2BqHf910E0Ao7XUCYIa9hlTz6VFj6qtOnjt8KA55sY5Ib8aboaaPffZUpwykWrT9OQp5mY0n9hALp0IZ2I3EkzWaTOpy9f2WqYIE7kcnzcc4h0IhCEMji%2Bd68TcnAB33%2F0m%2FkyBxedBRjs0rH4dptxr%2F4o1ZL%2Bt%2FUdXB2eIlXRgBFLKlcy%2B8&X-Amz-Signature=71f71dc6ca7e7e388883becdefc63134f0a47eee601436204bc170f5ddf3671e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
