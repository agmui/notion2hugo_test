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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEICTRYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbeByjHboZb43f%2BBNwcPCOqvH4rQ0JonBYJarrhqThAAiBrQOeG4%2Fvzxmv3T%2BlJ%2FNrs8N9gQiMMLJvJVjd3mDHPbyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOvj4RxIh7Ju%2F33OeKtwDauM2%2Bamxxw8Oc8AX1kG2mokR5HUCdIqU0zYAM9oQUZt085lNyi5cmy3yWS0j6gWX78SwjEXtWtwHSRglvxYlLllgXmK0EljgJaN7XwBStYyM2CdCq%2FBEkmgdXc6zx1arCgk%2FXdwzIE9banK1deNh29lENlbJLMexpi6bzH98n%2BI9kx%2BkgKT4vHVpix8BoBvuKnogkhatJ6AWl4Hf0CuGnC0pRrZQGQduabwGtepyCXXgR%2Fm40f%2FxPM%2BqU79XcHrYysujbHqBAADTA22gYhYJ1sM2U0%2Buh%2F%2F6OV9WtzeXgZr8YRaONhzIVNaJgzQLX3cpRpmgIfnRhzVvNTEEV609Q6Nje9Bg69etqq%2BERkrNYhjTEV6GJSlM1w4cKuDu5pMEbz9V%2FsZv7qmJ%2B0M9zJ2SX9jDTZoPZpQXscmKLEOGIi8A24qHzsDpNmnoQBvtZaItZzKmFkOYoTXSukkgzIPlJP4fP5y1O0VubjmcIloy42N2oPv%2F%2B1EzTdpyvCphKGABfXwwWf4lAJYxL4MT50gYGqN%2BSMVE9CLjJGEtwdqnSsyoRikrr58CQqY8suFT%2F36polpUr3JwVmFqk7En6pPKnuinBEXZWdqnW%2Bms4FBGoqBhSNK2H3VDMb2vMvEwzt%2FGwgY6pgEbsZ9cSeFv2RIJKorvTVmeK1Z%2BlxNXDgQLUZdGbywC7DRYqnLwlrwM%2F1qEoKYpYGV5FDcPcPyr5W%2FPhEGpAdyG2a5DFZw%2BzsYaObs6jix4FlCfroVGeL4HlLQQFx%2BUOqEqAqCFBh1YiNgxC7IZpFpzroOPR01NXstB6H20886AYzBN6j%2F007HmLRAph51HaDS7sCAE%2FC4LPLAsuErU1ASdGRokTb%2Bc&X-Amz-Signature=3ce4ba65912212b36cfb8f011fa403c9911c3b8d3a6896f15e53de25c4da6c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEICTRYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbeByjHboZb43f%2BBNwcPCOqvH4rQ0JonBYJarrhqThAAiBrQOeG4%2Fvzxmv3T%2BlJ%2FNrs8N9gQiMMLJvJVjd3mDHPbyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOvj4RxIh7Ju%2F33OeKtwDauM2%2Bamxxw8Oc8AX1kG2mokR5HUCdIqU0zYAM9oQUZt085lNyi5cmy3yWS0j6gWX78SwjEXtWtwHSRglvxYlLllgXmK0EljgJaN7XwBStYyM2CdCq%2FBEkmgdXc6zx1arCgk%2FXdwzIE9banK1deNh29lENlbJLMexpi6bzH98n%2BI9kx%2BkgKT4vHVpix8BoBvuKnogkhatJ6AWl4Hf0CuGnC0pRrZQGQduabwGtepyCXXgR%2Fm40f%2FxPM%2BqU79XcHrYysujbHqBAADTA22gYhYJ1sM2U0%2Buh%2F%2F6OV9WtzeXgZr8YRaONhzIVNaJgzQLX3cpRpmgIfnRhzVvNTEEV609Q6Nje9Bg69etqq%2BERkrNYhjTEV6GJSlM1w4cKuDu5pMEbz9V%2FsZv7qmJ%2B0M9zJ2SX9jDTZoPZpQXscmKLEOGIi8A24qHzsDpNmnoQBvtZaItZzKmFkOYoTXSukkgzIPlJP4fP5y1O0VubjmcIloy42N2oPv%2F%2B1EzTdpyvCphKGABfXwwWf4lAJYxL4MT50gYGqN%2BSMVE9CLjJGEtwdqnSsyoRikrr58CQqY8suFT%2F36polpUr3JwVmFqk7En6pPKnuinBEXZWdqnW%2Bms4FBGoqBhSNK2H3VDMb2vMvEwzt%2FGwgY6pgEbsZ9cSeFv2RIJKorvTVmeK1Z%2BlxNXDgQLUZdGbywC7DRYqnLwlrwM%2F1qEoKYpYGV5FDcPcPyr5W%2FPhEGpAdyG2a5DFZw%2BzsYaObs6jix4FlCfroVGeL4HlLQQFx%2BUOqEqAqCFBh1YiNgxC7IZpFpzroOPR01NXstB6H20886AYzBN6j%2F007HmLRAph51HaDS7sCAE%2FC4LPLAsuErU1ASdGRokTb%2Bc&X-Amz-Signature=d8f9a34093bbac30b88b56a6123227997fc4157ba8e841a8e560ed8ff461a1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
