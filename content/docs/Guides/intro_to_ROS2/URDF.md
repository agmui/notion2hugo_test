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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUP6HJYK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEF%2FlCOtG2FXk1QlBBo7LZdTTedxcQWtzcSSCZgdww%2FgIhAODV8jLmbVqSeIsxYlewMZR6e%2F2zquuwcHs8S6tsX%2FlxKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVqfJfkDEqvEnTs1Qq3APcVHOq16EuStEUfPLVrajRS1Hrzdf5pTzAbaJKWIOCLGKB%2BEHb3AOKJWETCGAznoiFz4yrQaWAjP1NINjUIem%2FfRpP4%2Fvvuw99rNMozWpFV7bRwAj526oKKbIQ8ezEZ43ySngVvJtYsOrK54KRd%2FhSY79c8B90VWamlW9gjfOHcRnpVnUsESZB3XtmnlHaUSUGlBrcmxvX87Eesfh1GjBKfeXm7EcNXV4wxTAwW0iGlu2seCU8yNchLZkBP3MzyhWyWZdhq3jRZCYDVgLS91Ybiyik3ShW9rrotd%2FxfoQXEVUe6qSMZMs76ZhCfgnmdm5%2BR2MaCLJsYx80HSNwAod6sbTgX0qRSspPJ2qfWEvS7rg0g%2FMaErGbuUnU5Fp4pW09%2FGC%2F3%2Bu2rWEPjvrYC4fXuU00Q6bXFarYaYqJzQGvOOkWUM87hBWMSsGIctKeumvcemhGfHV4NlI7n2M%2Bnm4wQ4xbXYms1Gx3kdeh9TictkeZVNx6Ho0yBdF2cHTU2rdgMggxTeJH9TO0%2B7GnSDABSNFJ57F%2F0ZUNs9NlT408qbhwMMng3Rmk%2FtKlu2b0XkSCEMq2OC93R25tZtaqCRhOGb8viwBAvh2ing8J4XbvoJXGxH2V07gG1RrPFjDSjtPCBjqkAW4NX0wbkoMUXOiLqR6jy%2FIqf5DRXrap47tRF3wRU4HYDKtsaHUMJpViuGxB4AfDrRuDfFXikXv27o7X12QLZ6lTUj21%2F%2BD%2BrX9Le2J8cGSvzszCbhv3LpmG1CMe%2BoNjR69yLmLyca8beTy05KLAe3U6HdtGp5vzCSDhZZJ8LNdcTUvQv79eca8GNnomKpNE2VOVgAUFEXPIX5m1BvQFW9uoLkYX&X-Amz-Signature=551e30ac7e33c8f8391fa805a8400485be034a62801b5c4c0e0db7e0059fcd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUP6HJYK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEF%2FlCOtG2FXk1QlBBo7LZdTTedxcQWtzcSSCZgdww%2FgIhAODV8jLmbVqSeIsxYlewMZR6e%2F2zquuwcHs8S6tsX%2FlxKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVqfJfkDEqvEnTs1Qq3APcVHOq16EuStEUfPLVrajRS1Hrzdf5pTzAbaJKWIOCLGKB%2BEHb3AOKJWETCGAznoiFz4yrQaWAjP1NINjUIem%2FfRpP4%2Fvvuw99rNMozWpFV7bRwAj526oKKbIQ8ezEZ43ySngVvJtYsOrK54KRd%2FhSY79c8B90VWamlW9gjfOHcRnpVnUsESZB3XtmnlHaUSUGlBrcmxvX87Eesfh1GjBKfeXm7EcNXV4wxTAwW0iGlu2seCU8yNchLZkBP3MzyhWyWZdhq3jRZCYDVgLS91Ybiyik3ShW9rrotd%2FxfoQXEVUe6qSMZMs76ZhCfgnmdm5%2BR2MaCLJsYx80HSNwAod6sbTgX0qRSspPJ2qfWEvS7rg0g%2FMaErGbuUnU5Fp4pW09%2FGC%2F3%2Bu2rWEPjvrYC4fXuU00Q6bXFarYaYqJzQGvOOkWUM87hBWMSsGIctKeumvcemhGfHV4NlI7n2M%2Bnm4wQ4xbXYms1Gx3kdeh9TictkeZVNx6Ho0yBdF2cHTU2rdgMggxTeJH9TO0%2B7GnSDABSNFJ57F%2F0ZUNs9NlT408qbhwMMng3Rmk%2FtKlu2b0XkSCEMq2OC93R25tZtaqCRhOGb8viwBAvh2ing8J4XbvoJXGxH2V07gG1RrPFjDSjtPCBjqkAW4NX0wbkoMUXOiLqR6jy%2FIqf5DRXrap47tRF3wRU4HYDKtsaHUMJpViuGxB4AfDrRuDfFXikXv27o7X12QLZ6lTUj21%2F%2BD%2BrX9Le2J8cGSvzszCbhv3LpmG1CMe%2BoNjR69yLmLyca8beTy05KLAe3U6HdtGp5vzCSDhZZJ8LNdcTUvQv79eca8GNnomKpNE2VOVgAUFEXPIX5m1BvQFW9uoLkYX&X-Amz-Signature=5d2ed506ebe5ae747de1abc9251b15bd3c9a7af98a9dc14391f1aad1623060fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
