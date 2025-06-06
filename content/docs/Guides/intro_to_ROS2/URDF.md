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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VX76QLL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj8TiHnEh%2B1pkwkpghbCZgeVa%2Fj5V6Dllac0lPBBNZ%2BAiEA%2Frn0chWAJAEzTzJuCiw1%2FGuUUFgUdz8lwZONvEafqlEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBOa%2BW%2F%2F4FK8Lu1KTyrcA%2FC97C1mW3J8p0naL0588QPxmDpo9hFFprXnif9cTxtip9Y3rkAqfe9TPv95ER62R4pjYDGfa%2FKcKi%2BEs6Fvnuqgd4Cak8yf6wjjS%2F0kKi6jd9S08gja8eUfP4ZW6r66reH%2FShAMt2yRjeWni7kc820%2F%2Bxg62a9amb18k6C7tKnJGOoCohc9gSDxooUPXwOUzqvSHhhodFjelSEQ4%2BCIdhzsVvi2e7%2BF7TrgK96eprh6f4dT1AyCuWc8mfn%2FxKGUPhU4XmpYtzJAcD%2Ba19Kky50slvXC8X10C2pBnBzcmWKW0Lx5QCCv%2BaFJpf%2BLGEJa1tRfYuJ%2By7dWbCKezDeHNz8%2FqAmapcyUeoTzTxZY%2B8u9t3%2F3meVVkHI46JK84TVmr25VCGbj%2BZ1qEMUglWHohArbTMnEBEEiTg%2FyWvUhlc06iWO8ri6mtwln9DBP7axp%2FuGVdvNcaHAAwC4GEdFIR1xAH%2FBBbq8w%2BaNQAoo0lPbDoJvtvKrjMxLDZzZkeHKQfZExyffrXzR7NgWuITG8IXogQoJlKxtcMhhCg74fa8EcglRWcbXe8VO%2BsAY1BnB%2BQDr%2FlqFc9s3sZaOpLU3%2BPZszV3ykIMYJqsb%2Bt9MxbaZi34AOraLV4YXSlzGHMMyGi8IGOqUBzqlOMumO0egIRLjSpu5d9Yr7uorkk%2B2Ohf7OtlmZwEfrDLZLdf1Ip0FOWJHVKiD3xgMAM%2Bl2O2E4A8j3cAu8NOgbGXQEfY6lBcJuZk1aLoHt7gwGFtJ0TnPDXU0f5C%2FK5ZTW1wIHLt655JKixgZO%2B2lW8SWeBcvlmz%2BmMUS%2Bgre%2FyeoQcWAXdraGW%2BfYPgZHqc%2BJ8JvRUWXHc6uTH9B0WkZsYbMP&X-Amz-Signature=3d0369f5f7dd10e0dbd736bef6744db85b9cacc5bb90fde73c1c50dc91c5e8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VX76QLL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj8TiHnEh%2B1pkwkpghbCZgeVa%2Fj5V6Dllac0lPBBNZ%2BAiEA%2Frn0chWAJAEzTzJuCiw1%2FGuUUFgUdz8lwZONvEafqlEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBOa%2BW%2F%2F4FK8Lu1KTyrcA%2FC97C1mW3J8p0naL0588QPxmDpo9hFFprXnif9cTxtip9Y3rkAqfe9TPv95ER62R4pjYDGfa%2FKcKi%2BEs6Fvnuqgd4Cak8yf6wjjS%2F0kKi6jd9S08gja8eUfP4ZW6r66reH%2FShAMt2yRjeWni7kc820%2F%2Bxg62a9amb18k6C7tKnJGOoCohc9gSDxooUPXwOUzqvSHhhodFjelSEQ4%2BCIdhzsVvi2e7%2BF7TrgK96eprh6f4dT1AyCuWc8mfn%2FxKGUPhU4XmpYtzJAcD%2Ba19Kky50slvXC8X10C2pBnBzcmWKW0Lx5QCCv%2BaFJpf%2BLGEJa1tRfYuJ%2By7dWbCKezDeHNz8%2FqAmapcyUeoTzTxZY%2B8u9t3%2F3meVVkHI46JK84TVmr25VCGbj%2BZ1qEMUglWHohArbTMnEBEEiTg%2FyWvUhlc06iWO8ri6mtwln9DBP7axp%2FuGVdvNcaHAAwC4GEdFIR1xAH%2FBBbq8w%2BaNQAoo0lPbDoJvtvKrjMxLDZzZkeHKQfZExyffrXzR7NgWuITG8IXogQoJlKxtcMhhCg74fa8EcglRWcbXe8VO%2BsAY1BnB%2BQDr%2FlqFc9s3sZaOpLU3%2BPZszV3ykIMYJqsb%2Bt9MxbaZi34AOraLV4YXSlzGHMMyGi8IGOqUBzqlOMumO0egIRLjSpu5d9Yr7uorkk%2B2Ohf7OtlmZwEfrDLZLdf1Ip0FOWJHVKiD3xgMAM%2Bl2O2E4A8j3cAu8NOgbGXQEfY6lBcJuZk1aLoHt7gwGFtJ0TnPDXU0f5C%2FK5ZTW1wIHLt655JKixgZO%2B2lW8SWeBcvlmz%2BmMUS%2Bgre%2FyeoQcWAXdraGW%2BfYPgZHqc%2BJ8JvRUWXHc6uTH9B0WkZsYbMP&X-Amz-Signature=3885e9054f8b6a2ccfb11b08992849a1c7d5fd24088419d0696716c919157f28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
