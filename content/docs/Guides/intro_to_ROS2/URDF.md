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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLM3G65H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAnLgALYzogRebYXuz%2BVNEWcDmBPQtusP9aHJ6JjHJ5HAiBQ8pGdEcRglpv4VQ0gbLHyQ4dLwJaBuYTIjNkxUKD%2B1Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMjaHkSUR88FXhPIJxKtwD%2B3U2l2OUpYOCtashiodkTKfqJtzf6gLl%2FgYJVUAKbM%2F8dSxPLxILT5tFz93Xkb7yH8ohmJ20q%2FWueKBa8%2Bb2%2BLj2%2BpiH6PSX1SGbTvWK8FYZXpd%2Bgx0b5CrGoa3tHSJK64eHKDo%2FlETWi%2BnZeARsleE4c%2F%2BQprQ6pJnaACy6OAhUEvITkaZrHQtjk4N3Rj4W5JYEsES10p%2BcTVB9R4qEbLISJJSMW7hua0R5liqu0q4a2pIBtcfq6w%2Bp70XTRKv1vpQvmyVT0FtW2Y8cGzsdkJJajt08r2PjpO1y335wMOSXIFA1F%2Ft29q96jRTdoc8WednGbFj2UtNFdDAenadozsi8tS35K47jc0dfYTh9n6QkHEBHQwYin0pZTiCPnBg6Vyq%2Bt5QpRjPwSjFKB4YfcYDecfMfOrpb3q5OK7SITARYcUbjLo8xW%2B8GVyKumf8ZC%2BeR30md2krLPoSL73DPm9R6zjyJAqu%2B69vjHT%2BZ5ay%2BQT7NznGgy3xwV6DTd94264PF7O3yySvdkouaK7Jb88bzYWXcnMJ9z3FKil5vDbzGnGuvJvX93%2B1kaIcAKzZ2P%2FSUWq%2FMK4QUersA7hQIX2YpgESMhUKOan1H7bIzQ1f7UJKDihwzGYGvHsMwkdv9xAY6pgGCVoqNcCVvK8VKjOL9fsbnraVWk61K%2BzUF9JpHkhjG2UjdHvoPKigu3RcHPHiMORAgBgOSyuGyRqYdWgKOfUDgkHMua1S5KqD3GLJ8%2FVbg3fp8qRXP7iZppADuc3arxnPDkrvmebGGV4ajDyoDaqgtGMjKQh32dILKFuhK%2B7BIfZLIa%2B2j5dF0LvwdB9FHWv%2BRoHDdIr747Ofozp1YebAQaVi4MPQo&X-Amz-Signature=0741e27a222214ac1bc38d360135a7c777fbe7528fa0b1ef105f4b4dd93c92c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLM3G65H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAnLgALYzogRebYXuz%2BVNEWcDmBPQtusP9aHJ6JjHJ5HAiBQ8pGdEcRglpv4VQ0gbLHyQ4dLwJaBuYTIjNkxUKD%2B1Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMjaHkSUR88FXhPIJxKtwD%2B3U2l2OUpYOCtashiodkTKfqJtzf6gLl%2FgYJVUAKbM%2F8dSxPLxILT5tFz93Xkb7yH8ohmJ20q%2FWueKBa8%2Bb2%2BLj2%2BpiH6PSX1SGbTvWK8FYZXpd%2Bgx0b5CrGoa3tHSJK64eHKDo%2FlETWi%2BnZeARsleE4c%2F%2BQprQ6pJnaACy6OAhUEvITkaZrHQtjk4N3Rj4W5JYEsES10p%2BcTVB9R4qEbLISJJSMW7hua0R5liqu0q4a2pIBtcfq6w%2Bp70XTRKv1vpQvmyVT0FtW2Y8cGzsdkJJajt08r2PjpO1y335wMOSXIFA1F%2Ft29q96jRTdoc8WednGbFj2UtNFdDAenadozsi8tS35K47jc0dfYTh9n6QkHEBHQwYin0pZTiCPnBg6Vyq%2Bt5QpRjPwSjFKB4YfcYDecfMfOrpb3q5OK7SITARYcUbjLo8xW%2B8GVyKumf8ZC%2BeR30md2krLPoSL73DPm9R6zjyJAqu%2B69vjHT%2BZ5ay%2BQT7NznGgy3xwV6DTd94264PF7O3yySvdkouaK7Jb88bzYWXcnMJ9z3FKil5vDbzGnGuvJvX93%2B1kaIcAKzZ2P%2FSUWq%2FMK4QUersA7hQIX2YpgESMhUKOan1H7bIzQ1f7UJKDihwzGYGvHsMwkdv9xAY6pgGCVoqNcCVvK8VKjOL9fsbnraVWk61K%2BzUF9JpHkhjG2UjdHvoPKigu3RcHPHiMORAgBgOSyuGyRqYdWgKOfUDgkHMua1S5KqD3GLJ8%2FVbg3fp8qRXP7iZppADuc3arxnPDkrvmebGGV4ajDyoDaqgtGMjKQh32dILKFuhK%2B7BIfZLIa%2B2j5dF0LvwdB9FHWv%2BRoHDdIr747Ofozp1YebAQaVi4MPQo&X-Amz-Signature=9a1ff1f84555862be8560e00020d74742d5eeabb60abd4bbbb8684d06d0a686a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
