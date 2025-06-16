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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWWSBUZZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIC%2FG6Mq6A0JdHYD2P7Sxr2qziQP9btRwiBalc7gzed1cAiEAu%2F4X2uPfF2VUcwk1pjdL6TDprrlyrYkLbbU4DMuOgmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEqEd6oqJj2oJrhs2SrcA%2BoUDxl%2FYk7cU5th8Jufh5SFXhilGigVf39qCssKtPq01eohWsBXQNyN5me5OyjixD08tu0Sk%2Blaubm%2B%2BoITge5idBko6%2F4HQISlV1PWOFvf44d0TMcIh3DiNqo68C%2ByJgj6ZI0VBoC9rwrquBK5WqKyHmZD8DqMRsJqOGjkJT1PJF88McrTklFmnZ19b7hSSKZrjprTHSzF4raots2ucQesH0yJhqhUiJR9u4vVaFiQDg%2BsPextqNX%2Fe5yR7mDyfu%2BM3nKHlfYcvu0mD7WiatrL%2FFNwd5zUBpYEHEqP39XrUJpW0jhCsSzsfDJxYzurhbI0OIgmBxec6y4Y3i0309cmVNRoK7GD4plr5qDgq7ahBHaBVJobnsWzQ%2B57BXV7qUk6lGgPTI%2BBV%2BMuSrQ82zFGy117b5yArJuBcsL0%2FtEAh6tk%2BcR28v%2B%2BMdfQ9t9aGtrUaJ2Xw0%2BAstvleFsN4ky2v56YenlR2aWVIBQOU2RT%2FzN12hwcJdhhJu3p3o3X4l0JNdWgiGoUrh4NDCtgGUCBL1vxsW8hQgPLhYliXTJlKr%2BIpqy%2FHjwG8egIUGrxiNWlMJMkov8H4PQMSzGhfH2rx2AlGHu8SYj9f3arcIP4MSWGLEXRdwcS%2FRWKMODfwcIGOqUBPAtriVJ5eq3rQFzZqs%2BDJ1wFjILA0wYuCOeltjvlvREAdhwRD7w%2FaXqwITjQAfiNQfrzNg4DyEbeel6XszIs3Zh55qrF4Aezyxt9jxb%2BRH2PHUcoBX3ZYZvhvbHrGh5bq67lcrWWMKmpD%2FlfMUHcaIDfrYL4T6qjOlelj7yKjnHDbXkfjPCs2510vC7knoTS15TFsQAAAXQYM649N4TfMDqMAZsJ&X-Amz-Signature=1ba2894039cf155368846bada935f60ff2aac24b07ca0c95135448820105f25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWWSBUZZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIC%2FG6Mq6A0JdHYD2P7Sxr2qziQP9btRwiBalc7gzed1cAiEAu%2F4X2uPfF2VUcwk1pjdL6TDprrlyrYkLbbU4DMuOgmMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEqEd6oqJj2oJrhs2SrcA%2BoUDxl%2FYk7cU5th8Jufh5SFXhilGigVf39qCssKtPq01eohWsBXQNyN5me5OyjixD08tu0Sk%2Blaubm%2B%2BoITge5idBko6%2F4HQISlV1PWOFvf44d0TMcIh3DiNqo68C%2ByJgj6ZI0VBoC9rwrquBK5WqKyHmZD8DqMRsJqOGjkJT1PJF88McrTklFmnZ19b7hSSKZrjprTHSzF4raots2ucQesH0yJhqhUiJR9u4vVaFiQDg%2BsPextqNX%2Fe5yR7mDyfu%2BM3nKHlfYcvu0mD7WiatrL%2FFNwd5zUBpYEHEqP39XrUJpW0jhCsSzsfDJxYzurhbI0OIgmBxec6y4Y3i0309cmVNRoK7GD4plr5qDgq7ahBHaBVJobnsWzQ%2B57BXV7qUk6lGgPTI%2BBV%2BMuSrQ82zFGy117b5yArJuBcsL0%2FtEAh6tk%2BcR28v%2B%2BMdfQ9t9aGtrUaJ2Xw0%2BAstvleFsN4ky2v56YenlR2aWVIBQOU2RT%2FzN12hwcJdhhJu3p3o3X4l0JNdWgiGoUrh4NDCtgGUCBL1vxsW8hQgPLhYliXTJlKr%2BIpqy%2FHjwG8egIUGrxiNWlMJMkov8H4PQMSzGhfH2rx2AlGHu8SYj9f3arcIP4MSWGLEXRdwcS%2FRWKMODfwcIGOqUBPAtriVJ5eq3rQFzZqs%2BDJ1wFjILA0wYuCOeltjvlvREAdhwRD7w%2FaXqwITjQAfiNQfrzNg4DyEbeel6XszIs3Zh55qrF4Aezyxt9jxb%2BRH2PHUcoBX3ZYZvhvbHrGh5bq67lcrWWMKmpD%2FlfMUHcaIDfrYL4T6qjOlelj7yKjnHDbXkfjPCs2510vC7knoTS15TFsQAAAXQYM649N4TfMDqMAZsJ&X-Amz-Signature=c8c195d68bbb540fda74bbabcca3e0b899a5a8d55bef4d8cc4692827eae10a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
