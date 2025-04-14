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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMDJDIU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYCeGcHK1zPVHhs0YbYcroNYMAoFbnvqnAQWG3lejKvQIhAJ5DwGPAqWQ8q64D%2FYNALTn%2F7q9fPge%2FSkpjTn%2BGlQiqKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL9IU%2BLxE6WQRinzIq3AP5Wj1mOGkaal198cBKTEZGFO5KjFcOo7NJ0VsPAyaWRMZAJI278RR%2FIAEVlWX9zRwqOVufUVbfezHpqITRsg6eBNZ5lstfUWM0WpCOEzQGTtlQypCju6oRzDjNdAvDbEZqeErlz7LCkSVY118kX9cyRu5UWbiuKG%2BxzBJM%2FoYF5CaXsL33GEyIOUmJQdGkqBayLWdedoASvaDIz8%2BRTzQO5cJnS5v6jd2pZipUpkQj2ZqK1wykK5JwG0yfWkgZRsr3atz7usekmDq6KwJMvWX3x6DqotSm4bh5gO48fGyGcxtidr6yhl7gK7Ba4rEa%2Fqd421VWuVYsAPVD2oqFmnjU5avX8kXrOcPs4qTUtZwP45tmcIgl3xL9dr9%2Br%2BPQYEtSmU77N7nHGHolwEtGb%2BuGIp%2F4IGuTPicRsbHa6TP91kxRq6Aeq2rf4WJ5Kq%2B9LX5XPZx6%2Fn9J8JOTv2%2FjtdXO5qFWTI%2BSwtE%2BERei0VE6jhdKbFHs6GTPIsq%2B6tDbTL96KMYDJ5NY76hTpLIphgx8HJXIZPQRROSI%2BTHtHTfd6Y%2FNubB4HB%2F3tP3bmha%2FWDsmIzv37HGtyT32h%2BpRmHxoQmKIm5RqveMMF0OWWAugpjdkA0bfdc3EkSI1TzDPr%2FK%2FBjqkAeauOs1ABeynXZ8BpT5xU6Dtgkj93w2lQXYvHOsDRxftJCMJqcGP4SO3OCjSkxezVmqX6Z65dte4RBgla%2BGLXWQWzNjyisBDvy2ilu5x8v%2BFmIo2ss8jA4a66Bd0tLJQ5fVa7VVzg1V3sy%2BEwZzW2wRwuuYpRAnJS6%2B1yP4zZnwjHokKXRKNsYxF3KQJNfCbIpOTGnsZ%2FnnWAFZcByBqYh01%2F9Lg&X-Amz-Signature=6d2488825272587c0f22d5363fb34ac27ea431060e58d6fab072bf9a21218488&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMDJDIU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYCeGcHK1zPVHhs0YbYcroNYMAoFbnvqnAQWG3lejKvQIhAJ5DwGPAqWQ8q64D%2FYNALTn%2F7q9fPge%2FSkpjTn%2BGlQiqKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL9IU%2BLxE6WQRinzIq3AP5Wj1mOGkaal198cBKTEZGFO5KjFcOo7NJ0VsPAyaWRMZAJI278RR%2FIAEVlWX9zRwqOVufUVbfezHpqITRsg6eBNZ5lstfUWM0WpCOEzQGTtlQypCju6oRzDjNdAvDbEZqeErlz7LCkSVY118kX9cyRu5UWbiuKG%2BxzBJM%2FoYF5CaXsL33GEyIOUmJQdGkqBayLWdedoASvaDIz8%2BRTzQO5cJnS5v6jd2pZipUpkQj2ZqK1wykK5JwG0yfWkgZRsr3atz7usekmDq6KwJMvWX3x6DqotSm4bh5gO48fGyGcxtidr6yhl7gK7Ba4rEa%2Fqd421VWuVYsAPVD2oqFmnjU5avX8kXrOcPs4qTUtZwP45tmcIgl3xL9dr9%2Br%2BPQYEtSmU77N7nHGHolwEtGb%2BuGIp%2F4IGuTPicRsbHa6TP91kxRq6Aeq2rf4WJ5Kq%2B9LX5XPZx6%2Fn9J8JOTv2%2FjtdXO5qFWTI%2BSwtE%2BERei0VE6jhdKbFHs6GTPIsq%2B6tDbTL96KMYDJ5NY76hTpLIphgx8HJXIZPQRROSI%2BTHtHTfd6Y%2FNubB4HB%2F3tP3bmha%2FWDsmIzv37HGtyT32h%2BpRmHxoQmKIm5RqveMMF0OWWAugpjdkA0bfdc3EkSI1TzDPr%2FK%2FBjqkAeauOs1ABeynXZ8BpT5xU6Dtgkj93w2lQXYvHOsDRxftJCMJqcGP4SO3OCjSkxezVmqX6Z65dte4RBgla%2BGLXWQWzNjyisBDvy2ilu5x8v%2BFmIo2ss8jA4a66Bd0tLJQ5fVa7VVzg1V3sy%2BEwZzW2wRwuuYpRAnJS6%2B1yP4zZnwjHokKXRKNsYxF3KQJNfCbIpOTGnsZ%2FnnWAFZcByBqYh01%2F9Lg&X-Amz-Signature=afc7ffd6942d54dd012e728a612af8674cc3e5092880f63b3d1566335a15061e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
