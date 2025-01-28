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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DIGDE6%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIQCNLckC5MGZlHnsPsAEhvkfP2NQGrDYi%2B2gMjBeSE4dJgIfDJ%2FxIhxJxwAnZ6V0I7BMmbrU5scu7AomJ9qHZTBs5Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMl9pgHXWzGWwZHokOKtwDKfTI1Ic1oaFFyPujR5JQeaQRO7CpAHQRsGvB%2BfhqkAJqdCq%2Bpp%2F6BmYBmsoh3giiSu%2B4mrVQF1Sy4vBe6IDKqnwbHvqRXN9NW5cfVhVlh%2FYuYB0spAyqJSMzWnO%2BjQ71GfSzPL7qk9%2FqGkFMyPnpCkkgUM4Bjx33GQonf8HmNgXAqYsC1c%2BJv4HQVO9mtx2OXY8zjlcGVNazKp%2FuW1fGk3ZVfBV13Us5dgh3lY0QuylRMesg5gcmjSsDNOcTsaoHWUVaigGGWlQTIa6Gjyy%2BL1GUbFPLsc9URyytMBPU2ttiH8bL%2Bfwk7EYw5N5qJIs190rdgd3kM1LqT2zCeIaJMPE4eGRc6%2B6BxYdBMqDN38UmRouPfrTz3c5nzsf6TT1LEAEVHtFYUYXSz4sl7l9J7JvhbUz8s1LLcZ%2BpoVAxMjlm%2B7xQepRnbom9Yat1DzO21Nb5nnnYIvFqMUgjOsyc1jqyJ15VI%2BAmDsF795UZj%2FDDzH4SW4h%2FKJ%2BfA188lWADHlkmKqSefi3Jb301WdNTB01k2U61lmDrPfgqkwckj6YoglLVTdo5n6yQRG8xwcMWLyLU1ewIX%2BC3V43%2B9gg7KaA0Y50XBnr78jQdgptNcVXURP9q448sepOkvdEw8t7kvAY6pgGGNGTWfLY3u8okN3bMANOKJcADVqOEUT4WbvGRl5oIy9%2FQcrrgOZxHRdZvHGnErUIDB88frwod0FaqOkedgbVOAWmsSZkuCea9Jl6QM5iBCPmxUx4pXczA4VUFlcAuo%2FTQZuN1m9CSAIpSgFNdAbE5rDRbLbxEKVpYACGoczr8pp9P3y9DUqz4xxNPDlBtf%2Bfl5PKW0Xau%2BcKDMMNPMYZ7GRunf%2BIC&X-Amz-Signature=7909f3bfa5b6f4717ca9fc4567c178f05c6b65155a1226f7d1df49080f48bd83&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DIGDE6%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIQCNLckC5MGZlHnsPsAEhvkfP2NQGrDYi%2B2gMjBeSE4dJgIfDJ%2FxIhxJxwAnZ6V0I7BMmbrU5scu7AomJ9qHZTBs5Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMl9pgHXWzGWwZHokOKtwDKfTI1Ic1oaFFyPujR5JQeaQRO7CpAHQRsGvB%2BfhqkAJqdCq%2Bpp%2F6BmYBmsoh3giiSu%2B4mrVQF1Sy4vBe6IDKqnwbHvqRXN9NW5cfVhVlh%2FYuYB0spAyqJSMzWnO%2BjQ71GfSzPL7qk9%2FqGkFMyPnpCkkgUM4Bjx33GQonf8HmNgXAqYsC1c%2BJv4HQVO9mtx2OXY8zjlcGVNazKp%2FuW1fGk3ZVfBV13Us5dgh3lY0QuylRMesg5gcmjSsDNOcTsaoHWUVaigGGWlQTIa6Gjyy%2BL1GUbFPLsc9URyytMBPU2ttiH8bL%2Bfwk7EYw5N5qJIs190rdgd3kM1LqT2zCeIaJMPE4eGRc6%2B6BxYdBMqDN38UmRouPfrTz3c5nzsf6TT1LEAEVHtFYUYXSz4sl7l9J7JvhbUz8s1LLcZ%2BpoVAxMjlm%2B7xQepRnbom9Yat1DzO21Nb5nnnYIvFqMUgjOsyc1jqyJ15VI%2BAmDsF795UZj%2FDDzH4SW4h%2FKJ%2BfA188lWADHlkmKqSefi3Jb301WdNTB01k2U61lmDrPfgqkwckj6YoglLVTdo5n6yQRG8xwcMWLyLU1ewIX%2BC3V43%2B9gg7KaA0Y50XBnr78jQdgptNcVXURP9q448sepOkvdEw8t7kvAY6pgGGNGTWfLY3u8okN3bMANOKJcADVqOEUT4WbvGRl5oIy9%2FQcrrgOZxHRdZvHGnErUIDB88frwod0FaqOkedgbVOAWmsSZkuCea9Jl6QM5iBCPmxUx4pXczA4VUFlcAuo%2FTQZuN1m9CSAIpSgFNdAbE5rDRbLbxEKVpYACGoczr8pp9P3y9DUqz4xxNPDlBtf%2Bfl5PKW0Xau%2BcKDMMNPMYZ7GRunf%2BIC&X-Amz-Signature=2ddbeeef4efb62154f8be6d7b6abc2dab465c28a5bb5f99a36b6a1030e055e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
