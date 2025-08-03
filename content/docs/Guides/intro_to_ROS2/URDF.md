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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZULNO4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4KZIvbT4zv2JlJVnJupHOvk7jVYO2JGjyvYZoCSIlWwIgd8zjB1xdjeTSHxhYZCUE3DBQFoPKFLtXMpdga9d3OjMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPQ5%2FlSXvSKXoeRwuyrcA%2FZVEkUfcZ7qW3fibqMPw%2BUc6lQqcpYl8EpiodAtb2yND9IaRo6V0vmPTyQqHhJ0xmgYfmF7GrZ2bqjPsMasrgxCwRW9QpcI0DnyEZ5bqIu7Dx3OLbE3nY68gdE5u6SjZaCH1j6tif%2BNAQDoWxdDrcjMXf9qVwGl%2BxcnT6%2FQLFwIR8a1%2B%2Bwv3JcXVs%2FEr8%2FEEbaLfMqbiZjPVEX5lBid5%2Bh9TD%2BRpi4wlRbWIELpk8XcKHBommWAlx4vwANSLV5%2BojZZhhmPqfXFwq0tmR0GbcCtuaXszbe6GuujMVPNdpKghhkQGNajTrEHhMvNp0W0YeCX0VqPecmtFNCNinO6fIVMdrhDuHqfhahLheeGVot1vuraSukWKv2BcNOrRJnz3zMUjzUW0p0nBfgUmCAoXwBXPvdyQrJuX5jsYDnoUJ1XO%2F3jJsSgWdeKqbjAKV32FVFb8UwKD9XtjCeCzkEPIldAIKMGkS2UtNCauOiVszoj5jcF138dqJk8J2n8NDWCJ26x3yxW%2BxyULHHkqLduNlQXUyXCQOtgRuuvTdRst9v6nHizg%2BVEMZIlov5zCLhU01q7eXmBsmwbAU3gWQcS48uCRf5wI66dwHifoyeH7d9Qat50rIzoa3xsNCLkMNjEvMQGOqUBrujXd6nrZsA%2BmXlacwC0US%2Ba%2ByZWZQGtOabkxQECuVfn61nVOGEOTm%2FadJ65qGrUmSMnLMYlyVQfOFxXkSGM9uv3BhLaPF5ck4iE1ReI7DRZs8uVxYXtyk7diHK3ER3IJiBnhkQjnuZXecYM2VHMkdT8eO7UDVnS3zoWavm0F7Ti3HK9P1bw%2FuCFSkAq09UnCvpXmw2Yij2H66YjBq9qQ8dztrmQ&X-Amz-Signature=f359da0e3ae96b0803af22175363af0ae89ecec42daeabe95072172398b95d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZULNO4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4KZIvbT4zv2JlJVnJupHOvk7jVYO2JGjyvYZoCSIlWwIgd8zjB1xdjeTSHxhYZCUE3DBQFoPKFLtXMpdga9d3OjMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPQ5%2FlSXvSKXoeRwuyrcA%2FZVEkUfcZ7qW3fibqMPw%2BUc6lQqcpYl8EpiodAtb2yND9IaRo6V0vmPTyQqHhJ0xmgYfmF7GrZ2bqjPsMasrgxCwRW9QpcI0DnyEZ5bqIu7Dx3OLbE3nY68gdE5u6SjZaCH1j6tif%2BNAQDoWxdDrcjMXf9qVwGl%2BxcnT6%2FQLFwIR8a1%2B%2Bwv3JcXVs%2FEr8%2FEEbaLfMqbiZjPVEX5lBid5%2Bh9TD%2BRpi4wlRbWIELpk8XcKHBommWAlx4vwANSLV5%2BojZZhhmPqfXFwq0tmR0GbcCtuaXszbe6GuujMVPNdpKghhkQGNajTrEHhMvNp0W0YeCX0VqPecmtFNCNinO6fIVMdrhDuHqfhahLheeGVot1vuraSukWKv2BcNOrRJnz3zMUjzUW0p0nBfgUmCAoXwBXPvdyQrJuX5jsYDnoUJ1XO%2F3jJsSgWdeKqbjAKV32FVFb8UwKD9XtjCeCzkEPIldAIKMGkS2UtNCauOiVszoj5jcF138dqJk8J2n8NDWCJ26x3yxW%2BxyULHHkqLduNlQXUyXCQOtgRuuvTdRst9v6nHizg%2BVEMZIlov5zCLhU01q7eXmBsmwbAU3gWQcS48uCRf5wI66dwHifoyeH7d9Qat50rIzoa3xsNCLkMNjEvMQGOqUBrujXd6nrZsA%2BmXlacwC0US%2Ba%2ByZWZQGtOabkxQECuVfn61nVOGEOTm%2FadJ65qGrUmSMnLMYlyVQfOFxXkSGM9uv3BhLaPF5ck4iE1ReI7DRZs8uVxYXtyk7diHK3ER3IJiBnhkQjnuZXecYM2VHMkdT8eO7UDVnS3zoWavm0F7Ti3HK9P1bw%2FuCFSkAq09UnCvpXmw2Yij2H66YjBq9qQ8dztrmQ&X-Amz-Signature=ada7cca10619b02549f2474c8b0f0010f93fc9b8d168d7cd927c361943d5ddf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
