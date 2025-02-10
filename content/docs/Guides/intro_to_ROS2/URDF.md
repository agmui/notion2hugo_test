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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAODJVFQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKFu3NuGCQKBlldE3OioXJSinVnEDN2GqS8Jt2MmWQ9QIhAOWQhA1pY1N8Ek%2Fahp1AMyHqbtFd4NUE16pQ2s4uBl2vKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6rOheUyLQQujMHMq3AP%2BmQLYEAdAeLH825%2BcHZMV6tiZWLbaYpGMQrLaOleHPmUqEOZSJfUakpienCeFfY5CGHF0J6m32Mf11JfR1e5WYyE48WZEhPsj8UwK2%2FCuIqvlsgtyzHxrY0z2z0J4KUqs1lXB%2BHZKM%2BwZcEvgIMQn%2FC9X3dKBXTElXPdC7nJYWS819s2G7yfkor%2B2s%2BMkpgWmbxlbluGJz1zbAtyGuQEEwxI5kROp3ydLSfmL5RGsxumsDhDpIrzXPJacWek7yGg%2Bjp2uEa838z8ZAkCy9AzvgGD487zxN%2FsDeYJzqJxsDOsaeag3EU01vYbEj1eWgNRNL17TgTxJzuOVyhx9gsBHWJKO%2FauaNxkdHsp%2FavmfUwCT4gcpuOmM7RJDtEH6fN0ZRH0gNe8YfYkXwGDfhRz8p8kKizgZHz5v6GFgHlWZvr3WIy3Cl%2F%2FWCGbbyJ1GqWmkHaktwpGyIJtR34P1JQjRs26Hgc6PSMd4s5s4JOtgCbh1jc1sPXhOPxcMzJjtOkj4a7G%2BEUX8PNo5hztnbKRu7RBCXsQVgz9VUD18qxopZsukaCRTGK6EQ5PEPqsx4XPOr22hp1W3zqKAr2ARw3zforik1T4PsproptEY9ZUzeZbypfrYaP8YDFYuJDC72aa9BjqkAaTo7f5AHvTCg9LOQ8ka4HYD3kDRTt0y3OCr6rduU7jFyGcdvqnYikva7iguCFqL4ZnSJWtXwbfaRNoiAPP34IFP3G2L8yK4fKCLaAr3aC0TBPdFhlUerf0aTJkmszYTraJ1F5by4HihPvyLPI%2FVZUdbjuVm7f5%2BTj9a0WLytS1uJtQnFuKSGwKQJGVsWUNpCkh%2FB4eL4D8ZwXHDtV%2Fkey41gWCJ&X-Amz-Signature=1bfddb6b534ee8329011d2d19a5aa90b78547bf3364040f0554401eb054264c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAODJVFQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKFu3NuGCQKBlldE3OioXJSinVnEDN2GqS8Jt2MmWQ9QIhAOWQhA1pY1N8Ek%2Fahp1AMyHqbtFd4NUE16pQ2s4uBl2vKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy6rOheUyLQQujMHMq3AP%2BmQLYEAdAeLH825%2BcHZMV6tiZWLbaYpGMQrLaOleHPmUqEOZSJfUakpienCeFfY5CGHF0J6m32Mf11JfR1e5WYyE48WZEhPsj8UwK2%2FCuIqvlsgtyzHxrY0z2z0J4KUqs1lXB%2BHZKM%2BwZcEvgIMQn%2FC9X3dKBXTElXPdC7nJYWS819s2G7yfkor%2B2s%2BMkpgWmbxlbluGJz1zbAtyGuQEEwxI5kROp3ydLSfmL5RGsxumsDhDpIrzXPJacWek7yGg%2Bjp2uEa838z8ZAkCy9AzvgGD487zxN%2FsDeYJzqJxsDOsaeag3EU01vYbEj1eWgNRNL17TgTxJzuOVyhx9gsBHWJKO%2FauaNxkdHsp%2FavmfUwCT4gcpuOmM7RJDtEH6fN0ZRH0gNe8YfYkXwGDfhRz8p8kKizgZHz5v6GFgHlWZvr3WIy3Cl%2F%2FWCGbbyJ1GqWmkHaktwpGyIJtR34P1JQjRs26Hgc6PSMd4s5s4JOtgCbh1jc1sPXhOPxcMzJjtOkj4a7G%2BEUX8PNo5hztnbKRu7RBCXsQVgz9VUD18qxopZsukaCRTGK6EQ5PEPqsx4XPOr22hp1W3zqKAr2ARw3zforik1T4PsproptEY9ZUzeZbypfrYaP8YDFYuJDC72aa9BjqkAaTo7f5AHvTCg9LOQ8ka4HYD3kDRTt0y3OCr6rduU7jFyGcdvqnYikva7iguCFqL4ZnSJWtXwbfaRNoiAPP34IFP3G2L8yK4fKCLaAr3aC0TBPdFhlUerf0aTJkmszYTraJ1F5by4HihPvyLPI%2FVZUdbjuVm7f5%2BTj9a0WLytS1uJtQnFuKSGwKQJGVsWUNpCkh%2FB4eL4D8ZwXHDtV%2Fkey41gWCJ&X-Amz-Signature=0001d64007be16aa6e9fd816a9b13722f0ece20939d687c3dcd80ee74236d434&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
