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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CISQTYJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy4vuYzjVDm%2FrCoLbmMQnoNjJPhXvr1uW2DRvigRm2HQIhAMAwjnqsxhwx5IOiL%2FMVqxZlFyCMfHJ3onVfO17yBWk7Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwzQ%2Fe76FiXo6KKae8q3AOQ2yc2tl%2FHQ6OZctB66SIF1ferLxXNZR1a0tqOtifQc5GIzRvmJjtrqfTnSNRoSh9HUABtKaWbOwgubQHtwGo%2FjIo9cz7pAYu1mIlBok%2B8P7ky3AvG%2Fecxidjhxr0TVKMPMRB%2FwXxgUFC409pufq%2FlWo1oTKxUd%2F62cFmByDORoJNCW%2BBVpyeSA8W29oqnB99GBSMbA%2Buchk27Mo1KTDmiec3qIoib7nUyxBQeC5I%2FpWAarbP3bkkUUFDbkPDbORbREyNuAHAVfR4azDr7E8RRO6ngTsLBHmlWxVr1jJaWn%2Fm1M52%2FDJeUuu2J5JK9zoWYT9MMjl94%2FphUSsG6VNUp1SNNxQUGSie2boB8NiKQ7yGIpbZ%2Bb1ov2jXPDUUtE4eGAN%2BQ4GzxLSLcV%2FFlZlTFhW75gPLriB16l01kvKpGuiJHbSZRdMB9AmZJBg1FA6M7%2B%2BR%2Fdm89hhc0qU9O8ty65WyVk%2B8794rXDwqj8HqiAbSj3D5oULvL5ZlSgtb7MkTE2fZHj0IpoUy8WdTgUpVrMqxbCJBzf2z8zHraEDdDQNaVMBCwFFf7WDslZdpl37hLMWZZiYOTmZ5eJ1W5Bek2kHyv3brKJ%2FmYH1muLke8sJw7NyZQSwDUfZTHYDDNv5m%2FBjqkAYuIS4st6F4csqGkwft6DMRgHYsKmMjpK2yjasBe5%2BdpAkYJpbs2FiMLeXZR7anx2Zc4lVtNq6s%2FBcbop%2FJbH1j62%2BaQKRrZMNZUENDj%2FI0fkhpgakkQLIVSmO0Lt5MiHmTOOUMenPPONqkGF95NWKfckpBpO1Hen%2F7%2F5gv4%2BxJFHNavq%2BKqU0tjELNsuImhq2jxevk%2FonJdeAG%2FS1rd0BEJBflu&X-Amz-Signature=6678b49610f52d9858ad6ffc2cfe04fe36a7a1329f1f4333209be52d403955a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CISQTYJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy4vuYzjVDm%2FrCoLbmMQnoNjJPhXvr1uW2DRvigRm2HQIhAMAwjnqsxhwx5IOiL%2FMVqxZlFyCMfHJ3onVfO17yBWk7Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwzQ%2Fe76FiXo6KKae8q3AOQ2yc2tl%2FHQ6OZctB66SIF1ferLxXNZR1a0tqOtifQc5GIzRvmJjtrqfTnSNRoSh9HUABtKaWbOwgubQHtwGo%2FjIo9cz7pAYu1mIlBok%2B8P7ky3AvG%2Fecxidjhxr0TVKMPMRB%2FwXxgUFC409pufq%2FlWo1oTKxUd%2F62cFmByDORoJNCW%2BBVpyeSA8W29oqnB99GBSMbA%2Buchk27Mo1KTDmiec3qIoib7nUyxBQeC5I%2FpWAarbP3bkkUUFDbkPDbORbREyNuAHAVfR4azDr7E8RRO6ngTsLBHmlWxVr1jJaWn%2Fm1M52%2FDJeUuu2J5JK9zoWYT9MMjl94%2FphUSsG6VNUp1SNNxQUGSie2boB8NiKQ7yGIpbZ%2Bb1ov2jXPDUUtE4eGAN%2BQ4GzxLSLcV%2FFlZlTFhW75gPLriB16l01kvKpGuiJHbSZRdMB9AmZJBg1FA6M7%2B%2BR%2Fdm89hhc0qU9O8ty65WyVk%2B8794rXDwqj8HqiAbSj3D5oULvL5ZlSgtb7MkTE2fZHj0IpoUy8WdTgUpVrMqxbCJBzf2z8zHraEDdDQNaVMBCwFFf7WDslZdpl37hLMWZZiYOTmZ5eJ1W5Bek2kHyv3brKJ%2FmYH1muLke8sJw7NyZQSwDUfZTHYDDNv5m%2FBjqkAYuIS4st6F4csqGkwft6DMRgHYsKmMjpK2yjasBe5%2BdpAkYJpbs2FiMLeXZR7anx2Zc4lVtNq6s%2FBcbop%2FJbH1j62%2BaQKRrZMNZUENDj%2FI0fkhpgakkQLIVSmO0Lt5MiHmTOOUMenPPONqkGF95NWKfckpBpO1Hen%2F7%2F5gv4%2BxJFHNavq%2BKqU0tjELNsuImhq2jxevk%2FonJdeAG%2FS1rd0BEJBflu&X-Amz-Signature=dc49e6bdeef5d933db0796ba2a154bbbb7735f2ed94f89719377766c6f926cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
