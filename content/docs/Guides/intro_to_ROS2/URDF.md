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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BZME5N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyLvZl6NSQ9QipQ5q9MkKe%2BSoQKV%2BuxAP8Xgu%2BIBrQOAiEAnGGHp5YW%2Biwf2jRTrmUZwSMYr1tflyKOm0Xfao5evOwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdW2ei3x%2F9Hj%2BnTtCrcA3QLfaM35Xy6NkUzXDOO3aE5aEF3xuGOazQ%2BliSRtICtZ9uClZvv6TgVttHVoUuobuqW6lDm%2FpqmfKynkSLFB1gXXy5DFQlwPJTTeLsShakyDEtGJbm%2BQtglNOsR7eEJM0cr4anAPGUyyI5I96vDxteGqowfASHkDrPh91J%2FBV5lE6HOehR8%2BztUXQXXpHHexbiY9M5CRsQ7NwibSFJRZ58vm5WhJodupAEkgF5gV%2F%2FHAccStucibR8hX9TGJ7q5inuKwbliNnKeOhq68iu7xDSNNpmSuM0E8iIWcBb6ZriL6ZSsZB4izssTR5HgQw%2FT9oOm%2B62qbG1D%2Bm%2FZfP%2FcgKNWO5eiG5wA3YDrai%2BCT9oNxyrImL52lv%2FdZFc17H9NzbpmFcp2X%2Fii%2FxmjBm1s5n3xdkIm31ASXSs%2FqlFgnmRkupofH%2BnyxhIlob3QeocyewE0vL0yTYBYLHb8DJJ9nP5lj63FxxTPsYcjWkH3rAU6z1YgHQkyAXM3ZcraAvS2pFO6cu28%2Ffx%2FlYtjX9Bo%2FFFL4W6q%2Fq%2BG70v2tDa9eyb%2FXGqddt6OEauKTauIywDhAhAINFJysGbs9XIg0VGega%2B%2FyqG74fOm%2B9IEYwB%2B2aHZS%2FFmuPRCA1qpFufpMOXLyMMGOqUBYerZhfe9VJvNom2p2ftPKCTdUQazJA6IOaRgWTcHy3SelMMKPMwD6NO60%2Fct1xTzzXHeB1kB3N4pG9RRG4oERfV0rBdYvKMGao4YTpt2x32Nw6krgh2fhTDPEDRBeqPky0J20JygkgVP0rB9G8sHWCfMvU25uEYoOqo1cH8BLeLNtWZ8Onay5o%2FfCbJIfjEfDL2kEvF2fZyTKyX%2FGZ22cSwOU0mQ&X-Amz-Signature=9b82b503971e98ff0cb50aeb3908fede8a5b30dd73658c005184f6e94b451eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BZME5N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyLvZl6NSQ9QipQ5q9MkKe%2BSoQKV%2BuxAP8Xgu%2BIBrQOAiEAnGGHp5YW%2Biwf2jRTrmUZwSMYr1tflyKOm0Xfao5evOwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdW2ei3x%2F9Hj%2BnTtCrcA3QLfaM35Xy6NkUzXDOO3aE5aEF3xuGOazQ%2BliSRtICtZ9uClZvv6TgVttHVoUuobuqW6lDm%2FpqmfKynkSLFB1gXXy5DFQlwPJTTeLsShakyDEtGJbm%2BQtglNOsR7eEJM0cr4anAPGUyyI5I96vDxteGqowfASHkDrPh91J%2FBV5lE6HOehR8%2BztUXQXXpHHexbiY9M5CRsQ7NwibSFJRZ58vm5WhJodupAEkgF5gV%2F%2FHAccStucibR8hX9TGJ7q5inuKwbliNnKeOhq68iu7xDSNNpmSuM0E8iIWcBb6ZriL6ZSsZB4izssTR5HgQw%2FT9oOm%2B62qbG1D%2Bm%2FZfP%2FcgKNWO5eiG5wA3YDrai%2BCT9oNxyrImL52lv%2FdZFc17H9NzbpmFcp2X%2Fii%2FxmjBm1s5n3xdkIm31ASXSs%2FqlFgnmRkupofH%2BnyxhIlob3QeocyewE0vL0yTYBYLHb8DJJ9nP5lj63FxxTPsYcjWkH3rAU6z1YgHQkyAXM3ZcraAvS2pFO6cu28%2Ffx%2FlYtjX9Bo%2FFFL4W6q%2Fq%2BG70v2tDa9eyb%2FXGqddt6OEauKTauIywDhAhAINFJysGbs9XIg0VGega%2B%2FyqG74fOm%2B9IEYwB%2B2aHZS%2FFmuPRCA1qpFufpMOXLyMMGOqUBYerZhfe9VJvNom2p2ftPKCTdUQazJA6IOaRgWTcHy3SelMMKPMwD6NO60%2Fct1xTzzXHeB1kB3N4pG9RRG4oERfV0rBdYvKMGao4YTpt2x32Nw6krgh2fhTDPEDRBeqPky0J20JygkgVP0rB9G8sHWCfMvU25uEYoOqo1cH8BLeLNtWZ8Onay5o%2FfCbJIfjEfDL2kEvF2fZyTKyX%2FGZ22cSwOU0mQ&X-Amz-Signature=bd8335e11f501ba29706a9b72869743dcbe9c46aa7e4898751fe0023cb856f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
