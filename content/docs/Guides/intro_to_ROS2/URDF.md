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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255DLVPC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBS7mu0XjhKdw8qsXZOztSo9CLTn3dYkb0t%2BW0ScHf26AiEAkJ%2BjakqBmNi0d4pfz7QKkqfZVozHA3qd5wpcuFn9ZiQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClmvmZuAi8O5Yw4zCrcA78J0X0DLCZduC68o8aORGF1BGiHCbW%2BR1UfPwYLw9ujptpzEiIp6QVe1Z8aW9suDlPzkVuWSZjds7wtPrqQpB8dzLbCDqJ%2BeBivblvz22Q540pKWMq3rHjOkuhyo5AdHsvnIxiJ3X8hV%2FFLVSGzXzFfpqVR9qvRYHfj31cfDJY20Uq8VMLfF16t7%2FP1rjqbDW2vR%2FzOx2kbPfv8cXFw07lhj1Y4a%2Bw7ZiWvLQX17BRmKdj%2B0NDuCUFP1pUExyXXj0AONIKM9EZGsPFeF%2F8D5gKIPXJBxrKr18Qb4X%2FWIMm1HGWFR0xGf0MLuYh6%2By%2BsRTbUBx5AJCAwKn4NwTpIjPBjxE%2BdTXRg8MlWbHDM355PhniDiRyLJ9MrAUnKKsZDDEMapZH99ZRTEQGbjfemjlpnEEJME8Z%2BOsaHl3TSKKeupu6DhK3ekjZGJLaWsVKmQx8kp8Rnzytvx4qOTbxctvGb0f3R4%2F%2FxpSpnFrtw5vQLpf5EEPaRwDeU9PjKLugQNB8pHnh6h3eFB6ODR8nTBfUUwdkkOP6mvmCLWjpCK4pok2AvT9DP1i%2BTrB4EdV4ONYyKdBzIuI7PJy17Mio%2BUCT8srGdtEHTVLaAXDS4lnjNJ5qEDzCY49JlXVzdMJ%2Fj%2B7wGOqUBPlsnw1DfjihEoR8F0LJmPwE8J7dnkib2kAz3bTPTXfW9gYKNgDSwgsbdcYDgWhf4kTZDNQX%2BYkX7IQzBhHLPouLtTTVIj0VLLGIvyUiWjTT6cLPFp9AVgeiiEXBoLvC1WnJ1%2FNSG9Ip4TRAPQc9ogp%2FF5aZI%2FkMyf5UR%2BmVP3OM6Kzv9jipDP%2FR7FEXPFUaf04wfB4G%2BI7praQMvRfbV5%2FgivQVM&X-Amz-Signature=eb21522016f4e38e090da1967f43455f0553c95628a68c4e5d643d11167656d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255DLVPC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBS7mu0XjhKdw8qsXZOztSo9CLTn3dYkb0t%2BW0ScHf26AiEAkJ%2BjakqBmNi0d4pfz7QKkqfZVozHA3qd5wpcuFn9ZiQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClmvmZuAi8O5Yw4zCrcA78J0X0DLCZduC68o8aORGF1BGiHCbW%2BR1UfPwYLw9ujptpzEiIp6QVe1Z8aW9suDlPzkVuWSZjds7wtPrqQpB8dzLbCDqJ%2BeBivblvz22Q540pKWMq3rHjOkuhyo5AdHsvnIxiJ3X8hV%2FFLVSGzXzFfpqVR9qvRYHfj31cfDJY20Uq8VMLfF16t7%2FP1rjqbDW2vR%2FzOx2kbPfv8cXFw07lhj1Y4a%2Bw7ZiWvLQX17BRmKdj%2B0NDuCUFP1pUExyXXj0AONIKM9EZGsPFeF%2F8D5gKIPXJBxrKr18Qb4X%2FWIMm1HGWFR0xGf0MLuYh6%2By%2BsRTbUBx5AJCAwKn4NwTpIjPBjxE%2BdTXRg8MlWbHDM355PhniDiRyLJ9MrAUnKKsZDDEMapZH99ZRTEQGbjfemjlpnEEJME8Z%2BOsaHl3TSKKeupu6DhK3ekjZGJLaWsVKmQx8kp8Rnzytvx4qOTbxctvGb0f3R4%2F%2FxpSpnFrtw5vQLpf5EEPaRwDeU9PjKLugQNB8pHnh6h3eFB6ODR8nTBfUUwdkkOP6mvmCLWjpCK4pok2AvT9DP1i%2BTrB4EdV4ONYyKdBzIuI7PJy17Mio%2BUCT8srGdtEHTVLaAXDS4lnjNJ5qEDzCY49JlXVzdMJ%2Fj%2B7wGOqUBPlsnw1DfjihEoR8F0LJmPwE8J7dnkib2kAz3bTPTXfW9gYKNgDSwgsbdcYDgWhf4kTZDNQX%2BYkX7IQzBhHLPouLtTTVIj0VLLGIvyUiWjTT6cLPFp9AVgeiiEXBoLvC1WnJ1%2FNSG9Ip4TRAPQc9ogp%2FF5aZI%2FkMyf5UR%2BmVP3OM6Kzv9jipDP%2FR7FEXPFUaf04wfB4G%2BI7praQMvRfbV5%2FgivQVM&X-Amz-Signature=3e4740042e8a63839f22496c0eb30d46c553a7de120c65aaf5c00c15c9932b95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
