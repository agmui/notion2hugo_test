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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENMRNWA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbI2xcbcZrKh3YqH%2FajpMhVkGY9YMGSBXwHKY%2F%2F3qZcwIgOUJXLQlpAraQY%2BQevbkAu3xmKhEme0pZfYQJuE8bwtAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCisq1p5g9wIEEgQhCrcAycIjdPtQLZCE78ODtOKXqZ6E6YKfGZJthIRhOO8AztUn42FBe6KVfMKSqfOu0VWMMEIg6E2iXf2MqGq4V099926A1rngDAAUivGNRb8DbKN9OqyMLJjy9OaRYvZYAoZyr4pOPyiHvNhoFtuJ46%2FfFUr2WKZYwEEBo1D5nP8JI3AnGLxoCNBVXM3hywzWb7ifByvHLLECckuAIHsSzhS8OQzNTxSZUr6HHlksIVoUtVbr4GYh9k%2BpgptG1qcob2t7yDDwOq2kYyRGoX%2FGpXrK%2FGwfXO1heYtG5EJ04bWQGbL%2BcSbGrvpEo9hbvGZwRBxORgj9lS4K4T%2FYq9FXgh7aZchvgQI%2Bz%2FPmR%2Fj6BfdL66HqCPCdE%2F0xRQeL%2B2iH9Vcp%2FvMD9S5FfOQUseBnUV3Jrai2m%2Frj7N2hOleVHW%2BEuig47YfzsFl%2B7K8cFmpVBJ9D4Hew%2B14ZbZpm223MxU7TFfDvaBaxn67WzlwVQBPMFBtBOzvdpxFNkZjiX%2B9b40d2nf4ZEdW6GPRm96mUVx6SwXAVsvbI17cytnZuEQwrJapxTqwPG2%2BsciQmajwDKb1IqaDtiCmyxKx5YixpZwyk7qA3coeyqDr5dj%2F5vlWMzpdARnXGOHS8u019jcuMP2m9rwGOqUBRZkbicjXmFqB2cj7OabeV%2BbuoLFZ0qmKurMpzoh0um7m3fKV%2ByiRus%2Fgq0FjIWTruv%2BXEAtAkhirZ1DmbTHOTFitp4pHInisEKJwxYjmC1RhOUDVEFYf0YkuaFRyrikRj4weN%2FaihH5qai4khyEkGqKL6mmUvRCJ4kPjONnCdq8UUhjZ0W4wQuAZq5DxqFmkK1IZksW3j4OMAfYb%2BhFceqTyC4je&X-Amz-Signature=2711a5f38364daa9783e213220729373522cf92b8525b2e2c42d518f86a4a7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENMRNWA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbI2xcbcZrKh3YqH%2FajpMhVkGY9YMGSBXwHKY%2F%2F3qZcwIgOUJXLQlpAraQY%2BQevbkAu3xmKhEme0pZfYQJuE8bwtAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCisq1p5g9wIEEgQhCrcAycIjdPtQLZCE78ODtOKXqZ6E6YKfGZJthIRhOO8AztUn42FBe6KVfMKSqfOu0VWMMEIg6E2iXf2MqGq4V099926A1rngDAAUivGNRb8DbKN9OqyMLJjy9OaRYvZYAoZyr4pOPyiHvNhoFtuJ46%2FfFUr2WKZYwEEBo1D5nP8JI3AnGLxoCNBVXM3hywzWb7ifByvHLLECckuAIHsSzhS8OQzNTxSZUr6HHlksIVoUtVbr4GYh9k%2BpgptG1qcob2t7yDDwOq2kYyRGoX%2FGpXrK%2FGwfXO1heYtG5EJ04bWQGbL%2BcSbGrvpEo9hbvGZwRBxORgj9lS4K4T%2FYq9FXgh7aZchvgQI%2Bz%2FPmR%2Fj6BfdL66HqCPCdE%2F0xRQeL%2B2iH9Vcp%2FvMD9S5FfOQUseBnUV3Jrai2m%2Frj7N2hOleVHW%2BEuig47YfzsFl%2B7K8cFmpVBJ9D4Hew%2B14ZbZpm223MxU7TFfDvaBaxn67WzlwVQBPMFBtBOzvdpxFNkZjiX%2B9b40d2nf4ZEdW6GPRm96mUVx6SwXAVsvbI17cytnZuEQwrJapxTqwPG2%2BsciQmajwDKb1IqaDtiCmyxKx5YixpZwyk7qA3coeyqDr5dj%2F5vlWMzpdARnXGOHS8u019jcuMP2m9rwGOqUBRZkbicjXmFqB2cj7OabeV%2BbuoLFZ0qmKurMpzoh0um7m3fKV%2ByiRus%2Fgq0FjIWTruv%2BXEAtAkhirZ1DmbTHOTFitp4pHInisEKJwxYjmC1RhOUDVEFYf0YkuaFRyrikRj4weN%2FaihH5qai4khyEkGqKL6mmUvRCJ4kPjONnCdq8UUhjZ0W4wQuAZq5DxqFmkK1IZksW3j4OMAfYb%2BhFceqTyC4je&X-Amz-Signature=58962038e65aff40e36eb0112d47d06d425a80101ac47433736950164320e66b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
