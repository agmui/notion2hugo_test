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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK5Z4MY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIC9yj7frxg3PgoMZfj%2FhfW%2BW5SfceBRIz2byKi61M682AiEA%2FzdqojI2ObllRIOL%2Bqz411mxGg9%2Bv9vVJNXkvN%2F2cZUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDc1OO6ySKqG8wkyircAwlBA7BSyjKD88yS%2FXb%2FuwBDXzArXEZkld2h1V4tupyVH9wv91Gc9T5ZcO4d9DKFjaUGcx4MhMDKw1jmIUXw37%2FQ%2B6wybTAaH4Y1guUN%2FLxJjcf4TRsAPRxyFX1flP25a8yWgJXBN2Dbh0BKGYOF%2FFUPyP7gs7rhF%2F1n2FeiAU8%2F9KBR2vt%2B7ytfsxPcieEI03lNSPejIBGgtH5Nqmn8Z6IA5NPl5uzFq535EnGzvC60cZK0DeUUGHC5OwN7La9VCOhvMERX%2Br%2BMkJjmreQ%2FG8EkciT5PLOzZ1Yyhz5NKdzM%2BErk%2BMJYuu2ch4GNpAnkwUjAhOOKCgYrV70N0dr9our2mFjBJGDqmhkCvGxR8j%2BIJtcazpEyaGVXTZ8tOWCoKzTH5Z8QDsoEjuaqOWoSpfax6Mta4SFmvVIYarGuXK7TYTxPZTerFZG2PabntJ35AnAe0%2FASmwRHPbz8TRlOLDls3A0HK6eQNgMCFyjOZT%2FFIsoI21BHdHP%2BV7hWliL4McWZRBZK1pQ5Gte7pUvPmNof3oPvcvhMXFNEG7rOC0WkCxxHcX6B0Ohrd9FoVIq0L06cf62itGQ1pc4kJ7iBciqHdy1Q6StecWwBwfOF%2FsCLBfFVt%2FssE6goCJ9FMMWv48IGOqUBNJvyZNV9nOUm0ju%2BIVmm%2B4gBKIL8iiLCoByrNDQSbWEY5SlQP%2BNxxaZNcDHd1SzEQu2dSzSOUCUxwIntV0OzbmFen8bIeytUJTgW8t%2Fxx9GfnktJWGfuZ3yb2mdRFWJTzEUofupG%2B73jp80C4ZvRlQE6jZ9xyKsxv%2Fizbasj8XsNgG70YiuyeZjO05VbJM720xS1SlI8jyhH1C5FYIqPjkvN4fq%2B&X-Amz-Signature=1b4532db38d069a55ff9203a3eb7feb37b23fc5b956a994c8f989841c88ab2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK5Z4MY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIC9yj7frxg3PgoMZfj%2FhfW%2BW5SfceBRIz2byKi61M682AiEA%2FzdqojI2ObllRIOL%2Bqz411mxGg9%2Bv9vVJNXkvN%2F2cZUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDc1OO6ySKqG8wkyircAwlBA7BSyjKD88yS%2FXb%2FuwBDXzArXEZkld2h1V4tupyVH9wv91Gc9T5ZcO4d9DKFjaUGcx4MhMDKw1jmIUXw37%2FQ%2B6wybTAaH4Y1guUN%2FLxJjcf4TRsAPRxyFX1flP25a8yWgJXBN2Dbh0BKGYOF%2FFUPyP7gs7rhF%2F1n2FeiAU8%2F9KBR2vt%2B7ytfsxPcieEI03lNSPejIBGgtH5Nqmn8Z6IA5NPl5uzFq535EnGzvC60cZK0DeUUGHC5OwN7La9VCOhvMERX%2Br%2BMkJjmreQ%2FG8EkciT5PLOzZ1Yyhz5NKdzM%2BErk%2BMJYuu2ch4GNpAnkwUjAhOOKCgYrV70N0dr9our2mFjBJGDqmhkCvGxR8j%2BIJtcazpEyaGVXTZ8tOWCoKzTH5Z8QDsoEjuaqOWoSpfax6Mta4SFmvVIYarGuXK7TYTxPZTerFZG2PabntJ35AnAe0%2FASmwRHPbz8TRlOLDls3A0HK6eQNgMCFyjOZT%2FFIsoI21BHdHP%2BV7hWliL4McWZRBZK1pQ5Gte7pUvPmNof3oPvcvhMXFNEG7rOC0WkCxxHcX6B0Ohrd9FoVIq0L06cf62itGQ1pc4kJ7iBciqHdy1Q6StecWwBwfOF%2FsCLBfFVt%2FssE6goCJ9FMMWv48IGOqUBNJvyZNV9nOUm0ju%2BIVmm%2B4gBKIL8iiLCoByrNDQSbWEY5SlQP%2BNxxaZNcDHd1SzEQu2dSzSOUCUxwIntV0OzbmFen8bIeytUJTgW8t%2Fxx9GfnktJWGfuZ3yb2mdRFWJTzEUofupG%2B73jp80C4ZvRlQE6jZ9xyKsxv%2Fizbasj8XsNgG70YiuyeZjO05VbJM720xS1SlI8jyhH1C5FYIqPjkvN4fq%2B&X-Amz-Signature=da7ee29cfb9de7bc0eec461d59f1155007420be3f080ba2822c92c50c7c06ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
