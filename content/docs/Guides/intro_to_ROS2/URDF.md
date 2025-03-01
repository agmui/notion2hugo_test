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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDHJIPO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEbgp3U8s9KbADDA3iER4cOiTmsDvlGQs%2FXTkQ27Tei%2BAiB4rYNE7cZqHgypvZ%2FxPZVPTSw0tZwFhQoP2rcBke8E2CqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM139vd18i%2BT87P8vMKtwD5YBP0C30aOB7bLYuDyjGnovrP4BbD24p1bqodoX2g3AHQ4dV4t8%2B8aSoo%2FM2l7FqsHaS2Qc09QRDZ0uy72LGOebsXrKeY85RqWdXVUvaZbm17KQRu4FXvDq5oOUA%2BZeCQ8rY52e2J2Smn24Wql4yQk6v%2B%2FVbB8NazAlGT2CDNPBE3FRMS6Uc6Ys6zNu3EH7HgUeQt22SDx1jo1ZfX60hdDq%2FZGoaUoD8endYzOul50ztZ8XQK3stR5FbPJFnDNV%2B8nNUZO6TUdZI3bQ2eosciudni4qQZvq48pXQZ9WtkIDNyqIMSgY15ehbX7axkhx6zVdpwuxPLsEnJyQPBU8EEDMZ3hBO%2FhZGq%2BWeOa7JMkBYXM8cSiPnT29jBbTBGsLQhNaDyUeuA1K7NlwpkcpT49zZ7BmZWH5jB28GGqfWp4%2F4O%2FR95zh6fOTZILza9ts3sycSGHBREKakzRZqpCKT5UeAk9RByjrLeA3bA%2BSXaPg%2BRpmo1F3zaa2eOAOpHunku4boZUmms4GA9Z3D5D7KAWhOg19i%2FsjUfk%2Bi6zk8op%2BAUrk%2Fs%2FmQ7Z18jtDs%2FIbbVI27CvbSua6B8Y5707wqQoHz9xuWHqRz83XVfixg%2FTaL2yr4ZizblrmpN58wgNWJvgY6pgFafTnj851s6bWtCFkdgzARrDzjae%2Bs%2BHT22qCwyC70%2B3%2Fi%2B5lY%2FlAk79JHOyZST9s9BNBuzKJp%2B2ho%2BuXwMrgwpHdFXuWdf2R8GzvJVgUylDG8bj9AW9746HbzIOa3s3lg6KMztdNUsau2HLW3jDdncO3r8uBLH0b8FYf1M2vWRBlisI7%2BWd9RBSLXGOTVzka5Sw8di0Ib5S%2BYZd15m72ZK7QB%2FzWt&X-Amz-Signature=111ed26eb0c62c3725582f3b11cf36017e2cb0a80a4d5737f81fa2c25da2e86b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDHJIPO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEbgp3U8s9KbADDA3iER4cOiTmsDvlGQs%2FXTkQ27Tei%2BAiB4rYNE7cZqHgypvZ%2FxPZVPTSw0tZwFhQoP2rcBke8E2CqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM139vd18i%2BT87P8vMKtwD5YBP0C30aOB7bLYuDyjGnovrP4BbD24p1bqodoX2g3AHQ4dV4t8%2B8aSoo%2FM2l7FqsHaS2Qc09QRDZ0uy72LGOebsXrKeY85RqWdXVUvaZbm17KQRu4FXvDq5oOUA%2BZeCQ8rY52e2J2Smn24Wql4yQk6v%2B%2FVbB8NazAlGT2CDNPBE3FRMS6Uc6Ys6zNu3EH7HgUeQt22SDx1jo1ZfX60hdDq%2FZGoaUoD8endYzOul50ztZ8XQK3stR5FbPJFnDNV%2B8nNUZO6TUdZI3bQ2eosciudni4qQZvq48pXQZ9WtkIDNyqIMSgY15ehbX7axkhx6zVdpwuxPLsEnJyQPBU8EEDMZ3hBO%2FhZGq%2BWeOa7JMkBYXM8cSiPnT29jBbTBGsLQhNaDyUeuA1K7NlwpkcpT49zZ7BmZWH5jB28GGqfWp4%2F4O%2FR95zh6fOTZILza9ts3sycSGHBREKakzRZqpCKT5UeAk9RByjrLeA3bA%2BSXaPg%2BRpmo1F3zaa2eOAOpHunku4boZUmms4GA9Z3D5D7KAWhOg19i%2FsjUfk%2Bi6zk8op%2BAUrk%2Fs%2FmQ7Z18jtDs%2FIbbVI27CvbSua6B8Y5707wqQoHz9xuWHqRz83XVfixg%2FTaL2yr4ZizblrmpN58wgNWJvgY6pgFafTnj851s6bWtCFkdgzARrDzjae%2Bs%2BHT22qCwyC70%2B3%2Fi%2B5lY%2FlAk79JHOyZST9s9BNBuzKJp%2B2ho%2BuXwMrgwpHdFXuWdf2R8GzvJVgUylDG8bj9AW9746HbzIOa3s3lg6KMztdNUsau2HLW3jDdncO3r8uBLH0b8FYf1M2vWRBlisI7%2BWd9RBSLXGOTVzka5Sw8di0Ib5S%2BYZd15m72ZK7QB%2FzWt&X-Amz-Signature=1a2ad573719a1ddb70302c9ea9adeb983274726af6a9f946a0859a87a592383b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
