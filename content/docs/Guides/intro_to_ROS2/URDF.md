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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWYNHGX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B%2Fv0CBp%2BqOyuS%2FbWyRBAtdT8TmJ7cMZPqb3CAW5xtIAiEAuVUTyGVLJhdgG%2B3lnm0KvF7S2NCoxgS%2FaIBj2ALeCRgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2%2By%2FShibW%2BenmzSrcA6LOSAbSxLkETBi%2FUoZN5SWyBkjNyto8sqBG4HOKpPtXmb2WKlZ3oHejmrPbMJCIfxERJjAj%2B%2FqNbxTBuLZ%2BHvuRSlGJJDSusJsNtSQUp%2FD2OlwfGB48kGf0VIgT5aLSf45QwxRU%2FR%2FcbgoHR8JE%2FlghF4xPuPssDTwQT7GHpxhe4rEJb%2Be%2Bin7SYqUdDNMR7AjWvVVbia%2FhCYfBTo%2FcOlqEtwa3E0jMaHwBigkdbOxDPQmyGvha5Pwu5GC4YOWWZz46v%2F9%2BvCVfcRgt%2F6HZb4z8yET5g129j7fOsWqCUFc0%2BpRI30ZfUlbs3N56JlXiYKGn6WGyIWozsEex5C6QshlWLeyRlkd7OGRM5Wj3%2FwOYJVy9UpZnwg6pGnsZVqN2HMu84BSfSAdVhWp7kVreB6j9dx4RfeZ4Yra3Xz1q21TNs0aKiFtdkgz2ii723%2FEQCrZTNdkGs4r8KEPCOkAXX5bLAc1rC85JLcOaxreDHRE3pgG9ffez75rUazM42LryhAoJmfc6ML2TsVm765BZcOlUbAuLH7Sq%2B3N9KHRfdT%2BrgErERoioya7Vk6v%2Fgd2QgRvfPIcULNIUSLqSI2kF%2Bj7AxzSOdhIp1Ai7zqEv%2FrNo9%2F4GSYseq%2FBfhJNAML%2BYtb0GOqUBEGRgv44zMDdsRJc5qojUXPjj95gxDJTyWr2ED5lYd%2Buo%2FsLoS1yNXTcsQ%2BMJWXWphbLM1AcIpCZ2XjK7bTSrYArta4ECV5ruaQRmrnOTwnynDFVU8YXxUy5pQABMMhEJFKYkrR%2FWJd%2Bb%2F%2B7ba3jogOXorB0vNb%2Bp32eebliUR4i9LbYOOEA8FDl4AQq4wjMyUhixIF18nNkzpBxsn2H9suiyJhnn&X-Amz-Signature=7cabe23cf64586f732bcecea23e93f9897928ee25b4b364b247a6d479085649c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWYNHGX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B%2Fv0CBp%2BqOyuS%2FbWyRBAtdT8TmJ7cMZPqb3CAW5xtIAiEAuVUTyGVLJhdgG%2B3lnm0KvF7S2NCoxgS%2FaIBj2ALeCRgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2%2By%2FShibW%2BenmzSrcA6LOSAbSxLkETBi%2FUoZN5SWyBkjNyto8sqBG4HOKpPtXmb2WKlZ3oHejmrPbMJCIfxERJjAj%2B%2FqNbxTBuLZ%2BHvuRSlGJJDSusJsNtSQUp%2FD2OlwfGB48kGf0VIgT5aLSf45QwxRU%2FR%2FcbgoHR8JE%2FlghF4xPuPssDTwQT7GHpxhe4rEJb%2Be%2Bin7SYqUdDNMR7AjWvVVbia%2FhCYfBTo%2FcOlqEtwa3E0jMaHwBigkdbOxDPQmyGvha5Pwu5GC4YOWWZz46v%2F9%2BvCVfcRgt%2F6HZb4z8yET5g129j7fOsWqCUFc0%2BpRI30ZfUlbs3N56JlXiYKGn6WGyIWozsEex5C6QshlWLeyRlkd7OGRM5Wj3%2FwOYJVy9UpZnwg6pGnsZVqN2HMu84BSfSAdVhWp7kVreB6j9dx4RfeZ4Yra3Xz1q21TNs0aKiFtdkgz2ii723%2FEQCrZTNdkGs4r8KEPCOkAXX5bLAc1rC85JLcOaxreDHRE3pgG9ffez75rUazM42LryhAoJmfc6ML2TsVm765BZcOlUbAuLH7Sq%2B3N9KHRfdT%2BrgErERoioya7Vk6v%2Fgd2QgRvfPIcULNIUSLqSI2kF%2Bj7AxzSOdhIp1Ai7zqEv%2FrNo9%2F4GSYseq%2FBfhJNAML%2BYtb0GOqUBEGRgv44zMDdsRJc5qojUXPjj95gxDJTyWr2ED5lYd%2Buo%2FsLoS1yNXTcsQ%2BMJWXWphbLM1AcIpCZ2XjK7bTSrYArta4ECV5ruaQRmrnOTwnynDFVU8YXxUy5pQABMMhEJFKYkrR%2FWJd%2Bb%2F%2B7ba3jogOXorB0vNb%2Bp32eebliUR4i9LbYOOEA8FDl4AQq4wjMyUhixIF18nNkzpBxsn2H9suiyJhnn&X-Amz-Signature=752bd303334d7814cf5f34b50d30e25ee67584aab19b3646131be3f62e772bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
