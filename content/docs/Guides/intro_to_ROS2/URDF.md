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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PTABL%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX5%2BmP5PH8AcEczogN%2Bh3xJuSPOnilbCOmm1OVYLy8XAiBATbJ8AQU08ajwiR79qfBjnMPPv9wIbjhlFm%2F47cWnIyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcNTsMMRjeyMvVOZyKtwDUKaEbJTLIN%2FvCjYa32LIgKFnh%2FQCq9J2VwlxwNxT0x08KGU%2FEp73NW63uH7QhH7fpggIl65UNcU%2BhJdgLrMmkTPUqNteSDeME73n%2BkmZLjsat0F52XKdDhQ%2FSxkIyUPEFcTPhorjA0QBTWB3j0eUZYyykcV4tVKQ8FRsOakHo2bXXZkaxnBrVy%2Fkr8kg9uEppZetCzH8CH%2BH3qqa6z5fk4XJdTljo3A9nX9kDiIv9iaQwMsyPeqWH7T4a3X7EFaaETJ6PpcKoux33nEtZqkeRx8sOTjWVadS2ZmZD%2BB%2B8cZ7jru%2BNUhqKmGTwyX3XPblJ1brxHClQgrIKr48VSjQvdv6owE%2BtqR46TzMRBFeLxtQkbtyPt4j%2BCF%2B9xlplnhXoYQ9vNwJ2%2FYECP65b78ZxwG6wwWl%2B1W8Gq1W99DaPCWDsthgQdNl0wcaqQwI6fiq6HCCIQcuviEKDJcLuF6FnrgV4MAcQ4Li2KR7INx6GM8bSO%2FtYVfeevfuQR9Huit%2BCn%2B6zTKWNfTf9EZ3T8StDzGUjc7eaCWznniLpnvH6lEpSrxvVDzWQJSKuKZRooKwrJPdhCnJVdYDkJzF58K88L%2BsLbUHRizMxNeTlc1P%2FI8R4Z%2F5duIhTPaE7k8wuvH5ywY6pgHKhaJGbA4i0%2F%2FOmBMxK%2B6fTtFcO1aU3P%2BT1wWY77wsdBdS2rYS%2Btg2JhXjzA8QHdFzniMeYL4LecicJZIP7U5fgr3UZdQ3F6okHxpduFCvYmQfySSNrB5uUgaG%2B3M6Sibbe9adUCy7a2OeA8Qvx6zKYw5zGl%2Bcubgzd3Hoe4KPC5t9DfqHsMu4qcV0u0OpWzjvugakdbQCsx66B4ilYi%2B3tgQoo64E&X-Amz-Signature=a6aa68239d79c80c7f5b0122184e2e059dcc677b0b62f127bc230ee52e0cee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PTABL%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX5%2BmP5PH8AcEczogN%2Bh3xJuSPOnilbCOmm1OVYLy8XAiBATbJ8AQU08ajwiR79qfBjnMPPv9wIbjhlFm%2F47cWnIyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcNTsMMRjeyMvVOZyKtwDUKaEbJTLIN%2FvCjYa32LIgKFnh%2FQCq9J2VwlxwNxT0x08KGU%2FEp73NW63uH7QhH7fpggIl65UNcU%2BhJdgLrMmkTPUqNteSDeME73n%2BkmZLjsat0F52XKdDhQ%2FSxkIyUPEFcTPhorjA0QBTWB3j0eUZYyykcV4tVKQ8FRsOakHo2bXXZkaxnBrVy%2Fkr8kg9uEppZetCzH8CH%2BH3qqa6z5fk4XJdTljo3A9nX9kDiIv9iaQwMsyPeqWH7T4a3X7EFaaETJ6PpcKoux33nEtZqkeRx8sOTjWVadS2ZmZD%2BB%2B8cZ7jru%2BNUhqKmGTwyX3XPblJ1brxHClQgrIKr48VSjQvdv6owE%2BtqR46TzMRBFeLxtQkbtyPt4j%2BCF%2B9xlplnhXoYQ9vNwJ2%2FYECP65b78ZxwG6wwWl%2B1W8Gq1W99DaPCWDsthgQdNl0wcaqQwI6fiq6HCCIQcuviEKDJcLuF6FnrgV4MAcQ4Li2KR7INx6GM8bSO%2FtYVfeevfuQR9Huit%2BCn%2B6zTKWNfTf9EZ3T8StDzGUjc7eaCWznniLpnvH6lEpSrxvVDzWQJSKuKZRooKwrJPdhCnJVdYDkJzF58K88L%2BsLbUHRizMxNeTlc1P%2FI8R4Z%2F5duIhTPaE7k8wuvH5ywY6pgHKhaJGbA4i0%2F%2FOmBMxK%2B6fTtFcO1aU3P%2BT1wWY77wsdBdS2rYS%2Btg2JhXjzA8QHdFzniMeYL4LecicJZIP7U5fgr3UZdQ3F6okHxpduFCvYmQfySSNrB5uUgaG%2B3M6Sibbe9adUCy7a2OeA8Qvx6zKYw5zGl%2Bcubgzd3Hoe4KPC5t9DfqHsMu4qcV0u0OpWzjvugakdbQCsx66B4ilYi%2B3tgQoo64E&X-Amz-Signature=48738b47320efe2be4c5ebc2119352fb3c9ec07804c12256b03f524ecf91579d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
