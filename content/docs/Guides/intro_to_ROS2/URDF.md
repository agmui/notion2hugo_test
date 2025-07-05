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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQCYNHJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHD%2BPiKM%2B0%2FJLaXLOczvE6BYVQgvy3rcwZi4qzxWxTjDAiEA5%2FNw%2BcHFRePJG0uQz9J4SVa5jY283Ngz6W18e2vE6YAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK8jAVAoPWfE45BpwCrcAwE4ENrX%2FlEXlrSmLIK40cNv0LtFCemVkoLD4Vyb60UkD%2FySqdAjhKrfyDa%2FKGGB8H%2BmY%2BCvZ%2BVl30rxZZozA0%2FHW1I3rvK9jLKa62YpQ8dTiy2bheVJF%2FjsnKa3kswmOIOCIhUACV8DGSX%2B4U%2BA8jBPJDdRiz4Z36HkgO99se%2FjDvFl%2F303JzxKVAczVkM%2Bjw4nYusFZzjPjo1lWk9iEfHQ8PW9FzLccpJ%2Fn3PIeZFWbOjmiH%2F%2FZFwoYgVRnBYsHtSZ1vNXPwvLR%2FHkWUybCdaQOMXLUIUyAc%2FIUPvhjLT%2Bfc1zBuJSRiFiBuv9okQb5jvwziXfl2bu2KIE5Aj7WxSKkNLQE1gkKo%2BinCEUVmO4uOL%2B0f%2F56C%2B7jPzp4oE7pbLcig3hIdrD13KMpWCiraUzaqxlsnQRgjiUN8Je1MYKNje6nUP7uvFDTFVe8Q%2Fko0tml%2B1EUa2OXaYaSkIOqDXClsdqd6yoiTbL70%2B01mn%2Fyq2b%2FhvL48AoH7qsnghKuFQO9QiLH8mvUVVP3EEubUMhznewgEUom7iKkevN4%2BTYBfxeY%2F2OrQ32LzDiMGONik%2Bfi9TlVskhdT9c5pjuHCUgkK2PRYObX9GHnrg2IwAWpZ9ZnW%2BizzYNK%2FIuMPvmpcMGOqUBX%2BPFiFpHCr4mVfkeus0eK9R2Ck4L09ipefwlwy5A4XgooTUeILS70a5DkFSw2y4IXHnqxOvs5p4LgZBUyUvIeRhRn%2FhmGeRufghxRb6gOLaA9EocF7SSl9VBz5mAB1sOvu83zzmv4FkOqJ7hzSx9O9lCXsxgL5UR7YUochC6dQYpPNBCtZxc51%2FlAIJbC0GO4G29HgIdyPIR3BA36jDnsBsw%2Fb28&X-Amz-Signature=ec35527a7ac1ee278587c70b1d733e44f464cb67c8ccc1d8ea8445c54486bcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQCYNHJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHD%2BPiKM%2B0%2FJLaXLOczvE6BYVQgvy3rcwZi4qzxWxTjDAiEA5%2FNw%2BcHFRePJG0uQz9J4SVa5jY283Ngz6W18e2vE6YAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK8jAVAoPWfE45BpwCrcAwE4ENrX%2FlEXlrSmLIK40cNv0LtFCemVkoLD4Vyb60UkD%2FySqdAjhKrfyDa%2FKGGB8H%2BmY%2BCvZ%2BVl30rxZZozA0%2FHW1I3rvK9jLKa62YpQ8dTiy2bheVJF%2FjsnKa3kswmOIOCIhUACV8DGSX%2B4U%2BA8jBPJDdRiz4Z36HkgO99se%2FjDvFl%2F303JzxKVAczVkM%2Bjw4nYusFZzjPjo1lWk9iEfHQ8PW9FzLccpJ%2Fn3PIeZFWbOjmiH%2F%2FZFwoYgVRnBYsHtSZ1vNXPwvLR%2FHkWUybCdaQOMXLUIUyAc%2FIUPvhjLT%2Bfc1zBuJSRiFiBuv9okQb5jvwziXfl2bu2KIE5Aj7WxSKkNLQE1gkKo%2BinCEUVmO4uOL%2B0f%2F56C%2B7jPzp4oE7pbLcig3hIdrD13KMpWCiraUzaqxlsnQRgjiUN8Je1MYKNje6nUP7uvFDTFVe8Q%2Fko0tml%2B1EUa2OXaYaSkIOqDXClsdqd6yoiTbL70%2B01mn%2Fyq2b%2FhvL48AoH7qsnghKuFQO9QiLH8mvUVVP3EEubUMhznewgEUom7iKkevN4%2BTYBfxeY%2F2OrQ32LzDiMGONik%2Bfi9TlVskhdT9c5pjuHCUgkK2PRYObX9GHnrg2IwAWpZ9ZnW%2BizzYNK%2FIuMPvmpcMGOqUBX%2BPFiFpHCr4mVfkeus0eK9R2Ck4L09ipefwlwy5A4XgooTUeILS70a5DkFSw2y4IXHnqxOvs5p4LgZBUyUvIeRhRn%2FhmGeRufghxRb6gOLaA9EocF7SSl9VBz5mAB1sOvu83zzmv4FkOqJ7hzSx9O9lCXsxgL5UR7YUochC6dQYpPNBCtZxc51%2FlAIJbC0GO4G29HgIdyPIR3BA36jDnsBsw%2Fb28&X-Amz-Signature=f5548c495e4be2126dbb8a1943ba71c78a0f656a5d4a3a61ffc434c45cd2ff09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
