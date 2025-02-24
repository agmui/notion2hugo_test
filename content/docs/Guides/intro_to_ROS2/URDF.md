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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZLMQCW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHwgFTSabYf%2BzFNP2n2zG5zp5sUGD6MIglG3vT4pla9AiBjAm%2Bxa8MRD5QxqofAPLqLbmNQn6Nwjcg2OzciWPlaJir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXh%2BmTU4widiPKjN5KtwDOR5kvHrPT26O1u9P0mSjmTe77Odl7B320FzUbCb3Uqj4tJY8YW9I1WJuCUgQ0E%2FaEdp%2Fe19Q7Twneb3TOE0xZK2ZR9SXzjtrjJCGFhtAqYN9xit7BN6Gx4WZy6Wo4YOaMMquTjYlY9edWJsv9YRDWqyk%2BfppN7ocBvXCVRjsxtSxI%2FXnrOg7%2Bs2Koxz1quJ8qUAMEV5GvaMA%2FQceKMreBShwwbT9QZwcS7Uooq81Yj9T0tWU0GVpVNXZrh7Ac0HznQcXeTEZy%2Fuat65UH8UMQqM5ZnACIybV%2F0Ro%2B0MrWr0eg9Yh37g6Jupjpq%2BknDaBKrdFB0SS%2FgZeOJoVUXH97MNpbRV46Bl6iJz%2Be%2BVVNJkFEI%2Fmq7cb2QcKmTud8B2MUvoyE60k36f%2Fwz51SWoF2zTd5Jo0jZLhMounCQx%2FeyLZR%2B6Wlp7uaIlWl6Gou7iPuuKj7%2Bpw9P00gbFtmgWsnYCnfN%2FcC9acMx2doX5v85k3guxmkMSHNsSfaqyhiq2LzX7Pj60FOF7vywhTkIfwfSP4DzxEVgZ0m0kNywXaV7%2FN2gdWxAj%2Brfbh3P4EjOZfRaeH2b6UgDFaa%2B04%2B0pDSiuRDEiHRehZB1KzWTAvAXp7tnOCbK%2FIXEdNpdgw1evwvQY6pgFRyKF9CgzXglKhEINOWz8tslvR%2FSnzqJ0WWK9NVn355tj6SxWBfBRwmdkRL5XZmkOrEQHoxOKF8gxwFhvD9C%2B%2B6m5gyJemD5YJ7UhnN1r%2BS%2BeKi4Uh2OhgrzpqzCp13etpkIpWvJOsPV0EjKDkzx4Jrpgm6PdeXptz9U%2BJHTi0WnJltbtpKMAyYXcqVeTLjnrYKQ%2F%2BTZTh0LSVgu2xqxzp4Nce95OU&X-Amz-Signature=ad4fc075b5cb7399ce92a610f43dfc776c5004879bdf85515d9745f26b7d973c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZLMQCW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHwgFTSabYf%2BzFNP2n2zG5zp5sUGD6MIglG3vT4pla9AiBjAm%2Bxa8MRD5QxqofAPLqLbmNQn6Nwjcg2OzciWPlaJir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXh%2BmTU4widiPKjN5KtwDOR5kvHrPT26O1u9P0mSjmTe77Odl7B320FzUbCb3Uqj4tJY8YW9I1WJuCUgQ0E%2FaEdp%2Fe19Q7Twneb3TOE0xZK2ZR9SXzjtrjJCGFhtAqYN9xit7BN6Gx4WZy6Wo4YOaMMquTjYlY9edWJsv9YRDWqyk%2BfppN7ocBvXCVRjsxtSxI%2FXnrOg7%2Bs2Koxz1quJ8qUAMEV5GvaMA%2FQceKMreBShwwbT9QZwcS7Uooq81Yj9T0tWU0GVpVNXZrh7Ac0HznQcXeTEZy%2Fuat65UH8UMQqM5ZnACIybV%2F0Ro%2B0MrWr0eg9Yh37g6Jupjpq%2BknDaBKrdFB0SS%2FgZeOJoVUXH97MNpbRV46Bl6iJz%2Be%2BVVNJkFEI%2Fmq7cb2QcKmTud8B2MUvoyE60k36f%2Fwz51SWoF2zTd5Jo0jZLhMounCQx%2FeyLZR%2B6Wlp7uaIlWl6Gou7iPuuKj7%2Bpw9P00gbFtmgWsnYCnfN%2FcC9acMx2doX5v85k3guxmkMSHNsSfaqyhiq2LzX7Pj60FOF7vywhTkIfwfSP4DzxEVgZ0m0kNywXaV7%2FN2gdWxAj%2Brfbh3P4EjOZfRaeH2b6UgDFaa%2B04%2B0pDSiuRDEiHRehZB1KzWTAvAXp7tnOCbK%2FIXEdNpdgw1evwvQY6pgFRyKF9CgzXglKhEINOWz8tslvR%2FSnzqJ0WWK9NVn355tj6SxWBfBRwmdkRL5XZmkOrEQHoxOKF8gxwFhvD9C%2B%2B6m5gyJemD5YJ7UhnN1r%2BS%2BeKi4Uh2OhgrzpqzCp13etpkIpWvJOsPV0EjKDkzx4Jrpgm6PdeXptz9U%2BJHTi0WnJltbtpKMAyYXcqVeTLjnrYKQ%2F%2BTZTh0LSVgu2xqxzp4Nce95OU&X-Amz-Signature=60a23f4a55a379f509b38edba52cc8fb642eb2db13b5460fade03298bf97a56c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
