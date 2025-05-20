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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDHRRQA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0BwjjioK%2F6EYTx%2FyoaOYg9JCFoUne9xl6gPwOJBvMaAiEA8afYNnTNXz1nYHA36B7LPJWvYK5jIiPk%2Fn3iI79wfKMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCTYcVI4%2B5TDWV%2FECrcAzDwckTvqyu1jpWXoR5x%2FjJ%2BwLP41WlI0OZBav%2FUqq1kJ0fJNKShXg0qie3KLnFe87zEFAd%2FYekVO%2BOx8nA8LyO3t4eF50bTs5OoqI7QUfD5ceC4i%2Ftzc2g%2BhQrmZKJYLT%2BpMoeLJ99VJjrciLJovg1EnbvJbsInrJQU1fUtfj4MePmnxmgSzuEWOWKoxdxb4MKtyPtn1r9WHzTMt4t0r%2FoKMGSXG05wironLHoYEDag%2BluKC1Of5a7o9IvU39IR%2BFeSqc7rQrohSOynfTqyhvjg0phiUZLTSdg6AmpFOk20yXL3Cp30jeHXYzR%2FUgva55jIE9Kfv%2B0JZcdhfmXXSjBwcDITsxypXN0WlGDNNR414lDlc0SWr3n6EtDmZtszquScSHCT1wXq0fk5fYG3BQaUc6mLG4Ekwht9VMYKrVtA2rY6d5ZCceBdVoH4zo8eLFRMqqRbagurO1aJpV%2BGNaRLnMwJ8bW1Pk8Sj6PCz3vSv7pSCICCvqYdU0rloL%2FPRAe5IM2%2FD%2BfrI1f%2F%2FqCxLAGOKkFako2kQLEPfhn5oVKWKEyBmKxKa3KYsRJcTgwB0kvDq9rLZaHqLEi2IZhXiTtk6tQpLYsrQapM0J84gi8zgzBvJDuNwgDANgb4MIfKssEGOqUBVzQk0J0sngW7MnKypAv4LI0GSXT8nQ9ErXb%2FvMqAFbOXVDUMpyCigB2mFzMVLIUANyPd01DXjdPRwQwMCEnOsm8pyFIJUvzpUgkO3jI9w3hVatEqRy8Gtyv9eh8lATIR%2FPh38pzPK6yi2Ib3kEmmqxoRljRE8AH4Im578xba13m15La6sB9m5vcxHJHcR72UTmvQHXyxcGJfM3M%2F%2BDOXqgEe13d9&X-Amz-Signature=b13cc20d706766dec694cc8e7285536fe03cba6d157928b2980a8d6301c9d817&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDHRRQA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0BwjjioK%2F6EYTx%2FyoaOYg9JCFoUne9xl6gPwOJBvMaAiEA8afYNnTNXz1nYHA36B7LPJWvYK5jIiPk%2Fn3iI79wfKMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCTYcVI4%2B5TDWV%2FECrcAzDwckTvqyu1jpWXoR5x%2FjJ%2BwLP41WlI0OZBav%2FUqq1kJ0fJNKShXg0qie3KLnFe87zEFAd%2FYekVO%2BOx8nA8LyO3t4eF50bTs5OoqI7QUfD5ceC4i%2Ftzc2g%2BhQrmZKJYLT%2BpMoeLJ99VJjrciLJovg1EnbvJbsInrJQU1fUtfj4MePmnxmgSzuEWOWKoxdxb4MKtyPtn1r9WHzTMt4t0r%2FoKMGSXG05wironLHoYEDag%2BluKC1Of5a7o9IvU39IR%2BFeSqc7rQrohSOynfTqyhvjg0phiUZLTSdg6AmpFOk20yXL3Cp30jeHXYzR%2FUgva55jIE9Kfv%2B0JZcdhfmXXSjBwcDITsxypXN0WlGDNNR414lDlc0SWr3n6EtDmZtszquScSHCT1wXq0fk5fYG3BQaUc6mLG4Ekwht9VMYKrVtA2rY6d5ZCceBdVoH4zo8eLFRMqqRbagurO1aJpV%2BGNaRLnMwJ8bW1Pk8Sj6PCz3vSv7pSCICCvqYdU0rloL%2FPRAe5IM2%2FD%2BfrI1f%2F%2FqCxLAGOKkFako2kQLEPfhn5oVKWKEyBmKxKa3KYsRJcTgwB0kvDq9rLZaHqLEi2IZhXiTtk6tQpLYsrQapM0J84gi8zgzBvJDuNwgDANgb4MIfKssEGOqUBVzQk0J0sngW7MnKypAv4LI0GSXT8nQ9ErXb%2FvMqAFbOXVDUMpyCigB2mFzMVLIUANyPd01DXjdPRwQwMCEnOsm8pyFIJUvzpUgkO3jI9w3hVatEqRy8Gtyv9eh8lATIR%2FPh38pzPK6yi2Ib3kEmmqxoRljRE8AH4Im578xba13m15La6sB9m5vcxHJHcR72UTmvQHXyxcGJfM3M%2F%2BDOXqgEe13d9&X-Amz-Signature=0a8a4ca15da5ffabf7c7430a3ea95b3d0d76541d5cdef9350eb02a0598755961&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
