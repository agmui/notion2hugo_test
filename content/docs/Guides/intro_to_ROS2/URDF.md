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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT7FZ63%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDsDnGMQ3zn79onzaJaSzpP5WsxGnCWc2VBxYcoGvswrgIgUBK1gvxTtE%2BvZx33aGn9J246tsUl%2BtB4i1Vb7j9SIN8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcxNXdf6irUcbIe%2BCrcAzcLl4V9gzMvcpwazC39fBjErQ8%2B3BIYGW1enqfcUDt9hzrhnkKT9n5pnUE6cBvxybtPPv0QOxsiDeB7eyQAZ%2FlNilXmVTkCEwwsvBLI3jclCDGDeFREJdBWqAasmzDEN6FlS1FTvHDpkrqYe4sBmm5ekFvSFKQbHOo0udwUmrLIkuZ%2BUsExZgN97OBIeTLcY5scTb3R3is%2BhYdEpsOdfnaj10k9aStO4IxycbOMQzyg8WsvcPmO43k7abodBcLUQoLreyBWMCQaoZihYMDuN%2FRFECEXTIgy%2BPUv%2B6QyT%2F5MX3jvBQefRSjfWrZZltMSXg6iN%2BMh8j0lLWBuzT8QjUTQC6850K1uP3tDqGwkOLBDYxg2NO5hXohg7czwmGXDV65BhNpycUAeF9JKl2St7KVw9bynaPfPQD05gi1vTVuF%2Fzg6001h%2FXRVShu0PzEWJUwOrs%2FHLAVF%2Fjh4oJCoQ0%2BWt84Zzf%2BgJ1TWjlpk4da7lLsYx0ILK9m5zTTdAuGhZ8qlzAk3YjuxBLGnewn4M5xaZdRT977UzBEjSCdARcWLdgs5eQL33bXcXUrovkkihGSiLDLh%2FOLRnTswOsfgsxrGCpYzgfWTWvcwqIVEiNvygnfUq3PL3TDvGPm2MOam2MQGOqUBCDg%2BxU4yXcec4EEG3hBQ96ivdvF2gRNTrC3SH9BYeux%2FqQQ7Bv4vBSfaWzBm7u%2FJROgp1ksyEOKJRTcTopaxJIab%2Fh9NA7uWJBk1%2Fbq%2Bat29y3KCrkPH1lvh3MXLOxDK14OhpoORqLhPY4SjtzfOSh578%2BW06D37gR4vTrwekAHCls%2FutXrNd1ucdaNmw0rcXyJRj1iUO4lDPbmi%2ByjdXfl7zJcp&X-Amz-Signature=f9abe9538d9b4eca0fcc6bc3384512653cd9bbaaeaf8b5569bd7d8beb0fa3243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT7FZ63%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDsDnGMQ3zn79onzaJaSzpP5WsxGnCWc2VBxYcoGvswrgIgUBK1gvxTtE%2BvZx33aGn9J246tsUl%2BtB4i1Vb7j9SIN8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcxNXdf6irUcbIe%2BCrcAzcLl4V9gzMvcpwazC39fBjErQ8%2B3BIYGW1enqfcUDt9hzrhnkKT9n5pnUE6cBvxybtPPv0QOxsiDeB7eyQAZ%2FlNilXmVTkCEwwsvBLI3jclCDGDeFREJdBWqAasmzDEN6FlS1FTvHDpkrqYe4sBmm5ekFvSFKQbHOo0udwUmrLIkuZ%2BUsExZgN97OBIeTLcY5scTb3R3is%2BhYdEpsOdfnaj10k9aStO4IxycbOMQzyg8WsvcPmO43k7abodBcLUQoLreyBWMCQaoZihYMDuN%2FRFECEXTIgy%2BPUv%2B6QyT%2F5MX3jvBQefRSjfWrZZltMSXg6iN%2BMh8j0lLWBuzT8QjUTQC6850K1uP3tDqGwkOLBDYxg2NO5hXohg7czwmGXDV65BhNpycUAeF9JKl2St7KVw9bynaPfPQD05gi1vTVuF%2Fzg6001h%2FXRVShu0PzEWJUwOrs%2FHLAVF%2Fjh4oJCoQ0%2BWt84Zzf%2BgJ1TWjlpk4da7lLsYx0ILK9m5zTTdAuGhZ8qlzAk3YjuxBLGnewn4M5xaZdRT977UzBEjSCdARcWLdgs5eQL33bXcXUrovkkihGSiLDLh%2FOLRnTswOsfgsxrGCpYzgfWTWvcwqIVEiNvygnfUq3PL3TDvGPm2MOam2MQGOqUBCDg%2BxU4yXcec4EEG3hBQ96ivdvF2gRNTrC3SH9BYeux%2FqQQ7Bv4vBSfaWzBm7u%2FJROgp1ksyEOKJRTcTopaxJIab%2Fh9NA7uWJBk1%2Fbq%2Bat29y3KCrkPH1lvh3MXLOxDK14OhpoORqLhPY4SjtzfOSh578%2BW06D37gR4vTrwekAHCls%2FutXrNd1ucdaNmw0rcXyJRj1iUO4lDPbmi%2ByjdXfl7zJcp&X-Amz-Signature=bdb75c5d83aa4e3e4b876c461a2fbfbcf507a6169974689eff8971a6813cf4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
