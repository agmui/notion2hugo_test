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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=83ef98681e3b9632ceaba13726918ded59c77d047efe7953b605bdd4aa1a7bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=3401369948ea6a09511b4e51fe1ea0c997e440858251278e9ff1b512f54288dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=db684056da5034674a71e7937207a5cbd28477b941c4852349f59fc0afe82da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=ea29a6163d1fc1952b62e66557febf01ed409affedb38b0b603be91cf285977f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=8ece76804262c31da57641a14f0f861cf90f0d4e284d6f6e2643e79b62728c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=b210345c78f0843eb7dadd20de54c9ea5b67fb14502e20b9032102c095722ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=942056e1922427bebde07cf1e58c3f65544a9ee4be6292f610afb962aef8dc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=de7a1394f08e140760e9a770a3169688b00404990ee0ab86431810e1d0357e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=859ef05405ec32324faa03fb76f420d3469a04a02e9809cd981b2fa17d59a0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=c6032ddb96b651488b3acbe7034303f8dccc516b4c4ab7e8f3b7359842aff871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=82e37469662b29183cc53098ef088805664237f3507609454e4376c819890a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=2912168d4fe095ea434a02e1ad4895f2c0464be667876618b2f41213acc2150d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MZ457U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAOT44oPokSs1MP2I1wM%2Fi4pS7aXc8f%2FFPUORmp6k9QIgFmXQ2NxcdVWOWcyAZMNnH3NpMvn9uLi%2FdRgVVpwocDEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrcmNjQuLedZTBLcCrcA58d6Dj0pz%2FzQ7ZlQxm4UpCodsDbmQ01gLc1L5J2Kkkzcd6h5Jdeg3LHWO9E4XI4E7p0F%2FlCF8Sbc3HGpJJSGqVepBTcwzapKAam1yfj794LQSXBq0Vjj%2FojYk3LrzG9Zo9j0NoOvlBX3ZeWfBtsDcPPqfGZUQJKjcZENwbfC8qoli0iCNdZm74asj8J4aNM2qLRm1%2F8oPA6zXWR874mI7e72GX2%2BlA4HjAwGq5saK5sLhKBgM0tFCb70Hz8RH1JrxEQgRLxTABpeis0eDG58u61DLjevse2KScyhrFNwewTxmPr0338uWy34coaT%2FJVj4B9gAeZ2bT%2FG4lYfQrPbp1Cn6xSDlvu6%2BSu0b1NKiO2t6U%2BVeYzARKCW%2F3%2F89naPZ3m86kSu7313dHPfaP3DgylUC0XRPXP7euo1TAkXjGUsSSjmL92vdgn2u8As7zVE71EJvjUWrYZeH8DBH1UpLS1lprXS6b7AYlcJ9AuKCctrRPKBnVffcBoaPaf5AwJZuYYeDvXq%2BDVKb9J2ALjLczMI1QlRhH50xsCKSZaeoxAH%2FJ82GGx4DgQlTd8DUf4WNFIbJAmMOulWhwNJj1g6E3shH3A0wluDs2TbHd%2FUBEtCz1pQosOOnE6iOQyMIbStcQGOqUBE6k3KdWOZjcchYE%2F3W%2B0JLSQuHjcnLCcLeW%2FBM7C5SNmFKHh%2BTDGnqn0Edk7M7fRaKBWlKe0uFCzucdL9rEN6awlWbeHGDAJ6OiciUZAu3a%2B2fy7bGeo19gJ6wQqpOIfMqvYCn9yhcxFmSqkg7AlLk%2BG7jc5%2Fe8pxfly7FwZeH%2FBugKW8u4BEkCcKeEpJ2tmVKOvKLafw1tA23ZEwwd8%2F%2BRagXj6&X-Amz-Signature=5f0da3349c17e36faeb0b5e389909872545e8bdd4745bd05cbde0bc2f042f210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
