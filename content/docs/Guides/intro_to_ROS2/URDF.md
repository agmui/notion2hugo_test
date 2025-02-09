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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3QMYLR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3io2g9Wpxzw%2FCjUJ6g7HpMEObo1XSKz9jWAXKaDJ9eAIhAKWOEYkSmLoKE0b5Ue0g51t18YszzPqKSvzKGsmj7wjXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuVtUGD%2ByKxGmOqc0q3AOed6qmaGr06XYnqNJaHaec0cWst04afyToKuVp6NCF%2FluCQBg0hu6hYkYm5z1WmzzJ6lkttMPW6y9%2FOsFkTfHd0fKejMGtjZIuXBNnD24WKidbsjdB7eIqvzQrQlroh%2BB3UkgGG9WmmcA%2B7KgmYX7eh3OZsmLjll12%2F4yBfEX23NXyVLgTgY6rsvvGYYZKTVtxfNBnNEBWVxqH10TYLnZgvkgF4bbWYjW%2BLVQghPGlGjypJHTR99w%2BHOc5cd5DSaH0wYW%2FUBVA40D1QnYpGiQwfsL4CJbmmSaO%2FGqDAnHxxz%2BmHKJt6xG1Ife0FLThRnwoaVIQk7wPKmBeHpHKuCDR%2BVEcs4OjaxWqEA6QuLhvglTj85KkbQBcShDRHMYsM2jEk3Sxa49YAA49OnEis6sfjNiVRq80We3SXLCzlv3rUru7g68UiNXNeFHmoNvlcKISJUDXEZUL2dlRwQ38CWsgrQj6FJ0W22eiocc6vhYk0q%2BoVJlhZhJ2G%2F3Hke6UMVHo6fzFNdCdi%2Blr6rPGpGNybGS5UOqItxfmU%2BxPYz9Fd%2FaRkwAviTCE03I8N%2FF%2F6n3eCCJ4nNsFpWX5zUcYLPSO7FsjX2B6Qyjyp9tekt24VEOt6ABRfDjMAGaqJDDP46G9BjqkAVi9ihYl0nlWV3v6HlP49B7%2F4IvNDn1WoXQcUxm79kcQB5lmnQSfQ7dmMU7fuAvzQvNHFDRsl%2BPG1krgmZngFyYpdNeIu%2Frj1wy40dPVrOGeXDeqT1xCxqrIUELPvnU7aOpVik0fYSVU2dLEwoik9ylkFCTgfoYefAcsjCLAV9WHXM9CKzrLpkwPNprt8%2Bbaiz5nJJjA3UNmX6kJDb9%2BLSdd0x04&X-Amz-Signature=ecb47b132eae85e64e12c4440394e827aa2be9eeb9ffd762c6a04100e8276989&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3QMYLR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3io2g9Wpxzw%2FCjUJ6g7HpMEObo1XSKz9jWAXKaDJ9eAIhAKWOEYkSmLoKE0b5Ue0g51t18YszzPqKSvzKGsmj7wjXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuVtUGD%2ByKxGmOqc0q3AOed6qmaGr06XYnqNJaHaec0cWst04afyToKuVp6NCF%2FluCQBg0hu6hYkYm5z1WmzzJ6lkttMPW6y9%2FOsFkTfHd0fKejMGtjZIuXBNnD24WKidbsjdB7eIqvzQrQlroh%2BB3UkgGG9WmmcA%2B7KgmYX7eh3OZsmLjll12%2F4yBfEX23NXyVLgTgY6rsvvGYYZKTVtxfNBnNEBWVxqH10TYLnZgvkgF4bbWYjW%2BLVQghPGlGjypJHTR99w%2BHOc5cd5DSaH0wYW%2FUBVA40D1QnYpGiQwfsL4CJbmmSaO%2FGqDAnHxxz%2BmHKJt6xG1Ife0FLThRnwoaVIQk7wPKmBeHpHKuCDR%2BVEcs4OjaxWqEA6QuLhvglTj85KkbQBcShDRHMYsM2jEk3Sxa49YAA49OnEis6sfjNiVRq80We3SXLCzlv3rUru7g68UiNXNeFHmoNvlcKISJUDXEZUL2dlRwQ38CWsgrQj6FJ0W22eiocc6vhYk0q%2BoVJlhZhJ2G%2F3Hke6UMVHo6fzFNdCdi%2Blr6rPGpGNybGS5UOqItxfmU%2BxPYz9Fd%2FaRkwAviTCE03I8N%2FF%2F6n3eCCJ4nNsFpWX5zUcYLPSO7FsjX2B6Qyjyp9tekt24VEOt6ABRfDjMAGaqJDDP46G9BjqkAVi9ihYl0nlWV3v6HlP49B7%2F4IvNDn1WoXQcUxm79kcQB5lmnQSfQ7dmMU7fuAvzQvNHFDRsl%2BPG1krgmZngFyYpdNeIu%2Frj1wy40dPVrOGeXDeqT1xCxqrIUELPvnU7aOpVik0fYSVU2dLEwoik9ylkFCTgfoYefAcsjCLAV9WHXM9CKzrLpkwPNprt8%2Bbaiz5nJJjA3UNmX6kJDb9%2BLSdd0x04&X-Amz-Signature=997eaa732c4e893a3b678ca8647125f999f5625faadf6f6e1b0209b70dbfa019&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
