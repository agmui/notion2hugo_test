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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5QO2ZE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDD4gRmjkO0Phha0Y8wSSQt3OFpazOHHBXXzATzZwwUqAiEAuJmFiQp4JpoXCO1O7FCFBcw5hfEWG8DRlnbtQ1k2A9AqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkxwSnlr%2BK48HYvYyrcA8rekQDaTIlmQ5RnPBu8YTksPWCEw%2Fh8fSfMmMAehoQ%2BLI1aNoVETNMhODPq4CcHD9U3ztcTvAI4a0bLFhpdTs37cwiIJ3Ha%2Fe2%2BkSQNJmiKL1rs%2FeaOWynz%2FlEMICbvs6KVktlxMY%2Fwvx5XKQkdsTqFGAhWzYX6Sz5aKgd9LRCj4l0Gpe36GBemMnApukUCeVOj9Sg2uuDxk1IvzSKQXGCc%2FSG%2BZ3ISwHCfB13jsYUVSJ08MDnRg2KkuFcDeC7q0bK4Am8qu4lUtiXe56N9OU%2BBi3gzQE9CyeJ61amRoPkD2heD9GECWuzBHDp2bD%2Fo6AH3T7HKxsjAjCPbgg3C6YEWBmF8%2BjPOzopmxdRbtiFi3OuredUchUPWLnoRRNMSYFW9u6Ky6li8cMDTD9DKtZDgXh%2Bs2AOKOD4QGi2B2sTAXfSWLpzbNsilGKcK9gmBw0bYaeERS%2FoZPgtkqwrndNhO5M6HPEsRaD5CaTmsLxc9rrzlTgd3fTLMt8d8v7Jo2b%2BdRvZDY6XxeZfva7t%2BvKNN8e%2Ffm94RKiTBauDEDYN%2F1tVTitJ1AY4j6arxAN2h8zLUICkSypCQfVNhh7vm7ipgsa5uVdjeADv8ItEbo63PS4kT3sWSzvSqOU%2FCMM64jr4GOqUBU6D96PYBL73qMHPxj1KB3ZjpPyJy2frsQCpsIFHZST2Agsn1VCjjtaDXBjZf%2FvAt4%2BXStTYr8gOo8b8mWaRV8v%2B25PAwlUsw9m1XooLznBA2cos3pp4OwWCUTzdwgkNaQ8K6s7ml8rPZw3uAkkM6RPfAgkBHr8%2FRmt5SvACOgYZ2EWiCOE1rw8TCcwXjUVUTPduE4BXLNR5sIgrBtHToKqVDeQNJ&X-Amz-Signature=0a620b054fa737faf32d1c7494fea0116017526041f7ec983c8ca696023dea75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5QO2ZE%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDD4gRmjkO0Phha0Y8wSSQt3OFpazOHHBXXzATzZwwUqAiEAuJmFiQp4JpoXCO1O7FCFBcw5hfEWG8DRlnbtQ1k2A9AqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkxwSnlr%2BK48HYvYyrcA8rekQDaTIlmQ5RnPBu8YTksPWCEw%2Fh8fSfMmMAehoQ%2BLI1aNoVETNMhODPq4CcHD9U3ztcTvAI4a0bLFhpdTs37cwiIJ3Ha%2Fe2%2BkSQNJmiKL1rs%2FeaOWynz%2FlEMICbvs6KVktlxMY%2Fwvx5XKQkdsTqFGAhWzYX6Sz5aKgd9LRCj4l0Gpe36GBemMnApukUCeVOj9Sg2uuDxk1IvzSKQXGCc%2FSG%2BZ3ISwHCfB13jsYUVSJ08MDnRg2KkuFcDeC7q0bK4Am8qu4lUtiXe56N9OU%2BBi3gzQE9CyeJ61amRoPkD2heD9GECWuzBHDp2bD%2Fo6AH3T7HKxsjAjCPbgg3C6YEWBmF8%2BjPOzopmxdRbtiFi3OuredUchUPWLnoRRNMSYFW9u6Ky6li8cMDTD9DKtZDgXh%2Bs2AOKOD4QGi2B2sTAXfSWLpzbNsilGKcK9gmBw0bYaeERS%2FoZPgtkqwrndNhO5M6HPEsRaD5CaTmsLxc9rrzlTgd3fTLMt8d8v7Jo2b%2BdRvZDY6XxeZfva7t%2BvKNN8e%2Ffm94RKiTBauDEDYN%2F1tVTitJ1AY4j6arxAN2h8zLUICkSypCQfVNhh7vm7ipgsa5uVdjeADv8ItEbo63PS4kT3sWSzvSqOU%2FCMM64jr4GOqUBU6D96PYBL73qMHPxj1KB3ZjpPyJy2frsQCpsIFHZST2Agsn1VCjjtaDXBjZf%2FvAt4%2BXStTYr8gOo8b8mWaRV8v%2B25PAwlUsw9m1XooLznBA2cos3pp4OwWCUTzdwgkNaQ8K6s7ml8rPZw3uAkkM6RPfAgkBHr8%2FRmt5SvACOgYZ2EWiCOE1rw8TCcwXjUVUTPduE4BXLNR5sIgrBtHToKqVDeQNJ&X-Amz-Signature=e3b53354bd63c2110fb65c2d546eda2771ade65a52dadee0277d4f9ebf6b26d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
