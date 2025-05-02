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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW7JOMR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFVO1hbUpjSPm6LTFhZWJcIJcpcAU4QWLaM3o9fevz2kAiEAnvopiIMRHmiAxS4kouaQvNEvZ91xqQArKf8YXShg1T0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCup7Duhfdxsqeyt8CrcAzCtz5hkd9aVtOCFo5Ck8mhYR4EmIu0rr9AtG7ywPiT4V%2FrgsP7CxmL0FZTnnZrLUkcZa4JykycD5TvDKl0Y20RawvL0GyZVWpp0UFHgiaWFFhh9BeuJys0I0dVM%2BC8laaMwqPoKXuLKGLxhMTTahsOz7DhcXnNcW3ZmNevfHJPl8tVBrm%2Bnr%2FQHi6eXIl4cg1wFD2g8%2BJNWODUgXRJiCqPxzB9Um5IBoUbZzyAgk2SeS4ctQTa3oWVI7gCCjPyV8vN6%2FQgxruMq31OHPkp9ZAZ6atMmsqd4LqnYrR8JlihS4tSiplB2Pge3GFSanr%2B1iPjc%2BbA5q%2F6umQRCUtlrPiFSaRjvxhcrh5uYDf4AFBAnnWGlOOXmsglTSBoA0dqdYklpJ4%2FXEIfSaaCWziGlqu4%2B6t9ApKlEBQweu9js58yZI1kJISbtjc3KjxjwXNhhAXT%2Fm6EQZ5chrMP247IqaMJKp6b5sRGkhjOMqkQhfp94fF%2Fhi04dWw%2BJjE%2B5qSBrkK3gLWnSMZ%2Biw0XXQlkXJtuQ1n68Lg4gX7M2egd%2B%2F2YZCeaRwKveachtzhcQlgfjWvYHdYZ7%2B4kIGumolvHrwSgdUXRFIAPRTAxm9I0RLlTtAzjYguc1HuVmisgbMO3R0MAGOqUBLWd8y%2Bal%2F38d9VCDvf0R5Xk356MpfMErMFbfvflrUjgZQCsO%2Fs%2BWr1TqwZttesBdiXBknIKHU84H4fuT%2BuqhwABM5j%2BVbUSO2ayLDRpBvtce1OZ3bi5KJ7Oa6djZK%2F793wa70yEgbAaxGmDMbqY3uEhFnzcwbUD4mgJu%2BGDUd1JQVDh%2BTxyZG5R4APnwOFp3dOEeeZ6kS2fhTklk9r29fdIMv%2Fi3&X-Amz-Signature=64265332aa25e4df0a7031d409ef830521e26f7b5ac99dc765738d578bfa2d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW7JOMR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFVO1hbUpjSPm6LTFhZWJcIJcpcAU4QWLaM3o9fevz2kAiEAnvopiIMRHmiAxS4kouaQvNEvZ91xqQArKf8YXShg1T0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCup7Duhfdxsqeyt8CrcAzCtz5hkd9aVtOCFo5Ck8mhYR4EmIu0rr9AtG7ywPiT4V%2FrgsP7CxmL0FZTnnZrLUkcZa4JykycD5TvDKl0Y20RawvL0GyZVWpp0UFHgiaWFFhh9BeuJys0I0dVM%2BC8laaMwqPoKXuLKGLxhMTTahsOz7DhcXnNcW3ZmNevfHJPl8tVBrm%2Bnr%2FQHi6eXIl4cg1wFD2g8%2BJNWODUgXRJiCqPxzB9Um5IBoUbZzyAgk2SeS4ctQTa3oWVI7gCCjPyV8vN6%2FQgxruMq31OHPkp9ZAZ6atMmsqd4LqnYrR8JlihS4tSiplB2Pge3GFSanr%2B1iPjc%2BbA5q%2F6umQRCUtlrPiFSaRjvxhcrh5uYDf4AFBAnnWGlOOXmsglTSBoA0dqdYklpJ4%2FXEIfSaaCWziGlqu4%2B6t9ApKlEBQweu9js58yZI1kJISbtjc3KjxjwXNhhAXT%2Fm6EQZ5chrMP247IqaMJKp6b5sRGkhjOMqkQhfp94fF%2Fhi04dWw%2BJjE%2B5qSBrkK3gLWnSMZ%2Biw0XXQlkXJtuQ1n68Lg4gX7M2egd%2B%2F2YZCeaRwKveachtzhcQlgfjWvYHdYZ7%2B4kIGumolvHrwSgdUXRFIAPRTAxm9I0RLlTtAzjYguc1HuVmisgbMO3R0MAGOqUBLWd8y%2Bal%2F38d9VCDvf0R5Xk356MpfMErMFbfvflrUjgZQCsO%2Fs%2BWr1TqwZttesBdiXBknIKHU84H4fuT%2BuqhwABM5j%2BVbUSO2ayLDRpBvtce1OZ3bi5KJ7Oa6djZK%2F793wa70yEgbAaxGmDMbqY3uEhFnzcwbUD4mgJu%2BGDUd1JQVDh%2BTxyZG5R4APnwOFp3dOEeeZ6kS2fhTklk9r29fdIMv%2Fi3&X-Amz-Signature=d48773ec638668dca7b1addef13a070f2228e1733f681d9d8d15440f4bceca00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
