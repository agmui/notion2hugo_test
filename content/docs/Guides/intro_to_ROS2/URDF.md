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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUYOFCS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBooHwyjfVe04nopTCrgGi8zx%2FZfG29JrN9ySoK3xuwrAiEAkvDOtGyQp9rTFN3As%2FZw4AnVr7elxq9Q4Yw23IBbRtgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFI2cPj9gu6rq9LqircA6MA4A4xMBVSPvYR%2BjmAJPSoErI3nKK4U50Og1pLAmhMyKL8rgLqsr7%2BW%2B0QUMI3C4yPyrU6mNspFpDaZer7xF3MvRy0HZ0MjxYzsLs3cZOiALW%2B1g75035OWQKPKrv9I6VDDoIwGQH316N66JbA4mAM1gZuPrSiOPCn%2BQZXsi4C98D60ECmsU3s9iO%2FTD78bpt39%2B26XnE0TLlIOx6H5D6zo%2FgmBsWyBeR1RXRPmw3b6l1I6MYHl2Xf6xBqNp8oP%2F%2FDvsHT02hJO9AWodGbNICTdzs3i82VoW6QKeEFj%2BwQRHhGbvQYs8UBlpQvbCxusabrXpphfOHebcDZoxaHNBQ3ekb14577l1rcynmioTvxQaj6vHmr77PF9w3H9hVzIvxhMbodiUrk2pjvnjXk5S%2F89%2BUsrwELXJzimadC2v46LUqS34OX2zs%2FLMLkG%2FFUyDCxCVjg%2BVNetBwMe%2FR2MM3dvzbC5tyOgajPbKtPaWlC7rCDiB8pHfZdQC4GXik1KvfvBA5u%2FKhJc4OKTHMvWCf0QLW%2FvAe%2FhKF%2BJsakDtYfJuXbmbElEpkzUHgBmt%2BKaOG2J419k3EiazUlBvUmzWdDxsU3oKCa3HADJ7Zoin%2FKEvi1d5i%2BH5vKXVZuMLO5vL8GOqUBpT45drBUJPIeOiwgk0bc14O5kuHfLxuIozYRk7gVwhtRGZpja%2BqngH0sVO0tFoXTSjyZYWVjYNUKVAtvydTyT1QbdlTBiB9yEumLHoCbthMFC%2Bd7u116WbUNZTylvpqag%2Bb8ENUXSxr2Uar39Lyv9bDh4QoGnsQMwfwTygGFJRVMCJQpUOEenDxno7ArEPVxl0Sp2JYX5f4Txac3z%2BQ651JtHav7&X-Amz-Signature=b69fd058e69d59d979e1a63a1397c1854aadd83d9bb82bc08001ae941683ef4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUYOFCS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBooHwyjfVe04nopTCrgGi8zx%2FZfG29JrN9ySoK3xuwrAiEAkvDOtGyQp9rTFN3As%2FZw4AnVr7elxq9Q4Yw23IBbRtgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFI2cPj9gu6rq9LqircA6MA4A4xMBVSPvYR%2BjmAJPSoErI3nKK4U50Og1pLAmhMyKL8rgLqsr7%2BW%2B0QUMI3C4yPyrU6mNspFpDaZer7xF3MvRy0HZ0MjxYzsLs3cZOiALW%2B1g75035OWQKPKrv9I6VDDoIwGQH316N66JbA4mAM1gZuPrSiOPCn%2BQZXsi4C98D60ECmsU3s9iO%2FTD78bpt39%2B26XnE0TLlIOx6H5D6zo%2FgmBsWyBeR1RXRPmw3b6l1I6MYHl2Xf6xBqNp8oP%2F%2FDvsHT02hJO9AWodGbNICTdzs3i82VoW6QKeEFj%2BwQRHhGbvQYs8UBlpQvbCxusabrXpphfOHebcDZoxaHNBQ3ekb14577l1rcynmioTvxQaj6vHmr77PF9w3H9hVzIvxhMbodiUrk2pjvnjXk5S%2F89%2BUsrwELXJzimadC2v46LUqS34OX2zs%2FLMLkG%2FFUyDCxCVjg%2BVNetBwMe%2FR2MM3dvzbC5tyOgajPbKtPaWlC7rCDiB8pHfZdQC4GXik1KvfvBA5u%2FKhJc4OKTHMvWCf0QLW%2FvAe%2FhKF%2BJsakDtYfJuXbmbElEpkzUHgBmt%2BKaOG2J419k3EiazUlBvUmzWdDxsU3oKCa3HADJ7Zoin%2FKEvi1d5i%2BH5vKXVZuMLO5vL8GOqUBpT45drBUJPIeOiwgk0bc14O5kuHfLxuIozYRk7gVwhtRGZpja%2BqngH0sVO0tFoXTSjyZYWVjYNUKVAtvydTyT1QbdlTBiB9yEumLHoCbthMFC%2Bd7u116WbUNZTylvpqag%2Bb8ENUXSxr2Uar39Lyv9bDh4QoGnsQMwfwTygGFJRVMCJQpUOEenDxno7ArEPVxl0Sp2JYX5f4Txac3z%2BQ651JtHav7&X-Amz-Signature=3595823d64ff57593c1b5820f2a0625e77f0ee9f60d0d1cfa4bb23017ad2380a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
