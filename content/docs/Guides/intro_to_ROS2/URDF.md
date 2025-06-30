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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PWD3YY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbU8gPT3ekZSyg%2BL7MeaJY0FidMKrmkk0kcokOt7OMAIgFGUndDC5hDwBdIdZP3Oqc2%2FzklFU6416J59WE%2FCo5WEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIVHudtNoBj%2F6lhbyrcAyqrTAsDYhGuaJMPe9BX9VwM3O4Gs5IKZ%2BJNOqKHtpuAISWPTFz5sFQbMs705nNd%2F%2BVlYLn%2FJQe3racdgKSrM3C2bIEZu872VRcnhi%2Fhc91BEcPdPYuBzb9P8uBK0ft2H9qSzGUNPV%2BYXpu6UmbxXo9Ek2OGS%2BjIJbo7W4MI%2Bs7nplkuG2wHQtZ%2FvREBWyWi9FGRJDkamUtjNLFP%2FiUshEKTVaTZvP8OIDDiFNnxDzhOLAEtAOF19RxeAG3fnz%2B5SjNtSUviBxsGur84hLAHD2MKgA5JC4pZst0ehho5A%2FVQ508nPjPRiY9zS0APBTO1eDXI2P5jz%2FujFHk3sXvwBEKEeONUw9xN4cgYN8X%2BDLSEastRRk00LZq7WL9AOweUYhYu7SNmbtXkzfGiHD3TJcBOGvhndTQjI2CY%2FAW55mhjcfVq8BMQpi3eFcXZ4TKBbBFdaspSO%2FzonQrrMsTgdd05lHMfa5w4SwkRfWQcpUbgog4tijfUqrc9nbNR7WIrCtQ33B8L6PI6ANEDT6WOSHZHmA3%2BuKKoBzbRQ3AQoV%2BI5hbvv7zpTRskEPrivSpHrxSz5306b8%2F%2BW8d8kVeuZTSEk6NfZlKd1vtBjOQBOtvlXjWJjDB7uWJHRmAYMMbrisMGOqUB1guqSXKYvJfNC1VCMam7AX6PSY30V%2BBYITZdHknfjwN5Ertpj49r1S3jZKYmSZWz1S%2Fx5CoCj8jSysqlOeOXFO4aE0XyXWpyHAXURQhBRlGF4M6Gg7JjzHrjh1kv28P7b7UAomnJjL4ccWxyc2w5GNERQ2AkVhHTUiRrAMAa7P1xamgz10JJhrh%2BNRfrR4omav3OsayvPNtv2keCexyRlSUxfoE8&X-Amz-Signature=a179075b99f1153653219709c39799e4c77bb51bb895a073532a1c47d1b69d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PWD3YY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbU8gPT3ekZSyg%2BL7MeaJY0FidMKrmkk0kcokOt7OMAIgFGUndDC5hDwBdIdZP3Oqc2%2FzklFU6416J59WE%2FCo5WEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIVHudtNoBj%2F6lhbyrcAyqrTAsDYhGuaJMPe9BX9VwM3O4Gs5IKZ%2BJNOqKHtpuAISWPTFz5sFQbMs705nNd%2F%2BVlYLn%2FJQe3racdgKSrM3C2bIEZu872VRcnhi%2Fhc91BEcPdPYuBzb9P8uBK0ft2H9qSzGUNPV%2BYXpu6UmbxXo9Ek2OGS%2BjIJbo7W4MI%2Bs7nplkuG2wHQtZ%2FvREBWyWi9FGRJDkamUtjNLFP%2FiUshEKTVaTZvP8OIDDiFNnxDzhOLAEtAOF19RxeAG3fnz%2B5SjNtSUviBxsGur84hLAHD2MKgA5JC4pZst0ehho5A%2FVQ508nPjPRiY9zS0APBTO1eDXI2P5jz%2FujFHk3sXvwBEKEeONUw9xN4cgYN8X%2BDLSEastRRk00LZq7WL9AOweUYhYu7SNmbtXkzfGiHD3TJcBOGvhndTQjI2CY%2FAW55mhjcfVq8BMQpi3eFcXZ4TKBbBFdaspSO%2FzonQrrMsTgdd05lHMfa5w4SwkRfWQcpUbgog4tijfUqrc9nbNR7WIrCtQ33B8L6PI6ANEDT6WOSHZHmA3%2BuKKoBzbRQ3AQoV%2BI5hbvv7zpTRskEPrivSpHrxSz5306b8%2F%2BW8d8kVeuZTSEk6NfZlKd1vtBjOQBOtvlXjWJjDB7uWJHRmAYMMbrisMGOqUB1guqSXKYvJfNC1VCMam7AX6PSY30V%2BBYITZdHknfjwN5Ertpj49r1S3jZKYmSZWz1S%2Fx5CoCj8jSysqlOeOXFO4aE0XyXWpyHAXURQhBRlGF4M6Gg7JjzHrjh1kv28P7b7UAomnJjL4ccWxyc2w5GNERQ2AkVhHTUiRrAMAa7P1xamgz10JJhrh%2BNRfrR4omav3OsayvPNtv2keCexyRlSUxfoE8&X-Amz-Signature=4b3ca1c58d9599fe38149b9b67f9d6d3a6f0058daf4b1645c0fcb213c4f82d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
