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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMQT2WZX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC10gOcTL1wb7eqYK15GiwhTmjInowLrrDELTChjg%2Bb5AIhAOWAqwc7hGjFDS4o5AywmPuJeqseWXt%2B0jB2pDFyHpiCKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfG49gXK3H5AHz9%2Fwq3AOkGhOKwZd5XBaKfa79KjK%2BDUZuC%2Bo%2BrB2Eu3ut9gt%2FuorctM0l4JGkhPguAeng1vQ7S%2BD8j9pvhHf28SqRRmI3kYSvcWr4%2F0RgZu15uccV5hYjyGmUkd89Zj0DTR6ZWroQdENWI%2F8Z6TYvZPSZQeYaG2fl4h%2BA3%2FQJbKXDzMY55wAzIOmtasNjQ58REixyNxhyh1EbmqwfMBs4qdfvHchOaskFM7C6ZUUU8mO0RkwMmsFp3eaP7PQrOlnjsV2DiUji3FA2rj3a0GTKnfdJgYMcTiya8ELa4IUnFmgFNfWTEktd2vqISujPhDBOqqJi%2FmQT4UPUUW3WPX7AHG2FU9Fc2hS0hTX%2Brb74mczGUeYYkTLomjBTeTc%2B1jleepsw13yI37wnytpsHN2ptxW5kHD%2BwAk9qJkxhgcy0R%2BlCLXT1JhUZlpYXPTU2eqeesQXh9GJ07auvkLnHhmF42%2BXHvkQgvtiRhExnkls0rCxODXP%2FMoXNmR1us8Jf979SN9v78DbJp%2F97X13bQ8HHC2LjtJW5RYoJPS5lIKf%2FwE%2FjjXms6ej4u%2F7iFJ8H53vcrTHfIPorDurup7hfL0TYWvt9hrvMJ6z4Gn6upvKUrCvrsHzAMFJSla6Lto%2BhD57oTCgxNvEBjqkAeCTDH4anK9V7em5YAmR1Z17mcoUiFebZXnuF8rlQY5St153o8ccjV965fRKlhB4e2ZnbKyRwx5d1U%2FZ9seDX5Sm%2FPrWMz02L56Y2EQIBKCs3RnzNzlOTcPQ1HxVRsbpqHkxa7dyJol3l1xEs5IDEVNOghbnns4EGJD3iNER8maQ0S3GDdPYVY5LfyVciZOGMO6%2FzZmJuCNssYE7K1GwrkOy%2FSnR&X-Amz-Signature=364cec858df4e40a11f64ff6c2635c514d1da49f44e2e7e71c8c585a91c17c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMQT2WZX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC10gOcTL1wb7eqYK15GiwhTmjInowLrrDELTChjg%2Bb5AIhAOWAqwc7hGjFDS4o5AywmPuJeqseWXt%2B0jB2pDFyHpiCKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfG49gXK3H5AHz9%2Fwq3AOkGhOKwZd5XBaKfa79KjK%2BDUZuC%2Bo%2BrB2Eu3ut9gt%2FuorctM0l4JGkhPguAeng1vQ7S%2BD8j9pvhHf28SqRRmI3kYSvcWr4%2F0RgZu15uccV5hYjyGmUkd89Zj0DTR6ZWroQdENWI%2F8Z6TYvZPSZQeYaG2fl4h%2BA3%2FQJbKXDzMY55wAzIOmtasNjQ58REixyNxhyh1EbmqwfMBs4qdfvHchOaskFM7C6ZUUU8mO0RkwMmsFp3eaP7PQrOlnjsV2DiUji3FA2rj3a0GTKnfdJgYMcTiya8ELa4IUnFmgFNfWTEktd2vqISujPhDBOqqJi%2FmQT4UPUUW3WPX7AHG2FU9Fc2hS0hTX%2Brb74mczGUeYYkTLomjBTeTc%2B1jleepsw13yI37wnytpsHN2ptxW5kHD%2BwAk9qJkxhgcy0R%2BlCLXT1JhUZlpYXPTU2eqeesQXh9GJ07auvkLnHhmF42%2BXHvkQgvtiRhExnkls0rCxODXP%2FMoXNmR1us8Jf979SN9v78DbJp%2F97X13bQ8HHC2LjtJW5RYoJPS5lIKf%2FwE%2FjjXms6ej4u%2F7iFJ8H53vcrTHfIPorDurup7hfL0TYWvt9hrvMJ6z4Gn6upvKUrCvrsHzAMFJSla6Lto%2BhD57oTCgxNvEBjqkAeCTDH4anK9V7em5YAmR1Z17mcoUiFebZXnuF8rlQY5St153o8ccjV965fRKlhB4e2ZnbKyRwx5d1U%2FZ9seDX5Sm%2FPrWMz02L56Y2EQIBKCs3RnzNzlOTcPQ1HxVRsbpqHkxa7dyJol3l1xEs5IDEVNOghbnns4EGJD3iNER8maQ0S3GDdPYVY5LfyVciZOGMO6%2FzZmJuCNssYE7K1GwrkOy%2FSnR&X-Amz-Signature=278e5db6b3fe7ecac1d5ce3e8865971f086f80cef2a00fc4eceb4983eaea892f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
