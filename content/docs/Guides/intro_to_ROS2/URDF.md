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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPA6EMK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiShYAG4eCvliGO76oUEChOxY3jDcsyxW4jN0YsqYNAAiAR8tZiONjOLBIEmqyFVIrNqC94hdBS%2FbwwGzDMm1lPniqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDVjIF44hg1a71eT6KtwDavKUD48BZbrQehe5UnZcrKUHEiMqQY5DkcLStrLXK93RgwFfvqiBo1DNhiWWxr1JgiN3323MXoSvCXllkosuXA7JZdPFiaSl1aHUQFGUr4HtE3bhmLYVrQOnMqaYmAiGZSHckdMxvrXURAef%2F5dGpkxpZL8qotvDV7Qlau%2BWlndcp3RpPvUjIQ8%2F9kX3UltByuimlAatPtMbiyDA6nHNmvjTAcPiEo7JMJEA0JIekK%2BcXSBVCYKIbuZo7D5Q%2F4K9qWllCdgoqFBgQkpQQXwinj45gcVyI1St2nKoqi0klyQDYF7rV48Ql1OFmmPsWvscA1BQ8raKjgi27JM3ak8DOCl9UGilnR8xxNeWelEMiI4tHjTrB%2BCS9XGLM8mi1OekvEtZ8KXs4AFd%2FMQ648un9Zudzx8mUDDyVxxHCyB4HRuf0DDoJgXMfKNAi5D1AC3ogc8aCTn6L1aWTDWmvGQPiW0jlXOX1Sc3Akc7A51ErianAMAJgGd2aJ9qNDz11iJTMJjMUfnB1eudujHx26b%2B7TKePvSU%2FrMODZpqRQ8STlKuZ%2BzSFzpMxqVeYGbgmPM2tYzmD7fW4j5wn%2FloSjBfiFaahhQVUKcIhQ6d68B5hVwoda8JX%2By8x65FuSMwnKn9wgY6pgGXSnOfNEuui9JQIViBdY3yJEDZaJKZGt2BEAl8IC1W133Gv7KjQC83qzM1k1lMrsdwSnL5Y0vfSIuJz3B%2FJwe%2B%2BUpdV%2FDhctEok0XcRm%2F0nrfOlAX3p8145zFniQXBDJtStd22qV2myJ4HncnRTp%2FfdpUEl8Oiuo0tDq5VjDSvMkI3KWCOtmhrXNZmv9NDPhTPKFRn1NxUtuIOAJ53BMhh9I8uGncH&X-Amz-Signature=0aab6e0b281edc831a28a1d4782a0353a35ab2a5cac4816919fa9c0c159cb955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPA6EMK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiShYAG4eCvliGO76oUEChOxY3jDcsyxW4jN0YsqYNAAiAR8tZiONjOLBIEmqyFVIrNqC94hdBS%2FbwwGzDMm1lPniqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDVjIF44hg1a71eT6KtwDavKUD48BZbrQehe5UnZcrKUHEiMqQY5DkcLStrLXK93RgwFfvqiBo1DNhiWWxr1JgiN3323MXoSvCXllkosuXA7JZdPFiaSl1aHUQFGUr4HtE3bhmLYVrQOnMqaYmAiGZSHckdMxvrXURAef%2F5dGpkxpZL8qotvDV7Qlau%2BWlndcp3RpPvUjIQ8%2F9kX3UltByuimlAatPtMbiyDA6nHNmvjTAcPiEo7JMJEA0JIekK%2BcXSBVCYKIbuZo7D5Q%2F4K9qWllCdgoqFBgQkpQQXwinj45gcVyI1St2nKoqi0klyQDYF7rV48Ql1OFmmPsWvscA1BQ8raKjgi27JM3ak8DOCl9UGilnR8xxNeWelEMiI4tHjTrB%2BCS9XGLM8mi1OekvEtZ8KXs4AFd%2FMQ648un9Zudzx8mUDDyVxxHCyB4HRuf0DDoJgXMfKNAi5D1AC3ogc8aCTn6L1aWTDWmvGQPiW0jlXOX1Sc3Akc7A51ErianAMAJgGd2aJ9qNDz11iJTMJjMUfnB1eudujHx26b%2B7TKePvSU%2FrMODZpqRQ8STlKuZ%2BzSFzpMxqVeYGbgmPM2tYzmD7fW4j5wn%2FloSjBfiFaahhQVUKcIhQ6d68B5hVwoda8JX%2By8x65FuSMwnKn9wgY6pgGXSnOfNEuui9JQIViBdY3yJEDZaJKZGt2BEAl8IC1W133Gv7KjQC83qzM1k1lMrsdwSnL5Y0vfSIuJz3B%2FJwe%2B%2BUpdV%2FDhctEok0XcRm%2F0nrfOlAX3p8145zFniQXBDJtStd22qV2myJ4HncnRTp%2FfdpUEl8Oiuo0tDq5VjDSvMkI3KWCOtmhrXNZmv9NDPhTPKFRn1NxUtuIOAJ53BMhh9I8uGncH&X-Amz-Signature=2e98a6633de0f5dd85fecbc863b97ead2e9ff62fba507c8592f9a3fc9a759c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
