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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2OFBE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZgbGlauXr1KHVb1kr0r0hYyM1aa%2FVAWMdCA7BB7z8%2FAiEA5zYIDQn3n%2BEHsbXu77%2Fa8DX210SXJ7UgFuDtUmIPLq8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa7h1ISQ%2FRJi9oRbyrcA269cDXe%2FkIXY6f0NfHx68UGPUSkvqoMtzZE7cFgQiWn1fOYMO4jnQOP3ZIkMlvSLV0Zyh7f0nKeOu5V53Jpa0PMHbFkPhd9fydWNSa10gebLXTd5RlEXaaz4WlnQ%2FbCu34M0XaLiM869%2FKbfzqXqqVf9KOI1rPcd%2Boc0n2W5NOR6SZ0nxe7CsOX6BNmyHEHKxhWK1cVulwk%2F0oik8Y3ORiFqdIj06COzTY%2BWpJZ%2B3h5KJtcsLk%2FBmk1xojslqUE14iqM8K67R9DSPrRMKcqYgz9D9sn5dSUiXYJhtXsTm2mE16tGH1y0k09U%2FwE8QuTe7kZUBIzyhJCzb5OYU9oFTggDWch5z4vW4IMSJIwQUzmALfgHYPemxrXK1Fm4qMRcRXh1pnPsmlqB8eyJazW71Jg5NkZyF703zxwlhzmODpMdruZCgFRqYfTQHmegYA26VYJvbw%2FTSe85kkZDLItHYIbmkD4DF6tuagWiDtfkHbmll9z2oSie4LC1dZ5sEoI2ROJUawOYiWSmMxwpUvb%2Be5PogcerU3d1m%2BUgfbeApzUJcPiWwXzJd1uWMrgMulRUP0Vm0lzphtW70OMkT9V%2FNMoOjVxsGDiL9lXaE6dd1LFxe7Kre2Cy%2F0YlS8qMNK10cIGOqUBwtEiASFIe8eEdTrRMHhSxOf%2Fzh355XCeedf7fh5MWGtTPIVdnJRKFjFh7ANCWAzXGapBTPibXgsoSyy5HUt59Vk%2BMAK6wL0Nfwz9mRRsII%2FZxOYS4mlCvL9BqLayxeTESppZwpKjUSfMugjJ%2BbXIgrCiH%2BdVbAPd4ZafuBcmHgH%2FrL5sVx8%2F7dCrTwx8r%2FMZ0iEiG65TTuOC%2Bau7esLMOj%2FWj5I9&X-Amz-Signature=21f019c946336298b5975c319d44efff6ae692f4cb9c1adbe92d40f829dd3d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2OFBE7%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZgbGlauXr1KHVb1kr0r0hYyM1aa%2FVAWMdCA7BB7z8%2FAiEA5zYIDQn3n%2BEHsbXu77%2Fa8DX210SXJ7UgFuDtUmIPLq8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa7h1ISQ%2FRJi9oRbyrcA269cDXe%2FkIXY6f0NfHx68UGPUSkvqoMtzZE7cFgQiWn1fOYMO4jnQOP3ZIkMlvSLV0Zyh7f0nKeOu5V53Jpa0PMHbFkPhd9fydWNSa10gebLXTd5RlEXaaz4WlnQ%2FbCu34M0XaLiM869%2FKbfzqXqqVf9KOI1rPcd%2Boc0n2W5NOR6SZ0nxe7CsOX6BNmyHEHKxhWK1cVulwk%2F0oik8Y3ORiFqdIj06COzTY%2BWpJZ%2B3h5KJtcsLk%2FBmk1xojslqUE14iqM8K67R9DSPrRMKcqYgz9D9sn5dSUiXYJhtXsTm2mE16tGH1y0k09U%2FwE8QuTe7kZUBIzyhJCzb5OYU9oFTggDWch5z4vW4IMSJIwQUzmALfgHYPemxrXK1Fm4qMRcRXh1pnPsmlqB8eyJazW71Jg5NkZyF703zxwlhzmODpMdruZCgFRqYfTQHmegYA26VYJvbw%2FTSe85kkZDLItHYIbmkD4DF6tuagWiDtfkHbmll9z2oSie4LC1dZ5sEoI2ROJUawOYiWSmMxwpUvb%2Be5PogcerU3d1m%2BUgfbeApzUJcPiWwXzJd1uWMrgMulRUP0Vm0lzphtW70OMkT9V%2FNMoOjVxsGDiL9lXaE6dd1LFxe7Kre2Cy%2F0YlS8qMNK10cIGOqUBwtEiASFIe8eEdTrRMHhSxOf%2Fzh355XCeedf7fh5MWGtTPIVdnJRKFjFh7ANCWAzXGapBTPibXgsoSyy5HUt59Vk%2BMAK6wL0Nfwz9mRRsII%2FZxOYS4mlCvL9BqLayxeTESppZwpKjUSfMugjJ%2BbXIgrCiH%2BdVbAPd4ZafuBcmHgH%2FrL5sVx8%2F7dCrTwx8r%2FMZ0iEiG65TTuOC%2Bau7esLMOj%2FWj5I9&X-Amz-Signature=de4ec7174d6854b245466f9d1d39f84b94c9dd8aa33490f70cb18d6dc0f7d596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
