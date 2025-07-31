---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=28f77876398e7eebc7004ba1166a204aba2f922011e8006013bc7641d6d476f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=bd0ce44a0d1548b01e29c32da7131da39de1b5f31bbc088bd4469d80693dac46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=51348d52a256c115d9f0d069c7c1f7dd99bb9076d5311aa3907fe6edcf16b742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=b7ac893be958c784c4dd882b10b68679d6f35cfae3384161f0fb519c9b4706ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=6ee89aa7374db9d4bdca624af927cb0cfef073fe7816a852bee5d54031c36abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=718d8840cb29c7440a03230b90ba05cc8d25e4df15b8b31b084d0826981b78a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=38fc9bcba70a1092c25ca8447d02ac17dcf5c61b4278ffd7052b8dd3f5ed6f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=b48c10d2ed8979d1adc16d15bff1f4c3a9a5ae61d5c380aea21214cb5cadea88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=b395a5204e9c060ec3a3bc281f4cd0b31035ab3004c8e3a78ccad1c7e9b3cf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=2ce1f30d137cbde0ad93426ac08f9b6e6fec74a94cb78c1b249348648c931770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=7412212c38e30b5a4404d85cb522f4503dfcdf48d39fa30011e663fe19c81d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=704d722b3241da03810769a4cbb869fa070579feb22a8f142904659b7938636f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=5b3b90c9a6a53c44ce142e24bb5a5e1d6832e87785f17ba7835320398e3ee2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Nav2 settings

TODO: change footprint?
