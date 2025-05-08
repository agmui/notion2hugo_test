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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS3P6CB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB12%2FEwl75kTEOnNmzfnQxLYs3NIA6252FsFxO8Ac95CAiB%2FKELD82G2g8uyjOP7zeNwvA30ev1uOPF%2BiDcjWYfhIir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2FALVqCrv%2BWYXU6fcKtwDYy7VT28PLNJo19tCHr7lb%2FLeWP0OO7YX2loy%2Bqy1hg7Ov3JUp1oaGBbugLMyNXAIEdAn3YdZJv9HTjBkn%2Fe5f7qBO01sqGzrxkPRovvTZeuZHsYtSpDXikHFZFUXDyObn4i%2F5gsI7xzn1fGOSEHjAMi86jAZr86xDKzkXW9eKgTXMiKC73cDw7is2cOEkmPFLDGu5mZwpkgOM0%2FNqB%2FxvFoASLvSIsLlVayB5r6gzE5lTCfgQG7uPXMMs6GU8clXLRBTaDO5f5huxCy8ZPNv%2BY8kq0I9KC5dQfT7CiuNFM2PJHVSuPUMw5l8xqFeIBLwJdBFYzg%2BzV%2BUoKbyx4xwyuyyoEtrg3wEMGLZoD7eEQpXX6i5B6von3%2FGtVzxBBltYB1R7QPkyrqJDwIazwIeM8Trin8Us765sqrwG8ItMUIHnrn2qKHEGAnZJlEB5SBf%2BYCk2vOaRK%2BEqmMd3xj03HiVsM2xSfnt%2BlvYphrKm5CppW%2FIxDpwe7oTYqYRX3N5QFTuI6N3KlPr5%2FYDiOp%2Fkyt%2FJn5tMLjl8GpOfs8CPuGgLmgM9h83SgQEwZ3dsOTJQ3ZWaL8wj%2FDDR9bslAgEtT1wjOxUT9euGyrnS29cTchEHMw4dp3KXWZMnWgwj7TzwAY6pgFSmsCnEtSIpFk7PkKLMtVF0vmiu9LDOnnNM0auLFfk2D5C4hP0UnzoNriAETW38gKKlHca2GfEst0luP%2Bxgk897wAtvKIcOAz6%2FiAmqjVEiQu%2Ffwx2GDz6VWAVXV3DYupuEs9a8ASwBSek33nBkQl5rj%2BJHOWZq9aF6Xu1%2BCRYi70Jv9jKKDk2sf%2FYPsidcfCAzRCBAv0RxTsKAS7eER%2FzLdY5oxYl&X-Amz-Signature=fe6dbf69a6d51695b7c729eac97dec6ad444c98b96b14bee35654f531fb4c51b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YS3P6CB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB12%2FEwl75kTEOnNmzfnQxLYs3NIA6252FsFxO8Ac95CAiB%2FKELD82G2g8uyjOP7zeNwvA30ev1uOPF%2BiDcjWYfhIir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2FALVqCrv%2BWYXU6fcKtwDYy7VT28PLNJo19tCHr7lb%2FLeWP0OO7YX2loy%2Bqy1hg7Ov3JUp1oaGBbugLMyNXAIEdAn3YdZJv9HTjBkn%2Fe5f7qBO01sqGzrxkPRovvTZeuZHsYtSpDXikHFZFUXDyObn4i%2F5gsI7xzn1fGOSEHjAMi86jAZr86xDKzkXW9eKgTXMiKC73cDw7is2cOEkmPFLDGu5mZwpkgOM0%2FNqB%2FxvFoASLvSIsLlVayB5r6gzE5lTCfgQG7uPXMMs6GU8clXLRBTaDO5f5huxCy8ZPNv%2BY8kq0I9KC5dQfT7CiuNFM2PJHVSuPUMw5l8xqFeIBLwJdBFYzg%2BzV%2BUoKbyx4xwyuyyoEtrg3wEMGLZoD7eEQpXX6i5B6von3%2FGtVzxBBltYB1R7QPkyrqJDwIazwIeM8Trin8Us765sqrwG8ItMUIHnrn2qKHEGAnZJlEB5SBf%2BYCk2vOaRK%2BEqmMd3xj03HiVsM2xSfnt%2BlvYphrKm5CppW%2FIxDpwe7oTYqYRX3N5QFTuI6N3KlPr5%2FYDiOp%2Fkyt%2FJn5tMLjl8GpOfs8CPuGgLmgM9h83SgQEwZ3dsOTJQ3ZWaL8wj%2FDDR9bslAgEtT1wjOxUT9euGyrnS29cTchEHMw4dp3KXWZMnWgwj7TzwAY6pgFSmsCnEtSIpFk7PkKLMtVF0vmiu9LDOnnNM0auLFfk2D5C4hP0UnzoNriAETW38gKKlHca2GfEst0luP%2Bxgk897wAtvKIcOAz6%2FiAmqjVEiQu%2Ffwx2GDz6VWAVXV3DYupuEs9a8ASwBSek33nBkQl5rj%2BJHOWZq9aF6Xu1%2BCRYi70Jv9jKKDk2sf%2FYPsidcfCAzRCBAv0RxTsKAS7eER%2FzLdY5oxYl&X-Amz-Signature=2f97ad14715d4ba89377c7e5193701dcdc9c605a4edc9c55d2299406cdf5c833&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
