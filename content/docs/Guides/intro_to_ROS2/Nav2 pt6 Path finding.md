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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=a68f82901bf8748cdfae51ae203d83534b4c8d40a6bc8f515c4b3c4489b81e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=e87d01afa7e6dff1162c33d13e2bffb4fff4f3a7a6de2f0f9b3a4950077cd3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=0037d6e6a81bc34a3a0aa648629fd0d4df448b12f26e33c4421dfd3edf345548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=c1deab3e81f7dd3db762754c033384e495cc596717f7938ddeba72f0a58be155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=4abe398824467b91ae048c128ee0268501f46fb2f0d7e993f427565be0240fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=7ab10f7267f352d683fb39766ff792cac1c87b77ea9b6da29885414477ce9235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=342da709fb631dd46c32e75c8ca8c0f57c4c322d0d6259eee3fb2deaca3466d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=2060508d53a83443730d16de2bca0ecb7f6c6e0ca0f6e9c6bac7eba8a6cd71a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=c39b177f2284c5d746c3e2ccd2812986fe3be53f954de1915b2f60643657e173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=471eaa3eb1cd81c74418ebf90bd04ae0e6f11bf4a20eed4dc5080d2504cbf2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=2e36cbf29a135723b31073d6632f3ddfd1e6838c8b711b3d1170646d52c4db17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=e99a15637e7f9b69f84d46d9028de67f1455361e95f67540d3e34860384a463b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TSYBFX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIArlLdYnE5s9i6CebJW2c42l9glRx7ECJ3Oazxh1WIcFAiEA0ZfT2XvxS%2Fsnmo48fE1i1Ma3aVCevtZHmvFm83RHXJwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGLXZow60U2DxnaJFyrcA3NEafDPZue9SdKqzw%2BKqRPNczaytbzCwgGVXHgYSF5LSA8swMSlCH%2FIYfmj93QGim8xteyLP4cwHfhIeXWfDdMfQnadrULSh4W9hLSEwvLa0K2p7kaDlTyjn4iM9VG8wVXBuf7lod8jJynqmU9JTJI1GyVSqUFcHpfhMZngL7n96AozWVLY%2FOVASyvdmYEqSExsRaFEurLRxyziwcu%2B6UXyEuPBCz%2FGT%2FUxPG%2BA%2FdiFiQpUy9nl7x%2F4m2OocP71MPDYQfsS%2BiIplizQok7S0jbfl%2B%2Fy6jM1LHR6Pc4r80S1soSl5HHD3W%2BHuPaz0%2FrxyfVLYeYXgAsMQOI4gtP3ZmeiFEMVLDgDgyvlB6iNKHgszfJfXMyjq5sEkUiU%2FjcE4ZVEfXEaLv0SBUA0qWvPnVJW1znahkkpzu%2BbxG81IkF0sH6A9hCLvrMkYB2vcjiQM6C5VyP933sL1ekr4qO1%2FWZ6YwOsPoIvicDCs5iMLsE%2FwhLMKvRhpf2mrczlngwt7jhTMccbua8azUMY%2F%2BLrr49SGGHE0mOmpU%2BOqdCtQh%2BwEhcmxXXWPq9YWm%2FnIQatnLv%2FIIrpeTtw47lFQKjkXn5v7NkMxsoX%2Bnq0kqFtHdvT%2FMBqhJIZ92cEaNFxMI7Ow8QGOqUBLxyDVbmTWsw2hU6qsnYc8VD1Ct651aMSZWMARsMUbPgesM3ymSCFQPt9mEssKbM3jQUEI3JzoKeEvzsA28X%2BQU7xCCjY9i05UGBuJJtiqCFMWNnKhYCvFfcG5aWXoDO7hu%2FTcewQfmi8KnFdDX%2FH5ZTxe4%2BqYC68l9yas2zWN3YsfayF98z7o20Qim8YAVfnynzxIeWxy2uGp9sjU%2FuZ8aE%2BLNQe&X-Amz-Signature=c1c68ce01ff7ca3951f9f1a750147a0b095cf80cdb696b7774837765d05c9b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
