---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=011ee2c1031c278a3a3fa4a44ea7ecebe666c4fe1368891ce9f5de3979427d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=ce64a2cc5dda5f4489e2e20ed557229cf3bd96cd577d0aa7dbb42280f7ca2afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=78561909c4efb24a72de25bf3dac9adf1026aa95bc818be0531a8626581d337b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=d3a9fbbae4b20b0c20adf4cd919b00ef39530ce8adafbc09ea35e4e98556f646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=96805b90d69e2e13831f6a302060f02e8965bba4578147cacb329f3c1ec47793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=e697c434e2e9fdb5fd336b43ae2510520183f6fd99fd563f0447630b21907bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=3509e512650bdcad5eed140be73d4910c91cbd41f679f91fe94881df736a2eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=b0056a42bbbac2c19f23b41175ddf17ed94747d4906c4e2fc7c8cbdc6dafb2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=f217c0fc1e2e21a2793ee2f065fa90b57b294cd667f158da23853c0461ddcc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=c05c19be4989cf71d258adcb1c9f3980bd0fffbcdb73716749f7edefcb90b928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=42597f7df71684b610671c66a2022424e6f299e44ee2e051121b431cb4ffd66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=c0ac8180d8affcebe1763620f1f60f7c74b54daa880a348ba639a8f58e2e0d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXP2FUG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCt03Qr9uOJgAh3sAaCrw7CrIvQT5ZIwLQs3wucMnJsgAIgTlXsAon79LuE%2FBo%2FA%2FftTi9GjzC%2F%2ByqnVjsfhPDT2ekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLconv%2Fho%2B3hWAJnHyrcAxH0g4KJFgUDhQ%2FADY3Sbb8fCc%2BngoUOX0hpJbe%2FKfaNvlG18iB7qBzH3XZJweDaVrZcejP%2FDKMOKeOba0%2BLMWVKWpS0RK6dnUkj5CDC8yxDErBPtCHALOSETQ4l5NnaNv9mRiCWbjnB9Yc%2FHIfzKJAN2hwj9q65EmF9RK1E8ae4AxDblCTvZdKydt8uaESoHc1AfJzdxWlH7A8YfLDECbtQ3Q0XrE%2BVDamJaCNwKs9HTe%2BsPh3Nl9UAylAuIVG3CV%2FQDWyj8ngOAWVBdcowanslnu3tf%2FtmvKFayxkoTFjZrMVuNLVW0cEEN5J7bX6ynax%2Bs6%2F9LUXwX30q%2Fs9l4%2FpCnJk90Is9Jjm846PxZDY1CrfYase9t1zNIfBge%2BFJo%2FSt1%2Fbw4zegk6KLNtEhmevGvKyOVQcEM4gQiLxt77Eb7lZGHRN8cKc7GiMHlM0RYG0uAcGnbUS0g2r9k6%2BtD8ofmgH%2FIt5pu5GmbfDOyJ6CWSNBjgcOoDx0mpy%2FpYg81Yzby5zKPG3OFbSq2%2BvFutu%2BGte2qaK4wygT0FPiuxK7gXLozV1jR%2F69zQGCpQ8wyjWI%2FbfciaR4avES%2FswXF2R%2BtJ7Rb%2BwAcTNgLEFQ1QezsUKdqpioar%2BO7tpBMIWAuMYGOqUB8e1SIECvCaAzQOPzncyBsHz%2FnCzVfomMtUxJeCGC9rXMDNBVOG1yOdaSXEU84Bv4r7KPJVYSTAqaRnHyO6n4Vfg5o9nRV5kgU%2BkeA3OU4MlipoW%2Fuis4%2F4a3PfVY4i8Gkia8L0i4JlSwhezMRJF%2FTbYHj87r0clWy2TEyKn8Gqi%2BOhxVUigIQUAvBi5EXbrDUZBprcUS71mO42d%2FKoGDb9yi%2F0fg&X-Amz-Signature=3b174b544de8c328d155888f5b21aed1419079cb266fc8ec0aee78068d6e4429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
