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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAVGAAA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC%2F2EemnqNKDymnSSOpz2voHUsJWwE3OGnJGwMfsEEvnAIhAIkXcR6C7IspibOqaa201OEkA8jQ7yrcrZ1GdNHxm%2BEnKv8DCG4QABoMNjM3NDIzMTgzODA1IgzY6P4GnyInIbAZqFUq3AMqwCZq5ZYsv0DyvJy48yeIbqC7yVfdm4F3PoO5WR0zE0N6Lwas5f3YmFM8hyDfls0lMhzKAz%2BSzXqjKRQw5PVl4cxw%2FEwewyYY8zvRh5MeiMEs4T%2ByIyPh2jZ72%2Bgf9cYwoUfLjw1N0PigELYPtSV0onKh5tQsMZmpBBD5VIqz70Wd4tyIlOI13oyjxiiAxPjf3WJnRtjz0ANH5Dng7kfvgGkdzQcVgdZ2%2Fk4O6CHlK6jR0JaTBXRk6Fw2wfyw1L2lWzfivilAeNZkVCzO%2BoaWeZH3d3wk1ZUFKikyhdkN9TVWGCmlToM2K0RdDCGEE%2FPFVvjFBlqZNKu%2FQ18ismhCdYOJ1R3iw8Ey%2B2es7uH%2FKfxSkPYQGlcT0%2BDM5J6UzmFx6JlANm5MsxaU4B1v25GME0l25wlmzaHdbbO%2F%2F8lfmMba6mJDlMXxphbdG6pB%2Fjk9wJSViicCUy1b5Kp6Ho08YIQ7%2FqrpDIzChRUAnmr8ybsfUAUMcutzMNfF4Z50iwEeb8NFqWfWjqhqIH6g%2F1zs9SEmjTixulLO6vlY4v4BWPJp8iMSs4eDLF83PZe91ToXr6%2FQZBNbyMapMW267jbPFIwpPPUSGh84XqzGwjmcPRfJDlLx7ZL0trHQ3TCdo5a9BjqkAYnfGWU0EyFoI2pNGBW90KbPnp5jvmUYV8PLMK6DdrY0OQCm1QK4Yadrleb3jUB3ZySGIgyPnyl1i5h9ZjQh1x2s%2BKmwdg3nT60Zq8cJVV1iF41M80XLcqCRMaIbx1cKKkMuzjakdhe%2Bz7aUM58ctlxcs6XyBlB9O5vEMmx33BPkT3ZLfBsY7ZvZZJkiuFGMsB2deIRwwaWmY9F8WLoXu3EYWWDp&X-Amz-Signature=052796f2b68ef244586e03e8991a48e7b95e4be080e0bd61b7058a1fa2c41de9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXAVGAAA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC%2F2EemnqNKDymnSSOpz2voHUsJWwE3OGnJGwMfsEEvnAIhAIkXcR6C7IspibOqaa201OEkA8jQ7yrcrZ1GdNHxm%2BEnKv8DCG4QABoMNjM3NDIzMTgzODA1IgzY6P4GnyInIbAZqFUq3AMqwCZq5ZYsv0DyvJy48yeIbqC7yVfdm4F3PoO5WR0zE0N6Lwas5f3YmFM8hyDfls0lMhzKAz%2BSzXqjKRQw5PVl4cxw%2FEwewyYY8zvRh5MeiMEs4T%2ByIyPh2jZ72%2Bgf9cYwoUfLjw1N0PigELYPtSV0onKh5tQsMZmpBBD5VIqz70Wd4tyIlOI13oyjxiiAxPjf3WJnRtjz0ANH5Dng7kfvgGkdzQcVgdZ2%2Fk4O6CHlK6jR0JaTBXRk6Fw2wfyw1L2lWzfivilAeNZkVCzO%2BoaWeZH3d3wk1ZUFKikyhdkN9TVWGCmlToM2K0RdDCGEE%2FPFVvjFBlqZNKu%2FQ18ismhCdYOJ1R3iw8Ey%2B2es7uH%2FKfxSkPYQGlcT0%2BDM5J6UzmFx6JlANm5MsxaU4B1v25GME0l25wlmzaHdbbO%2F%2F8lfmMba6mJDlMXxphbdG6pB%2Fjk9wJSViicCUy1b5Kp6Ho08YIQ7%2FqrpDIzChRUAnmr8ybsfUAUMcutzMNfF4Z50iwEeb8NFqWfWjqhqIH6g%2F1zs9SEmjTixulLO6vlY4v4BWPJp8iMSs4eDLF83PZe91ToXr6%2FQZBNbyMapMW267jbPFIwpPPUSGh84XqzGwjmcPRfJDlLx7ZL0trHQ3TCdo5a9BjqkAYnfGWU0EyFoI2pNGBW90KbPnp5jvmUYV8PLMK6DdrY0OQCm1QK4Yadrleb3jUB3ZySGIgyPnyl1i5h9ZjQh1x2s%2BKmwdg3nT60Zq8cJVV1iF41M80XLcqCRMaIbx1cKKkMuzjakdhe%2Bz7aUM58ctlxcs6XyBlB9O5vEMmx33BPkT3ZLfBsY7ZvZZJkiuFGMsB2deIRwwaWmY9F8WLoXu3EYWWDp&X-Amz-Signature=3e4884d639e9af2a22b98b46a389d56340152d399e2a207aa96645baaa977247&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
