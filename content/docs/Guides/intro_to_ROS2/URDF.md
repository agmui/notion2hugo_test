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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMU6JZ72%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANGDRZPOkfuiR0CKLGrQKtlprTfMPrfJ6uxf9R4ONX5AiBhwFAYPf%2FmEluhydjDVfSkTVkU9gmkoqCpo3hrAAxZEiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn9LiGvpfjFSshT2LKtwDZVGNoaO1y4pfPtNP8SruZK%2B8TyWaN8u5%2FjhyC6TUDDwktp0wp4cr9tjIFAwyr53b3AGV8sAqpMurXn1Qx%2BIqu0%2FlbfFyz7RNbFfZ5QREOlKX2vge6qF3HI%2FwZJeipOkCbnBQh9x7eT2mg0ucgHl6Zxj%2B66yYR5x1Su2UBVlmcDwNpjRThHWHj5KOuTyQ3rhbk717PYojEvdKtHmYubSS5bLLiip2j45FcwCRTmnBlFxBIUN8wtzE6CR63feiuvs8lRyl2d2NMhsebg9TAWr4%2BDPz18tbRiWKKTvJJz82rh3XI%2BYW08eCTKpkbrrbh43QU2FhQw3lAxz8O9VU6G7uKtOqaxVvSNVOfM7kYvG%2Brp0B1a9ESFyMlFbtEV8E42RBJgsW%2Bs3vdbHUzCKd3K9fqEFiBB0gDtbtE34ZRKiKd%2FPTtffJhpbfD9SX9zIWBxifg2ZHf6TgUJVKXQHu78EekRxS%2FN%2Fj57PkIszvvcdKXxXpbNQfkUXwWhRUpB5K4nU8vwt8Ox9LzMdh5C2djRTMK43ZoyrR2q8MdjR0W90IcwajTwGwJzhnlYdXbbCoOYY43Iz%2Ft6MLZG77dv87895rP3D1A8ZCxgGMt3DmhtwYnTaPeGyqhEHQBEuvmjIwmrOiwgY6pgHnRpUAW6JymrhklY4pEfQs93LP3JZdSAcGngpkLhN%2F6LkiqmMB%2BbOsZEvF12kwYPTUA1wdlZZoeKD9hSDfvfsUYiUUMsgFGMJ5ZsNrk%2BcZla3mMoncDeqYpie4mJfSqZJ8d3fGp01lHsThabL%2F6CRXns%2BA69GKcuR7kMIrO9neAXYjnk%2BcML7Rwxnkeg0UsLdgrar%2FlC9owN1y0zgQiIVeMZb1FQ7D&X-Amz-Signature=9c600adcc2ac80ff7a29cead640658c609b613cd9fdee91af2ea1aa7039c4cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMU6JZ72%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANGDRZPOkfuiR0CKLGrQKtlprTfMPrfJ6uxf9R4ONX5AiBhwFAYPf%2FmEluhydjDVfSkTVkU9gmkoqCpo3hrAAxZEiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn9LiGvpfjFSshT2LKtwDZVGNoaO1y4pfPtNP8SruZK%2B8TyWaN8u5%2FjhyC6TUDDwktp0wp4cr9tjIFAwyr53b3AGV8sAqpMurXn1Qx%2BIqu0%2FlbfFyz7RNbFfZ5QREOlKX2vge6qF3HI%2FwZJeipOkCbnBQh9x7eT2mg0ucgHl6Zxj%2B66yYR5x1Su2UBVlmcDwNpjRThHWHj5KOuTyQ3rhbk717PYojEvdKtHmYubSS5bLLiip2j45FcwCRTmnBlFxBIUN8wtzE6CR63feiuvs8lRyl2d2NMhsebg9TAWr4%2BDPz18tbRiWKKTvJJz82rh3XI%2BYW08eCTKpkbrrbh43QU2FhQw3lAxz8O9VU6G7uKtOqaxVvSNVOfM7kYvG%2Brp0B1a9ESFyMlFbtEV8E42RBJgsW%2Bs3vdbHUzCKd3K9fqEFiBB0gDtbtE34ZRKiKd%2FPTtffJhpbfD9SX9zIWBxifg2ZHf6TgUJVKXQHu78EekRxS%2FN%2Fj57PkIszvvcdKXxXpbNQfkUXwWhRUpB5K4nU8vwt8Ox9LzMdh5C2djRTMK43ZoyrR2q8MdjR0W90IcwajTwGwJzhnlYdXbbCoOYY43Iz%2Ft6MLZG77dv87895rP3D1A8ZCxgGMt3DmhtwYnTaPeGyqhEHQBEuvmjIwmrOiwgY6pgHnRpUAW6JymrhklY4pEfQs93LP3JZdSAcGngpkLhN%2F6LkiqmMB%2BbOsZEvF12kwYPTUA1wdlZZoeKD9hSDfvfsUYiUUMsgFGMJ5ZsNrk%2BcZla3mMoncDeqYpie4mJfSqZJ8d3fGp01lHsThabL%2F6CRXns%2BA69GKcuR7kMIrO9neAXYjnk%2BcML7Rwxnkeg0UsLdgrar%2FlC9owN1y0zgQiIVeMZb1FQ7D&X-Amz-Signature=132e6f9d1f2431aee335af41c2c2f467548abd69a56b40b749598249cc0a36c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
