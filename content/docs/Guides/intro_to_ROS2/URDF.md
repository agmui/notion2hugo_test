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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5Z4HYMU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCdKW0oFjbXSdVuJLtsSABygJi5SvIlQWF8Fjt7mtgsgAIgDxLjWojgZsX%2FpDVh3OWCUt4O4hot%2BDWOs4gSFWS%2Bp78q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHfYjH0MAFFCzKxwwyrcAzFUfpHEdreZvVEO6M5Fu6xu7qfkZH5Ieu7BRcBE5ThWiokKELgr2kAQNb9M8q5vzRyy2ZCDnLAsEV7sF21RNWshnbMiL5W67JPWPZFy%2B7A2xmMayQ5H6GtbVZA4ra3%2BNpP3UQgB2Q%2F2EVBHfHY9oxBojkCm%2FGQ2KtMtwIeBE8k%2FR4aYSkxgtMQZa7y3qpQmVRZFXm9roQv1BgiWK0R1lukeOdx6emiZkjYSOdJE774hHPJKvwMpp11MnDJvqVdIecJWDeV27q%2Fe8IupHY25AVYzJF20o6Kbu3Bx2AGDLF%2BesC6OWY%2FvLBVewIWseAkpo5IJe9BPJjQSwjMnvraINFVGjaJlKin4kixqcqYEodCYEAqRRGYpHWJbHBKaz7W9oqfwW5DbmSDxZ0c37eP40H5S8yxUKq0qW7QIdLyxu7GybTpYOo3vKWO2v%2BdIJLWV9kITc3%2F%2BxpwN5xBMIk3TbdIxmW%2BOg2e%2BK6p83jOGQOsTdfQVN8hQuVbBxgu1WG4j4y%2BpZHTiZHSuaOCdp9JcZm0LwZaKkisrHmgTdHVp%2BRHmwBfIoZTH8EgnyCol9zTK%2FgBv6mbyGi%2BvhY0JOh%2FcESAouTTll%2Fh14b%2FQJRlYLpBSke%2BE75v6Zw2qKRd%2BMNC3mcMGOqUBz8xsOZye%2BPooWEOulAQuZ0qeXkmpebGibRdmRnkksdtnEkE8u3tckwwTJKf50iN0PDfXQOgULrOR4p6YJ%2F3X1iExgDJIb7Oz6rmrVa6DqpelpPhkGBxLUizE0ScRv7GuOyQ5%2B1t5gBQ0f3n6fYAPv5z%2BH%2BNa2vAKf0ADp2OeGCWdoiVuj4z9aRwOxyoc66yNSHx%2Fq8SXBggkoV8ng7dyhjZrp6jp&X-Amz-Signature=d639e1929b4444105ac09ea7c69f79785378deb8856aa4eb381251105327725b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5Z4HYMU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCdKW0oFjbXSdVuJLtsSABygJi5SvIlQWF8Fjt7mtgsgAIgDxLjWojgZsX%2FpDVh3OWCUt4O4hot%2BDWOs4gSFWS%2Bp78q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHfYjH0MAFFCzKxwwyrcAzFUfpHEdreZvVEO6M5Fu6xu7qfkZH5Ieu7BRcBE5ThWiokKELgr2kAQNb9M8q5vzRyy2ZCDnLAsEV7sF21RNWshnbMiL5W67JPWPZFy%2B7A2xmMayQ5H6GtbVZA4ra3%2BNpP3UQgB2Q%2F2EVBHfHY9oxBojkCm%2FGQ2KtMtwIeBE8k%2FR4aYSkxgtMQZa7y3qpQmVRZFXm9roQv1BgiWK0R1lukeOdx6emiZkjYSOdJE774hHPJKvwMpp11MnDJvqVdIecJWDeV27q%2Fe8IupHY25AVYzJF20o6Kbu3Bx2AGDLF%2BesC6OWY%2FvLBVewIWseAkpo5IJe9BPJjQSwjMnvraINFVGjaJlKin4kixqcqYEodCYEAqRRGYpHWJbHBKaz7W9oqfwW5DbmSDxZ0c37eP40H5S8yxUKq0qW7QIdLyxu7GybTpYOo3vKWO2v%2BdIJLWV9kITc3%2F%2BxpwN5xBMIk3TbdIxmW%2BOg2e%2BK6p83jOGQOsTdfQVN8hQuVbBxgu1WG4j4y%2BpZHTiZHSuaOCdp9JcZm0LwZaKkisrHmgTdHVp%2BRHmwBfIoZTH8EgnyCol9zTK%2FgBv6mbyGi%2BvhY0JOh%2FcESAouTTll%2Fh14b%2FQJRlYLpBSke%2BE75v6Zw2qKRd%2BMNC3mcMGOqUBz8xsOZye%2BPooWEOulAQuZ0qeXkmpebGibRdmRnkksdtnEkE8u3tckwwTJKf50iN0PDfXQOgULrOR4p6YJ%2F3X1iExgDJIb7Oz6rmrVa6DqpelpPhkGBxLUizE0ScRv7GuOyQ5%2B1t5gBQ0f3n6fYAPv5z%2BH%2BNa2vAKf0ADp2OeGCWdoiVuj4z9aRwOxyoc66yNSHx%2Fq8SXBggkoV8ng7dyhjZrp6jp&X-Amz-Signature=81812afa6b732776e82016c9ddfd45839975894d66dcf6e4e4a7f04113091f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
