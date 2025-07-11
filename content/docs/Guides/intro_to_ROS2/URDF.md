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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLT7OY5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4leDfuyGrFeB36EeP8Gj26AYI1D8Xr8NuiaCFZolkoAiEA%2FaI%2FDJsy4p5SkIEmLYNhSrk4%2BKy0pgX58W0%2FoB3KCPEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsATif2gu0IJGNICrcAzJ062edYDGokZpARtM2ql7iciCrtk96S2ctI7%2FKsgz5vXaR7SXQlXQ64Ki3pZWgKjDzdbEkDq46EkKgpDLOwyJt6dQGhNXUsyorbPJDY0j1yc09rkJmdj%2BIETvuTVaOOY0idbMsMNPBKsFa%2BfIN3gVHJL5OaLlS12YKY%2BtrCgQSVFb1jCmBKomOnbHcA3PR%2FZXnXFqDfAPJstOXb83dOWIaijUnkvJbL4HUfm7BWHEpVj%2BbgA7MredhRCYwO2fbtLy1RTQwzu7wPSZu4RwQCrjdyh5%2FrOKaPjhS9lXiwOviUNDMGPuxDf6PXg0omNDAAgcNtm2SpsuNhnuDf%2FXicSmlTqBjoftfWr0ozaTZRmx7aSbd8EDsTqU5nMMFFP2muDoU%2BfdejCG5ePmEV52Ly1zL%2BqfSgeW%2FH%2BHyCVTWaiwHZYq5e79pBygtAY3EggUO32dvVEHk9fR6G1SR1iKc6hpGXtui2OretY5Rx1xg%2BRDDNsmhdrqf%2FjR1B75tHoNiDslxOId7Y8K5TUewB5Jy%2BRHOWPBQG6GRUihs4CDNVewMeraH3YjREby2ilU6ueOrYJMDi0rRf5QZkdSveB0kbIoEa2N2E57x7korRmMO7guDYqeuCBPGWUg12A21MNrTxMMGOqUBdt%2BikB7NrxQej%2Fs8aDxiN%2FLD40TFQWbmD8Zx8Kzds8QrgTWPt9%2BjoBaEqa2fH4cRk4UZcKK00XpiB%2BIdcEoLsrv6XO5xqP7EumK1ZyvkSAJdgHe50oWwFXWKl9l%2FIGl8tSmIfjYVZZQqvIYT%2BUIuiq1waHemiNIdZRFPYRR46ZNenL5AFZ2afWE4SDA4J%2BD63Z0J0Sqyn96lLFgP6Jzrw%2FTi4UnL&X-Amz-Signature=b05cf7619d3d8dad4a21f370d73cbc69b58ccd9bd35c73b1d5e97306b6ad2c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLT7OY5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4leDfuyGrFeB36EeP8Gj26AYI1D8Xr8NuiaCFZolkoAiEA%2FaI%2FDJsy4p5SkIEmLYNhSrk4%2BKy0pgX58W0%2FoB3KCPEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsATif2gu0IJGNICrcAzJ062edYDGokZpARtM2ql7iciCrtk96S2ctI7%2FKsgz5vXaR7SXQlXQ64Ki3pZWgKjDzdbEkDq46EkKgpDLOwyJt6dQGhNXUsyorbPJDY0j1yc09rkJmdj%2BIETvuTVaOOY0idbMsMNPBKsFa%2BfIN3gVHJL5OaLlS12YKY%2BtrCgQSVFb1jCmBKomOnbHcA3PR%2FZXnXFqDfAPJstOXb83dOWIaijUnkvJbL4HUfm7BWHEpVj%2BbgA7MredhRCYwO2fbtLy1RTQwzu7wPSZu4RwQCrjdyh5%2FrOKaPjhS9lXiwOviUNDMGPuxDf6PXg0omNDAAgcNtm2SpsuNhnuDf%2FXicSmlTqBjoftfWr0ozaTZRmx7aSbd8EDsTqU5nMMFFP2muDoU%2BfdejCG5ePmEV52Ly1zL%2BqfSgeW%2FH%2BHyCVTWaiwHZYq5e79pBygtAY3EggUO32dvVEHk9fR6G1SR1iKc6hpGXtui2OretY5Rx1xg%2BRDDNsmhdrqf%2FjR1B75tHoNiDslxOId7Y8K5TUewB5Jy%2BRHOWPBQG6GRUihs4CDNVewMeraH3YjREby2ilU6ueOrYJMDi0rRf5QZkdSveB0kbIoEa2N2E57x7korRmMO7guDYqeuCBPGWUg12A21MNrTxMMGOqUBdt%2BikB7NrxQej%2Fs8aDxiN%2FLD40TFQWbmD8Zx8Kzds8QrgTWPt9%2BjoBaEqa2fH4cRk4UZcKK00XpiB%2BIdcEoLsrv6XO5xqP7EumK1ZyvkSAJdgHe50oWwFXWKl9l%2FIGl8tSmIfjYVZZQqvIYT%2BUIuiq1waHemiNIdZRFPYRR46ZNenL5AFZ2afWE4SDA4J%2BD63Z0J0Sqyn96lLFgP6Jzrw%2FTi4UnL&X-Amz-Signature=57779bf112831ef61007e2162cef4794c9b7facf217974648a81af9d51fd7368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
