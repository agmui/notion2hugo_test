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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4F4OD5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhb9XqT78sIgpK8oDgnfOQlHV6nBvsdT0qf3mcleufXAiAg6ri0qlw%2FZhmLQNp5mS%2BaSdEdlRuSjtrFtljhM6W3Xyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUJ4ga6JmHc7%2BPQ3qKtwD3prm%2FkbJ2d4%2BBeq%2FF2O5BI6nZ7mtdxj4gEQKsho7kTF2hedxOTNsqHVkAxuEhaNll56WeGZUtdGgWgaoCALqDEVyqLETfpqdIPbJ1i7wL%2B7WMiaJfYIuJKC8q9ZDCmZqZ8cX%2BnCJ59ytZX6PRin9ByVL%2FmdxaNg1%2B3ellXRmkVqwO0KmtXgXHKXNLuo7XtVZv96RYCia8nlxyyaE4WQaXMreYN4lPY5Uytlw1ArKy%2BA6QNNWmEOrqC1tBXg2a24WOHAhT%2FDiTTx4qcefceVso4EK58tjuOLcWQb0SjXf%2F6bTZjFHMI6Nt8rmFvpiYcQC0221FAQLDDpqs4rgQxUunlBBPQ9xXLdv1voPJCFBPyxramPuO1S7GlgcNjgOcRvQEHlvMVwl28aEPqsU8bKVMAjA%2FwrsX57HgPJAdG78ce2kh1f4DiPv6A38ByPLYArIVPFWMnRDw2xFsnW3qdMrvsu9oymArC5IkH1Zfj1GLZzHQrC5R28zK6bYei1nOcS75klayLUsqltYP65VOG8e8jvTJT7tddpn0l4P0hJgd4tHVM%2FP8Z91iIvpE14AXvHf2zxnrbVWA4n%2FixfEyMt73lbRrMEujucsAOwQdEnMLMouSMRL%2F3HuyBqVdRgwtP6rvgY6pgH8T6reHCbA59HCux06O1V29xNXqqHFN3wj6AiZNrp%2FGmfWNssUR4LaG3x4PpT6NH0W52TLV%2FrI5ndKGUvLSuG1UNIdsYet6vHSrWwDlZIZ5qMCBejDKyRR3oLJ0CWeyHXA6OSXWdLhYuUjynMEwY8lRoeIAWiiNqmPScfA5iIeW1GjBNlSHODzGifhwtKCoSNBd1e6Ejlia3i7NuJdJ853pLvqC9b%2B&X-Amz-Signature=9c544009f43c89f4b31bd5dc207e30d964bcc960312b2cee786e756d94efff82&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4F4OD5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhb9XqT78sIgpK8oDgnfOQlHV6nBvsdT0qf3mcleufXAiAg6ri0qlw%2FZhmLQNp5mS%2BaSdEdlRuSjtrFtljhM6W3Xyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUJ4ga6JmHc7%2BPQ3qKtwD3prm%2FkbJ2d4%2BBeq%2FF2O5BI6nZ7mtdxj4gEQKsho7kTF2hedxOTNsqHVkAxuEhaNll56WeGZUtdGgWgaoCALqDEVyqLETfpqdIPbJ1i7wL%2B7WMiaJfYIuJKC8q9ZDCmZqZ8cX%2BnCJ59ytZX6PRin9ByVL%2FmdxaNg1%2B3ellXRmkVqwO0KmtXgXHKXNLuo7XtVZv96RYCia8nlxyyaE4WQaXMreYN4lPY5Uytlw1ArKy%2BA6QNNWmEOrqC1tBXg2a24WOHAhT%2FDiTTx4qcefceVso4EK58tjuOLcWQb0SjXf%2F6bTZjFHMI6Nt8rmFvpiYcQC0221FAQLDDpqs4rgQxUunlBBPQ9xXLdv1voPJCFBPyxramPuO1S7GlgcNjgOcRvQEHlvMVwl28aEPqsU8bKVMAjA%2FwrsX57HgPJAdG78ce2kh1f4DiPv6A38ByPLYArIVPFWMnRDw2xFsnW3qdMrvsu9oymArC5IkH1Zfj1GLZzHQrC5R28zK6bYei1nOcS75klayLUsqltYP65VOG8e8jvTJT7tddpn0l4P0hJgd4tHVM%2FP8Z91iIvpE14AXvHf2zxnrbVWA4n%2FixfEyMt73lbRrMEujucsAOwQdEnMLMouSMRL%2F3HuyBqVdRgwtP6rvgY6pgH8T6reHCbA59HCux06O1V29xNXqqHFN3wj6AiZNrp%2FGmfWNssUR4LaG3x4PpT6NH0W52TLV%2FrI5ndKGUvLSuG1UNIdsYet6vHSrWwDlZIZ5qMCBejDKyRR3oLJ0CWeyHXA6OSXWdLhYuUjynMEwY8lRoeIAWiiNqmPScfA5iIeW1GjBNlSHODzGifhwtKCoSNBd1e6Ejlia3i7NuJdJ853pLvqC9b%2B&X-Amz-Signature=738e75592a9640fa33616ea215a1afdfbfd71ef696a1513c0163315f50d16463&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
