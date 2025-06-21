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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEY37DH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaQCi1eUDGKJHtqdGwmHdt2uKUyQVF2UO5lAMM5SGQxAiEAhMJKihZ6CqAC2%2B903ROjAqEQYem7gQKzYoSKOxGxXLAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwgXzQGZwAcvd9ocircAxJRLrofJhoQ96RNBCxGPweCMskciAdTT9ajibEVCiiVzuSxY25ueJ0Ml3RQvHQBSNfnqcJEd7b3d3%2FB91R727eOkn0y6jWXhXAYKsT8OgObrrTp8xGjrmbQHe1YeZv4SzPDWza20dMszBW92G1IctqL7K94eXsSbwaU8t5Gy%2BSc9BkmM2FzYqef%2F5xRcAUSGADqF0VWPZBvd25uiC1FEiJNMmZhtph%2BkMAK6X2nD8CQHgNuwNj7kDXRnJ9SxWMJhfKMPrnVYg0brOIsTZlJiq%2B9WT5DZ0TWkhpg5%2FfpHUP9y%2F1Xk2sB78Yax9eTPI3F1SgniJNuMxfQC%2BlCZchlMHgxMJFmfTIWEce32lH4XV6oXW%2FPC2MhE%2B%2BL9L%2Bb%2BSBDVa9agcKW3y%2B907TwyqHDi0HfXFUSfuEMjA%2BJTgXjZffGVE3tJUxD9wpORd2mu0CTJUyTfO%2F%2BJvctmETNGTSmlW0AJAgoQvJhh69xLMEv98D89dRsS5KO%2FNbcHLUMo17yvij1SYZ3VQxuVBKD7pE3UJ%2FhGwJrtlkuCJX%2BgwO5lh5XRdX4IgilHQguYZfFfLlljEF%2BLCVH574dITiUf2fRknIylGDfN8W%2FnkiWbB0qERglSeaMU6K35PaB3eDIMNmv2MIGOqUB1msKboICCL0HwpueX76wojSqRiezQhPtPAphC5oGMF%2BV7GbeT4%2FJgV73Vvdjj7lYl1kzCHc%2F6J8sBgoN0ax8exR%2BF94JIdnJvsW6vSN3jm8BJ3gSaV5MgZo1xekf%2F0jUaCEM4wdhV%2B5XzK00E2cpP6Yq2TlDLIQntjDZPGiFWciR9xVPrsuI9r4%2Bt9LY%2F%2BC2MCeo6csuKFR5LPOTsNso8Pfr8lia&X-Amz-Signature=49d548a8a573f2e9bbf20b469c9045ffb2b02912a85ebde1efa5c3e7793f61d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEY37DH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaQCi1eUDGKJHtqdGwmHdt2uKUyQVF2UO5lAMM5SGQxAiEAhMJKihZ6CqAC2%2B903ROjAqEQYem7gQKzYoSKOxGxXLAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwgXzQGZwAcvd9ocircAxJRLrofJhoQ96RNBCxGPweCMskciAdTT9ajibEVCiiVzuSxY25ueJ0Ml3RQvHQBSNfnqcJEd7b3d3%2FB91R727eOkn0y6jWXhXAYKsT8OgObrrTp8xGjrmbQHe1YeZv4SzPDWza20dMszBW92G1IctqL7K94eXsSbwaU8t5Gy%2BSc9BkmM2FzYqef%2F5xRcAUSGADqF0VWPZBvd25uiC1FEiJNMmZhtph%2BkMAK6X2nD8CQHgNuwNj7kDXRnJ9SxWMJhfKMPrnVYg0brOIsTZlJiq%2B9WT5DZ0TWkhpg5%2FfpHUP9y%2F1Xk2sB78Yax9eTPI3F1SgniJNuMxfQC%2BlCZchlMHgxMJFmfTIWEce32lH4XV6oXW%2FPC2MhE%2B%2BL9L%2Bb%2BSBDVa9agcKW3y%2B907TwyqHDi0HfXFUSfuEMjA%2BJTgXjZffGVE3tJUxD9wpORd2mu0CTJUyTfO%2F%2BJvctmETNGTSmlW0AJAgoQvJhh69xLMEv98D89dRsS5KO%2FNbcHLUMo17yvij1SYZ3VQxuVBKD7pE3UJ%2FhGwJrtlkuCJX%2BgwO5lh5XRdX4IgilHQguYZfFfLlljEF%2BLCVH574dITiUf2fRknIylGDfN8W%2FnkiWbB0qERglSeaMU6K35PaB3eDIMNmv2MIGOqUB1msKboICCL0HwpueX76wojSqRiezQhPtPAphC5oGMF%2BV7GbeT4%2FJgV73Vvdjj7lYl1kzCHc%2F6J8sBgoN0ax8exR%2BF94JIdnJvsW6vSN3jm8BJ3gSaV5MgZo1xekf%2F0jUaCEM4wdhV%2B5XzK00E2cpP6Yq2TlDLIQntjDZPGiFWciR9xVPrsuI9r4%2Bt9LY%2F%2BC2MCeo6csuKFR5LPOTsNso8Pfr8lia&X-Amz-Signature=d3b93e15880f23ee08a6600e52ecde2346c79029b4d3363a654ae7a375b4e85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
