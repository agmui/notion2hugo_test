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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7MVPTW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID0a7wspUGu9%2BDDATrUL49Pa3jYXY9pe9w91lZQLn3zwAiBRGYg7EmUBRNAYm0ys4UQA%2ByciwggRzSzJLRjM2uy4ESqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3VFBn6ISUeQjBhRcKtwD%2B6chAZbzF3GgI%2F60NlUafz4y0wlRNQAMmFAmIuqRa7tINjYAYwVt5a2kV%2FWicJfppriMKDTIOyO%2Bb7tmK0z3a9cXLzNqH5QvcWmyPnfAzKojTXN8FAJQ1f2JNTTDpRBBkBiUra%2B%2BGC5Ff1%2FJCzVPPj8FYNSMjHVhCuz83ZEDk%2BXQPUagABJgDVA8tnPwGHJWCZv4Trc4XJInSP3mIuECxA%2FyyWGu%2FFH7nnUy9FLCsokipg2WZRIuCeoGz32qQKqSKh05CXSGFuGXb50suBjwx8kB8GTp9oOwTNj%2BLkrx3Ol6xfq%2F82GtsjYHJpnvtPGLa3DyOV9hlvEiv%2FYYX8LzlOPoA%2FGvWgoCqvhRnPGxBkCvfYGnrpzvKsGZE1w7sVxu8cp3D1nXdSyFFR5AICbkFInp7sgN39m95F1UUtd3Vm5Smm%2FxazV7HLhS7ziY4bKBQ0cTrXw7wbi2h9bAIASPEC8Y%2FemeoLEYLpTdflV2gyaTyMhR%2FYRVNrIXWJ%2F8bzHv0QxPzLfRbmuEpb5kjaNNXhgvXJwIC%2FSBlVcxOsqmACG5dvV9pGjvBttvd9rNby8mjehQzR2xP7LRNK7RWhoNCDqsoBFOHO1IbKO1eePfb2KuYTA0yZAACUfTEOwwoo7TwAY6pgExyQH2ISqTqea3yx9FRHou%2B0%2BqtEUUVYh5VhLCSMcEk2S5QtpRom2774%2BV6cxvtRLoQPZkV4bck4oMlY8d5RGnZRqB07Nr9XeAxbOSV99fZ3Q05IArFIrYG76NSeHGQVaFIw9o47KtCYlUEjCst7QG7GY34yNjVVABgtO3epETIyzi2cfrWoxoMWGcElUh%2BOq3NyU3JlOtTbzyenPCjvKzHwU%2BmcVT&X-Amz-Signature=96df54fb017e7ee13c3a129b3e73842b006c2a19ea73bac83384c96a92c5e378&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7MVPTW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID0a7wspUGu9%2BDDATrUL49Pa3jYXY9pe9w91lZQLn3zwAiBRGYg7EmUBRNAYm0ys4UQA%2ByciwggRzSzJLRjM2uy4ESqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3VFBn6ISUeQjBhRcKtwD%2B6chAZbzF3GgI%2F60NlUafz4y0wlRNQAMmFAmIuqRa7tINjYAYwVt5a2kV%2FWicJfppriMKDTIOyO%2Bb7tmK0z3a9cXLzNqH5QvcWmyPnfAzKojTXN8FAJQ1f2JNTTDpRBBkBiUra%2B%2BGC5Ff1%2FJCzVPPj8FYNSMjHVhCuz83ZEDk%2BXQPUagABJgDVA8tnPwGHJWCZv4Trc4XJInSP3mIuECxA%2FyyWGu%2FFH7nnUy9FLCsokipg2WZRIuCeoGz32qQKqSKh05CXSGFuGXb50suBjwx8kB8GTp9oOwTNj%2BLkrx3Ol6xfq%2F82GtsjYHJpnvtPGLa3DyOV9hlvEiv%2FYYX8LzlOPoA%2FGvWgoCqvhRnPGxBkCvfYGnrpzvKsGZE1w7sVxu8cp3D1nXdSyFFR5AICbkFInp7sgN39m95F1UUtd3Vm5Smm%2FxazV7HLhS7ziY4bKBQ0cTrXw7wbi2h9bAIASPEC8Y%2FemeoLEYLpTdflV2gyaTyMhR%2FYRVNrIXWJ%2F8bzHv0QxPzLfRbmuEpb5kjaNNXhgvXJwIC%2FSBlVcxOsqmACG5dvV9pGjvBttvd9rNby8mjehQzR2xP7LRNK7RWhoNCDqsoBFOHO1IbKO1eePfb2KuYTA0yZAACUfTEOwwoo7TwAY6pgExyQH2ISqTqea3yx9FRHou%2B0%2BqtEUUVYh5VhLCSMcEk2S5QtpRom2774%2BV6cxvtRLoQPZkV4bck4oMlY8d5RGnZRqB07Nr9XeAxbOSV99fZ3Q05IArFIrYG76NSeHGQVaFIw9o47KtCYlUEjCst7QG7GY34yNjVVABgtO3epETIyzi2cfrWoxoMWGcElUh%2BOq3NyU3JlOtTbzyenPCjvKzHwU%2BmcVT&X-Amz-Signature=8ba1d8b8bfc1be00049edc2eb77093bdddfa91faac34089d5683b0cdd5ecb233&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
