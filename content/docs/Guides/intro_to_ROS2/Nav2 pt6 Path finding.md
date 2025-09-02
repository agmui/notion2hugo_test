---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=9454f227a8c8e07208db8df589fd00cf08cb98b70c9c6b5cf70e1acf9315adb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=8c829e13e4ffafa91ffe3d327a370589f7eabc7d967dff7e789e65c6f4552c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=efb0e0d1fc8d1fb692a1634fe85eb1d33e132ade34512f4616c3d16fe12afb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=d8928c47a50792bfdbe3ea24bebc536215ab2b763ac604638b207d7f77539f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=8d7edcb9e4e30fea44270b31d1289824aca4e047b664d63a94018110e5f8640b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=a2975f0b47183cfa7fd79c0589035cef6f079ff580cf64d9928d48c56f191344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=32689e2ee16da1e4f3d3832cc318dcd0a1dc4a71d4f6fa20191c827ee8491f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=655e1a1181c0a3822e6dee81e784d713cbe54f25ce9ee4eb06bff17c50b56ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=247411f607661cbf5db4e579778c28ce30dda36b367c6e393b891f2d60142a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=80a3e9a0dca3691caf054001a32b613caed0413a1289f71d0e5b194b4caab64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=2ebc99697129e3411afecf6b6f0bcf17434316361ea31986718b40ce93329650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=c58fd040d5ca96911fb7a7723a1cff5f794ff79b89dcf2f1edf0430764cfe1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DV6GD%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6JcJ8s0Ak%2B95m9taF9wFSYVXhSH4YQgLJkvw8aj5Z5wIgO%2Fxp%2FxNn2HdEs2%2BByMWnzJTck3R%2Ba00hpztIgOMJqhIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH53uI7VObqNAzZ3uCrcAwJkpoteQ%2FL3bIPZnroF5QdCduBH3xjbPcQfkvUMolY%2FvHrdwZW%2Be2Nx7LB8g14HDVxt8U5RUp%2FLGrYI%2FrEBa57N1iKXQvV5U%2FNNHe8wVCF%2BTIuH0%2Fm9a5w5fFScbwkjsizDtbolalEyLPdnVq1jGZe63ENzAxagMnnueRM9ez9sQuXcwNeqbMgy%2Bir8YSuBMDlhZWCEv8Jch2nPWeLeWBATog8l2FTK%2Fz0Yp77empomzzeQMTmTY9VYI065ajGUR%2FdwHXxXfFQrew6n9U0hUVh%2BWmTh7gSjDTlp%2FgLH%2BPIA%2FC1l1cqtQoxxZwLBJgpgmWIcMU7LBOYWetOL4jhXQB2B0miY404loDoJWN%2F7%2BPUeaEDfFFUr5Tv3kl8Wog0IDSp5I7mfpRfQoJm0rZXAub5u%2FInnvYkzpwoxr%2BvGv9q2jcoFgFH7Twyn1PAaLDw54IGO119VlznkpVNW9%2FCD4hKnxei3WJj%2FmdvJbGnX5GN91P48IeJd6WusU2JsdR%2B8s8UWK4e3gW3uE2VCCDMwV%2FLdASbASlW3vima12SgbMkhC%2FtsuarRbWiRirvl7rLbBDmh7hjPWGL2yIu6oJ4PaMpjPQ2RW3R%2FU5I9963w49GaeIEd1L3ATv000ET8MJmK2cUGOqUB86MFtwl50NHEwhIx3GAuNN4wwL5DcRJMjd1dZHU2CaFbROct8NgtZEbCO6yPVAOvLFhIdc9%2BSlMP5S5VjrInF%2Feu0jQmw%2Bf5UeKXxO%2FDodTgyKj8HJOyRJn6C962HSj8BADbu05CSeMMGlEko4SGkyIOU8vyClclMpeuDXlfjdhVypjPnQTZ6uMzjuGYs6aKNEwyCNwU9yxG9EuC7xCMaarDJlqa&X-Amz-Signature=4068dc8d83c532b6db80897c309239b35ecdd916451ce60fe9308db7016c10af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
