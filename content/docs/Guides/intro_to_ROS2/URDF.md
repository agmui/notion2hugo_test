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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLXQ6O7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCkh4xGYbtyGAGGRAPB5vkEuihay2Js8UvAkVdKiriAIgOzi4yPSLUNGOrApZLk2YpoM7xfw%2F3SxI8%2FyYyzOCCSgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFINnyLH1aq1g%2Bj6RCrcA%2FXqBch6h66jiYiOFCM5mJfTZ4fggYdTJNuCjc7i5swQN9BrFFDL7HDJseK9ppCgEWRYYcAffk0bcD1QBbgdEWLw844lIELjhujQlxdyhQ%2BsNeByGu%2Fod1RpJt%2BfLOD5%2F%2Fjj8StjBIonVvhDQgAcgs5JuGnh4hw81eUvotXBDSM9GeQ9figOEBnF%2FrLGvknejwTI92%2BdjBLZOZIT9%2FFF%2BaJUD1snr%2BfM1fjVPiru1nxGVy7yqbLXib2VyLV8%2Bfy9ruI2ygJcvW2TuKB383a%2Fk5dAVua3Sfa2qrm8Yoic4SLwGAJ6sWslARoluX4xtX00JbLIYpIq%2FwTYlrx8W7fmCqD4aSFnEuvLwKl6Ue3VUF%2FGgEkXKyW5nKsuxJL8oP6EXN4tt3G3iCU8Ggdberuzg%2Fl5j0AT15KpMFVate6WHzyA3%2F1OG7wj6qdkBKs9%2BMmEIC%2FRZ4c8V4thByPq3cF6JzO5OuB1OkK7fzjZDvqZWpYCj4iiDNn%2BEnKj5QrFiDMYIWvkcwRnGciv7iQdqIK4TeU0kSAbMcnS5SmY%2FLHP5npyDJZq6IdSISOv649OssVWaolgSDtQfTChh36RUyRpukGxiLsUshp7qUbgKlrpNm6oYXyT2dqaZj2DY0M%2BMKyLir8GOqUBlmLT9g2e7v8konPS%2Fet2i1B8Uh%2Fi5A%2BMj7jzCkZPpminInRWH0zv67SEFIDDeUt9IYNfeRqUuff8fcYow7Mb1d7FySIQI0zUJTHByk88Cyw3SPS79cSVxlGv583JXfhTkWMbea3k7fOFBFZrpYo84Lpr1jYS4gG9OGzBHLrI8YDByGUSvNKSRngfDRTWnpvpllMLvIWeXIzgYucHSolwd9jOqy1K&X-Amz-Signature=9b5b2b10bfb22fece966a32bf0269377c8058851e058ab2dd3cbac0bd7a57634&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLXQ6O7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLCkh4xGYbtyGAGGRAPB5vkEuihay2Js8UvAkVdKiriAIgOzi4yPSLUNGOrApZLk2YpoM7xfw%2F3SxI8%2FyYyzOCCSgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFINnyLH1aq1g%2Bj6RCrcA%2FXqBch6h66jiYiOFCM5mJfTZ4fggYdTJNuCjc7i5swQN9BrFFDL7HDJseK9ppCgEWRYYcAffk0bcD1QBbgdEWLw844lIELjhujQlxdyhQ%2BsNeByGu%2Fod1RpJt%2BfLOD5%2F%2Fjj8StjBIonVvhDQgAcgs5JuGnh4hw81eUvotXBDSM9GeQ9figOEBnF%2FrLGvknejwTI92%2BdjBLZOZIT9%2FFF%2BaJUD1snr%2BfM1fjVPiru1nxGVy7yqbLXib2VyLV8%2Bfy9ruI2ygJcvW2TuKB383a%2Fk5dAVua3Sfa2qrm8Yoic4SLwGAJ6sWslARoluX4xtX00JbLIYpIq%2FwTYlrx8W7fmCqD4aSFnEuvLwKl6Ue3VUF%2FGgEkXKyW5nKsuxJL8oP6EXN4tt3G3iCU8Ggdberuzg%2Fl5j0AT15KpMFVate6WHzyA3%2F1OG7wj6qdkBKs9%2BMmEIC%2FRZ4c8V4thByPq3cF6JzO5OuB1OkK7fzjZDvqZWpYCj4iiDNn%2BEnKj5QrFiDMYIWvkcwRnGciv7iQdqIK4TeU0kSAbMcnS5SmY%2FLHP5npyDJZq6IdSISOv649OssVWaolgSDtQfTChh36RUyRpukGxiLsUshp7qUbgKlrpNm6oYXyT2dqaZj2DY0M%2BMKyLir8GOqUBlmLT9g2e7v8konPS%2Fet2i1B8Uh%2Fi5A%2BMj7jzCkZPpminInRWH0zv67SEFIDDeUt9IYNfeRqUuff8fcYow7Mb1d7FySIQI0zUJTHByk88Cyw3SPS79cSVxlGv583JXfhTkWMbea3k7fOFBFZrpYo84Lpr1jYS4gG9OGzBHLrI8YDByGUSvNKSRngfDRTWnpvpllMLvIWeXIzgYucHSolwd9jOqy1K&X-Amz-Signature=d37b8b401c82fda913af477ebf353d0aa63dbb3eb76a1a27a637ba1e88c43757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
