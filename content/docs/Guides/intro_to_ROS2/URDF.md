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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5PD7S2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOQIOsjsXotUmgSFoHqw%2BmUTwv2StXf60i359G7JWzyAiEAvDe5anlhVKf6qRB7fml3O7oqAUUz2mrDtQgaCUtT0Okq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIks%2FNUvJxCdlw2N2yrcA38JOvxUn2GpaNd5sY23ddyPp4D9Z0YlQunzy6yEDHUq5BLNbM%2B6wzvjK6CGXtytIlRC8iVFw7BvkWRT2ejIuRewBvfP6SdSHFzJe2TqFqaz3jvl1w%2FFGjy4Lu6ZagXbA27S0AvvFEZb5ezN9BikJx1lpiujL5LR0ys0lxGo0p4O3IKQx8Kut9wBtdEWv%2BST1qL2ReRrglyaP6LV87n%2F%2BBIn%2FduWuxd%2F1ABvSXhD8Cx1hnTw13RpfNPG%2FjWpRGiACgyE4jdXOZusnX3XfZRh8srYOaj8RQlX8pQqov%2FFTv53ZoEyd%2FbbGqjW1%2ByIPcDN3WFH6ObBO%2FsdT4qMC129XhKlqWICyfaYqtXgDEtf%2BJoOffFFVyd5Am1Q65Lcnq9Z3N1F1IkxQTSqZ3AthGhkMIFkylLGuhiM7HkjQte8pqDc9Hqu5ctzPA0eC9hiCSFzhcf1LLS13K7MM%2B1rSZikHBEmjbbArRglFep96uz9kZ%2BPnpuin5hPJ35duD6gIC0awfsD4CrgllDE%2BTXH96Cgb3fuUc7aXaRw%2FHRCDHra9puIJjOXty1lrvEvlWtO9vA9JAc9avDWQvNjK8feyVW8xJUnDdQQcC5Fht3Wka2AOB%2BwDtct3kSKvyRYT6dOMODt5sIGOqUB2AP3GCkfynIUyWvFQIUvk8zZdk9wRV8Up%2Bm%2BNliuxBWdCvEwWUtcgImEgP4mn%2BX5WibYiBLxEy%2BaOd1Qd0NBN0dR7C%2BtR3MSTznHQmlSm0onnAkkf4FmN5t01gaWn%2F04JMKvYG3uZ3DK0KZ2wkfJaG93ikX2q6QPhfi3MbZQSg%2Bw8khH4iiDMHS97CqtvpuGedre2m%2FNPxA9dJC6Cndthhyc18yA&X-Amz-Signature=9a01c2c178567fafcbfd78f595d7246c3698175f7b73efd8657500ab523ac132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5PD7S2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOQIOsjsXotUmgSFoHqw%2BmUTwv2StXf60i359G7JWzyAiEAvDe5anlhVKf6qRB7fml3O7oqAUUz2mrDtQgaCUtT0Okq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIks%2FNUvJxCdlw2N2yrcA38JOvxUn2GpaNd5sY23ddyPp4D9Z0YlQunzy6yEDHUq5BLNbM%2B6wzvjK6CGXtytIlRC8iVFw7BvkWRT2ejIuRewBvfP6SdSHFzJe2TqFqaz3jvl1w%2FFGjy4Lu6ZagXbA27S0AvvFEZb5ezN9BikJx1lpiujL5LR0ys0lxGo0p4O3IKQx8Kut9wBtdEWv%2BST1qL2ReRrglyaP6LV87n%2F%2BBIn%2FduWuxd%2F1ABvSXhD8Cx1hnTw13RpfNPG%2FjWpRGiACgyE4jdXOZusnX3XfZRh8srYOaj8RQlX8pQqov%2FFTv53ZoEyd%2FbbGqjW1%2ByIPcDN3WFH6ObBO%2FsdT4qMC129XhKlqWICyfaYqtXgDEtf%2BJoOffFFVyd5Am1Q65Lcnq9Z3N1F1IkxQTSqZ3AthGhkMIFkylLGuhiM7HkjQte8pqDc9Hqu5ctzPA0eC9hiCSFzhcf1LLS13K7MM%2B1rSZikHBEmjbbArRglFep96uz9kZ%2BPnpuin5hPJ35duD6gIC0awfsD4CrgllDE%2BTXH96Cgb3fuUc7aXaRw%2FHRCDHra9puIJjOXty1lrvEvlWtO9vA9JAc9avDWQvNjK8feyVW8xJUnDdQQcC5Fht3Wka2AOB%2BwDtct3kSKvyRYT6dOMODt5sIGOqUB2AP3GCkfynIUyWvFQIUvk8zZdk9wRV8Up%2Bm%2BNliuxBWdCvEwWUtcgImEgP4mn%2BX5WibYiBLxEy%2BaOd1Qd0NBN0dR7C%2BtR3MSTznHQmlSm0onnAkkf4FmN5t01gaWn%2F04JMKvYG3uZ3DK0KZ2wkfJaG93ikX2q6QPhfi3MbZQSg%2Bw8khH4iiDMHS97CqtvpuGedre2m%2FNPxA9dJC6Cndthhyc18yA&X-Amz-Signature=20420ef173ecfeb239e770cc3f82ba102555a63fd2533cd0466d1cae129df8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
