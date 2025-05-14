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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUNWX2R6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCICPvskA4oxnKOgozQf2zC63D8chqkMYQdfGVasXZ8l4KAiEA7V5i8xHkpsT%2B36QQINh9yhPWA00TcuadyV3VZF%2B2DWEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdFkJ6TWMKHN9IGjircAz3O%2F3sHVhkCIoabsHFhow3UmtLCu3lIirWGgj249j3w3N%2BO7N%2Ba%2BtSUmuXYnFfJsR2hN7SK%2FzeQEo9BKU2DbvkcewUUct53%2F1qBIROFIx3gQl1X7dREL5nKXuFnLDDKIMPIhdfHvM6e5HnQY3WHqa%2BlbNQHACgcOjNpQ5NkE3IsXQCoe%2BlL899eSM8n6tPxb3zhx5k8cFtEh%2BKLdAvCm5az%2F1V8jRpu5rWoWYv6k9wiUkJlp8PBWJmVtqZqHjcDol%2FfAAm483vqDSEEO8xxvlfGkKAKyswC1TOn2YPzIJ7HELW8jYWZyjKS0jR5%2B1e1bmAFqH8ECIIxFy8sqpenRledT%2Fozaly2z7DlEA20%2Fk3o4uiQHTOz6ysdawtNiV7HpfAJ6LHDWrZ19BGfZiXceM5v8sC%2BmTduRt7ZOlnXjQqSHlpNh0iNMs7Fi6CgiLVmOy4NfNKp1EEdXAVGa76epmEQRbD9%2FezagY862nEkLybQPLf9BBGpBOGiIYQXPBK4kJu5GHfYYqiJgs8emNQpzm75EvvZv1T7fAnqgUVA5QvY6rw1LZWbjnqRpvfvrlrzZEiA8%2BVqn46bwbEarq8wfmwGeejP6xlO9%2FCn9Wd3a%2BU6KVPA5q40%2FqiITgLUMPDRkMEGOqUBVDVMDDDgrQtTfqKMS9q8HtzjNGFUha33Lx2PlcDh5rZ7uTNuVugh%2BawE8uUGRs3ZO3sAZHRN9O9M8bSCSW7lE%2FH0d%2BmlAH5NqzqYOAEkJ0xRqKwjIiXdBceTP7k6mlWJDdmDx0A%2BSr5NZaCooXXmjefbKhlaUQW6g4EmxMQGi47WzAx%2BnyU8XcJ%2Bcusar0PIuKP9oMHnIV9w%2Bay3ega3WOLDFCDs&X-Amz-Signature=8e305824f578bbd7df2e55408ad1265149666f20d8c0555292432b7ce10da8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUNWX2R6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCICPvskA4oxnKOgozQf2zC63D8chqkMYQdfGVasXZ8l4KAiEA7V5i8xHkpsT%2B36QQINh9yhPWA00TcuadyV3VZF%2B2DWEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdFkJ6TWMKHN9IGjircAz3O%2F3sHVhkCIoabsHFhow3UmtLCu3lIirWGgj249j3w3N%2BO7N%2Ba%2BtSUmuXYnFfJsR2hN7SK%2FzeQEo9BKU2DbvkcewUUct53%2F1qBIROFIx3gQl1X7dREL5nKXuFnLDDKIMPIhdfHvM6e5HnQY3WHqa%2BlbNQHACgcOjNpQ5NkE3IsXQCoe%2BlL899eSM8n6tPxb3zhx5k8cFtEh%2BKLdAvCm5az%2F1V8jRpu5rWoWYv6k9wiUkJlp8PBWJmVtqZqHjcDol%2FfAAm483vqDSEEO8xxvlfGkKAKyswC1TOn2YPzIJ7HELW8jYWZyjKS0jR5%2B1e1bmAFqH8ECIIxFy8sqpenRledT%2Fozaly2z7DlEA20%2Fk3o4uiQHTOz6ysdawtNiV7HpfAJ6LHDWrZ19BGfZiXceM5v8sC%2BmTduRt7ZOlnXjQqSHlpNh0iNMs7Fi6CgiLVmOy4NfNKp1EEdXAVGa76epmEQRbD9%2FezagY862nEkLybQPLf9BBGpBOGiIYQXPBK4kJu5GHfYYqiJgs8emNQpzm75EvvZv1T7fAnqgUVA5QvY6rw1LZWbjnqRpvfvrlrzZEiA8%2BVqn46bwbEarq8wfmwGeejP6xlO9%2FCn9Wd3a%2BU6KVPA5q40%2FqiITgLUMPDRkMEGOqUBVDVMDDDgrQtTfqKMS9q8HtzjNGFUha33Lx2PlcDh5rZ7uTNuVugh%2BawE8uUGRs3ZO3sAZHRN9O9M8bSCSW7lE%2FH0d%2BmlAH5NqzqYOAEkJ0xRqKwjIiXdBceTP7k6mlWJDdmDx0A%2BSr5NZaCooXXmjefbKhlaUQW6g4EmxMQGi47WzAx%2BnyU8XcJ%2Bcusar0PIuKP9oMHnIV9w%2Bay3ega3WOLDFCDs&X-Amz-Signature=ccbb3f97fccb218560bdcb054324f45558a5469aba0f5099c2582f4fcadc3424&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
