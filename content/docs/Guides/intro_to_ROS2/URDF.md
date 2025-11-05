---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WN56ZQE%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMQjgYuGiimIQuFQHEQj0fETNhq0Zln8y8IrSUrt4v4AiEAqTa%2BuDHonDA%2FzMjlFKr%2FKidPhtjIUG0JyLRrQKm%2BDmQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFvbjl22si4palDNQircA%2BVX4mZN4PMY9I%2B07p8hcCm26pVuO10arVSxeM%2Fgl1K061hHiCvd0aFi%2BniW6b%2FO1MPobi47xzFvdO5Sts1eCUj3UAaIr62SrqkMbzdRMHPIBaxRqny4dIkFe7UBgVNJCiyYoIrybIN23AWeFozC44357SOdGHDEDobb6h2PmnHQ4NsG%2BbtmBojvbVuuVuSvMliIlXuPDY6MmNmnxtMdACJQH8GWTb%2FBYQwFJDRTS%2FooRMuKhbj%2Babz%2F%2Fn2%2BzT2A7a%2BvLs1VZwrC8Rn2io7z3Skgej3hSM3voZY7EyF9rDtyjtghvb%2BMfENE22I%2FosAe7IQaLrZ2rk%2B4HmlX9uG6Z9AYztah%2FXeX9wWSj%2BSrkwJcSuLuEn3hng6XMLg9VLmsOp1ttUc6UAKRgCVNRZwk3yVPrFdwP4ZscWp32eOnUoYo1VPePlGy4GmMYNar01q35bM%2Fu1INlGVw49LOaDH4%2Fn1AKO%2Fc%2BrdrW7BSxjFUxGf6BY1sSj%2BkR3R5XcVx%2B4JMUWiUS6TmqlJGGOXCOGZJWBH55fIZCHraVJtkvDEBIexFL9N%2FOIoByUEw3x065PuHrylwCD%2FvTi5eK69qeGI%2Fi6dtWO7wORg%2BMZ9AoByXWE3cTXjDEzQAEkHZX7AsMOvdqcgGOqUBYmSNRIzI85GsyyBvIlnbv%2FNvD6DBj4deaCf%2BDS8292V1wKZubVlvzQYqZ4xnn%2Bfb9OSb4HXh5QTzXiCZs%2BQYj9w45GKDcmETSWO79THZj2e66F7Fj6YDWejRL7Va%2FNSgV31gnnKoJXfQmOhL%2BiNO583IqT49YxnYKPauVhu0tCymftukcjt7eV31ZjNshqLl8aiKpk8EW4mEBhUR404BKSzsCoQG&X-Amz-Signature=27d6c17b166e4c293f3e19b258b41ccda7758176cfb10a3ee2b403c00c87bd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WN56ZQE%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMQjgYuGiimIQuFQHEQj0fETNhq0Zln8y8IrSUrt4v4AiEAqTa%2BuDHonDA%2FzMjlFKr%2FKidPhtjIUG0JyLRrQKm%2BDmQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFvbjl22si4palDNQircA%2BVX4mZN4PMY9I%2B07p8hcCm26pVuO10arVSxeM%2Fgl1K061hHiCvd0aFi%2BniW6b%2FO1MPobi47xzFvdO5Sts1eCUj3UAaIr62SrqkMbzdRMHPIBaxRqny4dIkFe7UBgVNJCiyYoIrybIN23AWeFozC44357SOdGHDEDobb6h2PmnHQ4NsG%2BbtmBojvbVuuVuSvMliIlXuPDY6MmNmnxtMdACJQH8GWTb%2FBYQwFJDRTS%2FooRMuKhbj%2Babz%2F%2Fn2%2BzT2A7a%2BvLs1VZwrC8Rn2io7z3Skgej3hSM3voZY7EyF9rDtyjtghvb%2BMfENE22I%2FosAe7IQaLrZ2rk%2B4HmlX9uG6Z9AYztah%2FXeX9wWSj%2BSrkwJcSuLuEn3hng6XMLg9VLmsOp1ttUc6UAKRgCVNRZwk3yVPrFdwP4ZscWp32eOnUoYo1VPePlGy4GmMYNar01q35bM%2Fu1INlGVw49LOaDH4%2Fn1AKO%2Fc%2BrdrW7BSxjFUxGf6BY1sSj%2BkR3R5XcVx%2B4JMUWiUS6TmqlJGGOXCOGZJWBH55fIZCHraVJtkvDEBIexFL9N%2FOIoByUEw3x065PuHrylwCD%2FvTi5eK69qeGI%2Fi6dtWO7wORg%2BMZ9AoByXWE3cTXjDEzQAEkHZX7AsMOvdqcgGOqUBYmSNRIzI85GsyyBvIlnbv%2FNvD6DBj4deaCf%2BDS8292V1wKZubVlvzQYqZ4xnn%2Bfb9OSb4HXh5QTzXiCZs%2BQYj9w45GKDcmETSWO79THZj2e66F7Fj6YDWejRL7Va%2FNSgV31gnnKoJXfQmOhL%2BiNO583IqT49YxnYKPauVhu0tCymftukcjt7eV31ZjNshqLl8aiKpk8EW4mEBhUR404BKSzsCoQG&X-Amz-Signature=391e6591eb60d90acaf5ef5d9aa109d687d6bf99f874247c1392dd423176b4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
