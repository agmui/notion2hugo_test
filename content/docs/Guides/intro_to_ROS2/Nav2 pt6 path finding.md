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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY2Y5RB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDRkkvpsgdngdJIbkeSDJCyuX1BZ2%2B2vAY0UrNJddnUaAiAeWTTXmLuWqxRaSf4rXsVDkNXxXxKP%2FDnd5FiTtJC0Kir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCT16Uu5uq9E%2FXpPPKtwDXDNF1IuOLnhxzDROqX6Mlkb0u%2FyxzfK1e8b7buvos7PITNTV%2Fb77wFRCtFXwTXdr0%2BQ2qk29TaSUzra33imaWowURrs313ZVfYjV8kl6qRdRvpEI4mkL%2BoCbdqoM9bsGvFTlxZsbWKk555dKsuJfP5iSwoPzqqAqNBJmdz%2B35yqOnLA4Rk09oG8P%2BxFo0AanwhdWRoS1rY6V%2FwfhXexT5VbcVwLpA9wEDLU8qtoPia4ym9cmbN92OyseHGt0qreQrQmN8fh5Oj6%2B0VwtTzvwPA6y6m7Yx7SAY89wzOZ6LywcHrUnr7ze3Jfi9mEblq46K5VDmzNqej2EBFjUP7LfCjXmOgLLadY3mGfRuysNLqpntR3fqnJ%2BoQvWqQRFDokY1KFEF3pIs7mLzcbiRh227mzDZCFDoxmxGzk%2BedvCXSCR3SSbv7yY0LjgLR5ehG728PxSsRji9253mv1kVYUqX8ggiWYtaFmPO5fRx%2BpGh6QsOe6Of%2FyXmWU5AQazogboFg33zuolvCwsqiohfVvQGvEQ7wGKmlz5zGXSRGw56%2BVRj6oLHQjLrmjwubdB8BCJaR48n5i1k%2FtkGnB6t64f3mPK6XjOeOzz2tVzxLZq3HdbEYESGR49LydojQIw%2B9CPxAY6pgGqB8KOegjyQZeqWJFFW7h5fCBftQns1qx25LgTCylV8sUc0rU50GNbLxPb6B4%2BH168w8fAHxUMCxmMbtvBEXo6xu9lr1L5QbtrVarvHukmKbL5BZ9Mrya%2F42nTexO9UKJT%2BHXt68fbMCF3V6TYcEjyjo8nJCfLKDPyt8zRj4vKMdg8Ag0nDvKxDmqSq5h5b7uuTDCuxVV92B6oF%2FtDO9yCgigABPqP&X-Amz-Signature=8b0c111c05f8205c58c3540ee046664afeece5d9c0f9f8badcbcbb102a92aaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY2Y5RB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDRkkvpsgdngdJIbkeSDJCyuX1BZ2%2B2vAY0UrNJddnUaAiAeWTTXmLuWqxRaSf4rXsVDkNXxXxKP%2FDnd5FiTtJC0Kir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCT16Uu5uq9E%2FXpPPKtwDXDNF1IuOLnhxzDROqX6Mlkb0u%2FyxzfK1e8b7buvos7PITNTV%2Fb77wFRCtFXwTXdr0%2BQ2qk29TaSUzra33imaWowURrs313ZVfYjV8kl6qRdRvpEI4mkL%2BoCbdqoM9bsGvFTlxZsbWKk555dKsuJfP5iSwoPzqqAqNBJmdz%2B35yqOnLA4Rk09oG8P%2BxFo0AanwhdWRoS1rY6V%2FwfhXexT5VbcVwLpA9wEDLU8qtoPia4ym9cmbN92OyseHGt0qreQrQmN8fh5Oj6%2B0VwtTzvwPA6y6m7Yx7SAY89wzOZ6LywcHrUnr7ze3Jfi9mEblq46K5VDmzNqej2EBFjUP7LfCjXmOgLLadY3mGfRuysNLqpntR3fqnJ%2BoQvWqQRFDokY1KFEF3pIs7mLzcbiRh227mzDZCFDoxmxGzk%2BedvCXSCR3SSbv7yY0LjgLR5ehG728PxSsRji9253mv1kVYUqX8ggiWYtaFmPO5fRx%2BpGh6QsOe6Of%2FyXmWU5AQazogboFg33zuolvCwsqiohfVvQGvEQ7wGKmlz5zGXSRGw56%2BVRj6oLHQjLrmjwubdB8BCJaR48n5i1k%2FtkGnB6t64f3mPK6XjOeOzz2tVzxLZq3HdbEYESGR49LydojQIw%2B9CPxAY6pgGqB8KOegjyQZeqWJFFW7h5fCBftQns1qx25LgTCylV8sUc0rU50GNbLxPb6B4%2BH168w8fAHxUMCxmMbtvBEXo6xu9lr1L5QbtrVarvHukmKbL5BZ9Mrya%2F42nTexO9UKJT%2BHXt68fbMCF3V6TYcEjyjo8nJCfLKDPyt8zRj4vKMdg8Ag0nDvKxDmqSq5h5b7uuTDCuxVV92B6oF%2FtDO9yCgigABPqP&X-Amz-Signature=1876fdfeb5f932cf9053824c9036a0fa4f39cac72465ce366b57e2277042f713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY2Y5RB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDRkkvpsgdngdJIbkeSDJCyuX1BZ2%2B2vAY0UrNJddnUaAiAeWTTXmLuWqxRaSf4rXsVDkNXxXxKP%2FDnd5FiTtJC0Kir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCT16Uu5uq9E%2FXpPPKtwDXDNF1IuOLnhxzDROqX6Mlkb0u%2FyxzfK1e8b7buvos7PITNTV%2Fb77wFRCtFXwTXdr0%2BQ2qk29TaSUzra33imaWowURrs313ZVfYjV8kl6qRdRvpEI4mkL%2BoCbdqoM9bsGvFTlxZsbWKk555dKsuJfP5iSwoPzqqAqNBJmdz%2B35yqOnLA4Rk09oG8P%2BxFo0AanwhdWRoS1rY6V%2FwfhXexT5VbcVwLpA9wEDLU8qtoPia4ym9cmbN92OyseHGt0qreQrQmN8fh5Oj6%2B0VwtTzvwPA6y6m7Yx7SAY89wzOZ6LywcHrUnr7ze3Jfi9mEblq46K5VDmzNqej2EBFjUP7LfCjXmOgLLadY3mGfRuysNLqpntR3fqnJ%2BoQvWqQRFDokY1KFEF3pIs7mLzcbiRh227mzDZCFDoxmxGzk%2BedvCXSCR3SSbv7yY0LjgLR5ehG728PxSsRji9253mv1kVYUqX8ggiWYtaFmPO5fRx%2BpGh6QsOe6Of%2FyXmWU5AQazogboFg33zuolvCwsqiohfVvQGvEQ7wGKmlz5zGXSRGw56%2BVRj6oLHQjLrmjwubdB8BCJaR48n5i1k%2FtkGnB6t64f3mPK6XjOeOzz2tVzxLZq3HdbEYESGR49LydojQIw%2B9CPxAY6pgGqB8KOegjyQZeqWJFFW7h5fCBftQns1qx25LgTCylV8sUc0rU50GNbLxPb6B4%2BH168w8fAHxUMCxmMbtvBEXo6xu9lr1L5QbtrVarvHukmKbL5BZ9Mrya%2F42nTexO9UKJT%2BHXt68fbMCF3V6TYcEjyjo8nJCfLKDPyt8zRj4vKMdg8Ag0nDvKxDmqSq5h5b7uuTDCuxVV92B6oF%2FtDO9yCgigABPqP&X-Amz-Signature=96f2132992f57fcce202862dd4544b68b7c7188520a8752df61ec781541fae1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY2Y5RB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDRkkvpsgdngdJIbkeSDJCyuX1BZ2%2B2vAY0UrNJddnUaAiAeWTTXmLuWqxRaSf4rXsVDkNXxXxKP%2FDnd5FiTtJC0Kir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCT16Uu5uq9E%2FXpPPKtwDXDNF1IuOLnhxzDROqX6Mlkb0u%2FyxzfK1e8b7buvos7PITNTV%2Fb77wFRCtFXwTXdr0%2BQ2qk29TaSUzra33imaWowURrs313ZVfYjV8kl6qRdRvpEI4mkL%2BoCbdqoM9bsGvFTlxZsbWKk555dKsuJfP5iSwoPzqqAqNBJmdz%2B35yqOnLA4Rk09oG8P%2BxFo0AanwhdWRoS1rY6V%2FwfhXexT5VbcVwLpA9wEDLU8qtoPia4ym9cmbN92OyseHGt0qreQrQmN8fh5Oj6%2B0VwtTzvwPA6y6m7Yx7SAY89wzOZ6LywcHrUnr7ze3Jfi9mEblq46K5VDmzNqej2EBFjUP7LfCjXmOgLLadY3mGfRuysNLqpntR3fqnJ%2BoQvWqQRFDokY1KFEF3pIs7mLzcbiRh227mzDZCFDoxmxGzk%2BedvCXSCR3SSbv7yY0LjgLR5ehG728PxSsRji9253mv1kVYUqX8ggiWYtaFmPO5fRx%2BpGh6QsOe6Of%2FyXmWU5AQazogboFg33zuolvCwsqiohfVvQGvEQ7wGKmlz5zGXSRGw56%2BVRj6oLHQjLrmjwubdB8BCJaR48n5i1k%2FtkGnB6t64f3mPK6XjOeOzz2tVzxLZq3HdbEYESGR49LydojQIw%2B9CPxAY6pgGqB8KOegjyQZeqWJFFW7h5fCBftQns1qx25LgTCylV8sUc0rU50GNbLxPb6B4%2BH168w8fAHxUMCxmMbtvBEXo6xu9lr1L5QbtrVarvHukmKbL5BZ9Mrya%2F42nTexO9UKJT%2BHXt68fbMCF3V6TYcEjyjo8nJCfLKDPyt8zRj4vKMdg8Ag0nDvKxDmqSq5h5b7uuTDCuxVV92B6oF%2FtDO9yCgigABPqP&X-Amz-Signature=5df903dfaa1a551920a0c1cdd3f846f1ae555e5c47bfa5061f5d26c6e8b60c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY2Y5RB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDRkkvpsgdngdJIbkeSDJCyuX1BZ2%2B2vAY0UrNJddnUaAiAeWTTXmLuWqxRaSf4rXsVDkNXxXxKP%2FDnd5FiTtJC0Kir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCT16Uu5uq9E%2FXpPPKtwDXDNF1IuOLnhxzDROqX6Mlkb0u%2FyxzfK1e8b7buvos7PITNTV%2Fb77wFRCtFXwTXdr0%2BQ2qk29TaSUzra33imaWowURrs313ZVfYjV8kl6qRdRvpEI4mkL%2BoCbdqoM9bsGvFTlxZsbWKk555dKsuJfP5iSwoPzqqAqNBJmdz%2B35yqOnLA4Rk09oG8P%2BxFo0AanwhdWRoS1rY6V%2FwfhXexT5VbcVwLpA9wEDLU8qtoPia4ym9cmbN92OyseHGt0qreQrQmN8fh5Oj6%2B0VwtTzvwPA6y6m7Yx7SAY89wzOZ6LywcHrUnr7ze3Jfi9mEblq46K5VDmzNqej2EBFjUP7LfCjXmOgLLadY3mGfRuysNLqpntR3fqnJ%2BoQvWqQRFDokY1KFEF3pIs7mLzcbiRh227mzDZCFDoxmxGzk%2BedvCXSCR3SSbv7yY0LjgLR5ehG728PxSsRji9253mv1kVYUqX8ggiWYtaFmPO5fRx%2BpGh6QsOe6Of%2FyXmWU5AQazogboFg33zuolvCwsqiohfVvQGvEQ7wGKmlz5zGXSRGw56%2BVRj6oLHQjLrmjwubdB8BCJaR48n5i1k%2FtkGnB6t64f3mPK6XjOeOzz2tVzxLZq3HdbEYESGR49LydojQIw%2B9CPxAY6pgGqB8KOegjyQZeqWJFFW7h5fCBftQns1qx25LgTCylV8sUc0rU50GNbLxPb6B4%2BH168w8fAHxUMCxmMbtvBEXo6xu9lr1L5QbtrVarvHukmKbL5BZ9Mrya%2F42nTexO9UKJT%2BHXt68fbMCF3V6TYcEjyjo8nJCfLKDPyt8zRj4vKMdg8Ag0nDvKxDmqSq5h5b7uuTDCuxVV92B6oF%2FtDO9yCgigABPqP&X-Amz-Signature=cf478117588139be5ac3b1c496945460c1f9bd7980347edacacd794f1e59f1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY2Y5RB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDRkkvpsgdngdJIbkeSDJCyuX1BZ2%2B2vAY0UrNJddnUaAiAeWTTXmLuWqxRaSf4rXsVDkNXxXxKP%2FDnd5FiTtJC0Kir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMCT16Uu5uq9E%2FXpPPKtwDXDNF1IuOLnhxzDROqX6Mlkb0u%2FyxzfK1e8b7buvos7PITNTV%2Fb77wFRCtFXwTXdr0%2BQ2qk29TaSUzra33imaWowURrs313ZVfYjV8kl6qRdRvpEI4mkL%2BoCbdqoM9bsGvFTlxZsbWKk555dKsuJfP5iSwoPzqqAqNBJmdz%2B35yqOnLA4Rk09oG8P%2BxFo0AanwhdWRoS1rY6V%2FwfhXexT5VbcVwLpA9wEDLU8qtoPia4ym9cmbN92OyseHGt0qreQrQmN8fh5Oj6%2B0VwtTzvwPA6y6m7Yx7SAY89wzOZ6LywcHrUnr7ze3Jfi9mEblq46K5VDmzNqej2EBFjUP7LfCjXmOgLLadY3mGfRuysNLqpntR3fqnJ%2BoQvWqQRFDokY1KFEF3pIs7mLzcbiRh227mzDZCFDoxmxGzk%2BedvCXSCR3SSbv7yY0LjgLR5ehG728PxSsRji9253mv1kVYUqX8ggiWYtaFmPO5fRx%2BpGh6QsOe6Of%2FyXmWU5AQazogboFg33zuolvCwsqiohfVvQGvEQ7wGKmlz5zGXSRGw56%2BVRj6oLHQjLrmjwubdB8BCJaR48n5i1k%2FtkGnB6t64f3mPK6XjOeOzz2tVzxLZq3HdbEYESGR49LydojQIw%2B9CPxAY6pgGqB8KOegjyQZeqWJFFW7h5fCBftQns1qx25LgTCylV8sUc0rU50GNbLxPb6B4%2BH168w8fAHxUMCxmMbtvBEXo6xu9lr1L5QbtrVarvHukmKbL5BZ9Mrya%2F42nTexO9UKJT%2BHXt68fbMCF3V6TYcEjyjo8nJCfLKDPyt8zRj4vKMdg8Ag0nDvKxDmqSq5h5b7uuTDCuxVV92B6oF%2FtDO9yCgigABPqP&X-Amz-Signature=61197d3fc057b4539cfecf5fd1e7599006b08f1e15fd77132c76d606d44222be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
