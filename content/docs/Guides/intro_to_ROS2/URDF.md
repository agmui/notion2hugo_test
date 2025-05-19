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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVO7IXI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQOmBQdsxl7kIgpgSzH46%2BbyqhwCV6c5CelGlYLFT%2BYAiAQugKaw%2BogI4ptTd%2BNfAecsL%2BoxHRyysJR6D5kDDizsyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDyVG1FccNrqClk4KtwDXTws4KFTNgJgU8gNKW2i9Tnohx4vv8EeBBS0EAjQFKnn5r68XeWOHyIOtCdCwITluEpa9UsvqXca6%2F2nj0Q78EGlO%2BdRizSIjmtxIY9v3mPZ389eI%2F6tlY8B8AbTdgxz9X2xbtLJwRAGLZ%2BKa0A06o9K7TTotQ9VrPSeLYYMwvYxbp3PRmxackNUkNP5IIJ8I6exo2q4yULoAXqhjvoEvBKep4fmnrDpqPg%2FMB0VghvJDF%2FaLE8nInQ4cggQQRhe8qdO2wjy5YcyQftgG0O1fJruE19Bm5s8H07Q4llvZ%2BA5LfKKyMJqxv%2BNJLOfdglEP%2FHJAZguDQt%2FgTWug8uoqCZnvKageOwQIfcHwpW3XgQPDKFHJa0CbRDVO0JqpzvJdzu68kgNNYZ0%2BjLK0fHiSDUlM4R8mjaoBIeKPs5sJB8FeQFB%2BK9FO2cD5aVsrBFU42bIBhjCNku7G8NQ2gAOiKJdnLhxg0kh3V3srYUoWezpso4mzWaBkpdwganMX3sCJvG6NevkhfBaG%2BsgTieKl0jPIOAp8B%2BflpselrZ0sJ8jNkl4vFsF6CbTrc9BElOzyI%2FUidiOy0XKLXJ9hWSfKUJQ0K03uexSflonf1gxhgiM172rBquqaT0AGrYw9%2BGtwQY6pgERe0uXUvR3WhW9pePSScst4mIXSwj0ZwfMhhn7%2BF8mrSbE%2BE7nkma4Pfa1JR1nyJVmJUbaVtbAusTP8EgdW%2B2ms8YDp0YAvDLxQhxcqgvvNIcUprAbRaqHEi2axcCFf3wpxK3Bz1zaMzV6PLofGeK2jF%2FJF68md3WGT9cjW83fA9r1Ro9K0TYLUHvt%2Bu248FCahVobUD6YY5UZ6LqD1VvWA8PasS6W&X-Amz-Signature=eaa300fd13ae2119d688b395d12c3f375304c6ea4402242e039720b886727a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVO7IXI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQOmBQdsxl7kIgpgSzH46%2BbyqhwCV6c5CelGlYLFT%2BYAiAQugKaw%2BogI4ptTd%2BNfAecsL%2BoxHRyysJR6D5kDDizsyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDyVG1FccNrqClk4KtwDXTws4KFTNgJgU8gNKW2i9Tnohx4vv8EeBBS0EAjQFKnn5r68XeWOHyIOtCdCwITluEpa9UsvqXca6%2F2nj0Q78EGlO%2BdRizSIjmtxIY9v3mPZ389eI%2F6tlY8B8AbTdgxz9X2xbtLJwRAGLZ%2BKa0A06o9K7TTotQ9VrPSeLYYMwvYxbp3PRmxackNUkNP5IIJ8I6exo2q4yULoAXqhjvoEvBKep4fmnrDpqPg%2FMB0VghvJDF%2FaLE8nInQ4cggQQRhe8qdO2wjy5YcyQftgG0O1fJruE19Bm5s8H07Q4llvZ%2BA5LfKKyMJqxv%2BNJLOfdglEP%2FHJAZguDQt%2FgTWug8uoqCZnvKageOwQIfcHwpW3XgQPDKFHJa0CbRDVO0JqpzvJdzu68kgNNYZ0%2BjLK0fHiSDUlM4R8mjaoBIeKPs5sJB8FeQFB%2BK9FO2cD5aVsrBFU42bIBhjCNku7G8NQ2gAOiKJdnLhxg0kh3V3srYUoWezpso4mzWaBkpdwganMX3sCJvG6NevkhfBaG%2BsgTieKl0jPIOAp8B%2BflpselrZ0sJ8jNkl4vFsF6CbTrc9BElOzyI%2FUidiOy0XKLXJ9hWSfKUJQ0K03uexSflonf1gxhgiM172rBquqaT0AGrYw9%2BGtwQY6pgERe0uXUvR3WhW9pePSScst4mIXSwj0ZwfMhhn7%2BF8mrSbE%2BE7nkma4Pfa1JR1nyJVmJUbaVtbAusTP8EgdW%2B2ms8YDp0YAvDLxQhxcqgvvNIcUprAbRaqHEi2axcCFf3wpxK3Bz1zaMzV6PLofGeK2jF%2FJF68md3WGT9cjW83fA9r1Ro9K0TYLUHvt%2Bu248FCahVobUD6YY5UZ6LqD1VvWA8PasS6W&X-Amz-Signature=6aeaeef61d3faa8b6567dc8014b9d828acd7ea5dfd817a854324cd7c053c49bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
