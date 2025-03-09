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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXYJDLL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIDDIlR9U3bgEB4bL4DBZfAguIYOBnGXXXKNzN6o%2FGTnbAiAgmJj7h68ccCbyyrqfT%2FpeDVirVP7dUH7t6p11nxrWKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM82GGA20T3BhuFONoKtwD4lH1ZhcQKpC5Gz0Jp%2Fl0C2p3om7PKQE4eMtF6RpaNLSjzEXdBr1SUVanQ8tCiRaobY83IgwTVx0Z0gVzgWYeQnOBYcq0TnELi6X1HJdzwlyCAF7zgaUCmnVHpr6XwY1uAeiLivWKR35%2Bt5ms38wMT%2B2bOyzx3zKNIl7WqFrejwvNiHSNNtQFtPPipYR%2FS%2FvRFMs6YKpM8tHYt2Lq3D7r8ZXTHVbAww3icN0%2BgT4e3dMLiuroSoBOgeFBO7fvkkDhvfiThX0%2B3Vcfv8YZ2SA2dyIA7fMiOfGYVpRXXYnrxfeYL7rvk5cIGHNX5%2BnYIhnSVFJZuJ%2BWXbg0FMXe9z%2FskWHEeZch%2FRQgvbjNaGXMjVnfz%2F0x77DWUQ9lctQ7XdzHYF%2BEJOthDAW0FwdRvKjIlxkvBBobwcIlHN1s%2F2DhEL1wSi8wuLDtixV%2F07hBK0cMpmHGvfi%2FlptKXTjAwGFTh1gUVBb%2BxRVSwrZz2texo0LH0e8qhkPQYMwrADhe0V9TY%2Fkhw8Y9lOiM7JGlx%2FlRsEb4TqWtfSbqwqUy5iFHhU%2BVF66sx0CB9nTuzCnqXEGNd1%2Fy7wirXpp2kxpo8oqOcFnaGEW8bPiDMjWjAz7S8cviY6SLWE9Aj69WWnYwwqq3vgY6pgFoByVWWK8uO2Q%2BBIpSFBh%2FO%2FyPp%2BfTA1al0gosRhNCytcK8msfLrBIWxE99JrvHgpIuigqGirfyKOtdYtgy60hJ%2FYOIScXuzd2mzx3gWz6lRA1hPrKTc%2B2FThAeTviaMN9mU%2BHHqxrvxot9yCoVTmvJXQwf%2B%2F%2B2VZ3vrVnfjkZAAvWRaQjTHdRCQC5KHXrjwX%2FVJRciWw533Cg%2BsbLGgM%2FSbKCdTLf&X-Amz-Signature=e01aa14e3d8c4e443bbd8cccedc3a8eaa9022d9378b5c9cc15903c5f05a0ba5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXYJDLL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIDDIlR9U3bgEB4bL4DBZfAguIYOBnGXXXKNzN6o%2FGTnbAiAgmJj7h68ccCbyyrqfT%2FpeDVirVP7dUH7t6p11nxrWKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM82GGA20T3BhuFONoKtwD4lH1ZhcQKpC5Gz0Jp%2Fl0C2p3om7PKQE4eMtF6RpaNLSjzEXdBr1SUVanQ8tCiRaobY83IgwTVx0Z0gVzgWYeQnOBYcq0TnELi6X1HJdzwlyCAF7zgaUCmnVHpr6XwY1uAeiLivWKR35%2Bt5ms38wMT%2B2bOyzx3zKNIl7WqFrejwvNiHSNNtQFtPPipYR%2FS%2FvRFMs6YKpM8tHYt2Lq3D7r8ZXTHVbAww3icN0%2BgT4e3dMLiuroSoBOgeFBO7fvkkDhvfiThX0%2B3Vcfv8YZ2SA2dyIA7fMiOfGYVpRXXYnrxfeYL7rvk5cIGHNX5%2BnYIhnSVFJZuJ%2BWXbg0FMXe9z%2FskWHEeZch%2FRQgvbjNaGXMjVnfz%2F0x77DWUQ9lctQ7XdzHYF%2BEJOthDAW0FwdRvKjIlxkvBBobwcIlHN1s%2F2DhEL1wSi8wuLDtixV%2F07hBK0cMpmHGvfi%2FlptKXTjAwGFTh1gUVBb%2BxRVSwrZz2texo0LH0e8qhkPQYMwrADhe0V9TY%2Fkhw8Y9lOiM7JGlx%2FlRsEb4TqWtfSbqwqUy5iFHhU%2BVF66sx0CB9nTuzCnqXEGNd1%2Fy7wirXpp2kxpo8oqOcFnaGEW8bPiDMjWjAz7S8cviY6SLWE9Aj69WWnYwwqq3vgY6pgFoByVWWK8uO2Q%2BBIpSFBh%2FO%2FyPp%2BfTA1al0gosRhNCytcK8msfLrBIWxE99JrvHgpIuigqGirfyKOtdYtgy60hJ%2FYOIScXuzd2mzx3gWz6lRA1hPrKTc%2B2FThAeTviaMN9mU%2BHHqxrvxot9yCoVTmvJXQwf%2B%2F%2B2VZ3vrVnfjkZAAvWRaQjTHdRCQC5KHXrjwX%2FVJRciWw533Cg%2BsbLGgM%2FSbKCdTLf&X-Amz-Signature=53963ff4b16c1cb0884cff2840f74e393d84510089093ab5a013c554c219a256&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
