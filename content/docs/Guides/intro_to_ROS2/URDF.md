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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJRMZHP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsGmMAeyo5YuK%2BhjqpZDGwA5OdXxdVSe2mYnpET%2FeZugIgIvq1pSMlH18I%2BFeYH6Za0%2FYMF0n6yMzsD5YiVIX0JM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FW4RNfP8EJFfG7zircA17UTtYS4liyd5mJtl22KTSuU7d59rxEil3bAJB7sMpKpGaC9xheUyECVvQl1JVLh7BRsqI%2FGKn%2FG%2FHt4HMi1QuP818RkDG8gZ5npvLnRlNFOzidrwNxLa6qf%2F4hpuc1ZBoOdFgdeebi24EhBXxAZ3uzyf%2F3b7sztvbGtnWA0%2FIESIHo1Mue%2FnXCsi9m9lzlYqHDDG7JuJjL0BSpZGl2cYBwMmb1e%2F3QEgA79WTk089S7SNPknS4j66Okb30Qi%2FKTdPF5asq1MC8HXRnTiE%2Fkkx%2BLreUSFpC8%2FBelo1nFBkNhHsxDsxbftCAY%2BzHQjDjsIkudzqoN0K5efWT%2BH2WhJOSijRJ%2Fp1tlPOqzSGMoKIKG8cEfqYvSWe37SP%2BsI4xeGa88OxOpQA6822tcshOIdmHN4DXGguuQRx4dcPkz%2BsARC65dLkpeYnMmM82B44eFudZvgqixmgLQYfqkekUdY%2BEFFyofoxA4Us47Xk7BwFDbFbQ%2FF3%2FGSaI3i0V9NbN4K9gxzVTeuASvr51sfauzxlaoM2guSr5AAYTpoDvi4kLvIOmtdLj5dE22Iusvdd2t%2BWwZagy%2B3qdCgQifopeCGovsEQtqESP3TLP1u42LKKeyWFxcYdjSVwIJWzbMMyssMEGOqUBMiz5GfJ5q7eiloobtEIJxbf63BCf3wPlIVaWUuYdASKPh9YkImOGFzG7%2FznkiAR0p9HdehU7V2MezpvUt%2BCVDKt%2BZbehBYpVdZUTf5TmfYLNg%2BeogVLQ%2BJ9S%2FTfFIs4dB4oMVQ%2B%2BsWdKpCYkv4VseqkAT0LXi2Gspy%2BUsBz0H0z5Xe7kKpSf3mq3ePWqXK3J8P0dgHWG0udx3iej%2BJKZ5NZCGdL0&X-Amz-Signature=11b0cbf4fd6483699b26c1fdc69cd28d2aedd67990417fa01a47eadf989d08a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJRMZHP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsGmMAeyo5YuK%2BhjqpZDGwA5OdXxdVSe2mYnpET%2FeZugIgIvq1pSMlH18I%2BFeYH6Za0%2FYMF0n6yMzsD5YiVIX0JM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FW4RNfP8EJFfG7zircA17UTtYS4liyd5mJtl22KTSuU7d59rxEil3bAJB7sMpKpGaC9xheUyECVvQl1JVLh7BRsqI%2FGKn%2FG%2FHt4HMi1QuP818RkDG8gZ5npvLnRlNFOzidrwNxLa6qf%2F4hpuc1ZBoOdFgdeebi24EhBXxAZ3uzyf%2F3b7sztvbGtnWA0%2FIESIHo1Mue%2FnXCsi9m9lzlYqHDDG7JuJjL0BSpZGl2cYBwMmb1e%2F3QEgA79WTk089S7SNPknS4j66Okb30Qi%2FKTdPF5asq1MC8HXRnTiE%2Fkkx%2BLreUSFpC8%2FBelo1nFBkNhHsxDsxbftCAY%2BzHQjDjsIkudzqoN0K5efWT%2BH2WhJOSijRJ%2Fp1tlPOqzSGMoKIKG8cEfqYvSWe37SP%2BsI4xeGa88OxOpQA6822tcshOIdmHN4DXGguuQRx4dcPkz%2BsARC65dLkpeYnMmM82B44eFudZvgqixmgLQYfqkekUdY%2BEFFyofoxA4Us47Xk7BwFDbFbQ%2FF3%2FGSaI3i0V9NbN4K9gxzVTeuASvr51sfauzxlaoM2guSr5AAYTpoDvi4kLvIOmtdLj5dE22Iusvdd2t%2BWwZagy%2B3qdCgQifopeCGovsEQtqESP3TLP1u42LKKeyWFxcYdjSVwIJWzbMMyssMEGOqUBMiz5GfJ5q7eiloobtEIJxbf63BCf3wPlIVaWUuYdASKPh9YkImOGFzG7%2FznkiAR0p9HdehU7V2MezpvUt%2BCVDKt%2BZbehBYpVdZUTf5TmfYLNg%2BeogVLQ%2BJ9S%2FTfFIs4dB4oMVQ%2B%2BsWdKpCYkv4VseqkAT0LXi2Gspy%2BUsBz0H0z5Xe7kKpSf3mq3ePWqXK3J8P0dgHWG0udx3iej%2BJKZ5NZCGdL0&X-Amz-Signature=0b02834d0e008369c5917360cf8bb9c457602391f702d2fe730d9fb51eb029c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
