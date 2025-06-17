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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYYMEH3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FeOreAFvu6d1BJ%2Fey0wL%2FjCeaxwT76NCZ%2FA2E7rA8gIhAOjarhan%2FN7hWroxt1J8keI7SXzVCfXaK4YcmQjFrAdGKv8DCHUQABoMNjM3NDIzMTgzODA1IgxiW2UrQQ3EPdhADsMq3AMw99ud%2FQwHdE0wlKHqGiXSBHkSpy3cwbTnH%2B1VcTboj1F5NHBXme1JQZr7oopevYaso90HwbSSl%2BpFSztt%2Bd7eBx%2FMcBQu6WXWnLPttl1vM9GvYlaYJNByJVFCTTi%2B7A2U56OXdveZoQbTdyWhpIgaAUhK7D1srxXdgq4VKETXbHHb85O55RAajEUnkg5pKfjZSKxpC7qynaanlrnizgw69%2F74VVFLMihLuCYi7KN%2Bd5LN%2F7OWJtfEnEeUEP6EQdyyjC%2FGV76zss%2B0zvHwRh%2FmZXClid79u5G1spUBfkhWAM10Wr71rqRZ1UWxUMg%2Fyf6dCSEvPntPtHs%2BzH99R1FN4UFnQRyjowGhtwxgWaaQQozTRW0jksGwPsOiBQkzXdNCb%2BgRBriOVQOj8OuLSdqSnxeHqxWMp7kdKym0FFHh4foqKO5HyZWr%2Ft9F6%2F9WpnwEZPd9C5KDFz5xw3Bp%2FSKqXdNtoegU%2BdOyZ9jM4lOeqGBKhOQEjmoGGaGZaQCkMJwrZE9hmmbmFjvWdxqKunGLT0wG8KLvjeXLyAc1bbB9bG%2BysjmBtF%2F6X989H1ytJvUT5NwhneNBI%2BKaY1%2BgipPFJlTW%2Fd0z0eRVUqItFW0oIHrp4PGE5oFIjl%2BgrTCpp8XCBjqkARD7rlJymt9cYgiCtuue2TCvXEtVndf8ZBC3U7VwrqRtIfpo3gB171OFdy%2BBU9Uktx7IdVowdNvGDTlpgwQdN%2FQTSMvCEHZd2%2BdrJstczUHjbsLykFgEKFwlENE0RIkzSUaiP4Zu8Hne7tfsgaw%2Bs%2BwvPkvkCRmpu23S5FgeKH7HZBSZwEsQcQgrbUWBPFWyix27LsMnQ5a9Kyy4u%2BEEW%2BY3PuDi&X-Amz-Signature=7b8d097632e9b67bac8d302de2dcba092ced02095630d913f47cec07b2dda8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYYMEH3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FeOreAFvu6d1BJ%2Fey0wL%2FjCeaxwT76NCZ%2FA2E7rA8gIhAOjarhan%2FN7hWroxt1J8keI7SXzVCfXaK4YcmQjFrAdGKv8DCHUQABoMNjM3NDIzMTgzODA1IgxiW2UrQQ3EPdhADsMq3AMw99ud%2FQwHdE0wlKHqGiXSBHkSpy3cwbTnH%2B1VcTboj1F5NHBXme1JQZr7oopevYaso90HwbSSl%2BpFSztt%2Bd7eBx%2FMcBQu6WXWnLPttl1vM9GvYlaYJNByJVFCTTi%2B7A2U56OXdveZoQbTdyWhpIgaAUhK7D1srxXdgq4VKETXbHHb85O55RAajEUnkg5pKfjZSKxpC7qynaanlrnizgw69%2F74VVFLMihLuCYi7KN%2Bd5LN%2F7OWJtfEnEeUEP6EQdyyjC%2FGV76zss%2B0zvHwRh%2FmZXClid79u5G1spUBfkhWAM10Wr71rqRZ1UWxUMg%2Fyf6dCSEvPntPtHs%2BzH99R1FN4UFnQRyjowGhtwxgWaaQQozTRW0jksGwPsOiBQkzXdNCb%2BgRBriOVQOj8OuLSdqSnxeHqxWMp7kdKym0FFHh4foqKO5HyZWr%2Ft9F6%2F9WpnwEZPd9C5KDFz5xw3Bp%2FSKqXdNtoegU%2BdOyZ9jM4lOeqGBKhOQEjmoGGaGZaQCkMJwrZE9hmmbmFjvWdxqKunGLT0wG8KLvjeXLyAc1bbB9bG%2BysjmBtF%2F6X989H1ytJvUT5NwhneNBI%2BKaY1%2BgipPFJlTW%2Fd0z0eRVUqItFW0oIHrp4PGE5oFIjl%2BgrTCpp8XCBjqkARD7rlJymt9cYgiCtuue2TCvXEtVndf8ZBC3U7VwrqRtIfpo3gB171OFdy%2BBU9Uktx7IdVowdNvGDTlpgwQdN%2FQTSMvCEHZd2%2BdrJstczUHjbsLykFgEKFwlENE0RIkzSUaiP4Zu8Hne7tfsgaw%2Bs%2BwvPkvkCRmpu23S5FgeKH7HZBSZwEsQcQgrbUWBPFWyix27LsMnQ5a9Kyy4u%2BEEW%2BY3PuDi&X-Amz-Signature=ee7d03ede4a2c5f999410d651717f366ef493b139bb7b37bbd66930d272390a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
