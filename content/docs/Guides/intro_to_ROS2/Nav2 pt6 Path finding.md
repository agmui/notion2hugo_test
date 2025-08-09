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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=4c49fe8e0957973c3896e9808b3f084c7fbaac174cc655f62dd51f89f3506a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=222658205f20d8cdd6bc53c60912f307fcef514becd9e9ed36368885eca3746c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=98d2432a4ba006f3039555b70bdbe0a9057244d858d1d30a90c09c438ce35434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=7f2ce94e10c0dc372288997b3d8f1a64653153b006574fbdb7e38d4a43ed5343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=4df2e3f679ee3fe66d0a1ff8274b7e62ecaeb4c0a317f55451adfc746aeef9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=69cba975003b9b9508e25fa54230a2a102cd8bca08658f0daffa93857313c43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=8e87bd79948ea40446d0dc859880cfd166f852532c8f0c4c127e09842fec073b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=9bd069e435ef2ef2192b8e67a273ac2f38441597a19dc50d991a047be5c4e3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=09b6441987984d4136c865ab8b82ceaea663c8c16a967b204b62c58310f97133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=a6fba85379fdfa04a7678a22fc416d44f6b30ebb197896581118d1b2bba2049e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=cfc9c66f3490bbd038543a11d838ca831d2991d10b42d933db7a0660b5b1c8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=d044f44fee1f1bf00c1cd9a205496c17ad312c61037ce8829dbeadf91688e268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBSCPPX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHRDE2%2FqEPIXteriHXX8LjxmXIPNlk4xBAXt%2BRc5e6AiEAqv8VnwhjD%2BSagSKQmj%2BnGcgJuBNIQDV%2B9LXcRsvHdmwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSc%2BwLHuwPUkOawfCrcA2U9l88ssWSMrHkZlHvIprVOvfeC1hw0aSL0spEr2t0vtZwbrfNEA7dgpk5bQZdPmMQqrfFG8mse%2Bt0edVZ5X2zpi1X49YJt45g0fk7ohzQc6mTx2tG5erg4Ot%2F5eLJhQBWmLcreqYGsinCHDl%2FU9npMRF9TYf9rwMEssvYt6lmM1GNtZ7EjQNJ0LYATWLJ5FXTl%2BbSGJgAPOR%2B%2ByXUJE%2BiC3mmZFUAPOUY1%2BV0OMFyKXzDK6CvqWQqNJCuKqLImITPD2QGbVOlnWivs04xd6AfCFAWKqHLO%2BJ%2F73xSHHOcLhlJAQcpLxcPnWtL%2Bew%2BiOTVQYRWpgijIfd2TZz9iM7jDJa7qJDlQM3HSLVeuev838o5gL%2B5aJeNprk25aS35Dc0H1pwl2E4BYmcMxR07aUDugUROiwFvkODkdEoyl5V2eDPFO0oI7mq0sXVBP3EwOcHdQN9PU8gcBcNwl4fg56AnLfwinKP%2B%2Btl%2Bned09M%2BoMD7Ye6DJJRyqquH6QwCO4npNLOyhM%2BMu%2F2%2FTpyeVssKkJJPixchfXdlQz7ZlvkzYes8oeDBPX4I2oRGJfWGdEOjV1mYvugSkBg5ypTCvguUt0MLQKYt%2F6CRYBYH7OoeCI63Ctz%2FyMFcHkCBxMObp3MQGOqUBQGJVPSB4%2FIjqyZtJ6QPZBtA2ndRcirmdcub%2FZxImWj71wghlluBAAC6DrHiYH5vfV6KdVtc5XfQajbqxFmBCcnl9V1ZjhlNhfZQk%2FnYrPM%2FrX%2BuqFpiWYVz9qZ8C%2FX4riBq5AQ%2BalVuI%2FgEnAlsFYJWU%2BbjHdcLY5puJ6Hk4Duqka3x3hiJWIvekAhT7wAjn9gUDueOLBrh4tJYatfnbpBAYyGsY&X-Amz-Signature=e48b33d83bfa7cdaaefc78652bbd6ee3c1909af3af4eb93151b94c221570c00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
