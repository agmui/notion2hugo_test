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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PRSRUT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOkms%2FisRcFC%2FrUrbK6%2Bsq3yB0LIKG7hKHb2GUtb%2FmSAiEAgKBOYFC5JiDw3oWeZWeS8ncxdpMbSLPfDuflgrqyK%2F8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtTx4RnpUUm%2B7kkGCrcA5ifNePZlXR85BlzkQYdqJHeE3Oneq9UM0ChfsffttxjDsYpKQuA5Wv3OlRn%2BZel297RrcrEM5zimZ%2F2YYUe6J5RhBOEf4QL7PY9hGwTQfrImYGwT7wt2oq0REwCeUHtK4G0aGDrWCT9PSHtfed7ImQTFtDK8AnfwqcsUMZ58YkoZfj3y8NwZZPSDo%2Bx5eNiRox%2Fnspr22JnfHwiIXT6Y9wZS8CsxvfmJ0nzUD%2BTTVlqJwFyue5TGRK8%2FrDPnew2a7qswvKM788uZrE2ED2roUgU0n%2FKyObKlYR1IpQAqg0RIFW8CYWeFBcTqVATfflV9em9gTyDnOBeDvPo2TdZM6UVRUJzkvNGmDq1B0T90GYFz29fsCqDn9HTtW37jSGJui7Z%2BgcFOQGBaFnMPg7IJlJAZeD3%2FoDE0PHK76jqBhDMi2O8vg%2BE%2FBycNCYJFHbaMePwHLn9C7kzZugXzDni2yuj4HTf6w%2BlH%2FZgHbcX1GkldSO0pY76ID6G%2F3mBPrdgQO8zF%2F6CAfCbIKy9uJ3hMX%2BKhHHZyszUT0j4SkMW5w1ONmwlt4z5xZIeqeYhfMe3f8XdOFscZsaZC%2Ffzvaxu%2BG7sPXpjIFi9J%2F9xRr011eCOp%2FqZdoY9NMRwLw0UMLLLgb8GOqUBNxgMCzq38tEIPVL6hdkJIvsLgb%2FtNL3oZI7265bv3Qc0%2B98524vIiwoY4AJNcMwig%2BPFF7HiGauxbKlDsW9mthzUjvkWxyUKxDvnA1F0xoBohUPKI5Q6iVSOmypCWvYxXdvBv%2BqoU%2BHjEn4%2BPGvZiAT9vFcIoSglSfIY42AksetLR9tbtnTHCmkhZOtr0ln2HSaJfx33za4yLAES%2Fo7YM8asnfWv&X-Amz-Signature=baf327c96c40fb7d07a3a43f0e10b38f6651e2e3e4f77039a1562559bbf67029&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PRSRUT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOkms%2FisRcFC%2FrUrbK6%2Bsq3yB0LIKG7hKHb2GUtb%2FmSAiEAgKBOYFC5JiDw3oWeZWeS8ncxdpMbSLPfDuflgrqyK%2F8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtTx4RnpUUm%2B7kkGCrcA5ifNePZlXR85BlzkQYdqJHeE3Oneq9UM0ChfsffttxjDsYpKQuA5Wv3OlRn%2BZel297RrcrEM5zimZ%2F2YYUe6J5RhBOEf4QL7PY9hGwTQfrImYGwT7wt2oq0REwCeUHtK4G0aGDrWCT9PSHtfed7ImQTFtDK8AnfwqcsUMZ58YkoZfj3y8NwZZPSDo%2Bx5eNiRox%2Fnspr22JnfHwiIXT6Y9wZS8CsxvfmJ0nzUD%2BTTVlqJwFyue5TGRK8%2FrDPnew2a7qswvKM788uZrE2ED2roUgU0n%2FKyObKlYR1IpQAqg0RIFW8CYWeFBcTqVATfflV9em9gTyDnOBeDvPo2TdZM6UVRUJzkvNGmDq1B0T90GYFz29fsCqDn9HTtW37jSGJui7Z%2BgcFOQGBaFnMPg7IJlJAZeD3%2FoDE0PHK76jqBhDMi2O8vg%2BE%2FBycNCYJFHbaMePwHLn9C7kzZugXzDni2yuj4HTf6w%2BlH%2FZgHbcX1GkldSO0pY76ID6G%2F3mBPrdgQO8zF%2F6CAfCbIKy9uJ3hMX%2BKhHHZyszUT0j4SkMW5w1ONmwlt4z5xZIeqeYhfMe3f8XdOFscZsaZC%2Ffzvaxu%2BG7sPXpjIFi9J%2F9xRr011eCOp%2FqZdoY9NMRwLw0UMLLLgb8GOqUBNxgMCzq38tEIPVL6hdkJIvsLgb%2FtNL3oZI7265bv3Qc0%2B98524vIiwoY4AJNcMwig%2BPFF7HiGauxbKlDsW9mthzUjvkWxyUKxDvnA1F0xoBohUPKI5Q6iVSOmypCWvYxXdvBv%2BqoU%2BHjEn4%2BPGvZiAT9vFcIoSglSfIY42AksetLR9tbtnTHCmkhZOtr0ln2HSaJfx33za4yLAES%2Fo7YM8asnfWv&X-Amz-Signature=0d01d1132dfa3303482c13029276be7170c9fc9ef8a73cac99dc9acf13c986ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
