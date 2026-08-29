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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YMGWINB%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbe7YjO3Dc5jIHuDHugke%2F4LnylR8a24rukEv6XXK%2BIAIgOrWumFrAbxl6v6%2FW3xxCkJjtdpK5LVFkX%2FOjdV6MsX0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ5UybVHH5i%2BAkvBBSrcA8NU%2FbOcIBmXLoeu0ntJZdKJgi1Zc44Ao9LL48xvtxo3SvjAfOBFhlg7a%2BiKTEh7kWfniYmu5mtqTKdUOQ9oZrzrpnXdTSvn1wdYvLPFQmz04qQEreCmUTn%2BfyzYMcIH0T%2F64FPjglcekNCaijYJM%2BUg4hXmsvcBaZpxd2zeR9NSoAmADTjQFsrwFoWT2Gxa%2BhKbGESvKrBP0U16QfVOwgc9yG%2F8I%2BnbeX%2BotiDGj0Xj2rJDw3j0975M4CQDssuftUBObA%2F%2B7mTdlG%2F6%2B2Um37ES0k%2BJV4Q0cBN4AED7sWXgFToLr23EOPb1xbvs2ZwfKGzndRQGG8UG7YWdydBPoPn3AlhmWA3fUUbfstYqlD5EIShDWvq4sYDk8KKDPnIjs8UM65WjOcIXcuMt4beVdth7WPG7zv1KZ8yy31PGd0iBiTceN9LMl1tkCAz6N%2FCQ%2BTOnFWgzqNFRxHFF5FPZcCi4oX6bdHdVmbhgFNcalqScC9SHkQ9YtcvxkQkRvEnX1TZWFoSqdfkWVF1gCJ1mLDHcEdLAqgWCuLrMNB1CfeCnstThqa8F%2Bgn1CTmmkT0liWHCM%2BJw81Z3hvoXvFwzMJraHGu5Bq0iEn10eDN%2FF7kBHLF91Kglteot%2F2QrMKPQydQGOqUB8pjn9lEPH8T8IeygvPW%2F6zDNxx3%2BdCESlfTg3BlSSCslrnWlqfozIlkiXfNsVTZhMrvZZl3vT5O2EuDKuxhujkHpei7EE7w1H53qRGlRJ%2FoRwzgBtSf1JuLyRQQiyNvY9znViLj1nSc9XDuUKkS%2FCHr%2FUOs%2BH3Ina3sr3E6VyyDFAZowrt6nv%2FK%2FtpZtLZroMjLact1iqDFf9%2BPQ39YGVN60SmdH&X-Amz-Signature=958d398f0c6e9c16aeaf49bc1ca603db0a7477e72673da7f2f88da2aa4f767d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YMGWINB%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbe7YjO3Dc5jIHuDHugke%2F4LnylR8a24rukEv6XXK%2BIAIgOrWumFrAbxl6v6%2FW3xxCkJjtdpK5LVFkX%2FOjdV6MsX0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ5UybVHH5i%2BAkvBBSrcA8NU%2FbOcIBmXLoeu0ntJZdKJgi1Zc44Ao9LL48xvtxo3SvjAfOBFhlg7a%2BiKTEh7kWfniYmu5mtqTKdUOQ9oZrzrpnXdTSvn1wdYvLPFQmz04qQEreCmUTn%2BfyzYMcIH0T%2F64FPjglcekNCaijYJM%2BUg4hXmsvcBaZpxd2zeR9NSoAmADTjQFsrwFoWT2Gxa%2BhKbGESvKrBP0U16QfVOwgc9yG%2F8I%2BnbeX%2BotiDGj0Xj2rJDw3j0975M4CQDssuftUBObA%2F%2B7mTdlG%2F6%2B2Um37ES0k%2BJV4Q0cBN4AED7sWXgFToLr23EOPb1xbvs2ZwfKGzndRQGG8UG7YWdydBPoPn3AlhmWA3fUUbfstYqlD5EIShDWvq4sYDk8KKDPnIjs8UM65WjOcIXcuMt4beVdth7WPG7zv1KZ8yy31PGd0iBiTceN9LMl1tkCAz6N%2FCQ%2BTOnFWgzqNFRxHFF5FPZcCi4oX6bdHdVmbhgFNcalqScC9SHkQ9YtcvxkQkRvEnX1TZWFoSqdfkWVF1gCJ1mLDHcEdLAqgWCuLrMNB1CfeCnstThqa8F%2Bgn1CTmmkT0liWHCM%2BJw81Z3hvoXvFwzMJraHGu5Bq0iEn10eDN%2FF7kBHLF91Kglteot%2F2QrMKPQydQGOqUB8pjn9lEPH8T8IeygvPW%2F6zDNxx3%2BdCESlfTg3BlSSCslrnWlqfozIlkiXfNsVTZhMrvZZl3vT5O2EuDKuxhujkHpei7EE7w1H53qRGlRJ%2FoRwzgBtSf1JuLyRQQiyNvY9znViLj1nSc9XDuUKkS%2FCHr%2FUOs%2BH3Ina3sr3E6VyyDFAZowrt6nv%2FK%2FtpZtLZroMjLact1iqDFf9%2BPQ39YGVN60SmdH&X-Amz-Signature=f7f04510bdaf40a1f812f57df57e679b7f58a6ddca9628b9723332064a667e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
