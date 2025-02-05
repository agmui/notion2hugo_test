---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRIHMIS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCKR4QJRoAV3%2FD0vYYVHYnxqI0%2F%2BEpQln29K788fRb%2FZwIhALmv%2FV%2FZeR4iN9SiDhXYLHf4KBYmW3PFsp4s2g8Ux8TMKv8DCDkQABoMNjM3NDIzMTgzODA1IgxNpxwHaXqdKUsczm0q3AMdr7pNdwHxZiFRZKlAlE%2F%2F0KFk3eYj6VhNTLOWnqGOZNYZknEvi6%2BxBOuJBELAwj4YEnQnyhY%2BXIahfB%2FJrZvy1xxpptZdSGRN%2Fr9DNxLJbiI4O5ZkyRh2QlOxxfxdabO3ULjQ43VrkF9lO2mKwt%2Fhc4fXUVw3gcfhB1fHqA9whVkA22wibMAwI18pVfW%2FfGIQT5u5Kw5tYqHiHq%2FgeFi07fSDnMbgNDKrQdr1kPcaOdAgg%2B8Q8s7TnYlig3WMxOiypOUV9Q7wxgV5YzfVD7ZShTJ4kAaT%2BO1zP%2Fxs3vE0IlWOWM5vVKocPHFPOpyo8likwAVWrSPHb6QZ9mgCvNeUW%2FMwByyF%2F571a8KuzLJKJ%2FCPoIzLRIKkqLrHmAoWDqYu8TOk9jQASNCKql%2FEZNEtxYm%2BQPWGVbuUZiWsf45U1JMBCDUSBkbqiZGI6AyfQbOYWqA4qixsSxuF6CIsNRCqtTIcrMCwbS0rzAMiu7RT8BkCk09z95QuTqx88x3jDnChhlptInYJSQyR5VFRGJlKyr1Q0QF0W8MruO6827%2BQ9Tkx4B8O%2FA1p3OpKdQjsGWTP5hI15RjQVnnf0%2FLVsbwA5HBpL%2FVHml5zW3rhUFhEiczWjIEOpvcpbreKtjDbz4q9BjqkAdXBxAVMEzwVkEHWWwuR0Nq1o6q%2Bl5zNbg29IoQgw5XsxSNd7lGh63w8wWh61y%2FmxoPLeykzM0FjJbU7why%2Fl1F3KWOkmHKJyaSBTf3W3FXomWWLAw4hua%2FaCO%2F%2F91azoXlt7cHWhH42vrDmqNlcdS1a44MVJF2hCpwiM8EePPRTsCm4T4oxNlw4fW%2F1p6JEdkG87c9dSnaqUjFluKkDcWD03PuZ&X-Amz-Signature=4132f0eabbc7192ad52fdbc1965dc831cd9c04f8fe9ead19a81b0ef42946c584&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRIHMIS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCKR4QJRoAV3%2FD0vYYVHYnxqI0%2F%2BEpQln29K788fRb%2FZwIhALmv%2FV%2FZeR4iN9SiDhXYLHf4KBYmW3PFsp4s2g8Ux8TMKv8DCDkQABoMNjM3NDIzMTgzODA1IgxNpxwHaXqdKUsczm0q3AMdr7pNdwHxZiFRZKlAlE%2F%2F0KFk3eYj6VhNTLOWnqGOZNYZknEvi6%2BxBOuJBELAwj4YEnQnyhY%2BXIahfB%2FJrZvy1xxpptZdSGRN%2Fr9DNxLJbiI4O5ZkyRh2QlOxxfxdabO3ULjQ43VrkF9lO2mKwt%2Fhc4fXUVw3gcfhB1fHqA9whVkA22wibMAwI18pVfW%2FfGIQT5u5Kw5tYqHiHq%2FgeFi07fSDnMbgNDKrQdr1kPcaOdAgg%2B8Q8s7TnYlig3WMxOiypOUV9Q7wxgV5YzfVD7ZShTJ4kAaT%2BO1zP%2Fxs3vE0IlWOWM5vVKocPHFPOpyo8likwAVWrSPHb6QZ9mgCvNeUW%2FMwByyF%2F571a8KuzLJKJ%2FCPoIzLRIKkqLrHmAoWDqYu8TOk9jQASNCKql%2FEZNEtxYm%2BQPWGVbuUZiWsf45U1JMBCDUSBkbqiZGI6AyfQbOYWqA4qixsSxuF6CIsNRCqtTIcrMCwbS0rzAMiu7RT8BkCk09z95QuTqx88x3jDnChhlptInYJSQyR5VFRGJlKyr1Q0QF0W8MruO6827%2BQ9Tkx4B8O%2FA1p3OpKdQjsGWTP5hI15RjQVnnf0%2FLVsbwA5HBpL%2FVHml5zW3rhUFhEiczWjIEOpvcpbreKtjDbz4q9BjqkAdXBxAVMEzwVkEHWWwuR0Nq1o6q%2Bl5zNbg29IoQgw5XsxSNd7lGh63w8wWh61y%2FmxoPLeykzM0FjJbU7why%2Fl1F3KWOkmHKJyaSBTf3W3FXomWWLAw4hua%2FaCO%2F%2F91azoXlt7cHWhH42vrDmqNlcdS1a44MVJF2hCpwiM8EePPRTsCm4T4oxNlw4fW%2F1p6JEdkG87c9dSnaqUjFluKkDcWD03PuZ&X-Amz-Signature=f0705a2ba354fbeaa5ede4c012cddb8a2bd7aaa54477598996f1808b8ddfecc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
