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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL5VDAX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs31lxYTKMs63OSZHk0kzg7YsvjMzrorJMwEG9YtmQZwIgWxaogIAvunuLzOhjBZh2ss%2FZb2JVpne3UIdJ%2FbNeAwcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJXO4mZZqhNkNcGuACrcA1muw7fP%2BMhTJFLC1fLcjX2quCqn5bzIEbyHUBfs9uafXtNCZOxneAIQ6EQiatTGTew9w45%2FJrZQyRajWfGXfq34KDc3yFzmBKKVO%2Bb5fW8WJVjPzEE91zXmWT2Bt4RuVWvHYqvyYzXNQ00D6pCiXHAACmY2Rsz4d%2FbnFeDVHoZdXdOUfpBkVajDwaQmTkZEKaVpSn4GmeDcVwHarsBoyMQJx7GI50sP%2BFglmZGohvWylPGc3OJBBkJTv%2Fe9HU1jlomwWac3nJp8BpiIpe46nd4Y7JRgIv1uIZVyTnWv6gyMXk2y5ff2Bq7ioMIFv21r5NQCaZNGhyU8TyieDOK%2Bhx4WeGLZaQpPvu3Ibvz5Ixhvs0aN%2F61x0jiT0I0vD4pGIVPHcv2rM%2BzCdBnkgAoEuaHcciDFavP3s49tNTcGcs4QV0%2F3OnSB%2F%2FxwoA3Qq5O7ZcJegAsUGTK6NFUcmn1Ju6VPYkQsWdygFw4wYHN4NhDympM8urqAmglltekvfafgUbFlacA3Yyaq8KTuYdCWwA8Qr72GEsJsQpd0txHhfQdSq7azVF7IcWXRW0x%2FSUsw7PmBa0uHIchvV7gnTOfouJeofTFWTZ03N15%2Frv2rnenn8DMTJLQkzm4NeKkrMOCa3r4GOqUBjb1mbqY6tfu0r7jx2wwcMktVwzTXbO89Sdg%2F6a2AAycPYVKpnRW73WF2H6SuPkIci7S0sGB0ZRj7acdesY%2Bjwx%2B6SsGceg7DM1lItJ1%2Bns1izVCtQVtkDWGLGpYU5qzDd7ZilLgr0qCU68Bbz9tfQgsC9WRSCDfqAz4UplhmbW3cExvSNpfdwYLExjqRG%2FUsBAaMZBY4DBzvhvvMbWixGyOLZfXx&X-Amz-Signature=513efad0824f551aeb20f046a9c9c51f1a699e786f9b37e79eb408f104f0986c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL5VDAX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs31lxYTKMs63OSZHk0kzg7YsvjMzrorJMwEG9YtmQZwIgWxaogIAvunuLzOhjBZh2ss%2FZb2JVpne3UIdJ%2FbNeAwcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJXO4mZZqhNkNcGuACrcA1muw7fP%2BMhTJFLC1fLcjX2quCqn5bzIEbyHUBfs9uafXtNCZOxneAIQ6EQiatTGTew9w45%2FJrZQyRajWfGXfq34KDc3yFzmBKKVO%2Bb5fW8WJVjPzEE91zXmWT2Bt4RuVWvHYqvyYzXNQ00D6pCiXHAACmY2Rsz4d%2FbnFeDVHoZdXdOUfpBkVajDwaQmTkZEKaVpSn4GmeDcVwHarsBoyMQJx7GI50sP%2BFglmZGohvWylPGc3OJBBkJTv%2Fe9HU1jlomwWac3nJp8BpiIpe46nd4Y7JRgIv1uIZVyTnWv6gyMXk2y5ff2Bq7ioMIFv21r5NQCaZNGhyU8TyieDOK%2Bhx4WeGLZaQpPvu3Ibvz5Ixhvs0aN%2F61x0jiT0I0vD4pGIVPHcv2rM%2BzCdBnkgAoEuaHcciDFavP3s49tNTcGcs4QV0%2F3OnSB%2F%2FxwoA3Qq5O7ZcJegAsUGTK6NFUcmn1Ju6VPYkQsWdygFw4wYHN4NhDympM8urqAmglltekvfafgUbFlacA3Yyaq8KTuYdCWwA8Qr72GEsJsQpd0txHhfQdSq7azVF7IcWXRW0x%2FSUsw7PmBa0uHIchvV7gnTOfouJeofTFWTZ03N15%2Frv2rnenn8DMTJLQkzm4NeKkrMOCa3r4GOqUBjb1mbqY6tfu0r7jx2wwcMktVwzTXbO89Sdg%2F6a2AAycPYVKpnRW73WF2H6SuPkIci7S0sGB0ZRj7acdesY%2Bjwx%2B6SsGceg7DM1lItJ1%2Bns1izVCtQVtkDWGLGpYU5qzDd7ZilLgr0qCU68Bbz9tfQgsC9WRSCDfqAz4UplhmbW3cExvSNpfdwYLExjqRG%2FUsBAaMZBY4DBzvhvvMbWixGyOLZfXx&X-Amz-Signature=08b710572729388abbc5488c75b89c73da0f158caa3d388ed718b25f31983c33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
