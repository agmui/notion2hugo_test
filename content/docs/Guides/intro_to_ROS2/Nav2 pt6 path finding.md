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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRBI25%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1rgFcUP0WfcD2YRECSF5p4ae52gE0ndepSaLxzOfsxQIgNt9pOfZRBlTCPfaiIXc7GjAx8ob67XvuBGR9zrksIiYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOOKZzFm9BHsB2%2FLSrcAw9PwLIlj%2BRkg87%2F8e1A59m%2BvZV3%2BlN6gj%2FYqBaQ5mH26mXRX%2FWT0jYAb3rzkaZTXX8VRGPLPn5H0%2B5cifKzoSO2w%2FRCpRaK5ftMzhIyLtiGB3VGI%2BO9qMVigS0ZCzlQl9TNp9JWi2o5lQx1jc8tTTtPJFLK7LOTSrWG9FiphrOa7Ky3hSPfo5dorgm26trVV5YOO3Zv7jNjjqb1i9DvbadRQxoqzcdfSbix6eLteijoCjU7lutG0%2BOTkfo3L38DtcpXPyhr7muYIMMfxT%2BCsUolZ6WVOJnuhwja0RKnzHpii6wWxvuSIUj5fq%2FtDHWKlbx2UZ8zb0fHCgkj2gIvbe0D0fYE33SKTGcgGdLQEGjVjUdHNIJsasUrP5RFheHUMFTQyMAlXpO%2F52oas3alrzi4j4hA6LbcTfnn2wfVm9%2FofUqVLw8BFoVWshSwWHi4b%2FXOpwwja%2FCYbzNG0Yk12TzYe9yiTztxML%2B956qjygYn4CtRbnfrmB5OGCxcDCsGUqFqR2ee6sg%2FSCEsHrQW3wMW6PcEsFQtj8sGilQ5MZ7Jvq%2F3bYTVuvlZPZTcEvejH%2BZPgItYe5MeMxBRr01cVXF5Fu3pPjEXkJZJYTgXcsfEqHtE86MVNd7tfXZtMOmDosQGOqUBP5jiJomrimKNWwz1%2Bg2BVIAFU%2FcVG0qECJ2UCB3xhZPIB691jsAtDK0rFI99jwFvImehqZWFfax6efdDI1h50F%2B%2FCPP2jDks8J1U6j3RJDfE2Ro2g0CbI0cqKaXPX1o9PaC0zlGrgnZTP%2FurIjpwNVanfnYADGq70miVz9iubjE3sZlJJo0snP80s9b%2BGCE3b8iicRPT0QHH8LQw0%2BkWjNAP2GmR&X-Amz-Signature=287244b749570ac7ca46544eb416914bfdb9cbe02ab92f1267b5cc4db92b9753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRBI25%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1rgFcUP0WfcD2YRECSF5p4ae52gE0ndepSaLxzOfsxQIgNt9pOfZRBlTCPfaiIXc7GjAx8ob67XvuBGR9zrksIiYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOOKZzFm9BHsB2%2FLSrcAw9PwLIlj%2BRkg87%2F8e1A59m%2BvZV3%2BlN6gj%2FYqBaQ5mH26mXRX%2FWT0jYAb3rzkaZTXX8VRGPLPn5H0%2B5cifKzoSO2w%2FRCpRaK5ftMzhIyLtiGB3VGI%2BO9qMVigS0ZCzlQl9TNp9JWi2o5lQx1jc8tTTtPJFLK7LOTSrWG9FiphrOa7Ky3hSPfo5dorgm26trVV5YOO3Zv7jNjjqb1i9DvbadRQxoqzcdfSbix6eLteijoCjU7lutG0%2BOTkfo3L38DtcpXPyhr7muYIMMfxT%2BCsUolZ6WVOJnuhwja0RKnzHpii6wWxvuSIUj5fq%2FtDHWKlbx2UZ8zb0fHCgkj2gIvbe0D0fYE33SKTGcgGdLQEGjVjUdHNIJsasUrP5RFheHUMFTQyMAlXpO%2F52oas3alrzi4j4hA6LbcTfnn2wfVm9%2FofUqVLw8BFoVWshSwWHi4b%2FXOpwwja%2FCYbzNG0Yk12TzYe9yiTztxML%2B956qjygYn4CtRbnfrmB5OGCxcDCsGUqFqR2ee6sg%2FSCEsHrQW3wMW6PcEsFQtj8sGilQ5MZ7Jvq%2F3bYTVuvlZPZTcEvejH%2BZPgItYe5MeMxBRr01cVXF5Fu3pPjEXkJZJYTgXcsfEqHtE86MVNd7tfXZtMOmDosQGOqUBP5jiJomrimKNWwz1%2Bg2BVIAFU%2FcVG0qECJ2UCB3xhZPIB691jsAtDK0rFI99jwFvImehqZWFfax6efdDI1h50F%2B%2FCPP2jDks8J1U6j3RJDfE2Ro2g0CbI0cqKaXPX1o9PaC0zlGrgnZTP%2FurIjpwNVanfnYADGq70miVz9iubjE3sZlJJo0snP80s9b%2BGCE3b8iicRPT0QHH8LQw0%2BkWjNAP2GmR&X-Amz-Signature=7392820196d35c112bac0f9a002b02afca60cd937a05c3b2b465e331bd2c5a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRBI25%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1rgFcUP0WfcD2YRECSF5p4ae52gE0ndepSaLxzOfsxQIgNt9pOfZRBlTCPfaiIXc7GjAx8ob67XvuBGR9zrksIiYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOOKZzFm9BHsB2%2FLSrcAw9PwLIlj%2BRkg87%2F8e1A59m%2BvZV3%2BlN6gj%2FYqBaQ5mH26mXRX%2FWT0jYAb3rzkaZTXX8VRGPLPn5H0%2B5cifKzoSO2w%2FRCpRaK5ftMzhIyLtiGB3VGI%2BO9qMVigS0ZCzlQl9TNp9JWi2o5lQx1jc8tTTtPJFLK7LOTSrWG9FiphrOa7Ky3hSPfo5dorgm26trVV5YOO3Zv7jNjjqb1i9DvbadRQxoqzcdfSbix6eLteijoCjU7lutG0%2BOTkfo3L38DtcpXPyhr7muYIMMfxT%2BCsUolZ6WVOJnuhwja0RKnzHpii6wWxvuSIUj5fq%2FtDHWKlbx2UZ8zb0fHCgkj2gIvbe0D0fYE33SKTGcgGdLQEGjVjUdHNIJsasUrP5RFheHUMFTQyMAlXpO%2F52oas3alrzi4j4hA6LbcTfnn2wfVm9%2FofUqVLw8BFoVWshSwWHi4b%2FXOpwwja%2FCYbzNG0Yk12TzYe9yiTztxML%2B956qjygYn4CtRbnfrmB5OGCxcDCsGUqFqR2ee6sg%2FSCEsHrQW3wMW6PcEsFQtj8sGilQ5MZ7Jvq%2F3bYTVuvlZPZTcEvejH%2BZPgItYe5MeMxBRr01cVXF5Fu3pPjEXkJZJYTgXcsfEqHtE86MVNd7tfXZtMOmDosQGOqUBP5jiJomrimKNWwz1%2Bg2BVIAFU%2FcVG0qECJ2UCB3xhZPIB691jsAtDK0rFI99jwFvImehqZWFfax6efdDI1h50F%2B%2FCPP2jDks8J1U6j3RJDfE2Ro2g0CbI0cqKaXPX1o9PaC0zlGrgnZTP%2FurIjpwNVanfnYADGq70miVz9iubjE3sZlJJo0snP80s9b%2BGCE3b8iicRPT0QHH8LQw0%2BkWjNAP2GmR&X-Amz-Signature=3800af39e9654b6a0a99764be443c8beb53703e1ecbd67f371dba1ff23d8ebc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRBI25%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1rgFcUP0WfcD2YRECSF5p4ae52gE0ndepSaLxzOfsxQIgNt9pOfZRBlTCPfaiIXc7GjAx8ob67XvuBGR9zrksIiYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOOKZzFm9BHsB2%2FLSrcAw9PwLIlj%2BRkg87%2F8e1A59m%2BvZV3%2BlN6gj%2FYqBaQ5mH26mXRX%2FWT0jYAb3rzkaZTXX8VRGPLPn5H0%2B5cifKzoSO2w%2FRCpRaK5ftMzhIyLtiGB3VGI%2BO9qMVigS0ZCzlQl9TNp9JWi2o5lQx1jc8tTTtPJFLK7LOTSrWG9FiphrOa7Ky3hSPfo5dorgm26trVV5YOO3Zv7jNjjqb1i9DvbadRQxoqzcdfSbix6eLteijoCjU7lutG0%2BOTkfo3L38DtcpXPyhr7muYIMMfxT%2BCsUolZ6WVOJnuhwja0RKnzHpii6wWxvuSIUj5fq%2FtDHWKlbx2UZ8zb0fHCgkj2gIvbe0D0fYE33SKTGcgGdLQEGjVjUdHNIJsasUrP5RFheHUMFTQyMAlXpO%2F52oas3alrzi4j4hA6LbcTfnn2wfVm9%2FofUqVLw8BFoVWshSwWHi4b%2FXOpwwja%2FCYbzNG0Yk12TzYe9yiTztxML%2B956qjygYn4CtRbnfrmB5OGCxcDCsGUqFqR2ee6sg%2FSCEsHrQW3wMW6PcEsFQtj8sGilQ5MZ7Jvq%2F3bYTVuvlZPZTcEvejH%2BZPgItYe5MeMxBRr01cVXF5Fu3pPjEXkJZJYTgXcsfEqHtE86MVNd7tfXZtMOmDosQGOqUBP5jiJomrimKNWwz1%2Bg2BVIAFU%2FcVG0qECJ2UCB3xhZPIB691jsAtDK0rFI99jwFvImehqZWFfax6efdDI1h50F%2B%2FCPP2jDks8J1U6j3RJDfE2Ro2g0CbI0cqKaXPX1o9PaC0zlGrgnZTP%2FurIjpwNVanfnYADGq70miVz9iubjE3sZlJJo0snP80s9b%2BGCE3b8iicRPT0QHH8LQw0%2BkWjNAP2GmR&X-Amz-Signature=3c4959260a3868d903c886b7e1fe50bd9858e233de8216ecb2b0b974108d4831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRBI25%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1rgFcUP0WfcD2YRECSF5p4ae52gE0ndepSaLxzOfsxQIgNt9pOfZRBlTCPfaiIXc7GjAx8ob67XvuBGR9zrksIiYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOOKZzFm9BHsB2%2FLSrcAw9PwLIlj%2BRkg87%2F8e1A59m%2BvZV3%2BlN6gj%2FYqBaQ5mH26mXRX%2FWT0jYAb3rzkaZTXX8VRGPLPn5H0%2B5cifKzoSO2w%2FRCpRaK5ftMzhIyLtiGB3VGI%2BO9qMVigS0ZCzlQl9TNp9JWi2o5lQx1jc8tTTtPJFLK7LOTSrWG9FiphrOa7Ky3hSPfo5dorgm26trVV5YOO3Zv7jNjjqb1i9DvbadRQxoqzcdfSbix6eLteijoCjU7lutG0%2BOTkfo3L38DtcpXPyhr7muYIMMfxT%2BCsUolZ6WVOJnuhwja0RKnzHpii6wWxvuSIUj5fq%2FtDHWKlbx2UZ8zb0fHCgkj2gIvbe0D0fYE33SKTGcgGdLQEGjVjUdHNIJsasUrP5RFheHUMFTQyMAlXpO%2F52oas3alrzi4j4hA6LbcTfnn2wfVm9%2FofUqVLw8BFoVWshSwWHi4b%2FXOpwwja%2FCYbzNG0Yk12TzYe9yiTztxML%2B956qjygYn4CtRbnfrmB5OGCxcDCsGUqFqR2ee6sg%2FSCEsHrQW3wMW6PcEsFQtj8sGilQ5MZ7Jvq%2F3bYTVuvlZPZTcEvejH%2BZPgItYe5MeMxBRr01cVXF5Fu3pPjEXkJZJYTgXcsfEqHtE86MVNd7tfXZtMOmDosQGOqUBP5jiJomrimKNWwz1%2Bg2BVIAFU%2FcVG0qECJ2UCB3xhZPIB691jsAtDK0rFI99jwFvImehqZWFfax6efdDI1h50F%2B%2FCPP2jDks8J1U6j3RJDfE2Ro2g0CbI0cqKaXPX1o9PaC0zlGrgnZTP%2FurIjpwNVanfnYADGq70miVz9iubjE3sZlJJo0snP80s9b%2BGCE3b8iicRPT0QHH8LQw0%2BkWjNAP2GmR&X-Amz-Signature=f0785d2319134f6f7e92d9512056eb8a7cdac1314e61e58a638a84c531b13965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRBI25%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD1rgFcUP0WfcD2YRECSF5p4ae52gE0ndepSaLxzOfsxQIgNt9pOfZRBlTCPfaiIXc7GjAx8ob67XvuBGR9zrksIiYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOOKZzFm9BHsB2%2FLSrcAw9PwLIlj%2BRkg87%2F8e1A59m%2BvZV3%2BlN6gj%2FYqBaQ5mH26mXRX%2FWT0jYAb3rzkaZTXX8VRGPLPn5H0%2B5cifKzoSO2w%2FRCpRaK5ftMzhIyLtiGB3VGI%2BO9qMVigS0ZCzlQl9TNp9JWi2o5lQx1jc8tTTtPJFLK7LOTSrWG9FiphrOa7Ky3hSPfo5dorgm26trVV5YOO3Zv7jNjjqb1i9DvbadRQxoqzcdfSbix6eLteijoCjU7lutG0%2BOTkfo3L38DtcpXPyhr7muYIMMfxT%2BCsUolZ6WVOJnuhwja0RKnzHpii6wWxvuSIUj5fq%2FtDHWKlbx2UZ8zb0fHCgkj2gIvbe0D0fYE33SKTGcgGdLQEGjVjUdHNIJsasUrP5RFheHUMFTQyMAlXpO%2F52oas3alrzi4j4hA6LbcTfnn2wfVm9%2FofUqVLw8BFoVWshSwWHi4b%2FXOpwwja%2FCYbzNG0Yk12TzYe9yiTztxML%2B956qjygYn4CtRbnfrmB5OGCxcDCsGUqFqR2ee6sg%2FSCEsHrQW3wMW6PcEsFQtj8sGilQ5MZ7Jvq%2F3bYTVuvlZPZTcEvejH%2BZPgItYe5MeMxBRr01cVXF5Fu3pPjEXkJZJYTgXcsfEqHtE86MVNd7tfXZtMOmDosQGOqUBP5jiJomrimKNWwz1%2Bg2BVIAFU%2FcVG0qECJ2UCB3xhZPIB691jsAtDK0rFI99jwFvImehqZWFfax6efdDI1h50F%2B%2FCPP2jDks8J1U6j3RJDfE2Ro2g0CbI0cqKaXPX1o9PaC0zlGrgnZTP%2FurIjpwNVanfnYADGq70miVz9iubjE3sZlJJo0snP80s9b%2BGCE3b8iicRPT0QHH8LQw0%2BkWjNAP2GmR&X-Amz-Signature=81728943cb31ec11b14fbf6a6f3fee491e1b9cbff44fe24b6519d518e2e3c7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
