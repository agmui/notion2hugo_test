---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMKKZQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDXyUd6hpJUeQCFKpl9DsB5xmiGnRCrnep3SsAdxA%2BfDQIhALeSH42ltj0vj3JGRVYbRZaZa8G1b0zHunlmx5I0IYLvKv8DCC4QABoMNjM3NDIzMTgzODA1IgyCEKdm5FvmFpKW2Wsq3AOHwy6Oz4WeyPD3U%2BoWegAhYp7TDPr29fcc9F8PzHKcSv%2BibhBPxwqVJsZPXnjWJTIOnWZCrpuA6jDr9oQqRzMvN5aKoHHMKcH56SsgUyRXxpJMKVryzmrVZFWmz5ApufmSy%2FhWHrPnhrEXwl9Ivyzn7r%2F2SEG6kba56Vw3DR8yy7XpsK2%2BVhpSwH46FjJ5LwOlBIhFvB9MyQoRY8Va1ChrWo8PUdxgLZuXyObyeFm6IfzN%2F%2FciysBkYLWzE5T2%2BDPQvPVNWiClSmtwYi8wUHp4AI6Oos2K%2BJfT%2BbkIrtHhoEn7cnUHCJYkmDghGVKmwLLHq7SDwQy9lOM97L210jZu88X12yJNf6fUtFvlu%2Bh%2BCWWk16YOGi0si%2FK9sVlJoeEuQ%2Bm0ZwaKdK%2Bduu%2BcPUILMrtTNBBs43cBVmb4iI2q54LCjTJNqyWkrLkq5sFwX3l94Xwu3OWmhAPuxlfgRgfgArT97Jdtfioeao3DdN4c7E0xJ04M6zIH6P6fAvZqtp2OKB06AXxrtlcCs2JfFKqMEGGqLcIXwHwc%2BDBKtCkvV%2FRQj6pVcO8UsU1YdPFJQM0%2Bn%2Bc79N7OCDvx5p1NsyZh5vfZmBo%2F8P0FW5G2c%2B1xsbMj7k%2B3jIzfegS69zCz2YjEBjqkASz3UZT1ycbpjrhRR9nxaPHyaTdjLOq%2BvDsWKBArxh%2FnK6Ic2q12gZp9g7ZXVAUeFRGYLoPCGaSN79DlJ2d%2Fbynedr2qXJIGhQhkNBQJKY80wPYpLP5jLQeKAtFhol1zdryvFFpFDbnLI9mW5ncK4Rkz8%2Fr3zME2OvtTIXKMemLUTeRJ9TFBLeq8JrQoKicJhvHWBf%2Fp2qCCLYZDCLscnl0nJ7pP&X-Amz-Signature=b0ce7eb85eba0cf66f7f4623a196b16929631a197de06a675c8d047dbc05cd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMKKZQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDXyUd6hpJUeQCFKpl9DsB5xmiGnRCrnep3SsAdxA%2BfDQIhALeSH42ltj0vj3JGRVYbRZaZa8G1b0zHunlmx5I0IYLvKv8DCC4QABoMNjM3NDIzMTgzODA1IgyCEKdm5FvmFpKW2Wsq3AOHwy6Oz4WeyPD3U%2BoWegAhYp7TDPr29fcc9F8PzHKcSv%2BibhBPxwqVJsZPXnjWJTIOnWZCrpuA6jDr9oQqRzMvN5aKoHHMKcH56SsgUyRXxpJMKVryzmrVZFWmz5ApufmSy%2FhWHrPnhrEXwl9Ivyzn7r%2F2SEG6kba56Vw3DR8yy7XpsK2%2BVhpSwH46FjJ5LwOlBIhFvB9MyQoRY8Va1ChrWo8PUdxgLZuXyObyeFm6IfzN%2F%2FciysBkYLWzE5T2%2BDPQvPVNWiClSmtwYi8wUHp4AI6Oos2K%2BJfT%2BbkIrtHhoEn7cnUHCJYkmDghGVKmwLLHq7SDwQy9lOM97L210jZu88X12yJNf6fUtFvlu%2Bh%2BCWWk16YOGi0si%2FK9sVlJoeEuQ%2Bm0ZwaKdK%2Bduu%2BcPUILMrtTNBBs43cBVmb4iI2q54LCjTJNqyWkrLkq5sFwX3l94Xwu3OWmhAPuxlfgRgfgArT97Jdtfioeao3DdN4c7E0xJ04M6zIH6P6fAvZqtp2OKB06AXxrtlcCs2JfFKqMEGGqLcIXwHwc%2BDBKtCkvV%2FRQj6pVcO8UsU1YdPFJQM0%2Bn%2Bc79N7OCDvx5p1NsyZh5vfZmBo%2F8P0FW5G2c%2B1xsbMj7k%2B3jIzfegS69zCz2YjEBjqkASz3UZT1ycbpjrhRR9nxaPHyaTdjLOq%2BvDsWKBArxh%2FnK6Ic2q12gZp9g7ZXVAUeFRGYLoPCGaSN79DlJ2d%2Fbynedr2qXJIGhQhkNBQJKY80wPYpLP5jLQeKAtFhol1zdryvFFpFDbnLI9mW5ncK4Rkz8%2Fr3zME2OvtTIXKMemLUTeRJ9TFBLeq8JrQoKicJhvHWBf%2Fp2qCCLYZDCLscnl0nJ7pP&X-Amz-Signature=89e9e5850279c9211e0241af2ccc6698e4808c072e072ccc78619352f4d8352a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMKKZQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDXyUd6hpJUeQCFKpl9DsB5xmiGnRCrnep3SsAdxA%2BfDQIhALeSH42ltj0vj3JGRVYbRZaZa8G1b0zHunlmx5I0IYLvKv8DCC4QABoMNjM3NDIzMTgzODA1IgyCEKdm5FvmFpKW2Wsq3AOHwy6Oz4WeyPD3U%2BoWegAhYp7TDPr29fcc9F8PzHKcSv%2BibhBPxwqVJsZPXnjWJTIOnWZCrpuA6jDr9oQqRzMvN5aKoHHMKcH56SsgUyRXxpJMKVryzmrVZFWmz5ApufmSy%2FhWHrPnhrEXwl9Ivyzn7r%2F2SEG6kba56Vw3DR8yy7XpsK2%2BVhpSwH46FjJ5LwOlBIhFvB9MyQoRY8Va1ChrWo8PUdxgLZuXyObyeFm6IfzN%2F%2FciysBkYLWzE5T2%2BDPQvPVNWiClSmtwYi8wUHp4AI6Oos2K%2BJfT%2BbkIrtHhoEn7cnUHCJYkmDghGVKmwLLHq7SDwQy9lOM97L210jZu88X12yJNf6fUtFvlu%2Bh%2BCWWk16YOGi0si%2FK9sVlJoeEuQ%2Bm0ZwaKdK%2Bduu%2BcPUILMrtTNBBs43cBVmb4iI2q54LCjTJNqyWkrLkq5sFwX3l94Xwu3OWmhAPuxlfgRgfgArT97Jdtfioeao3DdN4c7E0xJ04M6zIH6P6fAvZqtp2OKB06AXxrtlcCs2JfFKqMEGGqLcIXwHwc%2BDBKtCkvV%2FRQj6pVcO8UsU1YdPFJQM0%2Bn%2Bc79N7OCDvx5p1NsyZh5vfZmBo%2F8P0FW5G2c%2B1xsbMj7k%2B3jIzfegS69zCz2YjEBjqkASz3UZT1ycbpjrhRR9nxaPHyaTdjLOq%2BvDsWKBArxh%2FnK6Ic2q12gZp9g7ZXVAUeFRGYLoPCGaSN79DlJ2d%2Fbynedr2qXJIGhQhkNBQJKY80wPYpLP5jLQeKAtFhol1zdryvFFpFDbnLI9mW5ncK4Rkz8%2Fr3zME2OvtTIXKMemLUTeRJ9TFBLeq8JrQoKicJhvHWBf%2Fp2qCCLYZDCLscnl0nJ7pP&X-Amz-Signature=fd86fa855a89c70c60a4333caacd20bdf0442eb31453afa3f323af5be1eb4370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMKKZQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDXyUd6hpJUeQCFKpl9DsB5xmiGnRCrnep3SsAdxA%2BfDQIhALeSH42ltj0vj3JGRVYbRZaZa8G1b0zHunlmx5I0IYLvKv8DCC4QABoMNjM3NDIzMTgzODA1IgyCEKdm5FvmFpKW2Wsq3AOHwy6Oz4WeyPD3U%2BoWegAhYp7TDPr29fcc9F8PzHKcSv%2BibhBPxwqVJsZPXnjWJTIOnWZCrpuA6jDr9oQqRzMvN5aKoHHMKcH56SsgUyRXxpJMKVryzmrVZFWmz5ApufmSy%2FhWHrPnhrEXwl9Ivyzn7r%2F2SEG6kba56Vw3DR8yy7XpsK2%2BVhpSwH46FjJ5LwOlBIhFvB9MyQoRY8Va1ChrWo8PUdxgLZuXyObyeFm6IfzN%2F%2FciysBkYLWzE5T2%2BDPQvPVNWiClSmtwYi8wUHp4AI6Oos2K%2BJfT%2BbkIrtHhoEn7cnUHCJYkmDghGVKmwLLHq7SDwQy9lOM97L210jZu88X12yJNf6fUtFvlu%2Bh%2BCWWk16YOGi0si%2FK9sVlJoeEuQ%2Bm0ZwaKdK%2Bduu%2BcPUILMrtTNBBs43cBVmb4iI2q54LCjTJNqyWkrLkq5sFwX3l94Xwu3OWmhAPuxlfgRgfgArT97Jdtfioeao3DdN4c7E0xJ04M6zIH6P6fAvZqtp2OKB06AXxrtlcCs2JfFKqMEGGqLcIXwHwc%2BDBKtCkvV%2FRQj6pVcO8UsU1YdPFJQM0%2Bn%2Bc79N7OCDvx5p1NsyZh5vfZmBo%2F8P0FW5G2c%2B1xsbMj7k%2B3jIzfegS69zCz2YjEBjqkASz3UZT1ycbpjrhRR9nxaPHyaTdjLOq%2BvDsWKBArxh%2FnK6Ic2q12gZp9g7ZXVAUeFRGYLoPCGaSN79DlJ2d%2Fbynedr2qXJIGhQhkNBQJKY80wPYpLP5jLQeKAtFhol1zdryvFFpFDbnLI9mW5ncK4Rkz8%2Fr3zME2OvtTIXKMemLUTeRJ9TFBLeq8JrQoKicJhvHWBf%2Fp2qCCLYZDCLscnl0nJ7pP&X-Amz-Signature=9546338ad9877e08629af3ba01068b1b4be19172bc83a19aadd6573487aa32b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMKKZQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDXyUd6hpJUeQCFKpl9DsB5xmiGnRCrnep3SsAdxA%2BfDQIhALeSH42ltj0vj3JGRVYbRZaZa8G1b0zHunlmx5I0IYLvKv8DCC4QABoMNjM3NDIzMTgzODA1IgyCEKdm5FvmFpKW2Wsq3AOHwy6Oz4WeyPD3U%2BoWegAhYp7TDPr29fcc9F8PzHKcSv%2BibhBPxwqVJsZPXnjWJTIOnWZCrpuA6jDr9oQqRzMvN5aKoHHMKcH56SsgUyRXxpJMKVryzmrVZFWmz5ApufmSy%2FhWHrPnhrEXwl9Ivyzn7r%2F2SEG6kba56Vw3DR8yy7XpsK2%2BVhpSwH46FjJ5LwOlBIhFvB9MyQoRY8Va1ChrWo8PUdxgLZuXyObyeFm6IfzN%2F%2FciysBkYLWzE5T2%2BDPQvPVNWiClSmtwYi8wUHp4AI6Oos2K%2BJfT%2BbkIrtHhoEn7cnUHCJYkmDghGVKmwLLHq7SDwQy9lOM97L210jZu88X12yJNf6fUtFvlu%2Bh%2BCWWk16YOGi0si%2FK9sVlJoeEuQ%2Bm0ZwaKdK%2Bduu%2BcPUILMrtTNBBs43cBVmb4iI2q54LCjTJNqyWkrLkq5sFwX3l94Xwu3OWmhAPuxlfgRgfgArT97Jdtfioeao3DdN4c7E0xJ04M6zIH6P6fAvZqtp2OKB06AXxrtlcCs2JfFKqMEGGqLcIXwHwc%2BDBKtCkvV%2FRQj6pVcO8UsU1YdPFJQM0%2Bn%2Bc79N7OCDvx5p1NsyZh5vfZmBo%2F8P0FW5G2c%2B1xsbMj7k%2B3jIzfegS69zCz2YjEBjqkASz3UZT1ycbpjrhRR9nxaPHyaTdjLOq%2BvDsWKBArxh%2FnK6Ic2q12gZp9g7ZXVAUeFRGYLoPCGaSN79DlJ2d%2Fbynedr2qXJIGhQhkNBQJKY80wPYpLP5jLQeKAtFhol1zdryvFFpFDbnLI9mW5ncK4Rkz8%2Fr3zME2OvtTIXKMemLUTeRJ9TFBLeq8JrQoKicJhvHWBf%2Fp2qCCLYZDCLscnl0nJ7pP&X-Amz-Signature=481609b4926991932b7a5346ab8bef5795bdab64f2c59fe6c3b6b5c01312e5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMKKZQS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDXyUd6hpJUeQCFKpl9DsB5xmiGnRCrnep3SsAdxA%2BfDQIhALeSH42ltj0vj3JGRVYbRZaZa8G1b0zHunlmx5I0IYLvKv8DCC4QABoMNjM3NDIzMTgzODA1IgyCEKdm5FvmFpKW2Wsq3AOHwy6Oz4WeyPD3U%2BoWegAhYp7TDPr29fcc9F8PzHKcSv%2BibhBPxwqVJsZPXnjWJTIOnWZCrpuA6jDr9oQqRzMvN5aKoHHMKcH56SsgUyRXxpJMKVryzmrVZFWmz5ApufmSy%2FhWHrPnhrEXwl9Ivyzn7r%2F2SEG6kba56Vw3DR8yy7XpsK2%2BVhpSwH46FjJ5LwOlBIhFvB9MyQoRY8Va1ChrWo8PUdxgLZuXyObyeFm6IfzN%2F%2FciysBkYLWzE5T2%2BDPQvPVNWiClSmtwYi8wUHp4AI6Oos2K%2BJfT%2BbkIrtHhoEn7cnUHCJYkmDghGVKmwLLHq7SDwQy9lOM97L210jZu88X12yJNf6fUtFvlu%2Bh%2BCWWk16YOGi0si%2FK9sVlJoeEuQ%2Bm0ZwaKdK%2Bduu%2BcPUILMrtTNBBs43cBVmb4iI2q54LCjTJNqyWkrLkq5sFwX3l94Xwu3OWmhAPuxlfgRgfgArT97Jdtfioeao3DdN4c7E0xJ04M6zIH6P6fAvZqtp2OKB06AXxrtlcCs2JfFKqMEGGqLcIXwHwc%2BDBKtCkvV%2FRQj6pVcO8UsU1YdPFJQM0%2Bn%2Bc79N7OCDvx5p1NsyZh5vfZmBo%2F8P0FW5G2c%2B1xsbMj7k%2B3jIzfegS69zCz2YjEBjqkASz3UZT1ycbpjrhRR9nxaPHyaTdjLOq%2BvDsWKBArxh%2FnK6Ic2q12gZp9g7ZXVAUeFRGYLoPCGaSN79DlJ2d%2Fbynedr2qXJIGhQhkNBQJKY80wPYpLP5jLQeKAtFhol1zdryvFFpFDbnLI9mW5ncK4Rkz8%2Fr3zME2OvtTIXKMemLUTeRJ9TFBLeq8JrQoKicJhvHWBf%2Fp2qCCLYZDCLscnl0nJ7pP&X-Amz-Signature=e11bae6c1ac62929492ecf588aaebcfea1a07166364f86fd3b376e28bdfe450f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
