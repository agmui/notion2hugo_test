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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHTMPV7S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDm07y0s1tfMR4X0clXwbX3G%2Bd6H8rckXU3c15l72VpFQIgcT1Hc1zy0EEDl%2BM6%2FRp%2BaRI5GKYpVc5yUFnyQ69L2bwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDPuTCZxX7rzF1EO6KCrcAxcHxb%2FHC2CQ83t499GPU99oeSG52JYEXDH9mCuo3K82jxQCgP5%2BKEV6alWUPhLJB5Tptajz2qw17RMRPaFQQJUskv%2F9rMFVrToMfexL2XgNxux3cSxJmUAOJQ6XMDwpeQdIS6VI2xR3Ah%2F2EivB4f8tfj5f8DTXo630E%2FlihUbXOjLys%2BH7gWXs4dZ418z%2FCfbUIe1xpCd5NNYUOmuVJxmWElfONdZQbnRcMdR7XdvvfmNrRYhojrHMTRCgJLQ7st6iuZmfgcVcrSKsU8YMJUH9Kz9hPg1ulzaEQavhNBle1FKoOmL46KZ3p6TdT4Vo5c%2FgrTq07lNEjGvmyNg1fe2zwi6gJS9FJAbK7dEZggCuWQqIovc%2F0JCMHp%2Bv6uhgaEH3LEmO50U2Zs7mhgcKz6Vb45A3ueHl3hWfIeipa8IeSHMT1In%2Fv3trLDbitZf%2BdftDzgVa9eBu1wPbRruVSc8l1DgVlKfASg4TEd9UxLWHYA%2F4p8E27zCFF%2BCd%2Fff4qfpiFG8%2Fteqo1K1kpLJmo3VGOZotUnGEwWzaE3ypySHzMV4aYrAzJICkGhuUNLjMzSmhiqA4mogT%2BqLyGP0LITcqHFk%2BrX%2FotlJu%2BCGZfmxyhQmHFviAReS9sLCfMImOnMMGOqUBguDcqYSitLxzG16rpRijb%2BSx%2B7sUe9zQ%2B8WGwhGDlQn%2F%2BR6wgJ5IF9Es%2BELyv%2Bnbip54aREF0ECShaxi3aKahQy0VR6TD8B4ERT2i4O5CMKFj5oQ8k%2F7w2N64JO%2FKhxQMTrmZHyz7XMO3PaxpIfigMUeqF%2BWbBK4417RrZpECsudZXcVGWO7xYRtfNQSzh%2BBQ9YG5o%2BJNm7wyoyklwpbxstId19x&X-Amz-Signature=d12726c4defbbc07d8edc9fbb9694fb5a7b1e40fbef47d0c991fa589144117dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHTMPV7S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDm07y0s1tfMR4X0clXwbX3G%2Bd6H8rckXU3c15l72VpFQIgcT1Hc1zy0EEDl%2BM6%2FRp%2BaRI5GKYpVc5yUFnyQ69L2bwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDPuTCZxX7rzF1EO6KCrcAxcHxb%2FHC2CQ83t499GPU99oeSG52JYEXDH9mCuo3K82jxQCgP5%2BKEV6alWUPhLJB5Tptajz2qw17RMRPaFQQJUskv%2F9rMFVrToMfexL2XgNxux3cSxJmUAOJQ6XMDwpeQdIS6VI2xR3Ah%2F2EivB4f8tfj5f8DTXo630E%2FlihUbXOjLys%2BH7gWXs4dZ418z%2FCfbUIe1xpCd5NNYUOmuVJxmWElfONdZQbnRcMdR7XdvvfmNrRYhojrHMTRCgJLQ7st6iuZmfgcVcrSKsU8YMJUH9Kz9hPg1ulzaEQavhNBle1FKoOmL46KZ3p6TdT4Vo5c%2FgrTq07lNEjGvmyNg1fe2zwi6gJS9FJAbK7dEZggCuWQqIovc%2F0JCMHp%2Bv6uhgaEH3LEmO50U2Zs7mhgcKz6Vb45A3ueHl3hWfIeipa8IeSHMT1In%2Fv3trLDbitZf%2BdftDzgVa9eBu1wPbRruVSc8l1DgVlKfASg4TEd9UxLWHYA%2F4p8E27zCFF%2BCd%2Fff4qfpiFG8%2Fteqo1K1kpLJmo3VGOZotUnGEwWzaE3ypySHzMV4aYrAzJICkGhuUNLjMzSmhiqA4mogT%2BqLyGP0LITcqHFk%2BrX%2FotlJu%2BCGZfmxyhQmHFviAReS9sLCfMImOnMMGOqUBguDcqYSitLxzG16rpRijb%2BSx%2B7sUe9zQ%2B8WGwhGDlQn%2F%2BR6wgJ5IF9Es%2BELyv%2Bnbip54aREF0ECShaxi3aKahQy0VR6TD8B4ERT2i4O5CMKFj5oQ8k%2F7w2N64JO%2FKhxQMTrmZHyz7XMO3PaxpIfigMUeqF%2BWbBK4417RrZpECsudZXcVGWO7xYRtfNQSzh%2BBQ9YG5o%2BJNm7wyoyklwpbxstId19x&X-Amz-Signature=137c9eb103938d979f78222c8290979d582ceb344343ed33f60314c5dee6ee42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
