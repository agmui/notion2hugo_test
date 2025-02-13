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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5TDUZI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB8gO0F0Upr0%2BukUZZx%2F0oSw3naBhYA6u%2FddNcCuZGAiBA9KH8Vnxd8VItQDnjHpoLIk66WVy1DgFdDHAMpCI7kCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM8d0MF%2BIXqDebkejBKtwDFPz0%2BLFFS80OMlBloNKB43RpwiHqNFSEfHKKhd1BRgPyPaYeWGpjxo4FCpHR9c%2Bzrg%2FViUlCLLGudZirHTSX2RuoVCXVAetpqSx9qGvTz7QqfTNAiQwuTkMCQEW%2B3j7hPtIU2hI0YUNmWl4mO88vYQGFRwmhw0d4f9Sd8ruPnNYmNCObFFCfFNVj3Qiu6J%2FN2A%2F2jZlZa8mC%2BHQFZOazTPTXDBvAJnq19%2FmMPg%2Bon%2F1m04KAr7y7ecAc94Q%2BuqmmDVbwqnn%2B2xOHVFEGBLUbDmSYdekkDUIFP%2Fnfy7DvW3XmKPCr42cQtWgmkaJlMtwGRm%2BT3WwWEqVYFMTyk%2BupYc3%2FXcCkOUaXUQbGTKjzmrozqH0n4Fdp2sFsbg4YO%2FVLBCpMdRNuOFqTLBhDr9TpIbewSdHrd%2FTaU7jHt3SIChv%2FkodKK7ckKdYDn8bnMbppWotKq%2FgdsnTrqmH7EKKJxAY0pczNPi2kiMRrzc%2BUjZ24KIAoNjERCqzX3uDPdcU5aA2LJqcL%2FNon6gEki%2FskfDTSeNEl2AJTreJ9zaYJ9fvWUaK3NNh3wa0nLoSUaniruDdq7ystY8zwrUUe7EIXMMcBLxrYxK%2Fn3bxFXELilLRg7NLLyK16fVYG2xswqYa3vQY6pgE7fmjb9tg3D3N1gc0wGbB%2FB9yQDrVVsYJtq4S4StxrbyFOhLeG6EEszevsKivuU0NHfaVXovrz3ynjW5rO0MUVnwAv4PgU8wu6TV04rv0RCUXKHUedQjcPqCIYgi7ovyJKd5B06D%2BG%2FS4AbZS8M0UHPAQaUOLCqjds3CSwmpkxtoajY2vOGTVm%2BCkkVHJdiPA%2BjxcjB%2B8PfIRWQzoPKln31RIkb61a&X-Amz-Signature=56bce69519b9c4f01f2a768783e83f946b1177b945c6eeaee139cb97edee7556&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5TDUZI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWB8gO0F0Upr0%2BukUZZx%2F0oSw3naBhYA6u%2FddNcCuZGAiBA9KH8Vnxd8VItQDnjHpoLIk66WVy1DgFdDHAMpCI7kCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM8d0MF%2BIXqDebkejBKtwDFPz0%2BLFFS80OMlBloNKB43RpwiHqNFSEfHKKhd1BRgPyPaYeWGpjxo4FCpHR9c%2Bzrg%2FViUlCLLGudZirHTSX2RuoVCXVAetpqSx9qGvTz7QqfTNAiQwuTkMCQEW%2B3j7hPtIU2hI0YUNmWl4mO88vYQGFRwmhw0d4f9Sd8ruPnNYmNCObFFCfFNVj3Qiu6J%2FN2A%2F2jZlZa8mC%2BHQFZOazTPTXDBvAJnq19%2FmMPg%2Bon%2F1m04KAr7y7ecAc94Q%2BuqmmDVbwqnn%2B2xOHVFEGBLUbDmSYdekkDUIFP%2Fnfy7DvW3XmKPCr42cQtWgmkaJlMtwGRm%2BT3WwWEqVYFMTyk%2BupYc3%2FXcCkOUaXUQbGTKjzmrozqH0n4Fdp2sFsbg4YO%2FVLBCpMdRNuOFqTLBhDr9TpIbewSdHrd%2FTaU7jHt3SIChv%2FkodKK7ckKdYDn8bnMbppWotKq%2FgdsnTrqmH7EKKJxAY0pczNPi2kiMRrzc%2BUjZ24KIAoNjERCqzX3uDPdcU5aA2LJqcL%2FNon6gEki%2FskfDTSeNEl2AJTreJ9zaYJ9fvWUaK3NNh3wa0nLoSUaniruDdq7ystY8zwrUUe7EIXMMcBLxrYxK%2Fn3bxFXELilLRg7NLLyK16fVYG2xswqYa3vQY6pgE7fmjb9tg3D3N1gc0wGbB%2FB9yQDrVVsYJtq4S4StxrbyFOhLeG6EEszevsKivuU0NHfaVXovrz3ynjW5rO0MUVnwAv4PgU8wu6TV04rv0RCUXKHUedQjcPqCIYgi7ovyJKd5B06D%2BG%2FS4AbZS8M0UHPAQaUOLCqjds3CSwmpkxtoajY2vOGTVm%2BCkkVHJdiPA%2BjxcjB%2B8PfIRWQzoPKln31RIkb61a&X-Amz-Signature=d668502be7d4fc7c58a79d3c83abbcbd16d34cfe2d990cf265684eaaf7f42b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
