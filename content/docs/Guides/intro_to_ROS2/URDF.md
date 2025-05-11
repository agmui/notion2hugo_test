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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFBHNG5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIC%2BIrxEdxUBMDsvKDhcIyYO17zvbI6kE3VwZpRgzQiphAiEA8WOtXlCYT2EQrUkV1SaEzzFmAwMf8U26%2BIEVja3g%2BMgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX4svSQtRkkh6lqmircA9AvGuMb9zvipsLDIflExbrYmkDbBHWV0N2ADXck2gvUnuiwSXst9IBk39IpWEuA28cREZlFJHNBzo2JZpIdWsU5wHkKPsIQ%2FdpBs0ifrGVNU2FXnBa13dlE2uRVAmALmmPxpUP8hB4sqgrIXxr5yxu%2FPDunwUSZyiwax65VYKoimIzxUdn7ry4fmkL2DXh2kOnPuQVOLP9WQK6TI3UZ8aJFfT48IeKM%2FFgx38aAG2JCE%2FL4B3gL1i4ib2OQTBzKCYGHSJGyrYudK66LDFwupRxruXXRFQE3NJLjw29pZkI8g9k6OIhN%2BA1DT8ngoxOqX0ET5SS5ixfjaIrv2%2B62spLYDYfUNBSbPzzZkkdIJl0E1HydKWlkG0gUNSyDHkKuwZTUH%2BAeTn%2FQ%2FHigSVF27caZCCscm8ov9aNLts0xxJjNgwU%2FO9G4U8KNNSH9na%2FUxknSpBm%2FupERwwnWLc4XEzzwNfimRaU%2F7pw2iLob4H%2FgcB2AvOl1TFXakTFjo8TmI%2BO4z7ZsfsK3%2F1kzoqxh8WZiGG52eraRHK4%2FnFrXjclYLdfYoJWP25faOnjrExi3rMlLdXi5eIqVUdLbN%2BY6p7JwVSq%2F%2BoBq6teEGCj5xFW0Yrkb15GmDFbArvZOMMCegMEGOqUBGKEPLzvwnHeR%2B4u9gNfLKtzuFyxDW%2FPAnDEj4fQyueFgy5H94yD2M1xqpRIPvHeus5SsmmagPDx%2Fi%2F2zPjJAnhrer7ngNqEl5pgmCbePvqG70bhjwwb%2BgOd20qWsLq43kABpblSfYEbCL0PXTeHCJyxl0eAz8MjUDelg5MKITo%2BwY23zgHBADmUNuKMiYKBqNs7ZxHS8ofq2NrXB9%2Bc7K4sqcEJW&X-Amz-Signature=4bea50f332edd5e9c3cea92fd1764c718940607da6b11b2b7f6be1bad65754ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFBHNG5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIC%2BIrxEdxUBMDsvKDhcIyYO17zvbI6kE3VwZpRgzQiphAiEA8WOtXlCYT2EQrUkV1SaEzzFmAwMf8U26%2BIEVja3g%2BMgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX4svSQtRkkh6lqmircA9AvGuMb9zvipsLDIflExbrYmkDbBHWV0N2ADXck2gvUnuiwSXst9IBk39IpWEuA28cREZlFJHNBzo2JZpIdWsU5wHkKPsIQ%2FdpBs0ifrGVNU2FXnBa13dlE2uRVAmALmmPxpUP8hB4sqgrIXxr5yxu%2FPDunwUSZyiwax65VYKoimIzxUdn7ry4fmkL2DXh2kOnPuQVOLP9WQK6TI3UZ8aJFfT48IeKM%2FFgx38aAG2JCE%2FL4B3gL1i4ib2OQTBzKCYGHSJGyrYudK66LDFwupRxruXXRFQE3NJLjw29pZkI8g9k6OIhN%2BA1DT8ngoxOqX0ET5SS5ixfjaIrv2%2B62spLYDYfUNBSbPzzZkkdIJl0E1HydKWlkG0gUNSyDHkKuwZTUH%2BAeTn%2FQ%2FHigSVF27caZCCscm8ov9aNLts0xxJjNgwU%2FO9G4U8KNNSH9na%2FUxknSpBm%2FupERwwnWLc4XEzzwNfimRaU%2F7pw2iLob4H%2FgcB2AvOl1TFXakTFjo8TmI%2BO4z7ZsfsK3%2F1kzoqxh8WZiGG52eraRHK4%2FnFrXjclYLdfYoJWP25faOnjrExi3rMlLdXi5eIqVUdLbN%2BY6p7JwVSq%2F%2BoBq6teEGCj5xFW0Yrkb15GmDFbArvZOMMCegMEGOqUBGKEPLzvwnHeR%2B4u9gNfLKtzuFyxDW%2FPAnDEj4fQyueFgy5H94yD2M1xqpRIPvHeus5SsmmagPDx%2Fi%2F2zPjJAnhrer7ngNqEl5pgmCbePvqG70bhjwwb%2BgOd20qWsLq43kABpblSfYEbCL0PXTeHCJyxl0eAz8MjUDelg5MKITo%2BwY23zgHBADmUNuKMiYKBqNs7ZxHS8ofq2NrXB9%2Bc7K4sqcEJW&X-Amz-Signature=b0b1adf7558a91cbb1625473733cc6460f0d3ae879866c08b0eecd5a2d639736&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
