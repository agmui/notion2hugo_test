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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKNNIQ5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4Wl%2Frh4DJ8BG1R3vvSUd2Mfo5c6kapkFbfeBcVyBH7AiEAyd5DHMN0rvO9x7jInClyh3bDuagTsbTFyCHVFkVmW2sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvpJ10O5e6sMnscLyrcAxnBCrFiAME2ddOUjAwN1nyqVDNPjV270gv0ZQ2S5QPcn%2FkorvDHhG8YlkOxMmY%2BhgLF8J6OgLkyddnPk8fZkQRn9JgQBEh1yZKnDeP6BwkhrFghRvRoTbp%2FKAwrXHeTfG%2F%2BF6d42aF%2Fj8phHOkc1SvRbPyNkr38guKI9AOZXszCXVOnZcOztmDvig0tK7yk8jSPS1Sz%2FwYFgISnMOoEiUDet6WoB3OBr50c8eZr%2Bpr10z4inz5Z4eIntPf19IyDSsf7KOFBybfGnztuST6peX1w82H1gKMln16pdl3mDD%2FYK2x8uuNTbgHs3n2sgcMrk8htts4%2Bq1ksz%2F68WIxamjO2yctPIOX8tqKMSZUe5rQARFnYotZ93lCJTLX53zBompDjfz60cxfqJG4bK0FbhX7PYn6wzzCAQofi0sHZwF067mj4KPZkTYnTuDT21%2BNLwB4B8HVFTuJZhPnPO1nBY1Wlcx2v6KUPrlVSFZdQxu2Ma7BDTz%2BHi4Jkwbbti20JI6UV0qv%2FfXh9QUnqjwW8UJYAzpKcOEk4lNAyKIGaU2mdxJ8dKqv1nuLGp9klayYOHLNhYqmMvsVK3I0zk1s8rMTKIiCD6h5tXBRic71VSOkKiHmBoJ5m6Y1gffsfMIWNysIGOqUBbcTDT9X5VPvMzBlvXGmNKlVR%2B4wVUzM%2FDPel4yVYPsbEkBt%2FPAroZdAfiY%2B8juf7QdMkX36A8c4VTUC6cAlGrbhvP40uFD0XA%2BY3f3RmU6OJFRbLi2mJpSJBOnP5I04rTi7FvIaTWJsg459hOIfQDaN0jfb0IE5ARMa%2Bh4EW6v57dt%2FCXNj%2Fj%2B6cLccmIWw9iavdTjvg3YshDThS71XdpKsnKhqd&X-Amz-Signature=e5b5ec9a309e74aa9023333a447a52888a731bc00062f4b4ae542fec26c3c3c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROKNNIQ5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4Wl%2Frh4DJ8BG1R3vvSUd2Mfo5c6kapkFbfeBcVyBH7AiEAyd5DHMN0rvO9x7jInClyh3bDuagTsbTFyCHVFkVmW2sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvpJ10O5e6sMnscLyrcAxnBCrFiAME2ddOUjAwN1nyqVDNPjV270gv0ZQ2S5QPcn%2FkorvDHhG8YlkOxMmY%2BhgLF8J6OgLkyddnPk8fZkQRn9JgQBEh1yZKnDeP6BwkhrFghRvRoTbp%2FKAwrXHeTfG%2F%2BF6d42aF%2Fj8phHOkc1SvRbPyNkr38guKI9AOZXszCXVOnZcOztmDvig0tK7yk8jSPS1Sz%2FwYFgISnMOoEiUDet6WoB3OBr50c8eZr%2Bpr10z4inz5Z4eIntPf19IyDSsf7KOFBybfGnztuST6peX1w82H1gKMln16pdl3mDD%2FYK2x8uuNTbgHs3n2sgcMrk8htts4%2Bq1ksz%2F68WIxamjO2yctPIOX8tqKMSZUe5rQARFnYotZ93lCJTLX53zBompDjfz60cxfqJG4bK0FbhX7PYn6wzzCAQofi0sHZwF067mj4KPZkTYnTuDT21%2BNLwB4B8HVFTuJZhPnPO1nBY1Wlcx2v6KUPrlVSFZdQxu2Ma7BDTz%2BHi4Jkwbbti20JI6UV0qv%2FfXh9QUnqjwW8UJYAzpKcOEk4lNAyKIGaU2mdxJ8dKqv1nuLGp9klayYOHLNhYqmMvsVK3I0zk1s8rMTKIiCD6h5tXBRic71VSOkKiHmBoJ5m6Y1gffsfMIWNysIGOqUBbcTDT9X5VPvMzBlvXGmNKlVR%2B4wVUzM%2FDPel4yVYPsbEkBt%2FPAroZdAfiY%2B8juf7QdMkX36A8c4VTUC6cAlGrbhvP40uFD0XA%2BY3f3RmU6OJFRbLi2mJpSJBOnP5I04rTi7FvIaTWJsg459hOIfQDaN0jfb0IE5ARMa%2Bh4EW6v57dt%2FCXNj%2Fj%2B6cLccmIWw9iavdTjvg3YshDThS71XdpKsnKhqd&X-Amz-Signature=68a21ac9003bc8c7e42588a6810e35e8242a0973e3f0fe48eb2e1cb1b9632e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
