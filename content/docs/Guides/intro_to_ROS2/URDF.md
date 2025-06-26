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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ZH25YB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA1D%2BH9tbb9FZXc3vEMpWsT9j6AUvExdN4D7E1iXtrXwAiEA%2BKlxuA1vE8pFDp3YD6CiGNlQMSFXQ4tKCucw6tMjp3Iq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHqvIOjaLXHF4b%2FLLCrcA5nn%2FCdG3XE5agH5vSMMZxTUGw0REExoMofb%2BsQdxi3zidNm5lJus3P%2BZFT3OLLfFJbO3EmVIOdC6as2qffpclp%2BbG8LedBY0cCdTlTZ3psmb68ctG6gIancrmkkZCdISjQ7GWtBaIVtr7w%2FSQ40N80llEB%2B9rd3XRWIKJSwccmvZjb1JHwTVVk9Gy%2Bi1H6%2BUeLJdh3jrverS1i3r5j2YEykyIweWKo76f%2FnFjpwHjIHvmkbHJj5gUrcRR85V%2Fb1QcxIfknTKWwuK%2B7Lb8FiUuhps%2Bh8Oa8ydKRGou9qfB2tEf8uqkz3CNeNuDHMsBmpqsjC1G0vAmKWQl4GkkkCjg2ZDtXomcQRSey11DEEKlPpgGgBLcjxGaOQ9FqAEW%2Bmtu%2FMHZTYBeRuwU3L5ZyfrpU3pN7o5VF0PYg0LFzsJ3UXUmKbsDUSM8l5%2F4nqt2rDgKuEFeNwoVSa%2B69rOGulIblQUPVQQZ5q7xnRqrDL9NMEHSqkU8NCzgOLEH6A4%2FOK9pFm%2FopRV3fRXdnISDELmVdZGQAvJlxTe5OwoIpm7TKXBt3VYyvG9m7TgK46CQrgYr6G6gHRCCMwwvxCeRqJitt%2B4%2BGwISGDNgUNA%2BnQw5hho3NYj5b3WqP7LmHmMNic9cIGOqUBeIkx93eOsrH6KPLFABYpnr7b7xpop0aFTWBW8F1Deg%2B%2FqiJJm10aMHMx%2FfUFhOGHNAuq%2BY8VsUrdaqyfuuT2B2RBq9FzTXNcRI%2Fx%2Bz%2FhcgTnkZZJjom6cNkkFPJ4IZB1AFQlgvWrXc3ZFn81YVhfN%2FAlYNtA4QxVa3XibnH2DaYa06pZd%2FAMMUUIu3NJZqZi6%2F5r3Bb9XqXng3Ju5aIVfBCPbuiP&X-Amz-Signature=c5d91605b071f8c15ccba9d01332176f639f8bfc222f82dc5596b689a75b9063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ZH25YB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA1D%2BH9tbb9FZXc3vEMpWsT9j6AUvExdN4D7E1iXtrXwAiEA%2BKlxuA1vE8pFDp3YD6CiGNlQMSFXQ4tKCucw6tMjp3Iq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHqvIOjaLXHF4b%2FLLCrcA5nn%2FCdG3XE5agH5vSMMZxTUGw0REExoMofb%2BsQdxi3zidNm5lJus3P%2BZFT3OLLfFJbO3EmVIOdC6as2qffpclp%2BbG8LedBY0cCdTlTZ3psmb68ctG6gIancrmkkZCdISjQ7GWtBaIVtr7w%2FSQ40N80llEB%2B9rd3XRWIKJSwccmvZjb1JHwTVVk9Gy%2Bi1H6%2BUeLJdh3jrverS1i3r5j2YEykyIweWKo76f%2FnFjpwHjIHvmkbHJj5gUrcRR85V%2Fb1QcxIfknTKWwuK%2B7Lb8FiUuhps%2Bh8Oa8ydKRGou9qfB2tEf8uqkz3CNeNuDHMsBmpqsjC1G0vAmKWQl4GkkkCjg2ZDtXomcQRSey11DEEKlPpgGgBLcjxGaOQ9FqAEW%2Bmtu%2FMHZTYBeRuwU3L5ZyfrpU3pN7o5VF0PYg0LFzsJ3UXUmKbsDUSM8l5%2F4nqt2rDgKuEFeNwoVSa%2B69rOGulIblQUPVQQZ5q7xnRqrDL9NMEHSqkU8NCzgOLEH6A4%2FOK9pFm%2FopRV3fRXdnISDELmVdZGQAvJlxTe5OwoIpm7TKXBt3VYyvG9m7TgK46CQrgYr6G6gHRCCMwwvxCeRqJitt%2B4%2BGwISGDNgUNA%2BnQw5hho3NYj5b3WqP7LmHmMNic9cIGOqUBeIkx93eOsrH6KPLFABYpnr7b7xpop0aFTWBW8F1Deg%2B%2FqiJJm10aMHMx%2FfUFhOGHNAuq%2BY8VsUrdaqyfuuT2B2RBq9FzTXNcRI%2Fx%2Bz%2FhcgTnkZZJjom6cNkkFPJ4IZB1AFQlgvWrXc3ZFn81YVhfN%2FAlYNtA4QxVa3XibnH2DaYa06pZd%2FAMMUUIu3NJZqZi6%2F5r3Bb9XqXng3Ju5aIVfBCPbuiP&X-Amz-Signature=32f4180accd5defbc70a3a6ffa5ade0f969358f4fc7f16d620bf5d3d160a4d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
