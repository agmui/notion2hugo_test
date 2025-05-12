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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN6KU6T6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFvl5l5iHEJ9f%2BHYXAhNHLLnMgj8bzO4rJS5A8S6xsJMAiBcNtFmIGGMzT1xV5rLn7FQ36otaDBBkvZRzV%2Bl%2FP%2Bs4yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrKhmWu8X%2BtgNUS3KtwDdAv5pVwWcDRTHHRN5ja8EO%2BN9g0CwmDg8N81luI24pG9Yaft9jDGZmhDOOWRMO%2F4z9blzmwK3hA%2FhlX0ofwxG5CLWtVs2E%2FXFktlTCLhM4Hr1vjDFscIZWM2s%2BignXpwoT29aPaeXLgsTtNPvhN%2FZeu%2B1fFjzR19EsSs3CJKwxi8XUIlyE99Z2V9TZ1KaT%2FXVdbY0XPKDfeOqbd2r6nAfv%2B45cEedkDKNgz2f1aPjRIIHrdKrDBWEJG1L%2BI5h52%2FeAsAOsVhco2zwQnsAw7kJXP6l5zK2znaJhrm%2FmDo20pQ6O%2FBV%2BoEGimhvPm2IPumrmBKRSVcMi8VO9wxH0AFR5h6MZU276Aa2QssAQXMHCGQigVa8ROUw6al8bneLDdPrY%2F99SVfKDh15skl64ejO2vhSvApG3OufCnr7L%2B66j4jsm7lWMVKHSf9aPiEKviHWLD1IBqmvT9BntngrRpoaq2gJm8ogOV2lAaUN2pQgb%2Bs1FolPbynP8MpKlVidQEFqbzaSUDgxmIhzIxh75VHuGoeWb%2FrkQywTGlDrxiXTQFYTBtFI23zf71cvO9Vw2Vn8Mi%2F2MBOLoPYjUAc%2B2mJwh%2FCSvOY2AlwZprErZioSo6Sh5CkYA4UxsaiZWAw0t6JwQY6pgEIzBXUXRFNiSylvBA08ovZFqCeRhanOhJdyTUSbXzG0h0pgtS%2FChMEygGELn04yiZbOcXVBTeJjsyuNjjMEQ%2Fe5ekvCbGy%2FJR7w0JwT0uqLq82VZ6ZbD7NP4qEcz2bEbbbfu9ps0CAYrpTvfuwRNe%2Fsieq59Twp2FMLHwOBnYq0U2KQUllwBaAKcr968fBDctjmcb3nAUUo4eC1halq2D13HJCi71c&X-Amz-Signature=bba3a377aac40f2bd18ae65bf6638032866c81d43baddd7b2841fa9039d62f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN6KU6T6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFvl5l5iHEJ9f%2BHYXAhNHLLnMgj8bzO4rJS5A8S6xsJMAiBcNtFmIGGMzT1xV5rLn7FQ36otaDBBkvZRzV%2Bl%2FP%2Bs4yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrKhmWu8X%2BtgNUS3KtwDdAv5pVwWcDRTHHRN5ja8EO%2BN9g0CwmDg8N81luI24pG9Yaft9jDGZmhDOOWRMO%2F4z9blzmwK3hA%2FhlX0ofwxG5CLWtVs2E%2FXFktlTCLhM4Hr1vjDFscIZWM2s%2BignXpwoT29aPaeXLgsTtNPvhN%2FZeu%2B1fFjzR19EsSs3CJKwxi8XUIlyE99Z2V9TZ1KaT%2FXVdbY0XPKDfeOqbd2r6nAfv%2B45cEedkDKNgz2f1aPjRIIHrdKrDBWEJG1L%2BI5h52%2FeAsAOsVhco2zwQnsAw7kJXP6l5zK2znaJhrm%2FmDo20pQ6O%2FBV%2BoEGimhvPm2IPumrmBKRSVcMi8VO9wxH0AFR5h6MZU276Aa2QssAQXMHCGQigVa8ROUw6al8bneLDdPrY%2F99SVfKDh15skl64ejO2vhSvApG3OufCnr7L%2B66j4jsm7lWMVKHSf9aPiEKviHWLD1IBqmvT9BntngrRpoaq2gJm8ogOV2lAaUN2pQgb%2Bs1FolPbynP8MpKlVidQEFqbzaSUDgxmIhzIxh75VHuGoeWb%2FrkQywTGlDrxiXTQFYTBtFI23zf71cvO9Vw2Vn8Mi%2F2MBOLoPYjUAc%2B2mJwh%2FCSvOY2AlwZprErZioSo6Sh5CkYA4UxsaiZWAw0t6JwQY6pgEIzBXUXRFNiSylvBA08ovZFqCeRhanOhJdyTUSbXzG0h0pgtS%2FChMEygGELn04yiZbOcXVBTeJjsyuNjjMEQ%2Fe5ekvCbGy%2FJR7w0JwT0uqLq82VZ6ZbD7NP4qEcz2bEbbbfu9ps0CAYrpTvfuwRNe%2Fsieq59Twp2FMLHwOBnYq0U2KQUllwBaAKcr968fBDctjmcb3nAUUo4eC1halq2D13HJCi71c&X-Amz-Signature=aef28dfa7e6a0bf0ff19d74dd0c9313a2628194d11ac267d2c51b5e8bbda0c48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
