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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAN7FPT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7VLA0roayp7cXX%2BiIy9tenH6zHFW6%2BAh%2FAcfGyRulagIgfT9yGoeL5Sj%2FFh0au4%2BN4vWhP1TK68fVTw02zQvLX2sqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtnDpI0nEFSy24O7ircA27gr%2F0HELd8wlLkc1PHak2IiUtryUhlIWhakyUZ9eFbtOfLLQiILjvC9m%2BjnqDp2kcMxcXGmHjVP9OMaNgUeWUcoxZBnhLLpMa3jxJpVEkXMx1CZHJyzqMcs6t%2BemNrjUynW5JR4sQmPo9wYqpQnoZzh4OAgq5ocn59%2B7xBsnSUu9oY4zlVcV8gjHnezoqyLZDwuy0q%2FlfNHRo58d%2F%2BOAq6I4QGnfCjGFMZD%2FcloYPOj3EVB%2B2gmU3h3NBGdzw73NwGsMVe9GRP8bPPeK2w0c9tHKpxn4XGaa5E4irIJ6KOnNfddiW70LSAOR5X88ZVtjBBtRUnpELDckQawuMRUwO2S5qI8Xhhy82toOgaLMOgBx%2BufM1qcBox65ANZMHfAOAJ5BCifcbRS8ZYX%2F37p46aZRZUWp3paNCnVncY%2BG3i4HI%2Bwf1BqBHOG0h57d%2B7xmvg80bXknv4Bd2PkMgseEVJ4In2g8HBneQXAPqXSkzh0MPEVJKymCSlyoFYPDqYPAMFFEWiprxKDAzPje83QeKHeCRe4CbUvaeLFkM8kWG%2FoEK5lYXwB31coI3hG4CHn7PuKtcnfB7hzRIL5pKR1frUy6WshMS8st1s1yZJnZzSWcslohR48vZ5cAXIMJyY8cMGOqUBNzVC51xQZ%2FTnEdc8K8rFP3EftLxme7FABHaxarBoerMiFbbjaVs4u%2Fo%2BDAaj6gnahmdGpaajeQ%2FHKpHpMl5fD0rzHyU4%2BgYjqs4wqyqgwyAUjG5VC8MY3KQI9KA%2Bq4wfUsrfSzVAc071HgzOjI1hSfhW19McKVhiWuK4P5OO42mIbNrePQV6XQILvXKDrzzFuJ1xGCBwrVMS%2FtqgdwZJKICdJRMO&X-Amz-Signature=9ce2f1a95bc9e5013fa6d877e782b138c1bc2930e54da73d7a097c2dd74895a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAN7FPT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7VLA0roayp7cXX%2BiIy9tenH6zHFW6%2BAh%2FAcfGyRulagIgfT9yGoeL5Sj%2FFh0au4%2BN4vWhP1TK68fVTw02zQvLX2sqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtnDpI0nEFSy24O7ircA27gr%2F0HELd8wlLkc1PHak2IiUtryUhlIWhakyUZ9eFbtOfLLQiILjvC9m%2BjnqDp2kcMxcXGmHjVP9OMaNgUeWUcoxZBnhLLpMa3jxJpVEkXMx1CZHJyzqMcs6t%2BemNrjUynW5JR4sQmPo9wYqpQnoZzh4OAgq5ocn59%2B7xBsnSUu9oY4zlVcV8gjHnezoqyLZDwuy0q%2FlfNHRo58d%2F%2BOAq6I4QGnfCjGFMZD%2FcloYPOj3EVB%2B2gmU3h3NBGdzw73NwGsMVe9GRP8bPPeK2w0c9tHKpxn4XGaa5E4irIJ6KOnNfddiW70LSAOR5X88ZVtjBBtRUnpELDckQawuMRUwO2S5qI8Xhhy82toOgaLMOgBx%2BufM1qcBox65ANZMHfAOAJ5BCifcbRS8ZYX%2F37p46aZRZUWp3paNCnVncY%2BG3i4HI%2Bwf1BqBHOG0h57d%2B7xmvg80bXknv4Bd2PkMgseEVJ4In2g8HBneQXAPqXSkzh0MPEVJKymCSlyoFYPDqYPAMFFEWiprxKDAzPje83QeKHeCRe4CbUvaeLFkM8kWG%2FoEK5lYXwB31coI3hG4CHn7PuKtcnfB7hzRIL5pKR1frUy6WshMS8st1s1yZJnZzSWcslohR48vZ5cAXIMJyY8cMGOqUBNzVC51xQZ%2FTnEdc8K8rFP3EftLxme7FABHaxarBoerMiFbbjaVs4u%2Fo%2BDAaj6gnahmdGpaajeQ%2FHKpHpMl5fD0rzHyU4%2BgYjqs4wqyqgwyAUjG5VC8MY3KQI9KA%2Bq4wfUsrfSzVAc071HgzOjI1hSfhW19McKVhiWuK4P5OO42mIbNrePQV6XQILvXKDrzzFuJ1xGCBwrVMS%2FtqgdwZJKICdJRMO&X-Amz-Signature=1f4a49d63c55236d9c1457f1b41caf4d0e4f790248a4601268f025c637ee34c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
