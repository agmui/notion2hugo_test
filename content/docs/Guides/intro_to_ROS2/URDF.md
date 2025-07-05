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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4ZXLTF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGxTcJ0FEjkInz0OOO0RWS6xZrxaTCSlyFcjrf3plgJ7AiAtauTp1qbW1n5K8uStFSokt7CFv1TeZ5J18jYGzbTRgir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMwo0fhdRolbWunJpJKtwDprNSZby70b4dfK6P6PeGueIkn54H37GAcfoU78DPuzFhwJoiVSRFAlLOlbr2870vsQ4YTNgKR4AcZNWwjwi4nKj0HJtzpreiKvitUN9c6OngvS0BO6syRyBSiRQp7rwX9LWyzZe4nMiiGRtyKWGB9AJeohW%2FLegUfFyjZPKAjMBEuLCd9DpjfEvut30gBqQkDI7LFnvQOHbJrRdaLFtOdUzdiYoLb5ezO4Y3sNUS35ZmgOAeePlEaEXq29jUZErJmhnYZZ%2FbgfvO04w%2F9ge3T7AsW1nJiyaAQJPZKhkG4UmxJ8rcyL8DKd2X4LiOX9RomZPJhjNCNuwYjFN4%2F2N7xV0QERJifmBqzWeFPkpmiCP9CWNxEATQ%2F0oxOGQ1z5TbbB8tRNEasTgd5Yq1SvPGl5s48poMLBN52IkUDyFfh4XHxQpi9LXBEznScgXuH3fKTmrTf7LeJe8O56KUVy3uAfPRDe8%2FoT8UZTlsmXO9rIZ9NgK2qn8e942qC6lJOY2%2FQmJ5X%2BQebaz3hH8Jxhh1NjkaJx%2BrMHIMNTJP3X9ElwKCjvhwrLaibkUrHV19MzgJecxSspS2MwFXgwcJFTMSbsWNZ39fXsnLEdD7mXD%2BJmQjfR7PVZuN0pkcfe4wz42iwwY6pgHpC3RqDyEPlubkXhjW2LG7i9aTMwG06fAs10PqQL6%2BDErSeGbCyaLR%2Fopy3wXGFf6d3fopFxtCbL3wtu8hEhwUpZYZa54%2BOGVxHCHjNpPIT8H997neysmqozZi5WIiJtWOvPIXtua2JlMN7hENDnnDtpJAgc%2Ft%2BvGOL8Lj3JdoZOYg4BQ3v58zwWMQSdGVLi7Yj4PaAY9SXE6iJWf67SiZDgEnXJBQ&X-Amz-Signature=af01599606065f03802524bbbae4008b36ab4f208359ac967992db661da9ec72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4ZXLTF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGxTcJ0FEjkInz0OOO0RWS6xZrxaTCSlyFcjrf3plgJ7AiAtauTp1qbW1n5K8uStFSokt7CFv1TeZ5J18jYGzbTRgir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMwo0fhdRolbWunJpJKtwDprNSZby70b4dfK6P6PeGueIkn54H37GAcfoU78DPuzFhwJoiVSRFAlLOlbr2870vsQ4YTNgKR4AcZNWwjwi4nKj0HJtzpreiKvitUN9c6OngvS0BO6syRyBSiRQp7rwX9LWyzZe4nMiiGRtyKWGB9AJeohW%2FLegUfFyjZPKAjMBEuLCd9DpjfEvut30gBqQkDI7LFnvQOHbJrRdaLFtOdUzdiYoLb5ezO4Y3sNUS35ZmgOAeePlEaEXq29jUZErJmhnYZZ%2FbgfvO04w%2F9ge3T7AsW1nJiyaAQJPZKhkG4UmxJ8rcyL8DKd2X4LiOX9RomZPJhjNCNuwYjFN4%2F2N7xV0QERJifmBqzWeFPkpmiCP9CWNxEATQ%2F0oxOGQ1z5TbbB8tRNEasTgd5Yq1SvPGl5s48poMLBN52IkUDyFfh4XHxQpi9LXBEznScgXuH3fKTmrTf7LeJe8O56KUVy3uAfPRDe8%2FoT8UZTlsmXO9rIZ9NgK2qn8e942qC6lJOY2%2FQmJ5X%2BQebaz3hH8Jxhh1NjkaJx%2BrMHIMNTJP3X9ElwKCjvhwrLaibkUrHV19MzgJecxSspS2MwFXgwcJFTMSbsWNZ39fXsnLEdD7mXD%2BJmQjfR7PVZuN0pkcfe4wz42iwwY6pgHpC3RqDyEPlubkXhjW2LG7i9aTMwG06fAs10PqQL6%2BDErSeGbCyaLR%2Fopy3wXGFf6d3fopFxtCbL3wtu8hEhwUpZYZa54%2BOGVxHCHjNpPIT8H997neysmqozZi5WIiJtWOvPIXtua2JlMN7hENDnnDtpJAgc%2Ft%2BvGOL8Lj3JdoZOYg4BQ3v58zwWMQSdGVLi7Yj4PaAY9SXE6iJWf67SiZDgEnXJBQ&X-Amz-Signature=ac1e807afad44dc47eea5fca784251711f19fafb7c2a0bb95cc2d94dec1e7cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
