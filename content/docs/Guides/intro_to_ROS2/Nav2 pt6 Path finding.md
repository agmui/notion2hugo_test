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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=2fdde8f9481fb0c4faa1b981e7232c18b91200c6084248f51ea3273b5b56526e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=072e5290abfc0f0cf342afda58638f6ffd1697ae93e69628ba64cbbbd85d8171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=1a699229ee4b79ae0f92ebb076769a4089a9ed7a03ac2bee7a185cbf13c14077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=01eafb6782247e516c47a840ec93f84c27cc61074393410412ad10b0687feecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=a1b4c4538a88f1c13528b07a87b749a6aa172024782aac06333d9b2102ec368a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=e628f4600cab743b4c72f5034c00a14859a273b03183fa30536abf539e0a6fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=06e77a2b9f53f7779d33fe1de256969ee87245c3999c6b0643110a9daa5b885b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=5d88ad48ed7d72367604a15cf1b2e712d460a1d30a3e0a874d2a60d2015334c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=5af3ab08172f2cde4e75fc167602d610df85df4f32f160b472524a27f4050028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=eec7a56cb3150619f6ec1967267b99789ddf128c1b01574711f5568cec67c7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=109a26578afd76329c402b7bf80fe948ba36972cc3029ccd16f8e028f0123411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=6e26e53f096f1b2ec34d29cc0dee26c9a3414165b67f48f1c5e3e103182d0e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QLJBYZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHbXguuNCUYJWCf1Ug5J4tNUAAHv01B8ekzGur4IZ077AiEAoSuhulnhxSlL9QnZY%2B75S0lq6PfRwdg2rVO1%2BY5%2BOlQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHsCIiMSFXx7aEyTRircA9vkSQJYu3clfrcEN8Y84MIEawxXWwISVZNOlhjs9Na0HSpQrF%2BdBUhg9Xt6Ncbpx2ZaBwcVKmcaw8AdM7NbA2kbSHfgcf5mZQio40%2BUQirnRW0GcKeePD6uNbn0lo41h10YuZSfgX91VzJIdcTtPivNs%2FV%2BvJSiqQ%2FMcGSMadk620xc%2BCckw%2FXbnpr4prKb9NlvdDgaWZlRMIHsm%2FQdfqjpVeIFss7V%2FrAUGPdRVLCwGcmr6aYYYTo3ESzrBi2ckql0HkI3xOxqjKSdVYe%2FB5C169A933UsJVAjxCgeCDp6%2BPTCIMYITGkgOKFp0yT5THN8tx8xw0jHXFjQx1AzkfD48tb2U1uM%2BG1wmGVfbiCSssy4jF49zToVvTZ%2BCx%2FIx8z%2FQr%2BNqr7HU9cZFm8Y1d1rOslkYWvUe9NpmaGocfqqfkfQ4QXiA21mzZhkX9rH39fZ4weOY7RFCViEzEYXVc9NOGJCfIdRG64KRhjmSPbt1Jdj8jO4PROFAi9qi6ANEgpykX%2F%2BxblrpEoO9lmuti1jT2WdyB12Z1mEqluT%2F4y17x8cVVwdg0cWpaHaQrJ6RQMHEnwWzXvy%2FXwCuE7y%2FVLdoEdsxtfg65yMbRGFBHiVKBHPph0YQiR2n3cXMNmKgMUGOqUBfGLnsnR0S0Ly1pzVA0UXmXrFCYnPJ0b%2BgCzKMPWWxDbsDmWbpmfRwFb4AuZ3Moomck9C488HJWyIRJwmFfZk4qIUyKDq8gFSbpzUyo3iDjiyFW5it96Pi9HcM8vHT4K6lir1FROftBOt3fqdAzpzN46u%2BV%2FMcxofAAW%2B43S48LxUEVbZPqkpGrkvpz54xJbrQiJVxXd543%2BwXsMANalmfDOMs2tL&X-Amz-Signature=6f4b4161cb4f40bc9e712b12d05f7cc7f1203c6b0f106463d7e4571b1d1a1327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
