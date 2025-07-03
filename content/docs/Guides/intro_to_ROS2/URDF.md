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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFFAIZF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDNDNyHgG5BsCGQRKgRJO%2Bw%2Fm%2Fw986WZWV5TcP4VK9C1AIhAPhfJPFwe34gdQVWz0JxMOUWSKfBgZj%2FoImPFxD2gViHKv8DCBIQABoMNjM3NDIzMTgzODA1Igzh3P9cntCHqzwPGIQq3AMdMbod3ec3A8Wrq0ucJf7cZvq5%2B1FduOsmJ7LWdEPXyHCf%2BA7EYbvR1kpAVKZ79HyFp4%2BhCq2ZyX7pPeCeCddx2eCkzxjSFAQQWWBKCGPvXg1u%2BoqsYroDoRg6SA2YI2Nw6AJ2GYUid2zpapj4S%2Fhft0fMIz6lrJ3RWGZeRA6vj38wDMTg2h6csUwi%2B9ExKUaU68HT24BUTteZJEM3HtysZCuA3SwZgaSwogVLStQQKg06q3U121dnHvu4J46OPHWErW2dy0kaIYX%2B5smtiPVWG09hEONtdmaKLkDaldxDngst9ZV5%2B0oeWmhavCw9GJuh3E7GjWxHZ%2FOab8Vdij8j49vpP%2F40rADo3otKSzYMWBzYmuGeONLmCQlAd5zVDjlQduEaBsD1qbywcp9zW7P%2FvKtN6ZJo6FDiz%2Fc0bSjJNr%2FhPa%2Bqcslw7FUrNfulwGNYb4vz8WXKKgYAZNjPQb0IINo0TxQS6z8HvmBd%2BDxWshVyzeRWouEBYBIybgBv8XXofxnmIndAX9Ok0eAJxe0kvKw2ngvJ3mPDJk6fBHa31WQson6UWg06qbY9CUOBpd3S44O3gOp%2FINXWqCgkhA0iFQ7XNKOm27EkGc3iAixtUXynLohVfXGwztYPOzC9iJnDBjqkAd3Bj6L6rSHY6bIIXy7axVw5H9SxS7BlFoLjz61lNW4tHhfjsjVMZDS38RUxLgLx9PYOmR8GCv9pqOfzXZBiVnGJ8SBcffZr6kFRZ3kqU20hrHWK8fkouv8bYBZfGAFSuqn0%2FpqPSJUNRkqgbfyXznroicAzxJMpJO%2BwpInFeVUq1uvsGkcaSAjAosH6qKas3FGWWr%2Bn%2FIFMxvP3ZMb2JoYGGJOK&X-Amz-Signature=c2434eda2face10d504d1f4aac29f53a61a690945896e6dac9fe24d89dfc91be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFFAIZF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDNDNyHgG5BsCGQRKgRJO%2Bw%2Fm%2Fw986WZWV5TcP4VK9C1AIhAPhfJPFwe34gdQVWz0JxMOUWSKfBgZj%2FoImPFxD2gViHKv8DCBIQABoMNjM3NDIzMTgzODA1Igzh3P9cntCHqzwPGIQq3AMdMbod3ec3A8Wrq0ucJf7cZvq5%2B1FduOsmJ7LWdEPXyHCf%2BA7EYbvR1kpAVKZ79HyFp4%2BhCq2ZyX7pPeCeCddx2eCkzxjSFAQQWWBKCGPvXg1u%2BoqsYroDoRg6SA2YI2Nw6AJ2GYUid2zpapj4S%2Fhft0fMIz6lrJ3RWGZeRA6vj38wDMTg2h6csUwi%2B9ExKUaU68HT24BUTteZJEM3HtysZCuA3SwZgaSwogVLStQQKg06q3U121dnHvu4J46OPHWErW2dy0kaIYX%2B5smtiPVWG09hEONtdmaKLkDaldxDngst9ZV5%2B0oeWmhavCw9GJuh3E7GjWxHZ%2FOab8Vdij8j49vpP%2F40rADo3otKSzYMWBzYmuGeONLmCQlAd5zVDjlQduEaBsD1qbywcp9zW7P%2FvKtN6ZJo6FDiz%2Fc0bSjJNr%2FhPa%2Bqcslw7FUrNfulwGNYb4vz8WXKKgYAZNjPQb0IINo0TxQS6z8HvmBd%2BDxWshVyzeRWouEBYBIybgBv8XXofxnmIndAX9Ok0eAJxe0kvKw2ngvJ3mPDJk6fBHa31WQson6UWg06qbY9CUOBpd3S44O3gOp%2FINXWqCgkhA0iFQ7XNKOm27EkGc3iAixtUXynLohVfXGwztYPOzC9iJnDBjqkAd3Bj6L6rSHY6bIIXy7axVw5H9SxS7BlFoLjz61lNW4tHhfjsjVMZDS38RUxLgLx9PYOmR8GCv9pqOfzXZBiVnGJ8SBcffZr6kFRZ3kqU20hrHWK8fkouv8bYBZfGAFSuqn0%2FpqPSJUNRkqgbfyXznroicAzxJMpJO%2BwpInFeVUq1uvsGkcaSAjAosH6qKas3FGWWr%2Bn%2FIFMxvP3ZMb2JoYGGJOK&X-Amz-Signature=931f936fa0148a4132cf0cb3b05cd17bb7fe7e3162efe35bb1e61a99deb9f315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
