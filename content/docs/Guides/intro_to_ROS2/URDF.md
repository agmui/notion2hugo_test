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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5E5PRJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDJzGCFabdmjaV3L6bpjIbRT%2FCxvNHzXcLvEghJeFC0ggIhAJE30ntn2xrvGBCyjHeFQGXtSWOJ9vZ7YX8fQw9x1otcKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpmLb3tm3kBJt5aSwq3AOrn7xGNd6lRoDAOQ7y7iRFZKFi1pc%2B7D05MEya9uFo7SiQ%2BlGt0SC0amPUNWsOLAxRtopHT9Jacq1pEdcj%2FfomyoDzYK78w%2BrLZCwhWOpVEYskZV%2FSlwQKqNxd3ASwBLVX%2BIATEbh3GAXd02FCTyu8j8w3lxj2q2cgyom9FQkbtLcRhw6YK1XuMzVFMLuYxit6bx1oaExdmDKIS4penqURsA46zs6rgjk7sonqZogdqTC%2BoUg2S3LVClXae%2F9F9fDD2KKyNtcZiNeb53ALnyj5YLaRoAU7tfSXqATOU6iygAtg5Sw%2FBxCrfASv8l7%2B%2FD3qQG2G8nBtIx7CwBABXuFurAejhWjdMYj7JUl1aucAXZfH%2FaUutF%2FQXfPMjuesL7yjMs9FW4BY9s29p2YH1W7lzuHaXLtRUInCr0nWMOLCzqpXuTJHPPNK%2ByzOm36zzz1E0BwRISktG%2B3%2Fjhxk3ZcYsBCvdCiz3OAxWHLKeR79dzwr%2F6RQy3FntNV%2FOV3%2Bhu3Uv2i0h%2BU6KRVgM%2B1kJ0EnouALe54KelGQ2%2Foh2OzG33yy2X8YIrLwaBwpUAdUo2VcaUsLqpXcHSCei6RuvJ6t6j4XaPHs5Im0w%2FtxBb03kknq1ML1SR8jkDvKMDC69Y3BBjqkAcPe9viU95SHMU1e92op7wMhTeoiGM5MwdoyP2EzFsV9TRAQbbNddQZUb%2FHK7LLoAJ3Z6oHQCA4locragdWjI209eus%2B%2FhAFcdqyoiVlK5bJd2WZn8Ek8cKN5EdHOuFjMTKVxxFPiw1Vwk3FHkAuTPc9tSAMsvIkjNHzKAu7OP0ZtTEzpfJyp4U7f4Z4iGHTj2wYKjztD5fUZMZArfuSbflwYkEI&X-Amz-Signature=ecb29179c4ee46b6e65e918528c70ba292abf12360aa72f65cb3c79169bdfea8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5E5PRJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDJzGCFabdmjaV3L6bpjIbRT%2FCxvNHzXcLvEghJeFC0ggIhAJE30ntn2xrvGBCyjHeFQGXtSWOJ9vZ7YX8fQw9x1otcKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpmLb3tm3kBJt5aSwq3AOrn7xGNd6lRoDAOQ7y7iRFZKFi1pc%2B7D05MEya9uFo7SiQ%2BlGt0SC0amPUNWsOLAxRtopHT9Jacq1pEdcj%2FfomyoDzYK78w%2BrLZCwhWOpVEYskZV%2FSlwQKqNxd3ASwBLVX%2BIATEbh3GAXd02FCTyu8j8w3lxj2q2cgyom9FQkbtLcRhw6YK1XuMzVFMLuYxit6bx1oaExdmDKIS4penqURsA46zs6rgjk7sonqZogdqTC%2BoUg2S3LVClXae%2F9F9fDD2KKyNtcZiNeb53ALnyj5YLaRoAU7tfSXqATOU6iygAtg5Sw%2FBxCrfASv8l7%2B%2FD3qQG2G8nBtIx7CwBABXuFurAejhWjdMYj7JUl1aucAXZfH%2FaUutF%2FQXfPMjuesL7yjMs9FW4BY9s29p2YH1W7lzuHaXLtRUInCr0nWMOLCzqpXuTJHPPNK%2ByzOm36zzz1E0BwRISktG%2B3%2Fjhxk3ZcYsBCvdCiz3OAxWHLKeR79dzwr%2F6RQy3FntNV%2FOV3%2Bhu3Uv2i0h%2BU6KRVgM%2B1kJ0EnouALe54KelGQ2%2Foh2OzG33yy2X8YIrLwaBwpUAdUo2VcaUsLqpXcHSCei6RuvJ6t6j4XaPHs5Im0w%2FtxBb03kknq1ML1SR8jkDvKMDC69Y3BBjqkAcPe9viU95SHMU1e92op7wMhTeoiGM5MwdoyP2EzFsV9TRAQbbNddQZUb%2FHK7LLoAJ3Z6oHQCA4locragdWjI209eus%2B%2FhAFcdqyoiVlK5bJd2WZn8Ek8cKN5EdHOuFjMTKVxxFPiw1Vwk3FHkAuTPc9tSAMsvIkjNHzKAu7OP0ZtTEzpfJyp4U7f4Z4iGHTj2wYKjztD5fUZMZArfuSbflwYkEI&X-Amz-Signature=48cfd4deebe06bbeae003ced2b49cd25060399dca71c420ca99c1af700afb421&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
