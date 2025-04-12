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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIP26UZH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDJ1PThN1VXUxk7QtwZIgB7OGIX6mTbcy%2FTApHhJi148QIhAJavz0d7lA%2BsLPnX7W31%2Fp%2Fa1zu%2BQRmPFwJ%2BA7YRh26QKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyZiVZvXFfaPDG7zoq3AO3PX5jYV38Ihu1VK2KCl0gaIBTLNELmYAk8C%2FtJdsiSgZT7z8jA%2FhBe3uvtiwwbp0NyIixR9P4ZrNCzFfsZIwwWp2lAxIw34yIqk6rylmOWQoX6GTJGHpL%2BCbgE%2F%2F3LdphGqHMFbBU8GTqJvgMB6Dcy0%2BgpQeem9hZwpSavF9%2BSkzAWDW9BZxU9HO0A6afw2b%2FCRgtxDxX2Jz5uNSxyCZReldzukHpmXBPY2JomEX7b7PJhcPu7%2FW%2BIWb4ssxMPllLrMy%2B3JoQaMX5RmfQpw8CSwkMzgQMkRjKzFaMTKfxRxZhr2MXQjDofuptj2R%2Bw3JJpK38Fq%2BNX%2Bhzfj%2BFQHA5G%2FlZvt6F35YEAFl9upedE2S0cvR%2B0vVbL%2FHMf%2BE4eSWR1E8E02tYLAAODaSKbXS2M9jkgzVaXbYhWWWzh%2F4hg0n7zbr27zwFOSqk%2F2NvkDQbi5BxEaSmvWrOBoDByxmcrDM5Y7o2GMpTe8RVAdWBR7xlUPyTjjDlN4HOFOFUMKdjMA4zEb9m4IhudbUK07otR2SJG3KSU7GK1lsUG5bp5CfeFiwN5JLv0Sd2IHGcCq4wh9VQd2rlVJD%2BywvwKbi%2Be8lae6zZbus3eTGoT4duq3p7KAUAL4zGtVGTozDpsOu%2FBjqkAXJ34m4dFOJfeknv%2BkMK2ULDcnIDQfaG7WgoW2IlsWZ50Kz9laGKXKKfgY9lZERCaXm9kdBpTyNKLARic0OH61zKDHtSKxU%2FJLFgMzKCzdmVlHat1J2G8MT9m6K0pdQY8jBEr98pPq6xAarXC0OAzID31kF0ASXV6%2FH3p9cjJx8vx4cbktSvdhcqLQZ8iiCRKSBISjFSvkUhiFjtOm6uEOFf16La&X-Amz-Signature=108a1c14974ba4d7a063485216520dfe0e4185930610a4ae8099f7aa1b7c8032&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIP26UZH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDJ1PThN1VXUxk7QtwZIgB7OGIX6mTbcy%2FTApHhJi148QIhAJavz0d7lA%2BsLPnX7W31%2Fp%2Fa1zu%2BQRmPFwJ%2BA7YRh26QKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyZiVZvXFfaPDG7zoq3AO3PX5jYV38Ihu1VK2KCl0gaIBTLNELmYAk8C%2FtJdsiSgZT7z8jA%2FhBe3uvtiwwbp0NyIixR9P4ZrNCzFfsZIwwWp2lAxIw34yIqk6rylmOWQoX6GTJGHpL%2BCbgE%2F%2F3LdphGqHMFbBU8GTqJvgMB6Dcy0%2BgpQeem9hZwpSavF9%2BSkzAWDW9BZxU9HO0A6afw2b%2FCRgtxDxX2Jz5uNSxyCZReldzukHpmXBPY2JomEX7b7PJhcPu7%2FW%2BIWb4ssxMPllLrMy%2B3JoQaMX5RmfQpw8CSwkMzgQMkRjKzFaMTKfxRxZhr2MXQjDofuptj2R%2Bw3JJpK38Fq%2BNX%2Bhzfj%2BFQHA5G%2FlZvt6F35YEAFl9upedE2S0cvR%2B0vVbL%2FHMf%2BE4eSWR1E8E02tYLAAODaSKbXS2M9jkgzVaXbYhWWWzh%2F4hg0n7zbr27zwFOSqk%2F2NvkDQbi5BxEaSmvWrOBoDByxmcrDM5Y7o2GMpTe8RVAdWBR7xlUPyTjjDlN4HOFOFUMKdjMA4zEb9m4IhudbUK07otR2SJG3KSU7GK1lsUG5bp5CfeFiwN5JLv0Sd2IHGcCq4wh9VQd2rlVJD%2BywvwKbi%2Be8lae6zZbus3eTGoT4duq3p7KAUAL4zGtVGTozDpsOu%2FBjqkAXJ34m4dFOJfeknv%2BkMK2ULDcnIDQfaG7WgoW2IlsWZ50Kz9laGKXKKfgY9lZERCaXm9kdBpTyNKLARic0OH61zKDHtSKxU%2FJLFgMzKCzdmVlHat1J2G8MT9m6K0pdQY8jBEr98pPq6xAarXC0OAzID31kF0ASXV6%2FH3p9cjJx8vx4cbktSvdhcqLQZ8iiCRKSBISjFSvkUhiFjtOm6uEOFf16La&X-Amz-Signature=701e69f9742d8881bf93f14e0f98165b927fcfe7e68b4c15477830cae134a7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
