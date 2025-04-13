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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLGWA2M%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD7UkXkhdi%2BrrgZwQaGltNe0LlqcCOFOvxI0ZMx%2BeV6PQIhAKsAx85UkinICikFmN9w6v7yIPWljAx1nT3rJVoLzrKaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNXxoA%2BSBp%2BdGqEYgq3ANtMk7rj8Yf9JXicgnUTNKlAc0orpLRuQXU2vr2bxt4wG2IlvRlaQev7qGK9QJGZ01f0W%2BAQF9jKzPD9ytWXo1VqyUgeK2OlLkF7ztpjGSsLdB20HK6JtE4aSWyYcrU1eOCdpTCXA%2FIfRlewZnS%2FZznDG0LWtWXRX%2FyeS3zjKlITufQF8RPBRzPkiNaEFViarHHMOkYaHUEqEkLGck0Gqz7ayXQKvapBP4PDBTGXRQBtHtOTNEmtA%2FvmCEeAxsIN1s8rb3cDQZPU11qVSbUkjuTDh70ph6EkoQYODExwRJklk2pLlE0WJiuqsjo%2BdutVt747yj4%2BQg0UnflqWftWguzff3ZXKQHC3MMmzay2XQh2m979lixDSwijq5wxu9emYCiEoFrXme2ZN782Du62h9xs%2Buf1pIFFUtd663CkKvcbGO%2F6bbhHEbMbZwzdqEFvCXeZTnHGbS%2BZRy4YeGFpAAyItFfIZhv7yEQ17PDW9iH2cx3e0JZrfyiCCAeMsA%2BcxcOaCttznqqvbCUaQBrUBSLDOLYlx1u%2BzL9ZFLMq2jovfQVf%2FoLpBOMXkw7NsbdIDnT2qbufFMRFfs6sBXUFCQmoTdvRLkoLPf%2FUjaJFFi4ml%2B%2FAl3BxaqeATv9DjCsve6%2FBjqkAbuUQwReA%2BtZNSl2qOFyQxeQYTIs%2BRSSYsf8vxbWfPvJ1Hg9ua3EbHZh%2FZuO9%2BjC%2BkCLsHN0606W%2FBeaKGmc9zGnZbW61j6%2BhiQp0hjXm0znZQNdnVAPJax7StRWL0xRYuM1KUPVN%2FlgBRa8ndz1LOW1gJmHPH9D8NrnG%2F63c7z8Jum%2Bv2PWxZyoeY3yh%2BVuvlQwxjb%2FmVWZxMO2G0aoRgjRfBNo&X-Amz-Signature=659bcc2307bd261efb16a76975856a4edc7da1f13d0d9ab3e8e9df702fc38681&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLGWA2M%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD7UkXkhdi%2BrrgZwQaGltNe0LlqcCOFOvxI0ZMx%2BeV6PQIhAKsAx85UkinICikFmN9w6v7yIPWljAx1nT3rJVoLzrKaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNXxoA%2BSBp%2BdGqEYgq3ANtMk7rj8Yf9JXicgnUTNKlAc0orpLRuQXU2vr2bxt4wG2IlvRlaQev7qGK9QJGZ01f0W%2BAQF9jKzPD9ytWXo1VqyUgeK2OlLkF7ztpjGSsLdB20HK6JtE4aSWyYcrU1eOCdpTCXA%2FIfRlewZnS%2FZznDG0LWtWXRX%2FyeS3zjKlITufQF8RPBRzPkiNaEFViarHHMOkYaHUEqEkLGck0Gqz7ayXQKvapBP4PDBTGXRQBtHtOTNEmtA%2FvmCEeAxsIN1s8rb3cDQZPU11qVSbUkjuTDh70ph6EkoQYODExwRJklk2pLlE0WJiuqsjo%2BdutVt747yj4%2BQg0UnflqWftWguzff3ZXKQHC3MMmzay2XQh2m979lixDSwijq5wxu9emYCiEoFrXme2ZN782Du62h9xs%2Buf1pIFFUtd663CkKvcbGO%2F6bbhHEbMbZwzdqEFvCXeZTnHGbS%2BZRy4YeGFpAAyItFfIZhv7yEQ17PDW9iH2cx3e0JZrfyiCCAeMsA%2BcxcOaCttznqqvbCUaQBrUBSLDOLYlx1u%2BzL9ZFLMq2jovfQVf%2FoLpBOMXkw7NsbdIDnT2qbufFMRFfs6sBXUFCQmoTdvRLkoLPf%2FUjaJFFi4ml%2B%2FAl3BxaqeATv9DjCsve6%2FBjqkAbuUQwReA%2BtZNSl2qOFyQxeQYTIs%2BRSSYsf8vxbWfPvJ1Hg9ua3EbHZh%2FZuO9%2BjC%2BkCLsHN0606W%2FBeaKGmc9zGnZbW61j6%2BhiQp0hjXm0znZQNdnVAPJax7StRWL0xRYuM1KUPVN%2FlgBRa8ndz1LOW1gJmHPH9D8NrnG%2F63c7z8Jum%2Bv2PWxZyoeY3yh%2BVuvlQwxjb%2FmVWZxMO2G0aoRgjRfBNo&X-Amz-Signature=90043cd7b620267cdbf62f4475021284fc818d3171080b35da971e293ef87ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
