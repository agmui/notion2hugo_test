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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GFXUHQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEr8Ua9%2FUNIdG5N1P0noAL3cx%2Fy2LGi75u9tFjo55TBAiB9ZIVslxljG1ecmJsXO0chh1BRcklmCSPUGNrn6A3exCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAUGcUZLD6HLZza%2FfKtwD6%2FhN93ux5KhD5fXQgo5kxlHUKpe2BNrVvXveZsOeMbMhNuQL31lcpegV3XddnuxXXVPAgueQnJVjQ%2BXNRwEJOetrT8U%2F%2BdKZ2Upj60S3J%2FfDdia9XC9B4EyyW2fOt4OvfTKfk46hFLF4WyOtc6d3bSM%2BaTGyp4BQzLqWOiPJYrLQN%2FaP1BytXE57yZ3qXLv4ubBFTt%2FsEc5iaOrTRGU8J8ANHcY9o0RixAFqsFF0nB48WN%2BXsxSWGzmL1suPzGBbO7iE%2B7rVMMvNgp7%2FbUiDL1FVVZGbUUtZi0gxaJ7HUZOf3%2FHlsubH00pvgGQBgFlQgidBnmdmZdOS%2BZ7aNMGQGQsrF4g0gFwz3kxz8vKgySZ%2F1pE4IqN4j%2Fi0cqkOotbuNVJrsKVAiy7FmIswJ4v9U5HzbDhVsjB3AqJ31HSCALnKYZs7pKg8WN6HsRwPJXb3AoRigJOrxdySYKf8jTBLc82cuf1v%2B4f%2Bl47IpAh7lrBBuewiDcgyuAclreo6CJWNHZ6YKhT%2F06lA%2F3ycnUFnUrEBMd7sR1Qes6JEtJzZrIeVUsKwniCD3fnILLnAKkSkYhrt%2BLn6Ix%2BAXlvCqHp2H8xrcjrisKdqRscRdgn%2FBJo1R%2FJVKafAvhbM8hkwzPqvwQY6pgEHQDrmeoQdRgGtnzchPsau5mRE645i0E4vxUEDXFmFs0lWy0ns90uzNBH3RYH%2Bphf3s9g3oz%2F1Jbxpr%2FgQ9hGsvZacnyw35c0H0cM%2FpSFRqTjZZAUwbJBIVjZ0%2BiQUwQVfkt5KoH%2BVq8VZJh%2BC2VBcDnbUDvj5lUB3vqlt29N0bIeatefkyv9TYgwO%2B7ycC0hpTc8ho%2BzE%2Fw%2BW6peQLlYfXPFX%2Fb7f&X-Amz-Signature=7696cf9d010067cdec0d12e1db24f5fa011a19a45d60be44dd970df9a573dac4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GFXUHQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEr8Ua9%2FUNIdG5N1P0noAL3cx%2Fy2LGi75u9tFjo55TBAiB9ZIVslxljG1ecmJsXO0chh1BRcklmCSPUGNrn6A3exCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAUGcUZLD6HLZza%2FfKtwD6%2FhN93ux5KhD5fXQgo5kxlHUKpe2BNrVvXveZsOeMbMhNuQL31lcpegV3XddnuxXXVPAgueQnJVjQ%2BXNRwEJOetrT8U%2F%2BdKZ2Upj60S3J%2FfDdia9XC9B4EyyW2fOt4OvfTKfk46hFLF4WyOtc6d3bSM%2BaTGyp4BQzLqWOiPJYrLQN%2FaP1BytXE57yZ3qXLv4ubBFTt%2FsEc5iaOrTRGU8J8ANHcY9o0RixAFqsFF0nB48WN%2BXsxSWGzmL1suPzGBbO7iE%2B7rVMMvNgp7%2FbUiDL1FVVZGbUUtZi0gxaJ7HUZOf3%2FHlsubH00pvgGQBgFlQgidBnmdmZdOS%2BZ7aNMGQGQsrF4g0gFwz3kxz8vKgySZ%2F1pE4IqN4j%2Fi0cqkOotbuNVJrsKVAiy7FmIswJ4v9U5HzbDhVsjB3AqJ31HSCALnKYZs7pKg8WN6HsRwPJXb3AoRigJOrxdySYKf8jTBLc82cuf1v%2B4f%2Bl47IpAh7lrBBuewiDcgyuAclreo6CJWNHZ6YKhT%2F06lA%2F3ycnUFnUrEBMd7sR1Qes6JEtJzZrIeVUsKwniCD3fnILLnAKkSkYhrt%2BLn6Ix%2BAXlvCqHp2H8xrcjrisKdqRscRdgn%2FBJo1R%2FJVKafAvhbM8hkwzPqvwQY6pgEHQDrmeoQdRgGtnzchPsau5mRE645i0E4vxUEDXFmFs0lWy0ns90uzNBH3RYH%2Bphf3s9g3oz%2F1Jbxpr%2FgQ9hGsvZacnyw35c0H0cM%2FpSFRqTjZZAUwbJBIVjZ0%2BiQUwQVfkt5KoH%2BVq8VZJh%2BC2VBcDnbUDvj5lUB3vqlt29N0bIeatefkyv9TYgwO%2B7ycC0hpTc8ho%2BzE%2Fw%2BW6peQLlYfXPFX%2Fb7f&X-Amz-Signature=4de1c801b38b531526635789552aca0568246564cc2a17a26dc7cb8bc237b901&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
