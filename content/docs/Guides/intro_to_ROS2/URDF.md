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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALAVSBQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCafSKErtKbeIKzvCQseOTpAyzuFOqwTsgvP%2FAtQ6JGPgIgL4G5ovh3qF6niDsF0ghCwoOCx7jGItdolkrJ5DXT1D4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8%2BBP0%2FhYhS0H5HjCrcA6usgKJAcFeNU2cd3b9WCnmiRUz9Cs%2B3s14uc6rxg1WOXa4sX0GG%2ByCQGVBfQsQc7dT7Gd%2BzX10EaU6Q%2BLcLC3HiLtPGlzOUNrGdpprC80ugYCK%2FnzVjgc%2Ft8adIwpeKAbqmiuvrhIsQkz6h8uFrs5UpQ7u1%2BuLcm8FXO24dAB9vuOrcvHANNSnMALrwI5r6oYrgIm8od9kXnbVfH6EyUVX5CNgkaHk6zQJFF9IqtCoIZhb0veL8uJk4QSHnD%2BtEjNkkxHBN6U84uMFrdA3YlwsB1U5Hc%2FlvfvzXEG622oPsSRpqpLxesOHm8NOVtUNQo60CvteNXn1IzByx%2F0TVRWyhbsJnyb5Vpk6yOs8DcrHY%2B98xQSWopiJD8SJRKS5ZqEHThfzut1kafGsy8xTtluMecERCnqA803F3ObOwu0zKsCZLYi6hrZsRYPQFWn7%2BIigEW%2FK4ASuRn7Nvm4%2BWdUa%2FfaxrJjUhmqtw3AypJNbZKqfmSEAMYRYd3Tlbu%2FBuPh3jGnp2lk%2B7fcIUULEV%2B84QE3cLGW3V7FDpXlmoNjTpf4pYv6Yl87mALNCFnecEHZA%2FUm0LbVs5%2FJboi%2B%2BkmI7Z6cw2kTu%2FDjCr83o9MNwls3kILUx8PRpkLTr1MJTP6b0GOqUBds%2FdN8YErDg9nPy2rNNA0XcDsInOEpOPV58qrhzxbiye%2F93fpXLnAHhESjYMLf6m6r028mphPOEpkaV7N%2BRui7apZyRBmIr%2BtKyiCQgohqOe8yUTPFAvwBuD3AlO3pSbbaY2696BNQlisVafKRefK5pgPrtETk58n%2Fnx7SloDBWDwufKl32AQqx5k8Pl4wl9LA1k0aA9s86CdoEbJhcroqzoKHjd&X-Amz-Signature=cd42b90a0d423957d8f2eb0b8d5363265191c4c4dc6eb48316f8d8b2510bbe01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALAVSBQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCafSKErtKbeIKzvCQseOTpAyzuFOqwTsgvP%2FAtQ6JGPgIgL4G5ovh3qF6niDsF0ghCwoOCx7jGItdolkrJ5DXT1D4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8%2BBP0%2FhYhS0H5HjCrcA6usgKJAcFeNU2cd3b9WCnmiRUz9Cs%2B3s14uc6rxg1WOXa4sX0GG%2ByCQGVBfQsQc7dT7Gd%2BzX10EaU6Q%2BLcLC3HiLtPGlzOUNrGdpprC80ugYCK%2FnzVjgc%2Ft8adIwpeKAbqmiuvrhIsQkz6h8uFrs5UpQ7u1%2BuLcm8FXO24dAB9vuOrcvHANNSnMALrwI5r6oYrgIm8od9kXnbVfH6EyUVX5CNgkaHk6zQJFF9IqtCoIZhb0veL8uJk4QSHnD%2BtEjNkkxHBN6U84uMFrdA3YlwsB1U5Hc%2FlvfvzXEG622oPsSRpqpLxesOHm8NOVtUNQo60CvteNXn1IzByx%2F0TVRWyhbsJnyb5Vpk6yOs8DcrHY%2B98xQSWopiJD8SJRKS5ZqEHThfzut1kafGsy8xTtluMecERCnqA803F3ObOwu0zKsCZLYi6hrZsRYPQFWn7%2BIigEW%2FK4ASuRn7Nvm4%2BWdUa%2FfaxrJjUhmqtw3AypJNbZKqfmSEAMYRYd3Tlbu%2FBuPh3jGnp2lk%2B7fcIUULEV%2B84QE3cLGW3V7FDpXlmoNjTpf4pYv6Yl87mALNCFnecEHZA%2FUm0LbVs5%2FJboi%2B%2BkmI7Z6cw2kTu%2FDjCr83o9MNwls3kILUx8PRpkLTr1MJTP6b0GOqUBds%2FdN8YErDg9nPy2rNNA0XcDsInOEpOPV58qrhzxbiye%2F93fpXLnAHhESjYMLf6m6r028mphPOEpkaV7N%2BRui7apZyRBmIr%2BtKyiCQgohqOe8yUTPFAvwBuD3AlO3pSbbaY2696BNQlisVafKRefK5pgPrtETk58n%2Fnx7SloDBWDwufKl32AQqx5k8Pl4wl9LA1k0aA9s86CdoEbJhcroqzoKHjd&X-Amz-Signature=4917d2d1639443d87e8d289a5ef74f902bf578aec7084887f3a9e5fb212e84a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
