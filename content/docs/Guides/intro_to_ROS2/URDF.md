---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SSZ64V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDWxIe%2FCTsCk8zXgW%2FCECBxtf4KXi%2Fpe3qO7dZqzDsGVAIgW4Bq6DD7t63VYqCXX7LoBUqXaduMFFTb7ELU5vYsdpIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMaBjkigIPYJr2FLSrcAwUb6dlpQ8mIxF83QIfs5W8qVjMzfFFQadeiEtc%2F8tjyQipAKBcqgRFoEBzeL5LKNSEixbTen4Av%2FVb3EXKtxQ7MPRJQXWT4D2%2FDGL6%2F3vxQz1nXyOLrmaAk8wzVA3aQ4PawLQVmoI9dvkhi8z7B%2Fcn1W4wLHolRwtdd6YFW1pC2yfxUMcHFpOJG5m0rEvtCkx3uWNIKLpF3QlqKGkIVhPzoE%2BCa2c3P83mhM3PFxvNILw2LeP17YE4GfnajTOqh4cHPfg48PvA5TF1ycaXT1oI54fG5SO09dCYYxI%2FGTBJ8nKzq1QMW4lNdgfzv2e8RRsoXUie5uhcmYN741y6E6exXyACFhUQUf09eNx9kE4h6atXXfbmI179IcNgbqtyh4B8Qt5JZy1zHnPGMOcHXOxQWGfeF5g%2F8OurM5Y47x9zrJ%2Bw3f%2FJ9jaTnb6xhHOkenUgR%2FPPA3ZM7cQz8AhaqE3dY01Lbypj4v2qXFNfp%2Bxv4y7gcP1Yp0ch3ek0yBhIorqjvSZzNEvCfyIU8MaZN0pRXWhkbboxCYCZee1yrh2hdssz1IVqC6Im4ZQisjeY3ePv9F1%2BaKb%2BlC0UsIJwaItv4N1tCB7pi2M482m07aZgggIkWhJin0%2BWcGGKPMIrU0sQGOqUBFxO9iU8xDKUPLI2IyCUfntHR%2FLTxP3kpzsNqUQOwZdQ5NOwCGzRzTUZEoEpri2EavHPFU2c04yzAoix2KharklfY81Yi%2BGpRHo8qRP4KQqPa2ZBwe92pA9ec0h3ti7b5B6oY6RfWFJWT%2B4NsUok%2BhfKY7wA4nHMXWWkNouxmSSXLMxlhW%2B4HRRPIodSwulAHqbHrUY5gSEYQ%2FIMEmoNJtXFtMpJe&X-Amz-Signature=af38a11a9829687168e54441e360276c930c6db0f66cca6522d6b20e1e3bb729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SSZ64V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDWxIe%2FCTsCk8zXgW%2FCECBxtf4KXi%2Fpe3qO7dZqzDsGVAIgW4Bq6DD7t63VYqCXX7LoBUqXaduMFFTb7ELU5vYsdpIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMaBjkigIPYJr2FLSrcAwUb6dlpQ8mIxF83QIfs5W8qVjMzfFFQadeiEtc%2F8tjyQipAKBcqgRFoEBzeL5LKNSEixbTen4Av%2FVb3EXKtxQ7MPRJQXWT4D2%2FDGL6%2F3vxQz1nXyOLrmaAk8wzVA3aQ4PawLQVmoI9dvkhi8z7B%2Fcn1W4wLHolRwtdd6YFW1pC2yfxUMcHFpOJG5m0rEvtCkx3uWNIKLpF3QlqKGkIVhPzoE%2BCa2c3P83mhM3PFxvNILw2LeP17YE4GfnajTOqh4cHPfg48PvA5TF1ycaXT1oI54fG5SO09dCYYxI%2FGTBJ8nKzq1QMW4lNdgfzv2e8RRsoXUie5uhcmYN741y6E6exXyACFhUQUf09eNx9kE4h6atXXfbmI179IcNgbqtyh4B8Qt5JZy1zHnPGMOcHXOxQWGfeF5g%2F8OurM5Y47x9zrJ%2Bw3f%2FJ9jaTnb6xhHOkenUgR%2FPPA3ZM7cQz8AhaqE3dY01Lbypj4v2qXFNfp%2Bxv4y7gcP1Yp0ch3ek0yBhIorqjvSZzNEvCfyIU8MaZN0pRXWhkbboxCYCZee1yrh2hdssz1IVqC6Im4ZQisjeY3ePv9F1%2BaKb%2BlC0UsIJwaItv4N1tCB7pi2M482m07aZgggIkWhJin0%2BWcGGKPMIrU0sQGOqUBFxO9iU8xDKUPLI2IyCUfntHR%2FLTxP3kpzsNqUQOwZdQ5NOwCGzRzTUZEoEpri2EavHPFU2c04yzAoix2KharklfY81Yi%2BGpRHo8qRP4KQqPa2ZBwe92pA9ec0h3ti7b5B6oY6RfWFJWT%2B4NsUok%2BhfKY7wA4nHMXWWkNouxmSSXLMxlhW%2B4HRRPIodSwulAHqbHrUY5gSEYQ%2FIMEmoNJtXFtMpJe&X-Amz-Signature=214c8732ae548149f640a71224e20dbdde95878baae76b36b33f204ef8d3a4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
