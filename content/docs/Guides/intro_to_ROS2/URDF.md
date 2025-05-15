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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA2U5ZD3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCp7Pc7qBBaP5JI1amEIq3M683Ip2eX0pjq0YkBg0j6OgIhANTikgXDFcDRjZsOAHphnMq%2BsPAxXopl3zFHnH%2FQ6%2FMxKv8DCC8QABoMNjM3NDIzMTgzODA1Igye6pRp2l%2FhSobXZFMq3APhpCJu8rM8baPm%2FdkjxCJyf6jjleUgw%2FHB3GH3fT7VMXGxsO%2Fz8QyH5lUM0iL5dZ9TUiIm0kAxj8FRXLH0yUX3u2hcOT6%2FDTSmHZCShzP5MpebS7d5ExduqvAalGoRJ3PgiPNnJFIWYI4Ukl%2Br1mZy82pvM%2FvqEMjmMgjscqJaU70V%2BVtnmWJLaGoYpN2WErmGqJsu3Qy02MFev8hTP2udi%2BEj3lmL0KiGgJZrZpiVWXzVW%2FNsg6MQr1e6iUsdA8dgkSLDqiQvnui%2F%2FnidvR4K3MMM2tjRFN%2FkGZaXR%2B%2B85lOVBN9KYBnajJ2No2gpXbJmP6WGZiDxoTMhFN%2BE41ZkqnHhivlnbSREIfjqRhkYUWb8N59Thxvk7K%2Bzs2kn1c%2BM7vbVYOauz2f5g7RgRv1ZZegSuMMrUraExsUz3TRx0x54kPrlpc%2BIg3jNCI6zhNVumuAwaMunVsRjNyaaoqYDeaypBoiAcILuORQc0zdzn5QQ2nEuM1u4%2B%2BiXti7JG7WRAnSYE6kt%2FyMJMCt4lLDN1Ngbh8kT8DZhzQSCLf0%2FHfwEqcIzaEgtWpuazk5oqny20zGhEVtEQ6nDI7NbNPwtwnCCC9cCbBIkT90MLI6YXoLJwr8zQeseQ6xxVTC98JfBBjqkARakaDgmoS9YM6QNUP%2Fi%2BuBssV2ljqL3c5GeWQqwa3CAdwAD%2BHF9aT6kaBMF6oluDa0h1o8fvJ%2BEV9BQMc0lCKezAPC2VjXMGeqygeiv1m6PEGrB%2Fe3U%2FiZJ6a3yjyTMChOQc7RIeVMx%2B4G3lru1B0CdnyCa6Y98iAJvprKgK077FJ%2F7lUvLQN%2F5KyH4%2B0Xzaw%2B%2BQrS6EHdAC44spsVBJRetUh1z&X-Amz-Signature=65745db802c9f5fc7e2bee34a90e0b625321d173821c2bdada53ef6090a9ec1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA2U5ZD3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCp7Pc7qBBaP5JI1amEIq3M683Ip2eX0pjq0YkBg0j6OgIhANTikgXDFcDRjZsOAHphnMq%2BsPAxXopl3zFHnH%2FQ6%2FMxKv8DCC8QABoMNjM3NDIzMTgzODA1Igye6pRp2l%2FhSobXZFMq3APhpCJu8rM8baPm%2FdkjxCJyf6jjleUgw%2FHB3GH3fT7VMXGxsO%2Fz8QyH5lUM0iL5dZ9TUiIm0kAxj8FRXLH0yUX3u2hcOT6%2FDTSmHZCShzP5MpebS7d5ExduqvAalGoRJ3PgiPNnJFIWYI4Ukl%2Br1mZy82pvM%2FvqEMjmMgjscqJaU70V%2BVtnmWJLaGoYpN2WErmGqJsu3Qy02MFev8hTP2udi%2BEj3lmL0KiGgJZrZpiVWXzVW%2FNsg6MQr1e6iUsdA8dgkSLDqiQvnui%2F%2FnidvR4K3MMM2tjRFN%2FkGZaXR%2B%2B85lOVBN9KYBnajJ2No2gpXbJmP6WGZiDxoTMhFN%2BE41ZkqnHhivlnbSREIfjqRhkYUWb8N59Thxvk7K%2Bzs2kn1c%2BM7vbVYOauz2f5g7RgRv1ZZegSuMMrUraExsUz3TRx0x54kPrlpc%2BIg3jNCI6zhNVumuAwaMunVsRjNyaaoqYDeaypBoiAcILuORQc0zdzn5QQ2nEuM1u4%2B%2BiXti7JG7WRAnSYE6kt%2FyMJMCt4lLDN1Ngbh8kT8DZhzQSCLf0%2FHfwEqcIzaEgtWpuazk5oqny20zGhEVtEQ6nDI7NbNPwtwnCCC9cCbBIkT90MLI6YXoLJwr8zQeseQ6xxVTC98JfBBjqkARakaDgmoS9YM6QNUP%2Fi%2BuBssV2ljqL3c5GeWQqwa3CAdwAD%2BHF9aT6kaBMF6oluDa0h1o8fvJ%2BEV9BQMc0lCKezAPC2VjXMGeqygeiv1m6PEGrB%2Fe3U%2FiZJ6a3yjyTMChOQc7RIeVMx%2B4G3lru1B0CdnyCa6Y98iAJvprKgK077FJ%2F7lUvLQN%2F5KyH4%2B0Xzaw%2B%2BQrS6EHdAC44spsVBJRetUh1z&X-Amz-Signature=b4fa61da39408d81fc26200a7b50159e452850741b517b945e149aacfa2c4d63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
