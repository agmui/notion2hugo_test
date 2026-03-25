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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=1f6939e0d60c326680c945293adb111de30d1ca2c024653386b3f279507c5623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=b0f2266358cccc24973009cddbb6e93a0b12507b52e33510858422bb621316e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=daee5dd56cd6bf062a9b17fd7f4b6ab1653973ec481b8eff0b32c1a839024c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=c737539994a9d19774fa615fcd2a2259274068897d76987bd8c420b3c4937239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=0d870922e8b5e99dcde58015d0cf108e5a95fe34f75066d21a3f3e07f2c76ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=a431008c380534fd71f1c5eec57db92934ea74933c4e6a136c80b78a39d0cc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=4d05f727d0865bd70d11b1359a90f7af9e0a7adfeb7f7a98651a7167a296e386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=e187c65cefc9fd5d884af3486bd8581c8f663f2cfe10a6071c90136bd84374e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=e33423f8bbf88b7b7eb15c02ab1ccfdb8c2eb281deb81249a57d5f5cbe3e2c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=9b2e0bddfb8865122c15de369267229c5cf61d47ee3336a8dc99ba78363d8d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=73a184278d733c8aa6e3d131d54511837b103b17a3b460089a5e21593bda2e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=39096394223c41c3cf2156a1f922310142ae1b592fc727c0ffb041f81bd40fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44HG4HA%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qwRF0FUcU070%2FsJ94gPnfvdp5s6lQX%2FrE3UCtK1lEwIhAOPylsE594eXbo6EzaWefw92eKqgRRXgrQsNUHkvMXd3KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwac8vYM2CgS7u1bgq3ANvwxHSsTGoIB7bbST%2BEXGokOtRUMVe6RJhQJgc2W1YOC4%2F8ElfZ51G1Oqx2%2BEoTaqRpfHWhpQ%2F5wl%2Bjg6YdIZHwqwByqqoNejtaKd4NsTxdN3bzWAtbUYHq8ieKHfXLv2%2BIVZcfxiKm7TuH2lbdxY0xh8LCGnmDXWuzo77zQInIU14evdZjspcR%2Bi5ZaDYnfdx6%2F1P%2B76NuLeRNUG8GXAUxODhYkpaFPW2dbvZETGUDdsZAb%2BomzB0FW4zOCpt2hCwdt9ptqOUPqPpmDcO%2B4e4brWMeHJRENmDeI64%2BnwzHjYdoGbU49TdHzfdIlTbhMu0GhU0gk8Ki4Rc7oBuOwkiyR80Ie7bIcTxTx5uUY82fQZnoWPYmafdoy9KkdT3rUtR0%2FRdyqdCAwGHjQuxouMTlzCP6GbTrJSkXhQKDQESapVL4LzDUnYUVTTumc5UMkEGPJqW4huA%2BOeRqgX%2FYKnffOXu3LdSNWkRlsGarbBInLatLeC1nuVtKcKFEiPqPbpWyvydcRSKMeLHZlUFEU6MU1x%2BTKEgAtRCsA9lrGLZSBMVYzuuXv%2BCnKHEQNLaLtOgvMqLOlOM4F4Q6BZ4FaOyaVnTwlbOjbD%2BxnjbMIY0vTYyl%2FdceWTG%2FiQeQTDV9IzOBjqkAbbnxNACOID%2F3ATpdgCUtsECtSyfyo57zdXIiDw8Lw3b1wwvpc7ClFi2HYRuFBsO3tS%2Fkx5rT%2FcAzQ%2B2qGz6ygY6NKJKADHJqd1zK%2BlXlsJyGYEhiWOSu4AbV6eME8%2Fhaz51Hajgp62X0Xok8gla9Fd0RHntGP%2BuuG8aWAn1%2BfmE0QNS%2FUshSlCKuRYTGlqVuz2ZI8UgQNZf49gmmKw1NiFhhcL2&X-Amz-Signature=6178ec789711647e3928185dcbd7d5af2976cd4387285f85759ea224a99287df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
