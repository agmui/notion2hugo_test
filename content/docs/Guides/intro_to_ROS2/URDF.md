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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAK4QVMY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDMmqQh%2BcBqtU31SK3K317%2B32A%2BhCjXZVjJSVM5vwBvkAIhAMhnEgIu%2F9i9yB8znqs45x%2BKO7IBjYPaM%2FUYbXo2iwnSKv8DCHMQABoMNjM3NDIzMTgzODA1IgxBSWMFB%2FCJaizPNFwq3APYL0qEYc9Igv1jq1p4LqZYzNokTKZBzu7zY70A3KzmzYluXK9X8V6VMTcXVahUyS8ixymx3c%2B1l8pFumNy61IfSVqLh2FgBEQZbgi6QKMiG5d1QGMDJvJsbFKUmEdLiC6hdUKgtrZYJkPEeMJXhcUJ7qEWAJun9M1os3rNXoFmfwcyyDdqTiXSyKkzxQSVuzgd3tU1mwoOZ0wju4S%2Fqs7%2FQ5276efG7JmEjH5JSFaESCREbH2VG2qJJO2W2TYXFSoQfgcgu8QOjF89cxVFguwLz4eoJZMvqMQPLsxm%2B7tuudaTEl4jjZVD93hBHBIR%2BK2CmzLvo5nIcAWT0xdg2uQVKIsh6hhV2gOlHxf8TORkTARnbE00G43WF%2BvFvTbJWUN7rddRlBm1%2FVAWFfmquRMucsKnGGIia9FzXd9anCalTXvQ2tfdCIOZ6OF2bvNi5Hz4Pk8bZZymHE7aDE7wFx%2B2sMB5S4pUQLqN6Q88%2FdSTCQirXSuVJpeeKUdKiMhfaW1vFOsGDm%2Bu%2Fa1CeEigPso1AW9pBj%2BafKW320CS%2Fs0y%2FL4OgZSH8O95pM0S6C2M%2FChAZhDOtXLd0x%2F9XaCwQIyWUKpkfqt8QKFxJRXWkrd1u7MEZQsU4N8S0dm40DDzi5%2B%2FBjqkATDS9sgqsl3fjdFT6lSgUV8OWCpTMOxE4car9B6JCtOshcg1Q4TWbnoIe9gA1ayJo%2BQYdJxmV6EPPDXMrex3yM4ikwNaMhlwJxeokYG6o%2BWpCE%2FgTD5YA8gWh5Eo0Fc9%2Fl12wkLe9XF%2F%2BTospmLwkaHbzgYeGQHrZ4qpJmkmSLUWROTnoi7J7RCk9VUl1NA0FS0ogazT6Alv5ctPQb0e4pzB24kL&X-Amz-Signature=aee39adee4d01de462cd3bb09d0aaa6effc6044a19842fe7c7031f121a92d8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAK4QVMY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDMmqQh%2BcBqtU31SK3K317%2B32A%2BhCjXZVjJSVM5vwBvkAIhAMhnEgIu%2F9i9yB8znqs45x%2BKO7IBjYPaM%2FUYbXo2iwnSKv8DCHMQABoMNjM3NDIzMTgzODA1IgxBSWMFB%2FCJaizPNFwq3APYL0qEYc9Igv1jq1p4LqZYzNokTKZBzu7zY70A3KzmzYluXK9X8V6VMTcXVahUyS8ixymx3c%2B1l8pFumNy61IfSVqLh2FgBEQZbgi6QKMiG5d1QGMDJvJsbFKUmEdLiC6hdUKgtrZYJkPEeMJXhcUJ7qEWAJun9M1os3rNXoFmfwcyyDdqTiXSyKkzxQSVuzgd3tU1mwoOZ0wju4S%2Fqs7%2FQ5276efG7JmEjH5JSFaESCREbH2VG2qJJO2W2TYXFSoQfgcgu8QOjF89cxVFguwLz4eoJZMvqMQPLsxm%2B7tuudaTEl4jjZVD93hBHBIR%2BK2CmzLvo5nIcAWT0xdg2uQVKIsh6hhV2gOlHxf8TORkTARnbE00G43WF%2BvFvTbJWUN7rddRlBm1%2FVAWFfmquRMucsKnGGIia9FzXd9anCalTXvQ2tfdCIOZ6OF2bvNi5Hz4Pk8bZZymHE7aDE7wFx%2B2sMB5S4pUQLqN6Q88%2FdSTCQirXSuVJpeeKUdKiMhfaW1vFOsGDm%2Bu%2Fa1CeEigPso1AW9pBj%2BafKW320CS%2Fs0y%2FL4OgZSH8O95pM0S6C2M%2FChAZhDOtXLd0x%2F9XaCwQIyWUKpkfqt8QKFxJRXWkrd1u7MEZQsU4N8S0dm40DDzi5%2B%2FBjqkATDS9sgqsl3fjdFT6lSgUV8OWCpTMOxE4car9B6JCtOshcg1Q4TWbnoIe9gA1ayJo%2BQYdJxmV6EPPDXMrex3yM4ikwNaMhlwJxeokYG6o%2BWpCE%2FgTD5YA8gWh5Eo0Fc9%2Fl12wkLe9XF%2F%2BTospmLwkaHbzgYeGQHrZ4qpJmkmSLUWROTnoi7J7RCk9VUl1NA0FS0ogazT6Alv5ctPQb0e4pzB24kL&X-Amz-Signature=bc3d0795483f37d61d13cd9cfb640f475dc85a6cc5b3056ede67c2eff3941323&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
