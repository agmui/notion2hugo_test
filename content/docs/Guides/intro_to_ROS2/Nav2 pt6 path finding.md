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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDINR5QX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0ao%2B8OZ9IxFlHkXuNvChh%2BL5UnbNypbfhLc5VgSwIsAIgK83B03aJakmH%2BjrvYRI1d9IMBWsBWSIYPATSfBsDOqcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPr6D05JoYCyw4IwircA3R%2FFNe88MWE2n8ASvxfTaiJRbM9%2FatRuuOZFlnRzDo8LJdBum6weM33JLafITYeoJxMPMWdHWZzLiJ553t7phohuJgXX%2B%2Bffm%2FKHMH9XfnE2zDQWFuzmwJDIxwq1mdmEaU81Q4jtKyadZ2UI8GQ4Gka7N3gn0OMSRRtV%2BUCVMN1pwhxMSe3TclczJ9gw%2FhmBaANMYkV35SWTUIm%2Fy5I7Ewky4tf8mZ944kfy1UjE%2BjeQsCNEflZlFWMnqE8PEp%2FrTbM2cH2gX73bbg%2FQs3CWJu3MQS432Yurnl7hpaKbLrsBVgQYUDJB4wBKXH%2Fd0GgZo3YQgegTwZI2pkaHSlZ%2FinzQH4HZJyGnIIuPu2dIj0lcwFn2j8b4eRXvm%2B389OBqZ9BVucoenNU47WL2W4ciYxL18i9eUTYvxQlZwHEJesiZRRkJxfy2Mw4Cum9OZOPs5pRaMW9gfhcxrxX1vJglSWXJZqXB52VHq88zcolambOKUh78zzjWBHlhlqd%2B5%2FygMduNIpUal0yrqicaGkIqVsXAvTwUvwKbnxNxWfBmrEr97eT%2FJzDu1ilQvw9SsVLatDriM%2BN6lTUOoEk4d75Bc1n28vJkHjiEaLVb2V1X3fDczy%2FgnJ%2Bo8Uexdn%2BMKGEosQGOqUBxqwfEc68ot3sZNW4%2FyE055QhFfeHa6Uf7tyDMIYDBDUwtNBnr4l5OrzI8TwrUGF3BRivQyVzIEtIe%2BZd2pW6HNlpeIhBuWiPW4CGNPa8x1Fw6M%2FUaeuoZ4xsxFNknpQsV9CAZOSmWkDX%2FBlSfLgmUQohuqNX8j435f69uq4tE72eD822JlDV4X8p1R6LTltGBZblUWmDZK8p%2FAbhWc4RIb64J2CH&X-Amz-Signature=8072e78a3cbf811d5250a8641f892d58cea4b05e7378eb5a0791212101c3c5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDINR5QX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0ao%2B8OZ9IxFlHkXuNvChh%2BL5UnbNypbfhLc5VgSwIsAIgK83B03aJakmH%2BjrvYRI1d9IMBWsBWSIYPATSfBsDOqcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPr6D05JoYCyw4IwircA3R%2FFNe88MWE2n8ASvxfTaiJRbM9%2FatRuuOZFlnRzDo8LJdBum6weM33JLafITYeoJxMPMWdHWZzLiJ553t7phohuJgXX%2B%2Bffm%2FKHMH9XfnE2zDQWFuzmwJDIxwq1mdmEaU81Q4jtKyadZ2UI8GQ4Gka7N3gn0OMSRRtV%2BUCVMN1pwhxMSe3TclczJ9gw%2FhmBaANMYkV35SWTUIm%2Fy5I7Ewky4tf8mZ944kfy1UjE%2BjeQsCNEflZlFWMnqE8PEp%2FrTbM2cH2gX73bbg%2FQs3CWJu3MQS432Yurnl7hpaKbLrsBVgQYUDJB4wBKXH%2Fd0GgZo3YQgegTwZI2pkaHSlZ%2FinzQH4HZJyGnIIuPu2dIj0lcwFn2j8b4eRXvm%2B389OBqZ9BVucoenNU47WL2W4ciYxL18i9eUTYvxQlZwHEJesiZRRkJxfy2Mw4Cum9OZOPs5pRaMW9gfhcxrxX1vJglSWXJZqXB52VHq88zcolambOKUh78zzjWBHlhlqd%2B5%2FygMduNIpUal0yrqicaGkIqVsXAvTwUvwKbnxNxWfBmrEr97eT%2FJzDu1ilQvw9SsVLatDriM%2BN6lTUOoEk4d75Bc1n28vJkHjiEaLVb2V1X3fDczy%2FgnJ%2Bo8Uexdn%2BMKGEosQGOqUBxqwfEc68ot3sZNW4%2FyE055QhFfeHa6Uf7tyDMIYDBDUwtNBnr4l5OrzI8TwrUGF3BRivQyVzIEtIe%2BZd2pW6HNlpeIhBuWiPW4CGNPa8x1Fw6M%2FUaeuoZ4xsxFNknpQsV9CAZOSmWkDX%2FBlSfLgmUQohuqNX8j435f69uq4tE72eD822JlDV4X8p1R6LTltGBZblUWmDZK8p%2FAbhWc4RIb64J2CH&X-Amz-Signature=a317a672d8b13acdbc642da39b615cad02bde78686ad528adbe345ac9a090a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDINR5QX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0ao%2B8OZ9IxFlHkXuNvChh%2BL5UnbNypbfhLc5VgSwIsAIgK83B03aJakmH%2BjrvYRI1d9IMBWsBWSIYPATSfBsDOqcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPr6D05JoYCyw4IwircA3R%2FFNe88MWE2n8ASvxfTaiJRbM9%2FatRuuOZFlnRzDo8LJdBum6weM33JLafITYeoJxMPMWdHWZzLiJ553t7phohuJgXX%2B%2Bffm%2FKHMH9XfnE2zDQWFuzmwJDIxwq1mdmEaU81Q4jtKyadZ2UI8GQ4Gka7N3gn0OMSRRtV%2BUCVMN1pwhxMSe3TclczJ9gw%2FhmBaANMYkV35SWTUIm%2Fy5I7Ewky4tf8mZ944kfy1UjE%2BjeQsCNEflZlFWMnqE8PEp%2FrTbM2cH2gX73bbg%2FQs3CWJu3MQS432Yurnl7hpaKbLrsBVgQYUDJB4wBKXH%2Fd0GgZo3YQgegTwZI2pkaHSlZ%2FinzQH4HZJyGnIIuPu2dIj0lcwFn2j8b4eRXvm%2B389OBqZ9BVucoenNU47WL2W4ciYxL18i9eUTYvxQlZwHEJesiZRRkJxfy2Mw4Cum9OZOPs5pRaMW9gfhcxrxX1vJglSWXJZqXB52VHq88zcolambOKUh78zzjWBHlhlqd%2B5%2FygMduNIpUal0yrqicaGkIqVsXAvTwUvwKbnxNxWfBmrEr97eT%2FJzDu1ilQvw9SsVLatDriM%2BN6lTUOoEk4d75Bc1n28vJkHjiEaLVb2V1X3fDczy%2FgnJ%2Bo8Uexdn%2BMKGEosQGOqUBxqwfEc68ot3sZNW4%2FyE055QhFfeHa6Uf7tyDMIYDBDUwtNBnr4l5OrzI8TwrUGF3BRivQyVzIEtIe%2BZd2pW6HNlpeIhBuWiPW4CGNPa8x1Fw6M%2FUaeuoZ4xsxFNknpQsV9CAZOSmWkDX%2FBlSfLgmUQohuqNX8j435f69uq4tE72eD822JlDV4X8p1R6LTltGBZblUWmDZK8p%2FAbhWc4RIb64J2CH&X-Amz-Signature=76566a9ed11715e3e7ba52e9d62a2789a676bd1cb0db9017f4a2cea7e1a88e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDINR5QX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0ao%2B8OZ9IxFlHkXuNvChh%2BL5UnbNypbfhLc5VgSwIsAIgK83B03aJakmH%2BjrvYRI1d9IMBWsBWSIYPATSfBsDOqcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPr6D05JoYCyw4IwircA3R%2FFNe88MWE2n8ASvxfTaiJRbM9%2FatRuuOZFlnRzDo8LJdBum6weM33JLafITYeoJxMPMWdHWZzLiJ553t7phohuJgXX%2B%2Bffm%2FKHMH9XfnE2zDQWFuzmwJDIxwq1mdmEaU81Q4jtKyadZ2UI8GQ4Gka7N3gn0OMSRRtV%2BUCVMN1pwhxMSe3TclczJ9gw%2FhmBaANMYkV35SWTUIm%2Fy5I7Ewky4tf8mZ944kfy1UjE%2BjeQsCNEflZlFWMnqE8PEp%2FrTbM2cH2gX73bbg%2FQs3CWJu3MQS432Yurnl7hpaKbLrsBVgQYUDJB4wBKXH%2Fd0GgZo3YQgegTwZI2pkaHSlZ%2FinzQH4HZJyGnIIuPu2dIj0lcwFn2j8b4eRXvm%2B389OBqZ9BVucoenNU47WL2W4ciYxL18i9eUTYvxQlZwHEJesiZRRkJxfy2Mw4Cum9OZOPs5pRaMW9gfhcxrxX1vJglSWXJZqXB52VHq88zcolambOKUh78zzjWBHlhlqd%2B5%2FygMduNIpUal0yrqicaGkIqVsXAvTwUvwKbnxNxWfBmrEr97eT%2FJzDu1ilQvw9SsVLatDriM%2BN6lTUOoEk4d75Bc1n28vJkHjiEaLVb2V1X3fDczy%2FgnJ%2Bo8Uexdn%2BMKGEosQGOqUBxqwfEc68ot3sZNW4%2FyE055QhFfeHa6Uf7tyDMIYDBDUwtNBnr4l5OrzI8TwrUGF3BRivQyVzIEtIe%2BZd2pW6HNlpeIhBuWiPW4CGNPa8x1Fw6M%2FUaeuoZ4xsxFNknpQsV9CAZOSmWkDX%2FBlSfLgmUQohuqNX8j435f69uq4tE72eD822JlDV4X8p1R6LTltGBZblUWmDZK8p%2FAbhWc4RIb64J2CH&X-Amz-Signature=a94e552a5641ffa1615b251a6ba2a7e4b222df4957c5ecacf27d61722a059d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDINR5QX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0ao%2B8OZ9IxFlHkXuNvChh%2BL5UnbNypbfhLc5VgSwIsAIgK83B03aJakmH%2BjrvYRI1d9IMBWsBWSIYPATSfBsDOqcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPr6D05JoYCyw4IwircA3R%2FFNe88MWE2n8ASvxfTaiJRbM9%2FatRuuOZFlnRzDo8LJdBum6weM33JLafITYeoJxMPMWdHWZzLiJ553t7phohuJgXX%2B%2Bffm%2FKHMH9XfnE2zDQWFuzmwJDIxwq1mdmEaU81Q4jtKyadZ2UI8GQ4Gka7N3gn0OMSRRtV%2BUCVMN1pwhxMSe3TclczJ9gw%2FhmBaANMYkV35SWTUIm%2Fy5I7Ewky4tf8mZ944kfy1UjE%2BjeQsCNEflZlFWMnqE8PEp%2FrTbM2cH2gX73bbg%2FQs3CWJu3MQS432Yurnl7hpaKbLrsBVgQYUDJB4wBKXH%2Fd0GgZo3YQgegTwZI2pkaHSlZ%2FinzQH4HZJyGnIIuPu2dIj0lcwFn2j8b4eRXvm%2B389OBqZ9BVucoenNU47WL2W4ciYxL18i9eUTYvxQlZwHEJesiZRRkJxfy2Mw4Cum9OZOPs5pRaMW9gfhcxrxX1vJglSWXJZqXB52VHq88zcolambOKUh78zzjWBHlhlqd%2B5%2FygMduNIpUal0yrqicaGkIqVsXAvTwUvwKbnxNxWfBmrEr97eT%2FJzDu1ilQvw9SsVLatDriM%2BN6lTUOoEk4d75Bc1n28vJkHjiEaLVb2V1X3fDczy%2FgnJ%2Bo8Uexdn%2BMKGEosQGOqUBxqwfEc68ot3sZNW4%2FyE055QhFfeHa6Uf7tyDMIYDBDUwtNBnr4l5OrzI8TwrUGF3BRivQyVzIEtIe%2BZd2pW6HNlpeIhBuWiPW4CGNPa8x1Fw6M%2FUaeuoZ4xsxFNknpQsV9CAZOSmWkDX%2FBlSfLgmUQohuqNX8j435f69uq4tE72eD822JlDV4X8p1R6LTltGBZblUWmDZK8p%2FAbhWc4RIb64J2CH&X-Amz-Signature=0774a543c13f20521c2d9c0e53eb8976cddf29ba1581c3830f738b1f43552a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDINR5QX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD0ao%2B8OZ9IxFlHkXuNvChh%2BL5UnbNypbfhLc5VgSwIsAIgK83B03aJakmH%2BjrvYRI1d9IMBWsBWSIYPATSfBsDOqcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPr6D05JoYCyw4IwircA3R%2FFNe88MWE2n8ASvxfTaiJRbM9%2FatRuuOZFlnRzDo8LJdBum6weM33JLafITYeoJxMPMWdHWZzLiJ553t7phohuJgXX%2B%2Bffm%2FKHMH9XfnE2zDQWFuzmwJDIxwq1mdmEaU81Q4jtKyadZ2UI8GQ4Gka7N3gn0OMSRRtV%2BUCVMN1pwhxMSe3TclczJ9gw%2FhmBaANMYkV35SWTUIm%2Fy5I7Ewky4tf8mZ944kfy1UjE%2BjeQsCNEflZlFWMnqE8PEp%2FrTbM2cH2gX73bbg%2FQs3CWJu3MQS432Yurnl7hpaKbLrsBVgQYUDJB4wBKXH%2Fd0GgZo3YQgegTwZI2pkaHSlZ%2FinzQH4HZJyGnIIuPu2dIj0lcwFn2j8b4eRXvm%2B389OBqZ9BVucoenNU47WL2W4ciYxL18i9eUTYvxQlZwHEJesiZRRkJxfy2Mw4Cum9OZOPs5pRaMW9gfhcxrxX1vJglSWXJZqXB52VHq88zcolambOKUh78zzjWBHlhlqd%2B5%2FygMduNIpUal0yrqicaGkIqVsXAvTwUvwKbnxNxWfBmrEr97eT%2FJzDu1ilQvw9SsVLatDriM%2BN6lTUOoEk4d75Bc1n28vJkHjiEaLVb2V1X3fDczy%2FgnJ%2Bo8Uexdn%2BMKGEosQGOqUBxqwfEc68ot3sZNW4%2FyE055QhFfeHa6Uf7tyDMIYDBDUwtNBnr4l5OrzI8TwrUGF3BRivQyVzIEtIe%2BZd2pW6HNlpeIhBuWiPW4CGNPa8x1Fw6M%2FUaeuoZ4xsxFNknpQsV9CAZOSmWkDX%2FBlSfLgmUQohuqNX8j435f69uq4tE72eD822JlDV4X8p1R6LTltGBZblUWmDZK8p%2FAbhWc4RIb64J2CH&X-Amz-Signature=737fb4c11444d6404ae36e6c9bdc83a56e4c98369719a0c12a30a0a1567eaefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
