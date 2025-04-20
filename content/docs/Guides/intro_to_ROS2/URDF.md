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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6LXFQF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2P5f%2BJgBaxV583JGvq9c2%2BB%2BiiJzc4aioFZXjczunCQIgKnpNgYDYNQmoPf6Q0sRTmZz%2FK0j5ClZR38vxNnI2EK8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkwKsTSGpqa46IY9SrcAzAKwwh5hYNDWa46CBnU%2FXzqcqPDYgXd5UYSdAuAQKC%2BRh4%2Fr3Tv%2FvqDEvnwXLgVSFVTBKpGfkl8MShIc%2FNT0DAd2JShpO0O8qouH9rut7hHnkR97SpShdSSk30ampx6PpELi2TY3OHKEk5Hskx%2FH6jLvi54KxHgdK8N1e%2B1bpnKz0XMYFtZiLZMrntvKFWJNzEWE%2BpP4znZVCBLdavpLi9By64Jn3j5ro5xDWgQM3pOPpoBBSTyCgzAoBrh6g5AnBRGOW%2BPHUdN4Lx3KsppEuXN1lk75Fv615gpCFUq7WBu1r5J2RePuFBsx%2BoOgAUSQ1Cq0wnOzZJX8vvDkMti5z%2BdHf3WWnSilhOnmhCrEmILjO8Qa8EBptcB8EfC8Luyayi7PY2m9XRjf5hgXWRhFDD%2FPGarqhm4uatuDRaHPDlgmFNhrIjMHtE4Wnw7gUTZtF2NZz25VsVySCQ9NmIOo8ZL7VNoeHxALDptNAcY4A1m3ZaOWd3Csn35lUkr0j8que3rztXn0fWOLkH81JGeWuZTpZR6HdoQkI5AgfixyITsdgSNrmLojjMICb4BNMd77vFAZn2AcKfpobhdUkPZcOi9kJWPGnH13LbUdOXfrFdQrfjCsGL8IWICFsgoMO%2BBkcAGOqUB%2FM2jGJA%2B8K1hYc6jRpS1mHvvjPf6XG4mmDBzrSDUTnm5xu0rlPPcL7r0jfbzf5DqWWo7axTeodBQualEmReMjbOTRSnh%2B3rLM0tt%2BdMp9KagcjPjl573oE35x2hYLSYvh%2B0pltJw8IdduDJVifFi6lNpX%2BvELHn7IH52jfvSAZek33gJIRJFcLxR4fEqijvFYh1%2FgSsjor7aGigVCdx3%2FWcchrx%2F&X-Amz-Signature=a0d910a1a147b66479007f9431401ad220a4dec5d14ebc0ac8dfa7be97d08071&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6LXFQF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2P5f%2BJgBaxV583JGvq9c2%2BB%2BiiJzc4aioFZXjczunCQIgKnpNgYDYNQmoPf6Q0sRTmZz%2FK0j5ClZR38vxNnI2EK8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkwKsTSGpqa46IY9SrcAzAKwwh5hYNDWa46CBnU%2FXzqcqPDYgXd5UYSdAuAQKC%2BRh4%2Fr3Tv%2FvqDEvnwXLgVSFVTBKpGfkl8MShIc%2FNT0DAd2JShpO0O8qouH9rut7hHnkR97SpShdSSk30ampx6PpELi2TY3OHKEk5Hskx%2FH6jLvi54KxHgdK8N1e%2B1bpnKz0XMYFtZiLZMrntvKFWJNzEWE%2BpP4znZVCBLdavpLi9By64Jn3j5ro5xDWgQM3pOPpoBBSTyCgzAoBrh6g5AnBRGOW%2BPHUdN4Lx3KsppEuXN1lk75Fv615gpCFUq7WBu1r5J2RePuFBsx%2BoOgAUSQ1Cq0wnOzZJX8vvDkMti5z%2BdHf3WWnSilhOnmhCrEmILjO8Qa8EBptcB8EfC8Luyayi7PY2m9XRjf5hgXWRhFDD%2FPGarqhm4uatuDRaHPDlgmFNhrIjMHtE4Wnw7gUTZtF2NZz25VsVySCQ9NmIOo8ZL7VNoeHxALDptNAcY4A1m3ZaOWd3Csn35lUkr0j8que3rztXn0fWOLkH81JGeWuZTpZR6HdoQkI5AgfixyITsdgSNrmLojjMICb4BNMd77vFAZn2AcKfpobhdUkPZcOi9kJWPGnH13LbUdOXfrFdQrfjCsGL8IWICFsgoMO%2BBkcAGOqUB%2FM2jGJA%2B8K1hYc6jRpS1mHvvjPf6XG4mmDBzrSDUTnm5xu0rlPPcL7r0jfbzf5DqWWo7axTeodBQualEmReMjbOTRSnh%2B3rLM0tt%2BdMp9KagcjPjl573oE35x2hYLSYvh%2B0pltJw8IdduDJVifFi6lNpX%2BvELHn7IH52jfvSAZek33gJIRJFcLxR4fEqijvFYh1%2FgSsjor7aGigVCdx3%2FWcchrx%2F&X-Amz-Signature=61c0de0e937f2defe481e40eb4334041fa2cbd3ac8a611591e34791365e7ac70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
