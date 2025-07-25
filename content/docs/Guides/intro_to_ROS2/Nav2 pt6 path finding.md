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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVUFZXX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMe0p9Va1nTjoLzGVSK6d7S8leBhjdIPRXrsG2D6l1gIhAJA96VKRuFKIO%2Bb8zNINYMJa9Zs47l4yqOBsZb%2BIGo5OKv8DCEIQABoMNjM3NDIzMTgzODA1IgzdJVAlIsiHY%2Baqpaoq3AO%2FKhlU91feOkdJLMVkirIc2lC%2BRItDbbG1uQd4mXPd2X6i3bdhm2xlMY%2B%2FUkxlZbkOTI6AqkOUIiLPT0nkFzGEbAZ0xLmd%2B6RwwV94WRQd5MveImy10cHXUmqCoXZAigjDOAWxwtCOMj8%2BrsKCbwsB4nzYa3bX1Bf13MmnwzTSd7o4zMoF7TfkTnhpLBQW%2F1cwcbxGQKdFse9Im4Q527xiFZdwy%2FsGUrJ%2FUkE8AMl%2BKfod6iBqypuTJ%2F%2BSAb3dMI4uc%2FIxPdoLGaUJ6w%2BdEbJTPXbhyzT3Pl0G8XC1s9M1ciPxqKOuVTwCPU3y8Tn%2B0bHh0Poyj4bAOWPlq4EGgY6btkKKUFiRhKhMkhSTeTm%2BoCDmUh9ydpemG5TrhCda2C4ygNpHH%2FaTiU1hDX5KsSaPWD%2BgQTv6BOdbzCS8bhFm6zTnQbMIil3SQusogJlr%2B3ozoVYlmv5QPVo2A%2FRBoUnXLjr1BjElFFqBDm5zOT%2BZc8k%2BkXPDxmyYNiDHd4Tbcx1TuHclz0iVw9edChBdiP2rANKlKxAJnXWZhghOwKFOG4MJ2bmNLI6Hapc66%2BTTDs56gSHMvLhQwpGxD4g67gDRlY0EC8A%2FxF%2B6nwk5qstTL8nT%2BuruzjQkiw4OiDCwjI3EBjqkAWxkCdQFq6QTX2lxvUNt1C7h0rukKJf8%2FfT2L6%2B0W2JNuvdTrW8kMGtx0W9toXPPV2L25hx9sxj0sySlSv4L5WSzug55tw3sQ4P5TdOS%2FvvKyUjXnpP8eKeKnmKoZnklmbF3SuAHiU3uFuM0Rbug0KL17cQ3bQSOWNJU7Znvcu%2FV571XmMGh5c2xz%2FIeK3v78n3axstYeH2Eo3my7kYvyNr4yTnr&X-Amz-Signature=476235155fcb5d1517ea381390e927c5556480df37a52fc2afcb5da6e5c87e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVUFZXX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMe0p9Va1nTjoLzGVSK6d7S8leBhjdIPRXrsG2D6l1gIhAJA96VKRuFKIO%2Bb8zNINYMJa9Zs47l4yqOBsZb%2BIGo5OKv8DCEIQABoMNjM3NDIzMTgzODA1IgzdJVAlIsiHY%2Baqpaoq3AO%2FKhlU91feOkdJLMVkirIc2lC%2BRItDbbG1uQd4mXPd2X6i3bdhm2xlMY%2B%2FUkxlZbkOTI6AqkOUIiLPT0nkFzGEbAZ0xLmd%2B6RwwV94WRQd5MveImy10cHXUmqCoXZAigjDOAWxwtCOMj8%2BrsKCbwsB4nzYa3bX1Bf13MmnwzTSd7o4zMoF7TfkTnhpLBQW%2F1cwcbxGQKdFse9Im4Q527xiFZdwy%2FsGUrJ%2FUkE8AMl%2BKfod6iBqypuTJ%2F%2BSAb3dMI4uc%2FIxPdoLGaUJ6w%2BdEbJTPXbhyzT3Pl0G8XC1s9M1ciPxqKOuVTwCPU3y8Tn%2B0bHh0Poyj4bAOWPlq4EGgY6btkKKUFiRhKhMkhSTeTm%2BoCDmUh9ydpemG5TrhCda2C4ygNpHH%2FaTiU1hDX5KsSaPWD%2BgQTv6BOdbzCS8bhFm6zTnQbMIil3SQusogJlr%2B3ozoVYlmv5QPVo2A%2FRBoUnXLjr1BjElFFqBDm5zOT%2BZc8k%2BkXPDxmyYNiDHd4Tbcx1TuHclz0iVw9edChBdiP2rANKlKxAJnXWZhghOwKFOG4MJ2bmNLI6Hapc66%2BTTDs56gSHMvLhQwpGxD4g67gDRlY0EC8A%2FxF%2B6nwk5qstTL8nT%2BuruzjQkiw4OiDCwjI3EBjqkAWxkCdQFq6QTX2lxvUNt1C7h0rukKJf8%2FfT2L6%2B0W2JNuvdTrW8kMGtx0W9toXPPV2L25hx9sxj0sySlSv4L5WSzug55tw3sQ4P5TdOS%2FvvKyUjXnpP8eKeKnmKoZnklmbF3SuAHiU3uFuM0Rbug0KL17cQ3bQSOWNJU7Znvcu%2FV571XmMGh5c2xz%2FIeK3v78n3axstYeH2Eo3my7kYvyNr4yTnr&X-Amz-Signature=58843e3111f161fd267ab92f4511affa0ec6c5d9f0b4f0ae46159c0dce63bc55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVUFZXX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMe0p9Va1nTjoLzGVSK6d7S8leBhjdIPRXrsG2D6l1gIhAJA96VKRuFKIO%2Bb8zNINYMJa9Zs47l4yqOBsZb%2BIGo5OKv8DCEIQABoMNjM3NDIzMTgzODA1IgzdJVAlIsiHY%2Baqpaoq3AO%2FKhlU91feOkdJLMVkirIc2lC%2BRItDbbG1uQd4mXPd2X6i3bdhm2xlMY%2B%2FUkxlZbkOTI6AqkOUIiLPT0nkFzGEbAZ0xLmd%2B6RwwV94WRQd5MveImy10cHXUmqCoXZAigjDOAWxwtCOMj8%2BrsKCbwsB4nzYa3bX1Bf13MmnwzTSd7o4zMoF7TfkTnhpLBQW%2F1cwcbxGQKdFse9Im4Q527xiFZdwy%2FsGUrJ%2FUkE8AMl%2BKfod6iBqypuTJ%2F%2BSAb3dMI4uc%2FIxPdoLGaUJ6w%2BdEbJTPXbhyzT3Pl0G8XC1s9M1ciPxqKOuVTwCPU3y8Tn%2B0bHh0Poyj4bAOWPlq4EGgY6btkKKUFiRhKhMkhSTeTm%2BoCDmUh9ydpemG5TrhCda2C4ygNpHH%2FaTiU1hDX5KsSaPWD%2BgQTv6BOdbzCS8bhFm6zTnQbMIil3SQusogJlr%2B3ozoVYlmv5QPVo2A%2FRBoUnXLjr1BjElFFqBDm5zOT%2BZc8k%2BkXPDxmyYNiDHd4Tbcx1TuHclz0iVw9edChBdiP2rANKlKxAJnXWZhghOwKFOG4MJ2bmNLI6Hapc66%2BTTDs56gSHMvLhQwpGxD4g67gDRlY0EC8A%2FxF%2B6nwk5qstTL8nT%2BuruzjQkiw4OiDCwjI3EBjqkAWxkCdQFq6QTX2lxvUNt1C7h0rukKJf8%2FfT2L6%2B0W2JNuvdTrW8kMGtx0W9toXPPV2L25hx9sxj0sySlSv4L5WSzug55tw3sQ4P5TdOS%2FvvKyUjXnpP8eKeKnmKoZnklmbF3SuAHiU3uFuM0Rbug0KL17cQ3bQSOWNJU7Znvcu%2FV571XmMGh5c2xz%2FIeK3v78n3axstYeH2Eo3my7kYvyNr4yTnr&X-Amz-Signature=d92b924ae234c288667c075c1d8b3653a4258433d4b68b6ad6cd6b90c7887c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVUFZXX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMe0p9Va1nTjoLzGVSK6d7S8leBhjdIPRXrsG2D6l1gIhAJA96VKRuFKIO%2Bb8zNINYMJa9Zs47l4yqOBsZb%2BIGo5OKv8DCEIQABoMNjM3NDIzMTgzODA1IgzdJVAlIsiHY%2Baqpaoq3AO%2FKhlU91feOkdJLMVkirIc2lC%2BRItDbbG1uQd4mXPd2X6i3bdhm2xlMY%2B%2FUkxlZbkOTI6AqkOUIiLPT0nkFzGEbAZ0xLmd%2B6RwwV94WRQd5MveImy10cHXUmqCoXZAigjDOAWxwtCOMj8%2BrsKCbwsB4nzYa3bX1Bf13MmnwzTSd7o4zMoF7TfkTnhpLBQW%2F1cwcbxGQKdFse9Im4Q527xiFZdwy%2FsGUrJ%2FUkE8AMl%2BKfod6iBqypuTJ%2F%2BSAb3dMI4uc%2FIxPdoLGaUJ6w%2BdEbJTPXbhyzT3Pl0G8XC1s9M1ciPxqKOuVTwCPU3y8Tn%2B0bHh0Poyj4bAOWPlq4EGgY6btkKKUFiRhKhMkhSTeTm%2BoCDmUh9ydpemG5TrhCda2C4ygNpHH%2FaTiU1hDX5KsSaPWD%2BgQTv6BOdbzCS8bhFm6zTnQbMIil3SQusogJlr%2B3ozoVYlmv5QPVo2A%2FRBoUnXLjr1BjElFFqBDm5zOT%2BZc8k%2BkXPDxmyYNiDHd4Tbcx1TuHclz0iVw9edChBdiP2rANKlKxAJnXWZhghOwKFOG4MJ2bmNLI6Hapc66%2BTTDs56gSHMvLhQwpGxD4g67gDRlY0EC8A%2FxF%2B6nwk5qstTL8nT%2BuruzjQkiw4OiDCwjI3EBjqkAWxkCdQFq6QTX2lxvUNt1C7h0rukKJf8%2FfT2L6%2B0W2JNuvdTrW8kMGtx0W9toXPPV2L25hx9sxj0sySlSv4L5WSzug55tw3sQ4P5TdOS%2FvvKyUjXnpP8eKeKnmKoZnklmbF3SuAHiU3uFuM0Rbug0KL17cQ3bQSOWNJU7Znvcu%2FV571XmMGh5c2xz%2FIeK3v78n3axstYeH2Eo3my7kYvyNr4yTnr&X-Amz-Signature=e7da02fa138b53d4310f1cb90b611becaec41d568bd0ea11bcb71ef97eeac3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVUFZXX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMe0p9Va1nTjoLzGVSK6d7S8leBhjdIPRXrsG2D6l1gIhAJA96VKRuFKIO%2Bb8zNINYMJa9Zs47l4yqOBsZb%2BIGo5OKv8DCEIQABoMNjM3NDIzMTgzODA1IgzdJVAlIsiHY%2Baqpaoq3AO%2FKhlU91feOkdJLMVkirIc2lC%2BRItDbbG1uQd4mXPd2X6i3bdhm2xlMY%2B%2FUkxlZbkOTI6AqkOUIiLPT0nkFzGEbAZ0xLmd%2B6RwwV94WRQd5MveImy10cHXUmqCoXZAigjDOAWxwtCOMj8%2BrsKCbwsB4nzYa3bX1Bf13MmnwzTSd7o4zMoF7TfkTnhpLBQW%2F1cwcbxGQKdFse9Im4Q527xiFZdwy%2FsGUrJ%2FUkE8AMl%2BKfod6iBqypuTJ%2F%2BSAb3dMI4uc%2FIxPdoLGaUJ6w%2BdEbJTPXbhyzT3Pl0G8XC1s9M1ciPxqKOuVTwCPU3y8Tn%2B0bHh0Poyj4bAOWPlq4EGgY6btkKKUFiRhKhMkhSTeTm%2BoCDmUh9ydpemG5TrhCda2C4ygNpHH%2FaTiU1hDX5KsSaPWD%2BgQTv6BOdbzCS8bhFm6zTnQbMIil3SQusogJlr%2B3ozoVYlmv5QPVo2A%2FRBoUnXLjr1BjElFFqBDm5zOT%2BZc8k%2BkXPDxmyYNiDHd4Tbcx1TuHclz0iVw9edChBdiP2rANKlKxAJnXWZhghOwKFOG4MJ2bmNLI6Hapc66%2BTTDs56gSHMvLhQwpGxD4g67gDRlY0EC8A%2FxF%2B6nwk5qstTL8nT%2BuruzjQkiw4OiDCwjI3EBjqkAWxkCdQFq6QTX2lxvUNt1C7h0rukKJf8%2FfT2L6%2B0W2JNuvdTrW8kMGtx0W9toXPPV2L25hx9sxj0sySlSv4L5WSzug55tw3sQ4P5TdOS%2FvvKyUjXnpP8eKeKnmKoZnklmbF3SuAHiU3uFuM0Rbug0KL17cQ3bQSOWNJU7Znvcu%2FV571XmMGh5c2xz%2FIeK3v78n3axstYeH2Eo3my7kYvyNr4yTnr&X-Amz-Signature=c238ce811b1dc7358415c31ad988d5271c3ad1f40170ff48d472ba81b09cea8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVUFZXX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMe0p9Va1nTjoLzGVSK6d7S8leBhjdIPRXrsG2D6l1gIhAJA96VKRuFKIO%2Bb8zNINYMJa9Zs47l4yqOBsZb%2BIGo5OKv8DCEIQABoMNjM3NDIzMTgzODA1IgzdJVAlIsiHY%2Baqpaoq3AO%2FKhlU91feOkdJLMVkirIc2lC%2BRItDbbG1uQd4mXPd2X6i3bdhm2xlMY%2B%2FUkxlZbkOTI6AqkOUIiLPT0nkFzGEbAZ0xLmd%2B6RwwV94WRQd5MveImy10cHXUmqCoXZAigjDOAWxwtCOMj8%2BrsKCbwsB4nzYa3bX1Bf13MmnwzTSd7o4zMoF7TfkTnhpLBQW%2F1cwcbxGQKdFse9Im4Q527xiFZdwy%2FsGUrJ%2FUkE8AMl%2BKfod6iBqypuTJ%2F%2BSAb3dMI4uc%2FIxPdoLGaUJ6w%2BdEbJTPXbhyzT3Pl0G8XC1s9M1ciPxqKOuVTwCPU3y8Tn%2B0bHh0Poyj4bAOWPlq4EGgY6btkKKUFiRhKhMkhSTeTm%2BoCDmUh9ydpemG5TrhCda2C4ygNpHH%2FaTiU1hDX5KsSaPWD%2BgQTv6BOdbzCS8bhFm6zTnQbMIil3SQusogJlr%2B3ozoVYlmv5QPVo2A%2FRBoUnXLjr1BjElFFqBDm5zOT%2BZc8k%2BkXPDxmyYNiDHd4Tbcx1TuHclz0iVw9edChBdiP2rANKlKxAJnXWZhghOwKFOG4MJ2bmNLI6Hapc66%2BTTDs56gSHMvLhQwpGxD4g67gDRlY0EC8A%2FxF%2B6nwk5qstTL8nT%2BuruzjQkiw4OiDCwjI3EBjqkAWxkCdQFq6QTX2lxvUNt1C7h0rukKJf8%2FfT2L6%2B0W2JNuvdTrW8kMGtx0W9toXPPV2L25hx9sxj0sySlSv4L5WSzug55tw3sQ4P5TdOS%2FvvKyUjXnpP8eKeKnmKoZnklmbF3SuAHiU3uFuM0Rbug0KL17cQ3bQSOWNJU7Znvcu%2FV571XmMGh5c2xz%2FIeK3v78n3axstYeH2Eo3my7kYvyNr4yTnr&X-Amz-Signature=696444f8ba3b70fa7b264da5de78963c97109a7e6866a11e950b525a90edd825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
