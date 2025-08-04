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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=7cb7dc254d6f6103258990abaff5b47561c46d2fa5542022a0b5bdfbd3b1bf2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=4ac993fcb19ee406d1d77aa93c74d171ce2d0206a1aaf250c93e2e3227d83c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=e4f085fd8cf57c1d801adb10f1cd805c9e9b94385ddb93cbaca1952e5293dece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=444082d45401794adbfcbe6893e33045e5e32bd736f8d002d552985b9cac1638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=f445ff0397075781294369f7604bb232fecaef6aa48b22aa6b28e521ce80ab81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=ea6cc746cb75d121f32771284c3b61cb4b8616e073170d38ecd1abdc780849e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=3c70805cfa89bad15cc75655f88e3a8f3994a49e8fd7844e98785f9d327f8c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=45de0d74f21be593d1269b1f8e22c8ab9031a50a812066b7315181cb1f3c0822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=4751107ed189787305f28ae9fecba432a618dca4c19c41c7e372a4258e6e18cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=e047a0ae37d90a5c9f68a4ee19d76d2ee1a0c92651062b5a4e0a3e070c0a7a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=bba2a0e0da35135f8227d92972d1fa0113c868b4601a56522bde399d449dea85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=092ac23ad9c14d29d7d11a4a6b380a555450d53fa9c79ce2a911bc66f68d4b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JR4IWH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID%2FmglMJVXGorhEKNGlG8zUOPU06%2FABJzeUYpXGdsbDjAiEAmpVhwQiyP%2BaVPZEY238szpzD0b%2FUJUmh8FT%2FQW3nLsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMmjppy8eHAln3AWACrcA4kLdZS5sCoYSXXHFLTT%2FQkOkjXRXsPbD5NMawztEIh6hxX%2B8nCLHTRwJ2cuMshddcBjTpxq5qRmJGyYFZTOe9txhjMtRpoPLh1nWewRCRkDNgnKtqkk45fJKu33Sn6XVaYuKivGuiG4X3gCKKdBz73fV4rAW5idUJAiqgkUuJzhVXhXdumr1Jus%2FXR2exV%2Fok4V1mk6ANumMCVt4%2FX8%2FEwDaWtVIO40sqw1brxS7ZPdIUN%2F8F988L7vBoJHmyIK0vc3OK3xi1Lhgem0DJq1o25LP1p%2Btf0Vgk9n5qJn0Dd%2FXtV%2FGORjQKNoenj58TIDeDyBDgHsM%2BsuTPVaUj9rbNmwiFZm4SQ19Aj6f%2B1c1J4m%2FbP8yd7EeiSEQx6WZgTiM1kG5E9gF5FWirYChQccO0rgqHmZgkzBZTH17%2B01KS3SFBLgWAYu8otIQQQXxfHzsUqIq5Og6VJM0A%2Ba66Gpyyua6Kp2FGt0g2GvfMk77JNtAw%2B6pKZV7Ujawh0tDq2BlvPMMGPlSLRftgvHR7SPznE%2ByVOGt3qaPjS%2BDRs1sBC%2BJu%2FQLnGzUFfZBMUaq4pVjhReHTM9NNz3q6AuhuBf6rntCWmqd2iBLF6o9IyJdTAOfrdpiOfxAhvU5UrOMIr0xMQGOqUBaTcZl0yTCe%2FPSrHCIKhm%2B0Ea0RpNuI5%2BnWHhUDynBdQ0Wi840m12YngjKciBaMSKX1I8%2B98uJyJNePHFhmX2tKsSxsFwD18YULeCJgJq4GOVRe8oXv3r9GuwOWR6bbIOuxKvIyk1HuTHLkGfPADRkTrmWkfvYciZpemMysFy%2B5ZIWvHw9VgpbrxzpVIQDzv%2Fj9ukvFr0ul8tzfDELTDiyeGs7wtn&X-Amz-Signature=8ae6588967d76cd04c0d1d3bd6ce411d3b02d20efe12cd1b7f7b88936c1b5107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
