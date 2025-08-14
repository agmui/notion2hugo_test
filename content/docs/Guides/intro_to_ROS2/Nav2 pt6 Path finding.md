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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=3a40c09a1bf38a18c3355cacf3de7de0bc10e4ae1389dd20bf4ab6f21862e0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=b440ad11c19f4e1eb05c76566f50b745f14ddaa3b6bfeb0c6f35e5b6f620b699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=2420349c30ae4cdb02a576c09f4fb8bd32ce317f65ef1953dcc082cc1c024595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=6f9b4e5f8a06e14eb76e201cc178d40d6ec68c4f56415b4bf93c8d8e4742a2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=54e0211d070287f94d843d4713ac78fda7b18560377ff22f17012d9114e7986e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=d7a370cf267ca6eeb163ffd9e30bb4e06d1f99f8052fd3c314a1cb0003b05a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=f23386b5c8de4c518a82593143aabcfce82c475267331ca9d9d2be99382ec1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=e5f806964cd48e69517496c435b0fb55978fa7f9432486471b5e988975442dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=9b8b7fecd3e4b310a0ffdcaee46f91081ea11fe3c8fc202d1885477f9df6d33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=00548c4c7061468358c49704c051fb3f61d2cce32412362c50cc29aa1720a0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=9e49854b1fc0f88ec672144a191a36175efae46d2c6c4d8e15ba77dbd2abe770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=46e16174c2c1e582d343502b9c796663134f76c8c9d93f7f250cbc57e1fd1318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZTHP6V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIAdV7nRK%2BLqL9K%2F5iAcocAyqzKzoZw4Jfm9D5mPNBurjAiBr07gQkc7wyeqcqSSi%2F1V%2BFVDP65EzzH4r%2Bf2eFdWmair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4esiKfLtsHd0Wi1fKtwDezxqXzKONFtYY5ioEKDAnQxwNcIaYEgkCR7B%2BG5l%2BR5VI0Fp3Ui%2FrDdbxtL7RuHIdKHnT9mqaEEBz5XO%2FcL5PT0o4ViGiVHHvQsADhCBw2sWjRypPhCOSa7pPb7BC9d1F9Y2h7Sp9%2FubFxCJ%2FAwtHg0J6I4C3u5UcFyZ6AILVTMQeXj0pQuIFm3HC6hu%2BWsMsdNGBnBMEkVX90qfzTy8B0dLblhf11RuxWfF5GG7owUEZIcxImWYCaAiE3INGTYOMvIWBZkILfoxFazYpuCLTt6KAdlZoZeCHABSmoRrnSs7ZwsRJXTe%2BVrMJeXCH8TaYEyqO2nh42UXebDA%2BC6m85QBDcZzlWRQZYbYaFeW1srGvtH7HCDwYgOu8eMhrHwNTNIejwreJFF2NiebwX%2FnA%2FDZlmLTsiZqs9cr7LXA6uuWlMzE7qUrVtGlD8Qusds9oUf8GwvjYQrE3jT6r725IacLsplmnm8jdoyZ%2B%2FgumnhKxm2qiAiOJaWakVg7mwDg5ZlluKCEnLSwB4OoCdPpsVLvViBdi9HwL3B8x3DMdN%2Fh8qK2wYNXc4%2BKduen9hYNfnQONe1zpLzwmBoFEk8cprpLI%2BXe7oEIaawJgdRwgXrnzo9tSj7wtwm%2Fbu4w5Oj4xAY6pgEhvIgDkxs2WVltW%2BoqHFHLL6EQCFDmBeoUBHyVsq9qudwL9inozIiV69AD4UefVIiKM7CqCS0DrsyWrfopxTlxzK9QeFGvIAdiyuE0IXRzYr3sse5dUh627Gcv%2Bg9Y3IQog%2F0DK%2FDbXKoh1oon43dMg9ox5nWWI7UdhzAuVTzGgnFX2oVbOO0BTgfwBzJj6io%2BRIJpInnCwHM%2Fo5IcVCSkHP7ExdVH&X-Amz-Signature=1298043bd21440bd1669d91afeec792b14e88df1a54178ab773713edc3105322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
