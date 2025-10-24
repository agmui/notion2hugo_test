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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=009e398b03a213c15649d652c5460a9ec970439e598dc9564c8d5143364bc56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=8685872e734ccbc2f0013f6211bee40a2d82e37a7533ecd7e975c693a1c1344c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=7bb2732ecfb2e5f35c51eda9016b61940d29bf5470b4e21e871d0342e4fab89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=de17303940a52e970c7ac6774fbc25436f719b4da03353cf8384be9a711102cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=deae74a37983cd1e9951e74ddb309924a94ba6f7a54348420f06822836c8be39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=472cd82391ab5ae6ee002471d879c8af2311386fc5a1efc7494838bd3b0e0633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=5751b90e1703ab675771b5f5ee9bb201a47691408430ed70f9f817871c3fce3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=4a7f869afa93c0453bdf3a3dda326a855b770b6564b3f6401b57f05874547a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=3950e786314a6cbfc6777d7a919395a60cc5e3eea978c8a7f941a2b8695dc6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=115589280055d97a1b7fdad696806dd5610d271b6ef411ea42de917fd7faa659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=78587f953ff9c890633b8955394a01922900fd49ce13a6b0da710788c4ac9226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=67fc7c995e55d97c6140b8fdaa37dd835cc3fcb031ce876662ab715a6b5bd50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROUSZIB%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7eD4f88O%2BJ1dh5PnTpw8N4AZu7hJdz4uuhn5d%2BrnncAiBwXLps30wT1XGxl5JTnbR8HnR9bo17ER9qRLf1vXzEoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMGil%2BNOL%2BKNnB3udlKtwDMVwowg2FB4eXjvIKxp40HV5V4Z6AyY6%2F%2Fj6wAJBGogdbpnKvdXBaixoerSCtyjFkTINNN2%2FHp4BDYu9HJhFrDXSqEY93Nf1VkHD2UcCv%2B%2B5ZV6%2BJes5dhdZDnbi76vO7jFAXrG%2F%2B9%2Fy7thtTke62Ie31i9Y919iOXoYnGKL8xsYOCoQaL9vKx3TbCSiEFgl9wjpvLP%2FFm8qcJdzA6xeBFxIWD3IEkFycFpKhPNVNk7NRHpyY9O%2FKlSImMs46S53Z%2BbxtnpSpATVd8QraNv9dVRcdnN%2BtYCmbB3QdadOu7Vh%2BBUx1HHzVaB0Ye65NXRtq%2BOTsELQIhkbCwoAKC%2FRn6pIB%2BwXiCJ2v9XX4RMfxTTv8CwaI%2Bt%2BoSRh0ycKEv5W9B%2BgauMqknIQS3wCbL0hzwOOdVm1tkLc0OGrQ2XEW1U8%2FYPq2uUuqJuPQS2okD0IeNADA18uNP9r%2BSW9cN4%2FStbs%2BUp%2Fz6749wBKhAqd7SoH5KaHU1DSpQVyajYT5Pg2leOtyZJ%2Fa8l5LqH5kkRpYy8NSIM%2B0HIkTKHUcvFTJl8FCej2sweLx85x4BQhmY%2FCk5MINl8htNcE%2BiUMK0R%2BPlKhwoKqdz5kLYMAHi%2Bn6O161wchxSyzMzCgKJF0wip%2FrxwY6pgEVPTRaDnIXN14%2FhiKyje%2BNnmUpZeplrc4H4IHxgDAzK62tgx%2B8%2BJD%2F5WBJJl3BlUMyoMAsHbLU8M5n%2F9DANKA2n5%2FshogPSS%2BN7Dzu7kFH8sANKTI3f202F%2B5oNAu%2BPkeEssZgD87QQtxgaSJ9WYDG7EY%2FXbpV2pB8cgoQwz6pDAqFUFafwU0xtmxj1xYzzyVafcWAykKVWjne3%2FY%2BnEehrL9aX2f1&X-Amz-Signature=464d843106b92dd2ad65b83d8e1a01c039e26ef087fa6faba908ead60088d482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
