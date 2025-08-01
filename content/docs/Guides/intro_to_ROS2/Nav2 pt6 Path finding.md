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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=fc1eb8057c1d3b5bdc086ebe737d27bac84f92e64a6e94e0b51061e9285b4746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=a2bd7b04a45752379e581f263c60368b5f2efa88664749a55b9982a29ffcaf6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=75f5a98f5a502f863e02fe827082f3ca84d12d72b64f3c7f626c35d6d8b14c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=14e5de02d4c417281b7fe9291ffc20f1f150922320cf6de9f70c95c6c857e873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=1224af0328b76cfb78eafe74c121a38ac2080e641f7e578fea39b7a442cf92f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=0af68ca727513cec26d004d1f540f014fac228a88e43f9d917af58077f0c1e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=37984dc436c50216cc9a07739b38cb409f1e03671c1b296e9000d692bb58c040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=ae5b94e34013352f6ff01301e809873901aca250d43793de11e1d82292a3db65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=6239db2d6936138dea7248a542c026e45ab2cf3f4ac540222c6b9ec1592511f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=e926bb76eb8f8150230b56e6845676457d59051419c687fb44bdad1e261c2536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=2cf2398fae028090d7b17f8b2d69b23b5587bce80a6dcc1a5f53264f8110a58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=571aa6e6067d0bee081b884d4fbe8d1a1d4e09bc9934a7dd3cca859868d9aaca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGG3OPX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCp5vSP%2BWTY0KV87%2F12oFo697j8mDgfMC%2BhACPRJNXAIgBMgiteh3v89rpSiIQm72jA4sEzPlXYqbEAulN4Is0moqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8AYcEz6dhI6%2Fee8SrcAxdOwNdKt952bjXr5ZaDIDzsmsHs%2BJq4grJ9BbpZaZ5o37yxnmYs0pthfjP%2FeqPW5qzjgP2tKjd3EG5FBcvj2O5wMKmCFF5ZTlU9OwHB89SJpxA1EcI7T6pziPjM%2Fi0J%2FTOOz1lQrP6b3YT6wKc0%2FA6d8mF8LH6CKSJKx44V1vi5s89ROK7GhB1bBAPVkjLPY9aCHVXxCKMxblM8ZxNBhCF94CUb2RZ%2FaJx0USL5Y%2B9%2FJ7EVBS2JcuOxbGZZKCl6EE17vzo4z1S2ghXISznMmpKu%2Fe%2B2cc1pseCU%2F7VEEks2Z0aTvfjMvF8mzBMX%2BKcDZKn7TIdcdSUGXt1ao34817itjq80r3Ai1448Y8T4br05qKYzge0YrCcvDtb%2BLTA0koVce8ya%2FxSW95IwCIjeipmOY6y52APatrRNE51lcSrU%2F8fOEqNnHcJAFk1lo2rZAN9OfSqdVJ3HVibtlBn0sk%2FEaotCe9zaP2a4dOhGqo5YXirUjwO7k8VnP8uOygzq8Tc8lAdBwusJlCGKfC3m13qEiQXSrd0PdvCMHrzTnIcGGngxabBLFRV2KZPDGtms2%2FAeWO3lxiFO9kuKbqZC79kOWjU557WocRLcmGJnv2G0GgbQcucxl26%2BmoDFMNibscQGOqUBKA1JCJqzOoLNy1gPnwB4LkYVJkVdVxdbYx4OzAM2iVXubGwwLRSYAAPxuh4u43gqxlvNyqYoGQo6bj4mDiXJsyYNyFWho3mvuaIfV7jF8ObsDel0e8KgBfcvjjtB%2BYpnNOlNg3%2FGQxXEPdKB%2FZRqGGI0U9lQgZGTATMo4ah4M%2F775Du8PM690T%2FNS%2F4vRbvex7V2VtAYMbuxa5qX5Jx6UKQa6tRK&X-Amz-Signature=0a10e6079ca9e4a0303714344307b63a527f98120ba77de95154fdae85dc8022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
