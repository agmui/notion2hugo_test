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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHBWB6O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe8QC58F%2BIsJefR7psTCaXdDSVxhjcDuO8unIR%2ByhX3AIhAJigpOczHANbaUz1kOsSK0t0U%2Bltq5mJ3pSRjmQMoJWJKv8DCF8QABoMNjM3NDIzMTgzODA1IgxZyNobV%2BFWkvi6g2gq3APWX5El8RP093%2FT%2FTxX42oSVFcnyMl1ToTJTmbdlBljd%2F2Bi6rdPf3xhD1OaLRPvNU5OGJz6awzaC08I%2Ft97ghBGcMo%2B4%2FTwlpvd4yEqcrbXNIHb2J6xytSv%2FblL9Aa2J8B%2BOtEdknQZwl%2FVVWUhz4x8BBI46oFy4xGuG99WO0RLhd2yVukLz8zHZnt15G2VgPVAt%2BJ4bCWvx0IKhT9l6kfPKeHcW%2FaY8P5xmKsZTkTsm5%2B8%2BwimyOvmW5U%2FUtwRQ%2BwBsPzsKOWriBj5oFqg7PftkJaR1TFiXZswxjDjjGUfblXZIM2%2BYt%2BH%2Fr4ve4%2FeKKWF9ByNTaTStTbtmASIzjZsEwcJZ2VRCuxEAT%2FyN%2FGhd%2FNMSdI7bjJ2iB5gV0E9iCmg93U08Q8FvNHJ6UKZF%2BRMFnu5JfvgCp7rphbY3jLohDpJGHqjt4ySKADDO62dZ0thNIeeDNFEia0kd2syvOCPt0SnI90VI1VKjMXJJMkEc%2FlZQwFxNP8Nf9nIE%2Fen30Hbm%2BZlI1T%2F6jU57R1h2QM%2FiUMB3Ma7%2Bu1u3KU8iJVfOXAogW6JejxWCW3HjhilkUTAkg8T3oCJh1Eckig36vsmQbE3x%2BmNVIdJZvhW3%2FSbRHAuQwG4oZs5ayvtDCNtqLBBjqkAUF3qt%2BOsbL5o%2BxpJkfco6gnvdjfgL%2FZBarewn4bOlyRyN5T70TQ%2BOR%2B6G3kHRSLV8SQLm1LBNLK7f9xdb1tLF4D3u4aOYJd%2BKQ8x2dPCLfXzAn3hxN27KPdS5qR1SIqD%2FC61fupEZ5x2hPYSxa3SeNmCPeuiN1t5bLBH17SlRZ9e5frw7ZsX4goTNdvcCoyfW1WdN1%2B2buCfRxOHy7mO%2B1%2Fw8bm&X-Amz-Signature=439296172d76548498a1297b5fa174c74637fe09b8caf34d45ca236c8ec720f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHBWB6O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe8QC58F%2BIsJefR7psTCaXdDSVxhjcDuO8unIR%2ByhX3AIhAJigpOczHANbaUz1kOsSK0t0U%2Bltq5mJ3pSRjmQMoJWJKv8DCF8QABoMNjM3NDIzMTgzODA1IgxZyNobV%2BFWkvi6g2gq3APWX5El8RP093%2FT%2FTxX42oSVFcnyMl1ToTJTmbdlBljd%2F2Bi6rdPf3xhD1OaLRPvNU5OGJz6awzaC08I%2Ft97ghBGcMo%2B4%2FTwlpvd4yEqcrbXNIHb2J6xytSv%2FblL9Aa2J8B%2BOtEdknQZwl%2FVVWUhz4x8BBI46oFy4xGuG99WO0RLhd2yVukLz8zHZnt15G2VgPVAt%2BJ4bCWvx0IKhT9l6kfPKeHcW%2FaY8P5xmKsZTkTsm5%2B8%2BwimyOvmW5U%2FUtwRQ%2BwBsPzsKOWriBj5oFqg7PftkJaR1TFiXZswxjDjjGUfblXZIM2%2BYt%2BH%2Fr4ve4%2FeKKWF9ByNTaTStTbtmASIzjZsEwcJZ2VRCuxEAT%2FyN%2FGhd%2FNMSdI7bjJ2iB5gV0E9iCmg93U08Q8FvNHJ6UKZF%2BRMFnu5JfvgCp7rphbY3jLohDpJGHqjt4ySKADDO62dZ0thNIeeDNFEia0kd2syvOCPt0SnI90VI1VKjMXJJMkEc%2FlZQwFxNP8Nf9nIE%2Fen30Hbm%2BZlI1T%2F6jU57R1h2QM%2FiUMB3Ma7%2Bu1u3KU8iJVfOXAogW6JejxWCW3HjhilkUTAkg8T3oCJh1Eckig36vsmQbE3x%2BmNVIdJZvhW3%2FSbRHAuQwG4oZs5ayvtDCNtqLBBjqkAUF3qt%2BOsbL5o%2BxpJkfco6gnvdjfgL%2FZBarewn4bOlyRyN5T70TQ%2BOR%2B6G3kHRSLV8SQLm1LBNLK7f9xdb1tLF4D3u4aOYJd%2BKQ8x2dPCLfXzAn3hxN27KPdS5qR1SIqD%2FC61fupEZ5x2hPYSxa3SeNmCPeuiN1t5bLBH17SlRZ9e5frw7ZsX4goTNdvcCoyfW1WdN1%2B2buCfRxOHy7mO%2B1%2Fw8bm&X-Amz-Signature=fa8fc06bd070bed392f444f6f5e4ea0d26bf7ba441d6917fe609f107c47fc6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
