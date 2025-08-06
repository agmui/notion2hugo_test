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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KK5A2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC9HXZ%2BvzADpmBBHcx3lJSfwVBNqQPlMgAWNK3GKiTdTAiAUaEuothexyRumUYxAQ%2F%2FeflhszBBFuwXW84V0LsLGDCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdpOBZ2VFOleC%2BNvqKtwD76eje2K8Ssf55kYwbjWgfi4mqe3Rx3j4eHOfQEP%2B0XakCAnaNFwcWVYym6bBRtBcw3vGrq0DZHH6Srm9qzGNqJ6MD7rmT8duokO4dTMvqoDJ8yVd8e2BdJkzFjaod4A%2BwLwpSPTL8oA3NgZjLVThdbAde71EsH%2BMLYWlhq6zKNTYoMYf%2FDOGe3uTdg%2F5Q1Mt%2BqNno%2BVbxZmmkUpLGiIBW4m5%2BsQ2yl8t7k%2FgOS6rpdUFq4SeBHuJr8hO%2BUrm%2Flbsh311b6HinduCMglxJnB4K8xTgdQ2i5DMxqXxm9kmDUFVqkWG2U6YZ7ofEJBGq21clABSi4ayNffZgrDIOTDwkndeHlPJ0RbqojmxwTTPirQ%2B%2Bt9OzGISW%2BtwSlZeRp6yeKKoJgqPBVNOKwU%2FJ%2B8BCOGrQJWm%2FIWOgN1snIVRE6QF8P45xiVgaJE1fEo9bNzs40hpWK1FaTPKcGDPkrV3LbcWiU%2BJKIzi14Qd8iGK7ZXKcS1yVjIOQUXfPGJaiyirpJjXd%2FnO2uhKiZrk%2B8udG0dQhH4P7KjOcr83%2BMQffk9OOD9Ae1vcaexGj%2F%2FFETcnEg7A5eve5n9FmpIcVP9PZzT2jLLwpgsFta5B7%2FpVKLe%2BBP%2BEC7eimi9zQRww24TNxAY6pgGWRlWLPnv%2Bqtswxy%2Faq5z%2BaFdNaQUQvwffEbbGWsazQF0wwTrsyuVPjkjmv8gp6tx7H6ymx7KHh0uZW%2BV%2BoDKg8YsrAiDa7efk9%2BCOZu7ynbR5U9quKScZEHLABCu1NV3%2BmOvns42YXgNvwZqaCtZYRlhq73QGi4c73Q%2F%2BM7UKTlvbgYRwxZ1go82nooY02YtA1eYNr1ag0T33rT%2FKBb%2F2YjXLcO2c&X-Amz-Signature=8f10cf0f8bad2580f8305ce0fb29cd3a9b53da7929fe7ed85c0e496b3cff0d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KK5A2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC9HXZ%2BvzADpmBBHcx3lJSfwVBNqQPlMgAWNK3GKiTdTAiAUaEuothexyRumUYxAQ%2F%2FeflhszBBFuwXW84V0LsLGDCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdpOBZ2VFOleC%2BNvqKtwD76eje2K8Ssf55kYwbjWgfi4mqe3Rx3j4eHOfQEP%2B0XakCAnaNFwcWVYym6bBRtBcw3vGrq0DZHH6Srm9qzGNqJ6MD7rmT8duokO4dTMvqoDJ8yVd8e2BdJkzFjaod4A%2BwLwpSPTL8oA3NgZjLVThdbAde71EsH%2BMLYWlhq6zKNTYoMYf%2FDOGe3uTdg%2F5Q1Mt%2BqNno%2BVbxZmmkUpLGiIBW4m5%2BsQ2yl8t7k%2FgOS6rpdUFq4SeBHuJr8hO%2BUrm%2Flbsh311b6HinduCMglxJnB4K8xTgdQ2i5DMxqXxm9kmDUFVqkWG2U6YZ7ofEJBGq21clABSi4ayNffZgrDIOTDwkndeHlPJ0RbqojmxwTTPirQ%2B%2Bt9OzGISW%2BtwSlZeRp6yeKKoJgqPBVNOKwU%2FJ%2B8BCOGrQJWm%2FIWOgN1snIVRE6QF8P45xiVgaJE1fEo9bNzs40hpWK1FaTPKcGDPkrV3LbcWiU%2BJKIzi14Qd8iGK7ZXKcS1yVjIOQUXfPGJaiyirpJjXd%2FnO2uhKiZrk%2B8udG0dQhH4P7KjOcr83%2BMQffk9OOD9Ae1vcaexGj%2F%2FFETcnEg7A5eve5n9FmpIcVP9PZzT2jLLwpgsFta5B7%2FpVKLe%2BBP%2BEC7eimi9zQRww24TNxAY6pgGWRlWLPnv%2Bqtswxy%2Faq5z%2BaFdNaQUQvwffEbbGWsazQF0wwTrsyuVPjkjmv8gp6tx7H6ymx7KHh0uZW%2BV%2BoDKg8YsrAiDa7efk9%2BCOZu7ynbR5U9quKScZEHLABCu1NV3%2BmOvns42YXgNvwZqaCtZYRlhq73QGi4c73Q%2F%2BM7UKTlvbgYRwxZ1go82nooY02YtA1eYNr1ag0T33rT%2FKBb%2F2YjXLcO2c&X-Amz-Signature=4938977069dfc4e9d49ea0f5a877a4ebeb8d5f8b96d71a625e300fbf1623d41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
