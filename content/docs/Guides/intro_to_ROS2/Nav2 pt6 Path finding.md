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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=24e5f0669a9c8d4e27322d8c2b193a758dd4b5ee491a47fa55d3139dcbb8935e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=baf6256fd3695904bec267ff01245b7252a99c0edbb9df38d557c94bfed12f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=37723dee64a96eafa14ffd22973036e3f0ca1b12673b0a8f6696c9ed675345aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=65f11f34e76338449c205ad6f4ceb4ca97d4c80f94b54e56ab775d98ea195e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=bedd94bb8c3b0e5d10e2dcac11a2f94ebe0a3d6bf9f3369ee149936ccbbe60ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=ea0ccd134253bf1d62bf5bf4618162ca95f1da13b1218fb1d8e222d1e1bfd724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=d43b892f2401a56d469345bc24576cd2b2be23b447f423d9655cbe915eb44188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=af1f941b9e9ff9c3689e741b81f90fee72fb4ff5258cdfd38ee1f7e7af87577a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=cec490796d208c87a89957c6900ec082938d8e6ceffd1666e37a050506b2f631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=05429dc67cae143ba665e7d7e4bc4f7d70ebde20013c94de01ac432fbcd4ee27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=91d30394f4dbcd0eaa9f374cce50d5f2fc1028a79c6866575444b4d5ab78f420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=4906d9f896dcd10bc7857ad18893af40d778b64f0a61c778024c768e55e5df36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7BLRGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjQvbIqCxbm%2BOcbx%2B8xZfwwhyrilxZIIquBTOjEoVaZAiEAuxvr2XimIdEbinv%2Bhhp9S6ltFzojL6y30hBiigGKT84qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2FDbsyMWwVJnG8DyrcA46ULskROTSxUZwN%2BACDKVWWBWDoZD0AapkKAWNeUPnW673CZsLzG2IDpOFl6RB2dZwNLZKFR7P0WJwZFdr7OK6mRXmC9Eilw3zi3klNB0TluyaT3W9x8dE4tLD7%2B5S1eUp8rAJOZF52672CQiNwEUfhKyKdMnrvyv0Re1RQ6DtGOltarBvZxvuK0ayxOG6Cdq3xzwhg98cjkY6wbnoO9aakTCtFuR73sR0lUg31o1TxckPjmyBeHW7LoprNxToO4Es3oOohgtRw1Ff1C1CK%2B15CbaZLOqLL4zxWxh1iIdMQzHBBIY%2BYLCNKtQtM5oS6OhNhUvPh1k6Ieu8TwVi0s4eUHWMUfq2YgxxLqL%2BiBpY%2BqsNfxGZ7ZGSG9JqlzsACxktBXOfZAy0a9p6hKRsnL4YioUuhDyfwdAPhhlUUBIlBGgdH3DtnurivKgxpFFnZv%2B8JySvZtK2sbVZ63XkUgUQFERlQ0e8iNKTShYW6zRJ9MyPIEGsUN%2BLEtR5E2w6uKaa3cDjgWrEJTUol8dYnMl0bcSwjCfPzygdm0qx7r85zF5nlhANZZm6dn82c4i8u7%2BGSiDN8IFzUEI3bp03%2FpgJACA%2FgUSgO6%2BW9xvNaoTB34ZfU39r7i%2BdKZFC8MKzoqcQGOqUBV3EClBXHCFjfvyfwhW9aXNhSq0Tkt0i27XOsVUQhxs1e1f19FycfbB9ZWKUuH3rxOSu1IpsBVEkar8y6HqbDiM7Tkr8HGbK7k4GSeGOqWITHnkk0JYyGkx9XBIqvGmy8UuD2HGQcsJvKkwB7jT9Dz%2Fa8oq%2BqUR%2B9%2FnBZsZCcRqUWpXUswaWnedz3PDpy9iqromO3SN2oEQTzB%2BOt9q%2B7mCldA%2FNg&X-Amz-Signature=6d81082460921c215c39764af6f0e7f3a06d53c354e41b163388e3ee4346e027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
