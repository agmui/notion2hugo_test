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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJ5RVOH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVWuW1VlllCTHSBaSvivlMdnvM7DcnSScxjciuYK95AQIhAOXBDGx%2FbDAwtDXlKWgBx87cj8T%2BZp0N8Scam6%2B21IAeKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwySu5vkb5aYMwW1qYq3ANHriQtudFZPg7ItChAr%2FY7HpRaERSiw%2FCSdmOwb06u2BWW3NmlD8rIMWuUxljWNoUxy0Un4kkfSuosyKhNzcmxi%2BHFOZ7HH6PEyqY1nMXn4yX70Xe%2BplMBLt89XnvTHQpHYF7WqCCR%2BwJjDwWSibqgEW3rNXeFgNgUFFUfaoHH5yVQ8wn46GShJzF8Dm4l%2FbHcgwzqfhbvJ8axazVel%2B2g2m4JKfLh%2FzRfrNYWt%2FaLEbHKx9Ewu7awC%2FftUocT0Qg%2FE70qMBXlvEybH1etnZhnCSxz%2FC%2FRwTHQoIgG%2BFVyRn0ejFkyj4sqBqI0%2FHiZJIeF0tJxukuNuO2HLq%2F%2FSK%2FHeJuZTOIQLH4PhaVKYv%2FZAf11I1T1J3ROjTBi1Z2ogQlephhyteBTq2QvCNdAcmGHSDHnD7ppUQIvhYMhgXbT2mECc9iTZhNcMxU4fxM9XN7O3fuTUh5oqUebyum53x58ihQGlzfo0fg8KjkF9pP5iumJ3YHtilduPgq5wjxixExxQOIfQJ%2FC%2FxwHlIEcuLfyhE1R1uMsXK%2FevJy1mhzC1u3qHyt0RvPdlhfQikarNZznrFBD1OvG2HEWd9DBwj38XGpcyvieIQt1Z7ygkMN8We6WOAUXfW5H1GzY5zDRtdHCBjqkAbuaTM%2FWi%2FYkweBfzpKfGca3AXzvqPiR2lW0RRr9Fo6p746b%2FbcbxPxtFYAt6Pt5mQPdOgr1xnXmR2HwyigCVHtw%2F6ZFlugzzG9Dc%2F69VBADjqhZFmzu8Pqh6jJ29lGUd2uKiPywfMhLh5VydJ3kQIJVuewJqxFevt5mberbogMdAgkO6M6Sn%2FJd1vHUwgXX9q5SJbCFXJybnMr1jsosWSL6nSJj&X-Amz-Signature=327843bee93f49ffc1df4a005746208dba5a0d9ee2b978647b292589fd263326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJ5RVOH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVWuW1VlllCTHSBaSvivlMdnvM7DcnSScxjciuYK95AQIhAOXBDGx%2FbDAwtDXlKWgBx87cj8T%2BZp0N8Scam6%2B21IAeKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwySu5vkb5aYMwW1qYq3ANHriQtudFZPg7ItChAr%2FY7HpRaERSiw%2FCSdmOwb06u2BWW3NmlD8rIMWuUxljWNoUxy0Un4kkfSuosyKhNzcmxi%2BHFOZ7HH6PEyqY1nMXn4yX70Xe%2BplMBLt89XnvTHQpHYF7WqCCR%2BwJjDwWSibqgEW3rNXeFgNgUFFUfaoHH5yVQ8wn46GShJzF8Dm4l%2FbHcgwzqfhbvJ8axazVel%2B2g2m4JKfLh%2FzRfrNYWt%2FaLEbHKx9Ewu7awC%2FftUocT0Qg%2FE70qMBXlvEybH1etnZhnCSxz%2FC%2FRwTHQoIgG%2BFVyRn0ejFkyj4sqBqI0%2FHiZJIeF0tJxukuNuO2HLq%2F%2FSK%2FHeJuZTOIQLH4PhaVKYv%2FZAf11I1T1J3ROjTBi1Z2ogQlephhyteBTq2QvCNdAcmGHSDHnD7ppUQIvhYMhgXbT2mECc9iTZhNcMxU4fxM9XN7O3fuTUh5oqUebyum53x58ihQGlzfo0fg8KjkF9pP5iumJ3YHtilduPgq5wjxixExxQOIfQJ%2FC%2FxwHlIEcuLfyhE1R1uMsXK%2FevJy1mhzC1u3qHyt0RvPdlhfQikarNZznrFBD1OvG2HEWd9DBwj38XGpcyvieIQt1Z7ygkMN8We6WOAUXfW5H1GzY5zDRtdHCBjqkAbuaTM%2FWi%2FYkweBfzpKfGca3AXzvqPiR2lW0RRr9Fo6p746b%2FbcbxPxtFYAt6Pt5mQPdOgr1xnXmR2HwyigCVHtw%2F6ZFlugzzG9Dc%2F69VBADjqhZFmzu8Pqh6jJ29lGUd2uKiPywfMhLh5VydJ3kQIJVuewJqxFevt5mberbogMdAgkO6M6Sn%2FJd1vHUwgXX9q5SJbCFXJybnMr1jsosWSL6nSJj&X-Amz-Signature=792354efd42ee64a2092c0952a200f6389b39fdf056008ec9b317685a4b81d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
