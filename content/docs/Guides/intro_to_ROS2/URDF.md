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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSI72OW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxmNDlf69aZstWZL%2F2RwJ17QnGxVWkDluZbnuvVlesVAIgIY42Llf5TaHGJ0B3t4psEVB1R8pyvGWxNQHGFqVCMK8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLdQreOwJCKQyC1XkCrcA5wojmfobNnIZfOYh7Aim3Mo8jMwtR3ib4E%2FtDIuHnfSy2%2FWLLQdl4q4DSwUMtJH4gkCqiobr79yG%2Br96YIPmxduUaqaAQy7GDqheljRROgNgiLPpiKmAC%2F74NjV1OYZmRZYZs7z4SxKLIHRn6a1zPsX7HuSIrm7nhL9J7ISPdvzkeEuXtztVuEwgVgy5fiRws8RN6mWyOGwO2xMvw8SkPoqxafmv2IW5dJSd6qUsQ4%2BHVhmUP%2B6sOzhWpY1m7UrkH6Dh8UiaW%2Fup14NfD7Y7B2Ii%2BE22YPUICxJrgseAZl8Y%2BlBYH1otMnZWsjzDkxxVvFKQdQPfnjY1gyeXCPMze86X0nJvvuHaLa5Evonk87ijwBTDXFPAmyhwFsngVASNYhiGOVqO3N125XdBszPsLPQn5DnxeykFPSSzV3AHOUpeYDw7h6T%2BRWP%2BP8xZAMQr%2BRZ8oRTW6KFuumEdMOKDrA6v8bskWm%2Fm22bG0Y9mXfNJaObQPFCCFBrFZWAa4RpJsTD1XYAgWsZuYFkj2M%2BDXABGDycmokIvHPcKA79T1JnWQsVXsel%2FnrhlbpQtSVOM%2BUj1KXjMIv0yScwMTstHy8VlMKriCSTZ5egPFbdS9pQuVaFkzE346j98FWaMNKL58AGOqUBS2B8COp8TRxLVL1GDRYl1k1FFv9NBdK7xdqOefSj8JDChTCJvg1YavKopQ52ZpI7jaOJul2z%2Fh1qRPQeJjwdR1ZzhB07xhIck%2F%2FHT5thuB9AoqixaJHswC0HlLXFgpmbta0EyhxKrltaJhd1PHzoEkawUSrY%2BU4tpUIBtSdMPuWWxcvEc5rB%2BOzLmB8KCGtkHumYUh5H73pkVhWmbW%2FvCB%2FrhZ4%2F&X-Amz-Signature=2e2138807706bde4c828edf83d63f618ba9fef1f1504e2fcf8aee340985e47df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSI72OW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxmNDlf69aZstWZL%2F2RwJ17QnGxVWkDluZbnuvVlesVAIgIY42Llf5TaHGJ0B3t4psEVB1R8pyvGWxNQHGFqVCMK8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLdQreOwJCKQyC1XkCrcA5wojmfobNnIZfOYh7Aim3Mo8jMwtR3ib4E%2FtDIuHnfSy2%2FWLLQdl4q4DSwUMtJH4gkCqiobr79yG%2Br96YIPmxduUaqaAQy7GDqheljRROgNgiLPpiKmAC%2F74NjV1OYZmRZYZs7z4SxKLIHRn6a1zPsX7HuSIrm7nhL9J7ISPdvzkeEuXtztVuEwgVgy5fiRws8RN6mWyOGwO2xMvw8SkPoqxafmv2IW5dJSd6qUsQ4%2BHVhmUP%2B6sOzhWpY1m7UrkH6Dh8UiaW%2Fup14NfD7Y7B2Ii%2BE22YPUICxJrgseAZl8Y%2BlBYH1otMnZWsjzDkxxVvFKQdQPfnjY1gyeXCPMze86X0nJvvuHaLa5Evonk87ijwBTDXFPAmyhwFsngVASNYhiGOVqO3N125XdBszPsLPQn5DnxeykFPSSzV3AHOUpeYDw7h6T%2BRWP%2BP8xZAMQr%2BRZ8oRTW6KFuumEdMOKDrA6v8bskWm%2Fm22bG0Y9mXfNJaObQPFCCFBrFZWAa4RpJsTD1XYAgWsZuYFkj2M%2BDXABGDycmokIvHPcKA79T1JnWQsVXsel%2FnrhlbpQtSVOM%2BUj1KXjMIv0yScwMTstHy8VlMKriCSTZ5egPFbdS9pQuVaFkzE346j98FWaMNKL58AGOqUBS2B8COp8TRxLVL1GDRYl1k1FFv9NBdK7xdqOefSj8JDChTCJvg1YavKopQ52ZpI7jaOJul2z%2Fh1qRPQeJjwdR1ZzhB07xhIck%2F%2FHT5thuB9AoqixaJHswC0HlLXFgpmbta0EyhxKrltaJhd1PHzoEkawUSrY%2BU4tpUIBtSdMPuWWxcvEc5rB%2BOzLmB8KCGtkHumYUh5H73pkVhWmbW%2FvCB%2FrhZ4%2F&X-Amz-Signature=5f45f2b80e6b4fc6f6bf8473fa1d1ad3955b3f6fc5358ba0e2fbe4acf2b5cab5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
