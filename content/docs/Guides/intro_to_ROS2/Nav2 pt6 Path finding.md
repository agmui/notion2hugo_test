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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=78f4088f4672c086690f33ddd982f97d13adb5e100ea0674c17a0c1afc278fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=6d130cd5ef6fab8e3ed4c152499964e98ce7e64c1ae00e601455f8e6731f093c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=f660fb486b0e58d6fd343891a130f4e5e4040cee0c95b8bd09ad591a709e92e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=6d7030139da0f6477f4acc83cb8dedc6eaf0f1b1535713fad1759139d95fbe01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=09f796201766c913989471909abf9767d254dab866dcc90cddd89875c9eccb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=5c3dfd6e539e60bc80f7117b5a516ba4011cfb3afc8e615d12cd5f8e39989775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=f3cf98e9cb52362e3ef9c5b630a1784130e264ebe1f67133a86dc866f1975d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=037a017e92d4b228853a6f9376403b8a6644c69a1e67f7feadca33565f3e6a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=bc5933b640a71700055628b785d7178d169ce272069c69bd2636b26b755350fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=555bb3788e8cef8405272968dc74f0f679d695447cf3ade00216ec0613845a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=828090f88316c6fb0d66235f4e5885730bffe301f0c0e6894143f66c8d0462ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=ce47722590c11970be51a242a0cfc90d2cd2d9fd7678dd534b00b4f5e6c35e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4ZIGQR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaY1TeW5YK9mJ7k4AyHiWQAT18vqrD%2BDxSYm8aL9BjnAiEAuMiECTUz1sRgkBH3iwaYojq1PqInAR45VKF%2FVTzYG6UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOkoSFUywgzxdWNAyrcAz1rHcZ%2BVYDXGIj8iG%2Fr4HcEQ1gpAJ2w8wVc1AXZeto6WG2hn%2FdISmqBzdss0OCa3wNbPsjE%2FEc0SnLSbUOi%2BLVu052cX5S5mAS35MRL%2BXVQJhWV%2Fv7KawMBgnrePryCX%2BmUvyJDXSU7eygYazHgS7UJ2Y2cU68BZDgTCbie2pps0l7QCyvXcTww6tsakA9jQARXvZDyNyvTOIgdUv%2FhqdhrVH%2BesfTD2SwKAUe4fyh3F2QehUv3BUQ4LIIOMbM6OXO2D0jolsEVFpI6lnOtc51p4VWJiLHbmlJZScuhj929%2B25y3vsntk58Uq3%2FE3DK%2BRPaFLamn5EUizlUCc4C9j9ztgEdaotaSPXlnezSY2cJJuqimdW9%2FXzm3a4NvCSeMQTC23vfroaTRXhiu4RWjHwngJcZrF%2FI%2FNRmjRe3Y4ZUgklty9NvgrN1uJ97R%2FjuAOKra3gYw0nXHcwhnn8B1LRCfBXaHcmjA82OAt9zkYbo%2FcpJyd9TZ%2BJjLP4%2BqD0v%2Fkd2COfsqdh081nMLpoXyYzHHiwstiAKDA8vqORn784bn%2BKG2yhdVHx9cDxT3E6Bp9wpl0gMkaam2ebZKB0rBKUljGlEo2RGtYVw0Ws2%2BcBkeZdDu2OKn3R42AorMKqdtsQGOqUBFp7yDV1PWqJ%2BR6OUjf5Zl48jolRN4atX0gkQta79UPG9sGhz%2B6%2FuCGTxsn3anI8F64uM9kwxnfABtreqwD%2BrhkxcWKoTFpZZUnNdYH7jDFtzRMLDr%2BRpTqr5cKT%2FJoBOGJsNQI%2BIo7qeoMhBlPKwIxtlXHu3iD9bRnRlmfojfyESwluiRnPsGYtqSjNIuqIFwIZu1qtaUsJ8x6%2BJ3bkmkK0Mknf6&X-Amz-Signature=1ecb779a9b4340912656bec5d5f070d646bf1f0cbe6522835c4da8d94df0290c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
