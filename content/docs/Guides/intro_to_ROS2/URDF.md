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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIK76T6L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO6FkrcXSuUmsZ8b1gfcyZpVZXh5e41%2BGxo5oXwjkOjAiBWWF3zrOIULz5idKU6K4Ar2GoK9BW0wskreuUrxGp4qSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVTU37BdDs80aRvfKtwDpjX8aPsUf%2FONhjOugHoHGXri%2FvP6Bg2qFUMIkg9HlwmLaPIYNTPakkWikMeg4P05JaWUpsyrPrv%2FzaPtvGfqGS%2F0NpkIHA3DKiiwehRdsJd51AI1HULM0HkgsBRd3IsB3tak8KX4dJf%2Fh72m%2BSSTcZkke8gXEeWey0DGKr6bWVgfUhn4b4CfcLwvueKAh3QhQXkuThFZX7vStC89yeZUaAV2MCCqdDuprM56wibWlItGK7TlfqXA7mgWWL03e6Wn%2By3SBL6LdS1u3auG%2FMDvWOlYHzbVvNTzS9iCMpxVhAsxSSrmThBAvrsIVSCBjmf9lZ5Zbsj3hQiKSl2SIsn4MKVlUR4XZgBCm8tRz1Ii2y6Ks2pUhhsEgfVDivO3bVAqJ3PJ4vJ3FutgsWwPgu2PwGpxvD1Tt%2Fi8bOxxQfsizfjCnDKMnOWk5QJMWSMTB5hANKvokzMcE%2BDNGHgfhdviZ0purp00FKPGTVSYVJfbnY4W%2BbTuFLTDKKO%2BvKhOXWb9S7GBMHcOMAdVWx3U7Wfz54DwuBquyasOx%2F7oEeWmb5mAJv7uBAZNCZ7dQUQDo%2BgqbtpgopKg1T1ngPpgQ7lK%2F0cms4vAHuHmwuVLxVEeMrphOuDB%2FwufEJb9gkMw%2FfyVvgY6pgEMnWKDE2ufjwtgC%2BpsBtPVN62TYHdT2DrbBDeWfdOkpRgAEheltcjv2m1aA%2FfdBwz%2BiSZvCa4syAVCvRsYOj2XovMKyEPX7nc4003G9BxQhm24TaFa1APsZZVe6IJNGsoSwtjkJ%2BubVIIT2hgsDWu8TERjKtU79ddNYeV%2BP4URXKRyHtAGr70AiWawu3olXX1O8DyRDFOJgo%2BMHsbvnJiSEBxIZjPV&X-Amz-Signature=a8f172e862548852bd1aad95f56057bf67e68785b93e05308f046a22e4666058&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIK76T6L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO6FkrcXSuUmsZ8b1gfcyZpVZXh5e41%2BGxo5oXwjkOjAiBWWF3zrOIULz5idKU6K4Ar2GoK9BW0wskreuUrxGp4qSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVTU37BdDs80aRvfKtwDpjX8aPsUf%2FONhjOugHoHGXri%2FvP6Bg2qFUMIkg9HlwmLaPIYNTPakkWikMeg4P05JaWUpsyrPrv%2FzaPtvGfqGS%2F0NpkIHA3DKiiwehRdsJd51AI1HULM0HkgsBRd3IsB3tak8KX4dJf%2Fh72m%2BSSTcZkke8gXEeWey0DGKr6bWVgfUhn4b4CfcLwvueKAh3QhQXkuThFZX7vStC89yeZUaAV2MCCqdDuprM56wibWlItGK7TlfqXA7mgWWL03e6Wn%2By3SBL6LdS1u3auG%2FMDvWOlYHzbVvNTzS9iCMpxVhAsxSSrmThBAvrsIVSCBjmf9lZ5Zbsj3hQiKSl2SIsn4MKVlUR4XZgBCm8tRz1Ii2y6Ks2pUhhsEgfVDivO3bVAqJ3PJ4vJ3FutgsWwPgu2PwGpxvD1Tt%2Fi8bOxxQfsizfjCnDKMnOWk5QJMWSMTB5hANKvokzMcE%2BDNGHgfhdviZ0purp00FKPGTVSYVJfbnY4W%2BbTuFLTDKKO%2BvKhOXWb9S7GBMHcOMAdVWx3U7Wfz54DwuBquyasOx%2F7oEeWmb5mAJv7uBAZNCZ7dQUQDo%2BgqbtpgopKg1T1ngPpgQ7lK%2F0cms4vAHuHmwuVLxVEeMrphOuDB%2FwufEJb9gkMw%2FfyVvgY6pgEMnWKDE2ufjwtgC%2BpsBtPVN62TYHdT2DrbBDeWfdOkpRgAEheltcjv2m1aA%2FfdBwz%2BiSZvCa4syAVCvRsYOj2XovMKyEPX7nc4003G9BxQhm24TaFa1APsZZVe6IJNGsoSwtjkJ%2BubVIIT2hgsDWu8TERjKtU79ddNYeV%2BP4URXKRyHtAGr70AiWawu3olXX1O8DyRDFOJgo%2BMHsbvnJiSEBxIZjPV&X-Amz-Signature=1fd5a4d6c5a1a4a3d4eb305e3236dbc86df5d46cae322aad6aee338ab06180b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
