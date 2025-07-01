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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7XDUG3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfthOcWHMHMZZXehXOYOvPNNWwX4ncC4H%2FJK51UJ5JBAiBhSwWb0gTc7uTq62ZGLBW3ksFD2Awlw7xiSFtjbv7ZgSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCv9vUnpKnMJ8q2xKtwD0eJV%2B4AMeqKt%2F1sDgpx%2B1ttn%2BFNj%2BCTRSwkBa7hVmeoKltmhk6l11tV9b%2BphgjQPZk1I8sKa%2Fbqw55xJxeMKTBow5UVjAkCfGOxcuuj5pZfRWbG3JNYpLGaB5mPlBOmSF30sGkahSN93EPy2B7PRL9L2OO1dOCVqPk11Au9nSKMfkgL4w2Yd4EHumlbdhJwz3LZbUqSpsiZWUR1WcAo8ud9wD1ORi%2BmCBzLwNSe%2BbUwktEv8QQR9VL2JkvCHoCJewezpchPKCq4zyyfNZMg85UKUO9Eht2DjSGexniugAvNa4bP%2FIXCDFmU9RH6lr%2FrGSzWjRLEHrUu%2BSHgyqfefgP7eUqPosnXZbiHsDHalPvycRFM6Mjd%2F%2FikJFuGIZvHX83DqLbPlSjt45GG%2BKR6xps%2F02GG1SecouBI6SRDe30qoRf09kKr8N6fppfftVh%2Fjg5VzL2JIIgFU%2BB1hRpdTVHXQLN%2BXHlcabDvpL2N8m35orrSqkqi%2BVbW2Y9PoKBVpd2DBdmNuOfaHmuZ2gr4dej1WoIU4W93VyDAnU3mp8%2F4ZyRVBuSrfnfUNHx6IGeuGTWitPZ22wDivK4cA%2B2PjjoHiWqB6EkbbuQ%2B%2B4UFGqUOzFoCbVn236WI7vrUwmoaOwwY6pgHdj7XdiTklHVWXKXKTmIt%2FxbRDvuP2dA1DXAJ0Q8GwyEEHq9JtB8ZkWhynN8W19J7mzk3xgPeGY8nc%2BZw2yllFiGZd%2F49jmrsBBP1%2BfAXGAOD6%2FMY96ppNa1VE3bdKPKzXa3%2FFo0wyRn4wZQ2%2BoCuIcDDWLc4C5TYORzqrxOc7NK9QMmW%2FhNiZBcTkVN26fYL94Kj3RJ2uz3K2tyqtP69AC96YvV%2FZ&X-Amz-Signature=36fed87957516e1977602a0257cc6f085bae8345c7a3886ad25e8dbb70f8d7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N7XDUG3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfthOcWHMHMZZXehXOYOvPNNWwX4ncC4H%2FJK51UJ5JBAiBhSwWb0gTc7uTq62ZGLBW3ksFD2Awlw7xiSFtjbv7ZgSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCv9vUnpKnMJ8q2xKtwD0eJV%2B4AMeqKt%2F1sDgpx%2B1ttn%2BFNj%2BCTRSwkBa7hVmeoKltmhk6l11tV9b%2BphgjQPZk1I8sKa%2Fbqw55xJxeMKTBow5UVjAkCfGOxcuuj5pZfRWbG3JNYpLGaB5mPlBOmSF30sGkahSN93EPy2B7PRL9L2OO1dOCVqPk11Au9nSKMfkgL4w2Yd4EHumlbdhJwz3LZbUqSpsiZWUR1WcAo8ud9wD1ORi%2BmCBzLwNSe%2BbUwktEv8QQR9VL2JkvCHoCJewezpchPKCq4zyyfNZMg85UKUO9Eht2DjSGexniugAvNa4bP%2FIXCDFmU9RH6lr%2FrGSzWjRLEHrUu%2BSHgyqfefgP7eUqPosnXZbiHsDHalPvycRFM6Mjd%2F%2FikJFuGIZvHX83DqLbPlSjt45GG%2BKR6xps%2F02GG1SecouBI6SRDe30qoRf09kKr8N6fppfftVh%2Fjg5VzL2JIIgFU%2BB1hRpdTVHXQLN%2BXHlcabDvpL2N8m35orrSqkqi%2BVbW2Y9PoKBVpd2DBdmNuOfaHmuZ2gr4dej1WoIU4W93VyDAnU3mp8%2F4ZyRVBuSrfnfUNHx6IGeuGTWitPZ22wDivK4cA%2B2PjjoHiWqB6EkbbuQ%2B%2B4UFGqUOzFoCbVn236WI7vrUwmoaOwwY6pgHdj7XdiTklHVWXKXKTmIt%2FxbRDvuP2dA1DXAJ0Q8GwyEEHq9JtB8ZkWhynN8W19J7mzk3xgPeGY8nc%2BZw2yllFiGZd%2F49jmrsBBP1%2BfAXGAOD6%2FMY96ppNa1VE3bdKPKzXa3%2FFo0wyRn4wZQ2%2BoCuIcDDWLc4C5TYORzqrxOc7NK9QMmW%2FhNiZBcTkVN26fYL94Kj3RJ2uz3K2tyqtP69AC96YvV%2FZ&X-Amz-Signature=6f638cf17be7a50e15c740e94aca84467bf1454d157749760ac4a41168a462ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
