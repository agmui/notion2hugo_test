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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2NATUS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGhRh0T4OduMMrtWZuUNuTJfSg7Kv%2FOAEXeh4yhXCRoFAiEAwArwqRF5zW51WUt7jHyt0KyRtM9kztqByG5%2F5rpU7%2Bgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNGwTOdWvWQkpUcEYircA%2FgWc3xGOQtQp6xnuJVO6kirf%2FVjkjTV85fVr6KkALKlCW5DQbt2kr1rbmPD4hfxcNC2TClFvxc8FqAPU5kLbUwMjw%2F8IvDvPdgjMP%2FjJ0KyjW%2BDkgcHUqaNWpRhrCdFxhb5mWd5YjnNl59eepBCCsM7PmlOV0hmRrTXPhyqwV1a44BpejnQ1RE%2BHDEx%2F7K%2FLgCgAq4UXfQOhdmGnm2YgvLRSqhcetr%2B7o4FwATZPeicYaQxSIJBTJb1G75ubl9PISZSAuLmey3ugJIjIGBENav1ib8eYyIJSHoacJLx78Klpjdn5U2eqBM1F%2B1GIAkW7U8663mFdeLQJUgo1%2Bum5FzIM00dh63ZBrqkFEeH1i7hjbZWwGQ7ywoYUuQSov747CSI%2B%2FJI2PsSqoTFGUbV4ZpBnEWACIl%2BogVkWIfeFedbf4A%2Bxgbw9ZNL9k9kIcd%2BLYn%2FFUy4h7Ht7u%2FrrFiruTlb2zjQGauTpx7RQa1%2Fs5hsQHlFej3ZRG8bffQp2SUmUZ%2BoSw2ZQdMaaSl%2BNi9gkSCLJDTMHvjnCvbOdugv6MMHHBpB2AfAN3yAUi5Z5HgdoNfQ2VfrMcKGJtB4cGOmrwh9%2FDCl2I9y8nrxuqvE1s144z%2BRGL8PoetAORo8MOvUnb8GOqUBVDaQg37jEUUyZCOpnKGMCjH3u3v5mkYtZ%2BFEGDeBs7HjI11E5VD5aX%2B%2FJDah80EKM4nyXFGPSzGVZWtMsAf6AC9eMsYejs8iwYkpyd7oy0%2B10vsG2zHPxN%2BgTD8qGxYkpIUwAswKLOtmTEY%2Bk%2FaDOgPpSDe51tGouGRosvQkbAZ5Bi5lVjicVhYPZkm6%2FPvLfJVgXOfBj7dUsQ8xKaqv77Wv8MAZ&X-Amz-Signature=a61cfc8f277189e0e687c6c56b7f7e0ea6431f0f3946db8a448e2a9005485f72&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2NATUS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGhRh0T4OduMMrtWZuUNuTJfSg7Kv%2FOAEXeh4yhXCRoFAiEAwArwqRF5zW51WUt7jHyt0KyRtM9kztqByG5%2F5rpU7%2Bgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNGwTOdWvWQkpUcEYircA%2FgWc3xGOQtQp6xnuJVO6kirf%2FVjkjTV85fVr6KkALKlCW5DQbt2kr1rbmPD4hfxcNC2TClFvxc8FqAPU5kLbUwMjw%2F8IvDvPdgjMP%2FjJ0KyjW%2BDkgcHUqaNWpRhrCdFxhb5mWd5YjnNl59eepBCCsM7PmlOV0hmRrTXPhyqwV1a44BpejnQ1RE%2BHDEx%2F7K%2FLgCgAq4UXfQOhdmGnm2YgvLRSqhcetr%2B7o4FwATZPeicYaQxSIJBTJb1G75ubl9PISZSAuLmey3ugJIjIGBENav1ib8eYyIJSHoacJLx78Klpjdn5U2eqBM1F%2B1GIAkW7U8663mFdeLQJUgo1%2Bum5FzIM00dh63ZBrqkFEeH1i7hjbZWwGQ7ywoYUuQSov747CSI%2B%2FJI2PsSqoTFGUbV4ZpBnEWACIl%2BogVkWIfeFedbf4A%2Bxgbw9ZNL9k9kIcd%2BLYn%2FFUy4h7Ht7u%2FrrFiruTlb2zjQGauTpx7RQa1%2Fs5hsQHlFej3ZRG8bffQp2SUmUZ%2BoSw2ZQdMaaSl%2BNi9gkSCLJDTMHvjnCvbOdugv6MMHHBpB2AfAN3yAUi5Z5HgdoNfQ2VfrMcKGJtB4cGOmrwh9%2FDCl2I9y8nrxuqvE1s144z%2BRGL8PoetAORo8MOvUnb8GOqUBVDaQg37jEUUyZCOpnKGMCjH3u3v5mkYtZ%2BFEGDeBs7HjI11E5VD5aX%2B%2FJDah80EKM4nyXFGPSzGVZWtMsAf6AC9eMsYejs8iwYkpyd7oy0%2B10vsG2zHPxN%2BgTD8qGxYkpIUwAswKLOtmTEY%2Bk%2FaDOgPpSDe51tGouGRosvQkbAZ5Bi5lVjicVhYPZkm6%2FPvLfJVgXOfBj7dUsQ8xKaqv77Wv8MAZ&X-Amz-Signature=a118c9592b0a6f56ba99d0a93ddda1f0127387a494be473a7cea9d4e4276ca15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
