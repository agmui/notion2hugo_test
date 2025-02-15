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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSFGJ4I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCZ0vMywplcILrpA8hcKUO8GpM0TZtb%2Fu9F1ENDWAofoAIgIfZuR3YDN7UHZ4cLbnuHDzqtc88GZd%2BSFB9sHHFakwQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDELa1v6UHdXP0AydKircA93GM9SBhpSl6OCKJ%2BM3nrTwKseA86xHGvhskL6zmGGDjgbrnYWkY%2FYBVpvx4fyrKdq%2BHR2wkMaBf7PkCHADQCI9TDQFlmIAqRfZLyCZUjwAWzb0PCUv%2Bu3ann38%2Bwj6yU0c3llMptEHOCcweeVHX5VDKqsoQnhOUIjzjAAmiUF9yewuLt4AskkTHo47jg9DJfLVvvMl6N49lDtk23vACMaE2MC10CX3pqa7YioyE8ltPCAeKgQ5FJVpjPbldifLQ%2BZgbBPPm%2FBd8d7%2BBd05DFJLH12WGWNfTtF2Lqod928hJuv2QB%2FJrn5M5rpQxGiDq%2FWW5EJ58B6UyiLY61BJXU%2Bh1Ms98sNim4aP715Xo6hwEOchBVeBKztpb%2B0uTp55Kif5e6JCRhhLFnPvzevxeG5dCqim77panRSvwgfIfDciOlM320RWwnQUriDCmbYeWazws5ixxogHcRvwRhsmDiVYIT5sxO1JRWPgwm2Kmzvlb7x3dh2vdIC1GGktqNjH%2FpdBWBHewnaODVvSDwmRCSY9pjqXtn%2BQBBf0%2Br%2BWj8NjcW%2Bb30cjz8EaYho9RPacVSVrIyfBNh953c6gNtDGTT0UjpR%2B6iI9tDhKyIg%2F32uyrZ1MV%2B0B0dEBdoVyMITGwr0GOqUBaZtGifg%2FXDdRy7%2BrMqQ1%2Ft%2FnPFxbfC9zwkW22VWz8VNl0YedCGDjx8o8busL4yWpas8ymxjXrDhXBOZFnNCGn0%2BXszfLsZFTJZ6TwPFOrrP98A3GWe0B2jZ7aSux%2F%2FRU8NuGVp1hqhkg9O8ZVq0DCUkHq3e3RiTbIMiV2i0yV5nKO0XUF8MFUC7dTEMZqPo4vT072FJmX9TLnu0PlR7InkJZ%2B3KT&X-Amz-Signature=bffb1674e6f2a45846575ecd6a1aeca1e995828e6b6e480ee83cc5c05b67545b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSFGJ4I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCZ0vMywplcILrpA8hcKUO8GpM0TZtb%2Fu9F1ENDWAofoAIgIfZuR3YDN7UHZ4cLbnuHDzqtc88GZd%2BSFB9sHHFakwQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDELa1v6UHdXP0AydKircA93GM9SBhpSl6OCKJ%2BM3nrTwKseA86xHGvhskL6zmGGDjgbrnYWkY%2FYBVpvx4fyrKdq%2BHR2wkMaBf7PkCHADQCI9TDQFlmIAqRfZLyCZUjwAWzb0PCUv%2Bu3ann38%2Bwj6yU0c3llMptEHOCcweeVHX5VDKqsoQnhOUIjzjAAmiUF9yewuLt4AskkTHo47jg9DJfLVvvMl6N49lDtk23vACMaE2MC10CX3pqa7YioyE8ltPCAeKgQ5FJVpjPbldifLQ%2BZgbBPPm%2FBd8d7%2BBd05DFJLH12WGWNfTtF2Lqod928hJuv2QB%2FJrn5M5rpQxGiDq%2FWW5EJ58B6UyiLY61BJXU%2Bh1Ms98sNim4aP715Xo6hwEOchBVeBKztpb%2B0uTp55Kif5e6JCRhhLFnPvzevxeG5dCqim77panRSvwgfIfDciOlM320RWwnQUriDCmbYeWazws5ixxogHcRvwRhsmDiVYIT5sxO1JRWPgwm2Kmzvlb7x3dh2vdIC1GGktqNjH%2FpdBWBHewnaODVvSDwmRCSY9pjqXtn%2BQBBf0%2Br%2BWj8NjcW%2Bb30cjz8EaYho9RPacVSVrIyfBNh953c6gNtDGTT0UjpR%2B6iI9tDhKyIg%2F32uyrZ1MV%2B0B0dEBdoVyMITGwr0GOqUBaZtGifg%2FXDdRy7%2BrMqQ1%2Ft%2FnPFxbfC9zwkW22VWz8VNl0YedCGDjx8o8busL4yWpas8ymxjXrDhXBOZFnNCGn0%2BXszfLsZFTJZ6TwPFOrrP98A3GWe0B2jZ7aSux%2F%2FRU8NuGVp1hqhkg9O8ZVq0DCUkHq3e3RiTbIMiV2i0yV5nKO0XUF8MFUC7dTEMZqPo4vT072FJmX9TLnu0PlR7InkJZ%2B3KT&X-Amz-Signature=607fe7c002525253462d9cd7dafd8314524790c776538c19453978e2431d587e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
