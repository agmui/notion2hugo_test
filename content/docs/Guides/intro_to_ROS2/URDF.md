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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCQK3QC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD1RwiXqNVAfEtqi8Bj95KAp5yOjQFa4mJ0qbm8jK2SfgIhAK8%2B4dMhFdI64DbhMWj%2BQvSsYMDfZ6kN%2F8xxYex4Mw2qKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJx%2FgRFjvTDz%2BN2Yq3ANRRdqOizHbAprkVR7%2BlWa7iD4TJSzE%2B1hOv5Ur%2Bda1V1XcLC8%2BjgGNICiyEPbpM4VUJaiIk8X4htCF3S0tY42jAiCtBv7SHPTeRKV6nNwA2ZYcj13vK6ZLzrhHmA6d93qXIB%2BAQ1H0VAwc1j1REzUfRdhlu81IUHTKeSNrRlk6p1i816q6MRK1G7hPeS6jj10Waah%2Foe5sKrnh%2BmtKlpwHmzzyegDqvQTr3w%2FBTATLGHwFVns7hwK1MC6SrkP8qUleFlrV3dyu3XHY2JvkgeQgace8FHSVDMJvsQnQz%2BT9Uj2lQegW%2FQzEZh0TBSGWd6NsQmJ%2BQfDovHBaTiGbhZ2CwnsyZjYKf936UMUcU5W7z0AqWqI3rqkGjXqDtDUtvZDIduphbSV3KlS66uHC8B8J8z2VeVJGPMGZS1tAzMjSoBYtvYP70AqC0m%2BMBKxj5tSj5gBfyFikez0W4PWYJJz2FRjIFLwVaNLpODMovWB0RemxyQZEV8PWS1nMiMkRLqEEipCq8hEY7ND0CNgEjSniZZZOLmbHkXfyIU88uM2APpSx1colUqGWYH8qV8NiZ%2BAZBJD4civN%2B0PzdjY5Jo%2B10lpUCKZ8ldV5b47unxifBk6jvu%2Fq%2BMjMargWqjDau7nBBjqkAUc1ifE5m9LEkvRSStEmucKl6%2BVRbdXsN7Gl%2FNUBNgqXWgAE6h8fORZpVDvNbmRLoajO1hiTCroSbVYC9RFy85eHAhH8jB9eRwabUk%2F5kj5d7fN%2FNfOPIxiy6RvGvMij6A2FwIyw41FU1y6dUzJNorb8lgbIChD72L3odL5ukcXtGJu6k1hDA8l8x%2B7zOYY3zNpESRbG%2BU5NP3wQO69mBuTs5suG&X-Amz-Signature=487693fabf4a6b3eb41e96332ff09bede5b8cea9614420cde7ccd5789bd1699e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLCQK3QC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD1RwiXqNVAfEtqi8Bj95KAp5yOjQFa4mJ0qbm8jK2SfgIhAK8%2B4dMhFdI64DbhMWj%2BQvSsYMDfZ6kN%2F8xxYex4Mw2qKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmJx%2FgRFjvTDz%2BN2Yq3ANRRdqOizHbAprkVR7%2BlWa7iD4TJSzE%2B1hOv5Ur%2Bda1V1XcLC8%2BjgGNICiyEPbpM4VUJaiIk8X4htCF3S0tY42jAiCtBv7SHPTeRKV6nNwA2ZYcj13vK6ZLzrhHmA6d93qXIB%2BAQ1H0VAwc1j1REzUfRdhlu81IUHTKeSNrRlk6p1i816q6MRK1G7hPeS6jj10Waah%2Foe5sKrnh%2BmtKlpwHmzzyegDqvQTr3w%2FBTATLGHwFVns7hwK1MC6SrkP8qUleFlrV3dyu3XHY2JvkgeQgace8FHSVDMJvsQnQz%2BT9Uj2lQegW%2FQzEZh0TBSGWd6NsQmJ%2BQfDovHBaTiGbhZ2CwnsyZjYKf936UMUcU5W7z0AqWqI3rqkGjXqDtDUtvZDIduphbSV3KlS66uHC8B8J8z2VeVJGPMGZS1tAzMjSoBYtvYP70AqC0m%2BMBKxj5tSj5gBfyFikez0W4PWYJJz2FRjIFLwVaNLpODMovWB0RemxyQZEV8PWS1nMiMkRLqEEipCq8hEY7ND0CNgEjSniZZZOLmbHkXfyIU88uM2APpSx1colUqGWYH8qV8NiZ%2BAZBJD4civN%2B0PzdjY5Jo%2B10lpUCKZ8ldV5b47unxifBk6jvu%2Fq%2BMjMargWqjDau7nBBjqkAUc1ifE5m9LEkvRSStEmucKl6%2BVRbdXsN7Gl%2FNUBNgqXWgAE6h8fORZpVDvNbmRLoajO1hiTCroSbVYC9RFy85eHAhH8jB9eRwabUk%2F5kj5d7fN%2FNfOPIxiy6RvGvMij6A2FwIyw41FU1y6dUzJNorb8lgbIChD72L3odL5ukcXtGJu6k1hDA8l8x%2B7zOYY3zNpESRbG%2BU5NP3wQO69mBuTs5suG&X-Amz-Signature=578b4434397977867a887155e008f03eabcd7ba14e71b3ef24436f19fb861599&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
