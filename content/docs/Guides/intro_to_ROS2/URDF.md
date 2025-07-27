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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCTWSTC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDK%2BXHavAnOZtfs%2FuWeiXmBWDohqfvpXr7i8Wz6h28GEAIhAN5P8EBH92qS1Y%2FTsAcneOb9TYYWCNAIrxaUwgXGWKgSKv8DCGgQABoMNjM3NDIzMTgzODA1Igw4mQcMvlAqEq6mKiMq3APC2hDhdQgiO3gkCQIM%2FwNpv%2Fl0xP5Y%2Fz5ZlPbhaFXx9ylFS02%2B0tYjBoc545cJmR5q7Ym8PoL70iKYAQuCp1YlykXxip8yLf0L8oU2f7C38DrB%2FBstCrzakeYMNxsUkOrA6FQyGGEJqH54oioj4vofOv1vSZhOPf3jvZ2vaqPDCLMnnyQz%2FHDFN2QxGWd9K4Ekash9WgMqgJLW6VWqLBa86tF5vtAv4JZFiEr9zMfsxjlUWeXOCPJOzgZJww9iiOBXCNR1NFSoDXm6%2BhB7gvrL%2FAQUdlnESg%2BuLuOyNe3wbxZym9kqHfucyCUO6AdQqXJGcQ%2BN4IdDSCmZ%2B42P3gN0e8y%2BwmNMDYSSP1pFznmkrSvp92JGDG0eBNlEae9mDbQu%2B8eOzGVRnQT043OQEnQOKxmD2dNr%2Borybvhxx0Z9PdhHfe%2BMDzZPwtjSuZYhP%2Fohx%2BoOno7ejp%2BsZavcCO7rlOfWf45E6w7tRZon3uB5fCKUMRwA5TTmk01oWwOMSSNZFFO4BzdQWgo32IRIeWddMfxDo8lXoLk3uNfRhvqDNFzg2pIKjoKjqAi0NtGMlY1OyBUBGWEwEg%2FiFxn3HYHkgM%2FGFJz5WnzbCaUNTx5vHdzSQLmc7HGNBR9bHzCOwpXEBjqkAasdx5Z4Ww6NI%2FF9axyBjbJcEvOv3%2F063ZE7ITJBhf6p1zhAt1fnD%2FuHBKlT%2BT8BgbRax3o%2FVWr5SUHSr1sBjJXzA0RwvDRfX5XgaBwVNS3ZLsMwnnkn3bDUUP0hmse7qY2w%2BS633Ntg0O3n67SsAl8kf1TdqUkUkG9t9XEbfIOQ9N%2BuChuPtGsc%2FuD4QitRPxxgk2OUZgpnvKW8CRkt1RphDJzz&X-Amz-Signature=7383bf9777a3f08b8b5fd13d0508a98ae5c8c91b35d99c0a606ec45c746304f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCTWSTC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDK%2BXHavAnOZtfs%2FuWeiXmBWDohqfvpXr7i8Wz6h28GEAIhAN5P8EBH92qS1Y%2FTsAcneOb9TYYWCNAIrxaUwgXGWKgSKv8DCGgQABoMNjM3NDIzMTgzODA1Igw4mQcMvlAqEq6mKiMq3APC2hDhdQgiO3gkCQIM%2FwNpv%2Fl0xP5Y%2Fz5ZlPbhaFXx9ylFS02%2B0tYjBoc545cJmR5q7Ym8PoL70iKYAQuCp1YlykXxip8yLf0L8oU2f7C38DrB%2FBstCrzakeYMNxsUkOrA6FQyGGEJqH54oioj4vofOv1vSZhOPf3jvZ2vaqPDCLMnnyQz%2FHDFN2QxGWd9K4Ekash9WgMqgJLW6VWqLBa86tF5vtAv4JZFiEr9zMfsxjlUWeXOCPJOzgZJww9iiOBXCNR1NFSoDXm6%2BhB7gvrL%2FAQUdlnESg%2BuLuOyNe3wbxZym9kqHfucyCUO6AdQqXJGcQ%2BN4IdDSCmZ%2B42P3gN0e8y%2BwmNMDYSSP1pFznmkrSvp92JGDG0eBNlEae9mDbQu%2B8eOzGVRnQT043OQEnQOKxmD2dNr%2Borybvhxx0Z9PdhHfe%2BMDzZPwtjSuZYhP%2Fohx%2BoOno7ejp%2BsZavcCO7rlOfWf45E6w7tRZon3uB5fCKUMRwA5TTmk01oWwOMSSNZFFO4BzdQWgo32IRIeWddMfxDo8lXoLk3uNfRhvqDNFzg2pIKjoKjqAi0NtGMlY1OyBUBGWEwEg%2FiFxn3HYHkgM%2FGFJz5WnzbCaUNTx5vHdzSQLmc7HGNBR9bHzCOwpXEBjqkAasdx5Z4Ww6NI%2FF9axyBjbJcEvOv3%2F063ZE7ITJBhf6p1zhAt1fnD%2FuHBKlT%2BT8BgbRax3o%2FVWr5SUHSr1sBjJXzA0RwvDRfX5XgaBwVNS3ZLsMwnnkn3bDUUP0hmse7qY2w%2BS633Ntg0O3n67SsAl8kf1TdqUkUkG9t9XEbfIOQ9N%2BuChuPtGsc%2FuD4QitRPxxgk2OUZgpnvKW8CRkt1RphDJzz&X-Amz-Signature=7254c680e1b3671b7ce588ea900db1ab0b001f5e66ba52be6f5a50a70ea9360f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
