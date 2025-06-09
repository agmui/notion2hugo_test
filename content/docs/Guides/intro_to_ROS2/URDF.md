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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOESJNY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQxcqpRgY7ALdWTSRPgn5TlXI2hRrgx7dBk91RkGaQawIhAKOhl7YnBlLVFO%2FFL%2F0KSS517bErdJpjrMIoIyPK3qTQKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOyPO3xggSeNEfHssq3APjGKkbhXLk8E4hf71eZbUtGh8lTQPMynoIVaDj7bVilM9Exp3b%2B7J3SO0v044UhVE0dg9MsrD0Ny%2Fy79Ka%2FG1q5lczJYohbVK%2F%2F3HZRfpcb9EuOv7BBSVBdgypnqxUVdjAQuBaHFylxfQZWPek7H7ibunRIcDH%2BmCqK4i%2BlKsVZBB9WWKEPH8lXkMOa2ocdoKNq%2F6qVPByGDyX2HjNjUEsOd4BTss%2BoXcV7e9TibJJd4VOkH9PbooBaZae3Hht0L6zTYpRK0eEeIZkm%2F9X5LqtkFvzme9BChnpfO9CLcvm19mjxWEBmy%2B2Z90A31WwMHbVy47Lx6276%2FOrVRhuTbpHHN2WLe7puoQGFH2xNHEsICZa%2Fke6qxNspuviItjrn4boR3DSTAOqa98TzqcQ7SJoxKpSENly8f7SVDT5wcpukYOIDlP4HFfUzVavE2gIsmkXOjxufGiKtVteMV34xYjID3gPItQjgmlRDjhiPFhtCgZMsVGwVwMlg9pXTj6qsRVITkLur0%2BjGDCT1jpEuYTJKy1vK2F%2BQGHUaPOOqAQbEtIw4re7oWhvOoHVcr9auxr30fvJv6HLlQFJfVfhmgDXz9IUr4%2BBsoniFDnsjLDyqUJ059ZpphIrGn25LDCq7pvCBjqkAWkzP%2FGf1hlZmsoKUjX6kcd546oQ5O4%2FQVwxrS7df09Nygi6P8Z3Kicwxo5qOJOZuiiK1W%2F3XHT66IlAKbjiDW%2FmioE80LkgUM4fjT6BQ6I9IAETOy1nZXhNRDovRHZ0U0%2BEyTb0m%2FK33fgk02eNushnalkq09EnqhGtEoYlqTWlABgWiX3tZZks0tIZft%2BC%2F%2B263KZcTHmILgF4GC2G%2F3Sae338&X-Amz-Signature=42ef4e20fcb8a8e60f64a6ef1125efab8f462576d2447a2f79a08632d154a10b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOESJNY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQxcqpRgY7ALdWTSRPgn5TlXI2hRrgx7dBk91RkGaQawIhAKOhl7YnBlLVFO%2FFL%2F0KSS517bErdJpjrMIoIyPK3qTQKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOyPO3xggSeNEfHssq3APjGKkbhXLk8E4hf71eZbUtGh8lTQPMynoIVaDj7bVilM9Exp3b%2B7J3SO0v044UhVE0dg9MsrD0Ny%2Fy79Ka%2FG1q5lczJYohbVK%2F%2F3HZRfpcb9EuOv7BBSVBdgypnqxUVdjAQuBaHFylxfQZWPek7H7ibunRIcDH%2BmCqK4i%2BlKsVZBB9WWKEPH8lXkMOa2ocdoKNq%2F6qVPByGDyX2HjNjUEsOd4BTss%2BoXcV7e9TibJJd4VOkH9PbooBaZae3Hht0L6zTYpRK0eEeIZkm%2F9X5LqtkFvzme9BChnpfO9CLcvm19mjxWEBmy%2B2Z90A31WwMHbVy47Lx6276%2FOrVRhuTbpHHN2WLe7puoQGFH2xNHEsICZa%2Fke6qxNspuviItjrn4boR3DSTAOqa98TzqcQ7SJoxKpSENly8f7SVDT5wcpukYOIDlP4HFfUzVavE2gIsmkXOjxufGiKtVteMV34xYjID3gPItQjgmlRDjhiPFhtCgZMsVGwVwMlg9pXTj6qsRVITkLur0%2BjGDCT1jpEuYTJKy1vK2F%2BQGHUaPOOqAQbEtIw4re7oWhvOoHVcr9auxr30fvJv6HLlQFJfVfhmgDXz9IUr4%2BBsoniFDnsjLDyqUJ059ZpphIrGn25LDCq7pvCBjqkAWkzP%2FGf1hlZmsoKUjX6kcd546oQ5O4%2FQVwxrS7df09Nygi6P8Z3Kicwxo5qOJOZuiiK1W%2F3XHT66IlAKbjiDW%2FmioE80LkgUM4fjT6BQ6I9IAETOy1nZXhNRDovRHZ0U0%2BEyTb0m%2FK33fgk02eNushnalkq09EnqhGtEoYlqTWlABgWiX3tZZks0tIZft%2BC%2F%2B263KZcTHmILgF4GC2G%2F3Sae338&X-Amz-Signature=4d4a1c4a8caf99e2537d3f1b222e7808e3a94bda4d5e19a5846a28d5afdad2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
