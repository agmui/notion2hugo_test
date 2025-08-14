---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=8f0ca7d0ece1d2d2fe063010cf7e5f29df42e733164786f8bf27459a65afbfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAHPHFL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVxD52T4MUqBMNDMCtEZIhDd0DaFeIBqbW4kTXh8bzaAiEA61XnRgmQtiH2orKk%2FYBtMvEB7H9FniOztChL5hTr91Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJFTKJiF7Z23lYDHWircAwwWOWzmUZswqC3bM5Yekm2D3jpXONrllQhPYZAcONJIHoQDfABoY0sPdTm6hrSyaz4J%2BKzgSe1NFSnMQvOnjwlQWxuDysxQW67fi%2BdqXfcV1KjgBUK3cBn%2FwHsa5qgTy7HHLKT%2F84iJvkVkhVnAxr1Y60p1z%2F4GTaqoX1VZjc4Tq%2Fm81gTEFoKcABMWmE66%2Fqk22hcDEWFa6zhmrYEIVQ3n5FLRUZHmGnqhYT%2F6edqe0kwEzhoFfqa0SRY3GRAecQ2vnptVQEOZdlt6uWeFsFhUDS7hDMZyXz7rpTyWxo4pCqLf7k%2BK9gzFfaGXtU9Y6MDZxho4ip%2Bh%2BQ0hCC5WXhq9rdW2eUTQ%2BluHkfTzOwGUzueYOQLeu2TfTVzTEDzOUJWNU%2B%2FMR6FQ8cKAGnEi1PwOwrnhG9XwMJzKVM1QMBrFEjPIAqvB%2B%2FcOb0ksbW%2BcqtpCZS%2FSIXxPzia1mSANdojnnkNClcYFphO%2BT716H%2FILoPiQJHKeZcSzRaecDhIT8r613rxGFl8On4psJL87e2lB%2FYpxAuIJV8HZf2p%2B3cEGtmjtgJ9%2Fi3Me%2Bi15g4kPclCT6qjO%2BoTrgjy2jXfgVCDSZawrmPIsRwQrWkneKNJsGjeGv738svuV6baeMMng9sQGOqUBT8GPZg7Q7NcH7e5bSeDV%2BePikrpGxOPBE%2FgUTpLy5BGF1uYC2Mo%2BjVjKKC%2FrGocyhRLgXjjXnoOGeAbYBpg2%2BJ2DwLGWB68kAz51F19%2BfWlZ5dqDgEtxntOmpictQPjjTSoYMsNcS%2FcGzTcCKlDoR1Xnq7C9QStWFd%2B13VCoswSjsmuvNIkSpr9%2FyGOvRVRcPfy0J3M73bFcqvf2frZecqQiSJnV&X-Amz-Signature=bd2e31e43aa82924a3691dd54683ee4df4276e85cbcd9a6f9d1834a59cc02a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
