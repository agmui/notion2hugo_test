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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHSZP4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG%2BmAiEoH4LJRFAxsSOPMOtzlNDe9OXMlqvKfh6LzAWmAiB8adubpG52DX6huH5c7NaxOteCy3ml8e8Y7MrtZUDnuir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf5ce65%2FmHo89E6DIKtwDTf7cVGve%2BJSIBgw4OvOJ33omsAzhH1o54PsFmkhWiEMbED%2F9KJIt6xqgv2uVOfz5Ne%2FbtInDGxv1LXrx%2FgwB7QRZqBNVZTceR2NN%2FpjAIGG%2FPISDP6T6%2B7MPs%2F6Q5t9HhLHYlKp%2FhwUXEMvHx9qgAX93LTwPBAVLaUUJYsml41q5IFyq99OCW6Gwpjb7x3eWXT0J6tz3ew3JuYC7cNuCA2i9h7RnFpo%2BEUaGNQhfs%2Bss75giAAEmyVcjnoWonLq92GtFhKBNS87VuMCadCpDJtN7a5JmOTU3Qd6ds9Y07OXt6J3ChU6ct5FQfugLOVqf7ZX93ws8oyPfkppEShayVrQ3WT4M00gyTvWuaKVGWUcycP%2BDmrdCy%2B4h45EgRlwecgifpXheCRMh8Hcz%2BppDz9DPaU3Q1mD5W931HBP9fjSfZKvQI%2Btg94bP%2FTBaR0mhQSkuJEVXAN2m%2B1w5pX1dTCCh1PSfodYWJk9FSSWpg9aGusLVyDz4f5DcRNRgGDE4peKXqisEurduPGh0VDd3%2B0kMJfvz6Yq%2FkLcPTCee5SLRpB%2FP3On1EzBhiWZcVBrdrN3l4TIuF4F82vzm0xXOgOPba33MbcEd1Um%2BF%2FNf8kD%2FHtqs9%2BaTd%2Bhu73IwjrzrvgY6pgHhFmeoI1bLvIZsgSIr5Q2qIakb9ZEIcP19cMJUWgtHgAYtuoNNzT0BVKudvv7M4J71tFfu%2FO83SbVaicvCYuEqT05iqAf26QU0cWSPRGGQHaQFFAyxkdB8K%2F5pao%2F9RKKDZkuIIM3w7nGIba6UOZNBrfCr9k%2FKfIiCi%2BIJKxlIHi4YmhZufGdvvKseqXWDGZEAL2KHEbIqU1dQNIns4ppySsyYgmw%2F&X-Amz-Signature=afdb46d1307de97e4d1865342a654d50596332f9bc1496352a2a78e70f4ccfa5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHSZP4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG%2BmAiEoH4LJRFAxsSOPMOtzlNDe9OXMlqvKfh6LzAWmAiB8adubpG52DX6huH5c7NaxOteCy3ml8e8Y7MrtZUDnuir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf5ce65%2FmHo89E6DIKtwDTf7cVGve%2BJSIBgw4OvOJ33omsAzhH1o54PsFmkhWiEMbED%2F9KJIt6xqgv2uVOfz5Ne%2FbtInDGxv1LXrx%2FgwB7QRZqBNVZTceR2NN%2FpjAIGG%2FPISDP6T6%2B7MPs%2F6Q5t9HhLHYlKp%2FhwUXEMvHx9qgAX93LTwPBAVLaUUJYsml41q5IFyq99OCW6Gwpjb7x3eWXT0J6tz3ew3JuYC7cNuCA2i9h7RnFpo%2BEUaGNQhfs%2Bss75giAAEmyVcjnoWonLq92GtFhKBNS87VuMCadCpDJtN7a5JmOTU3Qd6ds9Y07OXt6J3ChU6ct5FQfugLOVqf7ZX93ws8oyPfkppEShayVrQ3WT4M00gyTvWuaKVGWUcycP%2BDmrdCy%2B4h45EgRlwecgifpXheCRMh8Hcz%2BppDz9DPaU3Q1mD5W931HBP9fjSfZKvQI%2Btg94bP%2FTBaR0mhQSkuJEVXAN2m%2B1w5pX1dTCCh1PSfodYWJk9FSSWpg9aGusLVyDz4f5DcRNRgGDE4peKXqisEurduPGh0VDd3%2B0kMJfvz6Yq%2FkLcPTCee5SLRpB%2FP3On1EzBhiWZcVBrdrN3l4TIuF4F82vzm0xXOgOPba33MbcEd1Um%2BF%2FNf8kD%2FHtqs9%2BaTd%2Bhu73IwjrzrvgY6pgHhFmeoI1bLvIZsgSIr5Q2qIakb9ZEIcP19cMJUWgtHgAYtuoNNzT0BVKudvv7M4J71tFfu%2FO83SbVaicvCYuEqT05iqAf26QU0cWSPRGGQHaQFFAyxkdB8K%2F5pao%2F9RKKDZkuIIM3w7nGIba6UOZNBrfCr9k%2FKfIiCi%2BIJKxlIHi4YmhZufGdvvKseqXWDGZEAL2KHEbIqU1dQNIns4ppySsyYgmw%2F&X-Amz-Signature=580a6c0b25b3de5193c13f002d7d3bc66355a5df4830e98754bfe3d0f5cede87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
