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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPWC5TH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIb%2FLfR0JcqkyzYUrC0%2Fwbjo7pUdrH43vmL5Wuq0djGgIgPcS%2FXdXTOHdWyj8NSAANnDPLq7eDHNAsbIGRy%2FR%2Fv3EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy6J9vmzVAMEr3nESrcA4Tyb5DxfPDq1InKZ0%2Bu2lhcJDyts%2FzZtPwgMPRckVE%2B%2BPynugx9Dyd1cpJe2EUcgzyOhJo17d9otSkDDqRTVyxXJtJJFVO7uglbAnYBiAzB6F7j2RUIfWFQUlBqDdCKZ7jcAysuXBxCVo%2B86DZbmM3U3yNYfbrq1JexES%2FZnYTGbbGxRC90G%2FAHhjapahMOvoNAiM9xlZDl5aX27BRxeQLTpVk3%2FWdk2Sx3kaWydEDE1znixk%2BssMY%2Bv8Jb6VXYD%2FKVr7AzW61I%2BaCtaV30rtw%2FNz5qbvNm7VboSvvksh%2BTNTPyrbb%2BI0ZBGCSXpFul1culgZQI6jD7u7D1QGmHQkF3FfTLZnNv1XbjyNRQ5fgHSqmtxGlt6BCdyj7fe2w4rJeLplk%2BXE9HzxEo5lojsaruhv7XNHCY9DFWitgPsDR2QJb16032VuFXModpfqGQ%2BwX591FnmEexKItGmRsqOrzAOS0I0YTR7SP4C3VKJQruuGnEImyyhCMyi%2FTP2nvZdSequ%2Bxwk2DudYitD4gCU0GsfEl2T20mdko2U1bOZUbQ%2FBvF6CJjCDzwa3VmpjDgB9RAnPQzK5QE2IoHH7ChVPT1lxh4DwejZk0U0SNycXKfc45uFRJfuedObEoEMOTjssEGOqUBn6EL7H5nvpGTnH%2BMJHzDeQcT1dEp97RAUNyMZc%2Bv9zKAF%2B1SbIgDguJzYGzE9ogNznLffGxTL5mZEU8e%2BTKyuvcbG3zFj3rvXJISbZ6qjuX0m66D6yYROJuncBGHA5RF1djmLOZfW01q%2FyjUWOU2gQfSJcsCUpoPAOwx0GA61S10APtKJrCbv47yCLsPMQWP15cnTZLr7q%2F8Tl8ZSq5ZO1DBs1xt&X-Amz-Signature=3bd5402b2da84433bff18924ccacacb5e7ad87fd007367415e2df4d5d0c8fcd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPWC5TH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIb%2FLfR0JcqkyzYUrC0%2Fwbjo7pUdrH43vmL5Wuq0djGgIgPcS%2FXdXTOHdWyj8NSAANnDPLq7eDHNAsbIGRy%2FR%2Fv3EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy6J9vmzVAMEr3nESrcA4Tyb5DxfPDq1InKZ0%2Bu2lhcJDyts%2FzZtPwgMPRckVE%2B%2BPynugx9Dyd1cpJe2EUcgzyOhJo17d9otSkDDqRTVyxXJtJJFVO7uglbAnYBiAzB6F7j2RUIfWFQUlBqDdCKZ7jcAysuXBxCVo%2B86DZbmM3U3yNYfbrq1JexES%2FZnYTGbbGxRC90G%2FAHhjapahMOvoNAiM9xlZDl5aX27BRxeQLTpVk3%2FWdk2Sx3kaWydEDE1znixk%2BssMY%2Bv8Jb6VXYD%2FKVr7AzW61I%2BaCtaV30rtw%2FNz5qbvNm7VboSvvksh%2BTNTPyrbb%2BI0ZBGCSXpFul1culgZQI6jD7u7D1QGmHQkF3FfTLZnNv1XbjyNRQ5fgHSqmtxGlt6BCdyj7fe2w4rJeLplk%2BXE9HzxEo5lojsaruhv7XNHCY9DFWitgPsDR2QJb16032VuFXModpfqGQ%2BwX591FnmEexKItGmRsqOrzAOS0I0YTR7SP4C3VKJQruuGnEImyyhCMyi%2FTP2nvZdSequ%2Bxwk2DudYitD4gCU0GsfEl2T20mdko2U1bOZUbQ%2FBvF6CJjCDzwa3VmpjDgB9RAnPQzK5QE2IoHH7ChVPT1lxh4DwejZk0U0SNycXKfc45uFRJfuedObEoEMOTjssEGOqUBn6EL7H5nvpGTnH%2BMJHzDeQcT1dEp97RAUNyMZc%2Bv9zKAF%2B1SbIgDguJzYGzE9ogNznLffGxTL5mZEU8e%2BTKyuvcbG3zFj3rvXJISbZ6qjuX0m66D6yYROJuncBGHA5RF1djmLOZfW01q%2FyjUWOU2gQfSJcsCUpoPAOwx0GA61S10APtKJrCbv47yCLsPMQWP15cnTZLr7q%2F8Tl8ZSq5ZO1DBs1xt&X-Amz-Signature=b31cfe9ca68e54daf227344f1fe3f1ec7e7eb4a59f15563b7fe7595d2565356b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
