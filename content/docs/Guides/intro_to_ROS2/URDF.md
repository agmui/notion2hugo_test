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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GFSTVD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLp9X9Ndd81ZIbcyutJoaayiNvEKbtI6HKLb2DkEWk0wIhAKICOQWw9XY5SJyT1XNdxWfO5K4jzHI4Q%2BUhFCx6J%2FQhKv8DCHwQABoMNjM3NDIzMTgzODA1IgxeRJ82YO3h1g9xTiAq3AMsGN7nbxBwbgOyA7XEMDH6U3Yo6D3O%2B1wtCMmlkFvYN4obZg64zersWTV1fP3t5AiDW9iyUicS7j5%2BSW9LfFZfJA7Vi3D7u6R0seEgpaIv7XYz9qiHttBXzA0zKXmzxhx2maO4tsVa0f4ZskB2bciP2N8GxaFxfQbRSqjo%2BwSHDcmKlXxa3wW4ArTIQPolT%2F%2F7HnU5J0C99pR4bpurqvQ4v7qJFNKyIm9EJqu2OewoW7efBGVp6joAFrkIZrd%2BjbRisWclOWkhiBFUJPyRcQTi4sivbdz9qdhgLFWg8yhKr4tU22v9d9z7jrnghUwlfPgcHXYIE2zEuyeAkLtg%2F%2BeAHXUmk5UVuKn7M8RZU%2BAoQjr8x0QxoSF2bsFox95ZFglajUAVTr4NUFQ0AtzZ3%2BHn%2FVUsv8VDA14g1HvQvKnXs3JeDtbm1KGXqvvgRHsYszSboSu8iG4%2FQWbZBP%2FSWirTw1BL3GK%2BzxbUjtuv6%2FNMeN4YEFUtyQKFDTFKFYeBcgfwnLDQHCCmYq%2FSwS4kgx8bb8UKGSGsLEmjCSZmFEUeXAf8K8GMUpkjbLwg2HGGsOXS7cquaU59245dFmVWBEF9HFd2soFUIzV3B%2BbPmV8P6pQzAZRnwatz%2ByBDuzC6yvvCBjqkAQ6LGKDXh70a%2FFZUvtPjgK%2BZHGuci7gdcK1eflnAF5ZZiq18296XqNyZYpEgDa81P52Vnu9kyCGLMNv9qtRzQFWG0tLY4i5rMojeUe%2FXiz2dMPjicwRjLWV%2BO5aZs93XJ%2B3zerPof29P84cBPPtkDCMaF7SCbISI8oYCYbHyHIQ6tHZJDkkO%2BNfMD0uV0qVfjCCR4eHLtxSORcrvopRR8vcNoxE5&X-Amz-Signature=88c787fce4d2d4535c29bf47f6ebcabdf69c68c1ae0b7cc18c78f47297ab191f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GFSTVD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLp9X9Ndd81ZIbcyutJoaayiNvEKbtI6HKLb2DkEWk0wIhAKICOQWw9XY5SJyT1XNdxWfO5K4jzHI4Q%2BUhFCx6J%2FQhKv8DCHwQABoMNjM3NDIzMTgzODA1IgxeRJ82YO3h1g9xTiAq3AMsGN7nbxBwbgOyA7XEMDH6U3Yo6D3O%2B1wtCMmlkFvYN4obZg64zersWTV1fP3t5AiDW9iyUicS7j5%2BSW9LfFZfJA7Vi3D7u6R0seEgpaIv7XYz9qiHttBXzA0zKXmzxhx2maO4tsVa0f4ZskB2bciP2N8GxaFxfQbRSqjo%2BwSHDcmKlXxa3wW4ArTIQPolT%2F%2F7HnU5J0C99pR4bpurqvQ4v7qJFNKyIm9EJqu2OewoW7efBGVp6joAFrkIZrd%2BjbRisWclOWkhiBFUJPyRcQTi4sivbdz9qdhgLFWg8yhKr4tU22v9d9z7jrnghUwlfPgcHXYIE2zEuyeAkLtg%2F%2BeAHXUmk5UVuKn7M8RZU%2BAoQjr8x0QxoSF2bsFox95ZFglajUAVTr4NUFQ0AtzZ3%2BHn%2FVUsv8VDA14g1HvQvKnXs3JeDtbm1KGXqvvgRHsYszSboSu8iG4%2FQWbZBP%2FSWirTw1BL3GK%2BzxbUjtuv6%2FNMeN4YEFUtyQKFDTFKFYeBcgfwnLDQHCCmYq%2FSwS4kgx8bb8UKGSGsLEmjCSZmFEUeXAf8K8GMUpkjbLwg2HGGsOXS7cquaU59245dFmVWBEF9HFd2soFUIzV3B%2BbPmV8P6pQzAZRnwatz%2ByBDuzC6yvvCBjqkAQ6LGKDXh70a%2FFZUvtPjgK%2BZHGuci7gdcK1eflnAF5ZZiq18296XqNyZYpEgDa81P52Vnu9kyCGLMNv9qtRzQFWG0tLY4i5rMojeUe%2FXiz2dMPjicwRjLWV%2BO5aZs93XJ%2B3zerPof29P84cBPPtkDCMaF7SCbISI8oYCYbHyHIQ6tHZJDkkO%2BNfMD0uV0qVfjCCR4eHLtxSORcrvopRR8vcNoxE5&X-Amz-Signature=bfb12d63b6e2c6b3950d201f94468f745b9a675df68304e16c8cba2aff3b6a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
