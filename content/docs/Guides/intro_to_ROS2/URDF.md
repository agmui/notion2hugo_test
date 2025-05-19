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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFY3BIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZzPlWJZWJtJdytlojkwfAk%2BiECkdrZ9j2ztZsdNokRAiBjdNEJJO5fHWCJWNCk%2Ff2fxrmqhLLnPBHkxQdk8%2Ba%2FDiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML5bCIcnhSx97xHNRKtwDkvAP8IDjf0Pj%2FzJtKwuCCAcnk0FL7Pm4qoXajVuFsGPAyG9wKzfx3wjKaQO9tqcLMMM8NCNt%2BeIlvm643ffKU%2FpEnmgfAFjoFFw%2FfDl8Xz5m8MSxpLU5gbU%2B4ZN87XDNxIFQHAOwp4mXv0WZecn6azcG0%2Fk2%2FNERuFHiizzieJYxIFsFofXafPAyji%2FGCX1cWjPbL2HMypIlFB%2Bk07RIpuQY5EdWAh0K8oORZrQlBuumpsuGCjvQ5oG206LZw1dWahpbVdSWKPFMdUufaufTgYs%2BCcgWdWd2EOekHMVzw6rEObnMvJOu76CxcMetVhD4wfCfrbGtTgmhUJMzFK1aUp909GMjt1OKqZNjJu%2BraVBalsUM5mz4%2BLYRRBYG0muaMCj3xRWZurnd4CwC%2F4yzjzXVli6xfvtQxwkTeYEx%2FG%2FZRu2miDgLOXWymmaL3zW1M6Xb%2BQF6k4oVoCNLVw5KdfpGgkfBbSgdULyOXq%2FnxhERaIcmvawYP7kCfVX3%2FTjLwTgagIa0m%2BHIJrwb5%2BNn9yM4w7exp89HzrnJMt%2B1MVL34knlsLz%2F73%2BkMqE6KD79t2B5QPYoPzaL9kAql3n3pAj9ymxvvhgT%2Bbh6p7Z6DcbXPg16Ok9QXkGYL4Uww62uwQY6pgFoKDIhZ5WoCM%2Ff36Ym0zyI0K0Otj8F%2BPgKydE96cCDZd8x%2BDJ6Hx7IHpuIIilDQjSIdOcoqy9ieQ9FDn8sn0omEUm6kyKqvhi6RE8EWInK%2F76fTtfN1a47H%2BREhyPrAMQbjo3ln%2F%2ByMwYXd7N3nC2xk8UZhREvThqa9dkzmvEYxT8Fjx1hyGvJGETYL%2Bv4uy1fT%2BqMFywIHXZPIMQCcP8y91tQ4xQj&X-Amz-Signature=1a93d8375e918958f2248cbf39dcd6d8d5dcffc884715440d5bd00ef7bbb7c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFY3BIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZzPlWJZWJtJdytlojkwfAk%2BiECkdrZ9j2ztZsdNokRAiBjdNEJJO5fHWCJWNCk%2Ff2fxrmqhLLnPBHkxQdk8%2Ba%2FDiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML5bCIcnhSx97xHNRKtwDkvAP8IDjf0Pj%2FzJtKwuCCAcnk0FL7Pm4qoXajVuFsGPAyG9wKzfx3wjKaQO9tqcLMMM8NCNt%2BeIlvm643ffKU%2FpEnmgfAFjoFFw%2FfDl8Xz5m8MSxpLU5gbU%2B4ZN87XDNxIFQHAOwp4mXv0WZecn6azcG0%2Fk2%2FNERuFHiizzieJYxIFsFofXafPAyji%2FGCX1cWjPbL2HMypIlFB%2Bk07RIpuQY5EdWAh0K8oORZrQlBuumpsuGCjvQ5oG206LZw1dWahpbVdSWKPFMdUufaufTgYs%2BCcgWdWd2EOekHMVzw6rEObnMvJOu76CxcMetVhD4wfCfrbGtTgmhUJMzFK1aUp909GMjt1OKqZNjJu%2BraVBalsUM5mz4%2BLYRRBYG0muaMCj3xRWZurnd4CwC%2F4yzjzXVli6xfvtQxwkTeYEx%2FG%2FZRu2miDgLOXWymmaL3zW1M6Xb%2BQF6k4oVoCNLVw5KdfpGgkfBbSgdULyOXq%2FnxhERaIcmvawYP7kCfVX3%2FTjLwTgagIa0m%2BHIJrwb5%2BNn9yM4w7exp89HzrnJMt%2B1MVL34knlsLz%2F73%2BkMqE6KD79t2B5QPYoPzaL9kAql3n3pAj9ymxvvhgT%2Bbh6p7Z6DcbXPg16Ok9QXkGYL4Uww62uwQY6pgFoKDIhZ5WoCM%2Ff36Ym0zyI0K0Otj8F%2BPgKydE96cCDZd8x%2BDJ6Hx7IHpuIIilDQjSIdOcoqy9ieQ9FDn8sn0omEUm6kyKqvhi6RE8EWInK%2F76fTtfN1a47H%2BREhyPrAMQbjo3ln%2F%2ByMwYXd7N3nC2xk8UZhREvThqa9dkzmvEYxT8Fjx1hyGvJGETYL%2Bv4uy1fT%2BqMFywIHXZPIMQCcP8y91tQ4xQj&X-Amz-Signature=244e0ed08cf6efd31ac9e728e35bb96e23977f1e25d9b4998fd8a0dffe84daf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
