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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALW3GIX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB86quvAOgaHs%2F%2BNVYdrMuFE2AKXjAk4TToh5B2TnAkZAiEAxwCp5mURbC%2B2eJQFi7SHMJVOEPmoD%2F1plKiandP4KcEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByDgxUSD8Gp%2B1NkeSrcA8zkC5nzeuInIGr5xKK34D5Z2meyoe7GlpMv6WbZgvz2H9C0w16US2kNw6zbSDtDnJhkJRpRlMz%2B%2FZFY5IZ1umO9rsn3cFjOlKnLtliBGui3HC%2BNZGCVbDgu6Zb4Z2LUNMBTy9nUtlHFDVRq4ran45F8BfJPrt6Y57OQSfrf8udDMBgGnSUBoSo1f%2BgECckrsmSE3j%2FyMHiQ1OK5bkMfhjJ29TP8DEj9CgKUN4vVv1Wag8GnKodGQmALYMRoLFq6MVdvZdX%2BSgpBaP5LyaUWkCMZ%2BNOGohGIQUiGmi0NhczA9mYJWh6TW9czqBcGpyggllsY%2FTtRRU%2FKbcACjK0hrXnyCnVPNtMLXVwD%2BM8NqmelketOOg4H9DpgZfoQSP4Yss9ncfBwwHsIUo6WyxKQOY%2BxGeZQzx28XyKXcsHIkIw%2BQv9j43RQqwbGbSUQ0XQFyZq1w5H2GXIw0lB02L%2Fo44nYcwUZl3pkSE%2FB1SB7SlNdJ%2F1%2F9EK0ZJpBSTWJkzJNez7%2FJTTaJM5xte62aRrwfkw2IYd5z1aOg8aaNaRcyX%2BCzNOERfg6W9Ykh%2BMRGQLRKbj%2FbBgVgQgyE6HR9w6FZiqY6NDKw19iEpkKXHyd%2FFgxdffX6NYNKnfcBuCjMK%2Bd%2FLwGOqUB7NEzIDZYsT52H7nM7iaUmmfdqYxxX1%2FxH35EAFl9%2FeK%2F6xXaRjZIiZiRalzrIDD2%2FJIU58BvyEBfbU2c%2Bo0BjcZnS53qHR84rYC9y8BzJ1V2yinWtyn6mCq8WNaTQk5Zft2lNlyg4tTgWTNA2TXHowuKj6zwRNQD0G8orKDYpjqFdQHH2VH5TqoFEGjRqUULqghOM9tr1c5iGJuAie8bdMQiZGGY&X-Amz-Signature=3955d6dc69aaa6cd07fd3b1019f68f7d4e258478c17e003b504a3c2a59f11f92&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALW3GIX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB86quvAOgaHs%2F%2BNVYdrMuFE2AKXjAk4TToh5B2TnAkZAiEAxwCp5mURbC%2B2eJQFi7SHMJVOEPmoD%2F1plKiandP4KcEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByDgxUSD8Gp%2B1NkeSrcA8zkC5nzeuInIGr5xKK34D5Z2meyoe7GlpMv6WbZgvz2H9C0w16US2kNw6zbSDtDnJhkJRpRlMz%2B%2FZFY5IZ1umO9rsn3cFjOlKnLtliBGui3HC%2BNZGCVbDgu6Zb4Z2LUNMBTy9nUtlHFDVRq4ran45F8BfJPrt6Y57OQSfrf8udDMBgGnSUBoSo1f%2BgECckrsmSE3j%2FyMHiQ1OK5bkMfhjJ29TP8DEj9CgKUN4vVv1Wag8GnKodGQmALYMRoLFq6MVdvZdX%2BSgpBaP5LyaUWkCMZ%2BNOGohGIQUiGmi0NhczA9mYJWh6TW9czqBcGpyggllsY%2FTtRRU%2FKbcACjK0hrXnyCnVPNtMLXVwD%2BM8NqmelketOOg4H9DpgZfoQSP4Yss9ncfBwwHsIUo6WyxKQOY%2BxGeZQzx28XyKXcsHIkIw%2BQv9j43RQqwbGbSUQ0XQFyZq1w5H2GXIw0lB02L%2Fo44nYcwUZl3pkSE%2FB1SB7SlNdJ%2F1%2F9EK0ZJpBSTWJkzJNez7%2FJTTaJM5xte62aRrwfkw2IYd5z1aOg8aaNaRcyX%2BCzNOERfg6W9Ykh%2BMRGQLRKbj%2FbBgVgQgyE6HR9w6FZiqY6NDKw19iEpkKXHyd%2FFgxdffX6NYNKnfcBuCjMK%2Bd%2FLwGOqUB7NEzIDZYsT52H7nM7iaUmmfdqYxxX1%2FxH35EAFl9%2FeK%2F6xXaRjZIiZiRalzrIDD2%2FJIU58BvyEBfbU2c%2Bo0BjcZnS53qHR84rYC9y8BzJ1V2yinWtyn6mCq8WNaTQk5Zft2lNlyg4tTgWTNA2TXHowuKj6zwRNQD0G8orKDYpjqFdQHH2VH5TqoFEGjRqUULqghOM9tr1c5iGJuAie8bdMQiZGGY&X-Amz-Signature=9a785e7746a7456c2c9829bffc49cb083cc844f4433da4f8264b9007e2293740&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
