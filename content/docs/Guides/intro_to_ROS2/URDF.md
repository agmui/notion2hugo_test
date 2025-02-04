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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YH6UWX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICZTnUBQlCTgTrE2UKOkIyvxGvDJ5EqRWQQ2%2FMedUkqeAiEAhu85rnuox4ZxJANRorM8%2FPoz4Uu9zkE6gYCs7%2FXWGsMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIfpHQxM8XdKG1XA%2ByrcA56FK%2B6hZMdB%2BETcrXbpGhsIDMNma5A3cOBdhOfb8Kqdj%2BSGDVKTmTFpE78vZeGKq9WkuhSdIHyHs0wsBrZ%2Fn%2BXDqmrBx2hbcNEd2sdkJe%2FR%2ByQ60KhowrpC%2B%2FfAxWzpI2tTpO3Va7zDzddh%2BtJsgOb9JjdVtDS9005pu5vNcVE4U%2FgOwZxkxjLWuX%2BsIXLR1RMvflYCtBSoXLwyKIemQIBngwLaKw1SQVTEah4Kg2LXnyT3RPAA%2BTdGbl8GwigBqvgejXsQ33FNdKKr9KF1DimSaU8R7XYZoJwwd59%2FRqNU586uekkhouzs2ZqBE5Ur%2BLoVVDUvOs2hH%2BfYkLEkQYQ4OMr0NvG0iE50kBltJA%2B64dCFUGeaWyu2UX%2Bc794N93uHaeA8XjiZDTuNNp3cPkAbRzJ6Kz0O2Af1Wb8%2FK0Ll8IDjhR9cDREcx7icz9u7h6DT6KnDUTIfd2ftxd5l%2BiGMZAkiVbMaTL4noq%2BQhI%2FReGJJGR6JX4NszOxCh2HiGz4yjT93dBntSVhAX6kbtlxxBqmPcS4cfnEagn4%2Ba%2FyQqCmPVAIGBzvkjFkWMtjCB3fKz%2BUfg%2B6ZmqnRc2DLug7t06Y89bZRNkgafx47IAgFEzHnfyM2gRnHyiDMMO6%2Fhr0GOqUBBp3W3N0J704RBJGyuKRh3p3JZkffTlE7tYAU3icOAuqZhSxS4A3gkwaoO8JYsQCeYqxX0LrV3qx0jKsc8RLbcOAnDzPhIZww1jDoVA5juFlxVzWWaR5PS%2BEoAD32yzVaKlUOCsd5lgC7brBXAxi6VUPw1oMsQMp660q04F%2B%2FMjoOzrrC4pgghnq5avo6VcYtd7x4zeGrf59VxdrfqVZAvHW1TFds&X-Amz-Signature=7ebc6cf0d1da50a9bce9c45437802d01079a16c14a3167731df4cb34e8649cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YH6UWX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICZTnUBQlCTgTrE2UKOkIyvxGvDJ5EqRWQQ2%2FMedUkqeAiEAhu85rnuox4ZxJANRorM8%2FPoz4Uu9zkE6gYCs7%2FXWGsMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIfpHQxM8XdKG1XA%2ByrcA56FK%2B6hZMdB%2BETcrXbpGhsIDMNma5A3cOBdhOfb8Kqdj%2BSGDVKTmTFpE78vZeGKq9WkuhSdIHyHs0wsBrZ%2Fn%2BXDqmrBx2hbcNEd2sdkJe%2FR%2ByQ60KhowrpC%2B%2FfAxWzpI2tTpO3Va7zDzddh%2BtJsgOb9JjdVtDS9005pu5vNcVE4U%2FgOwZxkxjLWuX%2BsIXLR1RMvflYCtBSoXLwyKIemQIBngwLaKw1SQVTEah4Kg2LXnyT3RPAA%2BTdGbl8GwigBqvgejXsQ33FNdKKr9KF1DimSaU8R7XYZoJwwd59%2FRqNU586uekkhouzs2ZqBE5Ur%2BLoVVDUvOs2hH%2BfYkLEkQYQ4OMr0NvG0iE50kBltJA%2B64dCFUGeaWyu2UX%2Bc794N93uHaeA8XjiZDTuNNp3cPkAbRzJ6Kz0O2Af1Wb8%2FK0Ll8IDjhR9cDREcx7icz9u7h6DT6KnDUTIfd2ftxd5l%2BiGMZAkiVbMaTL4noq%2BQhI%2FReGJJGR6JX4NszOxCh2HiGz4yjT93dBntSVhAX6kbtlxxBqmPcS4cfnEagn4%2Ba%2FyQqCmPVAIGBzvkjFkWMtjCB3fKz%2BUfg%2B6ZmqnRc2DLug7t06Y89bZRNkgafx47IAgFEzHnfyM2gRnHyiDMMO6%2Fhr0GOqUBBp3W3N0J704RBJGyuKRh3p3JZkffTlE7tYAU3icOAuqZhSxS4A3gkwaoO8JYsQCeYqxX0LrV3qx0jKsc8RLbcOAnDzPhIZww1jDoVA5juFlxVzWWaR5PS%2BEoAD32yzVaKlUOCsd5lgC7brBXAxi6VUPw1oMsQMp660q04F%2B%2FMjoOzrrC4pgghnq5avo6VcYtd7x4zeGrf59VxdrfqVZAvHW1TFds&X-Amz-Signature=3dc21bea950417a4f574839b3a0d550543f1a4caa63b68979c810456d8bb4ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
