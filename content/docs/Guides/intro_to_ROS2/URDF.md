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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7M7MLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC1YbQPTxuopPM0bKa%2ByDPvjmpZUsa8G3d57aUm9FgGvQIhAIRK7wNg5VqluFoXsgugLWwu7XMSF%2FCdvJjop9VUypXXKv8DCH8QABoMNjM3NDIzMTgzODA1IgxTFoPO%2BiAePVZ3Hdgq3APnMW6VFWRSbYFhJw9CLXbr2xg9nmufGtokii2ESsIhrAb88bs8yKhCwspNdnk%2FSn9ODvAnwcRw8526i2lZ%2BTmlx%2FpkTxayTHH72u1aRJcVWmKjFnwBjplkqyZit9uKweJvfqhgeM92m%2FyVGNiZLZJvtxNkoAikKcQX4PZbIqDBRXQC02qFuqBqgWDqRDb4nXAHNICcvK%2FwBa3ofR57QXCJn0psEmNDQ0Cg3LZYKVPVje%2FoZgltgxdGf3UZBByTp7PlhTRsmP0sfUDcto6gysPzj8baUce%2B4fkGe0mdp3gzIqdXZBz2M6n9HfS6EUaYPLjYDe9%2Fa%2FD%2FCK0J5Y%2FcIuwWGnWte%2F0LgsijPmPOp%2FgQ6RW5Lm4M9Nw5rkauw92rrHPp%2FhqqFrtqfGXVQgV1rGYuH5A96qQ%2Bcp4KYvMuoqDY5F8EbqyPxsAvvXxS29QPUAx0%2FT7liwcxLUD2wP%2FCUoZtBy0%2FvGt%2Bnu1o%2FVqbGViw2QLhsFaCNoQf4%2FenrkFsqJlgBkE2Yrf0yegr511r8Nt3AruTwD0gO3duA%2FHcvosJ7tXDhkCole0cQ3RLDxj2n%2BT2gCC0pS%2FcsDztKspKAEqCUejnto7dGOqXuQAWkOX1y%2BVUzMXcMU71FJc%2BfjDK6s69BjqkAQtG6RlTDxmS%2Bxglzak%2FHJj03Yf68rWauK1EvnAw2TbS%2FYOsQll0%2BGjvg7zbrRvfu9ktkeZbFheiH%2BbJX%2FBAf%2BWrzaSpgjjTQyTzqA2qodCUY4GjxA73RyFUjkGGI9wycMPivxX0LNd7EezJUvdMV4SVSJhh62EaxD7tIpPxus49vIfDeAED4BBvMz1Fd4pHcmIle7Itvdnw1InCrjvTOtSNwcR4&X-Amz-Signature=81a72f2a51011f33ab4c0e1d12426bab4b66612879828f7614577e2e70ddd0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7M7MLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC1YbQPTxuopPM0bKa%2ByDPvjmpZUsa8G3d57aUm9FgGvQIhAIRK7wNg5VqluFoXsgugLWwu7XMSF%2FCdvJjop9VUypXXKv8DCH8QABoMNjM3NDIzMTgzODA1IgxTFoPO%2BiAePVZ3Hdgq3APnMW6VFWRSbYFhJw9CLXbr2xg9nmufGtokii2ESsIhrAb88bs8yKhCwspNdnk%2FSn9ODvAnwcRw8526i2lZ%2BTmlx%2FpkTxayTHH72u1aRJcVWmKjFnwBjplkqyZit9uKweJvfqhgeM92m%2FyVGNiZLZJvtxNkoAikKcQX4PZbIqDBRXQC02qFuqBqgWDqRDb4nXAHNICcvK%2FwBa3ofR57QXCJn0psEmNDQ0Cg3LZYKVPVje%2FoZgltgxdGf3UZBByTp7PlhTRsmP0sfUDcto6gysPzj8baUce%2B4fkGe0mdp3gzIqdXZBz2M6n9HfS6EUaYPLjYDe9%2Fa%2FD%2FCK0J5Y%2FcIuwWGnWte%2F0LgsijPmPOp%2FgQ6RW5Lm4M9Nw5rkauw92rrHPp%2FhqqFrtqfGXVQgV1rGYuH5A96qQ%2Bcp4KYvMuoqDY5F8EbqyPxsAvvXxS29QPUAx0%2FT7liwcxLUD2wP%2FCUoZtBy0%2FvGt%2Bnu1o%2FVqbGViw2QLhsFaCNoQf4%2FenrkFsqJlgBkE2Yrf0yegr511r8Nt3AruTwD0gO3duA%2FHcvosJ7tXDhkCole0cQ3RLDxj2n%2BT2gCC0pS%2FcsDztKspKAEqCUejnto7dGOqXuQAWkOX1y%2BVUzMXcMU71FJc%2BfjDK6s69BjqkAQtG6RlTDxmS%2Bxglzak%2FHJj03Yf68rWauK1EvnAw2TbS%2FYOsQll0%2BGjvg7zbrRvfu9ktkeZbFheiH%2BbJX%2FBAf%2BWrzaSpgjjTQyTzqA2qodCUY4GjxA73RyFUjkGGI9wycMPivxX0LNd7EezJUvdMV4SVSJhh62EaxD7tIpPxus49vIfDeAED4BBvMz1Fd4pHcmIle7Itvdnw1InCrjvTOtSNwcR4&X-Amz-Signature=771092c1e72380039502691368632985b0c7b4bdbfb33b5dbe05b33b4febedbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
