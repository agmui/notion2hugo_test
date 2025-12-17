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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=8c998591f605b38ff25408697226a281391122f6d787d3ea189eab52dfc035b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=e7ce1325ea7a931fa3397b7a18b80ca0ca415c9fe16e6d9c649718dc3b6dc847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=91d61dab62c67b94bd56eb5cd6c9dfb5eb6726ba6cc97bfd3e56f47fc1667b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=9f1d18e747da154401654bbb513861caa243f4b5bda46402a6ec9dbee1024512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=2354cc9d97c8938ca29570263103917b722be9acc81c049757178919dc3b6b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=11618585d54e8bd6cb0948c512ca9ec801230b80b28d758ae2b99cc6869b596c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=b2458cbc3a7da0aff8a5a71cc7dccf6203ccc1add28b5f54ba6d74d39f088d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=ba797921c4ad9734f33e7c5df293344c0032c1a57af3d080e6ba49dfd39670a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=aabfff04727323ea74f64bc211a2a58513189171d5fb87e1a3f9f3097af7d750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=e674101657f3da48aa6a7c09c04fd84a46bdc48bfd2d36385ead252b45626e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=c934ffcd7396ee37171996cdc06c534f8d5b4acc79c2c1e4360f2639a3677062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=ef0b5a1c9e06206ed691ffe7bb7f4c60b57c5de171ad28d80e70fed7dd0a39e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=767f1e4a64d6da9a959ca2d69531ed2cf9dc4dffeec12553dcf91373a7d5902c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
