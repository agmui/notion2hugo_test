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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARANNTH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCOIpFhPY0zyQeRK%2B%2B5L3oW%2FE%2Fh2EAJv7gDFFbpp9VJKAIgG%2BoY0okbJTvjpdQMmQDxWNWzdD9jHKfTj6EW3n9FwEMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrOYSNCi9ng%2FwTRRircA8aw%2FwPcLFceSxIUSFSxx6Np0eubXU6VRgqpy8o9CClX5EIWtWWEPuy0NEeB0mmtfl5rtvr2hpVy2Ci6Dv5HeiBO0dHspgTkYDGomf4npvs6lkrTIio4A2p4zJGAEgzuJQlBcXv1mYgumGSm96WHcn%2Fez%2BAzGVQEFTt0ZpW9Fd9B%2BGpGZS2v0lYqoCPCpVBIjh%2BTBWVSWxX4b281OlilLMz162qRIcLzPuWRQ%2Fj56n6lSQw1kvzCLzMW7%2F3tyPd5rjBzhJRGc3C8%2F3g2N4JYNKgD4T7zPQemaSYJqivVLuLYKucwalfh0WTl26lYifzwe9KvCMOthEg4kxzhyq4Xxcq2UNUcrtRywQAg7s3NoJ7bjimocnLb6P5UyxVsnUXmouczpjv7dOocLfhUDs%2B5dZ9zIS%2BKI5mNjR7lVjmI1VU9U3%2BGRNkX%2FKwmzy96vhIEiXhRKOs%2F1IIuioQ2lEQqeg6hjbbqdWuEQR7I3S3i5oSzOg6RQtBDz2hHgS6oLDNbQKDyQ968BMdwS7ESmKOdd8N4h%2BUI3kTs74lB8u8rXoh7Q6p%2FPUXhMyd32e97vn5QDwF7LWUzpgSFFk8C8t5YnvcXVlbzebuLrH8MmStyUNzN4KtVnJ8DvruQ9YeMMOLMpsAGOqUBRzLjTA%2Fy3aFTTcvE9Xnl%2FqVpqQBoCR%2FGM8wZ4mcyt%2BEHHj9ifI6hJs6ucRZ0i47Cz5QENwJsIiz%2BzBkKg3ziQ3NmRY3wJU%2BDuKYbovU4kcPHG4jzGfH0%2B1QxphGSEMJkppf9z6cJ8u%2BcsYrv6SmS3k6E%2B56EmXbavHIlzgQdJLQXL1hrKAqzywhIAR7GZlRRELkue3H2aNWOl5kegW9Na5fSyiSX&X-Amz-Signature=5d573f998bbb93fa10bac38dd391b3968517ea3630579631b6156a024e757de0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARANNTH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCOIpFhPY0zyQeRK%2B%2B5L3oW%2FE%2Fh2EAJv7gDFFbpp9VJKAIgG%2BoY0okbJTvjpdQMmQDxWNWzdD9jHKfTj6EW3n9FwEMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrOYSNCi9ng%2FwTRRircA8aw%2FwPcLFceSxIUSFSxx6Np0eubXU6VRgqpy8o9CClX5EIWtWWEPuy0NEeB0mmtfl5rtvr2hpVy2Ci6Dv5HeiBO0dHspgTkYDGomf4npvs6lkrTIio4A2p4zJGAEgzuJQlBcXv1mYgumGSm96WHcn%2Fez%2BAzGVQEFTt0ZpW9Fd9B%2BGpGZS2v0lYqoCPCpVBIjh%2BTBWVSWxX4b281OlilLMz162qRIcLzPuWRQ%2Fj56n6lSQw1kvzCLzMW7%2F3tyPd5rjBzhJRGc3C8%2F3g2N4JYNKgD4T7zPQemaSYJqivVLuLYKucwalfh0WTl26lYifzwe9KvCMOthEg4kxzhyq4Xxcq2UNUcrtRywQAg7s3NoJ7bjimocnLb6P5UyxVsnUXmouczpjv7dOocLfhUDs%2B5dZ9zIS%2BKI5mNjR7lVjmI1VU9U3%2BGRNkX%2FKwmzy96vhIEiXhRKOs%2F1IIuioQ2lEQqeg6hjbbqdWuEQR7I3S3i5oSzOg6RQtBDz2hHgS6oLDNbQKDyQ968BMdwS7ESmKOdd8N4h%2BUI3kTs74lB8u8rXoh7Q6p%2FPUXhMyd32e97vn5QDwF7LWUzpgSFFk8C8t5YnvcXVlbzebuLrH8MmStyUNzN4KtVnJ8DvruQ9YeMMOLMpsAGOqUBRzLjTA%2Fy3aFTTcvE9Xnl%2FqVpqQBoCR%2FGM8wZ4mcyt%2BEHHj9ifI6hJs6ucRZ0i47Cz5QENwJsIiz%2BzBkKg3ziQ3NmRY3wJU%2BDuKYbovU4kcPHG4jzGfH0%2B1QxphGSEMJkppf9z6cJ8u%2BcsYrv6SmS3k6E%2B56EmXbavHIlzgQdJLQXL1hrKAqzywhIAR7GZlRRELkue3H2aNWOl5kegW9Na5fSyiSX&X-Amz-Signature=513c0f92f6bfb9473075c44e325c883b9347ab07dc448d0e9eef2995f4d988f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
