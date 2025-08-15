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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=776d6f50f6f56e4cfe35726fcb3fba37f2c78ede8a1f2dda9ccaa1d0e1c20396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=2055c7294718da9fa1dd076111f44bc652ae450561cf6a15b2bca5841e6cfa05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=b19df9b0c87a2f1fc262f299a50ac489780adf444cfa77ca4a6895c5ccd86992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=094f9aa3057dcd8f0bbf6c151a8e04cae0ba9076970c71bb4a6f20ed4427f454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=e2e9f7f58a87a2749652fa1a3b2bf760988d18a76f2d6c3711339ede45c17b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=7e619decaa6cd245ba4cb3a142a2df646f01346d8a31ffd6ffd3d369adf62c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=1a0ad21d0791d16ea017b273691e2a28e45da9655bcdbd590b244e7f83ec967a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=6ee57eab2ed09da23ac0f8c028cb913230836b4cad80ce32aa054e75ec9c095d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=8ab669025e5fbdbcc061ae3d9d2c8c06b5b4e510a72a29ff2e63a9d08b1b1ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=95ea7a68222b14518c78d13f12c438ddf7298ee217cadf7a1a6771b2a5b0b4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=56095c6fc8565bdf1b103c577f05149cee1c484cc43659e4f225d6b7b39a4909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=066272392226c5d30d210d35f11874e63b9257e115281509e94985dd71e9bd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4BUCUR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHnT39ZgLljydXQW1IN49Sqvb0b9zNbbiplO4NHu2c6gIhAOSqOffKDJHBI4uJRwWUW8F9UA3GCfu9bdzRp4g3aqBiKv8DCFMQABoMNjM3NDIzMTgzODA1Igz0Y8taxgUh1L1Cu7gq3ANB2mHLvrr3CtaiIrABzqvshLWqFkyu5D7hkiDp23QzxhPfngh66fASxay8jEnbB9a63DVHjnZHSnBZ9dNkMZCIoVokaNFCL8xyT28NsqZ4%2Bi6UFOxnGEfY9A1GG39y16%2Fg0BTP9UpUHeL3GdU1IbDXoQ%2BFPlY0FtAR9EOfVBUjr1fxaeSRns920fDL%2BBZwsctDdtjTVSNKyt%2FqffbQ7Xng0x5KjpQjbMrPJ1pys1cauG1GOhm7dN8UcYKTuYtpEF89rrkavIpLtxYL2ZTWy6EYdmblNsVm%2BOaY%2FBSbnMQqfQPHHrSFgIzZFJfwejuKFGP1IkmQqzCkIazH8EWA0JqG9cOjwrGZIPjN72eNzNikglFfZIDbtKF2EbgnS5F5G6sXY9F1%2B7XSjRnJdjc86TTrgLTpDXrbF%2Bj5hMRk9U1ljOcN%2BJITqUP8js4Cug2IXNlAJ8WonGwblOc23DmJhQ3SY4Wf%2FB2mVxfvrbXIFGSXra69KffYfdegqvVUgjpZHlX8X3jyJ7cIQopVC22WBgrYc3I%2By4R%2FK5rkeeOlb0miBWxNb%2BM3gYoTifErovncgPqVWW3FBAaE%2FnGRYTkpsC4vUIhbcCz4%2BD7aPg7EefT5H0C0F4HDyK7chYiOITCfo%2FrEBjqkAWZskoSXSzkmx6fbxSnyo62v1O5tMYoiMI6L5NPCM24zL41RgIOx1JvWBsisxvk3qYbNNUNiDhjW7doQS%2BSSfm2wQTcMBWgHgThyciNeN0t%2FmblXN6adRYrZ3DpqEGHlS9NY1uGGkRepepCAkwaDg%2BL0nWW52Ftz%2F5aZCCzyN5RGNspGhDlbq8zT5bWD3ov3NLWSJXEkssUPpjSLNahCI6cbNXkd&X-Amz-Signature=12c0928f3a3ee3b461436b2d85e4f7d1affa95be60da3d5dea4f5ec88c36905b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
