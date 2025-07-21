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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMDAXOB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqxrxvKQjsCjiutZajEUxFr6dfkEGSu%2BdEVyvOWEh5lQIhAOS8TXjnMDeB1%2F0S%2B9O346rwXcA7E9LUIZy3o3jYNHxxKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwgFmlKEATI5p5me4q3AMOJL9KhzKVZFEYHFquR9p8w7LYWKJUhL4i%2BdIrielJsOe%2BTyf0OKtbeRQsBRiWPT%2FCzoQB9v%2BCMylAeOoflCwPuuaUDzyGUP4mhctZ7bK0AH4H03caR5yj6FsPCzxd%2B6OIkoODDJ5AGaksWWoPTMFL3DUhOaQZwgN%2FhY%2BHzjprDwX%2F1iDSZmCjLjsEogoIfQGRJvyh9qJrzPbdT%2FLdTcGowfYMF%2BDXizBC3%2BZkc%2BRnir%2BlPJkDwntdmOygDcDkjF%2BcGnb2qBK1U%2BrDzbbrUphyK%2BxMxfbwz%2BC6alrqP45iCqO%2BttCzhHHEHxR4UVlInTsrTCah9PEJO859TMZN%2BDuNypgQwr5zLiTBr%2FSsTo%2F4%2FUw837J3sLgpOvSWhu7vD5EbdzwdnhcsCDnVA%2FK0L1be%2FPDhx9Y9cZhwO666cwF6keDEwzwuvh9gNasJB4wUPMK%2F4tCR4BW6ynybgXH%2FJxXlAHMA%2F%2BS%2FMsYaZuKoNZDN%2FZRlgqecPRYovbqGWV6W6DaMr%2BnZK6UCaHjUj7eSd7TWjDtnBMlbtUZsr1v%2BX%2BQv6jFPqYLYh8i356SFIz%2BD5o1OLfjSU7wjhZImIzBUegjLdZCf%2BDyVOVkUMOhw%2FMPZ5cwGGa39n%2FG0PmxTdjCElfbDBjqkAbZYGIxu3MoABUGz5Pus4fi65ZzBl3Wp2hRHjzIzLH5pbHtcteIUwlHioq%2FBnwa7hzgd%2BCc%2FvcxKLB7n5Gc9Q4IMSp8pJf8MkRnMGvVWHGAxxAm%2F9fCdbrzHqQHpT5jTbOGgRGQPQe2g259aZfiRptr4ZN96Z53pWW%2FXA70ZlgRXn2FSWWKczb9m6QqLV33I6BKQ4sSGnNPAMkt709a6R796vPlR&X-Amz-Signature=0fa9d1a7b499a2c0ca7caeee08028b6dc48b0289e27326ed06079a4bad6e0715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMDAXOB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqxrxvKQjsCjiutZajEUxFr6dfkEGSu%2BdEVyvOWEh5lQIhAOS8TXjnMDeB1%2F0S%2B9O346rwXcA7E9LUIZy3o3jYNHxxKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwgFmlKEATI5p5me4q3AMOJL9KhzKVZFEYHFquR9p8w7LYWKJUhL4i%2BdIrielJsOe%2BTyf0OKtbeRQsBRiWPT%2FCzoQB9v%2BCMylAeOoflCwPuuaUDzyGUP4mhctZ7bK0AH4H03caR5yj6FsPCzxd%2B6OIkoODDJ5AGaksWWoPTMFL3DUhOaQZwgN%2FhY%2BHzjprDwX%2F1iDSZmCjLjsEogoIfQGRJvyh9qJrzPbdT%2FLdTcGowfYMF%2BDXizBC3%2BZkc%2BRnir%2BlPJkDwntdmOygDcDkjF%2BcGnb2qBK1U%2BrDzbbrUphyK%2BxMxfbwz%2BC6alrqP45iCqO%2BttCzhHHEHxR4UVlInTsrTCah9PEJO859TMZN%2BDuNypgQwr5zLiTBr%2FSsTo%2F4%2FUw837J3sLgpOvSWhu7vD5EbdzwdnhcsCDnVA%2FK0L1be%2FPDhx9Y9cZhwO666cwF6keDEwzwuvh9gNasJB4wUPMK%2F4tCR4BW6ynybgXH%2FJxXlAHMA%2F%2BS%2FMsYaZuKoNZDN%2FZRlgqecPRYovbqGWV6W6DaMr%2BnZK6UCaHjUj7eSd7TWjDtnBMlbtUZsr1v%2BX%2BQv6jFPqYLYh8i356SFIz%2BD5o1OLfjSU7wjhZImIzBUegjLdZCf%2BDyVOVkUMOhw%2FMPZ5cwGGa39n%2FG0PmxTdjCElfbDBjqkAbZYGIxu3MoABUGz5Pus4fi65ZzBl3Wp2hRHjzIzLH5pbHtcteIUwlHioq%2FBnwa7hzgd%2BCc%2FvcxKLB7n5Gc9Q4IMSp8pJf8MkRnMGvVWHGAxxAm%2F9fCdbrzHqQHpT5jTbOGgRGQPQe2g259aZfiRptr4ZN96Z53pWW%2FXA70ZlgRXn2FSWWKczb9m6QqLV33I6BKQ4sSGnNPAMkt709a6R796vPlR&X-Amz-Signature=ece3e94ea16e566d7a0811e7c714915aae706d3f5ba3b5e25e0b52a2afccfa6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
