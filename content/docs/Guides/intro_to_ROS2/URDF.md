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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIC2HSU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDAVrD53xx8P61ICXneAbJocJrx0ZtOvjf07985CGgkLAIhAPjMA5Qa%2F9MCjRyRu5dpCCBlcQR%2FBrdyVB%2Fv823bsLrCKv8DCH0QABoMNjM3NDIzMTgzODA1IgwumgBa0ybTcgOzj0Iq3AOOVTKqrd31p3uYL0qMB40FeDW%2BZNI2yiFhoPgjqBgoWKYh4tUZ4Rldz1yly2uGtOncp3NXqVTOA0hWnkOMP%2B2QlYlrD4i52bKzK%2F4UHiwnDDkJmwXrT7CLyUILy9P4ifcIuTIXRDFQkRgoAM8FtN%2FmBz7XrCjQXhtvflfjeMFJCHhvY9V21JJf2%2FX9CFZHoAM47viON%2BaHSCk4TQL576WNK8Oj%2FrIiX4fmhTYzGEAB33z0%2FTXgg67oPkI20p23%2FWRNd7vMTfRVsNJUezgB4AGsRh7GQ%2FRoVRyQipIyy8TGlF%2Fqe2rKFPoVroWnxWtFMPWKW47ycSwSFYvUFM2XIQGoYkPQu8v6Cqst05XI81Wh2QVk58WEIQ8zEkWpWZ%2FvDanPhF2p0wPvvLjyO9rqRegU7km0Bd38ok2P99QbBXGb0q8snkL7nTeDErQ0Gs7GayHHlCWVQDxxTjxT9%2Fw67O1JeDpuJLOHpQFSsuxhYpXKIqYM7rcfCpaH6p2oLlKpvhhh9WWKf0WEulayO0LVSAFCO9XcZPYMA6SRUOk%2B3gyMYJ13Z4LsStWQTNOM8vCxxSfOxLPGrV20FCF7YHlBp9wOEUNvWDb2ea%2Bre2nV0vYAAxXwonySI%2FhXI03fVDD%2F6s7EBjqkAd0NUSQBD01kHwMT8%2Fu7cKuO86XkgnK3mNyQHOX9ZwJ2SAirGnCfO4jfqOc5DoicjF9pbgM4PDcHVe26eS%2BsXr0vSWUHZRvVK8FOcqxaHcD96pPHF9iv29kEKKt5GTM%2Blvt%2FhyKwEhobznfNnx1%2F6fiYwkZkNeInAYEXPMQILVx99vn%2BtvnUshE535nkW9Hwg8%2FKAYbNfcaqQH4LEs%2FfHJP03A9q&X-Amz-Signature=6b0dc7c0a0a045f42fc1b787e23a496ef0ca569fa142bc5e4f01be1915c08486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIC2HSU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDAVrD53xx8P61ICXneAbJocJrx0ZtOvjf07985CGgkLAIhAPjMA5Qa%2F9MCjRyRu5dpCCBlcQR%2FBrdyVB%2Fv823bsLrCKv8DCH0QABoMNjM3NDIzMTgzODA1IgwumgBa0ybTcgOzj0Iq3AOOVTKqrd31p3uYL0qMB40FeDW%2BZNI2yiFhoPgjqBgoWKYh4tUZ4Rldz1yly2uGtOncp3NXqVTOA0hWnkOMP%2B2QlYlrD4i52bKzK%2F4UHiwnDDkJmwXrT7CLyUILy9P4ifcIuTIXRDFQkRgoAM8FtN%2FmBz7XrCjQXhtvflfjeMFJCHhvY9V21JJf2%2FX9CFZHoAM47viON%2BaHSCk4TQL576WNK8Oj%2FrIiX4fmhTYzGEAB33z0%2FTXgg67oPkI20p23%2FWRNd7vMTfRVsNJUezgB4AGsRh7GQ%2FRoVRyQipIyy8TGlF%2Fqe2rKFPoVroWnxWtFMPWKW47ycSwSFYvUFM2XIQGoYkPQu8v6Cqst05XI81Wh2QVk58WEIQ8zEkWpWZ%2FvDanPhF2p0wPvvLjyO9rqRegU7km0Bd38ok2P99QbBXGb0q8snkL7nTeDErQ0Gs7GayHHlCWVQDxxTjxT9%2Fw67O1JeDpuJLOHpQFSsuxhYpXKIqYM7rcfCpaH6p2oLlKpvhhh9WWKf0WEulayO0LVSAFCO9XcZPYMA6SRUOk%2B3gyMYJ13Z4LsStWQTNOM8vCxxSfOxLPGrV20FCF7YHlBp9wOEUNvWDb2ea%2Bre2nV0vYAAxXwonySI%2FhXI03fVDD%2F6s7EBjqkAd0NUSQBD01kHwMT8%2Fu7cKuO86XkgnK3mNyQHOX9ZwJ2SAirGnCfO4jfqOc5DoicjF9pbgM4PDcHVe26eS%2BsXr0vSWUHZRvVK8FOcqxaHcD96pPHF9iv29kEKKt5GTM%2Blvt%2FhyKwEhobznfNnx1%2F6fiYwkZkNeInAYEXPMQILVx99vn%2BtvnUshE535nkW9Hwg8%2FKAYbNfcaqQH4LEs%2FfHJP03A9q&X-Amz-Signature=97054c2796b33aaff5dab9d8406530e69c3a478be11a08d8613005f1ceb42d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
