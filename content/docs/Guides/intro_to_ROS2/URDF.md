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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5ME6TJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdjxIDyoa9LG8%2Fxi%2FfXHCLp7dmY3Rd%2BKS7%2B1BUL3r1AwIhAPFTtcNG0YUKSs%2BeL3fzZzYom%2F9Ep4cZhD1R53FSpY86KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypKvqXNtDDK9zea4Yq3APzH6QzCeLQ7gfMBAGaggHIvR4KjnGmnDxbLDWgOVhMULnBIeMtIJE3cbyMDQ1XglW03nf00dtMvx1rUahKSbNMz9b449P5QrEzdk71dgsczw5C6D9AbnLaEMm3RNZj5A6PUO0qTnXWQV9UrLMOpsdsYrYUV2L3yvzv7Pqalqn4L7i4x6c8k60K1enEKY9sBIm7le2L3iuvoIoOtEG26PzYlmSVoSUSxWeE8DP%2FqAUDeF3GpmykGM6F2lOaJenRHe1xZoHEykx7q2eBTa7VNfCNFLAJrNIaG0WU4S93zR6l812QzLjIX%2FwtwdzoF6JvJpusOFLMMJoDPjlq9dynVh%2F1DdgH7%2Bi4hirxQ22dNIRtWd%2BozXcd26Fc9KduTiXVUQA3zH%2F6aYUqC6c4xLoskIpMekdHfCjH01Otjk8GYuB78V9tnFyh9KxafSPqVXOHWizEj1V9EjXFRqJZ0%2FYWKpPVmVrCeX2EEDsREnusXjmEwM%2FYIyR%2B4jiKBuwiztVKAcqZ0mftoclGN7CrGmJgsT%2BmiVlFtu1IHFnt94DLpWvdRiL215eeTqN%2BJJJUioMcJsKpBy4xliFsxmG8%2FL5q%2FP78tkZBoZt8yk%2BnXy3ZoGWSPeu6AZdRjn7cghkZ2DCR8YC%2FBjqkAWo8zrmkEzY%2BSqjSWbzHMMV1yxHqQVKKXQuRL4McjBPoGClIRZDhZqVHbSQAQErUbEtphXAjWX99g7DSO%2FdyX6VaXqQlnJZGkY1F%2BxCzMsskUvchvWUilDXD1ZNN9ik%2BV1o3hUr1L%2F3hX43qoOB3Isu21q0jL6nxDekaMoa9o%2FlzQhL%2FvImhPTBVYeWI3FcrSu2OKgsU%2BBu24jWloyyewpDNUlPb&X-Amz-Signature=55aba5f370c42954a0461cb663f81085c79e69cb16b5131951701ce35f04b1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5ME6TJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdjxIDyoa9LG8%2Fxi%2FfXHCLp7dmY3Rd%2BKS7%2B1BUL3r1AwIhAPFTtcNG0YUKSs%2BeL3fzZzYom%2F9Ep4cZhD1R53FSpY86KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypKvqXNtDDK9zea4Yq3APzH6QzCeLQ7gfMBAGaggHIvR4KjnGmnDxbLDWgOVhMULnBIeMtIJE3cbyMDQ1XglW03nf00dtMvx1rUahKSbNMz9b449P5QrEzdk71dgsczw5C6D9AbnLaEMm3RNZj5A6PUO0qTnXWQV9UrLMOpsdsYrYUV2L3yvzv7Pqalqn4L7i4x6c8k60K1enEKY9sBIm7le2L3iuvoIoOtEG26PzYlmSVoSUSxWeE8DP%2FqAUDeF3GpmykGM6F2lOaJenRHe1xZoHEykx7q2eBTa7VNfCNFLAJrNIaG0WU4S93zR6l812QzLjIX%2FwtwdzoF6JvJpusOFLMMJoDPjlq9dynVh%2F1DdgH7%2Bi4hirxQ22dNIRtWd%2BozXcd26Fc9KduTiXVUQA3zH%2F6aYUqC6c4xLoskIpMekdHfCjH01Otjk8GYuB78V9tnFyh9KxafSPqVXOHWizEj1V9EjXFRqJZ0%2FYWKpPVmVrCeX2EEDsREnusXjmEwM%2FYIyR%2B4jiKBuwiztVKAcqZ0mftoclGN7CrGmJgsT%2BmiVlFtu1IHFnt94DLpWvdRiL215eeTqN%2BJJJUioMcJsKpBy4xliFsxmG8%2FL5q%2FP78tkZBoZt8yk%2BnXy3ZoGWSPeu6AZdRjn7cghkZ2DCR8YC%2FBjqkAWo8zrmkEzY%2BSqjSWbzHMMV1yxHqQVKKXQuRL4McjBPoGClIRZDhZqVHbSQAQErUbEtphXAjWX99g7DSO%2FdyX6VaXqQlnJZGkY1F%2BxCzMsskUvchvWUilDXD1ZNN9ik%2BV1o3hUr1L%2F3hX43qoOB3Isu21q0jL6nxDekaMoa9o%2FlzQhL%2FvImhPTBVYeWI3FcrSu2OKgsU%2BBu24jWloyyewpDNUlPb&X-Amz-Signature=e8cf837752df8709ebc2826a264b5e03fd604cd1e08bbfec8ea40deea5d9351a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
