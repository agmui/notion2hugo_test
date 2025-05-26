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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXSIUSW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDWj9q%2FiMbWSQjmr%2FuHke3wJFH504f03kPq7bsGEQ%2BGhwIhAP3BU8vXzoQkfnA0Li7TxQl4pM7zZMbRzCgI6eW0zgElKv8DCEIQABoMNjM3NDIzMTgzODA1IgwA7oYbMLp1D45k8gMq3AOOKoXILXboDEemVvbOHE%2FGWP3CpkJdqy%2FMNXnSiPqnbb6HbQQCXzIp%2BPT5HWNUCykucPg2MWL%2Bju7BFXmnqZxQ%2BZQgXa66NqArg8G1kQDVjh3HHfMnT%2B6R0xDfGLuwGPS44cX%2F0Dwis7LYBYKaTix%2BJ3M3fWwVFSrxI5asXebSeSw0qi6wytf91tMQVrjWwQIc%2Fuhk1rg4i64rbyXUuucOfFGHK9pKoxZ1sRaoTtuKs60XItpT1bwPlCQ3ZNz0%2BGyzr3U3OyTxbWnwoFHdb88WuMpuXlN2DLXrV3JnxeLO3KaPvvh8MmycBwH21j7Z0plyBf1iiEbm1WpBu6fZb9HNh10a1n%2BwmOtH3HgPtYiqJ0htdW%2FuIBl2iCGiD7u5gSCEUuYXkKz7Q8MaZSTqYBWjYKmwTWvdcWkrZUyps3YqXENtoXGl25eu8%2FCBUBLZ1x09gRNgMcK%2FdeiZabM0T9htqWCFFQ93%2Bp2EUv8kK2xz8V3iE3fdyPSL0JhYDpfbBrqNGEOsJ%2FGUsniFm8u%2FtJvAGTrXA045TXfcvwpkX0USxT9hNg1wwiLb4%2FDv46X%2BBJpL9oed0N87pUs7GYrFXf8rAwvm3jEFZt5YbTkaXn5hXVKQY2H4tICaoFOVwDCB1tDBBjqkAYD5%2BTjlWlagmwG1PbZYZ2gj7jbsl4bkHddXU7F0Y8gUpFMxChGHPgetbOCgoGwnYJ8wFm3ELzjkoZW9a0lCFNlwZkn6EBzUa1PtVE%2FO4lUmFhb8yGw0Vfmc5gCJZvZ6EgaLMm%2BKW2tE8Szs1YImn%2BcGuhUvFgOLUju3Jo6dkLLZv8Eudf3%2Fp25snXlUSiiNROOZJAujP%2BhA3nRY%2BfRo9T4yJOV9&X-Amz-Signature=63f7666c949df8f030b42cb069c6399dfa7965b90832c21d9fa16b09a968dc52&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXSIUSW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDWj9q%2FiMbWSQjmr%2FuHke3wJFH504f03kPq7bsGEQ%2BGhwIhAP3BU8vXzoQkfnA0Li7TxQl4pM7zZMbRzCgI6eW0zgElKv8DCEIQABoMNjM3NDIzMTgzODA1IgwA7oYbMLp1D45k8gMq3AOOKoXILXboDEemVvbOHE%2FGWP3CpkJdqy%2FMNXnSiPqnbb6HbQQCXzIp%2BPT5HWNUCykucPg2MWL%2Bju7BFXmnqZxQ%2BZQgXa66NqArg8G1kQDVjh3HHfMnT%2B6R0xDfGLuwGPS44cX%2F0Dwis7LYBYKaTix%2BJ3M3fWwVFSrxI5asXebSeSw0qi6wytf91tMQVrjWwQIc%2Fuhk1rg4i64rbyXUuucOfFGHK9pKoxZ1sRaoTtuKs60XItpT1bwPlCQ3ZNz0%2BGyzr3U3OyTxbWnwoFHdb88WuMpuXlN2DLXrV3JnxeLO3KaPvvh8MmycBwH21j7Z0plyBf1iiEbm1WpBu6fZb9HNh10a1n%2BwmOtH3HgPtYiqJ0htdW%2FuIBl2iCGiD7u5gSCEUuYXkKz7Q8MaZSTqYBWjYKmwTWvdcWkrZUyps3YqXENtoXGl25eu8%2FCBUBLZ1x09gRNgMcK%2FdeiZabM0T9htqWCFFQ93%2Bp2EUv8kK2xz8V3iE3fdyPSL0JhYDpfbBrqNGEOsJ%2FGUsniFm8u%2FtJvAGTrXA045TXfcvwpkX0USxT9hNg1wwiLb4%2FDv46X%2BBJpL9oed0N87pUs7GYrFXf8rAwvm3jEFZt5YbTkaXn5hXVKQY2H4tICaoFOVwDCB1tDBBjqkAYD5%2BTjlWlagmwG1PbZYZ2gj7jbsl4bkHddXU7F0Y8gUpFMxChGHPgetbOCgoGwnYJ8wFm3ELzjkoZW9a0lCFNlwZkn6EBzUa1PtVE%2FO4lUmFhb8yGw0Vfmc5gCJZvZ6EgaLMm%2BKW2tE8Szs1YImn%2BcGuhUvFgOLUju3Jo6dkLLZv8Eudf3%2Fp25snXlUSiiNROOZJAujP%2BhA3nRY%2BfRo9T4yJOV9&X-Amz-Signature=8491fbbf3827c37f32feddcfa5f7515744b7c6951f2e9ecad728626d91f2e1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
