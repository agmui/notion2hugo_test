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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAKLRRD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDgy2ZgxCkhD9jlgD8zPZ9tVLYVfGT8LXs37bpeJqv3HgIgRVA%2FagZD0zkh509I%2FTf4DbtwvwMoUOmsS6SPfKc9FrAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFramB2IDm356UhkeSrcA9EN%2F8ctBdVz7NeJbnyQQ4MeShuY0vVjiSjHxSNuyqg4EfVEGycE4tYXoepT%2FbRktueiuq1xXfZfp5U25LocNHi9l2nY310fWJ7HdWWHmClpjv7xazMH56%2FU3MQCA2ixuAQRSyoBc5F2gx53JRq0YNuxic1t5ZZciN5qRKhmx2w6zybEZpcAsaXW8s8hTlJVyylBtGcwtdsRlKLM9a4zkAZwlDKxp8AtKFXS6QV62G57Q8Ju0gwgrfOgCFlLNrtCs70b9r4YuFa1U4LJNBZty6M4gs5ZulzeFudoKYjtdIJk00yTm4jhMkKwUPUeyXFmzBin6NVLgI3ErymU4vQjTiKcBwrDSIJVK65jBdmubRnH3xzodl26M3uhJKd7mDcGbE96v%2FuahvFvexLwv0MXjVdxl4TFLB7s077Nx9Ksc9mT4NqFjf2OZKndnSCitBjgu88Bs3x0C2qeHRqii7vqgKliSFbX%2B%2BxMQzywRFhpV7qw2DdjEWSjdP704AEBNqOJtKfiS1WjohUVruUDGCh8OkxE11fISwqYfVJdQ%2BnwC8QQe6nlhG3Yz0nXLED5DbPrR7BoseCoZcpvvcSOdENWnVgYxf%2BwBs1QCJ%2F9GtLgTSGqOQxrNTOgmekwaH25MMLr28AGOqUBYdLsVsOYNHUyNDw1E2VyiGhCH4o0yAM%2BdtWt20dNN7uW3RAJVNE%2F2uHh092grknD3iXZRGHb1IY1hQ4V%2Bhvjwt7okvEu59sCRnTEKCYnI3WUAGapqc671m90y1BYfqYMlYuP8PsBtdcoJaH%2Fgja%2BRAkl49uZwUorYfvhaJvV9ciWEHIY0TLnynnJgskldH6MvS17ruomFjfokxk8CCgfWrm%2F112h&X-Amz-Signature=09d5251d5e62c52a371a49bc8a588829bf28392c6055e798f46c12a4ccc7e176&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAKLRRD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDgy2ZgxCkhD9jlgD8zPZ9tVLYVfGT8LXs37bpeJqv3HgIgRVA%2FagZD0zkh509I%2FTf4DbtwvwMoUOmsS6SPfKc9FrAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFramB2IDm356UhkeSrcA9EN%2F8ctBdVz7NeJbnyQQ4MeShuY0vVjiSjHxSNuyqg4EfVEGycE4tYXoepT%2FbRktueiuq1xXfZfp5U25LocNHi9l2nY310fWJ7HdWWHmClpjv7xazMH56%2FU3MQCA2ixuAQRSyoBc5F2gx53JRq0YNuxic1t5ZZciN5qRKhmx2w6zybEZpcAsaXW8s8hTlJVyylBtGcwtdsRlKLM9a4zkAZwlDKxp8AtKFXS6QV62G57Q8Ju0gwgrfOgCFlLNrtCs70b9r4YuFa1U4LJNBZty6M4gs5ZulzeFudoKYjtdIJk00yTm4jhMkKwUPUeyXFmzBin6NVLgI3ErymU4vQjTiKcBwrDSIJVK65jBdmubRnH3xzodl26M3uhJKd7mDcGbE96v%2FuahvFvexLwv0MXjVdxl4TFLB7s077Nx9Ksc9mT4NqFjf2OZKndnSCitBjgu88Bs3x0C2qeHRqii7vqgKliSFbX%2B%2BxMQzywRFhpV7qw2DdjEWSjdP704AEBNqOJtKfiS1WjohUVruUDGCh8OkxE11fISwqYfVJdQ%2BnwC8QQe6nlhG3Yz0nXLED5DbPrR7BoseCoZcpvvcSOdENWnVgYxf%2BwBs1QCJ%2F9GtLgTSGqOQxrNTOgmekwaH25MMLr28AGOqUBYdLsVsOYNHUyNDw1E2VyiGhCH4o0yAM%2BdtWt20dNN7uW3RAJVNE%2F2uHh092grknD3iXZRGHb1IY1hQ4V%2Bhvjwt7okvEu59sCRnTEKCYnI3WUAGapqc671m90y1BYfqYMlYuP8PsBtdcoJaH%2Fgja%2BRAkl49uZwUorYfvhaJvV9ciWEHIY0TLnynnJgskldH6MvS17ruomFjfokxk8CCgfWrm%2F112h&X-Amz-Signature=ecaf3d4f714446ac2be3e199c3f9b949a7e96c208907a03933e6e568ef2816f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
