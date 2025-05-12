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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNA3PL5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHvH%2BYcX7dkRWPtwCThSxmd%2FtmWVVKfUaLZ6VsvzBL5QAiB3uWbcz%2B%2FUalPd5CLfSdPNJOnx%2FjnDTPcJexui3B13wSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtHo%2BV6MHQPV9gVfiKtwDcrPSAT7nn7QZfzy8SICzdC%2FLfEF%2F8VGZZbAF4EbKrny%2B3n0em0aaIo3hvj4aDO4g9waNTXQrO5E4RRRznA0vA9HYJp3Uydrws5RB%2BqlPp1YV6GC%2B9F3OrTPvdPIF5rWi2mf1vtNZRoDKihEwlMvwrKPt3RMuB2TNXZ2avgsShjFS1sldoW0cN8AS3Kmx5TC5hpLLNwsMpit3NuFjnaafZRC19K%2FUHeIYSx1WEQS6Z0WUZKWiByMUdm7zid1rOd4UZlYH%2FU66O19JKDsPYEa7GBWV8dSrtAptSNbsF4i2TIDxbUM3kQw9LN93pIswrbd9SG7iGX9gWvvnZzIvacuYEGHeV8brn2N2ODJD2S0RpSWAlq46zEp489tnAnJJjIGoRQqm4XVgwiBaG2wB%2B2j98bp1t%2BqHPvg4kxVCCRkruqJdBSWi%2BTDGOTiiJsMzqZ3uk%2B2VTbrw33QK%2F6uGQVtQYl1l7BAqih0A5V1f4lgD6Ff8sL7RK%2FJUD4jvqsXwlMTnEf6Gn7af%2Fgllr%2BQPeFpwcxXy%2FbdgSSCxY4pZ7LAASt4gz4QpoYGQFbnIrjKLsHG0Ri6WpwWScQw%2FQaumnAWmrIByeimCMO4vG73QV%2BdnpPn0w4t7ZMiZ7fOmpowwv8OJwQY6pgHizsZ7asHcy%2FXZ1JV6sGjNiS74Y2XKY4RVFzOynUBUadbW%2BY2I%2Fkc2D4ApD5chx0q72Efa%2B1FGyw95sErZF6uxsZo8f1CZayGmO9uRjTxGdeqh6mtEQkCLlbOcHW9Db7%2BvXvDpMZpoaDlS4jiUVhZ1WrTyLVXGzB6ptBxPs1xwd9sEz0PHxJ4C%2BBxjgOLqZHNdpEZmET4EhsJ3cJ4VC9OL8XYBRTgk&X-Amz-Signature=81fcd46523df17e79acac341cd54949dce0d28cd63268594912568de9c712035&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNA3PL5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHvH%2BYcX7dkRWPtwCThSxmd%2FtmWVVKfUaLZ6VsvzBL5QAiB3uWbcz%2B%2FUalPd5CLfSdPNJOnx%2FjnDTPcJexui3B13wSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtHo%2BV6MHQPV9gVfiKtwDcrPSAT7nn7QZfzy8SICzdC%2FLfEF%2F8VGZZbAF4EbKrny%2B3n0em0aaIo3hvj4aDO4g9waNTXQrO5E4RRRznA0vA9HYJp3Uydrws5RB%2BqlPp1YV6GC%2B9F3OrTPvdPIF5rWi2mf1vtNZRoDKihEwlMvwrKPt3RMuB2TNXZ2avgsShjFS1sldoW0cN8AS3Kmx5TC5hpLLNwsMpit3NuFjnaafZRC19K%2FUHeIYSx1WEQS6Z0WUZKWiByMUdm7zid1rOd4UZlYH%2FU66O19JKDsPYEa7GBWV8dSrtAptSNbsF4i2TIDxbUM3kQw9LN93pIswrbd9SG7iGX9gWvvnZzIvacuYEGHeV8brn2N2ODJD2S0RpSWAlq46zEp489tnAnJJjIGoRQqm4XVgwiBaG2wB%2B2j98bp1t%2BqHPvg4kxVCCRkruqJdBSWi%2BTDGOTiiJsMzqZ3uk%2B2VTbrw33QK%2F6uGQVtQYl1l7BAqih0A5V1f4lgD6Ff8sL7RK%2FJUD4jvqsXwlMTnEf6Gn7af%2Fgllr%2BQPeFpwcxXy%2FbdgSSCxY4pZ7LAASt4gz4QpoYGQFbnIrjKLsHG0Ri6WpwWScQw%2FQaumnAWmrIByeimCMO4vG73QV%2BdnpPn0w4t7ZMiZ7fOmpowwv8OJwQY6pgHizsZ7asHcy%2FXZ1JV6sGjNiS74Y2XKY4RVFzOynUBUadbW%2BY2I%2Fkc2D4ApD5chx0q72Efa%2B1FGyw95sErZF6uxsZo8f1CZayGmO9uRjTxGdeqh6mtEQkCLlbOcHW9Db7%2BvXvDpMZpoaDlS4jiUVhZ1WrTyLVXGzB6ptBxPs1xwd9sEz0PHxJ4C%2BBxjgOLqZHNdpEZmET4EhsJ3cJ4VC9OL8XYBRTgk&X-Amz-Signature=c00760f2840752a2dafa263014cb516f82a906e403770392bcf4bb9e080444b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
