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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=48a2fa680576e555a2405f0816695cb3afed31bc34f3abc8661e4093519d2388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=1d872dd8c02de2097dc52575bea0af7675fd62d0dd49d081db1d86553cc2f99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=ad9e6121c26c16e4ffee8628e78c2d99b708f8c1c9504614d7c535d608c65907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=aa109965fb33dc5e59cdc1d9f22a02913b577bee60b91c4956ad53d95d075cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=1cb25d48d390015d7f7ca25bbc8bb2a215de2ee29c4e837c4fdb2b9df4adab25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=052b174bf7c52b70d8b5f69f4a8417c3ded5ac2bde893bf214f48275c5a69026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=6df024a8f4f3585b35a127c20f8ff95ac6b430678262d9bef47137e7a0077041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=5d42d2db3521a6282e376153cb1cc49b85145aca0a221265c8440206c520b03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=48ca42228a1b20300469a44e654cb7c9afc098825c496e00773c020a3bc70288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=c4c9698d1254f774657e09e81ad2eeb81f432aa44661294a16bd945430370f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=946ced609ba564d00ad8750f617b4c7b4b5d5bf36b1bb7049ce42f949c91a654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=b45edc634543850bb66c9c7c2df523bb86acc105bcca0843df130ec879ee6f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPHYSNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9H4MANlelc7QTtLMQLPPLINBsO38rqhpPIaijMCL4DAiAYdRFnyidwDfhTohL11aS42PwGer4oCNyzLyIJnSgCFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMdU42tYqWmkCkqkZKtwDBA7L68b5mInm6KLB5%2BHuIzN3wIPu%2FL%2ByBxrn6XAnSUEIZ%2FmCUJtTbSZjbedVD0ERmEpjaGwFn2MRPS1sCzilxAWo6rTndc%2FiTH6uuxsFXW2tFfaAATEhoZdQTsNn6pOSkJjW4jPTalsyyyblf94R21jkvlvUvsdNlKBq0x5c07y2AclLQUbpgl2%2FeZPD%2BRs1C4fasj4uk8KtZCRY8mZY%2FcUixF8Jf4hDDUahgGOU3J7bQZQSk1k0nFu9b4Fm9z%2B37f4ym5u%2BxzjZOvS2tfGMm%2FLb6iZDfwszJY1fEKzMH2q9gBDn%2BK1JoDJa8nfWYBom2tvKCLFtkIeo%2BjLZabe6%2FN%2BJKijv51%2BZmuqpEeQMZnVngR9Ns1RUwbjuk3%2FFsPHjuG3gWYC8TSAkqDKCBLIlGOevI80NcD9rQesq6YOicpDOpLqz1heOwhUnkf%2FNTtgmQmfs%2FyTi60IpARymN0Z4gi4cQZCQf9xlJrC4IRtEyoNJ1w8302ELiuCTo%2FyTXB41dcHRsyyAQKwCznOVbzHzzmylQVbK3QsciyMorpspq%2FHluC2XhBVWPh4SIGTuBayhKShtopz8uJZIsVi1vDQCdoI8dGPHi6Eyb%2B7LFEG8UupsDSyfa%2B7TEtvtTgYwiOPcxAY6pgH%2FJv2teMZCnHJeR92ZITSXXTZh5zmXILk0Lsu6HSvC5wczkodSmzjnvjnkKzF1zRUYKSNMMF4XZQCJfF9tJSlxKUJQBUhwB9J%2F4VsMci9Pff44%2FHsuK7BGr7L6a8zZwaWais5vtbzFvWKghJz4j8R52kXRsDzq3ov1IAKxWOejxBUAPgqbeujh7LegGwCM7p1OAbWXePBgZz%2BuJqSC21j%2Ff0EEMdsK&X-Amz-Signature=5f61031b958e8534201965043fe42d50a79f62998dc500f51430398e23decd1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
