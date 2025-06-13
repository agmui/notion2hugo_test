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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBSIA6E%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCNHhwdAjGcL2mC6%2FJv19ZwnglzP3N75z6lD0Yv6UmE2wIhAPlBt9MQA9BmLphoFjNitd7OAT69%2Bl2Gh6b7RTxMYSwHKv8DCBQQABoMNjM3NDIzMTgzODA1IgyfjJE3hzwygmHNgbwq3AOElhBxvQ%2FBxN%2BQUjMh002X7m7RDxHziVgD3hTdLA3mtcLJ3YsiiEEXSa%2B297P8hn0aHH0b2Hu%2BdcXFQe1ZT2B4Q6SGNes%2F6TTMTtEb33EJWWn%2BJLMiy84KsAa7voins%2FmaQUZo1AizoTJMtgbCk8eoWHyHMgH9gjnX8eYomA4zQjPv%2FtoW%2BfhHqW89hfMpXLCNkPTF0TO8nNkXFUnz9%2B3mQ%2FjetXGFZ1qAXaOGgp0w6qUAJ4euriEfkwZoYivt9TWAwqz7r6AZzMgP4cNpMd9W5Q9m%2F5QuZpFFGbNmr50pXNd%2FNf6IQv9nKMCQ53o6gCnrxd3BaR%2BuKjzNUr1XEBPwsci33TJg%2FOMah5ZGq6NMhpxm7MJ9jJSj%2FK5N5fqFgyAulg6l%2BmIitneechdbBgFkH95Q15WwyUdnCaAb46snCh3ZhuUS%2B0UKwHJ16Se24md4vnpqbGVlrA%2BZvZ%2FYRA58HmQvOUbKfyX8YXWf3QlAhXJF%2BHqrZ0KHO1WP%2FKZKCaOZIaqlj1Uw0sFRboCru1L5mB3HcKPZvCB585jW6v1RPdRbka0wp%2BjxQaHGpge7dEN5%2BPuGjdRlhGVSKPVlSD3%2FCp2ekZN81FSWmquWK7O3U2wPRjNzhOrQ7g%2FBqDCNgrDCBjqkAXq3INwrYamLTP8K0tq86ycz03bayIxGFncKwHRT%2FriGV5bjHemx9wuV0bAYaaLlv9nhtyXqtgd1yRXLeqLWOFEE003uV%2B1jgsBVZPthVoFC4yQHjPZzxPIOF9S0lz7fFWIZA%2BW5thvc7Qg5mGklvXu8CsutNzGgGJ1NDhZlMO36GRxihrxSCKhBCNMSpZ0IPb9qjZGU0UH1vjHVIds6dlgyKRp1&X-Amz-Signature=62a3ddfc62b1aeec37678f45bddf9ef02a21e060e8a98d8beaa84b943ba74ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBSIA6E%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCNHhwdAjGcL2mC6%2FJv19ZwnglzP3N75z6lD0Yv6UmE2wIhAPlBt9MQA9BmLphoFjNitd7OAT69%2Bl2Gh6b7RTxMYSwHKv8DCBQQABoMNjM3NDIzMTgzODA1IgyfjJE3hzwygmHNgbwq3AOElhBxvQ%2FBxN%2BQUjMh002X7m7RDxHziVgD3hTdLA3mtcLJ3YsiiEEXSa%2B297P8hn0aHH0b2Hu%2BdcXFQe1ZT2B4Q6SGNes%2F6TTMTtEb33EJWWn%2BJLMiy84KsAa7voins%2FmaQUZo1AizoTJMtgbCk8eoWHyHMgH9gjnX8eYomA4zQjPv%2FtoW%2BfhHqW89hfMpXLCNkPTF0TO8nNkXFUnz9%2B3mQ%2FjetXGFZ1qAXaOGgp0w6qUAJ4euriEfkwZoYivt9TWAwqz7r6AZzMgP4cNpMd9W5Q9m%2F5QuZpFFGbNmr50pXNd%2FNf6IQv9nKMCQ53o6gCnrxd3BaR%2BuKjzNUr1XEBPwsci33TJg%2FOMah5ZGq6NMhpxm7MJ9jJSj%2FK5N5fqFgyAulg6l%2BmIitneechdbBgFkH95Q15WwyUdnCaAb46snCh3ZhuUS%2B0UKwHJ16Se24md4vnpqbGVlrA%2BZvZ%2FYRA58HmQvOUbKfyX8YXWf3QlAhXJF%2BHqrZ0KHO1WP%2FKZKCaOZIaqlj1Uw0sFRboCru1L5mB3HcKPZvCB585jW6v1RPdRbka0wp%2BjxQaHGpge7dEN5%2BPuGjdRlhGVSKPVlSD3%2FCp2ekZN81FSWmquWK7O3U2wPRjNzhOrQ7g%2FBqDCNgrDCBjqkAXq3INwrYamLTP8K0tq86ycz03bayIxGFncKwHRT%2FriGV5bjHemx9wuV0bAYaaLlv9nhtyXqtgd1yRXLeqLWOFEE003uV%2B1jgsBVZPthVoFC4yQHjPZzxPIOF9S0lz7fFWIZA%2BW5thvc7Qg5mGklvXu8CsutNzGgGJ1NDhZlMO36GRxihrxSCKhBCNMSpZ0IPb9qjZGU0UH1vjHVIds6dlgyKRp1&X-Amz-Signature=4366639cf7700f3210d1718374e59f39199808b355644358ef4c80a456ed8491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
