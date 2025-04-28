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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTXZR2L%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOiOiCfUanbkhAgCjEK1FxtDs79L21X3IsbA3ixk%2BCwIhAK8oObop9QNpyOv2wxLf%2Fw7QrZOS6em1idngK%2BIeKJiBKv8DCGUQABoMNjM3NDIzMTgzODA1IgyXLggmr87%2BJzFPkzUq3AOpGWxf%2BNZI1h3LJmDCOBifAAoyB%2BQPLVUB1LdpRUnPq9y0F52j5HJ9CgKrHBOrdhul2quoThWWscQRYYayUJqApOYk%2B%2FDpLjOFZAP7QBzXVyERWYQYrr3KLiHjLmqqL1UQQYFNtQXN6EsCSe4CjvQ0NnJxOewZLJ2cwwJTeP2%2FyGfyY9I%2FvZS8rNCtRHihHvG4Vh%2FCGGaxeMk0Chh7TmQ3Y5KSS4HXrVTOorZ1cnRLE9wcvxEYQ6mhdAi5LVUrHRI3rAAZv%2BqPXTYooXforGjgIiI7RUtSM%2FU5bZM6%2Fnxfa8vhyeneUb%2B6lA5hKTwJghqZGvXF%2BX27aOgmEQ9URSyMNb5mJNZu016YZiTeu1fMxhCx1dqA8a7Du10doBNdK3GKs0HefGB12zf69pLyZjKU5LGrEYEjG0b5KeFrgi9hQgMCHsUdSHEhBna8tVMd%2B3eMRYh07%2B2sx%2Ft7EyTTDeli6UrYiLqUxJ1eWnMiKHqfcMOFwCg%2BkifGO1PM%2Be3V32qOi%2F8axwVXt8sSJHPEHwWwMNS1TJJyI642WSbMMvQYaI5tRy78H59D1rqYxstDqUD9LG1ftueH%2FC%2F2I4bUiuPJ1YW2RPJnedlmqiKheY5WIxBOedn0CTR8JZeu7zDKirrABjqkASwr7UWPTGDI5xKd3NBw5OAbDQY7fwkyiYXuycwIdA6CTm%2FqoaDfN8vAdpQcpkT2nzAa4%2BfF2mipA09pG3MnivJjHq8A8mPZYJHntcnW8AfKj03zp8mBlQ4QmL8De9nCYrmPz%2Bje3sk5kw6u4%2BUFWi33cpoCMh%2BvlvhKgOUqeROkH1CzV3o1mMNZIMIeY1DmnjiLHr7R49vjq4sI53SiiKOQegKU&X-Amz-Signature=c6547d4544e562690648cdf9f181f36a2e70a9160d99db137659a2cbfe3641aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTXZR2L%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBOiOiCfUanbkhAgCjEK1FxtDs79L21X3IsbA3ixk%2BCwIhAK8oObop9QNpyOv2wxLf%2Fw7QrZOS6em1idngK%2BIeKJiBKv8DCGUQABoMNjM3NDIzMTgzODA1IgyXLggmr87%2BJzFPkzUq3AOpGWxf%2BNZI1h3LJmDCOBifAAoyB%2BQPLVUB1LdpRUnPq9y0F52j5HJ9CgKrHBOrdhul2quoThWWscQRYYayUJqApOYk%2B%2FDpLjOFZAP7QBzXVyERWYQYrr3KLiHjLmqqL1UQQYFNtQXN6EsCSe4CjvQ0NnJxOewZLJ2cwwJTeP2%2FyGfyY9I%2FvZS8rNCtRHihHvG4Vh%2FCGGaxeMk0Chh7TmQ3Y5KSS4HXrVTOorZ1cnRLE9wcvxEYQ6mhdAi5LVUrHRI3rAAZv%2BqPXTYooXforGjgIiI7RUtSM%2FU5bZM6%2Fnxfa8vhyeneUb%2B6lA5hKTwJghqZGvXF%2BX27aOgmEQ9URSyMNb5mJNZu016YZiTeu1fMxhCx1dqA8a7Du10doBNdK3GKs0HefGB12zf69pLyZjKU5LGrEYEjG0b5KeFrgi9hQgMCHsUdSHEhBna8tVMd%2B3eMRYh07%2B2sx%2Ft7EyTTDeli6UrYiLqUxJ1eWnMiKHqfcMOFwCg%2BkifGO1PM%2Be3V32qOi%2F8axwVXt8sSJHPEHwWwMNS1TJJyI642WSbMMvQYaI5tRy78H59D1rqYxstDqUD9LG1ftueH%2FC%2F2I4bUiuPJ1YW2RPJnedlmqiKheY5WIxBOedn0CTR8JZeu7zDKirrABjqkASwr7UWPTGDI5xKd3NBw5OAbDQY7fwkyiYXuycwIdA6CTm%2FqoaDfN8vAdpQcpkT2nzAa4%2BfF2mipA09pG3MnivJjHq8A8mPZYJHntcnW8AfKj03zp8mBlQ4QmL8De9nCYrmPz%2Bje3sk5kw6u4%2BUFWi33cpoCMh%2BvlvhKgOUqeROkH1CzV3o1mMNZIMIeY1DmnjiLHr7R49vjq4sI53SiiKOQegKU&X-Amz-Signature=e42ccedf2b4c78ae9acfcd66dc6345c2c00de94b50652ee737c067f4d374ca20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
