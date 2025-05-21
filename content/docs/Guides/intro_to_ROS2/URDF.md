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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C3TMLZF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIATD%2FacUUjYWY42WtgUuzobtseOzFFpY3TUTrFLDImlNAiAT%2FGQ7hsuArmbHEuEX9It7pT0npV8WsRzW%2FG1L6S1VnCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F7A0VEqvSruJuCXsKtwDTYnz%2FciPtqL5Sog3kndApBQ8kUiU5FBBaT10dmJz7TL0zRcOP9Wc4D0%2B2DfO7fELmqdFOvau8ATXVOLIWMiPOXph%2BTLud502Ezb8fwiTNKXQkdVfU48YlpXbxAEnwRzT1UMk2s%2BLxsJD8xY%2FUxUyotEYlt149UP%2B%2Fzk83eVw4nN9WIapLwWtoB7U4wBqvndA8aed7sLZxSM4jm4zGoD4Rn5IDiK6Myl0vyCdU%2BMmeTiCrnx1Bq759Z6fSimib3in4pfHeb0yFiJNta86qeprqp7iodLfrB4fFTcikNG0zn6UhGk9lcIvAhPBMIoBAWZMJGzaJLo7b5SyBNgs5KSUeQlta5bB1e%2FZy8L2CcE%2F%2BtgXRFQxMcuokQgEhREB2xxXBk66Jzks61LCgOd1k1ljtQZH4VHPMWGWVlXOsXasrMubRdLYqaouMyWjPDM1XFT1kiZs%2BvBu9jnDAkyOQ%2F%2BI6JQHY%2FwVh6jxUK4VpSpfSRRVUHjmTeqYflaEk6dG8Uh7JQmfBcXwa5iZ3jnqoPsdLvQ8akCpDUeQ59uK%2FMfiZPnuVA995UXsMtpDGZKZ5QObBdseqvIDusFplmgAEupB0rzi7xaGMvdjNzMTa7Nu%2FSLI2vU3jgbuoUkugZgwpcS3wQY6pgFZDoYqXZg8%2FAJ3UEINW4jqhZ96HuEOPpiyYYhrl24u1I4Oh00uS2MYhhH8f%2BS2b21PiHAJFQYymbbg1GKzVjh688asKPOwRudRlchsQ812%2FOPGiQ8CxHjCZJqBF0CbcPUnZxFs2XEi3p8Fod8ZsZjtzEg5EJal3TGaK4JIz2PzgrnDft0TgJ6Q%2Fc0M0D5QOh8%2BFx%2FVLKjzxsUeeHWrDeWwAODmS%2F8E&X-Amz-Signature=11d620e003d4c55217bfa6161cc37a66469bda7018abc294673de9990e5fa2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C3TMLZF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIATD%2FacUUjYWY42WtgUuzobtseOzFFpY3TUTrFLDImlNAiAT%2FGQ7hsuArmbHEuEX9It7pT0npV8WsRzW%2FG1L6S1VnCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F7A0VEqvSruJuCXsKtwDTYnz%2FciPtqL5Sog3kndApBQ8kUiU5FBBaT10dmJz7TL0zRcOP9Wc4D0%2B2DfO7fELmqdFOvau8ATXVOLIWMiPOXph%2BTLud502Ezb8fwiTNKXQkdVfU48YlpXbxAEnwRzT1UMk2s%2BLxsJD8xY%2FUxUyotEYlt149UP%2B%2Fzk83eVw4nN9WIapLwWtoB7U4wBqvndA8aed7sLZxSM4jm4zGoD4Rn5IDiK6Myl0vyCdU%2BMmeTiCrnx1Bq759Z6fSimib3in4pfHeb0yFiJNta86qeprqp7iodLfrB4fFTcikNG0zn6UhGk9lcIvAhPBMIoBAWZMJGzaJLo7b5SyBNgs5KSUeQlta5bB1e%2FZy8L2CcE%2F%2BtgXRFQxMcuokQgEhREB2xxXBk66Jzks61LCgOd1k1ljtQZH4VHPMWGWVlXOsXasrMubRdLYqaouMyWjPDM1XFT1kiZs%2BvBu9jnDAkyOQ%2F%2BI6JQHY%2FwVh6jxUK4VpSpfSRRVUHjmTeqYflaEk6dG8Uh7JQmfBcXwa5iZ3jnqoPsdLvQ8akCpDUeQ59uK%2FMfiZPnuVA995UXsMtpDGZKZ5QObBdseqvIDusFplmgAEupB0rzi7xaGMvdjNzMTa7Nu%2FSLI2vU3jgbuoUkugZgwpcS3wQY6pgFZDoYqXZg8%2FAJ3UEINW4jqhZ96HuEOPpiyYYhrl24u1I4Oh00uS2MYhhH8f%2BS2b21PiHAJFQYymbbg1GKzVjh688asKPOwRudRlchsQ812%2FOPGiQ8CxHjCZJqBF0CbcPUnZxFs2XEi3p8Fod8ZsZjtzEg5EJal3TGaK4JIz2PzgrnDft0TgJ6Q%2Fc0M0D5QOh8%2BFx%2FVLKjzxsUeeHWrDeWwAODmS%2F8E&X-Amz-Signature=6857990434e589de321a824463569cf5056635c4c4bfd6b8e62a1e1cac3cfc55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
