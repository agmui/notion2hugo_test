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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROY6VOHL%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXHs3T9azIdW%2F%2B9LEUBut%2FddDo3%2FC9FQnswxE%2BoWcOgIhAK5blC%2B%2B1G7W%2BJVhHJx0HAgro58ODpr%2BHsjJAsSVgxntKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ%2FLqQJnsbGb%2Bgg2Aq3AOyyawv5s13SbgiCfG%2BibIvqpSn212Rsh25RUvnJW%2FhU3JSZFTHhkxU4nzGELjHN%2Brc7JH9dBYPEOtGBAjZ79KBhpAXhFcIVCyc5G9axWdAjj96Lob10NWYaaq89M5E8Zys66kPTUbjNvpOoU7HLXSK4CxA75ceL9jIhIZ4ErP0KczP3RC3pINnWzobB3xx824QFOukIz9k1CRa%2FhodlTF5laAz5BzO%2BYVnppG%2BgDjoGLTLs2YFn2CmUrd2dAk2%2BOkNmVDHf10Lo27rNsczpfdIa9o%2BU9D1Kb3SFcgQsmBurMkQCclxJqSnqg3KBpBrddzVMHAZxXQS1kOiIzu6YagQVLo8Th6hDY3IdKtvi9PICvQs%2Bfneee0YY2A8THOwa8Q9BuDicKTYFNMQdwRXg7f0%2BvivTMAgqYbWm99gY9k9A4vXD6WkyoWUK9%2FoLuZQHj6lPMKVjSxTmuch1yF5D708c4%2BPS2vXFg61YsWxK36q7JRNYb2EdUqOT2fUTGok8eQ9r2XcIKNK1WHveOtUy6%2BpwrUG%2FEuA3QAU6dBqhYN4f72ylCdsQYXpUqo43Qg0jKFkW%2BR0%2B2E%2F2KnxlDIp8g104d0m3RuyWOpE39qCw7ayRlLEJAWn74i6gWi4RTDwl53CBjqkAYXMbF%2FJ8lzosrNc3kW1vHoSTRwkjTPTUJ%2Fh3eOooS7t19a2%2F37xhrWetgzAa5FpAl0LUGJ3P9PRstnFqTY9Tv9k5%2Fk6t39ALLcv961g9MZ1aGT%2BFPXzd3SsoOhVvYkEdj81i4Fj89r%2Frl4xBZaB3%2FOnvk1%2BIJ1VISCXfVeN6zbYVtdVRVK2oxl8zIeXpC09%2BBa4tmBCDshSh8FyNKjxReGGgog4&X-Amz-Signature=b353689117e6c9f4b8456926934a6347413b0667f06f9178ca3fbb453147980f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROY6VOHL%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXHs3T9azIdW%2F%2B9LEUBut%2FddDo3%2FC9FQnswxE%2BoWcOgIhAK5blC%2B%2B1G7W%2BJVhHJx0HAgro58ODpr%2BHsjJAsSVgxntKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ%2FLqQJnsbGb%2Bgg2Aq3AOyyawv5s13SbgiCfG%2BibIvqpSn212Rsh25RUvnJW%2FhU3JSZFTHhkxU4nzGELjHN%2Brc7JH9dBYPEOtGBAjZ79KBhpAXhFcIVCyc5G9axWdAjj96Lob10NWYaaq89M5E8Zys66kPTUbjNvpOoU7HLXSK4CxA75ceL9jIhIZ4ErP0KczP3RC3pINnWzobB3xx824QFOukIz9k1CRa%2FhodlTF5laAz5BzO%2BYVnppG%2BgDjoGLTLs2YFn2CmUrd2dAk2%2BOkNmVDHf10Lo27rNsczpfdIa9o%2BU9D1Kb3SFcgQsmBurMkQCclxJqSnqg3KBpBrddzVMHAZxXQS1kOiIzu6YagQVLo8Th6hDY3IdKtvi9PICvQs%2Bfneee0YY2A8THOwa8Q9BuDicKTYFNMQdwRXg7f0%2BvivTMAgqYbWm99gY9k9A4vXD6WkyoWUK9%2FoLuZQHj6lPMKVjSxTmuch1yF5D708c4%2BPS2vXFg61YsWxK36q7JRNYb2EdUqOT2fUTGok8eQ9r2XcIKNK1WHveOtUy6%2BpwrUG%2FEuA3QAU6dBqhYN4f72ylCdsQYXpUqo43Qg0jKFkW%2BR0%2B2E%2F2KnxlDIp8g104d0m3RuyWOpE39qCw7ayRlLEJAWn74i6gWi4RTDwl53CBjqkAYXMbF%2FJ8lzosrNc3kW1vHoSTRwkjTPTUJ%2Fh3eOooS7t19a2%2F37xhrWetgzAa5FpAl0LUGJ3P9PRstnFqTY9Tv9k5%2Fk6t39ALLcv961g9MZ1aGT%2BFPXzd3SsoOhVvYkEdj81i4Fj89r%2Frl4xBZaB3%2FOnvk1%2BIJ1VISCXfVeN6zbYVtdVRVK2oxl8zIeXpC09%2BBa4tmBCDshSh8FyNKjxReGGgog4&X-Amz-Signature=64ceddad53862f99361434559ca61d036306442f671744f8a057f11390e6bc54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
