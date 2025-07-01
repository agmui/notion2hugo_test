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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAN7BY5K%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbAJb6taJ3B5%2B6%2BrcVTGrK2tI2jEgC%2FAt8Volcr%2FxtfQIgezUPnfcLesEYtNfGqEJU5fKm1IsPJESo29jFMuiDz%2F8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdfnkZm17giRVQQiyrcA4Se%2FpAFeHK3zefFuahTOEyct78f0qx0lg257rzmlb0FGqJZYQGHDje77a3ZJGTloZfJo5CM93zt%2FHk8DzpacG336oVJeBL84BZ21SCntTrYdwD1Eyy2lA2liNadTNGnpixZ6W08KwfbC14Kp7MwALXRMaETibt7o8%2BYh4aD9YN9NATxgq0yLxGvEz87QJzDXpvgU9ywOFV8%2F1NMso6WMOCBOGdvSo92gbwSBOryGQOtKC3Jv3p0ya61rj2pnNTvHXx7AylvH%2BnJMwZYaSGdWemu%2Ff1LFeVRcZZ0Zdv%2F7DQlITidX3U6pExLY1x0VrE%2F59f5qpTJfM0MqAg0Ui0oElpZdd%2FTa4ixnIdtcgsvt8U2qUY73HBaAKsCitYFPju%2Boy8upFrllCQc1xb%2BpJXzZjKl4km%2ByRlPTqTiDbrDDyQUSWf2SP8d88toFemLZXns0wbYmETrhhrPbBFhFOzjWwAATPaOf4DoALkNV8n%2FNNtpvB%2BPPPS8sn0q2TLUb%2BX0ZFX950yLZzd3emrpR95DC89xoYMf%2BnPqkRoYsI8F%2FVtXcYQ%2BPTxnbmDhYkmuvWbASI0%2FV6qjmwxLzlis67zJpNoaYoGDejcoLmmIBhe0Q%2FibjGE4gu2WJRwPoYcAMLClj8MGOqUBs9YtmzLt6l2BNUMngiJpR1yLyr8Q8Ccmr2Yh%2BMIlfbqohlv7lkD8JzT0QLgU0PxyTtZSrbw%2F9qFham6TkWVUX6Qn3%2BAzwc0TLST0a5Qu5MP0I9VDYmRNUVP%2Fbw2e2Y1sURfhSGqsd0v45y0Ksi8XVPTdOMqZfuMGkW7lSquQa9x5B7SzrEYZMGEYLE4L5eERjB%2BSVYMthzbgWO77iTbLuhAlqARs&X-Amz-Signature=0b76b8b44f22a2e10b16dab9fe0769863016399787f6991a3291bb2912bc0f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAN7BY5K%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbAJb6taJ3B5%2B6%2BrcVTGrK2tI2jEgC%2FAt8Volcr%2FxtfQIgezUPnfcLesEYtNfGqEJU5fKm1IsPJESo29jFMuiDz%2F8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdfnkZm17giRVQQiyrcA4Se%2FpAFeHK3zefFuahTOEyct78f0qx0lg257rzmlb0FGqJZYQGHDje77a3ZJGTloZfJo5CM93zt%2FHk8DzpacG336oVJeBL84BZ21SCntTrYdwD1Eyy2lA2liNadTNGnpixZ6W08KwfbC14Kp7MwALXRMaETibt7o8%2BYh4aD9YN9NATxgq0yLxGvEz87QJzDXpvgU9ywOFV8%2F1NMso6WMOCBOGdvSo92gbwSBOryGQOtKC3Jv3p0ya61rj2pnNTvHXx7AylvH%2BnJMwZYaSGdWemu%2Ff1LFeVRcZZ0Zdv%2F7DQlITidX3U6pExLY1x0VrE%2F59f5qpTJfM0MqAg0Ui0oElpZdd%2FTa4ixnIdtcgsvt8U2qUY73HBaAKsCitYFPju%2Boy8upFrllCQc1xb%2BpJXzZjKl4km%2ByRlPTqTiDbrDDyQUSWf2SP8d88toFemLZXns0wbYmETrhhrPbBFhFOzjWwAATPaOf4DoALkNV8n%2FNNtpvB%2BPPPS8sn0q2TLUb%2BX0ZFX950yLZzd3emrpR95DC89xoYMf%2BnPqkRoYsI8F%2FVtXcYQ%2BPTxnbmDhYkmuvWbASI0%2FV6qjmwxLzlis67zJpNoaYoGDejcoLmmIBhe0Q%2FibjGE4gu2WJRwPoYcAMLClj8MGOqUBs9YtmzLt6l2BNUMngiJpR1yLyr8Q8Ccmr2Yh%2BMIlfbqohlv7lkD8JzT0QLgU0PxyTtZSrbw%2F9qFham6TkWVUX6Qn3%2BAzwc0TLST0a5Qu5MP0I9VDYmRNUVP%2Fbw2e2Y1sURfhSGqsd0v45y0Ksi8XVPTdOMqZfuMGkW7lSquQa9x5B7SzrEYZMGEYLE4L5eERjB%2BSVYMthzbgWO77iTbLuhAlqARs&X-Amz-Signature=a539350a41fd4c5705e93aa8446cfe7865f67262b7a0d54bce7b6abbeab59562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
