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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTOXJ6M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDfbltq8zqNpmrXXr2m4IewiqbgWHF452YM5wOOdFneEwIgFdm0kAfrf%2FWQgweUTdxhMA6e6I1Le47YwilhtsuGgLoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwpqFYNaKbjKDPNOyrcA3Z7YN8Yyd2DFkfXVcLNWzJVj15sTYNIokKw7uffly2HDZKmz7aEQCIWEJdkD8%2BJOqcG1YD9iG66QaVIn1JxmR8jydtNDqQBtOXCDVbu4efvSYyXsk%2BFuTZBTVCR%2By6D8%2Frk4O1jG%2FJW4CqZD3SHBXVhlzNjxQIDbmn76i0gJrnyvuLWj2TTEkD%2BFRgj7GgZhoa6NzirYSwJMtOOnzKBqqPmOHAuuVjIoxFc1ilRkwvZrWhDwAKxBIVv4Vcp1f0Nj6haJKOt0Fwjl%2BBIYYCjnzqloLPUVz65%2Fzv7Janv6j6NVEFvshn2%2F7o%2B%2Bih%2BbcQ2hgmUMComcfxV8ieb0oMFEkPWMfyUc4yuUPH7ESVZg%2BnyKFVMJ6jsAJaCcFqj9B17GoeNKGPVOGoHnr9nVF1VasE9KVksMUlAr7z8%2FqOI5bd8Doc8o86maViB4cFSbxif5OR%2FE7FXHrXi2FkipDds%2Flo%2Fwd6hHSLPdH88NEi9NrrWofPEwKLGSm0yu08oczxCyGLyn%2BSCTYEznB6WigZlvE2KfEXbNOfp9mXrv58jY1H4sdIoRSEsfc8qz%2B%2F2VlaeUBLAEtDmWAeoE8TOF5r80zALia80jWNRYWcLwlCYhaGrB%2FTOApvZx%2F3k7F%2BHMITblsAGOqUBLxqP9CjsqNow4GDv7JjchQdgxT76wbzBzmw5YIXqTtAJ0MJLQwT0mGpeFWitLquzw4I%2F1zKaApaJmivt4Kah6CJcFleYeX0AoOj6CyBlgpGzKv4UA8jEKNJ3pZuSyKfV3TH3TpwPw4EUieJwP37OuJqFqKyqJMCVpP6eu4YGG5l4vSqp%2FDNI1oKrODHdE9gfmmoawLBsZqK8wr3Lq%2BpB%2FyewJNwD&X-Amz-Signature=5eae9be32582128d7a523778da94b4703f7b0de8bc7ee0c9ccac8328aba541a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTOXJ6M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDfbltq8zqNpmrXXr2m4IewiqbgWHF452YM5wOOdFneEwIgFdm0kAfrf%2FWQgweUTdxhMA6e6I1Le47YwilhtsuGgLoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwpqFYNaKbjKDPNOyrcA3Z7YN8Yyd2DFkfXVcLNWzJVj15sTYNIokKw7uffly2HDZKmz7aEQCIWEJdkD8%2BJOqcG1YD9iG66QaVIn1JxmR8jydtNDqQBtOXCDVbu4efvSYyXsk%2BFuTZBTVCR%2By6D8%2Frk4O1jG%2FJW4CqZD3SHBXVhlzNjxQIDbmn76i0gJrnyvuLWj2TTEkD%2BFRgj7GgZhoa6NzirYSwJMtOOnzKBqqPmOHAuuVjIoxFc1ilRkwvZrWhDwAKxBIVv4Vcp1f0Nj6haJKOt0Fwjl%2BBIYYCjnzqloLPUVz65%2Fzv7Janv6j6NVEFvshn2%2F7o%2B%2Bih%2BbcQ2hgmUMComcfxV8ieb0oMFEkPWMfyUc4yuUPH7ESVZg%2BnyKFVMJ6jsAJaCcFqj9B17GoeNKGPVOGoHnr9nVF1VasE9KVksMUlAr7z8%2FqOI5bd8Doc8o86maViB4cFSbxif5OR%2FE7FXHrXi2FkipDds%2Flo%2Fwd6hHSLPdH88NEi9NrrWofPEwKLGSm0yu08oczxCyGLyn%2BSCTYEznB6WigZlvE2KfEXbNOfp9mXrv58jY1H4sdIoRSEsfc8qz%2B%2F2VlaeUBLAEtDmWAeoE8TOF5r80zALia80jWNRYWcLwlCYhaGrB%2FTOApvZx%2F3k7F%2BHMITblsAGOqUBLxqP9CjsqNow4GDv7JjchQdgxT76wbzBzmw5YIXqTtAJ0MJLQwT0mGpeFWitLquzw4I%2F1zKaApaJmivt4Kah6CJcFleYeX0AoOj6CyBlgpGzKv4UA8jEKNJ3pZuSyKfV3TH3TpwPw4EUieJwP37OuJqFqKyqJMCVpP6eu4YGG5l4vSqp%2FDNI1oKrODHdE9gfmmoawLBsZqK8wr3Lq%2BpB%2FyewJNwD&X-Amz-Signature=cc8dad0272c2a106b44a9c53acbbffc281e2cc1502c6fd385332f982fc989cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
