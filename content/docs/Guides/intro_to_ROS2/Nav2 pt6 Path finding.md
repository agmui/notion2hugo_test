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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=17270634c5c85caaedf72c0953bf73b26e5ff8f5a6fce5d67b25bcc1e09e7f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=684f0f2c3130d2b11f9e8edcee2fcbcbe6bab9f1d42ae5ae7a5c07bd3afff4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=fd2cd412ebb05266c9e46fad6a70c11b1a77ee26cdf98a0f6eede2c927562832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=7b6e30b45bad1e42e603683da9db764f5b4743b89f0b5e5be6395bcd3c1ed6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=ae1083303242429aefd976bfe675401df6417f8752816e32c05b908e4977ba59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=01e02e7f3c24e1e90debd69f75e27be76e86fe9031f5f9c2ee8f9f32b91df22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=8a42ac004eece40c8e1392bef2130bfd0f130337997f00b6f3cf0089d6b951a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=27b6bf78cf6317aa470cdf8446efba445376cf33796220b0b2978a5fc218e6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=a9804b807bbc340377c9410558ad6881d92f5da7dac4025ff0118b127ac8b3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=82cdead7ac52312c11b6ebf5ec2d32a8babcc7980f855f9d3d40efa99353caed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=d76501e738fa1a561a65d4f3734ae4b5ff1cce4f67873fdbc6cdb324cf55b890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=2e385ee73f7cebad8e41b6c744b53af49482856fae7e83238a4d6a18fd70a34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VMCCBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChECDmx5Djr17CjPXEWQYo9cF5VrG3pIwbikEqdXSU9AiEAs6TAnAh44cpQG00pGalhnv9RJAFlakRuB0AJXRpy3fgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPlCz1o1whpejky6ircA2Qx9acpgTXc3WqpZNjn32X%2Bms3D%2FeH1u5KEethOeXgx8CHhrevzEJIsayTnTrI63NB0yXTGvxAyubncI2CnZtqC0iHDNqTEKDwqTFkjeP5HhR8sgXMSDmgwmP3%2FeMI8U2Nf2zw1AX4sIxiaJj2on4L4PeeiAQjNbmn%2Fqh7rpJXeG9DwbN77hQ%2FSHtgpOoMmbnpTnKfyITlXJj4S%2Ffykuh8bQaxYYLc4sdyEX7KOvgDSsktYMhJYF8QYNbtnMsps9PB3f1m2uTSkvafcKxBVVmSfOyxl%2Ft4RTJUL02f6Jl16mpXTEBeSW8hYUkU2mRaGRR8bZEt7WoalxDCUkFwv0NEi18O7XIBRhClXIo2hhNllcA3KJSL79%2BVP26TPsMHd5iXKaXnGvv4WWwLahh8G86q8AWmLrPWj0OQlNi%2BflraqOMk0%2F%2BwTAxtB9VeA3dCcr%2F2F0wf7jCMLpKyclQFP25fXF7LLcR0TwV6MjtZwEWyAJVd%2Fb5P66abMFVyo00cmFmh18XwBxPihm3y1hzJWfaCAMGS4KTMjhGR6%2BxMC0neguOK0cYzyy9lQhymWZxMT6Bd6F9Sqj8IFAAyuXLqhCLJzKJRZiGCicONIagVQy3z4TPS%2FM0duclGn5w%2FEMJLtscQGOqUBGKgMfGfwNHOf58aYGKQjrzikGAw9Ogyj09xNAVSHCXLsk9%2FpOxDB%2BtYpPSoySyRNtnu8qGTLwowpHY4c7ehzyNnx81MbBzE3NInFBlsiLcIOCcGENZU%2Bo6vSylFYB1EicLPa0kJVlKKUHtLsbZK2pc4rhmPrUkJUFUSe%2FxRDF4IAa1zPg3foTMh34C46RG44w17Y%2B7vk2JoOma7Jgf1DGsnui7aK&X-Amz-Signature=9c17e86c307ee5af272e2d6cea95c57a3226bfcf06026cdd19a74af6ec96449a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
