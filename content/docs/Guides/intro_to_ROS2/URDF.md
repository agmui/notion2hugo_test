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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHSSPE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0CJ97wLuR1aGf0jjzqNyB%2B9iJOkchqKrj8wtcTs4w4wIhAIDyE%2Bpk%2FragNVw0uVsOTcX99RM92t%2Bmlm0NNWgFWykjKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNdtg5uBpkWPSPQbEq3APODYR6H5s0Xyb7gZX%2FqmK1sKfuEKLRD1nAu%2B6lK8sEHhn5yTKs1Hxv%2Bs8DYpPd%2FJ1FrjYiyWLXDQ2V205KVYbIGce7XgoUZl1F8fjaJLMI0mxs469egE5wYfpFEk%2FQ8WavjVZ7TMXXKZa1ayDK4K%2FOK9ki%2FFgC1A5on68K7a%2BOBwGNq0XvbJAjm%2FP%2Fm6ROweRDGyB3f2I6VA4ZlS50aSTSzRGe4hpM%2FPabOhcJNSwZe5tbG%2BG0lNl6iAl9V0fsxrFHpvono394RRshA3DCzCDsk9X2s6o79ipTknAOi0cPW408ePchlvgCDJUeybtO%2FhT4f%2F28v2wf8J3XQhCIWRxdW8NIf1XTtrIE1st9Yw0Nqlo8iiYouYriHqNTEv8KTGQm8eBRGxNktJdgSAfCPVUwYPiisYv5eX9WRir01PAb9yqjvn9NKHtTUdznoN2tAPZ%2F69iIMBPhoZbGT8isQ0DURz%2FSwNLTn%2B5Q2ZcCljj9oqTHrMFBKM%2FnBb0%2FWFlYjyVLo6OGnb3go7r3dLH%2B3jKUiqah9KgnMjrL%2F6cMEw9RWgmZ%2BwBugcC%2Bev2mkgh%2B5OoO80Be0f5%2BslxbvfRpw0Vdl9llcLYCBpuTHUBDKUM9kiNbTNRhV5of2r01zTD%2Fg8vDBjqkAUW%2B7cfkMq1MNGZSkWS%2BsjW%2BNm6Emd89ydQ%2FCJ2pAkDd0XzRHjf80zMW4fYUlF%2BaMIem5hmpwTRTrSdXtV9TclFHO0CEUsoMBDFkjE7CHUfkdcv72aLlfx%2BDoC6N5NSMZJySB%2F4Gdu0h%2Bjd9Gr3I%2F8INB%2BsE%2B2iQkTi7n3rQkPBRuIbZcRP%2BqJ2Om3IDGZAxZSsy4FB06KUAs4IYwlRi5mGppVoL&X-Amz-Signature=b3f96af9d91b806ef1d6c45c837cabfe66d8ed9787bdb51f92c46e20c6a148b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHSSPE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0CJ97wLuR1aGf0jjzqNyB%2B9iJOkchqKrj8wtcTs4w4wIhAIDyE%2Bpk%2FragNVw0uVsOTcX99RM92t%2Bmlm0NNWgFWykjKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNdtg5uBpkWPSPQbEq3APODYR6H5s0Xyb7gZX%2FqmK1sKfuEKLRD1nAu%2B6lK8sEHhn5yTKs1Hxv%2Bs8DYpPd%2FJ1FrjYiyWLXDQ2V205KVYbIGce7XgoUZl1F8fjaJLMI0mxs469egE5wYfpFEk%2FQ8WavjVZ7TMXXKZa1ayDK4K%2FOK9ki%2FFgC1A5on68K7a%2BOBwGNq0XvbJAjm%2FP%2Fm6ROweRDGyB3f2I6VA4ZlS50aSTSzRGe4hpM%2FPabOhcJNSwZe5tbG%2BG0lNl6iAl9V0fsxrFHpvono394RRshA3DCzCDsk9X2s6o79ipTknAOi0cPW408ePchlvgCDJUeybtO%2FhT4f%2F28v2wf8J3XQhCIWRxdW8NIf1XTtrIE1st9Yw0Nqlo8iiYouYriHqNTEv8KTGQm8eBRGxNktJdgSAfCPVUwYPiisYv5eX9WRir01PAb9yqjvn9NKHtTUdznoN2tAPZ%2F69iIMBPhoZbGT8isQ0DURz%2FSwNLTn%2B5Q2ZcCljj9oqTHrMFBKM%2FnBb0%2FWFlYjyVLo6OGnb3go7r3dLH%2B3jKUiqah9KgnMjrL%2F6cMEw9RWgmZ%2BwBugcC%2Bev2mkgh%2B5OoO80Be0f5%2BslxbvfRpw0Vdl9llcLYCBpuTHUBDKUM9kiNbTNRhV5of2r01zTD%2Fg8vDBjqkAUW%2B7cfkMq1MNGZSkWS%2BsjW%2BNm6Emd89ydQ%2FCJ2pAkDd0XzRHjf80zMW4fYUlF%2BaMIem5hmpwTRTrSdXtV9TclFHO0CEUsoMBDFkjE7CHUfkdcv72aLlfx%2BDoC6N5NSMZJySB%2F4Gdu0h%2Bjd9Gr3I%2F8INB%2BsE%2B2iQkTi7n3rQkPBRuIbZcRP%2BqJ2Om3IDGZAxZSsy4FB06KUAs4IYwlRi5mGppVoL&X-Amz-Signature=1fe5b4eb6fd1b1ad21fd3043a45d16b8eb0875084e700b79fa6563890a94551c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
