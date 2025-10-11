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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PKIPTJL%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDzBmdI4GAAnGY%2FN7SeKgKHgAPXClyGm%2FM3Mvbq%2FJud9AIgRXkLithyekM3jZplPdkD1brdtI1zJJpc9uIe63cllWgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi2855tlZtnrLEFMyrcAwv56VN5wb6uARbt0TRiHV%2BrVJMcDGSe%2FEVwNoaKGDA8MW6XiekJAanlsKuyxphaHSl7VSQg7%2BIWSiO2cbqshrD3UpcYeRThuO%2BNRQXZUxkQVOu9pvt7qbPoITm5Gz2YyZ4RXDMdZbUWTXd2KfSnCoXYYVVY2%2BiQyLt9cN%2B4lbr2obf9sGqb9fE9gLDHTnWXPv81kqw0irmxI370gh627fdY1kr2MXMuf1rfoC%2BoDrMtO63BPLGVSwr4XPhpJd%2BFjhRKztmnJ24MqBUcLd7CxG%2FjF2WgEh7Fk1motLayHqXL0Q2Qd6G5KT7ZjUO%2F01S154y2%2FnPVWRHTZ7U2fWWEFK%2F5jxGXGgDbfc1AXgfay0KeDDYPsOj%2FJWazJmFPikoSu6NpVyYhEmRLpdEOTH6uWVfh0GSkMbIdhCp3Gdbhktghc3C6RvDpTnMvORAF83wmz5IkOzM2lVucEt9XVa%2F%2FimsS1TQZefMrIm7UhHquK2nq3IJq8xXX4lM2cutfTWGe2l6aS26v1ijdeR65UzQG%2B5umumlUBPMQdpzqB4HEdr3zztwHb%2B7UYFhb%2BdGTAFPTksV1EOgGIHwQGJS7gwazkKxGPHypl9%2FllDCa5jMpfRb2aXEyzjhdusLz7apiMNrXpscGOqUBE8LXRy5GlRrv8mTOWeK5Fwb%2BhU5USGL0WUc2LiUVr%2BtojSNehO%2FcAnn9CRtvWUr7leBMzbC7XqiXH3V%2FBDuAg%2Fn174NdwTVuK45PfNy0oq6GNW%2FsTj%2Fr6yoVuQgDHZfkrpZeGuNOZBsy0C4LtinWhFiGokpvZZQ37dlJiCptYADHAcvhLlfYL1zpQH5BdU4CZHU5rR3LZRQj8RxBRK6Jx1MYhyCy&X-Amz-Signature=235cd01e2296459501a0a8c34772aa0c03424c8251ff74943627fad91ddb96a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PKIPTJL%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDzBmdI4GAAnGY%2FN7SeKgKHgAPXClyGm%2FM3Mvbq%2FJud9AIgRXkLithyekM3jZplPdkD1brdtI1zJJpc9uIe63cllWgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi2855tlZtnrLEFMyrcAwv56VN5wb6uARbt0TRiHV%2BrVJMcDGSe%2FEVwNoaKGDA8MW6XiekJAanlsKuyxphaHSl7VSQg7%2BIWSiO2cbqshrD3UpcYeRThuO%2BNRQXZUxkQVOu9pvt7qbPoITm5Gz2YyZ4RXDMdZbUWTXd2KfSnCoXYYVVY2%2BiQyLt9cN%2B4lbr2obf9sGqb9fE9gLDHTnWXPv81kqw0irmxI370gh627fdY1kr2MXMuf1rfoC%2BoDrMtO63BPLGVSwr4XPhpJd%2BFjhRKztmnJ24MqBUcLd7CxG%2FjF2WgEh7Fk1motLayHqXL0Q2Qd6G5KT7ZjUO%2F01S154y2%2FnPVWRHTZ7U2fWWEFK%2F5jxGXGgDbfc1AXgfay0KeDDYPsOj%2FJWazJmFPikoSu6NpVyYhEmRLpdEOTH6uWVfh0GSkMbIdhCp3Gdbhktghc3C6RvDpTnMvORAF83wmz5IkOzM2lVucEt9XVa%2F%2FimsS1TQZefMrIm7UhHquK2nq3IJq8xXX4lM2cutfTWGe2l6aS26v1ijdeR65UzQG%2B5umumlUBPMQdpzqB4HEdr3zztwHb%2B7UYFhb%2BdGTAFPTksV1EOgGIHwQGJS7gwazkKxGPHypl9%2FllDCa5jMpfRb2aXEyzjhdusLz7apiMNrXpscGOqUBE8LXRy5GlRrv8mTOWeK5Fwb%2BhU5USGL0WUc2LiUVr%2BtojSNehO%2FcAnn9CRtvWUr7leBMzbC7XqiXH3V%2FBDuAg%2Fn174NdwTVuK45PfNy0oq6GNW%2FsTj%2Fr6yoVuQgDHZfkrpZeGuNOZBsy0C4LtinWhFiGokpvZZQ37dlJiCptYADHAcvhLlfYL1zpQH5BdU4CZHU5rR3LZRQj8RxBRK6Jx1MYhyCy&X-Amz-Signature=73d8ff1d8b953bd776f8ff27331d853fd454f20e4eb9d8fafa177e992ec4de77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
