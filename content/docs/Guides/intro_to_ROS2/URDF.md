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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33BNYNC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD5e%2BY1nN8XwZbTEOlQXRvvvABAw7Unynko5y1h0HOoNwIhAOXB5gD4Xowyku8nHK6TI%2FCFBXF94d6Vsbhsxcv%2FeIT4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFhvC%2FhqZqdQTpSnkq3AO85PysHP5wOPPGucMOibuNJFATFbZiWzmmZn9rR0fMubPZ5M%2FM2Ymex4jvNaiJTH9RE%2FUMFp2DhsEUIyhVwdRftAiOpXcPNFj44PkKuuzCcgoeNPX5NjNK7Uai7%2BehIzLH6in4lDhj7eGEuaLeny%2BTkkk8DiNM0F%2FVg%2FOOxmPVl5mzUwYrPr8rU5qXGFnh%2FdrHjNWJoCPp8dl5KfjxkXd5oDgj6oQkiNB7Cyz4xnFmWToC2QmW3UWMWeHi74O1kVny6xLkxGabo562vfSbQZ0YpiZVQpxmofmpL98G3BvDwYYtFE1b%2Fs5GwFvgNGL5j9wyyMvj8QfwCbIw5tWxhR8d80hUYjnvtsRyuGhlQV%2FfS5ZgO1%2BqZQAoZyI7BPzTp8H%2BHsrMYC5aEQaz7tCJn53tsUlpbSzn3J6d1B24NUebCRc24V9%2B0A2tIVSto9huQT%2FR2qQpkkGkimVSRy6NpNVLjfGz6fXDW%2BNhDlUmrruH3fQFqFkEjJSaP%2ByjA%2F81lzTZGR2RnK556GtgQKA0cvfw5RMBMpZaKSOXmXow%2BTFovYlTeAT%2BXYfnB12Y4pdxas3dkMDLnsVj7CIfOCh23q4rDGl8Q5cg0KhrZ8ECrUnuATt2AfZgeF%2F5W9sERTCiwMa%2BBjqkAbvClLUczF57OsxRo0Es3DIqGHFgSv20%2FO8n9oO3fjtzAHsr4rqZnS8phWAEFCow6S%2FYfJ4fVZrc2Dunyj6xNgees35RI%2FERfQBk0UEtfQGxPibZROgWJKsSwV8yp4OqnDVVg%2FQua6T%2BIKmUG5QStZGcIr2clQB1h3Lz3s1bk9esYt1KejAef0tTVqIiTLuBxe9p%2Fo841WHvScXEZL%2FIXk1B%2FdRF&X-Amz-Signature=a4f70c27854f5dc0581b1c67a9aca8b6da955e27bffb174710a716c9c1f08d68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33BNYNC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD5e%2BY1nN8XwZbTEOlQXRvvvABAw7Unynko5y1h0HOoNwIhAOXB5gD4Xowyku8nHK6TI%2FCFBXF94d6Vsbhsxcv%2FeIT4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFhvC%2FhqZqdQTpSnkq3AO85PysHP5wOPPGucMOibuNJFATFbZiWzmmZn9rR0fMubPZ5M%2FM2Ymex4jvNaiJTH9RE%2FUMFp2DhsEUIyhVwdRftAiOpXcPNFj44PkKuuzCcgoeNPX5NjNK7Uai7%2BehIzLH6in4lDhj7eGEuaLeny%2BTkkk8DiNM0F%2FVg%2FOOxmPVl5mzUwYrPr8rU5qXGFnh%2FdrHjNWJoCPp8dl5KfjxkXd5oDgj6oQkiNB7Cyz4xnFmWToC2QmW3UWMWeHi74O1kVny6xLkxGabo562vfSbQZ0YpiZVQpxmofmpL98G3BvDwYYtFE1b%2Fs5GwFvgNGL5j9wyyMvj8QfwCbIw5tWxhR8d80hUYjnvtsRyuGhlQV%2FfS5ZgO1%2BqZQAoZyI7BPzTp8H%2BHsrMYC5aEQaz7tCJn53tsUlpbSzn3J6d1B24NUebCRc24V9%2B0A2tIVSto9huQT%2FR2qQpkkGkimVSRy6NpNVLjfGz6fXDW%2BNhDlUmrruH3fQFqFkEjJSaP%2ByjA%2F81lzTZGR2RnK556GtgQKA0cvfw5RMBMpZaKSOXmXow%2BTFovYlTeAT%2BXYfnB12Y4pdxas3dkMDLnsVj7CIfOCh23q4rDGl8Q5cg0KhrZ8ECrUnuATt2AfZgeF%2F5W9sERTCiwMa%2BBjqkAbvClLUczF57OsxRo0Es3DIqGHFgSv20%2FO8n9oO3fjtzAHsr4rqZnS8phWAEFCow6S%2FYfJ4fVZrc2Dunyj6xNgees35RI%2FERfQBk0UEtfQGxPibZROgWJKsSwV8yp4OqnDVVg%2FQua6T%2BIKmUG5QStZGcIr2clQB1h3Lz3s1bk9esYt1KejAef0tTVqIiTLuBxe9p%2Fo841WHvScXEZL%2FIXk1B%2FdRF&X-Amz-Signature=84952eedd581a68f38c04885ea3462be5ca117e6ad785ff5b2e0d470bdaeef8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
