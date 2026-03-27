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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KIY6Q3%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCYTOOejsz%2BkROVIOg7BlaUNQQTBuim%2FFrldXmDjHFr7gIgfiYa9Jk8%2Bm3FL8jLE0GXdY1vmdoe4BEcNXo4aZvF0kAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnfMyNXkXnRGFZTUCrcA9m2XzWcs0mxM6qOgasR85vZp9k8ycLkrt922p%2Bl6Lmp5qvcIYhObiAHL6tTO%2FBG8z86xTasIPgrnwOSyupHn8SSma0h038SiXqkNaD%2F2WYyyXztgRFxFXzcVMAiEAKeWnMjH5aFDy3krt%2Bgx0DoG9ytCrIpTWxz23LjLTFpSCSbYuv5pqqTiIO616sv8qTgaTpjppTGnO1hK%2FRy7rfhqF%2FIFJ9RdQ8gEgYlYBRPVlU5xBukpSszUfUWlHKNaKO7ewIFEY2hp3SimJRa3wg5A%2FB9pBlHDQoW%2F1sDLjPC5gVND%2F9GngU76ibWCDQdobp7hQf2Un2FtAqBsX7twXOPJ9RAsgUNqX08j0pDL1GHm%2BhDYfn%2BttcPw5rG00q%2FeK8A8tL3jChF%2BoW0F6AWRGw9iUVjmTkmwPO4%2FcfyxkdPtZhOyP1oewkudN1NKZ32Xx8aNEyKGM2ppuCB5ZIBVaY55OMBPfhS6vEKUS1K5QltlRqyXTdB9l8Lwobq7CxXKvy2khu1dtUK%2FeZtg2oIgpR%2F0pngB1fkzhmDSgWai54Dh4MQCDvVLFqG%2BSVYRYvWdw2Mkv6wIEqn7ix7SjFcZHS98N6ywvTfZ9NiIw37cfWECmBkVFiUvouIZ9671Tk6MIftls4GOqUBKZXxYeIVZ53lPNeoBix1EPSy2e36%2BSb4fXXV86Ht0hED7jrIqevu%2BuL9PvRXIQKnoBeH836KMKrqcJpXS6yzkG17gP7qzDd5TXBmm%2BoWnrxAKmEgBKTdP%2FDwp9UEWkHlq1I0J1e0ZZOGLipMsLvAk9tybsI%2BhhAb02rDDZ3MuvP3D%2Bny619CfIrasQoqPrhNxjI8Ie3FH4RChlgo6uIZ7nuFz7Vs&X-Amz-Signature=f22b9150c67086e90a394a284aeddcb645769fcfd827b72fc7e76fb32c023669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KIY6Q3%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCYTOOejsz%2BkROVIOg7BlaUNQQTBuim%2FFrldXmDjHFr7gIgfiYa9Jk8%2Bm3FL8jLE0GXdY1vmdoe4BEcNXo4aZvF0kAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnfMyNXkXnRGFZTUCrcA9m2XzWcs0mxM6qOgasR85vZp9k8ycLkrt922p%2Bl6Lmp5qvcIYhObiAHL6tTO%2FBG8z86xTasIPgrnwOSyupHn8SSma0h038SiXqkNaD%2F2WYyyXztgRFxFXzcVMAiEAKeWnMjH5aFDy3krt%2Bgx0DoG9ytCrIpTWxz23LjLTFpSCSbYuv5pqqTiIO616sv8qTgaTpjppTGnO1hK%2FRy7rfhqF%2FIFJ9RdQ8gEgYlYBRPVlU5xBukpSszUfUWlHKNaKO7ewIFEY2hp3SimJRa3wg5A%2FB9pBlHDQoW%2F1sDLjPC5gVND%2F9GngU76ibWCDQdobp7hQf2Un2FtAqBsX7twXOPJ9RAsgUNqX08j0pDL1GHm%2BhDYfn%2BttcPw5rG00q%2FeK8A8tL3jChF%2BoW0F6AWRGw9iUVjmTkmwPO4%2FcfyxkdPtZhOyP1oewkudN1NKZ32Xx8aNEyKGM2ppuCB5ZIBVaY55OMBPfhS6vEKUS1K5QltlRqyXTdB9l8Lwobq7CxXKvy2khu1dtUK%2FeZtg2oIgpR%2F0pngB1fkzhmDSgWai54Dh4MQCDvVLFqG%2BSVYRYvWdw2Mkv6wIEqn7ix7SjFcZHS98N6ywvTfZ9NiIw37cfWECmBkVFiUvouIZ9671Tk6MIftls4GOqUBKZXxYeIVZ53lPNeoBix1EPSy2e36%2BSb4fXXV86Ht0hED7jrIqevu%2BuL9PvRXIQKnoBeH836KMKrqcJpXS6yzkG17gP7qzDd5TXBmm%2BoWnrxAKmEgBKTdP%2FDwp9UEWkHlq1I0J1e0ZZOGLipMsLvAk9tybsI%2BhhAb02rDDZ3MuvP3D%2Bny619CfIrasQoqPrhNxjI8Ie3FH4RChlgo6uIZ7nuFz7Vs&X-Amz-Signature=d8128f94aa712faca4a9d6260ca95c606434ecd005ca3e49c252c93148850b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
