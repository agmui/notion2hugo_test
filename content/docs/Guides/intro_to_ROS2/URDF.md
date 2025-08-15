---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQYCSTU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCoIFTrnMijcpNlhy3b%2Bd8%2Fcl%2B1GWwOIC19a8EdUdUDPQIhAI1fD8LkVGBVZJosNsgFkV7JMCow7QHqE7q96SRfES1CKv8DCGEQABoMNjM3NDIzMTgzODA1IgyQusEC3%2BztP9LWPnMq3ANhCRIDvBm94NxyinmWVvw01i%2FV5Q86ANJfZzaig2QRgWYSjzTMK6jpxdjA61Rj7Fueaw1vUy7BsIBtGRkPS6za8BeXXIffvBG6PizJ8%2BXJHGMCsXkXH46NuRi4iCdrS%2BokBunS4fVLDeux3RLbQnHwpZggVIcqh0K4t%2FIuOhhkFtrmsju%2BSjhfAW76IzQyrgkiZGFpiWyiqBjCGYkdIIPQNQgkH2jILZJqwGxLxzPNyvqSen5o7ckUoi7u0Y1LR8RFnL8ipZdD4ACxAuSmSS%2BjAHMDmOHVE2F1GM0qAgWaEvvVkW1zrSpry5TXS6s4DlE0icrEwCu9xqR%2FXeJezHPGh7P%2FT3ZhNp1cHAe2XkmsaAcoj2a4h8jcGn3%2B9W6SQ9hcNo6Sx7Ahj9hDxSTaKjFDD3%2Fat2ITNkOc6LxQdSNIgVrp24mp1nMbVutKrW5aGHyjjRdtYlZy2ct%2FfR3p1oqshALfvPS6nYyur92I1HUYWPIF3fnScoyKmiVcDWxTsvZZSSoAn5jue%2BM94Lzva%2B%2FrugmEa%2BPsTmgYSkASp1GWyw3jDLrE%2FZYtDWkB5vmYLkVqLEc4e%2F0jNmpdLET6VdnN%2BP84UopE%2Frjxdb15%2FIM9aCdEQNtVFrk3l1kVuTC2tf3EBjqkATsiugbS5xHH8hq%2FwyWl32vmEFRvKaoiYJE1HJCbg%2FcUqRLbP0sf2HO%2FtJuyRC98kQ6H9bwq8z3QkBaByStfqrtOiZAzleaWNvT3nAVEeDZHmzrmtaETqcTF38u5gjbcxbBNvjTPyxBc27r5UoKdCAJiHVjpThXEB%2Br8ASF5tWOsf9R%2BghWRMaDKZD0AOWkELYlrVmo6CEnA%2FM5SLMml5Ab4h%2B45&X-Amz-Signature=485bbc0fc2ec3b86e0d797bcfa14ab10c1acb3ae91e3c39bd46551026c05bf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKQYCSTU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCoIFTrnMijcpNlhy3b%2Bd8%2Fcl%2B1GWwOIC19a8EdUdUDPQIhAI1fD8LkVGBVZJosNsgFkV7JMCow7QHqE7q96SRfES1CKv8DCGEQABoMNjM3NDIzMTgzODA1IgyQusEC3%2BztP9LWPnMq3ANhCRIDvBm94NxyinmWVvw01i%2FV5Q86ANJfZzaig2QRgWYSjzTMK6jpxdjA61Rj7Fueaw1vUy7BsIBtGRkPS6za8BeXXIffvBG6PizJ8%2BXJHGMCsXkXH46NuRi4iCdrS%2BokBunS4fVLDeux3RLbQnHwpZggVIcqh0K4t%2FIuOhhkFtrmsju%2BSjhfAW76IzQyrgkiZGFpiWyiqBjCGYkdIIPQNQgkH2jILZJqwGxLxzPNyvqSen5o7ckUoi7u0Y1LR8RFnL8ipZdD4ACxAuSmSS%2BjAHMDmOHVE2F1GM0qAgWaEvvVkW1zrSpry5TXS6s4DlE0icrEwCu9xqR%2FXeJezHPGh7P%2FT3ZhNp1cHAe2XkmsaAcoj2a4h8jcGn3%2B9W6SQ9hcNo6Sx7Ahj9hDxSTaKjFDD3%2Fat2ITNkOc6LxQdSNIgVrp24mp1nMbVutKrW5aGHyjjRdtYlZy2ct%2FfR3p1oqshALfvPS6nYyur92I1HUYWPIF3fnScoyKmiVcDWxTsvZZSSoAn5jue%2BM94Lzva%2B%2FrugmEa%2BPsTmgYSkASp1GWyw3jDLrE%2FZYtDWkB5vmYLkVqLEc4e%2F0jNmpdLET6VdnN%2BP84UopE%2Frjxdb15%2FIM9aCdEQNtVFrk3l1kVuTC2tf3EBjqkATsiugbS5xHH8hq%2FwyWl32vmEFRvKaoiYJE1HJCbg%2FcUqRLbP0sf2HO%2FtJuyRC98kQ6H9bwq8z3QkBaByStfqrtOiZAzleaWNvT3nAVEeDZHmzrmtaETqcTF38u5gjbcxbBNvjTPyxBc27r5UoKdCAJiHVjpThXEB%2Br8ASF5tWOsf9R%2BghWRMaDKZD0AOWkELYlrVmo6CEnA%2FM5SLMml5Ab4h%2B45&X-Amz-Signature=3a17b84dacf8a896ca70d6b8644cc38c8c157006aafbd79792268e1926c9b7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
