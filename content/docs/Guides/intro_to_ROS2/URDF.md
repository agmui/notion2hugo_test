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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KGG3PV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCtmmrJ2%2FpCn2d5QayQO5r%2BVEnfr8GfgcrPSRngO8fSaAIhAINSlnNE7GkI6YQjO6VjGNwzrl5hMaceQDZT0qA7tkgbKv8DCHQQABoMNjM3NDIzMTgzODA1Igy7CSP3%2BmhkODvONFQq3ANPwsettXdw%2FvexN2x%2FbSNsejg873ueBYberYgtYqBzgIOfuY2KCQ0yC0GDexuhkv9LHUKxs1mPI57DpXkkxzD2ywwjMUbiaqRw5zaNeKxyNesofi12fE%2FHahBkUlAOeaaQ%2BYPZKTbC%2B3OAZgeI7fu41dV2NBUqglG1tdAq0Rr%2BmspcLa%2B81OYWrQke5zCVgpfLLA109Fh80B%2BkvJ0ZtkzRU4Tuu8V3WMYUNkyNB3vmw3tqwy45OZdIhN512DHmm69Vvzy25P27wTxTjju1WztmuUhOZI0tdGMGax1kosccVc7t%2BgAEcGMu3Chn8VE%2BGifP9g7q7BbKCxE5oaOY0yI3CJJ9FWqo5Z2uzFLdYE%2Feotx6zgeyH6tO7kaPiJ4hO6r52YfGmlH8gYjS2TNQQ2O0m5qrkP8sVd95CJHMu2YGul0pHDoxd1z6xdQdv9E4FbPidf9hWAmQeJ82rDJqBtOdzjqqpy31Yb2GFWw3GTc4LQQb5i0m6HojI251vR3voysYuchaSbYmKDEbaeC2p9esSlLBgUCVPhkm4tAeGV0a%2B5kg26XvfeItPPMkCUm2ikUi%2Bquv546ajKcYI7k5fjkiqshNQxPZVy7Gtl5krZkGgimO1KFCiDLTVzRe2TDuv%2Bq%2BBjqkAZ5jAhETZpyT8XWpQj%2B485jZDE7hnRxwUN53O5LU6fHZvE%2FOq7wCGT7Hc5CVzvVkBkyoNClIspi3I%2BBUsS%2BQ%2FM3ibp6GBRz18nJUwpbFcpzIqPVfGmNU8eIhfWLzM%2BugAfBpY%2BGuqFhzwjAObD%2BkmT7TtUJx2Mnwc0yJHpumAoNmUEDyQOp79id%2FNDEdOVsrX8fRLW8EsuhGjhGLgasXz7nyKXwe&X-Amz-Signature=711ecec979d45a218893597fc0ed6f5a07ba9b4ae3e6f11f15f45ca8a2e3d838&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KGG3PV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCtmmrJ2%2FpCn2d5QayQO5r%2BVEnfr8GfgcrPSRngO8fSaAIhAINSlnNE7GkI6YQjO6VjGNwzrl5hMaceQDZT0qA7tkgbKv8DCHQQABoMNjM3NDIzMTgzODA1Igy7CSP3%2BmhkODvONFQq3ANPwsettXdw%2FvexN2x%2FbSNsejg873ueBYberYgtYqBzgIOfuY2KCQ0yC0GDexuhkv9LHUKxs1mPI57DpXkkxzD2ywwjMUbiaqRw5zaNeKxyNesofi12fE%2FHahBkUlAOeaaQ%2BYPZKTbC%2B3OAZgeI7fu41dV2NBUqglG1tdAq0Rr%2BmspcLa%2B81OYWrQke5zCVgpfLLA109Fh80B%2BkvJ0ZtkzRU4Tuu8V3WMYUNkyNB3vmw3tqwy45OZdIhN512DHmm69Vvzy25P27wTxTjju1WztmuUhOZI0tdGMGax1kosccVc7t%2BgAEcGMu3Chn8VE%2BGifP9g7q7BbKCxE5oaOY0yI3CJJ9FWqo5Z2uzFLdYE%2Feotx6zgeyH6tO7kaPiJ4hO6r52YfGmlH8gYjS2TNQQ2O0m5qrkP8sVd95CJHMu2YGul0pHDoxd1z6xdQdv9E4FbPidf9hWAmQeJ82rDJqBtOdzjqqpy31Yb2GFWw3GTc4LQQb5i0m6HojI251vR3voysYuchaSbYmKDEbaeC2p9esSlLBgUCVPhkm4tAeGV0a%2B5kg26XvfeItPPMkCUm2ikUi%2Bquv546ajKcYI7k5fjkiqshNQxPZVy7Gtl5krZkGgimO1KFCiDLTVzRe2TDuv%2Bq%2BBjqkAZ5jAhETZpyT8XWpQj%2B485jZDE7hnRxwUN53O5LU6fHZvE%2FOq7wCGT7Hc5CVzvVkBkyoNClIspi3I%2BBUsS%2BQ%2FM3ibp6GBRz18nJUwpbFcpzIqPVfGmNU8eIhfWLzM%2BugAfBpY%2BGuqFhzwjAObD%2BkmT7TtUJx2Mnwc0yJHpumAoNmUEDyQOp79id%2FNDEdOVsrX8fRLW8EsuhGjhGLgasXz7nyKXwe&X-Amz-Signature=09aba999ef09ea1e52a0d4628c6bc5bb1890b39eb9f29f645f80f17f5cf6219f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
