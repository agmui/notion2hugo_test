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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OZSMPO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc8vBGz3MfZA8mlRGBiNJO9joExDgSakRALjtRD3cFbAIgQUzhA%2BLQK8gfC08ddzmomQlkr9e%2FuCzilEFCuYFyBagq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJmVK8ECKAM%2Bd51H6ircA2fgCh%2BSGozeaZ3jaREnyYJTf%2FvPyfmpEB3pJnFjgQJCgGMOMvHrGecrxvqiJJxllO%2FjbyE%2B4Dz74Ogqtvhdfv0P9xPYk43NgMqGMswR5qIgP5lWl%2BCefqpxPtKR19Pi6ADpfpLhSSkYkzsybxIZ97XXB8GKsMa3IIcjlcu7fTbgMBd3cb08xj6q%2F8wCSkvmt78oU7XO7%2FpdnDwWeHhi0cukb1uJS2QhuA8El%2BFSomeNHjbrTNt%2BszYEapieQ%2F4VkgvkZnTNoaHZh4s19BT81osk2b7xl92cz1gwfePl%2FWif6U%2Fz4cEnxtBca5ZStBJLwWDbKh2xLFqZW1nTToIuyI8D932bENfuUUYAxbl%2Bb4SdsNIheokVSA9G2Gzhb%2F6EXJkTKUtWixSubrKFrzHAYKsjxd1dxCftXXy3jKkh%2B65JX%2BS6pAfDFTs5fM2AAzDAYle1MgmqocUglRA6HNw6YDxstNsW3B9MF3XuRvyzdMmpwW%2BjdkZhc0%2BzE92F2qjxejxjRcYq%2B7fFamk%2BkoirXAoD8ODwnyAVrixZw2I2wyLmvC5GkFl8YWn1HOgFcBR7PXpj4sV2rAsUoEFO7O7sApl9bdJiRhb3wcxtBuQrxerk13MmHUVu7xO6KWnMMPD5j78GOqUB2tTR328w1%2BiHX4ZZ72dL19HwQQLxhrYOLgjXCAxcDfW2LUkuuDG0Krn6wp9JkMjgXl5X5w%2Bq9XSo6c1%2B60JkQx8xW5O0so0KLRvT1r9NdE9TfSuu2e8BmOKKZ92WnW2jZ18kc6dzJpWco%2FxWCbhJkDWP4oHPuH7N1W4A9f4fP8DSKY7OtEDV3K9BMPSZIFjNnmiOeGdxb%2FhNiVVIBOdlihE55gAt&X-Amz-Signature=83f2867e177c4a9780adb6981989545cd90ac911c523ef50dc9ede637c3a5dce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OZSMPO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc8vBGz3MfZA8mlRGBiNJO9joExDgSakRALjtRD3cFbAIgQUzhA%2BLQK8gfC08ddzmomQlkr9e%2FuCzilEFCuYFyBagq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJmVK8ECKAM%2Bd51H6ircA2fgCh%2BSGozeaZ3jaREnyYJTf%2FvPyfmpEB3pJnFjgQJCgGMOMvHrGecrxvqiJJxllO%2FjbyE%2B4Dz74Ogqtvhdfv0P9xPYk43NgMqGMswR5qIgP5lWl%2BCefqpxPtKR19Pi6ADpfpLhSSkYkzsybxIZ97XXB8GKsMa3IIcjlcu7fTbgMBd3cb08xj6q%2F8wCSkvmt78oU7XO7%2FpdnDwWeHhi0cukb1uJS2QhuA8El%2BFSomeNHjbrTNt%2BszYEapieQ%2F4VkgvkZnTNoaHZh4s19BT81osk2b7xl92cz1gwfePl%2FWif6U%2Fz4cEnxtBca5ZStBJLwWDbKh2xLFqZW1nTToIuyI8D932bENfuUUYAxbl%2Bb4SdsNIheokVSA9G2Gzhb%2F6EXJkTKUtWixSubrKFrzHAYKsjxd1dxCftXXy3jKkh%2B65JX%2BS6pAfDFTs5fM2AAzDAYle1MgmqocUglRA6HNw6YDxstNsW3B9MF3XuRvyzdMmpwW%2BjdkZhc0%2BzE92F2qjxejxjRcYq%2B7fFamk%2BkoirXAoD8ODwnyAVrixZw2I2wyLmvC5GkFl8YWn1HOgFcBR7PXpj4sV2rAsUoEFO7O7sApl9bdJiRhb3wcxtBuQrxerk13MmHUVu7xO6KWnMMPD5j78GOqUB2tTR328w1%2BiHX4ZZ72dL19HwQQLxhrYOLgjXCAxcDfW2LUkuuDG0Krn6wp9JkMjgXl5X5w%2Bq9XSo6c1%2B60JkQx8xW5O0so0KLRvT1r9NdE9TfSuu2e8BmOKKZ92WnW2jZ18kc6dzJpWco%2FxWCbhJkDWP4oHPuH7N1W4A9f4fP8DSKY7OtEDV3K9BMPSZIFjNnmiOeGdxb%2FhNiVVIBOdlihE55gAt&X-Amz-Signature=0949bebb85a9337e54ad0cf09ec98747b93373cbb5fffa4cfe184d4f24718814&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
