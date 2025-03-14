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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4N77M4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi03%2BmGo8JzDfoAhCOuii1br7X%2FB0NRCdDHVWmVgIeEAiApbQZXk%2BxpPcpYVLzoaHvM7nrRqEY9j0o9%2FB7%2FWmSGNiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGO8udbsZmaJo1M7YKtwDcqdCwtNqHN%2FWfjxvMc6obCyphE%2BSJowkZon3ALRavohniqfGbOSx3ohoGYm9Ih8KMkdwyqtc0MLxWaW5%2BRLD%2ByufIGOUHBjxzUM473PbFQeFDbY351gZRNC4TwloleAnBMcZ%2BNRFSW9BsD7JvrT%2FNFl6Se4uRuWeCrvPrdwrbodASQXIIw3AC15HM8uSjkJdEapdJFWASe7EGlPozO9q%2FFV4pYRGfoMXWapqlmOvGdcYyyakqEUtR5%2BUdLg1oJPhwNzzqqeYWpuvLxv6%2FDPzEM5dW1RQI25fipIN4Uk9jyn%2FvHod%2Fh6MhFuMDaC%2FAS%2FxZbvHNkavp8FtQjR%2BOCbX%2FdVZYJJfptqEX%2Fq100GD1OLTYyEyb1qA08oChraRSh0r0MPbM1NQS7F6DWnMMFqpbxYFwI71SsKgIP8geP7fcdk1HP%2F%2BUQW5EjmWSc%2BXKo8tEZG%2FTjJPW8AzPTbYwyR2U%2BNutEVRVkuNS3e2%2FGQDKEOMzY28iwxgVtAVAJxKJKlne8bfUfifwskBMws8dhy7HHqKT7N7sx4iZ2broHegXyTsYLZP5CilbesFRC8GkEp4ZHWmMvbBvA2qbnzRaFm8zJvh5YJQKudDiqlFLrOc9b0fI3CdHpJTS%2FJlFM8w47%2FRvgY6pgGDzkL1OQq7gVgIBKpfi8ApIUNMaQELOHdjUpzwWxe1cdmINTYZM%2FGjQz94eCFa3XEu9dgehYM5%2F9JfhA6yU3EIrx3IVTZBWtzgnHslv0kyUp9VQ7kOpv6i%2B5TWBRR3sRiMmJrc0tbfZ%2FUA%2FaKkMg7bdbKBce9bgDnVvw7pxVMacDaoLpVtP2us5mSQa8QNvL5UVfwmSnJfR30Nmjd8j5SRMvXCQRLu&X-Amz-Signature=511b8f2db97124123a63d19d4646afe4207d3f764b402fa532efdc6252df4b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4N77M4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi03%2BmGo8JzDfoAhCOuii1br7X%2FB0NRCdDHVWmVgIeEAiApbQZXk%2BxpPcpYVLzoaHvM7nrRqEY9j0o9%2FB7%2FWmSGNiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGO8udbsZmaJo1M7YKtwDcqdCwtNqHN%2FWfjxvMc6obCyphE%2BSJowkZon3ALRavohniqfGbOSx3ohoGYm9Ih8KMkdwyqtc0MLxWaW5%2BRLD%2ByufIGOUHBjxzUM473PbFQeFDbY351gZRNC4TwloleAnBMcZ%2BNRFSW9BsD7JvrT%2FNFl6Se4uRuWeCrvPrdwrbodASQXIIw3AC15HM8uSjkJdEapdJFWASe7EGlPozO9q%2FFV4pYRGfoMXWapqlmOvGdcYyyakqEUtR5%2BUdLg1oJPhwNzzqqeYWpuvLxv6%2FDPzEM5dW1RQI25fipIN4Uk9jyn%2FvHod%2Fh6MhFuMDaC%2FAS%2FxZbvHNkavp8FtQjR%2BOCbX%2FdVZYJJfptqEX%2Fq100GD1OLTYyEyb1qA08oChraRSh0r0MPbM1NQS7F6DWnMMFqpbxYFwI71SsKgIP8geP7fcdk1HP%2F%2BUQW5EjmWSc%2BXKo8tEZG%2FTjJPW8AzPTbYwyR2U%2BNutEVRVkuNS3e2%2FGQDKEOMzY28iwxgVtAVAJxKJKlne8bfUfifwskBMws8dhy7HHqKT7N7sx4iZ2broHegXyTsYLZP5CilbesFRC8GkEp4ZHWmMvbBvA2qbnzRaFm8zJvh5YJQKudDiqlFLrOc9b0fI3CdHpJTS%2FJlFM8w47%2FRvgY6pgGDzkL1OQq7gVgIBKpfi8ApIUNMaQELOHdjUpzwWxe1cdmINTYZM%2FGjQz94eCFa3XEu9dgehYM5%2F9JfhA6yU3EIrx3IVTZBWtzgnHslv0kyUp9VQ7kOpv6i%2B5TWBRR3sRiMmJrc0tbfZ%2FUA%2FaKkMg7bdbKBce9bgDnVvw7pxVMacDaoLpVtP2us5mSQa8QNvL5UVfwmSnJfR30Nmjd8j5SRMvXCQRLu&X-Amz-Signature=f60960ece1e0c416ea9aafe0219d899845bf404b12430355713cca54e5196a63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
