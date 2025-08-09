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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=9e1f306e5fb98490e84a6b1879841bc5a19b674023feea66e6b6dfbbf55a54eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=3c860b958009237be5049d5bb07f3691575cd0899286d58ca0e3991e60ed0d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=cbe8a47bf531a679ee2c42c6a36d6175b5ebb04a3aea441d1ca973ed1c61bb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=76d63e93f1a9e593641a83eb152db431e0672d0e2503abdcaae8dc7d05e34741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=ae0848d536812e804e583b561d61802105f28028771cf2d38f51b4a76ed52b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=f8964e8b2c541304b3711b8ed6209e3cef98b33804c7a50ac3fa5039f42f918f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=f9b93184d420b3f09214a7cd6eed0fb3404b96e03ba7e2bd8b6d304c67ef2859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=bac7c77b6a170dae48d39f63af6d7faa9e4e51bed2612f26a0b78a02241bd831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=3a54a71893278445f6ccf90c30c62be389c73d648e30a068c9f51a3a7a1d131f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=e370a4f2b4f9e222a1996ee830c43cfc0fbe80d031de4e1aaab3724b6c4f5136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=eddf286a644528154fc81451b2eb38aba04801c2406f7fdbb35e6f91d54cfc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=f496ff4b2eaec358c26c399d942b1481318b3cf3d65f6c15b482dc1039d5c0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2SK4PJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFrMLbzuvYIkL0j7TjDEDd5vm0%2FfMbPF8uSJn6Tl9D49AiAhXm3ZDrdnMzO9nfRN0EYVN%2BrtM0N7niYenETKrfn%2FnyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzTEdyIBKxB%2BrUzOKtwDSe5Tae6NyTWjg7lg7N%2FgCT9PSp%2FXS6%2FJ7dYNwUGh0QA9WIVExFDBUcSr1FAkWaAhErYyyozzWc98yxakRJsLrfAtQ851u1l8ArQ8RjB5dwjcka8NmLj77Rd7f1xSW9t39QyxRuZsHQw9hx0k6WbRGJzJo3bk8b2AKqKLw3Cmxme%2F0RcHP1lSK%2F%2BqyqaS0C7kK8UcdU4v0KVTZaW2KkrAanUNe%2BNK85WDeQvRJ22%2Bg9Q%2FGMFQQ1a4aT0qTvtRFsuZPq%2BqCe%2F%2FoJ%2FKyOgs0SQWocLpJdZBBJ0n%2B5aLEWE2CVffBxR%2FjIhf4J1ouWdW43P%2F2uvvn8vzR1w4tWa9345BDdNbD05ssTkulFS5nUV9%2BtUU98FgiFSrMrPdexZ6Zh1mMsXCYX5lDLXeKIpKYOJBos4ZP%2FLueTzqAr8dchO70ooTuWfK9DUZXPeIpCm1ZEU9%2B3N8Hq3DCEtk6Ps43WABuzAuMeZ7jajWJDv4MCt6v%2FXdywA1AJRagFGhnsdSJksWLNEn2TKVZ1EIVCgrYK7D9KX19WYFdiemnN1h0LmJ3%2Bur54HtETddRL36j7k1uMXO%2Bx%2BU%2BDI3MLt32MKu0HLT1qwRTva4OWYxmkzYCtUGm3MMT9yARNxOGJKchRcwsfbaxAY6pgGZ7ac4e9RbiavheWncbCT0AwD9mrrWj4u3EgkCztqrJCaKY58N6bVVQf624etcbLv0%2BAYeFGetGVrcKXve5rMe%2FpwRU3oF9p4QWSbyuIfyOHF%2BK7m4iCwcE1%2FGaIrtzXd%2BS9L9B26yJ6wy%2FgpHzQ9sfqAi0DAGOV9vg3%2ByzA7Mnxvh%2BjMk9J71HWOtcSrCOGRsfGWtzhYFQA%2BPbrr8zwqOEUo0drqe&X-Amz-Signature=39cd8decc047e6e1b58ee9eaab465e5becdad5a092dd737e4807d0c30e05ad51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
