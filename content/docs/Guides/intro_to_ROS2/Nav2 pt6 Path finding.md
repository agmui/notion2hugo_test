---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=a3678b7bbe3541342695f2c4622ad02c49158f576f1c742d98955338d8c35495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=7b003d84f09da2da28e6c66e782d75962f9dda83acb46732c6062c74b77dc4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=581bd28df60334c0fb4fac08d08e67d8a56191d17e4fed734d10e69b1b5bb8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=a1f308f09a941ccdd3da0b39db9116d9d02b814d7e73aecc0f8c6a9efa9db119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=902d9ee73acc689d2f1699771faf7532821a83eeb19793bed08fe52c78c91447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=809ee8cb206044de00616d37ae82c71404fbe29e804293847d9704fa61e79d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=e371dce410ef2ab5151ca04d9490e713e0a938dc3636ed93351ea2e213cf17b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=ab2e79623a362fabf64d3cce24d69a9d02d96708b62cda836c85354de0ba149f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=7d47c7c59b0bf32e99db4ae80013173a05d61d6e328b9e409c83dd97700cabb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=389e3cd701e9e2a3d200b463a00486b5640bc51cd2ab5ada1c3d0573e9f33182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=243f38eeb5c15744091cf2b1c2b4795debedd513e19cbd782cf90bdf78d591a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=f75414a25e16f6b85a1ff1f9878821d905210cb33bd688dbff6ea1fd1e4adae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SVYSNZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCqPfgazhDUCzzwHrq%2BL2UmlJ8zlW3CSQYWv0rc59tOkQIhAO%2B5%2F5LU8HBp%2BbcQ7sGUzMxASlCIPHtKLeuQApeCwhKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqz%2FmHyWczs65olboq3AM7HOkezTQR1YMpVWfaBrO7Z3J%2FvoJEaRYCvyE5V%2Fl7TP8Y9T9AEL4TFbuPtxZX4gfdho9nqFh7pBmeW4bBZFcx8YMpdIBFmpFCSHhIpnxiHekUx6NLE2mm1QOqiIY0KOtxhjNB6TM9bRvx4kvP20nd%2FOUfpMhrOsTIHfp4pupWmoGQNmJDLbO5BKy%2FvsKKBnVGYEw6KwcAEAzASJS82AaDRjjm5mMguu8ZPxJs%2Bj0AT2eW%2BuD2Mr8CKcJApD1LhdHCi2ZWUXlit6%2Fc47ovmPSDRW5vXmdmWyxm43dS4qCCqKnx5%2BLd5YjhsSVmwwzSHcpjgbFkhz7rgS4QftQKOXM1Myp2ErGDFujR5NZfgkzfLUZCi3k%2BjLMrLHsRPR%2FQiidvi2TVA5kJji7AzgcRAPLCm4Z2%2BLh4gcuVh0yvw5lh0lZ3%2FocPaEeok9SCpJmB9fKlXlmd2%2FAZ8Tuq19SIZhyGGlyCQ8Qhg3QHVpcGxNkTgjdaU6GW1pKxFUup8hBCM%2Bj3%2BeUS9v9mnOn2p%2B3R45Ho1dyqZayU8NvZlU4Xggfe9abW4%2BhSI1hqKDp4oGcTPDzkPbEzgnSSp3AJI%2B%2FdQjAoAu5de9q%2FrCITvriOHCi90Cs%2F7gIfumkuGKSs%2BjD3ydPEBjqkATqwtHwKR8XkcZgphJKS2jtCvfRU%2FnZ%2FnI1pC%2FWpH%2F1VWSlCk6CM3aYWFK4lUQ30Sn7MsylE%2BU68AlHNKeHt0J0s7GZSDkpLvHZv1QiDQRMZoPThlDsgkybkIwJY1JFT3aygadIfMMXhkj5WOxywihbLSwozpjfXkUSsFp%2BQjtrS13ISjXBFhehM92Blh1RLTyhEUp2scd64pwvxTBOFMkvRmw3h&X-Amz-Signature=b9849087730de2f8a208e18462fe0d382f320d9667aa5607e55c4e3cf84a3e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
