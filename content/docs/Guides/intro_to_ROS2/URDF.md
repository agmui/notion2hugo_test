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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSYHH4A%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCwKFpNt%2FZ4S%2BogF2mJcr%2F1vNJR8VoaRXmK5gcNHDydHQIgExEWun1Csb1YnjmjOKALecBl3TqbYjvWKPnGG8Avil8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHbhDVKpE7stYZp1SrcA%2F03aT8lW%2BqQtT2ilN6EGl40zhjIyzDVbZrzli%2BXJcbjBpWXn8kCN0MWyx2sECavVVHIvuZZmsAdzd%2BvkwsJjns97l%2FABNRrqSWxoKT%2F59tfsf5%2Fn4obFE4OQghLdbIqjbhN7wMeCKPUB0OgSQipgi%2FNwRf9XVJXQ5P%2FWsjfwOZFB%2BieYXBqVC7P6E9p8faWAFud%2FNIrGWTx3LGoRpk2Skv0rk0B91y5GPtMk4xzSDhrU5VQzTcOuFvnQahOIRtXwveyGxoq1Ph%2FfnVUw617WMu7PSHSh3MxJ%2F%2BtA5ywvivfG6Q0%2BN9gerqH2Y6pcDPPWQGTj7nVdZf2TWjgIGfqGfJ1bHqC2fycTIhS15qjM1o8NIlUwxTKkz3TOyJ4Nqz2brYNKxki1MDVl0vHx3KvtcgalGg9nfYQ1OHIaeEDRphxBeVF%2FfJdHbcsgdABLpDViSXQg8MYtjLIl5fIYNM3b6uY8CiQAYaOfnc6QJ6I49ywGwxROxx8m4rOMsou4UjQdsCz717L%2Bu5S6ZFVyKPp%2FEvC8SO%2Bhbaxo%2Bo1Bbh%2FHD8jKowVbKw3YVdm%2Bx59rQEyf%2FHy36VbixzuwLOhOepr7YoAjEKZV%2Fi7%2FkE6wiaFLGN8hMhq0yCa%2BiOk5SKPMIiLncAGOqUBsjq4zXtIMMhTo4EmHfoQD9uwt2u9VVhL%2ByIEd8e9SPIyOD%2FvvvPW%2FYbBX3%2BXKYiYabOOHUntu5rDH3UOqdpY%2Fslr0MCtpvxMx8U6pA3Iy5I1iVRtmWaHKW5mIC2W3kTmdkNyZW7gz%2FURzrAyqnvoDgxGEEly6SBSUPljXmqGKwj7uhpARadck9%2FXaAc7HXTWgnQqBYSNp4X%2BWZ8ILLgswzIwhir0&X-Amz-Signature=ae292f7bef6a19b53730f270fd874aa28ec2a9a4119d0bf51b88f40de465469c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSYHH4A%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCwKFpNt%2FZ4S%2BogF2mJcr%2F1vNJR8VoaRXmK5gcNHDydHQIgExEWun1Csb1YnjmjOKALecBl3TqbYjvWKPnGG8Avil8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHbhDVKpE7stYZp1SrcA%2F03aT8lW%2BqQtT2ilN6EGl40zhjIyzDVbZrzli%2BXJcbjBpWXn8kCN0MWyx2sECavVVHIvuZZmsAdzd%2BvkwsJjns97l%2FABNRrqSWxoKT%2F59tfsf5%2Fn4obFE4OQghLdbIqjbhN7wMeCKPUB0OgSQipgi%2FNwRf9XVJXQ5P%2FWsjfwOZFB%2BieYXBqVC7P6E9p8faWAFud%2FNIrGWTx3LGoRpk2Skv0rk0B91y5GPtMk4xzSDhrU5VQzTcOuFvnQahOIRtXwveyGxoq1Ph%2FfnVUw617WMu7PSHSh3MxJ%2F%2BtA5ywvivfG6Q0%2BN9gerqH2Y6pcDPPWQGTj7nVdZf2TWjgIGfqGfJ1bHqC2fycTIhS15qjM1o8NIlUwxTKkz3TOyJ4Nqz2brYNKxki1MDVl0vHx3KvtcgalGg9nfYQ1OHIaeEDRphxBeVF%2FfJdHbcsgdABLpDViSXQg8MYtjLIl5fIYNM3b6uY8CiQAYaOfnc6QJ6I49ywGwxROxx8m4rOMsou4UjQdsCz717L%2Bu5S6ZFVyKPp%2FEvC8SO%2Bhbaxo%2Bo1Bbh%2FHD8jKowVbKw3YVdm%2Bx59rQEyf%2FHy36VbixzuwLOhOepr7YoAjEKZV%2Fi7%2FkE6wiaFLGN8hMhq0yCa%2BiOk5SKPMIiLncAGOqUBsjq4zXtIMMhTo4EmHfoQD9uwt2u9VVhL%2ByIEd8e9SPIyOD%2FvvvPW%2FYbBX3%2BXKYiYabOOHUntu5rDH3UOqdpY%2Fslr0MCtpvxMx8U6pA3Iy5I1iVRtmWaHKW5mIC2W3kTmdkNyZW7gz%2FURzrAyqnvoDgxGEEly6SBSUPljXmqGKwj7uhpARadck9%2FXaAc7HXTWgnQqBYSNp4X%2BWZ8ILLgswzIwhir0&X-Amz-Signature=cc1008b51261e4fd254b8abcdb77fe7aab943e250d4adae27980d0a63e52c23f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
