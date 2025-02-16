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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYALUYZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDsrSaLO2cdT2Azr11UdUSyjuVHwwpwSzKjwsUv%2BU4XggIgU2dOP8G0TGC8cKaFoUU4kmXKyaVzJkSVpVHLvyHQDzsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMYx1rBhUsKqrcEunSrcA2dQIIAwqR4yavxVmO4zjTG4MSVKQakmJ3xnIQqG6vPNjmYo4iYl%2BMcKFcsmalGbwwXJc7m7lV7fwP2yemJUi0OO2gn4eJlDM%2BvSLxxl073XLibb9GlPuI2%2FhuJBZVNbt%2BIqr%2FdpW%2FngXL5gARXnLVqDtEcRuBht8HGoD2kE9So4KLdScB3qvOXTwb4m2cjbifYFLo2OcLU6vKNMQOeECiV1ITgC32RargUoJs5wA3pAefPCBQDEk9N7P%2BtrgkOqqGUKIq%2FiulWzhlrt7ORVpaTvWqjer2n4NIn3UnDXhLAJTOZZgSycgkmX2xTN4jcSnewo0jCzjbrzXRhrrJ15NxVVrGX2mO%2FzBZGKgYg2MxElneacIfzF8w7TpErNyy7qtLg2nBtsLPzDMezQWL216D16jRInTSkSDpS5Ksk2lrU0ujQEJeUKppT8ZS2oGAEt%2B4xXZXxG8BdHMJOdvb5NIrpdbNNHbkV%2Bo2NMomMNgNfmkmwK59PelGeuh%2BMd9I3NblusIpnCcy8pZzJvikGWw%2FUVMjf8KwjXQ%2FpQvR7bvasAPZw7bcOJjDJZRkBVsdLpI6QDiy6KfI9FRrvWAoUE5UktY41%2FFbS97BxggJLHGElyBisscCqHNTI6S6dNMP%2Bkyb0GOqUBA4friJc0u3CVGCIU%2FtltVJ5Xa4burkwtsMKDAYUa%2FtdX8ky45CkEseXbT9mO46mw78QmL2q3Wa6FQlNi5JnVzTqiRIjiyJ1mZwX6rh5GUvnq%2FOaZVyPn%2BOr%2BiH1se%2FHE2Kct%2BhltDRks8G0RBQiDMwosj6sruX4acK2wFCZmYM5VI45qBUv8JL2ReQqG3OejjdHBMk7Hpu37Fhb4bN%2BzBTDpkc4V&X-Amz-Signature=31337601668f242942e867d413e1aeff73662601c3b78774960eedcb0bcab674&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYALUYZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDsrSaLO2cdT2Azr11UdUSyjuVHwwpwSzKjwsUv%2BU4XggIgU2dOP8G0TGC8cKaFoUU4kmXKyaVzJkSVpVHLvyHQDzsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMYx1rBhUsKqrcEunSrcA2dQIIAwqR4yavxVmO4zjTG4MSVKQakmJ3xnIQqG6vPNjmYo4iYl%2BMcKFcsmalGbwwXJc7m7lV7fwP2yemJUi0OO2gn4eJlDM%2BvSLxxl073XLibb9GlPuI2%2FhuJBZVNbt%2BIqr%2FdpW%2FngXL5gARXnLVqDtEcRuBht8HGoD2kE9So4KLdScB3qvOXTwb4m2cjbifYFLo2OcLU6vKNMQOeECiV1ITgC32RargUoJs5wA3pAefPCBQDEk9N7P%2BtrgkOqqGUKIq%2FiulWzhlrt7ORVpaTvWqjer2n4NIn3UnDXhLAJTOZZgSycgkmX2xTN4jcSnewo0jCzjbrzXRhrrJ15NxVVrGX2mO%2FzBZGKgYg2MxElneacIfzF8w7TpErNyy7qtLg2nBtsLPzDMezQWL216D16jRInTSkSDpS5Ksk2lrU0ujQEJeUKppT8ZS2oGAEt%2B4xXZXxG8BdHMJOdvb5NIrpdbNNHbkV%2Bo2NMomMNgNfmkmwK59PelGeuh%2BMd9I3NblusIpnCcy8pZzJvikGWw%2FUVMjf8KwjXQ%2FpQvR7bvasAPZw7bcOJjDJZRkBVsdLpI6QDiy6KfI9FRrvWAoUE5UktY41%2FFbS97BxggJLHGElyBisscCqHNTI6S6dNMP%2Bkyb0GOqUBA4friJc0u3CVGCIU%2FtltVJ5Xa4burkwtsMKDAYUa%2FtdX8ky45CkEseXbT9mO46mw78QmL2q3Wa6FQlNi5JnVzTqiRIjiyJ1mZwX6rh5GUvnq%2FOaZVyPn%2BOr%2BiH1se%2FHE2Kct%2BhltDRks8G0RBQiDMwosj6sruX4acK2wFCZmYM5VI45qBUv8JL2ReQqG3OejjdHBMk7Hpu37Fhb4bN%2BzBTDpkc4V&X-Amz-Signature=232ec762ff587a0c8929203396e2783e96ab38feaa6a64105b4f4ed14d46abad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
