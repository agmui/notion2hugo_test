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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLXP7MB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDgBtH4w73oSIr88olUgCu8nye4KvZKZ6LwbeUNu1OR3AiBQEYuma3OTmHCRcvdFFHm1j1vKz0Ngw7zY9b%2BJkrKJUCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMqPAxNmI3rtXd8bImKtwDqHJJg4mf8F%2BJgz8uN0B7A%2FhJBd8mRbi71v8fiQUcEPkeaTflH%2BqJ9DJIj0K%2B0t%2Fp2euO%2BKE9OdmGISkJWFJcSM0AIWaHpDcAafXUwPoDkaKNudaMFEfzODlW59cBjNWHzPjuABXGNT8Bg8%2Ftpa%2BFqoaBLCM4xcbeimTGZ7HVCJtUo4HMH1yqYkSm%2FaP9gQXz%2BphcwjEmmKf0PGl5lZsA9tcLUXaxURaiErnkVCUh%2FTevwUx8fS6YxG7xqTjVFPMPuTjMX2lBsq7MFJoRtqB1R06thS3LEuVF9Lf8tiAr%2FzcHsGnJUW31e7gCqsjgKxF3i1a1pJAKuoXvtQCF1q7CXlXMP1C6wQmCiC7R%2BCfP79eEKhEf4SkeS5icCAM78S44rZnYGoNVsZv0s8jNYgMPns4xJdTHc%2FP9GxrbQh77cXjvOb3u6%2Bs8NWQfVkmjwIkLQQdatFxaMiQD%2BAiDcMC9bkBldgz%2FE5Ion6sBF%2BTY32crUckFgNCXe3q8kgcxNVVwpCGTHs1X6dH8NO7HsjGHjx1BPA%2BLnXAVpOBctDnzZUXI9pGpVCQrU0q37fV5DqhcO3uRQ7K2ZgvOZ6KXnC7vQii9r%2BDjfTvC2lkU7GNmc7k7J5ys2r9%2BvucjZZ0ws7f8xAY6pgEPizym%2FbgkrooKSjxe4CQKdcPjl1b1BCmkH5oBVPMQdrcfWCIIiZnnY13rVX7Flt%2F1lG7kgmrK1Ya26gaa8FVIHSnahwwCFJslZeHRy5tLjmOMlpGgba0zuYdOsfQNVa%2BTCpxSuXhbyMF0zh4rkMTPL0fDIUU3Zp%2FTqYE3UPh3RZDIKEY1RNLZQ4xw1BeZB9Eqer6D%2BrkS5GvM2bVt7P3%2FjJkiGuj3&X-Amz-Signature=a9c7c04f708c4ad32cd6c7905361264434671238f892d52479ba8a0ff9ce37f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLXP7MB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDgBtH4w73oSIr88olUgCu8nye4KvZKZ6LwbeUNu1OR3AiBQEYuma3OTmHCRcvdFFHm1j1vKz0Ngw7zY9b%2BJkrKJUCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMqPAxNmI3rtXd8bImKtwDqHJJg4mf8F%2BJgz8uN0B7A%2FhJBd8mRbi71v8fiQUcEPkeaTflH%2BqJ9DJIj0K%2B0t%2Fp2euO%2BKE9OdmGISkJWFJcSM0AIWaHpDcAafXUwPoDkaKNudaMFEfzODlW59cBjNWHzPjuABXGNT8Bg8%2Ftpa%2BFqoaBLCM4xcbeimTGZ7HVCJtUo4HMH1yqYkSm%2FaP9gQXz%2BphcwjEmmKf0PGl5lZsA9tcLUXaxURaiErnkVCUh%2FTevwUx8fS6YxG7xqTjVFPMPuTjMX2lBsq7MFJoRtqB1R06thS3LEuVF9Lf8tiAr%2FzcHsGnJUW31e7gCqsjgKxF3i1a1pJAKuoXvtQCF1q7CXlXMP1C6wQmCiC7R%2BCfP79eEKhEf4SkeS5icCAM78S44rZnYGoNVsZv0s8jNYgMPns4xJdTHc%2FP9GxrbQh77cXjvOb3u6%2Bs8NWQfVkmjwIkLQQdatFxaMiQD%2BAiDcMC9bkBldgz%2FE5Ion6sBF%2BTY32crUckFgNCXe3q8kgcxNVVwpCGTHs1X6dH8NO7HsjGHjx1BPA%2BLnXAVpOBctDnzZUXI9pGpVCQrU0q37fV5DqhcO3uRQ7K2ZgvOZ6KXnC7vQii9r%2BDjfTvC2lkU7GNmc7k7J5ys2r9%2BvucjZZ0ws7f8xAY6pgEPizym%2FbgkrooKSjxe4CQKdcPjl1b1BCmkH5oBVPMQdrcfWCIIiZnnY13rVX7Flt%2F1lG7kgmrK1Ya26gaa8FVIHSnahwwCFJslZeHRy5tLjmOMlpGgba0zuYdOsfQNVa%2BTCpxSuXhbyMF0zh4rkMTPL0fDIUU3Zp%2FTqYE3UPh3RZDIKEY1RNLZQ4xw1BeZB9Eqer6D%2BrkS5GvM2bVt7P3%2FjJkiGuj3&X-Amz-Signature=1d3e20b9886fe1cb145b8aefc88add6d7e89283f1335193bd3991a81631ef0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
