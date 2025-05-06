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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOY7P4JM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOSmBoCIk%2F7Xom9bCWWNhPtkQwv5wc%2Bp0NTRYAuZussQIgYQKRl4VtfeVXJFcyL2Avq89D1Q5QJZhjQyJDOLgpKzYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLmwAkCz2QdR0qVDKSrcA%2FsCRRAt5vvzzrmoH%2FOSK4ql%2FTp%2FbOupO3UgJaDlxlD%2FwuR%2BH6PJfs7BlGkGYnG%2FVqCamS2tAd3fxEHwrxd%2Bol%2BxOIdAyZbpLeViIBRWyPpjds%2FXsBB6IiUWus4LWmPfPHVuRxR52yFMrJIDLgrKLPQ46GwVDRfCD3kf3JbAwC3vzcCXBxKU5SwGZmVikI4kiuakIW8UTCKmQJf0abANdd71L2MkX18vcQsjzbEeRsNVXtOTCnNmtcr%2FRnsmbUvdGrJv8T8t1pNf14FUJ0to%2F3hy8Tr50ds%2F0GE5Ps7DSkNl4ROlCjBjafIc5Iaves1gSIzcqSuO5mVcUkkJ7eFzu4%2Fh1%2BcGyPJRiDDuP4IMq1TPk3RXo7SBPspGscR549KwpkHGWU0bJMWwgJHAbKkt51pKoXrFhKEOLDWlhtllVD81RIhNQC1tw902Vp5vSTW%2B3TVAFnQPbrWdF%2Fs%2FZLofO0OeSjKFneMTrRSojV4UIqJNdGs2IwiMUzhgpm2dIT1LJA%2FtjFDwVbyU%2BT9665gkYP2%2FE8owKXGDllMeUU6wY5xRFscKDHkcyHaf%2BYw8QH%2BnL0zHZWLYT%2BSzNd7PNzWqhzFXPxrFPgYlU8zZf3pKsT6ZK%2BaaGQ5JOodBENc9MJT258AGOqUB64Vo1qwWW0oN6SpnVzcSUs9aJnPffPugdu3%2B%2FjBR2JY6b8DO2vjYk57a%2BpDloLxQs54TLcEGdnq4qN9HeT5ItLSqSUeUqq2gvcPUdcumBV2DWEnf8hXZ6mTWA0Il0poxcioAkazuQdgJfKC3E0%2F5fWFYskn1wPGb9PgcymFQ%2B1X6PbNHrBOEDW7XbOfafoWBrk6HLMqQj2irzkUnL6lLcOcM%2BA9A&X-Amz-Signature=0b6567717003ddd8871af5f05662daabfa3582624e092bf47182102b0df3daee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOY7P4JM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOSmBoCIk%2F7Xom9bCWWNhPtkQwv5wc%2Bp0NTRYAuZussQIgYQKRl4VtfeVXJFcyL2Avq89D1Q5QJZhjQyJDOLgpKzYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLmwAkCz2QdR0qVDKSrcA%2FsCRRAt5vvzzrmoH%2FOSK4ql%2FTp%2FbOupO3UgJaDlxlD%2FwuR%2BH6PJfs7BlGkGYnG%2FVqCamS2tAd3fxEHwrxd%2Bol%2BxOIdAyZbpLeViIBRWyPpjds%2FXsBB6IiUWus4LWmPfPHVuRxR52yFMrJIDLgrKLPQ46GwVDRfCD3kf3JbAwC3vzcCXBxKU5SwGZmVikI4kiuakIW8UTCKmQJf0abANdd71L2MkX18vcQsjzbEeRsNVXtOTCnNmtcr%2FRnsmbUvdGrJv8T8t1pNf14FUJ0to%2F3hy8Tr50ds%2F0GE5Ps7DSkNl4ROlCjBjafIc5Iaves1gSIzcqSuO5mVcUkkJ7eFzu4%2Fh1%2BcGyPJRiDDuP4IMq1TPk3RXo7SBPspGscR549KwpkHGWU0bJMWwgJHAbKkt51pKoXrFhKEOLDWlhtllVD81RIhNQC1tw902Vp5vSTW%2B3TVAFnQPbrWdF%2Fs%2FZLofO0OeSjKFneMTrRSojV4UIqJNdGs2IwiMUzhgpm2dIT1LJA%2FtjFDwVbyU%2BT9665gkYP2%2FE8owKXGDllMeUU6wY5xRFscKDHkcyHaf%2BYw8QH%2BnL0zHZWLYT%2BSzNd7PNzWqhzFXPxrFPgYlU8zZf3pKsT6ZK%2BaaGQ5JOodBENc9MJT258AGOqUB64Vo1qwWW0oN6SpnVzcSUs9aJnPffPugdu3%2B%2FjBR2JY6b8DO2vjYk57a%2BpDloLxQs54TLcEGdnq4qN9HeT5ItLSqSUeUqq2gvcPUdcumBV2DWEnf8hXZ6mTWA0Il0poxcioAkazuQdgJfKC3E0%2F5fWFYskn1wPGb9PgcymFQ%2B1X6PbNHrBOEDW7XbOfafoWBrk6HLMqQj2irzkUnL6lLcOcM%2BA9A&X-Amz-Signature=eda6ea6a51047dc155ab12e88d4e2d911931c7a073dd2897fcfdfe861833fd22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
