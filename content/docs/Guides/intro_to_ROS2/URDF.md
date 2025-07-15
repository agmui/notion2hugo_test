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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZH2L2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDHw0swN1GqgN955WaMcFV88IFj8HFUPiowxzsS%2Fb%2BnRQIgWo4Km84mzPGBaBlgw4q5Pzg9CY68TrNE5k6HKeyM9Ooq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDImgX%2BM8WyxjTmdSTSrcA%2FBUupPTN7atMTJqtBnlEez%2BFt8SNxTKoQIctuPxfqoygaFZF%2BDiFfBgGGHsGXM90CPCkfY9gsBJkO7FfSfjbO6uNBG6Nigl9IoF8%2BwVzIDnfdbEd5aHybSERQsmbTm1ORFfbSkidEwpfqRr%2FsCAiUM%2BQ4RlHQaXdm6h5tciVjxYfYVuTXkiAYkFUn0s5GSpWxL0h5fTJiVw6%2BJ8CEGQ0mXrlNIpEwG5xRlc1t0P%2F0GSg5eiIIObymqbc4gv9BbYRTFvRy9fDJXBxBjGtTRHZYtRgMcT6h3CH%2FzAgWNX35%2F443U%2FAf8x0KhceWXR6mDc0nBcuzvws6%2BZIv9jf0%2BRHErgdGAybmggLIS1x3VLgICAAsMHjEmifBcTWwILqNbvYpUoyuHScYSE2jOxpf32mKrVyITO3K9u4Fod5cUManMM8TacEXjRL1PZ%2BWtdPYi%2BFJoP2eyJZg0VG0hO7NLoS1wLrn26xWxnrVLG4qycSLApn4bTJrwvegVX62fzE5DKY1vSg4M0MjvxY1qWABdj%2FkAqr5XcCdOrCxLvQfs3fy3hviK1VLlCuZVn8SbkuZUVYauPv5Vfccs4A3qHvyKmbBYZr9cJtM3QLL6YTgRAXUGg4SSV%2FOjffM4CaPWcMK2G2sMGOqUBGhKWz0w8JLnpOqWjdLpo5gS43xWDz%2FN1oNNn89PCwltbejx6W4ECpGLchjktxOwkS4dWeUJAZhmWmdrq%2FmHNXpbHYP155n3Refn4bSHLmAwNyXXTmK28R9twiKWIxGuZnGK%2FzsfAR9mtpV%2B4x7FTruPKvET9Oqw%2B07rewg%2FhAORspsS8j3R1CP1AK9NV26TwzGh7WnQF7YqRjn%2FBFXWN7Vr1bYBd&X-Amz-Signature=7ce4370b0bc365df9df6cf816ea88e8c53c580ba39d0958872d4d60d025c852c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZH2L2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDHw0swN1GqgN955WaMcFV88IFj8HFUPiowxzsS%2Fb%2BnRQIgWo4Km84mzPGBaBlgw4q5Pzg9CY68TrNE5k6HKeyM9Ooq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDImgX%2BM8WyxjTmdSTSrcA%2FBUupPTN7atMTJqtBnlEez%2BFt8SNxTKoQIctuPxfqoygaFZF%2BDiFfBgGGHsGXM90CPCkfY9gsBJkO7FfSfjbO6uNBG6Nigl9IoF8%2BwVzIDnfdbEd5aHybSERQsmbTm1ORFfbSkidEwpfqRr%2FsCAiUM%2BQ4RlHQaXdm6h5tciVjxYfYVuTXkiAYkFUn0s5GSpWxL0h5fTJiVw6%2BJ8CEGQ0mXrlNIpEwG5xRlc1t0P%2F0GSg5eiIIObymqbc4gv9BbYRTFvRy9fDJXBxBjGtTRHZYtRgMcT6h3CH%2FzAgWNX35%2F443U%2FAf8x0KhceWXR6mDc0nBcuzvws6%2BZIv9jf0%2BRHErgdGAybmggLIS1x3VLgICAAsMHjEmifBcTWwILqNbvYpUoyuHScYSE2jOxpf32mKrVyITO3K9u4Fod5cUManMM8TacEXjRL1PZ%2BWtdPYi%2BFJoP2eyJZg0VG0hO7NLoS1wLrn26xWxnrVLG4qycSLApn4bTJrwvegVX62fzE5DKY1vSg4M0MjvxY1qWABdj%2FkAqr5XcCdOrCxLvQfs3fy3hviK1VLlCuZVn8SbkuZUVYauPv5Vfccs4A3qHvyKmbBYZr9cJtM3QLL6YTgRAXUGg4SSV%2FOjffM4CaPWcMK2G2sMGOqUBGhKWz0w8JLnpOqWjdLpo5gS43xWDz%2FN1oNNn89PCwltbejx6W4ECpGLchjktxOwkS4dWeUJAZhmWmdrq%2FmHNXpbHYP155n3Refn4bSHLmAwNyXXTmK28R9twiKWIxGuZnGK%2FzsfAR9mtpV%2B4x7FTruPKvET9Oqw%2B07rewg%2FhAORspsS8j3R1CP1AK9NV26TwzGh7WnQF7YqRjn%2FBFXWN7Vr1bYBd&X-Amz-Signature=e0829fd26363fdccfa22f1e56be54be1ad5404921008af68d48e1c4e1057f29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
