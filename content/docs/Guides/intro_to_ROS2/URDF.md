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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6OHWQS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2d%2BHL4QxdcSmTc11ShZVlwcM%2FtikuM%2B4x%2FmNzBsA0sAiBNlMDRFWfhKu19p3MlJXchurcd42G4qF4TQO6G0yqRSSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMBK%2BBc%2Fnowd2n1AuhKtwDVc%2FwtUgouBGxd7MVZe8euFyA7U9q4BC6QiBsmU8Nyi3U8Smq8TQMpw3RixTTK5S%2F2l5e6VTST7FXT4PZKYR%2F%2FoRLWJHwJsfDXQx85V5o6rcOSrRfGaY2l%2BPWXlDX35qS4MCDi%2FdVthGbSbk3cE9ITRySE1YabGgv87WiSW3DqLQzXigmkY387g0sp1eqVbB6pe%2BGSHZNHy%2Bmd8nXyOM2kxOjDYig%2Bkog5NZaWdlaswK8PXsPBq5G1%2B2aSn8V2GRfJ24mb5wzzrSJobbpW%2BNntg%2BfOobyfdkPCmrpWCeIIa9EMFw9GKk%2B4g9RO129W16Jn4jCvemHMrN8xemzNNwNfaJsTFCiP%2F8UB0jsNpwIfg9leeArLhwtj1tnKGYoxG6clD3H66TFI5286tzUrCyxMCIZIPWZQIXKtZ2XdUyOIJEfku%2B%2By8hcrBlwDITckvzPopHTVUUJ0pA%2Bif0fid%2F9SCruYdZ1L%2Bw%2FfrOQ5ZsvFk0gDa1%2BVdQe8SvUvz9dZse4GCoSiZBfnVeUP%2B%2FgLavqUTBiHkaTS8Ol5SDrq8OYZOERsHC8mhLtt3Eosxud4iZUCaji4NvO5SYROC3J6UwBsgnUEwmKk4xvevNqhF6vRnUn8yRI7xydIi4wMhcwqJiMvwY6pgG%2Bv3Bo626w1AWjqvCbqqlRsYtuYq%2FpNYBd%2BlGFtSvH0K3Sw%2Bld%2FmqO30BT7X0X3qb2NTiCLfV5RIf4Whx2rPT52qI7%2FL5q6TzLqKbl%2Bj9eBtWv5fQGhaQ8oBJw7wPx48xhiljCMXeqW2F6LX%2B2A3NwvQViUwA%2BqdIpLHjDFUBHjOAGrQlCY1b1Fx9ZniEC10ivCF1SQQ22gY6tj57J%2BOoMDjabx4du&X-Amz-Signature=ed0a037b474bc6b819c173d594f693c8d3a7fccc3620c878665c056c7e30c70d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6OHWQS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2d%2BHL4QxdcSmTc11ShZVlwcM%2FtikuM%2B4x%2FmNzBsA0sAiBNlMDRFWfhKu19p3MlJXchurcd42G4qF4TQO6G0yqRSSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMBK%2BBc%2Fnowd2n1AuhKtwDVc%2FwtUgouBGxd7MVZe8euFyA7U9q4BC6QiBsmU8Nyi3U8Smq8TQMpw3RixTTK5S%2F2l5e6VTST7FXT4PZKYR%2F%2FoRLWJHwJsfDXQx85V5o6rcOSrRfGaY2l%2BPWXlDX35qS4MCDi%2FdVthGbSbk3cE9ITRySE1YabGgv87WiSW3DqLQzXigmkY387g0sp1eqVbB6pe%2BGSHZNHy%2Bmd8nXyOM2kxOjDYig%2Bkog5NZaWdlaswK8PXsPBq5G1%2B2aSn8V2GRfJ24mb5wzzrSJobbpW%2BNntg%2BfOobyfdkPCmrpWCeIIa9EMFw9GKk%2B4g9RO129W16Jn4jCvemHMrN8xemzNNwNfaJsTFCiP%2F8UB0jsNpwIfg9leeArLhwtj1tnKGYoxG6clD3H66TFI5286tzUrCyxMCIZIPWZQIXKtZ2XdUyOIJEfku%2B%2By8hcrBlwDITckvzPopHTVUUJ0pA%2Bif0fid%2F9SCruYdZ1L%2Bw%2FfrOQ5ZsvFk0gDa1%2BVdQe8SvUvz9dZse4GCoSiZBfnVeUP%2B%2FgLavqUTBiHkaTS8Ol5SDrq8OYZOERsHC8mhLtt3Eosxud4iZUCaji4NvO5SYROC3J6UwBsgnUEwmKk4xvevNqhF6vRnUn8yRI7xydIi4wMhcwqJiMvwY6pgG%2Bv3Bo626w1AWjqvCbqqlRsYtuYq%2FpNYBd%2BlGFtSvH0K3Sw%2Bld%2FmqO30BT7X0X3qb2NTiCLfV5RIf4Whx2rPT52qI7%2FL5q6TzLqKbl%2Bj9eBtWv5fQGhaQ8oBJw7wPx48xhiljCMXeqW2F6LX%2B2A3NwvQViUwA%2BqdIpLHjDFUBHjOAGrQlCY1b1Fx9ZniEC10ivCF1SQQ22gY6tj57J%2BOoMDjabx4du&X-Amz-Signature=9f0d5bc6b91de0822474aa371beb1a42e039a072bb6af04961fc85173b43dcb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
