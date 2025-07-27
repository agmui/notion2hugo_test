---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TCW3CZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCre20JvLA0V7DzqYg%2F%2BaUDip6SjA0GPd2uIL447pmkggIhALvI848K6CqiwEOf1imU4lXisjeBBBEBF8GRvPpwTtw%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxx0%2B1fG9qTLj6PNcgq3ANl4Sxrd2oXNwnZI%2FXQwCAQfgYoBrdNjJZwLnkiy%2F5XlHb7CQf8FXcbTzlKSIUiSzsEgpTYbiq%2FrPJ6EY9pkzrRVq%2BkOPv6pjjij7Orn1%2FgyOjcExsKv7h4zCTc5%2BD68O3zpMERjRLUrBHgFjdgf2uCgkZj6WHB43095UqZMh7ypVh5tAQxQb%2Fs%2FeK5PZB9UAeJZ3FjML0hhfBpMHR9Ex%2BNaAZLH1n6pYLhBUh1S3oVwTz3Zx27bafNg246TENvVtU%2FaEAG3h9ReoX4H2JmxCLgQAl34RnCdALfxZLsYzpYniVkw%2B%2BAwCxTcSW6MHIxyg6HQ%2BEahur3h87j2CGb7X9AUzfV9Xt5M8Vn%2BK%2FMylFt2zJ1NPlySZmWYeRRMCq%2FbW2pLojbwj%2FIr9U21LQZHmodE4%2BDt9ZXFbQuuwHM84AEPK2amf6my4MW6MHPW8TpKoEbDAUi%2FGGl9q58hfnl5rA35Sc1KtSYuYY4ypElw3ilSUWeUpvjqZjefT7xiI4mXPlmpedQdMi%2FOzxWrID11Vc1A4OIHJeAK66YvjS%2B8hkQl%2BVUQgdIKea8sZQGvqoIvWaPP6wBeP6WnqIbHm5PhXzvV7eKyxY1F1TbiUqZpz8dHXOTJAccbueIENW3rTDy25fEBjqkAUInLFAedqfveNB9UsZrZWlKGoGSK2sDj%2BNpce9sJqiSyR79N5feJ6ulecq6EQqpGOQqdqBHRVTpmm4bBQAxdGTppdLyNYf%2BXxp%2FLRlHex81s1CjaA19%2BJuypv1AgM%2FkLcFl7vXqzER5p2jXti3TbHeQB8kHeyPdUvLfWErUNiMYbDMzXo%2BQf43lRb2Buq3BDCh6N3GTTsdIEDJm97QT68PO%2FCrK&X-Amz-Signature=954f6c599596095fa43e8d43d317517bdb35030f631aa23f61b2029736a1066c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TCW3CZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCre20JvLA0V7DzqYg%2F%2BaUDip6SjA0GPd2uIL447pmkggIhALvI848K6CqiwEOf1imU4lXisjeBBBEBF8GRvPpwTtw%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxx0%2B1fG9qTLj6PNcgq3ANl4Sxrd2oXNwnZI%2FXQwCAQfgYoBrdNjJZwLnkiy%2F5XlHb7CQf8FXcbTzlKSIUiSzsEgpTYbiq%2FrPJ6EY9pkzrRVq%2BkOPv6pjjij7Orn1%2FgyOjcExsKv7h4zCTc5%2BD68O3zpMERjRLUrBHgFjdgf2uCgkZj6WHB43095UqZMh7ypVh5tAQxQb%2Fs%2FeK5PZB9UAeJZ3FjML0hhfBpMHR9Ex%2BNaAZLH1n6pYLhBUh1S3oVwTz3Zx27bafNg246TENvVtU%2FaEAG3h9ReoX4H2JmxCLgQAl34RnCdALfxZLsYzpYniVkw%2B%2BAwCxTcSW6MHIxyg6HQ%2BEahur3h87j2CGb7X9AUzfV9Xt5M8Vn%2BK%2FMylFt2zJ1NPlySZmWYeRRMCq%2FbW2pLojbwj%2FIr9U21LQZHmodE4%2BDt9ZXFbQuuwHM84AEPK2amf6my4MW6MHPW8TpKoEbDAUi%2FGGl9q58hfnl5rA35Sc1KtSYuYY4ypElw3ilSUWeUpvjqZjefT7xiI4mXPlmpedQdMi%2FOzxWrID11Vc1A4OIHJeAK66YvjS%2B8hkQl%2BVUQgdIKea8sZQGvqoIvWaPP6wBeP6WnqIbHm5PhXzvV7eKyxY1F1TbiUqZpz8dHXOTJAccbueIENW3rTDy25fEBjqkAUInLFAedqfveNB9UsZrZWlKGoGSK2sDj%2BNpce9sJqiSyR79N5feJ6ulecq6EQqpGOQqdqBHRVTpmm4bBQAxdGTppdLyNYf%2BXxp%2FLRlHex81s1CjaA19%2BJuypv1AgM%2FkLcFl7vXqzER5p2jXti3TbHeQB8kHeyPdUvLfWErUNiMYbDMzXo%2BQf43lRb2Buq3BDCh6N3GTTsdIEDJm97QT68PO%2FCrK&X-Amz-Signature=9a3a6eff9584896f1a0e270e7384e669f8cf3c3751622a904b96fa32ffbc5aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TCW3CZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCre20JvLA0V7DzqYg%2F%2BaUDip6SjA0GPd2uIL447pmkggIhALvI848K6CqiwEOf1imU4lXisjeBBBEBF8GRvPpwTtw%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxx0%2B1fG9qTLj6PNcgq3ANl4Sxrd2oXNwnZI%2FXQwCAQfgYoBrdNjJZwLnkiy%2F5XlHb7CQf8FXcbTzlKSIUiSzsEgpTYbiq%2FrPJ6EY9pkzrRVq%2BkOPv6pjjij7Orn1%2FgyOjcExsKv7h4zCTc5%2BD68O3zpMERjRLUrBHgFjdgf2uCgkZj6WHB43095UqZMh7ypVh5tAQxQb%2Fs%2FeK5PZB9UAeJZ3FjML0hhfBpMHR9Ex%2BNaAZLH1n6pYLhBUh1S3oVwTz3Zx27bafNg246TENvVtU%2FaEAG3h9ReoX4H2JmxCLgQAl34RnCdALfxZLsYzpYniVkw%2B%2BAwCxTcSW6MHIxyg6HQ%2BEahur3h87j2CGb7X9AUzfV9Xt5M8Vn%2BK%2FMylFt2zJ1NPlySZmWYeRRMCq%2FbW2pLojbwj%2FIr9U21LQZHmodE4%2BDt9ZXFbQuuwHM84AEPK2amf6my4MW6MHPW8TpKoEbDAUi%2FGGl9q58hfnl5rA35Sc1KtSYuYY4ypElw3ilSUWeUpvjqZjefT7xiI4mXPlmpedQdMi%2FOzxWrID11Vc1A4OIHJeAK66YvjS%2B8hkQl%2BVUQgdIKea8sZQGvqoIvWaPP6wBeP6WnqIbHm5PhXzvV7eKyxY1F1TbiUqZpz8dHXOTJAccbueIENW3rTDy25fEBjqkAUInLFAedqfveNB9UsZrZWlKGoGSK2sDj%2BNpce9sJqiSyR79N5feJ6ulecq6EQqpGOQqdqBHRVTpmm4bBQAxdGTppdLyNYf%2BXxp%2FLRlHex81s1CjaA19%2BJuypv1AgM%2FkLcFl7vXqzER5p2jXti3TbHeQB8kHeyPdUvLfWErUNiMYbDMzXo%2BQf43lRb2Buq3BDCh6N3GTTsdIEDJm97QT68PO%2FCrK&X-Amz-Signature=0a69d7c5723576799b6611f3dbf47bcfb71dfd4da16445bce7ef5c683766c59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TCW3CZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCre20JvLA0V7DzqYg%2F%2BaUDip6SjA0GPd2uIL447pmkggIhALvI848K6CqiwEOf1imU4lXisjeBBBEBF8GRvPpwTtw%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxx0%2B1fG9qTLj6PNcgq3ANl4Sxrd2oXNwnZI%2FXQwCAQfgYoBrdNjJZwLnkiy%2F5XlHb7CQf8FXcbTzlKSIUiSzsEgpTYbiq%2FrPJ6EY9pkzrRVq%2BkOPv6pjjij7Orn1%2FgyOjcExsKv7h4zCTc5%2BD68O3zpMERjRLUrBHgFjdgf2uCgkZj6WHB43095UqZMh7ypVh5tAQxQb%2Fs%2FeK5PZB9UAeJZ3FjML0hhfBpMHR9Ex%2BNaAZLH1n6pYLhBUh1S3oVwTz3Zx27bafNg246TENvVtU%2FaEAG3h9ReoX4H2JmxCLgQAl34RnCdALfxZLsYzpYniVkw%2B%2BAwCxTcSW6MHIxyg6HQ%2BEahur3h87j2CGb7X9AUzfV9Xt5M8Vn%2BK%2FMylFt2zJ1NPlySZmWYeRRMCq%2FbW2pLojbwj%2FIr9U21LQZHmodE4%2BDt9ZXFbQuuwHM84AEPK2amf6my4MW6MHPW8TpKoEbDAUi%2FGGl9q58hfnl5rA35Sc1KtSYuYY4ypElw3ilSUWeUpvjqZjefT7xiI4mXPlmpedQdMi%2FOzxWrID11Vc1A4OIHJeAK66YvjS%2B8hkQl%2BVUQgdIKea8sZQGvqoIvWaPP6wBeP6WnqIbHm5PhXzvV7eKyxY1F1TbiUqZpz8dHXOTJAccbueIENW3rTDy25fEBjqkAUInLFAedqfveNB9UsZrZWlKGoGSK2sDj%2BNpce9sJqiSyR79N5feJ6ulecq6EQqpGOQqdqBHRVTpmm4bBQAxdGTppdLyNYf%2BXxp%2FLRlHex81s1CjaA19%2BJuypv1AgM%2FkLcFl7vXqzER5p2jXti3TbHeQB8kHeyPdUvLfWErUNiMYbDMzXo%2BQf43lRb2Buq3BDCh6N3GTTsdIEDJm97QT68PO%2FCrK&X-Amz-Signature=1b829d9dbba692cd73bdae3582366531073b705c0289b47eb186ffa6c51de582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TCW3CZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCre20JvLA0V7DzqYg%2F%2BaUDip6SjA0GPd2uIL447pmkggIhALvI848K6CqiwEOf1imU4lXisjeBBBEBF8GRvPpwTtw%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxx0%2B1fG9qTLj6PNcgq3ANl4Sxrd2oXNwnZI%2FXQwCAQfgYoBrdNjJZwLnkiy%2F5XlHb7CQf8FXcbTzlKSIUiSzsEgpTYbiq%2FrPJ6EY9pkzrRVq%2BkOPv6pjjij7Orn1%2FgyOjcExsKv7h4zCTc5%2BD68O3zpMERjRLUrBHgFjdgf2uCgkZj6WHB43095UqZMh7ypVh5tAQxQb%2Fs%2FeK5PZB9UAeJZ3FjML0hhfBpMHR9Ex%2BNaAZLH1n6pYLhBUh1S3oVwTz3Zx27bafNg246TENvVtU%2FaEAG3h9ReoX4H2JmxCLgQAl34RnCdALfxZLsYzpYniVkw%2B%2BAwCxTcSW6MHIxyg6HQ%2BEahur3h87j2CGb7X9AUzfV9Xt5M8Vn%2BK%2FMylFt2zJ1NPlySZmWYeRRMCq%2FbW2pLojbwj%2FIr9U21LQZHmodE4%2BDt9ZXFbQuuwHM84AEPK2amf6my4MW6MHPW8TpKoEbDAUi%2FGGl9q58hfnl5rA35Sc1KtSYuYY4ypElw3ilSUWeUpvjqZjefT7xiI4mXPlmpedQdMi%2FOzxWrID11Vc1A4OIHJeAK66YvjS%2B8hkQl%2BVUQgdIKea8sZQGvqoIvWaPP6wBeP6WnqIbHm5PhXzvV7eKyxY1F1TbiUqZpz8dHXOTJAccbueIENW3rTDy25fEBjqkAUInLFAedqfveNB9UsZrZWlKGoGSK2sDj%2BNpce9sJqiSyR79N5feJ6ulecq6EQqpGOQqdqBHRVTpmm4bBQAxdGTppdLyNYf%2BXxp%2FLRlHex81s1CjaA19%2BJuypv1AgM%2FkLcFl7vXqzER5p2jXti3TbHeQB8kHeyPdUvLfWErUNiMYbDMzXo%2BQf43lRb2Buq3BDCh6N3GTTsdIEDJm97QT68PO%2FCrK&X-Amz-Signature=9c836365bd84b96db63cc9c316b543fe7027601104e01d6d7cf49546d22ae7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TCW3CZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCre20JvLA0V7DzqYg%2F%2BaUDip6SjA0GPd2uIL447pmkggIhALvI848K6CqiwEOf1imU4lXisjeBBBEBF8GRvPpwTtw%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxx0%2B1fG9qTLj6PNcgq3ANl4Sxrd2oXNwnZI%2FXQwCAQfgYoBrdNjJZwLnkiy%2F5XlHb7CQf8FXcbTzlKSIUiSzsEgpTYbiq%2FrPJ6EY9pkzrRVq%2BkOPv6pjjij7Orn1%2FgyOjcExsKv7h4zCTc5%2BD68O3zpMERjRLUrBHgFjdgf2uCgkZj6WHB43095UqZMh7ypVh5tAQxQb%2Fs%2FeK5PZB9UAeJZ3FjML0hhfBpMHR9Ex%2BNaAZLH1n6pYLhBUh1S3oVwTz3Zx27bafNg246TENvVtU%2FaEAG3h9ReoX4H2JmxCLgQAl34RnCdALfxZLsYzpYniVkw%2B%2BAwCxTcSW6MHIxyg6HQ%2BEahur3h87j2CGb7X9AUzfV9Xt5M8Vn%2BK%2FMylFt2zJ1NPlySZmWYeRRMCq%2FbW2pLojbwj%2FIr9U21LQZHmodE4%2BDt9ZXFbQuuwHM84AEPK2amf6my4MW6MHPW8TpKoEbDAUi%2FGGl9q58hfnl5rA35Sc1KtSYuYY4ypElw3ilSUWeUpvjqZjefT7xiI4mXPlmpedQdMi%2FOzxWrID11Vc1A4OIHJeAK66YvjS%2B8hkQl%2BVUQgdIKea8sZQGvqoIvWaPP6wBeP6WnqIbHm5PhXzvV7eKyxY1F1TbiUqZpz8dHXOTJAccbueIENW3rTDy25fEBjqkAUInLFAedqfveNB9UsZrZWlKGoGSK2sDj%2BNpce9sJqiSyR79N5feJ6ulecq6EQqpGOQqdqBHRVTpmm4bBQAxdGTppdLyNYf%2BXxp%2FLRlHex81s1CjaA19%2BJuypv1AgM%2FkLcFl7vXqzER5p2jXti3TbHeQB8kHeyPdUvLfWErUNiMYbDMzXo%2BQf43lRb2Buq3BDCh6N3GTTsdIEDJm97QT68PO%2FCrK&X-Amz-Signature=6d737a17bf05edc37e5550c557027b767713b268657875a050626fb74935b283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
