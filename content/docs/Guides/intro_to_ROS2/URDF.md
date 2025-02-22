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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5S3B6U%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyRVGoCk0NuAZcen2Y0Fx3dNXO8xD3qrnrGMw0%2B71jQAiAV3b58ihBLo2RYRcPwA%2BG143z4Kg0kDdw9xGn5MiNodSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO6v9iyMTW4g%2BG6sOKtwDvHYzMIzZ251ScpDjuQft1j9CDct8766sg0jmTQLkgriiRHIHmY%2FVsnhfkwMov08AI3cE%2FbdIbl2YoJrrIkoVUF3VzzaNlM1U8pl4wLOk4Ip8QivhhoPOfWM3QoVruYPncWK57KqZGYsrZldJeoe2gqa9JTeEFvp8rT4gtNTQlL%2B8csr69Kr1ZdTPLrxtahF2B22tnZ4oQwirRG1vAaql3BThsgiaRjO%2BbhlqT0FoU4I3ca%2FbeyU5OwrYlf6%2F6hHJ3oByLVcjVTC9lnZ0GfuZeIe6uVY943TDZK797Z1rOnHrajG8pGKHDcNhWpZBRVxEXpMgL0WSWmq71iIwDE4LpFDPdv5%2B%2BS2dPnvM0hTP3S5DEm8I5OMNRs0Hcfqbho7%2Bbt8cmFWXovnd8ESOHBjZQ8psy6M5NrMmlDV7V3lKdvcWHouErXifWbaTqnnbQHKLxNNpK%2Bdp1pngX0Q9gLvzGidtPgM4QeeyhosgzRlIxocmP445tfssL4et6ioQ4i5aEDqQVLqrbiSswCd8uQMsKjXGvR2cKOs6UzWnpTycL%2Fg%2FdtCajYQcxgmXCNmk1gtutT7yIJGuzDQJkN3k3x82bcoU9Zb76ScYEzXdT%2FsVdv09SIrQJKMNTp1mNP4w0qXpvQY6pgGc7P2bsJwiBNS8vCrA4W1ET6oNmNLscxX%2F1Apca5bur9c7eEf9n02TfcyzfKA2aExgsu1C2XFtuLLNBt2Sg2J02mSk8i%2BA3l%2FpBFTeSfIWuYSotXn0QehNqar4%2BFn2nQXvkSiqR4C75xJ0pd4ir6AT%2F3wif7RxRXKEJMC75jbcbeXC5SL48hhAw8cw%2FEEcaiFt%2Fiag9G%2FMJfu3czM5EPr%2BJYcPMgot&X-Amz-Signature=cff945d159e6a1f020e56aacaf71e602be5183eebdebf33b8a8cb6cd84983a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5S3B6U%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyRVGoCk0NuAZcen2Y0Fx3dNXO8xD3qrnrGMw0%2B71jQAiAV3b58ihBLo2RYRcPwA%2BG143z4Kg0kDdw9xGn5MiNodSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO6v9iyMTW4g%2BG6sOKtwDvHYzMIzZ251ScpDjuQft1j9CDct8766sg0jmTQLkgriiRHIHmY%2FVsnhfkwMov08AI3cE%2FbdIbl2YoJrrIkoVUF3VzzaNlM1U8pl4wLOk4Ip8QivhhoPOfWM3QoVruYPncWK57KqZGYsrZldJeoe2gqa9JTeEFvp8rT4gtNTQlL%2B8csr69Kr1ZdTPLrxtahF2B22tnZ4oQwirRG1vAaql3BThsgiaRjO%2BbhlqT0FoU4I3ca%2FbeyU5OwrYlf6%2F6hHJ3oByLVcjVTC9lnZ0GfuZeIe6uVY943TDZK797Z1rOnHrajG8pGKHDcNhWpZBRVxEXpMgL0WSWmq71iIwDE4LpFDPdv5%2B%2BS2dPnvM0hTP3S5DEm8I5OMNRs0Hcfqbho7%2Bbt8cmFWXovnd8ESOHBjZQ8psy6M5NrMmlDV7V3lKdvcWHouErXifWbaTqnnbQHKLxNNpK%2Bdp1pngX0Q9gLvzGidtPgM4QeeyhosgzRlIxocmP445tfssL4et6ioQ4i5aEDqQVLqrbiSswCd8uQMsKjXGvR2cKOs6UzWnpTycL%2Fg%2FdtCajYQcxgmXCNmk1gtutT7yIJGuzDQJkN3k3x82bcoU9Zb76ScYEzXdT%2FsVdv09SIrQJKMNTp1mNP4w0qXpvQY6pgGc7P2bsJwiBNS8vCrA4W1ET6oNmNLscxX%2F1Apca5bur9c7eEf9n02TfcyzfKA2aExgsu1C2XFtuLLNBt2Sg2J02mSk8i%2BA3l%2FpBFTeSfIWuYSotXn0QehNqar4%2BFn2nQXvkSiqR4C75xJ0pd4ir6AT%2F3wif7RxRXKEJMC75jbcbeXC5SL48hhAw8cw%2FEEcaiFt%2Fiag9G%2FMJfu3czM5EPr%2BJYcPMgot&X-Amz-Signature=1a99772de07908fabb2b2c6afb75c70b52ea68cf7e81b1e51ecdcfc12523ce78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
