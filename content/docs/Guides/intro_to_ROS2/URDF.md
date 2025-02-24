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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZCV6JY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeGCALgD1B%2Fdasp8c6%2Bbl3Y%2Fep5H1UtmtqHqyVQCeP3AiBMuNi%2Bs7%2Fs4KyTJiSnw%2BGFjucMy4JKbmZeAjJGu%2Fz68Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvsQXlnJ66zSl%2Bh0vKtwD73FGnPzwyb3UsTuCB6PZP15a6HNFkcRXjn4CNYat1S8qDbFxRtGH65SCsEuVqVSigxuL1mvCKEpTr8UimGOSVTrS9YaUMBLsgexDyB0%2FH0YXFOGG5CdIUGtWZPGdUcDYWaz5kUwtma7rr83lCiuWUPHA0lMO7LKIpYLMMLoXPee2QYdi%2FChFbJimF3efWtc90a30CXvrhXslcDTIsNQxQQ6400mlS1tubsXbqWQyxZ62hb6QmxEEHsn0pmdluevWHjvOcSsdTtPJuJ%2B7zSRin1xbrftcr08TyPZBaRKivr1InPDPFgX5mHMxYqIEEdiDlXNkdBR1RbtoLdv9CgNSCnx71oaOcEoYBubuyGVEl6tMqkKy0mQ3kNbDGSsPAj1DZKqjlWVzTx4OssZdc9Dv7GM%2FYBXfKW0nTUSq81OnKRcSZw5owMeDgw0BfOEx%2BR3%2F7veYEOnSXmbDi7Hz3yeNHFgMjZvRJcvT5iFCFSYLWNURCwB6ZkBRq8Zz9xyA3I1Ltfcb0hmAlN4V4gPS63JT2JN8VCaWKjvwD8%2FO3mljMkk6%2F17FoVHahDuRDVwqoKk1TXYgtukROONN1XgvgQfRWP089assKH9%2FIL97AoJ47By2%2Fy3tSQEERV%2BlpRswwrjxvQY6pgGdfKBkLHB7wM3fIDWlAX90FvFG7p4s8R6GV6fwSrYfhSYwo8aQaHt4cxzAbh1egszkD7caHv8Jk1zbodjyazUIPLtwk4UzMWGhe%2FUJH5mLSyyCU2oQPtSFbpeU0rIhS6TwmqAf%2FSC8ZgDXlYlSq4yBrhRkX5MHWaoYE%2BUPlpY2VKObFuDnqVNp1hjQV24hckSjcgtnrsbUAYhrUzTT0FIbT0o7k5%2BS&X-Amz-Signature=43a057d73d1d9a5049c746d1f607bfa3ed14e4433609f021b4f45cea7cc3ead0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZCV6JY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeGCALgD1B%2Fdasp8c6%2Bbl3Y%2Fep5H1UtmtqHqyVQCeP3AiBMuNi%2Bs7%2Fs4KyTJiSnw%2BGFjucMy4JKbmZeAjJGu%2Fz68Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvsQXlnJ66zSl%2Bh0vKtwD73FGnPzwyb3UsTuCB6PZP15a6HNFkcRXjn4CNYat1S8qDbFxRtGH65SCsEuVqVSigxuL1mvCKEpTr8UimGOSVTrS9YaUMBLsgexDyB0%2FH0YXFOGG5CdIUGtWZPGdUcDYWaz5kUwtma7rr83lCiuWUPHA0lMO7LKIpYLMMLoXPee2QYdi%2FChFbJimF3efWtc90a30CXvrhXslcDTIsNQxQQ6400mlS1tubsXbqWQyxZ62hb6QmxEEHsn0pmdluevWHjvOcSsdTtPJuJ%2B7zSRin1xbrftcr08TyPZBaRKivr1InPDPFgX5mHMxYqIEEdiDlXNkdBR1RbtoLdv9CgNSCnx71oaOcEoYBubuyGVEl6tMqkKy0mQ3kNbDGSsPAj1DZKqjlWVzTx4OssZdc9Dv7GM%2FYBXfKW0nTUSq81OnKRcSZw5owMeDgw0BfOEx%2BR3%2F7veYEOnSXmbDi7Hz3yeNHFgMjZvRJcvT5iFCFSYLWNURCwB6ZkBRq8Zz9xyA3I1Ltfcb0hmAlN4V4gPS63JT2JN8VCaWKjvwD8%2FO3mljMkk6%2F17FoVHahDuRDVwqoKk1TXYgtukROONN1XgvgQfRWP089assKH9%2FIL97AoJ47By2%2Fy3tSQEERV%2BlpRswwrjxvQY6pgGdfKBkLHB7wM3fIDWlAX90FvFG7p4s8R6GV6fwSrYfhSYwo8aQaHt4cxzAbh1egszkD7caHv8Jk1zbodjyazUIPLtwk4UzMWGhe%2FUJH5mLSyyCU2oQPtSFbpeU0rIhS6TwmqAf%2FSC8ZgDXlYlSq4yBrhRkX5MHWaoYE%2BUPlpY2VKObFuDnqVNp1hjQV24hckSjcgtnrsbUAYhrUzTT0FIbT0o7k5%2BS&X-Amz-Signature=d6adbd8d2300161a60f96316a7b97f76a3c053485d6285de3d9ed85dd8b3074e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
