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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPUWIXM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG8aXEf%2Bes0p7mMBlGjv2ot0X6Kc%2Fumh7xQdP2UlIJ9qAiA%2BtS7weyfrvRouzBoa2sVav5nHAswUqkwQscOivHrgGCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJVW%2FatBo4%2FNtCNPKtwDS0A0%2FEM%2Fk4gY0yZPxJANoAq2WP32Svq26cqEU%2F%2FLATFhR5%2FK%2B4y9pcyrNRUVkgvDpE5U7Inw64VO5TyeiiXSBAJl6gsem1V51w7y4eqT1djXsZKiNDHtzJZI8AVOmHyeKTFBEWF8F9meshwsgvPQV9%2BK7Z2IU7asJJiL66rj4l9yIw40%2Fe05KVejHWDv5yBTF6w1CG2ihAVXXORVgNK%2Fn%2B6b6eDCCXcPL2j%2BLuVW7df%2B5O874UotkwZ4Nhqoblla8mhAf%2FwQfcLWIaeamNVsDCjSN4AEbkIJRbjFQf0udx8x2vpR8rFKdE%2FAeizX%2Bf7nFmplzjKII7HxWx8PRVUPa5HdvEcySXQiQr6e1Jo7YV%2Fje%2FHKhJFAalHRr63RFkCiikkN%2BLU1ReL4Xq%2FWMSjbGNEc6pyo%2BfC6YVvew8wAI%2F42KFAbbpypo8vmSV5%2FYFXNygKHOYzPIoxl%2BrkIKmTCpPTZ86BIg16O1daP7RhFfWrRWzlcRyZnhDO5M%2BK%2B30ZON8iC4eLOZ9x1zhXznKWPUpAcMSNJCkRHtgvQzsHlDz%2FOKwcxx2EjGRacd%2BU%2B%2BIW%2FMLHUCN8XydR8kof7gICiP79y7hSeyX8VvOIiQsKr1vYCHVpKOMlXIbAIJ7QwztuVwAY6pgEmm89rkJut8C89ZdU2wt7POwjY3exFZHNf9kZ5oVcSoJ3ebdW5TTZh%2Bgq006kSqv7%2Bz%2F0EqySKXa6dvuWh83dzWqDBZmuuszCi23Z73cvucb5Nd8bZeXD2jA3f94eMjc5p9LLjX%2FkBxB6cUPZ1nN90bNZjd%2BFUQPDBqV1obUeGtwbQHWfgcWaTYwPV5ZSMcLNNaqGjLJHk6inU5pxTE0VduoEa%2FmCl&X-Amz-Signature=afbf8cbf8cfa789d6353c19fa99534b0f8182ddf3874540c4e7fbfe4d4f89d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPUWIXM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG8aXEf%2Bes0p7mMBlGjv2ot0X6Kc%2Fumh7xQdP2UlIJ9qAiA%2BtS7weyfrvRouzBoa2sVav5nHAswUqkwQscOivHrgGCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJVW%2FatBo4%2FNtCNPKtwDS0A0%2FEM%2Fk4gY0yZPxJANoAq2WP32Svq26cqEU%2F%2FLATFhR5%2FK%2B4y9pcyrNRUVkgvDpE5U7Inw64VO5TyeiiXSBAJl6gsem1V51w7y4eqT1djXsZKiNDHtzJZI8AVOmHyeKTFBEWF8F9meshwsgvPQV9%2BK7Z2IU7asJJiL66rj4l9yIw40%2Fe05KVejHWDv5yBTF6w1CG2ihAVXXORVgNK%2Fn%2B6b6eDCCXcPL2j%2BLuVW7df%2B5O874UotkwZ4Nhqoblla8mhAf%2FwQfcLWIaeamNVsDCjSN4AEbkIJRbjFQf0udx8x2vpR8rFKdE%2FAeizX%2Bf7nFmplzjKII7HxWx8PRVUPa5HdvEcySXQiQr6e1Jo7YV%2Fje%2FHKhJFAalHRr63RFkCiikkN%2BLU1ReL4Xq%2FWMSjbGNEc6pyo%2BfC6YVvew8wAI%2F42KFAbbpypo8vmSV5%2FYFXNygKHOYzPIoxl%2BrkIKmTCpPTZ86BIg16O1daP7RhFfWrRWzlcRyZnhDO5M%2BK%2B30ZON8iC4eLOZ9x1zhXznKWPUpAcMSNJCkRHtgvQzsHlDz%2FOKwcxx2EjGRacd%2BU%2B%2BIW%2FMLHUCN8XydR8kof7gICiP79y7hSeyX8VvOIiQsKr1vYCHVpKOMlXIbAIJ7QwztuVwAY6pgEmm89rkJut8C89ZdU2wt7POwjY3exFZHNf9kZ5oVcSoJ3ebdW5TTZh%2Bgq006kSqv7%2Bz%2F0EqySKXa6dvuWh83dzWqDBZmuuszCi23Z73cvucb5Nd8bZeXD2jA3f94eMjc5p9LLjX%2FkBxB6cUPZ1nN90bNZjd%2BFUQPDBqV1obUeGtwbQHWfgcWaTYwPV5ZSMcLNNaqGjLJHk6inU5pxTE0VduoEa%2FmCl&X-Amz-Signature=826dc29a48fcbf04e59cab4f120c5517c6f7ff424f7a75f98a47274702063528&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
