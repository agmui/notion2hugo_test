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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPU46VL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVG6LOUS6g9NwB%2BoIkwclSibJ%2FKPW7XmXAGyJyqPNJKAIgTP%2B7OOH%2Fa%2Bbihtuyfs88pMKUosaiVqqxev2BL3piRl0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtLSWm4HuJ%2BY7PqVSrcA0Avl0hNY5hP%2FJEmoXFxIkrRwC6hpqKhW%2BadTUH6PvJSjssRh%2BHCfX9UOl40t2qmr5xD36tHa0kka5zUkqH%2Bwu9PXUJm55QWhtjsmi%2BuwK0C0yavxUVaUeXJG%2B%2Fs5RaPBMslMjeomJMahq5htu8iCF8dPL4rX2pvRI6umv5541XDkkrAUYwwhSoZsaEtklTZW7BUdj%2BjE6Qu01pn%2B%2FPVUfeSTH9MIZA5RKY4daY4Q88r0oQX8wLVXdbBd6Js1VsRy%2BS62pRVt4R4PWI1xa73bemsWW0gtoL3lWjHfbqLNChbQFS4GFtxevrOEhAbcQZBVCpe4k2Qr%2Bd6vBw%2FZ4bk9sdV2l7fyWHlIo%2FEtGOGSjwR3Lulo0HliERdPpS%2BzmfgQfPM68CwGebI0nCoXAuyycSpjHbhMjL%2FA%2F9kD5CxmtColD3ri4yM3lY4uZj%2Flba%2Bz38R1%2F2oG7r64LH9ImGgHkoKPQgE8E%2BKMgrgWaP3B%2B62MjhXxOrmfZ2jK9VCUyq6GjnaJzCEPSIUTGYa41SqPo0Xt9hkGnWxVmTfnzu3i5uFr6SXUB3obl6NwQVqqBRqRJ3vRUifeCaFbT0X190t5hhFnVH%2B56FHKoxtx8OTr9WpAJ5pBctv%2FjKA18OEMMSEvL8GOqUBdshFz3HHVy2O2qXZvwgzzhiAtCcTl9wiLRso8JaOVlz9NBUHtGmlIokBrEgjIJqeNPaOLbsPXJ9Ewxtumu5ZrZuamYEjqPc42qs3LRJFhtxTenUvN3sNJ6Cjp58bM%2F1Sc%2BDYHYKQBOGBZihdgTliFE9ixvEgJ%2Bqmfg2Cg6u3rxqR%2BW7DgJBgsnYPXHR0GHVhj5csJgQsNzcoS7zOgUCqj%2FLchtNV&X-Amz-Signature=d4565c69370708a9386cef5a905cc957b7b4dfab4938ba0862edf733d2729760&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPU46VL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVG6LOUS6g9NwB%2BoIkwclSibJ%2FKPW7XmXAGyJyqPNJKAIgTP%2B7OOH%2Fa%2Bbihtuyfs88pMKUosaiVqqxev2BL3piRl0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtLSWm4HuJ%2BY7PqVSrcA0Avl0hNY5hP%2FJEmoXFxIkrRwC6hpqKhW%2BadTUH6PvJSjssRh%2BHCfX9UOl40t2qmr5xD36tHa0kka5zUkqH%2Bwu9PXUJm55QWhtjsmi%2BuwK0C0yavxUVaUeXJG%2B%2Fs5RaPBMslMjeomJMahq5htu8iCF8dPL4rX2pvRI6umv5541XDkkrAUYwwhSoZsaEtklTZW7BUdj%2BjE6Qu01pn%2B%2FPVUfeSTH9MIZA5RKY4daY4Q88r0oQX8wLVXdbBd6Js1VsRy%2BS62pRVt4R4PWI1xa73bemsWW0gtoL3lWjHfbqLNChbQFS4GFtxevrOEhAbcQZBVCpe4k2Qr%2Bd6vBw%2FZ4bk9sdV2l7fyWHlIo%2FEtGOGSjwR3Lulo0HliERdPpS%2BzmfgQfPM68CwGebI0nCoXAuyycSpjHbhMjL%2FA%2F9kD5CxmtColD3ri4yM3lY4uZj%2Flba%2Bz38R1%2F2oG7r64LH9ImGgHkoKPQgE8E%2BKMgrgWaP3B%2B62MjhXxOrmfZ2jK9VCUyq6GjnaJzCEPSIUTGYa41SqPo0Xt9hkGnWxVmTfnzu3i5uFr6SXUB3obl6NwQVqqBRqRJ3vRUifeCaFbT0X190t5hhFnVH%2B56FHKoxtx8OTr9WpAJ5pBctv%2FjKA18OEMMSEvL8GOqUBdshFz3HHVy2O2qXZvwgzzhiAtCcTl9wiLRso8JaOVlz9NBUHtGmlIokBrEgjIJqeNPaOLbsPXJ9Ewxtumu5ZrZuamYEjqPc42qs3LRJFhtxTenUvN3sNJ6Cjp58bM%2F1Sc%2BDYHYKQBOGBZihdgTliFE9ixvEgJ%2Bqmfg2Cg6u3rxqR%2BW7DgJBgsnYPXHR0GHVhj5csJgQsNzcoS7zOgUCqj%2FLchtNV&X-Amz-Signature=f1127395e46f322e3f3c4360e4170fe553420eed84e7a1a9fe763a7824353222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
