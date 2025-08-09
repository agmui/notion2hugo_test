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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6XZTRM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZV01KnDLTjMoUWRijv8l1Qtx7jlztcCcv1Enw%2FIjYwIgLWsv%2FP%2BBxfHYs4iRBynbSpfEKqGMTAKq6fmZBlAUEoQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpYaiahRVwP%2FcapnyrcAwwYu%2FPbXXQFm0afC3JzXs1wOmIxnefNgVAKGFSExCPA4UdCgErpgqDQojpqpWt7JKtfkEa5ozIxVC64xjy9WMRAosPx%2FU3NoEX2ApRrj%2BEa8Hj3%2B4NsI2uMiD%2FBXB%2FxCV0nUxQv5PjSDWXHqC0B8v%2FZRFyasZtxv9CftVPqTuk0HRC9P%2B%2Br47%2BfJUi%2FonxI0irE7pWfQ70iLN3hw4UgjZM6bfLCnjjvmU5l7%2FlJv7UOCfFq46pOb23RSVibzTgpy8lvtxVTSGe9tG3IZj%2FaleSDV8ATE1ikUdVuY2lDca3DAmQmvbjApcrOQqJGDwFbtGwX9W2Xfm2%2FSV9VcPn6pQLBw2kxzVQn8zSIx1HXJJhFPmihRUkeHmqf0oC%2BdRjAJYey7aXLA0eiCJucta1wIMDCONCv8t56fRQUVAv5zvoZN9MS5VXqQr3ndU92VY1d6OuSFRVyEX2IFxPsRSq4WjhDGjri1vHz8vusjSxMuZrcqz56ohrnNUt9inqbxuGwn4s8mWSd2WWR7tom9FigE6e6vJuak3KZfdMQ7slyq2fthchgB3M%2FJ1vaWL4m80H2drZrWNKl9yZGnJTE1dfGZluOjbAMsCzoYCQR0NhPzDF2PmdYqvQY1tYSXsQ3MKKL38QGOqUBgcgx1wnYH66AGq1vOosmjSKAe1A9%2Bv5rNfEfU1mgefv1tKhujPJCAwdnb5BMp1H14vpHlKldPJYnc0mrQ7QfU107P4A37y9NLdC9mvTV0UzGzikmTDly0mmFP1mcUsMEUtQVUY35HNPHAE2Diu8uvIkWB9JvmOFInzdwdeCpvKEYrk8cl6tLpCawxPaoTVuYpDi8HMfyl6uyzgRKqrhJtiJ4ZKxP&X-Amz-Signature=6179a39f73f9e9297e1ff1631cb26c969f96ce310d8bf74211b5d72cbd04e108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6XZTRM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZV01KnDLTjMoUWRijv8l1Qtx7jlztcCcv1Enw%2FIjYwIgLWsv%2FP%2BBxfHYs4iRBynbSpfEKqGMTAKq6fmZBlAUEoQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpYaiahRVwP%2FcapnyrcAwwYu%2FPbXXQFm0afC3JzXs1wOmIxnefNgVAKGFSExCPA4UdCgErpgqDQojpqpWt7JKtfkEa5ozIxVC64xjy9WMRAosPx%2FU3NoEX2ApRrj%2BEa8Hj3%2B4NsI2uMiD%2FBXB%2FxCV0nUxQv5PjSDWXHqC0B8v%2FZRFyasZtxv9CftVPqTuk0HRC9P%2B%2Br47%2BfJUi%2FonxI0irE7pWfQ70iLN3hw4UgjZM6bfLCnjjvmU5l7%2FlJv7UOCfFq46pOb23RSVibzTgpy8lvtxVTSGe9tG3IZj%2FaleSDV8ATE1ikUdVuY2lDca3DAmQmvbjApcrOQqJGDwFbtGwX9W2Xfm2%2FSV9VcPn6pQLBw2kxzVQn8zSIx1HXJJhFPmihRUkeHmqf0oC%2BdRjAJYey7aXLA0eiCJucta1wIMDCONCv8t56fRQUVAv5zvoZN9MS5VXqQr3ndU92VY1d6OuSFRVyEX2IFxPsRSq4WjhDGjri1vHz8vusjSxMuZrcqz56ohrnNUt9inqbxuGwn4s8mWSd2WWR7tom9FigE6e6vJuak3KZfdMQ7slyq2fthchgB3M%2FJ1vaWL4m80H2drZrWNKl9yZGnJTE1dfGZluOjbAMsCzoYCQR0NhPzDF2PmdYqvQY1tYSXsQ3MKKL38QGOqUBgcgx1wnYH66AGq1vOosmjSKAe1A9%2Bv5rNfEfU1mgefv1tKhujPJCAwdnb5BMp1H14vpHlKldPJYnc0mrQ7QfU107P4A37y9NLdC9mvTV0UzGzikmTDly0mmFP1mcUsMEUtQVUY35HNPHAE2Diu8uvIkWB9JvmOFInzdwdeCpvKEYrk8cl6tLpCawxPaoTVuYpDi8HMfyl6uyzgRKqrhJtiJ4ZKxP&X-Amz-Signature=36f73bdf39a7b159ce66e58bff777d07b7320bbf011dd4479f41f4913970b456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
