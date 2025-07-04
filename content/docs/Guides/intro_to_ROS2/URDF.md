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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RMED7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFcN7JZ4OOFHRL2mN9fQj0nSfoZ7EW02ZcJ3kc9nqRfQAiEAy3X7R%2B%2BYl8vtY6OwOC0j%2B26WKzpmpGCwFh%2FXejCIa5Uq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDEAPzCoWqj157zLQMyrcA0C87%2BEaB3Zgv9Af7wWhL%2B5jcXwlNGl4NltzxgtkviU4oJPGCi5Ixbudy9I1qKsju7lCEhfCYPvC6fcoOovf%2BWwGqGqwuvsfTjpQq4BDoRCCGdiedPRqMDK5KQjxu26EoEm6aHQboNOGK5wmoRjIbs7qLzXRmlbebc%2F2HseYMmPC8ltoh8yLF%2B1idU1ptdAs9bffAZyUwsFcLuDpTZkjXUrOCPtaYU8qORI%2BwUQg8erWA97K1WqzEHxiRW9PUN6VBkN9T6TMd8jcCQ36uXhgkf%2BskzxqXGHkUMP7S5jHRPv7TfInhzWG2xczLJjHJZr%2BgE2bAZi6HVw3QrZmU3c%2F%2BuRmVqDNYNqj9D3I7uowjN541xpBJV52FvmPdkO8UFc9qxWg2kSSoY0qXaP3E1QnCaa00hUErXFvKJ9iadJcwaBSgOcBIPN%2BW2hhi7odCm8eCKJGhMjU2VYldph6ZqQaVP%2F5vc3hEXDFlqrBMWVpgHgnWYtoWI2OUKbsZFIjx3GXKJwMC%2F7I6LrEGAfiYR9FoD0mf0qX%2FIk3ZlwKxa%2B0sagRa0UnXi%2FMKSI83HSt6X3cRBVgZzm6EQ%2FsJPfz50gd1zP8mG5D6%2BSU684Bm937mheh%2BPtB5s%2BIySV1FjCHMPvnoMMGOqUBZrydGPEfSG5ll%2FxK04MKfO4QvcYfzQPStwgYKbr%2Bvfa%2BbrPcTkuGnR2kLUaK3u1I0yWs3wdYc3MAImAS1vlfKsZhDiwD4D91n0q78seQ7ITNSAQ%2Fa0gUuuIxhMqjF0lorVHCMkl5NC7h9raMn1WD85J4zwjK75yECkNqYkYlAcR%2F6zr2YPIZ8kqqk69RmDy6E0iJjsQEvTv2kSFFlDcLauOBcy0Y&X-Amz-Signature=91604d15eb7a0f3085f727edc1d45d5be5392ab17cd6f4d5c2b9565cd957e937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54RMED7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFcN7JZ4OOFHRL2mN9fQj0nSfoZ7EW02ZcJ3kc9nqRfQAiEAy3X7R%2B%2BYl8vtY6OwOC0j%2B26WKzpmpGCwFh%2FXejCIa5Uq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDEAPzCoWqj157zLQMyrcA0C87%2BEaB3Zgv9Af7wWhL%2B5jcXwlNGl4NltzxgtkviU4oJPGCi5Ixbudy9I1qKsju7lCEhfCYPvC6fcoOovf%2BWwGqGqwuvsfTjpQq4BDoRCCGdiedPRqMDK5KQjxu26EoEm6aHQboNOGK5wmoRjIbs7qLzXRmlbebc%2F2HseYMmPC8ltoh8yLF%2B1idU1ptdAs9bffAZyUwsFcLuDpTZkjXUrOCPtaYU8qORI%2BwUQg8erWA97K1WqzEHxiRW9PUN6VBkN9T6TMd8jcCQ36uXhgkf%2BskzxqXGHkUMP7S5jHRPv7TfInhzWG2xczLJjHJZr%2BgE2bAZi6HVw3QrZmU3c%2F%2BuRmVqDNYNqj9D3I7uowjN541xpBJV52FvmPdkO8UFc9qxWg2kSSoY0qXaP3E1QnCaa00hUErXFvKJ9iadJcwaBSgOcBIPN%2BW2hhi7odCm8eCKJGhMjU2VYldph6ZqQaVP%2F5vc3hEXDFlqrBMWVpgHgnWYtoWI2OUKbsZFIjx3GXKJwMC%2F7I6LrEGAfiYR9FoD0mf0qX%2FIk3ZlwKxa%2B0sagRa0UnXi%2FMKSI83HSt6X3cRBVgZzm6EQ%2FsJPfz50gd1zP8mG5D6%2BSU684Bm937mheh%2BPtB5s%2BIySV1FjCHMPvnoMMGOqUBZrydGPEfSG5ll%2FxK04MKfO4QvcYfzQPStwgYKbr%2Bvfa%2BbrPcTkuGnR2kLUaK3u1I0yWs3wdYc3MAImAS1vlfKsZhDiwD4D91n0q78seQ7ITNSAQ%2Fa0gUuuIxhMqjF0lorVHCMkl5NC7h9raMn1WD85J4zwjK75yECkNqYkYlAcR%2F6zr2YPIZ8kqqk69RmDy6E0iJjsQEvTv2kSFFlDcLauOBcy0Y&X-Amz-Signature=aad1c3f50acd99ec8831a51281f7b963ad8cb321ac3bc33fdc0ee5e1eb691334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
