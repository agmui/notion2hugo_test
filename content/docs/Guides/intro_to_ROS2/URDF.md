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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665INOK5UZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTzSSNBWEKGCvEwnryRdvYLmIK5es10WMR9AZRbjWCsAIgKOtcgQRjkzDeC3Qxux0V5ST%2F9tubm6%2BxEE64R%2FmJK0IqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPihQrgXp5Q145LTayrcA3MVeiPtfVaM38XK9ADFJy9MLMvXhsWcLMIMydiB6fMGMtuvtqIGPrnIzAb5A7%2FwpO0VZNdv0dYiqU0DtAT%2FbHKhPZ5jtBJ36ac6LMi%2BKsj5nhPeVZ7COEkA%2BXQTKhcwx0Im0Eg5HlQUnAvZj08Ge6QVN%2FsVMOAv47tu7SRiTLP%2F11evK2nDY9WbJbEyml%2BPVBgS%2FKNFgFJAzwg%2FmmxOka5w8et3uDV%2FLteSr5DAnRdWUFD0x6Cq0poE6vbC7cfr6Ave%2FykOTRV0rjqIX973SaNRr9922Hy1fhDfVyh9vSQhnsrfTXejdnxFSgWo6QjriF3iBYeK%2BjW%2B%2FkDsYnC1bcv2h8dEFWghI7NtBYtR7MLcFXGiyz0%2FmakLcnTvmm4bhAbnzciuObZVGnACr5wXWt8WDk12GaN5uBsC%2FlQ36omGatZe1eo%2F%2FQOhb%2FF4zEcyUTA5d%2B6hL%2F2FlUQ%2BDY1c0LAyQBco73U74hI8fKbwpupiTF6yBs8JKHMoUb1QgH5mtgFWktoPTUgXQKh5HxkP3GbcxL%2BHlp0vGKbvh7QjIwPLaRitzMKCLnAA34Y2nNR93JGHpbpgLoWvngJJMtk2FFaHK1%2FeT%2FGAHy19sWptKBiu3C0AHcVOGicjWWRXMPGbscQGOqUB6l6txxKOJx%2ByDaObf3xPZJnrMMysPcctF9T8zzMOA42U6N7oytjhO9ZNQam4kjFkm1EAe4hi1jEQLNv4aa95kT4aTAR1lLJJnygAGoqcJiiDZ7uU4WQyeciJhi5rsp4oG2ScTk9w9oteIj9UrVbM%2FnZxuufpz5HeVdxk8xRZgI8ifwWwPYyF2h08ArM2lLzgONGCiBmrCmXRsAPbJnDF%2Fsol2PgO&X-Amz-Signature=59a4047312122106743e7ba980c4d6727bf1146eca880d4e079a67f5ee496308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665INOK5UZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTzSSNBWEKGCvEwnryRdvYLmIK5es10WMR9AZRbjWCsAIgKOtcgQRjkzDeC3Qxux0V5ST%2F9tubm6%2BxEE64R%2FmJK0IqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPihQrgXp5Q145LTayrcA3MVeiPtfVaM38XK9ADFJy9MLMvXhsWcLMIMydiB6fMGMtuvtqIGPrnIzAb5A7%2FwpO0VZNdv0dYiqU0DtAT%2FbHKhPZ5jtBJ36ac6LMi%2BKsj5nhPeVZ7COEkA%2BXQTKhcwx0Im0Eg5HlQUnAvZj08Ge6QVN%2FsVMOAv47tu7SRiTLP%2F11evK2nDY9WbJbEyml%2BPVBgS%2FKNFgFJAzwg%2FmmxOka5w8et3uDV%2FLteSr5DAnRdWUFD0x6Cq0poE6vbC7cfr6Ave%2FykOTRV0rjqIX973SaNRr9922Hy1fhDfVyh9vSQhnsrfTXejdnxFSgWo6QjriF3iBYeK%2BjW%2B%2FkDsYnC1bcv2h8dEFWghI7NtBYtR7MLcFXGiyz0%2FmakLcnTvmm4bhAbnzciuObZVGnACr5wXWt8WDk12GaN5uBsC%2FlQ36omGatZe1eo%2F%2FQOhb%2FF4zEcyUTA5d%2B6hL%2F2FlUQ%2BDY1c0LAyQBco73U74hI8fKbwpupiTF6yBs8JKHMoUb1QgH5mtgFWktoPTUgXQKh5HxkP3GbcxL%2BHlp0vGKbvh7QjIwPLaRitzMKCLnAA34Y2nNR93JGHpbpgLoWvngJJMtk2FFaHK1%2FeT%2FGAHy19sWptKBiu3C0AHcVOGicjWWRXMPGbscQGOqUB6l6txxKOJx%2ByDaObf3xPZJnrMMysPcctF9T8zzMOA42U6N7oytjhO9ZNQam4kjFkm1EAe4hi1jEQLNv4aa95kT4aTAR1lLJJnygAGoqcJiiDZ7uU4WQyeciJhi5rsp4oG2ScTk9w9oteIj9UrVbM%2FnZxuufpz5HeVdxk8xRZgI8ifwWwPYyF2h08ArM2lLzgONGCiBmrCmXRsAPbJnDF%2Fsol2PgO&X-Amz-Signature=cb4cf993a730328f790fb68a413f452ce74096dcdc881399ad32033521c56172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
