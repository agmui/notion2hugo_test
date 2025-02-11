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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IBHSK62%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq%2Bm00%2FBy6FSEAD2KwDSTyx%2F4nIH2UuhY3tkJfqy4pQAiBfeq73G1AjClwnrIrT6G24OyauoJSq8P9urjJFj6pBHyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvxfY9AONmg5Z9JwKtwDtgFrRW0r0zGqawShcDbY%2BJRGoixR8%2B9IB6F%2BUzTDtiteFn5rRwrvurLaME0CtoOgUnyNIN9OblrxlnAgR3jEckMKKb19M%2B0lGN0uqwFLFkfw%2FzengYJwgkn8Wkd9JV9T5AhilEyAeI2U%2BUiUKU6mgMaDBAVSJc1ge6HtvO5mbWsDP5WobeVqvaqQBXPCn1ctH0o5FuYps36O1emb7rCKmIMnPDA0QZveoxAajyB3tnJm%2FXrZZ%2BaJjVPaHItEv93Nm4PsTNZGi0zw%2Bd5mFjYy9aIsTWSdazKBpZ%2BSdsnrjFqBLaPZXfbVsXxlVpdQd5oXxurzZUnU2VZY%2F6wwcu%2B1aI2vdyz04Gx5b6MMN2GX40AUGiMUS3SS48ZgTshAd2g1O5BIfmPpjSjw4NBoEmmpmbUFzvULPG1IoIBw3oQ5aaxW%2B9jbNjrJ1R5sOl7B%2FpHE882n0ZB2jIrz6HCe%2FYO%2FE4oC65yQZWuX6dNX%2BZWgl%2F0C2cESI%2Fx1PX8Gh4JC0T3Awb7P0Y2JKscg6UqMkfl4DYIqv5PQYU%2BjNufXiUC23R7lRvydehjbDIh3ZUG9JgfW5XEhnbE2buB9KPoApvPQXI1suFKMeDNrLUBapJVN9%2BkNnqQR861QEGwGUfwwgsmrvQY6pgHvJCS1L4KktBhZK8bHTfX6Cf280Nz7lXWeYLgJIzr9dLM8Z4Bzy%2FFoCJCvQxLfT%2FU%2F46XxYRNR2bEkfNG7sI2Iq07i05%2BInMJdPJox0fyxvkY4k6eMyF5keD7T2AWCi84ZJix%2BhXhKmyVZS1xkMTsflfgKjSIHDBihKwQ2Zupc3z11m1tP93OQ%2FXZwbJxlIPjK6yll0vEs0AN2%2B2sA7gV1NySmfure&X-Amz-Signature=779e6274c806649a4c3868879c8fb6107ad8741d7c70ea337e28683ca964e24f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IBHSK62%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq%2Bm00%2FBy6FSEAD2KwDSTyx%2F4nIH2UuhY3tkJfqy4pQAiBfeq73G1AjClwnrIrT6G24OyauoJSq8P9urjJFj6pBHyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBvxfY9AONmg5Z9JwKtwDtgFrRW0r0zGqawShcDbY%2BJRGoixR8%2B9IB6F%2BUzTDtiteFn5rRwrvurLaME0CtoOgUnyNIN9OblrxlnAgR3jEckMKKb19M%2B0lGN0uqwFLFkfw%2FzengYJwgkn8Wkd9JV9T5AhilEyAeI2U%2BUiUKU6mgMaDBAVSJc1ge6HtvO5mbWsDP5WobeVqvaqQBXPCn1ctH0o5FuYps36O1emb7rCKmIMnPDA0QZveoxAajyB3tnJm%2FXrZZ%2BaJjVPaHItEv93Nm4PsTNZGi0zw%2Bd5mFjYy9aIsTWSdazKBpZ%2BSdsnrjFqBLaPZXfbVsXxlVpdQd5oXxurzZUnU2VZY%2F6wwcu%2B1aI2vdyz04Gx5b6MMN2GX40AUGiMUS3SS48ZgTshAd2g1O5BIfmPpjSjw4NBoEmmpmbUFzvULPG1IoIBw3oQ5aaxW%2B9jbNjrJ1R5sOl7B%2FpHE882n0ZB2jIrz6HCe%2FYO%2FE4oC65yQZWuX6dNX%2BZWgl%2F0C2cESI%2Fx1PX8Gh4JC0T3Awb7P0Y2JKscg6UqMkfl4DYIqv5PQYU%2BjNufXiUC23R7lRvydehjbDIh3ZUG9JgfW5XEhnbE2buB9KPoApvPQXI1suFKMeDNrLUBapJVN9%2BkNnqQR861QEGwGUfwwgsmrvQY6pgHvJCS1L4KktBhZK8bHTfX6Cf280Nz7lXWeYLgJIzr9dLM8Z4Bzy%2FFoCJCvQxLfT%2FU%2F46XxYRNR2bEkfNG7sI2Iq07i05%2BInMJdPJox0fyxvkY4k6eMyF5keD7T2AWCi84ZJix%2BhXhKmyVZS1xkMTsflfgKjSIHDBihKwQ2Zupc3z11m1tP93OQ%2FXZwbJxlIPjK6yll0vEs0AN2%2B2sA7gV1NySmfure&X-Amz-Signature=34312370ce02101f13d0b62b49085b8cb91ad1b2230eea98b93da41091112b69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
