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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXXVWKD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5H8PmEasZoSEL1Q0ZhTtUHtSNH03QIm%2F3LyNVn6TKvAiBSDjj4ExRXJ1nHk0pkLJVt2syMAQsJwv31PkAsZN9U4iqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML35PNeAFYJI%2BCJMUKtwDNAmtEeX79Ip8rSbV6XzJJI%2Bi%2FDD2fZFOo9BtPqQ7vOEF2Ksry8qTXtN8lZWLsuDHJaOTjd%2FOHcDqpKU0913G0ewhOQAj9SAmF3SifZNDwjsRRKCwa8JaMI6leAru6JWwAT1p02rhOrThhpto4L1iJ%2BKDG2NPxI%2BOLWGcEZN1b82k0SmDhB7gpyNHU13V2iwXDlkAyQIZWL9YVAhF9kExTNdbsgv8eqk1eJnyXeeI%2F3MVhZNS%2FRg%2BFFrhfoY4X7PXRvF5tAjsvSIrJouVEQktCQkDQ6XE5%2BKfjdDdy99TSLlB%2F7K9XFBdQfFBZv6dmEZALSrPOZRk%2BZcEarzfwU2Oige84aEOzGIWp8oZCAc1oF6jnd2%2F9AES8fsTQQSqZ%2Fe14QTuR8kANLs5FGRAzvqI8xJX24D7tSbFCg37xjyf6lT0IcV1D09qGit1Xu%2FGIFEWHXLrFmgWvVSWPvyE30o0dD8eQ6%2FMpo6aGOB1ib6bZP9m4zAYqAGSvJ9Jr0DwyrqIKaTP4M%2BbHAQG77NbRkvwmTwtrJzz%2FZeww9ARbaZuJxN0WKrGm6uZPJB3FCc1MxTC3Zjy9rwca%2BsV93Jo4hgPBDDhvzH8s4axWzZhoFRD8DLfJHMfk1zScnJdMCgwhve1xAY6pgH%2FkUEjfZYUEcVWxGOL%2FXlBclef5LsVkioDgL%2FQ2QcYudKsW%2Fl9f0SRvYIkTGSxsFFfMUIUoehTvT79Q5rQRNUD%2BQW6OLQgswihhpCRHRmMLJJXNELlHNFBgPZahM3MJdPyNRNns3WXpXBhbP9T4e0%2BGBSXKl3ZXRJ8OuD8yV78PlyATS%2B3HkMflon9cFbSzoE0GFyvb2p2VLubk3DpmgQrIZBmaBlu&X-Amz-Signature=65e18eebbd0e9446caf56582d41a05ea9436e817165640c412a73aa9a7108217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXXVWKD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5H8PmEasZoSEL1Q0ZhTtUHtSNH03QIm%2F3LyNVn6TKvAiBSDjj4ExRXJ1nHk0pkLJVt2syMAQsJwv31PkAsZN9U4iqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML35PNeAFYJI%2BCJMUKtwDNAmtEeX79Ip8rSbV6XzJJI%2Bi%2FDD2fZFOo9BtPqQ7vOEF2Ksry8qTXtN8lZWLsuDHJaOTjd%2FOHcDqpKU0913G0ewhOQAj9SAmF3SifZNDwjsRRKCwa8JaMI6leAru6JWwAT1p02rhOrThhpto4L1iJ%2BKDG2NPxI%2BOLWGcEZN1b82k0SmDhB7gpyNHU13V2iwXDlkAyQIZWL9YVAhF9kExTNdbsgv8eqk1eJnyXeeI%2F3MVhZNS%2FRg%2BFFrhfoY4X7PXRvF5tAjsvSIrJouVEQktCQkDQ6XE5%2BKfjdDdy99TSLlB%2F7K9XFBdQfFBZv6dmEZALSrPOZRk%2BZcEarzfwU2Oige84aEOzGIWp8oZCAc1oF6jnd2%2F9AES8fsTQQSqZ%2Fe14QTuR8kANLs5FGRAzvqI8xJX24D7tSbFCg37xjyf6lT0IcV1D09qGit1Xu%2FGIFEWHXLrFmgWvVSWPvyE30o0dD8eQ6%2FMpo6aGOB1ib6bZP9m4zAYqAGSvJ9Jr0DwyrqIKaTP4M%2BbHAQG77NbRkvwmTwtrJzz%2FZeww9ARbaZuJxN0WKrGm6uZPJB3FCc1MxTC3Zjy9rwca%2BsV93Jo4hgPBDDhvzH8s4axWzZhoFRD8DLfJHMfk1zScnJdMCgwhve1xAY6pgH%2FkUEjfZYUEcVWxGOL%2FXlBclef5LsVkioDgL%2FQ2QcYudKsW%2Fl9f0SRvYIkTGSxsFFfMUIUoehTvT79Q5rQRNUD%2BQW6OLQgswihhpCRHRmMLJJXNELlHNFBgPZahM3MJdPyNRNns3WXpXBhbP9T4e0%2BGBSXKl3ZXRJ8OuD8yV78PlyATS%2B3HkMflon9cFbSzoE0GFyvb2p2VLubk3DpmgQrIZBmaBlu&X-Amz-Signature=da286036046af9aaaa42e0cb06e56659382ebab2801c690d0fec262babdc9c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
