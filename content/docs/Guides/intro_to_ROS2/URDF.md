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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVDLSIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzjmSssV%2BVQ5c4PvPQLAtRqO6UJTTrUbwyARYc6NKAZwIhAKmhq2g9XJ20P4C8%2BVe9ZmAbybiFYXQsR9CJhsuJEtXnKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnkfmcOfrYr54zUKsq3AOD%2FcfN4SlCxO6sKtDP3LFImFRkdIzMGr8i1oq2V%2B8Fw2Qd2dO49mlDScwjLW5Lgh2apGGmvuo03Z9DlOZ1EqD7FBSfkAeCj6IfGLv6QB9UzlGG2jXKZoc6aSz7%2BqkAHTn4AS0nMvbEqY8kS1tK8NREewB%2FaZESPbcyLAzJVs%2BE5%2FguWbJ6Rz14Mq9wMXY9K1NIdZVFuEUmfCmoo%2BTi2oJaZvQj0AZIQ%2BvUC81hucZhz%2Bbu6uNIeePQ8rKup5xcejhYA3JgZ9sObtEufKpcUFR4vpvF0DDTJqQv5Pl7Li63IPiIt9v2btmjddc4BMPe5TX5JEJa%2Fa%2BLqkC86Ojy4XsHC6S67AGhqlsO4FDnPEi3YUkSyPobpK32%2Bm%2FYdhPiy8TkgPHGIrRiHaDxBFISDr4pnSFLDzuOZ8sMm9hzLYLJDDr3dNXVVLT%2BOvCcNwYi0Y6T9uIfXYYvsQrJaqZa3fAJ6VIkJtAcPrD48YVfe1%2FlhdQVmoFOpYz7T32D%2B%2FCjxFa0HQ277zJkHeuH0gVM5%2FurlF0l98p4FYmudUekW7GTyyhEdPIo3sVoKV5tcMEcN0yGpxPxgBj26j7d9PJewrIpreDdIKsb0qIDWDel20gwdtM4HZlc5suowsHCszDNosDDBjqkASrExAfnsVnIoMceYWwrKk3AudMoBWl9k%2F8ylNcWnUFBce6YxBJqdQMbSNCh2HKkMuqcNyzY9Ob69pmgN7wa1AUWJXfjP1%2FDz%2BHa4BOg5OhbeewOzeYaOqcpI%2FRvxA1zRr5hdDq2DCbpq7YZJlHGv7w9GaYmbIV3JLuvVwuO3bqhCBAJotE0bl%2F0m3riT4OUhNV8E8m%2FL98ivxkk5uJhWyehpEhM&X-Amz-Signature=a54ed83898bd9307a2cf5c0a0ee11314759eedd4fa1fd6c4cc5b83aac4981497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVDLSIV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzjmSssV%2BVQ5c4PvPQLAtRqO6UJTTrUbwyARYc6NKAZwIhAKmhq2g9XJ20P4C8%2BVe9ZmAbybiFYXQsR9CJhsuJEtXnKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnkfmcOfrYr54zUKsq3AOD%2FcfN4SlCxO6sKtDP3LFImFRkdIzMGr8i1oq2V%2B8Fw2Qd2dO49mlDScwjLW5Lgh2apGGmvuo03Z9DlOZ1EqD7FBSfkAeCj6IfGLv6QB9UzlGG2jXKZoc6aSz7%2BqkAHTn4AS0nMvbEqY8kS1tK8NREewB%2FaZESPbcyLAzJVs%2BE5%2FguWbJ6Rz14Mq9wMXY9K1NIdZVFuEUmfCmoo%2BTi2oJaZvQj0AZIQ%2BvUC81hucZhz%2Bbu6uNIeePQ8rKup5xcejhYA3JgZ9sObtEufKpcUFR4vpvF0DDTJqQv5Pl7Li63IPiIt9v2btmjddc4BMPe5TX5JEJa%2Fa%2BLqkC86Ojy4XsHC6S67AGhqlsO4FDnPEi3YUkSyPobpK32%2Bm%2FYdhPiy8TkgPHGIrRiHaDxBFISDr4pnSFLDzuOZ8sMm9hzLYLJDDr3dNXVVLT%2BOvCcNwYi0Y6T9uIfXYYvsQrJaqZa3fAJ6VIkJtAcPrD48YVfe1%2FlhdQVmoFOpYz7T32D%2B%2FCjxFa0HQ277zJkHeuH0gVM5%2FurlF0l98p4FYmudUekW7GTyyhEdPIo3sVoKV5tcMEcN0yGpxPxgBj26j7d9PJewrIpreDdIKsb0qIDWDel20gwdtM4HZlc5suowsHCszDNosDDBjqkASrExAfnsVnIoMceYWwrKk3AudMoBWl9k%2F8ylNcWnUFBce6YxBJqdQMbSNCh2HKkMuqcNyzY9Ob69pmgN7wa1AUWJXfjP1%2FDz%2BHa4BOg5OhbeewOzeYaOqcpI%2FRvxA1zRr5hdDq2DCbpq7YZJlHGv7w9GaYmbIV3JLuvVwuO3bqhCBAJotE0bl%2F0m3riT4OUhNV8E8m%2FL98ivxkk5uJhWyehpEhM&X-Amz-Signature=befd1c58712236a7cb7613346e43d968aa3615ee8627c64d38be7c1fef9befe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
