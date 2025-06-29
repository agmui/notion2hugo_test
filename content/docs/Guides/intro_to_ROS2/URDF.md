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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VRIEVW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7453hNUES479u5B6ypnCISQWrzbURVENk43FLB7UXuAiAjCPH9vOYzfiyVOZX9uu9EmeNIs1wulD9PX7GWU6pF7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFb76ek7tXlX6DseIKtwDFw89aIcXBHb6q0ycG5%2Bnc5xN8tCUiGiU%2F4wZjFE%2FG%2F4qzABF8kG%2BWLGcZypbJhSJSoXHX5rl5Lx4gGQ%2Fu%2FicVEKHcSsQRjfW8WoHt4Sm2nIuZAzde%2Bg8Ng93AuatIcwf24wQmBFExnEy%2BEIYyXdjqM9SQWvK7PAKkbo8a5z80vwM5cxLPY4CLfEmcMQhk7YC3klRHAgDk%2BuymloIbTaPOMZA0TvpIg0GbfxgJ3S2%2F2Jva%2FLsOC3MNKstmQ%2Fu3wCL0wEu04RQA%2FV3JVpCE0ucXXCdXdk9HI5G%2FF1HnzmC4UNiqQuxnhf0s5Yz%2BZTS0Wcys8JePBlG4E%2FdKUX6MqTksXMvAwgCfJVheCYR2PWh8x7outy4adAAmIloScpedZOAEVk65ivNg1Hs%2BKoUec%2Fi%2F9F8SXnDL%2BKl3sTlA184R%2BRlABL%2FIofHtnd6JbgOGwDYbYOG%2BsHlKUL8%2Bmm7C0tGZWhJSmvJUjrUp5uEPzQFuPTgv87luZaAXM3ijnydQeOtxGfX1PelJ9qVUBcq1LIflBkacFASOa%2BKgzU8tn%2FKWrWahrT7tItkWJdelN0yUdQm%2Fup68M2VXr1z%2B8rBOQr%2B2Ec0yBeF7H58mKTn5meQ9hRikGVKDpxNLBvWs8wwmf6CwwY6pgE92Z%2FDnHoL3es%2F4ywyNkyn0Q6f1cuV1hTfyABhJnLWyFeKpNadnsEz4gTTf6GSuehwcfJYMEmvM0e%2BmXoyEPJo8C1vZ42r2btm3Rr49ncshDXgwSzQtRezIH%2BeBFkSeYDjp8I9KdGOWktNq6ozjOvkCLZeHOxncMR5riqPtszmG2Tpp9dUx8%2Bonn9mzT8ZkBuH52EROsaiqPrPbrQofxF4GbewH86N&X-Amz-Signature=34b86f2ac19edb536898502c388d105b9e306e36177b938dfacdce469b9900d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VRIEVW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7453hNUES479u5B6ypnCISQWrzbURVENk43FLB7UXuAiAjCPH9vOYzfiyVOZX9uu9EmeNIs1wulD9PX7GWU6pF7SqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFb76ek7tXlX6DseIKtwDFw89aIcXBHb6q0ycG5%2Bnc5xN8tCUiGiU%2F4wZjFE%2FG%2F4qzABF8kG%2BWLGcZypbJhSJSoXHX5rl5Lx4gGQ%2Fu%2FicVEKHcSsQRjfW8WoHt4Sm2nIuZAzde%2Bg8Ng93AuatIcwf24wQmBFExnEy%2BEIYyXdjqM9SQWvK7PAKkbo8a5z80vwM5cxLPY4CLfEmcMQhk7YC3klRHAgDk%2BuymloIbTaPOMZA0TvpIg0GbfxgJ3S2%2F2Jva%2FLsOC3MNKstmQ%2Fu3wCL0wEu04RQA%2FV3JVpCE0ucXXCdXdk9HI5G%2FF1HnzmC4UNiqQuxnhf0s5Yz%2BZTS0Wcys8JePBlG4E%2FdKUX6MqTksXMvAwgCfJVheCYR2PWh8x7outy4adAAmIloScpedZOAEVk65ivNg1Hs%2BKoUec%2Fi%2F9F8SXnDL%2BKl3sTlA184R%2BRlABL%2FIofHtnd6JbgOGwDYbYOG%2BsHlKUL8%2Bmm7C0tGZWhJSmvJUjrUp5uEPzQFuPTgv87luZaAXM3ijnydQeOtxGfX1PelJ9qVUBcq1LIflBkacFASOa%2BKgzU8tn%2FKWrWahrT7tItkWJdelN0yUdQm%2Fup68M2VXr1z%2B8rBOQr%2B2Ec0yBeF7H58mKTn5meQ9hRikGVKDpxNLBvWs8wwmf6CwwY6pgE92Z%2FDnHoL3es%2F4ywyNkyn0Q6f1cuV1hTfyABhJnLWyFeKpNadnsEz4gTTf6GSuehwcfJYMEmvM0e%2BmXoyEPJo8C1vZ42r2btm3Rr49ncshDXgwSzQtRezIH%2BeBFkSeYDjp8I9KdGOWktNq6ozjOvkCLZeHOxncMR5riqPtszmG2Tpp9dUx8%2Bonn9mzT8ZkBuH52EROsaiqPrPbrQofxF4GbewH86N&X-Amz-Signature=5376d34fba14f9b38d49b6f9c18c8936386267867123d9f552b37ab5e0ef1594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
