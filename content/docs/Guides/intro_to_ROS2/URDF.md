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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4BV4C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSEh2kVOcqsK5AvR6TXa7no%2B9se30UBOIpxYDJu37%2FtAiAjMeZSWLST1DuVtipoQ5LW8S5d8wDqrZ%2BWtOW1RIDiqiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMErGyFwP1vySaKAYzKtwDMJKpOeGPJ%2FObtswxOkTol8Cu4L86s%2FZ6A1EcB575xhRjnosMHvTqJ7bCpcVyfyO2m3QBC9%2BykaON9Wcjf%2FnYB3E5rRepkpRJeXCjNkYoWfP1mbNs6ms1gHTql7fTTCKGKGbg2Y3eJjv8PrNNGmSh3BcXg7RIUwivpo6kXqd5YlvkZmAMLt0ZBk15sXr8BTmspvvOdd2%2BHjpSMZOyvvQ7G8Bkv4ahL1%2Ffr2zJhuZtEjWypzxAgdYn%2FDa579jAQdDkotB5uJnlZJ%2BSI9A8d2fVFTD06%2FlTEsFWbptgMk0V5bMvaHXOwgUuOJZoLti1RRDw7er92RUr4iNnhn0MykERtBi94%2BgiUFLWTzs5fUsoPqNr2MwpkdRuELSXkibEtsKAk2BdfUb%2BYGM2CbUeHtzoAwrO5pHDbhMU5Ii%2FmKymllUh40Huuh4VknI1%2B0%2F8rseQ%2BmKKFkSMnEg%2BijVZdY3ppKBYs%2F3yTkMfD78gFvrYCAE6osMz3kQhgJVZEw6LEHUBWwiZJPyX2z8FN58xUd54sp5o9MknxIKq4wGUl676%2BvWJrRqamPwiEPR9%2B2nU03xOrTjqd%2FVLvYArCerUqASGhr1hQfr6GtujPmOv4JdvELjcOu6dnEXUf2CbMycwh%2BHtwwY6pgE6Iiu9bq9LJCRhAsAw0fxhiXYE7tea2wnXA3D23T%2BWTzvB4mYlxfg0mjixxnn%2Fc9f8VZJa2ly%2FO2eKyP5pGaoChr5kz87LYjtnr06Dq0MLHtgfXzLOQ1zQE%2BIahVJ4cNbocE%2FLN08b%2Bb1TjvyFeJo6u134Zh%2FpJQc4z%2B%2FaCpu1Ro25Ka6AH6HGsHh43ckQftwv0lOYYM7S%2FuyWGI%2Fe05DN8%2Bw2y8a2&X-Amz-Signature=b56cb3e180fde2b73d7cf196cab3ef63cb6743aed5e1c4391fc229cf97cbff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QO4BV4C%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSEh2kVOcqsK5AvR6TXa7no%2B9se30UBOIpxYDJu37%2FtAiAjMeZSWLST1DuVtipoQ5LW8S5d8wDqrZ%2BWtOW1RIDiqiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMErGyFwP1vySaKAYzKtwDMJKpOeGPJ%2FObtswxOkTol8Cu4L86s%2FZ6A1EcB575xhRjnosMHvTqJ7bCpcVyfyO2m3QBC9%2BykaON9Wcjf%2FnYB3E5rRepkpRJeXCjNkYoWfP1mbNs6ms1gHTql7fTTCKGKGbg2Y3eJjv8PrNNGmSh3BcXg7RIUwivpo6kXqd5YlvkZmAMLt0ZBk15sXr8BTmspvvOdd2%2BHjpSMZOyvvQ7G8Bkv4ahL1%2Ffr2zJhuZtEjWypzxAgdYn%2FDa579jAQdDkotB5uJnlZJ%2BSI9A8d2fVFTD06%2FlTEsFWbptgMk0V5bMvaHXOwgUuOJZoLti1RRDw7er92RUr4iNnhn0MykERtBi94%2BgiUFLWTzs5fUsoPqNr2MwpkdRuELSXkibEtsKAk2BdfUb%2BYGM2CbUeHtzoAwrO5pHDbhMU5Ii%2FmKymllUh40Huuh4VknI1%2B0%2F8rseQ%2BmKKFkSMnEg%2BijVZdY3ppKBYs%2F3yTkMfD78gFvrYCAE6osMz3kQhgJVZEw6LEHUBWwiZJPyX2z8FN58xUd54sp5o9MknxIKq4wGUl676%2BvWJrRqamPwiEPR9%2B2nU03xOrTjqd%2FVLvYArCerUqASGhr1hQfr6GtujPmOv4JdvELjcOu6dnEXUf2CbMycwh%2BHtwwY6pgE6Iiu9bq9LJCRhAsAw0fxhiXYE7tea2wnXA3D23T%2BWTzvB4mYlxfg0mjixxnn%2Fc9f8VZJa2ly%2FO2eKyP5pGaoChr5kz87LYjtnr06Dq0MLHtgfXzLOQ1zQE%2BIahVJ4cNbocE%2FLN08b%2Bb1TjvyFeJo6u134Zh%2FpJQc4z%2B%2FaCpu1Ro25Ka6AH6HGsHh43ckQftwv0lOYYM7S%2FuyWGI%2Fe05DN8%2Bw2y8a2&X-Amz-Signature=a884dda8c4f7b2df1cd7a5bacd439db6f5c9116252c9112c11df9d7b5012b833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
