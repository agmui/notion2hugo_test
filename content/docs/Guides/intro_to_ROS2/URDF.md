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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6H5ZLJG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDaqG0CxniKfP7ANhYyVf8BXN%2FmP%2FUHKX0IAm5kzPb%2BzQIhAIhhrh0l8WMmqGxqa7wj6do5gKjGbBnyqaJen9I9rVfHKv8DCGIQABoMNjM3NDIzMTgzODA1IgwGolKAKAtUUl6ysNIq3APGKjFuRiD3R61TgHl42byXIBdg6zFACc06WPthyokthm0TEVlVlVUYy%2Fwe0lm0DC3ZG6ifK0pC5t8G6PzXR48ZjtjUtYjfWzvzS%2FG1LvE6caVkk1uH0IHiQnXS39SgmmcayY%2B1U38mAGwh45C24%2BoEocfr1QCE43xybshQJv5dLF0WoRlK%2BdqhJ2uRbuPwJ1PA%2FlvDs8ZUtdvOjbvWwtbZ0SSROkWRy7Uwpll7t48VStsNFVvF3ABfdiYhcu10QLA57%2FhdNK1PM6X6AoUdSCCjATIPxiCxme3QAeyNLny0EVCJ%2Brpby5ptATP1d3ggYeEG617v9bajwrkCS0F98imkf5YTj69JyFo2073EzYzmtSshTIZCu3ed1XkUoc8WH7TV78Gh2FLNQ%2BBLKV2HbJP00YybfX1%2F6iBehSwCnqqGaG28b0KmM3X12XsDR9I2NA4WM9Rmu3MH0r1ImKTBHi8dRhV59G3H%2FbOEmUlLkGndqGl0TyIfrBSJYWoeaooLNPomYXj20GA0iApELSe5ZZmA%2FEhpuiB%2BKvsi0sn7bKAZeIESPc3xyYmflpeUKg4fzFiWifPFvuYoje%2FffqbWqKUbcY2F3qPyV%2Butuft9vZ9pQAHpXzR8UA%2BZMyIzGjDI2v3EBjqkAbh1kiEscVA%2FL4RrzHpL98nA9og7AVJ5Xckl%2F5KrUUqakmbiF77rIqmZ2LFAejdjVpeeuB%2FlbsRSZ3gPDcGRFUhhiqNYfHsTfW%2FhoHUYehZXZrUDg0R5LpiCIDLZTRxxNieoshUisOh9Dul2tqmWe6rddAx815Utjnc09lFp2s5%2B%2BWxWqg0bNdE%2FhOEasL3FxRy9JeBj6Ies%2F%2BGrMhrWzldWsgJw&X-Amz-Signature=ff7ba1792b2fc8239c87319c0ce7db3ee70f7e52002ef14eabfb58911a599b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6H5ZLJG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDaqG0CxniKfP7ANhYyVf8BXN%2FmP%2FUHKX0IAm5kzPb%2BzQIhAIhhrh0l8WMmqGxqa7wj6do5gKjGbBnyqaJen9I9rVfHKv8DCGIQABoMNjM3NDIzMTgzODA1IgwGolKAKAtUUl6ysNIq3APGKjFuRiD3R61TgHl42byXIBdg6zFACc06WPthyokthm0TEVlVlVUYy%2Fwe0lm0DC3ZG6ifK0pC5t8G6PzXR48ZjtjUtYjfWzvzS%2FG1LvE6caVkk1uH0IHiQnXS39SgmmcayY%2B1U38mAGwh45C24%2BoEocfr1QCE43xybshQJv5dLF0WoRlK%2BdqhJ2uRbuPwJ1PA%2FlvDs8ZUtdvOjbvWwtbZ0SSROkWRy7Uwpll7t48VStsNFVvF3ABfdiYhcu10QLA57%2FhdNK1PM6X6AoUdSCCjATIPxiCxme3QAeyNLny0EVCJ%2Brpby5ptATP1d3ggYeEG617v9bajwrkCS0F98imkf5YTj69JyFo2073EzYzmtSshTIZCu3ed1XkUoc8WH7TV78Gh2FLNQ%2BBLKV2HbJP00YybfX1%2F6iBehSwCnqqGaG28b0KmM3X12XsDR9I2NA4WM9Rmu3MH0r1ImKTBHi8dRhV59G3H%2FbOEmUlLkGndqGl0TyIfrBSJYWoeaooLNPomYXj20GA0iApELSe5ZZmA%2FEhpuiB%2BKvsi0sn7bKAZeIESPc3xyYmflpeUKg4fzFiWifPFvuYoje%2FffqbWqKUbcY2F3qPyV%2Butuft9vZ9pQAHpXzR8UA%2BZMyIzGjDI2v3EBjqkAbh1kiEscVA%2FL4RrzHpL98nA9og7AVJ5Xckl%2F5KrUUqakmbiF77rIqmZ2LFAejdjVpeeuB%2FlbsRSZ3gPDcGRFUhhiqNYfHsTfW%2FhoHUYehZXZrUDg0R5LpiCIDLZTRxxNieoshUisOh9Dul2tqmWe6rddAx815Utjnc09lFp2s5%2B%2BWxWqg0bNdE%2FhOEasL3FxRy9JeBj6Ies%2F%2BGrMhrWzldWsgJw&X-Amz-Signature=b7ad50eafbab1b848ccc65ad1b7a453a72badc4c2d71ef5c2c7c360cd9dabeb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
