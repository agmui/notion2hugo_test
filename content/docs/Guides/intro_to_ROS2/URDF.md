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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RP64TSP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCK3e46%2FfNzhKqYYpfG0tMg5pXLqTAFheWbgWTsaWAuugIhAKsO6srFs1ULt4nIDkHpl1UtVU4sej%2FD6GiYMUtHv92FKv8DCGcQABoMNjM3NDIzMTgzODA1Igwdl49HVm8iyJkrOa4q3AMkGsxOiCmZzJqdqx%2BYgrxon%2FjcTvNCV0kkY8OVsThyA%2FECXsihHBKvtV37U0N%2BGmrfWMH8%2BF6HC22QKE85gUQPvips9irUR%2BBAUbc4eokjhEbU5UaXDZ9dcS0TCgfNsnc5RXzyCmVUPBmOx2ChlrXHYtBhRPMjrnsNCHXyoiOcwmDbW3TghqfXgdjBozFj5acGxxK1GO5Y9d%2F9zyaAGX0keXiZfIECcKVzJfzS5I7A7%2FoeFHNjT7us55VY8WZB7mSVeb3qfYWVDnyZQr2ZeBzsqgctKNU28udPTFskcIPvFUxs6fapH42v%2BweBKFM5l8GjBIoX68%2BUDrBt%2Bax%2Fxt%2FIOdndSR0WhmL60NdIaBuutXaUccHarg4mBP%2FQze%2FEr6wfHA3h%2B3OKqlRKX9KF7e0NIFT7q2m5gUlhf%2FiGpw4CYMiYEDCIVumATRIxXy4bz2QfUSBTiy7b4Msli4p1o3fG4%2B5b7gM96dnJgzJFIVWgcn7RgtH%2FFQMVZQ0tdAXRqS14mTu7fRVfptf95JKy9Eg4RfCJnNRp2mYxgbk%2FEYr9KxbNOn6HFuS544GmWSp6Rm6I%2FGaZRCRvExXww7HstE5L5yWDhopT71WSnIP%2FkQ8ZDTO1eYId2lj7TBvLazCH9fbCBjqkAV9lRifNm69broHqJT0lYtIVuW9AezZl31lcRXSxhGNGEfgQ0EVvDUwIPtW0Mvvqw8V90yVyw1QGrYteiQM67VV7eMGBPgcKlf74Ij1jgOo4zVR0ua6oFQXs5eS8xI9pdmomPD6pcC1ZJLlQdFaVbR%2FQMMv8Bc5NmLWOy5CqJwQBuV6nURGQdGJ%2FOyVhKiIVAfPRKTr%2FgqQejm0waHCQPO6B8%2F%2FY&X-Amz-Signature=0b2406550f0c32a367d31385e659b596cc02171caec65ec077d6e443289e07c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RP64TSP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCK3e46%2FfNzhKqYYpfG0tMg5pXLqTAFheWbgWTsaWAuugIhAKsO6srFs1ULt4nIDkHpl1UtVU4sej%2FD6GiYMUtHv92FKv8DCGcQABoMNjM3NDIzMTgzODA1Igwdl49HVm8iyJkrOa4q3AMkGsxOiCmZzJqdqx%2BYgrxon%2FjcTvNCV0kkY8OVsThyA%2FECXsihHBKvtV37U0N%2BGmrfWMH8%2BF6HC22QKE85gUQPvips9irUR%2BBAUbc4eokjhEbU5UaXDZ9dcS0TCgfNsnc5RXzyCmVUPBmOx2ChlrXHYtBhRPMjrnsNCHXyoiOcwmDbW3TghqfXgdjBozFj5acGxxK1GO5Y9d%2F9zyaAGX0keXiZfIECcKVzJfzS5I7A7%2FoeFHNjT7us55VY8WZB7mSVeb3qfYWVDnyZQr2ZeBzsqgctKNU28udPTFskcIPvFUxs6fapH42v%2BweBKFM5l8GjBIoX68%2BUDrBt%2Bax%2Fxt%2FIOdndSR0WhmL60NdIaBuutXaUccHarg4mBP%2FQze%2FEr6wfHA3h%2B3OKqlRKX9KF7e0NIFT7q2m5gUlhf%2FiGpw4CYMiYEDCIVumATRIxXy4bz2QfUSBTiy7b4Msli4p1o3fG4%2B5b7gM96dnJgzJFIVWgcn7RgtH%2FFQMVZQ0tdAXRqS14mTu7fRVfptf95JKy9Eg4RfCJnNRp2mYxgbk%2FEYr9KxbNOn6HFuS544GmWSp6Rm6I%2FGaZRCRvExXww7HstE5L5yWDhopT71WSnIP%2FkQ8ZDTO1eYId2lj7TBvLazCH9fbCBjqkAV9lRifNm69broHqJT0lYtIVuW9AezZl31lcRXSxhGNGEfgQ0EVvDUwIPtW0Mvvqw8V90yVyw1QGrYteiQM67VV7eMGBPgcKlf74Ij1jgOo4zVR0ua6oFQXs5eS8xI9pdmomPD6pcC1ZJLlQdFaVbR%2FQMMv8Bc5NmLWOy5CqJwQBuV6nURGQdGJ%2FOyVhKiIVAfPRKTr%2FgqQejm0waHCQPO6B8%2F%2FY&X-Amz-Signature=b722840eadf45f359f67ce635021248a9bda0a1216aaefc3cbfba76e155eafb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
