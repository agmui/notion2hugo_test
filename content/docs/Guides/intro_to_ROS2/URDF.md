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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF2DJZ3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEt8hCoi%2Fx8ZkgbJCqOIKgQYcOdex73jzUQy9PyHyWz%2FAiAMx%2FhB8PPhh2HdfWFHVhJOS%2FbXJw5B3D17vjEZChnl7ir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMLHw%2FdzmDeBm4aK3OKtwDVgaP42nLi1nwQ%2ByVV6t9Nw4ebZiIN3DDDb0q1LeF31z9QuW3J%2Fp7dnB3pxTRRSVSt9KgMtXYcAOLwTFbvfFWHXs0cD2%2Fy85x5YfUvsVcFXkMRJjVXQEWy%2FuYUuCRaii6dNRPrlruzVQqNFfJGPHRl%2FgdAeY0j3je3EySELjMhhuAe6VC9ohSN%2FbeC4yxWJ2R0jFjPY%2BJE7lrzgST7UWYzOw%2BYVz0M72ctsyo0XwmI9EhkHRTR1ZdAHq6idyQiZaKb6uWvVoDZ5G7dx4Y4p2kjsWhLSy3Oc2z0X6607d0aq2ZIa7V3DGZkgqJW6JY0rGf0RW1q7B7Ia9zlc2000zwOB%2BPd%2BOayZpbhzBRoxg5OKOw0syCUt%2Bvc%2B6O1fFnwS8EB53xxlzc4bcO42PHnoihhj4BGnpiMSeUhnew7fQFbQwqQ2oyHAsZLVhRqgSLi6wlFSVJYHWgjirEh1VQKXVdD5drYG%2BZMvp%2BcSTBOG5EJBPo7riYq6MAWy%2BNPuu0AbDzqEWDbmo2KE3xlFmV7VnTR0YBGGOM481MEcuJk3lUpPT4dH0x40T8d0YF6gk6JU7mh%2FA4RLwGZ3tqRBTv5y%2BCyP%2BlJ%2FIzuO5Q1AuqE5%2BjIF9cucHffcqijx0LDX8woNORwQY6pgE9EX8jh1v4KK7PNOYJ7IHe8mLWSlQkFRF30c31nRVFrb%2FUUuQJKY3%2BEaLDR6%2Bx8oy9Yju%2Fj7jWyGUeD9aH9JT42nSy%2BB2Wgc8KOrn3o800W127fw91CKo65eii5kJd2egFEFzOR7OnrOmqqItmhqUMssjVe6dy3KCdOI7um%2BVcLffLMsYdR3UCKk1YzMKAMdVyuVRiFfdlYZfeEVtUoU%2BR8Utel9td&X-Amz-Signature=3d24d2bf51b19d62df31691c14c0c7c7dc927fe8a152d94ffe5a3dbbed7ed4df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF2DJZ3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEt8hCoi%2Fx8ZkgbJCqOIKgQYcOdex73jzUQy9PyHyWz%2FAiAMx%2FhB8PPhh2HdfWFHVhJOS%2FbXJw5B3D17vjEZChnl7ir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMLHw%2FdzmDeBm4aK3OKtwDVgaP42nLi1nwQ%2ByVV6t9Nw4ebZiIN3DDDb0q1LeF31z9QuW3J%2Fp7dnB3pxTRRSVSt9KgMtXYcAOLwTFbvfFWHXs0cD2%2Fy85x5YfUvsVcFXkMRJjVXQEWy%2FuYUuCRaii6dNRPrlruzVQqNFfJGPHRl%2FgdAeY0j3je3EySELjMhhuAe6VC9ohSN%2FbeC4yxWJ2R0jFjPY%2BJE7lrzgST7UWYzOw%2BYVz0M72ctsyo0XwmI9EhkHRTR1ZdAHq6idyQiZaKb6uWvVoDZ5G7dx4Y4p2kjsWhLSy3Oc2z0X6607d0aq2ZIa7V3DGZkgqJW6JY0rGf0RW1q7B7Ia9zlc2000zwOB%2BPd%2BOayZpbhzBRoxg5OKOw0syCUt%2Bvc%2B6O1fFnwS8EB53xxlzc4bcO42PHnoihhj4BGnpiMSeUhnew7fQFbQwqQ2oyHAsZLVhRqgSLi6wlFSVJYHWgjirEh1VQKXVdD5drYG%2BZMvp%2BcSTBOG5EJBPo7riYq6MAWy%2BNPuu0AbDzqEWDbmo2KE3xlFmV7VnTR0YBGGOM481MEcuJk3lUpPT4dH0x40T8d0YF6gk6JU7mh%2FA4RLwGZ3tqRBTv5y%2BCyP%2BlJ%2FIzuO5Q1AuqE5%2BjIF9cucHffcqijx0LDX8woNORwQY6pgE9EX8jh1v4KK7PNOYJ7IHe8mLWSlQkFRF30c31nRVFrb%2FUUuQJKY3%2BEaLDR6%2Bx8oy9Yju%2Fj7jWyGUeD9aH9JT42nSy%2BB2Wgc8KOrn3o800W127fw91CKo65eii5kJd2egFEFzOR7OnrOmqqItmhqUMssjVe6dy3KCdOI7um%2BVcLffLMsYdR3UCKk1YzMKAMdVyuVRiFfdlYZfeEVtUoU%2BR8Utel9td&X-Amz-Signature=880260dc31f628d50722f6a959994a54d7ef2596811c9a106ffa09383bf544eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
