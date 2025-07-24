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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3VVSKG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDLD357eYN%2FCNBZ8pfNOW7dfjJVD9j0SVwZ1K3i6tuPKgIhAOlcEM%2BCf4te%2F9HOuazFNizAYBlgbCtsfMJ2k6ubscJRKv8DCC0QABoMNjM3NDIzMTgzODA1IgzuiZZvzLS51i6c5Z0q3ANvWkPSlxz5Nxkxr5okjRc%2BiPQtvF5yEdydJZvJEE5QhKKVaveQkWkKFjcPOOKd4APGXSgz5h8Fv4v9koUAWxUkg6S20NhWyms4fXMY0qxMvODA30pCn8hkg21WAhh%2BW%2BVBy3qRiQ5AyTG2gxxoJB8fVIHsoZU8WST%2F14td%2BkAAwlNDCdh%2B98rD7KeBhzeeHUlXZgm8Hoh1r3IEkHVGiROqTFDgJ9ZlZ%2BsVZj9mnTRr0p0C9DtXv6TwpXcgDF%2B02ZRiw4fVztBd6OuTYRWas7LevwzEdPM3A3%2FymxmOLaOI28AE1YkPh2tLX0oKQqjU7owptuUk8S6zI9mfhwr9tuCbnxprJVirY8DNz1CE4jKuH8pFGQQ0PKsPJcenMOcXVbKSEidpUjniul%2FXzJ97idMD3ZHS98fkV2lxpvTf1YP%2FALNZdjywg3o6qnAjuBZHCMLmcgWPA4sa6N%2FxOsiFQk7gPF6mmmhgN3g%2BBjzxPwHzkdx1F8%2F7j1cz%2F0rIvoNqKZwFYpNorlsx0kotPRcOI20GJ9THTyIGwmGTHv2uMs0AMMdMGCthUl%2Bvuh1qtL3yryd2%2FRWrgbAqs0%2Fq%2BLcP0F%2BHeC1dMP3IXCpqtkMmg6RV35dhGV7V%2Bpk96Lit1TCptojEBjqkAQbnFZEe8RjPK%2F7ulcvGvWDlfCnuaKcs8ePnFVOZcVtKMgB3GcTYhopBmJBBXQ6YWeiUjW8utI5Z8Ii9Q%2Bstuo74gsI07K%2B7BtQOsVWMTfIm2lHRoymrRYjwNKDpoZ3wvcRcF2ZkDVowj63s1HV4d%2F5oh%2BTm08ruoltoVukpTPYHy6yYewmYW3JmH7WMykSY9DbOQxShGdbcNWIWQMAZ3cqedZSm&X-Amz-Signature=a72060fdbededbbd7738bd5177f1d536681d8c66854fdf906c261a0adf221cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3VVSKG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDLD357eYN%2FCNBZ8pfNOW7dfjJVD9j0SVwZ1K3i6tuPKgIhAOlcEM%2BCf4te%2F9HOuazFNizAYBlgbCtsfMJ2k6ubscJRKv8DCC0QABoMNjM3NDIzMTgzODA1IgzuiZZvzLS51i6c5Z0q3ANvWkPSlxz5Nxkxr5okjRc%2BiPQtvF5yEdydJZvJEE5QhKKVaveQkWkKFjcPOOKd4APGXSgz5h8Fv4v9koUAWxUkg6S20NhWyms4fXMY0qxMvODA30pCn8hkg21WAhh%2BW%2BVBy3qRiQ5AyTG2gxxoJB8fVIHsoZU8WST%2F14td%2BkAAwlNDCdh%2B98rD7KeBhzeeHUlXZgm8Hoh1r3IEkHVGiROqTFDgJ9ZlZ%2BsVZj9mnTRr0p0C9DtXv6TwpXcgDF%2B02ZRiw4fVztBd6OuTYRWas7LevwzEdPM3A3%2FymxmOLaOI28AE1YkPh2tLX0oKQqjU7owptuUk8S6zI9mfhwr9tuCbnxprJVirY8DNz1CE4jKuH8pFGQQ0PKsPJcenMOcXVbKSEidpUjniul%2FXzJ97idMD3ZHS98fkV2lxpvTf1YP%2FALNZdjywg3o6qnAjuBZHCMLmcgWPA4sa6N%2FxOsiFQk7gPF6mmmhgN3g%2BBjzxPwHzkdx1F8%2F7j1cz%2F0rIvoNqKZwFYpNorlsx0kotPRcOI20GJ9THTyIGwmGTHv2uMs0AMMdMGCthUl%2Bvuh1qtL3yryd2%2FRWrgbAqs0%2Fq%2BLcP0F%2BHeC1dMP3IXCpqtkMmg6RV35dhGV7V%2Bpk96Lit1TCptojEBjqkAQbnFZEe8RjPK%2F7ulcvGvWDlfCnuaKcs8ePnFVOZcVtKMgB3GcTYhopBmJBBXQ6YWeiUjW8utI5Z8Ii9Q%2Bstuo74gsI07K%2B7BtQOsVWMTfIm2lHRoymrRYjwNKDpoZ3wvcRcF2ZkDVowj63s1HV4d%2F5oh%2BTm08ruoltoVukpTPYHy6yYewmYW3JmH7WMykSY9DbOQxShGdbcNWIWQMAZ3cqedZSm&X-Amz-Signature=16f6dbd6a2547b2ebd4799be3af1654a72ee3af50af95da1b1a72660feeddbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
