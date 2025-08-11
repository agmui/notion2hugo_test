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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=17cacd7026aaf180cb9b502422b014b57dc1bbd36e1f456d0c22de1f1da30c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=7119b45f78fc574d6c4fbb196e27a196b814ed47063be2a4915938971957d971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=e79008a187241dd2dc311f612b9a60bd54fafb32506492731c1362664b6bccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=14bf1f46b9b386030b8bca0210713949d7010b845f097861c8d577dcc7ee538f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=5a1ead3ade285f6f4a9fed33de3f32a2e9521af9f030e6d9e59b0003d473d4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=89bd9355fe7de217cf046aebbea88210f0a6a7eccab3bf33a6c768fcda0bf685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=23ba0f355b111abc124f5ebfbb10c9c261aabcce7d8e1d2c005af67e1020dc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=06df09f7103cd68cc430648fe7751f99eb59e08a6bd8f3daf82d91ff5c2113b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=38180815f368b6c2f7205bbc8407225ca947c350e19198709e4a5366904ad4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=24feab605d3b2a8e9cd550ea27e24f276bf6b1fcee3af6038d37dccff03440da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=b37d26e81728e23fa7e48290aa47314648019ed7ba5e681bbcf8a4a08715ee37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=b06f7ce3600b32abd5b7396080bf0051590c61f9455a7c57d2022d797508a906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOFBTIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhp99tqnigXxUUfq4vKtsIpF7flPFBa6co5V84AEkWAIgc4KQnxGOtR%2F4Y1Dv4umeVwP%2F0WKT2rkEh%2Fb7uSZH1DMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3dI9m2UfUAnTZ5iSrcAweEtvux%2FUlwYa2pE8wD1LlQxKQDAyKC8fJQpGa3cXAnTSmttU%2BYpaOT81%2FE82Qcp2OVWTxZ55jcOqzuiBgGQGYxs8DpBL3o1eYn2Sul6sNVHSx3sSld2XuKCcYOsUI5Pl%2BtEThnh1CVWSQzqEvpdrcxaPBAY1ZPLTBy5ak5IjyWC1zabkv4J%2Bg9QTCX0YMnRWmivmO%2BL1GsKNgTRkm52a6okfeLiD%2FI8cLiexiSTXkgzBkYT32haCvM7zH%2B9roupvCmirALp2y8Z8DMb4CE8RjrfBwz790JwBjNdhjGtjf2H8FB3L41VepX9SYbGH7AXjWGq1l0LXc%2BJuXnoz23dxkvEEpH6mrsBK2PUCKLE1XkcEKpN2GxscmjdnYcXbIk%2F88cyPR1u1Ydy%2B2eq6zvtmFMzLVo1P9%2F3tvZzr0zg0yWIWMgW4%2BjI19P%2FxA%2Bm2nCWzQyIJSH2GWLBTjzmsKeGphfNIzx2e9xQNasJjkxLP8M%2B13C5Wx761peSs9NqjKhAvAQ0m2YrTMREwqzRzl%2FNdTbFOmUQ2ob5BSCERcNje2NtR1b6pCXJRLZnbPcSliu7VTCamT2NGuwSZTKy9hXc7gRkrP78P8kTlAtmU92o33R5A4fJ35n7Fs1%2B8niMIir5sQGOqUBp3QuoTrS24rc6ileK0tXriarQkfM1%2BDtKFyKAF7lj8TDfylhOV2odWZemAWT5jc75Fl2XzOucdlK7ObwWqmfPerlS16PrIlfibBiPT6E6MnSg5e%2Btqw15Dm%2FoTV0Hgtb5%2FZ5HcoOw7tm2uU5d2XKp9xce5vKjNz%2BsSaCYhOn3AV4ieIu9ZGC%2F0YKeqIUEVSBtkz4gHr4qJvyoqrUij6LAQq8axvg&X-Amz-Signature=51951687bfba08673762f7836a7bdb5d5d8f13737cfed6bba35f6eb86e0583ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
