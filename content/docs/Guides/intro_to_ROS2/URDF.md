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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5W4K22%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf8h16LN4n3dufW5vFg91hCeCLjPsrKQsyAvG0WEXatAIhAI6ZtQc06auCdA6PudJjtc2%2BT%2BOcD30YfiAClk5XZtApKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNjndO2V0%2FvdBBkfwq3ANwGbuudjAoUNTcf8S1vHYrDSdc9MHhILPUO009AdQvzmgt0%2B9LrVpE7GwjhYoA2VMPY13lrfyfQJMr0QaDIIpFx71VYQjKB0BYbNn9Bk0WPqOvsdpcqRhMeABAckB0Rf6rjSY1qQqP9FfnP1C%2BAwPnqhu06Oh0yWAwbpsuLi1d5GUJ5XOwW9LuhJOZXMA2M2S1lB6kF1YgzsRcIijgiwfkgB5VPjMPbnEluWC%2BUC7IC2nGHkivNSdaXuaRUzgyS%2BNWnHONHsmSMw4gR2IblK9KKA6i0a0OAyrDaDxHoEnsnvmdQBLOwW8gaJmPwYpVC2vGEDeZwaiZORgeXqdSDiTYZ7e7X42IRpM0vINTe45x1iwM%2FayKHctlCGwvE3NXxH6l3r6cXPYu92pgK7i6DHOSH77BUiBzGIxe%2B%2FqYZK1DMBnWPpC6MHcqpWkE%2BASARJMVfbMkyH4YHDRB%2BytPwHe0nCZ2YIhOX8rImUrTiYenGMJbIKTu0MHYL6mNqmeaM3SzcYupShhllp1ryGoLzhKFWpjbxVE5%2BxrgwSCqQyiIPNniyK0kXyEQCLvXZEYY2i6CPM2FvbcKR1Y%2FyA629ZivqTrpFj38fnMgWUNuA7fRQoZyCk1fDvODf51wxjCqlqTCBjqkAbEc4JvV78%2FwZlsIfv6L%2FkXVVtx6DFqxJv1Q0t1yFgfXip1Hr5ZmNhkztYAuRd3k%2FosybZKNcdu50k5t5Xs90UkwVOWJNTPi%2F3U3P8yjzT%2FpKXiMVqCVKIwJ9bzfBc48%2FyXOcfdeUZVs8yL9OpvXe9KdvCyLBb5s4lcVb8S1ATRDyJWKux9V682FjrtGO7CY4lpVa2Id8DVZAFvULG2rrIuohfUn&X-Amz-Signature=dd3c69a25d4f95e104993d230678d7f891129661b93ee7accff1d21a58dd96a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5W4K22%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf8h16LN4n3dufW5vFg91hCeCLjPsrKQsyAvG0WEXatAIhAI6ZtQc06auCdA6PudJjtc2%2BT%2BOcD30YfiAClk5XZtApKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNjndO2V0%2FvdBBkfwq3ANwGbuudjAoUNTcf8S1vHYrDSdc9MHhILPUO009AdQvzmgt0%2B9LrVpE7GwjhYoA2VMPY13lrfyfQJMr0QaDIIpFx71VYQjKB0BYbNn9Bk0WPqOvsdpcqRhMeABAckB0Rf6rjSY1qQqP9FfnP1C%2BAwPnqhu06Oh0yWAwbpsuLi1d5GUJ5XOwW9LuhJOZXMA2M2S1lB6kF1YgzsRcIijgiwfkgB5VPjMPbnEluWC%2BUC7IC2nGHkivNSdaXuaRUzgyS%2BNWnHONHsmSMw4gR2IblK9KKA6i0a0OAyrDaDxHoEnsnvmdQBLOwW8gaJmPwYpVC2vGEDeZwaiZORgeXqdSDiTYZ7e7X42IRpM0vINTe45x1iwM%2FayKHctlCGwvE3NXxH6l3r6cXPYu92pgK7i6DHOSH77BUiBzGIxe%2B%2FqYZK1DMBnWPpC6MHcqpWkE%2BASARJMVfbMkyH4YHDRB%2BytPwHe0nCZ2YIhOX8rImUrTiYenGMJbIKTu0MHYL6mNqmeaM3SzcYupShhllp1ryGoLzhKFWpjbxVE5%2BxrgwSCqQyiIPNniyK0kXyEQCLvXZEYY2i6CPM2FvbcKR1Y%2FyA629ZivqTrpFj38fnMgWUNuA7fRQoZyCk1fDvODf51wxjCqlqTCBjqkAbEc4JvV78%2FwZlsIfv6L%2FkXVVtx6DFqxJv1Q0t1yFgfXip1Hr5ZmNhkztYAuRd3k%2FosybZKNcdu50k5t5Xs90UkwVOWJNTPi%2F3U3P8yjzT%2FpKXiMVqCVKIwJ9bzfBc48%2FyXOcfdeUZVs8yL9OpvXe9KdvCyLBb5s4lcVb8S1ATRDyJWKux9V682FjrtGO7CY4lpVa2Id8DVZAFvULG2rrIuohfUn&X-Amz-Signature=fcf2511cd76c072abb76061370b2252d56ff2ecbbca57e5de1c50cb494ba0eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
