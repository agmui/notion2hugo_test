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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWTZRJF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD%2F0cEQwggnYA2fzfpn2u4bLURfHJqj8ZAU%2B1JlaIq%2FxAIhAKUqZlgjoRK6LihfhVePGKQpcThzQzIDHrdiIktrnGU5KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrANN7Nhb1masOLj8q3AOytXmwBCe4AU3YO%2B7yg7QaZr1gES5DIVMlU%2FsnoY0GR%2BA%2Bz0R4n3LYrW2OcY3LJe4GwSFgPrDFojywnL5oxBefVZDYIk9BZaj5oSqlhlNsp%2FdnpfB2avqp2qAwuD4u%2F1AcEkOG12A6Hf%2BzbpO9OMBXQ6cRqofRtL1LnJAJTWETn85lOKkRzM4Vfxk%2FdaWBVqjNuk7cVV0vo%2FU9CNrDe64sNvaSbMXTC2tuwEpP2RRQ1aAN70GxzgTZ3TFBc9MTodHz2QfvE%2BYAAw%2F12vg9uBuGRAPbY%2BZ2p4m24G1ilcHd7cY5VOY688vW9I43T16PaRH7LRVXoc1AKoVeWvtYIknQa2Aap78ePXU0qRX%2FLV2NGbNWxyAavhOms5Y8z%2FBrave0%2B6I1bljV5Fx4Fae6oU1SnRxJJffh9Q4QhREkjJZJY3HU063XygMv432SvgqAr9mnWFW%2Fo%2BJd1aGnqtA%2FELSpinC5clmVazsGkq%2B8OF5ApwcfkrAl8mOsjkzUSq2aH1xH23wTNS%2BJtmMj9%2FI3%2FfYmdCWuCLRDPm7hdkYKjTv92JK1SnEm2Igl1XK76JNeWuMNKokCTAVKU3gM1aYHDOkFoDFeRfNhAKCY1AqNqUsihyHedM3QCFTzjfRaXjCR5NPABjqkAUziwzJZxgycGIX%2FceDOqtzRitf6EsLemhkDo%2F6aKqDkbaPpTfokEs2l2MJgPygxSuJV%2FMj%2BnrhJodCsoKYzbC1owg%2F9xdch7frq2mh48oAnxUy5CLBK8aYqQi%2Fdh7lD9YyKN9WIC7kknOG%2Bs8fmnNxsKfvo8ftXw7m3dpTriWWyIt5YRacSIGhXo1e%2BhjJeK5rYvHRM5T4uFYHslPpr%2FSNkZCDc&X-Amz-Signature=b0c383897f8712a3e24dc9432a88c1c7f5672cba5bb2699c2b390c4f83208fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWTZRJF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD%2F0cEQwggnYA2fzfpn2u4bLURfHJqj8ZAU%2B1JlaIq%2FxAIhAKUqZlgjoRK6LihfhVePGKQpcThzQzIDHrdiIktrnGU5KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrANN7Nhb1masOLj8q3AOytXmwBCe4AU3YO%2B7yg7QaZr1gES5DIVMlU%2FsnoY0GR%2BA%2Bz0R4n3LYrW2OcY3LJe4GwSFgPrDFojywnL5oxBefVZDYIk9BZaj5oSqlhlNsp%2FdnpfB2avqp2qAwuD4u%2F1AcEkOG12A6Hf%2BzbpO9OMBXQ6cRqofRtL1LnJAJTWETn85lOKkRzM4Vfxk%2FdaWBVqjNuk7cVV0vo%2FU9CNrDe64sNvaSbMXTC2tuwEpP2RRQ1aAN70GxzgTZ3TFBc9MTodHz2QfvE%2BYAAw%2F12vg9uBuGRAPbY%2BZ2p4m24G1ilcHd7cY5VOY688vW9I43T16PaRH7LRVXoc1AKoVeWvtYIknQa2Aap78ePXU0qRX%2FLV2NGbNWxyAavhOms5Y8z%2FBrave0%2B6I1bljV5Fx4Fae6oU1SnRxJJffh9Q4QhREkjJZJY3HU063XygMv432SvgqAr9mnWFW%2Fo%2BJd1aGnqtA%2FELSpinC5clmVazsGkq%2B8OF5ApwcfkrAl8mOsjkzUSq2aH1xH23wTNS%2BJtmMj9%2FI3%2FfYmdCWuCLRDPm7hdkYKjTv92JK1SnEm2Igl1XK76JNeWuMNKokCTAVKU3gM1aYHDOkFoDFeRfNhAKCY1AqNqUsihyHedM3QCFTzjfRaXjCR5NPABjqkAUziwzJZxgycGIX%2FceDOqtzRitf6EsLemhkDo%2F6aKqDkbaPpTfokEs2l2MJgPygxSuJV%2FMj%2BnrhJodCsoKYzbC1owg%2F9xdch7frq2mh48oAnxUy5CLBK8aYqQi%2Fdh7lD9YyKN9WIC7kknOG%2Bs8fmnNxsKfvo8ftXw7m3dpTriWWyIt5YRacSIGhXo1e%2BhjJeK5rYvHRM5T4uFYHslPpr%2FSNkZCDc&X-Amz-Signature=a182092292e279c93788c8b5de439ffadc54a4d9154a85d716e9521d0e52265a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
