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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS6DTG2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAp%2Fno0dcXfrsqX7TqWnQgdDrelFGO6ulUQgGl5hUCqvAiBvkqvsDcaWRGrnAhFLIjvHzs1qzM4vINbo5R1E8sC%2BdyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMotZf2YrySYKW0KapKtwD5dc7X5JUzTZqMz0QzdYnc%2BwqbUf7YDSm4z6ktpTtA9AIlm%2FV3v4%2F0FKa2abDJ2ey%2BgeT4rUKALFSoQOA9wQWnQt4Ls3jWM2OpMd2QuMpD%2BglCHrXZT5wTFCoOEPBZtlc2fdqQahOcriPVb2yD4IsMJQQX47orIbfcHiF8%2BC6dcka8eIkTSJc9QeYcBGZjZF13F9lf7SypfG71DqWCkd%2F9NY2r9H4RCdzvlt2KWmOWUJVZP7YkCH98SyPQwcf4GuzbLgavAWuQo9ofXF1J1Tfai2GKZpBdMRnx7fgL5tbbnRHXIJsig4jiG0M5fIWs64lxidrmrDty4OENfiq4wYdY0iOtAB7PaRssvIwgoDQ1W17XPTl63ok%2FzVDrbQuSiq8Al2bNrHfoe9OrFAjeexGahhmS0kd3TYHYejrq0POdjIb%2BUAEYVmrXK6ZyFc%2F3ETQ7bndY0rGEK2J0%2FLlJjNInZqXbs4dspNzVMirHfuea%2FEFWkF4n8YeBxH9es5%2Fxa2NA9IpSJtJcyLv4%2Blc5dr2jxPv%2F9zcie371zCxuGEpcdaQTdDE3TZU%2FmZMGgGHIWjXNuVqV7tNzL5t%2F38OU5LOb2zvamnJafNWb8bdm2v6HaAwh38LPuitsV5xsXQw6s7BvgY6pgEsXwhSzCc7lIby4QXgAORWgUtdjwXLz99zBZbwUkfjRksoCaoYGw5KC1gcCOO6Jz7T85RaSYAnhZro5Dj%2BvcmVDJfnPuSd9yrGrV1kewWw4dLbFf8kqbqpZU%2FOGUytHChD1gQywsEPuwWKv%2FehMijmUuZdc2vA%2Fg%2FTnwdNMgh%2FlulJMvEPkXwBHEvW1zjMMybQPu0F3xixctxtmgEtH5WOOwblEtdf&X-Amz-Signature=98047ca167a505d6dc8cbab8634af643ae7f45298863275ddfd41be2ca3777f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS6DTG2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAp%2Fno0dcXfrsqX7TqWnQgdDrelFGO6ulUQgGl5hUCqvAiBvkqvsDcaWRGrnAhFLIjvHzs1qzM4vINbo5R1E8sC%2BdyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMotZf2YrySYKW0KapKtwD5dc7X5JUzTZqMz0QzdYnc%2BwqbUf7YDSm4z6ktpTtA9AIlm%2FV3v4%2F0FKa2abDJ2ey%2BgeT4rUKALFSoQOA9wQWnQt4Ls3jWM2OpMd2QuMpD%2BglCHrXZT5wTFCoOEPBZtlc2fdqQahOcriPVb2yD4IsMJQQX47orIbfcHiF8%2BC6dcka8eIkTSJc9QeYcBGZjZF13F9lf7SypfG71DqWCkd%2F9NY2r9H4RCdzvlt2KWmOWUJVZP7YkCH98SyPQwcf4GuzbLgavAWuQo9ofXF1J1Tfai2GKZpBdMRnx7fgL5tbbnRHXIJsig4jiG0M5fIWs64lxidrmrDty4OENfiq4wYdY0iOtAB7PaRssvIwgoDQ1W17XPTl63ok%2FzVDrbQuSiq8Al2bNrHfoe9OrFAjeexGahhmS0kd3TYHYejrq0POdjIb%2BUAEYVmrXK6ZyFc%2F3ETQ7bndY0rGEK2J0%2FLlJjNInZqXbs4dspNzVMirHfuea%2FEFWkF4n8YeBxH9es5%2Fxa2NA9IpSJtJcyLv4%2Blc5dr2jxPv%2F9zcie371zCxuGEpcdaQTdDE3TZU%2FmZMGgGHIWjXNuVqV7tNzL5t%2F38OU5LOb2zvamnJafNWb8bdm2v6HaAwh38LPuitsV5xsXQw6s7BvgY6pgEsXwhSzCc7lIby4QXgAORWgUtdjwXLz99zBZbwUkfjRksoCaoYGw5KC1gcCOO6Jz7T85RaSYAnhZro5Dj%2BvcmVDJfnPuSd9yrGrV1kewWw4dLbFf8kqbqpZU%2FOGUytHChD1gQywsEPuwWKv%2FehMijmUuZdc2vA%2Fg%2FTnwdNMgh%2FlulJMvEPkXwBHEvW1zjMMybQPu0F3xixctxtmgEtH5WOOwblEtdf&X-Amz-Signature=bf0ced97e7536bd96f33dbcd1f04e5d8c43cd879ff8c4b7333a9e239e8c07b23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
