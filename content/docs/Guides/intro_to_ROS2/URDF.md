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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYYFPKC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRzwOj%2FatVGeelJMieY63ONBUl%2F50qr4AZ9rBK42LJAiBgFDsa4KU78QrBRFZZcCE9JnCuKtuIzFFLeSbzPKqW3SqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGV3zbb6%2F0XK4t%2BXKtwDD0DMbnnB3XRe85sOqnuyyO0083hBTfi9xGC%2FVdNeH8nG1Hh98d7sAHBTpIhHx%2FK%2B9BpaVbhoYKTpOfAXNh5JeAwYA8c4X53tQD8LKhHqMkYonGACrT%2BnBtqfR7Ef97QAsVr8cRrr4VTP%2FwdMjs8%2BABIisLNZ9wzWiLd1mQC%2FV%2BF9IML7SF8q5g6%2F9W3Dh5oUuvQUAo3WPVErYFfOd2GSvJxQp9UYdw%2F%2FbgL1P7R%2FuZcBqi5Y1pD8y6exR6OrByZOda2pKg2Gz9rO2bfEQbcLQEVntvzXjyqDDIhW74MVcrZu6fxrZ%2BUu%2B0P7mGZc5ED%2Flow7AaLH1%2BYaNfuzWeL0PXxtaY%2BiibzPFrEK92FjQvQnb0c5KL39tXXKRUtc54Qr9mUkOwD%2FYsJWPI0Odm1U2eIAQhBJyyVSDQHLFoRLCC9mdQqDariCmetZgEi2fdoYI5zHPl5BXh257lMsYpn6gxA7at3XAKcsHChQ72QdSJPDFgpCPOWHNhefB1CuCe9HTrpIsGD%2BNnRMERzer8GcAR2KqnXS7IyXx0vIhwzwaDx9d4j%2Fs5eotTlRFt6i1q5bH2pT9AqVoyZwM7W8UQACIx8Tz69gGHyLl4rnt%2BhkMUaaBVEG%2FgTsZ40IF8Mwy7LfxAY6pgHT4aMGYZqdwzs8EToinSSPdPYSbw0TqL9RSF0ubSHIs08%2Bp5h51jJN0izkprP6FkUUaQneY5LnMSnwPjR%2BGwtHcs6uZWhXeuZ9DDs4PvmmmePD1SQPoj3Cf2TRhgNUfAlVp%2B6t9%2B4%2BZiggxpzpKpf77HPVCykgW8V2kZ0sljdvAE3kNUX1ab8fk%2BPK5NfRKmsX4ufQk9n6hqwV%2F0KU7yrsy37v5927&X-Amz-Signature=af4f24499d3208f4c9dabd76398d0f2332710ade31df8acff2483056079d98d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYYFPKC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWRzwOj%2FatVGeelJMieY63ONBUl%2F50qr4AZ9rBK42LJAiBgFDsa4KU78QrBRFZZcCE9JnCuKtuIzFFLeSbzPKqW3SqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGV3zbb6%2F0XK4t%2BXKtwDD0DMbnnB3XRe85sOqnuyyO0083hBTfi9xGC%2FVdNeH8nG1Hh98d7sAHBTpIhHx%2FK%2B9BpaVbhoYKTpOfAXNh5JeAwYA8c4X53tQD8LKhHqMkYonGACrT%2BnBtqfR7Ef97QAsVr8cRrr4VTP%2FwdMjs8%2BABIisLNZ9wzWiLd1mQC%2FV%2BF9IML7SF8q5g6%2F9W3Dh5oUuvQUAo3WPVErYFfOd2GSvJxQp9UYdw%2F%2FbgL1P7R%2FuZcBqi5Y1pD8y6exR6OrByZOda2pKg2Gz9rO2bfEQbcLQEVntvzXjyqDDIhW74MVcrZu6fxrZ%2BUu%2B0P7mGZc5ED%2Flow7AaLH1%2BYaNfuzWeL0PXxtaY%2BiibzPFrEK92FjQvQnb0c5KL39tXXKRUtc54Qr9mUkOwD%2FYsJWPI0Odm1U2eIAQhBJyyVSDQHLFoRLCC9mdQqDariCmetZgEi2fdoYI5zHPl5BXh257lMsYpn6gxA7at3XAKcsHChQ72QdSJPDFgpCPOWHNhefB1CuCe9HTrpIsGD%2BNnRMERzer8GcAR2KqnXS7IyXx0vIhwzwaDx9d4j%2Fs5eotTlRFt6i1q5bH2pT9AqVoyZwM7W8UQACIx8Tz69gGHyLl4rnt%2BhkMUaaBVEG%2FgTsZ40IF8Mwy7LfxAY6pgHT4aMGYZqdwzs8EToinSSPdPYSbw0TqL9RSF0ubSHIs08%2Bp5h51jJN0izkprP6FkUUaQneY5LnMSnwPjR%2BGwtHcs6uZWhXeuZ9DDs4PvmmmePD1SQPoj3Cf2TRhgNUfAlVp%2B6t9%2B4%2BZiggxpzpKpf77HPVCykgW8V2kZ0sljdvAE3kNUX1ab8fk%2BPK5NfRKmsX4ufQk9n6hqwV%2F0KU7yrsy37v5927&X-Amz-Signature=25bc13a0e80948a24a0c915892a8583ab21d67de8c2a025003b0de4cc1cc13a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
