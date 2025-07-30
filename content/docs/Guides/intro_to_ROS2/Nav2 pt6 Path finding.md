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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=1e393e39c062439e084051efecdbde9d63e14f82e6785d5beea238756f479f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=3fc8e8cad9b6df66d66cbdc0e1967ba745aa013b5e409efac4b75ba8aab520db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=34660c71209024a0b0702ad5b6c3f10fc6c3935bc501aa2562e41d970d22a62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=4106442c551cd5f8e2240e65ad49f45436a97d0a909a512f4e5c73e5df960247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=20f97a56a1796b7e1087a6c6dd21408e9b35ea84ecd79e28b84b305a3bbf49eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=ca5e133bccea11ed32f597009046700db12199795c31cac6d013ab84c58103da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=052d4ba6a227f755496e3e0fe5aa953df2fc123bb34e7d992ef9e9935af4eb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=40a5c6a5270131d6a4b603fd4301c1d44da4f5b4bf9dfd6c14a88dc28ddb5148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=ee7a1599375d763fc706a99f4f9d7a3fc0e3318363c5b87a9f36820383bf88f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=6d5113a9592e7c06f43c6b1f19f42f4324702accf56f2c6d13bec66eacb5a605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=309fb5af5e606455c1711a4cad86ccd745382f4d8009db5fa7ad4e555addb8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=43702e072c699f27718bfe40ab62fc483538b6a41ec5c72a968bec23115b5be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADUTRBW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHYkQsWmPNb6S7Pv82J4uFUsXNfQ3hmVycb20zxB4fnAiEAjbsBKH8Fch4k73X5d8hOAhdvcFeK4K9F9jGyvC4cy74qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdrMmIf8xQ798XdDSrcA1Ln7AG4NDNCt72m5ctlNqV2WgKcCdbtCzGlUmy9G1PAXT%2FcvrsF4WcSXonzTDiGbfsl36qTA7yTv1OUapXvwYfIyUWgV8aGvCr9e8mYx962tWll6AGCduzI%2FhaQDyxS4%2FtJkghKkkICmqwK%2BB6M1QAG7l%2F38%2FLZeG8ScJZBG%2FVYoNV3QH%2FuyFGHKdxOEAKQi0kzLtiblvc74hTE2g%2FyP0OMOFVQ%2BPcfl7PI0WAYZkWi8kUuGKSqg%2FJVr871giNmXWNWCsC3mjIJojYRo%2F7DiodeENZtGdWD%2Fba3hUsLAzh4QYfxengSKDPQdxL3TO9W2GzaKUcRVdkaOJImrzOCRDoHkc4K5UpPhZICLm59Gj636r6pC%2BBWlpVlH%2FWL4YZzwiKYVP3JyhXqaAaBJKy%2BKKZ67xGbSm78bdpGzlAaMxE%2BDr0hprRY4fHIGzuZOGE9tjU763%2F3omux8U34Mb41O5mgatLgFiudxpMek4QMXLr20WoG4%2F2hXeDjv5dhcS6YYMkrfefCRfuJakX5LWOijQG15vJjCIit79OEb7AF6z49W4CdPrqrruhhHqrrC0Nc6kPd0ZV%2FqKR2aEXeqZIe2h8EJ8kHhdDXGisuhPZyKEf5qu%2FYM4OoR203tBA5MPbvp8QGOqUBcRCaXQBi2gHJUtno27wEaHuWBIeiDGygdZDLZN8uxPv2AJKX7jmAhzwpEuTjHULHVXCPlK4C2YT%2F53oHSPS4Aaj6ADDm4B5%2F1hBXChuEVGYLuSbKOCA%2Fvx4ynBo4jWgm9N1kIic%2FLuKeVv4J6Ql1U9ce8riDtDxPv%2Bdn%2FqXeZH1fXexKhEQm9GlYhm7zWBDNl5eIWLkk6hLBvnJ6w8GU87WQRco5&X-Amz-Signature=b1ce7ebdd8f64e09eac119f653fb5807d88c64f5f5234cb8d8a05907995917a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
