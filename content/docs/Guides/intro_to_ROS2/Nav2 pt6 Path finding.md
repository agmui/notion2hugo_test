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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=b7cc2e3b124775bc7620063304e9dbf36a260c90c2be6102e2c72dd83e74a83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=fe72dcccbbcbbf9ff0e9967a7413f5f1a4324193e1f7060702bf70f6c0e67c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=e91a2b2bcaca9e4a4d1d36517fc8ee0c200dd717b9e51e57f3ec7f555804ecc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=d4793f1e731a8080c7ac0cefb8077980011ff940286e65946c20abb254553083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=19e431dea3623c1a72443fabbd648845bb962f226a5d11d0ad9ccb6ee0d57276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=ae39a6686b93e08179a1dc8f0ba96771e3596990d06270936c4795cbe6bf864d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=47c1e5c2bc82fac2843fa7f31d57301cd22dd38ca9f9e85aea4ce7f2a82c0534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=c71be1cdc8b1d07bec0d4f8cda18410f49a23ca240550f5028454f720ac1ec4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=ff565ca9c65895ca682763e074fb27c876960dffaba54929f60e310a37c8edc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=880b77176705405dcf8e65e0e92823e14a81e820d3dafc6b64b8ed7ced356a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=579598d570d64afe8a15d05f854546c63aa53c7b7279b9dcf031632cf077b4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=a648646fd4855ad1aa07e95a7b44372915bc6c823ea9ae8257f7bc9e30c580e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QN66CI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICplD122sOwPw5%2B8GOb8MqzfTWOuk71lpuHxCS15pwqtAiAkNVG5kMkDbtAx%2FfRNIz%2FPQA19pOEpc6596XxHNutdISqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2F3I0seOk8%2BjU6r5KtwDU0EfozNVJP9PM9kqIC6Wpt7a7jQD2YMOw7IzrnsRq0v3Bt1nwBg2RH%2FC%2Bq67vqeKeEiSQ6Lt7d%2B6snu2miTo7ku1f8G%2BUP3ozCBsAtAbMjWSl%2F6KpQzvwx3uEZG8WmGXD47TxJvvMaYYrOUogwfZ7YlOlPdVxOshtvMql37OucjD1FiWF6T0eBTwXdAgzyxS1NuJ%2ByWeBhxZYtzahYXPZV5oX%2B6%2B0Hr6mENrzN4oE8J%2ByO2U2jJV6zA2kkpntcpoedXntucLQAOxpJ4WpuWpOWCjf1CbloEhG8O9biTQCAM%2F%2Bh%2FVnQd0FQNtY2cIpRdvjZw3ZQuvbJ%2B2oDKF34TSs4CPmHPmLS7S8yx%2FbcIszKLs8OgjjHD8auQkzyQ8eU21dgdoiF%2B1fKXMZjMdxtMoYXBgqIi3IuXeQm40QEAR6ccRSru8iQ%2BGjrzsbq6bt7XaI4qXabQfOCAs97mCOXV1leW43DPipkaDHgGvACqzxwfrUsS%2FzKqoeAR90yYUF5ZlHhUdt%2FfjHBQdAuRw1b6Alsdv1Voqiol4d%2Fuir3a8y6LXi3STXvvi9R%2BFnQgl8N%2BX1dcfB9gcUrXXpoDoeotrV7xXDX1ppeJAavCf3%2BvG0MTOZHc%2FNRd1CdBhVE4wgMe0xAY6pgHwMz2GWzSOT3gpiFuooxYKR6kfq3%2BvtX2oMUlH%2F7B%2FhTbgIRYGlwfs6YKdkkuXBkSmcKSCFmfmbWmy2zcY1uRbodaUgPnG3CJqqwl5o4vdod2tFD%2Bbp4ISKJvVH4LlBWMmwsG6N7V%2BpI99vwV60lD1lKSkg6zPeHFkoSt7%2FiAJY8Mt57D4Xcrx%2BmS2ol1Md3kHToUFXlVGuPYGFkrymBqAiA%2FIKwqo&X-Amz-Signature=267fa817e28b45cc9646b30e67ba387a4048346e263764c704cf9b82c03ee2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
