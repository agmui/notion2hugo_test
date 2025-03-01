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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGV3XDM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHRbjVz00XHrOZuhbzatcJl5%2BzD%2Bjd0C1pUsixdL4iT6AiEA%2BB8IGhhK4fuLjd88wIKN55U3ETgjm5M7e5ZnsJgXGW4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyqneax5j5DHcRdLircA9DI1yimw%2F%2FLCG443DdUXmlTl7dMpiCMDeAm2dhMAzokt5%2FZi%2BfExybI7hni4n7c2oUjRNbbPq4S7DyNzK2xFylmO2ldyOnPVrDzc65kWXGk9uFFVYDBeqA3nE6ZRmZJmM6dfCTbkW4xYx58TWe3NDoWRoCDnc1UTBefp8CP%2F3wYq8uwXqhlmi5FyDQrFf3ANsctVX22iywXYUjuiba1LkrvZfq1%2BXYCQDV7%2F9xRgTawwSaxoOthD2NmYbsom6YzDHmn1ae5MO%2FbtfF4PcMI53Y%2FkWLWeJrjiz4g5YdaKQ9OesZqVwiKKQmlGWntxiPRs346cUfzEjQ9NHSgdemPtYhI%2FdYI32Zvvdspqsp3S2huMziF%2FSnxHi%2F1BYvlHp8fkNtfh2gSLQQlKx%2F24TGJv9cI8IMSfSfryCq2FD4%2Fd4wjGD9HrZPpW7x9k8lXT2BCY7fX6Y%2Bdtad0ymfI6fRcQ%2FYI7ZSAmuuiWTjlbL26CD9gElY9TUKZyd1MLPgQdutaQDmIbR%2B2nDc%2FC%2FudUba44qdvZZkjhNR7tCA3ts3jHFDoy8xZvdI7IqOan7bE6me4w%2Blrgwfh%2FrZ2K7k%2B15j5ztM9y%2FMfEjI3QLi6%2F1F8%2BqUjvuIfJEzM7SJGV3R8MPbGjb4GOqUBso5%2FPlpW%2FY65%2FTGUR6EAxpII%2F00ZBD2dHpkGnrcjh7A7BvxMWFDdxmZIii9iA4Qu%2FUpFe0IHm%2FbPwphO8NvWzJQJjG1ZZN70PJT3PcPIKi1VeAd3IVwZfpym3qsDnsbg1LJPU05Ui%2BtpQ1AXaYVRdCF9PiY4D4OC%2BpUyQ6ExFStIxf2AmRMcVVeMHlv066VxXFejzV1T1bHmsE67oHyuc8CeLc5c&X-Amz-Signature=562038df635ac6b70ab7bde1a2e2339359ba38293e59f1878a5c4e4ab8865a16&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGV3XDM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHRbjVz00XHrOZuhbzatcJl5%2BzD%2Bjd0C1pUsixdL4iT6AiEA%2BB8IGhhK4fuLjd88wIKN55U3ETgjm5M7e5ZnsJgXGW4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyqneax5j5DHcRdLircA9DI1yimw%2F%2FLCG443DdUXmlTl7dMpiCMDeAm2dhMAzokt5%2FZi%2BfExybI7hni4n7c2oUjRNbbPq4S7DyNzK2xFylmO2ldyOnPVrDzc65kWXGk9uFFVYDBeqA3nE6ZRmZJmM6dfCTbkW4xYx58TWe3NDoWRoCDnc1UTBefp8CP%2F3wYq8uwXqhlmi5FyDQrFf3ANsctVX22iywXYUjuiba1LkrvZfq1%2BXYCQDV7%2F9xRgTawwSaxoOthD2NmYbsom6YzDHmn1ae5MO%2FbtfF4PcMI53Y%2FkWLWeJrjiz4g5YdaKQ9OesZqVwiKKQmlGWntxiPRs346cUfzEjQ9NHSgdemPtYhI%2FdYI32Zvvdspqsp3S2huMziF%2FSnxHi%2F1BYvlHp8fkNtfh2gSLQQlKx%2F24TGJv9cI8IMSfSfryCq2FD4%2Fd4wjGD9HrZPpW7x9k8lXT2BCY7fX6Y%2Bdtad0ymfI6fRcQ%2FYI7ZSAmuuiWTjlbL26CD9gElY9TUKZyd1MLPgQdutaQDmIbR%2B2nDc%2FC%2FudUba44qdvZZkjhNR7tCA3ts3jHFDoy8xZvdI7IqOan7bE6me4w%2Blrgwfh%2FrZ2K7k%2B15j5ztM9y%2FMfEjI3QLi6%2F1F8%2BqUjvuIfJEzM7SJGV3R8MPbGjb4GOqUBso5%2FPlpW%2FY65%2FTGUR6EAxpII%2F00ZBD2dHpkGnrcjh7A7BvxMWFDdxmZIii9iA4Qu%2FUpFe0IHm%2FbPwphO8NvWzJQJjG1ZZN70PJT3PcPIKi1VeAd3IVwZfpym3qsDnsbg1LJPU05Ui%2BtpQ1AXaYVRdCF9PiY4D4OC%2BpUyQ6ExFStIxf2AmRMcVVeMHlv066VxXFejzV1T1bHmsE67oHyuc8CeLc5c&X-Amz-Signature=2b98ea4c21e0c9613a4e5f3823552f134437a9352fb8d40dc356e9036d1ca20b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
