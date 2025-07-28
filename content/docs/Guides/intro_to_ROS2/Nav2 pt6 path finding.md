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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GCYQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHYE9BIgizI2NBhdbNW1JEobBnoSljUf2arrhacdcR4gIhAI3vuvTFxnzAM6atWgaJV%2FXXKyXO6xtmHws96hY%2FIgZpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FjTb81e9neFNjS6Mq3ANiChCnzh7E6TgAtPa7l5vwAZMFvhPV4uU9lTjNZ8Rj444Gq%2FKHn2RYPedYkyd1yZnrgxfehqUMvY5HEKyzOPhutuC8SScwuJnKYBK9bPyszzKAV6xUu3oszFNDHHQqdRtEv%2BZ%2Bq9tm1%2BacELgsxpPWP%2Ba4kwyO46pBq1pQ4uMOaL0KSgXHDyaBVGdpiqP86kQmlMsvnNkbhS2YRvRl3LSNw76XS%2BjDEaby%2FMlQeEqLfhzk%2FIxf28EvH1jxPPYd3IJfAjCasr84M7Uk5kR6AfaiYRArFh8haUsM5S4WMlBAUlTzjjQV5UYyCaYdiiqnqvFGhUuzNupxvyGG30Vp97Y4qMYzikljWgDuJPJ1pnDtuJf1K%2Bhk8c4v9IYVdGWGZqpPYPOJoCFDw3bQCBfSktLTUkCRYQHQm3ocVUe4ZRDB2yaHXJqR1IUiuOmEWUcxhYGjvCxgW603sUkre54KB4QeuSFHn%2Bn2UKLLt6%2B6LjwWr1Z1OqJXs2YLFwfw6HSkhP9X9FKGp%2BT8%2BjXeVN8iDm%2BKaeezoSVhn3Lu2H5LZ%2FIS%2Bw9LKLAug%2BPSUQGZi60Ao%2BVA1uMvG227ICIrnKVUq81fECx8JjCn%2FXhuKooPezim7WKd0eOaNZy%2BKY4y9DDHxpzEBjqkAfMC%2BNBJjIuwmwgoUJldUO95mGDuop%2FUpZ8IAKCOWOHX5d%2FkUDIg9SjmdFjPEl1C0gs0nwyB%2BFl1sktlZ4B%2BYXyvN2PPNCuA8jem8Rt3wlwUmcN4gVq3noUqeeyrMFlF8aFEWA6SNR%2FKBBfMC5RETpXCgzxK9KocHRyv6GPBsSazDrcJ%2B1pUG1iJaNtsW5TEDRIENpd%2BUYQv%2B%2FTB%2FurkdK12ACux&X-Amz-Signature=804c8e310084c0f87957bd4fe833a72d914dba68771c70a2e0fd8952e51ccfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GCYQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHYE9BIgizI2NBhdbNW1JEobBnoSljUf2arrhacdcR4gIhAI3vuvTFxnzAM6atWgaJV%2FXXKyXO6xtmHws96hY%2FIgZpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FjTb81e9neFNjS6Mq3ANiChCnzh7E6TgAtPa7l5vwAZMFvhPV4uU9lTjNZ8Rj444Gq%2FKHn2RYPedYkyd1yZnrgxfehqUMvY5HEKyzOPhutuC8SScwuJnKYBK9bPyszzKAV6xUu3oszFNDHHQqdRtEv%2BZ%2Bq9tm1%2BacELgsxpPWP%2Ba4kwyO46pBq1pQ4uMOaL0KSgXHDyaBVGdpiqP86kQmlMsvnNkbhS2YRvRl3LSNw76XS%2BjDEaby%2FMlQeEqLfhzk%2FIxf28EvH1jxPPYd3IJfAjCasr84M7Uk5kR6AfaiYRArFh8haUsM5S4WMlBAUlTzjjQV5UYyCaYdiiqnqvFGhUuzNupxvyGG30Vp97Y4qMYzikljWgDuJPJ1pnDtuJf1K%2Bhk8c4v9IYVdGWGZqpPYPOJoCFDw3bQCBfSktLTUkCRYQHQm3ocVUe4ZRDB2yaHXJqR1IUiuOmEWUcxhYGjvCxgW603sUkre54KB4QeuSFHn%2Bn2UKLLt6%2B6LjwWr1Z1OqJXs2YLFwfw6HSkhP9X9FKGp%2BT8%2BjXeVN8iDm%2BKaeezoSVhn3Lu2H5LZ%2FIS%2Bw9LKLAug%2BPSUQGZi60Ao%2BVA1uMvG227ICIrnKVUq81fECx8JjCn%2FXhuKooPezim7WKd0eOaNZy%2BKY4y9DDHxpzEBjqkAfMC%2BNBJjIuwmwgoUJldUO95mGDuop%2FUpZ8IAKCOWOHX5d%2FkUDIg9SjmdFjPEl1C0gs0nwyB%2BFl1sktlZ4B%2BYXyvN2PPNCuA8jem8Rt3wlwUmcN4gVq3noUqeeyrMFlF8aFEWA6SNR%2FKBBfMC5RETpXCgzxK9KocHRyv6GPBsSazDrcJ%2B1pUG1iJaNtsW5TEDRIENpd%2BUYQv%2B%2FTB%2FurkdK12ACux&X-Amz-Signature=4e90535f5ebf530355cc354dd932f4c07e98f60127afb6e49e0f60b966c8dca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GCYQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHYE9BIgizI2NBhdbNW1JEobBnoSljUf2arrhacdcR4gIhAI3vuvTFxnzAM6atWgaJV%2FXXKyXO6xtmHws96hY%2FIgZpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FjTb81e9neFNjS6Mq3ANiChCnzh7E6TgAtPa7l5vwAZMFvhPV4uU9lTjNZ8Rj444Gq%2FKHn2RYPedYkyd1yZnrgxfehqUMvY5HEKyzOPhutuC8SScwuJnKYBK9bPyszzKAV6xUu3oszFNDHHQqdRtEv%2BZ%2Bq9tm1%2BacELgsxpPWP%2Ba4kwyO46pBq1pQ4uMOaL0KSgXHDyaBVGdpiqP86kQmlMsvnNkbhS2YRvRl3LSNw76XS%2BjDEaby%2FMlQeEqLfhzk%2FIxf28EvH1jxPPYd3IJfAjCasr84M7Uk5kR6AfaiYRArFh8haUsM5S4WMlBAUlTzjjQV5UYyCaYdiiqnqvFGhUuzNupxvyGG30Vp97Y4qMYzikljWgDuJPJ1pnDtuJf1K%2Bhk8c4v9IYVdGWGZqpPYPOJoCFDw3bQCBfSktLTUkCRYQHQm3ocVUe4ZRDB2yaHXJqR1IUiuOmEWUcxhYGjvCxgW603sUkre54KB4QeuSFHn%2Bn2UKLLt6%2B6LjwWr1Z1OqJXs2YLFwfw6HSkhP9X9FKGp%2BT8%2BjXeVN8iDm%2BKaeezoSVhn3Lu2H5LZ%2FIS%2Bw9LKLAug%2BPSUQGZi60Ao%2BVA1uMvG227ICIrnKVUq81fECx8JjCn%2FXhuKooPezim7WKd0eOaNZy%2BKY4y9DDHxpzEBjqkAfMC%2BNBJjIuwmwgoUJldUO95mGDuop%2FUpZ8IAKCOWOHX5d%2FkUDIg9SjmdFjPEl1C0gs0nwyB%2BFl1sktlZ4B%2BYXyvN2PPNCuA8jem8Rt3wlwUmcN4gVq3noUqeeyrMFlF8aFEWA6SNR%2FKBBfMC5RETpXCgzxK9KocHRyv6GPBsSazDrcJ%2B1pUG1iJaNtsW5TEDRIENpd%2BUYQv%2B%2FTB%2FurkdK12ACux&X-Amz-Signature=fed9bb7048351a42ad6cee797a0b24d32bdef732d7ad232eb9223f22f86c3b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GCYQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHYE9BIgizI2NBhdbNW1JEobBnoSljUf2arrhacdcR4gIhAI3vuvTFxnzAM6atWgaJV%2FXXKyXO6xtmHws96hY%2FIgZpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FjTb81e9neFNjS6Mq3ANiChCnzh7E6TgAtPa7l5vwAZMFvhPV4uU9lTjNZ8Rj444Gq%2FKHn2RYPedYkyd1yZnrgxfehqUMvY5HEKyzOPhutuC8SScwuJnKYBK9bPyszzKAV6xUu3oszFNDHHQqdRtEv%2BZ%2Bq9tm1%2BacELgsxpPWP%2Ba4kwyO46pBq1pQ4uMOaL0KSgXHDyaBVGdpiqP86kQmlMsvnNkbhS2YRvRl3LSNw76XS%2BjDEaby%2FMlQeEqLfhzk%2FIxf28EvH1jxPPYd3IJfAjCasr84M7Uk5kR6AfaiYRArFh8haUsM5S4WMlBAUlTzjjQV5UYyCaYdiiqnqvFGhUuzNupxvyGG30Vp97Y4qMYzikljWgDuJPJ1pnDtuJf1K%2Bhk8c4v9IYVdGWGZqpPYPOJoCFDw3bQCBfSktLTUkCRYQHQm3ocVUe4ZRDB2yaHXJqR1IUiuOmEWUcxhYGjvCxgW603sUkre54KB4QeuSFHn%2Bn2UKLLt6%2B6LjwWr1Z1OqJXs2YLFwfw6HSkhP9X9FKGp%2BT8%2BjXeVN8iDm%2BKaeezoSVhn3Lu2H5LZ%2FIS%2Bw9LKLAug%2BPSUQGZi60Ao%2BVA1uMvG227ICIrnKVUq81fECx8JjCn%2FXhuKooPezim7WKd0eOaNZy%2BKY4y9DDHxpzEBjqkAfMC%2BNBJjIuwmwgoUJldUO95mGDuop%2FUpZ8IAKCOWOHX5d%2FkUDIg9SjmdFjPEl1C0gs0nwyB%2BFl1sktlZ4B%2BYXyvN2PPNCuA8jem8Rt3wlwUmcN4gVq3noUqeeyrMFlF8aFEWA6SNR%2FKBBfMC5RETpXCgzxK9KocHRyv6GPBsSazDrcJ%2B1pUG1iJaNtsW5TEDRIENpd%2BUYQv%2B%2FTB%2FurkdK12ACux&X-Amz-Signature=52abde13eb651d08b5ab8c4b9ecd121718d20b46fdd630becdc098d46f3a373e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GCYQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHYE9BIgizI2NBhdbNW1JEobBnoSljUf2arrhacdcR4gIhAI3vuvTFxnzAM6atWgaJV%2FXXKyXO6xtmHws96hY%2FIgZpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FjTb81e9neFNjS6Mq3ANiChCnzh7E6TgAtPa7l5vwAZMFvhPV4uU9lTjNZ8Rj444Gq%2FKHn2RYPedYkyd1yZnrgxfehqUMvY5HEKyzOPhutuC8SScwuJnKYBK9bPyszzKAV6xUu3oszFNDHHQqdRtEv%2BZ%2Bq9tm1%2BacELgsxpPWP%2Ba4kwyO46pBq1pQ4uMOaL0KSgXHDyaBVGdpiqP86kQmlMsvnNkbhS2YRvRl3LSNw76XS%2BjDEaby%2FMlQeEqLfhzk%2FIxf28EvH1jxPPYd3IJfAjCasr84M7Uk5kR6AfaiYRArFh8haUsM5S4WMlBAUlTzjjQV5UYyCaYdiiqnqvFGhUuzNupxvyGG30Vp97Y4qMYzikljWgDuJPJ1pnDtuJf1K%2Bhk8c4v9IYVdGWGZqpPYPOJoCFDw3bQCBfSktLTUkCRYQHQm3ocVUe4ZRDB2yaHXJqR1IUiuOmEWUcxhYGjvCxgW603sUkre54KB4QeuSFHn%2Bn2UKLLt6%2B6LjwWr1Z1OqJXs2YLFwfw6HSkhP9X9FKGp%2BT8%2BjXeVN8iDm%2BKaeezoSVhn3Lu2H5LZ%2FIS%2Bw9LKLAug%2BPSUQGZi60Ao%2BVA1uMvG227ICIrnKVUq81fECx8JjCn%2FXhuKooPezim7WKd0eOaNZy%2BKY4y9DDHxpzEBjqkAfMC%2BNBJjIuwmwgoUJldUO95mGDuop%2FUpZ8IAKCOWOHX5d%2FkUDIg9SjmdFjPEl1C0gs0nwyB%2BFl1sktlZ4B%2BYXyvN2PPNCuA8jem8Rt3wlwUmcN4gVq3noUqeeyrMFlF8aFEWA6SNR%2FKBBfMC5RETpXCgzxK9KocHRyv6GPBsSazDrcJ%2B1pUG1iJaNtsW5TEDRIENpd%2BUYQv%2B%2FTB%2FurkdK12ACux&X-Amz-Signature=c4adb85d21eb83729da5d67c8fb914746f6ffbfe71e28c1b04ff36b67cd29520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GCYQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHYE9BIgizI2NBhdbNW1JEobBnoSljUf2arrhacdcR4gIhAI3vuvTFxnzAM6atWgaJV%2FXXKyXO6xtmHws96hY%2FIgZpKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FjTb81e9neFNjS6Mq3ANiChCnzh7E6TgAtPa7l5vwAZMFvhPV4uU9lTjNZ8Rj444Gq%2FKHn2RYPedYkyd1yZnrgxfehqUMvY5HEKyzOPhutuC8SScwuJnKYBK9bPyszzKAV6xUu3oszFNDHHQqdRtEv%2BZ%2Bq9tm1%2BacELgsxpPWP%2Ba4kwyO46pBq1pQ4uMOaL0KSgXHDyaBVGdpiqP86kQmlMsvnNkbhS2YRvRl3LSNw76XS%2BjDEaby%2FMlQeEqLfhzk%2FIxf28EvH1jxPPYd3IJfAjCasr84M7Uk5kR6AfaiYRArFh8haUsM5S4WMlBAUlTzjjQV5UYyCaYdiiqnqvFGhUuzNupxvyGG30Vp97Y4qMYzikljWgDuJPJ1pnDtuJf1K%2Bhk8c4v9IYVdGWGZqpPYPOJoCFDw3bQCBfSktLTUkCRYQHQm3ocVUe4ZRDB2yaHXJqR1IUiuOmEWUcxhYGjvCxgW603sUkre54KB4QeuSFHn%2Bn2UKLLt6%2B6LjwWr1Z1OqJXs2YLFwfw6HSkhP9X9FKGp%2BT8%2BjXeVN8iDm%2BKaeezoSVhn3Lu2H5LZ%2FIS%2Bw9LKLAug%2BPSUQGZi60Ao%2BVA1uMvG227ICIrnKVUq81fECx8JjCn%2FXhuKooPezim7WKd0eOaNZy%2BKY4y9DDHxpzEBjqkAfMC%2BNBJjIuwmwgoUJldUO95mGDuop%2FUpZ8IAKCOWOHX5d%2FkUDIg9SjmdFjPEl1C0gs0nwyB%2BFl1sktlZ4B%2BYXyvN2PPNCuA8jem8Rt3wlwUmcN4gVq3noUqeeyrMFlF8aFEWA6SNR%2FKBBfMC5RETpXCgzxK9KocHRyv6GPBsSazDrcJ%2B1pUG1iJaNtsW5TEDRIENpd%2BUYQv%2B%2FTB%2FurkdK12ACux&X-Amz-Signature=488b65e6c77c491c4e928737a28ee3bfd95f340d19a95cf46e9fe17d2ea1811b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
