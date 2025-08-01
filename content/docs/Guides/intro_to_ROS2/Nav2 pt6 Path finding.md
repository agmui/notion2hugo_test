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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=abb3250fdc5ba87bb4075752986ad73ee182b954ecc0545acac646b95a922c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=b2e76b615d941c41db2dd5dd52e1305c3a677ab3f7415dba49fd5215f6896d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=b1c5e291ab87b47f5a05c9401583dbdd2c396f5770d0025d5e874c4cd98b2ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=30d6349fa4577e526fe288935263ace3abb3d275373cfe0d69642a29ed780d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=f71a7bdc20bbd3086f225f97e05947d7892414ce312ecae692335c67e2b12c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=916428e3fd5c8995cb6a364c7597b08d2245a9a31acdfd13cad8e185d270b856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=b371da561c6a74ed09294fe428f83d5d521beb057c41a870f27e63843a55e63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=fd029a0d9081e7e4cacc3d2fb902f74ddfef619637753989b53731ff11809842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=c2ff57cb988e2d33a9e27a8b9eeefcb15b144e70df076c9f09e9ad350cae6278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=8edf35c95c216ff6f5936b51a1af03fbc9d3441bca02be8ca9dca48a910a3dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=1cd4b5c6eaccd642f4ffcbd2904d6da668a1062a2ee50990f13a80d631557270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=3e8e02743a3aa90edd47ee135d71f43f0fb093a72742e5781e645a4eef815957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDME32M7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBbsFZn1nzqZzb8LyP91eHI8EGCf8IHlIBHT4c3BmfqAiEA6KE4luzQ0SwAgQleDj8gfiTGCgOGUiQHg6dCyJT2iFkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFegrAxilMklZKGeQCrcA6j7iaTYlbjM6NiCFnAK9k5DqSrhsTQgo2GTFx6mdTu3YCimW3TP7nqiVIC0ekRli1FjuiRYYIUwlDDbU4%2FLrkZxLVm8XmJsZD8tvqHrgzfqIZMUsLNHlvxp45cvtmbY2sNmgFtnmyX8REB%2BH%2BIlJub4%2Bt5baUwotwa8b8MvHkKWL0ql0gqYSb8lqBBpjJChsboDqAyUPiFSk%2BJY0BA1IzVfc3ZiKEgANHCbj%2FD6Sm97PrjI3v9Wx5cRzjmDMyBgF5BT5Wxz5U%2Fu%2BmPTXHA7azWA97FyrV3yZ5yvOtHec1PeFSS2tLoNhgF%2BKpGh0%2FRA9DiFz2HwIjQZ30pGAmFlU4y%2Fc4Z5Ks66Ijbw2kZafl7HXThIM5cW78APmXSDs%2F2wdF0OlqpIAQjufS7AkYG0VQfDjqOy%2BJhws%2BrfLFThXGHLteT5yEalXKTxhBgmuerWcmsR6eZJb1hZB1AnCcLsm%2FHRdNSgHXdjmrokOn3GeryCoGBUul4QWYYDcEac8AWNDBxbGgVIGTLdSuSPHsiTfKFLCBmSqWjNm0HtUVdDQAQYQwZeL6LFptHE%2BP8LHA1e2YiwDmVhYceZ0CyaNr0mOsYJBwq%2BUJS0qov74yZf%2FNhwL3p52HsDSMFs6j5EMMDttMQGOqUBW%2FCPssTVqJD%2BGWkCsGCOiIsGE5ES8KEiKlzijk7kLdFVXTqFZKtgoTccCu4dIV%2F6Qeq1O4I97NB5xWr9wLv9qAwyLUiTCYCZMlNcHn%2FXlbLFmhYdcih9a3XN2iZKPDCTuVU16sQcu69rUMSto9ku0KaghwyGjfj34aLnEX8IkyWzb2ns8OROqb38s1CBUOFowRmwGvH0%2BLah7PJj0bR7mwspeZTQ&X-Amz-Signature=d4169807bd7ebcb2ac0282c63ca2c8499b0352ac2a5bdaa610fbf1f63bef88bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
