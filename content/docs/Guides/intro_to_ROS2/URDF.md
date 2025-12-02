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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKTCBFE%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIGp9JewlxKcdxRr2%2FSfuQfRwem%2Fx%2F16uXdd5bv%2BNtRgCAiBtaPHLh%2FtIwRfDuuESzAAz%2FXk5tUPlAxmlPdQqnC1jgSr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMbb%2BBUwptlb4R7x9NKtwD8g2Epz5r1W5HxSFq2oOfS8ZPs6vTiPXLv7k4TT3Cm6RLMB2l4wj1fReMf5orjnSh5iskDuWMX33pJm8XJZrk42Ts2KN9UNkhY%2Bq43pz%2Br5wId2d3lGmgkoSF2%2BmhwdNeZQ7EZ8O5h1jMKz%2BbTmr3%2Fmlm5pZzIEFG9hVcX%2FeN4q5ERtNBYAX5gGDiDT5U4kyf%2B6QfG27rtPQyjXSWidTFmd89zp0GhrMgw4mkA%2FIwFsNbWWiSqGoHEcRP0lcrHiWP2YTfWPMmejn%2BHsS7NTa9WF2f7Qn8hIQ3j4LgwoWZjikD%2B5cqWw2Xa6PkEuejztmHKikPtiMB05fwDVKpHnhgHozOUSlVlGdxnNhHrYHh8Q%2BVVyyiYc4UO7s1XzgrWFiUsHc74tqqp1VjD7S6%2FfA58288DWFYs8%2FVfeNFe2cPeCjDknByf8Kirnwfz%2FbEM6PO7hMOjIasJ06rPaPxLkDuEg1uJ2%2FvdVQurQf%2FPhZ88m4%2Bb5j1qZNw%2FsUiNqubyKktCrooiFwqfXTUakx9VnNNwKBaRmCOnxc3i7FvBwaV9UJMTRJ%2FY7xc4dQAbbwzumok%2Bch3uCGKnidd%2Frhk8xbj3LQs5t8JRWLpCcNKUlml7vSYFrc4JhLShdMgF88w8924yQY6pgF68R18CNBX8%2F0UDboDC42zj9D%2BVvze%2BUbpfLEGRr%2FpyWJD38ezVcS6KErsX0jIztU5yHLnlQr%2FK%2FRXaQhCuatfnbvK6x0qZCRZ72W1qtpN5OmEnnTcxMYyrapfEckOgOQldy1fYekDUAsVZx3a4UiSX4niRiduvH1Ps8219kQWCOnd1nkpx0XA5hDV%2Bs2wPShY2zK3NjiklhbmBwTs%2BEOfHAG%2B9Pvp&X-Amz-Signature=e20ca9ae11993a56a1a66118ac1cc2b1ead02b68d15172b417a2ab12acfb88f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKTCBFE%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIGp9JewlxKcdxRr2%2FSfuQfRwem%2Fx%2F16uXdd5bv%2BNtRgCAiBtaPHLh%2FtIwRfDuuESzAAz%2FXk5tUPlAxmlPdQqnC1jgSr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMbb%2BBUwptlb4R7x9NKtwD8g2Epz5r1W5HxSFq2oOfS8ZPs6vTiPXLv7k4TT3Cm6RLMB2l4wj1fReMf5orjnSh5iskDuWMX33pJm8XJZrk42Ts2KN9UNkhY%2Bq43pz%2Br5wId2d3lGmgkoSF2%2BmhwdNeZQ7EZ8O5h1jMKz%2BbTmr3%2Fmlm5pZzIEFG9hVcX%2FeN4q5ERtNBYAX5gGDiDT5U4kyf%2B6QfG27rtPQyjXSWidTFmd89zp0GhrMgw4mkA%2FIwFsNbWWiSqGoHEcRP0lcrHiWP2YTfWPMmejn%2BHsS7NTa9WF2f7Qn8hIQ3j4LgwoWZjikD%2B5cqWw2Xa6PkEuejztmHKikPtiMB05fwDVKpHnhgHozOUSlVlGdxnNhHrYHh8Q%2BVVyyiYc4UO7s1XzgrWFiUsHc74tqqp1VjD7S6%2FfA58288DWFYs8%2FVfeNFe2cPeCjDknByf8Kirnwfz%2FbEM6PO7hMOjIasJ06rPaPxLkDuEg1uJ2%2FvdVQurQf%2FPhZ88m4%2Bb5j1qZNw%2FsUiNqubyKktCrooiFwqfXTUakx9VnNNwKBaRmCOnxc3i7FvBwaV9UJMTRJ%2FY7xc4dQAbbwzumok%2Bch3uCGKnidd%2Frhk8xbj3LQs5t8JRWLpCcNKUlml7vSYFrc4JhLShdMgF88w8924yQY6pgF68R18CNBX8%2F0UDboDC42zj9D%2BVvze%2BUbpfLEGRr%2FpyWJD38ezVcS6KErsX0jIztU5yHLnlQr%2FK%2FRXaQhCuatfnbvK6x0qZCRZ72W1qtpN5OmEnnTcxMYyrapfEckOgOQldy1fYekDUAsVZx3a4UiSX4niRiduvH1Ps8219kQWCOnd1nkpx0XA5hDV%2Bs2wPShY2zK3NjiklhbmBwTs%2BEOfHAG%2B9Pvp&X-Amz-Signature=35881571eae7544aa6dc8f65b9dc0e754f9e42088fcdfcf71c37541d346bc34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
