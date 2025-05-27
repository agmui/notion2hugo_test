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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654YRXUXI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0qCvjzhFUfxqLqmSLiJE1ljjolno4dIaFFceZGwQ2zAIhAOKIE1D%2B7k4rnLJhjtW%2FLVqRTu1zTWXjrZJsxAK8Z2OoKv8DCF0QABoMNjM3NDIzMTgzODA1IgzO7BC7V2jvlr8iyv0q3ANxlxUF%2FdXaOmnKMnoagbwAgQsfz%2FETSDBFejRVeWN1puVkixlkwtMPvo7neV6daQaPlQzwyY7Crvb%2FCbHOUMlgMlKuFH3lg2p8xLhr17C3MdZ20sd2t%2BmKFbR3mlUfH%2BrLsgy0ZfK526uANrlUk6eSoYp%2Bp2RxyshRpOrvb2MnpZGJOrgfqqbM2bWUBGp7tMza0KZUQ4AhsYtsCYEAbGuJKKuJdiYP44wYvB0gd1nQOdFVbOwKyYk3U9k%2FBg8FJ9lKQjNPvjgxq9RWh7HRpR8a6Qjg78Q1nQaL4TixJfo7ZLQoTDfcOSBFUGk%2FtI3volffh7Mkb1vhuqX8csKdm%2FpOZln9Mxwz1DL45CTFLKBRp35laX09XvOE66RhDugBWHpU4SxPY523baKd1pNdd2PRGPD6QWBy0RrZzE2jvuMdrgwFGd0h89%2BlKA696joPPeEFmA32%2BC1Ox%2FdG8krlh800GPQQ5c9JOw6qUB6hxTqtm0A8fal9Lyu%2FtOeNfDpz1dlWbOrl7NkPlY%2FVEIz6mL2ji61z%2Fp7df%2B3wVMsq2CxikXE7AQwUvjzTNcTRf66DmVtUKAiD%2FbvjeduxZUAEpPTAAao2NfP7Y20dxGLYg%2BYYK7bLvB3Bze7KCXg2nDDG1NbBBjqkAXS%2BGtcxZO7gJy53bbLm3Vphbq9wfu%2FY3%2B1%2B2cfbKFvCdEf%2BuwImKNYK%2BWUYvoFyePAJ1YF51p8ahGYy1SkchioXSljAcWiow09tQ9AfHox02fo7cQVARZ%2FGVX6HN0GX%2BDRyqJBJMS2B3hZ7wrhA4Oi%2BKd8%2BkDt%2BX7AhxNYtiS%2F%2F4MAEnqzaGVeto5T38HGF4gPdY2CqyLbGKhV8MfABy1fQwtlP&X-Amz-Signature=92668d0ebc3173dbc68c4da7f45e613bd6f6778663e5357357e062488c25672d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654YRXUXI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0qCvjzhFUfxqLqmSLiJE1ljjolno4dIaFFceZGwQ2zAIhAOKIE1D%2B7k4rnLJhjtW%2FLVqRTu1zTWXjrZJsxAK8Z2OoKv8DCF0QABoMNjM3NDIzMTgzODA1IgzO7BC7V2jvlr8iyv0q3ANxlxUF%2FdXaOmnKMnoagbwAgQsfz%2FETSDBFejRVeWN1puVkixlkwtMPvo7neV6daQaPlQzwyY7Crvb%2FCbHOUMlgMlKuFH3lg2p8xLhr17C3MdZ20sd2t%2BmKFbR3mlUfH%2BrLsgy0ZfK526uANrlUk6eSoYp%2Bp2RxyshRpOrvb2MnpZGJOrgfqqbM2bWUBGp7tMza0KZUQ4AhsYtsCYEAbGuJKKuJdiYP44wYvB0gd1nQOdFVbOwKyYk3U9k%2FBg8FJ9lKQjNPvjgxq9RWh7HRpR8a6Qjg78Q1nQaL4TixJfo7ZLQoTDfcOSBFUGk%2FtI3volffh7Mkb1vhuqX8csKdm%2FpOZln9Mxwz1DL45CTFLKBRp35laX09XvOE66RhDugBWHpU4SxPY523baKd1pNdd2PRGPD6QWBy0RrZzE2jvuMdrgwFGd0h89%2BlKA696joPPeEFmA32%2BC1Ox%2FdG8krlh800GPQQ5c9JOw6qUB6hxTqtm0A8fal9Lyu%2FtOeNfDpz1dlWbOrl7NkPlY%2FVEIz6mL2ji61z%2Fp7df%2B3wVMsq2CxikXE7AQwUvjzTNcTRf66DmVtUKAiD%2FbvjeduxZUAEpPTAAao2NfP7Y20dxGLYg%2BYYK7bLvB3Bze7KCXg2nDDG1NbBBjqkAXS%2BGtcxZO7gJy53bbLm3Vphbq9wfu%2FY3%2B1%2B2cfbKFvCdEf%2BuwImKNYK%2BWUYvoFyePAJ1YF51p8ahGYy1SkchioXSljAcWiow09tQ9AfHox02fo7cQVARZ%2FGVX6HN0GX%2BDRyqJBJMS2B3hZ7wrhA4Oi%2BKd8%2BkDt%2BX7AhxNYtiS%2F%2F4MAEnqzaGVeto5T38HGF4gPdY2CqyLbGKhV8MfABy1fQwtlP&X-Amz-Signature=0b88bef9d99185ad19d02ac733d0ffaf0920cea79d1eb388c0f1270817208896&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
