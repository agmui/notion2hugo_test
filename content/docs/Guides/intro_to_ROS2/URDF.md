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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAB5AVB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFfMhOxlAnSZvOEow25f9ihjMubQZj%2FYBzzu34QL3crQAiAul603Rf%2B15E56lF3CB80nVqNQxsZ1qC66kIH0F%2ForHyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz33n0A4lwrA7fcmEKtwD30c21KV5nXj7BKr1G0%2Fiz3woqC0cAOuSaWrIaSyT1DsdnCv8ao%2BsW8SRKBvujnbAY%2BsjBbuRzHJ6NTKbWaLW0Z2oVz1b09ZoO8bWTuVYrnK%2FP7shpUoIPGnl%2FbGYZ5L0qDGpeZAJ54uXES61YdPp1LIsHstjjTKmlJMf9qGe%2BGul1%2B59WJS8e232vroIXvr4sB80mfNTPw6NfiMQCo3eKvCGLYaI4OrozUEA9k%2BBlA5Kzo6OpitEK8PBhHu9l45f%2Fnj%2Fjjiuymh8D%2FT%2FkXQLcVaP%2FfWBcyCRLPdo5w%2FLy8IyOL5hEXIfoWQneXH9A2kXNoDsN7C7kttaNtmOQFd1ukndEABeLzvGUx62jMnX66j6x2v%2BsuLH0KF3IzjnoXR0RLC0Qjkv9ocZIVIaYihAJHPrPFYGGL6cguFdLYtS2jWvTrRTSMROgJeNPpeH0Qhb8yLuyNr9DDvBa6E03ZA%2FXM9J2XU4fxBomx7VlsSefz5CXZeXiqTDw2DsGh3N815O0ZvDEPb36scCi%2F9Cm9347RnuHCKv%2FgfdAf2WNyNfHxddaIj11E4OGO6%2FX%2F28Y6L8Hqk3RGsWtU%2Fjmsqy%2FgfwKjhIpZF6LWVLZdb05FonyKwmOgbi2yz5JmcWB8Mwv7GmwAY6pgGPzgimmXimH69fUwU4wKwDfj3LAYfG4bE9ji7C6oVQczVV79jzGMWoqdFf7rd%2BTdbhPbQ1j68PhsECe2YPfislaF2w3YiTLSEy2%2FAg14Kf6PQrqXe99OJ9wLYhPHxdxTUDTQhXJqVf5jIuQnp2ybWHHx%2BytfQ9c%2B6FaB%2BtvbSXzvOPRqIdjiYFdstC66%2BhbxZCm2W%2BGa5JZIuo7%2BeGxx1nEBDgvlM4&X-Amz-Signature=d7e6e53c134c5fbd2375a7b4ff854fdf434c86e02102f2463dd991250f75bffd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAB5AVB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFfMhOxlAnSZvOEow25f9ihjMubQZj%2FYBzzu34QL3crQAiAul603Rf%2B15E56lF3CB80nVqNQxsZ1qC66kIH0F%2ForHyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz33n0A4lwrA7fcmEKtwD30c21KV5nXj7BKr1G0%2Fiz3woqC0cAOuSaWrIaSyT1DsdnCv8ao%2BsW8SRKBvujnbAY%2BsjBbuRzHJ6NTKbWaLW0Z2oVz1b09ZoO8bWTuVYrnK%2FP7shpUoIPGnl%2FbGYZ5L0qDGpeZAJ54uXES61YdPp1LIsHstjjTKmlJMf9qGe%2BGul1%2B59WJS8e232vroIXvr4sB80mfNTPw6NfiMQCo3eKvCGLYaI4OrozUEA9k%2BBlA5Kzo6OpitEK8PBhHu9l45f%2Fnj%2Fjjiuymh8D%2FT%2FkXQLcVaP%2FfWBcyCRLPdo5w%2FLy8IyOL5hEXIfoWQneXH9A2kXNoDsN7C7kttaNtmOQFd1ukndEABeLzvGUx62jMnX66j6x2v%2BsuLH0KF3IzjnoXR0RLC0Qjkv9ocZIVIaYihAJHPrPFYGGL6cguFdLYtS2jWvTrRTSMROgJeNPpeH0Qhb8yLuyNr9DDvBa6E03ZA%2FXM9J2XU4fxBomx7VlsSefz5CXZeXiqTDw2DsGh3N815O0ZvDEPb36scCi%2F9Cm9347RnuHCKv%2FgfdAf2WNyNfHxddaIj11E4OGO6%2FX%2F28Y6L8Hqk3RGsWtU%2Fjmsqy%2FgfwKjhIpZF6LWVLZdb05FonyKwmOgbi2yz5JmcWB8Mwv7GmwAY6pgGPzgimmXimH69fUwU4wKwDfj3LAYfG4bE9ji7C6oVQczVV79jzGMWoqdFf7rd%2BTdbhPbQ1j68PhsECe2YPfislaF2w3YiTLSEy2%2FAg14Kf6PQrqXe99OJ9wLYhPHxdxTUDTQhXJqVf5jIuQnp2ybWHHx%2BytfQ9c%2B6FaB%2BtvbSXzvOPRqIdjiYFdstC66%2BhbxZCm2W%2BGa5JZIuo7%2BeGxx1nEBDgvlM4&X-Amz-Signature=bd6d7a1a5cd7b95ffddae668df218797c3645e4b6016a7729d513337b5ece1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
