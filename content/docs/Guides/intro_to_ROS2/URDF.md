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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOEXM7K%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIG1X3M%2BJOVhijnqz%2FXuFuR7oKhcKKVbepyStkjMTds2gAiEAhDizNWKgk7oGxBMUbNuNZdmJnWi3Ybzhg26vIG0kNyEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCEc0ZGa4N%2BECiKr3yrcA5VTNe%2Be7YA41UNszl5b80jdkpVc0F2JGahrX9%2BIg%2BUQUg3d9ng2qWdhkKNmXcgdeV3BjNdoOAoMP1YTUOMDwtBUu8E7KNy%2BMSZ2CJrEdAeIB0bYynSJa0Y6uSQ86L%2Byk2rIv2cXlAMRKufUSukvDSfVqvjYBgyjuSc4WI%2Fsv6XkR2i%2FhV72ZLntuh%2FonXrYTXv5RTA2dDJAHR9N7%2FUS9CNYhrJCllamOmn4KzMy7FfZ7y%2F%2BRpEITLkFrfYt3AOgddoyGLBIxeYSLL%2FNQcl92I38OwMlPov5f89sATbiy2hTjCMYpjZEp9cQoE6fIjfFCRdTZCn8qe9%2BDWVc44u%2Fprd2%2BB1aYbBAUVpjMMYL81%2F2PFIZ4ZQLNh4g9oIfl%2Fvwk92oFAJPBtkjaFAnaxl6oy5MAvWGZf2Ep8vb8vmo8wW%2B0DCIuyf68vJZO8SxQ1ukazoGXBAPySG9g4ojm%2FJ23V26%2BgwWLKsis6OILg6AO9HrJaCsBdEA%2Bv1Le012MFCnJBbwWg3w237tlPPXboP49kWC%2B61ySSFntdWwZdGfjQmY9qgsemRAyjhmAZNCEbpMhHCCc8MUAzXFqF0h5psLTlNu1Hv7h0mJTRS7R3duxelmgnOGNReMPnBwmfXGMN36lr0GOqUBGQHec4OZ%2Bo91UA1bvSBuGygwqKgTUhH0vbiUJkMnv%2B3nGHVPGyuuCCN%2F1zriDKYd2OpmuujcuNhzIx3lbVyHHizsfhU995xkbrQ5pZgaA%2BgAXXVGyCAjWAhuhUHn%2FdqQhtc4X6L5FB4RwMw7hyUtTgAIgDUZkKjoCO%2BhycbYfV%2BgFOWvO4MeqvjZqb%2FliJwbt7tTuUaPOgej3dyrTetcIfrwfpZ0&X-Amz-Signature=167b27db4776cd62825d8ce647910db343ca7aa645983b8e28d8b9085fe54d10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOEXM7K%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIG1X3M%2BJOVhijnqz%2FXuFuR7oKhcKKVbepyStkjMTds2gAiEAhDizNWKgk7oGxBMUbNuNZdmJnWi3Ybzhg26vIG0kNyEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCEc0ZGa4N%2BECiKr3yrcA5VTNe%2Be7YA41UNszl5b80jdkpVc0F2JGahrX9%2BIg%2BUQUg3d9ng2qWdhkKNmXcgdeV3BjNdoOAoMP1YTUOMDwtBUu8E7KNy%2BMSZ2CJrEdAeIB0bYynSJa0Y6uSQ86L%2Byk2rIv2cXlAMRKufUSukvDSfVqvjYBgyjuSc4WI%2Fsv6XkR2i%2FhV72ZLntuh%2FonXrYTXv5RTA2dDJAHR9N7%2FUS9CNYhrJCllamOmn4KzMy7FfZ7y%2F%2BRpEITLkFrfYt3AOgddoyGLBIxeYSLL%2FNQcl92I38OwMlPov5f89sATbiy2hTjCMYpjZEp9cQoE6fIjfFCRdTZCn8qe9%2BDWVc44u%2Fprd2%2BB1aYbBAUVpjMMYL81%2F2PFIZ4ZQLNh4g9oIfl%2Fvwk92oFAJPBtkjaFAnaxl6oy5MAvWGZf2Ep8vb8vmo8wW%2B0DCIuyf68vJZO8SxQ1ukazoGXBAPySG9g4ojm%2FJ23V26%2BgwWLKsis6OILg6AO9HrJaCsBdEA%2Bv1Le012MFCnJBbwWg3w237tlPPXboP49kWC%2B61ySSFntdWwZdGfjQmY9qgsemRAyjhmAZNCEbpMhHCCc8MUAzXFqF0h5psLTlNu1Hv7h0mJTRS7R3duxelmgnOGNReMPnBwmfXGMN36lr0GOqUBGQHec4OZ%2Bo91UA1bvSBuGygwqKgTUhH0vbiUJkMnv%2B3nGHVPGyuuCCN%2F1zriDKYd2OpmuujcuNhzIx3lbVyHHizsfhU995xkbrQ5pZgaA%2BgAXXVGyCAjWAhuhUHn%2FdqQhtc4X6L5FB4RwMw7hyUtTgAIgDUZkKjoCO%2BhycbYfV%2BgFOWvO4MeqvjZqb%2FliJwbt7tTuUaPOgej3dyrTetcIfrwfpZ0&X-Amz-Signature=7a7babb4ef68c8f10726e1b06b940834ba48ff65cbadd448ff9797de17ccd7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
