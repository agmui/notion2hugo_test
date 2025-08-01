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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=c02f9e20167deb85a2862a46667cc275e918397543180379f52c3588d8175350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=6010b87ac8e4d00fcaa4a1995a74778402e3cbd1903fc54b073a5735193d64ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=27ead4fbe737df00cfedd13fee332198153fdb153cf415d2edc3bebbe41eb7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=f805e797f02b4f5b2fd8c924fee15ddf6a75bb1a95cc2021c58b4e66e79b698f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=564fcca4b1b823bab939890424e050cec6a8b5b744ce54b056afca0441b44e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=dfc0b3bcdde7a95018a2a6cbd506936a561fed803c2225593b9601b2bc617a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=c5da280294f42a49b348a9348e69189ce2f7b9bce529c46986e215ff00bb9c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=9486e7ebaddaca631e234ebae27ed0cf89843971d3cc4d065195a8bae3b730bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=fafaec44852e2ddcd2f264626db9b6122a8af3215756ac34a97a0edbae60675e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=fc6bf50a88d4656c4a2377bc3deac8c6ebb2023348dec7893ad58a7d62feeb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=5ecbbf7188a289c79da9ec04578cf4fb5ea6695c88335c54943ecfde296c78ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=7fe5dfc9386590536b592dbbdccc3d6fbd51f667d52f6fa3e6ca98f8350cada7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOTN6HL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3hyTzVQ8M1YI6vJ1yDkRJJ3nqVSTauSh5BFHfw8LsFAiEA%2F2kWRi4Ik%2BoqJcY2Ax%2FKcInfWZNBOxVIz7HX%2B44wyG0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLu496hIuCtfLmfvCrcA2y2jGhzyBbAbW86z3nifXAelLHAsZoKNkOCqMK78Oh5omOCVipMEnlfM3agxksz%2F9xvJ1LGECtHwHS5BLmaWwekvlFFN7Hw3YiZWlkEa4nHpOHkinmKNlrYrsVMnCuf4XnzXbvzLxCMD7NocWhe2v2jMcUGd1k2ZByba3spnvES8pHnXP18HctY7EGB7%2FmM%2BNexXwQe0N%2F7dNDrTbQdAcVtowmi9EW%2BNblyiCRN8pSXjtM5Pyzhwk6OpU7JlVANMYlVkRitSL6P87J%2FSTH0C9s1ODfgcu7PeOP32T97ecT3Vu3Z8JiULBJWZtCqI2EpJdKkcPqMs%2BrrrYUso6gamVTXl4pk7eA1d34ZAQz8Q8N9QDiFdDR37%2FztDl2bjD6OrV8089dRaWfQt%2FsJAxXLGJKsloL79GFNGkF7osQO7%2F%2FIWzJGu6EjxPETjY33v%2Fh4JUC3SRXj4VfQadjNVMn92RKBXcAAl5iLwyzxeqLz9XDzu%2F6lkCOD5hMG6GmYVRFjRdoe5JF6VnB%2BpUj7MRt9ra4g%2FQYk%2FhQrUD8hJu6fT0Tskrp%2By33Aq9eT40RsFwfl1OJTWnSvn0WrUm%2BElRjUo54VOXFXRfkRWT2p7BhiapOdvbugPC7m7LZuHbEpMNGxs8QGOqUBR8X%2F%2BPX2UXCQUFgh%2B6s67Y8Q2UdD3uf7bUlzMEeA5qis1SZe6FUftvCtoGLKYvnqLVv356uJS2Ik29SSa18VeuuO3GKD7U3FujDVmPoOaWSmNbHVb6%2FVwd2k3Fm2x2XKQnQwfCg6QCx9WK8gFo1n9jQIKdw1EsmJk2o%2BF0yn6NVKmci18HMtOLbNpUXshXdxK36oSaQLuUmLJNKnDJM2b%2F7nGeYL&X-Amz-Signature=9dbe682791f1edfa84c76b7bc84d107f60f254fe154cdb9180f2fc8739cc4a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
