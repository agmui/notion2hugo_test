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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKIXKXM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnpYee8FC%2BMvNFBQrXzFBHV30Fron852LKcGgzVxDzwQIgcdUBUKvipZVjHYHoR%2BUhxF1dZBO5Zhd5TaBbRkGAdwMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI9Ijed%2BWKJ%2BD9wayrcA3CukkeI7vCKUfNzYSJcd8h0CK288Loqj6i9xNgPIlivFRsc8xvgFFie4ShtXBkbDFIkKX%2BEVLDEGkjU%2F8GahS6NxNG7UuxzoR8vuN3ZNZiCjQRZ5OjCyGxZ6oqBqrDZ6hZG4RK%2FGoKxPY2Ylf19J0PDwR%2FMutC8u%2BRAlKGi%2BOLk2qOnTcbqLNj5wHQCc5HBtnSFJby0xfyqbjdqeUX5Q%2BatSQpj3ZCxtuDH6Naf480rX46Xr8jnkrdxL56i0KvA3fgnSi%2B8VHmIuNqTXpn6jyf6Kv39IRJE6M%2BXXfyiZzHAAZqkkXjqQaqMsO0%2BtA1QxWuS1QYANMO8olJx27argHNelNuc4Gj8CRFI4b%2B06p%2F6%2B%2Bblx6ZCca%2BvqWWqS3HTzTC%2BL7vXnnCU3gG5d%2B9B89BK05LWBnfG0o8DYweOPS8FcFoUj9xohxG%2FUmb3mqKkGyNImhILCwxkEQmowYgvth%2FHhbgzgKEJOZTS4jFiOaJX7xxeiE%2Fsqdoqs%2FuQrEp7koyEVXtzcK%2BHxCSjl7fV9EFeDZnOaNe9G5e%2Bnz%2FTXR3U7XKK6HjXoTvlTLfFohGsqYDVCbbLs3j8r2%2B5WB7CihG1nxDh%2BWI%2FsloyqhE%2FR3pCN7PXMw3df35BmEEXMLaI3cIGOqUBKsZjfMy9PaNL6kyNcVobm30ADGL%2BKh74XTO9Dd42k06Ctd0Go8nwkLWBtKypHYMt8GvBmTokMRxhnJnE5JyfWx%2FLtpO5VPVWD71qJ2yC8DEOkaQWJ%2BjqZiEcXzkzam%2BGYQB3rFK5qLYFNTiLBsZsBQ12tQ04YjVDz%2FJxwJeLNGac1CEomFGsiob9tHKQN%2FUGtqt%2BM8cztq7%2FUc2dbrHjRKEhA2%2FV&X-Amz-Signature=0fab91637595d1974c71c49350208cb72300cdbf813b64eb86987a07035b51d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKIXKXM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnpYee8FC%2BMvNFBQrXzFBHV30Fron852LKcGgzVxDzwQIgcdUBUKvipZVjHYHoR%2BUhxF1dZBO5Zhd5TaBbRkGAdwMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI9Ijed%2BWKJ%2BD9wayrcA3CukkeI7vCKUfNzYSJcd8h0CK288Loqj6i9xNgPIlivFRsc8xvgFFie4ShtXBkbDFIkKX%2BEVLDEGkjU%2F8GahS6NxNG7UuxzoR8vuN3ZNZiCjQRZ5OjCyGxZ6oqBqrDZ6hZG4RK%2FGoKxPY2Ylf19J0PDwR%2FMutC8u%2BRAlKGi%2BOLk2qOnTcbqLNj5wHQCc5HBtnSFJby0xfyqbjdqeUX5Q%2BatSQpj3ZCxtuDH6Naf480rX46Xr8jnkrdxL56i0KvA3fgnSi%2B8VHmIuNqTXpn6jyf6Kv39IRJE6M%2BXXfyiZzHAAZqkkXjqQaqMsO0%2BtA1QxWuS1QYANMO8olJx27argHNelNuc4Gj8CRFI4b%2B06p%2F6%2B%2Bblx6ZCca%2BvqWWqS3HTzTC%2BL7vXnnCU3gG5d%2B9B89BK05LWBnfG0o8DYweOPS8FcFoUj9xohxG%2FUmb3mqKkGyNImhILCwxkEQmowYgvth%2FHhbgzgKEJOZTS4jFiOaJX7xxeiE%2Fsqdoqs%2FuQrEp7koyEVXtzcK%2BHxCSjl7fV9EFeDZnOaNe9G5e%2Bnz%2FTXR3U7XKK6HjXoTvlTLfFohGsqYDVCbbLs3j8r2%2B5WB7CihG1nxDh%2BWI%2FsloyqhE%2FR3pCN7PXMw3df35BmEEXMLaI3cIGOqUBKsZjfMy9PaNL6kyNcVobm30ADGL%2BKh74XTO9Dd42k06Ctd0Go8nwkLWBtKypHYMt8GvBmTokMRxhnJnE5JyfWx%2FLtpO5VPVWD71qJ2yC8DEOkaQWJ%2BjqZiEcXzkzam%2BGYQB3rFK5qLYFNTiLBsZsBQ12tQ04YjVDz%2FJxwJeLNGac1CEomFGsiob9tHKQN%2FUGtqt%2BM8cztq7%2FUc2dbrHjRKEhA2%2FV&X-Amz-Signature=7d08c939c0e83d0a14dc09c908515ad50858d7698293d6846a0a2ebb0a444cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
