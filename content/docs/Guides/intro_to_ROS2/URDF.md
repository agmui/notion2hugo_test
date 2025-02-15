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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YM3RE7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIF%2Fi9jAZmT01ZGNMR94Iu8bhcmrERGXaeRGJtRwsM%2FKQAiAW08%2BpG%2FyPL1m36YiFnu7Oj9KsxcVZLljF%2BpMCHu1WTCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMzb3cy9sKaL6GcqTWKtwDOUbxNbmMgAA%2B621qbuEXM4tsR3Irhyk8xzLAGbjwi0J0T0jioHV5GKMwOiVVj%2FU6diC9SQF7UTmrlrMbAeRPgbTwijKSZs%2B5kTscI%2F0dc9e7lZ%2BG5JzFduvr379%2BfUVQpWWpcvGdVA9QCIRG7bqzXTDzhribB2le45ALHQkvWRJ%2BaIZsThP%2B%2BSXpca2oXNan3BwapyxZfdxlXfqCCTpeuxqc%2BAUsvwn%2B%2BDFVVZbVVjQB0ikm3pk7U65QNPH6VwlBQ5ObsYJP%2BZqseUXULvWIolCawb0GJk1NK2POFk03j91AIiyLP0oCGGNb9IV6Blzv5Rs1r33tLrhlVQ0E6ggMTQN5yZ91%2FzvVbTpqlOvKZEf9Ku09E%2FavVLEWBWiYsjkpnnTVH9ZXpa8N4h%2FZCVL53MrwyzCNHV4o6cNUpub1GXOf9wtKGTt59V1qDewV%2BGDbajv0I41TSydChoOy3HYozXynOfESrRPnhJr9mU8bDz%2F2ao%2B0wG88YRHFHRVtjKnKKYDDltqQbSamXvusZKHAvRykcufSmSKjUcdMIi2h1CbMQbk7a1zfrLvGJXHB70E45wVVEbjliu1IcN42zMP4bbCZMMOwpRrU%2FZeQwRVELp23r0MppMIauO0w0T0wzLvDvQY6pgGes5zIpRSmIQim9RPuabN%2B65Xc2YSY9bpi1zH6aP32tGsA2uDEAga6PYP1K%2B%2FmWyepI1WWgEcqY%2BcP8V1KgYH0XHDpt%2B5sAQAK6JsCom09c%2FSKAzPe1bLOtUu61kOHhICvLNpN1cuVQE19h8ftU4Q0Q%2BN3ZMT792ORbuWcTXu2tYclX9sDUU9owjcICXS1JybQ8GN%2BKvvTH6gwS2G22BRbnAg9ki%2Bh&X-Amz-Signature=7b7e3219cadc70c8ca64444bf78a963dbb1021d61cd17e17c2ede8fcf5c4fb93&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YM3RE7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIF%2Fi9jAZmT01ZGNMR94Iu8bhcmrERGXaeRGJtRwsM%2FKQAiAW08%2BpG%2FyPL1m36YiFnu7Oj9KsxcVZLljF%2BpMCHu1WTCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMzb3cy9sKaL6GcqTWKtwDOUbxNbmMgAA%2B621qbuEXM4tsR3Irhyk8xzLAGbjwi0J0T0jioHV5GKMwOiVVj%2FU6diC9SQF7UTmrlrMbAeRPgbTwijKSZs%2B5kTscI%2F0dc9e7lZ%2BG5JzFduvr379%2BfUVQpWWpcvGdVA9QCIRG7bqzXTDzhribB2le45ALHQkvWRJ%2BaIZsThP%2B%2BSXpca2oXNan3BwapyxZfdxlXfqCCTpeuxqc%2BAUsvwn%2B%2BDFVVZbVVjQB0ikm3pk7U65QNPH6VwlBQ5ObsYJP%2BZqseUXULvWIolCawb0GJk1NK2POFk03j91AIiyLP0oCGGNb9IV6Blzv5Rs1r33tLrhlVQ0E6ggMTQN5yZ91%2FzvVbTpqlOvKZEf9Ku09E%2FavVLEWBWiYsjkpnnTVH9ZXpa8N4h%2FZCVL53MrwyzCNHV4o6cNUpub1GXOf9wtKGTt59V1qDewV%2BGDbajv0I41TSydChoOy3HYozXynOfESrRPnhJr9mU8bDz%2F2ao%2B0wG88YRHFHRVtjKnKKYDDltqQbSamXvusZKHAvRykcufSmSKjUcdMIi2h1CbMQbk7a1zfrLvGJXHB70E45wVVEbjliu1IcN42zMP4bbCZMMOwpRrU%2FZeQwRVELp23r0MppMIauO0w0T0wzLvDvQY6pgGes5zIpRSmIQim9RPuabN%2B65Xc2YSY9bpi1zH6aP32tGsA2uDEAga6PYP1K%2B%2FmWyepI1WWgEcqY%2BcP8V1KgYH0XHDpt%2B5sAQAK6JsCom09c%2FSKAzPe1bLOtUu61kOHhICvLNpN1cuVQE19h8ftU4Q0Q%2BN3ZMT792ORbuWcTXu2tYclX9sDUU9owjcICXS1JybQ8GN%2BKvvTH6gwS2G22BRbnAg9ki%2Bh&X-Amz-Signature=5e6e47bf708fe43f6a9d18bad3686acdb38e3e17a9d55c3ff6ed7c5e39918aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
