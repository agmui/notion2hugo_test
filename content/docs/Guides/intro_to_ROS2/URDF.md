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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSEVGRD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCyngamgByDKzow9re3g0QpIxI6gI0jabNLvHig%2BlQa0wIgPdWEclY1OTYq3TKDGigWiwsmgtgkrogP1oVtrPe%2B3XcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6%2FiG%2F7hd%2BpqFtPByrcAxSlaN5lowH3wtrgmzpNufWFGVwbmNM6FIpk%2ByBfID%2B0538khUB%2FNGojchP%2FBdDFGiuDdsaKxb1LypF3saXfpIIFTKkX5jkEi2cTaa6RqQ2IJ%2B9Zz7cSioLOqz3rjaGGuG%2Bi2HZTciFq%2BRrw5sdoipNJfaUf7gwDpVxewbZXBratbL7eK22hq2xUj7tSjd5ReG6eE1%2B0B94Kwn%2Fwd0ESpYLqQkqXtZEiAeXY6jZssiHNfVSx0EmMBDZ9RLULVgABymippOWUuB1nMwBnGHs3pz31sgDGIXFW6n8VnUkBybo3QqGs0RMLeNcTapI3%2BQGadl17Jfu%2F587VNKvS8h%2FQlzmuVmA6ZJtm9tjfjCNFX6kUDzT%2B47B8qESRgQE0L1Wuw1GnwnLjbf4lCQX6ZyXR8RR297wX7dddEki4HPKsQLjlCnwMG4AOvPdQKWkjNlTR%2FUkwTl7gErFEq6d6sIInoQ6W5TILcrZZH3Im0LJApWwE%2FXIhJH2mcO8HYoHvIW7PId3%2F87uMiyJKHgGGzhS%2FvDaI1MGpibEYKztYksTBwsdS60%2BqT7VJEKARucW8hJfJxifKVXcvGhlPraODPrrm5qkU3%2Bkp2fRQvazK4mhzlwqcKihsj8ANUSTN5jcKMMnegMEGOqUBCZVa9PnC%2FBFzh0Llsxv7qA7Youy7CMqU8HhDhuT2Tyu1hxBPhLnqpUNd83t8WpFDTVMpK19juWifzQQbu2a4Ihd6xcaOn6agEQKNJGJrUosSsyNYqNdjak0eCu1teP9%2BnWA2IWy%2BmAWZG4PCjaKHD0jhf7VdEL8QfVNcsTEimjxDMYjkXKCxIUG3kRJyYJgHfsw1W1WziMIH44EFvnA9G6WgG4Jq&X-Amz-Signature=0e730c9f60decb9ea5f79c3f20f30569669fc476a947e4727b3120db4f0b6f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSEVGRD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCyngamgByDKzow9re3g0QpIxI6gI0jabNLvHig%2BlQa0wIgPdWEclY1OTYq3TKDGigWiwsmgtgkrogP1oVtrPe%2B3XcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6%2FiG%2F7hd%2BpqFtPByrcAxSlaN5lowH3wtrgmzpNufWFGVwbmNM6FIpk%2ByBfID%2B0538khUB%2FNGojchP%2FBdDFGiuDdsaKxb1LypF3saXfpIIFTKkX5jkEi2cTaa6RqQ2IJ%2B9Zz7cSioLOqz3rjaGGuG%2Bi2HZTciFq%2BRrw5sdoipNJfaUf7gwDpVxewbZXBratbL7eK22hq2xUj7tSjd5ReG6eE1%2B0B94Kwn%2Fwd0ESpYLqQkqXtZEiAeXY6jZssiHNfVSx0EmMBDZ9RLULVgABymippOWUuB1nMwBnGHs3pz31sgDGIXFW6n8VnUkBybo3QqGs0RMLeNcTapI3%2BQGadl17Jfu%2F587VNKvS8h%2FQlzmuVmA6ZJtm9tjfjCNFX6kUDzT%2B47B8qESRgQE0L1Wuw1GnwnLjbf4lCQX6ZyXR8RR297wX7dddEki4HPKsQLjlCnwMG4AOvPdQKWkjNlTR%2FUkwTl7gErFEq6d6sIInoQ6W5TILcrZZH3Im0LJApWwE%2FXIhJH2mcO8HYoHvIW7PId3%2F87uMiyJKHgGGzhS%2FvDaI1MGpibEYKztYksTBwsdS60%2BqT7VJEKARucW8hJfJxifKVXcvGhlPraODPrrm5qkU3%2Bkp2fRQvazK4mhzlwqcKihsj8ANUSTN5jcKMMnegMEGOqUBCZVa9PnC%2FBFzh0Llsxv7qA7Youy7CMqU8HhDhuT2Tyu1hxBPhLnqpUNd83t8WpFDTVMpK19juWifzQQbu2a4Ihd6xcaOn6agEQKNJGJrUosSsyNYqNdjak0eCu1teP9%2BnWA2IWy%2BmAWZG4PCjaKHD0jhf7VdEL8QfVNcsTEimjxDMYjkXKCxIUG3kRJyYJgHfsw1W1WziMIH44EFvnA9G6WgG4Jq&X-Amz-Signature=2c9136c9fa980b5fe5c16edaba380a2e33661f224231a39c17db2f706abfbf57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
