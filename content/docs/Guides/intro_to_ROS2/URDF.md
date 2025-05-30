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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3WXASN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FwRUAdYOOlYonHFCvivIW6WN2P5iH3N0q8XecWYwSZAiBzCICEbjWs%2BBSOabNf8AcRyv5mWM%2FP5KwIRB8pM%2BG1JiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9lQJrsv%2Bp8CjMKYQKtwDIbX3bOk%2FHiVOv95%2FMVXa2Etwt1nNypYvc3JxTDT58kulI4IDyv2JMk%2FusE0HYkfkrg2nQ%2FuY1keC6s%2FVHtbQIt5hUCnq03kjK%2BMvfzPUdwUms58mCNZCzQ9fJKMxWo97Poz04pLRWQRwtIHungFavKN19kveerGsH9wm9ki%2B39ufDQLYsvVMwplCEONL%2BiapilL8YyU1m07kJP%2F49BupG8zIRPs9pdLuzQGxWdW%2F6tjcpof4pHRaK5nqjuIQRxzYEcfx6%2FIELkjTKzbqLOqQcFAXBvBSUnamuKuvy%2B02Ts7uNBRe3fJ5UtqobGjA25xAbGs7Dp0wh%2B602Y7sBuotWV1rTC9d3aF0Cew5yRA8YAzswQFR97kv3fOxER9lhRLJFodoeBb2Ur%2Bl6lipchVT9ncWWmneS3u4zNKhLk7l4yq8ZnbE1y5pffCKGr%2F2sfxju%2F4Vw0Bn%2B8JtjLYc7wzrc82%2BKT3GnXSeQSP7omaTW89Igi%2FmA%2BeUmP2B7yYpVZR8bJdcns1wCj1O89oLIg2EeyWXn4eEV%2BtV1X5mnzBotxPsXzUykr86hMtdi1RRixaUsoTCtK%2FN8xs7jQd56TBhlpAET9e4KFurOZKUidv2rzkp%2BPbvw266I0bbr2cw%2FK7kwQY6pgFbcLbXg11fyNdkL1LaMVuUmn4%2FoeOKyIizDymL0zKzGhfxtiIAEL9olKkAruSmvSBfMJ2253wFxMaZ557H2gTWJ5EiIeEsi8gX6xGkTIme%2FtKRUuZDqvNneVVsDQHLo%2BowEL4Jq6h1KlPS8b5cJ6Yry1f8%2FXqTn8X06jdkkLUMBqc1CDAV984MzO55Hat6L9RQOg2ZWQuheoYr%2FKUZa6wfB5HefNpN&X-Amz-Signature=2a87cc2e4bdd8058c3d0b38e52eba5328e99ef31ea022d398226febc83f4150c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3WXASN%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FwRUAdYOOlYonHFCvivIW6WN2P5iH3N0q8XecWYwSZAiBzCICEbjWs%2BBSOabNf8AcRyv5mWM%2FP5KwIRB8pM%2BG1JiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9lQJrsv%2Bp8CjMKYQKtwDIbX3bOk%2FHiVOv95%2FMVXa2Etwt1nNypYvc3JxTDT58kulI4IDyv2JMk%2FusE0HYkfkrg2nQ%2FuY1keC6s%2FVHtbQIt5hUCnq03kjK%2BMvfzPUdwUms58mCNZCzQ9fJKMxWo97Poz04pLRWQRwtIHungFavKN19kveerGsH9wm9ki%2B39ufDQLYsvVMwplCEONL%2BiapilL8YyU1m07kJP%2F49BupG8zIRPs9pdLuzQGxWdW%2F6tjcpof4pHRaK5nqjuIQRxzYEcfx6%2FIELkjTKzbqLOqQcFAXBvBSUnamuKuvy%2B02Ts7uNBRe3fJ5UtqobGjA25xAbGs7Dp0wh%2B602Y7sBuotWV1rTC9d3aF0Cew5yRA8YAzswQFR97kv3fOxER9lhRLJFodoeBb2Ur%2Bl6lipchVT9ncWWmneS3u4zNKhLk7l4yq8ZnbE1y5pffCKGr%2F2sfxju%2F4Vw0Bn%2B8JtjLYc7wzrc82%2BKT3GnXSeQSP7omaTW89Igi%2FmA%2BeUmP2B7yYpVZR8bJdcns1wCj1O89oLIg2EeyWXn4eEV%2BtV1X5mnzBotxPsXzUykr86hMtdi1RRixaUsoTCtK%2FN8xs7jQd56TBhlpAET9e4KFurOZKUidv2rzkp%2BPbvw266I0bbr2cw%2FK7kwQY6pgFbcLbXg11fyNdkL1LaMVuUmn4%2FoeOKyIizDymL0zKzGhfxtiIAEL9olKkAruSmvSBfMJ2253wFxMaZ557H2gTWJ5EiIeEsi8gX6xGkTIme%2FtKRUuZDqvNneVVsDQHLo%2BowEL4Jq6h1KlPS8b5cJ6Yry1f8%2FXqTn8X06jdkkLUMBqc1CDAV984MzO55Hat6L9RQOg2ZWQuheoYr%2FKUZa6wfB5HefNpN&X-Amz-Signature=1ac28391565905997cb774210e296ec73e290beb479a0cdc2b88d5fc842d4e7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
