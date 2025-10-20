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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM7PNBU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIG26VZaL328gfF7zGtCNrpa4PUSmNUdxvl7zGKe5fg38AiBvqrKOEgXOgDe%2BMP9zKFYu4vgRqlw%2FbQErZwiz9BfqACqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7DM7Q6Dhrh%2FGbpZKtwDj6PzIQEWwusngzXmhpk7DOQMDNINXFZTvk%2BcNDZebDGWwu395il4euOroEA1D%2FK9NFr1chd4TrvUaN3Wr9IwurMKTgrSxvKp%2BxQP8P%2BjP2R1Kj3y5mGVte%2FhyVkp6RxY%2FfLe%2B4zoSSPBIuTRoINaSKiPACnXAE%2B%2BB15ZCrghBfVJR9NrFq81SLlIgk35B9f60vQJdtpu3r0EeJ4qJKmDwiB2PS7MXfFpjt%2Bt6hYOzxxoqizBJ7ZM2fuStSyAeiucKkHRdf94GRJSU8G7dyH0wVNO%2BKMDyBxElPDaeurHixXPtJRYnUO6J8RD40qBUGqXbNrSzA1nxWATE8G7TlWD507vB01Xsfd009efXXqat25CEOlE0J4QvZKA%2B9Cs2aHcdYJI2XXv0XpCezu24t6cyvs57UErTfY6KT%2BUyVqItDiXu%2B3yB06jRyJjU37SJfpWMoCtQbdjQTc9D9w5%2FhbZL8VmD5CxoEPcU5qHPzUXcmTZyl3D3sPWOidrhHpex8gOZaVVmgQDViPTHARI7He8DZjOPjNbEDic6GIVdXi%2BwKdA2CSCXO3Id5vYIp0JIUGC0bbO%2B73WgOzKpgCummaA9HaosnU60wLpAX0FNdIhVOHxkihTSXCiWf0KS9swjYnWxwY6pgGyjNSqaYYtoc3Z3KnbYWa7mB0zxAu9SnMOKqZMfSaaPvP2kQC4dht1iIfPaK%2BwoCTkT9CBhEXcD87mwgKcdlGlRwuXD%2Bz%2FWh4BL%2B5K20wvJ6rPp%2FKYXWi8Mq%2BvwIpTMdxbBjkRBGQ0my%2FnD1NFkftbHV24N8G%2FjAHxrqtquu2UpsFaPlGWHSSTDF69ScXy55i%2B5GHjAGV4v%2FgXimfzfdpuauYOg5MQ&X-Amz-Signature=474415292e989189c587f4adcd24138bbd3ae0e873bfe816c1018bae57fb8f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM7PNBU%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIG26VZaL328gfF7zGtCNrpa4PUSmNUdxvl7zGKe5fg38AiBvqrKOEgXOgDe%2BMP9zKFYu4vgRqlw%2FbQErZwiz9BfqACqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7DM7Q6Dhrh%2FGbpZKtwDj6PzIQEWwusngzXmhpk7DOQMDNINXFZTvk%2BcNDZebDGWwu395il4euOroEA1D%2FK9NFr1chd4TrvUaN3Wr9IwurMKTgrSxvKp%2BxQP8P%2BjP2R1Kj3y5mGVte%2FhyVkp6RxY%2FfLe%2B4zoSSPBIuTRoINaSKiPACnXAE%2B%2BB15ZCrghBfVJR9NrFq81SLlIgk35B9f60vQJdtpu3r0EeJ4qJKmDwiB2PS7MXfFpjt%2Bt6hYOzxxoqizBJ7ZM2fuStSyAeiucKkHRdf94GRJSU8G7dyH0wVNO%2BKMDyBxElPDaeurHixXPtJRYnUO6J8RD40qBUGqXbNrSzA1nxWATE8G7TlWD507vB01Xsfd009efXXqat25CEOlE0J4QvZKA%2B9Cs2aHcdYJI2XXv0XpCezu24t6cyvs57UErTfY6KT%2BUyVqItDiXu%2B3yB06jRyJjU37SJfpWMoCtQbdjQTc9D9w5%2FhbZL8VmD5CxoEPcU5qHPzUXcmTZyl3D3sPWOidrhHpex8gOZaVVmgQDViPTHARI7He8DZjOPjNbEDic6GIVdXi%2BwKdA2CSCXO3Id5vYIp0JIUGC0bbO%2B73WgOzKpgCummaA9HaosnU60wLpAX0FNdIhVOHxkihTSXCiWf0KS9swjYnWxwY6pgGyjNSqaYYtoc3Z3KnbYWa7mB0zxAu9SnMOKqZMfSaaPvP2kQC4dht1iIfPaK%2BwoCTkT9CBhEXcD87mwgKcdlGlRwuXD%2Bz%2FWh4BL%2B5K20wvJ6rPp%2FKYXWi8Mq%2BvwIpTMdxbBjkRBGQ0my%2FnD1NFkftbHV24N8G%2FjAHxrqtquu2UpsFaPlGWHSSTDF69ScXy55i%2B5GHjAGV4v%2FgXimfzfdpuauYOg5MQ&X-Amz-Signature=16e5732dfd9eb825db41c81a8a4e2228d44cf7b5f8167e0d9115bef01f524899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
