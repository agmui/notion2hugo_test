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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TE2D2W%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTZPbptc%2BQ%2BEltsHSsnAogpd%2FeSJewfPYIf4P7AcMqbAiEAz%2Fx9anJuuPVwi%2F5azumEkWKfbizOqSVLdyLfi45QID8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqT4hMoKFP1skMRHCrcAy4JD%2FrDAx%2BTEddpd4BMcHQ0ThX%2F6Q5lDBZycHYkNANcy6D0in9CyC1l0Anwh3hYWqu4fnCOB3SJ8Q4XtkSYsU3Sdy53hBSEM3fyBZBga6jPsL029Z5BZDLmtzmKloZTcpeXYqP1QDA58rpbAiTol4Punl%2BmfjzkL7diUUXJqdG%2FeVBabOoms1A9LzV48MimQ7xJ7PoyUz9mDXPJ68NAVw9HrNCRh01CEAqPBTvhOdnKuVGt%2BKLPC4BI9aSBf1xr9dqXLfWwQsUuOm%2BIqzsRsQI4QhWEEzJAPnRFxFhlwYRLgqyulYMb0tBbM%2FkPjwpXAI17%2BIyajHi21LDtC4zAdWOcNB0son5g9q4fRUQsr2HiVvnGi3gdPzgPkdpLLFrEvBKRbnR%2BC0fhZDIetS5JmmeKGVW9I5wMbxlmxiTT6t%2BEMutUwvQ1nhKb%2F0MLTt5iaoA8%2BuKLxIQQBXm1U0X6WgDlY5MB5z2mvJZxdInuV%2FRreShyCRN4PstA%2BFrGmZfz9XP%2BOo6dOYSJFget9huLWPvv2yZh38TrsXjwyrYCBExAjrfqoki9tflRlB1xGYzb%2B2CHILzbh%2FloEb1GmiTo%2Bnte74yoB5ORj0V9z3tHGcW9U4VvUnsoGf0of7aYMNOxzb4GOqUBH7uOJgUbzJdBkcfVAqWf1rGxlvRj3Xk7HcNP7B4P5w9A7wWGFz9%2BISuo26%2BL67uR5jjBGhtsbW0QDr1RHHd2tWoACeCG43JqqQGwd5Ly47J4jlVxw%2B9cjZv1hZEK3ADIe7fet7vCtsRCmSWlaFrNbBENr37nN7T29NL5N7SOylt6gHQ7RdzLs9Wh5QUkwE9%2FrG6XFsH%2FEPf0iuvUSzzb19dlM3Kz&X-Amz-Signature=517ea562f9913a5e7cd37de30bf6c47ddbc28c5380d42d4aff77d0625920bace&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TE2D2W%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTZPbptc%2BQ%2BEltsHSsnAogpd%2FeSJewfPYIf4P7AcMqbAiEAz%2Fx9anJuuPVwi%2F5azumEkWKfbizOqSVLdyLfi45QID8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqT4hMoKFP1skMRHCrcAy4JD%2FrDAx%2BTEddpd4BMcHQ0ThX%2F6Q5lDBZycHYkNANcy6D0in9CyC1l0Anwh3hYWqu4fnCOB3SJ8Q4XtkSYsU3Sdy53hBSEM3fyBZBga6jPsL029Z5BZDLmtzmKloZTcpeXYqP1QDA58rpbAiTol4Punl%2BmfjzkL7diUUXJqdG%2FeVBabOoms1A9LzV48MimQ7xJ7PoyUz9mDXPJ68NAVw9HrNCRh01CEAqPBTvhOdnKuVGt%2BKLPC4BI9aSBf1xr9dqXLfWwQsUuOm%2BIqzsRsQI4QhWEEzJAPnRFxFhlwYRLgqyulYMb0tBbM%2FkPjwpXAI17%2BIyajHi21LDtC4zAdWOcNB0son5g9q4fRUQsr2HiVvnGi3gdPzgPkdpLLFrEvBKRbnR%2BC0fhZDIetS5JmmeKGVW9I5wMbxlmxiTT6t%2BEMutUwvQ1nhKb%2F0MLTt5iaoA8%2BuKLxIQQBXm1U0X6WgDlY5MB5z2mvJZxdInuV%2FRreShyCRN4PstA%2BFrGmZfz9XP%2BOo6dOYSJFget9huLWPvv2yZh38TrsXjwyrYCBExAjrfqoki9tflRlB1xGYzb%2B2CHILzbh%2FloEb1GmiTo%2Bnte74yoB5ORj0V9z3tHGcW9U4VvUnsoGf0of7aYMNOxzb4GOqUBH7uOJgUbzJdBkcfVAqWf1rGxlvRj3Xk7HcNP7B4P5w9A7wWGFz9%2BISuo26%2BL67uR5jjBGhtsbW0QDr1RHHd2tWoACeCG43JqqQGwd5Ly47J4jlVxw%2B9cjZv1hZEK3ADIe7fet7vCtsRCmSWlaFrNbBENr37nN7T29NL5N7SOylt6gHQ7RdzLs9Wh5QUkwE9%2FrG6XFsH%2FEPf0iuvUSzzb19dlM3Kz&X-Amz-Signature=f7917be5e2fbbf7bfb040e85ab194c27272b5d1688c80db69c91c7059397d7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
