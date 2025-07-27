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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHLWOUU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICTOSNfU1qcrS5eT%2FoijUHdsKBZmVk7yPw0CazYC1xzXAiEAkEgpiMYmkgjdHa%2F8L6olD3sK9LfC6SXvDxzvgRNGOusq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGsQao2XKY56LXKF6ircAxY4DDHnpuCUlYq%2FLfSbXl8nif2sKimNScKMsJJmECtlTzm%2FBm43MxNGTa54l%2FEM2pXa1QDBpem5whAsqzlL6llRUZMMD6v3ye7KpfT3Vq%2F7YTuNZvpeCZBne52HaOpLDRTozkfcvGddMhnWIDfMoTpt8%2Bg2fZqHwIY8R53eSyujsKBZc%2Bwap2fKIzq%2FBcshedKtSOnPQQgEw3PNGY%2FKdBHNg6LECIkY4ha%2FNwcPXMNWGxSTHywgUwXlx2mCyiqBykDcGeXSzc6rJpClRHky8%2B1wv9OcXh48WQNPTxKOboNi3tnzZGiJYVxLwueZfnGFDXj3F8OZdTsw%2BKtHtTtFfdI5KDvy8TDEwOMOiUPcnsex%2FSP9rGOVWwTaTl3ltCR5WKaQxK1rdLPJ%2Bs3ZJOBfqH%2Ft5AMElw359jGk922Qidpe99zjgmukpIeVSlLwV3c%2F3yBz5gmy0lzw%2FIxpu4Rl9piPt0xGDD0ZZw2OvtFn%2BIiHWXPcXCqnUI%2FwCA5KxIElk8lhBC37L4qnTaM1JzzgG0kGAb7gj3U4uTKeCEppwJWM8ECYCAYdAZ0Bchlxw2MmBRUUn8OUWb5damtgNLsDCl7MWK39aVofifMjgFwfY3uULSeLp9se9%2BVnsl3%2FMJ2HmcQGOqUBtxtN1jzPTnhHyDwSslim%2BBDNXa53cTWPnj%2BLht593%2FBEGFY4qL9armBC87javTqEGM6aPh%2FxMpjdWjlU9hNqHcms%2FUfYwSdV%2FzZe493z5hSXp98asuAmsQLJD52PJsLD28OHJNoEHNmGNPgdDGKIXan8%2Fw5pw2Sm5tP%2BcJ5B6xNhbyu9vhPGdrJUmSPdFWVW1XUh9fD%2B23IoJ%2B35puJzjXms%2BqPO&X-Amz-Signature=c126d83cbe1cbf9799e4b9008f297f21a6e418f0045b938778c36cffdf515d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHLWOUU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICTOSNfU1qcrS5eT%2FoijUHdsKBZmVk7yPw0CazYC1xzXAiEAkEgpiMYmkgjdHa%2F8L6olD3sK9LfC6SXvDxzvgRNGOusq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGsQao2XKY56LXKF6ircAxY4DDHnpuCUlYq%2FLfSbXl8nif2sKimNScKMsJJmECtlTzm%2FBm43MxNGTa54l%2FEM2pXa1QDBpem5whAsqzlL6llRUZMMD6v3ye7KpfT3Vq%2F7YTuNZvpeCZBne52HaOpLDRTozkfcvGddMhnWIDfMoTpt8%2Bg2fZqHwIY8R53eSyujsKBZc%2Bwap2fKIzq%2FBcshedKtSOnPQQgEw3PNGY%2FKdBHNg6LECIkY4ha%2FNwcPXMNWGxSTHywgUwXlx2mCyiqBykDcGeXSzc6rJpClRHky8%2B1wv9OcXh48WQNPTxKOboNi3tnzZGiJYVxLwueZfnGFDXj3F8OZdTsw%2BKtHtTtFfdI5KDvy8TDEwOMOiUPcnsex%2FSP9rGOVWwTaTl3ltCR5WKaQxK1rdLPJ%2Bs3ZJOBfqH%2Ft5AMElw359jGk922Qidpe99zjgmukpIeVSlLwV3c%2F3yBz5gmy0lzw%2FIxpu4Rl9piPt0xGDD0ZZw2OvtFn%2BIiHWXPcXCqnUI%2FwCA5KxIElk8lhBC37L4qnTaM1JzzgG0kGAb7gj3U4uTKeCEppwJWM8ECYCAYdAZ0Bchlxw2MmBRUUn8OUWb5damtgNLsDCl7MWK39aVofifMjgFwfY3uULSeLp9se9%2BVnsl3%2FMJ2HmcQGOqUBtxtN1jzPTnhHyDwSslim%2BBDNXa53cTWPnj%2BLht593%2FBEGFY4qL9armBC87javTqEGM6aPh%2FxMpjdWjlU9hNqHcms%2FUfYwSdV%2FzZe493z5hSXp98asuAmsQLJD52PJsLD28OHJNoEHNmGNPgdDGKIXan8%2Fw5pw2Sm5tP%2BcJ5B6xNhbyu9vhPGdrJUmSPdFWVW1XUh9fD%2B23IoJ%2B35puJzjXms%2BqPO&X-Amz-Signature=e5d33f274468c26523b280fac1a02015bb678f32fc27f92bc1bf33d877e63310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
