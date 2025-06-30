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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VASYHFM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWD%2FkKwzxo9%2BZz2EIDMbVeYXAgIta7IzeauPpOMxGZ1AiB504MBFdGYrdYraLhUJr1fHADmjkxOhyo3wMh3IlMQxCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMay7N18uqQ%2Bmt9k9gKtwDUKZ0pvdBGFFJanmFTJFCm3xJQhGJaSSFa9hkctHaCfp5MH30NAq3ex7ALULIp7lOOcUYHknS3P%2F7%2FKZrOn470ZvTTNj9St7j0geIRyXathXYpSgI5YaaljjX7ORCUMp%2FMW3wHOBYtfYVsg88xTNuA8G5kzri5E0CMTYIshAT2SFkl2uIRJvz%2BOI%2FZb%2F6SYnCtLx4hUaCO%2FKyPD5Ay43ZsH75qtS2qBms7SLVqP8J%2FZo9%2Fr2QKyT04JsXIer3CINOYe7O%2F%2F5%2BKQLcpDPfcxxUNH8VshOjlmAjjB7ThN%2FmpRGMthaGlv5LxJjSN8o4xIyYpmdEpUJ7hpsS40ECjW%2F67OS1LBIeLH50hBrUebs%2Bhf8AlwFfuATs6h5V0blqUHL1uiiYHh3mwnLRLsIchp1CwrUUWD8B2WT4Mr5DceRSpsn8N9Bd%2Fp2A2MGhFeQct8uMSc%2FszC%2BW5wKrGTQcOIRNu4F8Vn%2BAZCiATuI3SPe4wY49A92%2BUnwzVk9ZLrdOZoV9IxsvCZgE2mcLhz5F6xeU%2Bq7biSA1A4mhNxZVUZQJIbGep9v3qVtdgWoENC5leRdf%2BsrlOb3nw%2FgtMydFywZ2GgK4v2NnnWFlL9a5eF%2BvkC731ifFAN5xS2uc%2Fm0woruIwwY6pgGFjCm3lT8wyVFFtH1R8yNZauGVXc4bxeU7a7aRKniNPKBIyg6NVoHYBeehPWBQE9tMrCInm%2BrahLJ2DYx4Z6HWI2Y8P5e58JwdLqzUrpU8W83V%2FbbKFJsC9N69GVlOwmzTIDaT4%2Fce%2BZFq4kyynIxhNpQohOxLrifYeqdyr0GZ5ALv8NbDp4Yx9yqWAPSXn64xZPe33jmNRKgHof34cqcPgxx5Y5m5&X-Amz-Signature=cff92a93d70a6e559b91959112e1defa697dc2db2710385033c89b2eead58b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VASYHFM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWD%2FkKwzxo9%2BZz2EIDMbVeYXAgIta7IzeauPpOMxGZ1AiB504MBFdGYrdYraLhUJr1fHADmjkxOhyo3wMh3IlMQxCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMay7N18uqQ%2Bmt9k9gKtwDUKZ0pvdBGFFJanmFTJFCm3xJQhGJaSSFa9hkctHaCfp5MH30NAq3ex7ALULIp7lOOcUYHknS3P%2F7%2FKZrOn470ZvTTNj9St7j0geIRyXathXYpSgI5YaaljjX7ORCUMp%2FMW3wHOBYtfYVsg88xTNuA8G5kzri5E0CMTYIshAT2SFkl2uIRJvz%2BOI%2FZb%2F6SYnCtLx4hUaCO%2FKyPD5Ay43ZsH75qtS2qBms7SLVqP8J%2FZo9%2Fr2QKyT04JsXIer3CINOYe7O%2F%2F5%2BKQLcpDPfcxxUNH8VshOjlmAjjB7ThN%2FmpRGMthaGlv5LxJjSN8o4xIyYpmdEpUJ7hpsS40ECjW%2F67OS1LBIeLH50hBrUebs%2Bhf8AlwFfuATs6h5V0blqUHL1uiiYHh3mwnLRLsIchp1CwrUUWD8B2WT4Mr5DceRSpsn8N9Bd%2Fp2A2MGhFeQct8uMSc%2FszC%2BW5wKrGTQcOIRNu4F8Vn%2BAZCiATuI3SPe4wY49A92%2BUnwzVk9ZLrdOZoV9IxsvCZgE2mcLhz5F6xeU%2Bq7biSA1A4mhNxZVUZQJIbGep9v3qVtdgWoENC5leRdf%2BsrlOb3nw%2FgtMydFywZ2GgK4v2NnnWFlL9a5eF%2BvkC731ifFAN5xS2uc%2Fm0woruIwwY6pgGFjCm3lT8wyVFFtH1R8yNZauGVXc4bxeU7a7aRKniNPKBIyg6NVoHYBeehPWBQE9tMrCInm%2BrahLJ2DYx4Z6HWI2Y8P5e58JwdLqzUrpU8W83V%2FbbKFJsC9N69GVlOwmzTIDaT4%2Fce%2BZFq4kyynIxhNpQohOxLrifYeqdyr0GZ5ALv8NbDp4Yx9yqWAPSXn64xZPe33jmNRKgHof34cqcPgxx5Y5m5&X-Amz-Signature=502a6e37718e0191c4fdd39d43eb720947fa02d30da5eb92e503b4f6f4dedd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
