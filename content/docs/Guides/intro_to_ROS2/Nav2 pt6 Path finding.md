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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=9b3b081e7e29ce003758c6b7093146216d837536870b9963eb6eab83a5c45cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=94313d79604d843aac882ec80848fecf40c742fb68a6236f21f7ed9b6534c925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=e91e5eac4301c6f8a7204ca6177eb04a4b2f34be3c495a7739ed03389721f4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=249dc1b1317ac518ede5d2b17bf5e31b838838eb33aed697dbf4f9b7ba5cd06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=775b74d800d74cf2cd8d797e115c10677f2bbc13266ad2cde98079693ef4bb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=26d1dd54c14611b22b4b2da93e63a0f817dfe89de8b99e1ebcbe24f2460cd8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=a51a16cd2b9b4f2c25fa944838987414b5e23566617651203d7aa928b237d03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=e6646de51217117fd13bba3028ead0c476fc85f225a3ebb03ed4406789bf0e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=782b369f5c68e0f56f9dfee7a360d71657ed4b58c32ed1fe465c6e9213fd52e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=4099ee9ae373647d9b6a0427586bae476ba7e02163585ff9c1157bf6931c3c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=820cca2811a3ee13ce584b3e2ba4eb4b11f44f33e1e1f0cabbda143f13c2a9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=54944b162f3b1675511c375b683fcd7d92fef129234d37499eb93ff5b052f6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXZMLQM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoeOkKI0nIzozxsZjLzqjg7yl0%2B5oQQcmHzzxD%2FpAC%2BAiAhDtFjz5t3%2BNbu8WJCM013Oj%2BnGJmv%2FL5ZUzfRy9PrPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIO0Ok4TnCKTxptnaKtwDbxH%2BIiaGDVfCMoTtoFwIe2tq4tVXbTX4TtaLeZ4XXoFyddzPzNKOAO4zolstNIm%2FzeSOPmwzMKW0aVqWY9ElpI4vWm%2FPkfK5VuhleaJP8oYa5GcT29jL55IU%2FsnjeRJZOsdzCU0QO8WEKF0eV5mYmOmRKfENn3lC3O1X0Y9dRIUgr%2FJYK4sIbwhY0atk9vfeYdkIIWvToZ5rHDfIZeBbQd9TU4u9qE3v3OsBRFfAZXmZKzbwXWHpqEX3tU1bfdV9%2Fydnfg9iOl83iv9JTO8t5I744bWD22xb3dZxFcGraffrZC6qVWNtM4QEGjyWOaxBk6hxyb1UphepcL%2BTyldC2bZ8xkys9UHJK%2BkN3wek2soGdlNw4CpL4dniX6ZBdsqWLlHFw0q6mb9AKe%2Ff280ZTbROSIWUdWv2I5GPsiKZ%2Fjohl29p8yY%2BcjHqkDm1XYZjNydN8MphX59AgbM4jxhkmvp46u%2F8tj6TF%2BZIzeKE7dP2Zux9MtXXVAaDFDP6aPmpjr%2FDT0JJpevNiRRk844pO8qbo7YY4vOndtHBK5B2zzWf3Lcf7mKGQKfdCM7r03vq2lymzwu5IMYmkX9vA6C2sGYfhVpWEhRcbEY4i8gMbo%2FvwsAsGfHQrZdZ9rYw1puxxAY6pgGfwkEXfqEtxAwK91SAq9JGW15u7B7ki9kV%2Bh5x1oFB5MDP0rf4hoKcb4kfIEjd4Q9Q%2Fz9uczXNfUjmKbVAz6oIYu%2FWXhKPYkAc85Dn2MG0N8AeYpgLC50OKnZXWGYj%2Fu0zRiFT1kXnyFV2%2FnlI%2FYVuXBE6ulyw2EvDlF5byPYI9bAxBfDdC4c0tB5rlk7EQ5IgU763jr1gE%2FQasUDnkK6nhg8hT5Iw&X-Amz-Signature=831d5a69661994967808802195619bf311b390695b911420642a6cf8f102a112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
