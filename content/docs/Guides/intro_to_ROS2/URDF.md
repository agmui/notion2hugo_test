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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLSAWHW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGgVaizisxjByyxqNyjBaWJMZ7ORAW%2Fd9%2FA9susn2ds7AiEAlapNuw4rdgTKgadtSv3Inf9H14yK%2BEk%2Bjqre2IeZIFYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKMZl5v8wCZR6mxT8CrcAxkN1mDPdAa1svdYNpLybrjNVeTfHj0%2BdIguoMDcnGpfN4mmpDfOj%2B5RivVg8btvvFitH5S5xc3AISflDlEKlzs76yiduf8uQHLTddr5nNwoBeyp4kmti%2Bep5IjtTOmZZvJ2RzpC803Iv3Hnvjx0vA8m1n0ufpBMXvp452yJm3Wm8nn59kcVCuVRF4ZE9OAzoGARtSGCZScRpsPyp7O6aM9xZjVOzZT2C8AsgegTFn58IPB1n%2F59GkHjp6c6LKqxJw%2BYP2zmkvbmGFzSQgtgfiQPdzVBM1AX0DSVjYtlhHbVDuLlGTLRut%2FsJIsUwsTZaRu80byK%2FYYuQxykMZoN9LzPEU1QiieMAn9lBerAeigGugyRwa4yJjEDUqZgV%2BV%2BD6OvF94kcbbibPwTs36w53NnEIa1hol%2BasbDOdkbcw99fco%2B2WH8raDX%2FdA%2F5Tvo3hoisxFzXciMmRvtEjgY8rOxWSQvlwImSeGkkkfqi4wnUehyYxpOwjpxMyW%2BpQERFMovNHbubbbAS6ri%2Ff%2FpZ3PjCXc1xF0MChT%2FOpuIoHd78w2SduJA5Sj3ubUMqhiKx8sEMG7N%2BIGnTpJpabPhfxfJqCMWiNCKN%2F4%2Ba38sDeYtpJPjBIhYR1WfXRWqMJOFusIGOqUBlSHB1oZgPUxUoMZwoRkN4awmjiGGktpi39m9v20yjEYLLViXPTEu9A2FtAqnT3Ojv9XzSweGHGsBwoYCcHd52YEMRnnjSUzh9%2BMOUV6pd%2BnjNGHUHmfPMHWvJoTSCxkc%2BEfChot2bv5HQTveaqHS8VFn7xmAf531kHIRrnosSm7vJ%2FI28uWwz%2F85N0G7Acz%2Fu8K1xZvTIpYC%2FG%2FD%2FkyK9vWb7ADZ&X-Amz-Signature=19430ca523508bcdc54b2c10a846a6285ae0adcc4840a4c621b9def6ee8f13b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLSAWHW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGgVaizisxjByyxqNyjBaWJMZ7ORAW%2Fd9%2FA9susn2ds7AiEAlapNuw4rdgTKgadtSv3Inf9H14yK%2BEk%2Bjqre2IeZIFYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKMZl5v8wCZR6mxT8CrcAxkN1mDPdAa1svdYNpLybrjNVeTfHj0%2BdIguoMDcnGpfN4mmpDfOj%2B5RivVg8btvvFitH5S5xc3AISflDlEKlzs76yiduf8uQHLTddr5nNwoBeyp4kmti%2Bep5IjtTOmZZvJ2RzpC803Iv3Hnvjx0vA8m1n0ufpBMXvp452yJm3Wm8nn59kcVCuVRF4ZE9OAzoGARtSGCZScRpsPyp7O6aM9xZjVOzZT2C8AsgegTFn58IPB1n%2F59GkHjp6c6LKqxJw%2BYP2zmkvbmGFzSQgtgfiQPdzVBM1AX0DSVjYtlhHbVDuLlGTLRut%2FsJIsUwsTZaRu80byK%2FYYuQxykMZoN9LzPEU1QiieMAn9lBerAeigGugyRwa4yJjEDUqZgV%2BV%2BD6OvF94kcbbibPwTs36w53NnEIa1hol%2BasbDOdkbcw99fco%2B2WH8raDX%2FdA%2F5Tvo3hoisxFzXciMmRvtEjgY8rOxWSQvlwImSeGkkkfqi4wnUehyYxpOwjpxMyW%2BpQERFMovNHbubbbAS6ri%2Ff%2FpZ3PjCXc1xF0MChT%2FOpuIoHd78w2SduJA5Sj3ubUMqhiKx8sEMG7N%2BIGnTpJpabPhfxfJqCMWiNCKN%2F4%2Ba38sDeYtpJPjBIhYR1WfXRWqMJOFusIGOqUBlSHB1oZgPUxUoMZwoRkN4awmjiGGktpi39m9v20yjEYLLViXPTEu9A2FtAqnT3Ojv9XzSweGHGsBwoYCcHd52YEMRnnjSUzh9%2BMOUV6pd%2BnjNGHUHmfPMHWvJoTSCxkc%2BEfChot2bv5HQTveaqHS8VFn7xmAf531kHIRrnosSm7vJ%2FI28uWwz%2F85N0G7Acz%2Fu8K1xZvTIpYC%2FG%2FD%2FkyK9vWb7ADZ&X-Amz-Signature=4851ef2d46cbf3c2bb8dbb72c730ff8c4a490ab2dd7e1c79a460fceddc50eec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
