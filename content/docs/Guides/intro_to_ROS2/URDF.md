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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNCERQH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJtsAPKcpWZtSG8R7KO3jxhkZ3VZkoCMVp64GgD52BMAIgEpFAyK8QDN08TFapGDHQROgip9ifS4l9KHhuX1Xh%2BnQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHLAk0vkvKGFV5cGMircA6hze9hIwmst%2BXBisQd3dfQ2OHjXc7IuqsA%2BTIt5FxsHR9WcsxEHFto5tKxZIf5yCd1wUz%2FolsfUW3ET6sNA0J1PRqqREsMm8%2BB%2BPL%2FwWh4Y5U%2Bkw1avfLXETQRjfqmE1kzEpgpE5jxxSjIBMR2qfwD1gzJbqXFlnhd3AbZv07Zc0kR107vHxztaU5%2FgRq%2F%2F8EgLlP7aBi5bQFPANxqpYTsK6fHMaf9EgCIG2iwGhmp4HeJ7aoTNEYhoyTLDZlb9VOC2XnJxrEB43UJNqH6U2nYqV5zci8WSE%2BmLXEnbVuLyzbeKpf4NMCC%2Bj%2B6PqJOC6SyOsNsGelYEdOfC8u9F0paAAYfK%2BeKs%2FHlk64DDZk40AypEJyXbsBB4GhWNrQYAvUNa4O132lTGSno5UkajGwLV5FnnQ7QPwcF9Aztp4Bb6YvibVevI3zIZEEVobEiEGfobybX3wdcRNAoNIxcID6HAJbNHCVI6vOHhPcK34fZ5mXODnr1DLV2XOVd3R4uyQ6wl87w8SgmDjEoyo3FgW%2FzR66JXF4wWb3wWhnpDc6dVQgq75C8O9vZnO3QsY%2Bs9J%2FV8lPBwnsTcRJ5qhHqYYHKtIrzZ2f04zpufWhHaYaUJ1ppOvblbbGLBHqWvMNqq%2F78GOqUB7axNcztZDcPaLucKJdcDO1k22GL7ZIwrkVIXPetZiuObw%2FuGpXilaMwWzl6SE2mcioU2deaxuq%2F%2BQQ7LI2rbqRKgOdsh%2FtiLz7jYFf7%2BFMIstzOVnC5CfLOyhLUnC3bmCYl%2FNXx5wHPy59JUoa3%2B%2Fj0o6%2FzJLqBYUDqq%2FB%2FvyWiwHggkdJK2pgs97E4b49VwhXUafG6DwDN7yxgyqGFbbAV%2FhGF8&X-Amz-Signature=62b563f156e78cefe86f0c6b17358b3cfebb01643a63385bd5c064b01a4cdfff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNCERQH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJtsAPKcpWZtSG8R7KO3jxhkZ3VZkoCMVp64GgD52BMAIgEpFAyK8QDN08TFapGDHQROgip9ifS4l9KHhuX1Xh%2BnQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHLAk0vkvKGFV5cGMircA6hze9hIwmst%2BXBisQd3dfQ2OHjXc7IuqsA%2BTIt5FxsHR9WcsxEHFto5tKxZIf5yCd1wUz%2FolsfUW3ET6sNA0J1PRqqREsMm8%2BB%2BPL%2FwWh4Y5U%2Bkw1avfLXETQRjfqmE1kzEpgpE5jxxSjIBMR2qfwD1gzJbqXFlnhd3AbZv07Zc0kR107vHxztaU5%2FgRq%2F%2F8EgLlP7aBi5bQFPANxqpYTsK6fHMaf9EgCIG2iwGhmp4HeJ7aoTNEYhoyTLDZlb9VOC2XnJxrEB43UJNqH6U2nYqV5zci8WSE%2BmLXEnbVuLyzbeKpf4NMCC%2Bj%2B6PqJOC6SyOsNsGelYEdOfC8u9F0paAAYfK%2BeKs%2FHlk64DDZk40AypEJyXbsBB4GhWNrQYAvUNa4O132lTGSno5UkajGwLV5FnnQ7QPwcF9Aztp4Bb6YvibVevI3zIZEEVobEiEGfobybX3wdcRNAoNIxcID6HAJbNHCVI6vOHhPcK34fZ5mXODnr1DLV2XOVd3R4uyQ6wl87w8SgmDjEoyo3FgW%2FzR66JXF4wWb3wWhnpDc6dVQgq75C8O9vZnO3QsY%2Bs9J%2FV8lPBwnsTcRJ5qhHqYYHKtIrzZ2f04zpufWhHaYaUJ1ppOvblbbGLBHqWvMNqq%2F78GOqUB7axNcztZDcPaLucKJdcDO1k22GL7ZIwrkVIXPetZiuObw%2FuGpXilaMwWzl6SE2mcioU2deaxuq%2F%2BQQ7LI2rbqRKgOdsh%2FtiLz7jYFf7%2BFMIstzOVnC5CfLOyhLUnC3bmCYl%2FNXx5wHPy59JUoa3%2B%2Fj0o6%2FzJLqBYUDqq%2FB%2FvyWiwHggkdJK2pgs97E4b49VwhXUafG6DwDN7yxgyqGFbbAV%2FhGF8&X-Amz-Signature=a53ca6885c43483bcff7ee862a769f5d08187b99b0b894ddaa6760efd896f763&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
