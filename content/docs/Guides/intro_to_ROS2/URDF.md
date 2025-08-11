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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AZDGFM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr5sAZj5tjBXcBPX8A0dXpnKKmLF5yTfukiK%2FeE67J9wIhANOMGEya8IGWBQsT7BVEiYQ8TizFRu9zUCW4%2BVpRVzmmKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FxinPy99d9OUZTVAq3ANRAP55ddBM0zJEeTWvHzHgYLhqE2lYCSpKPE64gRDNqDFuLAYgRfHaphdY2Ft4SRfKBXXGnTzbPXm72Q4yglgqrT%2B8HiGlp0ohrbfXZawktPMPlLVzY6p%2B5P4vpUt03%2FNzsbEJb5HoDwcrn0YWipCbjRvCEof0Pat6Ob%2FCMfcDsgjdcWv9LWUmTsGJSN2WeX99mWLtcYocJTlNu8mTLrVaqqXMFpu6V0CiIjNwBYb9vl8cU9D7FiVs2khbcwIxVkmW%2Fg8uaQ%2B9E0SY6Kq9s9EZggJ1DJsGYHBD4dpVqDfvWet8Oofm7DYTCQ6t9N23ePBrU%2BE3vcViL7qfpNoubRhyBz4mCRZxC4vABFRhiCkHZ5aqikB8Jlnns6n1itSx%2BoOZA8U4HNCXPBE7PbRUWPa2XztPXr%2BzTqiSjWl5I55oUZswSVFz1YVDYfq5CYt3mURBUh8RzZ1AZ8LnM%2FK6T1PCoKSXIT3nJUb00Cj9E6ngqJin2Iw%2BRf7pW2HZO36z3TooaDcQWM33Zhm7AFnC4gYr88TxC8bVigllqDzUxEb%2FkpXaZCUMnd0Dqf8sOKebsf6Rfb5yX%2Fi5C3H2UXwKMhNPUVkfJqPzjPpe05q7KoC27p6AVC6kgfZiyR%2BiFjDhneXEBjqkATW7TvLtf%2F%2By2P58VcemS0whz51dIMpkKqu5ibNA7lOLZPyHi050p3HeaiJwVFvwF4TpLyAQ8u7jfa0DVt0JGMeheMEqI7v6hUyiGqcAdM7xHnxORtjPRDx%2Fj98NeFfEk%2FV0eYPXwEF9jGJ6OrVSyVZSQnpnfFEay%2FLkjp%2FKUjU8eR0Cz%2BL%2FG7F1bBMfuZiuzybeXESsxk0SI1fRQNFS%2BICHEOOZ&X-Amz-Signature=91703d643621a88944480c9bb9688f8eb4c5b417677ff2b8da930eed99078239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AZDGFM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr5sAZj5tjBXcBPX8A0dXpnKKmLF5yTfukiK%2FeE67J9wIhANOMGEya8IGWBQsT7BVEiYQ8TizFRu9zUCW4%2BVpRVzmmKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FxinPy99d9OUZTVAq3ANRAP55ddBM0zJEeTWvHzHgYLhqE2lYCSpKPE64gRDNqDFuLAYgRfHaphdY2Ft4SRfKBXXGnTzbPXm72Q4yglgqrT%2B8HiGlp0ohrbfXZawktPMPlLVzY6p%2B5P4vpUt03%2FNzsbEJb5HoDwcrn0YWipCbjRvCEof0Pat6Ob%2FCMfcDsgjdcWv9LWUmTsGJSN2WeX99mWLtcYocJTlNu8mTLrVaqqXMFpu6V0CiIjNwBYb9vl8cU9D7FiVs2khbcwIxVkmW%2Fg8uaQ%2B9E0SY6Kq9s9EZggJ1DJsGYHBD4dpVqDfvWet8Oofm7DYTCQ6t9N23ePBrU%2BE3vcViL7qfpNoubRhyBz4mCRZxC4vABFRhiCkHZ5aqikB8Jlnns6n1itSx%2BoOZA8U4HNCXPBE7PbRUWPa2XztPXr%2BzTqiSjWl5I55oUZswSVFz1YVDYfq5CYt3mURBUh8RzZ1AZ8LnM%2FK6T1PCoKSXIT3nJUb00Cj9E6ngqJin2Iw%2BRf7pW2HZO36z3TooaDcQWM33Zhm7AFnC4gYr88TxC8bVigllqDzUxEb%2FkpXaZCUMnd0Dqf8sOKebsf6Rfb5yX%2Fi5C3H2UXwKMhNPUVkfJqPzjPpe05q7KoC27p6AVC6kgfZiyR%2BiFjDhneXEBjqkATW7TvLtf%2F%2By2P58VcemS0whz51dIMpkKqu5ibNA7lOLZPyHi050p3HeaiJwVFvwF4TpLyAQ8u7jfa0DVt0JGMeheMEqI7v6hUyiGqcAdM7xHnxORtjPRDx%2Fj98NeFfEk%2FV0eYPXwEF9jGJ6OrVSyVZSQnpnfFEay%2FLkjp%2FKUjU8eR0Cz%2BL%2FG7F1bBMfuZiuzybeXESsxk0SI1fRQNFS%2BICHEOOZ&X-Amz-Signature=738a9759c029cbf24190a0a1b4350e1da29225aac707312051d285be7805d387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
