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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2CETFM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDnqfzWGO0AQfjiVyKNILiaaMyEt4NgeaRnSG0XswIfIwIhAOjD2Zwh%2B0MHh0sAIUOD4hDN1AtAltuG1TfeLj11aILeKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5RLVKtGGqnTSh1qwq3AMToLMgZHPEa8M39UpCOvGchjHJMgSB1xym87iJY0%2BfpziaFZctQKiBvxUPhg1lxslblm3ADz6xx1PrSfgwB292CFAvrDFtOvWG7ZVylfIibYwKOKAaFNlFRH3auqwXXsT6QX8HhJl%2BYG228cvdm2wIuRFADRb8H8bGbooyWxsTavsMIhmHWwmg%2Bk25V3cZk0KSlWTjUbnOHH2MY9Wjg8mxRmB9gYjmPcU%2Fdj6CYHnlN3qPLFWeJyIfs4R7eji%2Bdd97%2F3wxtOqtaMQCWBfRbCjVDYXunhlt9IOWKatrv49pfArPPSVeXoaomdRzI0zrPM521enGfceVnim9VxtiS98EU3CWk7%2BQUEttGO59jm%2FJyKEmcZBoyKaRnSb79FW%2BZv5GHGnZyKRmqHOgibkljMa%2FusNuHLLljpJvPSF3uHVMO8bjSeXsWfs9NsIYw2FARYFxcqCLnxkx7Cp85GKXtSFLEqu9oPcMspxReKGJwso%2FsdIE%2BvFu%2FoWV981JnhYFuVR2kATOax8r7kf0yRD0qMW2Aelq9l3tsHO7FrF%2BCgkhnf8jNG0b4NHhcx8xRkhv7zg6oGBR8oDIxY91JHNzjALG32q53nHxvg9IcvtCmXJ6uXAxSvmbR1SWY8ln8DCOoc7ABjqkAdj%2FrRR4YOTH2rioWVsbIbHENo54a%2F%2BB0KntKN%2Fk9Tol%2BkLOpPd3u3mz0napJgpf8HBJ4oVg8LKw847zSXiJvY7Halx6jj6283mvtMccgKFaAsYxko9x8EJYGO0HrW6GAJniMZrrSoDcCZKLxHS%2FmdbKPSnl02AZ013D%2BOq1aYPm1ScQaEkKdWotax3QVT8rDfcK%2FZQKQcFXgS%2BSGUhP%2ByHpoRS8&X-Amz-Signature=97146b8438e1679e2ba41c4cc8ed8621def156947301f7340851fc7f38fa2878&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2CETFM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDnqfzWGO0AQfjiVyKNILiaaMyEt4NgeaRnSG0XswIfIwIhAOjD2Zwh%2B0MHh0sAIUOD4hDN1AtAltuG1TfeLj11aILeKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5RLVKtGGqnTSh1qwq3AMToLMgZHPEa8M39UpCOvGchjHJMgSB1xym87iJY0%2BfpziaFZctQKiBvxUPhg1lxslblm3ADz6xx1PrSfgwB292CFAvrDFtOvWG7ZVylfIibYwKOKAaFNlFRH3auqwXXsT6QX8HhJl%2BYG228cvdm2wIuRFADRb8H8bGbooyWxsTavsMIhmHWwmg%2Bk25V3cZk0KSlWTjUbnOHH2MY9Wjg8mxRmB9gYjmPcU%2Fdj6CYHnlN3qPLFWeJyIfs4R7eji%2Bdd97%2F3wxtOqtaMQCWBfRbCjVDYXunhlt9IOWKatrv49pfArPPSVeXoaomdRzI0zrPM521enGfceVnim9VxtiS98EU3CWk7%2BQUEttGO59jm%2FJyKEmcZBoyKaRnSb79FW%2BZv5GHGnZyKRmqHOgibkljMa%2FusNuHLLljpJvPSF3uHVMO8bjSeXsWfs9NsIYw2FARYFxcqCLnxkx7Cp85GKXtSFLEqu9oPcMspxReKGJwso%2FsdIE%2BvFu%2FoWV981JnhYFuVR2kATOax8r7kf0yRD0qMW2Aelq9l3tsHO7FrF%2BCgkhnf8jNG0b4NHhcx8xRkhv7zg6oGBR8oDIxY91JHNzjALG32q53nHxvg9IcvtCmXJ6uXAxSvmbR1SWY8ln8DCOoc7ABjqkAdj%2FrRR4YOTH2rioWVsbIbHENo54a%2F%2BB0KntKN%2Fk9Tol%2BkLOpPd3u3mz0napJgpf8HBJ4oVg8LKw847zSXiJvY7Halx6jj6283mvtMccgKFaAsYxko9x8EJYGO0HrW6GAJniMZrrSoDcCZKLxHS%2FmdbKPSnl02AZ013D%2BOq1aYPm1ScQaEkKdWotax3QVT8rDfcK%2FZQKQcFXgS%2BSGUhP%2ByHpoRS8&X-Amz-Signature=4579d3d0808dc062fbe2b6f6ee404e987925534750d3dc42121a23584a952248&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
