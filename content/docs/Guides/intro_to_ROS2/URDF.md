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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBBJNMB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAtfv%2B3RV4QIcP%2FBRO4f7IePgJhbVach6tTWwN8uqaWLAiBZsBJRwFOn4zrwIT%2FcvEkTwVrys2A0aQK5T83Dt7B7vCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMnHrhmf2EqIbg0CeDKtwDHuPmyk8OTjI3efIN%2BEPJNc9BHGzXEmbKKb4LDhHWVdjstF%2F20UZgIL59xoh9AeICxjtRyONwFMLXiPHNDgAQrT7UkLbWu%2Ffgx%2BtX43cE57H%2B2ygzcjTfJrU74hjEQLPmGTQAXoF1%2F9zGEz%2FOxZClgygGVc5Y%2BcZ5gzf6IEd63T7Gpg1xJkjtjGSpM%2FcN2khi%2ByDZskOsx4LsD6YT3p5cwINHG6r6EYatkErEwtI3NzWC9BqKd89rHC43uB9qnVA6z7TkmKQ%2B3TCy7dyOKUv8xhyuVo2CcOsyMAB6Q5ic2qWFh1QeRQL2lD8Q%2BIuktiMV2qeU6mzycLBeRE37hNcTjjhDWxgSrHBiUEkIV1INroo%2F6S15aiaM2eDtCtFXz23RQhiZHDmSynpVNuYAl4lYhshcgUJ%2FtOZjryUYFycXwvT45bWuucZiIypVYMuSLwLSB%2BKSBIHkVrvnJ3HVszwJsGAp5FBmABgo7cJvV1JK7PZFKppektT9%2B6KjIshLK%2FUqDhCWh8unDYo8U76NzSdHoxyk1FSNMLFjf44UhmonQt%2BcpS614DCg9GLzzkH0awSRWak95HnJW0xzNiHEc4kHOx%2B3BqGLmhFCClUNepH%2BLEd%2FQ1nu4xgr7XlTJrIw8Y7lwwY6pgFidPLu2nCpHXkpmXX50plTAT459zKl08HxNdrd1GSSw%2FUvqrj3Jy8wG1iWpOhCM1qjQD%2FsRmRl269OXWzntJ52ZIciT%2BhaF7P6LllM0b9hNMAqqxoz8sQh7AmNPyxbocsgRsfuh5dgpz%2FoGgVYeyo6GV55lXovT5IJJJiemJwt%2FGWa0rHprXDMebTmGRhUy2lSqfQN1AiLjNbjl6VuO1L%2FatyLWPjH&X-Amz-Signature=b89f1c10c774a7802fb022549612108d2bb029a9a920321c04787cae064f5f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBBJNMB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAtfv%2B3RV4QIcP%2FBRO4f7IePgJhbVach6tTWwN8uqaWLAiBZsBJRwFOn4zrwIT%2FcvEkTwVrys2A0aQK5T83Dt7B7vCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMnHrhmf2EqIbg0CeDKtwDHuPmyk8OTjI3efIN%2BEPJNc9BHGzXEmbKKb4LDhHWVdjstF%2F20UZgIL59xoh9AeICxjtRyONwFMLXiPHNDgAQrT7UkLbWu%2Ffgx%2BtX43cE57H%2B2ygzcjTfJrU74hjEQLPmGTQAXoF1%2F9zGEz%2FOxZClgygGVc5Y%2BcZ5gzf6IEd63T7Gpg1xJkjtjGSpM%2FcN2khi%2ByDZskOsx4LsD6YT3p5cwINHG6r6EYatkErEwtI3NzWC9BqKd89rHC43uB9qnVA6z7TkmKQ%2B3TCy7dyOKUv8xhyuVo2CcOsyMAB6Q5ic2qWFh1QeRQL2lD8Q%2BIuktiMV2qeU6mzycLBeRE37hNcTjjhDWxgSrHBiUEkIV1INroo%2F6S15aiaM2eDtCtFXz23RQhiZHDmSynpVNuYAl4lYhshcgUJ%2FtOZjryUYFycXwvT45bWuucZiIypVYMuSLwLSB%2BKSBIHkVrvnJ3HVszwJsGAp5FBmABgo7cJvV1JK7PZFKppektT9%2B6KjIshLK%2FUqDhCWh8unDYo8U76NzSdHoxyk1FSNMLFjf44UhmonQt%2BcpS614DCg9GLzzkH0awSRWak95HnJW0xzNiHEc4kHOx%2B3BqGLmhFCClUNepH%2BLEd%2FQ1nu4xgr7XlTJrIw8Y7lwwY6pgFidPLu2nCpHXkpmXX50plTAT459zKl08HxNdrd1GSSw%2FUvqrj3Jy8wG1iWpOhCM1qjQD%2FsRmRl269OXWzntJ52ZIciT%2BhaF7P6LllM0b9hNMAqqxoz8sQh7AmNPyxbocsgRsfuh5dgpz%2FoGgVYeyo6GV55lXovT5IJJJiemJwt%2FGWa0rHprXDMebTmGRhUy2lSqfQN1AiLjNbjl6VuO1L%2FatyLWPjH&X-Amz-Signature=381f5f15d8a9d5f524df56f63b438642aebc9d62144bb2f5f9fb8969a983d9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
