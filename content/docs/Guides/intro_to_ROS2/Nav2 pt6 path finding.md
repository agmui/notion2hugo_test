---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCMTN4Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzLccECtaCqaclKi8hgmSdcunXAGwaMPN6tYGhmvv1IgIgerRlluq%2BcNjpq13aSj0x3WczZnQ5gqGJJc%2FQ4wVEzRQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ0wIO9%2BdsuhZNaWoCrcA2ylOVydkHqOHHdbWCzc8PBAlRQlxCjgokCEK%2FasbfafvSzrztXPy2%2BCUUFTzZtydf%2BYtt7PAD7T26aWw2iQTH0uy%2Fq9UEfaEps2bkacCFu4xhAMv0S4EcuJFY3gMpAdP%2BOEKtEr0d2S33lDauDDtcF%2F80WZiXrsX0rEMPxhf3cKnGH1RcQnAwzySaevD6dMfQfqN9K2cEYTz1T3rhcwmcEtd8hGwAytQbWwZgN%2B33gA1RdVQW0tXAAdKAncEmfhexhkSIeUEmQg6cbMuB1mymLrA2G3Pjx5NBHXqalWII%2FQBMBAXcLyoQP3Auk2bqSYij6yjvT%2BmDT42TtkGjow19WntJfmg61ikj2nDLUcq5cX3mUA21b%2FlnU3gf5%2FDWnV3i5UYFoi8NETVRiYhfQMtkhsLgBzDPRjBHTVYmO0%2Bqu287IXbCmORzvWA%2BTxVi4Y9l8bECWXnHZkBtbs2aIUH1%2F9I6HsO4zuLYWmWAQnKRVmsRW4dzBN%2BpxxpBttQidr1c4HxurimDQdnENtHqcZltWPSSaPpNOIzMTw%2FHeJZgNY30SxioTgSvoubo0XelNlcHjgkmnNv09AjWrNZu8TlbMJFNp0K%2F%2BGGjyArQbiiqcjDH%2BMorprZXm%2FvrhwMKirksQGOqUBD3BzwqNAO4csfInLLVehcEbar80JGk37NKqIIu4wAnv2JOqXBDeMrXIPTJd2Iqwy9fVoyLPMUx7JFbW4HvzM%2BE407KskeX1gq3kxWzFqF0%2BfnIHmqE%2B6TKpWseuwFTymTyhPSQt%2FJzO8xj7WBJkIuL5CMQtNh6Fkkf2aEY%2FXaSz2I2otwBBikcAgiJosqQjtCpo0xd4EzaTGpvMD9fdw58NMZ4mB&X-Amz-Signature=c1090d37eaf284cec8062017ac49c27c5805a3b0e3f576251b4e3ea453b04164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCMTN4Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzLccECtaCqaclKi8hgmSdcunXAGwaMPN6tYGhmvv1IgIgerRlluq%2BcNjpq13aSj0x3WczZnQ5gqGJJc%2FQ4wVEzRQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ0wIO9%2BdsuhZNaWoCrcA2ylOVydkHqOHHdbWCzc8PBAlRQlxCjgokCEK%2FasbfafvSzrztXPy2%2BCUUFTzZtydf%2BYtt7PAD7T26aWw2iQTH0uy%2Fq9UEfaEps2bkacCFu4xhAMv0S4EcuJFY3gMpAdP%2BOEKtEr0d2S33lDauDDtcF%2F80WZiXrsX0rEMPxhf3cKnGH1RcQnAwzySaevD6dMfQfqN9K2cEYTz1T3rhcwmcEtd8hGwAytQbWwZgN%2B33gA1RdVQW0tXAAdKAncEmfhexhkSIeUEmQg6cbMuB1mymLrA2G3Pjx5NBHXqalWII%2FQBMBAXcLyoQP3Auk2bqSYij6yjvT%2BmDT42TtkGjow19WntJfmg61ikj2nDLUcq5cX3mUA21b%2FlnU3gf5%2FDWnV3i5UYFoi8NETVRiYhfQMtkhsLgBzDPRjBHTVYmO0%2Bqu287IXbCmORzvWA%2BTxVi4Y9l8bECWXnHZkBtbs2aIUH1%2F9I6HsO4zuLYWmWAQnKRVmsRW4dzBN%2BpxxpBttQidr1c4HxurimDQdnENtHqcZltWPSSaPpNOIzMTw%2FHeJZgNY30SxioTgSvoubo0XelNlcHjgkmnNv09AjWrNZu8TlbMJFNp0K%2F%2BGGjyArQbiiqcjDH%2BMorprZXm%2FvrhwMKirksQGOqUBD3BzwqNAO4csfInLLVehcEbar80JGk37NKqIIu4wAnv2JOqXBDeMrXIPTJd2Iqwy9fVoyLPMUx7JFbW4HvzM%2BE407KskeX1gq3kxWzFqF0%2BfnIHmqE%2B6TKpWseuwFTymTyhPSQt%2FJzO8xj7WBJkIuL5CMQtNh6Fkkf2aEY%2FXaSz2I2otwBBikcAgiJosqQjtCpo0xd4EzaTGpvMD9fdw58NMZ4mB&X-Amz-Signature=85f36a4db7f175ffd4ff29df605459f316256515288aa24b15dd491ef015e0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCMTN4Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzLccECtaCqaclKi8hgmSdcunXAGwaMPN6tYGhmvv1IgIgerRlluq%2BcNjpq13aSj0x3WczZnQ5gqGJJc%2FQ4wVEzRQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ0wIO9%2BdsuhZNaWoCrcA2ylOVydkHqOHHdbWCzc8PBAlRQlxCjgokCEK%2FasbfafvSzrztXPy2%2BCUUFTzZtydf%2BYtt7PAD7T26aWw2iQTH0uy%2Fq9UEfaEps2bkacCFu4xhAMv0S4EcuJFY3gMpAdP%2BOEKtEr0d2S33lDauDDtcF%2F80WZiXrsX0rEMPxhf3cKnGH1RcQnAwzySaevD6dMfQfqN9K2cEYTz1T3rhcwmcEtd8hGwAytQbWwZgN%2B33gA1RdVQW0tXAAdKAncEmfhexhkSIeUEmQg6cbMuB1mymLrA2G3Pjx5NBHXqalWII%2FQBMBAXcLyoQP3Auk2bqSYij6yjvT%2BmDT42TtkGjow19WntJfmg61ikj2nDLUcq5cX3mUA21b%2FlnU3gf5%2FDWnV3i5UYFoi8NETVRiYhfQMtkhsLgBzDPRjBHTVYmO0%2Bqu287IXbCmORzvWA%2BTxVi4Y9l8bECWXnHZkBtbs2aIUH1%2F9I6HsO4zuLYWmWAQnKRVmsRW4dzBN%2BpxxpBttQidr1c4HxurimDQdnENtHqcZltWPSSaPpNOIzMTw%2FHeJZgNY30SxioTgSvoubo0XelNlcHjgkmnNv09AjWrNZu8TlbMJFNp0K%2F%2BGGjyArQbiiqcjDH%2BMorprZXm%2FvrhwMKirksQGOqUBD3BzwqNAO4csfInLLVehcEbar80JGk37NKqIIu4wAnv2JOqXBDeMrXIPTJd2Iqwy9fVoyLPMUx7JFbW4HvzM%2BE407KskeX1gq3kxWzFqF0%2BfnIHmqE%2B6TKpWseuwFTymTyhPSQt%2FJzO8xj7WBJkIuL5CMQtNh6Fkkf2aEY%2FXaSz2I2otwBBikcAgiJosqQjtCpo0xd4EzaTGpvMD9fdw58NMZ4mB&X-Amz-Signature=f972bdb7af2d1da750ae0c6178090db1802a850ef3c5d663d496d724f2034679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCMTN4Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzLccECtaCqaclKi8hgmSdcunXAGwaMPN6tYGhmvv1IgIgerRlluq%2BcNjpq13aSj0x3WczZnQ5gqGJJc%2FQ4wVEzRQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ0wIO9%2BdsuhZNaWoCrcA2ylOVydkHqOHHdbWCzc8PBAlRQlxCjgokCEK%2FasbfafvSzrztXPy2%2BCUUFTzZtydf%2BYtt7PAD7T26aWw2iQTH0uy%2Fq9UEfaEps2bkacCFu4xhAMv0S4EcuJFY3gMpAdP%2BOEKtEr0d2S33lDauDDtcF%2F80WZiXrsX0rEMPxhf3cKnGH1RcQnAwzySaevD6dMfQfqN9K2cEYTz1T3rhcwmcEtd8hGwAytQbWwZgN%2B33gA1RdVQW0tXAAdKAncEmfhexhkSIeUEmQg6cbMuB1mymLrA2G3Pjx5NBHXqalWII%2FQBMBAXcLyoQP3Auk2bqSYij6yjvT%2BmDT42TtkGjow19WntJfmg61ikj2nDLUcq5cX3mUA21b%2FlnU3gf5%2FDWnV3i5UYFoi8NETVRiYhfQMtkhsLgBzDPRjBHTVYmO0%2Bqu287IXbCmORzvWA%2BTxVi4Y9l8bECWXnHZkBtbs2aIUH1%2F9I6HsO4zuLYWmWAQnKRVmsRW4dzBN%2BpxxpBttQidr1c4HxurimDQdnENtHqcZltWPSSaPpNOIzMTw%2FHeJZgNY30SxioTgSvoubo0XelNlcHjgkmnNv09AjWrNZu8TlbMJFNp0K%2F%2BGGjyArQbiiqcjDH%2BMorprZXm%2FvrhwMKirksQGOqUBD3BzwqNAO4csfInLLVehcEbar80JGk37NKqIIu4wAnv2JOqXBDeMrXIPTJd2Iqwy9fVoyLPMUx7JFbW4HvzM%2BE407KskeX1gq3kxWzFqF0%2BfnIHmqE%2B6TKpWseuwFTymTyhPSQt%2FJzO8xj7WBJkIuL5CMQtNh6Fkkf2aEY%2FXaSz2I2otwBBikcAgiJosqQjtCpo0xd4EzaTGpvMD9fdw58NMZ4mB&X-Amz-Signature=170ccc5e12f68e5deebaf85f6a5cf2e6f9b32386be53c24bdc57c9b6bd2ae27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCMTN4Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzLccECtaCqaclKi8hgmSdcunXAGwaMPN6tYGhmvv1IgIgerRlluq%2BcNjpq13aSj0x3WczZnQ5gqGJJc%2FQ4wVEzRQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ0wIO9%2BdsuhZNaWoCrcA2ylOVydkHqOHHdbWCzc8PBAlRQlxCjgokCEK%2FasbfafvSzrztXPy2%2BCUUFTzZtydf%2BYtt7PAD7T26aWw2iQTH0uy%2Fq9UEfaEps2bkacCFu4xhAMv0S4EcuJFY3gMpAdP%2BOEKtEr0d2S33lDauDDtcF%2F80WZiXrsX0rEMPxhf3cKnGH1RcQnAwzySaevD6dMfQfqN9K2cEYTz1T3rhcwmcEtd8hGwAytQbWwZgN%2B33gA1RdVQW0tXAAdKAncEmfhexhkSIeUEmQg6cbMuB1mymLrA2G3Pjx5NBHXqalWII%2FQBMBAXcLyoQP3Auk2bqSYij6yjvT%2BmDT42TtkGjow19WntJfmg61ikj2nDLUcq5cX3mUA21b%2FlnU3gf5%2FDWnV3i5UYFoi8NETVRiYhfQMtkhsLgBzDPRjBHTVYmO0%2Bqu287IXbCmORzvWA%2BTxVi4Y9l8bECWXnHZkBtbs2aIUH1%2F9I6HsO4zuLYWmWAQnKRVmsRW4dzBN%2BpxxpBttQidr1c4HxurimDQdnENtHqcZltWPSSaPpNOIzMTw%2FHeJZgNY30SxioTgSvoubo0XelNlcHjgkmnNv09AjWrNZu8TlbMJFNp0K%2F%2BGGjyArQbiiqcjDH%2BMorprZXm%2FvrhwMKirksQGOqUBD3BzwqNAO4csfInLLVehcEbar80JGk37NKqIIu4wAnv2JOqXBDeMrXIPTJd2Iqwy9fVoyLPMUx7JFbW4HvzM%2BE407KskeX1gq3kxWzFqF0%2BfnIHmqE%2B6TKpWseuwFTymTyhPSQt%2FJzO8xj7WBJkIuL5CMQtNh6Fkkf2aEY%2FXaSz2I2otwBBikcAgiJosqQjtCpo0xd4EzaTGpvMD9fdw58NMZ4mB&X-Amz-Signature=e31f46c5c964338b2e93752513f419c6d2839e8cb81189a4bcb9c4d50986b1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCMTN4Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDzLccECtaCqaclKi8hgmSdcunXAGwaMPN6tYGhmvv1IgIgerRlluq%2BcNjpq13aSj0x3WczZnQ5gqGJJc%2FQ4wVEzRQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ0wIO9%2BdsuhZNaWoCrcA2ylOVydkHqOHHdbWCzc8PBAlRQlxCjgokCEK%2FasbfafvSzrztXPy2%2BCUUFTzZtydf%2BYtt7PAD7T26aWw2iQTH0uy%2Fq9UEfaEps2bkacCFu4xhAMv0S4EcuJFY3gMpAdP%2BOEKtEr0d2S33lDauDDtcF%2F80WZiXrsX0rEMPxhf3cKnGH1RcQnAwzySaevD6dMfQfqN9K2cEYTz1T3rhcwmcEtd8hGwAytQbWwZgN%2B33gA1RdVQW0tXAAdKAncEmfhexhkSIeUEmQg6cbMuB1mymLrA2G3Pjx5NBHXqalWII%2FQBMBAXcLyoQP3Auk2bqSYij6yjvT%2BmDT42TtkGjow19WntJfmg61ikj2nDLUcq5cX3mUA21b%2FlnU3gf5%2FDWnV3i5UYFoi8NETVRiYhfQMtkhsLgBzDPRjBHTVYmO0%2Bqu287IXbCmORzvWA%2BTxVi4Y9l8bECWXnHZkBtbs2aIUH1%2F9I6HsO4zuLYWmWAQnKRVmsRW4dzBN%2BpxxpBttQidr1c4HxurimDQdnENtHqcZltWPSSaPpNOIzMTw%2FHeJZgNY30SxioTgSvoubo0XelNlcHjgkmnNv09AjWrNZu8TlbMJFNp0K%2F%2BGGjyArQbiiqcjDH%2BMorprZXm%2FvrhwMKirksQGOqUBD3BzwqNAO4csfInLLVehcEbar80JGk37NKqIIu4wAnv2JOqXBDeMrXIPTJd2Iqwy9fVoyLPMUx7JFbW4HvzM%2BE407KskeX1gq3kxWzFqF0%2BfnIHmqE%2B6TKpWseuwFTymTyhPSQt%2FJzO8xj7WBJkIuL5CMQtNh6Fkkf2aEY%2FXaSz2I2otwBBikcAgiJosqQjtCpo0xd4EzaTGpvMD9fdw58NMZ4mB&X-Amz-Signature=4ab1d0dcac9aa6060bc2943ac3e67dc8ba2e0ed45fbaad4484b12f8513ed9c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
