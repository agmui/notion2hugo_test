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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRZBOH2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDXk8iJsBymhSSb1rVDyECmgWmREMEN8RLMbwG0c7kRUQIhALpNKS7yk5bra563e4TZhfFXHYkUsNiieyWATKQ0nrEuKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzgL92KzzvBQ5VPigq3AO0rkll2vbiuhW%2BwX1Vto3TuovxtqjuVKLf0EBa9mstJ%2BzuPGxa8lPKZMMIPK7nuiOemW4JC2qOMBAfTDa6MK3xVH4psU27Mk8ITChkUJdsEwEmCYAiVnrpKsH7eOBAMqWbvF2TUarDi2c1vMgbFcKFDLcfwD6e10ZSQAKmqVFpu34OMAgI9rFQU2rp7nTkx6v7QxFFNixcmzTpIbvuk6M%2Fk8lOHYf4dwdbusDqUBl9nHT%2Brx%2BRAPk6A5SIDQJnn%2F%2FT75Y0iNCDb5BdazvEKtyimkzICJz15MNrb%2BIon7y2c7Lqj1VKeQ3ChUqeHmPAJJcxSGZfU9XLnp0l8QdFhuw0H%2FriEWXBK8ZwEL370WSQI1v8k%2FDugqQ7a6ak%2Fx%2F%2B9Ij%2B8E9WjA9hKC8bZ52YSf58CLcBzlKHX8K37fXd68m7h2pW4ZpM%2F36qOxRVL5dXjE3xrbcG6%2F1KBlNnsjSsQMzowtbkcp%2FZF1Xt1HMNde8q5Kz1nJxpEXU2%2FvetHt5N3lOcpbayPd%2FlukLnDTGoR9anjm6Va2wUmatZ71m%2BuJEon5R%2Bso6LL2TdTwc55c0CMMxWNUSXTGJaQnPVvD4AAdxV48rR1MdHNgrpKRRm2tHoJxjk1r5ItdPPq0a2uTCUx%2B6%2BBjqkARt6M0fj1vvQuurhbK%2BvfEyV5RiRstbVq4TcTfQARh%2FxJYYzp%2FzLn8vqNcvOMbCemnOL2vA3RNAMzm0nU8ouGsDKdSuKkSvKAbnYXrfT7Sbdj4PFXz5FIlwAt4FSbniddblqjDYo9IrFPIJspsDH7Nrq%2FjYEYb03UIUx7Q3HuWNCF46IHkZKHngut2V7mC9gzPnyK%2BFR4Sd8wpMiey0VlB%2F%2F4hoL&X-Amz-Signature=9f3e47b08c308a9ed06da1dd052424aa9f5edafada937ea1ee0608d8b6f7eafc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRZBOH2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDXk8iJsBymhSSb1rVDyECmgWmREMEN8RLMbwG0c7kRUQIhALpNKS7yk5bra563e4TZhfFXHYkUsNiieyWATKQ0nrEuKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzgL92KzzvBQ5VPigq3AO0rkll2vbiuhW%2BwX1Vto3TuovxtqjuVKLf0EBa9mstJ%2BzuPGxa8lPKZMMIPK7nuiOemW4JC2qOMBAfTDa6MK3xVH4psU27Mk8ITChkUJdsEwEmCYAiVnrpKsH7eOBAMqWbvF2TUarDi2c1vMgbFcKFDLcfwD6e10ZSQAKmqVFpu34OMAgI9rFQU2rp7nTkx6v7QxFFNixcmzTpIbvuk6M%2Fk8lOHYf4dwdbusDqUBl9nHT%2Brx%2BRAPk6A5SIDQJnn%2F%2FT75Y0iNCDb5BdazvEKtyimkzICJz15MNrb%2BIon7y2c7Lqj1VKeQ3ChUqeHmPAJJcxSGZfU9XLnp0l8QdFhuw0H%2FriEWXBK8ZwEL370WSQI1v8k%2FDugqQ7a6ak%2Fx%2F%2B9Ij%2B8E9WjA9hKC8bZ52YSf58CLcBzlKHX8K37fXd68m7h2pW4ZpM%2F36qOxRVL5dXjE3xrbcG6%2F1KBlNnsjSsQMzowtbkcp%2FZF1Xt1HMNde8q5Kz1nJxpEXU2%2FvetHt5N3lOcpbayPd%2FlukLnDTGoR9anjm6Va2wUmatZ71m%2BuJEon5R%2Bso6LL2TdTwc55c0CMMxWNUSXTGJaQnPVvD4AAdxV48rR1MdHNgrpKRRm2tHoJxjk1r5ItdPPq0a2uTCUx%2B6%2BBjqkARt6M0fj1vvQuurhbK%2BvfEyV5RiRstbVq4TcTfQARh%2FxJYYzp%2FzLn8vqNcvOMbCemnOL2vA3RNAMzm0nU8ouGsDKdSuKkSvKAbnYXrfT7Sbdj4PFXz5FIlwAt4FSbniddblqjDYo9IrFPIJspsDH7Nrq%2FjYEYb03UIUx7Q3HuWNCF46IHkZKHngut2V7mC9gzPnyK%2BFR4Sd8wpMiey0VlB%2F%2F4hoL&X-Amz-Signature=9e4566f3b6ed6d6116e4a256a3c94cc2edc714d743609f1a5d82c6828e6559cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
