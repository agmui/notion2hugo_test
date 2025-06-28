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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365OUE4U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgADDBVUqMpJsidHQ5vtNgGdb05zFrxamT0o%2Fz%2FESJzwIgCsg2nBpObB4y5m8P7y7kAnqERBtpadjdzJHvg8%2BgjoAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbFtOvri4hJq1chTyrcAwwd9IHRMhXGzdDb8EmlluX77G4j74%2BydTO1M5Aw2FCOTftSepw5AquVNB1K1kGfTPyhRlWCHcdY%2Fb7y4DZ%2BFtPVFPsALPTMeb6sk83B2A6hIv7O7a6n7jDbXGkqk7Zh8P56kuOGkZDeubCm1flWYIWp4yfxaeWyyHlzLlkSW1dvlv4jw%2FNu%2FLcr7KlHLLrev7yo0gSPmmfOeLE9ThOAT09BsZ1ckifwUIZPe%2FQWkhyj9KLhAZFm7Rmhi7qHs36vWskPEw2nPkZfz9Qd6DQeUZI%2FoZEKAijElI9iPWiJWgGVazsnVhJHmUpyMjPthQRo1TErHQdVaRveL10S0UxxiAopjrZbOmY2Q7QJXPPxj9Ag9cG4CAH1gsGDOAryn6sVTYrI%2FutzJarGZK4PVdzQog64b9TT50ZAaId%2BNFkhCvTMkt0BsLFERSJ%2BSHuzuAiXqpu1x6oBJv9q9uM%2B%2FG2MiuPrxr80saXUJJlBBr32%2F1eRDhaNVrEN9Wk8yLJ1RC1BOCAW%2B6Tz%2BmB0HB13IUxPlUTcBEZDe6v3skNd5uCZ%2F3xaTzwECfH59hzYvT%2FYsDxX1%2FCkki6QVJeYOb7rrNOtUegPeTX4YSvfU6KNJ8Nlb3IZKkcrjt1xI2Kv0fZvMKGLgMMGOqUB%2FxP9xt5Nvc8xqegWn7cEUuZyXKGllmkZvn0p7sFFeRkKKBpQd44X1Heb2FypH1FCRVvyYPXtZWGK7hhDRNk7vNy1oaII11I4tLtqHQQeYik6ync2R3bKrsPEgR8oU3UKVKEf3QGaa8mc8v3eFv%2BvyUsbEgKTmhmuSilEBejwmCGYZqa4ETiCPIbFIfl8efqqD7BHhGA6FH0vibgIMWd1V5WshgLf&X-Amz-Signature=74a32fadc8c5c73591d2771daa9689fedc2f89d1cb60642fbb5eadd84da076df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365OUE4U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgADDBVUqMpJsidHQ5vtNgGdb05zFrxamT0o%2Fz%2FESJzwIgCsg2nBpObB4y5m8P7y7kAnqERBtpadjdzJHvg8%2BgjoAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbFtOvri4hJq1chTyrcAwwd9IHRMhXGzdDb8EmlluX77G4j74%2BydTO1M5Aw2FCOTftSepw5AquVNB1K1kGfTPyhRlWCHcdY%2Fb7y4DZ%2BFtPVFPsALPTMeb6sk83B2A6hIv7O7a6n7jDbXGkqk7Zh8P56kuOGkZDeubCm1flWYIWp4yfxaeWyyHlzLlkSW1dvlv4jw%2FNu%2FLcr7KlHLLrev7yo0gSPmmfOeLE9ThOAT09BsZ1ckifwUIZPe%2FQWkhyj9KLhAZFm7Rmhi7qHs36vWskPEw2nPkZfz9Qd6DQeUZI%2FoZEKAijElI9iPWiJWgGVazsnVhJHmUpyMjPthQRo1TErHQdVaRveL10S0UxxiAopjrZbOmY2Q7QJXPPxj9Ag9cG4CAH1gsGDOAryn6sVTYrI%2FutzJarGZK4PVdzQog64b9TT50ZAaId%2BNFkhCvTMkt0BsLFERSJ%2BSHuzuAiXqpu1x6oBJv9q9uM%2B%2FG2MiuPrxr80saXUJJlBBr32%2F1eRDhaNVrEN9Wk8yLJ1RC1BOCAW%2B6Tz%2BmB0HB13IUxPlUTcBEZDe6v3skNd5uCZ%2F3xaTzwECfH59hzYvT%2FYsDxX1%2FCkki6QVJeYOb7rrNOtUegPeTX4YSvfU6KNJ8Nlb3IZKkcrjt1xI2Kv0fZvMKGLgMMGOqUB%2FxP9xt5Nvc8xqegWn7cEUuZyXKGllmkZvn0p7sFFeRkKKBpQd44X1Heb2FypH1FCRVvyYPXtZWGK7hhDRNk7vNy1oaII11I4tLtqHQQeYik6ync2R3bKrsPEgR8oU3UKVKEf3QGaa8mc8v3eFv%2BvyUsbEgKTmhmuSilEBejwmCGYZqa4ETiCPIbFIfl8efqqD7BHhGA6FH0vibgIMWd1V5WshgLf&X-Amz-Signature=fb56d502710297225782f453e069362c563ee7eeda212d95ef582243b75fdbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
