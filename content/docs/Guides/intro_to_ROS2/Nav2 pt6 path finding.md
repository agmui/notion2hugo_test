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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLCOLKI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDn6evMC6WneZ8RyTk7xafCNx3WzbH4iCQ8flwICabVogIhAONtnudZ3IHXPBKeVeiuP7iqXUADVdZ6A4UEf7JyK8ZgKv8DCF8QABoMNjM3NDIzMTgzODA1IgwgOWhc77caCTgNSaEq3AN%2BFuFWtE2nBuaOUpj4l2%2BuArczQMDi8zaezIh2k0SZgD0u9sWedGB9ZTBy297S1WMrcWnmO9kQ8WBnFhQaV2c2uwlx4umJHARL68vuPJ2ExHfQAwjvFjWDn5VhAfrWCOcsAtpjX3rZfCrcegTx2iltsuRosh0xkBqXyNm85sGmE%2Flcmy3aFyLTx6UVKo9srj7Qwd1%2B%2FGqwLRiqm%2FdHft%2Fxui5fcCcnPqjA6iPGUh5slW0jkHD59j47P%2BdBLGM94%2BTmK0pYYCyY5l8Rg2JRcARxIMnDqLunkH8NSYNX%2BtT9zj1PLakdMIcARbmm13VKcJnZbDbpzewTHhX17UWHMeNp01lEqkVD0nDBNqZNIVIsyGWj9QspASgJs%2BCUE%2B3BOjX7DVtwJjtZ2206BSeyw3390MvJ3E%2Bs5RhJ3x8sIZTNTD%2FN50i2Iqa%2FQ30SFdYUQnlVAiEBeyFeLHIe%2Fg8pw3FNCujDbnN27rWBWNcmHQWx9rl6RkWtUgd%2B1viVQVGLf8g%2BNu1wBfZQf9O3ytYzg0z1jGvnR4a4bks%2FeDPHLXzljjiAXPnLtyf2rRvWgo8vi%2Fpx41o9WNHzM5IO4c1Dii6LquR3uPx%2BSYuVpEJ7Vq9R6bqOZUF7ljnhp3V%2FUTDowJPEBjqkAWp0q5GGN50673mEpqTe5ljshv5gc6uB4eXLVNByeVyBAC%2FiAEX1FMB11%2BORpUsYTK9q3ZHy4dGn9orB3YT3NB3YUGE%2BbLp8cCW42O%2FLq4tyTNm9ah%2F2oNHZfBBJNRB4UBW19qVhecPXGZsXQpMbtecVdQqDT4SyPYioGALzixMbH7rQTd6p0wvzKT8Thb8k8A%2Fc%2FgRJND57Md5xVne1Z%2BDXo5ON&X-Amz-Signature=b7aef63be395d2c1e75b5752c98e670b95053330ebf77a6610e1a252bf7d170b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLCOLKI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDn6evMC6WneZ8RyTk7xafCNx3WzbH4iCQ8flwICabVogIhAONtnudZ3IHXPBKeVeiuP7iqXUADVdZ6A4UEf7JyK8ZgKv8DCF8QABoMNjM3NDIzMTgzODA1IgwgOWhc77caCTgNSaEq3AN%2BFuFWtE2nBuaOUpj4l2%2BuArczQMDi8zaezIh2k0SZgD0u9sWedGB9ZTBy297S1WMrcWnmO9kQ8WBnFhQaV2c2uwlx4umJHARL68vuPJ2ExHfQAwjvFjWDn5VhAfrWCOcsAtpjX3rZfCrcegTx2iltsuRosh0xkBqXyNm85sGmE%2Flcmy3aFyLTx6UVKo9srj7Qwd1%2B%2FGqwLRiqm%2FdHft%2Fxui5fcCcnPqjA6iPGUh5slW0jkHD59j47P%2BdBLGM94%2BTmK0pYYCyY5l8Rg2JRcARxIMnDqLunkH8NSYNX%2BtT9zj1PLakdMIcARbmm13VKcJnZbDbpzewTHhX17UWHMeNp01lEqkVD0nDBNqZNIVIsyGWj9QspASgJs%2BCUE%2B3BOjX7DVtwJjtZ2206BSeyw3390MvJ3E%2Bs5RhJ3x8sIZTNTD%2FN50i2Iqa%2FQ30SFdYUQnlVAiEBeyFeLHIe%2Fg8pw3FNCujDbnN27rWBWNcmHQWx9rl6RkWtUgd%2B1viVQVGLf8g%2BNu1wBfZQf9O3ytYzg0z1jGvnR4a4bks%2FeDPHLXzljjiAXPnLtyf2rRvWgo8vi%2Fpx41o9WNHzM5IO4c1Dii6LquR3uPx%2BSYuVpEJ7Vq9R6bqOZUF7ljnhp3V%2FUTDowJPEBjqkAWp0q5GGN50673mEpqTe5ljshv5gc6uB4eXLVNByeVyBAC%2FiAEX1FMB11%2BORpUsYTK9q3ZHy4dGn9orB3YT3NB3YUGE%2BbLp8cCW42O%2FLq4tyTNm9ah%2F2oNHZfBBJNRB4UBW19qVhecPXGZsXQpMbtecVdQqDT4SyPYioGALzixMbH7rQTd6p0wvzKT8Thb8k8A%2Fc%2FgRJND57Md5xVne1Z%2BDXo5ON&X-Amz-Signature=6eb87512ef7be4c8ff20f4f58aca723e64793560c0cfc1c57395af27f5c734c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLCOLKI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDn6evMC6WneZ8RyTk7xafCNx3WzbH4iCQ8flwICabVogIhAONtnudZ3IHXPBKeVeiuP7iqXUADVdZ6A4UEf7JyK8ZgKv8DCF8QABoMNjM3NDIzMTgzODA1IgwgOWhc77caCTgNSaEq3AN%2BFuFWtE2nBuaOUpj4l2%2BuArczQMDi8zaezIh2k0SZgD0u9sWedGB9ZTBy297S1WMrcWnmO9kQ8WBnFhQaV2c2uwlx4umJHARL68vuPJ2ExHfQAwjvFjWDn5VhAfrWCOcsAtpjX3rZfCrcegTx2iltsuRosh0xkBqXyNm85sGmE%2Flcmy3aFyLTx6UVKo9srj7Qwd1%2B%2FGqwLRiqm%2FdHft%2Fxui5fcCcnPqjA6iPGUh5slW0jkHD59j47P%2BdBLGM94%2BTmK0pYYCyY5l8Rg2JRcARxIMnDqLunkH8NSYNX%2BtT9zj1PLakdMIcARbmm13VKcJnZbDbpzewTHhX17UWHMeNp01lEqkVD0nDBNqZNIVIsyGWj9QspASgJs%2BCUE%2B3BOjX7DVtwJjtZ2206BSeyw3390MvJ3E%2Bs5RhJ3x8sIZTNTD%2FN50i2Iqa%2FQ30SFdYUQnlVAiEBeyFeLHIe%2Fg8pw3FNCujDbnN27rWBWNcmHQWx9rl6RkWtUgd%2B1viVQVGLf8g%2BNu1wBfZQf9O3ytYzg0z1jGvnR4a4bks%2FeDPHLXzljjiAXPnLtyf2rRvWgo8vi%2Fpx41o9WNHzM5IO4c1Dii6LquR3uPx%2BSYuVpEJ7Vq9R6bqOZUF7ljnhp3V%2FUTDowJPEBjqkAWp0q5GGN50673mEpqTe5ljshv5gc6uB4eXLVNByeVyBAC%2FiAEX1FMB11%2BORpUsYTK9q3ZHy4dGn9orB3YT3NB3YUGE%2BbLp8cCW42O%2FLq4tyTNm9ah%2F2oNHZfBBJNRB4UBW19qVhecPXGZsXQpMbtecVdQqDT4SyPYioGALzixMbH7rQTd6p0wvzKT8Thb8k8A%2Fc%2FgRJND57Md5xVne1Z%2BDXo5ON&X-Amz-Signature=36bf80db8a4f393d091890c6762201d405ce5c61525a7b13889efbd41acdfa77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLCOLKI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDn6evMC6WneZ8RyTk7xafCNx3WzbH4iCQ8flwICabVogIhAONtnudZ3IHXPBKeVeiuP7iqXUADVdZ6A4UEf7JyK8ZgKv8DCF8QABoMNjM3NDIzMTgzODA1IgwgOWhc77caCTgNSaEq3AN%2BFuFWtE2nBuaOUpj4l2%2BuArczQMDi8zaezIh2k0SZgD0u9sWedGB9ZTBy297S1WMrcWnmO9kQ8WBnFhQaV2c2uwlx4umJHARL68vuPJ2ExHfQAwjvFjWDn5VhAfrWCOcsAtpjX3rZfCrcegTx2iltsuRosh0xkBqXyNm85sGmE%2Flcmy3aFyLTx6UVKo9srj7Qwd1%2B%2FGqwLRiqm%2FdHft%2Fxui5fcCcnPqjA6iPGUh5slW0jkHD59j47P%2BdBLGM94%2BTmK0pYYCyY5l8Rg2JRcARxIMnDqLunkH8NSYNX%2BtT9zj1PLakdMIcARbmm13VKcJnZbDbpzewTHhX17UWHMeNp01lEqkVD0nDBNqZNIVIsyGWj9QspASgJs%2BCUE%2B3BOjX7DVtwJjtZ2206BSeyw3390MvJ3E%2Bs5RhJ3x8sIZTNTD%2FN50i2Iqa%2FQ30SFdYUQnlVAiEBeyFeLHIe%2Fg8pw3FNCujDbnN27rWBWNcmHQWx9rl6RkWtUgd%2B1viVQVGLf8g%2BNu1wBfZQf9O3ytYzg0z1jGvnR4a4bks%2FeDPHLXzljjiAXPnLtyf2rRvWgo8vi%2Fpx41o9WNHzM5IO4c1Dii6LquR3uPx%2BSYuVpEJ7Vq9R6bqOZUF7ljnhp3V%2FUTDowJPEBjqkAWp0q5GGN50673mEpqTe5ljshv5gc6uB4eXLVNByeVyBAC%2FiAEX1FMB11%2BORpUsYTK9q3ZHy4dGn9orB3YT3NB3YUGE%2BbLp8cCW42O%2FLq4tyTNm9ah%2F2oNHZfBBJNRB4UBW19qVhecPXGZsXQpMbtecVdQqDT4SyPYioGALzixMbH7rQTd6p0wvzKT8Thb8k8A%2Fc%2FgRJND57Md5xVne1Z%2BDXo5ON&X-Amz-Signature=4576634a07ba7b44284cb587b6419b515c1d750a5c05924866197445b8614376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLCOLKI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDn6evMC6WneZ8RyTk7xafCNx3WzbH4iCQ8flwICabVogIhAONtnudZ3IHXPBKeVeiuP7iqXUADVdZ6A4UEf7JyK8ZgKv8DCF8QABoMNjM3NDIzMTgzODA1IgwgOWhc77caCTgNSaEq3AN%2BFuFWtE2nBuaOUpj4l2%2BuArczQMDi8zaezIh2k0SZgD0u9sWedGB9ZTBy297S1WMrcWnmO9kQ8WBnFhQaV2c2uwlx4umJHARL68vuPJ2ExHfQAwjvFjWDn5VhAfrWCOcsAtpjX3rZfCrcegTx2iltsuRosh0xkBqXyNm85sGmE%2Flcmy3aFyLTx6UVKo9srj7Qwd1%2B%2FGqwLRiqm%2FdHft%2Fxui5fcCcnPqjA6iPGUh5slW0jkHD59j47P%2BdBLGM94%2BTmK0pYYCyY5l8Rg2JRcARxIMnDqLunkH8NSYNX%2BtT9zj1PLakdMIcARbmm13VKcJnZbDbpzewTHhX17UWHMeNp01lEqkVD0nDBNqZNIVIsyGWj9QspASgJs%2BCUE%2B3BOjX7DVtwJjtZ2206BSeyw3390MvJ3E%2Bs5RhJ3x8sIZTNTD%2FN50i2Iqa%2FQ30SFdYUQnlVAiEBeyFeLHIe%2Fg8pw3FNCujDbnN27rWBWNcmHQWx9rl6RkWtUgd%2B1viVQVGLf8g%2BNu1wBfZQf9O3ytYzg0z1jGvnR4a4bks%2FeDPHLXzljjiAXPnLtyf2rRvWgo8vi%2Fpx41o9WNHzM5IO4c1Dii6LquR3uPx%2BSYuVpEJ7Vq9R6bqOZUF7ljnhp3V%2FUTDowJPEBjqkAWp0q5GGN50673mEpqTe5ljshv5gc6uB4eXLVNByeVyBAC%2FiAEX1FMB11%2BORpUsYTK9q3ZHy4dGn9orB3YT3NB3YUGE%2BbLp8cCW42O%2FLq4tyTNm9ah%2F2oNHZfBBJNRB4UBW19qVhecPXGZsXQpMbtecVdQqDT4SyPYioGALzixMbH7rQTd6p0wvzKT8Thb8k8A%2Fc%2FgRJND57Md5xVne1Z%2BDXo5ON&X-Amz-Signature=12f1a11ab5442658ff5d52a3742a305354040a70e4653533c626eb03bf9270f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLCOLKI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDn6evMC6WneZ8RyTk7xafCNx3WzbH4iCQ8flwICabVogIhAONtnudZ3IHXPBKeVeiuP7iqXUADVdZ6A4UEf7JyK8ZgKv8DCF8QABoMNjM3NDIzMTgzODA1IgwgOWhc77caCTgNSaEq3AN%2BFuFWtE2nBuaOUpj4l2%2BuArczQMDi8zaezIh2k0SZgD0u9sWedGB9ZTBy297S1WMrcWnmO9kQ8WBnFhQaV2c2uwlx4umJHARL68vuPJ2ExHfQAwjvFjWDn5VhAfrWCOcsAtpjX3rZfCrcegTx2iltsuRosh0xkBqXyNm85sGmE%2Flcmy3aFyLTx6UVKo9srj7Qwd1%2B%2FGqwLRiqm%2FdHft%2Fxui5fcCcnPqjA6iPGUh5slW0jkHD59j47P%2BdBLGM94%2BTmK0pYYCyY5l8Rg2JRcARxIMnDqLunkH8NSYNX%2BtT9zj1PLakdMIcARbmm13VKcJnZbDbpzewTHhX17UWHMeNp01lEqkVD0nDBNqZNIVIsyGWj9QspASgJs%2BCUE%2B3BOjX7DVtwJjtZ2206BSeyw3390MvJ3E%2Bs5RhJ3x8sIZTNTD%2FN50i2Iqa%2FQ30SFdYUQnlVAiEBeyFeLHIe%2Fg8pw3FNCujDbnN27rWBWNcmHQWx9rl6RkWtUgd%2B1viVQVGLf8g%2BNu1wBfZQf9O3ytYzg0z1jGvnR4a4bks%2FeDPHLXzljjiAXPnLtyf2rRvWgo8vi%2Fpx41o9WNHzM5IO4c1Dii6LquR3uPx%2BSYuVpEJ7Vq9R6bqOZUF7ljnhp3V%2FUTDowJPEBjqkAWp0q5GGN50673mEpqTe5ljshv5gc6uB4eXLVNByeVyBAC%2FiAEX1FMB11%2BORpUsYTK9q3ZHy4dGn9orB3YT3NB3YUGE%2BbLp8cCW42O%2FLq4tyTNm9ah%2F2oNHZfBBJNRB4UBW19qVhecPXGZsXQpMbtecVdQqDT4SyPYioGALzixMbH7rQTd6p0wvzKT8Thb8k8A%2Fc%2FgRJND57Md5xVne1Z%2BDXo5ON&X-Amz-Signature=0598226d9b4ad6e9700dc0e1d9dda68e4239091c36b8286ead52800586f5d387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
