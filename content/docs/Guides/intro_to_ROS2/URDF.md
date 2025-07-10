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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIAOEM3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrXn7lSihyo%2Bd8BHrDcO02Qr4kOJ7Qn0hUcZxvBlE27AiAmAGOT4Md%2BzcC0FrLPgubXs7v%2BYRyaoYQOO09fDUT8%2ByqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmwhJhHNc7ZEVzegLKtwDmMtbLsSQ92nmAHjuLgQrOwEJUfPfnMxUPD8lV20aIDxCmsFaWQpWq6awArrIGauOFKXLhbKHloSJOkvBjXJlbiG887HRuBG8ANGstrLBsYEzo90%2FGdIzeHchu7R2Juy7PH9%2BY6aDAxX%2Fz7U2K9yB%2BhY4AopnGmMiKK5xcNhxe4CAj%2FgKxXRVrJw%2FCb%2BE%2Bm0ZAukyZIfhy4hm8fqkruqbYcuXKW18M9Ncg%2FeaOV6SDSAnBEsGF7OYvXtTmgfAbwquyMvpm4tlrAbhpsaWVp7y4l1Pp9kbfCAORDRA4bHbwOYOcBkWs07rsi2uahDmPD0a8J86b48NECaSBhbqowKW3jsUJhqqiZikF5TVw2aN781FilIhxohHfX%2FzjfBKGn53QvC4DPkUL7mcotCTvbuBX7CBAnK%2FNA3W8BMMIo41jILRJHDpVa3%2BNVCc06VtRAf6pxiDGm71qcI93jDpnMqj1niLfKGNVVu9luEUCanYbiUr4tMowl%2BaMDEYdfCqVvec%2B4Iskx8r%2Bk9ednfEPGeLfUm2Z51pcS0Oyd3Skhy%2FS2yhezb0D9feawlg23YXrSw0n1Cq1KnRHraCwE1W5nGI7mtk6mxPFEX2eBgE1b%2B8kSjyVbzyU8aG1TcxHsIwlM3AwwY6pgEn88RBRx1sY3idLog4hh2OJNQX7lhVdNP3WJI4P2sdfZhnEuSHA%2BRE%2FbJh5GI564EYwOOsVHG3koQ10FdF14iFFt%2BWT3%2BZmX7TfgrH3XV%2B%2Fb2to6NadEY%2FIdRL7%2BbaKZ%2BnuABUGGyYC8iMf2%2B%2FQLtaQVw04nEt1Z2LrQDgPRA1hjuyZY1FSHZUURIMi8qUm7IjDIe6LKQGrIcuTv9yt54GQDjDnI9u&X-Amz-Signature=a914a1380ac9071de5016b7ade9a5ab027384cdca7004e2b0654a9864aa0f79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIAOEM3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrXn7lSihyo%2Bd8BHrDcO02Qr4kOJ7Qn0hUcZxvBlE27AiAmAGOT4Md%2BzcC0FrLPgubXs7v%2BYRyaoYQOO09fDUT8%2ByqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmwhJhHNc7ZEVzegLKtwDmMtbLsSQ92nmAHjuLgQrOwEJUfPfnMxUPD8lV20aIDxCmsFaWQpWq6awArrIGauOFKXLhbKHloSJOkvBjXJlbiG887HRuBG8ANGstrLBsYEzo90%2FGdIzeHchu7R2Juy7PH9%2BY6aDAxX%2Fz7U2K9yB%2BhY4AopnGmMiKK5xcNhxe4CAj%2FgKxXRVrJw%2FCb%2BE%2Bm0ZAukyZIfhy4hm8fqkruqbYcuXKW18M9Ncg%2FeaOV6SDSAnBEsGF7OYvXtTmgfAbwquyMvpm4tlrAbhpsaWVp7y4l1Pp9kbfCAORDRA4bHbwOYOcBkWs07rsi2uahDmPD0a8J86b48NECaSBhbqowKW3jsUJhqqiZikF5TVw2aN781FilIhxohHfX%2FzjfBKGn53QvC4DPkUL7mcotCTvbuBX7CBAnK%2FNA3W8BMMIo41jILRJHDpVa3%2BNVCc06VtRAf6pxiDGm71qcI93jDpnMqj1niLfKGNVVu9luEUCanYbiUr4tMowl%2BaMDEYdfCqVvec%2B4Iskx8r%2Bk9ednfEPGeLfUm2Z51pcS0Oyd3Skhy%2FS2yhezb0D9feawlg23YXrSw0n1Cq1KnRHraCwE1W5nGI7mtk6mxPFEX2eBgE1b%2B8kSjyVbzyU8aG1TcxHsIwlM3AwwY6pgEn88RBRx1sY3idLog4hh2OJNQX7lhVdNP3WJI4P2sdfZhnEuSHA%2BRE%2FbJh5GI564EYwOOsVHG3koQ10FdF14iFFt%2BWT3%2BZmX7TfgrH3XV%2B%2Fb2to6NadEY%2FIdRL7%2BbaKZ%2BnuABUGGyYC8iMf2%2B%2FQLtaQVw04nEt1Z2LrQDgPRA1hjuyZY1FSHZUURIMi8qUm7IjDIe6LKQGrIcuTv9yt54GQDjDnI9u&X-Amz-Signature=5663e34ca4f19f60b22297d90b9b88483a32572bf729bbaafaac0be0f674c14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
