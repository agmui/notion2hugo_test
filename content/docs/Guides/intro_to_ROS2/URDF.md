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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBYGOTWA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID6ZzYzuI48zkkvnZFn5aSKGQ3Mxm1quHZHHNebXqs8sAiEA44LKmOhhwuFgqGcjCXarRrzQ4ciIm5YGJNNPxznTnY8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIAhBLz2CaRQw91z7yrcAxE0XuTzbyygAW7FFKDYnPlQ7IPRS%2BT%2BX4Oy9cxq1M6wPiBuRbz1BCJi9erOTMAWN36%2BkNQtFRv1uWr6mshxk9bNHffvYdKDh1wv94G%2BfmLwDtljBzFJZxE7bfgZbxb40x2Vgb5blOIVdId61qCAY8P2qlQ5xUDPT9rWFG2tRPbRnq%2FWz638rCVqJIs8NYTaLEQF%2F5Bk5nuzkpCcf1A6qVQ7c11v6xwyLIdqaoE2od5x%2BvxeGNdpObvmd9O%2FqHhDbpMrf7qcPFY69bYYqmH8ZO5NRDc3NMfgQ0h6KD1D9JnZ582e0flaKlCVkUq%2BYz857bFQMgMF5NKQMQarQJhVSIfbQqZOlCVEssyCVMkVotHUpmPHTuzHTbxQRghDzcW4SbNQlkVC4rw83wQm3VMO9oAvspSEuuRPMn4ilh10uaKEXS4w3PxFVbobd9XS%2B5ZC2rGvF9Enlii7HLigwxkwXXy%2BA54e3WOmgdWPL2lpY6%2BLuptoTY9%2Fq2dZe4mb4fn4Ww1ndIvUl53u6sOq1YfjppR9hdrQCjPXxDHF15VYGUKLgQdkHWGks1leew9hkLpmob8hqhOQ%2F%2FV02vTMekBo6KRxCHKwy5AjcaWbVFjSZ8ypJ9Dr0qWlpo5p3e63MNzEr8IGOqUB5glwbJPt%2F3q8ng%2FAA4Dg7PpIMevpVxmGDDeL1pPvQfv7ceyaxxRUf2IC7JgxvNLwATM4sXNz8hHe2ge8f0Ac3HvXoKA269Dh4jGvjnY6I%2B3wQY2yrmu9PrTODbcUwdIc4XRrj2sOBp4OYQZtat3HtdME9MVbfBR7Wn%2FDsYWT1xNQSq%2BP1H%2BgI8qjZK6o19oVQpvsGkUYL6IYrug5mrcQhh0uTXcE&X-Amz-Signature=832eaac2d12ba444a48b569f0d10e709918eb8e79dfe047ba3d999d7cdfeebaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBYGOTWA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCID6ZzYzuI48zkkvnZFn5aSKGQ3Mxm1quHZHHNebXqs8sAiEA44LKmOhhwuFgqGcjCXarRrzQ4ciIm5YGJNNPxznTnY8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIAhBLz2CaRQw91z7yrcAxE0XuTzbyygAW7FFKDYnPlQ7IPRS%2BT%2BX4Oy9cxq1M6wPiBuRbz1BCJi9erOTMAWN36%2BkNQtFRv1uWr6mshxk9bNHffvYdKDh1wv94G%2BfmLwDtljBzFJZxE7bfgZbxb40x2Vgb5blOIVdId61qCAY8P2qlQ5xUDPT9rWFG2tRPbRnq%2FWz638rCVqJIs8NYTaLEQF%2F5Bk5nuzkpCcf1A6qVQ7c11v6xwyLIdqaoE2od5x%2BvxeGNdpObvmd9O%2FqHhDbpMrf7qcPFY69bYYqmH8ZO5NRDc3NMfgQ0h6KD1D9JnZ582e0flaKlCVkUq%2BYz857bFQMgMF5NKQMQarQJhVSIfbQqZOlCVEssyCVMkVotHUpmPHTuzHTbxQRghDzcW4SbNQlkVC4rw83wQm3VMO9oAvspSEuuRPMn4ilh10uaKEXS4w3PxFVbobd9XS%2B5ZC2rGvF9Enlii7HLigwxkwXXy%2BA54e3WOmgdWPL2lpY6%2BLuptoTY9%2Fq2dZe4mb4fn4Ww1ndIvUl53u6sOq1YfjppR9hdrQCjPXxDHF15VYGUKLgQdkHWGks1leew9hkLpmob8hqhOQ%2F%2FV02vTMekBo6KRxCHKwy5AjcaWbVFjSZ8ypJ9Dr0qWlpo5p3e63MNzEr8IGOqUB5glwbJPt%2F3q8ng%2FAA4Dg7PpIMevpVxmGDDeL1pPvQfv7ceyaxxRUf2IC7JgxvNLwATM4sXNz8hHe2ge8f0Ac3HvXoKA269Dh4jGvjnY6I%2B3wQY2yrmu9PrTODbcUwdIc4XRrj2sOBp4OYQZtat3HtdME9MVbfBR7Wn%2FDsYWT1xNQSq%2BP1H%2BgI8qjZK6o19oVQpvsGkUYL6IYrug5mrcQhh0uTXcE&X-Amz-Signature=054423ace633e9f521709c8a91e4c4557f3fef6d6ea19610e699af600e478944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
