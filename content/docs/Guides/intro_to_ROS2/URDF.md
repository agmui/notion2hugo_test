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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDMLW5U%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFItwzl%2BQzA7JPCs3Gge3PseHLMb7zEk95g8rtE%2BhRLhAiEAhabjMuTMRu8g7lY9VYDjCPPu8YZjFWgDS1v7QbXuhZsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhOKqEnGwUL7btp%2BSrcA01LJIYT56Jz2sAkGWxHsuo0Xic%2FOYoZM2C3LlvvnMGDY5%2FIASg%2BcsrwvLBe8qhgz4LRyJHLC2nrWmt9gZ9RQegMfXjdjqs6r4whkl6jeIXPKmZi%2BWxyEOtv1IJ3N5sQtZzM5FM7uDy7zHmh0cEv6vBF93cLWuqSNCqeueEVDzvqRKAWJFuNKAoMNBuhrNFCi4BMycV3rggBv9z1quswGKlvf%2Fq3SppxCQjRSRmuYhp8g%2BJf4r9pr1JJiLkpLpegnSGfmd8hEAA9mMvKBhW7AJyotxxd9G0JmSMidkPEyIK%2BdWe4zTiMYSkK8tobKvnKO0ImntBPYrvURjcm4VwpDh80mrJzYXWxl4EBnF%2B5imMoB%2BobJFjDYqRnTEt7rIeWJgb6FcnkuZTxC9N6uhGGPeuHNlfCK50oFolD9Gj68vquwiBspoqYoBjOdIC%2F%2F%2FO13%2FvaiJioIr%2BFPPu0yjOkzeUMRLIFiEI%2FfDzZ0PCFnDBjn1rDVkZpDZhoSCZdKFqjBrzuvGejCDJS38c%2BEeHZp3FfYcwor2yv%2FjZbst7McTvbOPtofPPWi3KzedCsmtafIq7ZGC2wU%2FsobiMSPFUGuL%2BEhnZF5KF8TuY1JnCOAfh6r%2BsdZcMJPXrDKodbMM%2B8270GOqUBalkSt%2FogQpFPLLYLlUJ6nJ%2FndSV3jubRAenKyww33i9BsVHTLfbmhardCldJkVDRXBkhUNkrnSz3IyeYbD5TmoKhzVW2qCadImxpbQejoQlRYafXHxIukHzjYlbY4fSX7ryZmBDVu1Vh7vIXOCGKq44SWWWjUsfoGwteBiwfGIpWur23kBeAi7DjGXXgRIAVsnWuyvTQHaxbG3o0Wh2aR5ZPPZPU&X-Amz-Signature=aa8c434b36b57e2c7f3d9b146ea228375f548bbb1c070b1b60628e2e5ff78ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDMLW5U%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFItwzl%2BQzA7JPCs3Gge3PseHLMb7zEk95g8rtE%2BhRLhAiEAhabjMuTMRu8g7lY9VYDjCPPu8YZjFWgDS1v7QbXuhZsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhOKqEnGwUL7btp%2BSrcA01LJIYT56Jz2sAkGWxHsuo0Xic%2FOYoZM2C3LlvvnMGDY5%2FIASg%2BcsrwvLBe8qhgz4LRyJHLC2nrWmt9gZ9RQegMfXjdjqs6r4whkl6jeIXPKmZi%2BWxyEOtv1IJ3N5sQtZzM5FM7uDy7zHmh0cEv6vBF93cLWuqSNCqeueEVDzvqRKAWJFuNKAoMNBuhrNFCi4BMycV3rggBv9z1quswGKlvf%2Fq3SppxCQjRSRmuYhp8g%2BJf4r9pr1JJiLkpLpegnSGfmd8hEAA9mMvKBhW7AJyotxxd9G0JmSMidkPEyIK%2BdWe4zTiMYSkK8tobKvnKO0ImntBPYrvURjcm4VwpDh80mrJzYXWxl4EBnF%2B5imMoB%2BobJFjDYqRnTEt7rIeWJgb6FcnkuZTxC9N6uhGGPeuHNlfCK50oFolD9Gj68vquwiBspoqYoBjOdIC%2F%2F%2FO13%2FvaiJioIr%2BFPPu0yjOkzeUMRLIFiEI%2FfDzZ0PCFnDBjn1rDVkZpDZhoSCZdKFqjBrzuvGejCDJS38c%2BEeHZp3FfYcwor2yv%2FjZbst7McTvbOPtofPPWi3KzedCsmtafIq7ZGC2wU%2FsobiMSPFUGuL%2BEhnZF5KF8TuY1JnCOAfh6r%2BsdZcMJPXrDKodbMM%2B8270GOqUBalkSt%2FogQpFPLLYLlUJ6nJ%2FndSV3jubRAenKyww33i9BsVHTLfbmhardCldJkVDRXBkhUNkrnSz3IyeYbD5TmoKhzVW2qCadImxpbQejoQlRYafXHxIukHzjYlbY4fSX7ryZmBDVu1Vh7vIXOCGKq44SWWWjUsfoGwteBiwfGIpWur23kBeAi7DjGXXgRIAVsnWuyvTQHaxbG3o0Wh2aR5ZPPZPU&X-Amz-Signature=c41ac81e681450065f6924b00199acca150082860977d19ebbe4dafd8d2695ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
