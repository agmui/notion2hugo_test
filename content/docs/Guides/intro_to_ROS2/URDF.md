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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAEDN2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDZ4iMlr2JVRzC9FNUq06FiJFRKQQD40XiKmcqoCs1SzAiEA84N5Pmu8VV%2Frfpt12eNnG1fq%2BEfXOBOzUVluGdsNUgkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNwQvtGRGeuc6%2BwH3ircA8jKvCcUKY5R3FcasJ6yBqpymSLDVTwVKb7Gs%2BodLCnzuuHLpu4lSN2LiKSHD114A%2Bva34bf%2B%2F1068W2bFKaCHfTCgGeEoFZ7nJtiZp6FZG6zxCP2VrdDvCnecph8KPi7kWYxHszkHoweom%2B6rfw0HrTkA7yhg%2FfUvtf0xmlFMUceXSav0mRMPfXsd69pR1br2m5a3rzEAjE5hb%2Fo2LF5j0uBwj4qS%2FR72OAryvnjpyydNIa7TmiKAX8%2FZxrdvU%2Fjb86gjC17%2FQlsvAFUmc590IPXjeDv4SwrQTIUsgmG0W%2F9g19TO8YluPToOXKiER81f%2BKV%2F%2B34UwBrWof0CyQnTKFsNMP7JhplZ9CXSuJxN8HO10XSi6pDnRUXs5e%2B4p%2F%2FFZEpsErPCMqgB9bHL9dcZR5OkjvRwvn7hqORWMeakrpfVUvOlxMuFRYpOID55%2BCsaJrZ6bDldblmCUaUOt5g5gcsV8vzNHsi8BD%2BdtPQE1dIIdrZNbl4JgwDGrItVX2kUgCGAVkuXKiUR%2B%2FVK%2FBkwe0LSGA41IDKR23T026HrIqSOgh3J0OcTYFXKdAsS5ZQ0cPmyRQT4UTPnqasNcKS13w3VVPWtOmSW%2FTR8XIGkb2SYqEKu0TiXG6FYZ5MN3e8sIGOqUBkaBmvYndXqJ4Yl18UlkX93wfisugE2FZQlcLkXD5p3naQiHEUOsWo16%2F4u5yKSKxvfVx0Td1nrMYc3t58Eg0%2BNWaJbDLOkd%2BFcl2%2FjQAmtvxl4CeBSBa1qM5HWLSRFPlgxDny5sQhXhWLWlrLuntp8LFVePUBRBgtPQrZoTMf4Nz4BhiuiZS5aPfOCR95Fkyb7d4J54P3btq8mZz0bbsHNmHuqYT&X-Amz-Signature=401af250932833e6fd47215b0dc46f9f83e11c16e634fd0d0d7db52782cf80ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALAEDN2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDZ4iMlr2JVRzC9FNUq06FiJFRKQQD40XiKmcqoCs1SzAiEA84N5Pmu8VV%2Frfpt12eNnG1fq%2BEfXOBOzUVluGdsNUgkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNwQvtGRGeuc6%2BwH3ircA8jKvCcUKY5R3FcasJ6yBqpymSLDVTwVKb7Gs%2BodLCnzuuHLpu4lSN2LiKSHD114A%2Bva34bf%2B%2F1068W2bFKaCHfTCgGeEoFZ7nJtiZp6FZG6zxCP2VrdDvCnecph8KPi7kWYxHszkHoweom%2B6rfw0HrTkA7yhg%2FfUvtf0xmlFMUceXSav0mRMPfXsd69pR1br2m5a3rzEAjE5hb%2Fo2LF5j0uBwj4qS%2FR72OAryvnjpyydNIa7TmiKAX8%2FZxrdvU%2Fjb86gjC17%2FQlsvAFUmc590IPXjeDv4SwrQTIUsgmG0W%2F9g19TO8YluPToOXKiER81f%2BKV%2F%2B34UwBrWof0CyQnTKFsNMP7JhplZ9CXSuJxN8HO10XSi6pDnRUXs5e%2B4p%2F%2FFZEpsErPCMqgB9bHL9dcZR5OkjvRwvn7hqORWMeakrpfVUvOlxMuFRYpOID55%2BCsaJrZ6bDldblmCUaUOt5g5gcsV8vzNHsi8BD%2BdtPQE1dIIdrZNbl4JgwDGrItVX2kUgCGAVkuXKiUR%2B%2FVK%2FBkwe0LSGA41IDKR23T026HrIqSOgh3J0OcTYFXKdAsS5ZQ0cPmyRQT4UTPnqasNcKS13w3VVPWtOmSW%2FTR8XIGkb2SYqEKu0TiXG6FYZ5MN3e8sIGOqUBkaBmvYndXqJ4Yl18UlkX93wfisugE2FZQlcLkXD5p3naQiHEUOsWo16%2F4u5yKSKxvfVx0Td1nrMYc3t58Eg0%2BNWaJbDLOkd%2BFcl2%2FjQAmtvxl4CeBSBa1qM5HWLSRFPlgxDny5sQhXhWLWlrLuntp8LFVePUBRBgtPQrZoTMf4Nz4BhiuiZS5aPfOCR95Fkyb7d4J54P3btq8mZz0bbsHNmHuqYT&X-Amz-Signature=ec1c2a050277db7b72a5150d6cf9fd45f0ebde44111442d154520712f4c659e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
