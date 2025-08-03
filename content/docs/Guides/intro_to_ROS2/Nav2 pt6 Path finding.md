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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=8cb992443c4d5fda581f2706d80eedab332fff1a97c6e553661b100c0a28c2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=328b66fcd53f45804cec835b9046802badba87b087cb2573e99dc89675e260c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=90e821d084426b9a42470ac112a83e0b77683c19afb94ce034523fb846266b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=828bfce80c9dcd537207a6456a4f634145cbcceb0a9f096d3bbafa1d3a6d2b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=1805dfe6a28a64ca2161f9f1299e98ddb02fd928f42a6eaba1eb8c08e7c36c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=63bf14caead89d98b0bf73920b56f88cba63e65f3e6761a51f948cdf3a2a578a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=5b21f2f53db1e40243ad4d6ebba0ac5970c4b72551de00f3b1718f9cf3456ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=58de0698f1a49478cba5c8ba9fbc322639dbb5c3f570d07286f911f49a0818e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=0c4c9e9abc632226d12f92c2c4b05ffee8bd4cf445679d6083b69e5b968feb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=a52123420ae5ed2a16934f3c52c61a736ee663c08618af806e0e9e612bf3643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=a5e297d51e285266fc9222c831cc1e0b05eb688750058c02f51416ddfa97569e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=75dea8d70925011b9cf972abaa0d106eb3182d757e94d014795661cc3f7f607a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVT2OU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE45YZi%2F49sk4or2kX4vApCiP2hKuoKLOx4Pzdw9U5AiEA6CtfT90Z2VXuougSjJITxWwszVcxkyEkrn3ujCKlYqoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP0daW39AhXO9SebbSrcA7qoM2U%2FuVg3jYOLTTbXPg3FxQCTVW1xiLEo23r0JxlTLuSU2yjhdYcujgNEugUkkXGD7tadKFeJNLQp6hYqvFgCJjePm7gKgO2laE08BucNaUufCfpr3EGdiliWps%2F%2FbMuhVbSgw1svtPo2k5DRFUTtUgppMhYh08UugbyYTOmWwn6nikj6HAkW1pTpXlzlUCF17%2FWI3ghCyZ0P7Pa41QFP7%2F5gOViRVHg8KpxMx7m66RsJtrTxwxM8A9K5tnqSq82ueLnDdTpkB%2BkysKEcS40Lgr6VddcovHYsJa0lNVdws%2Fn1qW92Y2v1OZB1ch1Nzz4HdS%2Fr62ETfd7dx4MXMpo7gjXoqrmHxEtZJZ%2Fl%2FRhgsAk%2BJDHvJ%2FlZBdiSUzJSs%2FeY04xBW3iJEKBqJbA%2F1BkfsTGkQhJvzVqzoQVjKploAHmM88NO62jZL2ase%2BbT39tADtkHZUP5YvxVyeyHeOeNNNvM%2Fb7dc2m5tMPNqRqfRR8kY%2BuRzIi2d0DZhM0AAmxBVEf77TlPcGmQMYyVNWCsyGVRSGrt8LLkeTufxsoJCabYcERtonPY1Y%2FKdggUvsAv6G0kYt3coPLdiGU8C75RK9gBAUQBmgYVt2qoG5Bp7n2938vUUuXQXO3XMOPBvMQGOqUBjybj%2BEuqlbJQO65pUVYXz9yJHCextpQVzcqELlMQ04g2dKO3KRUIIiinb1PpIl3yamTuZ0DKBpAngkDeSEaWmCBAHjt8TRf6IlYJI157PL4sd5I4Do8PydynYBsgfp63fPwmu61ZIoULZS5j74W9kAcdUty8MJJpUlZ%2BcdsSnxsdeBNogZm03Akv47eHkIfbeeecLK%2BUfGxzGUsmOLv%2Fq2iGV12l&X-Amz-Signature=75929dbaf6ce9d9c3737dd790cd0be194d5812c0190d259b3e74c41afb991bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
