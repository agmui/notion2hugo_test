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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAGDZN3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAnAMohNzi%2Bz1qB0Ntfd29c%2BmU6Y%2FRfvi%2FJ4hL4EFgAiAjr2sOMRaZG6UA0QqsklgLAXzULk23F9ko2AmKLgQG5CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F9TpkOepnsBv6OECKtwDMdjKzAMjCwoSg0mKVEHbhQUqZb1zS%2B0gXlH8aMWKy0fs%2BBBHR2iakcb6FMlQEN1TdK%2BHHJ5LNEE%2B8BlVLsCi%2FPiyxLSBI0afDWXEZLWT0uU8%2FfBtKUsefgT78YJJA9YClFL8fMkCPH6jjWoP462iEOeuzNNi06IAtZBIrIHyiuqHGUPNgxWoR7P%2FheNGV9btg1qzTCMcCu2Z0wxzn9Z42RPVX7%2FwjftbkBsA%2BPRV1kveSMOQ%2Ffie6QhaTnVzwZ8X6vKi9blws38LnLLZ57yW2FcoBVvdywD6UAbelqoZTriqOliIMZ%2BtmDuH1UWRRUsrRhWHZDJT100DUqQ%2BQDcek7r3sDouduev0elsnuuNEkoo0shBhNmx2EzJ87ejJUoBRAjSrqB%2BqWhAR2IuEuwVX%2BmfB2PLGBScaBFmaUDexovcu13YzVHlwERJ9HkQWhqqzicQwniiAK%2BvZQeVlqi1eBLgYeQvKhF56ApJM3rc8%2F%2BDV1HcRn8AfvBc4OGSxHCw4or7WXr1%2FgdCkEOcZn57Qa7YobdD0681FTuG0n7kmQ02PZNzvtQh2X6e8DMf1rQmA%2FTEewgaHnV1s24u5v5b7uUfBj2gHHvt%2B%2FiBb8c5jOQN22eQufK6yvyS4Eww3Ofu0wY6pgF7WW40TbmnDzte%2FC8Kcq86%2F8cUNTaXPCcUpTOSreJKP0krkVJoLccqE8Wlsc1AB95Z%2BWDXJ%2BJOw2ww2Zhl1zXKcqVDLnsocW2r8hSvzkBMI2Bk%2Bbl9bX5h4bF7LldBtM0n6eHBBq4G6Q3U38BPH6iR1CgARITfqRQNdiiH9R9AbPJ%2FNCoTxJsq3HMze1Yis7Zz%2FD%2FSLJi9VFckEWqOefIKIUBsM7Xh&X-Amz-Signature=e6c51e8203261c4c426b35fa0ae2fdc142460059ca977e91a330996e86eb3d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAGDZN3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAnAMohNzi%2Bz1qB0Ntfd29c%2BmU6Y%2FRfvi%2FJ4hL4EFgAiAjr2sOMRaZG6UA0QqsklgLAXzULk23F9ko2AmKLgQG5CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F9TpkOepnsBv6OECKtwDMdjKzAMjCwoSg0mKVEHbhQUqZb1zS%2B0gXlH8aMWKy0fs%2BBBHR2iakcb6FMlQEN1TdK%2BHHJ5LNEE%2B8BlVLsCi%2FPiyxLSBI0afDWXEZLWT0uU8%2FfBtKUsefgT78YJJA9YClFL8fMkCPH6jjWoP462iEOeuzNNi06IAtZBIrIHyiuqHGUPNgxWoR7P%2FheNGV9btg1qzTCMcCu2Z0wxzn9Z42RPVX7%2FwjftbkBsA%2BPRV1kveSMOQ%2Ffie6QhaTnVzwZ8X6vKi9blws38LnLLZ57yW2FcoBVvdywD6UAbelqoZTriqOliIMZ%2BtmDuH1UWRRUsrRhWHZDJT100DUqQ%2BQDcek7r3sDouduev0elsnuuNEkoo0shBhNmx2EzJ87ejJUoBRAjSrqB%2BqWhAR2IuEuwVX%2BmfB2PLGBScaBFmaUDexovcu13YzVHlwERJ9HkQWhqqzicQwniiAK%2BvZQeVlqi1eBLgYeQvKhF56ApJM3rc8%2F%2BDV1HcRn8AfvBc4OGSxHCw4or7WXr1%2FgdCkEOcZn57Qa7YobdD0681FTuG0n7kmQ02PZNzvtQh2X6e8DMf1rQmA%2FTEewgaHnV1s24u5v5b7uUfBj2gHHvt%2B%2FiBb8c5jOQN22eQufK6yvyS4Eww3Ofu0wY6pgF7WW40TbmnDzte%2FC8Kcq86%2F8cUNTaXPCcUpTOSreJKP0krkVJoLccqE8Wlsc1AB95Z%2BWDXJ%2BJOw2ww2Zhl1zXKcqVDLnsocW2r8hSvzkBMI2Bk%2Bbl9bX5h4bF7LldBtM0n6eHBBq4G6Q3U38BPH6iR1CgARITfqRQNdiiH9R9AbPJ%2FNCoTxJsq3HMze1Yis7Zz%2FD%2FSLJi9VFckEWqOefIKIUBsM7Xh&X-Amz-Signature=0c2c13577d36bde536910abd1cd1609c7401826f05909f996cfb0a0a95d1ef34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
