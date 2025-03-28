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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBNTPUR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1kWf5duZhCCQ4HxMbcerTJ%2FuJAP6FyyWuGuijSO7uTAiA3UXFH2depJ26gSJ1m4BTlQOiQ%2ByXs6MK7qtzA84f%2F0Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMmZ77Zww1CwzxxSVVKtwD7B4VGVWN7uE%2BCxcsAVgTveQvV4B4I0ZU%2BCfTC360aUOcVKY%2Bg09zst3JJYzCGRhpXeQ4q7kQpc0OG5d71AuZPgjBS3fVlyyvoa3nHWPFUOokuQDiD9q6FtqfTXSdqmVvYe1H%2B22s1%2B16j0uGmazJO%2BBVc07L3ub5WBWJKcH%2FNL0%2Ffv%2FrE1wAsnTkGZ64%2BjPTYgvOx7rUM9n%2BDYUbRAD41pz2GRzZ5m0OpSclpW1Fn3JlqRKO1LMqgp1KSjc5RuNz1s2FBABIurkqCz3mzR8Ay2fqhz6D0BtSoSh6j4UHdVI8%2FsohcQOSM4Q7KoTr2mxlsMwGwS4LA%2F%2FVvYZcWqH7vShEMOUEnnTBDA4JLdL2h5gpB2QSm4VD1cXsohH%2FcS4Eq1%2B8rLqXz5Noz0Dv4jOLWf%2BZr2ecwcO71SsS84jyob38YMh6zGsNouNvc%2FctZgg3iZRX4XX7S7SvX1GiEaIOHkbXNNc69xY6UjV5IvmiNbXIfaLQ5gjEmNl03DZmZnfk1WtuwdNzJhqaGMD99448CfAYw0R7os2QwYSRkln0AyODpkOG%2FOpwJdryGzRlm7lcjtvK8tuEQmo79%2FbgSGjkCZuE%2BtyhEs%2FrDRAcmdcUD3ymcA3MWMqX6AqpegUwt5SYvwY6pgG8tYCseJtrnrBoI68oR28CnTUvvwkYTf60xoBHyjcz7v%2BEOTeGoE%2BdwyOST6zcXrPmLkl0g2DWVD%2Fd6OUcg0aZHH%2FNyfqQh53ixFkftpqiAUuOBtiaU631XjNei0Hn8%2B%2Bg%2FO5ORlQlwICvGxDme6hOB9KvSh53gi0aYkoWGgtoANIFFVtNMnlg6gfavBVKhXxXgzv9th1GO0P8%2BdPFP8SK4CdExsOF&X-Amz-Signature=365b1514df32c0ab4b801369a9feac0c64708ff4893f4e72ad8aa9e7e2bcd6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBNTPUR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1kWf5duZhCCQ4HxMbcerTJ%2FuJAP6FyyWuGuijSO7uTAiA3UXFH2depJ26gSJ1m4BTlQOiQ%2ByXs6MK7qtzA84f%2F0Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMmZ77Zww1CwzxxSVVKtwD7B4VGVWN7uE%2BCxcsAVgTveQvV4B4I0ZU%2BCfTC360aUOcVKY%2Bg09zst3JJYzCGRhpXeQ4q7kQpc0OG5d71AuZPgjBS3fVlyyvoa3nHWPFUOokuQDiD9q6FtqfTXSdqmVvYe1H%2B22s1%2B16j0uGmazJO%2BBVc07L3ub5WBWJKcH%2FNL0%2Ffv%2FrE1wAsnTkGZ64%2BjPTYgvOx7rUM9n%2BDYUbRAD41pz2GRzZ5m0OpSclpW1Fn3JlqRKO1LMqgp1KSjc5RuNz1s2FBABIurkqCz3mzR8Ay2fqhz6D0BtSoSh6j4UHdVI8%2FsohcQOSM4Q7KoTr2mxlsMwGwS4LA%2F%2FVvYZcWqH7vShEMOUEnnTBDA4JLdL2h5gpB2QSm4VD1cXsohH%2FcS4Eq1%2B8rLqXz5Noz0Dv4jOLWf%2BZr2ecwcO71SsS84jyob38YMh6zGsNouNvc%2FctZgg3iZRX4XX7S7SvX1GiEaIOHkbXNNc69xY6UjV5IvmiNbXIfaLQ5gjEmNl03DZmZnfk1WtuwdNzJhqaGMD99448CfAYw0R7os2QwYSRkln0AyODpkOG%2FOpwJdryGzRlm7lcjtvK8tuEQmo79%2FbgSGjkCZuE%2BtyhEs%2FrDRAcmdcUD3ymcA3MWMqX6AqpegUwt5SYvwY6pgG8tYCseJtrnrBoI68oR28CnTUvvwkYTf60xoBHyjcz7v%2BEOTeGoE%2BdwyOST6zcXrPmLkl0g2DWVD%2Fd6OUcg0aZHH%2FNyfqQh53ixFkftpqiAUuOBtiaU631XjNei0Hn8%2B%2Bg%2FO5ORlQlwICvGxDme6hOB9KvSh53gi0aYkoWGgtoANIFFVtNMnlg6gfavBVKhXxXgzv9th1GO0P8%2BdPFP8SK4CdExsOF&X-Amz-Signature=b76c36b43891a225e9b377dba316453e47729a5b1677304bdf280f567658af42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
