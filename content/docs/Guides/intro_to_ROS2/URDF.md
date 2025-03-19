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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB34NL3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC%2FU1YI2aufcBeKd%2BeagEluQRIJ9hYZZ1IxJdXfkJOh%2BAiAtk%2F3hS7Wxw9nqvfbwtx5zUri6xEYkfdA46aASPZaqdSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMOxPTS5WqF5AOrOpwKtwD3DnzfsbSrj%2BL6jH%2FU7afsaH1Kogr3mELIxHx4lB0qT6fyEqe%2FIzkJWOO2L04xf4URiGAmSJ1OF%2BiyT5OZIEKUj3zA8SusH2UCzyEBuRVreYc44NeifdfSAntPkevbUjn7u0%2FA4dRX8iKt%2F1os7MuloMWka05A2aYx97P6BJZAfzk1NaVwD%2Frh4ad%2BtXLcgB4ODlDIsuVdU4KLv%2ByEp%2FhnNKYwLSCipKiZi2QvDVzVswhB6bANyXs94KxkDo%2FA1XRh7gqpRlkhzuZOaFeX5%2BMRWLYcIlbcSUdLKw0hPS0SaktsntYYRbyMf7WH1sgh%2BwzkTV5a8HuFrQ1%2BfUQKpVROne4GYSB8P6EtylWKncRj6Grl349c0E7ev6RFMmNiYGOulh0G%2Fg9GN9vNaAJ9J%2BRAcU3avoA2NsmiHjsCgpRNjNxRiZB3dPkefZa2Ka0ADdezCltSidN73wgP1T3nXjjy15Kp4dyaRA9cQ%2F1IShBQr0V3niTyMLcuHNwoQ7PJPtndFblyZSFcAmG6SbcfM0oNQIn4%2F5ivC565%2B3%2BoHYlnoInUgmR7XcPJkoTFNVg5yNLYyZnHQj2eKFtvRZ1JE8odqWij%2Byl9ro%2BXBGsAeAxtqHmnGpMyXbsYCAIFIUww73rvgY6pgE6Bb%2BQBlERu9%2FlXP%2FfL%2BP%2BS0PTLCf1W8aW2tgyQuQrGP1SX8K6HuKS7MomeE%2BTl0p6vF6sz0FwQkUYt85M94T%2FWzfZL3rne2CFf0I20DHZXQvuHnRYa11hPEjFO4GADFUth%2FSs9o3LvtQWHkzzovtovrdOlqOJzPGhbpTtjlgo%2BUz7tAzCUFtyWwS48tiqzb9N0wpwG1kXJZU1sDL2S4vGi1v5NS3B&X-Amz-Signature=5d824a22486491b8344fa90b96533ec819a86f13fb2d6fbdacf5d099cd610a40&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB34NL3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC%2FU1YI2aufcBeKd%2BeagEluQRIJ9hYZZ1IxJdXfkJOh%2BAiAtk%2F3hS7Wxw9nqvfbwtx5zUri6xEYkfdA46aASPZaqdSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMOxPTS5WqF5AOrOpwKtwD3DnzfsbSrj%2BL6jH%2FU7afsaH1Kogr3mELIxHx4lB0qT6fyEqe%2FIzkJWOO2L04xf4URiGAmSJ1OF%2BiyT5OZIEKUj3zA8SusH2UCzyEBuRVreYc44NeifdfSAntPkevbUjn7u0%2FA4dRX8iKt%2F1os7MuloMWka05A2aYx97P6BJZAfzk1NaVwD%2Frh4ad%2BtXLcgB4ODlDIsuVdU4KLv%2ByEp%2FhnNKYwLSCipKiZi2QvDVzVswhB6bANyXs94KxkDo%2FA1XRh7gqpRlkhzuZOaFeX5%2BMRWLYcIlbcSUdLKw0hPS0SaktsntYYRbyMf7WH1sgh%2BwzkTV5a8HuFrQ1%2BfUQKpVROne4GYSB8P6EtylWKncRj6Grl349c0E7ev6RFMmNiYGOulh0G%2Fg9GN9vNaAJ9J%2BRAcU3avoA2NsmiHjsCgpRNjNxRiZB3dPkefZa2Ka0ADdezCltSidN73wgP1T3nXjjy15Kp4dyaRA9cQ%2F1IShBQr0V3niTyMLcuHNwoQ7PJPtndFblyZSFcAmG6SbcfM0oNQIn4%2F5ivC565%2B3%2BoHYlnoInUgmR7XcPJkoTFNVg5yNLYyZnHQj2eKFtvRZ1JE8odqWij%2Byl9ro%2BXBGsAeAxtqHmnGpMyXbsYCAIFIUww73rvgY6pgE6Bb%2BQBlERu9%2FlXP%2FfL%2BP%2BS0PTLCf1W8aW2tgyQuQrGP1SX8K6HuKS7MomeE%2BTl0p6vF6sz0FwQkUYt85M94T%2FWzfZL3rne2CFf0I20DHZXQvuHnRYa11hPEjFO4GADFUth%2FSs9o3LvtQWHkzzovtovrdOlqOJzPGhbpTtjlgo%2BUz7tAzCUFtyWwS48tiqzb9N0wpwG1kXJZU1sDL2S4vGi1v5NS3B&X-Amz-Signature=a8dfd33ee488f13957e734555b0c46dae3b5a94e0912f7e734d5867130610d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
