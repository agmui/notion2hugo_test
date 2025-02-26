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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNM746U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElP3XpoI5UYBUFiZePZyhiP0gncskRxvLdlINl9ir7jAiAStotuK4fr8eOm%2FXTSxiu5RbxKwzXpX55WZyDDdKb5Myr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMUbbiH280pqolz3cMKtwDR5%2FZ83z7zQhwPNJbXP5IyCeJj0HNEEP2GDvV22A9NUEbe10MnJuUbwuVrSiriLxaSjpH0dxGFbH7xJDdlQQuhNkh5y58ra0fuDk7QBjk3q3j5GCfdSMvDCJKwbvW%2FnpQIHZdiuoBtZdrCC%2BheUBcjOfyheuN4xMV75qpDKTiay9YNVGukxpt47vvp1pgTmY2dvVYzO%2BhNBNd%2BgSbotQ36dgUvPX3FLexWpUbWe91EumYdbd7ocS3BONjxGGM24TiSYkn50el24Rwa%2BueQ2OTsipUmnakqiCtY77KykJ8adoHu6dAhKv7mafTl3cVuWvEFahCftS3bTaKDRSQJalLfxKq6XmnHKTmD2MEBP%2FyP7UVJDg5bOMARN1iqaz5XtGFYekN1qQvYhVa7x%2BSO3fozOj9EA%2BJr5na6kjGRN4OFppe82l7BQkBEaKoHR%2FeNIuMw70UQFBuved8C4c6Yg3DmnQNqbZbBkvtKji1o10ztqUswfT7BUQkEpzoZ9bvNJCjVEUd2Ucg9%2Buf2nDMzsrXFBaCcGs5bFNtgMCy4YYA3N91IT8Jw0TPP1oYVfk2RZpnsjnChx7t6sKBqZP%2FE1FUtEwk6iGBkvfS%2BOxrw85nLCjStO7e8yGA2wLxwIsw2b%2F7vQY6pgFmtmpin%2Bad8x2nT1nNNEWdJ4n9Ob2bU%2BfFmLBi%2BlN2pW8maLlHNBttiQY24r7DgGy6h9tA7Dw8iB1mHkZunZ6tRwCiIYczdOvk5T2J2UxQEojxBhlchMpdKalEmEIVwX3I1SsxuGE4fAJjmXad%2BOCNr3vURgKwWmYh17lCMMRfd316cLnb%2Fm1p5FYzA4eniLBoEd29%2BUDKWpC5rCOu0u2XSvYMzvGX&X-Amz-Signature=078a394cbfee5a4764b1c32f526cfdd2ec59983a2aca938d0fa1df2b8a49842c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNM746U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIElP3XpoI5UYBUFiZePZyhiP0gncskRxvLdlINl9ir7jAiAStotuK4fr8eOm%2FXTSxiu5RbxKwzXpX55WZyDDdKb5Myr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMUbbiH280pqolz3cMKtwDR5%2FZ83z7zQhwPNJbXP5IyCeJj0HNEEP2GDvV22A9NUEbe10MnJuUbwuVrSiriLxaSjpH0dxGFbH7xJDdlQQuhNkh5y58ra0fuDk7QBjk3q3j5GCfdSMvDCJKwbvW%2FnpQIHZdiuoBtZdrCC%2BheUBcjOfyheuN4xMV75qpDKTiay9YNVGukxpt47vvp1pgTmY2dvVYzO%2BhNBNd%2BgSbotQ36dgUvPX3FLexWpUbWe91EumYdbd7ocS3BONjxGGM24TiSYkn50el24Rwa%2BueQ2OTsipUmnakqiCtY77KykJ8adoHu6dAhKv7mafTl3cVuWvEFahCftS3bTaKDRSQJalLfxKq6XmnHKTmD2MEBP%2FyP7UVJDg5bOMARN1iqaz5XtGFYekN1qQvYhVa7x%2BSO3fozOj9EA%2BJr5na6kjGRN4OFppe82l7BQkBEaKoHR%2FeNIuMw70UQFBuved8C4c6Yg3DmnQNqbZbBkvtKji1o10ztqUswfT7BUQkEpzoZ9bvNJCjVEUd2Ucg9%2Buf2nDMzsrXFBaCcGs5bFNtgMCy4YYA3N91IT8Jw0TPP1oYVfk2RZpnsjnChx7t6sKBqZP%2FE1FUtEwk6iGBkvfS%2BOxrw85nLCjStO7e8yGA2wLxwIsw2b%2F7vQY6pgFmtmpin%2Bad8x2nT1nNNEWdJ4n9Ob2bU%2BfFmLBi%2BlN2pW8maLlHNBttiQY24r7DgGy6h9tA7Dw8iB1mHkZunZ6tRwCiIYczdOvk5T2J2UxQEojxBhlchMpdKalEmEIVwX3I1SsxuGE4fAJjmXad%2BOCNr3vURgKwWmYh17lCMMRfd316cLnb%2Fm1p5FYzA4eniLBoEd29%2BUDKWpC5rCOu0u2XSvYMzvGX&X-Amz-Signature=94660ef469ad63f737132d502656d69d6a602028ef1d8b186c829fce8535c9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
