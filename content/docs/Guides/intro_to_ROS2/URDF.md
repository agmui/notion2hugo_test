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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMLYAM4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGcNpsErMJxcDc7MDjc3ZZ5aXxDMbe4BluNxGbRu4lmAiBEEjWAawaNPg91tzcYeFKFLe0jP541j6d6cO2QUG9toSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72mNDhyZV7Mrrx7tKtwDMQ9hOpRlm03uT5BHkIsInj8rrfCoqAnoMhJrNCumFwAsHOg7Q1GONzsSISQbKxo4YlZ2gfNiFLZbj6sKJvJcM993u3pYs2arU47v%2B9v3msnmok3VDHcmgjmbIgtLcxJJ1FsmnBAir%2B55WbXlyyAjaEsi0CD9b4NGbm4gse1nYJfJ7iJ%2BMqxNDAi57mqlMWV2Q2QaPR2Cc8XwdwMHwjXuPQCh9GRh%2BrXF3ckMoXB7EyTIDxDGBdCYMh7tlBSsHcsFP6nvhlxfoIm%2F1z6svGhTNAji7o%2Bar%2BXMF0pJt7cTi%2BnLyF8fITbX%2FfNWbYetmRxmHn6Zn6E5RPub5H6lqLphF%2BKwTJhhbagiRohoG2w2BuAjWJCbWXsvo5mdj%2FtJMjqsF%2BkUwuh99mf9lhZhmqA7AtcpNj8iX%2FgB94mndtR%2BaGhSdqJEVwLoJm8hJvTNvcRTqKwGHmEZ9eHpbtKeBk3pdQcAE63S1LDv72VZhKWDLQIyaZgFRH5FrmJ7S5zFfUuyzhZvoRM3RJVU6H%2BecAZs4A4s2lOlfbmxQY12A9ysBQNqBfILW%2FOO2hFUU%2Bmx2lc0i%2B2Jx9YtadJNut1ebDTfd2V2gs70xvmQFjlgwwIMY%2FSLAIuIJhepW1yzUSww2MXswwY6pgED22D%2FerKnUYRqzr%2BC2MUwITixAL8Pe8ICt3giK%2FCQd2%2BdI1aRGfgGqUGvLwqXoHdRIi57M6s%2BnNho8CnXHq%2ByJGkS18ugEe6aHKoiPDrtbKKMqK%2B%2F%2F4%2BCUbkkpG4KrG72lusJq9u7Xg40iDvCz2l7g7Y%2BZDPBq5uQ%2FybVuPdsr4nOUYqEPJJgz37f9Za4c00MjDyvUuaVvojM3dO19CZrtHH3qhWs&X-Amz-Signature=7f1ea79429d5096984bdabc92518a3ae697178f98acf1cff13f8c561f5138ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMLYAM4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGcNpsErMJxcDc7MDjc3ZZ5aXxDMbe4BluNxGbRu4lmAiBEEjWAawaNPg91tzcYeFKFLe0jP541j6d6cO2QUG9toSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72mNDhyZV7Mrrx7tKtwDMQ9hOpRlm03uT5BHkIsInj8rrfCoqAnoMhJrNCumFwAsHOg7Q1GONzsSISQbKxo4YlZ2gfNiFLZbj6sKJvJcM993u3pYs2arU47v%2B9v3msnmok3VDHcmgjmbIgtLcxJJ1FsmnBAir%2B55WbXlyyAjaEsi0CD9b4NGbm4gse1nYJfJ7iJ%2BMqxNDAi57mqlMWV2Q2QaPR2Cc8XwdwMHwjXuPQCh9GRh%2BrXF3ckMoXB7EyTIDxDGBdCYMh7tlBSsHcsFP6nvhlxfoIm%2F1z6svGhTNAji7o%2Bar%2BXMF0pJt7cTi%2BnLyF8fITbX%2FfNWbYetmRxmHn6Zn6E5RPub5H6lqLphF%2BKwTJhhbagiRohoG2w2BuAjWJCbWXsvo5mdj%2FtJMjqsF%2BkUwuh99mf9lhZhmqA7AtcpNj8iX%2FgB94mndtR%2BaGhSdqJEVwLoJm8hJvTNvcRTqKwGHmEZ9eHpbtKeBk3pdQcAE63S1LDv72VZhKWDLQIyaZgFRH5FrmJ7S5zFfUuyzhZvoRM3RJVU6H%2BecAZs4A4s2lOlfbmxQY12A9ysBQNqBfILW%2FOO2hFUU%2Bmx2lc0i%2B2Jx9YtadJNut1ebDTfd2V2gs70xvmQFjlgwwIMY%2FSLAIuIJhepW1yzUSww2MXswwY6pgED22D%2FerKnUYRqzr%2BC2MUwITixAL8Pe8ICt3giK%2FCQd2%2BdI1aRGfgGqUGvLwqXoHdRIi57M6s%2BnNho8CnXHq%2ByJGkS18ugEe6aHKoiPDrtbKKMqK%2B%2F%2F4%2BCUbkkpG4KrG72lusJq9u7Xg40iDvCz2l7g7Y%2BZDPBq5uQ%2FybVuPdsr4nOUYqEPJJgz37f9Za4c00MjDyvUuaVvojM3dO19CZrtHH3qhWs&X-Amz-Signature=5b077b507f5abab23da17cf0e6b2d444a330b2cf2b05ebeca011406aba376182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
