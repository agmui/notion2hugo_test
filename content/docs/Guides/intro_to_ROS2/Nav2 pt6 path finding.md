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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665C6KM23%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsE5ss8GdXznWm7QS6IoR9myRD4AzMv7SiTpOUwA0JUgIhAKOlOBUAFFjGC7HJ5rBt1PgNcqJkGWNVCQK9YEGG323fKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5vH4aduQB9HcQVQgq3AMMCOnowfmrdTgEtBgCmW3UOmljRcL3j27tE9CMBUjy2POOwZ9NymamsH%2BT2kkK8mKqetjE2EM7E%2BaJkg7DSuCM1BEQiBGtmW1cUXoL1xu17S%2FbTKev%2FtrLEOo0gT5Eu5KX4NIRQ7WNxQ9VZzhb0NO4fxiLhBBemUxWraLU9g8dhjH1eBIFp0nTg464Bdq1CGrT10%2BpBH027ABjWD7YXxXaxdxg2NcXTaTkAmOybEWb8FeybKmRRMUYa6mYdLqk6O3TYwXHCSSH8%2F3uVZ9HIGpTG5VUKGMh6UywwfYMl%2ByF0nODbKrTfBzqvsZFeAdLRow%2FeA4%2BWpvaORvNhfwFSjJR1mtZZCWcvUlsuc38MnQknJZqqe3ZPiIBRDkTww8rQikJBiBTdetc26tg73HvZJLis%2F9ltygvlyFSkqjewFKq3%2BJ%2Fcxm0SuhGSEx9LEdzD%2Fpv%2BY%2B%2Bt6IirvIzqCDXmUdDOt%2BNQSDWNh3T6n9TgEUp3lCB96h6eM4sd0pAEfGMFeP4uPR5zkeVtT6nsqaSzorzHh2FRT5p%2F8jlQ30wiQrIgtoh4bXwS8KAgCPKn6yfjnldzO57bVDwDPEF7dRfz6jN9CWZHsDt1eGIva%2BlgwJ4vPno6n%2BPqRc48pRzEzCo%2FJ3EBjqkAVablJjEDeN4HB1uLWUTf4cSI%2BtV8pkpENstnc8z4aR2Q%2FqQGNd1iEVxARy5Wlgk9OD5PyXiSUsPctqkkEwrkMonHBxiuJuWnSR6ucnRm%2B%2Fv8HO%2B2Q4EDI%2F4%2B9K0kZ2mIcFmvHvuS2k39LGST4QNIYPaCxb5uQ6MuRz1qcT29eS%2BKWmYl60ragefNvERR18v%2Bu%2FrEb8QPc7NIGllUw4DmhGsOOFv&X-Amz-Signature=6345f9a862e58aa6d5b6dc1350e09d1d420478a6c3767fda21c23ab1cf19dfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665C6KM23%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsE5ss8GdXznWm7QS6IoR9myRD4AzMv7SiTpOUwA0JUgIhAKOlOBUAFFjGC7HJ5rBt1PgNcqJkGWNVCQK9YEGG323fKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5vH4aduQB9HcQVQgq3AMMCOnowfmrdTgEtBgCmW3UOmljRcL3j27tE9CMBUjy2POOwZ9NymamsH%2BT2kkK8mKqetjE2EM7E%2BaJkg7DSuCM1BEQiBGtmW1cUXoL1xu17S%2FbTKev%2FtrLEOo0gT5Eu5KX4NIRQ7WNxQ9VZzhb0NO4fxiLhBBemUxWraLU9g8dhjH1eBIFp0nTg464Bdq1CGrT10%2BpBH027ABjWD7YXxXaxdxg2NcXTaTkAmOybEWb8FeybKmRRMUYa6mYdLqk6O3TYwXHCSSH8%2F3uVZ9HIGpTG5VUKGMh6UywwfYMl%2ByF0nODbKrTfBzqvsZFeAdLRow%2FeA4%2BWpvaORvNhfwFSjJR1mtZZCWcvUlsuc38MnQknJZqqe3ZPiIBRDkTww8rQikJBiBTdetc26tg73HvZJLis%2F9ltygvlyFSkqjewFKq3%2BJ%2Fcxm0SuhGSEx9LEdzD%2Fpv%2BY%2B%2Bt6IirvIzqCDXmUdDOt%2BNQSDWNh3T6n9TgEUp3lCB96h6eM4sd0pAEfGMFeP4uPR5zkeVtT6nsqaSzorzHh2FRT5p%2F8jlQ30wiQrIgtoh4bXwS8KAgCPKn6yfjnldzO57bVDwDPEF7dRfz6jN9CWZHsDt1eGIva%2BlgwJ4vPno6n%2BPqRc48pRzEzCo%2FJ3EBjqkAVablJjEDeN4HB1uLWUTf4cSI%2BtV8pkpENstnc8z4aR2Q%2FqQGNd1iEVxARy5Wlgk9OD5PyXiSUsPctqkkEwrkMonHBxiuJuWnSR6ucnRm%2B%2Fv8HO%2B2Q4EDI%2F4%2B9K0kZ2mIcFmvHvuS2k39LGST4QNIYPaCxb5uQ6MuRz1qcT29eS%2BKWmYl60ragefNvERR18v%2Bu%2FrEb8QPc7NIGllUw4DmhGsOOFv&X-Amz-Signature=8525f3627c3adec91ca446d7b9a63dbc174f1d54aa99042b6f2ba06a947c7004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665C6KM23%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsE5ss8GdXznWm7QS6IoR9myRD4AzMv7SiTpOUwA0JUgIhAKOlOBUAFFjGC7HJ5rBt1PgNcqJkGWNVCQK9YEGG323fKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5vH4aduQB9HcQVQgq3AMMCOnowfmrdTgEtBgCmW3UOmljRcL3j27tE9CMBUjy2POOwZ9NymamsH%2BT2kkK8mKqetjE2EM7E%2BaJkg7DSuCM1BEQiBGtmW1cUXoL1xu17S%2FbTKev%2FtrLEOo0gT5Eu5KX4NIRQ7WNxQ9VZzhb0NO4fxiLhBBemUxWraLU9g8dhjH1eBIFp0nTg464Bdq1CGrT10%2BpBH027ABjWD7YXxXaxdxg2NcXTaTkAmOybEWb8FeybKmRRMUYa6mYdLqk6O3TYwXHCSSH8%2F3uVZ9HIGpTG5VUKGMh6UywwfYMl%2ByF0nODbKrTfBzqvsZFeAdLRow%2FeA4%2BWpvaORvNhfwFSjJR1mtZZCWcvUlsuc38MnQknJZqqe3ZPiIBRDkTww8rQikJBiBTdetc26tg73HvZJLis%2F9ltygvlyFSkqjewFKq3%2BJ%2Fcxm0SuhGSEx9LEdzD%2Fpv%2BY%2B%2Bt6IirvIzqCDXmUdDOt%2BNQSDWNh3T6n9TgEUp3lCB96h6eM4sd0pAEfGMFeP4uPR5zkeVtT6nsqaSzorzHh2FRT5p%2F8jlQ30wiQrIgtoh4bXwS8KAgCPKn6yfjnldzO57bVDwDPEF7dRfz6jN9CWZHsDt1eGIva%2BlgwJ4vPno6n%2BPqRc48pRzEzCo%2FJ3EBjqkAVablJjEDeN4HB1uLWUTf4cSI%2BtV8pkpENstnc8z4aR2Q%2FqQGNd1iEVxARy5Wlgk9OD5PyXiSUsPctqkkEwrkMonHBxiuJuWnSR6ucnRm%2B%2Fv8HO%2B2Q4EDI%2F4%2B9K0kZ2mIcFmvHvuS2k39LGST4QNIYPaCxb5uQ6MuRz1qcT29eS%2BKWmYl60ragefNvERR18v%2Bu%2FrEb8QPc7NIGllUw4DmhGsOOFv&X-Amz-Signature=860ac074e161201d3eb8643977509198ccb9b20ad2390cacbdbebcdb14342b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665C6KM23%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsE5ss8GdXznWm7QS6IoR9myRD4AzMv7SiTpOUwA0JUgIhAKOlOBUAFFjGC7HJ5rBt1PgNcqJkGWNVCQK9YEGG323fKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5vH4aduQB9HcQVQgq3AMMCOnowfmrdTgEtBgCmW3UOmljRcL3j27tE9CMBUjy2POOwZ9NymamsH%2BT2kkK8mKqetjE2EM7E%2BaJkg7DSuCM1BEQiBGtmW1cUXoL1xu17S%2FbTKev%2FtrLEOo0gT5Eu5KX4NIRQ7WNxQ9VZzhb0NO4fxiLhBBemUxWraLU9g8dhjH1eBIFp0nTg464Bdq1CGrT10%2BpBH027ABjWD7YXxXaxdxg2NcXTaTkAmOybEWb8FeybKmRRMUYa6mYdLqk6O3TYwXHCSSH8%2F3uVZ9HIGpTG5VUKGMh6UywwfYMl%2ByF0nODbKrTfBzqvsZFeAdLRow%2FeA4%2BWpvaORvNhfwFSjJR1mtZZCWcvUlsuc38MnQknJZqqe3ZPiIBRDkTww8rQikJBiBTdetc26tg73HvZJLis%2F9ltygvlyFSkqjewFKq3%2BJ%2Fcxm0SuhGSEx9LEdzD%2Fpv%2BY%2B%2Bt6IirvIzqCDXmUdDOt%2BNQSDWNh3T6n9TgEUp3lCB96h6eM4sd0pAEfGMFeP4uPR5zkeVtT6nsqaSzorzHh2FRT5p%2F8jlQ30wiQrIgtoh4bXwS8KAgCPKn6yfjnldzO57bVDwDPEF7dRfz6jN9CWZHsDt1eGIva%2BlgwJ4vPno6n%2BPqRc48pRzEzCo%2FJ3EBjqkAVablJjEDeN4HB1uLWUTf4cSI%2BtV8pkpENstnc8z4aR2Q%2FqQGNd1iEVxARy5Wlgk9OD5PyXiSUsPctqkkEwrkMonHBxiuJuWnSR6ucnRm%2B%2Fv8HO%2B2Q4EDI%2F4%2B9K0kZ2mIcFmvHvuS2k39LGST4QNIYPaCxb5uQ6MuRz1qcT29eS%2BKWmYl60ragefNvERR18v%2Bu%2FrEb8QPc7NIGllUw4DmhGsOOFv&X-Amz-Signature=bef3533449e4bbbe929680a216a4c2c5ab954eea2953220946b615bf3fcc9e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665C6KM23%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsE5ss8GdXznWm7QS6IoR9myRD4AzMv7SiTpOUwA0JUgIhAKOlOBUAFFjGC7HJ5rBt1PgNcqJkGWNVCQK9YEGG323fKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5vH4aduQB9HcQVQgq3AMMCOnowfmrdTgEtBgCmW3UOmljRcL3j27tE9CMBUjy2POOwZ9NymamsH%2BT2kkK8mKqetjE2EM7E%2BaJkg7DSuCM1BEQiBGtmW1cUXoL1xu17S%2FbTKev%2FtrLEOo0gT5Eu5KX4NIRQ7WNxQ9VZzhb0NO4fxiLhBBemUxWraLU9g8dhjH1eBIFp0nTg464Bdq1CGrT10%2BpBH027ABjWD7YXxXaxdxg2NcXTaTkAmOybEWb8FeybKmRRMUYa6mYdLqk6O3TYwXHCSSH8%2F3uVZ9HIGpTG5VUKGMh6UywwfYMl%2ByF0nODbKrTfBzqvsZFeAdLRow%2FeA4%2BWpvaORvNhfwFSjJR1mtZZCWcvUlsuc38MnQknJZqqe3ZPiIBRDkTww8rQikJBiBTdetc26tg73HvZJLis%2F9ltygvlyFSkqjewFKq3%2BJ%2Fcxm0SuhGSEx9LEdzD%2Fpv%2BY%2B%2Bt6IirvIzqCDXmUdDOt%2BNQSDWNh3T6n9TgEUp3lCB96h6eM4sd0pAEfGMFeP4uPR5zkeVtT6nsqaSzorzHh2FRT5p%2F8jlQ30wiQrIgtoh4bXwS8KAgCPKn6yfjnldzO57bVDwDPEF7dRfz6jN9CWZHsDt1eGIva%2BlgwJ4vPno6n%2BPqRc48pRzEzCo%2FJ3EBjqkAVablJjEDeN4HB1uLWUTf4cSI%2BtV8pkpENstnc8z4aR2Q%2FqQGNd1iEVxARy5Wlgk9OD5PyXiSUsPctqkkEwrkMonHBxiuJuWnSR6ucnRm%2B%2Fv8HO%2B2Q4EDI%2F4%2B9K0kZ2mIcFmvHvuS2k39LGST4QNIYPaCxb5uQ6MuRz1qcT29eS%2BKWmYl60ragefNvERR18v%2Bu%2FrEb8QPc7NIGllUw4DmhGsOOFv&X-Amz-Signature=518ecb6d8c24e20e2bb8836d33b129cfc6d851b81e77368c8df3a2a493a6ef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665C6KM23%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsE5ss8GdXznWm7QS6IoR9myRD4AzMv7SiTpOUwA0JUgIhAKOlOBUAFFjGC7HJ5rBt1PgNcqJkGWNVCQK9YEGG323fKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5vH4aduQB9HcQVQgq3AMMCOnowfmrdTgEtBgCmW3UOmljRcL3j27tE9CMBUjy2POOwZ9NymamsH%2BT2kkK8mKqetjE2EM7E%2BaJkg7DSuCM1BEQiBGtmW1cUXoL1xu17S%2FbTKev%2FtrLEOo0gT5Eu5KX4NIRQ7WNxQ9VZzhb0NO4fxiLhBBemUxWraLU9g8dhjH1eBIFp0nTg464Bdq1CGrT10%2BpBH027ABjWD7YXxXaxdxg2NcXTaTkAmOybEWb8FeybKmRRMUYa6mYdLqk6O3TYwXHCSSH8%2F3uVZ9HIGpTG5VUKGMh6UywwfYMl%2ByF0nODbKrTfBzqvsZFeAdLRow%2FeA4%2BWpvaORvNhfwFSjJR1mtZZCWcvUlsuc38MnQknJZqqe3ZPiIBRDkTww8rQikJBiBTdetc26tg73HvZJLis%2F9ltygvlyFSkqjewFKq3%2BJ%2Fcxm0SuhGSEx9LEdzD%2Fpv%2BY%2B%2Bt6IirvIzqCDXmUdDOt%2BNQSDWNh3T6n9TgEUp3lCB96h6eM4sd0pAEfGMFeP4uPR5zkeVtT6nsqaSzorzHh2FRT5p%2F8jlQ30wiQrIgtoh4bXwS8KAgCPKn6yfjnldzO57bVDwDPEF7dRfz6jN9CWZHsDt1eGIva%2BlgwJ4vPno6n%2BPqRc48pRzEzCo%2FJ3EBjqkAVablJjEDeN4HB1uLWUTf4cSI%2BtV8pkpENstnc8z4aR2Q%2FqQGNd1iEVxARy5Wlgk9OD5PyXiSUsPctqkkEwrkMonHBxiuJuWnSR6ucnRm%2B%2Fv8HO%2B2Q4EDI%2F4%2B9K0kZ2mIcFmvHvuS2k39LGST4QNIYPaCxb5uQ6MuRz1qcT29eS%2BKWmYl60ragefNvERR18v%2Bu%2FrEb8QPc7NIGllUw4DmhGsOOFv&X-Amz-Signature=f890f6558082b86d6495a932a4e773b3a1a36ba118187d1a75553f15fbe3ab34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
