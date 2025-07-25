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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSRCI7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICLAR%2BzMp3JbOE5em4f7G6e8qnKEhc2R22js6UHIXbf1AiAtXVm1%2BB5XRq5LgGejN3cmphJXgsxhNBwrakgsJLZqSCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiP%2FhBIglhvpnSJo1KtwDNjn9JYIkyyi5ZzRXAL89l2rfMgP0d%2F0z6MgUX77gXV3ZijcmRbJLNPaCXp30Y9As2Rq9pJwBn4f%2F%2BABDanzHZ%2FIhZjWHbWiDRzuxHXFizfDzWbTQl08cUJRIwwHAPBwKpWkxL7ARrwWPUyK16OWjbwBxE312zr0k2JC9rDFbDyHvAfWbYDj6wEwMNwpy4I1VOn44qHXfAcFFI07bXSVy6gXQXfYamNX0RqVH4OnJXrZHOHA9bVxw7knAzLDBKkvyfpzWcWIGB4ELq1tKCsGAcLmmi46G5uS6iOlO1rGR3BoFNyYpOZgi8MT0vboO%2FggoNbjPlfvAxiGN5tSkJurNB1e%2BiytYjQfOl3qoWTrpV0vVc5bAJBSEwb5EpD2PvBywquslxKl1ZKu1pLbdjD%2BAtcfqd%2FgmkpUUvoaZ1b%2BtALanu4FVjJ7GQGRJu9mRA06v7Ogz2%2B14nwxAPfT%2B%2BSBV1mX1ui3Dvd83Th5EFET5NBotN8coO%2BEizPQKAyrm2MLjD9AT5Lnr0k2%2FrHj3pi0pfp8nu1alFYtOdr4RQ67BoKbs4gYZJNamxcipqZsAxJCADAtwAq9495ih9v7LDQNJx%2FZFynDvttcRWJ27g9F63vldy2KXdb%2BL1z%2FYnZMw1LyOxAY6pgEn%2BYO7V76kYuZ%2BV8omPBwROdd9TUER3cYgDRtKDYWtQ6EgjLTK635TMLQAhOiW7TrkNzT3C%2FuX3NwfvePKKhadCwENLQgGLqeOgbr53bKrVq5Rvom4hKb6CqYQed4N2L9l2urmSvh1goXyuEENhXvINOhP1UnzaXuckMyk7V3%2FZShhP2l9tyhrGQ0gR4GctbFco83AVb%2FIGXheIO%2FCkkXtcPmA4SQP&X-Amz-Signature=1a6fb4507dab2bd54b38a09442d08b3df9d6cd779737cdb9fa13b2e70f8f74d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSRCI7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICLAR%2BzMp3JbOE5em4f7G6e8qnKEhc2R22js6UHIXbf1AiAtXVm1%2BB5XRq5LgGejN3cmphJXgsxhNBwrakgsJLZqSCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiP%2FhBIglhvpnSJo1KtwDNjn9JYIkyyi5ZzRXAL89l2rfMgP0d%2F0z6MgUX77gXV3ZijcmRbJLNPaCXp30Y9As2Rq9pJwBn4f%2F%2BABDanzHZ%2FIhZjWHbWiDRzuxHXFizfDzWbTQl08cUJRIwwHAPBwKpWkxL7ARrwWPUyK16OWjbwBxE312zr0k2JC9rDFbDyHvAfWbYDj6wEwMNwpy4I1VOn44qHXfAcFFI07bXSVy6gXQXfYamNX0RqVH4OnJXrZHOHA9bVxw7knAzLDBKkvyfpzWcWIGB4ELq1tKCsGAcLmmi46G5uS6iOlO1rGR3BoFNyYpOZgi8MT0vboO%2FggoNbjPlfvAxiGN5tSkJurNB1e%2BiytYjQfOl3qoWTrpV0vVc5bAJBSEwb5EpD2PvBywquslxKl1ZKu1pLbdjD%2BAtcfqd%2FgmkpUUvoaZ1b%2BtALanu4FVjJ7GQGRJu9mRA06v7Ogz2%2B14nwxAPfT%2B%2BSBV1mX1ui3Dvd83Th5EFET5NBotN8coO%2BEizPQKAyrm2MLjD9AT5Lnr0k2%2FrHj3pi0pfp8nu1alFYtOdr4RQ67BoKbs4gYZJNamxcipqZsAxJCADAtwAq9495ih9v7LDQNJx%2FZFynDvttcRWJ27g9F63vldy2KXdb%2BL1z%2FYnZMw1LyOxAY6pgEn%2BYO7V76kYuZ%2BV8omPBwROdd9TUER3cYgDRtKDYWtQ6EgjLTK635TMLQAhOiW7TrkNzT3C%2FuX3NwfvePKKhadCwENLQgGLqeOgbr53bKrVq5Rvom4hKb6CqYQed4N2L9l2urmSvh1goXyuEENhXvINOhP1UnzaXuckMyk7V3%2FZShhP2l9tyhrGQ0gR4GctbFco83AVb%2FIGXheIO%2FCkkXtcPmA4SQP&X-Amz-Signature=7ff27cbeb41e05d8b2c1f706e7991222ba9d678ca4e7afe052a459289e2d0311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSRCI7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICLAR%2BzMp3JbOE5em4f7G6e8qnKEhc2R22js6UHIXbf1AiAtXVm1%2BB5XRq5LgGejN3cmphJXgsxhNBwrakgsJLZqSCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiP%2FhBIglhvpnSJo1KtwDNjn9JYIkyyi5ZzRXAL89l2rfMgP0d%2F0z6MgUX77gXV3ZijcmRbJLNPaCXp30Y9As2Rq9pJwBn4f%2F%2BABDanzHZ%2FIhZjWHbWiDRzuxHXFizfDzWbTQl08cUJRIwwHAPBwKpWkxL7ARrwWPUyK16OWjbwBxE312zr0k2JC9rDFbDyHvAfWbYDj6wEwMNwpy4I1VOn44qHXfAcFFI07bXSVy6gXQXfYamNX0RqVH4OnJXrZHOHA9bVxw7knAzLDBKkvyfpzWcWIGB4ELq1tKCsGAcLmmi46G5uS6iOlO1rGR3BoFNyYpOZgi8MT0vboO%2FggoNbjPlfvAxiGN5tSkJurNB1e%2BiytYjQfOl3qoWTrpV0vVc5bAJBSEwb5EpD2PvBywquslxKl1ZKu1pLbdjD%2BAtcfqd%2FgmkpUUvoaZ1b%2BtALanu4FVjJ7GQGRJu9mRA06v7Ogz2%2B14nwxAPfT%2B%2BSBV1mX1ui3Dvd83Th5EFET5NBotN8coO%2BEizPQKAyrm2MLjD9AT5Lnr0k2%2FrHj3pi0pfp8nu1alFYtOdr4RQ67BoKbs4gYZJNamxcipqZsAxJCADAtwAq9495ih9v7LDQNJx%2FZFynDvttcRWJ27g9F63vldy2KXdb%2BL1z%2FYnZMw1LyOxAY6pgEn%2BYO7V76kYuZ%2BV8omPBwROdd9TUER3cYgDRtKDYWtQ6EgjLTK635TMLQAhOiW7TrkNzT3C%2FuX3NwfvePKKhadCwENLQgGLqeOgbr53bKrVq5Rvom4hKb6CqYQed4N2L9l2urmSvh1goXyuEENhXvINOhP1UnzaXuckMyk7V3%2FZShhP2l9tyhrGQ0gR4GctbFco83AVb%2FIGXheIO%2FCkkXtcPmA4SQP&X-Amz-Signature=aa987bb9c9a3df0a6f5567f47cb819d3b6e243a46ad12e2c835efb35ce8f4297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSRCI7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICLAR%2BzMp3JbOE5em4f7G6e8qnKEhc2R22js6UHIXbf1AiAtXVm1%2BB5XRq5LgGejN3cmphJXgsxhNBwrakgsJLZqSCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiP%2FhBIglhvpnSJo1KtwDNjn9JYIkyyi5ZzRXAL89l2rfMgP0d%2F0z6MgUX77gXV3ZijcmRbJLNPaCXp30Y9As2Rq9pJwBn4f%2F%2BABDanzHZ%2FIhZjWHbWiDRzuxHXFizfDzWbTQl08cUJRIwwHAPBwKpWkxL7ARrwWPUyK16OWjbwBxE312zr0k2JC9rDFbDyHvAfWbYDj6wEwMNwpy4I1VOn44qHXfAcFFI07bXSVy6gXQXfYamNX0RqVH4OnJXrZHOHA9bVxw7knAzLDBKkvyfpzWcWIGB4ELq1tKCsGAcLmmi46G5uS6iOlO1rGR3BoFNyYpOZgi8MT0vboO%2FggoNbjPlfvAxiGN5tSkJurNB1e%2BiytYjQfOl3qoWTrpV0vVc5bAJBSEwb5EpD2PvBywquslxKl1ZKu1pLbdjD%2BAtcfqd%2FgmkpUUvoaZ1b%2BtALanu4FVjJ7GQGRJu9mRA06v7Ogz2%2B14nwxAPfT%2B%2BSBV1mX1ui3Dvd83Th5EFET5NBotN8coO%2BEizPQKAyrm2MLjD9AT5Lnr0k2%2FrHj3pi0pfp8nu1alFYtOdr4RQ67BoKbs4gYZJNamxcipqZsAxJCADAtwAq9495ih9v7LDQNJx%2FZFynDvttcRWJ27g9F63vldy2KXdb%2BL1z%2FYnZMw1LyOxAY6pgEn%2BYO7V76kYuZ%2BV8omPBwROdd9TUER3cYgDRtKDYWtQ6EgjLTK635TMLQAhOiW7TrkNzT3C%2FuX3NwfvePKKhadCwENLQgGLqeOgbr53bKrVq5Rvom4hKb6CqYQed4N2L9l2urmSvh1goXyuEENhXvINOhP1UnzaXuckMyk7V3%2FZShhP2l9tyhrGQ0gR4GctbFco83AVb%2FIGXheIO%2FCkkXtcPmA4SQP&X-Amz-Signature=91433f1a3b40cf0ae2ad113970df8d191071e5220923c5b97ceadb17b12fb1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSRCI7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICLAR%2BzMp3JbOE5em4f7G6e8qnKEhc2R22js6UHIXbf1AiAtXVm1%2BB5XRq5LgGejN3cmphJXgsxhNBwrakgsJLZqSCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiP%2FhBIglhvpnSJo1KtwDNjn9JYIkyyi5ZzRXAL89l2rfMgP0d%2F0z6MgUX77gXV3ZijcmRbJLNPaCXp30Y9As2Rq9pJwBn4f%2F%2BABDanzHZ%2FIhZjWHbWiDRzuxHXFizfDzWbTQl08cUJRIwwHAPBwKpWkxL7ARrwWPUyK16OWjbwBxE312zr0k2JC9rDFbDyHvAfWbYDj6wEwMNwpy4I1VOn44qHXfAcFFI07bXSVy6gXQXfYamNX0RqVH4OnJXrZHOHA9bVxw7knAzLDBKkvyfpzWcWIGB4ELq1tKCsGAcLmmi46G5uS6iOlO1rGR3BoFNyYpOZgi8MT0vboO%2FggoNbjPlfvAxiGN5tSkJurNB1e%2BiytYjQfOl3qoWTrpV0vVc5bAJBSEwb5EpD2PvBywquslxKl1ZKu1pLbdjD%2BAtcfqd%2FgmkpUUvoaZ1b%2BtALanu4FVjJ7GQGRJu9mRA06v7Ogz2%2B14nwxAPfT%2B%2BSBV1mX1ui3Dvd83Th5EFET5NBotN8coO%2BEizPQKAyrm2MLjD9AT5Lnr0k2%2FrHj3pi0pfp8nu1alFYtOdr4RQ67BoKbs4gYZJNamxcipqZsAxJCADAtwAq9495ih9v7LDQNJx%2FZFynDvttcRWJ27g9F63vldy2KXdb%2BL1z%2FYnZMw1LyOxAY6pgEn%2BYO7V76kYuZ%2BV8omPBwROdd9TUER3cYgDRtKDYWtQ6EgjLTK635TMLQAhOiW7TrkNzT3C%2FuX3NwfvePKKhadCwENLQgGLqeOgbr53bKrVq5Rvom4hKb6CqYQed4N2L9l2urmSvh1goXyuEENhXvINOhP1UnzaXuckMyk7V3%2FZShhP2l9tyhrGQ0gR4GctbFco83AVb%2FIGXheIO%2FCkkXtcPmA4SQP&X-Amz-Signature=5ec7e817f78cc2ad7b4fc10c73ff45fbd5f49363f2a3e1c9a35d6f8969df4439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYSRCI7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICLAR%2BzMp3JbOE5em4f7G6e8qnKEhc2R22js6UHIXbf1AiAtXVm1%2BB5XRq5LgGejN3cmphJXgsxhNBwrakgsJLZqSCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiP%2FhBIglhvpnSJo1KtwDNjn9JYIkyyi5ZzRXAL89l2rfMgP0d%2F0z6MgUX77gXV3ZijcmRbJLNPaCXp30Y9As2Rq9pJwBn4f%2F%2BABDanzHZ%2FIhZjWHbWiDRzuxHXFizfDzWbTQl08cUJRIwwHAPBwKpWkxL7ARrwWPUyK16OWjbwBxE312zr0k2JC9rDFbDyHvAfWbYDj6wEwMNwpy4I1VOn44qHXfAcFFI07bXSVy6gXQXfYamNX0RqVH4OnJXrZHOHA9bVxw7knAzLDBKkvyfpzWcWIGB4ELq1tKCsGAcLmmi46G5uS6iOlO1rGR3BoFNyYpOZgi8MT0vboO%2FggoNbjPlfvAxiGN5tSkJurNB1e%2BiytYjQfOl3qoWTrpV0vVc5bAJBSEwb5EpD2PvBywquslxKl1ZKu1pLbdjD%2BAtcfqd%2FgmkpUUvoaZ1b%2BtALanu4FVjJ7GQGRJu9mRA06v7Ogz2%2B14nwxAPfT%2B%2BSBV1mX1ui3Dvd83Th5EFET5NBotN8coO%2BEizPQKAyrm2MLjD9AT5Lnr0k2%2FrHj3pi0pfp8nu1alFYtOdr4RQ67BoKbs4gYZJNamxcipqZsAxJCADAtwAq9495ih9v7LDQNJx%2FZFynDvttcRWJ27g9F63vldy2KXdb%2BL1z%2FYnZMw1LyOxAY6pgEn%2BYO7V76kYuZ%2BV8omPBwROdd9TUER3cYgDRtKDYWtQ6EgjLTK635TMLQAhOiW7TrkNzT3C%2FuX3NwfvePKKhadCwENLQgGLqeOgbr53bKrVq5Rvom4hKb6CqYQed4N2L9l2urmSvh1goXyuEENhXvINOhP1UnzaXuckMyk7V3%2FZShhP2l9tyhrGQ0gR4GctbFco83AVb%2FIGXheIO%2FCkkXtcPmA4SQP&X-Amz-Signature=cee19bbb542560fca4364950bd4ba0b3f58821467b6df42d8bef79480fe361df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
