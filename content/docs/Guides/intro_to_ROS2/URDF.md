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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4QZXDA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCZVQRK78sfKWxNo07pQYkcafYTKfJmKOWJuWRXukvd%2FQIgCJw2ZxxsIb2kIQTZOPGzNI9AJJn9NOsffwQDZ1%2FChM8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVDkP%2BSHO%2Bk0XSOACrcAwo2cXi94zgI4IOGByFk2CKJ8ajy9JroglZanx%2FvOOld300KJZrZLxojUSRdJLjU8n9K8rprEYWsGH7t7kbnxjqAIZo4gW88DO02ZvX4GU%2BRIBdNXoJ%2BKuFkYWJhBazlLjqveUTKr0kZsIW84HeanLtDF%2Fu6KFduo39HX5hCT6qztT7etnDpVgXIAaG4hkWWFMVYl%2BknCHCl%2Ft%2FeNTdN9wmAG%2FYXn%2FwrPr09hcmRsExUrWnDzircC6E6z2g%2Fvu89EU%2B9hVxtngmkEQUUA0tKvO%2B8D8q7b70P0dBJ21KgiDvRPx5d%2FMZlGFgBaboI8GpnNT%2Ftd%2Fusm4zZqniCQFz6MbMwCI5zJxnppP6w5oDxM9FZC4NIFnuvn3PZRNZ50vVjrbyLzsBLTWPyeFTwHZoLwMUJKwPzXAd1rNEKOMPjvbRaUHomIFEwP5Fjvyb6KyXHHqFgcjlt4gcM1eeALLA81pv%2Ft9EnqJaAoc6S8FBB2Mu3TXBXlJEY0btvmjmO%2FAEqFJfpPUgcmG28iijX%2FRLheNSdnzxHEvHTtfynyN1HMzlhpyUySaunFL1PQeDPxEfYE9gu%2FrRIYc6JZcwsFTf1d2aB%2FTRsZ6vsBiKCa5SCfiDh2p22PAXEiNkC75I%2BMNnCncAGOqUBGYGrTgPgvZBHYqcNeFBsJUVLvcfSaU2ZUgLpvi9maY43xA6Y6CieNqdzrFvJT%2F4NB6cHJQ%2BdEO56Nz7aVemZMgp%2Bdz6cO4GZ3z0yeAOlJxGpoD5FQtSPceUbvNpfgsHNo3IaXty6Th%2F0uNot67gjoY8IYXViaBZOQ%2FqL4UzUXRSfcqBN%2FdmBFz8uuobWMzIVU5kqeU8ph15HmgjOvkzVWdisv4Iy&X-Amz-Signature=2643ec5028b6f2aaf0ff79517f394bbadfd766b67a5f6cb69545396cbfeaead8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH4QZXDA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCZVQRK78sfKWxNo07pQYkcafYTKfJmKOWJuWRXukvd%2FQIgCJw2ZxxsIb2kIQTZOPGzNI9AJJn9NOsffwQDZ1%2FChM8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVDkP%2BSHO%2Bk0XSOACrcAwo2cXi94zgI4IOGByFk2CKJ8ajy9JroglZanx%2FvOOld300KJZrZLxojUSRdJLjU8n9K8rprEYWsGH7t7kbnxjqAIZo4gW88DO02ZvX4GU%2BRIBdNXoJ%2BKuFkYWJhBazlLjqveUTKr0kZsIW84HeanLtDF%2Fu6KFduo39HX5hCT6qztT7etnDpVgXIAaG4hkWWFMVYl%2BknCHCl%2Ft%2FeNTdN9wmAG%2FYXn%2FwrPr09hcmRsExUrWnDzircC6E6z2g%2Fvu89EU%2B9hVxtngmkEQUUA0tKvO%2B8D8q7b70P0dBJ21KgiDvRPx5d%2FMZlGFgBaboI8GpnNT%2Ftd%2Fusm4zZqniCQFz6MbMwCI5zJxnppP6w5oDxM9FZC4NIFnuvn3PZRNZ50vVjrbyLzsBLTWPyeFTwHZoLwMUJKwPzXAd1rNEKOMPjvbRaUHomIFEwP5Fjvyb6KyXHHqFgcjlt4gcM1eeALLA81pv%2Ft9EnqJaAoc6S8FBB2Mu3TXBXlJEY0btvmjmO%2FAEqFJfpPUgcmG28iijX%2FRLheNSdnzxHEvHTtfynyN1HMzlhpyUySaunFL1PQeDPxEfYE9gu%2FrRIYc6JZcwsFTf1d2aB%2FTRsZ6vsBiKCa5SCfiDh2p22PAXEiNkC75I%2BMNnCncAGOqUBGYGrTgPgvZBHYqcNeFBsJUVLvcfSaU2ZUgLpvi9maY43xA6Y6CieNqdzrFvJT%2F4NB6cHJQ%2BdEO56Nz7aVemZMgp%2Bdz6cO4GZ3z0yeAOlJxGpoD5FQtSPceUbvNpfgsHNo3IaXty6Th%2F0uNot67gjoY8IYXViaBZOQ%2FqL4UzUXRSfcqBN%2FdmBFz8uuobWMzIVU5kqeU8ph15HmgjOvkzVWdisv4Iy&X-Amz-Signature=ba303c7f03cebb5fe66aa7bb244bbae495a18e00c7700c92109edd36aa3f3d98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
