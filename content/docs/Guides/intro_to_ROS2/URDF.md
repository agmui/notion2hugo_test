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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYEZ663Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWxw1jvQ8qghFmvy1IB%2Fl2eOWavxDKdcC75c2be%2BP0HAIhANyFnloj1o7JVAmIeITNBsB8OQrjCfXIJRLSt3A%2F1mouKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgC8ZPKOvXiSgLk2oq3AOxzqsgExcmGLGq37tp%2Bckxr0n3%2BdPnpzR08SiQTSaGx7kgle7L2lysRk%2BcrLZlnQUYjfO7BuP%2FU2WvAZDR8S9hnaKh4yiAgNM%2BCrLX99ONlzRoB0WLRd%2BDZUQOhEemn9ce2uvmd%2BTT8ZvlugRIKenooz6E7LCCWwNajL1Y9bYfVua%2FMhNuw%2F4uJXAf9QdJ87Fb25n%2FiwqZAtSNsNxh2OWqowvEuaJDrYzkFnetqyCA71E%2B5o8N1p1XawQdsQsWrqoGl%2FDKz17T6N2MpAhn3YO%2FfOeFZ%2F%2FtgF2gYWeDAO%2FXfTyNClqxjuSx%2BEew3zXIDzP%2FLMEmK7WA6ClrSBbgUWDZTJz6Yg0BnNysJxap%2Bgsv%2BR26P1sWGp7XndBmquX1P9nHzRIJRNiofWqTMuv040P5bOd0IlS%2F9jVnH1pr%2FgAsiV4LzQxGzZ5i%2BGu0VH5ZtBqLd5Goew1g%2Bi1dpLe%2B3UncYRMfDMGwdg6D8DoP8DBzIeJKkO%2BtwF7Xn6d9t30CHa3vvjamHNqOrWIz0wW542YShQNecjOyprAVZ1JHtlNYsFQCazvFb3aDSye1oOQiAV8bZFS7YbuHY5tn1IUEUjocwTk%2B1YyZkkhKkblabTCVFV5NHu8Hav1I3tk2KzDH3OTEBjqkASooZsmIT8o0nTDm2N5aSE3sgFAAcucLGehiLVYntwVxqt87uZyIXxspHMev7g46MCDfaqtVYIMKFwnpjFoKiXUOwUTuP9rba09i%2BT6vXZVdkPHSHQRd6nE%2BLC2%2BzCTeAko7CVUFoRzjSpsYSQNTdzanQVDP9Ta1z8d9On8sDKgj9lb3G%2FnDXarKVyqiKts4fMHBYYov46V%2BnJ5wzpb2w4xTu6XZ&X-Amz-Signature=bb1ac32c72321785cd9ffd35a9ffe94794dc56edb16dc283371e5207007f4061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYEZ663Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWxw1jvQ8qghFmvy1IB%2Fl2eOWavxDKdcC75c2be%2BP0HAIhANyFnloj1o7JVAmIeITNBsB8OQrjCfXIJRLSt3A%2F1mouKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgC8ZPKOvXiSgLk2oq3AOxzqsgExcmGLGq37tp%2Bckxr0n3%2BdPnpzR08SiQTSaGx7kgle7L2lysRk%2BcrLZlnQUYjfO7BuP%2FU2WvAZDR8S9hnaKh4yiAgNM%2BCrLX99ONlzRoB0WLRd%2BDZUQOhEemn9ce2uvmd%2BTT8ZvlugRIKenooz6E7LCCWwNajL1Y9bYfVua%2FMhNuw%2F4uJXAf9QdJ87Fb25n%2FiwqZAtSNsNxh2OWqowvEuaJDrYzkFnetqyCA71E%2B5o8N1p1XawQdsQsWrqoGl%2FDKz17T6N2MpAhn3YO%2FfOeFZ%2F%2FtgF2gYWeDAO%2FXfTyNClqxjuSx%2BEew3zXIDzP%2FLMEmK7WA6ClrSBbgUWDZTJz6Yg0BnNysJxap%2Bgsv%2BR26P1sWGp7XndBmquX1P9nHzRIJRNiofWqTMuv040P5bOd0IlS%2F9jVnH1pr%2FgAsiV4LzQxGzZ5i%2BGu0VH5ZtBqLd5Goew1g%2Bi1dpLe%2B3UncYRMfDMGwdg6D8DoP8DBzIeJKkO%2BtwF7Xn6d9t30CHa3vvjamHNqOrWIz0wW542YShQNecjOyprAVZ1JHtlNYsFQCazvFb3aDSye1oOQiAV8bZFS7YbuHY5tn1IUEUjocwTk%2B1YyZkkhKkblabTCVFV5NHu8Hav1I3tk2KzDH3OTEBjqkASooZsmIT8o0nTDm2N5aSE3sgFAAcucLGehiLVYntwVxqt87uZyIXxspHMev7g46MCDfaqtVYIMKFwnpjFoKiXUOwUTuP9rba09i%2BT6vXZVdkPHSHQRd6nE%2BLC2%2BzCTeAko7CVUFoRzjSpsYSQNTdzanQVDP9Ta1z8d9On8sDKgj9lb3G%2FnDXarKVyqiKts4fMHBYYov46V%2BnJ5wzpb2w4xTu6XZ&X-Amz-Signature=78394fb3ff75c64c4a9defbc0c3a522e43b1ff375f2cd7a3a28ef8c2e1edc8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
