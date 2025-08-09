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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47T3LJY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCOHVfR72S6SXbx3ZKSLlFngQpOG%2FfpaikOYhzcIfXmjwIgBrH2PKqfmgUi3kERq5HZjma8lauJRrtHwBuJicOtPCkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv00fCjYWvW6c0SoSrcA9I8AxLAQuTm7dUSZLwBYt8oAY9h0R88O1VISQq4KQdRZhJRgDrnLRiIMYPLuIW5JUStaRTu6hks%2Bw9K6XG4JEkleb2MmxmGaIF6tI%2FdoDsts7gQR%2FknDCJ9EAD8bKLuFBsnXiLHf0chbaACjyPNETSQr1rEE4eachGkyoqTI7F9arGiKYa1ECnBpMq3RWEw9hwj0R%2BlD2oaKB576TnoVh%2BKIVQtd89mN0ps7tYa2wq9k%2Fxeie17qFiU7bZjgyeS6Vdt1%2BhOuW86%2BpFx6VcM4aVIEm2TigypL9qZKMuhncTsjIFYtxL85KnN80evkzrmblxFAx8M6BlZeQ%2BmpaMohCFFI6c40XfQkROTAhMR2qlf1NTPj%2BVOAG%2BPXTKG83k9OWDRu4C9aZTGly4xSPpePaZ6k0n2If8IjqxhxGn3yGxOHVZGlI3KMojfM4YE9evCklZ6VgRCrFuOS9cP%2BXRB8c4m6%2BtK5OrRp3bl5hB2h3PjegrfV7FmYV%2FQV83LU5Ljb954ViNNs0Bbh3JwMLxx1IuA9fIVGLQqzvfFjImSSusK1Wri21xj%2FepgqZLi8ckS9LHGXg9YbdUc4Pme%2FMtdXnZPQMkrVcbyzvuxiW%2Bvi37Y53feB%2Firh6Vn%2B7v%2FMJeg28QGOqUBfPF99vPIHJALs%2FpEj27Yw0cr1HUXpeBFj5YVLKAnnXnLcbkdlAPy0IiHhtmTmDvtB04Fu%2Brqt6Grm%2BcDHFQjBPnR%2BFL%2FmeId%2BEGRyMF07K%2FlbcEGHBVw5%2BIo8ef%2BluN3VHjyOXFlBMW9JJB3GNGG6naUffheD%2F%2B712zH9UuPWvq3rZX9D%2Fu5wHSwMYW5y2DXsrB1lX6dhheqWRLs91UDDiXKVdI4&X-Amz-Signature=d433799f54a21eeeceb45ff2ddc353f7464b7d65ca46197b0dfeb16af2288448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47T3LJY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCOHVfR72S6SXbx3ZKSLlFngQpOG%2FfpaikOYhzcIfXmjwIgBrH2PKqfmgUi3kERq5HZjma8lauJRrtHwBuJicOtPCkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv00fCjYWvW6c0SoSrcA9I8AxLAQuTm7dUSZLwBYt8oAY9h0R88O1VISQq4KQdRZhJRgDrnLRiIMYPLuIW5JUStaRTu6hks%2Bw9K6XG4JEkleb2MmxmGaIF6tI%2FdoDsts7gQR%2FknDCJ9EAD8bKLuFBsnXiLHf0chbaACjyPNETSQr1rEE4eachGkyoqTI7F9arGiKYa1ECnBpMq3RWEw9hwj0R%2BlD2oaKB576TnoVh%2BKIVQtd89mN0ps7tYa2wq9k%2Fxeie17qFiU7bZjgyeS6Vdt1%2BhOuW86%2BpFx6VcM4aVIEm2TigypL9qZKMuhncTsjIFYtxL85KnN80evkzrmblxFAx8M6BlZeQ%2BmpaMohCFFI6c40XfQkROTAhMR2qlf1NTPj%2BVOAG%2BPXTKG83k9OWDRu4C9aZTGly4xSPpePaZ6k0n2If8IjqxhxGn3yGxOHVZGlI3KMojfM4YE9evCklZ6VgRCrFuOS9cP%2BXRB8c4m6%2BtK5OrRp3bl5hB2h3PjegrfV7FmYV%2FQV83LU5Ljb954ViNNs0Bbh3JwMLxx1IuA9fIVGLQqzvfFjImSSusK1Wri21xj%2FepgqZLi8ckS9LHGXg9YbdUc4Pme%2FMtdXnZPQMkrVcbyzvuxiW%2Bvi37Y53feB%2Firh6Vn%2B7v%2FMJeg28QGOqUBfPF99vPIHJALs%2FpEj27Yw0cr1HUXpeBFj5YVLKAnnXnLcbkdlAPy0IiHhtmTmDvtB04Fu%2Brqt6Grm%2BcDHFQjBPnR%2BFL%2FmeId%2BEGRyMF07K%2FlbcEGHBVw5%2BIo8ef%2BluN3VHjyOXFlBMW9JJB3GNGG6naUffheD%2F%2B712zH9UuPWvq3rZX9D%2Fu5wHSwMYW5y2DXsrB1lX6dhheqWRLs91UDDiXKVdI4&X-Amz-Signature=673b080a2259cd79ac15ce3d4188d7edc451a80371dd55f32037433cc611c3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
