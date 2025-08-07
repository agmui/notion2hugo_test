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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=88a132826cec1224b7faf7621a0a95428809346da213b733477b2529acbf3342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=53b5f1c0f08b8e5a892aac2d79a7f6cb0bab062147985a49020dcebaf32b8a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=c526cd2f7e3aec2574693e715d865490317420f2ee4417bcff57afc13ec50988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=eef4486770938b654a8110b76c9cb01addf7954581b2b1a6b55618e8b2554871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=230272f34ebab7d97bac84e1dc47faee90d815bebae741f07d9f9c29afb2968f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=f83fa808815425c415ab03bfa4781a349bd27af11839d17b8603ed2d06d39ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=852d2c7e49ea64c2f119a1a039734a0e2cbf612e2e48d35e9b07019ea4621af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=73127c8756099ac3573d9813b6c1d0e927e9c3fd72a2c13b23ec93c791e89b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=da6972ebebb49c3098f3054b777e6ccba4ff768db50a9f3159aac42468a2f778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=bb658f35449608ec40bb89294ec021f9a226dc2432e1836a46f1762999af643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=26b887226270c9a0b966568083e5c634e61f2980df1c7975cb51051b8f22370b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=f93780ff22bf5c5dc37b2c587b687815cc01f9f80b4264bf0fdf0d5048479497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTWWRJK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBJsnlj9psLQMK1iJLgTQ026bMY5vQtuhSOl4cTOYcDVAiAYceRvKk4DcGcMWmRjKoA5YMR392D%2Fd6n47lz%2FMG0HuiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVib7%2FjZ6KXp4bP%2BJKtwDzD712DGmpPu3TR8bmmRSrDRLlsGU%2FanCG7VK4wwNcxs5PKNRchkPCwWUWAjZQrkCtzhlhIgz3gc4NRsGRBTKElA9ZYwX9EhQXWBTniu23x%2FD8XVeKBUTaIEIUqEp%2BViw1Mo6NLXB39lQ7ipu6hWDIlOIIqYm8qJ%2FgpkqyDtB2zL2414vxajs%2Fi3O7fiyfcqZoWqxmpw%2FymQRilHZ5FcdVpp25G8b2opeBnHI9HvPQDquF2L5%2FR7z9sGNfLO2wugt%2BjhxgQGxf34mzOO%2FTBKrcDE7QZ3xv2r3DURxV9DufBmAuCp8anY34nn7S2G1Bjl%2Fr4mvbFGfRRmdzn2Y%2FdpPXqhjA0n7j6DhQ%2F7ucHVjvKF7VWrmJohpci2kEa8B7VjynlvZ3bmD9rd3OfAJUJdg16Pab%2B%2BhqBDlUL8JphHxPq29fVC%2B0HayObaOITXp4Zkit8JvdVnKVa6KRVAXpps6F23Tdu20EG%2BsqsJkajYrv3ebgPuPqtwJ%2FLlLjQ4loCauWl9A34DJsHjtGFPF6DgRahvJNnayqswFUMRTBFu0QmOyExQSyMDKLjyDHj3CVveHtatUOvq9aZOYsF%2FCf6E3hsEiXcMgoQXBAPdjkeb%2FloOCEnG0c9Jge1E3ktIws4jSxAY6pgHANEfgc2Mp1IMZdMc1hEavmr8yGo%2F84FNUt7jNWkY%2FctNaBdxaATW7XlrW6z2EpK80WIo0Z4fMVwsiDrxzO2EDHezl3J5zE8QT%2B5AUtZUPzJs7zzIoSloKnWmYZul%2BSXtsuKU9n8DxHRFLkyTJ689q7HsSZJHmuuYx%2FAuEwkCSzfI47OIaq%2FLSpayeO2ZxlOQRX6DJFpmSdCQ1r536X73WZzKaBNqY&X-Amz-Signature=2acd1833a270e36b5011b56e777d7af56b4a6ced234b581c68f6c5fa47c7c969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
