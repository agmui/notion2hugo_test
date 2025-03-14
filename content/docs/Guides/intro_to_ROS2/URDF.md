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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IGGAIRL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUY3dGm%2BKkC7Q5%2BR9npKeJrXvjsf1yCiPTYOz3Pev0fAiA7XnnVCFCqN0dPS27CL3FNkP%2BF2wG56rikOlXRROnygyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2FZA%2BwbhjWVnwRtOKtwDmjxdTqk3KhU%2Bhz8VRj0mTaxDalbqYAgEgLgPjxqBisRZYqVzbIYMGM21wYlaS3UpXnrXPq2Rn%2Fe%2B5E62mWtTNuWGyZEBp5kr2TdQV2DPwGSBZlPi3PCNrxwWlnIAH2wP2LRZxTo131txqd1%2F8YorULbeHqofiHMJ1kbMZBfNEIyH2WNIC1D5r3obUOKvyRj4iWtU3yhLu3uAOpLARSJ5empDqI1CpSfNWys1culfKldfcetatiB9pfalzOlXSx0VXMAXbEtNVKr%2BusHU%2BzUrq9m7Iws%2BJhYsDYhHJerkUBPXsrdarL8T4HGFTbBOocWHxPVNDvHC%2Bl9SfQzNH4tklhB1skhRiJ4waoDGFW3BhPVCA35r8dj8NlWYs0cpNkQa8uREGmJHSTMZF4NyNJa4YQw%2BdrU7HlVZoOHFMMradL0Z8sYERY6IHJ7zn%2FPwqyD1OJjmWQuEr6pTcPFsxE%2FGK3GxO359eL3gyTc1Gja14qzf5N%2FFGxaqjMVTJoYrNEUziPPYAMFG0nfo%2F0xPqZgpNo%2Ba%2FS44te%2Fpjm%2FGMUneh6Qw4c1StGQkwdx%2Fp%2FCbAqeSgv3O9Q66HscOgs629Q8LESCiqPXh%2FSIFYzRWCydj8jjyLlHN7E2uEOzGs0Qw8uvOvgY6pgE3y53ToAvMV11az4jGWrX2pPaIpIK4sqoAW3UIeoUQn86hbuqOn8uftuVITXbYuDRg1eMDGdNeh%2FTDEMpTAhK3k96na8FeNJ8ifFCoerchHe0xAquqLJl9mexK2uWksliOQYbCueTebQiabF4uMq2GtVpaZw59ORI89mm7%2Bi8kOeDodeFEBEpubg1V78Ulwhs96xuydy0rhafeD1X8w82frn5OSm1e&X-Amz-Signature=f8c4dad9cbdced09a1ef5a71fa8a5d6751ece4c6da63c85c3e15e6a97c7d2c25&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IGGAIRL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUY3dGm%2BKkC7Q5%2BR9npKeJrXvjsf1yCiPTYOz3Pev0fAiA7XnnVCFCqN0dPS27CL3FNkP%2BF2wG56rikOlXRROnygyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl%2FZA%2BwbhjWVnwRtOKtwDmjxdTqk3KhU%2Bhz8VRj0mTaxDalbqYAgEgLgPjxqBisRZYqVzbIYMGM21wYlaS3UpXnrXPq2Rn%2Fe%2B5E62mWtTNuWGyZEBp5kr2TdQV2DPwGSBZlPi3PCNrxwWlnIAH2wP2LRZxTo131txqd1%2F8YorULbeHqofiHMJ1kbMZBfNEIyH2WNIC1D5r3obUOKvyRj4iWtU3yhLu3uAOpLARSJ5empDqI1CpSfNWys1culfKldfcetatiB9pfalzOlXSx0VXMAXbEtNVKr%2BusHU%2BzUrq9m7Iws%2BJhYsDYhHJerkUBPXsrdarL8T4HGFTbBOocWHxPVNDvHC%2Bl9SfQzNH4tklhB1skhRiJ4waoDGFW3BhPVCA35r8dj8NlWYs0cpNkQa8uREGmJHSTMZF4NyNJa4YQw%2BdrU7HlVZoOHFMMradL0Z8sYERY6IHJ7zn%2FPwqyD1OJjmWQuEr6pTcPFsxE%2FGK3GxO359eL3gyTc1Gja14qzf5N%2FFGxaqjMVTJoYrNEUziPPYAMFG0nfo%2F0xPqZgpNo%2Ba%2FS44te%2Fpjm%2FGMUneh6Qw4c1StGQkwdx%2Fp%2FCbAqeSgv3O9Q66HscOgs629Q8LESCiqPXh%2FSIFYzRWCydj8jjyLlHN7E2uEOzGs0Qw8uvOvgY6pgE3y53ToAvMV11az4jGWrX2pPaIpIK4sqoAW3UIeoUQn86hbuqOn8uftuVITXbYuDRg1eMDGdNeh%2FTDEMpTAhK3k96na8FeNJ8ifFCoerchHe0xAquqLJl9mexK2uWksliOQYbCueTebQiabF4uMq2GtVpaZw59ORI89mm7%2Bi8kOeDodeFEBEpubg1V78Ulwhs96xuydy0rhafeD1X8w82frn5OSm1e&X-Amz-Signature=dd391c4fd7037fca8d2cda46dcca5f2fb006fb1dd42bb0e1aed0b168ffed4ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
