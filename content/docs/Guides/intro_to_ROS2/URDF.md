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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRNT7PY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb6l2Lk85rPO0SYcRdfh8XZu7xvYnjtN8DB94s0CFyrAIhAKhMDmIN%2FAu5%2B%2FhrSO5xr8kxiWaOu1tOZ4NoysZPQs26KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZ4%2BptmAG1X7BlzQq3APVh1XYUXbGf7y8utEmFsv3oDBY8A0OeFf1RN95QXexiPTk817wqEkSVX821auRic3swJrH0t%2BHitgzJ3%2FgmKk0JDUdTVVm5MHUkebwlciq6wXD%2FPAqSp1N%2Bo0RfwIPSoBggEzJeSp2gLxvfac9xuv%2FJ8ZthCW86NXMJOw%2BHjL9m2l5B2PVCs5dB7twg7BKONDrh%2BjtMhrpPmAZv23fIh%2B2UrSHEUIG0lPTUcpWhgsnLt3kYTOGVLWNbt4iHWKTJQH4jjnVXfBJKU9FP05dk57yVQyXSfMV7JdF8NeouGL5KV4L19hLUi%2FzBrt3qEGyIWLRRgrgIxTRA%2Bh%2FdIy5kcdwM3mqZmDCjvCvfkPAquOUEl%2Fqwu1BVr9Gpn1N55c4GKXHi4XdusWn%2FcMRjyiFzaBIVz79mn9fagnHMZzBYUxgrNUsSk7wCHQRc0r3zw%2BGNfTgbk0aBMRQU%2Blg83bRzN1xn920i86Zi6JmtJpuhJEeNmu9La3bWd9yT0%2FTSE95BDfl1u68cfxJJWblJWF0rQYbHBdukNcTtpw188t2kr78r8aTU%2BhfjY68cez4K12n7h1Yl0qrNEvj3jXWGzF5NB6xwB3dZhT%2Bvmi1hIpYNWWdc1qGJjXNrHe1w8tdXjDZoP%2FCBjqkAcMDhUvi5Q9B0HvITF2tduH3blmR%2FzXcA7AAPZ1M4C8518quW8AUjVKgyQ%2F6x%2B1znQ5QbadKwr5QZQeEgghXrLZhsYBBmBtAjZlEXkUkK%2BBMdaPoY7ULyhQboJDl%2B6G%2FqoeEX0Pmh55tO078mTNRFMTffgq70aoWV6ekscM5DT%2FsoRkN8VsQ%2FW86Vthrz6c%2FGRtr%2BqiA%2FX6Y5YTETI8k%2BX4OvnNa&X-Amz-Signature=ba63db67db1395801876a438fd5a6db41d89ad3511715dfcb225540ccca46c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRNT7PY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb6l2Lk85rPO0SYcRdfh8XZu7xvYnjtN8DB94s0CFyrAIhAKhMDmIN%2FAu5%2B%2FhrSO5xr8kxiWaOu1tOZ4NoysZPQs26KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJZ4%2BptmAG1X7BlzQq3APVh1XYUXbGf7y8utEmFsv3oDBY8A0OeFf1RN95QXexiPTk817wqEkSVX821auRic3swJrH0t%2BHitgzJ3%2FgmKk0JDUdTVVm5MHUkebwlciq6wXD%2FPAqSp1N%2Bo0RfwIPSoBggEzJeSp2gLxvfac9xuv%2FJ8ZthCW86NXMJOw%2BHjL9m2l5B2PVCs5dB7twg7BKONDrh%2BjtMhrpPmAZv23fIh%2B2UrSHEUIG0lPTUcpWhgsnLt3kYTOGVLWNbt4iHWKTJQH4jjnVXfBJKU9FP05dk57yVQyXSfMV7JdF8NeouGL5KV4L19hLUi%2FzBrt3qEGyIWLRRgrgIxTRA%2Bh%2FdIy5kcdwM3mqZmDCjvCvfkPAquOUEl%2Fqwu1BVr9Gpn1N55c4GKXHi4XdusWn%2FcMRjyiFzaBIVz79mn9fagnHMZzBYUxgrNUsSk7wCHQRc0r3zw%2BGNfTgbk0aBMRQU%2Blg83bRzN1xn920i86Zi6JmtJpuhJEeNmu9La3bWd9yT0%2FTSE95BDfl1u68cfxJJWblJWF0rQYbHBdukNcTtpw188t2kr78r8aTU%2BhfjY68cez4K12n7h1Yl0qrNEvj3jXWGzF5NB6xwB3dZhT%2Bvmi1hIpYNWWdc1qGJjXNrHe1w8tdXjDZoP%2FCBjqkAcMDhUvi5Q9B0HvITF2tduH3blmR%2FzXcA7AAPZ1M4C8518quW8AUjVKgyQ%2F6x%2B1znQ5QbadKwr5QZQeEgghXrLZhsYBBmBtAjZlEXkUkK%2BBMdaPoY7ULyhQboJDl%2B6G%2FqoeEX0Pmh55tO078mTNRFMTffgq70aoWV6ekscM5DT%2FsoRkN8VsQ%2FW86Vthrz6c%2FGRtr%2BqiA%2FX6Y5YTETI8k%2BX4OvnNa&X-Amz-Signature=4f46f656086129ee64cb4794165db83f9b621dc33ede94fedb62231cb942824e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
