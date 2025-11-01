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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=52612be4be011879a4b991a42f99d80efa46a3e0e7f1441ea1f1af16c43d8d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=a8e402b5aa4680ae4837473a561510a991da53bc61b56d20a1236360240b3592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=a03dbccb43556ed60db603d8ee938c2541e21e3397c905f1dce35114027453e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=35135a7e9f57114c05f33bccd470b2deb3192b2dd2c3bbec33aa7b5c69dcb00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=98e3c0bf2e3895329a9af2543ff9d4feb2129c60829536192c35b3f9a16b751c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=511727ede31877781a1a6c5b0cc94b30dec51616b7c81233259285210f5bd5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=a7486d94958fe01c7fb729c7616d3de3ff2da79b9fe5688e42ba3473c9f3fe4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=4fd76dd1ab1138de7d8c7af55243213a6d4b0c81ddcd7706634d18bbbeac535a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=7610f29c506a068132a84879403bec4bb4cc58a08a6bd0d3e4092a0ff2d4a5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=d5c29baba23bb5bc0da023bb1dd911be54fe9925a9b5a87343bc53f415cae2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=5e237330735e7d2ad02e04f3c8bc60bb7413206633da68705ef01e35b5808218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=14c84adc5c9b4b189320f4d81147f49f57615b8b2daafc7bd45b91324238ff45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCPJAPR%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIB3hWfJnQBE%2BYZOW8awRyXKe%2BIBEAv6LElH68km1WAHYAiEA2TRpbLYcyRU4P8nVGskoi6GMPbPGK0g4jzwY3B6xAMAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDdoGgeClJI89rolhircAxpVzaLk9WDN%2FKi4ULQ2iC3LB1G10YZpY4mM4CGFQvUzbA0rb57h6NY1VRSM7K1%2Bp8QarsPwvNfC4QKEhhTU9ZLKadsfdiKSrtSQylM9pOAdkM071GKpdg6F7RVSyMA8B045nOvl2DMMRY4R15De%2FVsTWhd1w%2Bc4DrLOITWCy7bAiJ3DUPgtGAp96p%2BXc%2BMgBxF7F%2BVigykZFvsrk955aVq%2Fvjwi9oeeg3HvdO3G9qFFRaTUtwIgPsvGUSDERtmwWfopKRyOnXBakLkHK2s33fpS3zvD9kdATPeTq4pJe1wYsfbxMRlL%2FF3pHQZo%2FtR2GnPYac2ubK6sBFNBW4QnlODVlgsIDeVc%2Fld1VCVtAhvoQqZrSzRPzq2bjbJtUHHGu0Se33da0btlrVnPLfd9gcYan3dxpL5G1fh07yg%2B%2Bk17U5Q6lN%2FjwhmLbLcEA0fwe2bxdANNOGVYlcfub6sbomFHOoF5nxauu%2Fz%2BCqWjlSA1BVBMzFVsYW4X9SUa%2FTgeOB5gHU6uwcD%2FFfBWeSFqvWjsA%2F1XN8jwhXX564Ay%2B8iJlj4fMYPieyuYgC3rTnbtX6O%2BpeizWaIqceDGBE6AD%2FRbGlvY50QB4uqJ%2FNZZbK%2BXTBMcRIhbGopYLa87MIz6lMgGOqUBEs2e%2BkmkggNASaZreWDv%2FGs6mfgUPi0Nyu%2FFgUS12XieXIKtGCgpxEroJwLn9Iu5fYyl4RwXQYtLqXw46%2FPXzpFgnHdrWOMBWEfavf7QhDGhh%2FYID1ApgQtvZuVtpUz1ZsUL6RGBbEVhYLkeBzEplLRS1B17I9CJjpevfwg2OWVliF953b%2F3%2BhuUQ8vt42D%2Bei2JfN15aFnerOLNFAsJvGNpN0K2&X-Amz-Signature=4622bb59566a13fe9e977e82a474f719520cf98e9dade614fed506409c82b6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
