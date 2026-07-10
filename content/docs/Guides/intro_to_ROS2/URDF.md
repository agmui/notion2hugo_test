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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUHNHYX%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM4drzVQFRks7%2BLoBDwDKWkraVovYIajeSuqFVUGzSsAiEA8G3wSXr1FB60iqO1Uc57U96ZP0rXyQZpIaaKBJyLUmQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPPucQ%2BPuLpGzGm0yrcA%2FkpEbwPOxOYY1ZTTq01rjAiMORmd1dJvg1OOYc5E51ig4wFPNC9GIYT4jMhj3CeClxwdYx722Nmf5CA1KLp4EJ5yYetABZvXFQT1KYwXlGMQ691UaktovvbdROrBHSCFITpOVBQBnPHlxqZsd2nfePQW5FKQk0I%2BJhPeOlHtsSK8sgrgmFaEc%2BABSmKqw%2FTNXdqDN%2FzoEmjzrQPmIat8Lc7ukc6X73qF%2FwH0Py5i1nBfhkjLn62jQVmOXjl7NG%2BbAMnk6pt3%2FQJNf89haMvdPluRHkooq%2FRFrWl0lw5kv7e54dDnE8VGa35PM4Crx3prH6vS1gQAeMzPlc7QE1hTueXgF%2FbtPllMmAjl6UL3F91Atf%2FwhxzT8phfa83Qpwebn5Bz2zJ8%2BHip60SEPhjDPiQDvGw6H6ulPSimR3m6MW%2FYW6DXX07Ey7a9MFtglxRqoLM7OEVVqKRCfv0KITgDKqpdMWo9apZdgoi89qtQNqwcG2fpzTdmNj4fSZVOuIWuARhdU%2Fi%2BCHVqSd9cndkqPTLYuM%2FbII3r0dp6mPVJ93c43LsqazE1BNrwJNlnTJhQjsjFZYYsMxzu8IbX02w%2BMjVvgaRuuJF9QJMQ6eIVxq5h81kOoWUW9Rf9jj0MLK2wdIGOqUBdz3V9yW7ymuiiktcZbh3x3dkurMLN0JeOY7hRVgRWLBbkM40lxlo%2FhVEJeSKBg47JBnjbXktlnHKq%2BqHpZK3SidJH1dTXv%2Fzth3%2FLBaLC1zAd50Yc2Xrs1%2FcDSqVG%2BzMR2EowEQ0Htm%2Beh0fQiQRrQBZsUEDGRYFbpOjNjXU1z5ir8tjBeyDNRmFXIhmehBucQVCaJnnQyMM51OmpHRyLz0uFwOJ&X-Amz-Signature=b4591199d5a01887517a34c3773db395c3db287be452553ab01669a052272ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUHNHYX%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM4drzVQFRks7%2BLoBDwDKWkraVovYIajeSuqFVUGzSsAiEA8G3wSXr1FB60iqO1Uc57U96ZP0rXyQZpIaaKBJyLUmQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPPucQ%2BPuLpGzGm0yrcA%2FkpEbwPOxOYY1ZTTq01rjAiMORmd1dJvg1OOYc5E51ig4wFPNC9GIYT4jMhj3CeClxwdYx722Nmf5CA1KLp4EJ5yYetABZvXFQT1KYwXlGMQ691UaktovvbdROrBHSCFITpOVBQBnPHlxqZsd2nfePQW5FKQk0I%2BJhPeOlHtsSK8sgrgmFaEc%2BABSmKqw%2FTNXdqDN%2FzoEmjzrQPmIat8Lc7ukc6X73qF%2FwH0Py5i1nBfhkjLn62jQVmOXjl7NG%2BbAMnk6pt3%2FQJNf89haMvdPluRHkooq%2FRFrWl0lw5kv7e54dDnE8VGa35PM4Crx3prH6vS1gQAeMzPlc7QE1hTueXgF%2FbtPllMmAjl6UL3F91Atf%2FwhxzT8phfa83Qpwebn5Bz2zJ8%2BHip60SEPhjDPiQDvGw6H6ulPSimR3m6MW%2FYW6DXX07Ey7a9MFtglxRqoLM7OEVVqKRCfv0KITgDKqpdMWo9apZdgoi89qtQNqwcG2fpzTdmNj4fSZVOuIWuARhdU%2Fi%2BCHVqSd9cndkqPTLYuM%2FbII3r0dp6mPVJ93c43LsqazE1BNrwJNlnTJhQjsjFZYYsMxzu8IbX02w%2BMjVvgaRuuJF9QJMQ6eIVxq5h81kOoWUW9Rf9jj0MLK2wdIGOqUBdz3V9yW7ymuiiktcZbh3x3dkurMLN0JeOY7hRVgRWLBbkM40lxlo%2FhVEJeSKBg47JBnjbXktlnHKq%2BqHpZK3SidJH1dTXv%2Fzth3%2FLBaLC1zAd50Yc2Xrs1%2FcDSqVG%2BzMR2EowEQ0Htm%2Beh0fQiQRrQBZsUEDGRYFbpOjNjXU1z5ir8tjBeyDNRmFXIhmehBucQVCaJnnQyMM51OmpHRyLz0uFwOJ&X-Amz-Signature=868b4bfb675bf0afe7140eb264ac9eb4bcc4db2a176b972f218e9fab2587d27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
