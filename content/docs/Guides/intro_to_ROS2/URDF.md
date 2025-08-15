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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQQTKIW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHZwtTMrn8fzvfzNrdmGaEDEP4jec%2F7234UwBsG9oa9yAiEAlqLhBsH%2B7%2FQ1gjGr8Vz9U1TXFHQAiNPMhWr0KZWd85sq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfIelmMwvi2oVBe9yrcA6Tw9v7B2Qkau%2B%2FdoflMdwdD9bEMFnYm1g1eBQXjcW8ZbnaL9cFjx1Oee%2BmsEZxXQbhQYbodWBTGOUxJpGYTRr6VECMs2OVO8yq3l2JDwmXtuWrC4I%2BLvl6YBheIKAQctmZKOjADvAo86ULk%2FIpgllwW2t2UoCT9S8zS4%2FzgMj4xLvhvy10ArCdhuA1JuAKU7MbtbioMM3Sa84hnEmef0piBWAWU282WCroD6wh2HFAyaZmI53AC5WR5Nuqpd8hgjbQK701DmMFfiCyNZC3BscKft1t5IOVgXzpr6DuiPfrJIyXIk8pI9gCwTxbCr2B3Jpnt6KVu7twOncBkY3ERjOvaJseW4dmhdkkakeali4yP4agB8zFwYYYLoQXqzndJSMBFNn4C1Nyck54d1O85S1G98MhfKTUy5SfO%2Bapx8AW8u0Rk6v1p6B%2BMHljfxL2NDxBfFODRVkhmOKjz%2BHRumV278Bm2Qg6cRJeVfR8HWsnXxRJEHf77XjVIfQak7M5UmcF6gATvHa2uez3jSg2LEebhBOMV8ROfQn6NcGlzsVF3amtT6IYYfkyd2LM2C0%2BCb5Q6mASXuQIqCUwn1aUDipv0hTyWoo2J0Q1sduC9Tq2JUKVmaOMPB3MvoHKzMNui%2BsQGOqUBYKA86R5HJy3Vj1ZLlYQ6VXrfNptx7NlzmyzXSbnrn%2BfbjiHeS1RwnvApqkXqVvxYcXliuPvasI9YjZahA%2BSZMPuFygDqlz6WGmh59HNCOE0XZGsUu0BJMt1z6zAfTck4Iep%2BZy9aFoXrTDBFU7Rr89%2ByOz2n%2FGOi%2BiGN3zt3GZp8HJX4Rb%2FO4sOIXYDZg0tOiOcyugH9YQ6rtRk3RSEZD4bMyHHE&X-Amz-Signature=107681234f5b2a262bcaf82eb57a60de264d794a69090c049de2602b9bb00a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQQTKIW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHZwtTMrn8fzvfzNrdmGaEDEP4jec%2F7234UwBsG9oa9yAiEAlqLhBsH%2B7%2FQ1gjGr8Vz9U1TXFHQAiNPMhWr0KZWd85sq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfIelmMwvi2oVBe9yrcA6Tw9v7B2Qkau%2B%2FdoflMdwdD9bEMFnYm1g1eBQXjcW8ZbnaL9cFjx1Oee%2BmsEZxXQbhQYbodWBTGOUxJpGYTRr6VECMs2OVO8yq3l2JDwmXtuWrC4I%2BLvl6YBheIKAQctmZKOjADvAo86ULk%2FIpgllwW2t2UoCT9S8zS4%2FzgMj4xLvhvy10ArCdhuA1JuAKU7MbtbioMM3Sa84hnEmef0piBWAWU282WCroD6wh2HFAyaZmI53AC5WR5Nuqpd8hgjbQK701DmMFfiCyNZC3BscKft1t5IOVgXzpr6DuiPfrJIyXIk8pI9gCwTxbCr2B3Jpnt6KVu7twOncBkY3ERjOvaJseW4dmhdkkakeali4yP4agB8zFwYYYLoQXqzndJSMBFNn4C1Nyck54d1O85S1G98MhfKTUy5SfO%2Bapx8AW8u0Rk6v1p6B%2BMHljfxL2NDxBfFODRVkhmOKjz%2BHRumV278Bm2Qg6cRJeVfR8HWsnXxRJEHf77XjVIfQak7M5UmcF6gATvHa2uez3jSg2LEebhBOMV8ROfQn6NcGlzsVF3amtT6IYYfkyd2LM2C0%2BCb5Q6mASXuQIqCUwn1aUDipv0hTyWoo2J0Q1sduC9Tq2JUKVmaOMPB3MvoHKzMNui%2BsQGOqUBYKA86R5HJy3Vj1ZLlYQ6VXrfNptx7NlzmyzXSbnrn%2BfbjiHeS1RwnvApqkXqVvxYcXliuPvasI9YjZahA%2BSZMPuFygDqlz6WGmh59HNCOE0XZGsUu0BJMt1z6zAfTck4Iep%2BZy9aFoXrTDBFU7Rr89%2ByOz2n%2FGOi%2BiGN3zt3GZp8HJX4Rb%2FO4sOIXYDZg0tOiOcyugH9YQ6rtRk3RSEZD4bMyHHE&X-Amz-Signature=c6efc3f40da1f48a5c2885682a4e1aa9d912e0fbc4459ae8c2788c4a9aa6737c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
