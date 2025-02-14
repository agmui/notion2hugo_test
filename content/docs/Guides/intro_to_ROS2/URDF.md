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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=5ce6ca37bf6c193ecb40a4a572d012b94a3292555ad83642ec7b227fd917a0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PS7ABK7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2W7Ur0aYZ3GIlrN1IDlQoU4NnZ0VkjZw24T%2FTF5nnRAiEAibm3ucpyfXUtukothHARNPlSkjiPcHUOfWovsIRtUiUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDEHLAKWuOgfln1e%2BCrcAxHyaenVNIbIjYFrs5HeLycZDLNLW24qOom3EuZZ9P0K2BbheS4MVMEy1eYN4hIc022%2FWw8dPdPna8h9I0oV66P1aiU5bF5vmTaMyLpKxEn%2FXNapMYI7j2fKRsAFeVP6pQNfcJx7JBD1PnNhCrtfwZMkz8P4SebBWrwxLxkaun463r4AOzViCF1pK7ADnWoc0X1lMO0x3Olt%2BJmx5RlMvCQddnjad%2Bu4t7fUXQ3TxDCowPSZBnnMl707ljjGTqz8JKFTgHCXEKGEeTGex815534tEhuzd4Xa7QsKOBXhLchc8Joc6S0atgwydg%2B2mE%2Bzw04Uxnp3TjXXQzpz%2FjKKfM8k8yFSgenW04D9shhw2rnD8uItKrCRvqUtQHI7LhdXGFG6QxsHj7BGrVaub1NxKZfc9TmKee8%2B%2B4qaJ4QSx4kpXTv7YHfyCLy%2Bx9Y9LDWBMs1HQeVETM74ahA4ZisujpAyfyowgwjxRp1HLmkdOsLz4n%2FMH8cf0mlByiMJlsuPhBV3NdFevMyXXJKdLV1x4DqtsvCHpbMs%2BkrZvjXQ7Llt8lXPDGD55ZaOMSL7SZHpqCAvVd866cN0wF8GPY3A48gx1WcwtQsbg%2FIDsSFtvhOwwqfcbC1JNAcfTsxfMOj2ur0GOqUB7c0ll7jvXmFu2ASYHQ0LM5pmT1zZfjYXCwLtfKaeKou8YBPPUKNk1Rz13OT6o39Al0hLI8e2rLQfhgnwMUFbxdNlWxZARKzPRBZZU3j2at38ha%2F9532T7QTtuVc8C%2BCzkGKhZjNr2LX6yWmunIUH4qni8qHt8o7Yzv%2FF96JZMKqVI7N%2B0tGBRtLiaGLVt0T7OeFJa1Q%2Fu4Z5GhhPTioUwillImSt&X-Amz-Signature=606d39b2c54e40b951d7202702cc111460489665a8de8497f69a3d0279e8b000&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
