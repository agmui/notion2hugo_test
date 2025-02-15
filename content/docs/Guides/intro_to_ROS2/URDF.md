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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUPQPEQ7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIExqRkddfCvdLFvk5BdXNjcvO7SXRm09YtJkN2MzOZv4AiAUygi8Lo0fh%2FE5%2FSfHo5bgwS0Dyy4%2B9%2Ftp99ls3m8Nnir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM966JR9ZT%2B83%2BFtAVKtwDF10mDGgQ70nJ8CT7s8mgcTQ%2B5vHHIKosxFxAK5w%2BQlJ237Ual6C3gGgMC4wBizZtXegrVQzRCiB%2BX5rvchyHX8j7hmLvJbyIP3SNTsDynKAWGWvhGnYm1DHDad%2Fymq9aPyIZpsIZ5fmSDTKvveNuUpcHWNShBM71qz3PzaassYUHQ3Ws2HHWmFJuQZeqjYD16hIv96RY2%2BIBk4kdhsAlO4ZWLqSP%2BxN9Ptm2R%2B9Kd5o1TCjernObsdPqzGHL7P5gaKsd%2FajVVpnJMlE55S%2BSfazyuWPUcNklKUNiYHpDJ%2BJaFMfaSIJBPsfyzMJGaTE73uM8dqOaNGp9WAXuRk3S8T1K4kDMBEfi9D0OxuFMhamETksYtEzcg2g6eP12t98eGJW2qKEx9TQF97gGb8JSWGC0kLDbUl01hPbthKY2Ure3RLjNnURdzZDgHIpnC%2Fni2gyo2oerSqc3sK1fNLenQM6MWy1v6gFHE5fzpGdVgYNJ%2BLZ8cPJ%2Bn11Qo2chyU9klNKVPEA6YvO9cHNuMkabBAP0PuYFPOXtnSqmycq80T9Y2fJfaMHFROKVE5rIQ52Nf7qAG8awgJIdlfe0SyNFHGKOH0J4t45%2FaVg5m8nRjQtwIzywzHBqWIhOjVgwsL7BvQY6pgGZb9d9s4LaSL%2BrQCgwswJTHHYXjsqUYDv772zP3aB5PNE8mbR18KY06W4I4%2FMYtpxWfNtIabxpJ6O%2BNJqdDrhJyO9tnJJcpxjEEILp4TunfGR3itmEcm9Uk4%2ByK7Xehe3rZ808MMYKO%2B2Smq95zz%2F5sZCjbKBwp7Zy1ONL157I6QT%2Bi91tl6Dd%2FSP88Fm3VGzNNtayZp7Mlc2joMeQ46d%2FD3ahm8uV&X-Amz-Signature=cbf8809c7a800586a6f7cd5621af22fedc2016505d78efc10df3ad29d74c20e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUPQPEQ7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIExqRkddfCvdLFvk5BdXNjcvO7SXRm09YtJkN2MzOZv4AiAUygi8Lo0fh%2FE5%2FSfHo5bgwS0Dyy4%2B9%2Ftp99ls3m8Nnir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM966JR9ZT%2B83%2BFtAVKtwDF10mDGgQ70nJ8CT7s8mgcTQ%2B5vHHIKosxFxAK5w%2BQlJ237Ual6C3gGgMC4wBizZtXegrVQzRCiB%2BX5rvchyHX8j7hmLvJbyIP3SNTsDynKAWGWvhGnYm1DHDad%2Fymq9aPyIZpsIZ5fmSDTKvveNuUpcHWNShBM71qz3PzaassYUHQ3Ws2HHWmFJuQZeqjYD16hIv96RY2%2BIBk4kdhsAlO4ZWLqSP%2BxN9Ptm2R%2B9Kd5o1TCjernObsdPqzGHL7P5gaKsd%2FajVVpnJMlE55S%2BSfazyuWPUcNklKUNiYHpDJ%2BJaFMfaSIJBPsfyzMJGaTE73uM8dqOaNGp9WAXuRk3S8T1K4kDMBEfi9D0OxuFMhamETksYtEzcg2g6eP12t98eGJW2qKEx9TQF97gGb8JSWGC0kLDbUl01hPbthKY2Ure3RLjNnURdzZDgHIpnC%2Fni2gyo2oerSqc3sK1fNLenQM6MWy1v6gFHE5fzpGdVgYNJ%2BLZ8cPJ%2Bn11Qo2chyU9klNKVPEA6YvO9cHNuMkabBAP0PuYFPOXtnSqmycq80T9Y2fJfaMHFROKVE5rIQ52Nf7qAG8awgJIdlfe0SyNFHGKOH0J4t45%2FaVg5m8nRjQtwIzywzHBqWIhOjVgwsL7BvQY6pgGZb9d9s4LaSL%2BrQCgwswJTHHYXjsqUYDv772zP3aB5PNE8mbR18KY06W4I4%2FMYtpxWfNtIabxpJ6O%2BNJqdDrhJyO9tnJJcpxjEEILp4TunfGR3itmEcm9Uk4%2ByK7Xehe3rZ808MMYKO%2B2Smq95zz%2F5sZCjbKBwp7Zy1ONL157I6QT%2Bi91tl6Dd%2FSP88Fm3VGzNNtayZp7Mlc2joMeQ46d%2FD3ahm8uV&X-Amz-Signature=2556ab7f87aecdc13c1e40764e68a0235cced3a7feb2bbd50ee3db5ac39c9a96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
