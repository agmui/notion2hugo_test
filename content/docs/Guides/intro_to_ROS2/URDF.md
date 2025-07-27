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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVBTLJG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFx3RzTPCSMxECaVthi%2FzespWuPfh0aTdcXnIi9Pn0TEAiAt1mpoiBYNB1P3Jw7zbMAueBxS9xYqz00sblRbP0LA9yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfk%2FEMDes7djHoz9BKtwDIZtm8%2FDJUWsgx08UP1d8%2FVJSnfxcG%2FMlhb1vcktitVws%2F8488%2BvGURfCw2QNz3rQhr3Pj7Uwrl%2FnZ8wqD9DHOurZYd9BD0iawlKnT1gAatSq4HTdAK1vcM9ejtBTtagZbd4ATuAQ7V6H8OPggZvTE8AaCjkqDjtZ9FBvejGLV1xjBCW83KYIebuFOkHkCFrxaOju6WYHSfm6eI7EubtbMvkmP3bEMC2KL%2FOZsMr3KKa2jcQ3o2hDE%2FmDiGuZVGay%2Bkr1T4AQZc1S9zlMC%2Fo5KW5rkF0tttPh2lzf4FOGjpHRuAzp6%2FLfYEVsalM2wTkVdqLyeM4%2BBQFMRVKj7CmNi23eI4E2Yg29ImIDV05zwrxfGOB4o3qe%2Br5O%2FoXItb52ApcxY60UZjIuLub7YRACl5nbNbdKqSju1N67ARmUIJ%2FnF5vJypBKJNcHU4crABfKL%2F6CfP3yoLXP6CpszUK2QjaY5DlrFI54%2BD89gywblbE87cKS3PrwJcQxnzXTKXGhFu5%2FW%2FDKhUKYIXRx9cifhuMic5MRgHGbu6IXH6FjkKypdAAAp10XMDTEFhIWiV%2FyGwu%2BA7E%2BoI%2BEg9WNYZFR7EP3QVMUgpxi308nRJQaLsOBNwkSNH%2BEiGt2sykw4bqWxAY6pgGq7nBu7ftB%2Fqe3ZETFdo0Dk2SkNahsGO2sQkJYXAor7vkJZlQ37WLSolZWH4UXRjOG4myAT4zfM1qVsgRU1ISdsHZJLmFM5gpXFQa%2BdE6cGRaapR4fCqEMbFI3L0qrfKQFRf%2BoGJ6%2FKvasYfkS8pG2kD7OWOtD%2BlseQnkRfeGukLOSw0c6ELW31wndw%2FxE0pF7TfNpWw9VCYx8nJDA1Jq%2BEcw40Q66&X-Amz-Signature=b6e657979439a4f19f2c4b3c46d04242cc03442f896eb4e6317f97ce565b98d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVBTLJG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFx3RzTPCSMxECaVthi%2FzespWuPfh0aTdcXnIi9Pn0TEAiAt1mpoiBYNB1P3Jw7zbMAueBxS9xYqz00sblRbP0LA9yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfk%2FEMDes7djHoz9BKtwDIZtm8%2FDJUWsgx08UP1d8%2FVJSnfxcG%2FMlhb1vcktitVws%2F8488%2BvGURfCw2QNz3rQhr3Pj7Uwrl%2FnZ8wqD9DHOurZYd9BD0iawlKnT1gAatSq4HTdAK1vcM9ejtBTtagZbd4ATuAQ7V6H8OPggZvTE8AaCjkqDjtZ9FBvejGLV1xjBCW83KYIebuFOkHkCFrxaOju6WYHSfm6eI7EubtbMvkmP3bEMC2KL%2FOZsMr3KKa2jcQ3o2hDE%2FmDiGuZVGay%2Bkr1T4AQZc1S9zlMC%2Fo5KW5rkF0tttPh2lzf4FOGjpHRuAzp6%2FLfYEVsalM2wTkVdqLyeM4%2BBQFMRVKj7CmNi23eI4E2Yg29ImIDV05zwrxfGOB4o3qe%2Br5O%2FoXItb52ApcxY60UZjIuLub7YRACl5nbNbdKqSju1N67ARmUIJ%2FnF5vJypBKJNcHU4crABfKL%2F6CfP3yoLXP6CpszUK2QjaY5DlrFI54%2BD89gywblbE87cKS3PrwJcQxnzXTKXGhFu5%2FW%2FDKhUKYIXRx9cifhuMic5MRgHGbu6IXH6FjkKypdAAAp10XMDTEFhIWiV%2FyGwu%2BA7E%2BoI%2BEg9WNYZFR7EP3QVMUgpxi308nRJQaLsOBNwkSNH%2BEiGt2sykw4bqWxAY6pgGq7nBu7ftB%2Fqe3ZETFdo0Dk2SkNahsGO2sQkJYXAor7vkJZlQ37WLSolZWH4UXRjOG4myAT4zfM1qVsgRU1ISdsHZJLmFM5gpXFQa%2BdE6cGRaapR4fCqEMbFI3L0qrfKQFRf%2BoGJ6%2FKvasYfkS8pG2kD7OWOtD%2BlseQnkRfeGukLOSw0c6ELW31wndw%2FxE0pF7TfNpWw9VCYx8nJDA1Jq%2BEcw40Q66&X-Amz-Signature=ab9134c7926a7b35edb847af4f80d01f91e7f6474244524972fa94e8520583ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
