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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUGB6R6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBagFP8OAbRGlSuZJizw19fQTd0YOFvnsvXHFfiq0hFOAiEAmGssnM55HjiRXnMgPe29HqVhLJw2lEKvuyDMdOZN%2F5wqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImZ9ByA44hqEAEncCrcAxwLpIg6c8fp6b%2FZ6hY%2B%2FDoPd1%2F3XFzN0QGvYI4uGTCgbwaSUIwKaljg%2BnjSLDZfH9%2FzuN7F6sb%2BFfAu0wcJqVq8Qc2X60Kk%2FM6bkp5zx6ALMGNOP2LdE8a%2B8xXSqaLPk9xL%2BH%2FuBvferBCb55pCCC8ca4vImAh9F%2FsWYbOwT2KJj03fD8zfVIrB0VI2aG3IMe7MxU%2F4aXJ3EeVb7jQ7pINaIrCeFOXI7VfZ91o9VfGqG1Nnuzz%2BvufZ%2BDJDfUbcYbPdj275Z9TQJRirNXSYMK5DzsKtVHVSDdmpItu0usQ9n43l24VR7FQE4fF3bSC0hlNr7aZEuP2OTWWZwIGwO8b%2FaESA%2BrDPsKuvM2aUYsB8RKOJ2KVQ5ekdgpp1Y%2BjSLDsb%2BXFlaJXJaoLcD7uszylR%2Fz9OO1uDzL%2FzzgJn2oiGvwSvyT6y%2F452kKWdfNM1YKu7eGpwfm6VEOpZ69jRR5zLQh6IvGEnYko3iRl0v%2FSEPavaPegMsXw6dwxVxV%2FJ3NSv%2FMofIxHHZh5xIy5R9%2BvRcnGy7X%2B5XgklOxHB5FiBadE9ssC8r7%2FbEiOrJ3rVtI%2FE4Z%2FF9Jyb2B5GxFhRSdyfAiU8%2BwYouhwQgi2lb%2FqIOuBZ3YQFmvxrYa9YMKCC%2BsEGOqUBWjvzbTMm5JyuzCX1YD%2FYq98u3wPkcbl0sxZanJl%2BmTQXj4XjPJBaAv22zD%2FqTDBLysSOxlfN04gaSCjHblBJNxxnuBvjzsaO4ZMuLVm%2FyMpI4MQEB0KtlRONQCFjAKZpsJJcqogTAtMifPKt82SKw3c8rX%2BRWwRC5t23USvoA%2BFtOBW7b1IkdGl3q4d7SMiug%2Bqg%2B1Hu8IXFIVRuJCFAvRUDHXpt&X-Amz-Signature=5401dd38b2ce0ad379d54dd15dfb6719e47d5786c89696de098d3a7fd7e33e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUGB6R6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBagFP8OAbRGlSuZJizw19fQTd0YOFvnsvXHFfiq0hFOAiEAmGssnM55HjiRXnMgPe29HqVhLJw2lEKvuyDMdOZN%2F5wqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImZ9ByA44hqEAEncCrcAxwLpIg6c8fp6b%2FZ6hY%2B%2FDoPd1%2F3XFzN0QGvYI4uGTCgbwaSUIwKaljg%2BnjSLDZfH9%2FzuN7F6sb%2BFfAu0wcJqVq8Qc2X60Kk%2FM6bkp5zx6ALMGNOP2LdE8a%2B8xXSqaLPk9xL%2BH%2FuBvferBCb55pCCC8ca4vImAh9F%2FsWYbOwT2KJj03fD8zfVIrB0VI2aG3IMe7MxU%2F4aXJ3EeVb7jQ7pINaIrCeFOXI7VfZ91o9VfGqG1Nnuzz%2BvufZ%2BDJDfUbcYbPdj275Z9TQJRirNXSYMK5DzsKtVHVSDdmpItu0usQ9n43l24VR7FQE4fF3bSC0hlNr7aZEuP2OTWWZwIGwO8b%2FaESA%2BrDPsKuvM2aUYsB8RKOJ2KVQ5ekdgpp1Y%2BjSLDsb%2BXFlaJXJaoLcD7uszylR%2Fz9OO1uDzL%2FzzgJn2oiGvwSvyT6y%2F452kKWdfNM1YKu7eGpwfm6VEOpZ69jRR5zLQh6IvGEnYko3iRl0v%2FSEPavaPegMsXw6dwxVxV%2FJ3NSv%2FMofIxHHZh5xIy5R9%2BvRcnGy7X%2B5XgklOxHB5FiBadE9ssC8r7%2FbEiOrJ3rVtI%2FE4Z%2FF9Jyb2B5GxFhRSdyfAiU8%2BwYouhwQgi2lb%2FqIOuBZ3YQFmvxrYa9YMKCC%2BsEGOqUBWjvzbTMm5JyuzCX1YD%2FYq98u3wPkcbl0sxZanJl%2BmTQXj4XjPJBaAv22zD%2FqTDBLysSOxlfN04gaSCjHblBJNxxnuBvjzsaO4ZMuLVm%2FyMpI4MQEB0KtlRONQCFjAKZpsJJcqogTAtMifPKt82SKw3c8rX%2BRWwRC5t23USvoA%2BFtOBW7b1IkdGl3q4d7SMiug%2Bqg%2B1Hu8IXFIVRuJCFAvRUDHXpt&X-Amz-Signature=4501b254be3e02a11ce3251899269564032df1f070cef5ba516021ee5511658f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
