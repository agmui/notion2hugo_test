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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJNY4GC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FLQR58Y0yBWyYX5lPOqe9lCBseUY2LfsMEXwCbqUYnAiBehj76%2FXv3CgtQqplQR3PSCpF%2F3Rbu03E1i8Nt%2FDJxciqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6G45i43xXtlPJ5WqKtwDccQVSL5omjiI0FLk3wnrmr7u%2BzLGTVmWaQ8gpCrAQ5gfuRieoml1DwF5GOAHr%2BAik8qPeoJQiJR0AIjo44d2t%2Fa7rhs7fsfwhaojoSOaMD6WiD58J%2B9Iu2rVdqdOQ61C9LQ4AsVTnSRCH%2F9M%2BYDjJWMCDBWiiGZagdvkZNVWgsnuTgUUxQ05b%2FqzENE0GaunGFlGzkgOi0p%2BLnjh9VpShJ3zAbl%2FQULe%2Fu%2FqSqa6AXtO9uyAb1ncnif5XsHMQMavBlOdnkWV0A2flRTsnQKICdUL%2Fb%2BDkzMHFDvUph972zhbziFreUWaW5Uiadfhf6FDPQtporfqLs6PvRgpqJX0Z1FEuzexq1NFpG%2Bk8KdDe%2FSGz6k85BlOLwIw%2FwkFglJctMjwzmvrIeAqmfzouLg0RV%2Bp9LE2mlwl1FodsQzLojqmVMWKczMgSpO%2Fni0Zw88N2SQWxKic7RXAvroDWOP3Od%2FKveBWWYgg0WM6ipF8uhi%2Byax5Rxll5Q9UtwBFosuKjrzm9HytnBzssuQWFp%2Bt9%2Fu5NikJ0crhBHil2oLjyhjXgzG5OG75Bqr%2FPgTMan0FZsXTEzg7kL22OF7dDLDDPHnRSU8Bv1G70Ymwpz1KVEQ3JPdIwyY%2B9UHQa04wqN2jwgY6pgGS2%2FLq0KDU2B8cYV8HrQ6dh9maNZK0RM%2B%2Fae5X1jdman30w5DHI7Ph5ueobw4m9ga4PUwTsvTVUMYsZmCTwBZtcXxG2xXSkR8uFrySzraTZz8lWWl%2BjDQp4aM4Oqr4adu1UeesTmkc%2FAwIsIJ9ptger9uotSlhQZLVQ6ykSqKS42oGYH%2FuDWo8uJ5HwULy5yrWV3y9VgNrY5Rl35sThN4VAWXRAkvs&X-Amz-Signature=6bb4fab627c14f7158412d5112e1de874d2ed6dc9fe6d5bfd909b22f42a83534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJNY4GC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FLQR58Y0yBWyYX5lPOqe9lCBseUY2LfsMEXwCbqUYnAiBehj76%2FXv3CgtQqplQR3PSCpF%2F3Rbu03E1i8Nt%2FDJxciqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6G45i43xXtlPJ5WqKtwDccQVSL5omjiI0FLk3wnrmr7u%2BzLGTVmWaQ8gpCrAQ5gfuRieoml1DwF5GOAHr%2BAik8qPeoJQiJR0AIjo44d2t%2Fa7rhs7fsfwhaojoSOaMD6WiD58J%2B9Iu2rVdqdOQ61C9LQ4AsVTnSRCH%2F9M%2BYDjJWMCDBWiiGZagdvkZNVWgsnuTgUUxQ05b%2FqzENE0GaunGFlGzkgOi0p%2BLnjh9VpShJ3zAbl%2FQULe%2Fu%2FqSqa6AXtO9uyAb1ncnif5XsHMQMavBlOdnkWV0A2flRTsnQKICdUL%2Fb%2BDkzMHFDvUph972zhbziFreUWaW5Uiadfhf6FDPQtporfqLs6PvRgpqJX0Z1FEuzexq1NFpG%2Bk8KdDe%2FSGz6k85BlOLwIw%2FwkFglJctMjwzmvrIeAqmfzouLg0RV%2Bp9LE2mlwl1FodsQzLojqmVMWKczMgSpO%2Fni0Zw88N2SQWxKic7RXAvroDWOP3Od%2FKveBWWYgg0WM6ipF8uhi%2Byax5Rxll5Q9UtwBFosuKjrzm9HytnBzssuQWFp%2Bt9%2Fu5NikJ0crhBHil2oLjyhjXgzG5OG75Bqr%2FPgTMan0FZsXTEzg7kL22OF7dDLDDPHnRSU8Bv1G70Ymwpz1KVEQ3JPdIwyY%2B9UHQa04wqN2jwgY6pgGS2%2FLq0KDU2B8cYV8HrQ6dh9maNZK0RM%2B%2Fae5X1jdman30w5DHI7Ph5ueobw4m9ga4PUwTsvTVUMYsZmCTwBZtcXxG2xXSkR8uFrySzraTZz8lWWl%2BjDQp4aM4Oqr4adu1UeesTmkc%2FAwIsIJ9ptger9uotSlhQZLVQ6ykSqKS42oGYH%2FuDWo8uJ5HwULy5yrWV3y9VgNrY5Rl35sThN4VAWXRAkvs&X-Amz-Signature=6e9128183ba7988f09888202515ba0f2a1c02da6e4586fe1aa40801074f29664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
