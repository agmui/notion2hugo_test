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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVPVBCF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeZyBWWuFpB2VEVmfhvlv%2FMzs5M%2B%2FJ9FAOAiz02G5akAiEAw84MNODvyBuO%2BZ8Q9jbOZFKqNVOpAVibGP%2Bz9oKy4EMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkLIxq1q4FP5NZvCCrcA3OdF%2BCxnmO%2FeMZSynIGtV%2FUS0LIwRkEpa%2FVoQhAeFmoZvgj4cYHuRNRcOhuQiTfAk9KWBO1kdHCRTnUiN12LSuZ5wxTwozPP6k%2BlQLkEoaeVvEJHZcMbszfz6ytcIJKx9LjwWNuiX2rZuppxQeqVHA6OcdYgjsCU1kRYC1iiYlf6jd18kMB5IAWlVZT3vE5LEYplDg7FDkzDXR4u8uwZ6MNUus1iRjJn5zzMuYyYJBfoMwOUP4ybVWdkVvcCUy0qKBNJHVRB6OHvtsnZJmnVDkbs%2B0Asazd7%2Biye2L%2FGHWD3U7VL8gLKY%2BF1nqSPY5%2BwwFHyTjlE5GzEHMCgvlJHoymFZk2AjtSzBslSmaIWBjq7W3eq%2FQS83d4n%2B7hzNAKUIpMPUa7fKXGbvHGhqli6aeH6e7dX3tdKyBWhcNwEvHH6QJyeD4vfgOcF09gdf57B2bXH8jpE6B0%2F7yXfyNGpGtJra7bPsMTFvraQR0cJnQxWCGp17gDTj0drWcKz27YamoSHoh%2FtzUd9JRDgFBEPwwFKCFpKuYb%2FbTPeBInVMjBes2Wv5c6cUyY2VotK0IeT833FlkPJ%2FNJbkKoYAp%2FQMmFc5QFo0DdectSV3ZwD86evh5v%2F9gzZrk%2Bk8ENMNCggtIGOqUBcZ244RBTe1mfJ3v5CyOKYhm0pmoyebMVb9SwcutDeQUZrrC6%2B6LchWLiWKTP61BxIvyIxdpv8wSFAharGy2pY6LF0F9nXaXLPiEQE5h9kLC5shJ%2B6hULOY5nwTZSZ%2Fjpj6dtDoeOBN4h1Ng24f169lqXmVCchfTDyEp0RYMNs4nzoj%2Bs%2BF0Nyln2D24dNbDl%2B8wcHGM0FzO5enbS6DDAsiRomwPc&X-Amz-Signature=e7b66d04fef5999b64782a4f5e7c3e5d69821f2dcdb81fe589e4540cdee33c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVPVBCF%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeZyBWWuFpB2VEVmfhvlv%2FMzs5M%2B%2FJ9FAOAiz02G5akAiEAw84MNODvyBuO%2BZ8Q9jbOZFKqNVOpAVibGP%2Bz9oKy4EMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkLIxq1q4FP5NZvCCrcA3OdF%2BCxnmO%2FeMZSynIGtV%2FUS0LIwRkEpa%2FVoQhAeFmoZvgj4cYHuRNRcOhuQiTfAk9KWBO1kdHCRTnUiN12LSuZ5wxTwozPP6k%2BlQLkEoaeVvEJHZcMbszfz6ytcIJKx9LjwWNuiX2rZuppxQeqVHA6OcdYgjsCU1kRYC1iiYlf6jd18kMB5IAWlVZT3vE5LEYplDg7FDkzDXR4u8uwZ6MNUus1iRjJn5zzMuYyYJBfoMwOUP4ybVWdkVvcCUy0qKBNJHVRB6OHvtsnZJmnVDkbs%2B0Asazd7%2Biye2L%2FGHWD3U7VL8gLKY%2BF1nqSPY5%2BwwFHyTjlE5GzEHMCgvlJHoymFZk2AjtSzBslSmaIWBjq7W3eq%2FQS83d4n%2B7hzNAKUIpMPUa7fKXGbvHGhqli6aeH6e7dX3tdKyBWhcNwEvHH6QJyeD4vfgOcF09gdf57B2bXH8jpE6B0%2F7yXfyNGpGtJra7bPsMTFvraQR0cJnQxWCGp17gDTj0drWcKz27YamoSHoh%2FtzUd9JRDgFBEPwwFKCFpKuYb%2FbTPeBInVMjBes2Wv5c6cUyY2VotK0IeT833FlkPJ%2FNJbkKoYAp%2FQMmFc5QFo0DdectSV3ZwD86evh5v%2F9gzZrk%2Bk8ENMNCggtIGOqUBcZ244RBTe1mfJ3v5CyOKYhm0pmoyebMVb9SwcutDeQUZrrC6%2B6LchWLiWKTP61BxIvyIxdpv8wSFAharGy2pY6LF0F9nXaXLPiEQE5h9kLC5shJ%2B6hULOY5nwTZSZ%2Fjpj6dtDoeOBN4h1Ng24f169lqXmVCchfTDyEp0RYMNs4nzoj%2Bs%2BF0Nyln2D24dNbDl%2B8wcHGM0FzO5enbS6DDAsiRomwPc&X-Amz-Signature=790ed27326e284c62ddfb19c3882be5d2952b9edfea9cd3f3e6654de10dc552f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
