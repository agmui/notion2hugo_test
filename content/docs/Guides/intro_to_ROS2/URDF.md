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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZX4AHWE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE6hNpQh07oU0c2%2BMc%2Bp%2Fs0IkIETdJIUxoLiPDj9kKYUAiBYmKgF4obrheQsldBdll4lPTTYImE3Ygle8hHDMYjd7Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM4GusPaGNWD2WJBW2KtwDiPKcgSRcx27SYsxwBhW5U2RWYEQq6xH8sJ8kipNxXwBAS7s7wTDtfZz%2BXI2q9GUjYXwTBowUCMSPEEx0bR0IN3z8xIA6i75cf73QMexgAP4sxupErJoYX8o8cyckKcj8SlmdCaJ7Go90igQJYSJ9CI%2ByWJ62x%2FQtmm%2BAq7Q0LEWxmHprqiAJ0stb53hFVzOEkDoVhhsFf%2BFkCjYkFgvTSPYqWn3NVDqMMJzMB9sT6pDxYigs%2BoDphIRWb3hmUrjaR8b9k648VWRtPCVWVSHfI9%2FMDIPI2m0lWOHX%2BARa4RtwkoEID9hPnxxzLBsyIkM1Sh0OStas%2BDXOssAeiLr%2BCInPpSbC1emd8BaxiA3tkPpt7us%2FLI0St5Mh14ChNi57USTOxLlOS3CB122ONqOMbTaL14MpYPmsmxFc0etW1KozUNaBfO61LDUvXnj3s0PVMxi3WwHii6TEfUi3d4auu3nfVh0dM2sFbkDM2Oi8gTEZ8SC7Zc2FOHP6QeHzEIE5H48dKobwJQP4yQdbQRBZHPEvHy0%2FLUf%2ByFge56%2Fm2N3QRs6tuQItbG7GC1OhXZ6HmPM2TrUFOEnepKAfIf%2BAXwFQYebkiuL5kKOWBl0jYolQq9xTjA3kfAc%2BtuYwhp7PwQY6pgGxdtmlQq6ID3UPbHfEVS8ePcpZhbPZTOaYYOXAwQr13K8u%2FWM075RSbW9I7kVc4tGs7ueBaINUtb3zVJjN%2Fj6jB10v8GXc9NHd3az3nDaMScGkZYxWnPcWeZW7Sn5GfAtPUO2%2BndNWTGVI9DT%2FXXPiAJ2g578laMpH6guOA78qZRj%2BGPDA6PAZpDQleGd9HFztjHpD32OBGZvoV8Ujyq15ALYV1QO2&X-Amz-Signature=4686da9fecb8f13c5077b420315636fdb6ad2aa76a66c6a6927accd94348bc98&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZX4AHWE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE6hNpQh07oU0c2%2BMc%2Bp%2Fs0IkIETdJIUxoLiPDj9kKYUAiBYmKgF4obrheQsldBdll4lPTTYImE3Ygle8hHDMYjd7Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM4GusPaGNWD2WJBW2KtwDiPKcgSRcx27SYsxwBhW5U2RWYEQq6xH8sJ8kipNxXwBAS7s7wTDtfZz%2BXI2q9GUjYXwTBowUCMSPEEx0bR0IN3z8xIA6i75cf73QMexgAP4sxupErJoYX8o8cyckKcj8SlmdCaJ7Go90igQJYSJ9CI%2ByWJ62x%2FQtmm%2BAq7Q0LEWxmHprqiAJ0stb53hFVzOEkDoVhhsFf%2BFkCjYkFgvTSPYqWn3NVDqMMJzMB9sT6pDxYigs%2BoDphIRWb3hmUrjaR8b9k648VWRtPCVWVSHfI9%2FMDIPI2m0lWOHX%2BARa4RtwkoEID9hPnxxzLBsyIkM1Sh0OStas%2BDXOssAeiLr%2BCInPpSbC1emd8BaxiA3tkPpt7us%2FLI0St5Mh14ChNi57USTOxLlOS3CB122ONqOMbTaL14MpYPmsmxFc0etW1KozUNaBfO61LDUvXnj3s0PVMxi3WwHii6TEfUi3d4auu3nfVh0dM2sFbkDM2Oi8gTEZ8SC7Zc2FOHP6QeHzEIE5H48dKobwJQP4yQdbQRBZHPEvHy0%2FLUf%2ByFge56%2Fm2N3QRs6tuQItbG7GC1OhXZ6HmPM2TrUFOEnepKAfIf%2BAXwFQYebkiuL5kKOWBl0jYolQq9xTjA3kfAc%2BtuYwhp7PwQY6pgGxdtmlQq6ID3UPbHfEVS8ePcpZhbPZTOaYYOXAwQr13K8u%2FWM075RSbW9I7kVc4tGs7ueBaINUtb3zVJjN%2Fj6jB10v8GXc9NHd3az3nDaMScGkZYxWnPcWeZW7Sn5GfAtPUO2%2BndNWTGVI9DT%2FXXPiAJ2g578laMpH6guOA78qZRj%2BGPDA6PAZpDQleGd9HFztjHpD32OBGZvoV8Ujyq15ALYV1QO2&X-Amz-Signature=4b3e9d58a81b50f541ea979d871f01f1d1e92d88f148cc4f67c35e4d434231c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
