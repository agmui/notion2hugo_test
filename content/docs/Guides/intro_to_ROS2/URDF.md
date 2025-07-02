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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMR7MOZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkQ9hcxriGW82h5UJb6tjyjNV7t%2BMELNAnR2yhOtDTxQIhAIo7PKltJ72I70kQ%2F%2F6pr1hA5BW3q6V1Ix6ZFVmGM8COKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZv9eXJcKCOTdb9Z0q3AM1x2uNgXwjetUVQgMSSCA%2FNUp%2Be3I65cRZ0CVWrObg8HPy8XRq5NHk9dDoSKITxc2VT0VKdBkAp%2BwwlWpYZb%2FUMFDBbR%2FRBs4XOIiedEBYqBCaNPs%2FIbW1dtjH6va8qrueuhp9uYkwIF3c0ou0we7hxf6cSugIkxn8m1DI%2BjbWlaAozuqKCnRN790KyOlQEP5%2BxL6ozGENjuqSdZFK6XWEhospI40sTbHDcgmhSqNxZhfmFgzfYpFGzSYk%2B3b3ju7ZRyv%2BZ1FLaZ3CuowNxx4ZMw6WFA6HdiqiGT25Dx%2Fb%2BXcgyuqo8xhdKXoxcXIwXqE52bED%2B1HEEvxO5cqUcp3AyLFaY5DyAhXL39rnFUrIsVuuEmYBsWtCfowIj7qXM6PKL2uN1jqw2ZlueXEHBt8Fg1EJstlxfEaYAZteDUsJhlgzUHPE054d7K1csd3xAYiAV90Ghppesdm7gUCBogGfzfZ%2BkRpiKvpScvWOzLi7dczzLjOOsu7jEs2zf8H439tYjCjLySJgetbs1sLGxn5GADudtccqDbZaPOHAzeOSQAxcB2VPw6ulKgbv1IRRdQ6kWgRD0AIsmh7%2BizdVxSjcELjtO2Bs45OwQJ4ySkYUXMcaFszLs5lA41QvVTCotZPDBjqkAfFLJcJMnAHpXulfBWMxP4ZDGNMihEpjSbil1vnxJJxgP6CKFgKbjuCfpent%2BDWsXFyyevFNYsE0mZmjL991nx8P14tQfJciwz6QM0vPPH8q9i9OnUWsAIBkaC9vzV0C%2B6Uo15yk66tMyrOc%2BDoSscnC6mmH8v5al%2FIkOlxJyd8MDEFb33J4t5KWOEUExvvEfQtCb8o%2B0tLXarRS%2Fi%2BQhZmxU%2BTC&X-Amz-Signature=118ae56fd0dc84f75752b30afc8fe616191fb67131dc1a1f6c174b06b9e50f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMR7MOZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkQ9hcxriGW82h5UJb6tjyjNV7t%2BMELNAnR2yhOtDTxQIhAIo7PKltJ72I70kQ%2F%2F6pr1hA5BW3q6V1Ix6ZFVmGM8COKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZv9eXJcKCOTdb9Z0q3AM1x2uNgXwjetUVQgMSSCA%2FNUp%2Be3I65cRZ0CVWrObg8HPy8XRq5NHk9dDoSKITxc2VT0VKdBkAp%2BwwlWpYZb%2FUMFDBbR%2FRBs4XOIiedEBYqBCaNPs%2FIbW1dtjH6va8qrueuhp9uYkwIF3c0ou0we7hxf6cSugIkxn8m1DI%2BjbWlaAozuqKCnRN790KyOlQEP5%2BxL6ozGENjuqSdZFK6XWEhospI40sTbHDcgmhSqNxZhfmFgzfYpFGzSYk%2B3b3ju7ZRyv%2BZ1FLaZ3CuowNxx4ZMw6WFA6HdiqiGT25Dx%2Fb%2BXcgyuqo8xhdKXoxcXIwXqE52bED%2B1HEEvxO5cqUcp3AyLFaY5DyAhXL39rnFUrIsVuuEmYBsWtCfowIj7qXM6PKL2uN1jqw2ZlueXEHBt8Fg1EJstlxfEaYAZteDUsJhlgzUHPE054d7K1csd3xAYiAV90Ghppesdm7gUCBogGfzfZ%2BkRpiKvpScvWOzLi7dczzLjOOsu7jEs2zf8H439tYjCjLySJgetbs1sLGxn5GADudtccqDbZaPOHAzeOSQAxcB2VPw6ulKgbv1IRRdQ6kWgRD0AIsmh7%2BizdVxSjcELjtO2Bs45OwQJ4ySkYUXMcaFszLs5lA41QvVTCotZPDBjqkAfFLJcJMnAHpXulfBWMxP4ZDGNMihEpjSbil1vnxJJxgP6CKFgKbjuCfpent%2BDWsXFyyevFNYsE0mZmjL991nx8P14tQfJciwz6QM0vPPH8q9i9OnUWsAIBkaC9vzV0C%2B6Uo15yk66tMyrOc%2BDoSscnC6mmH8v5al%2FIkOlxJyd8MDEFb33J4t5KWOEUExvvEfQtCb8o%2B0tLXarRS%2Fi%2BQhZmxU%2BTC&X-Amz-Signature=25e1c65e9c465ccf07acc707c388b6a4b1afb60676e3fed45b07e3a968e21ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
