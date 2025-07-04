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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667UFHU7H%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGA7fH9z9UsxQ3ZNC57L82N0anyJysIzsd%2BDr%2FPPRo2wAiEA0OZ4XaBB6LT6F4h%2BbAVMYJ0i7jVA8eWCfhO46xd1KqYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKCmghm4C9WbdiaN6yrcA3hmbjlC6BWpPgEqwOvG7SCJPgY%2BLkZeU5iYNbsQr5uYW85rAXnHjUelDekT%2ByX5EUxD6t%2FNIJpqgWzHn6pvG4VBlr2FRV9tYmNqW%2F%2BcnKT8GQ94cH7WublWJ91OccJAhA%2FmjxKQOXacEHNoTd8bdToG2tu5gDFBtLQ9XgUhJqgziB953UCvDyPwxKW8tyJzwPDO1yF7fCAAVeOZVX%2BYZh9C5arpz%2FFpeOdW3CDPPC%2FND83NkumLHCDNcd9WmpQK6VCT02d75lXNSYbofGVRm0Ha6gZN4v62hoJUQ%2F2I4vprfDpJkU02A5b6k3JLGv%2Bpzmr1oq8rnk5tFzqPu4QbdXd0krm7QBKAwvqiLJJe6Zq2gUjeORmJx2id6APD%2BSStO0dCe5QQ37BWifoi68TVhXVOhFIb6SuzKckZrn8SV8zeWXsW86jkfq3JqD64N2eheqBRydoqAJtkmxsfCfRw%2BJYeRtsyCgHLDDEocxAY2HkdPyrGWsUENFDb81rSrhoUDjHwPpb%2BsN05ysBksYvaA58pmjWrlee%2F6QifI5ovCUXyYe1iOr2l4CsbWCkgor9cgpRTkbu6DPXmi7sIFefX7sjnp0ft57G%2FO4MOsTYkcc1jrk7RrQXg6Ob8jYroMNrsn8MGOqUB8v%2BDegHe79C1RTgoDo97woV23CAbBVrIHhb1XL8JLfPWSvIA8YJJgDiILFaK7Aw3IvsrvN4Vzr9T%2F9W988HTpBX6L8iFeDaI8VUf%2BCYOo1aeCnwuP8Z0Of5uxkJLVrS1dHkJz4nBbW9pjQAe6uRLmH%2F%2Fbeera1jPrCMrsnGSsFL4Kz8mQgdi4R0v3tssCrZRzQ5snznpsqjeCbynW8htu%2Fl5vH8V&X-Amz-Signature=21196ef3d6cfa420fa9d15ede4da4e652cced3f5737031dba27c05d03b6a3555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667UFHU7H%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGA7fH9z9UsxQ3ZNC57L82N0anyJysIzsd%2BDr%2FPPRo2wAiEA0OZ4XaBB6LT6F4h%2BbAVMYJ0i7jVA8eWCfhO46xd1KqYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKCmghm4C9WbdiaN6yrcA3hmbjlC6BWpPgEqwOvG7SCJPgY%2BLkZeU5iYNbsQr5uYW85rAXnHjUelDekT%2ByX5EUxD6t%2FNIJpqgWzHn6pvG4VBlr2FRV9tYmNqW%2F%2BcnKT8GQ94cH7WublWJ91OccJAhA%2FmjxKQOXacEHNoTd8bdToG2tu5gDFBtLQ9XgUhJqgziB953UCvDyPwxKW8tyJzwPDO1yF7fCAAVeOZVX%2BYZh9C5arpz%2FFpeOdW3CDPPC%2FND83NkumLHCDNcd9WmpQK6VCT02d75lXNSYbofGVRm0Ha6gZN4v62hoJUQ%2F2I4vprfDpJkU02A5b6k3JLGv%2Bpzmr1oq8rnk5tFzqPu4QbdXd0krm7QBKAwvqiLJJe6Zq2gUjeORmJx2id6APD%2BSStO0dCe5QQ37BWifoi68TVhXVOhFIb6SuzKckZrn8SV8zeWXsW86jkfq3JqD64N2eheqBRydoqAJtkmxsfCfRw%2BJYeRtsyCgHLDDEocxAY2HkdPyrGWsUENFDb81rSrhoUDjHwPpb%2BsN05ysBksYvaA58pmjWrlee%2F6QifI5ovCUXyYe1iOr2l4CsbWCkgor9cgpRTkbu6DPXmi7sIFefX7sjnp0ft57G%2FO4MOsTYkcc1jrk7RrQXg6Ob8jYroMNrsn8MGOqUB8v%2BDegHe79C1RTgoDo97woV23CAbBVrIHhb1XL8JLfPWSvIA8YJJgDiILFaK7Aw3IvsrvN4Vzr9T%2F9W988HTpBX6L8iFeDaI8VUf%2BCYOo1aeCnwuP8Z0Of5uxkJLVrS1dHkJz4nBbW9pjQAe6uRLmH%2F%2Fbeera1jPrCMrsnGSsFL4Kz8mQgdi4R0v3tssCrZRzQ5snznpsqjeCbynW8htu%2Fl5vH8V&X-Amz-Signature=b0f8f42e8625193d44500fc3e5fa8f62331f07ba92bd296042a7420eb69b7cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
