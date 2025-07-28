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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVVXVSC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID3Fli2pqzPRrVYfNW1MMwiF%2BRRK6T3pGzBsOd6tWrWQAiBBq3nV48C4d6RSkf53jTMXGErO3Hp6q105uTQujvSzsiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrcPx4u6tfZKy0NAKtwDpxorH4k8bLpZn4uDCD6xQLUeTM%2FpEcJtyqxwprX97pyZYjiC9e%2BcuO2sMSOp%2FtqtlsCYMUvRiH%2BFveZ7bT2uQEoHz1hp%2F40eTmS5eAf%2BYTIoSuztbpQpEz1wd0J2Whicz4b8wkKXJkSBZqcbq7dXxcsJ2kDKjHjz9foc7C77OnyG3bzSEQWZThUVZjvp%2B1NvM277NOsL8Cbi5j5znFsxtsY1X9k8a%2BBbeTmexKzyiE31rhVeN9%2FAcF46ZBCScoBAc45BZso6%2B7ec%2B%2FJcvx4XyoSBlz1DxW5vEU4opEDosctGRv%2F53ip15GPzjg659ausPzM5dkPLgMQshv%2B62ri3ZhDqr2mq6DtDi9oYNf4UmR8PnWJPloNS91kIdqAM0LtjJ%2BssWVrNGhKiWCVGVzxzFzn0eU18Hn9SM31K%2FWjqOyb9FghsmDi7DD08ATbKYTMb023KCs%2Bfzg2zT5nB5%2BdgxRaW5sWjsMfyGwXRCa2IOWLBUKLSHg2Ybkx7atMuhZi7Ys2Go%2BGdZig4Hit2Z1IUQGsfpFbd6jbphwcUxyO4PeSsplgoXOHnthENPrNuaTfrTQi7q4i9T6EMplVB8Tn4rJ%2Fm8s1B2m0sn7Zb1N3%2B38UjbgF%2B%2BeHiPwSyVTkwpaKexAY6pgESXzRVDUu7RdQtCrZYZmwIUkkc7jno8YnywAiYh40wz%2BrpMnTNztAyQtRwxKY%2FBTc6DwHN7pDRVcDqY2smGRXJEEiz0%2B%2FgK%2FZ9wdY5c%2Fyj4ne%2BFlT2vjQ2%2B0OLv0vEv%2BYSoMDCXfA1J6DVknbiIQMAR59xPC2Y%2F8ohvPoudVJriQLMD94mYymwXPeXYuGmwSv0Oyd5l9niEIKirfjZGs1MQfznMUwd&X-Amz-Signature=3a5c6e8d967fd26b61f90f1c1fb3ada59ad2bb2580e05be50aa99cc086f03c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVVXVSC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID3Fli2pqzPRrVYfNW1MMwiF%2BRRK6T3pGzBsOd6tWrWQAiBBq3nV48C4d6RSkf53jTMXGErO3Hp6q105uTQujvSzsiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrcPx4u6tfZKy0NAKtwDpxorH4k8bLpZn4uDCD6xQLUeTM%2FpEcJtyqxwprX97pyZYjiC9e%2BcuO2sMSOp%2FtqtlsCYMUvRiH%2BFveZ7bT2uQEoHz1hp%2F40eTmS5eAf%2BYTIoSuztbpQpEz1wd0J2Whicz4b8wkKXJkSBZqcbq7dXxcsJ2kDKjHjz9foc7C77OnyG3bzSEQWZThUVZjvp%2B1NvM277NOsL8Cbi5j5znFsxtsY1X9k8a%2BBbeTmexKzyiE31rhVeN9%2FAcF46ZBCScoBAc45BZso6%2B7ec%2B%2FJcvx4XyoSBlz1DxW5vEU4opEDosctGRv%2F53ip15GPzjg659ausPzM5dkPLgMQshv%2B62ri3ZhDqr2mq6DtDi9oYNf4UmR8PnWJPloNS91kIdqAM0LtjJ%2BssWVrNGhKiWCVGVzxzFzn0eU18Hn9SM31K%2FWjqOyb9FghsmDi7DD08ATbKYTMb023KCs%2Bfzg2zT5nB5%2BdgxRaW5sWjsMfyGwXRCa2IOWLBUKLSHg2Ybkx7atMuhZi7Ys2Go%2BGdZig4Hit2Z1IUQGsfpFbd6jbphwcUxyO4PeSsplgoXOHnthENPrNuaTfrTQi7q4i9T6EMplVB8Tn4rJ%2Fm8s1B2m0sn7Zb1N3%2B38UjbgF%2B%2BeHiPwSyVTkwpaKexAY6pgESXzRVDUu7RdQtCrZYZmwIUkkc7jno8YnywAiYh40wz%2BrpMnTNztAyQtRwxKY%2FBTc6DwHN7pDRVcDqY2smGRXJEEiz0%2B%2FgK%2FZ9wdY5c%2Fyj4ne%2BFlT2vjQ2%2B0OLv0vEv%2BYSoMDCXfA1J6DVknbiIQMAR59xPC2Y%2F8ohvPoudVJriQLMD94mYymwXPeXYuGmwSv0Oyd5l9niEIKirfjZGs1MQfznMUwd&X-Amz-Signature=b248d56f2f34d2d63b24114f3784dcd33fc01fb6a74ba2975b5cfa8e1e288e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVVXVSC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID3Fli2pqzPRrVYfNW1MMwiF%2BRRK6T3pGzBsOd6tWrWQAiBBq3nV48C4d6RSkf53jTMXGErO3Hp6q105uTQujvSzsiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrcPx4u6tfZKy0NAKtwDpxorH4k8bLpZn4uDCD6xQLUeTM%2FpEcJtyqxwprX97pyZYjiC9e%2BcuO2sMSOp%2FtqtlsCYMUvRiH%2BFveZ7bT2uQEoHz1hp%2F40eTmS5eAf%2BYTIoSuztbpQpEz1wd0J2Whicz4b8wkKXJkSBZqcbq7dXxcsJ2kDKjHjz9foc7C77OnyG3bzSEQWZThUVZjvp%2B1NvM277NOsL8Cbi5j5znFsxtsY1X9k8a%2BBbeTmexKzyiE31rhVeN9%2FAcF46ZBCScoBAc45BZso6%2B7ec%2B%2FJcvx4XyoSBlz1DxW5vEU4opEDosctGRv%2F53ip15GPzjg659ausPzM5dkPLgMQshv%2B62ri3ZhDqr2mq6DtDi9oYNf4UmR8PnWJPloNS91kIdqAM0LtjJ%2BssWVrNGhKiWCVGVzxzFzn0eU18Hn9SM31K%2FWjqOyb9FghsmDi7DD08ATbKYTMb023KCs%2Bfzg2zT5nB5%2BdgxRaW5sWjsMfyGwXRCa2IOWLBUKLSHg2Ybkx7atMuhZi7Ys2Go%2BGdZig4Hit2Z1IUQGsfpFbd6jbphwcUxyO4PeSsplgoXOHnthENPrNuaTfrTQi7q4i9T6EMplVB8Tn4rJ%2Fm8s1B2m0sn7Zb1N3%2B38UjbgF%2B%2BeHiPwSyVTkwpaKexAY6pgESXzRVDUu7RdQtCrZYZmwIUkkc7jno8YnywAiYh40wz%2BrpMnTNztAyQtRwxKY%2FBTc6DwHN7pDRVcDqY2smGRXJEEiz0%2B%2FgK%2FZ9wdY5c%2Fyj4ne%2BFlT2vjQ2%2B0OLv0vEv%2BYSoMDCXfA1J6DVknbiIQMAR59xPC2Y%2F8ohvPoudVJriQLMD94mYymwXPeXYuGmwSv0Oyd5l9niEIKirfjZGs1MQfznMUwd&X-Amz-Signature=6c5674aaed90b45d9820e058d3fe54ef93f31802a5ef5914b5b42383995f64b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVVXVSC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID3Fli2pqzPRrVYfNW1MMwiF%2BRRK6T3pGzBsOd6tWrWQAiBBq3nV48C4d6RSkf53jTMXGErO3Hp6q105uTQujvSzsiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrcPx4u6tfZKy0NAKtwDpxorH4k8bLpZn4uDCD6xQLUeTM%2FpEcJtyqxwprX97pyZYjiC9e%2BcuO2sMSOp%2FtqtlsCYMUvRiH%2BFveZ7bT2uQEoHz1hp%2F40eTmS5eAf%2BYTIoSuztbpQpEz1wd0J2Whicz4b8wkKXJkSBZqcbq7dXxcsJ2kDKjHjz9foc7C77OnyG3bzSEQWZThUVZjvp%2B1NvM277NOsL8Cbi5j5znFsxtsY1X9k8a%2BBbeTmexKzyiE31rhVeN9%2FAcF46ZBCScoBAc45BZso6%2B7ec%2B%2FJcvx4XyoSBlz1DxW5vEU4opEDosctGRv%2F53ip15GPzjg659ausPzM5dkPLgMQshv%2B62ri3ZhDqr2mq6DtDi9oYNf4UmR8PnWJPloNS91kIdqAM0LtjJ%2BssWVrNGhKiWCVGVzxzFzn0eU18Hn9SM31K%2FWjqOyb9FghsmDi7DD08ATbKYTMb023KCs%2Bfzg2zT5nB5%2BdgxRaW5sWjsMfyGwXRCa2IOWLBUKLSHg2Ybkx7atMuhZi7Ys2Go%2BGdZig4Hit2Z1IUQGsfpFbd6jbphwcUxyO4PeSsplgoXOHnthENPrNuaTfrTQi7q4i9T6EMplVB8Tn4rJ%2Fm8s1B2m0sn7Zb1N3%2B38UjbgF%2B%2BeHiPwSyVTkwpaKexAY6pgESXzRVDUu7RdQtCrZYZmwIUkkc7jno8YnywAiYh40wz%2BrpMnTNztAyQtRwxKY%2FBTc6DwHN7pDRVcDqY2smGRXJEEiz0%2B%2FgK%2FZ9wdY5c%2Fyj4ne%2BFlT2vjQ2%2B0OLv0vEv%2BYSoMDCXfA1J6DVknbiIQMAR59xPC2Y%2F8ohvPoudVJriQLMD94mYymwXPeXYuGmwSv0Oyd5l9niEIKirfjZGs1MQfznMUwd&X-Amz-Signature=8f79971e1712ed6613d576b65dab6436e0ae191a80a37d14338b4c9d19f2da2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVVXVSC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID3Fli2pqzPRrVYfNW1MMwiF%2BRRK6T3pGzBsOd6tWrWQAiBBq3nV48C4d6RSkf53jTMXGErO3Hp6q105uTQujvSzsiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrcPx4u6tfZKy0NAKtwDpxorH4k8bLpZn4uDCD6xQLUeTM%2FpEcJtyqxwprX97pyZYjiC9e%2BcuO2sMSOp%2FtqtlsCYMUvRiH%2BFveZ7bT2uQEoHz1hp%2F40eTmS5eAf%2BYTIoSuztbpQpEz1wd0J2Whicz4b8wkKXJkSBZqcbq7dXxcsJ2kDKjHjz9foc7C77OnyG3bzSEQWZThUVZjvp%2B1NvM277NOsL8Cbi5j5znFsxtsY1X9k8a%2BBbeTmexKzyiE31rhVeN9%2FAcF46ZBCScoBAc45BZso6%2B7ec%2B%2FJcvx4XyoSBlz1DxW5vEU4opEDosctGRv%2F53ip15GPzjg659ausPzM5dkPLgMQshv%2B62ri3ZhDqr2mq6DtDi9oYNf4UmR8PnWJPloNS91kIdqAM0LtjJ%2BssWVrNGhKiWCVGVzxzFzn0eU18Hn9SM31K%2FWjqOyb9FghsmDi7DD08ATbKYTMb023KCs%2Bfzg2zT5nB5%2BdgxRaW5sWjsMfyGwXRCa2IOWLBUKLSHg2Ybkx7atMuhZi7Ys2Go%2BGdZig4Hit2Z1IUQGsfpFbd6jbphwcUxyO4PeSsplgoXOHnthENPrNuaTfrTQi7q4i9T6EMplVB8Tn4rJ%2Fm8s1B2m0sn7Zb1N3%2B38UjbgF%2B%2BeHiPwSyVTkwpaKexAY6pgESXzRVDUu7RdQtCrZYZmwIUkkc7jno8YnywAiYh40wz%2BrpMnTNztAyQtRwxKY%2FBTc6DwHN7pDRVcDqY2smGRXJEEiz0%2B%2FgK%2FZ9wdY5c%2Fyj4ne%2BFlT2vjQ2%2B0OLv0vEv%2BYSoMDCXfA1J6DVknbiIQMAR59xPC2Y%2F8ohvPoudVJriQLMD94mYymwXPeXYuGmwSv0Oyd5l9niEIKirfjZGs1MQfznMUwd&X-Amz-Signature=1366873926b9c2937f6c913f999d17374a5f300ecba8feac6eac52cc77c4f0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVVXVSC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID3Fli2pqzPRrVYfNW1MMwiF%2BRRK6T3pGzBsOd6tWrWQAiBBq3nV48C4d6RSkf53jTMXGErO3Hp6q105uTQujvSzsiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrcPx4u6tfZKy0NAKtwDpxorH4k8bLpZn4uDCD6xQLUeTM%2FpEcJtyqxwprX97pyZYjiC9e%2BcuO2sMSOp%2FtqtlsCYMUvRiH%2BFveZ7bT2uQEoHz1hp%2F40eTmS5eAf%2BYTIoSuztbpQpEz1wd0J2Whicz4b8wkKXJkSBZqcbq7dXxcsJ2kDKjHjz9foc7C77OnyG3bzSEQWZThUVZjvp%2B1NvM277NOsL8Cbi5j5znFsxtsY1X9k8a%2BBbeTmexKzyiE31rhVeN9%2FAcF46ZBCScoBAc45BZso6%2B7ec%2B%2FJcvx4XyoSBlz1DxW5vEU4opEDosctGRv%2F53ip15GPzjg659ausPzM5dkPLgMQshv%2B62ri3ZhDqr2mq6DtDi9oYNf4UmR8PnWJPloNS91kIdqAM0LtjJ%2BssWVrNGhKiWCVGVzxzFzn0eU18Hn9SM31K%2FWjqOyb9FghsmDi7DD08ATbKYTMb023KCs%2Bfzg2zT5nB5%2BdgxRaW5sWjsMfyGwXRCa2IOWLBUKLSHg2Ybkx7atMuhZi7Ys2Go%2BGdZig4Hit2Z1IUQGsfpFbd6jbphwcUxyO4PeSsplgoXOHnthENPrNuaTfrTQi7q4i9T6EMplVB8Tn4rJ%2Fm8s1B2m0sn7Zb1N3%2B38UjbgF%2B%2BeHiPwSyVTkwpaKexAY6pgESXzRVDUu7RdQtCrZYZmwIUkkc7jno8YnywAiYh40wz%2BrpMnTNztAyQtRwxKY%2FBTc6DwHN7pDRVcDqY2smGRXJEEiz0%2B%2FgK%2FZ9wdY5c%2Fyj4ne%2BFlT2vjQ2%2B0OLv0vEv%2BYSoMDCXfA1J6DVknbiIQMAR59xPC2Y%2F8ohvPoudVJriQLMD94mYymwXPeXYuGmwSv0Oyd5l9niEIKirfjZGs1MQfznMUwd&X-Amz-Signature=84b66481e36ec3ed404e88f04037d6220af6ae99e88fd61e42272b1962807099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
