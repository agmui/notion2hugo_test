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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5T3IO5N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE1g6ReX1Bsc%2F32USOKtVp0WPPykGaRyVQVti9fB2q%2BwAiEAjq0ykdG8KNwZbmEcehqudzzRpEfKlWTJuXJJ%2BHuPVPYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BlHu0SZ596pzLb8CrcA%2BDLWjr7ffi9QQooAYid6o2HogqwVcPhq6QDWRan9w4W1lmP38vRppWqFxd%2Fl89rCjTVy1acMtGw5KKRVkj0wd7WV8kJua7I%2FrJJIKoQ8jTTxO8M8LDxGOp4fyihSfgo54Bgcq2SIdH2VTIe%2BYxpWi%2BQCv9OTb8p4QQ2HtDA8WN0uT8w4tK%2BgWQkXI8iW4EcgHTv0ZAUDfG2ImQQa6mnTkSA2LLTUfeXMOlf4yQx50MH36yygWZh0nbb3F3Nocwr3okOS8zAUMzbOVI%2FH5yOgKHYyzvFdkG3q3iHw13bJXCcVOWCWRZpvNHuIPcX5Ulnd9RGcqgQ4ElhmLL%2Bypa1SWs0jHFD0dkVNxPKVhBDKjYNGEKvMeYaTZbWTVQkChvrGZLZJu81DCaDKEvMaOnwV%2BQjqyBFCIJZlfuLAJgI6FyhSrNqq%2BKXlRKk0POmpLrPtFpr8hWgJx7Kel6v8edmihWSYa0dyVrHP7nVn5F0OdN2Nj6rA9gECXoVGmJ3XirpM44QO4OVaJ8hWliZXNo%2BCZAjCbdiM4Ir%2BuGMV%2BrmfKvVBwkPkE%2Ba3SnftGqX6gKTbZVPoq3TSL5zZYCmPYDko%2FuySgxNneDywfPFaxnIYNH0kZNjp6d2z%2FCggZ6YMLuut78GOqUBvCkNbKkzvBW0IuGf6e%2B%2FOHCPqNvEkA2Mke3gemBDeSPSABnKmvOBJ2zhoQhfyFpt3xzB05rwY4gWxq%2Fls1fE6lM5C0z%2B2vQl2pjiVEs6Bg3jvd8qK%2BJiMVt1qwar0MZi26lQcM1gj3zV1HQiVTSNuhL5P%2BmdFT%2F6rEPUkTUyPmblBxRJxi%2BEVY658n49c1Wyd0rl8gz41CUz7l64oEV2fKtIFy%2F6&X-Amz-Signature=1eeaf01c1a5ff6946e6d7d43cbd95846a0f76b8e039ba2c98c3b07254ef7864a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5T3IO5N%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE1g6ReX1Bsc%2F32USOKtVp0WPPykGaRyVQVti9fB2q%2BwAiEAjq0ykdG8KNwZbmEcehqudzzRpEfKlWTJuXJJ%2BHuPVPYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BlHu0SZ596pzLb8CrcA%2BDLWjr7ffi9QQooAYid6o2HogqwVcPhq6QDWRan9w4W1lmP38vRppWqFxd%2Fl89rCjTVy1acMtGw5KKRVkj0wd7WV8kJua7I%2FrJJIKoQ8jTTxO8M8LDxGOp4fyihSfgo54Bgcq2SIdH2VTIe%2BYxpWi%2BQCv9OTb8p4QQ2HtDA8WN0uT8w4tK%2BgWQkXI8iW4EcgHTv0ZAUDfG2ImQQa6mnTkSA2LLTUfeXMOlf4yQx50MH36yygWZh0nbb3F3Nocwr3okOS8zAUMzbOVI%2FH5yOgKHYyzvFdkG3q3iHw13bJXCcVOWCWRZpvNHuIPcX5Ulnd9RGcqgQ4ElhmLL%2Bypa1SWs0jHFD0dkVNxPKVhBDKjYNGEKvMeYaTZbWTVQkChvrGZLZJu81DCaDKEvMaOnwV%2BQjqyBFCIJZlfuLAJgI6FyhSrNqq%2BKXlRKk0POmpLrPtFpr8hWgJx7Kel6v8edmihWSYa0dyVrHP7nVn5F0OdN2Nj6rA9gECXoVGmJ3XirpM44QO4OVaJ8hWliZXNo%2BCZAjCbdiM4Ir%2BuGMV%2BrmfKvVBwkPkE%2Ba3SnftGqX6gKTbZVPoq3TSL5zZYCmPYDko%2FuySgxNneDywfPFaxnIYNH0kZNjp6d2z%2FCggZ6YMLuut78GOqUBvCkNbKkzvBW0IuGf6e%2B%2FOHCPqNvEkA2Mke3gemBDeSPSABnKmvOBJ2zhoQhfyFpt3xzB05rwY4gWxq%2Fls1fE6lM5C0z%2B2vQl2pjiVEs6Bg3jvd8qK%2BJiMVt1qwar0MZi26lQcM1gj3zV1HQiVTSNuhL5P%2BmdFT%2F6rEPUkTUyPmblBxRJxi%2BEVY658n49c1Wyd0rl8gz41CUz7l64oEV2fKtIFy%2F6&X-Amz-Signature=39bf3e68b706109057d23c2699d71d3e25a497ba122acddbe3ed807a32ee851e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
