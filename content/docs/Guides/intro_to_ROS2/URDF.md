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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3KRFFQ%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC5LrCsYcPZBHQ5qqx3NOCdGNKcXFpKJOLKfv1Pzl7iygIhAKbycSuRWR8ALkrOEIZ9JWJ8AjG6tRF5QHrOacksKoVtKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoKdU9aaMXXI6z9N0q3APx3N2lG%2FB7NzeMNAdUzH2gChCeR0m6VaIQCC51xq4Jg5eLhW3ZZDkSShpK%2BkyVTt1WN7jDXqzI2KCVpo%2F52Vt%2FFNSTpPuQuOyU2bgiOfraB74Teu2B5Z5HzUQ9SAmpSzrN7ucC3KVRQonkHoF8xghMfon4QeorCklVgHtLrVHgMQYhMOQ7xGtXYbbUGXr2kaFWP62R1Rr0zD5CRFkBun8tsYvBf22oJW%2FzUm%2BAQd%2FJiohtj2BuL1UWBCaf0PZ%2FvzFlzQnq8q6QZIEZkq7uOA15ro4sQOXKZCPsY5opo4WCrIXPjvvJ98l0FRosygq7i70ztlBdA35F8L5NXoMGWwdD5ucuq9IzkRzdR7EaYv8KO8m9sJVlBaDskrL3TVu7pIy2DEaNMhF1PdvQjE%2FLPA0H%2FVMkKOs2Niix2KDOBE%2FeTVWUDGWuDdypiFEG%2B6A5sASwLU9yT2sc1Zb4UbV7pWjZdkyZU049nppXrEAJyyBHl49ytc427bEhu9%2B%2BnlzY3ndzX188cuacZBUnwQx26ujmOQpaJ%2FOPSgkMLKNnsjpKAskOOoPgIB4MBq3UjKs8kSE0X4sEEV1mNcex3St3ntnb26kKFg8m49vkFyvSrogJZTrUnp4CeUdQh%2FM5BjCt063JBjqkAaSyIpWQ47edLLeAUTqg8FwyZwPIMP2m9RsDnTFrQkgKzzTc2z8EG3OhBj8DVd2CfWK8iiebznIyt%2Bi2PuO66wQ95N%2FcnuylF5va%2FR8T34XBCCPtLHDPzI2eUsKpBtP0UxDk1BkNUpfrj34Q6dewqpx2vQQtrZTETMOL6W1aUKOXkVRByQYFwfrOGSBDAtFh3VBRb%2By7%2FBlIjX%2B7fGzv5wAB74A%2F&X-Amz-Signature=9ae112768102ae8585f54abe05dc4152d074a99ad83abf90ff40ae5b47b0c881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3KRFFQ%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC5LrCsYcPZBHQ5qqx3NOCdGNKcXFpKJOLKfv1Pzl7iygIhAKbycSuRWR8ALkrOEIZ9JWJ8AjG6tRF5QHrOacksKoVtKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoKdU9aaMXXI6z9N0q3APx3N2lG%2FB7NzeMNAdUzH2gChCeR0m6VaIQCC51xq4Jg5eLhW3ZZDkSShpK%2BkyVTt1WN7jDXqzI2KCVpo%2F52Vt%2FFNSTpPuQuOyU2bgiOfraB74Teu2B5Z5HzUQ9SAmpSzrN7ucC3KVRQonkHoF8xghMfon4QeorCklVgHtLrVHgMQYhMOQ7xGtXYbbUGXr2kaFWP62R1Rr0zD5CRFkBun8tsYvBf22oJW%2FzUm%2BAQd%2FJiohtj2BuL1UWBCaf0PZ%2FvzFlzQnq8q6QZIEZkq7uOA15ro4sQOXKZCPsY5opo4WCrIXPjvvJ98l0FRosygq7i70ztlBdA35F8L5NXoMGWwdD5ucuq9IzkRzdR7EaYv8KO8m9sJVlBaDskrL3TVu7pIy2DEaNMhF1PdvQjE%2FLPA0H%2FVMkKOs2Niix2KDOBE%2FeTVWUDGWuDdypiFEG%2B6A5sASwLU9yT2sc1Zb4UbV7pWjZdkyZU049nppXrEAJyyBHl49ytc427bEhu9%2B%2BnlzY3ndzX188cuacZBUnwQx26ujmOQpaJ%2FOPSgkMLKNnsjpKAskOOoPgIB4MBq3UjKs8kSE0X4sEEV1mNcex3St3ntnb26kKFg8m49vkFyvSrogJZTrUnp4CeUdQh%2FM5BjCt063JBjqkAaSyIpWQ47edLLeAUTqg8FwyZwPIMP2m9RsDnTFrQkgKzzTc2z8EG3OhBj8DVd2CfWK8iiebznIyt%2Bi2PuO66wQ95N%2FcnuylF5va%2FR8T34XBCCPtLHDPzI2eUsKpBtP0UxDk1BkNUpfrj34Q6dewqpx2vQQtrZTETMOL6W1aUKOXkVRByQYFwfrOGSBDAtFh3VBRb%2By7%2FBlIjX%2B7fGzv5wAB74A%2F&X-Amz-Signature=defa28199047d2d46dddcd3d356b3a9893fb9eebef2c7ef3de7678e29188ff05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
