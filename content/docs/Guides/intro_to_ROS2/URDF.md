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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXR7D2R%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5gPRNm6hquB1gUQJkCRViLlm%2B%2BSg%2FTpP%2F3nKozD8EFAiEAoXBBVBgScZMQ7NqBkgA0j%2B7VxBHpcRkm6YYaZSg2mP4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHikHH9HT3aaAsDpeircAzAcD6Me17imSCl4WCDcDNXSl0wPsjBx8wJcF%2B4KKFaKk5FQ44%2BAbMQs0X6BI%2FeJNEJqiBcPWuQAlUMEz2ctWdqprPi%2BLReyab0Ns9QjcPlOSvdLWY%2Bn9nZwgughDzxxRKOO9G9Y8e1hbZaoOvs6Dm3wH9TXPdhJoMQNoxehUybT5C2GiaR46zv9CIOPq3lXGMho%2B5nkSD9Sp%2BxReC39PNpx3s2oTDqDVrGkQsonfOPo4nESN0u5%2FbZE03xOof6tHkDN3iupGmWRQv%2F396sbPFkvTIkkwk2ksHZPXh3fPdLQExFKPI0ej3uRqFAas5OnPXRNryRXpEPFo7XXWfvdABecddosK589FPTyW2zKcJvC5pqI8IAUGFfXkOQoyGGzOtQ9BDykmUQY1yk9jPx48aOyUjEKCMbMtYTXp%2FRMaPmhMB8nmEqkjeX4%2BDvHc9xyfuEBn8NqyUZwz1sm8GrzmyWXEUwjYPQOpqCRMYJhAv0ojQdxg2PqV%2BUz4aFQKuaXRThqfAFcBjeseCkM%2Bw4dsXU%2FHqejwE4w23a%2F1RggKO1vGZ9DRQnRRqQMk%2BDoSqf7iCEx4stNEx2VhKiPvLa2qKl%2BaKtazBg2Qm1vtexEGcBwmKXs5%2BzQfctQnztOMOqez8EGOqUB9bGGVAOM%2BzMVnnUb2iqvJ0mO6h7KkwOWxDV6Obr2153CwbXfAo3kK%2BjdXWZOIK2ZFuGugeQxna%2FrC9fbWB%2FvyzU0kWT0W7OA7wfpThlmUx47hKeoRbE897hv0Gv0vBrgYfGnkcv64chjp%2F5AirJDCLIfNZCyg9GN9NyHslyf4TrQHgbldXgmEK8yYSwnZ2SdswujB00hZgkr0sOCDvcd%2BcXM5XCb&X-Amz-Signature=34b91df5bd211621af35d18e4a2812872974cd4c9c5c72a3196feefa49eb80e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXR7D2R%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5gPRNm6hquB1gUQJkCRViLlm%2B%2BSg%2FTpP%2F3nKozD8EFAiEAoXBBVBgScZMQ7NqBkgA0j%2B7VxBHpcRkm6YYaZSg2mP4q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHikHH9HT3aaAsDpeircAzAcD6Me17imSCl4WCDcDNXSl0wPsjBx8wJcF%2B4KKFaKk5FQ44%2BAbMQs0X6BI%2FeJNEJqiBcPWuQAlUMEz2ctWdqprPi%2BLReyab0Ns9QjcPlOSvdLWY%2Bn9nZwgughDzxxRKOO9G9Y8e1hbZaoOvs6Dm3wH9TXPdhJoMQNoxehUybT5C2GiaR46zv9CIOPq3lXGMho%2B5nkSD9Sp%2BxReC39PNpx3s2oTDqDVrGkQsonfOPo4nESN0u5%2FbZE03xOof6tHkDN3iupGmWRQv%2F396sbPFkvTIkkwk2ksHZPXh3fPdLQExFKPI0ej3uRqFAas5OnPXRNryRXpEPFo7XXWfvdABecddosK589FPTyW2zKcJvC5pqI8IAUGFfXkOQoyGGzOtQ9BDykmUQY1yk9jPx48aOyUjEKCMbMtYTXp%2FRMaPmhMB8nmEqkjeX4%2BDvHc9xyfuEBn8NqyUZwz1sm8GrzmyWXEUwjYPQOpqCRMYJhAv0ojQdxg2PqV%2BUz4aFQKuaXRThqfAFcBjeseCkM%2Bw4dsXU%2FHqejwE4w23a%2F1RggKO1vGZ9DRQnRRqQMk%2BDoSqf7iCEx4stNEx2VhKiPvLa2qKl%2BaKtazBg2Qm1vtexEGcBwmKXs5%2BzQfctQnztOMOqez8EGOqUB9bGGVAOM%2BzMVnnUb2iqvJ0mO6h7KkwOWxDV6Obr2153CwbXfAo3kK%2BjdXWZOIK2ZFuGugeQxna%2FrC9fbWB%2FvyzU0kWT0W7OA7wfpThlmUx47hKeoRbE897hv0Gv0vBrgYfGnkcv64chjp%2F5AirJDCLIfNZCyg9GN9NyHslyf4TrQHgbldXgmEK8yYSwnZ2SdswujB00hZgkr0sOCDvcd%2BcXM5XCb&X-Amz-Signature=bf1c1ab51b2234dc3c6c89e971c299b2dc7df880cf305673a2198ff563790a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
