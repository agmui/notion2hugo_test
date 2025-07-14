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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HBMXUN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCZGHzRAtaQNaBA3rO9l06Uya2sTmSWw7eRAGRPaCqnYQIhAKFxhxo7FvasseCo5mvaTqgUyE4FgfWXy3OEwYYRx6ktKv8DCCMQABoMNjM3NDIzMTgzODA1IgyBClTy8v3Rx9RGQfkq3AMEIQuy%2BkknHOzsAs%2Favkd7mjRNRsTdGGNpz4W1j2fooaI%2FboRN7xUk5DaGtR646hLw%2Br%2FSARnhDmg4uwzuhy5CFFq72e%2FCiRJYSDtsjO9ap3%2BKe7q6JCe1VdBpbiit0s3E0VoV1rMi6gtaPUdIAqZk0D2gxy5PVSGA78gaOtihe%2BzOqlaaAJ%2B4fsZZmEneJSvNTZqhxb2bVOVpu0alp5WMiMETdsQarIfP0Z7KWN2cA7BWSAv%2Bd7OWf%2B4TRpvHACaEmImhTQi5lvksEtV5YrHSU31eANB9gzqeEPhaZ9IZqy6I2tjfoeucs%2FD%2BuSeWb3d2djdcHSyWPX7Ic%2FxjzPZLmFPsdAQvfHupLK6Ael6Hz1J26%2B7Ep6bQ3Bgec8Piuwha1vrHJ5ESmj9WaqR4hoOEjhC65JSDB4NA%2BasJ0whKiDPg%2FbmFhFZ0csltwEurIpfV%2FI2aJa5LQSzx6AZusyibvoWBIJaxRWyYHqUG%2BQH5Gjao%2Bn4n1WSi2ZO14o%2BT%2FaKfXY1%2F1huTfM9Z0wPVmoGW12%2Fny2mPzI2lHPftaRRcg06W4B12tIwTCPSHaEcCLcO%2F8QqWLp5L%2FuNGYWINCOe0tvX%2BcC%2BSiaB5qFUxKTBRlVRDffSA39A4MLbmFjCDzdHDBjqkAf07kKHjuOVb0ySJ%2FPBGQt%2FMA4jfVRPL4iF8djYdvTYrpH50Cdhy9d1amPt44eUuUy4gVXB7ky7ZHHHkQ0rPSd00IZ3qMjONOrEWbKC9qLl5MIoHVpe7W%2F3CWY4mc9iwgbQx%2FXf4WJvJKCG%2FkgqzUXXXvkaqCcxkiOmhA9Ifmjce1LvNQY%2Fpv4OKRqb7Pm6ttSMI1JQ1rWDvkD7w8Bwd25Scfw6R&X-Amz-Signature=f18fcb3d67b49648da8d5936f4be34595f3342b29b6ad03138a5375a0ba6645a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HBMXUN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCZGHzRAtaQNaBA3rO9l06Uya2sTmSWw7eRAGRPaCqnYQIhAKFxhxo7FvasseCo5mvaTqgUyE4FgfWXy3OEwYYRx6ktKv8DCCMQABoMNjM3NDIzMTgzODA1IgyBClTy8v3Rx9RGQfkq3AMEIQuy%2BkknHOzsAs%2Favkd7mjRNRsTdGGNpz4W1j2fooaI%2FboRN7xUk5DaGtR646hLw%2Br%2FSARnhDmg4uwzuhy5CFFq72e%2FCiRJYSDtsjO9ap3%2BKe7q6JCe1VdBpbiit0s3E0VoV1rMi6gtaPUdIAqZk0D2gxy5PVSGA78gaOtihe%2BzOqlaaAJ%2B4fsZZmEneJSvNTZqhxb2bVOVpu0alp5WMiMETdsQarIfP0Z7KWN2cA7BWSAv%2Bd7OWf%2B4TRpvHACaEmImhTQi5lvksEtV5YrHSU31eANB9gzqeEPhaZ9IZqy6I2tjfoeucs%2FD%2BuSeWb3d2djdcHSyWPX7Ic%2FxjzPZLmFPsdAQvfHupLK6Ael6Hz1J26%2B7Ep6bQ3Bgec8Piuwha1vrHJ5ESmj9WaqR4hoOEjhC65JSDB4NA%2BasJ0whKiDPg%2FbmFhFZ0csltwEurIpfV%2FI2aJa5LQSzx6AZusyibvoWBIJaxRWyYHqUG%2BQH5Gjao%2Bn4n1WSi2ZO14o%2BT%2FaKfXY1%2F1huTfM9Z0wPVmoGW12%2Fny2mPzI2lHPftaRRcg06W4B12tIwTCPSHaEcCLcO%2F8QqWLp5L%2FuNGYWINCOe0tvX%2BcC%2BSiaB5qFUxKTBRlVRDffSA39A4MLbmFjCDzdHDBjqkAf07kKHjuOVb0ySJ%2FPBGQt%2FMA4jfVRPL4iF8djYdvTYrpH50Cdhy9d1amPt44eUuUy4gVXB7ky7ZHHHkQ0rPSd00IZ3qMjONOrEWbKC9qLl5MIoHVpe7W%2F3CWY4mc9iwgbQx%2FXf4WJvJKCG%2FkgqzUXXXvkaqCcxkiOmhA9Ifmjce1LvNQY%2Fpv4OKRqb7Pm6ttSMI1JQ1rWDvkD7w8Bwd25Scfw6R&X-Amz-Signature=d78c8232c7c35fad9b83fece13d294383cebb9edfa2a2fedda13c71197621239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
