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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YCB4PW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFONP%2BWJiUUscVjbRO3basMTUR1CrwZeTs8zGacl%2FjAiAbXLDO5OuuqO%2FDeTvy%2FWBQuOrCK%2FQcE9oQYVqkK75ZgSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMCWNiFmKO7%2F9H7qABKtwDAPV9ueKJTcS029N1sNTGe9yVOb6V6D236PpBtWKoHqSprZluMf0tQvV45v6KIM0KpJOyz9cJB0e4itntViwHaQ%2Fg4rrqK%2BwbyloIor1lmktmc%2BpU2PO1W5zjM3D14RzQZpMqZHnV67jozQAzKI9F57MQgxHVm4MWmPMMKHcojnirltPeQZCraZw5eFdXHZd7zqsXnOr6l2jMvjdmEJoHm763B62B1rSlBnyyOp17s9%2BEQyyYLTL9YZRdnkyyKNJrKkQCZsbAnEOV6gLRBqE61RJsrFIthR0hYw6nmtdoDVfoo%2F4o7in5AZ7ZMc%2BWdN6hAAtzKrh6B%2Bw6YO9B5IibUJca2iXKE%2FlFJujuJ%2BUsJXzVJmPec3wNhHx5zW9ASbIt8o2UrWjigkk%2Berw%2B%2BthxBnJqqwxXA8TuLNcnRtVPOpXL8UMDSPcx9x6J%2FxnBReNH6FdViLQtITZxZiFQc41Ewig14BuE3eLSVbY%2FQxVKtHhkvoW%2FqVUmmw92Y45b1dExn9SgJXgzpPl6waRRqC60%2F%2BcgqbxdJK0dAwGnnrUKXCYjyUVX%2FfRUzHKhOEVE%2Fo5XyX478fGA25hHh9Ae6T0P0oKNqkaBNISf%2FlVx%2FoI3vDH%2B9bYexSDZBUh44qwwhaDzxAY6pgF73Z6aYUuPJpQNqvWG0uewblen46Trd%2FeHehcA9msEFJNirzk2KzJpmDQLNDHUn7mCS%2FU18GowA%2B39p%2FjX7tTBq6bzusG7XBoHMunZ0WcpXlg%2Bsu9DwcBdz9EL%2Fg5%2FtLWmjoxA%2FmyVyHUYgVer3shyMIdtp18gPb7K%2BhroeZkLJwj8%2Ba3jNDIoj8guymaM0iMItOwurIxeLgK%2F7XT73jE1QdDRHA4H&X-Amz-Signature=5d20cc585c473b22a7bc574dd4350374700d10cf2f53ec1e140d7fa7c0a542b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YCB4PW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChFONP%2BWJiUUscVjbRO3basMTUR1CrwZeTs8zGacl%2FjAiAbXLDO5OuuqO%2FDeTvy%2FWBQuOrCK%2FQcE9oQYVqkK75ZgSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMCWNiFmKO7%2F9H7qABKtwDAPV9ueKJTcS029N1sNTGe9yVOb6V6D236PpBtWKoHqSprZluMf0tQvV45v6KIM0KpJOyz9cJB0e4itntViwHaQ%2Fg4rrqK%2BwbyloIor1lmktmc%2BpU2PO1W5zjM3D14RzQZpMqZHnV67jozQAzKI9F57MQgxHVm4MWmPMMKHcojnirltPeQZCraZw5eFdXHZd7zqsXnOr6l2jMvjdmEJoHm763B62B1rSlBnyyOp17s9%2BEQyyYLTL9YZRdnkyyKNJrKkQCZsbAnEOV6gLRBqE61RJsrFIthR0hYw6nmtdoDVfoo%2F4o7in5AZ7ZMc%2BWdN6hAAtzKrh6B%2Bw6YO9B5IibUJca2iXKE%2FlFJujuJ%2BUsJXzVJmPec3wNhHx5zW9ASbIt8o2UrWjigkk%2Berw%2B%2BthxBnJqqwxXA8TuLNcnRtVPOpXL8UMDSPcx9x6J%2FxnBReNH6FdViLQtITZxZiFQc41Ewig14BuE3eLSVbY%2FQxVKtHhkvoW%2FqVUmmw92Y45b1dExn9SgJXgzpPl6waRRqC60%2F%2BcgqbxdJK0dAwGnnrUKXCYjyUVX%2FfRUzHKhOEVE%2Fo5XyX478fGA25hHh9Ae6T0P0oKNqkaBNISf%2FlVx%2FoI3vDH%2B9bYexSDZBUh44qwwhaDzxAY6pgF73Z6aYUuPJpQNqvWG0uewblen46Trd%2FeHehcA9msEFJNirzk2KzJpmDQLNDHUn7mCS%2FU18GowA%2B39p%2FjX7tTBq6bzusG7XBoHMunZ0WcpXlg%2Bsu9DwcBdz9EL%2Fg5%2FtLWmjoxA%2FmyVyHUYgVer3shyMIdtp18gPb7K%2BhroeZkLJwj8%2Ba3jNDIoj8guymaM0iMItOwurIxeLgK%2F7XT73jE1QdDRHA4H&X-Amz-Signature=4c2cfebb58d301463790d568cf9d69c7bf020de41b503ddb639f2ac3434da313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
