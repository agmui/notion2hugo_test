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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TH7I4P4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDUUxJgcp14fAX0dzclMj0R0Ki%2BzXKDnnGJ6vuMbZZe0QIhAM6lIRR8xcLxDWtK2C8DbE5BS9NpFCBYpd42tx1aOugdKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymxQkFujiBu0C79Pwq3APRgKEympUUOHN2I6QWW7APbCY0CZ8L6Fk9hKRiQmB250phYxWCNIxqCMOMqiDKi6%2BG074deaE0F5OUCMwHdQnUohK7UodfpliVuKr9Qq%2BNp2A%2BhikWX0Ptt5RHGwlY3n2JaKwYyGuw94srPxx4iWsR%2Fnb5HJ9MjbLZ66oxgCouzXkNFb%2FD5QGOFQb6jGqlJSjdSnKc7ka1kK8lRV5jxIR8xomVvmqHrAuvL7nv%2FOz4xiu%2FuhRNpcl%2BquZfQcIWF9NOsvuIcM93eG49Be1qK286d8syZNySsDSQ44XiIUWBuITtcdmHnTAtSgaaSTAVNIda9nPn6zm1emZvqu7QFZ6jXus4Wakn29dTw%2BPgbhNk45EoLeWcihmVnYN%2BikoRvf4t1nMfGdu8baCPT%2BBimkV0IcPvfWSv7H6ldY764hkyZ%2BSrEb4MUe3JIQsMV9UByM9VGWHps8OXDrn767IKCx92o0G8wkUs06TpdvXasHoNYQrQVs59md10qNkHkxD7fOHWYVlvB6xHIUnt72IVmxQfX6tbfnnZ8gcx2f0h4lfHKXSUXW%2F6M6yznQ9BHf9QxDUNzIwPRGr6SZ62kSOoOblkQdNUd79KTsR7EDyYreUXHkPGKO6XlH3DNSreLjC7l5u9BjqkAdIfUQtA5Q%2FkegU1atg2PlmTHI4oCE5hbTUzWGdUCC4OASv96fTorzvLyofJqwTfUX0EEzhHkp9O%2BCiXcouatbiBkFJGXEotcKSRybI2MXqRNKzoMDT88TlN27QyMztb05NVX6%2FqZZVaI8e6Tqs9TkSx7%2F7xCEfgSWSlkcaodtD9iyAAxwhusDoVo%2FjO%2FT9vLRbvoWUadptCl9dNGFP1DCNHoM9O&X-Amz-Signature=a773c0e47eda7c43dbf6029e3c59dd96b31b0e3e6cf39d3d93314d81521ac215&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TH7I4P4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDUUxJgcp14fAX0dzclMj0R0Ki%2BzXKDnnGJ6vuMbZZe0QIhAM6lIRR8xcLxDWtK2C8DbE5BS9NpFCBYpd42tx1aOugdKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymxQkFujiBu0C79Pwq3APRgKEympUUOHN2I6QWW7APbCY0CZ8L6Fk9hKRiQmB250phYxWCNIxqCMOMqiDKi6%2BG074deaE0F5OUCMwHdQnUohK7UodfpliVuKr9Qq%2BNp2A%2BhikWX0Ptt5RHGwlY3n2JaKwYyGuw94srPxx4iWsR%2Fnb5HJ9MjbLZ66oxgCouzXkNFb%2FD5QGOFQb6jGqlJSjdSnKc7ka1kK8lRV5jxIR8xomVvmqHrAuvL7nv%2FOz4xiu%2FuhRNpcl%2BquZfQcIWF9NOsvuIcM93eG49Be1qK286d8syZNySsDSQ44XiIUWBuITtcdmHnTAtSgaaSTAVNIda9nPn6zm1emZvqu7QFZ6jXus4Wakn29dTw%2BPgbhNk45EoLeWcihmVnYN%2BikoRvf4t1nMfGdu8baCPT%2BBimkV0IcPvfWSv7H6ldY764hkyZ%2BSrEb4MUe3JIQsMV9UByM9VGWHps8OXDrn767IKCx92o0G8wkUs06TpdvXasHoNYQrQVs59md10qNkHkxD7fOHWYVlvB6xHIUnt72IVmxQfX6tbfnnZ8gcx2f0h4lfHKXSUXW%2F6M6yznQ9BHf9QxDUNzIwPRGr6SZ62kSOoOblkQdNUd79KTsR7EDyYreUXHkPGKO6XlH3DNSreLjC7l5u9BjqkAdIfUQtA5Q%2FkegU1atg2PlmTHI4oCE5hbTUzWGdUCC4OASv96fTorzvLyofJqwTfUX0EEzhHkp9O%2BCiXcouatbiBkFJGXEotcKSRybI2MXqRNKzoMDT88TlN27QyMztb05NVX6%2FqZZVaI8e6Tqs9TkSx7%2F7xCEfgSWSlkcaodtD9iyAAxwhusDoVo%2FjO%2FT9vLRbvoWUadptCl9dNGFP1DCNHoM9O&X-Amz-Signature=7ca653b7e88c6ba30a02d264d6bb4f3400f1a29e40a46d3def23478ad8b1817e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
