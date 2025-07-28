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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4PTAPC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEnS4k3SxcwyuDJ7MMHriVcjZVAnb219JzAGy6qujK43AiEA7EPra%2Fw2YTEXW10Q1o2T7iDPGPUk344JxbO8WSO4DvAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRTfxnncRjAq4DY7ircAxLdBP4d2uHLR%2BkWYy5wNcVVvZEQRgYNIKL%2BXGxVIEiCNOtMJqaqUnKxZHvRZXrNHDSrjq%2BKyRbeRsOmneZPcMAmOXfiM0WbrZpGHgHA%2FQFLlpFv1h2mByxzysbUGjYVsCZHTntknEHTyLM%2FoMNzm0wnO01s%2BXXK7JVcQfd%2BZdCEhp%2B0wPJbdtrIUBU%2BeQF9wJpney53idvqpeajW3GKmaHjX4kpGT%2FYe%2BqLNd0f71g%2BLpmtbFxbPsJrHpjzY9X%2Bvy7SexpPnTCr46leQN%2FztQ%2FZVd%2F3h2hUgdjIz%2BOzGlr2C34zzYlR3HH92oYmEiJXBgqrHoQkgnwT5uboYSIwd2Fg%2B1ckp21pfinDIIM0I3hb2smpz%2Fs1vXr20hkM3IuHzjmEt7kJgrcErUFzV9wETkkoum5miqOKXcMHRmWqlktEqOHDAiUTXvDQchk%2F7KZHPtTqlKBMT2LTI0exqpQy%2FOYKdsn1%2BEVdRfj5RbNIi5M0evqOzhJUX7nMl1kBpfr6q%2BqY3VpRai2R9MJX5T5niYO73Y22qkV1ojfza4iqg%2F07rwZVZA4puLqoIsmNdjw4dAPHgEyX2RQ1WmezzdIZs%2FYMjQ%2BpEc3t%2BxfsKdgirEBGm16OhXBZDrVxCunCMNWPnMQGOqUBkOwEaBARwY1kG%2BdtFWXJef4jPNmMW321si89wr645s4UMoseyA2PEZIMByAnMyZDd2aQ799pDi7YbKJtumF11KRbrbWBOsfcA8H6QgMNUQ%2BE6R8x4GvIpevYape%2B9x%2Fl3waM%2FTn6yHxrNoCzsRRPFJYvO%2Fcuqa32M1rG3jHfYgXaGUXZ3USVwReLtouIOvxKh4SNcg%2B%2FxbjuQw%2BPhLeCBQNzrgJp&X-Amz-Signature=ba91e97dafde598d789ee41ff0b2dc1c39a35d2735e71add62927325159ef0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4PTAPC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEnS4k3SxcwyuDJ7MMHriVcjZVAnb219JzAGy6qujK43AiEA7EPra%2Fw2YTEXW10Q1o2T7iDPGPUk344JxbO8WSO4DvAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRTfxnncRjAq4DY7ircAxLdBP4d2uHLR%2BkWYy5wNcVVvZEQRgYNIKL%2BXGxVIEiCNOtMJqaqUnKxZHvRZXrNHDSrjq%2BKyRbeRsOmneZPcMAmOXfiM0WbrZpGHgHA%2FQFLlpFv1h2mByxzysbUGjYVsCZHTntknEHTyLM%2FoMNzm0wnO01s%2BXXK7JVcQfd%2BZdCEhp%2B0wPJbdtrIUBU%2BeQF9wJpney53idvqpeajW3GKmaHjX4kpGT%2FYe%2BqLNd0f71g%2BLpmtbFxbPsJrHpjzY9X%2Bvy7SexpPnTCr46leQN%2FztQ%2FZVd%2F3h2hUgdjIz%2BOzGlr2C34zzYlR3HH92oYmEiJXBgqrHoQkgnwT5uboYSIwd2Fg%2B1ckp21pfinDIIM0I3hb2smpz%2Fs1vXr20hkM3IuHzjmEt7kJgrcErUFzV9wETkkoum5miqOKXcMHRmWqlktEqOHDAiUTXvDQchk%2F7KZHPtTqlKBMT2LTI0exqpQy%2FOYKdsn1%2BEVdRfj5RbNIi5M0evqOzhJUX7nMl1kBpfr6q%2BqY3VpRai2R9MJX5T5niYO73Y22qkV1ojfza4iqg%2F07rwZVZA4puLqoIsmNdjw4dAPHgEyX2RQ1WmezzdIZs%2FYMjQ%2BpEc3t%2BxfsKdgirEBGm16OhXBZDrVxCunCMNWPnMQGOqUBkOwEaBARwY1kG%2BdtFWXJef4jPNmMW321si89wr645s4UMoseyA2PEZIMByAnMyZDd2aQ799pDi7YbKJtumF11KRbrbWBOsfcA8H6QgMNUQ%2BE6R8x4GvIpevYape%2B9x%2Fl3waM%2FTn6yHxrNoCzsRRPFJYvO%2Fcuqa32M1rG3jHfYgXaGUXZ3USVwReLtouIOvxKh4SNcg%2B%2FxbjuQw%2BPhLeCBQNzrgJp&X-Amz-Signature=51d676d81e29fced4d1aa5226138b6b81150aff5e36e1ddaf3bf71df6c04cb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
