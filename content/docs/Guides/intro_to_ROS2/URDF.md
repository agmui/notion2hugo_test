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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5QTZFF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJkqT1edffPz9So4TdQ2vfdVMC6wHzJiSFZr%2BWcKQefAiBLNgnOasAcVTmbtrFEkODQD%2BRLB%2FkzMLesiJenQuok1iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMji%2B7CJafF5SJrPBVKtwDtyEsGIVyNl9pJPVBYP903BW5Eh8CnPvNa%2FAcjZtNeHoMKcAfNkC3SkP8iqfFc7xgCgLFdvUWEOuQK3KuvzyCvdrdF7fW6T1Kwj0xkcCQ9diVO67jUrbCT7i%2BC9ZfREV4oIckXbiEwKTjl9Pg2UhWLn%2F4%2BG2lOjQ68321RxTK8wMihwCIvmtsjx%2FWZHXKHEPAkuJwp1yhfL0uTrDjTf1kFznNo4UUJY4pT%2Fha3wLZwJZ%2F6AU73V37OkPiHqvRT%2FIuH20wyy97XE87srQMgoWuD77jQ4ECTe6X6jGYKOZEUqAdNpbKW%2Bwfwdz600JECLpV09TDQk9rMNtgHn7AekYWOgSTBvsvdhOcrc1ufO%2FJEiTESA%2BmP1Vqck21PT7Mhs0ni%2F6PR62RoRbIbrKhCs69DJSBMv9zygQ076GdA4payh%2B2Yd9mpZcbdIK%2BxpAc5h%2BzcEtL6Ibx0zI9HypDNRkQafx6%2FSOCVgOjc%2FAjNXJyIkCrFHN2CJj0L7VBF1tPgp2xZCbjGfUVb5kHJ1%2B%2BtGGiTgVzc4lTUpestJt9%2BRg0OO378eBlOIwWmKCgkUgmU%2B15Y9S1jCLMF2tZd2qrVZA5KUcWU6BtIEmYBAieJl5CvODWFT9X3py7AC%2BTbsUwkrr1vgY6pgHjTPbDQMD4i1PFlrJK0mMP46QiPBkUHWpKYLVTXBS9sTQd1uufmwm6qvAi8xWXMCSlxwfGJO7QiNLtmp%2B9rVM5emV3CARVVDWYfJhcAazxs73IHPriq6EJ3HLkFI9hVncIh711upnQ%2FLTGmj%2FjZQIaw4%2BC4vU0Uzwa1H6DRa41Z1LXB3PMJJ825lvK%2F1HaD1Uz41aTx7%2FjV9fyPGiR3eAya8BH%2BvYR&X-Amz-Signature=2ae1cf6f7f653285c424b7467d7320ca85c713c27e39d968db839e79dbfe3c57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S5QTZFF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEJkqT1edffPz9So4TdQ2vfdVMC6wHzJiSFZr%2BWcKQefAiBLNgnOasAcVTmbtrFEkODQD%2BRLB%2FkzMLesiJenQuok1iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMji%2B7CJafF5SJrPBVKtwDtyEsGIVyNl9pJPVBYP903BW5Eh8CnPvNa%2FAcjZtNeHoMKcAfNkC3SkP8iqfFc7xgCgLFdvUWEOuQK3KuvzyCvdrdF7fW6T1Kwj0xkcCQ9diVO67jUrbCT7i%2BC9ZfREV4oIckXbiEwKTjl9Pg2UhWLn%2F4%2BG2lOjQ68321RxTK8wMihwCIvmtsjx%2FWZHXKHEPAkuJwp1yhfL0uTrDjTf1kFznNo4UUJY4pT%2Fha3wLZwJZ%2F6AU73V37OkPiHqvRT%2FIuH20wyy97XE87srQMgoWuD77jQ4ECTe6X6jGYKOZEUqAdNpbKW%2Bwfwdz600JECLpV09TDQk9rMNtgHn7AekYWOgSTBvsvdhOcrc1ufO%2FJEiTESA%2BmP1Vqck21PT7Mhs0ni%2F6PR62RoRbIbrKhCs69DJSBMv9zygQ076GdA4payh%2B2Yd9mpZcbdIK%2BxpAc5h%2BzcEtL6Ibx0zI9HypDNRkQafx6%2FSOCVgOjc%2FAjNXJyIkCrFHN2CJj0L7VBF1tPgp2xZCbjGfUVb5kHJ1%2B%2BtGGiTgVzc4lTUpestJt9%2BRg0OO378eBlOIwWmKCgkUgmU%2B15Y9S1jCLMF2tZd2qrVZA5KUcWU6BtIEmYBAieJl5CvODWFT9X3py7AC%2BTbsUwkrr1vgY6pgHjTPbDQMD4i1PFlrJK0mMP46QiPBkUHWpKYLVTXBS9sTQd1uufmwm6qvAi8xWXMCSlxwfGJO7QiNLtmp%2B9rVM5emV3CARVVDWYfJhcAazxs73IHPriq6EJ3HLkFI9hVncIh711upnQ%2FLTGmj%2FjZQIaw4%2BC4vU0Uzwa1H6DRa41Z1LXB3PMJJ825lvK%2F1HaD1Uz41aTx7%2FjV9fyPGiR3eAya8BH%2BvYR&X-Amz-Signature=75522e9149e6078648f30bf48378108da22520f66812fea2903d9addd6de1cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
