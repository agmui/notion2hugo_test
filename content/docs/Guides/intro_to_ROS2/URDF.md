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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIFSVEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCukUaotNLNRbN0X8%2BFBN5%2BLneej4EM%2BBnQMTdKl%2BpvoQIgDJxpySmvOXt%2FckLwQJhp0NlDw5ckEjb%2Bfvmvbk18i0Yq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLQ%2F8BKSdRJheBeeoyrcAw6pHrhVf%2FDfuDfvcqppEiE%2Fj5%2F0STwX%2BEgrugJU4nXgtlZhep8jKTWth%2BmhHojRjaxM3I50kkxQShqtbyvv5NzF2f8F94jqmvTFH5S2EsvHENNHAgTy1p%2B9GNOOhO8Z3KPPQOeCkBRJBNhC8HBnWawjQ791LKZh82T5Da%2FZN%2BKFyoFk0EYBKbSqhR1ZFh6T3fjiEmUORWRK8k8VSjHAUtOUIGRviFpzrX6f7yUwLhYQegrU7ekQoFYsJHJObL5Inm%2BzJo1qnt8a0dKwch%2FysgKK0yCqmI%2BY73GWGjVBHRpuYvNei7RKGUysyREDOTOdoN1LaiiyfDjEBAX4JrBCO3KcKx5X3BiwU4zxB9YG%2BmHmQQzL9lBdETM%2BnksJclbClvwpPkeu5RSlJX0iiY%2Bfpw%2F9DYYda%2FftPKBPoHoDcyuJ6FXMYnQRYz9GYhhQ9JMxCq79mFK4Dw0dBchMfP9gR4BPuCEc6M4LFoTOlmre6tpvlcENxIE9M5VG2Q4fx3QAQXSk%2Bm7fHJbgpnwsFYq6bHiSVDXFhjY10t%2Bw%2F0vV9LemAqj7DFoAminOCNjBNZE87o%2BHgdrVga2TRCPFF1CxCQ8%2BWc25p8sHWb5MgRTgmltR4sos%2FDLjG4n7X3r2MMqAusQGOqUB%2BOHlE4yQUoVkrZJDSGEtQK3wfLQtEjrUq8a76zSsEibthjf48%2Fv0IgyvKiFlmhVFSID6fPa0eT1%2FdBYuLQW5Uxrkc8WfQJ00ckH3EUjakdFca0%2FW%2FRFNLavJvZTIf8XJq5bCinm7xnWXNd%2FFR%2Fd0LdKkrOEdo8XmNojiROFfkXdHZ4c011gw7zlIoikuY6boN5XkZwRmIoqo%2F%2BzMDCs1flPwSSjz&X-Amz-Signature=551606dd284acf1686353ab9803c3ac56213ed7254062da3e65489d5a7da54d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIFSVEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCukUaotNLNRbN0X8%2BFBN5%2BLneej4EM%2BBnQMTdKl%2BpvoQIgDJxpySmvOXt%2FckLwQJhp0NlDw5ckEjb%2Bfvmvbk18i0Yq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLQ%2F8BKSdRJheBeeoyrcAw6pHrhVf%2FDfuDfvcqppEiE%2Fj5%2F0STwX%2BEgrugJU4nXgtlZhep8jKTWth%2BmhHojRjaxM3I50kkxQShqtbyvv5NzF2f8F94jqmvTFH5S2EsvHENNHAgTy1p%2B9GNOOhO8Z3KPPQOeCkBRJBNhC8HBnWawjQ791LKZh82T5Da%2FZN%2BKFyoFk0EYBKbSqhR1ZFh6T3fjiEmUORWRK8k8VSjHAUtOUIGRviFpzrX6f7yUwLhYQegrU7ekQoFYsJHJObL5Inm%2BzJo1qnt8a0dKwch%2FysgKK0yCqmI%2BY73GWGjVBHRpuYvNei7RKGUysyREDOTOdoN1LaiiyfDjEBAX4JrBCO3KcKx5X3BiwU4zxB9YG%2BmHmQQzL9lBdETM%2BnksJclbClvwpPkeu5RSlJX0iiY%2Bfpw%2F9DYYda%2FftPKBPoHoDcyuJ6FXMYnQRYz9GYhhQ9JMxCq79mFK4Dw0dBchMfP9gR4BPuCEc6M4LFoTOlmre6tpvlcENxIE9M5VG2Q4fx3QAQXSk%2Bm7fHJbgpnwsFYq6bHiSVDXFhjY10t%2Bw%2F0vV9LemAqj7DFoAminOCNjBNZE87o%2BHgdrVga2TRCPFF1CxCQ8%2BWc25p8sHWb5MgRTgmltR4sos%2FDLjG4n7X3r2MMqAusQGOqUB%2BOHlE4yQUoVkrZJDSGEtQK3wfLQtEjrUq8a76zSsEibthjf48%2Fv0IgyvKiFlmhVFSID6fPa0eT1%2FdBYuLQW5Uxrkc8WfQJ00ckH3EUjakdFca0%2FW%2FRFNLavJvZTIf8XJq5bCinm7xnWXNd%2FFR%2Fd0LdKkrOEdo8XmNojiROFfkXdHZ4c011gw7zlIoikuY6boN5XkZwRmIoqo%2F%2BzMDCs1flPwSSjz&X-Amz-Signature=8b70072fa003c801d681f8538d66fde41cfca41ef1c9b3fc9ce635185c5512a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
