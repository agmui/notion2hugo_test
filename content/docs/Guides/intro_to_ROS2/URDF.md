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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TISJYY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZDN8JbQYNkXbl6dDjyz%2Brg2lOYs2Myv9u0YwgvVb7AAiAKBdgjbFdmr45iyuHk8HM%2BSEJqaFL3CfJXpwgXPIvjNir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMt%2BSZ1KVTPicDhGcXKtwDoMseP2V5TZ25rl75iqTG1mk5lDLIAMu5LlID7YdDNiyG6BwSYm7lPYB74NlUtXvcmzWumnpx4dfQA3jlkPjw9elEtpgsYWDnkbSlzeAPbcbjjnS8bxJhS8FqqSLILbyNyGKPzF7mFnPBg7ig2YX95RdMYwgnNJHK2kwvoeFbbawHqJYuE%2BA4UtP1iSvqXTXvIneE8ikkDoC8P9cAM7GmkgaPcaM0pBbu5nQd7YbnzRGL8cDlljaCvzF3VN84EXPu769mHd%2BwK9ReK59CWIm0QNf6hcBHcpujKiWQlly8721X6%2FrcQBONYdfrRvL8Of7u0tTlSpASwWmLbMRc0yLtz5zip%2FtM%2BOkqxIxY6QrBhLIV%2FvBuy%2FoHQPN50WJU4cgF8KltISubUb6bvlGE3%2BPsdgz2wsLNdRlRN%2BEE8MYYIjWsQUAG65UmoEKwn4S%2FlDprTouyWM8VBsrjlvl1YYomYbVgFCbhu%2BU50bu%2F5U9C9qGJnA4gm3r07PCmocr9OyhCbKMbNWgXeibDKnGrdIf0RC8TQc41gnVw2TRdDaAQF%2Fc0o5kXzJzfV8Clt2dBbamB2gKPiq8vJPy6LtOK5fJoj%2F9P1EAhizsGfaB%2Bq0U3sS%2FWjIpUS1IiMFAN6%2FYw2tm5vQY6pgEDbr7cYEApxR%2BMv4BBW%2Bu%2FjZ22z45KKB5ZJgN43x9DDYdJagH2qYDLBz2F6RqTj6Vaw6VeTK8eUHDGaPGigsnrW232%2FENdmj2tn4cU4BpMmjJrQm5rTaMbSDbyXo4j7jsUdx556bz7jUPbK4ePYNqR4jOcjCpNVr6VCqoY5xSVktMbOE%2FSFiE4TpDnNebgC%2Fsg4%2Bkm8%2BUHWyIORPYVUdeCL%2BQ5UsDO&X-Amz-Signature=f981bcae7b2e32c3fb88120eb103a81077cde282540dc81fad676dfccf48bbee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TISJYY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZDN8JbQYNkXbl6dDjyz%2Brg2lOYs2Myv9u0YwgvVb7AAiAKBdgjbFdmr45iyuHk8HM%2BSEJqaFL3CfJXpwgXPIvjNir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMt%2BSZ1KVTPicDhGcXKtwDoMseP2V5TZ25rl75iqTG1mk5lDLIAMu5LlID7YdDNiyG6BwSYm7lPYB74NlUtXvcmzWumnpx4dfQA3jlkPjw9elEtpgsYWDnkbSlzeAPbcbjjnS8bxJhS8FqqSLILbyNyGKPzF7mFnPBg7ig2YX95RdMYwgnNJHK2kwvoeFbbawHqJYuE%2BA4UtP1iSvqXTXvIneE8ikkDoC8P9cAM7GmkgaPcaM0pBbu5nQd7YbnzRGL8cDlljaCvzF3VN84EXPu769mHd%2BwK9ReK59CWIm0QNf6hcBHcpujKiWQlly8721X6%2FrcQBONYdfrRvL8Of7u0tTlSpASwWmLbMRc0yLtz5zip%2FtM%2BOkqxIxY6QrBhLIV%2FvBuy%2FoHQPN50WJU4cgF8KltISubUb6bvlGE3%2BPsdgz2wsLNdRlRN%2BEE8MYYIjWsQUAG65UmoEKwn4S%2FlDprTouyWM8VBsrjlvl1YYomYbVgFCbhu%2BU50bu%2F5U9C9qGJnA4gm3r07PCmocr9OyhCbKMbNWgXeibDKnGrdIf0RC8TQc41gnVw2TRdDaAQF%2Fc0o5kXzJzfV8Clt2dBbamB2gKPiq8vJPy6LtOK5fJoj%2F9P1EAhizsGfaB%2Bq0U3sS%2FWjIpUS1IiMFAN6%2FYw2tm5vQY6pgEDbr7cYEApxR%2BMv4BBW%2Bu%2FjZ22z45KKB5ZJgN43x9DDYdJagH2qYDLBz2F6RqTj6Vaw6VeTK8eUHDGaPGigsnrW232%2FENdmj2tn4cU4BpMmjJrQm5rTaMbSDbyXo4j7jsUdx556bz7jUPbK4ePYNqR4jOcjCpNVr6VCqoY5xSVktMbOE%2FSFiE4TpDnNebgC%2Fsg4%2Bkm8%2BUHWyIORPYVUdeCL%2BQ5UsDO&X-Amz-Signature=2836d283c00c60f79188f8a7fda986421686943c00823141ec166b78101bf495&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
