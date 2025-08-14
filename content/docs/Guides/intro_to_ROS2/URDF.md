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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS2WIEI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC839n7bYtIqKInCSClG4zIggKkv8rJ6hu6TsDlC40QAAIgF5fJ9Ce4ENb6t3%2FLJZYGie1D1mPl9wMd2IpnmyQU8Ikq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOB9chQuD9Ow%2B7zs0SrcA7AsM2RGJL6nhRwSPCYLlplj06irV4PHLyqaiKJCcaD2UMofn6CplibQ7dR18GW0k0hZkvLEB8wmpnAObFb2%2F7g%2FDxyekGeB7kZnjI4g2Fahbk5kN4cIZ6JzxEDDN1qJgQJL%2FdVHaD3FSOV0eKcxK%2FaJkzzYj95O%2BoAhx5iTwXQRS8RquJorl2lmtgfVz8ee%2B3vxV1Jm1mpdOjAAVEASBaZoBOZLz9f6OMAaL9vMtWYI0uDs1xjhBjeH%2F%2FlRZOklHles6HI8I%2BeqcajPUwX45Wm1Levask4f5M07w6%2FMKRW3jHXU8HIu8tusTdaRouem2TNKit3jmE3HtHOGXDLxRJ4ieNuuqunLxJsnuSlDYr4%2F5XKLLNZUtb%2BglxLuOBGgq4R2HYtryDtvYuHEOrN2UJ4i6SocMS9JUiZAfkOr%2BHUqVFAasl1%2FP1vaWRh9LnSVTw8bo0zVwgwWpj7Pwm%2B5mtIH3UjAZFsg2xy0QsH2C0HUIdU98S%2FtnOv7f31lBYy34AqKglCBPQSipF8Gzx61v%2FhxsTn2G3hetzxA%2Bpsec9S86WBgRjYaVRGyJiDCNn0ZR0oHDgHT5ehGL6DoE7KvEhC6OwefxgspbvR3mwNEiAwW1yT%2BUJ%2BwNHlP3v1bMKe69cQGOqUBqOGpWmq96W6wR3Tbmj0S%2BHCCtuaJUkk21CbQ0dvIvD5om%2Bp8H8p6TiRBocSwCp4FRBbVX%2FT3Mhm3vtP%2Bdp7Irj%2BlZ5YIc%2Bn%2FX9eWh0GoxlUWCkI3gKK0d%2BFWdOrnWdgx%2F5Txa8g%2FNODPIXT66LPAl09IJObiqgcetgUnNn2pwq%2B6vAKuo8dL%2FdgCQx0xjIFekB4WAVsZaw17b94VdQSTc%2FOrOYw1&X-Amz-Signature=0f67b14477a2d17c42e6fb1ef6f7ffa07e0706967d3012492673fde1ec6cd5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS2WIEI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC839n7bYtIqKInCSClG4zIggKkv8rJ6hu6TsDlC40QAAIgF5fJ9Ce4ENb6t3%2FLJZYGie1D1mPl9wMd2IpnmyQU8Ikq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOB9chQuD9Ow%2B7zs0SrcA7AsM2RGJL6nhRwSPCYLlplj06irV4PHLyqaiKJCcaD2UMofn6CplibQ7dR18GW0k0hZkvLEB8wmpnAObFb2%2F7g%2FDxyekGeB7kZnjI4g2Fahbk5kN4cIZ6JzxEDDN1qJgQJL%2FdVHaD3FSOV0eKcxK%2FaJkzzYj95O%2BoAhx5iTwXQRS8RquJorl2lmtgfVz8ee%2B3vxV1Jm1mpdOjAAVEASBaZoBOZLz9f6OMAaL9vMtWYI0uDs1xjhBjeH%2F%2FlRZOklHles6HI8I%2BeqcajPUwX45Wm1Levask4f5M07w6%2FMKRW3jHXU8HIu8tusTdaRouem2TNKit3jmE3HtHOGXDLxRJ4ieNuuqunLxJsnuSlDYr4%2F5XKLLNZUtb%2BglxLuOBGgq4R2HYtryDtvYuHEOrN2UJ4i6SocMS9JUiZAfkOr%2BHUqVFAasl1%2FP1vaWRh9LnSVTw8bo0zVwgwWpj7Pwm%2B5mtIH3UjAZFsg2xy0QsH2C0HUIdU98S%2FtnOv7f31lBYy34AqKglCBPQSipF8Gzx61v%2FhxsTn2G3hetzxA%2Bpsec9S86WBgRjYaVRGyJiDCNn0ZR0oHDgHT5ehGL6DoE7KvEhC6OwefxgspbvR3mwNEiAwW1yT%2BUJ%2BwNHlP3v1bMKe69cQGOqUBqOGpWmq96W6wR3Tbmj0S%2BHCCtuaJUkk21CbQ0dvIvD5om%2Bp8H8p6TiRBocSwCp4FRBbVX%2FT3Mhm3vtP%2Bdp7Irj%2BlZ5YIc%2Bn%2FX9eWh0GoxlUWCkI3gKK0d%2BFWdOrnWdgx%2F5Txa8g%2FNODPIXT66LPAl09IJObiqgcetgUnNn2pwq%2B6vAKuo8dL%2FdgCQx0xjIFekB4WAVsZaw17b94VdQSTc%2FOrOYw1&X-Amz-Signature=039d19d18b76ba01cb70f0a030669d1954c30fccb5c16c47ec247caf5d56c468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
