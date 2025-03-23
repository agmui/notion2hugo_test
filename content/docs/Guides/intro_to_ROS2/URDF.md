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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRP4AXUV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEAj06qy%2BQxbRTCqyTVTcg5%2FgMveJqYthGWIEvAs4Dj%2FAiBSFAO9VzgBZTlBfv99WQ7cM1RYtD%2F6fid2GEXj7eMV6SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwqeFdocfZAKkiigKtwDv9BxKKx2do3cWcKyA0r40tlrobpuM%2BZdf5cGlS9PJfkVtPIYvrDnyvPDmGs%2FVrgwV8XhNFAgYBgd1KQVld57%2B%2FCEPwZTEA509sS7qJV3x4bcw1%2BVXThZNtU9om6IT7g0n12pRRPkDsxDmaH6d%2B9H8gEvx3e7%2BEt6S54f9GcQHyrOSzrJlxhWL%2F51UZxPDjceBgZsY5E0RpNHVIeIXADHD0bl%2BzpSLddtCaCHJaSRVB8%2FQFKmjr0zBIlKk7qri9TbP1DI49UbKSKQ2AIS0wBjsim%2FRhIsXNv%2BGZVWdbI3XgKKvnoBjvvpmt1SYM7jawjJi7NgT5eHloSquEGN6yZ8uJCxRXigxFrPqbGYKNrSB2%2FvStd7ciSKeOWXy71igg22OcuWmupX1CaKcdlhJOsJLhKjWnZree5u3oAeJI5M%2BC34ue9nyFtY278QQ5qeQtUul%2FzrY0ZfNV0JCE7bNHLe7%2Btbs12toKurETKcLC3lk7tWhhCTgAU8demqJfioYP7GnkCoDwvn%2B1Df1%2BPNDPG4afZavI3Tbo22TkL4cqsiesXkaa4tGQBUN9B%2FhKXnE9w4DknTOt13UNUTCPCgMgSwd31fEoLTif2aZEqwNw43KgaKbsX%2BS6ioXmj%2Ftxcw%2FNb%2BvgY6pgEcwYZxgiX69ZeSnpWa8B%2FXQsousOE3lLB9CkdFM2ow7nVC6EWgUefqoStBws5OEv%2FDsdICtEol0xXDJfO9dYBEaaS0Xa0ERNpGXrQ9YMfNqa3vmYP6ezn7vmcf0tigN0Mzv71Vt4KfF6jhj1EbkjHcvZ%2BXgYcH8lyxk2NZzv9ABFLJ081iojtUHj8f%2BjXvktprfx7xtRBVoM7s%2FfiJkeaFO4pzNV7x&X-Amz-Signature=99992cc0782a20850d545d0cfcdd2fe5c7b97e83b5caea0a511b2529a5a44d59&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRP4AXUV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEAj06qy%2BQxbRTCqyTVTcg5%2FgMveJqYthGWIEvAs4Dj%2FAiBSFAO9VzgBZTlBfv99WQ7cM1RYtD%2F6fid2GEXj7eMV6SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwqeFdocfZAKkiigKtwDv9BxKKx2do3cWcKyA0r40tlrobpuM%2BZdf5cGlS9PJfkVtPIYvrDnyvPDmGs%2FVrgwV8XhNFAgYBgd1KQVld57%2B%2FCEPwZTEA509sS7qJV3x4bcw1%2BVXThZNtU9om6IT7g0n12pRRPkDsxDmaH6d%2B9H8gEvx3e7%2BEt6S54f9GcQHyrOSzrJlxhWL%2F51UZxPDjceBgZsY5E0RpNHVIeIXADHD0bl%2BzpSLddtCaCHJaSRVB8%2FQFKmjr0zBIlKk7qri9TbP1DI49UbKSKQ2AIS0wBjsim%2FRhIsXNv%2BGZVWdbI3XgKKvnoBjvvpmt1SYM7jawjJi7NgT5eHloSquEGN6yZ8uJCxRXigxFrPqbGYKNrSB2%2FvStd7ciSKeOWXy71igg22OcuWmupX1CaKcdlhJOsJLhKjWnZree5u3oAeJI5M%2BC34ue9nyFtY278QQ5qeQtUul%2FzrY0ZfNV0JCE7bNHLe7%2Btbs12toKurETKcLC3lk7tWhhCTgAU8demqJfioYP7GnkCoDwvn%2B1Df1%2BPNDPG4afZavI3Tbo22TkL4cqsiesXkaa4tGQBUN9B%2FhKXnE9w4DknTOt13UNUTCPCgMgSwd31fEoLTif2aZEqwNw43KgaKbsX%2BS6ioXmj%2Ftxcw%2FNb%2BvgY6pgEcwYZxgiX69ZeSnpWa8B%2FXQsousOE3lLB9CkdFM2ow7nVC6EWgUefqoStBws5OEv%2FDsdICtEol0xXDJfO9dYBEaaS0Xa0ERNpGXrQ9YMfNqa3vmYP6ezn7vmcf0tigN0Mzv71Vt4KfF6jhj1EbkjHcvZ%2BXgYcH8lyxk2NZzv9ABFLJ081iojtUHj8f%2BjXvktprfx7xtRBVoM7s%2FfiJkeaFO4pzNV7x&X-Amz-Signature=b1780b20c9e90ae8b4d9d27c60ea33145f178aa000a58477c74896cc3b0383f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
