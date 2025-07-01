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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQ333XI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGJfr55GGUto%2Ff1wLjZLqYHVCMKrN5pAWqQa5nnO6ydAiAcIfiV6NHAAdgk6%2B547IFGR3Ncg75AGcy5wSGNlGcMayqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6mcGF5OoYdkA25CMKtwD6mV6c623ar0Jvt%2B4AHWvbsmK2dGiolaFhb6Be7EaS4LrZKIMUNjWWzVmhBnbDeYZWIqy6GxFtIM%2BB%2FN1RE3eHAKc28qa6A0fZvwTQvV3tumk39RD6aHIxMdUGrCT%2Fa6mMKB7kFo7m88W323EArSLrnxMLkR6e2ymh1K505b7b0kD8u03U5K6oQzzo%2FvvhjdeqFnamLiB7RzbSsrGtBUIHdkW4HnbIgbNeSw2Kw5rDHkNtsUuwsuettCaDs02XTnl7J%2F2dSYrbhO3Ho0qCByU6TKkU3NUqTS%2FPsA8pCr3a7XYksToo%2B9VnB5oip9E6PZYDXbgvE%2BL9IwhvAfpSQ7CDsMxzMwKUU4i497CMLL1acORUFSBMSjQpyRYSweRdVYXQfQALC4iHHFNwVtkGxNMGftKtC8wQ9nW5SmCuay%2FiETHolWFnbk6%2FfuY0bP4UuyorLjQ%2BJ5r4e94vbadDHjSA9KypimXUIz9bpGWXfoKkGL0hj5IlOKP3m1QdDEkgaNRJPcbwZpzpnsOwmgTLjAgJsUoMiyHf08c5bJxAIBTr4WFWzshEZwQY2RSJnASuEgNdpNwwtVp0k%2F5sDa82kpYC7HpWEiSYD8ePzHT%2Fzxq4CeI6YyETdPpUJ8IPOIw0MSQwwY6pgGuFPGphjzKbkOFGQf1tWK0Krfw6tjbTyY8BbP4Gkq9bwJYm7zEsawMPNdhWHVZk9nm73XuuuGfi77uNb%2FKxMsYCSKSz6HzvQJH%2FmbBfl2mK%2BcelUbUhyJSrtZhdDlXiOxlBKSA74oRHIxnavxgdbikYZseDzoZz4pdGftiszxLejbJZ62PNPat%2BgENZu9BFaMqfuxT%2BKeHH95NAu1wbfwWgBwWxOiv&X-Amz-Signature=e148c104c2245b77289a4b7724a909440896362994987fedc070370a13d8b21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQ333XI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGJfr55GGUto%2Ff1wLjZLqYHVCMKrN5pAWqQa5nnO6ydAiAcIfiV6NHAAdgk6%2B547IFGR3Ncg75AGcy5wSGNlGcMayqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6mcGF5OoYdkA25CMKtwD6mV6c623ar0Jvt%2B4AHWvbsmK2dGiolaFhb6Be7EaS4LrZKIMUNjWWzVmhBnbDeYZWIqy6GxFtIM%2BB%2FN1RE3eHAKc28qa6A0fZvwTQvV3tumk39RD6aHIxMdUGrCT%2Fa6mMKB7kFo7m88W323EArSLrnxMLkR6e2ymh1K505b7b0kD8u03U5K6oQzzo%2FvvhjdeqFnamLiB7RzbSsrGtBUIHdkW4HnbIgbNeSw2Kw5rDHkNtsUuwsuettCaDs02XTnl7J%2F2dSYrbhO3Ho0qCByU6TKkU3NUqTS%2FPsA8pCr3a7XYksToo%2B9VnB5oip9E6PZYDXbgvE%2BL9IwhvAfpSQ7CDsMxzMwKUU4i497CMLL1acORUFSBMSjQpyRYSweRdVYXQfQALC4iHHFNwVtkGxNMGftKtC8wQ9nW5SmCuay%2FiETHolWFnbk6%2FfuY0bP4UuyorLjQ%2BJ5r4e94vbadDHjSA9KypimXUIz9bpGWXfoKkGL0hj5IlOKP3m1QdDEkgaNRJPcbwZpzpnsOwmgTLjAgJsUoMiyHf08c5bJxAIBTr4WFWzshEZwQY2RSJnASuEgNdpNwwtVp0k%2F5sDa82kpYC7HpWEiSYD8ePzHT%2Fzxq4CeI6YyETdPpUJ8IPOIw0MSQwwY6pgGuFPGphjzKbkOFGQf1tWK0Krfw6tjbTyY8BbP4Gkq9bwJYm7zEsawMPNdhWHVZk9nm73XuuuGfi77uNb%2FKxMsYCSKSz6HzvQJH%2FmbBfl2mK%2BcelUbUhyJSrtZhdDlXiOxlBKSA74oRHIxnavxgdbikYZseDzoZz4pdGftiszxLejbJZ62PNPat%2BgENZu9BFaMqfuxT%2BKeHH95NAu1wbfwWgBwWxOiv&X-Amz-Signature=720461bcea03e69c37fc4203a6860b228c0166b102458535739e25207086fb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
