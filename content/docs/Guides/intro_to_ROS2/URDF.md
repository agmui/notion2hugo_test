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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3CJT2JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb091Gwsa7%2F1Jh8DM14HfxxkEIoBAJnrRmE2glp%2BmwKAiEA9XPxuDe%2BcX55ooB7lWq6M8cz7q6Toj9AS4oUzQkPsO4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLRnCFdlHbDq9CMZXSrcA93HH6ts4ghOkIamiQZNQkupju2LuphRiVFUvdNX7CyjDwSAOh2jFmLW29apcZAC9v86w1IvmTl38sFtQVoNcQNzV47pUmlKGRZc6l2VPUrDZQQYEyDrk3jNnctCZCJak%2FoLYIjUgv5G1TWcOH2Sh8jyxZfirY0WAU299nsUAXG0%2FgB%2BkO0f%2F33FEYPs0UWIbAQhFD6WHDDPHY9f7WZZsYYKiCYrB4ScU9%2BtntwJYheLdKCNzPSMJxOmKh%2FTqRrJf8R0rBBXCb657Nb74cxpAEwqni7Zythlq1vQu4CCz2edNBJ8ntO3xkx%2BMyPGQgDmAn0jyONbvSqpPKvDiP48juNEHlL7iU%2FK09mqrp31EyUkUfuRVUtM89mjY9QvNmpgy5IQcwxWWaD7GBKYkuQE44oa14sV2kxo2zArVLaXtb06ibtcVmHGpqiVZvNDVwTrhGgbN4H8mR4SSniYSsjC8aJa1%2BGrCilxnfz1UQl2d4JUfOwD5CGeRpVukNFBZfNP6OCOTDl3EKYSG3HmYqU5zQJGA1NtFtCSmW7f4HwaHtA5GxAr78g9irIXFe9%2FthSNb2rkrEtDiyQADpQBBEr9Z0QTcwfqDNzqwgX9pGqjUc1VenUzin4P0m4syGLoMIOx5sAGOqUBGzhEONsT%2FKRkRWBqo35dUnXv3t9XnB%2BQQM6jCzGJukXmQRbmzrl3Dw9fWPcOMVSxTlWGKv7UYg6TwbrzNwUbH8%2B%2F0DOiyOTcXC978vpRnOXwLP0%2Bwy%2BgiRD3oX%2BIs9HKuvIOEc1uQl2%2BQjKsBgxwazB4pSMAG%2Fg%2BRiz%2Bg4ZwgVWaH%2Fyl%2FsCMF2Aq3vaxTspSAX1vb2c3HVTtHBdgz2hCkLR6ymkr&X-Amz-Signature=f1f4f26d505fae456d089228ae4a7911d220ba50f4f56637529ed527e3706c43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3CJT2JR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb091Gwsa7%2F1Jh8DM14HfxxkEIoBAJnrRmE2glp%2BmwKAiEA9XPxuDe%2BcX55ooB7lWq6M8cz7q6Toj9AS4oUzQkPsO4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLRnCFdlHbDq9CMZXSrcA93HH6ts4ghOkIamiQZNQkupju2LuphRiVFUvdNX7CyjDwSAOh2jFmLW29apcZAC9v86w1IvmTl38sFtQVoNcQNzV47pUmlKGRZc6l2VPUrDZQQYEyDrk3jNnctCZCJak%2FoLYIjUgv5G1TWcOH2Sh8jyxZfirY0WAU299nsUAXG0%2FgB%2BkO0f%2F33FEYPs0UWIbAQhFD6WHDDPHY9f7WZZsYYKiCYrB4ScU9%2BtntwJYheLdKCNzPSMJxOmKh%2FTqRrJf8R0rBBXCb657Nb74cxpAEwqni7Zythlq1vQu4CCz2edNBJ8ntO3xkx%2BMyPGQgDmAn0jyONbvSqpPKvDiP48juNEHlL7iU%2FK09mqrp31EyUkUfuRVUtM89mjY9QvNmpgy5IQcwxWWaD7GBKYkuQE44oa14sV2kxo2zArVLaXtb06ibtcVmHGpqiVZvNDVwTrhGgbN4H8mR4SSniYSsjC8aJa1%2BGrCilxnfz1UQl2d4JUfOwD5CGeRpVukNFBZfNP6OCOTDl3EKYSG3HmYqU5zQJGA1NtFtCSmW7f4HwaHtA5GxAr78g9irIXFe9%2FthSNb2rkrEtDiyQADpQBBEr9Z0QTcwfqDNzqwgX9pGqjUc1VenUzin4P0m4syGLoMIOx5sAGOqUBGzhEONsT%2FKRkRWBqo35dUnXv3t9XnB%2BQQM6jCzGJukXmQRbmzrl3Dw9fWPcOMVSxTlWGKv7UYg6TwbrzNwUbH8%2B%2F0DOiyOTcXC978vpRnOXwLP0%2Bwy%2BgiRD3oX%2BIs9HKuvIOEc1uQl2%2BQjKsBgxwazB4pSMAG%2Fg%2BRiz%2Bg4ZwgVWaH%2Fyl%2FsCMF2Aq3vaxTspSAX1vb2c3HVTtHBdgz2hCkLR6ymkr&X-Amz-Signature=d0271fdbca2a6d19c8a1641ab892f6da9bb6f53cd42e7ea438a28da086e9d07f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
