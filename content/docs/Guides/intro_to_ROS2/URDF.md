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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKVDEYX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVRb%2F2HGQ%2FKxBdhq4L%2Fkfc8rK6sgfvI9FPtbOSDR0d3QIhANQusXrdcVLzgAbHLfgz0Y90AVhmVYWVrzlbmSNvyuy2Kv8DCF0QABoMNjM3NDIzMTgzODA1Igy1qKsU6ieoeM%2Fg0vcq3AMFI2ESsW6yUGexdZwccYlLjVAOFmd9tD%2Fsp5YXQxoVXCVlHE1ZuzZFg5bRcM8Zs4jAP9h1%2BWN8Q7jbCyxzXajn7TZV23OSDceeUfJKZJO%2BD5qqPEevpWYV1EqKv6pSDe%2FuF1W3DvkcZ9vexLsEqRbHJf31yYrA676rsaoVR04Tf2YKeiQzobMvNR89FNcdv5Mx%2F%2FUi4E4AphHpWKHW%2BQCebpiKSgDz3O9xM4DwyUKSZSkMG9pfs1xERq%2BUvIQoKu0mbBh8Kdb8jUYs8CFiEZiBgExa5X%2F8fKCd5jX2M78ok1I7FYwsP6kBV%2Bqdtjnj380Y%2BS%2BMUmy52Yd4Mss6oQXaQok0ytLgGhFGDDSNhGM8uQqTCFitZv%2FNBcEsmYAYPburOozwEjFjeotqklRUiNT3Nu6DqhDQH7pqyoK6S9fO8yuRa9dDgpsfPBoMNMGlIAuafId%2BtYhLawz%2B4poWC6srNTCV5m6EP%2FstZLDFR%2BU1RkeqzDEmOltpvhhihPVq3g29rktjHjhF5Mltjg%2FdfVrGY1%2Blvg%2FW0TwfDNa6Tv1F9SxIkVSDmUt3SkLd74N9b%2BQRCTiLC71kU6ltutCIPs%2BrIj5kH9N%2FMVHMymj5SnawqljOg08aTT3Y5XYeazCkm8e9BjqkAUs7pZf8VxfpvZQTctsk3YiRN0b%2Bzp1w8snzKFJNZYAyRwrmP%2F6feSyDvMFL%2FeZB0mf1LspJxgqPmRJv9jD1nURUUJZ0TD6o4cURzZsD1a40yfwewalDWkKd660jS8zO1FgQLmw68zQ%2FyS9XkEW6fmrZoBBjJmizSayRbIldWd9SfMBNaMO1QX65fQvCaDuT2elxzb5K2cn5uetBcH6bXMrSu66d&X-Amz-Signature=64836a34ebd586aa4e1955cc9b35b4fcd257d485989b9ed9705f5859e036af6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKVDEYX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVRb%2F2HGQ%2FKxBdhq4L%2Fkfc8rK6sgfvI9FPtbOSDR0d3QIhANQusXrdcVLzgAbHLfgz0Y90AVhmVYWVrzlbmSNvyuy2Kv8DCF0QABoMNjM3NDIzMTgzODA1Igy1qKsU6ieoeM%2Fg0vcq3AMFI2ESsW6yUGexdZwccYlLjVAOFmd9tD%2Fsp5YXQxoVXCVlHE1ZuzZFg5bRcM8Zs4jAP9h1%2BWN8Q7jbCyxzXajn7TZV23OSDceeUfJKZJO%2BD5qqPEevpWYV1EqKv6pSDe%2FuF1W3DvkcZ9vexLsEqRbHJf31yYrA676rsaoVR04Tf2YKeiQzobMvNR89FNcdv5Mx%2F%2FUi4E4AphHpWKHW%2BQCebpiKSgDz3O9xM4DwyUKSZSkMG9pfs1xERq%2BUvIQoKu0mbBh8Kdb8jUYs8CFiEZiBgExa5X%2F8fKCd5jX2M78ok1I7FYwsP6kBV%2Bqdtjnj380Y%2BS%2BMUmy52Yd4Mss6oQXaQok0ytLgGhFGDDSNhGM8uQqTCFitZv%2FNBcEsmYAYPburOozwEjFjeotqklRUiNT3Nu6DqhDQH7pqyoK6S9fO8yuRa9dDgpsfPBoMNMGlIAuafId%2BtYhLawz%2B4poWC6srNTCV5m6EP%2FstZLDFR%2BU1RkeqzDEmOltpvhhihPVq3g29rktjHjhF5Mltjg%2FdfVrGY1%2Blvg%2FW0TwfDNa6Tv1F9SxIkVSDmUt3SkLd74N9b%2BQRCTiLC71kU6ltutCIPs%2BrIj5kH9N%2FMVHMymj5SnawqljOg08aTT3Y5XYeazCkm8e9BjqkAUs7pZf8VxfpvZQTctsk3YiRN0b%2Bzp1w8snzKFJNZYAyRwrmP%2F6feSyDvMFL%2FeZB0mf1LspJxgqPmRJv9jD1nURUUJZ0TD6o4cURzZsD1a40yfwewalDWkKd660jS8zO1FgQLmw68zQ%2FyS9XkEW6fmrZoBBjJmizSayRbIldWd9SfMBNaMO1QX65fQvCaDuT2elxzb5K2cn5uetBcH6bXMrSu66d&X-Amz-Signature=b3ab8adc07ee77d0660f8b8df99eb86404d2ef928fb453a4f2830169584bc433&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
