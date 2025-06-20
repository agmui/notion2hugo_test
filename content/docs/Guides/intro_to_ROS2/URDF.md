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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4CRHB7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsIrFWCUVEjL3khyrzypRTfzMoY7Ouozulj6HWvDpLvAiBCLtbj6vLO0cCAh41EgTXmv2WEAWi2J%2FoYHM2v5OEj5SqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhIJnL%2FJ4PKnjPabKtwDOXkZWpOnGr7JB%2BxMH3Sw8SxQemdrJFvnkItnP5Ey1wtlBxKNX4hDocorbBgQcf6QGshOklLTRX1A7fOn%2BOxaDYYiIodAuBvaJunC87OncrOlWLGxjfswK0cQm9xUADose3J9W3AQT3%2BcumQ31qfeeiZkPDQHpRxCM4v78JMQHhg8jd7xlLbJR%2B3K%2FsxqbpvPEGD1arYELaGDzcwiPgmswKptFs9npobjwu%2BZnM1kXg%2FFbPHIWdDgVLC6hsQK2%2BmC1oGTKSxuBEwwcg86S6T5dNf8LoBWAXVSea%2FDxyvqyDdEtzOR6LZpd6gwynATJDmv9OBcAv75Y3uBVFG%2Fn0AEaU%2FBoAGbm6oEbNx36lIZ0eCjnC0aeFkS9%2Bie12QsObgPRpZGSRrKr%2BsqdWfzWWYYkwQOfYjv5rr2pq2eWSUVzAsu1eJfcU43CsRsns%2F6WZjW4iotJEw5L0CkPMbUn6Wv1W%2F77R3jmNIJyfwh05773mxpcVaUr%2F9TCMZLgKcypyJCby0FSfIGvAZbXBxQax%2F5nK9h%2FeuOlPpfMMyXBvlYEigQy09%2BtBISqYTvq2GojTHKvaHYR4LP%2FAPo8aPUZAL2JaTaPKh94QSJAVtI%2FyGdrCrJUgnfOgVLidVnMi4w9fHVwgY6pgGPsLiSEFpj9w7jM97HvBXHN6TVl3DBuwMnF273FdzmrhuaAROhIeJqV9tGvA0vX2vj4fiIG4Zhyy8Cv89FKLWc66yXOkYCOOe2RNxyl4le1gpOUhEi0Ub7uQPyTFz5dxL3lBOD%2FwgZAnsruYkZwCu1qfGPlDMHajRqtbYlGWgb8hEpAdOXhY88xxiq42s8C%2FdINmOzTBNjyVmvEWl6S2CdIYVMTtAU&X-Amz-Signature=d171f8698addda72423b81ff91f1a4ed9269bd5ce0999656e04a76abb1f91916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4CRHB7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsIrFWCUVEjL3khyrzypRTfzMoY7Ouozulj6HWvDpLvAiBCLtbj6vLO0cCAh41EgTXmv2WEAWi2J%2FoYHM2v5OEj5SqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhIJnL%2FJ4PKnjPabKtwDOXkZWpOnGr7JB%2BxMH3Sw8SxQemdrJFvnkItnP5Ey1wtlBxKNX4hDocorbBgQcf6QGshOklLTRX1A7fOn%2BOxaDYYiIodAuBvaJunC87OncrOlWLGxjfswK0cQm9xUADose3J9W3AQT3%2BcumQ31qfeeiZkPDQHpRxCM4v78JMQHhg8jd7xlLbJR%2B3K%2FsxqbpvPEGD1arYELaGDzcwiPgmswKptFs9npobjwu%2BZnM1kXg%2FFbPHIWdDgVLC6hsQK2%2BmC1oGTKSxuBEwwcg86S6T5dNf8LoBWAXVSea%2FDxyvqyDdEtzOR6LZpd6gwynATJDmv9OBcAv75Y3uBVFG%2Fn0AEaU%2FBoAGbm6oEbNx36lIZ0eCjnC0aeFkS9%2Bie12QsObgPRpZGSRrKr%2BsqdWfzWWYYkwQOfYjv5rr2pq2eWSUVzAsu1eJfcU43CsRsns%2F6WZjW4iotJEw5L0CkPMbUn6Wv1W%2F77R3jmNIJyfwh05773mxpcVaUr%2F9TCMZLgKcypyJCby0FSfIGvAZbXBxQax%2F5nK9h%2FeuOlPpfMMyXBvlYEigQy09%2BtBISqYTvq2GojTHKvaHYR4LP%2FAPo8aPUZAL2JaTaPKh94QSJAVtI%2FyGdrCrJUgnfOgVLidVnMi4w9fHVwgY6pgGPsLiSEFpj9w7jM97HvBXHN6TVl3DBuwMnF273FdzmrhuaAROhIeJqV9tGvA0vX2vj4fiIG4Zhyy8Cv89FKLWc66yXOkYCOOe2RNxyl4le1gpOUhEi0Ub7uQPyTFz5dxL3lBOD%2FwgZAnsruYkZwCu1qfGPlDMHajRqtbYlGWgb8hEpAdOXhY88xxiq42s8C%2FdINmOzTBNjyVmvEWl6S2CdIYVMTtAU&X-Amz-Signature=883b2c0ffdf0a5a1914f0701f5666c557beb02c325e5de0ddbacfa22eaf05a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
