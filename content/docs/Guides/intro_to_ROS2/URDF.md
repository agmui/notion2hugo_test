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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPPKUQT%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAQs9a2pqOCU3MOmUZKUD16Z4wP1mB1Vila2byHdglAIhAKl4XIEkLU%2BYNaLwhTP5KDWzw1bTybM1wXvigAu8kQujKv8DCCEQABoMNjM3NDIzMTgzODA1Igw2t6djJOJQCyDRslYq3ANJ9zwC7N0YQEzFLzhpuUgUORS4oc1IMhZppeDAb57HUWkjpNBvK%2F0%2FaovOWfsZSTWD4J1hnY4%2Fhss9dd5Yle7ulvr%2B7o%2BSXvug%2BFd7nTMyTq4GJ9BbJjCacRGKjK1iUHo1CPxKUuR8K%2Fn35xMGLm%2B4OIPPrhG1cYj4T%2Bm380FuoG1qiQuj9bwVAn41jBj91UD%2F6agHWs3k6XO4NBD%2FpBzsiaMVa5BtEeyfyBHZG5YKXBBURC%2BxCdgWlixVxpa1rPsSG%2B5rnjQkoJY2lLQw%2FoiaH1IPRd3IXVGjVukGPPq7C1IJcVvlCls6SfE06hm8xiqp38jRxreVxehQlPdCpSQJOdY71rbbeE0rzstxlh6nWdIA8GD97IhfVWOAVhWz5y17RkeK2jSJbOrX1nXi6Je16fXg5l8NhZoETH2EKe42uwqhUgW2NVOoNafa2i4goMceRHL%2FPkH5vukDu5aTFMudjRFYgYj3FCfzQ9hcmR9fGFLPuvHdnHIhCsQ8l4iWH%2BEiJFAXRMvzKVSDy0z6ws2GJsBX5S3czQfhyKuPQwbqDxqUdiqn0ZK%2BWGTPtiCHNXYjzIpEG%2B5sSmZyQcfON2QfB86L2usxhh3Z1nbAYfRqybhuOiUJ8xMddH3GUTDsjqTFBjqkAVdnv6bguChx4YzMXV3zSxUDaa8kFD%2BvKn80eYKvAXF6Aflat9vTOcotxspsqnqslyX6xMQRMa7NiDbPP2j4zEZxCSAwnGHmDvkQbbBvcvNpFvDXyk%2FZpzCTMBL7%2BC2Zm4S8414TQH%2Foor6iLBixatunrKi18irdsie53hM0Np2Zzlw3asEykUM1%2BwBC9NkxFLf%2Bo%2B8IfkKnebajCn6uRIBYRQXx&X-Amz-Signature=c4a410cbefe56d222a854b32fdcef58c54dd42370c1b506366ddd0cd90b1eb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPPKUQT%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgAQs9a2pqOCU3MOmUZKUD16Z4wP1mB1Vila2byHdglAIhAKl4XIEkLU%2BYNaLwhTP5KDWzw1bTybM1wXvigAu8kQujKv8DCCEQABoMNjM3NDIzMTgzODA1Igw2t6djJOJQCyDRslYq3ANJ9zwC7N0YQEzFLzhpuUgUORS4oc1IMhZppeDAb57HUWkjpNBvK%2F0%2FaovOWfsZSTWD4J1hnY4%2Fhss9dd5Yle7ulvr%2B7o%2BSXvug%2BFd7nTMyTq4GJ9BbJjCacRGKjK1iUHo1CPxKUuR8K%2Fn35xMGLm%2B4OIPPrhG1cYj4T%2Bm380FuoG1qiQuj9bwVAn41jBj91UD%2F6agHWs3k6XO4NBD%2FpBzsiaMVa5BtEeyfyBHZG5YKXBBURC%2BxCdgWlixVxpa1rPsSG%2B5rnjQkoJY2lLQw%2FoiaH1IPRd3IXVGjVukGPPq7C1IJcVvlCls6SfE06hm8xiqp38jRxreVxehQlPdCpSQJOdY71rbbeE0rzstxlh6nWdIA8GD97IhfVWOAVhWz5y17RkeK2jSJbOrX1nXi6Je16fXg5l8NhZoETH2EKe42uwqhUgW2NVOoNafa2i4goMceRHL%2FPkH5vukDu5aTFMudjRFYgYj3FCfzQ9hcmR9fGFLPuvHdnHIhCsQ8l4iWH%2BEiJFAXRMvzKVSDy0z6ws2GJsBX5S3czQfhyKuPQwbqDxqUdiqn0ZK%2BWGTPtiCHNXYjzIpEG%2B5sSmZyQcfON2QfB86L2usxhh3Z1nbAYfRqybhuOiUJ8xMddH3GUTDsjqTFBjqkAVdnv6bguChx4YzMXV3zSxUDaa8kFD%2BvKn80eYKvAXF6Aflat9vTOcotxspsqnqslyX6xMQRMa7NiDbPP2j4zEZxCSAwnGHmDvkQbbBvcvNpFvDXyk%2FZpzCTMBL7%2BC2Zm4S8414TQH%2Foor6iLBixatunrKi18irdsie53hM0Np2Zzlw3asEykUM1%2BwBC9NkxFLf%2Bo%2B8IfkKnebajCn6uRIBYRQXx&X-Amz-Signature=0cee2565f9e62c52146aff880088af06d7c35a9ac3734f1bb29125fb0d01aa75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
