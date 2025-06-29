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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOAWB7Q%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPBahJBK7VQ%2BepNKQ9vMkDe5gOyXdoBl2VtSHAVkUYyAiAA1CNbMdZ3wGOnPODLNJbmFWymlPaBZJxnJX9jVcbjFiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdH6aEdCcaWz5Fm5kKtwDYMizHlLEJVP%2FSoS8sm2Bh74c39t10v6%2BX4ppO1I81Dl%2F8EkpD86tK3fp1VCYBR2%2FO9SbVga36zH3KtuvSKZaIB%2Bflj0Up10BZRVlCdgzW5POwHRTVPpCUBD68fT6W1bSqZPxeoidlmnNFWCx6hDc8zb2ccnatUmpYSG1SK9HrEwSwyObPYGjPPPFS76ze%2BlGhzRMsLosSMDuRy7%2FNGWSBSscWDwiUUTTjCJUL3S150lMba8zRW%2BnaOox6EF0Ct%2FC%2BSAKKxl5x%2F8qhvBiMC70%2F9jAAbe8Fz4KWDLixW7M%2BHgH%2FV5EDN98UinXx2BjZjSPV%2FnAXdzgU3%2BiRUY9uCGVV%2F6lNmpjF7q6Ymry%2F%2FePzUQQxgkc0M%2FfwGiI%2BcGdaBTzzNB9h2C9eombA3T4R72RbasU5iPXLa3ywpwxzf8HrlPqgCsFrLA3kJhjqPtU6rHY0KGzPCTcv%2BrPxo703LSVWXPRjY2Xs8D46fC8fqam9qXiE7%2FCdAA12wcrOIEz%2B3TY%2F4j0UHCxzz7NLcTLXUHukAk3GWyzVb%2FSB1Ue%2FS%2BPFApAe%2FMT076QN6C1cEG7kmSR54bENbNRfp6EphuFDMxVQ7Bt85oXJVFhQRSXBzIzmwNJSgyWlOaPakAK4Cwwrs2GwwY6pgHe3hrBAiFuktFfajUbrgfhJDiiJIOO4e7osDyj2fy2Jxjliv3N7FiiiugYylfrSOc0M%2BRt7sE%2BzgyjMi1%2FwkBCWEUSEJCmX3ayz7cazaTL1AkATetwWHl%2BZZgE37WDo5M5uc9DQoRHTCei7lIH7HoRmykmFyGowIZGUzVieypa48XgiKew%2FwdpavBOLudyp0Gxika2A2nDhsoa8TDXBXIDjN%2FUu1ya&X-Amz-Signature=4555c0bd7e9b1b1c817bb1dc149231e963cf0c047536075e59d9a85d28d2dea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOAWB7Q%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPBahJBK7VQ%2BepNKQ9vMkDe5gOyXdoBl2VtSHAVkUYyAiAA1CNbMdZ3wGOnPODLNJbmFWymlPaBZJxnJX9jVcbjFiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdH6aEdCcaWz5Fm5kKtwDYMizHlLEJVP%2FSoS8sm2Bh74c39t10v6%2BX4ppO1I81Dl%2F8EkpD86tK3fp1VCYBR2%2FO9SbVga36zH3KtuvSKZaIB%2Bflj0Up10BZRVlCdgzW5POwHRTVPpCUBD68fT6W1bSqZPxeoidlmnNFWCx6hDc8zb2ccnatUmpYSG1SK9HrEwSwyObPYGjPPPFS76ze%2BlGhzRMsLosSMDuRy7%2FNGWSBSscWDwiUUTTjCJUL3S150lMba8zRW%2BnaOox6EF0Ct%2FC%2BSAKKxl5x%2F8qhvBiMC70%2F9jAAbe8Fz4KWDLixW7M%2BHgH%2FV5EDN98UinXx2BjZjSPV%2FnAXdzgU3%2BiRUY9uCGVV%2F6lNmpjF7q6Ymry%2F%2FePzUQQxgkc0M%2FfwGiI%2BcGdaBTzzNB9h2C9eombA3T4R72RbasU5iPXLa3ywpwxzf8HrlPqgCsFrLA3kJhjqPtU6rHY0KGzPCTcv%2BrPxo703LSVWXPRjY2Xs8D46fC8fqam9qXiE7%2FCdAA12wcrOIEz%2B3TY%2F4j0UHCxzz7NLcTLXUHukAk3GWyzVb%2FSB1Ue%2FS%2BPFApAe%2FMT076QN6C1cEG7kmSR54bENbNRfp6EphuFDMxVQ7Bt85oXJVFhQRSXBzIzmwNJSgyWlOaPakAK4Cwwrs2GwwY6pgHe3hrBAiFuktFfajUbrgfhJDiiJIOO4e7osDyj2fy2Jxjliv3N7FiiiugYylfrSOc0M%2BRt7sE%2BzgyjMi1%2FwkBCWEUSEJCmX3ayz7cazaTL1AkATetwWHl%2BZZgE37WDo5M5uc9DQoRHTCei7lIH7HoRmykmFyGowIZGUzVieypa48XgiKew%2FwdpavBOLudyp0Gxika2A2nDhsoa8TDXBXIDjN%2FUu1ya&X-Amz-Signature=e6f090928bfa653f5141009b664f5a282ac89a97adb98b653dcf73f6b51a9dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
