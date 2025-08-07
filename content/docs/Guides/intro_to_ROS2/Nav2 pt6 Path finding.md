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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=0a1b4530c8b8b814a65210d7cc26fa7d282a84f67ed68971fa19ff51a8c1b302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=6abd2d8ceb758a63c2feb81b64210d6977a3c1cc32f20e5c961ef14ac416322c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=be4ffe66e1308b9b49f206967100efe8c370f45b3e69ac4d8724afdb0458accf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=697ee0a0b4524eff4696893815cb7cd8083ec12eb7f63b7a216453aed7b7abfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=f4ef361eba4983a929498f8901e14142fccb41cff186ffbfa6329d84e3b8a64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=18358927bbf2116248ca9b8800a13da93275cf572d838192b5870d373110a885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=1f21f614860a2e0146a5a517e858c43ec2e5d454fe77d99a588540c940b8a4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=01214ef799634f80dfe9cf4eaa973486910589bfbbe1fe56ace2cbef36ecedb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=df6322f6e872c59942e44c08dca1f2fa9c2159a1ad0bd2ad5c0bf8c0c4aeb01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=407092b303c194baf961606c257e6e27dcf599a7002cae5de68d65db869ce95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=96a5a378b98828fecd9c890ca0b6dccfcd223f45cde1d0cb46f2932a27f159e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=725a19faffff83be87db957b3a2a591d86b926e1e5a346f4c261d5a923ecc936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTP3GAQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIETL1T0S0eqk76YRnKn3Y27uNLocbUDgG8dDVMMBii2yAiEAnMyQ37dl1DHPhwDurNo9SsmtB9aar29qdK9n4%2FlndZgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWGrD8DZtql4H5e1CrcAyZdzGl8uwyWbH3WInjR%2BTPKd1J3ZJoa%2BJ9NxTEjloA6rXQL9weBgtKk8UxtMmPb0SXg29rPcGQ4ljMkzwb9CXzRvH1BQPrAyH7yGU9C7yzYkwONQGNf0DmqpC4ochItPx%2BUu%2BddLI7fOHAeXEKAacCeqwUiilk80rMROAUceKTCKr%2Bo0sCFGvLb%2F9CzSyBHkPSfG89qeCKyxbLvcTZaqym28ajY2xtz7D1vP1YSdYSpMq6JqJy%2FRliJTfHv%2BDQTzw4JcVGy4cfLM%2FG8QtzhmqRfAYxuK6%2FFtqzmiviebnlJiIpMw1GSCyl2NsoGhszOFjsWZ7ekMJUiy0CQYjSbiVZ3%2Fhfe7LLrlhoCY8f77k80yhxRneoV4claLMhYN5hwrv5Lv2S0N9kECx8r4FN5H1F3NoVszZ5Cj%2BcU0JS6itYc8ixggh%2FufWffTsIpCMmVnhbOOq2wYFuyqk6lP7p9UIaSgC8rnfc8LHGWvZ8mb5YBlwLHQOkifv0cIFKW3%2B3GjXY1VFZ12kkSsssQWnpbwJ8lTUV2DPUye7NKHxhA1m8Yrmt5gldl5Eg4jzsLNi7qzgEXFnSC1yV3tSzcVHnbysTVMXa9NTTToYhp7fTodoMi02NFoWXaDAFfDFUvMMXu08QGOqUBoAoCLUFK2Xh7y%2BTKiHdrxIOz2leVB9IBmGS3r1CYd8YqWxeloufXJ1sBa8clQ%2BlBXQQKuEs21yTBkhlSmv0%2Fmx2ruJlaTqXoi%2BrlYT0vDHllSE3WJawpcJ8h4XuX8PzkS%2B1wz95Vk9P4rY5Yq%2FPQaBR4o%2Bpb%2BY%2FSNiVFFwzDvKlw0fy049euaZs9cUyVPWexUb%2Bxmbt0NLKITErumT5uCjOew1Xb&X-Amz-Signature=d490131deb229edeeee448663fbd7002aee4fa17db81cd186710d066747327ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
