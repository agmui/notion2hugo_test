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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DPPALI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbIitbbnH8eMDMdMVdPtBeKc25TSZgBxs3VPe7LINA7gIgAVoUZ%2Bjk2zrhEhv0NRkgrreJJxKAAmrWmgot0uTYrlAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYR1Y6JzYpF1LOXDSrcA5yKrnN8g308E7R7NUT%2Bl2KRUXTUiW9t3%2FpNtmdeXrYZgMB7FDjguYOzSbywZLFbHoo9NHyCTQw5jjWbeChfXumLWPtlbcbZMTheoNjccXSCRCVgvLAE0j1jVuQ1%2FVxxMpMg9s072IBCi7%2FtcwknuIjrXrLm2fIfBxfb%2BqkGgVl9wiIUG5a49%2BDbg8Osy6Jvqwq09wMXzdQs%2B7h0nRyb66mB4O8iRCXFh4jw4tr5TCEJGJaBhAScGx96WM3ZD8VHEtwkaraaO6GfECQTstz43TLfnh1bXNfzUJqAizwQcRmlNKEi7ILRk%2BxvAzLIRDXHAiFHsflbHIqktzLKKuwxQLOP%2BQDcBHtXsCGvn%2BMJobjuc1UzFAonreFT9JVDYm1YYzAKd5AVn3VhQq7CmytTfCY5qJkl6c8E9DnqdJV0uh%2FF5Ge2cd5fhBUhrqKvEKyEdFkhcSZxyIKCGfhsFJoJUlAxpI1vmEcTdfPBcO9e82NJ3Vdg3qwkMrxY2dWL9w8vywJhwVFnZWvfj1HvVoP3efewMdhRpxh9IQkMIDk40c6NIAUsqc5SqZnQgpTjmEaX2oHU6nKi0zt9mUnX8hdYIItYCS7nMozVANYegQMfb7er9EVVL79Ivfiq9A%2BuML3z7rwGOqUBPN%2B720njL6pw9gYyoxDQLPhp9myTe42G%2Fzjl8Ok18RM02gmjnXmOztKBQK99o5CnYqNkgXuHlQsJca01DGCfcW5dureWAXfZSM3B1pMnJB4MGOC4g1R7wd32Z3vFXwfJ9%2F2z49UI1T%2FlirxRIgrOmeScoYvbj3derRJeeqIMIwFCxXd4ZFLpQCV1hcfb%2BAJkATSSJHGxcH%2FnATCtXCfKfuyjhxF7&X-Amz-Signature=eadc59c630f2de5629ef8c1168a629e9bc9b3e08cbc21dcacb54bcdc29749b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DPPALI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbIitbbnH8eMDMdMVdPtBeKc25TSZgBxs3VPe7LINA7gIgAVoUZ%2Bjk2zrhEhv0NRkgrreJJxKAAmrWmgot0uTYrlAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYR1Y6JzYpF1LOXDSrcA5yKrnN8g308E7R7NUT%2Bl2KRUXTUiW9t3%2FpNtmdeXrYZgMB7FDjguYOzSbywZLFbHoo9NHyCTQw5jjWbeChfXumLWPtlbcbZMTheoNjccXSCRCVgvLAE0j1jVuQ1%2FVxxMpMg9s072IBCi7%2FtcwknuIjrXrLm2fIfBxfb%2BqkGgVl9wiIUG5a49%2BDbg8Osy6Jvqwq09wMXzdQs%2B7h0nRyb66mB4O8iRCXFh4jw4tr5TCEJGJaBhAScGx96WM3ZD8VHEtwkaraaO6GfECQTstz43TLfnh1bXNfzUJqAizwQcRmlNKEi7ILRk%2BxvAzLIRDXHAiFHsflbHIqktzLKKuwxQLOP%2BQDcBHtXsCGvn%2BMJobjuc1UzFAonreFT9JVDYm1YYzAKd5AVn3VhQq7CmytTfCY5qJkl6c8E9DnqdJV0uh%2FF5Ge2cd5fhBUhrqKvEKyEdFkhcSZxyIKCGfhsFJoJUlAxpI1vmEcTdfPBcO9e82NJ3Vdg3qwkMrxY2dWL9w8vywJhwVFnZWvfj1HvVoP3efewMdhRpxh9IQkMIDk40c6NIAUsqc5SqZnQgpTjmEaX2oHU6nKi0zt9mUnX8hdYIItYCS7nMozVANYegQMfb7er9EVVL79Ivfiq9A%2BuML3z7rwGOqUBPN%2B720njL6pw9gYyoxDQLPhp9myTe42G%2Fzjl8Ok18RM02gmjnXmOztKBQK99o5CnYqNkgXuHlQsJca01DGCfcW5dureWAXfZSM3B1pMnJB4MGOC4g1R7wd32Z3vFXwfJ9%2F2z49UI1T%2FlirxRIgrOmeScoYvbj3derRJeeqIMIwFCxXd4ZFLpQCV1hcfb%2BAJkATSSJHGxcH%2FnATCtXCfKfuyjhxF7&X-Amz-Signature=ac596d84295da5259ebd95fef9b1ed062052140dc76e3eba0b439cb8a435cf94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
