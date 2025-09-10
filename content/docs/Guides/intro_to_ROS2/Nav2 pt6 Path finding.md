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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=2e7f5dd1226d953cc79e0eb4d7a3c5bbb29e8a291041699940ca6c6f94b95cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=35399c574bc0b060009d517230c67f28b9d4cce8398ca8c9b4014296871453f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=2eedb3be490fee9519ad110752851b922a0a00a319011ec268f014d2a22da857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=fafae94841c3f6f900eec54cfd159f3353a61086cb56399e2c26378f6f99d15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=f6a8ec6f29287328f52c69e988b3c15eb8d2df3e0325f1da16447f7f62034516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=03c22cee321fce87f7e2d045cb3d5a3972b5dfe61dc2b8c0ac55feef64bbdb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=5ecfd997bf6b36e8101bccb0bde59d3e7bf315cefccbaa4f6834d5c00a767658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=9cc8c957fee46d0fe36dde5f7d8b10c0559f96dfbb6ccdbfa8157de5b3ea59b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=73ce57a08bc42a83574464ad43bc4e925b87cd71926a4d4797edac2f8bad3eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=66f8ac87d1fd6be74bf8458d92af27ec6a68104fff3aa8830d1c3670ee0bd0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=2c9ebff573234e8ec4a558eb57b458fed59c01e65963767bb2e804cccecd1b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=2ba0494ec18fe1a2043caa17fcd4fbbd02abb7fd865680aaae6c346ef232a8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JN2APYV%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDitm5ECnK4P4DlIbX1%2Fg4EYIlIVkOx9BPxCN%2FmXQe8PQIhAOb50QkyNGAPq2uaStpA8goAyCoYNsdOlswMhCkaoUgkKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY33EM7ZUikV4B1v4q3ANKKQctfMkLk73zSSm2zKElVvWAZGNTxPwj9vNDoNZJludTJ6kLxb%2BF2CdqXZhTmDx3MFVPykOXxrE3uMOOdV%2B0MEgjoLO9WBGLdpRHkEO7LRt8c0tzQ1JcRVJPYAzbt2B5VnHMNZAQCjEHGBmjeE8dYedVisYFJfl7B09l9ZrEJHz9X1NwkfBlgUKz%2Flt7VNLsVtJs7Cczxm04OGNxMp9YDxVqKQAV5WIeuTMG9gc8stCM1%2Byo303DOwL5zG4uA3z3i2yavSkle86t7m%2FiTNtbMz7XJc74%2F4GEc%2FlWm0AC70taqE5MQPBXSP1GFp1amVo8YMec1QZ%2F6nLa8lIY29EAeSofDRHNQicuMzmYxH58R1tNcHATETn5LfNSQTI%2FOpal7Pc7TVtGhas5f7eS6KGI2Ng5%2FJPBjwj3%2Bh0d2cp7RFb3t9B5yeSgdscZEyg%2FM5D0OmeMR60y59Kjpd4clOlnJ9m0Lr6zOA6ie51m2uq15fb9uF%2FOvZjQXpiH0T%2FdAZFvMYMlGS5G7pV5MuYpskUgoR0lHP4%2BTZTi02x1MARmUBH3MugqEN8mdP97J55MhRx4HdsmSZ27fjrM7wVfN1VaNlfEwvQbZeU%2B4bT2hARWYJM11p%2FUvcnDFLrWcTDGjIPGBjqkAcr%2B0edr4WzThguNKqNgxqp6Nt9h0cjjITgqkbJjHWh7EOO5X4HgmgHKQp923AfPmJv9zocinAj0Fuu47nt7%2F4W8kDPCd2lh%2BRESHdZRhi7d0HrD8gE0iwnyPKUmi4B8CEQPjro%2FeCWCamQC8RFFpZ94SgxtrISzky%2BsXP1kQRp3NeEQzbpXxjYeiu%2BXEDoyEImvY16ToUekZJkdO4Tt87KT87Vk&X-Amz-Signature=427580409b0d9a610aa4accf2b6a00e6592e4af3ad30f14320f50688c121b668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
