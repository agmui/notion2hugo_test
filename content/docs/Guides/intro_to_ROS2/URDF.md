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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZXXTFT%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC0r1Atzs%2B6%2F2wSTd9RSJYwkfXmD1nT4ob9%2FlHDl2Od8gIgDeV8Yf%2BwUY0Np0vJ3lQlS1gpxzo1FDBWClckzvY5f8Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCcudTDMUz%2FJw%2BXWSyrcA2NZ4Ykl%2BMtLmuiF5qWD5ywHZo6yOGeWlXe3%2BNp0QxvE4miUK%2BIzGGzQs%2BgpRSSqOFtpJhFweRunQ%2FvTkvMUCEe2WRtkoRVZuRtVkDHaQ0wcysd6%2FfKvuMwAnNVPoyyRf66eYkzSpPp0XVG13tnyshq3S%2BZisRXfJDVmNY3jqwrlLfP8%2B7%2FSTi6Ic4231qNIH%2BXFTrTXblWha0Z%2BtBN5WMvnyhaOZaHV9UR4lJEcOm7o4M0Vi46PI2j%2BynLhUbZqCQsUSkPBrQ65hKtFJy5mfW492TVmq1Cyns3GGLmS4rxLIoytzoI6gqYqsDGqclJxyVk3fb2XOZZpkx6vNjLg2X5xELTl83zdFMGVylCiVIPnIj2z0ksmHHr47CfrLqOawU%2FPcCg14YJMyLJ7Dr7z2JejrX7%2BqqvYcEs4iWxlK53hK2ckefmBHLTYv4vdoTDTim4lOqcTI4RCwwkzjkt5wzu%2FSae1BmV7%2FZhX2%2Fq4Q7tkHa%2FNG7fv2Q4EENeXqHBlpG%2F4i9GIgiylS86iBk5gQ%2BsqC%2FsFjPYcODqOof3SvApC9DL9LfWBF7XQuTAKvTXMugdDg0YBgnkYgO4aMQ%2F2X5bVPmfeAStabHQndRCy1Okk%2BloBPRf%2FS0%2Ff8jwOMNqo1c8GOqUBjIOJNz%2FfLsDqrE5HKf4JhstESjoVjJUWuRXd5e4ceG46zWqHsAsiNuFYF37u6UOc%2FZsOMa%2B0idZyKsrJwpFglBDuLlmUEpBfi%2FkLh7Z4al%2F90vH6GepkYsFcN7e1ew842OoIm4AS5lmKyBNor44%2FEr1%2BeEOvUmdZvBXxAAccFFsryptRE%2FKsYHLWr2eK6rlnnIlPA9ToaP2nxVtKAaXJ8Xctlk5I&X-Amz-Signature=c5f2a5d98fd8bb00ca830e50f56d53b8465dafae5e795169a984db3aa02b9bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZXXTFT%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC0r1Atzs%2B6%2F2wSTd9RSJYwkfXmD1nT4ob9%2FlHDl2Od8gIgDeV8Yf%2BwUY0Np0vJ3lQlS1gpxzo1FDBWClckzvY5f8Yq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCcudTDMUz%2FJw%2BXWSyrcA2NZ4Ykl%2BMtLmuiF5qWD5ywHZo6yOGeWlXe3%2BNp0QxvE4miUK%2BIzGGzQs%2BgpRSSqOFtpJhFweRunQ%2FvTkvMUCEe2WRtkoRVZuRtVkDHaQ0wcysd6%2FfKvuMwAnNVPoyyRf66eYkzSpPp0XVG13tnyshq3S%2BZisRXfJDVmNY3jqwrlLfP8%2B7%2FSTi6Ic4231qNIH%2BXFTrTXblWha0Z%2BtBN5WMvnyhaOZaHV9UR4lJEcOm7o4M0Vi46PI2j%2BynLhUbZqCQsUSkPBrQ65hKtFJy5mfW492TVmq1Cyns3GGLmS4rxLIoytzoI6gqYqsDGqclJxyVk3fb2XOZZpkx6vNjLg2X5xELTl83zdFMGVylCiVIPnIj2z0ksmHHr47CfrLqOawU%2FPcCg14YJMyLJ7Dr7z2JejrX7%2BqqvYcEs4iWxlK53hK2ckefmBHLTYv4vdoTDTim4lOqcTI4RCwwkzjkt5wzu%2FSae1BmV7%2FZhX2%2Fq4Q7tkHa%2FNG7fv2Q4EENeXqHBlpG%2F4i9GIgiylS86iBk5gQ%2BsqC%2FsFjPYcODqOof3SvApC9DL9LfWBF7XQuTAKvTXMugdDg0YBgnkYgO4aMQ%2F2X5bVPmfeAStabHQndRCy1Okk%2BloBPRf%2FS0%2Ff8jwOMNqo1c8GOqUBjIOJNz%2FfLsDqrE5HKf4JhstESjoVjJUWuRXd5e4ceG46zWqHsAsiNuFYF37u6UOc%2FZsOMa%2B0idZyKsrJwpFglBDuLlmUEpBfi%2FkLh7Z4al%2F90vH6GepkYsFcN7e1ew842OoIm4AS5lmKyBNor44%2FEr1%2BeEOvUmdZvBXxAAccFFsryptRE%2FKsYHLWr2eK6rlnnIlPA9ToaP2nxVtKAaXJ8Xctlk5I&X-Amz-Signature=dc1cc08b9ddea406267c136e9d62949e947aec54c497ef6e5b8a0c389345019a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
